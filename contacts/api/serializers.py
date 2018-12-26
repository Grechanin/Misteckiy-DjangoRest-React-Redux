from contacts.models import Contacts
from rest_framework import serializers

class ContactsDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contacts
        fields = (
            'tab_title',  
        	'address_title',
            'address',
        	'email_title',
            'email',
            'title_phone_for_customers',
            'phone_for_customers',
            'title_phone_for_partners',
            'phone_for_partners',
        	'is_active', 
        )