import React, { useEffect } from "react";

import { useDispatch, useSelector } from 'react-redux';

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

import { listarProyectoAction } from "../../../stateManagement/actions/peticionesAction";

const { Option } = Select;

export default function HeaderPeticion(props) {

  const { filter, setFilter, showModal, setShowModal, setSearchTerm } = props;

  const dispatch = useDispatch();

  const obtenerProyectos = () => dispatch( listarProyectoAction() );

  useEffect( async () => {

    await obtenerProyectos();

  }, []);

  const proyectos = useSelector( state => state.peticiones.proyectos );

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
      title="Lista de Peticiones"
      style={{ paddingLeft: "50px" }}
      extra={[
        <Button
          shape="round"
          key="1"
          type="primary"
          icon={<PlusOutlined />}
          onClick={() => setShowModal({ ...showModal, create: true })}
        >
          Nueva Petición
        </Button>,
      ]}
    >
      <Descriptions size="large" column={2} />
      <br />
      <Space align="start">
        <Input
          size="default"
          placeholder="Buscar"
          style={{ width: "400px" }}
          prefix={<SearchOutlined />}
          onChange={(e) => handleChangeSearch(e)}
        />
        
        <Select
          showSearch
          style={{ width: "200px" }}
          placeholder="Seleccione un proyecto"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          {
            proyectos.map( item => (
              <Option key={item.codProyecto} value={item.codProyecto}>
                {item.nombre}
              </Option>
            ))
          }
        </Select>

        <Radio.Group
          options={options}
          onChange={onChange}
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
