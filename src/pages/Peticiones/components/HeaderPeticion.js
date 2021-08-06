import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import {
  PageHeader,
  Button,
  Input,
  Radio,
  Descriptions,
  Select,
  Space,
} from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import "../peticion-style.css";

import {
  listarProyectoAction,
  obtenerPeticionesAction,
  seleccionarProyectoAction,
} from "../../../stateManagement/actions/peticionesAction";

const { Option } = Select;

export default function HeaderPeticion(props) {
  const { filter, setFilter, showModal, setShowModal, setSearchTerm } = props;

  const dispatch = useDispatch();

  const obtenerProyectos = (shortUser) =>
    dispatch(listarProyectoAction(shortUser));

  useEffect(() => {
    obtenerProyectos();

    // eslint-disable-next-line
  }, []);

  const proyectos = useSelector((state) => state.peticiones.proyectos);

  const proyectoSeleccionado = useSelector(
    (state) => state.peticiones.proyectoSeleccionado
  );

  const seleccionarProyecto = (codProyecto) =>
    dispatch(seleccionarProyectoAction(codProyecto));
  const obtenerPeticiones = (codProyecto) =>
    dispatch(obtenerPeticionesAction(codProyecto));

  const buscarPeticiones = (value) => {
    // setteamos el proyecto para almacenar el general

    const proyecto = proyectos.filter((proyecto) => proyecto.id === value);
    

    seleccionarProyecto(proyecto[0]);

    // actualizamos la lista de peticiones dependiendo el tipo de proyecto q le pasemos
    obtenerPeticiones(value);
  };

  const options = [
    { label: "Personales", value: "Personales" },
    { label: "Grupales", value: "Grupales" },
  ];

  const onChange = (e) => {
    setFilter({
      value: e.target.value,
    });
  };

  const handleChangeSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <PageHeader
      className="site-page-header"
      title="Lista de peticiones"
      style={{ paddingLeft: "50px" }}
      extra={[
        <Button
          shape="round"
          disabled={proyectoSeleccionado === null ? true : false}
          key="1"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setShowModal({ ...showModal, create: true })}
        >
          Nueva petición
        </Button>,
      ]}
    >
      <Descriptions size="large" column={2} />
      <br />
      <Space align="start">
        <Input
          size="default"
          placeholder="Buscar"
          disabled={proyectoSeleccionado === null ? true : false}
          style={{ width: "400px" }}
          prefix={<SearchOutlined />}
          onChange={(e) => handleChangeSearch(e)}
        />

        <Select
          defaultValue={
            proyectoSeleccionado === null ? null : proyectoSeleccionado.id
          }
          showSearch
          style={{ width: "200px" }}
          placeholder="Seleccione un proyecto"
          optionFilterProp="children"
          onChange={buscarPeticiones}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {proyectos.map((item) => (
            <Option key={item.projectCode} value={item.id}>
              {item.name}
            </Option>
          ))}
        </Select>

        <Radio.Group
          options={options}
          onChange={onChange}
          disabled={proyectoSeleccionado === null ? true : false}
          size={"middle"}
          value={filter.value}
          optionType="button"
          buttonStyle="solid"
          style={{ marginLeft: 10 }}
        />
      </Space>
      <br />
    </PageHeader>
  );
}