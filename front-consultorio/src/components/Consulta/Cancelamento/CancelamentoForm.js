import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './style.css'; // Importe o arquivo CSS correspondente

const CancelamentoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      data.consultaId = parseInt(data.consultaId);
  
      const response = await axios.delete('http://localhost:8080/consultas/cancelar', {
        data: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      console.log('Consulta cancelada:', response.data);
      toast.success('Consulta cancelada com sucesso!');
    } catch (error) {
      console.log('Erro ao cancelar consulta:', error);
      console.log("zorra",data);
      toast.error('Erro ao cancelar consulta. Tente novamente mais tarde.');
    }
  };
  
  return (
    <div className="cancelamento-form-wrapper">
      <h2 className="form-title">Cancelar Consulta</h2>
      <ToastContainer />
      <form onSubmit={handleSubmit(onSubmit)} className="cancelamento-form">
        <div className="form-group">
          <label htmlFor="consultaId" className="form-label">ID da Consulta</label>
          <input
            type="number"
            id="consultaId"
            className="form-input"
            {...register('consultaId', { required: true })}
          />
          {errors.consultaId && <span className="form-error">Preencha o campo ID da Consulta</span>}
        </div>

        <div className="form-group">
          <label htmlFor="cancelamento" className="form-label">Motivo do Cancelamento</label>
          <select id="cancelamento" className="form-input" {...register('cancelamento', { required: true })}>
            <option value="">Selecione um motivo</option>
            <option value="PACIENTE_DESISTIU">Paciente desistiu</option>
            <option value="MEDICO_CANCELOU">Médico cancelou</option>
            <option value="OUTROS">Outros</option>
          </select>
          {errors.cancelamento && <span className="form-error">Selecione um motivo de cancelamento</span>}
        </div>

        <button type="submit" className="form-button">Cancelar Consulta</button>
      </form>
    </div>
  );
};

export default CancelamentoForm;
