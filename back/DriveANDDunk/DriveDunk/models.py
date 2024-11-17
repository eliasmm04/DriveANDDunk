from django.db import models

# Fórmula 1
class GranPremio(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()

    def __str__(self):
        return self.nombre

class Piloto(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='pilotos/', blank=True, null=True)
    numero_carreras = models.IntegerField()
    escuderia = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

# Baloncesto
class Equipo(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return self.nombre

class Jugador(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='jugadores/', blank=True, null=True)
    partidos = models.IntegerField()
    max_puntos = models.IntegerField()
    max_asistencias = models.IntegerField()
    equipo = models.ForeignKey(Equipo, on_delete=models.CASCADE, related_name='jugadores')

    def __str__(self):
        return self.nombre

# Tienda
class Producto(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='productos/')
    precio = models.DecimalField(max_digits=10, decimal_places=2)

    def __str__(self):
        return self.nombre

# Noticias
class Noticia(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    titulo = models.CharField(max_length=200)
    imagen = models.ImageField(upload_to='noticias/', blank=True, null=True)
    cuerpo = models.TextField()

    def __str__(self):
        return self.titulo

# Usuarios
class Usuario(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    username = models.CharField(max_length=100, unique=True)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)

    def __str__(self):
        return self.username
