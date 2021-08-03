import React, { useState } from "react";
import {
  List,
  Space,
  Descriptions,
  Badge,
  Button,
  Drawer,
  Card,
  Row,
  Col
} from "antd";
import {
  CalendarOutlined,
  RightOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { InfoPeticion } from "../components";
import "../peticion-style.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ListPeticiones({ peticiones }) {

  const [detallePeticion, setDetallePeticion] = useState("");
  const [showDetalle, setShowDetalle] = useState(false);

  const handleDetalle = (value) => {
    setDetallePeticion(value.item);
    setShowDetalle(true);
  };

  const onCloseDetalle = () => {
    setShowDetalle(false);
  };

  return (
    <>
      <List
        itemLayout="horizontal"
        dataSource={peticiones}
        bordered={false}
        size="default"
        footer={false}
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          defaultPageSize: 5,
          pageSizeOptions: [5, 10, 20, 50],
          showSizeChanger: true,
          showQuickJumper: true,
          showTotal: (total) => `${total} resultados`,
          hideOnSinglePage: true,
          defaultCurrent: 1,
        }}
        style={{ paddingLeft: 50, paddingRight: 50 }}
        renderItem={(item) => (
          <ListItem item={item} handleDetalle={handleDetalle} />
        )}
      >
        <Drawer
          width={500}
          placement="right"
          closable={true}
          onClose={onCloseDetalle}
          visible={showDetalle}
        >
          <InfoPeticion peticion={detallePeticion} onCloseDetalle={onCloseDetalle} />
        </Drawer>
      </List>
    </>
  );
}

const ListItem = ({ item, handleDetalle }) => {
  return (
    <>
      <Badge.Ribbon text="Nuevo" color="green">
        <Card title={item.nombre} size="small" style={{ borderRadius: 20 }}>
          <Row>
            <Col span={18}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="Id. Petición">
                  <IconText
                    icon={NumberOutlined}
                    text={item.codPeticion}
                    key={item.id}
                  />
                </Descriptions.Item>
                <Descriptions.Item label="Fecha Inicio">
                  <IconText
                    icon={CalendarOutlined}
                    text={item.fecInicio}
                    key={item.id}
                  />
                </Descriptions.Item>
              </Descriptions>
            </Col>
            <Col span={6}>
              <Descriptions size="small" column={1}>
                <Descriptions.Item label="">
                  <Button type="text" onClick={() => handleDetalle({ item })}>
                    Ver detalle <RightOutlined />
                  </Button>
                </Descriptions.Item>
              </Descriptions>
            </Col>
          </Row>
        </Card>
      </Badge.Ribbon>
      <br />
    </>
    /* <List.Item
      actions={[
        <Space>
          <Button type="text" onClick={() => handleDetalle({ item })}>
            Ver detalle <RightOutlined />
          </Button>
        </Space>,
      ]}
    >
      <Skeleton avatar title={false} loading={item.loading} active>
        <List.Item.Meta
          avatar={
            <Avatar
              src="https://www.correos.es/content/dam/correos/imagenes/iconos/CORREOS-favicon.ico"
              title={"Creador: Diego Lazarte Peláez"}
            />
          }
          title={item.nombre}
          description={
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Id. Petición">
                {item.codPeticion}
              </Descriptions.Item>
              <Descriptions.Item label="">
                <IconText
                  icon={CalendarOutlined}
                  text={item.fecCreacion}
                  key="list-vertical-like-o"
                />
              </Descriptions.Item>
            </Descriptions>
          }
        />
      </Skeleton>
    </List.Item> */
  );
};
