from django.db import models

# Create your models here.
class Diseases(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=200)
    local_names = models.TextField()
    other_livestock_affected = models.CharField(max_length=600)
    transmission = models.TextField()
    number_affected_in_herd = models.CharField(max_length=300)
    death_rate = models.CharField(max_length=300)
    predisposing_factors = models.TextField()
    key_signs_of_the_disease = models.TextField()
    other_signs = models.TextField()
    prevention = models.TextField()

def __str__(self):
    return self.name