import React from 'react';
import 'antd/dist/antd.css'; 
import {Form,Input,Button} from 'antd';
  
  
  
  class ContatoForm extends React.Component {
    state = {
      confirmDirty: false,
      autoCompleteResult: [],
    };
  
    handleSubmit = e => {
      e.preventDefault();
      this.props.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    };
  
    handleConfirmBlur = e => {
      const { value } = e.target;
      this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    };
  
    compareToFirstPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    };
  
    validateToNextPassword = (rule, value, callback) => {
      const { form } = this.props;
      if (value && this.state.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    };
  
    
    render() {
      const { getFieldDecorator } = this.props.form;
      
      const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      };
      const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      };
      
  
      
      return (
      
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          
          <Form.Item
            label={
              <span>
                Nome
              </span>
            }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Por favor insera seu Nome!', whitespace: true }],
            })(<Input />)}
          </Form.Item>
          
          <Form.Item label="E-mail">
            {getFieldDecorator('email', {
              rules: [
                {
                  type: 'email',
                  message: 'E-mail! invalido!',
                },
                {
                  required: true,
                  message: 'Por favor insera seu E-mail!',
                },
              ],
            })(<Input />)}
          </Form.Item>
            <Form.Item label={
              <span>
                Mensagem
              </span>
            }> 
            <textarea className="ant-form" id="clienteMensagem" ></textarea>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
            <Button type="ghost" htmlType="submit" className="meu-botao login-form-button ant-btn ant-btn-ghost">
              Enviar Mensagem
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(ContatoForm);
  
  export default WrappedRegistrationForm;
