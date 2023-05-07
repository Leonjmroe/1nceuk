from django.urls import path
from .views import SendEmail

urlpatterns = [
    path('payment_confirmation/', SendEmail),
]
