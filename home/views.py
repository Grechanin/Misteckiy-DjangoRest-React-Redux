from django.shortcuts import render

from .models import Carousel, InteriorDesign
from projects.models import Project


def home(request):
	carousel_imgs = Carousel.objects.filter(is_active=True)
	home_page_content = InteriorDesign.objects.filter(is_active=True)
	tab_title = None
	home_page_title = None
	short_description = None
	home_page_description = None
	
	if home_page_content:
		for obj in home_page_content:
			tab_title = obj.tab_title
			home_page_title = obj.title
			short_description = obj.short_description
			home_page_description = obj.description

	last_projects = Project.objects.filter(is_active=True).order_by('-update')[:6]

	# for obj in last_projects:
	# 	prj_name = obj.name
	# 	prj_im

	# print('last_projects')

	context = {
		'tab_title': tab_title,
		'carousel_imgs':carousel_imgs,
		'home_page_title':home_page_title,
		'short_description':short_description,
		'home_page_description':home_page_description,
		'last_projects':last_projects,
	}

	return render(request, 'home/home.html', context)