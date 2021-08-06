import React, { useEffect } from "react";

import "../cp-styles.css";
import { Input, Button, Form } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";

import { registrarCasosPruebasAction } from "../../../stateManagement/actions/casosPruebasAction";

const FormCP = ({ subject, usuario, loading }) => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const registrarCasosDePrueba = (casosDePrueba) =>
    dispatch(registrarCasosPruebasAction(casosDePrueba));

  const onFinish = (values) => {
    const casoDePrueba = {
      shortUsername: usuario.shortUser,
      subjectId: subject.id,
      testDescription: values.descripcionCP,
      testName: values.nomCp,
    };

    registrarCasosDePrueba(casoDePrueba);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  useEffect(() => {
    !loading && form.resetFields();
  }, [loading]);

  return (
    <Form
      layout="vertical"
      form={form}
      className="area-contenido"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      hideRequiredMark
    >
      <div>
        <Form.Item
          className="block"
          label="Nombre de caso de prueba"
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
          label="Descripción de caso de prueba"
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
