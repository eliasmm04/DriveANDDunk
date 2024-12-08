import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Cabecera from "../cabecera/cabecera";
import WithLoader from "../loader/WithLoader";
import { MagicMotion } from "react-magic-motion";
import "./f1.css";

const F1 = () => {
  const [pilotos, setPilotos] = useState([]);
  const [escuderias, setEscuderias] = useState([]);
  const [pilotosFiltrados, setPilotosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Obtener datos de pilotos
  const obtenerPilotos = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get("http://127.0.0.1:8000/pilotos/");
      setPilotos(response.data);
      setPilotosFiltrados(response.data);
      console.log(response.data);
      setHasError(false);
    } catch (error) {
      console.error("Error al cargar los pilotos:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  // Obtener datos de equipos
  const obtenerEscuderias = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/escuderias/");
      setEscuderias(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error al cargar los equipos:", error);
    }
  };

  // Filtrar pilotos según la búsqueda
  const filtrarPilotos = (terminoBusqueda) => {
    const resultados = pilotos.filter((piloto) =>
      piloto.nombre.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setPilotosFiltrados(resultados);
  };

  // Manejar cambios en el input de búsqueda
  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarPilotos(e.target.value);
  };

  useEffect(() => {
    obtenerPilotos();
    obtenerEscuderias();
  }, []);

  if (hasError) {
    return (
      <div>
        <Cabecera activePage="f1" />
        <p>Hubo un problema al cargar los datos. Por favor, intenta más tarde.</p>
      </div>
    );
  }

  return (
    <div>
      <Cabecera activePage="f1" />
      <div className="containerInput">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Buscar piloto por nombre"
          onChange={handleChange}
        />
      </div>

      <WithLoader isLoading={isLoading}>
        {pilotosFiltrados.length === 0 && (
          <div className="no-results">No hay resultados para esa búsqueda.</div>
        )}
        <MagicMotion>
          <div className="pilotosDisplay">
            {pilotosFiltrados.map((piloto) => (
              <Link to={`/pilotos/${piloto.id}`} key={piloto.id}>
                <div className="pilotoCard">
                  <img src={piloto.imagen} alt={piloto.nombre} />
                  <h2>{piloto.nombre}</h2>
                  <p>
                    <strong>Equipo:</strong> {piloto.escuderia.nombre || "Desconocido"}
                  </p>
                  <p>
                    <strong>Carreras:</strong> {piloto.numero_carreras || "0"}
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

export default F1;
