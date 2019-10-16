import React from 'react';

import Sobre from './paginas/Sobre';
import Home from './paginas/Home';
import Contato from './paginas/Contato';
import Pagina404 from  './paginas/Pagina404';

import MeuHeader from './componentes/MeuHeader';
import MeuFooter from './componentes/MeuFooter';

import 'antd/dist/antd.css'; 
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { Layout} from 'antd';


function App() {
  return (
    <Layout > 
      <BrowserRouter>
        
        <MeuHeader />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/contato" component={Contato}/>
          <Route path="/sobre" component={Sobre}/>
          <Route path='*' component={Pagina404} />
        </Switch>

        </BrowserRouter>

        <MeuFooter />
      </Layout>      
      
  );
}

export default App;
