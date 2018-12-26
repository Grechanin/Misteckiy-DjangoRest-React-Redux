from django.conf.urls import url
from .views import ContactsDetailAPI

urlpatterns = [
    url(r'^$', ContactsDetailAPI.as_view(), name='contacts'),
]
