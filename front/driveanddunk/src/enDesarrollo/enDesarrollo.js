import React from 'react';
import './enDesarollo.css'; // Importamos los estilos

const EnDesarrollo = () => {
  return (
    <div className="en-desarrollo">
      <div className="contenido">
        <h1>🚧 ¡En desarrollo! 🚧</h1>
        <p>Estamos trabajando para ofrecerte esta funcionalidad muy pronto.</p>
        <p>Gracias por tu paciencia y comprensión. 🙏</p>
        
        <p>
          Mientras tanto, puedes <a href="/">volver a la página principal</a>.
        </p>
      </div>
    </div>
  );
};

export default EnDesarrollo;
