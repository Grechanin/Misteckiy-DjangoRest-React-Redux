from prices.models import Prices, ProiceCategoryDescription, PriceCategory, OrderModel
from rest_framework import serializers


class DesignPricesListSerializer(serializers.ModelSerializer):
    category = serializers.ReadOnlyField(source='category.name')
    class Meta:
        model = ProiceCategoryDescription
        fields = (
            'category',  
            'title',  
            'description', 
        )

class DesignPricesCategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = PriceCategory
        fields = (
            'name',
        )

class DesignPricesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prices
        fields = (
            'tab_title',  
            'title',
            'short_description',
            'description', 
        )

class OrderFormSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderModel
        fields = (
            'order_name',  
            'client_name',
            'phone_number',
            'email', 
            'coment', 
        )