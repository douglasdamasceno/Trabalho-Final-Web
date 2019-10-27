import  React from 'react';
import {Link} from  'react-router-dom';

import Modal from './ModalLoginUser';

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
        
        <Menu.Item key="4" className="btn_cadastro ant-btn ant-btn-primary" 
        style={{marginLeft:'60%',marginBottom:'1.2%'}}>
          <Link to="/cadastro">Cadastrar</Link></Menu.Item>
        
        <Menu.Item key="5" className="ant-btn ant-btn-ghost" 
        style={{marginLeft:'5px',marginBottom:'1.2%'}}>
        <Link to="/login">Entrar</Link></Menu.Item>
        
      </Menu>
        
    </Header>      
    );

}

export default MeuHeader;
