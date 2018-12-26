from django.conf.urls import url
from .views import (
						ProjectsPageDetailAPI,
						ProjectsListAPI,
						ProjectDetailAPI,
						ProjectCategoryListAPI,
						ProjectCategoryDetailAPI
					)

urlpatterns = [
    url(r'^$', ProjectsPageDetailAPI.as_view(), name='projects'),
    url(r'^projects-list/$', ProjectsListAPI.as_view(), name='projects-list'),
    url(r'^project/(?P<id>\d+)/$', ProjectDetailAPI.as_view(), name='detail'),
    url(r'^categories/$', ProjectCategoryListAPI.as_view(), name='categories'),
    url(r'^categories-detail/(?P<id>\d+)/$', ProjectCategoryDetailAPI.as_view(), name='categories-detail'),
]
