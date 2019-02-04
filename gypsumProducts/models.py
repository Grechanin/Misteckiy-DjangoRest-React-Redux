from ckeditor_uploader.fields import RichTextUploadingField
from django.db import models
from django.urls import reverse
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFit


class GypsumCategory(models.Model):
    name = models.CharField(max_length=128, blank=True, null=True, default=None)
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    title = models.CharField(max_length=128, blank=True, null=True, default=None)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    description = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s") % self.name

    def get_absolute_url(self):
        return reverse('gypsum:gypsum_in_category', kwargs={'id': self.id})

    class Meta:
        verbose_name = 'Категорія товару'
        verbose_name_plural = 'Категорії товарів'


class GypsumProduct(models.Model):
    name = models.CharField(max_length=64, blank=True, null=True, default=None)
    category = models.ForeignKey(GypsumCategory, blank=True, null=True, default=None, on_delete=models.CASCADE)
    gypsum_3d_model = models.FileField(upload_to="gypsum_3dmodels/", blank=True, null=True, default=None)
    tab_title = models.TextField('Заголовок закладки', blank=True, null=True)
    price = models.IntegerField(default=0)
    discount = models.IntegerField(default=0)
    short_description = RichTextUploadingField(blank=True, null=True, default=None)
    domentions = RichTextUploadingField(blank=True, null=True, default=None)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return ("%s, %s грн") % (self.name, self.price)

    def get_absolute_url(self):
        return reverse('gypsum:gypsum_detail', kwargs={'id': self.id})

    class Meta:
        verbose_name = 'Товар'
        verbose_name_plural = 'Товари'


class GypsumImage(models.Model):
    gypsum_product = models.ForeignKey(GypsumProduct, blank=True, null=True, default=None, on_delete=models.CASCADE)

    image = models.ImageField(upload_to="gypsum_images/", blank=True, null=True, default=None)

    image_thumbnail = ImageSpecField(source='image',
                                      processors=[ResizeToFit(700)],
                                      format='JPEG',
                                      options={'quality': 60})

    is_active = models.BooleanField(default=True)
    is_main = models.BooleanField(default=False)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    update = models.DateTimeField(auto_now=True, auto_now_add=False)

    def __str__(self):
        return self.gypsum_product.name

    class Meta:
        verbose_name = 'Фото товару'
        verbose_name_plural = 'Фотки товарів'


class PageGypsumDescription(models.Model):
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
        verbose_name = 'Опис сторінки магазину'
        verbose_name_plural = 'Опис сторінки магазину'