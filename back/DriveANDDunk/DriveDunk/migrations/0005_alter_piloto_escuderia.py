# Generated by Django 5.1.3 on 2024-12-06 20:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DriveDunk', '0004_remove_escuderia_escuderia_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='piloto',
            name='escuderia',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='pilotos', to='DriveDunk.escuderia'),
        ),
    ]
