from django.urls import include, path
from rest_framework import routers
from . import views

router = routers.DefaultRouter()

urlpatterns = [
    path('', include(router.urls)),
    path('item-list/', views.ItemsList.as_view()),
    path('item-list/<int:pk>/', views.ItemsList.as_view()),
    path('item-bought/', views.item_bought),
]


