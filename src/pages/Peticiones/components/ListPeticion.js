import React, { useState } from "react";
import {
  List,
  Space,
  Skeleton,
  Avatar,
  Descriptions,
  Badge,
  Button,
  Drawer,
  Pagination,
} from "antd";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";
import { InfoPeticion } from "../components";
import "../peticion-style.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ListPeticiones(props) {
  const { listData } = props;
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
        dataSource={listData}
        style={{ marginLeft: 20 }}
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
        renderItem={(item) =>
          item.key < 3 ? (
            <Badge.Ribbon text="Nuevo" color="#87d068">
              <ListItem item={item} handleDetalle={handleDetalle} />
            </Badge.Ribbon>
          ) : (
            <ListItem item={item} handleDetalle={handleDetalle} />
          )
        }
      >
        <Drawer
          width={400}
          placement="right"
          closable={true}
          onClose={onCloseDetalle}
          visible={showDetalle}
        >
          <InfoPeticion peticion={detallePeticion} />
        </Drawer>
      </List>
    </>
  );
}

const ListItem = ({ item, handleDetalle }) => {
  return (
    <List.Item
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
          title={<a href={item.href}>{item.title}</a>}
          description={
            <Descriptions size="small" column={2}>
              <Descriptions.Item label="Id. Petición">
                {item.key}
              </Descriptions.Item>
              <Descriptions.Item label="">
                <IconText
                  icon={CalendarOutlined}
                  text="01/07/2021"
                  key="list-vertical-like-o"
                />
              </Descriptions.Item>
            </Descriptions>
          }
        />
      </Skeleton>
    </List.Item>
  );
};
