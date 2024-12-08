import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import './noticiaEspecifica.css';
import Cabecera from "../cabecera/cabecera";

const NoticiaEspecifica = () => {
  const [noticia, setNoticia] = useState(null);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const { noticiaId } = useParams();

  const obtenerNoticia = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8000/noticias/${noticiaId}`);
      setNoticia(response.data);
      setHasError(false);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    obtenerNoticia();
  }, [noticiaId]);

  if (hasError) {
    return <p>Error al cargar la noticia.</p>;
  }

  if (isLoading) {
    return <p>Cargando...</p>;
  }

  return (
    <div className="noticia-detalles">
        <Cabecera activePage="inicio"></Cabecera>
      {noticia && (
        <>
        <div className="centrarNotiEspe">
          <img src={`http://127.0.0.1:8000/${noticia.imagen}`} alt={noticia.titulo} className="noticia-imagen" />
          <h2>{noticia.titulo}</h2>
          <p className="cuerpoNoti">{noticia.cuerpo}</p>
          <Link to="/noticias">
            <button className="volver-btn">Volver</button>
          </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default NoticiaEspecifica;
