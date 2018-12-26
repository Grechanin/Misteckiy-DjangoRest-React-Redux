from django.contrib import admin
from .models import Gallery


class GalleryAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in Gallery._meta.fields]
    class Meta:
    	model = Gallery


admin.site.register(Gallery, GalleryAdmin)

