from rest_framework.views import APIView
from django.http.response import JsonResponse, Http404
from .serializers import DiseaseSerializer
from .models import Diseases
from rest_framework.response import Response


# Create your views here.
class DiseaseView(APIView):

    def get_disease(self, pk):
        try:
            disease = Diseases.objects.get(id=pk)
            return disease
        except:
            raise JsonResponse("Disease Does Not Exist!", safe=False)

    def get(self, request, pk=None):
        if pk:
            data = self.get_disease(pk)
            serializer = DiseaseSerializer(data)
        else:
            data = Diseases.objects.all() 
            serializer = DiseaseSerializer(data, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        data = request.data
        serializer = DiseaseSerializer(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse("Disease Input Successful!", safe=False)
        return JsonResponse('Failed to add disease!', safe=False)
    
    def put(self, request, pk=None):
        disease_to_update = Diseases.objects.get(id=pk)
        serializer = DiseaseSerializer(instance=disease_to_update, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse('Disease Updated Successfully!', safe=False)
        return JsonResponse('Failed to update Disease!')
    
    def delete(self, request, pk=None):
        try:
            disease_to_delete = Diseases.objects.get(id=pk)
            disease_to_delete.delete()
            return JsonResponse("Disease Deleted Successfully!", safe=False)
        except Diseases.DoesNotExist:
            return JsonResponse("Disease Does Not Exist!", safe=False)