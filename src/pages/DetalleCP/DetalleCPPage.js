import React from "react";

import "./detalle-style.css";
import {
  Typography,
  Button,
  Row,
  Col,
  PageHeader,
  Space,
  Descriptions
} from "antd";
import { SaveFilled, LeftOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../components/common/icons";
import FormDetalle from "./components/FormDetalle";
import TableDetallesCP from "./components/TableDetallesCP";

const Content = ({ children, extra }) => (
  <div className="content">
    <div className="main">{children}</div>
    <div className="extra">{extra}</div>
  </div>
);

const extraContent = (
  <div
    style={{
      display: "flex",
      width: "max-content",
      justifyContent: "flex-end",
    }}
  >
    <div className="description-info"></div>
  </div>
);

const DetalleCPPage = () => {
  const { Title, Paragraph } = Typography;

  const renderContent = () => (
    <div className="card-information">
      <Space align="start">
        <InfoSvg />
        <PageHeader
          className="case-header"
          title={
            <Title level={5} className="description-info">
              CP - 001 Crear Nueva Ventana Configuración.
            </Title>
          }
        >
          <Paragraph className="description-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </Paragraph>
          <Paragraph className="description-info">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a. Lorem Ipsum is simply dummy
            text of the printing and typesetting industry.
          </Paragraph>
          <Descriptions size="small" column={3} className="description-info">
            <Descriptions.Item label="Id. Petición">
              {Math.floor(Math.random() * 10000000)}
            </Descriptions.Item>
            <Descriptions.Item label="Nombre Petición">
              <a href="!">Configuración Footer Email</a>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Space>
    </div>
  );

  return (
    <>
      {/** Column para el titulo y el botón general */}
      <Row>
        <Col span={24}>
          <PageHeader
            onBack={() => window.history.back()}
            backIcon={<LeftOutlined />}
            title="Detalle del Caso De Prueba"
            extra={[
              <Button
                key="1"
                icon={<SaveFilled />}
                type="primary"
                onClick={() => alert("Botón en mantenimiento ..!!")}
              >
                Guardar
              </Button>,
            ]}
          >
            <Content extra={extraContent}>{renderContent()}</Content>
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
