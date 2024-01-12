from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AboutSerializer
from .models import Restaurant

@api_view(['GET'])
def display(re):
   a=Restaurant.objects.all()
   empdata=AboutSerializer(a,many=True)
   return Response(empdata.data)
