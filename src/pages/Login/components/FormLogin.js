import React, { useState } from "react";

import { Form, Input, Button, Typography, Card } from "antd";
import { RightOutlined } from "@ant-design/icons";

import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";

import { logearUsuarioAction } from "../../../stateManagement/actions/usuarioAction";

const FormLogin = () => {
  const { Title } = Typography;

  const history = useHistory();
  const [isLogging, setIsLogging] = useState(false);

  const dispatch = useDispatch();

  const loginUsuario = usuario => dispatch( logearUsuarioAction ( usuario ) );

  const onFinish = async ( values ) => {

    setIsLogging(true);
    
    const response = await loginUsuario( values );

    if (response === "200") {

      //Redirigiendo al home...
      history.push("/peticiones");

    } else {

      setIsLogging(false);

    }

  };

  const onFinishFailed = (errorInfo) => {
    setIsLogging(false);
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
          onFinishFailed={onFinishFailed}
          hideRequiredMark
        >
          <Form.Item
            label="Usuario o Email"
            name="username"
            rules={[
              { required: true, message: "Debe ingresar su usuario o email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Contraseña"
            name="password"
            rules={[
              { required: true, message: "Debe ingresar su contraseña!" },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item className="btnVamos">
            <Button
              shape="round"
              type="primary"
              htmlType="submit"
              loading={isLogging}
            >
              Iniciar Sesión
              <RightOutlined />
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default FormLogin;