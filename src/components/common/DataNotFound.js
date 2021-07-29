import React from 'react';

import { DataNotFoundSvg } from '../../assets/icons/DataNotFountSvg';

import { Typography } from 'antd';



const DataNotFound = ({ mensaje }) => {

    const { Title } = Typography;

    return (
        <div 
            style={{  
                width: '100%', 
                height: 400, 
                textAlign: 'center',
                marginTop: 50}}>

            <DataNotFoundSvg /> 
            <br />
            <Title level={4} style={{color: '#8c8c8c'}} >{ mensaje }</Title>
        </div>
    );
}
export default DataNotFound;