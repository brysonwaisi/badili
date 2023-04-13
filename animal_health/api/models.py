from django.db import models

# Create your models here.
class Diseases(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    local_names = models.CharField(max_length=100)
    other_livestock_affected = models.CharField(max_length=100)
    transmission = models.TextField()
    number_affected_in_herd = models.CharField(max_length=100)
    death_rate = models.CharField(max_length=100)
    predisposing_factors = models.TextField()
    key_signs_of_the_disease = models.TextField()
    other_signs = models.TextField()
    prevention = models.TextField()

def __str__(self):
    return self.name