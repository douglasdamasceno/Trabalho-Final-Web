import React from 'react';
import './App.css';
import Sobre from './Sobre';
import Contato from './Contato';
import Pagina404 from  './Pagina404';
import MeuHeader from './MeuHeader'


import { BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <MeuHeader />
          
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/contato" component={Contato}/>
        <Route path="/sobre" component={Sobre}/>
        <Route path='*' component={Pagina404} />
      </Switch>

      <h1>Meu Rodape</h1>
    </BrowserRouter>  
  );
}


const Home = ()=>{
  return <h1>Home page</h1>
}


export default App;
