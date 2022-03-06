from django.db import models


class Items(models.Model):
	created = models.DateTimeField(auto_now_add=True)
	title = models.CharField(max_length=100)
	description = models.CharField(max_length=300)
	price = models.IntegerField()
	category = models.CharField(max_length=100)
	size = models.CharField(max_length=100)
	colour = models.CharField(max_length=100)
	quantity = models.IntegerField()
	image1 = models.ImageField() 
	image2 = models.ImageField() 
	image3 = models.ImageField() 
