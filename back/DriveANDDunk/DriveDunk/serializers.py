from rest_framework import serializers
from .models import  Producto, Carrito, ItemCarrito, Pedido



class ProductoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Producto
        fields = '__all__'

class ItemCarritoSerializer(serializers.ModelSerializer):
    producto = ProductoSerializer()

    class Meta:
        model = ItemCarrito
        fields = ['id', 'producto', 'cantidad']

class CarritoSerializer(serializers.ModelSerializer):
    items = ItemCarritoSerializer(many=True)

    class Meta:
        model = Carrito
        fields = ['id', 'usuario', 'items']

class PedidoSerializer(serializers.ModelSerializer):
    productos = ItemCarritoSerializer(many=True)

    class Meta:
        model = Pedido
        fields = ['id', 'usuario', 'fecha', 'total', 'productos']
