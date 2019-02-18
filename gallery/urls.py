from django.conf.urls import url
from .views import gallery,gallery_react

urlpatterns = [
    url(r'^gallery/$', gallery_react, name='gallery'),
    # url(r'^gallery/$', gallery, name='gallery'),
]
