import React from 'react';
import {Link} from  'react-router-dom';
import './estilos/MeuHeader.css'

class MeuHeader extends React.Component{

  state = {
    current: 'mail',
  };

  handleClick = e => {
    this.setState({
      current: e.key,
    });
  };

  render(){
    return (
      <div>
      <image src="" />
        <nav id="menu">
          <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/sobre">Sobre</Link></li>
              <li><Link to="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    );
  }
}
export default MeuHeader;
