import React from 'react';
import Cabecera from '../cabecera/cabecera.js';
import './noticias.css';
import noticia1 from "../imagenes/Imagenes/noti1.webp";
import noticia2 from "../imagenes/Imagenes/noti2.webp";
import noticia3 from "../imagenes/Imagenes/noti3.webp";
import noticia4 from "../imagenes/Imagenes/noti4.webp";


const Noticias = () => {
    return (
        <>
            <Cabecera activePage="inicio" />
            <div className="cuerpo">
                {/* Menú de navegación */}


                {/* Sección de noticias */}
                <div className="centrar">
                    <div className="noticia">
                        <a href="noti1.html">
                            <img src={noticia1} alt="Noticia 1" />
                        </a>
                        <p>El mejor tirador de todos los tiempos venció el Concurso de Triples ante la tiradora más icónica de la WNBA, Sabrina Ionescu</p>
                        <a href="noti1.html">Ver más</a>
                    </div>

                    <div className="noticia">
                        <a href="noti2.html">
                            <img src={noticia2} alt="Noticia 2" />
                        </a>
                        <p>LeBron James y Giannis Antetokounmpo serán los capitanes de sus respectivas conferencias</p>
                        <a href="noti2.html">Ver más</a>
                    </div>

                    <div className="noticia">
                        <a href="noti3.html">
                            <img src={noticia3} alt="Noticia 3" />
                        </a>
                        <p>Ahora toca pensar en las tres jornadas de test en Bahréin (del 21 al 23 de febrero) y, poco después, arranca el nuevo curso (el 2 de marzo en el circuito de Sakhir). Dicho sea de paso, a priori es una campaña en la que parte como claro favorito Red Bull. Y más viendo su flamante RB20.</p>
                        <a href="noti3.html">Ver más</a>
                    </div>

                    <div className="noticia">
                        <a href="noti4.html">
                            <img src={noticia4} alt="Noticia 4" />
                        </a>
                        <p>El gran estado de forma de Aston Martin a principios de la temporada 2023 cayó drásticamente a mitad de año, por lo que mucho de si han aprendido de sus errores depende de si han sido capaces de entender, recuperar y construir sobre el rendimiento que se perdió en el transcurso de la pasada campaña.</p>
                        <a href="noti4.html">Ver más</a>
                    </div>
                </div>

                {/* Footer */}
                <div className="footer">
                    <div className="Info">
                        <a href="desarrollo.html">Sobre mí</a>
                        <a href="desarrollo.html">Cookies</a>
                    </div>

                    <div className="divredes">
                        <div className="redes">
                            <a href="#"><i className="fa-brands fa-x-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-youtube"></i></a>
                            <a href="#"><i className="fa-brands fa-facebook"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Noticias;
