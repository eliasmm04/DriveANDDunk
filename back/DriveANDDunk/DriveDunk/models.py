from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password



# Fórmula 1
class GranPremio(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    fecha_inicio = models.DateField()
    fecha_fin = models.DateField()

    def __str__(self):
        return self.nombre



class Escuderia(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='escuderias/')

    def __str__(self):
        return self.nombre

class Piloto(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='pilotos/', blank=True, null=True)
    numero_carreras = models.IntegerField()
    escuderia = models.ForeignKey(Escuderia, on_delete=models.CASCADE, related_name='pilotos')
    

    def __str__(self):
        return self.nombre

# Baloncesto
class Equipo(models.Model):
    id = models.AutoField(primary_key=True)  # Clave primaria autoincremental
    nombre = models.CharField(max_length=100)
    imagen = models.ImageField(upload_to='equipos/', default='media/jugadores/antetgi01.jpg')  # Imagen predeterminada

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
    nombre = models.CharField(max_length=1000)
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
    nombre = models.CharField(max_length=50, blank=True, null=True)
    apellidos = models.CharField(max_length=100, blank=True, null=True)
    contraseña = models.CharField(max_length=200, blank=True, null=True)
    nombre = models.CharField(max_length=50, blank=True, null=True)
    apellidos = models.CharField(max_length=100, blank=True, null=True)
    contraseña = models.CharField(max_length=200, blank=True, null=True)
    telefono = models.CharField(max_length=9, blank=True, null=True)
    email = models.CharField(max_length=100, blank=True, null=True)
    sessiontoken = models.CharField(db_column='sessionToken', max_length=500, blank=True, null=True)  # Field name made lowercase.

    def save(self, *args, **kwargs):
        if  not self.pk:  # Si la instancia ya existe en la base de datos
                      
           self.contraseña = make_password(self.contraseña)
        
        super(Usuario, self).save(*args, **kwargs)

    class Meta:
        managed = False
        db_table = 'users'

class Carrito(models.Model):
    usuario = models.OneToOneField('Usuario', on_delete=models.CASCADE, related_name='carrito', null=True)

    def __str__(self):
        return f"Carrito de {self.usuario.username}"


class ItemCarrito(models.Model):
    carrito = models.ForeignKey(Carrito, on_delete=models.CASCADE, related_name='items')
    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    cantidad = models.PositiveIntegerField(default=1)

    def __str__(self):
        return f"{self.cantidad} x {self.producto.nombre}"

class Pedido(models.Model):
    usuario = models.ForeignKey('Usuario', on_delete=models.CASCADE, null=True)
    fecha = models.DateTimeField(auto_now_add=True)
    total = models.DecimalField(max_digits=10, decimal_places=2)
    productos = models.ManyToManyField(ItemCarrito)

    def __str__(self):
        return f"Pedido {self.id} - {self.usuario.username}"
    


