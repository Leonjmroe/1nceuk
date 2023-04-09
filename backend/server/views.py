
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound
import os
import stripe
import json

# # The viewsets base class provides the implementation for CRUD operations by default,
# # what we had to do was specify the serializer class and the query set.
# class TodoView(viewsets.ModelViewSet):
#     serializer_class = TodoSerializer
#     queryset = Todo.objects.all()

# # Add this CBV
# class Assets(View):

#     def get(self, _request, filename):
#         path = os.path.join(os.path.dirname(__file__), 'static', filename)

#         if os.path.isfile(path):
#             with open(path, 'rb') as file:
#                 return HttpResponse(file.read(), content_type='application/javascript')
#         else:
#             return HttpResponseNotFound()



# Stripe

STRIPE_SECRET_KEY = os.environ('STRIPE_SECRET_KEY')


class StripeIntentView(View):
    def post(self, request, **args, **kwargs):
        try:
            # data = json.loads(request.data)
            intent = stripe.PaymentIntent.create(
                # amount=calculate_order_amount(data['items']),
                amount=
                currency='gbp',
                automatic_payment_methods={
                    'enabled': True,
                },
            )
            return JsonResponse({
                'clientSecret': intent['client_secret']
            })
        except Exception as e:
            return JsonResponse({ 'error': str(e) }), 403
