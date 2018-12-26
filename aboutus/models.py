from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models


class AboutUs(models.Model):
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    title = models.CharField('Заголовок сторінки', max_length=128, blank=True, null=True, default=None)
    short_description = RichTextUploadingField('Короткий опис', blank=True, null=True, default=None)
    description = RichTextUploadingField('Опис', blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField('Створено', auto_now_add=True, auto_now=False)
    update = models.DateTimeField('Оновлено', auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s") % self.title

    class Meta:
        verbose_name = 'Розділ "Про нас"'
        verbose_name_plural = 'Розділи "Про нас"'