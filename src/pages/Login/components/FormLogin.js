import React from "react";

import { Form, Input, Button, Typography, Card } from "antd";
import { LoginOutlined } from "@ant-design/icons";

import { useHistory } from "react-router-dom";

const FormLogin = () => {

  const { Title } = Typography;

  const history = useHistory();

  const onFinish = (values) => {

    console.log("Success:", values);

    if ( values.username === "admin" && values.password === "admin" ) { 
      
      history.push('/');

    } else {
      
      console.error("No se existe el usuario..!!");

    }

  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="contenedor-formLogin">

      <Card>

        <Title level={3} className="tituloIniciarSesion">
          Iniciar Sesión
        </Title>

        <br />

        <Form
          name="basic"
          layout="vertical"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed} >

          <Form.Item
            label="Usuario o Email"
            name="username"
            rules={[{ required: true, message: "Debe ingresar su usuario o email!" }]} >

            <Input />

          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[{ required: true, message: "Debe ingresar su contraseña!" }]} >

            <Input.Password />

          </Form.Item>

          <Form.Item className="btnVamos">

            <Button
              shape="round"
              icon={<LoginOutlined />}
              type="primary"
              htmlType="submit" >

              Vamos

            </Button>

          </Form.Item>

        </Form>

      </Card>

    </div>
  );
};

export default FormLogin;
