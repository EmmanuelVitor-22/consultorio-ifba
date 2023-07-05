import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const MedicoUpdateForm = ({ medicos }) => {
  const { id } = useParams();
  const [medicoData, setMedicoData] = useState({
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
    const fetchMedico = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/medicos/${id}`);
        const medico = response.data;
        setMedicoData({
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
      } catch (error) {
        console.log('Erro ao buscar médico:', error);
      }
    };

    fetchMedico();
  }, [id]);

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
      await axios.put(`http://localhost:8080/medicos/atualizar/${id}`, medicoData);
      console.log('Médico atualizado com sucesso!');
      toast.success('Atualização realizada com sucesso!');
    } catch (error) {
      console.log('Erro ao atualizar médico:', error);
      toast.error('Não foi possível atualizar o médico');
    }
  };

  return (
    <div>
      <h2>Atualizar Médico</h2>
      <form onSubmit={handleSubmit}>
        
      </form>
      <ToastContainer />
    </div>
  );
};

export default MedicoUpdateForm;
