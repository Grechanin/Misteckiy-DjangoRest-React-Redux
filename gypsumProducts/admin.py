from django.contrib import admin
from .models import *


class GypsumCategoryAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in GypsumCategory._meta.fields]

    class Meta:
        model = GypsumCategory


admin.site.register(GypsumCategory, GypsumCategoryAdmin)

class GypsumImageInline(admin.TabularInline):
    model = GypsumImage
    extra = 0


class GypsumProductAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in GypsumProduct._meta.fields]
    inlines = [GypsumImageInline]

    class Meta:
        model = GypsumProduct


admin.site.register(GypsumProduct, GypsumProductAdmin)


class GypsumImageAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in GypsumImage._meta.fields]

    class Meta:
        model = GypsumImage


admin.site.register(GypsumImage, GypsumImageAdmin)


class PageGypsumDescriptionAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in PageGypsumDescription._meta.fields]

    class Meta:
        model = PageGypsumDescription


admin.site.register(PageGypsumDescription, PageGypsumDescriptionAdmin)
