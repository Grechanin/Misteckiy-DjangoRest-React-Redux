from aboutus.models import AboutUs
from .serializers import AboutUsSerializer
from rest_framework import generics


class AboutUsDetailAPI(generics.RetrieveAPIView):
    queryset = AboutUs.objects.filter(is_active=True)
    serializer_class = AboutUsSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj