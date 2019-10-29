import React from 'react';
import '../estilos/Home.css';

import { Layout , Input, Icon } from 'antd';
const { Content} = Layout;

const { Search } = Input;


function Home() {
  return (
      <Content>
        <div className="contente-apresentacao">
             <div>
              <h1 className="apresentacao">Levante-se e comece agora</h1>
              <p className="descricao">Encontrar uma atividade fisicas e de lazer nunca foi tão fácil e rapido.<br/>
               Você está a poucos passos de encontrar atividades proximo a você.</p>
             
               <Search
              placeholder="Digite a atividade aqui" type="danger"
              enterButton="Buscar"
              size="large" style={{width:'400px',alignContent:'center'}}
              onSearch={value => console.log(value)}
            />
      
           </div>
        </div>   
        <div className="contente-vantagens">
          <div className=" contente-vantagens-cabecalho">
          <h4>TUDO DE MELHOR PARA VOCÊ</h4>
              <h2>Aproveite as Vantagens</h2>
          </div>
          <div className=" contente-vantagens-conteudo">
              
              <div className="contente-vantagens-conteudo-item">
              
                <Icon className="icon-vantagens" type="clock-circle" />
                <h4>Não Perca tempo</h4>
                <p>Encontre atividades físicas de forma Rápido.</p>
              </div>
              <div className=" contente-vantagens-conteudo-item">
                <Icon className="icon-vantagens" type="environment" />
                <h4>Proximo de você</h4>
                <p>Encontre atividades físicas proximo de você.</p>
              </div>
              <div className=" contente-vantagens-conteudo-item" >
                <Icon className="icon-vantagens" type="like"  />
                <h4>Diversão Garantida</h4>
                <p>Saia da rotina e encontrarar Diversão e Entretenimento.</p>
              </div>
          </div>
        </div>
        <div className="contente-grupo">
            <div className="contente-informacoes">
              <h3>Bacon ipsum dolor amet lorem is simply dummy text of</h3>
              <p>Bacon ipsum dolor amet tongue capicola prosciutto lorem 
              Ipsum is simply dummy text of the printing and typesetting industry
              .</p>
              <p>Bacon ipsum dolor amet tongue capicola prosciutto,
                 salami pancetta andouille shoulder leberkas pork.</p>
            </div>
            <div className="contente-imagem"> 
            </div>
        </div>
      </Content>
  );
}

export default Home;
