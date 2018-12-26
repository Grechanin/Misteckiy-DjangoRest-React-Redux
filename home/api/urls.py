from django.conf.urls import url
from .views import (
						CarouselListAPI, 
						HomePageDetailAPI, 
						FaviconImageAPI, 
						ProjectHomeListAPI
					)

urlpatterns = [
    url(r'^$', HomePageDetailAPI.as_view(), name='home'),
    url(r'^carousel/$', CarouselListAPI.as_view(), name='carousel'),
    url(r'^favicon/$', FaviconImageAPI.as_view(), name='favicon'),
    url(r'^last-projects/$', ProjectHomeListAPI.as_view(), name='last-projects'),
]
