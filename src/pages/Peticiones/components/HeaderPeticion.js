import React from "react";
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

// const { Search } = Input;
const { Option } = Select;

export default function HeaderPeticion(props) {
  const { filter, setFilter, showModal, setShowModal, setSearchTerm } = props;
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
          /* onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch} */
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="Citypaq">Citypaq</Option>
          <Option value="Shiva">Shiva</Option>
          <Option value="Sgie">Sgie</Option>
          <Option value="Minerva">Minerva</Option>
          <Option value="Gnomo">Gnomo</Option>
          <Option value="Glacier">Glacier</Option>
          <Option value="Duapost">Duapost</Option>
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
