# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2019-10-22 16:11
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('login', '0002_trip'),
    ]

    operations = [
        migrations.AddField(
            model_name='trip',
            name='endDate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AddField(
            model_name='trip',
            name='plan',
            field=models.TextField(null=True),
        ),
        migrations.AddField(
            model_name='trip',
            name='startDate',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='trip',
            name='user',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='jobs', to='login.User'),
        ),
    ]
