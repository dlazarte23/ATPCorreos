import React from "react";
import "./cp-styles.css";
import {
  PageHeader,
  Row,
  Col,
  Button,
  Space,
  Typography,
  Descriptions,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../assets/icons/InfoSvg";
import TableListadoCP from "./components/TableListadoCP";
import FormCP from "./components/FormCP";

import { Scrollbars } from "react-custom-scrollbars-2";

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

export default function CasosPruebasPage( props ) {

  const { Title, Paragraph } = Typography;

  const { peticion } = props.location.state;

  const renderContent = () => (
    <div className="card-information">
      <Space align="start">
        <InfoSvg />
        <PageHeader
          className="case-header"
          title={
            <Title level={5}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Nombre Petición">
                  <span style={{color: '#1890ff'}}>{ peticion.nombre }</span>
                </Descriptions.Item>
                <Descriptions.Item label="Id. Petición">
                  {peticion.codPeticion }
                </Descriptions.Item>
              </Descriptions>
            </Title>
          }
        ></PageHeader>
      </Space>
    </div>
  );

  return (
    <>
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        {/** Column para el titulo y el botón general */}
        <Row>
          <Col span={24}>
            <PageHeader
              title="Creación de Casos de Prueba"
              onBack={() => window.history.back()}
              backIcon={<LeftOutlined />}
              extra={[
                <Space>
                  <Paragraph className="text-export">Exportar en</Paragraph>
                </Space>,
                <Button
                  shape="round"
                  type="dashed"
                  icon={<DownloadOutlined />}
                  className="btnTestLink"
                  onClick={() => alert("Botón en mantenimiento ..!!")}
                >
                  Test Link
                </Button>,
                <Space>
                  <Paragraph className="text-export"> o </Paragraph>
                </Space>,
                <Button
                  shape="round"
                  type="dashed"
                  icon={<FileExcelOutlined />}
                  className="btnExcel"
                  onClick={() => alert("Botón en mantenimiento ..!!")}
                >
                  Excel
                </Button>,
              ]}
            >
              <Content extra={extraContent}>{renderContent()}</Content>
            </PageHeader>
            <div className="contenedor">
              <FormCP />
            </div>
            <Row className="table-detalleCp">
              <Col span={22} offset={1}>
                <Title level={4}>Listado de Casos de Prueba</Title>
                <TableListadoCP />
              </Col>
            </Row>
          </Col>
        </Row>
      </Scrollbars>
    </>
  );
}
