import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = () => {
  return (
    <div className="home-container">
      <h2>Bem-vindo à página inicial</h2>
      <div className="icons-container">

        <Link to="/pacientes" className="icon-link">
          <i className="fas fa-user"></i>
          <span>Listar Pacientes</span>
        </Link>

        <Link to="/medicos" className="icon-link">
          <i className="fas fa-user-md"></i>
          <span>Listar Médicos</span>
        </Link>

        <Link to="/medicos/cadastrar" className="icon-link">
          <i className="fas fa-user-md"></i>
          <span>Cadastrar Medico</span>
        </Link>

        <Link to="/consultas" className="icon-link">
          <i className="fas fa-calendar-alt"></i>
          <span>Consultas</span>
        </Link>

        <Link to="/consultas/agendar" className="icon-link">
          <i className="fas fa-calendar-alt"></i>
          <span>Agenda Consultas</span>
        </Link>

        <Link to="/consultas/cancelar" className="icon-link">
          <i className="fas fa-calendar-alt"></i>
          <span>Desmarcar Consultas</span>
        </Link>
        
      </div>
    </div>
  );
};

export default Home;
