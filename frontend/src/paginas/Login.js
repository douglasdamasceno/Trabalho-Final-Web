import React from 'react';
import '../App.css';
import LoginUser from '../componentes/LoginUser';
import {Link} from  'react-router-dom';


function Login() {
  return (
    <div className="App">
      <div className="App-header">
          
        <div className="contente-login"> 
        <h2>Entre na Sua Conta</h2>
          <LoginUser  />
          <p>Ainda não possui conta? <Link to="/cadastro">Cadastre-se agora.</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
