import React from 'react';

import { Typography } from 'antd';

const MessageError = ({ mensaje, icono }) => {

    const { Title } = Typography;

    return (
        <div 
            style={{  
                width: '100%', 
                height: 400, 
                textAlign: 'center',
                marginTop: 50}}>

            <img alt="not_found_data" src={icono} style={{width: 210, height: 210}}/>
            <br />
            <Title level={4} style={{color: '#8c8c8c', marginTop: 20}} >{ mensaje }</Title>
        </div>
    );
}
export default MessageError;