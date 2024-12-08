import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import './Inicio.css';
import nbaLogo from "./imagenes/NBA-logo-png-download-free-1200x675.png";
import f1Logo from "./imagenes/96cfbce5-1629-4b7c-b337-a8ab1541dfab.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCar } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import Cabecera from "../cabecera/cabecera";

const Inicio = () => {
    const [noticias, setNoticias] = useState([]);
    const [cargando, setCargando] = useState(true);

    const obtenerNoticias = async () => {
        try {
            const response = await axios.get('http://127.0.0.1:8000/noticias/');
            setNoticias(response.data);
            setCargando(false);
        } catch (error) {
            console.error("Error al cargar las noticias:", error);
            setCargando(false);
        }
    };

    useEffect(() => {
        obtenerNoticias();
    }, []);

    if (cargando) {
        return <p>Cargando noticias...</p>;
    }

    return (
        <div className="Inicio">
            <Cabecera activePage="inicio" />
            <h1 className="titulo">¡Bienvenido a esta página web dedicada al apasionante mundo del baloncesto y la Fórmula 1!</h1>
            <div className="logos-container">
                <img src={nbaLogo} alt="NBA" className="logo" />
                <img src={f1Logo} alt="F1" className="logo" />
            </div>
            <div className="texto">
                <p>
                    Aquí encontrarás todo lo que necesitas para mantenerte al día con las últimas noticias y eventos emocionantes de la NBA
                    y la Fórmula 1. Desde clasificaciones de carreras, estadísticas y las últimas noticias, nuestra plataforma te mantendrá
                    informado y entretenido.
                </p>
            </div>
            <div className="accesos-rapidos-container">
                <Link to="/tienda" className="section-card">
                    <h2><FontAwesomeIcon icon={faShop} className='iconoInicio' /> Tienda</h2>
                    <p>Compra productos exclusivos relacionados con la NBA y Fórmula 1.</p>
                </Link>
                <Link to="/carrito" className="section-card">
                    <h2><FontAwesomeIcon icon={faCartShopping} className='iconoInicio' /> Carrito</h2>
                    <p>Revisa los artículos que añadiste a tu carrito de compras.</p>
                </Link>
                <Link to="/baloncesto" className="section-card">
                    <h2><FontAwesomeIcon icon={faMedal} className='iconoInicio' /> Jugadores</h2>
                    <p>Explora información sobre los mejores jugadores de la NBA.</p>
                </Link>
                <Link to="/F1" className="section-card">
                    <h2><FontAwesomeIcon icon={faCar} className='iconoInicio' /> Pilotos</h2>
                    <p>Descubre los pilotos más destacados de la Fórmula 1.</p>
                </Link>
                <Link to="/noticias" className="section-card">
                    <h2><FontAwesomeIcon icon={faNewspaper} className='iconoInicio' /> Noticias</h2>
                    <p>Mantente informado con las últimas noticias deportivas.</p>
                </Link>
            </div>
        </div>
    );
};

export default Inicio;
