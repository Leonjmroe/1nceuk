from django.db import models


class Items(models.Model):
	title = models.CharField(max_length=100)
	description = models.CharField(max_length=300)
	price = models.FloatField()
	category = models.CharField(max_length=100)
	colour = models.CharField(max_length=100)
	image1 = models.ImageField() 
	image2 = models.ImageField() 
	image3 = models.ImageField() 
	qty_small = models.IntegerField(default=0)
	qty_medium = models.IntegerField(default=0)
	qty_large = models.IntegerField(default=0)
	qty_extra_large = models.IntegerField(default=0)
