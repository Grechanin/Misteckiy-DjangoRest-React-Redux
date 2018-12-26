from django.conf.urls import url
from .views import GalleryDetailAPI, GalleryImagesListAPI

urlpatterns = [
    url(r'^$', GalleryDetailAPI.as_view(), name='gallery'),
    url(r'^images/$', GalleryImagesListAPI.as_view(), name='images'),
]
