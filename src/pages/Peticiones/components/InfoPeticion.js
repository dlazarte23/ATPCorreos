import React from "react";

import { useHistory } from "react-router";

import { Card, Typography, Descriptions, Button, Space, Tooltip } from "antd";
import {
  ExceptionOutlined,
  SettingFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const InfoPeticion = () => {
  const history = useHistory();

  const { Title } = Typography;

  return (
    <Card style={{ maxWidth: 550, float: "right" }}>
      <div style={{ textAlign: "center", width: "100%", marginBottom: 40 }}>
        <Title level={4}>
          <ExceptionOutlined /> Detalle de la Petición
        </Title>
      </div>

      <div>
        <Descriptions layout="horizontal" column={1}>
          <Descriptions.Item label="Nombre">
            Nombre de la petición 1
          </Descriptions.Item>
          <Descriptions.Item label="id Petición">9676417</Descriptions.Item>
          <Descriptions.Item label="Sprint">18</Descriptions.Item>
          <Descriptions.Item label="Fecha generación">
            01/01/2021
          </Descriptions.Item>
          <Descriptions.Item label="Fecha actualización">
            21/05/2021
          </Descriptions.Item>
          <Descriptions.Item label="Creador por">
            Diego Antonio Lazarte Peláez
          </Descriptions.Item>
          <Descriptions.Item label="N° de Casos de prueba">
            16
          </Descriptions.Item>
        </Descriptions>
      </div>

      <div style={{ marginTop: 25 }}>
        <Space>
          <Tooltip placement="left" title="Editar Petición">
            <Button icon={<EditOutlined />} shape="round" type="dashed" />
          </Tooltip>
          <Tooltip placement="right" title="Eliminar Petición">
            <Button
              icon={<DeleteOutlined />}
              shape="round"
              type="dashed"
              style={{ marginLeft: 10 }}
            />
          </Tooltip>
        </Space>
        <Space style={{ float: "right" }}>
          <Button
            icon={<SettingFilled />}
            type="primary"
            shape="round"
            onClick={() =>
              history.push("/peticiones/creacion-de-casos-de-prueba")
            }
          >
            Configurar
          </Button>
        </Space>
      </div>
    </Card>
  );
};

export default InfoPeticion;
