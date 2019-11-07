import React from 'react';
import '../App.css';
import '../estilos/Contato.css';
import ContatoForm from   '../componentes/FormContato';
function Contato() {
  return (
    <div className="App">
      <div className="contente-cabecalho">
         <h2>Fale Conosco</h2> 
        <p>Preencha o formulário abaixo que retornaremos em breve.</p>

      </div> 
      <div className="contente-contato">
          <div className="contente-form">
            <h3>Formulario</h3>
            <ContatoForm />
          </div>

          <div className="dados-contato">
            <h3>Dados de Contato</h3>
              <p>Av.Lorem ipsum dolor sit amet- Quixadá - Ceará /CE</p>
             <p>(xx) 4002-8922 / (xx) 99999-0000</p>
              <p>contato@contato.com.br</p>
          </div>
        
      </div>
    </div>
  );
}

export default Contato;
