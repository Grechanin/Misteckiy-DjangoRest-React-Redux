# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-08-23 06:52
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gypsumProducts', '0004_gypsumproduct_gypsum_3d_model'),
    ]

    operations = [
        migrations.AddField(
            model_name='gypsumcategory',
            name='tab_title',
            field=models.TextField(blank=True, null=True, verbose_name='Заголовок закладки'),
        ),
        migrations.AddField(
            model_name='gypsumproduct',
            name='tab_title',
            field=models.TextField(blank=True, null=True, verbose_name='Заголовок закладки'),
        ),
        migrations.AddField(
            model_name='pagegypsumdescription',
            name='tab_title',
            field=models.TextField(blank=True, null=True, verbose_name='Заголовок закладки'),
        ),
    ]