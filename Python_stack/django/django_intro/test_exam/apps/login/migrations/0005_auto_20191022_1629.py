# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-10-22 16:29
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0004_auto_20191022_1623'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trip',
            old_name='carve_sculpture',
            new_name='description',
        ),
        migrations.RenameField(
            model_name='trip',
            old_name='walk_dog',
            new_name='location',
        ),
        migrations.RenameField(
            model_name='trip',
            old_name='move_couch',
            new_name='title',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='bake_pies',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='change_light_bulbs',
        ),
        migrations.RemoveField(
            model_name='trip',
            name='mow_lawn',
        ),
    ]