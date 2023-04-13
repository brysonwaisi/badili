from django.urls import path
from .views import DiseaseView


urlpatterns = [
    path('api/diseases/', DiseaseView.as_view()),
    path('api/diseases/<int:pk>/', DiseaseView.as_view())
]