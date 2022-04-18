from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
    path('item-list/', views.ItemsList.as_view())
]


# from django.conf.urls import url, include 
# from rest_framework.routers import DefaultRouter
# from .views import ItemsList

# router = DefaultRouter()
# router.register("items", ItemsList, basename="items")
# items_urlpatterns = [url("api/items/item-list", include(router.urls))]