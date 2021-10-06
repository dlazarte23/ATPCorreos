import React from "react";

import { Row, Col, Typography } from "antd";

import "./login-style.css";
import logo_correos from "../../assets/img/logo_correos_login.png";
import FormLogin from "./components/FormLogin";

const LoginPage = () => {

  const { Title } = Typography;

  return (
    <Row>
      
      {/* Columna para la parte izquierda de la screen */}
      <Col span={12} className="contenedor-izquierdo">
        <img alt="logo_correos" src={logo_correos} className="imgLogo" />

        <div className="parentNomApp">
          <Title className="nomApp">ATP Correos</Title>
        </div>
      </Col>

      {/* Columna para el formulario de login*/}
      <Col span={12}>
        <div className="contenedor-derecho">
          <FormLogin />
        </div>
      </Col>
      
    </Row>
  );
};

export default LoginPage;
