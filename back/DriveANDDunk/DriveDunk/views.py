from django.http import JsonResponse
from .models import GranPremio, Piloto, Equipo, Jugador, Producto, Noticia, Usuario

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
        pilotos = Piloto.objects.all()
        response = [
            {
                "id": piloto.id,
                "nombre": piloto.nombre,
                "imagen": piloto.imagen.url if piloto.imagen else None,
                "numero_carreras": piloto.numero_carreras,
                "escuderia": piloto.escuderia,
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

def listJugadores(request):
    if request.method == 'GET':
        jugadores = Jugador.objects.select_related('equipo').all()
        response = [
            {
                "id": jugador.id,
                "nombre": jugador.nombre,
                "imagen": jugador.imagen.url if jugador.imagen else None,
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

def listProductos(request):
    if request.method == 'GET':
        productos = Producto.objects.all()
        response = [
            {
                "id": producto.id,
                "nombre": producto.nombre,
                "imagen": producto.imagen.url if producto.imagen else None,
                "precio": float(producto.precio),
            }
            for producto in productos
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