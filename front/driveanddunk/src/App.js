import Inicio from './Inicio/Inicio.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnDesarrollo from './enDesarrollo/enDesarrollo.js';
import Baloncesto from './baloncesto/baloncesto.js';
import F1 from './f1/f1.js';
import Tienda from './Tienda/tienda.js';
import Noticias from './noticias/noticias.js';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Inicio />} />
            <Route path="/baloncesto" element={< Baloncesto />} />
            <Route path="/tienda" element={< Tienda />} />
            <Route path="/noticias" element={< Noticias />} />
            <Route path="/F1" element={< F1 />} />
            <Route path="/*" element={< EnDesarrollo />} />
            
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}


export default App;

