import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detalle-style.css";
import {
  Typography,
  Row,
  Col,
  PageHeader,
  Space,
  Descriptions,
  Spin,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";
import { InfoSvg } from "../../assets/icons/InfoSvg";
import FormDetalle from "./components/FormDetalle";
import TableDetallesCP from "./components/TableDetallesCP";
import { Scrollbars } from "react-custom-scrollbars-2";

// actions de redux
import {
  crearNuevoStepAction,
  actualizarNuevoStepAction,
  descargarDetalleCPAction,
  eliminarStepAction,
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
  const { detalle, peticion, subject } = props.location.state;

  const loading = useSelector((state) => state.detalleCasoPrueba.loading);

  const dispatch = useDispatch();

  const crearStep = (step) => dispatch(crearNuevoStepAction(step));

  const actualizarStep = (step, id) =>
    dispatch(actualizarNuevoStepAction(step, id));

  const obtenerDetalleCP = (idCasosPrueba) =>
    dispatch(descargarDetalleCPAction(idCasosPrueba));

  const eliminarStep = (idStep) => dispatch(eliminarStepAction(idStep));

  useEffect(() => {
    // ah este metodo pasarle el id del caso de uso, que por ahora no se puede ya que viene en null

    obtenerDetalleCP(detalle.testId);
    // eslint-disable-next-line
  }, [detalle.testId]);

  const stepss = useSelector(
    (state) => state.detalleCasoPrueba.detallesCasoPrueba
  );

  const renderContent = () => (
    <div className="card-information">
      <Space align="start">
        <InfoSvg />
        <PageHeader
          className="case-header"
          title={
            <Title level={5} className="description-info">
              {`Nombre del caso de prueba: ${detalle.testName}`}
            </Title>
          }
        >
          <Paragraph className="description-info">
            {`Descripción: ${detalle.testDescription}`}
          </Paragraph>
          <Descriptions size="small" column={3} className="description-info">
            <Descriptions.Item label="Id. petición">
              {subject.subject}
            </Descriptions.Item>
            <Descriptions.Item label="Id. petición">
              {peticion.petitionCode}
            </Descriptions.Item>
            <Descriptions.Item label="Nombre petición">
              <p>{peticion.petitionName}</p>
            </Descriptions.Item>
          </Descriptions>
        </PageHeader>
      </Space>
    </div>
  );

  return (
    /* <Spin spinning={loading} tip="Cargando..." size="large"> */
    <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
      {/** Column para el titulo y el botón general */}
      <Row>
        <Col span={24}>
          <PageHeader
            title="Detalle del caso de prueba"
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
            <FormDetalle
              detalle={detalle}
              stepsData={stepss}
              crearStep={crearStep}
            />
          </Col>
        </Row>
      </div>

      {/** Column para la tabla */}
      <Row className="table-detalleCp">
        <Col span={22} offset={1}>
          <Title level={4}>Listado de Todos los Pasos</Title>
          <TableDetallesCP
            detalle={detalle}
            steps={useSelector((state) => state.detalleCasoPrueba)}
            actualizarStep={actualizarStep}
            eliminarStep={eliminarStep}
            loading={loading}
          />
        </Col>
      </Row>
    </Scrollbars>
    /* </Spin> */
  );
}
