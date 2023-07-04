import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css';

const ConsultaForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      const consultaData = {
        medicoId: parseInt(data.medico),
        pacienteId: parseInt(data.paciente),
        dataHora: `${data.data}T${data.hora}:00`
      };

      const response = await axios.post('http://localhost:8080/consultas/agendar', consultaData);
      console.log('Consulta agendada:', response.data);
      toast.success('Consulta agendada com sucesso!');
    } catch (error) {
      console.log('Erro ao agendar consulta:', error);
      toast.error('Erro ao agendar consulta. Tente novamente mais tarde.');
    }
  };

  return (
    <div className='wrapper'>
      <h2 className='form-title'>Cadastrar Médico</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="form-group">
          <label htmlFor="paciente" className="form-label">Id Paciente</label>
          <input
            type="text"
            id="paciente"
            className="form-input"
            {...register('paciente', { required: true })}
          />
          {errors.paciente && <span className="form-error">Preencha o campo Paciente</span>}
        </div>

        <div className="form-group">
          <label htmlFor="medico" className="form-label">Id Médico</label>
          <input
            type="text"
            id="medico"
            className="form-input"
            {...register('medico')}
          />
        </div>

            <div className='wrapper-interno'>
                
        <div className="form-group dt">
          <label htmlFor="data" className="form-label data">Data da Consulta</label>
          <input
            type="date"
            id="data"
            className="form-input data-input"
            {...register('data', { required: true })}
          />
          {errors.data && <span className="form-error">Preencha o campo Data da Consulta</span>}
        </div>

        <div className="form-group dt">
          <label htmlFor="hora" className="form-label hora">Hora da Consulta</label>
          <input
            type="time"
            id="hora"
            className="form-input hora-input"
            {...register('hora', { required: true })}
          />
          {errors.hora && <span className="form-error">Preencha o campo Hora da Consulta</span>}
        </div>
            </div>

        <button type="submit" className="form-button">Agendar Consulta</button>
      </form>
    </div>
  );
};

export default ConsultaForm;
