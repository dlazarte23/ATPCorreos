import React from 'react';

import "../cp-styles.css";

import { Input, Button, Form } from 'antd';

import { PlusOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from 'react-redux';

import { registrarCasosPruebasAction } from '../../../stateManagement/actions/casosPruebasActions';

const FormCP = () => {

    const casosPruebas = useSelector(state => state.casosPruebas.casosPruebas);
    const loading = useSelector(state => state.casosPruebas.loading);

    const dispatch = useDispatch();

    const registrarCasosDePrueba = (casosDePrueba) => dispatch(registrarCasosPruebasAction(casosDePrueba));

    const onFinish = (values) => {

        console.log('Success:', values);

        // loading componetn etc

        //registramos el cp
        registrarCasosDePrueba(values);


        console.log("DESDE NUETRO COMPONENTE => ", casosPruebas);
        console.log("DESDE NUETRO COMPONENTE => ", loading);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            layout="vertical"
            className="area-contenido"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <div>
                <Form.Item
                    className="block"
                    label="Nombre De Caso De Prueba"
                    name="nomCp"
                    rules={[{ required: true, message: "Debe el nombre del casos de prueba !" }]} >
                    <Input />
                </Form.Item>
            </div>
            <div>
                <Form.Item
                    label="Descripción De Caso De Prueba"
                    name="descripcionCP"
                    rules={[{ required: true, message: "Debe el nombre del casos de prueba !" }]} >
                    <Input.TextArea maxLength={100} showCount/>
                </Form.Item>
            </div>
            <div className="div-align">
                <Button
                    shape="round"
                    icon={<PlusOutlined />}
                    className="btnAgregar"
                    type="primary"
                    htmlType="submit">Agregar
                </Button>
            </div>
        </ Form>
    );
}

export default FormCP;