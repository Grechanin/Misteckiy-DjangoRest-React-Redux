from django.contrib import admin
from .models import Carousel, InteriorDesign, FaviconImage
# from .forms import SignUpForm


class CarouselAdmin(admin.ModelAdmin):
	list_display = ['__str__', 'img', 'timestamp', 'update']
	# form = SignUpForm
	class Meta:
		model = Carousel
		# fields = ['title','img']


admin.site.register(Carousel, CarouselAdmin)



class InteriorDesignAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in InteriorDesign._meta.fields]

    class Meta:
        model = InteriorDesign

admin.site.register(InteriorDesign, InteriorDesignAdmin)


class FaviconImageAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in FaviconImage._meta.fields]

    class Meta:
        model = FaviconImage

admin.site.register(FaviconImage, FaviconImageAdmin)