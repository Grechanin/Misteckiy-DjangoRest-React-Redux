from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.urls import reverse
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFit


class ProjectCategory(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True, default=None)
    title = models.CharField(max_length=128, blank=True, null=True, default=None)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    description = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s") % self.name

    def get_absolute_url(self):
        return reverse('projects:projects_in_category', kwargs={'id': self.id})

    class Meta:
        verbose_name = 'Категорія проекту'
        verbose_name_plural = 'Категорії проектів'


class Project(models.Model):
    name = models.CharField(max_length=64, blank=True, null=True, default=None)
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    category = models.ForeignKey(ProjectCategory, blank=True, null=True, default=None, on_delete=models.CASCADE)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    description = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s") % (self.name)

    def get_absolute_url(self):
        return reverse('projects:project_detail', kwargs={'id': self.id})

    class Meta:
        verbose_name = 'Проект'
        verbose_name_plural = 'Проекти'


class ProjectImage(models.Model):
    project = models.ForeignKey(Project, blank=True, null=True, default=None, on_delete=models.CASCADE)

    image = models.ImageField(upload_to="products_images/", blank=True, null=True, default=None)

    image_thumbnail = ImageSpecField(source='image',
                                      processors=[ResizeToFit(700)],
                                      format='JPEG',
                                      options={'quality': 60})

    is_active = models.BooleanField(default=True)
    is_main = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.project.name

    class Meta:
        verbose_name = 'Фото'
        verbose_name_plural = 'Фотки'


class PageProjectsDescription(models.Model):
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    title = models.CharField(max_length=128, blank=True, null=True)
    sub_title = RichTextUploadingField(max_length=128, blank=True, null=True)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    description = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    timestamp = models.DateTimeField(auto_now=False, auto_now_add=True)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = 'Опис сторінки проекти'
        verbose_name_plural = 'Опис сторінки проектиу'