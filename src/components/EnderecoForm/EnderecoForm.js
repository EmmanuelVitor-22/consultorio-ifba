import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
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
  // Função de callback para tratar o envio do formulário
  const onSubmitForm = (values) => {
    console.log(values); // Exibe os dados do formulário no console
  };

  return (
    <Formik
      initialValues={{
        logradouro: '',
        bairro: '',
        cidade: '',
        uf: '',
        cep: '',
      }}
      validationSchema={enderecoSchema}
      onSubmit={onSubmitForm}
    >
      <Form>
        <div>
          <label htmlFor="logradouro">Logradouro:</label>
          <Field type="text" id="logradouro" name="logradouro" />
          <ErrorMessage name="logradouro" component="span" />
        </div>

        <div>
          <label htmlFor="bairro">Bairro:</label>
          <Field type="text" id="bairro" name="bairro" />
          <ErrorMessage name="bairro" component="span" />
        </div>

        <div>
          <label htmlFor="cidade">Cidade:</label>
          <Field type="text" id="cidade" name="cidade" />
          <ErrorMessage name="cidade" component="span" />
        </div>

        <div>
          <label htmlFor="uf">UF:</label>
          <Field type="text" id="uf" name="uf" />
          <ErrorMessage name="uf" component="span" />
        </div>

        <div>
          <label htmlFor="cep">CEP:</label>
          <Field
            as={InputMask}
            mask="99999-999"
            maskChar={null}
            type="text"
            id="cep"
            name="cep"
          />
          <ErrorMessage name="cep" component="span" />
        </div>

        <button type="submit">Salvar</button>
      </Form>
    </Formik>
  );
};

export default EnderecoForm;
