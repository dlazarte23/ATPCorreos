import React from "react";

import './detalle-style.css';

import { Typography, Button, Row, Col, Card } from 'antd';
import { LeftOutlined, SaveFilled, InfoCircleFilled } from "@ant-design/icons";

import FormDetalle from "./components/FormDetalle";
import TableDetallesCP from "./components/TableDetallesCP";

const DetalleCPPage = () => {

    const { Title } = Typography;

    return (
        <>

            {/** Column para el titulo y el botón general */}
            <Row>
                <Col span={24}>
                    <Title level={3} >
                        <Button type="link" onc >
                            <LeftOutlined className="btnBack" />
                        </Button> 
                        Detalle Del Caso De Prueba
                    </Title>

                    <Button 
                        className="btnGuardaCambios"
                        type="primary"
                        shape="round"
                        icon={ <SaveFilled /> }>
                        Guardar
                    </Button>
                </Col>
            </Row>

            {/** Column para el info */}
            <Row>
                <Col span={6}>
                    <Card className="card-information">
                        <InfoCircleFilled className="icon-informacion" />
                        <Title level={5} >
                            CP - 001 Crear Nueva Ventana Conf.
                        </Title>
                        <span >
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </span>
                    </Card>
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