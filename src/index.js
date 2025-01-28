import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Equipe from './components/equipe';


/*ESSE AQUI DÁ O START NA APLICAÇÃO*/

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>

    <App />
    <Equipe />

  </React.StrictMode>
  
  
);
