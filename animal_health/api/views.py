from django.shortcuts import render
from rest_framework import generics
from .serializers import DiseaseSerializer
from .models import Diseases

# Create your views here.
class DiseaseView(generics.CreateAPIView):
    queryset = Diseases.objects.all()
    serializer_class = DiseaseSerializer