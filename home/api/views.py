from home.models import Carousel, InteriorDesign, FaviconImage
from projects.models import Project
from .serializers import (
							CarouselSerializer,
							HomePageDetailSerializer,
							FaviconImageSerializer,
							ProjectHomeListSerializer
						)
from rest_framework import generics


class HomePageDetailAPI(generics.RetrieveAPIView):
    queryset = InteriorDesign.objects.filter(is_active=True)
    serializer_class = HomePageDetailSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class FaviconImageAPI(generics.RetrieveAPIView):
    queryset = FaviconImage.objects.filter(is_active=True)
    serializer_class = FaviconImageSerializer
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class CarouselListAPI(generics.ListAPIView):
    queryset = Carousel.objects.filter(is_active=True)
    serializer_class = CarouselSerializer

class ProjectHomeListAPI(generics.ListAPIView):
    queryset = Project.objects.filter(is_active=True).order_by('-update')[:6]
    serializer_class = ProjectHomeListSerializer