# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-10-22 16:23
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0003_auto_20191018_2304'),
    ]

    operations = [
        migrations.RenameField(
            model_name='trip',
            old_name='plan',
            new_name='bake_pies',
        ),
        migrations.RenameField(
            model_name='trip',
            old_name='endDate',
            new_name='carve_sculpture',
        ),
        migrations.RenameField(
            model_name='trip',
            old_name='destination',
            new_name='move_couch',
        ),
        migrations.RenameField(
            model_name='trip',
            old_name='startDate',
            new_name='walk_dog',
        ),
        migrations.AddField(
            model_name='trip',
            name='change_light_bulbs',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='trip',
            name='mow_lawn',
            field=models.TextField(null=True),
        ),
        migrations.AlterField(
            model_name='trip',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='login.User'),
        ),
    ]