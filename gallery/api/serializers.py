from gallery.models import Gallery
from projects.models import ProjectImage
from rest_framework import serializers

class GallerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallery
        fields = (
            'tab_title',  
            'title',
            'short_description',
            'description',
        )

class GalleryImagesListSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()
    image_thumbnail_url = serializers.SerializerMethodField()
    image_project_name = serializers.SerializerMethodField()
    class Meta:
        model = ProjectImage
        fields = (
            'image_project_name',
            'image_url',  
        	'image_thumbnail_url',
        )

    def get_image_url(self, obj):
        return obj.image.url

    def get_image_thumbnail_url(self, obj):
        return obj.image_thumbnail.url

    def get_image_project_name(self, obj):
        return obj.project.name
