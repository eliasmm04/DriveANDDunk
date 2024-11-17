from django.contrib import admin
from django.urls import path
from DriveDunk import views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('granpremios/', views.listGranPremios),
    path('pilotos/', views.listPilotos),
    path('equipos/', views.listEquipos),
    path('jugadores/', views.listJugadores),
    path('productos/', views.listProductos),
    path('noticias/', views.listNoticias),
    path('usuarios/', views.listUsuarios),
]