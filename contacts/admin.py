from django.contrib import admin
from .models import Contacts


class ContactsAdmin(admin.ModelAdmin):
	list_display = [ field.name for field in Contacts._meta.fields]
	class Meta:
		model = Contacts


admin.site.register(Contacts, ContactsAdmin)

