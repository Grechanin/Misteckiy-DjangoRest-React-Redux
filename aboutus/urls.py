from django.conf.urls import url
from .views import about_us, about_us_react

urlpatterns = [
    url(r'^about_us/$', about_us_react, name='about_us'),
    # url(r'^about_us/$', about_us, name='about_us'),
]
