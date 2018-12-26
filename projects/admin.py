from django.contrib import admin
from .models import *


class ProjectCategoryAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in ProjectCategory._meta.fields]

    class Meta:
        model = ProjectCategory


admin.site.register(ProjectCategory, ProjectCategoryAdmin)

class ProjectImageInline(admin.TabularInline):
    model = ProjectImage
    extra = 0


class ProjectAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in Project._meta.fields]
    inlines = [ProjectImageInline]

    class Meta:
        model = Project


admin.site.register(Project, ProjectAdmin)


class ProjectImageAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in ProjectImage._meta.fields]

    class Meta:
        model = ProjectImage


admin.site.register(ProjectImage, ProjectImageAdmin)


class PageProjectsDescriptionAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in PageProjectsDescription._meta.fields]

    class Meta:
        model = PageProjectsDescription


admin.site.register(PageProjectsDescription, PageProjectsDescriptionAdmin)
