# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-11-11 20:14
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('gypsumProducts', '0005_auto_20180823_0952'),
    ]

    operations = [
        migrations.AlterField(
            model_name='gypsumimage',
            name='image',
            field=models.ImageField(blank=True, default=None, null=True, upload_to='gypsum_images/'),
        ),
    ]
