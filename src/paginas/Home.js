import React from 'react';
import '../estilos/Home.css';
import { Layout ,Button} from 'antd';
const { Content} = Layout;

function Home() {
  return (
      <Content>
        <div className="contente-apresentacao">
          <h1 className="apresentacao">Levante-se da cadeira e comece agora</h1>
          <p className="descricao">Encontrar uma atividade física no SIte nunca foi tão fácil ou mais personalizável.<br/>
             Você está a poucos passos de encontrar atividades proximo a você.</p>
             <Button type="danger" size='large' >Get started</Button>
        </div>    
      </Content>
  );
}

export default Home;
