from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^shop/$', products_react, name='shop'),
    url(r'^gypsum_products/$', products_react, name='gypsum_products'),
    url(r'^gypsum_product/(?P<id>\d+)/$', product_detail_react, name='gypsum_detail'),
    url(r'^product/(?P<id>\d+)/$', product_detail_react, name='product_detail'),
    url(r'^shop-category/(?P<id>\d+)/$', product_in_category_react, name='gypsum_in_category'),
    url(r'^gypsum_category/(?P<id>\d+)/$', product_in_category_react, name='gypsum_in_category'),
]
