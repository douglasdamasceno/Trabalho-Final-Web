import React from 'react';
import 'antd/dist/antd.css'; 
import { Layout, Menu, Button } from 'antd';


const { Header, Content, Footer } = Layout;

function Teste(){

return(
  <Layout className="layout">
   
    <Content style={{ padding: '0 50px'}}>
      
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
  </Layout>
);
}

export default Teste;