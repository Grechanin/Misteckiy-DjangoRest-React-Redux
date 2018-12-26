from contacts.models import Contacts
from .serializers import ContactsDetailSerializer
from rest_framework import generics


class ContactsDetailAPI(generics.RetrieveAPIView):
    queryset = Contacts.objects.filter(is_active=True)
    serializer_class = ContactsDetailSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj