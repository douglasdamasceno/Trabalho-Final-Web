import React from 'react';

import Sobre from './paginas/Sobre';
import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Pagina404 from  './paginas/Pagina404';
import Cadastro from './paginas/Cadastro';
import Login from './paginas/Login';
import MeuHeader from './componentes/MeuHeader';
import MeuFooter from './componentes/MeuFooter';

import 'antd/dist/antd.css'; 
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Layout} from 'antd';


function App() {
  return (
    <Layout> 
       <div>
      <BrowserRouter>
        <div>
          <MeuHeader />
        </div>
           <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path="/cadastro" component={Cadastro}/>
          <Route path="/login" component={Login}/>
          <Route path='*' component={Pagina404} />
        </Switch>

        </BrowserRouter>
        </div>

        <MeuFooter />
      </Layout>      
    );
}

export default App;
