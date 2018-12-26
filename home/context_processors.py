from home.models import FaviconImage

def favicon(request):
	favicon = FaviconImage.objects.filter(is_active=True).last()
	return {"favicon": favicon}