import React from "react";

//import assets own
import "./login-style.css";
import logo_correos from "../../../public/images/logo_correos_login.png";

//import componentes from antd
import { Row, Col, Typography } from "antd";

//import components own
import FormLogin from "./components/FormLogin";

/**
 * Screen principal para la pagina de login
 */
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
