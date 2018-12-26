from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Contacts(models.Model):

	tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
	title = models.CharField(max_length=128, blank=True, null=True, default=None)
	
	address_title = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)
	address = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)

	email_title = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)
	email = RichTextUploadingField(max_length=70, null=True, blank=True, default=None)

	title_phone_for_customers = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)
	phone_for_customers = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)

	title_phone_for_partners = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)
	phone_for_partners = RichTextUploadingField(max_length=128, blank=True, null=True, default=None)

	is_active = models.BooleanField(default=True)
	created = models.DateTimeField(auto_now_add=True, auto_now=False)
	update = models.DateTimeField(auto_now=True, auto_now_add=False)

	def __str__(self):
	    return ("%s") % self.title

	class Meta:
	    verbose_name = 'Розділ "Контакти"'
	    verbose_name_plural = 'Розділи "Контакти"'