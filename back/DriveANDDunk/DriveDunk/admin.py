from django.contrib import admin
from .models import GranPremio, Piloto, Jugador, Producto, Noticia, Equipo, Escuderia,Usuario

# Registra los modelos que quieres que aparezcan en el admin
admin.site.register(GranPremio)
admin.site.register(Piloto)
admin.site.register(Jugador)
admin.site.register(Producto)
admin.site.register(Noticia)
admin.site.register(Equipo)
admin.site.register(Escuderia)  # Registro del modelo Escuderia
admin.site.register(Usuario) 