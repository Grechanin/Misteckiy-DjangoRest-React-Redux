"""arthouse URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView
from home import views
from gypsumProducts.views import product_detail_react
from projects.views import project_detail_react
from aboutus.views import about_us_react




urlpatterns = [ 
    url(r'^admin/', admin.site.urls),
    url(r'^$', TemplateView.as_view(template_name='react/react.html')), 
    url(r'^api/about_us/', include('aboutus.api.urls', namespace='about_us-api')),
    url(r'^api/design-prices/', include('prices.api.urls', namespace='design-prices-api')),
    url(r'^api/contacts/', include('contacts.api.urls', namespace='contacts-api')),
    url(r'^api/home/', include('home.api.urls', namespace='home-api')),
    url(r'^api/gallery/', include('gallery.api.urls', namespace='gallery-api')),
    url(r'^api/projects/', include('projects.api.urls', namespace='projects-api')),
    url(r'^api/gypsum/', include('gypsumProducts.api.urls', namespace='gypsum-api')),
    url(r'^api/orders/', include('orders.api.urls', namespace='orders-api')),

    # url(r'^product/(?P<id>\d+)/$', product_detail_react, name='product_detail_react'),
    # url(r'^projects/(?P<id>\d+)/$', project_detail_react, name='project_detail'),
    # url(r'^about_us/$', about_us_react, name='about_us'),
    url(r'^ckeditor/', include('ckeditor_uploader.urls')),

    # url(r'^$', views.home, name='home'),
    url(r'^', include('contacts.urls', namespace='contacts')),
    url(r'^', include('gallery.urls', namespace='gallery')),
    url(r'^', include('gypsumProducts.urls', namespace='gypsum')),
    # url(r'^', include('orders.urls', namespace='orders')),
    url(r'^', include('prices.urls', namespace='prices')),
    url(r'^', include('projects.urls', namespace='projects')),
    url(r'^', include('aboutus.urls', namespace='about_us')),
]
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

urlpatterns += [
    # url(r'(?P<path>.*)', TemplateView.as_view(template_name='react/react.html'))
]
