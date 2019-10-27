import React from 'react';
import 'antd/dist/antd.css'; 
import {Form,Input,Button} from 'antd';
  
class RegistrationForm extends React.Component {
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
      
        <Form {...formItemLayout} onSubmit={this.handleSubmit} style={{width:'450px',
        paddingLeft:'80px',paddingRight:'80px'}}>
          
          <Form.Item
            label={""
              }
          >
            {getFieldDecorator('nickname', {
              rules: [{ required: true, message: 'Por favor insera seu Nome!', whitespace: true }],
            })(<Input placeholder="Nome" style={{width:'300px'}}/>)}
          </Form.Item>
          
          <Form.Item label="">
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
            })(<Input placeholder="Email" style={{width:'300px'}}/>)}
          </Form.Item>
          <Form.Item label="" hasFeedback>
            {getFieldDecorator('password', {
              rules: [
                {
                  required: true,
                  message: 'Por favor insera sua senha!',
                },
                {
                  validator: this.validateToNextPassword,
                },
              ],
            })(<Input.Password placeholder="Senha" style={{width:'300px'}}/>)}
          </Form.Item>
          <Form.Item label="" hasFeedback>
            {getFieldDecorator('confirm', {
              rules: [
                {
                  required: true,
                  message: 'Por favor confirme sua senha!',
                },
                {
                  validator: this.compareToFirstPassword,
                },
              ],
            })(<Input.Password placeholder="Confirmar Senha" style={{width:'300px'}} onBlur={this.handleConfirmBlur} />)}
          </Form.Item>
          
            <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Realizar Cadastro
            </Button>
          </Form.Item>
        </Form>
      );
    }
  }
  
  const WrappedRegistrationForm = Form.create({ name: 'register' })(RegistrationForm);
  
  export default WrappedRegistrationForm;
