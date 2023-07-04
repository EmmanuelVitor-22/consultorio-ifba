import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import ListaPacientes from './components/Paciente/Listagem/ListaPacientes';
// import ListaConsultas from './components/Consulta/Listagem/ListaConsultas';
// import ListaMedicos from './components/Medico/Listagem/ListaMedicos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ListaPacientes/>
    <ListaConsultas/>
    <ListaMedicos/>
  </React.StrictMode>
);
