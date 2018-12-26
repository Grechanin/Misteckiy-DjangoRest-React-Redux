from django.conf.urls import url
from .views import contacts

urlpatterns = [
    url(r'^contacts/$', contacts, name='contacts'),
]
