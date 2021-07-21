import React, { useState } from "react";
import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
  InfoPeticion,
} from "./components";

import { Scrollbars } from "react-custom-scrollbars-2";
import { Row, Col } from "antd";

export default function Peticionespage() {
  const [filter, setFilter] = useState({
    value: "Personales",
  });

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });



  const listData = [];
  for (let i = 1; i < 8; i++) {
    listData.push({
      key: i*26,
      href: "https://ant.design",
      title: `Nombre de la Petición ${i}`,
      sprint: i * 3,
      avatar:
        "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
      description: "Creador: Diego Antonio Lazarte Peláez ",
      dateGeneracion: '01/07/2021',
      dateActualizacion: '20/07/2021',
      create: 'Diego Antonio Lazarte Peláez',
      numberPrueba: i * 32,
      content:
        "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
    });
  }

  const listData2 = [];
  for (let i = 1; i < 31; i++) {
    listData2.push({
      key: i,
      href: "https://ant.design",
      title: `Configuración Footer Emails ${i}`,
      avatar:
        "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
      description: "Creador: Diego Antonio Lazarte Peláez ",
      dateGeneracion: '01/07/2021',
      dateActualizacion: '20/07/2021',
      create: 'Diego Antonio Lazarte Peláez',
      numberPrueba: i * 32,
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    });
  }




  const [detallePeticion, setDetallePeticion] = useState('')
  const handleDetalle = (value) => {
    setDetallePeticion(value.item)
  }

  return (
    <>
      <Scrollbars autoHeight={true} autoHeightMax={580}>
        <Row>
          <Col span={24}>
            <HeaderPeticion
              filter={filter}
              setFilter={setFilter}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Col>
        </Row>

        <Row>
          <Col span={13}>
            <ListPeticiones
              listData={filter.value === "Personales" ? listData : listData2}
              showModal={showModal}
              setShowModal={setShowModal}
              handleDetalle={handleDetalle}
            />
          </Col>
          <Col span={10} offset={1}>
            <InfoPeticion peticion={detallePeticion} />
          </Col>
        </Row>

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
