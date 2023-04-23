import stripe
from django.conf import settings
from django.views import View
from django.http import JsonResponse, HttpResponseBadRequest
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

secret_key_test = "sk_test_51MphC6DH2VJ3YG9v8aQPBWJF6Cqfbsv6SYWxq6rt4DJkyCR0zlJAxJO7mdQ8v5uN0pV86yT3cSby6nJmJmI1qWqH002bH54Qd6"
secret_key = "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"


@method_decorator(csrf_exempt, name='dispatch')
class StripeChargeView(View):
    def post(self, request, *args, **kwargs):

        stripe.api_key = secret_key

        card_details = request.POST.get('card_details')
        amount = request.POST.get('amount')
        email = request.POST.get('email')
        customer_id = request.POST.get('customer_id')
        item_ids = request.POST.get('items_ids')
        address_line_1 = request.POST.get('address_line_1')
        address_line_2 = request.POST.get('address_line_2')
        address_line_3 = request.POST.get('address_line_3')
        area = request.POST.get('area')
        postcode = request.POST.get('postcode')
        city = request.POST.get('city')
        country = request.POST.get('country')
        phone_number = request.POST.get('phone_number')


        customer = stripe.Customer.create(
            email=email,
            source=customer_id
        )
        
        try:
            # Create a Stripe charge object
            charge = stripe.Charge.create(
                currency='gbp',
                amount=100,
                type=card_details,
                customer=customer,
                description=item_ids
            )
            
            # Return a JSON response with the charge ID
            return JsonResponse({'charge_id': charge.id})
        
        except stripe.error.CardError as e:
            # Display an error message to the user
            return JsonResponse({'error': str(e)})
