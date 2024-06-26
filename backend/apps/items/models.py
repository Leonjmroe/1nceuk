from django.db import models
from .storages import ItemStorage


class Items(models.Model):
	title = models.CharField(max_length=100)
	description = models.CharField(max_length=300)
	price = models.FloatField()
	category = models.CharField(max_length=100)
	colour = models.CharField(max_length=100)
	sale = models.IntegerField(default=0)
	label = models.CharField(max_length=100, default='None', null=True)
	image1 = models.ImageField()
	image2 = models.ImageField()
	image3 = models.ImageField()
	qty_small = models.IntegerField(default=0)
	qty_medium = models.IntegerField(default=0)
	qty_large = models.IntegerField(default=0)
	qty_extra_large = models.IntegerField(default=0)
	featured_checked = models.BooleanField(default=False)

