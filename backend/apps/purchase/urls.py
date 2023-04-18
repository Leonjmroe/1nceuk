from django.urls import path
from .views import StripeChargeView

urlpatterns = [
    path('', StripeChargeView.as_view(), name='stripe_charge'),
]
