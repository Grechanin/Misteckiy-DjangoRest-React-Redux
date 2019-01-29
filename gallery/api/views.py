from gallery.models import Gallery
from .serializers import GallerySerializer, GalleryImagesListSerializer
from .pagination import GalleryImagesListPagination
from projects.models import ProjectImage
from rest_framework import generics





class GalleryDetailAPI(generics.RetrieveAPIView):
    queryset = Gallery.objects.filter(is_active=True)
    serializer_class = GallerySerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class GalleryImagesListAPI(generics.ListAPIView):
    queryset = ProjectImage.objects.filter(is_active=True).order_by('-update')
    serializer_class = GalleryImagesListSerializer
    pagination_class = GalleryImagesListPagination