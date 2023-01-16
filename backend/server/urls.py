from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from apps.accounts.urls import accounts_urlpatterns
from django.conf.urls.static import static
from django.conf.urls import url
from . import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', TemplateView.as_view(template_name='index.html')),  # dont need on if two below are on 
    path('api/items/', include('apps.items.urls')),
    # url(r'^/', TemplateView.as_view(template_name='index.html')),
    # url(r'^$', TemplateView.as_view(template_name='index.html')),   # need on with below to fix url live bug 
    # url(r'^(?:.*)/?$', TemplateView.as_view(template_name='index.html')), # cant log in when on but need on for url live bug
# ] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT) +
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += accounts_urlpatterns  

