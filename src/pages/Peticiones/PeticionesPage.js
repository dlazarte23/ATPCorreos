import React, { useState, useEffect } from "react";
import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
} from "./components";

import { Scrollbars } from "react-custom-scrollbars-2";
import { Row, Col } from "antd";

const listData = [];
for (let i = 1; i < 21; i++) {
  listData.push({
    key: i * 1050020,
    href: "https://ant.design",
    title: `Nombre de la Petición ${i}`,
    sprint: i * 3,
    avatar:
      "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
    description: "Creador: Diego Antonio Lazarte Peláez ",
    dateGeneracion: "01/07/2021",
    dateActualizacion: "20/07/2021",
    create: "Diego Antonio Lazarte Peláez",
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
    dateGeneracion: "01/07/2021",
    dateActualizacion: "20/07/2021",
    create: "Diego Antonio Lazarte Peláez",
    numberPrueba: i * 32,
    content:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  });
}

export default function Peticionespage() {
  const [filter, setFilter] = useState({
    value: "Personales",
  });

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  const [listPeticiones, setListPeticiones] = useState(listData);
  const [searchTerm, setSearchTerm] = useState("");

  /* useEffect(() => {
    const results = listData.filter((peticion) =>
      peticion.title.includes(searchTerm.toLowerCase())
    );
    setListPeticiones(results);
  }, [searchTerm]); */

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

        <Row>
          <Col span={24}>
            <ListPeticiones
              listData={listPeticiones}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Col>
          {/* <Col span={10} offset={1}>
            <InfoPeticion peticion={detallePeticion} />
          </Col> */}
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
