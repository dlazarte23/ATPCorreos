import React from "react";
import { PageHeader, Button, Input, Descriptions, Radio } from "antd";
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
        onBack={() => window.history.back()}
        title="Lista de Peticiones"
        //subTitle="This is a subtitle"
        avatar={{
          src: "https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico",
        }}
        extra={[
          <Button
            shape="round"
            key="1"
            type="primary"
            onClick={() => setShowModal({ ...showModal, create: true })}
          >
            <PlusOutlined />
            Nueva Petición
          </Button>,
        ]}
      >
        <Descriptions size="small" column={3}></Descriptions>
        <Search
          placeholder="Buscar"
          allowClear
          //onSearch={onSearch}
          style={{ width: "50%", marginBottom: "20px" }}
        />
        <br />
        <Radio.Group
          options={options}
          onChange={onChange}
          value={filter.value}
          optionType="button"
          buttonStyle="solid"
        />
      </PageHeader>
    </>
  );
}
