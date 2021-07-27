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

  const getSpan = () => {
    const width = window.screen.width;
    if (width >= 1920) {
      return 12;
    } else if (width >= 1280) {
      return 16;
    } else {
      return 24;
    }
  };

  const getOffset = () => {
    const width = window.screen.width;
    if (width >= 1920) {
      return 6;
    } else if (width >= 1280) {
      return 4;
    } else {
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
