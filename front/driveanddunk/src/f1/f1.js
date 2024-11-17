import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Cabecera from "../cabecera/cabecera";
import Inicio from "../Inicio/Inicio";
import "./f1.css";

const F1 = () => {
  return (
    <>
    <Cabecera activePage="inicio" />
      <div className="cuerpo">
        <div className="margen">
          <h1>Mercedes-AMG Petronas Formula One Team</h1>
          <p>El equipo Mercedes-AMG Petronas Formula One Team, conocido simplemente como Mercedes, es una escudería de Fórmula Uno con una rica historia en el deporte. Fundada en 2010 como una toma de control de Brawn GP, el equipo ha dominado la era híbrida de la F1, ganando múltiples campeonatos de pilotos y constructores.</p>
          <p>Los pilotos actuales de Mercedes son Lewis Hamilton y George Russell. Lewis Hamilton es uno de los pilotos más exitosos en la historia de la Fórmula Uno, con múltiples campeonatos mundiales en su haber. George Russell, aunque más joven y menos experimentado, ha demostrado ser un talento prometedor en la parrilla.</p>

          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre del Piloto</th>
                <th>Número de Carreras en F1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../imagenes/Imagenes/1.jpg" alt="Lewis Hamilton" /></td>
                <td>Lewis Hamilton</td>
                <td>256</td>
              </tr>
              <tr>
                <td><img src="../imagenes/Imagenes/2.jpg" alt="George Russell" /></td>
                <td>George Russell</td>
                <td>47</td>
              </tr>
            </tbody>
          </table>

          <h1>Red Bull Racing Honda</h1>
          <p>Red Bull Racing Honda es una de las escuderías más competitivas en la parrilla de la Fórmula Uno. Fundada en 2005, el equipo ha logrado múltiples campeonatos de pilotos y constructores, desafiando el dominio de equipos tradicionales como Ferrari y Mercedes.</p>
          <p>Los pilotos actuales de Red Bull Racing Honda son Max Verstappen y Sergio Pérez. Max Verstappen, conocido por su talento y agresividad en la pista, es uno de los pilotos más emocionantes de la actualidad. Sergio Pérez, con una sólida experiencia en la F1, complementa bien el equipo con su consistencia y habilidad para sumar puntos.</p>

          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Nombre del Piloto</th>
                <th>Número de Carreras en F1</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../imagenes/Imagenes/3.jpg" alt="Max Verstappen" /></td>
                <td>Max Verstappen</td>
                <td>129</td>
              </tr>
              <tr>
                <td><img src="../imagenes/Imagenes/4.jpg" alt="Sergio Pérez" /></td>
                <td>Sergio Pérez</td>
                <td>205</td>
              </tr>
            </tbody>
          </table>
          
          {/* You can repeat the same structure for other teams */}
        </div>
      </div>
      <div className="footer">
        <div className="Info">
          <a href="desarrollo.html">Sobre mí</a>
          <a href="desarrollo.html">Cookies</a>
        </div>
        <div className="divredes">
          <div className="redes">
            <a href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
            <a href="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default F1;
