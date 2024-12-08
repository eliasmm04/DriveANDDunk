import React, { useEffect, useState } from 'react';
import Cabecera from '../cabecera/cabecera';
import './calendario.css';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import WithLoader from '../loader/WithLoader';

// Función para formatear fechas en formato día/mes/año
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Los meses en JS van de 0 a 11
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const Calendario = () => {
  const [dataCalendarFiltrada, setDataCalendarFiltrada] = useState([]);
  const [weekendsVisible, setWeekendVisible] = useState(true);
  const [dataCalendar, setDataCalendar] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [busqueda, setBusqueda] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  
  function botonMostrarSemanas() {
    setWeekendVisible(!weekendsVisible);
  }

  const peticion_calendario = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/granpremios/');

      // Ajustar los datos para que coincidan con la estructura que proporcionas
      const events = response.data.map(event => ({
        event_id: event.id, // Usar el "id" de la respuesta
        title: event.nombre, // Usar "nombre" para el título
        start: event.fecha_inicio, // Formato día/mes/año
        end: event.fecha_fin,     // Formato día/mes/año
        extendedProps: {
          content: event.content || 'Sin descripción', // Añadir un valor predeterminado si "content" no está
          
        }
      }));

      setDataCalendarFiltrada(events);
      setDataCalendar(events);
      setHasError(false);
      setIsLoading(false);
    } catch (error) {
      console.error('Error al recuperar los datos:', error);
      setHasError(true);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    peticion_calendario();
  }, []);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    const ResultadosBusqueda = dataCalendarFiltrada.filter((elemento) => {
      if (elemento.title.toLowerCase().includes(terminoBusqueda.toLowerCase())) {
        return elemento;
      }
      return null;
    });
    setDataCalendar(ResultadosBusqueda);
  };

  if (hasError) {
    return (
      <div>
        <Cabecera activePage="calendario" />
        <p>Puede que el servidor esté apagado o exista algún problema con él.</p>
      </div>
    );
  }

  // Dividir los eventos
  const [primerEvento, ...restoEventos] = dataCalendar;

  return (
    <div className='PaginaCalendario'>
      <Cabecera activePage="calendario" />
      <div className='contenidoPaginaCalendario'>
        <div className='calendario'>
          <FullCalendar
            plugins={[dayGridPlugin, timeGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            navLinks={true}
            nowIndicator={true}
            dayMaxEvents={true}
            slotMinTime={'08:00'}
            slotMaxTime={'23:00'}
            expandRows={true}
            aspectRatio={2.5}
            events={dataCalendar}
            weekends={weekendsVisible}
            headerToolbar={{
              left: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
              center: 'title',
              right: 'today,prev,next',
            }}
          />
        </div>

        <WithLoader isLoading={isLoading}></WithLoader>

        <div className='sidebarCalendario'>
          <h2>Instructions</h2>
          <ul>
            <li>Tras buscar algún evento por la barra, en el calendario solo se mostrarán los eventos que se encuentren por el nombre.</li>
          </ul>

          <label>
            <input
              type='checkbox'
              checked={weekendsVisible}
              onChange={botonMostrarSemanas}
            ></input>
            Activar/Desactivar fines de semana
          </label>

          <div className="containerInputCalendario">
            <input
              className="inputBuscarCalendario"
              value={busqueda}
              placeholder="Buscar por nombre"
              onChange={handleChange}
            />
            <button className="btn-succes">
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>

          {primerEvento ? (
            <div>
              <h2>{primerEvento.title}</h2>
              <p><strong>Id:</strong> {primerEvento.event_id}</p>
              
              <p><strong>Fecha de inicio:</strong> {formatDate(primerEvento.start)}</p>
              <p><strong>Fecha de finalización:</strong> {formatDate(primerEvento.end)}</p>
              
            </div>
          ) : (
            <div className="no-results">
              No hay eventos.
            </div>
          )}

          
        </div>
      </div>

      <div className='restoDeEventos'>
        <h2>Eventos del Calendario</h2>
        {restoEventos.length > 0 ? (
          restoEventos.map(evento => (
            <div key={evento.event_id}>
              <h2>{evento.title}</h2>
              <p><strong>Id:</strong> {evento.event_id}</p>
              
              <p><strong>Fecha de inicio:</strong> {formatDate(evento.start)}</p>
              <p><strong>Fecha de finalización:</strong> {formatDate(evento.end)}</p>
              
            </div>
          ))
        ) : (
          <div className="no-results">
            No hay eventos adicionales.
          </div>
        )}
      </div>
    </div>
  );
};

export default Calendario;
