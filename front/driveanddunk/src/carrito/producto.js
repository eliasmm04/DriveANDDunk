import React from 'react';
import { useCarrito } from '../context/carritoContexto';

const Producto = ({ producto }) => {
    const { agregarAlCarrito } = useCarrito();

    return (
        <div>
            <img src={producto.imagen} alt={producto.nombre} width="100" />
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button onClick={() => agregarAlCarrito(producto)}>Agregar al Carrito</button>
        </div>
    );
};

export default Producto;
