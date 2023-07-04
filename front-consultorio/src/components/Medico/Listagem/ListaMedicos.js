import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';
import { Link } from 'react-router-dom';

const ListaMedicos = () => {
  const [medicos, setMedicos] = useState([]);

  useEffect(() => {
    const fetchMedicos = async () => {
      try {
        const response = await axios.get('http://localhost:8080/medicos/listar');
        setMedicos(response.data);
      } catch (error) {
        console.log('Erro ao obter lista de médicos:', error);
      }
    };

    fetchMedicos();
  }, []);

  const handleEdit = (id) => {
    // Lógica para editar o médico com o ID fornecido
    console.log(`Editar médico ${id}`);
  };

  const handleDelete = (id) => {
    // Lógica para excluir o médico com o ID fornecido
    console.log(`Excluir médico ${id}`);
  };

  return (
    <div className='wrapper'>
      <h2>Lista de Médicos</h2>
      <table className="medicos-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>CRM</th>
            <th>Especialidade</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map((medico) => (
            <tr key={medico.id}>
              <td>{medico.nome}</td>
              <td>{medico.email}</td>
              <td>{medico.crm}</td>
              <td>{medico.especialidade}</td>
              <td>
              <Link to={`/medicos/editar/${medico.id}`}>Editar</Link>
                <button onClick={() => handleDelete(medico.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaMedicos;
