from django.urls import path
from .views import DiseaseView
urlpatterns = [
    path('', DiseaseView.as_view())
]