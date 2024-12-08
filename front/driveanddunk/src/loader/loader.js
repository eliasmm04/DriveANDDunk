// src/components/Loader.js
import React from "react";
import "./loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="spinner"></div>
      <p>Cargando...</p>
    </div>
  );
};

export default Loader;
