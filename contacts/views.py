from django.shortcuts import render, get_object_or_404
from .models import Contacts

def contacts(request):
	contacts = Contacts.objects.filter(is_active=True)[0]
	tab_title = contacts.tab_title

	
	context = {
			'contacts': contacts,
			'tab_title': tab_title,
		}

	return render(request, 'contacts/contacts.html', context)