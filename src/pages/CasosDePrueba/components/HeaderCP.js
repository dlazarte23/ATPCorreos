import React, { useState } from "react";

import { PageHeader, Button, Space, Typography, Descriptions } from "antd";

import { LeftOutlined } from "@ant-design/icons";
import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../../assets/icons/InfoSvg";

import { useDispatch } from "react-redux";

import { descargarDocumento } from "../../../stateManagement/actions/casosPruebasAction";

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
    key="1"
  >
    <div className="description-info"></div>
  </div>
);

const HeaderCP = ({ peticion, subject }) => {
  const dispatch = useDispatch();

  const { Title, Paragraph } = Typography;

  const descargaDocumento = (idPeticion, tipoDocumento) => {
    dispatch(descargarDocumento(idPeticion, tipoDocumento));
  };

  const renderContent = () => (
    <div className="card-information">
      <Space align="start">
        <InfoSvg />
        <PageHeader
          className="case-header"
          title={
            <Title level={5} style={{ maxWidth: 600 }}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Plan de pruebas">
                  <span style={{ color: "#1890ff" }}>{subject.subject}</span>
                </Descriptions.Item>
              </Descriptions>
              <Descriptions size="small" column={2}>
                <Descriptions.Item label="Id. petición">
                  {peticion.petitionCode}
                </Descriptions.Item>
                <Descriptions.Item label="Nombre petición">
                  {peticion.petitionName}
                </Descriptions.Item>
              </Descriptions>
            </Title>
          }
        ></PageHeader>
      </Space>
    </div>
  );

  return (
    <PageHeader
      title="Creación de casos de prueba"
      onBack={() => window.history.back()}
      backIcon={<LeftOutlined />}
      extra={[
        <Space key="1">
          <Paragraph className="text-export">Exportar en</Paragraph>
        </Space>,
        <Button
          shape="round"
          type="dashed"
          icon={<DownloadOutlined />}
          className="btnTestLink"
          onClick={() => descargaDocumento(subject.id, "xml")} 
          key="2"
        >
          Test Link
        </Button>,
        <Space key="3">
          <Paragraph className="text-export"> ó </Paragraph>
        </Space>,
        <Button
          shape="round"
          type="dashed"
          icon={<FileExcelOutlined />}
          className="btnExcel"
          onClick={() => descargaDocumento(subject.id, "excel")}
          key="4"
        >
          Excel
        </Button>,
      ]}
    >
      <Content extra={extraContent}>{renderContent()}</Content>
    </PageHeader>
  );
};

export default HeaderCP;
