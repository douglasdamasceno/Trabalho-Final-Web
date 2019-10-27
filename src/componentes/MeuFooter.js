import React from 'react';
import { Layout} from 'antd';
const { Footer} = Layout;

//<Footer style={{ textAlign: 'center' }}>
function MeuFooter(){
    return (
        <Footer style={{ textAlign: 'center' }}>
         <p >©2019 Created by Douglas Damasceno</p>
        </Footer>
    );
}

export default MeuFooter;
