from rest_framework import generics
from .models import Items
from .serializers import ItemsSerializer


class ItemsList(generics.ListCreateAPIView):
    queryset = Items.objects.all()
    serializer_class = ItemsSerializer

    def post(self, request, format=None):
        serializer = ItemsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# from rest_framework import viewsets 
# from .models import Items 
# from .serializers import ItemsSerializer

# class ItemsList(viewsets.ModelViewSet):

#     serializer_class = ItemsSerializer
#     queryset = Items.objects.all()

#     def perform_create(self, serializer):
#         serializer.save(created_by=self.request.user)

#     def get_queryset(self):
#         return self.queryset.filter(created_by=self.request.user)