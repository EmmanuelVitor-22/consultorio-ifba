import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const ListaPacientes = () => {
  const [pacientes, setPacientes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pacientes/listar?page=${currentPage}&size=10&sort=nome,asc`);
        setPacientes(response.data.content);
      } catch (error) {
        console.log('Erro ao obter lista de pacientes:', error);
      }
    };

    fetchPacientes();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleSoftDelete = async (paciente) => {
    if (!paciente.id) {
      console.log('ID do paciente indefinido');
      return;
    }
  
    const id = paciente.id;
  
    try {
      const fetchPacientes = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/pacientes/listar?page=${currentPage}&size=10&sort=nome,asc`);
          setPacientes(response.data.content);
        } catch (error) {
          console.log('Erro ao obter lista de pacientes:', error);
        }
      };
      
      await axios.delete(`http://localhost:8080/pacientes/deletar/${id}`);
      console.log('Paciente excluído com sucesso!');
      fetchPacientes(); // Atualizar a lista de pacientes após a exclusão
    } catch (error) {
      console.log('Erro ao excluir paciente:', error);
    }
  };
  

  return (
    <div className='wrapper'>
      <h2>Lista de Pacientes</h2>
      <table className="pacientes-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pacientes.map((paciente) => (
            <tr key={paciente.id}>
              <td>{paciente.nome}</td>
              <td>{paciente.email}</td>
              <td>{paciente.cpf}</td>
              <td>
                <Link to={`/pacientes/editar/${paciente.id}`}>Editar</Link>
                <button onClick={() => handleSoftDelete(paciente)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='paginacao'>
        <button className="btn-list" onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 0}>
          Página anterior
        </button>
        <span>Página atual: {currentPage}</span>
        <button className="btn-list" onClick={() => handlePageChange(currentPage + 1)}>Próxima página</button>
      </div>
    </div>
  );
};

export default ListaPacientes;
