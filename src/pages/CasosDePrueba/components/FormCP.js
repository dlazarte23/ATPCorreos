import React from "react";

import "../cp-styles.css";
import { Input, Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";

import { registrarCasosPruebasAction } from "../../../stateManagement/actions/casosPruebasAction";

const FormCP = ({ peticion, subject }) => {
  const dispatch = useDispatch();

  const registrarCasosDePrueba = (casosDePrueba) =>
    dispatch(registrarCasosPruebasAction(casosDePrueba));

  const onFinish = (values) => {
    const casoDePrueba = {
      shortUsername: subject.user,
      subjectId: subject.id,
      testDescription: values.descripcionCP,
      testName: values.nomCp,
    };

    registrarCasosDePrueba(casoDePrueba);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      layout="vertical"
      className="area-contenido"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hideRequiredMark
    >
      <div>
        <Form.Item
          className="block"
          label="Nombre De Caso De Prueba"
          name="nomCp"
          rules={[
            {
              required: true,
              message: "Debe ingresar el nombre del caso de prueba",
            },
          ]}
        >
          <Input />
        </Form.Item>
      </div>
      <div>
        <Form.Item
          label="Descripción De Caso De Prueba"
          name="descripcionCP"
          rules={[
            {
              required: true,
              message: "Debe ingresar la descripción del caso de prueba",
            },
          ]}
        >
          <Input.TextArea maxLength={100} showCount />
        </Form.Item>
      </div>
      <div className="div-align">
        <Button
          shape="round"
          className="btnAgregar"
          type="primary"
          htmlType="submit"
        >
          Agregar <PlusOutlined />
        </Button>
      </div>
    </Form>
  );
};

export default FormCP;
