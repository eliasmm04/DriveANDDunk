import React from 'react';
import { useCarrito } from './CarritoContext';
import './carrito.css';
import Cabecera from '../cabecera/cabecera.js';
import { MagicMotion } from "react-magic-motion";

const Carrito = () => {
    const { carrito, vaciarCarrito, eliminarDelCarrito } = useCarrito();  // Obtener las funciones del contexto

    // Calcular el total del carrito asegurando que los precios sean números
    const calcularTotal = () => {
        return carrito.reduce((total, item) => total + parseFloat(item.precio), 0);
    };

    // Función para manejar la eliminación de un producto
    const handleEliminar = (productoIdUnico) => {
        eliminarDelCarrito(productoIdUnico);
    };

    return (
        <div className="carrito-container">
            <Cabecera activePage="inicio" />
            <h1>Carrito de Compras</h1>
            <MagicMotion>
            {carrito.length === 0 ? (
                <p className="carrito-vacio">El carrito está vacío</p>
            ) : (
                <div>
                    <ul className="lista-carrito">
                        {carrito.map((item) => (
                            <li className="articulo-carrito" key={item.idUnico}>
                                <img
                                    src={`http://127.0.0.1:8000${item.imagen}`}
                                    alt={item.nombre}
                                />
                                <p>{item.nombre} - ${item.precio}</p>
                                <button
                                    className="eliminar-btn"
                                    onClick={() => handleEliminar(item.idUnico)}  // Usamos idUnico para eliminar
                                >
                                    Eliminar
                                </button>
                            </li>
                        ))}
                    </ul>
                    <div className="total-compra">
                        <p>Total de Compra: ${calcularTotal().toFixed(2)}</p>
                    </div>
                    <div className="carrito-boton-container">
                        <button className="vaciar-btn" onClick={vaciarCarrito}>
                            Vaciar Carrito
                        </button>
                        <button className="pagar-btn" onClick={() => alert('Compra realizada')}>
                            Pagar
                        </button>
                    </div>
                </div>
            )}
            </MagicMotion>
        </div>
    );
};

export default Carrito;
