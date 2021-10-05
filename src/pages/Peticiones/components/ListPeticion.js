import React, { useState } from "react";
import { useDispatch } from "react-redux";

import "../peticion-style.css";
import {
  List,
  Space,
  Descriptions,
  Button,
  Drawer,
  Card,
  Row,
  Col,
} from "antd";

import {
  CalendarOutlined,
  RightOutlined,
  NumberOutlined,
} from "@ant-design/icons";

import { InfoPeticion } from "../components";
import { obtenerPlanesDePruebaAction } from "../../../stateManagement/actions/planesPruebaAction";



const IconText = ({ icon, text }) => (
  <Space>
    {React.createElement(icon)}
    {text}
  </Space>
);

const ListPeticiones = ({ peticiones }) => {
  const [detallePeticion, setDetallePeticion] = useState("");
  const [showDetalle, setShowDetalle] = useState(false);

  const dispatch = useDispatch();

  const obtenerPlanesDePrueba = (idPeticion) =>
    dispatch(obtenerPlanesDePruebaAction(idPeticion));

  const handleDetalle = async (value) => {
    const response = await obtenerPlanesDePrueba(value.item.id);

    setDetallePeticion(response);

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
          <InfoPeticion
            peticion={detallePeticion}
            onCloseDetalle={onCloseDetalle}
          />
        </Drawer>
      </List>
    </>
  );
}

const ListItem = ({ item, handleDetalle }) => {
  const formatDate = (date) => {
    const dd = date.slice(8, 10);
    const mm = date.slice(5, 7);
    const yyyy = date.slice(0, 4);
    return `${dd}/${mm}/${yyyy}`;
  };
  return (
    <>
      <Card title={item.petitionName} size="small" style={{ borderRadius: 20 }}>
        <Row>
          <Col span={18}>
            <Descriptions size="small" column={1}>
              <Descriptions.Item label="Id. petición">
                <IconText
                  icon={NumberOutlined}
                  text={item.petitionCode}
                  key={item.id}
                />
              </Descriptions.Item>
              <Descriptions.Item label="Fecha inicio">
                <IconText
                  icon={CalendarOutlined}
                  text={formatDate(item.startDate)}
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
      <br />
    </>
  );
};

export default ListPeticiones;