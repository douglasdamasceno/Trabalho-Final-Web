import React from 'react';

import 'antd/dist/antd.css'; 
import '../estilos/LoginUser.css';

import { Form, Icon, Input, Button} from 'antd';



class LoginUser extends React.Component {
  
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form" style={{width:'450px',
      paddingLeft:'80px',paddingRight:'80px'}}>
        <Form.Item>
          {getFieldDecorator('username', {
            rules: [{ required: true, message: 'Por favor, informe o email!' }],
          })(
            <Input
              prefix={<Icon type="user" 
              style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="email"
              placeholder="Email"
            />,
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Por favor, informe uma senha' }],
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              type="password"
              placeholder="Senha"
            />,
          )}
        </Form.Item>
        <Form.Item>
          <Button 
            style={{ width: '100%'}} 
            type="default" 
            htmlType="submit" 
            className="login-form-button"
            >
            Login
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(LoginUser);

export default WrappedNormalLoginForm;