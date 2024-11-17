
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Cabecera from "../cabecera/cabecera";
import Inicio from "../Inicio/Inicio";
import "./baloncesto.css"

const Baloncesto = () => {
  return (
    <div>
      {/* Cabecera */}
      <Cabecera activePage="inicio"></Cabecera>

      {/* Cuerpo */}
      <div className="cuerpo">

        <div className="margen">
          <h1>Jugadores Destacados de la NBA</h1>

          {/* Los Angeles Lakers */}
          <h2>Los Angeles Lakers</h2>
          <p>Los Angeles Lakers es uno de los equipos más emblemáticos de la NBA, con una rica historia de éxito en el baloncesto profesional.</p>
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Jugador</th>
                <th>Partidos Jugados</th>
                <th>Récord de Puntos</th>
                <th>Récord de Asistencias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../imagenes/Imagenes/a.jpg" alt="LeBron James" /></td>
                <td>LeBron James</td>
                <td>1300</td>
                <td>61 puntos</td>
                <td>15 asistencias</td>
              </tr>
              <tr>
                <td><img src="../imagenes/Imagenes/b.jpg" alt="Anthony Davis" /></td>
                <td>Anthony Davis</td>
                <td>600</td>
                <td>48 puntos</td>
                <td>10 asistencias</td>
              </tr>
            </tbody>
          </table>

          {/* Brooklyn Nets */}
          <h2>Brooklyn Nets</h2>
          <p>Los Brooklyn Nets son uno de los equipos más competitivos en la NBA en la actualidad, con un destacado roster lleno de talento.</p>
          <table>
            <thead>
              <tr>
                <th>Foto</th>
                <th>Jugador</th>
                <th>Partidos Jugados</th>
                <th>Récord de Puntos</th>
                <th>Récord de Asistencias</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><img src="../imagenes/Imagenes/c.jpg" alt="Kevin Durant" /></td>
                <td>Kevin Durant</td>
                <td>800</td>
                <td>55 puntos</td>
                <td>12 asistencias</td>
              </tr>
              <tr>
                <td><img src="../imagenes/Imagenes/d.jpg" alt="James Harden" /></td>
                <td>James Harden</td>
                <td>700</td>
                <td>58 puntos</td>
                <td>14 asistencias</td>
              </tr>
            </tbody>
          </table>

          {/* Additional teams and tables would follow here */}
        </div>
      </div>


    </div>
  );
};

export default Baloncesto;
