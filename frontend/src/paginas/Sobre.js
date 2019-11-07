import React from 'react';
import '../App.css';
import '../estilos/Sobre.css'

function Sobre() {
  return (
    <div className="App">
      <div className="App-header">
        <div className="contente-sobre-cabecalho">
          <h3>Sobre</h3>
        </div>
      <div className="contente-sobre"> 
            <div className="contente-historia">
              <h2>HISTÓRIA, MISSÃO E VISÃO</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book.</p>
            </div>
            <div className="contente-valores">
              <h2>VALORES</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                 Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                 when an unknown printer took a galley of type and scrambled it to make a type 
                 specimen book.</p> 
            </div>  
        </div>
        </div>
    </div>
  );
}

export default Sobre;
