from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from apps.accounts.urls import accounts_urlpatterns
from django.conf.urls.static import static
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  
    path('api/items/', include('apps.items.urls')),
    re_path(r'^$', TemplateView.as_view(template_name='index.html')),  
    re_path(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += accounts_urlpatterns  

