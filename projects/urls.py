from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^projects/$', projects, name='projects'),
    url(r'^project/(?P<id>\d+)/$', project_detail, name='project_detail'),
    url(r'^category/(?P<id>\d+)/$', projects_in_category, name='projects_in_category'),
]
