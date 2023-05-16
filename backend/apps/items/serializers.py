from rest_framework import serializers
from .models import Items

class ItemsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Items
        fields = (
            'id',
        	'title',
        	'description',
        	'price',
        	'category',
        	'colour',
            'sale',
            'label',
        	'image1',
        	'image2',
        	'image3',
            'qty_small',
            'qty_medium',
            'qty_large',
            'qty_extra_large'
        )
