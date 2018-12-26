from projects.models import (
                                PageProjectsDescription,
                                Project,
                                ProjectCategory,
                                ProjectImage            
                            )
from rest_framework import serializers


class ProjectsPageDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = PageProjectsDescription
        fields = (
            'id',
            'tab_title',  
            'title',
            'sub_title',
            'short_description',
            'description',
            'is_active', 
            'timestamp', 
            'update'
        )



class ProjectsListSerializer(serializers.ModelSerializer):
    img_url = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = (
            'id',
            'name',  
            'img_url'
        )


    def get_img_url(self, obj):
        project_images = obj.projectimage_set.all()
        for img in project_images:
            if img.is_main:
                return img.image.url
        return None


class ProjectDetailSerializer(serializers.ModelSerializer):
    project_images = serializers.SerializerMethodField()
    category_name = serializers.SerializerMethodField()
    project_thumbnail_images = serializers.SerializerMethodField()
    main_image_url = serializers.SerializerMethodField()
    class Meta:
        model = Project
        fields = (
            'id',
            'name',  
            'project_images',
            'project_thumbnail_images',
            'main_image_url',
            'tab_title',
            'category',
            'category_name',
            'short_description',
        	'description',
        )

    def get_category_name(self, obj):
        category_name = obj.category.name
        return category_name

    def get_project_images(self, obj):
        project_images_queryset = obj.projectimage_set.all()
        project_images = []
        for img in project_images_queryset:
            project_images.append(img.image.url)
        return project_images

    def get_project_thumbnail_images(self, obj):
        project_images_queryset = obj.projectimage_set.all()
        project_thumbnail_images = []
        for img in project_images_queryset:
            project_thumbnail_images.append(img.image_thumbnail.url)
        return project_thumbnail_images

    def get_main_image_url(self, obj):
        project_images_queryset = obj.projectimage_set.all()

        for img in obj.projectimage_set.all():
            if img.is_main:
                main_image_url = img.image.url
        return main_image_url


class ProjectCategoryListSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectCategory
        fields = (
            'id',
            'name',
        )


class ProjectCategoryDetailSerializer(serializers.ModelSerializer):
    projects = serializers.SerializerMethodField()
    tab_title = serializers.SerializerMethodField()
    class Meta:
        model = ProjectCategory
        fields = (
            'title',
            'tab_title',
            'short_description',
            'description',
            'projects',
        )
    def get_projects(self, obj):
        projects_queryset = obj.project_set.all()
        projects = []
        for prj in projects_queryset:
            project = {}
            project['id'] = prj.id
            project['name'] = prj.name
            project_images_queryset = prj.projectimage_set.all()
            for img in project_images_queryset:
                if img.is_main:
                    project['img_url'] = img.image.url
            projects.append(project)
        return projects

    def get_tab_title(self,obj):
        projects_page_description_model = PageProjectsDescription.objects.filter(is_active=True)[0]
        projects_tab_title = projects_page_description_model.tab_title
        return projects_tab_title


