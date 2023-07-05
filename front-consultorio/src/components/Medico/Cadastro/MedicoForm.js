import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import EnderecoForm from '../../EnderecoForm/EnderecoForm';
import './styleM.css';

const MedicoForm = () => {
  const { register, handleSubmit, formState: { errors },reset } = useForm();

  const onSubmit = (data) => {
    axios.post('http://localhost:8080/medicos/cadastrar', data)
      .then(response => {
        console.log(response.data); 
        toast.success('Cadastro realizado com sucesso!');
        reset();
      })
      .catch(error => {
        console.log(error); 
        toast.error("Cadastro não realizado, verifique os campos.")
      });
  };


  return (
    <div className='wrapper'>
      <h2 className='form-title'>Cadastrar Médico</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">
          Nome: <span className="required">*</span>
        </label>
        <input
          type="text"
          {...register('nome', { required: 'Nome é obrigatório' })}
          className="form-input"
        />
        {errors.nome && <span className="form-error-message">{errors.nome.message}</span>}

        <label className="form-label">
          Email: <span className="required">*</span>
        </label>
        <input
          type="text"
          {...register('email', { required: 'Email é obrigatório' })}
          className="form-input"
        />
        {errors.email && <span className="form-error-message">{errors.email.message}</span>}

        <label className="form-label">
          Telefone: <span className="required">*</span>
        </label>
        <input
          type="text"
          {...register('telefone', { required: 'Telefone é obrigatório' })}
          className="form-input"
        />
        {errors.telefone && <span className="form-error-message">{errors.telefone.message}</span>}

        <label className="form-label">
          CRM: <span className="required">*</span>
        </label>
        <input
          type="text"
          {...register('CRM', { required: 'CRM é obrigatório' })}
          className="form-input"
        />
        {errors.CRM && <span className="form-error-message">{errors.CRM.message}</span>}

        <label className="form-label">
          Especialidade: <span className="required">*</span>
        </label>
        <select {...register('especialidade', { required: 'Especialidade é obrigatória' })} className="form-input">
          <option value="">Selecione</option>
          <option value="Dermatologia">Dermatologia</option>
          <option value="Cardiologia">Cardiologia</option>
          <option value="Ortopedia">Ortopedia</option>
        
        </select>
        {errors.especialidade && <span className="form-error-message">{errors.especialidade.message}</span>}

        <EnderecoForm register={register} errors={errors} />

        <button type="submit" className="form-submit-button">Cadastrar</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default MedicoForm;
