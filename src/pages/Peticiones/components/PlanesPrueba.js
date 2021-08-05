import React from 'react';

import { Drawer, Typography, Space, Input, Button, Form, Spin } from 'antd';

import { UnorderedListOutlined, PlusOutlined } from '@ant-design/icons';

import { ListPlandePrueba } from '.';

import { useSelector, useDispatch } from 'react-redux';

import { agregarPlanPruebaAction } from '../../../stateManagement/actions/planesPruebaAction';

const PlanesPrueba = ( { showPP, onCloseDetallePP } ) => {
    
    const { Title } = Typography;

    const dispatch = useDispatch( );

    const registrarPP = subject => dispatch( agregarPlanPruebaAction( subject ) );

    const { id } = useSelector( state => state.planesPrueba.peticion );

    const { usuarioCorto } = useSelector( state => state.usuario.usuario );
    
    const onFinish = (values) => {
        console.log('Success:', values);

        const pp = {
            spring: id,
            subject: values.nomPlanPrueba,
            user: usuarioCorto
        };

        registrarPP(pp);
        
    };
    
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    
    const subjects = useSelector(state => state.planesPrueba.planesPrueba );

    const loading = useSelector( state => state.planesPrueba.loading );

    return (

        <Drawer
            width={500}
            placement="right"
            closable={true}
            onClose={onCloseDetallePP}
            visible={showPP}
        >
            <Spin spinning={loading} tip="Cargando..." size="large" >
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

                <ListPlandePrueba subjects={subjects} />

            </Spin>
        </Drawer>

    );
}

export default PlanesPrueba;