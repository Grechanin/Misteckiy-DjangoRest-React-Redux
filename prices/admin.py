from django.contrib import admin
from .models import *


class PricesAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in Prices._meta.fields]

    class Meta:
        model = Prices


admin.site.register(Prices, PricesAdmin)


class PriceCategoryAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in PriceCategory._meta.fields]

    class Meta:
        model = PriceCategory


admin.site.register(PriceCategory, PriceCategoryAdmin)


class ProiceCategoryDescriptionAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in ProiceCategoryDescription._meta.fields]

    class Meta:
        model = ProiceCategoryDescription


admin.site.register(ProiceCategoryDescription, ProiceCategoryDescriptionAdmin)


class OrderModelAdmin(admin.ModelAdmin):
    list_display = [ field.name for field in OrderModel._meta.fields]

    class Meta:
        model = OrderModel


admin.site.register(OrderModel, OrderModelAdmin)