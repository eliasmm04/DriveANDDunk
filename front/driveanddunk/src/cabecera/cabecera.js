import './cabecera.css';
import logo from './Tus_Deportes.com__1_-removebg-preview.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const Cabecera = ({ activePage }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsSubmenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  return (

     <header className="header"> 
      <div className="header-top">
        <div className="divLogo">
          <Link to="/" className='nav-url'>
            <img src={logo} alt="Logo" className='logo' />
          </Link>
          
        </div>
        <div className="icon">
          <div className='ordenarIconosCabecera'>
          <Link to="/carrito" className='nav-url'>
            <FontAwesomeIcon icon={faCartShopping} className='icono' />
          </Link>

          </div>
        </div>
      </div>

      <nav className="nav-menu">
        <div className={`menu-item ${activePage === 'empleados' ? 'bold' : ''}`}>
          <Link to="/" className='nav-url'>Inicio</Link>
        </div>

        <div className={`menu-item-empresa ${activePage.startsWith('empresa') || isSubmenuOpen ? 'bold' : ''}`} 
             onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} ref={menuRef}>
          <span>F1</span>
          
            <div className={`submenu ${isSubmenuOpen ? 'active' : ''}`}>
              <div className="submenu-item">
                <Link to='/f1' className='nav-url'>Info pilotos</Link>
              </div>
            </div>
          
        </div>

        <div className={`menu-item ${activePage === 'distribucionInfo' ? 'bold' : ''}`}>
          <Link to="/baloncesto" className='nav-url'>Baloncesto</Link>
        </div>
        <div className={`menu-item ${activePage === 'calendario' ? 'bold' : ''}`}>
          <Link to="/tienda" className='nav-url'>Tienda</Link>
        </div>
        <div className={`menu-item ${activePage === 'protocolos' ? 'bold' : ''}`}>
          <Link to="/noticias" className='nav-url'>Noticias</Link>
        </div>
      </nav>
    </header>
  );
};

export default Cabecera;
