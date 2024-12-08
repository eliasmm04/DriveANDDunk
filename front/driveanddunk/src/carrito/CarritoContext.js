import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
const CarritoContext = createContext();

// Componente proveedor
export const CarritoProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    // Función para agregar productos al carrito
    const agregarAlCarrito = (producto) => {
        const productoConIdUnico = { ...producto, idUnico: `${producto.id}-${Date.now()}` };  // Agregamos un identificador único
        setCarrito((prevCarrito) => [...prevCarrito, productoConIdUnico]);
    };

    // Función para eliminar productos del carrito
    const eliminarDelCarrito = (productoIdUnico) => {
        setCarrito((prevCarrito) => prevCarrito.filter(item => item.idUnico !== productoIdUnico));
    };

    // Función para vaciar el carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    return (
        <CarritoContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, eliminarDelCarrito }}>
            {children}
        </CarritoContext.Provider>
    );
};

// Hook para usar el contexto
export const useCarrito = () => {
    return useContext(CarritoContext);
};
