import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const MedicoUpdateForm = ({ medico }) => {
  const [medicoData, setMedicoData] = useState({
    nome: medico.nome,
    telefone: medico.telefone,
    endereco: {
      logradouro: medico.endereco.logradouro,
      numero: medico.endereco.numero,
      complemento: medico.endereco.complemento,
      bairro: medico.endereco.bairro,
      cidade: medico.endereco.cidade,
      uf: medico.endereco.uf,
      cep: medico.endereco.cep
    }
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMedicoData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:8080/medicos/atualizar/${medico.id}`, medicoData);
      console.log('Médico atualizado com sucesso!');
      toast.success('Atualizado realizado com sucesso!');    } catch (error) {
      console.log('Erro ao atualizar médico:', error);
      toast.error("Não foi possivel atualizar") 
   }
  };

  return (
    <div>
      <h2>Atualizar Médico</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input type="text" id="nome" name="nome" value={medicoData.nome} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="telefone">Telefone</label>
          <input type="text" id="telefone" name="telefone" value={medicoData.telefone} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="logradouro">Logradouro</label>
          <input
            type="text"
            id="logradouro"
            name="endereco.logradouro"
            value={medicoData.endereco.logradouro}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="numero">Número</label>
          <input
            type="text"
            id="numero"
            name="endereco.numero"
            value={medicoData.endereco.numero}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="complemento">Complemento</label>
          <input
            type="text"
            id="complemento"
            name="endereco.complemento"
            value={medicoData.endereco.complemento}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="bairro">Bairro</label>
          <input
            type="text"
            id="bairro"
            name="endereco.bairro"
            value={medicoData.endereco.bairro}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cidade">Cidade</label>
          <input
            type="text"
            id="cidade"
            name="endereco.cidade"
            value={medicoData.endereco.cidade}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="uf">UF</label>
          <input
            type="text"
            id="uf"
            name="endereco.uf"
            value={medicoData.endereco.uf}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cep">CEP</label>
          <input
            type="text"
            id="cep"
            name="endereco.cep"
            value={medicoData.endereco.cep}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Atualizar Médico</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default MedicoUpdateForm;
