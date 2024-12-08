import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecera from "../cabecera/cabecera.js";
import WithLoader from "../loader/WithLoader";
import { MagicMotion } from "react-magic-motion";
import "./baloncesto.css";

const Baloncesto = () => {
  const [jugadores, setJugadores] = useState([]);
  const [jugadoresFiltrados, setJugadoresFiltrados] = useState([]);
  const [equipos, setEquipos] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const obtenerJugadores = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/jugadores/");
      setJugadores(response.data);
      setJugadoresFiltrados(response.data);
      setHasError(false);
    } catch (error) {
      console.error("Error al cargar los jugadores:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const obtenerEquipos = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/equipos/");
      setEquipos(response.data);
    } catch (error) {
      console.error("Error al cargar los equipos:", error);
    }
  };

  const filtrarJugadores = (terminoBusqueda) => {
    const resultadosBusqueda = jugadores.filter((jugador) =>
      jugador.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setJugadoresFiltrados(resultadosBusqueda);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarJugadores(e.target.value);
  };

  useEffect(() => {
    obtenerJugadores();
    obtenerEquipos();
  }, []);

  if (hasError) {
    return (
      <div>
        <Cabecera activePage="baloncesto" />
        <p>Hubo un problema al cargar los datos. Por favor, intenta más tarde.</p>
      </div>
    );
  }

  return (
    <div>
      <Cabecera activePage="baloncesto" />
      <div className="containerInput">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Buscar jugador por nombre"
          onChange={handleChange}
        />
      </div>
      
      <WithLoader isLoading={isLoading}>
        {jugadoresFiltrados.length === 0 && (
          <div className="no-results">No hay resultados para esa búsqueda.</div>
        )}
        <MagicMotion>
        <div className="jugadoresDisplay">
          {jugadoresFiltrados.map((jugador) => (
            <Link to={`/jugadores/${jugador.id}`} key={jugador.id}>
              <div className="jugadorCard">
                <img src={jugador.imagen} alt={jugador.nombre} />
                <h2>{jugador.nombre}</h2>
                <p>
                  <strong>Equipo:</strong> {typeof jugador.equipo === "string" ? jugador.equipo : jugador.equipo?.nombre || "Desconocido"}
                </p>
                <p>
                  <strong>Partidos:</strong> {jugador.partidos || "0"}
                </p>
                <p>
                  <strong>Puntos Máximos:</strong> {jugador.max_puntos || "N/A"}
                </p>
                <p>
                  <strong>Asistencias Máximas:</strong> {jugador.max_asistencias || "N/A"}
                </p>
              </div>
            </Link>
          ))}
        </div>
        </MagicMotion>
      </WithLoader>
      
    </div>
  );
};

export default Baloncesto;