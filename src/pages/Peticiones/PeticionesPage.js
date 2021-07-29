import React, { useState } from "react";

import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
} from "./components";

import { Scrollbars } from "react-custom-scrollbars-2";

import { Row, Col } from "antd";

import { useSelector } from "react-redux";

import { DataNotFound } from '../../components';

export default function Peticionespage() {

  // obtenemos la lista de peticiones de nuestro state general
  const peticiones = useSelector( state => state.peticiones.peticiones );

  const proyectos = useSelector( state => state.peticiones.proyectos );

  const proyectoSeleccionado = useSelector( state => state.peticiones.proyectoSeleccionado );

  const proyecto = proyectos.filter( proyecto => proyecto.id == proyectoSeleccionado);

  const [filter, setFilter] = useState({
    value: "Personales",
  });

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  //const [listPeticiones, setListPeticiones] = useState(listData);
  const [searchTerm, setSearchTerm] = useState("");

  /* useEffect(() => {
    const results = listData.filter((peticion) =>
      peticion.title.includes(searchTerm.toLowerCase())
    );
    setListPeticiones(results);
  }, [searchTerm]); */
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
    <>
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
            peticiones.length !== 0 ? 
            <Col span={getSpan()} offset={getOffset()}>
              <ListPeticiones
                peticiones={peticiones}
                showModal={showModal}
                setShowModal={setShowModal}
              />
            </Col>
            :
            <DataNotFound mensaje={ proyectoSeleccionado === null ? 'Debe seleccionar un proyecto.' : `No existe peticiones creadas en el proyecto: ${proyecto[0].nombre}.`} />
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
    </>
  );
}
