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
          <Col span={12} offset={6}>
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
