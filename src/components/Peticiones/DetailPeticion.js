import React from "react";
import { Card, Descriptions } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
  BarsOutlined,
} from "@ant-design/icons";

export default function DetailPeticion() {
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        title={
          <p style={{ marginBottom: "0em" }}>
            <BarsOutlined /> Detalle de la Petición
          </p>
        }
        bordered={false}
        style={{ width: "100%" }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <DeleteOutlined key="delete" />,
        ]}
      >
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
      </Card>
    </div>
  );
}
