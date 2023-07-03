import React from 'react';
import ReactDOM from 'react-dom/client';
import { BreadCrumb } from './components/Teste/BreadCrumb';
import EnderecoForm from './components/EnderecoForm/EnderecoForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EnderecoForm/>
  </React.StrictMode>
);
