from django.conf.urls import url
from .views import (DesignPricesDetailAPI, 
					DesignPricesListAPI, 
					DesignPricesCategoriesAPI, 
					OrderFormAPI
					)

urlpatterns = [
    url(r'^$', DesignPricesDetailAPI.as_view(), name='detail-prices'),
    url(r'^categories_description/$', DesignPricesListAPI.as_view(), name='categories_description-prices'),
    url(r'^categories/$', DesignPricesCategoriesAPI.as_view(), name='category-prices'),
    url(r'^order_create/$', OrderFormAPI.as_view(), name='order_create-prices'),
]
