from django.conf.urls import url
from .views import contacts, contacts_react

urlpatterns = [
    url(r'^contacts/$', contacts_react, name='contacts'),
    # url(r'^contacts/$', contacts, name='contacts'),
]
