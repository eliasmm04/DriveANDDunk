# Generated by Django 5.1.3 on 2024-12-08 01:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DriveDunk', '0005_alter_piloto_escuderia'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='usuario',
            options={'managed': False},
        ),
        migrations.AlterField(
            model_name='carrito',
            name='usuario',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, related_name='carrito', to='DriveDunk.usuario'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='usuario',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='DriveDunk.usuario'),
        ),
    ]
