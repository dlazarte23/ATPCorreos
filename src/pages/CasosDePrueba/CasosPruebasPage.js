import React from "react";
import "./cp-styles.css";
import {
  Row,
  Col,
  Typography,
  Spin
} from "antd";

import HeaderCP from "./components/HeaderCP";
import TableListadoCP from "./components/TableListadoCP";
import FormCP from "./components/FormCP";

import { Scrollbars } from "react-custom-scrollbars-2";

import { useSelector } from "react-redux";

export default function CasosPruebasPage( props ) {

  const { Title } = Typography;

  const { peticion } = props.location.state;

  const { responseTests } =  peticion

  const loading = useSelector( state => state.casosPruebas.loading );

  return (
    <Spin spinning={loading} tip="Cargando..." size="large" >
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        {/** Column para el titulo y el botón general */}
        <Row>
          <Col span={24}>

            <HeaderCP peticion={peticion} />

            <div className="contenedor">
              <FormCP peticion={peticion} />
            </div>

            <Row className="table-detalleCp">
              <Col span={22} offset={1}>
                <Title level={4}>Listado de Casos de Prueba</Title>
                <TableListadoCP dataTable={responseTests}/>
              </Col>
            </Row>

          </Col>
        </Row>
      </Scrollbars>
    </Spin>
  );
}
