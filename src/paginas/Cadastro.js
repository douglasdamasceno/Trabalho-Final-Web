import React from 'react';
import '../App.css';
import LoginUser from '../componentes/LoginUser';
import CadastroUser from '../componentes/CadastroUser';


function Cadastro() {
  return (
    <div className="App">
      <header className="App-header">
        <CadastroUser  />
        </header>
    </div>
  );
}

export default Cadastro;
