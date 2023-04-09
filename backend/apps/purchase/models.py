from django.db import models

class Purchase(models.Model):
	name = model.CharField(max_length=100)
	price = model.IntegerField(default=0)


	def __str__(self):
		return self.name