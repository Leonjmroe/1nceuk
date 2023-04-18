
from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TodoSerializer
from .models import Todo
from django.views import View
from django.http import HttpResponse, HttpResponseNotFound


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



# # Stripe

# STRIPE_SECRET_KEY = os.environ('STRIPE_SECRET_KEY')


# class StripeIntentView(View):
#     def post(self, request, **args, **kwargs):
#         try:
#             # data = json.loads(request.data)
#             intent = stripe.PaymentIntent.create(
#                 # amount=calculate_order_amount(data['items']),
#                 amount=
#                 currency='gbp',
#                 automatic_payment_methods={
#                     'enabled': True,
#                 },
#             )
#             return JsonResponse({
#                 'clientSecret': intent['client_secret']
#             })
#         except Exception as e:
#             return JsonResponse({ 'error': str(e) }), 403


# # views.py

# import stripe
# from django.conf import settings
# from django.shortcuts import render, redirect
# import os

# stripe.api_key = os.environ('STRIPE_SECRET_KEY')

# def charge(request):
#     if request.method == 'POST':
#         amount = int(request.POST['amount'])
#         token = request.POST['stripeToken']
#         try:
#             charge = stripe.Charge.create(
#                 amount=amount,
#                 currency='usd',
#                 description='Payment Description',
#                 source=token
#             )
#         except stripe.error.CardError as e:
#             return False, e.error.message
#         return True, 'Payment Successful'


heroku certs:auto
# This example sets up an endpoint using the Flask framework.
# Watch this video to get started: https://youtu.be/7Ul1vfmsDck.

import os
import stripe

from flask import Flask, redirect

app = Flask(__name__)

stripe.api_key = 'sk_test_26PHem9AhJZvU623DfE1x4sd'

@app.route('/create-checkout-session', methods=['POST'])
def create_checkout_session():
  session = stripe.checkout.Session.create(
    line_items=[{
      'price_data': {
        'currency': 'usd',
        'product_data': {
          'name': 'T-shirt',
        },
        'unit_amount': 2000,
      },
      'quantity': 1,
    }],
    mode='payment',
    success_url='http://localhost:4242/success',
    cancel_url='http://localhost:4242/cancel',
  )

  return redirect(session.url, code=303)

if __name__== '__main__':
    app.run(port=4242)
