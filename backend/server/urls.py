from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from apps.accounts.urls import accounts_urlpatterns
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  
    path('api/items/', include('apps.items.urls')),
]

urlpatterns += accounts_urlpatterns  # add URLs for authentication (accounts api)
