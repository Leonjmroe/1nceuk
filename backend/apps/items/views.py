from rest_framework import generics
from .models import Items
from .serializers import ItemsSerializer
from rest_framework.response import Response
from rest_framework import status


class ItemsList(generics.ListCreateAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def post(self, request, format=None):
        serializer = ItemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        mode = request.data.get('mode')
        item = Items.objects.get(pk=pk) 
        item.delete()
        return Response(mode, status=status.HTTP_200_OK)

    def put(self, request, pk):
        item = Items.objects.get(pk=pk) 
        serializer = ItemsSerializer(item, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


