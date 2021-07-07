import React from "react";

import "./detalle-style.css";

import { Typography, Button, Row, Col, PageHeader, Space } from "antd";
import { InfoCircleTwoTone } from "@ant-design/icons";
import { SaveFilled } from "@ant-design/icons";
import info_icon from "../../assets/icons/info.png";

import FormDetalle from "./components/FormDetalle";
import TableDetallesCP from "./components/TableDetallesCP";

const DetalleCPPage = () => {
  const { Title } = Typography;

  return (
    <>
      {/** Column para el titulo y el botón general */}
      <Row>
        <Col span={24}>
          <PageHeader
            onBack={() => window.history.back()}
            title="Detalle De Casos De Prueba"
            extra={[
              <Button
                shape="round"
                key="1"
                icon={<SaveFilled />}
                type="primary"
                onClick={() => alert("Botón en mantenimiento ..!!")}
              >
                Guardar
              </Button>,
            ]}
          >
            <div className="card-information">
              <Space align="center">
                <InfoCircleTwoTone
                  className="info_icon"
                  style={{ fontSize: "40px" }}
                />
                {/* <img alt="icon_info" src={info_icon} className="info_icon" /> */}

                <Title level={5}>
                  CP - 001 Crear Nueva Ventana Configuración.
                </Title>
              </Space>
              <br />
              <span className="description-info">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a...
              </span>
            </div>
          </PageHeader>
        </Col>
      </Row>

      {/** Column para pasos (steps) */}
      <Row className="steps-pasos">
        <Col span={24} className="setps">
          <FormDetalle />
        </Col>
      </Row>

      {/** Column para la tabla */}
      <Row className="table-detalleCp">
        <Col span={24}>
          <Title level={4}>Listado De Todos Los Pasos</Title>
          <TableDetallesCP />
        </Col>
      </Row>
    </>
  );
};

export default DetalleCPPage;
