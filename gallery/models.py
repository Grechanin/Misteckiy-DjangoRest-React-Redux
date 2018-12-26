from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class Gallery(models.Model):
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    title = models.CharField(max_length=128, blank=True, null=True, default=None)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    description = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s") % self.title

    class Meta:
        verbose_name = 'Розділ "Галерея"'
        verbose_name_plural = 'Розділи "Галерея"'