import React, { useEffect } from "react";
import "./cp-styles.css";
import { Row, Col, Typography, Spin } from "antd";

import HeaderCP from "./components/HeaderCP";
import TableListadoCP from "./components/TableListadoCP";
import FormCP from "./components/FormCP";

import { Scrollbars } from "react-custom-scrollbars-2";

import { useDispatch, useSelector } from "react-redux";

import { listarCasosDePruebaAction } from "../../stateManagement/actions/casosPruebasAction";

export default function CasosPruebasPage( props ) {

  const { Title } = Typography;

  const { peticion, subject } = props.location.state;

  const dispatch = useDispatch();

  const obtenerCasosDePrueba = (idPeticion) => dispatch(listarCasosDePruebaAction(idPeticion));

  useEffect(() => {
    obtenerCasosDePrueba(subject.id);
    // eslint-disable-next-line
  }, []);

  const { loading, usuario } = useSelector((state) => state.casosPruebas);

  return (
    <Spin spinning={loading} tip="Cargando..." size="large">
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        {/** Column para el titulo y el botón general */}
        <Row>
          <Col span={24}>
            <HeaderCP peticion={peticion} subject={subject} />

            <div className="contenedor">
              <FormCP
                subject={subject} 
                usuario={usuario} 
                loading={loading} />
            </div>

            <Row className="table-detalleCp">
              <Col span={22} offset={1}>
                <Title level={4}>Listado de casos de prueba</Title>
                <TableListadoCP
                  peticion={peticion}
                  usuario={usuario}
                  loading={loading}
                  subject={subject}
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Scrollbars>
    </Spin>
  );
}
