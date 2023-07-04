import React from 'react';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';
import { validate } from 'cpf-check';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';
import EnderecoForm from '../../EnderecoForm/EnderecoForm';

const CadastroPacienteForm = () => {
  const { handleSubmit, register, reset, formState: { errors } } = useForm();
  const onSubmit = async (data) => {
    try {
      console.log(data);
      // Enviar os dados para a API
      const response = await axios.post('http://localhost:8080/pacientes/cadastrar', data);
      console.log('Resposta da API:', response.data);
      toast.success('Cadastro realizado com sucesso!');
      reset({ cpf: '', 'endereco.cep': '' });
      
    } catch (error) {
      console.error('Erro ao enviar os dados para a API:', error);
      toast.error("Cadastro não realizado, verifique os campos.")

    }
  };


  

  return (
    <div className='wrapper'>
      <h2 className='form-title'>Cadastre um novo Paciente</h2>
      <hr></hr>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-label">
          Nome: <span className="required">*</span>
          <input
            type="text"
            name="nome"
            {...register('nome', { required: 'Nome é obrigatório' })}
            className="form-input"
          />
          {errors.nome && <span className="error">{errors.nome.message}</span>}
        </label>

        <label className="form-label">
          E-mail: <span className="required">*</span>
          <input
            type="text"
            name="email"
            {...register('email', { required: 'E-mail é obrigatório' })}
            className="form-input"
          />
          {errors.email && <span className="error">{errors.email.message}</span>}
        </label>
        <label className="form-label">
          Telefone: <span className="required">*</span>
          <input
            type="text"
            name="telefone"
            {...register('telefone', { required: 'Telefone é obrigatório' })}
            className="form-input"
          />
          {errors.telefone && <span className="error">{errors.telefone.message}</span>}
        </label>
        <label className="form-label">
          CPF: <span className="required">*</span>
          <InputMask
            mask="999.999.999-99"
            name="CPF"
            {...register('CPF', {   required: 'CPF é obrigatório',
            validate: (value) => validate(value) || 'CPF inválido'})}
          >
            {(inputProps) => <input type="text" {...inputProps} className="form-input" />}
          </InputMask>
          {errors.CPF && <span className="error">{errors.CPF.message}</span>}
        </label>
        <EnderecoForm register={register} errors={errors}/>
        <button type="submit" className="form-button">Cadastrar</button>
      </form>
      <ToastContainer/>
    </div>
  );
};

export default CadastroPacienteForm;
