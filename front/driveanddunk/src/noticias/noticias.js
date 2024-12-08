import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Cabecera from "../cabecera/cabecera.js";
import "./noticias.css";
import { MagicMotion } from "react-magic-motion";

const Noticias = () => {
  const [noticias, setNoticias] = useState([]);
  const [noticiasFiltradas, setNoticiasFiltradas] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(true);

  const obtenerNoticias = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/noticias/");
      setNoticias(response.data);
      setNoticiasFiltradas(response.data);
      setCargando(false);
    } catch (error) {
      console.error("Error al cargar las noticias:", error);
      setCargando(false);
    }
  };

  const filtrarNoticias = (terminoBusqueda) => {
    const resultados = noticias.filter((noticia) =>
      noticia.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
    setNoticiasFiltradas(resultados);
  };

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrarNoticias(e.target.value);
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
      <h1>Noticias más relevantes</h1>
      <MagicMotion>
      <div className="containerInput">
        <input
          className="inputBuscar"
          value={busqueda}
          placeholder="Buscar noticia por título"
          onChange={handleChange}
        />
      </div>
      <div className="noticiasContainer">
        {noticiasFiltradas.map((noticia, index) => (
          <div className="noticia" key={index}>
            <Link to={`/noticias/${noticia.id}`} key={noticia.id}>
              <img
                src={`http://127.0.0.1:8000/${noticia.imagen}`}
                alt={`Noticia ${index + 1}`}
              />
            </Link>
            <p>{noticia.titulo}</p>
            <Link to={`/noticias/${noticia.id}`} key={noticia.id} className="verMas">
              Ver más
            </Link>
          </div>
        ))}
      </div>
      {noticiasFiltradas.length === 0 && (
        <p className="no-results">No hay resultados para esa búsqueda.</p>
      )}
      </MagicMotion>
    </div>
  );
};

export default Noticias;
