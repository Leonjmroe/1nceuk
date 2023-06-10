import stripe
import json
from django.conf import settings
from rest_framework import generics
from django.views import View
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from .serializers import EmailSaveSerializer
from .models import EmailDistributionList
from rest_framework.response import Response
from rest_framework import status
from django.http import HttpResponse


secret_key_test = "sk_test_51MphC6DH2VJ3YG9v8aQPBWJF6Cqfbsv6SYWxq6rt4DJkyCR0zlJAxJO7mdQ8v5uN0pV86yT3cSby6nJmJmI1qWqH002bH54Qd6"
secret_key = "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"



@method_decorator(csrf_exempt, name='dispatch')
class StripePaymentIntent(View):

    def post(self, request, *args, **kwargs):

        stripe.api_key = secret_key_test
        data_unicode = request.body.decode('utf-8')
        data = json.loads(data_unicode)

        customer = stripe.Customer.create(
            email = data.get('email'),
            name = data.get('first_name') + ' ' + data.get('last_name'),
            phone = data.get('phone_number'),
            address = {
                'city': data.get('city'),
                'country': data.get('country'),
                'postal_code': data.get('postcode'),
                'state': data.get('area'),
                'line1': data.get('address_line_1'),
                'line2': data.get('address_line_2') + '; ' + data.get('address_line_3')
            })

        payment_intent = stripe.PaymentIntent.create(
            customer = customer['id'],
            currency = 'gbp', 
            amount = data.get('amount'),
            receipt_email = data.get('email'),
            automatic_payment_methods = { 'enabled': True },
            description = data.get('data_string')
        )

        return JsonResponse({ 'payment_intent': payment_intent })




@method_decorator(csrf_exempt, name='dispatch')
class EmailDistributionListSave(generics.ListCreateAPIView):
    
    queryset = EmailDistributionList.objects.all()
    serializer_class = EmailSaveSerializer

    def post(self, request, format=None):
        print(request.data)
        serializer = EmailSaveSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


