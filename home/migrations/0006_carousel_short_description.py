# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-04-16 12:59
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0005_auto_20180401_2227'),
    ]

    operations = [
        migrations.AddField(
            model_name='carousel',
            name='short_description',
            field=models.TextField(blank=True, default=None, null=True),
        ),
    ]