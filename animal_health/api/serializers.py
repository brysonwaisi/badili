from rest_framework import serializers
from .models import Diseases


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Diseases
        fields = ('id', 'name', 'local_names', 'other_livestock_affected', 'transmission',
                  'number_affected_in_herd', 'death_rate', 'predisposing_factors', 
                  'key_signs_of_the_disease', 'other_signs', 'prevention')