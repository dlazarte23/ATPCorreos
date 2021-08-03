import React from 'react';

import { Drawer, Typography, Space, Input, Button, Form } from 'antd';

import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';

import { ListPlandePrueba } from '.';

const PlanesPrueba = ( { showPP, onCloseDetallePP, data } ) => {

    const { Title } = Typography;
    
    const onFinish = (values) => {
        console.log('Success:', values);
    };
    
    const onFinishFailed = (errorInfo) => {
       console.log('Failed:', errorInfo);
    };

    return (

        <Drawer
            width={500}
            placement="right"
            closable={true}
            onClose={onCloseDetallePP}
            visible={showPP}
        >
            <Title level={4} style={{textAlign: 'center'}} > <UnorderedListOutlined /> Lista de planes de prueba</Title>

            <Space style={{marginTop: 20}}>
                <Form
                    name="basic"
                    layout="inline"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}>
                        <Form.Item  
                            name="nomPlanPrueba"
                            required={[
                                {
                                    require: true,
                                    message: 'Debe ingresar un nombre!'
                                }
                            ]}>
                            <Input placeholder="Nombre del plan de prueba" style={{width: 310}} />
                        </Form.Item>
                        <Form.Item>
                            <Button type="text" icon={<PlusOutlined />} htmlType="submit" >Agregar</Button>
                        </Form.Item>
                </Form>
            </Space>

            <ListPlandePrueba peticion={data} />
        </Drawer>

    );
}

export default PlanesPrueba;