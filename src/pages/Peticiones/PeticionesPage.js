import React, { useState } from "react";
import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
  InfoPeticion
} from "./components";
import { Row, Col } from "antd";
import InfoPetitcion from "./components/InfoPetiticion";

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
      key: i,
      href: "https://ant.design",
      title: `Nombre de la Petición ${i}`,
      avatar:
        "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
      description: "Creador: Diego Antonio Lazarte Peláez ",
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
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    });
  }

  return (
    <Row>
      <Col>
        <HeaderPeticion
          filter={filter}
          setFilter={setFilter}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Col>
      {/* <Col lg={14} sm={24}> */}
      <Col lg={14} sm={14}>
        <ListPeticiones
          listData={filter.value === "Personales" ? listData : listData2}
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Col>

      <Col lg={10} sm={10}>
        <InfoPetitcion />
      </Col>

      <ModalDetallePeticion showModal={showModal} setShowModal={setShowModal} />
      <ModalCreatePeticion showModal={showModal} setShowModal={setShowModal} />
    </Row>
  );
}
