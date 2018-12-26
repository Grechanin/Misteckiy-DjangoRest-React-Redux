from django.contrib import admin
from .models import AboutUs


class AboutUsAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in AboutUs._meta.fields]
    class Meta:
    	model = AboutUs


admin.site.register(AboutUs, AboutUsAdmin)

