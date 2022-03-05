from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView
from apps.accounts.urls import accounts_urlpatterns
from apps.notes.urls import notes_urlpatterns
# from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from . import settings

# from rest_framework import routers                      # add this
# from todo import views                                  # add this

# router = routers.DefaultRouter()                        # add this
# router.register(r'todos', views.TodoView, 'todo') 


urlpatterns = [
    # (r'^static/(?P<path>.*)$', 'django.views.static.serve', {'document_root': settings.STATIC_ROOT}),
    path('admin/', admin.site.urls),
    #path('', TemplateView.as_view(template_name='index.html')), #content_type='application/javascript' 
]

urlpatterns += accounts_urlpatterns # add URLs for authentication
urlpatterns += notes_urlpatterns    # notes URLs
# urlpatterns += staticfiles_urlpatterns()