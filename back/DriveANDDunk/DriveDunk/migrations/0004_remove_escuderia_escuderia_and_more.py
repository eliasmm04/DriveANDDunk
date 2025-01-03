# Generated by Django 5.1.3 on 2024-12-06 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('DriveDunk', '0003_escuderia'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='escuderia',
            name='escuderia',
        ),
        migrations.RemoveField(
            model_name='escuderia',
            name='numero_de_carreras',
        ),
        migrations.AddField(
            model_name='equipo',
            name='imagen',
            field=models.ImageField(default='media/jugadores/antetgi01.jpg', upload_to='equipos/'),
        ),
        migrations.AlterField(
            model_name='escuderia',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
    ]
