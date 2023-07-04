import React, { useEffect, useState } from 'react';
import axios from 'axios';
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

  const handleEdit = (id) => {
    
    window.location.href = `http://localhost:8080/pacientes/listar/${id}`;
  };

  const handleDelete = (id) => {
    // Lógica para excluir o paciente com o ID fornecido
    console.log('Excluir paciente:', id);
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
              <td>{paciente.CPF}</td>
              <td>
                <button onClick={() => handleEdit(paciente.id)}>Editar</button>
                <button onClick={() => handleDelete(paciente.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='paginacao'>
        <button  className = "btn-list"onClick={() => handleEdit(currentPage - 1)} disabled={currentPage === 0}>
          Página anterior
        </button>
        <span>Página atual: {currentPage}</span>
        <button className = "btn-list" onClick={() => handlePageChange(currentPage + 1)}>Próxima página</button>
      </div>
    </div>
  );
};

export default ListaPacientes;
