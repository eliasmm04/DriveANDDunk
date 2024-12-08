import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Cabecera from '../cabecera/cabecera.js';
import { useCarrito } from '../carrito/CarritoContext';
import './tienda.css';

const Tienda = () => {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [mensaje, setMensaje] = useState(''); // Estado para el mensaje temporal
    const { agregarAlCarrito } = useCarrito();

    const obtenerProductos = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/productos/');
            setProductos(response.data);
            console.log(response.data);
            setCargando(false);
        } catch (error) {
            console.error("Error al cargar los productos:", error);
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerProductos();
    }, []);

    const manejarAgregarAlCarrito = (producto) => {
        agregarAlCarrito(producto);
        setMensaje(`"${producto.nombre}" añadido al carrito`); // Establecer el mensaje
        setTimeout(() => setMensaje(''), 2000); // Limpiar el mensaje después de 2 segundos
    };

    if (cargando) {
        return <p>Cargando productos...</p>;
    }

    return (
        <>
            <Cabecera activePage="tienda" />
            <div className="tienda-container">
                {mensaje && <div className="mensaje">{mensaje}</div>} {/* Mostrar mensaje si existe */}
                <div className="centrar">
                    {productos.map((producto) => (
                        <div className="articulo" key={producto.id}>
                            <img 
                                src={`http://127.0.0.1:8000${producto.imagen}`} 
                                alt={`Producto ${producto.id}`} 
                            />
                            <p>{producto.nombre}</p>
                            <p>${producto.precio}</p>
                            <button onClick={() => manejarAgregarAlCarrito(producto)}>
                                Añadir al carrito
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Tienda;
