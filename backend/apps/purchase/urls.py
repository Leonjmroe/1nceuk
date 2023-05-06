from django.urls import path
from .views import StripeChargeView, StripePaymentIntent

urlpatterns = [
    path('', StripeChargeView.as_view(), name='stripe_charge'),
    path('create-payment-intent/', StripePaymentIntent.as_view(), name='stripe_intent'),
]
