# -*- coding: utf-8 -*-
# Generated by Django 1.11.8 on 2018-06-20 14:02
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('prices', '0007_auto_20180620_1614'),
    ]

    operations = [
        migrations.RenameField(
            model_name='ordermodel',
            old_name='text',
            new_name='coment',
        ),
    ]
