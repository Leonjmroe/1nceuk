from rest_framework import generics
from .models import Items
from .serializers import ItemsSerializer
from rest_framework.response import Response
from rest_framework import status
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse
import json


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


@csrf_exempt
def item_bought(request, *args, **kwargs):
    if request.method == 'PUT':
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        item_id = body['id']
        item = Items.objects.get(id=item_id)

        qty_small = body['qty_small']
        qty_medium = body['qty_medium']
        qty_large = body['qty_large']
        qty_extra_large = body['qty_extra_large']
        setattr(item, 'qty_small', getattr(item, 'qty_small') - qty_small)
        setattr(item, 'qty_medium', getattr(item, 'qty_medium') - qty_medium)
        setattr(item, 'qty_large', getattr(item, 'qty_large') - qty_large)
        setattr(item, 'qty_extra_large', getattr(item, 'qty_extra_large') - qty_extra_large)

        print(item_id, qty_small, qty_medium, qty_large, qty_extra_large)

        item.save()
        return HttpResponse(status=200)
    else:
        return HttpResponseNotAllowed(['PUT'])

