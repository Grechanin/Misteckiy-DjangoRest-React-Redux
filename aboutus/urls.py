from django.conf.urls import url
from .views import about_us

urlpatterns = [
    url(r'^about_us/$', about_us, name='about_us'),
]
