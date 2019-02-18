from django.shortcuts import render, get_object_or_404
from urllib.parse import quote_plus
from .models import *

def gypsum_products(request):
	categories = GypsumCategory.objects.filter(is_active=True)

	title_description_model = PageGypsumDescription.objects.filter(is_active=True)[0]
	tab_title = title_description_model.tab_title
	title = title_description_model.title
	short_description = title_description_model.short_description
	description = title_description_model.description
	
	gypsum_products = GypsumProduct.objects.filter(is_active=True)

	context = {
			'categories': categories,
			'tab_title': tab_title,
			'title': title,
			'short_description':short_description,
			'description': description,
			'gypsum_products': gypsum_products,
		}

	# return render(request, 'react/shop/products_react.html', context)
	return render(request, 'gypsum/gypsum_products.html', context)

def products_react(request):
	title_description_model = PageGypsumDescription.objects.filter(is_active=True)[0]
	tab_title = title_description_model.tab_title


	context = {
			'tab_title': tab_title,
		}

	return render(request, 'react/shop/products_react.html', context)

def gypsum_detail(request, id=None):
	categories = GypsumCategory.objects.filter(is_active=True)
	gypsum_product = get_object_or_404(GypsumProduct, id=id)
	gypsum_products_in_category = GypsumProduct.objects.filter(is_active=True, category = gypsum_product.category)
	tab_title = gypsum_product.tab_title

	main_image_url = None
	for img in gypsum_product.gypsumimage_set.all():
		if img.is_main:
			main_image_url = img.image.url

	share_string = quote_plus("Проект ") + quote_plus(gypsum_product.name)
	if gypsum_product.short_description:
		share_string = quote_plus("Проект ") + quote_plus(gypsum_product.name) + quote_plus(" ") + quote_plus(gypsum_product.short_description)
	context = {
			'categories': categories,
			'gypsum_product': gypsum_product,
			'gypsum_products_in_category': gypsum_products_in_category,
			'tab_title': tab_title,
			'main_image_url':main_image_url,
			'share_string': share_string,
		}

	return render(request, 'gypsum/gypsum_detail.html', context)


def gypsum_in_category(request, id=None):
	categories = GypsumCategory.objects.filter(is_active=True)
	category = get_object_or_404(GypsumCategory, id=id)
	tab_title = category.tab_title
	gypsum_in_category = GypsumProduct.objects.filter(is_active=True, category_id = id)
	context = {
			'categories': categories,
			'tab_title': tab_title,
			'category':category,
			'gypsum_in_category': gypsum_in_category,
		}

	return render(request, 'gypsum/gypsum_in_category.html', context)

def product_in_category_react(request, id=None):
	category = get_object_or_404(GypsumCategory, id=id)
	tab_title = category.tab_title
	context = {
			'tab_title': tab_title,
		}

	return render(request, 'react/shop/product_in_category_react.html', context)


def product_detail_react(request, id=None):
	gypsum_product = get_object_or_404(GypsumProduct, id=id)
	tab_title = gypsum_product.tab_title

	main_image_url = None
	for img in gypsum_product.gypsumimage_set.all():
		if img.is_main:
			main_image_url = img.image.url

	context = {

			'tab_title': tab_title,
			'main_image_url':main_image_url,
		}
	print(tab_title)
	print(main_image_url)

	return render(request, 'react/shop/product_detail_react.html', context)