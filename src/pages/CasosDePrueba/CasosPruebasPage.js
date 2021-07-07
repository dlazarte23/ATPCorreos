import React from "react";
import "./cp-styles.css";

import { PageHeader, Row, Col, Button, Space, Typography, Input } from 'antd';
import { InfoCircleTwoTone } from "@ant-design/icons";

import { DownloadOutlined, FileExcelOutlined, PlusCircleFilled } from "@ant-design/icons";

import TableListadoCP from "./components/TableListadoCP";

const CasosPruebasPage = () => {

  const { Title } = Typography;

  return (
    <>
      <Row>
        <Col span={24}>
          <PageHeader
            title="Creación De Casos De Prueba"
            onBack={() => window.history.back()}
            extra={[
              <Button
                shape="round"
                icon={<DownloadOutlined />}
                className="btnTestLink"
                onClick={() => alert("Botón en mantenimiento ..!!")}>
                Test Link
              </Button>,
              <Button
                shape="round"
                icon={<FileExcelOutlined />}
                className="btnExcel"
                onClick={() => alert("Botón en mantenimiento ..!!")}>
                Excel
              </Button>
            ]}>
          </PageHeader>

          <div className="contenedor">
            <Space align="center">
              <InfoCircleTwoTone
                className="info_icon"
                style={{ fontSize: "40px" }}
              />
              <Title level={5}>
                Peticion ### - Nombre de la peticion
              </Title>
            </Space>
          <div className="area-contenido">
            <div>
              <Title level={5}>Nombre del caso de prueba</Title>
              <Input />
            </div>
            <div>
              <Title level={5}>Descripcion del caso de prueba</Title>
              <Input className="texto-descripcion" />
            </div>
            <div className="div-align">
              <Button shape="round" icon={<PlusCircleFilled />} className="btnAgregar" type="primary">Agregar</Button>
            </div>
          </div>
          <Row className="table-detalleCp">
            <Col span={24}>
              <Title level={4}>Listado De Plan de Pruebas</Title>
              <TableListadoCP />
            </Col>
          </Row>
          </div>

        </Col>
    </Row>
    </>
  );
};

export default CasosPruebasPage;