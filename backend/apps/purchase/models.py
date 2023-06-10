from django.db import models


class EmailDistributionList(models.Model):
	email = models.CharField(max_length=100)
