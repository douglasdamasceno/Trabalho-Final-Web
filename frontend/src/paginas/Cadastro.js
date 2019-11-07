import React from 'react';
import '../App.css';
import CadastroUser from '../componentes/CadastroUser';


function Cadastro() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="contente-login">
          <h2>Realizar Cadastro</h2>
      
          <CadastroUser  /> 
        </div>
        </div>
    </div>
  );
}

export default Cadastro;
