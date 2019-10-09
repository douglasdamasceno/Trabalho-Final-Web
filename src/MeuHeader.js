import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function MeuHeader() {
  return (
    <div className="App">
      <ul>
          <li><Link to="/">  Home</Link></li>
          <li><Link to="/sobre">  Sobre</Link></li>
          <li><Link to="/contato">  Contato</Link></li>
      </ul>
    </div>
  );
}

export default MeuHeader;
