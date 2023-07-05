import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/index';
import ListaPacientes from './components/Paciente/Listagem/ListaPacientes';
import ListaMedicos from './components/Medico/Listagem/ListaMedicos';
import ListaConsultas from './components/Consulta/Listagem/ListaConsultas';
import EditarPacienteForm from './components/Paciente/Atualizar/EditarPacienteForm';
import EditarMedico from './components/Medico/Atualizar/MedicoUpdateForm';
import CadastroPaciente from './components/Paciente/Cadastro/CadastroPaciente';
import MedicoForm from './components/Medico/Cadastro/MedicoForm';
import ConsultaForm from './components/Consulta/Cadastro/ConsultaForm';
import CancelamentoForm from './components/Consulta/Cancelamento/CancelamentoForm';

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/pacientes" element={<ListaPacientes />} />
        <Route exact path="/medicos" element={<ListaMedicos/>} />
        <Route exact path="/consultas" element={<ListaConsultas/>} />
        <Route exact path="/pacientes/cadastrar" element={<CadastroPaciente/>} />
        <Route exact path="/medicos/cadastrar" element={<MedicoForm/>} />
        <Route exact path="/consultas/agendar" element={<ConsultaForm/>} />
        <Route exact path="/consultas/cancelar" element={<CancelamentoForm/>} />
        <Route exact path="/pacientes/editar/:id" element={<EditarPacienteForm/>} />
        <Route exact path="/medicos/editar/:id" element={<EditarMedico/>} />
      </Routes>
    </BrowserRouter>

  );
};

export default Rotas;
