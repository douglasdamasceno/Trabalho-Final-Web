import React from 'react';

import Sobre from './paginas/Sobre';
import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import Buscar from './paginas/Buscar';

import MeuHeader from './componentes/MeuHeader';
import MeuFooter from './componentes/MeuFooter';

import 'antd/dist/antd.css'; 
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Layout} from 'antd';


function App() {
  return (
    <Layout style={{backgroundColor:'#fff'}}> 
       <div>
      <BrowserRouter >
        <div>
        <MeuHeader />
        
          </div>
           <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/login" component={Login}/>
          <Route path="/buscar" component={Buscar}/>
          <Route path='*' component={Home} />
        </Switch>

        </BrowserRouter>
        </div>

        <MeuFooter />
      </Layout>      
    );
}

export default App;
