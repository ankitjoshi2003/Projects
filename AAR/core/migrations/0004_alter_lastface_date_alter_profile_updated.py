# Generated by Django 5.0.2 on 2024-03-07 06:33

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_alter_lastface_date_alter_profile_updated'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lastface',
            name='date',
            field=models.DateTimeField(),
        ),
        migrations.AlterField(
            model_name='profile',
            name='updated',
            field=models.DateTimeField(),
        ),
    ]
