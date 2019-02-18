from django.conf.urls import url
from .views import *


urlpatterns = [
    url(r'^projects/$', projects_react, name='projects'),
    # url(r'^projects/$', projects, name='projects'),
    url(r'^project/(?P<id>\d+)/$', project_detail_react, name='project_detail'),
    url(r'^projects/(?P<id>\d+)/$', project_detail_react, name='project_detail'),
    url(r'^category/(?P<id>\d+)/$', projects_in_category_react, name='projects_in_category'),
    # url(r'^category/(?P<id>\d+)/$', projects_in_category, name='projects_in_category'),
]
