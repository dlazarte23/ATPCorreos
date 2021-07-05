import React from "react";
import { List, Avatar, Space, Card } from "antd";
import {
  NumberOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

export default function ListPeticiones(props) {
  const { listData, showModal, setShowModal } = props;
  return (
    <>
      <List
        itemLayout="vertical"
        size="small"
        pagination={{
          onChange: (page) => {
            console.log(page);
          },
          pageSize: 4,
        }}
        dataSource={listData}
        bordered={false}
        footer={<div></div>}
        renderItem={(item) => (
          <List.Item
            key={item.title}
            actions={[
              <IconText
                icon={NumberOutlined}
                text={"Id. Petición: " + Math.floor(Math.random() * 10000000)}
                key="list-vertical-star-o"
              />,
              <IconText
                icon={CalendarOutlined}
                text="01/07/2021"
                key="list-vertical-like-o"
              />,
            ]}
            extra={
              <>
                <Card
                  bordered={false}
                  style={{ width: "100%", marginTop: "20%" }}
                  size="small"
                  actions={[
                    <InfoCircleOutlined
                      key="delete"
                      title="Ver detalle"
                      onClick={() =>
                        setShowModal({
                          ...showModal,
                          detail: true,
                        })
                      }
                    />,
                    <SettingOutlined
                      key="setting"
                      title="Ajustes de petición"
                    />,
                    <EditOutlined key="edit" title="Editar" />,
                    <DeleteOutlined key="delete" title="Eliminar" />,
                  ]}
                ></Card>
              </>
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />

            {/* {item.content} */}
          </List.Item>
        )}
      />
      <br />
    </>
  );
}
