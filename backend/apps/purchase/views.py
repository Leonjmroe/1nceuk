import stripe
import json
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

        stripe.api_key = secret_key_test

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)

        payment_method_id = body_data.get('payment_method_id')
        amount = body_data.get('amount')
        email = body_data.get('email')
        customer_id = body_data.get('customer_id')
        item_ids = body_data.get('items_ids')
        address_line_1 = body_data.get('address_line_1')
        address_line_2 = body_data.get('address_line_2')
        address_line_3 = body_data.get('address_line_3')
        area = body_data.get('area')
        postcode = body_data.get('postcode')
        city = body_data.get('city')
        country = body_data.get('country')
        phone_number = body_data.get('phone_number')


        customer = stripe.Customer.create(
          name=customer_id,
          email=email
          # address={
          #   "line1": address_line_1,
          #   "line2": address_line_2,
          #   "city": city,
          #   "state": area,
          #   "postal_code": postcode,
          #   "country": country
          # },
          # payment_method=card_details,
          # invoice_settings={
          #   "default_payment_method": card_details,
          # }
        )
    

        payment_intent = stripe.PaymentIntent.create(
            customer=customer, 
            payment_method=payment_method_id,  
            currency='gbp', 
            amount=amount , 
            confirm=True)

        try:
            payment_intent.confirm()
            response = 'PaymentIntent was confirmed successfully'
        except stripe.error.CardError as e:
            response = e
            pass
        except stripe.error.StripeError as e:
            response = e
            pass

        return JsonResponse({
            'payment_intent': payment_intent,
            'response': response
        })
   
@method_decorator(csrf_exempt, name='dispatch')
class StripePaymentIntent(View):
    def post(self, request, *args, **kwargs):

        stripe.api_key = secret_key_test

        body_unicode = request.body.decode('utf-8')
        body_data = json.loads(body_unicode)
        amount = body_data.get('amount')

        payment_intent = stripe.PaymentIntent.create(
            currency='gbp', 
            amount=amount,
            automatic_payment_methods={
              'enabled': True,
            },
        )


        return JsonResponse({
            'payment_intent': payment_intent,
        })


