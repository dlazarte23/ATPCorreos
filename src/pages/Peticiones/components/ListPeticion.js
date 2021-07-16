import React from "react";
import {
  List,
  Space,
  Skeleton,
  Avatar,
  Descriptions,
  Badge,
  Button,
} from "antd";
import { CalendarOutlined, RightOutlined } from "@ant-design/icons";

import "../peticion-style.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ListPeticiones(props) {
  const { listData } = props;
  return (
    <List
      itemLayout="horizontal"
      dataSource={listData}
      style={{ marginLeft: 20 }}
      bordered={false}
      size="large"
      footer={false}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 5,
        style: { float: "left" },
      }}
      renderItem={(item) =>
        item.key < 3 ? (
          <Badge.Ribbon text="Nuevo" color="#87d068">
            <ListItem item={item} />
          </Badge.Ribbon>
        ) : (
          <ListItem item={item} />
        )
      }
    />
  );
}

const ListItem = ({ item }) => {
  return (
    <List.Item
      actions={[
        <Space>
          <Button type="text">
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
                {Math.floor(Math.random() * 10000000)}
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
