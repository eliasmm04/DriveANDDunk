from django.http import JsonResponse
from .models import GranPremio, Piloto, Equipo, Jugador, Producto, Noticia, Usuario
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from .models import Producto, Carrito, ItemCarrito, Pedido,Escuderia
from .serializers import ProductoSerializer, CarritoSerializer, PedidoSerializer
from django.shortcuts import get_object_or_404


def listGranPremios(request):
    if request.method == 'GET':
        gran_premios = GranPremio.objects.all()
        response = [
            {
                "id": gp.id,
                "nombre": gp.nombre,
                "fecha_inicio": gp.fecha_inicio,
                "fecha_fin": gp.fecha_fin,
            }
            for gp in gran_premios
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

def listPilotos(request):
    if request.method == 'GET':
        pilotos = Piloto.objects.select_related('escuderia').all()
        response = [
            {
                "id": piloto.id,
                "nombre": piloto.nombre,
                "imagen": request.build_absolute_uri(piloto.imagen.url) if piloto.imagen else None,
                "numero_carreras": piloto.numero_carreras,
                "escuderia": {
                    "id": piloto.escuderia.id,
                    "nombre": piloto.escuderia.nombre,
                } if piloto.escuderia else None,
            }
            for piloto in pilotos
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

def listEquipos(request):
    if request.method == 'GET':
        equipos = Equipo.objects.all()
        response = [
            {
                "id": equipo.id,
                "nombre": equipo.nombre,
            }
            for equipo in equipos
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

def listEscuderias(request):
    if request.method == 'GET':
        escuderias = Escuderia.objects.all()
        response = [
            {
                "id": escuderia.id,
                "nombre": escuderia.nombre,
                "imagen": request.build_absolute_uri(escuderia.imagen.url) if escuderia.imagen else None,
            }
            for escuderia in escuderias
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

def listJugadores(request):
    if request.method == 'GET':
        jugadores = Jugador.objects.select_related('equipo').all()
        response = [
            {
                "id": jugador.id,
                "nombre": jugador.nombre,
                "imagen": request.build_absolute_uri(jugador.imagen.url) if jugador.imagen else None,
                "partidos": jugador.partidos,
                "max_puntos": jugador.max_puntos,
                "max_asistencias": jugador.max_asistencias,
                "equipo": {
                    "id": jugador.equipo.id,
                    "nombre": jugador.equipo.nombre,
                },
            }
            for jugador in jugadores
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)
    

def listNoticias(request):
    if request.method == 'GET':
        noticias = Noticia.objects.all()
        response = [
            {
                "id": noticia.id,
                "titulo": noticia.titulo,
                "imagen": noticia.imagen.url if noticia.imagen else None,
                "cuerpo": noticia.cuerpo,
            }
            for noticia in noticias
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

def listUsuarios(request):
    if request.method == 'GET':
        usuarios = Usuario.objects.all()
        response = [
            {
                "id": usuario.id,
                "username": usuario.username,
                "email": usuario.email,
            }
            for usuario in usuarios
        ]
        return JsonResponse(response, safe=False)
    return JsonResponse({'error': 'HTTP method unsupported'}, status=405)

class ProductoListView(APIView):
    def get(self, request):
        productos = Producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data)

# Vista del carrito
class CarritoView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        carrito, _ = Carrito.objects.get_or_create(usuario=request.user)
        serializer = CarritoSerializer(carrito)
        return Response(serializer.data)

    def post(self, request):
        producto_id = request.data.get('producto_id')
        cantidad = request.data.get('cantidad', 1)

        carrito, _ = Carrito.objects.get_or_create(usuario=request.user)
        producto = Producto.objects.get(id=producto_id)
        item, created = ItemCarrito.objects.get_or_create(carrito=carrito, producto=producto)
        if not created:
            item.cantidad += cantidad
        item.save()

        serializer = CarritoSerializer(carrito)
        return Response(serializer.data)

# Vista de pedido
class PedidoView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        carrito = Carrito.objects.get(usuario=request.user)
        total = sum(item.producto.precio * item.cantidad for item in carrito.items.all())

        pedido = Pedido.objects.create(usuario=request.user, total=total)
        pedido.productos.set(carrito.items.all())
        carrito.items.all().delete()  # Vaciar el carrito después de realizar el pedido

        # Enviar correo (reemplaza por tu configuración de correo)
        from django.core.mail import send_mail
        send_mail(
            'Compra realizada',
            'Tu compra ha sido confirmada.',
            'tu_email@example.com',
            [request.user.email]
        )

        serializer = PedidoSerializer(pedido)
        return Response(serializer.data)
    




def piloto_detalle(request, piloto_id):
    piloto = get_object_or_404(Piloto, id=piloto_id)
    data = {
        "id": piloto.id,
        "nombre": piloto.nombre,
        "imagen": piloto.imagen.url if piloto.imagen else None,
        "numero_carreras": piloto.numero_carreras,
        "escuderia": {
            "id": piloto.escuderia.id,
            "nombre": piloto.escuderia.nombre,
            "imagen": piloto.escuderia.imagen.url if piloto.escuderia.imagen else None,
        },
    }
    return JsonResponse(data)




def jugador_detalle(request, jugador_id):
    jugador = get_object_or_404(Jugador, id=jugador_id)
    data = {
        "id": jugador.id,
        "nombre": jugador.nombre,
        "imagen": jugador.imagen.url if jugador.imagen else None,
        "partidos": jugador.partidos,
        "max_puntos": jugador.max_puntos,
        "max_asistencias": jugador.max_asistencias,
        "equipo": {
            "id": jugador.equipo.id,
            "nombre": jugador.equipo.nombre,
            "imagen": jugador.equipo.imagen.url if jugador.equipo.imagen else None,
        },
    }
    return JsonResponse(data)



def noticia_detalle(request, noticia_id):
    noticia = get_object_or_404(Noticia, id=noticia_id)
    data = {
        "id": noticia.id,
        "titulo": noticia.titulo,
        "imagen": noticia.imagen.url if noticia.imagen else None,
        "cuerpo": noticia.cuerpo,
    }
    return JsonResponse(data)