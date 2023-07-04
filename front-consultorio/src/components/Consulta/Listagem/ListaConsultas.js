import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

const ListaConsultas = () => {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await axios.get('http://localhost:8080/consultas/listar');
        setConsultas(response.data);
      } catch (error) {
        console.log('Erro ao obter lista de consultas:', error);
      }
    };

    fetchConsultas();
  }, []);

  const formatarDataHora = (dataHora) => {
    const data = new Date(dataHora);
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();
    return `${dia}/${mes}/${ano} ${hora}:${minutos}`;
  };

  return (
    <div className='wrapper'>
      <h2>Lista de Consultas</h2>
      <table className="consultas-table">
        <thead>
          <tr>
            <th>Paciente</th>
            <th>Médico</th>
            <th>Data e Hora</th>
          </tr>
        </thead>
        <tbody>
          {consultas.map((consulta) => (
            <tr key={consulta.id}>
              <td>{consulta.paciente.nome}</td>
              <td>{consulta.medico.nome}</td>
              <td>{formatarDataHora(consulta.dataHora)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaConsultas;
