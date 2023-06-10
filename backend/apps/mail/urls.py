from django.urls import path
from .views import SendEmail

urlpatterns = [
    path('send_email/', SendEmail),
]
