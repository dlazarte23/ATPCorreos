import React from "react";
import { PageHeader, Button, Input, Radio, Descriptions } from "antd";
import { PlusOutlined } from "@ant-design/icons";

const { Search } = Input;

export default function HeaderPeticion(props) {
  const { filter, setFilter, showModal, setShowModal } = props;
  const options = [
    { label: "Personales", value: "Personales" },
    { label: "Grupales", value: "Grupales" },
  ];

  const onChange = (e) => {
    setFilter({
      value: e.target.value,
    });
  };

  return (
    <>
      <PageHeader
        className="site-page-header"
        title="Lista de Peticiones"
        avatar={{
          src: "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
        }}
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
        <Descriptions size="small" column={3}></Descriptions>
        <br />
        <Search
          placeholder="Buscar ..."
          allowClear
          style={{ maxWidth: "39%", marginBottom: "20px", marginTop: "20px" }}
        />
        <br />
        Filtros:
        <Radio.Group
          options={options}
          onChange={onChange}
          size={"small"}
          value={filter.value}
          optionType="button"
          buttonStyle="solid"
          style={{ marginLeft: 10 }}
        />
      </PageHeader>
    </>
  );
}
