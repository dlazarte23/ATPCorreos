import React from "react";
import "./cp-styles.css";
import { PageHeader, Row, Col, Button, Space, Typography, Descriptions } from 'antd';
import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../components/common/icons";
import TableListadoCP from "./components/TableListadoCP";
import FormCP from "./components/FormCP";

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
              <Space>
                <p className="text-export">Exportar en</p>
              </Space>,
              <Button
                shape="round"
                type="dashed"
                icon={<DownloadOutlined />}
                className="btnTestLink"
                onClick={() => alert("Botón en mantenimiento ..!!")}>
                Test Link
              </Button>,
              <Space>
                <p className="text-export"> o </p>
              </Space>,
              <Button
                shape="round"
                type="dashed"
                icon={<FileExcelOutlined />}
                className="btnExcel"
                onClick={() => alert("Botón en mantenimiento ..!!")}>
                Excel
              </Button>
            ]}>
          </PageHeader>

          <div className="card-information" style={{marginLeft: 57}}>
            <Space align="start">
              <InfoSvg />
              <PageHeader
                className="case-header"
                title={
                  <Title level={5}>
                    <Descriptions size="small" column={1} >
                      <Descriptions.Item label="Nombre Petición">
                        <a href="!">Configuración Footer Email</a>
                      </Descriptions.Item>
                      <Descriptions.Item label="Id. Petición">
                        {Math.floor(Math.random() * 10000000)}
                      </Descriptions.Item>
                    </Descriptions>
                  </Title>
                }
              >
              </PageHeader>
            </Space>
          </div>

          <div className="contenedor">
            <div>
              <FormCP />
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