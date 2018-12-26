from projects.models import (
                                PageProjectsDescription,
                                Project,
                                ProjectCategory,
                                ProjectImage            
                            )
from .serializers import (
                            ProjectsPageDetailSerializer,
                            ProjectsListSerializer,
                            ProjectDetailSerializer,
                            ProjectCategoryListSerializer,
                            ProjectCategoryDetailSerializer
						)
from rest_framework import generics


class ProjectsPageDetailAPI(generics.RetrieveAPIView):
    queryset = PageProjectsDescription.objects.filter(is_active=True)
    serializer_class = ProjectsPageDetailSerializer
    # permission_classes = (IsAdminUser,)
    def get_object(self):
    	queryset = self.get_queryset()
    	obj = queryset[0]
    	return obj


class ProjectsListAPI(generics.ListAPIView):
    queryset = Project.objects.filter(is_active=True).order_by('-update')
    serializer_class = ProjectsListSerializer


class ProjectDetailAPI(generics.RetrieveAPIView):
    queryset = Project.objects.filter(is_active=True).order_by('-update')
    serializer_class = ProjectDetailSerializer
    lookup_field = 'id'



class ProjectCategoryListAPI(generics.ListAPIView):
    queryset = ProjectCategory.objects.filter(is_active=True)
    serializer_class = ProjectCategoryListSerializer

class ProjectCategoryDetailAPI(generics.RetrieveAPIView):
    queryset = ProjectCategory.objects.filter(is_active=True)
    serializer_class = ProjectCategoryDetailSerializer
    lookup_field = 'id'


