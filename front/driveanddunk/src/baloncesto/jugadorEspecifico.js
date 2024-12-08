import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './jugadorEspecifico.css';
import Cabecera from "../cabecera/cabecera";

const JugadorEspecifico = () => {
  const [jugador, setJugador] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { jugadorId } = useParams();

  const obtenerJugador = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/jugadores/${jugadorId}`);
      setJugador(response.data);
      console.log(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    obtenerJugador();
  }, [jugadorId]);

  if (hasError) {
    return <p>Error al cargar los datos del jugador.</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="jugador-detalles">
        <Cabecera activePage="inicio"></Cabecera>
      {jugador && (
        <>
          <img src={`http://127.0.0.1:8000/${jugador.imagen}`} alt={jugador.nombre} className="jugador-imagen" />
          <h2>{jugador.nombre}</h2>
          <p><strong>Equipo:</strong> {jugador.equipo?.nombre || "Desconocido"}</p>
          <p><strong>Partidos Jugados:</strong> {jugador.partidos}</p>
          <p><strong>Puntos Máximos:</strong> {jugador.max_puntos}</p>
          <Link to="/baloncesto">
            <button className="volver-btn">Volver</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default JugadorEspecifico;
