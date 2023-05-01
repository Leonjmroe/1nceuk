from django.urls import path
from .views import StripeChargeView, PaymentIntentView

urlpatterns = [
    path('', StripeChargeView.as_view(), name='stripe_charge'),
    path('create-payment-intent/', PaymentIntentView.as_view(), name='payment_intent'),
]
