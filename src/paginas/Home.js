import React from 'react';
import '../estilos/Home.css';
import { Layout ,Button, Input} from 'antd';
const { Content} = Layout;

const { Search } = Input;

const teste = (e)=>{
  console.log('ola');
}

function Home() {
  return (
      <Content>
        <div className="contente-apresentacao">
             <div>
              <h1 className="apresentacao">Levante-se da cadeira e comece agora</h1>
              <p className="descricao">Encontrar uma atividade fisicas e de lazer nunca foi tão fácil e rapido.<br/>
               Você está a poucos passos de encontrar atividades proximo a você.</p>
             <Button onClick={teste} type="danger" size='large' >Get started</Button>
            
             </div>
          <div className="buscar-atividades">
            <Search
              placeholder="Digite a atividade aqui" type="danger"
              enterButton="Buscar"
              size="large" style={{width:'400px',alignContent:'center'}}
              onSearch={value => console.log(value)}
            />
          </div>
        </div>   
      </Content>
  );
}

export default Home;
