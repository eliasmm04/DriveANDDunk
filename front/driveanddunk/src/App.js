import Inicio from './Inicio/Inicio.js'
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnDesarrollo from './enDesarrollo/enDesarrollo.js';
import Baloncesto from './baloncesto/baloncesto.js';
import F1 from './f1/f1.js';
import Tienda from './Tienda/tienda.js';
import Noticias from './noticias/noticias.js';
import Carrito from './carrito/Carrito.js';
import { CarritoProvider } from './carrito/CarritoContext';
import Login from './auth/login.js'; // Página de login
import Register from './auth/register.js'; // Página de registro
import NoticiaEspecifica from './noticias/noticiaEspecifica.js';
import JugadorEspecifico from './baloncesto/jugadorEspecifico.js';
import PilotoEspecifico from './f1/pilotoEspecifico.js';
import Calendario from './calendario/calendario.js';

function App() {
  const [user, setUser] = useState(null); // Estado para el usuario logueado
  return (
    <div>
      <CarritoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Inicio />} />
            <Route path="/baloncesto" element={< Baloncesto />} />
            <Route path="/login" element={<Login setUser={setUser} />} />
            <Route path="/register" element={<Register />} />
            <Route path="/tienda" element={< Tienda />} />
            <Route path="/noticias" element={< Noticias />} />
            <Route path="/F1" element={< F1 />} />
            <Route path="/carrito" element={< Carrito />} />
            <Route path="/calendario" element={<Calendario />} />
            <Route path="/*" element={< EnDesarrollo />} />

            <Route path="/noticias/:noticiaId" element={<NoticiaEspecifica />} />
            <Route path="/jugadores/:jugadorId" element={<JugadorEspecifico />} />
            <Route path="/pilotos/:pilotoId" element={<PilotoEspecifico />} />
            
          </Routes>
        </BrowserRouter>
        </CarritoProvider>
      
    </div>
  );
}


export default App;

