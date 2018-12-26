from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Carousel(models.Model):
	"""Adding imgs for main slider"""
	title = models.CharField(max_length=128, blank=True, null=True)
	img = models.ImageField(upload_to="carousel_images/")
	description = RichTextUploadingField(blank=True, null=True, default=None)
	is_active = models.BooleanField(default=True)
	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
	update = models.DateTimeField(auto_now=True, auto_now_add=False)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Фото для слайдера'
		verbose_name_plural = 'Фото для слайдера'


class InteriorDesign(models.Model):
	tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
	title = models.CharField('Заголовок сторінки',max_length=128, blank=True, null=True)
	short_description = RichTextUploadingField('Короткий опис', blank=True, null=True, default=None)
	description = RichTextUploadingField('Опис', blank=True, null=True, default=None)
	is_active = models.BooleanField(default=True)
	timestamp = models.DateTimeField('Створено', auto_now=False, auto_now_add=True)
	update = models.DateTimeField('Оновлено', auto_now=True, auto_now_add=False)

	def __str__(self):
		return self.title

	class Meta:
		verbose_name = 'Дизайн інтерєру'
		verbose_name_plural = 'Дизайн інтерєру'


class FaviconImage(models.Model):
	name = models.CharField(max_length=128, blank=True, null=True)
	favicon = models.ImageField(upload_to="favicon/", blank=True, null=True, default=None)

	is_active = models.BooleanField(default=True)
	created = models.DateTimeField(auto_now_add=True, auto_now=False)
	update = models.DateTimeField(auto_now=True, auto_now_add=False)

	def __str__(self):
		return self.name

	class Meta:
		verbose_name = 'Фавікон'
		verbose_name_plural = 'Фавікони'


# class LastProjects(models.Model):
# 	"""Adding imgs for maine slider"""
# 	title = models.CharField(max_length=128, blank=True, null=True)
# 	img = models.FileField()
# 	description = models.TextField(blank=True, null=True, default=None)
# 	is_active = models.BooleanField(default=True)
# 	timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
# 	update = models.DateTimeField(auto_now=True, auto_now_add=False)

# 	def __str__(self):
# 		return self.title