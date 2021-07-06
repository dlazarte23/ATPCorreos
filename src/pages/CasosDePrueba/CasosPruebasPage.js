import React from "react";

import { PageHeader, Row, Col, Button } from 'antd';

import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";

const CasosPruebasPage = () => {
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
                  key="1"
                  icon={ <DownloadOutlined /> }
                  type="primary"
                  onClick={() => alert("Botón en mantenimiento ..!!")}>
                  Test Link
              </Button>,
              <Button
                  shape="round"
                  key="1"
                  icon={ <FileExcelOutlined /> }
                  type="primary"
                  onClick={() => alert("Botón en mantenimiento ..!!")}>
                  Excel
              </Button>
            ]}>

          </PageHeader>
        </Col>
      </Row>
    </>
  );
};

export default CasosPruebasPage;