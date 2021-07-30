import React from 'react';

import {
    PageHeader,
    Button,
    Space,
    Typography,
    Descriptions,
} from "antd";

import { LeftOutlined } from "@ant-design/icons";
import { DownloadOutlined, FileExcelOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../../assets/icons/InfoSvg";

import { useDispatch } from 'react-redux';

import { descargarDocumento } from '../../../stateManagement/actions/casosPruebasAction';

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

const HeaderCP = ({ peticion }) => {

    const dispatch = useDispatch();

    const { Title, Paragraph } = Typography;

    const descargaDocumento = ( idPeticion, tipoDocumento ) => dispatch( descargarDocumento( idPeticion, tipoDocumento ) );

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
                                    <span style={{ color: '#1890ff' }}>{peticion.nombre}</span>
                                </Descriptions.Item>
                                <Descriptions.Item label="Id. Petición">
                                    {peticion.codPeticion}
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
                    onClick={( ) => descargaDocumento( peticion.id, 'xml' ) }
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
                    onClick={( ) => descargaDocumento(peticion.id, 'excel') }
                >
                    Excel
                </Button>,
            ]}
        >
            <Content extra={extraContent}>{renderContent()}</Content>
        </PageHeader>
    );
}

export default HeaderCP;