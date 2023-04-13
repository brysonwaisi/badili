from django.contrib import admin
from .models import Diseases

# Register your models here.
model_list = [Diseases]
admin.site.register(model_list)