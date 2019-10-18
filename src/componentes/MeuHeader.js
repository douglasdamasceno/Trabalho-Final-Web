import  React from 'react';
import {Link} from  'react-router-dom';

import 'antd/dist/antd.css'; 
import { Layout, Menu, Button} from 'antd';
const  { Header} = Layout;

function MeuHeader(){
    return (
      <Header style={{backgroundColor:'#fff'}}
      >
      <div className="logo">
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', justifyItems: 'center'  }}
      >
       <Menu.Item key="1"><Link to="/"> Home</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/sobre">Sobre</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/contato">Contato</Link></Menu.Item>
        <Button className="btn_cadastra" type="danger" style={{marginLeft:'60%'}}>
        <Link to="/cadastro">Cadastra</Link></Button>
        </Menu>
        
    </Header>      
    );

}

export default MeuHeader;
