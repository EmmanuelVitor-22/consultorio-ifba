import React from 'react';
import InputMask from 'react-input-mask';
import './style.css';
const EnderecoForm = ({ register, errors }) => {
    return (
      <div className="endereco-form">
        <div className='wrapper-interno'>
          <label className="form-label logradouro">
            Logradouro: <span className="required">*</span>
            <input
              type="text"
              name="endereco.logradouro"
              {...register('endereco.logradouro', { required: 'Logradouro é obrigatório' })}
              className="form-input"
            />
            {errors.endereco?.logradouro && (
              <span className="error">{errors.endereco.logradouro.message}</span>
            )}
          </label>
  
          <label className="form-label numero">
            Número:
            <input
              type="text"
              name="endereco.numero"
              {...register('endereco.numero')}
              className="form-input"
            />
            {errors.endereco?.numero && (
              <span className="error">{errors.endereco.numero.message}</span>
            )}
          </label>
        </div>
  
        <label className="form-label">
          Complemento:
          <input
            type="text"
            name="endereco.complemento"
            {...register('endereco.complemento')}
            className="form-input"
          />
        </label>
  
        <label className="form-label">
          Bairro: <span className="required">*</span>
          <input
            type="text"
            name="endereco.bairro"
            {...register('endereco.bairro', { required: 'Bairro é obrigatório' })}
            className="form-input"
          />
          {errors.endereco?.bairro && (
            <span className="error">{errors.endereco.bairro.message}</span>
          )}
        </label>
        <div className='wrapper-interno'>
          <label className="form-label cidade">
            Cidade: <span className="required">*</span>
            <input
              type="text"
              name="endereco.cidade"
              {...register('endereco.cidade', { required: 'Cidade é obrigatória' })}
              className="form-input"
            />
            {errors.endereco?.cidade && (
              <span className="error">{errors.endereco.cidade.message}</span>
            )}
          </label>
  
          <label className="form-label uf">
            UF: <span className="required">*</span>
            <input
              type="text"
              name="endereco.uf"
              {...register('endereco.uf', { required: 'UF é obrigatória' })}
              className="form-input"
            />
            {errors.endereco?.uf && <span className="error">{errors.endereco.uf.message}</span>}
          </label>
        </div>
  
        <label className="form-label">
          CEP: <span className="required">*</span>
          <InputMask
            mask="99999-999"
            name="endereco.cep"
            {...register('endereco.cep', { required: 'CEP é obrigatório' })}
          >
            {(inputProps) => <input type="text" {...inputProps} className="form-input" />}
          </InputMask>
          {errors.endereco?.cep && <span className="error">{errors.endereco.cep.message}</span>}
        </label>
      </div>
    );
  };
  
  export default EnderecoForm;
  
