from aboutus.models import AboutUs
from rest_framework import serializers


class AboutUsSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutUs
        fields = (
        	'tab_title', 
        	'title', 
        	'short_description', 
        	'description', 
        )
