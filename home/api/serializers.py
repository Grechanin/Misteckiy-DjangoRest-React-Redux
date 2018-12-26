from home.models import Carousel, InteriorDesign, FaviconImage
from projects.models import Project
from rest_framework import serializers

class FaviconImageSerializer(serializers.ModelSerializer):
    favicon_url = serializers.SerializerMethodField()
    class Meta:
        model = FaviconImage
        fields = (
            'id',
            'name',  
            'favicon_url',
        )

    def get_favicon_url(self, obj):
        return obj.favicon.url


class HomePageDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = InteriorDesign
        fields = (
            'tab_title',  
            'title',
            'short_description',
            'description',
        )


class CarouselSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()
    class Meta:
        model = Carousel
        fields = (
            'title',  
            'img_url',
        )

    def get_img_url(self, obj):
        return obj.img.url


class ProjectHomeListSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()
    project_url = serializers.HyperlinkedIdentityField(view_name='projects-api:detail', lookup_field = 'id')
    class Meta:
        model = Project
        fields = (
            'id',
            'name',  
            'img_url',
            'project_url',
        )


    def get_img_url(self, obj):
        project_images = obj.projectimage_set.all()
        for img in project_images:
            if img.is_main:
                return img.image.url
        return None

