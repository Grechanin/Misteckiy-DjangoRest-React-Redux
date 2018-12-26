from django.shortcuts import render, get_object_or_404
from .models import Gallery
from projects.models import ProjectImage

def gallery(request):
	gallery = Gallery.objects.filter(is_active=True)[0]

	tab_title = gallery.tab_title
	title = gallery.title
	short_description = gallery.short_description
	description = gallery.description
	imgs = ProjectImage.objects.filter(is_active=True).order_by('?')
	list(imgs)
	share = imgs.count()
	first_col = imgs[0::4]
	# print(imgs.type())
	second_col = imgs[1::4]
	# print(second_col)
	third_col = imgs[2::4]
	# print(third_col)
	fourth_col = imgs[3::4]
	# print(fourth_col)
	context = {
			'tab_title': tab_title,
			'title': title,
			'description': description,
			'short_description': short_description,
			'imgs': imgs,
			'first_col': first_col,
			'second_col': second_col,
			'third_col': third_col,
			'fourth_col': fourth_col,
		}

	return render(request, 'gallery/gallery.html', context)