from django.conf.urls import url
from .views import AboutUsDetailAPI

urlpatterns = [
    url(r'^$', AboutUsDetailAPI.as_view(), name='about_us'),
]
