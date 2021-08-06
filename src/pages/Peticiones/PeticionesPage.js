import React, { useState, useEffect } from "react";

import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
  ModalDetallePeticion,
} from "./components";

import { Scrollbars } from "react-custom-scrollbars-2";

import { Row, Col, Spin } from "antd";

import { useSelector } from "react-redux";

import { MessageError } from "../../components";

import dataNotFound from "../../assets/img/dataNotFound.png";
import alertError from "../../assets/img/alertError.png";

export default function Peticionespage() {
  const loading = useSelector((state) => state.peticiones.loading);
  const peticiones = useSelector((state) => state.peticiones.peticiones);
  const proyectos = useSelector((state) => state.peticiones.proyectos);

  const proyectoSeleccionado = useSelector(
    (state) => state.peticiones.proyectoSeleccionado
  );

  const [filter, setFilter] = useState({
    value: "Personales",
  });

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  const [filteredData, setFilteredData] = useState(peticiones);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = peticiones.filter((peticion) =>
      peticion.name?.includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [searchTerm]);

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

  const data = searchTerm !== "" ? filteredData : peticiones;

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
          {proyectos.length !== 0 ? (
            data.length !== 0 && !loading ? (
              <Col span={getSpan()} offset={getOffset()}>
                <ListPeticiones
                  peticiones={data}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Col>
            ) : (
              <MessageError
                icono={dataNotFound}
                mensaje={
                  proyectoSeleccionado === null
                    ? "Debe seleccionar un proyecto."
                    : `No existe peticiones creadas en el proyecto: ${proyectoSeleccionado.name}.`
                }
              />
            )
          ) : (
            <MessageError
              icono={alertError}
              mensaje={"Oops, error con el servidor!"}
            />
          )}
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
