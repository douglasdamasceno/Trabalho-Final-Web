import React from 'react';
import { Modal, Button } from 'antd';
import LoginUser from './LoginUser';

import 'antd/dist/antd.css'; 

class ModalLoginUser extends React.Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal} size="large" >Get started</Button>
        <Modal
          title="Realizar Login"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
        <LoginUser />
        </Modal>
      </div>
    );
  }
}

export default ModalLoginUser;