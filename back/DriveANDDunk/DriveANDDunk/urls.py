from django.contrib import admin
from django.urls import path
from DriveDunk import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('granpremios/', views.listGranPremios),
    path('pilotos/', views.listPilotos),
    path('equipos/', views.listEquipos),
    path('escuderias/', views.listEscuderias),
    path('jugadores/', views.listJugadores),
    path('productos/', views.ProductoListView.as_view(), name='producto'),
    path('noticias/', views.listNoticias),
    path('usuarios/', views.listUsuarios),
    path('carrito/', views.CarritoView.as_view(), name='carrito'),
    path('pedido/', views.PedidoView.as_view(), name='pedido'),
     # Endpoint para obtener piloto por ID
    path('pilotos/<int:piloto_id>/', views.piloto_detalle, name='piloto_detalle'),

    # Endpoint para obtener jugador por ID
    path('jugadores/<int:jugador_id>/', views.jugador_detalle, name='jugador_detalle'),

    # Endpoint para obtener noticia por ID
    path('noticias/<int:noticia_id>/', views.noticia_detalle, name='noticia_detalle'),
]

# Agregar rutas para archivos estáticos y multimedia
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)