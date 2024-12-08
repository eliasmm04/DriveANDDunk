# Generated by Django 5.1.3 on 2024-12-08 02:59

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DriveDunk', '0006_alter_usuario_options_alter_carrito_usuario_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carrito',
            name='usuario',
            field=models.OneToOneField(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='carrito', to='DriveDunk.usuario'),
        ),
        migrations.AlterField(
            model_name='pedido',
            name='usuario',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='DriveDunk.usuario'),
        ),
        migrations.AlterModelTable(
            name='usuario',
            table='users',
        ),
    ]