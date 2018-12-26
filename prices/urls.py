from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^prices/$', prices, name='prices'),
    url(r'^prices/order/$', OrderFormView.as_view(), name='order'),
]
