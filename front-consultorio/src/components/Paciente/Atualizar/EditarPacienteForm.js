import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditarPacienteForm = ({ pacienteId }) => {
  const [pacienteData, setPacienteData] = useState({
    nome: '',
    telefone: '',
    endereco: {
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep: ''
    }
  });

  useEffect(() => {
    const fetchPaciente = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/pacientes/${pacienteId}`);
        const paciente = response.data;
        setPacienteData({
          nome: paciente.nome,
          telefone: paciente.telefone,
          endereco: { ...paciente.endereco }
        });
      } catch (error) {
        console.log('Erro ao obter dados do paciente:', error);
      }
    };

    fetchPaciente();
  }, [pacienteId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPacienteData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/pacientes/atualizar/${pacienteId}`, pacienteData);
      console.log('Paciente atualizado com sucesso!');
    } catch (error) {
      console.log('Erro ao atualizar paciente:', error);
    }
  };

  return (
    <div>
      <h2>Editar Paciente</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" value={pacienteData.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" name="telefone" value={pacienteData.telefone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="logradouro">Logradouro</label>
          <input
            type="text"
            id="logradouro"
            name="endereco.logradouro"
            value={pacienteData.endereco.logradouro}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            name="endereco.numero"
            value={pacienteData.endereco.numero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            name="endereco.complemento"
            value={pacienteData.endereco.complemento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            name="endereco.bairro"
            value={pacienteData.endereco.bairro}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="endereco.cidade"
            value={pacienteData.endereco.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="uf">UF</label>
          <input
            type="text"
            id="uf"
            name="endereco.uf"
            value={pacienteData.endereco.uf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="endereco.cep"
            value={pacienteData.endereco.cep}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Atualizar Paciente</button>
      </form>
    </div>
  );
};

export default EditarPacienteForm;
