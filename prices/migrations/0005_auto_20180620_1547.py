# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-06-20 12:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0004_auto_20180620_1546'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ordermodel',
            name='order_name',
            field=models.CharField(default=None, max_length=32),
        ),
    ]