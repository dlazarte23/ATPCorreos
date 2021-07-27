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
    key: i,
    codPeticion: i * 1050020,
    nombre: `Nombre de la Petición Lorem Ipsum is simply dummy text. ${i}`,
    fecCreacion: "01/07/2021",
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
          <Col span={getSpan()} offset={getOffset()}>
            <ListPeticiones
              listData={listPeticiones}
              showModal={showModal}
              setShowModal={setShowModal}
            />
          </Col>
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
