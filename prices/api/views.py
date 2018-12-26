from prices.models import Prices, ProiceCategoryDescription, PriceCategory
from .serializers import (  DesignPricesDetailSerializer, 
                            DesignPricesListSerializer, 
                            DesignPricesCategoriesSerializer, 
                            OrderFormSerializer
                            )
from rest_framework import generics


class DesignPricesListAPI(generics.ListAPIView):
    queryset = ProiceCategoryDescription.objects.filter(is_active=True)
    serializer_class = DesignPricesListSerializer
    # permission_classes = (IsAdminUser,)

class DesignPricesCategoriesAPI(generics.ListAPIView):
    queryset = PriceCategory.objects.filter(is_active=True)
    serializer_class = DesignPricesCategoriesSerializer
    # permission_classes = (IsAdminUser,)


class DesignPricesDetailAPI(generics.RetrieveAPIView):
    queryset = Prices.objects.filter(is_active=True)
    serializer_class = DesignPricesDetailSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class OrderFormAPI(generics.CreateAPIView):
    # queryset = OrderModel.objects.filter(is_active=True)
    serializer_class = OrderFormSerializer
    # permission_classes = (IsAdminUser,)