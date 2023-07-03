import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';

// Esquema de validação Yup
const enderecoSchema = yup.object().shape({
  logradouro: yup.string().required('Campo obrigatório'), // Campo logradouro é obrigatório
  bairro: yup.string().required('Campo obrigatório'), // Campo bairro é obrigatório
  cidade: yup.string().required('Campo obrigatório'), // Campo cidade é obrigatório
  uf: yup.string().required('Campo obrigatório'), // Campo uf é obrigatório
  cep: yup.string().required('Campo obrigatório'), // Campo cep é obrigatório
});

const EnderecoForm = () => {
  // Hook do React Hook Form
  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(enderecoSchema), // Utiliza o esquema de validação Yup
  });

  // Função de callback para tratar o envio do formulário
  const onSubmitForm = (data) => {
    console.log(data); // Exibe os dados do formulário no console
  };

  useEffect(() => {
    console.log('Componente EnderecoForm foi renderizado');
    // Coloque sua função a ser executada no momento da renderização aqui
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <label htmlFor="logradouro">Logradouro:</label>
        <input type="text" id="logradouro" name="logradouro" ref={register()} />
        {errors.logradouro && <span>{errors.logradouro.message}</span>}
      </div>

      <div>
        <label htmlFor="bairro">Bairro:</label>
        <input type="text" id="bairro" name="bairro" ref={register()} />
        {errors.bairro && <span>{errors.bairro.message}</span>}
      </div>

      <div>
        <label htmlFor="cidade">Cidade:</label>
        <input type="text" id="cidade" name="cidade" ref={register()} />
        {errors.cidade && <span>{errors.cidade.message}</span>}
      </div>

      <div>
        <label htmlFor="uf">UF:</label>
        <input type="text" id="uf" name="uf" ref={register()} />
        {errors.uf && <span>{errors.uf.message}</span>}
      </div>

      <div>
        <label htmlFor="cep">CEP:</label>
        <InputMask
          mask="99999-999"
          maskChar={null}
          id="cep"
          name="cep"
          inputRef={register()}
        >
          {(inputProps) => <input {...inputProps} />}
        </InputMask>
        {errors.cep && <span>{errors.cep.message}</span>}
      </div>

      <button type="submit">Salvar</button>
    </form>
  );
};

export default EnderecoForm;
