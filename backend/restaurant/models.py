from django.db import models

class Restaurant(models.Model):
    sno = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    details = models.TextField()
    img=models.CharField(max_length=20,null=True)

    def __str__(self):
        return self.name