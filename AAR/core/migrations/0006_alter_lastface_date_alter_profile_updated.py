# Generated by Django 5.0.2 on 2024-03-07 06:40

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0005_alter_lastface_date_alter_profile_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lastface',
            name='date',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 7, 6, 40, 28, 262505)),
        ),
        migrations.AlterField(
            model_name='profile',
            name='updated',
            field=models.DateTimeField(default=datetime.datetime(2024, 3, 7, 6, 40, 28, 261507)),
        ),
    ]