import React from "react";
import { List, Avatar, Space, Card, Tag } from "antd";
import {
  NumberOutlined,
  CalendarOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  EditOutlined,
  DeleteOutlined,
  RightOutlined,
} from "@ant-design/icons";
import "../peticion-style.css";

const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const IconLink = ({ text }) => (
  <a className="example-link" title="Ver detalle">
    <InfoCircleOutlined />
    {text}
    <RightOutlined />
  </a>
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
          pageSize: 3,
          style: { float: "left" },
        }}
        style={{ marginLeft: 20 }}
        dataSource={listData}
        bordered={false}
        footer={<></>}
        renderItem={(item) => (
          <>
            <List.Item
              style={{
                maxWidth: 650,
              }}
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
                    style={{ width: "100%", float: "left", marginTop: "10%" }}
                    size="default"
                    actions={[<IconLink text=" Ver Detalle" />]}
                  ></Card>
                </>
              }
            >
              <List.Item.Meta
                //avatar={<Avatar src={item.avatar} />}
                title={
                  <a href={item.href}>
                    {item.title}
                    {item.key < 3 ? (
                      <Tag color="#87d068" className="TagNewPeticion">
                        Nuevo
                      </Tag>
                    ) : null}
                  </a>
                }
                description={item.description}
              />
              {/* {item.content} */}
            </List.Item>
            <br />
          </>
        )}
      />
      <br />
    </>
  );
}
