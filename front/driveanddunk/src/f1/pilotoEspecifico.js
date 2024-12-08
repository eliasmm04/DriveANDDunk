import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './pilotoEspecifico.css'; // Asegúrate de tener este archivo
import Cabecera from "../cabecera/cabecera";

const PilotoEspecifico = () => {
  const [piloto, setPiloto] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { pilotoId } = useParams();

  const obtenerPiloto = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/pilotos/${pilotoId}`);
      setPiloto(response.data);
      console.log(response.data);
      setHasError(false);
    } catch (error) {
      console.error("Error al obtener los datos del piloto:", error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    obtenerPiloto();
  }, [pilotoId]);

  if (hasError) {
    return <p>Error al cargar los datos del piloto.</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="piloto-detalles">
      <Cabecera activePage="inicio"></Cabecera>
      {piloto && (
        <>
          <img src={`http://127.0.0.1:8000/${piloto.imagen}`} alt={piloto.nombre} className="piloto-imagen" />
          <h2>{piloto.nombre}</h2>
          <p><strong>Escudería:</strong> {piloto.escuderia.nombre}</p>
          <p><strong>Número de Carreras:</strong> {piloto.numero_carreras}</p>
          <Link to="/F1">
            <button>Volver</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default PilotoEspecifico;
