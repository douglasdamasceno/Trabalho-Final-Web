import React from 'react';
import { Layout, Menu, Icon } from 'antd';

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

function Buscar(){
  return(   
    <Layout>
      <Sider width={200} style={{ background: '#fff' }}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="home" />
                Atividades
              </span>
            }
          >
            <Menu.Item key="1">Atividades Criadas</Menu.Item>
            <Menu.Item key="2">Minhas Atividades</Menu.Item>
          </SubMenu>
          <Menu.Item key="3" >
            <span> <Icon type="user" />
              Perfil
            </span>
        </Menu.Item>
            
         
        </Menu>
          
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 400,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}


export default Buscar;
