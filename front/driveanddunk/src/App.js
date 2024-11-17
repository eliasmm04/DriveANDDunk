import Inicio from './Inicio/Inicio.js'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EnDesarrollo from './enDesarrollo/enDesarrollo.js';
import Baloncesto from './baloncesto/baloncesto.js';
import F1 from './f1/f1.js';

function App() {
  return (
    <div>
      
        <BrowserRouter>
          <Routes>
            <Route path="/" element={< Inicio />} />
            <Route path="/baloncesto" element={< Baloncesto />} />
            <Route path="/tienda" element={< EnDesarrollo />} />
            <Route path="/noticias" element={< EnDesarrollo />} />
            <Route path="/enDesarrollo" element={< EnDesarrollo />} />
            <Route path="/F1" element={< F1 />} />
            <Route path="/" element={< Inicio />} />
            
          </Routes>
        </BrowserRouter>
      
    </div>
  );
}


export default App;

