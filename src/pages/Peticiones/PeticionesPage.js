import React, { useState } from "react";

import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
} from "./components";

import { Scrollbars } from "react-custom-scrollbars-2";

import { Row, Col, Spin } from "antd";

import { useSelector } from "react-redux";

import { MessageError } from '../../components';

import dataNotFound from '../../assets/img/dataNotFound.png';
import alertError from '../../assets/img/alertError.png';

export default function Peticionespage() {

  const loading = useSelector( state => state.peticiones.loading );

  const peticiones = useSelector( state => state.peticiones.peticiones );

  const proyectos = useSelector( state => state.peticiones.proyectos );

  const proyectoSeleccionado = useSelector( state => state.peticiones.proyectoSeleccionado );

  const proyecto = proyectos.filter( proyecto => proyecto.id === proyectoSeleccionado );

  const [filter, setFilter] = useState({
    value: "Personales",
  });

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  const [searchTerm, setSearchTerm] = useState("");

  console.log(
    window.screen.width > 1280
      ? "mayor a 1280"
      : window.screen.width > 1920
      ? "mayor a 1920"
      : "pequeña"
  );

  const getSpan = () => {
    const width = window.screen.width;
    if (width >= 1920) {
      console.log(12);
      return 12;
    } else if (width >= 1280) {
      console.log(16);
      return 16;
    } else {
      console.log(24);
      return 24;
    }
  };

  const getOffset = () => {
    const width = window.screen.width;
    if (width >= 1920) {
      console.log(6);
      return 6;
    } else if (width >= 1280) {
      console.log(4);
      return 4;
    } else {
      console.log(0);
      return 0;
    }
  };

  return (
    <Spin spinning={loading} tip="Cargando..." size="large">
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        <Row>
          <Col span={24}>
            <HeaderPeticion
              filter={filter}
              setFilter={setFilter}
              showModal={showModal}
              setShowModal={setShowModal}
              setSearchTerm={setSearchTerm}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>

          {
            proyectos.length !==0 ?

              peticiones.length !== 0 ? 

                <Col span={getSpan()} offset={getOffset()}>
                  <ListPeticiones
                    peticiones={peticiones}
                    showModal={showModal}
                    setShowModal={setShowModal}
                  />
                </Col>

                :

                <MessageError icono={dataNotFound} mensaje={ proyectoSeleccionado === null ? 'Debe seleccionar un proyecto.' : `No existe peticiones creadas en el proyecto: ${proyecto[0].nombre}.`} />
              
              :
            
            <MessageError icono={alertError} mensaje={'Oops, error con el servidor!'} />
          }
          
        </Row>
        <br />

        <ModalDetallePeticion
          showModal={showModal}
          setShowModal={setShowModal}
        />
        <ModalCreatePeticion
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Scrollbars>
    </Spin>
  );
}
