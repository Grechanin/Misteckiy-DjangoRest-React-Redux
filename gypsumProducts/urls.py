from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^gypsum_products/$', gypsum_products, name='gypsum_products'),
    url(r'^gypsum_product/(?P<id>\d+)/$', gypsum_detail, name='gypsum_detail'),
    url(r'^gypsum_category/(?P<id>\d+)/$', gypsum_in_category, name='gypsum_in_category'),
]
