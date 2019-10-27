import React from 'react';
import '../estilos/Home.css';
import ModalLoginUser from '../componentes/ModalLoginUser';

import { Layout , Input} from 'antd';
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
        <div>
          <div>
          TUDO DE MELHOR PARA VOCÊ
Aproveite as Vantagens
          </div>
          <div>

          </div>
        </div>
        <div className="contente-grupo">
            <div className="contente-informacoes">
              <h3>A plataforma que alavanca os seus resultados profissionais</h3>
              <p>A plataforma é uma solução 100% brasileira desenvolvida para identificar as 
                competências de cada usuário. Nele,
                você vai encontrar um conteúdo rico para o aprimoramento emocional
                 e profissional.</p>
              <p>Compreender o comportamento humano para proporcionar networking com
                 profissionais e empresas é o nosso ponto focal.</p>
            </div>
            <div className="contente-imagem"> 
            </div>
        </div>
      </Content>
  );
}

export default Home;
