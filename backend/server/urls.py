from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from apps.accounts.urls import accounts_urlpatterns
from apps.notes.urls import notes_urlpatterns
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  
]

urlpatterns += accounts_urlpatterns # add URLs for authentication
urlpatterns += notes_urlpatterns    # notes URLs