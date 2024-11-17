import React from 'react';
import Cabecera from '../cabecera/cabecera.js';
import './tienda.css';

const productos = [
    { id: 1,nom:"camiseta laker 00", img: '1-removebg-preview.png', precio: 30 },
    { id: 2,nom:"camiseta laker 23 amarilla", img: '2-removebg-preview.png', precio: 30 },
    { id: 3,nom:"camiseta laker 23 morada", img: '3-removebg-preview.png', precio: 30 },
    { id: 4,nom:"camiseta laker 23 retro", img: '4-removebg-preview.png', precio: 30 },
    { id: 5,nom:"Camiseta Aston Martin Alonso", img: '5-removebg-preview.png', precio: 30 },
    { id: 6,nom:"Camiseta gris Alonso", img: '6-removebg-preview.png', precio: 30 },
];

const Tienda = () => {
    return (
        <>
            <Cabecera activePage="inicio" />
            <div className="centrar">
                {productos.map(producto => (
                    <div className="articulo" key={producto.id}>
                        <img 
                            src={require(`../imagenes/Imagenes/${producto.img}`)} 
                            alt={`Producto ${producto.id}`} 
                        />
                        <p>Nombre:</p>{producto.nom}
                        <p>${producto.precio}</p>
                        <button>Añadir al carrito</button>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Tienda;
