from django.urls import path
from .views import StripePaymentIntent, EmailDistributionListSave

urlpatterns = [
    path('create-payment-intent/', StripePaymentIntent.as_view(), name='stripe_intent'),
    path('distribution-list-email-save/', EmailDistributionListSave.as_view(), name='email_save'),
]
