from rest_framework import serializers
from .models import Items

class ItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Items
        fields = (
        	'title',
        	'description',
        	'price',
        	'category',
        	'size',
        	'colour',
        	'quantity',
        	'image1',
        	'image2',
        	'image3'
        )
