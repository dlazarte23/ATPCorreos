import React, { useState, useEffect } from "react";

import { Scrollbars } from "react-custom-scrollbars-2";
import { Row, Col, Spin, Result } from "antd";
import { useSelector } from "react-redux";

import {
  HeaderPeticion,
  ListPeticiones,
  ModalCreatePeticion,
} from "./components";
import SkeletonList from "../../components/common/SkeletonList";
import { getSpan, getOffset } from "../../utils/helpers/screenMeasures";

const Peticionespage = () => {
  
  const loading = useSelector((state) => state.peticiones.loading);
  const peticiones = useSelector((state) => state.peticiones.peticiones);
  const proyectos = useSelector((state) => state.peticiones.proyectos);
  const usuario = useSelector((state) => state.usuario.usuario);

  const proyectoSeleccionado = useSelector(
    (state) => state.peticiones.proyectoSeleccionado
  );

  const [filter, setFilter] = useState("Personales");

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  const [filteredData, setFilteredData] = useState(peticiones);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const results = peticiones.filter((peticion) =>
      peticion.petitionCode.includes(searchTerm.toLowerCase())
    );
    setFilteredData(results);
  }, [peticiones, searchTerm]);

  const data = searchTerm !== "" ? filteredData : peticiones;
  const loadingPP = useSelector((state) => state.planesPrueba.loading);

  return (
    <Spin spinning={loadingPP} tip="Un momento..." size="large">
      <Scrollbars autoHeight={true} autoHeightMin={"80vh"}>
        <Row>
          <Col span={24}>
            <HeaderPeticion
              filter={filter}
              setFilter={setFilter}
              showModal={showModal}
              setShowModal={setShowModal}
              setSearchTerm={setSearchTerm}
              usuario={usuario}
            />
          </Col>
        </Row>

        <Row style={{ marginTop: 20 }}>
          {proyectos.length !== 0 ? (
            data.length !== 0 ? (
              <Col span={getSpan()} offset={getOffset()}>
                <ListPeticiones
                  peticiones={data}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              </Col>
            ) : !loading ? (
              <Col span={getSpan()} offset={getOffset()}>
                <Result
                  status={proyectoSeleccionado === null ? "warning" : "404"}
                  title={
                    proyectoSeleccionado === null
                      ? "Debe seleccionar un proyecto."
                      : `No existe peticiones ${filter.toLocaleLowerCase()} en el proyecto: ${proyectoSeleccionado.name
                      }.`
                  }
                />
              </Col>
            ) : (
              <Col span={getSpan()} offset={getOffset()}>
                <SkeletonList loading={loading} />
              </Col>
            )
          ) : !loading ? (
            <Col span={getSpan()} offset={getOffset()}>
              <Result
                status="500"
                title="500"
                subTitle="Oops, error con el servidor!"
              />
            </Col>
          ) : (
            <Col span={getSpan()} offset={getOffset()}>
              <Result
                status={proyectoSeleccionado === null ? "warning" : "404"}
                title={
                  proyectoSeleccionado === null
                    ? "Debe seleccionar un proyecto."
                    : `No existe peticiones ${filter.toLocaleLowerCase()} en el proyecto: ${proyectoSeleccionado.name
                    }.`
                }
              />
            </Col>
          )}
        </Row>
        <br />
        <ModalCreatePeticion
          showModal={showModal}
          setShowModal={setShowModal}
        />
      </Scrollbars>
    </Spin>
  );
}

export default Peticionespage;