import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detalle-style.css";
import { Typography, Row, Col, PageHeader, Space, Descriptions, Spin } from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../assets/icons/InfoSvg";
import FormDetalle from "./components/FormDetalle";
import TableDetallesCP from "./components/TableDetallesCP";
import { Scrollbars } from "react-custom-scrollbars-2";

// actions de redux
import {
  crearNuevoStepAction,
  actualizarNuevoStepAction,
  descargarDetalleCPAction
} from "../../stateManagement/actions/stepsAction";

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

export default function DetalleCPPage(props) {

  const { Title, Paragraph } = Typography;
  const { detalle } = props.location.state;

  const loading = useSelector((state) => state.detalleCasoPrueba.loading);

  const dispatch = useDispatch();
  const crearStep = (step) => dispatch(crearNuevoStepAction(step));
  const actualizarStep = (step, id) =>
    dispatch(actualizarNuevoStepAction(step, id));

  const obtenerDetalleCP = idCasosPrueba => dispatch( descargarDetalleCPAction( idCasosPrueba ) );

  useEffect(( ) => {

    // ah este metodo pasarle el id del caso de uso, que por ahora no se puede ya que viene en null
    obtenerDetalleCP(2);

  }, [ ]);

  // aqui ya tendriamos lo que seria la lista de casos de prueba
  const stepss = useSelector( state => state.detalleCasoPrueba.detallesCasoPrueba );

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
              <p>Configuración Footer Email</p>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Space>
    </div>
  );

  return (
    <Spin spinning={loading} tip="Cargando..." size="large">
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        {/** Column para el titulo y el botón general */}
        <Row>
          <Col span={24}>
            <PageHeader
              title="Detalle del Caso De Prueba"
              onBack={() => window.history.back()}
              backIcon={<LeftOutlined />}
            >
              <Content extra={extraContent}>{renderContent()}</Content>
            </PageHeader>
          </Col>
        </Row>

        {/** Column para pasos (steps) */}
        <div className="contenedor">
          <Row className="steps-pasos">
            <Col span={24} className="setps">
              <FormDetalle detalle={detalle} crearStep={crearStep} />
            </Col>
          </Row>
        </div>

        {/** Column para la tabla */}
        <Row className="table-detalleCp">
          <Col span={22} offset={1}>
            <Title level={4}>Listado de Todos los Pasos</Title>
            <TableDetallesCP
              detalle={detalle}
              actualizarStep={actualizarStep}
            />
          </Col>
        </Row>
      </Scrollbars>
    </Spin>
  );
}
