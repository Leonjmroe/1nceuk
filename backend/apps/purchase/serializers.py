from rest_framework import serializers
from .models import EmailDistributionList

class EmailSaveSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmailDistributionList
        fields = (
        	'email',
        )
