import Cabecera from '../cabecera/cabecera.js';
import { Link } from 'react-router-dom';
import './Inicio.css';
import noticia1 from "../imagenes/Imagenes/noti1.webp";
import noticia2 from "../imagenes/Imagenes/noti2.webp";
import noticia3 from "../imagenes/Imagenes/noti3.webp";
import noticia4 from "../imagenes/Imagenes/noti4.webp";
import nbaLogo from "../imagenes/Imagenes/NBA-logo-png-download-free-1200x675.png";
import f1Logo from "../imagenes/Imagenes/96cfbce5-1629-4b7c-b337-a8ab1541dfab.png";



const Inicio = () => {
    return (
        <div className="Inicio">
            <Cabecera activePage="inicio" />

            <div className="cuerpo">
                <div className="centrar">
                    <div className="imagenespaginaprincipalarribaa">
                        <img src={nbaLogo} alt="NBA" className="NBA" />
                    </div>

                    <div className="imagenespaginaprincipalarribaa">
                        <img src={f1Logo} alt="f1Logo" />
                    </div>

                    <h1 className="titulo">¡Bienvenido a esta página web dedicada al apasionante mundo del baloncesto y la Fórmula 1!</h1>

                    <div className="texto">
                        <p>
                            Aquí encontrarás todo lo que necesitas para mantenerte al día con las últimas noticias y eventos emocionantes de la NBA
                            y la Fórmula 1. Desde clasificaciones de carreras, estadísticas y las últimas noticias, nuestra plataforma te mantendrá
                            informado y entretenido.
                        </p>
                        <p>
                            La NBA y la Fórmula 1 son dos de las competiciones deportivas más emocionantes y prestigiosas del mundo. En la NBA,
                            disfrutarás de partidos de baloncesto intensos y llenos de habilidad, mientras que la Fórmula 1 te ofrece carreras de
                            alta velocidad con coches de última tecnología y pilotos increíblemente talentosos.
                        </p>
                    </div>
                    <div className="centrar">
                        <div className="noticia">
                            <Link to="/enDesarrollo">
                                <img src={noticia1} alt="Noticia 1" />
                            </Link>
                            <p>El mejor tirador de todos los tiempos venció el Concurso de Triples ante la tiradora más icónica de la WNBA, Sabrina Ionescu</p>
                            <Link to="/enDesarrollo">Ver más</Link>
                        </div>

                        <div className="noticia">
                            <Link to="/enDesarrollo">
                                <img src={noticia2} alt="Noticia 2" />
                            </Link>
                            <p>LeBron James y Giannis Antetokounmpo serán los capitanes de sus respectivas conferencias</p>
                            <Link to="/enDesarrollo">Ver más</Link>
                        </div>

                        <div className="noticia">
                            <Link to="/enDesarrollo">
                                <img src={noticia3} alt="Noticia 3" />
                            </Link>
                            <p>Ahora toca pensar en las tres jornadas de test en Bahréin y poco después arranca el nuevo curso en el circuito de Sakhir.</p>
                            <Link to="/enDesarrollo">Ver más</Link>
                        </div>

                        <div className="noticia">
                            <Link to="/enDesarrollo">
                                <img src={noticia4} alt="Noticia 4" />
                            </Link>
                            <p>El gran estado de forma de Aston Martin a principios de la temporada 2023 cayó drásticamente a mitad de año.</p>
                            <Link to="/enDesarrollo">Ver más</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inicio;
