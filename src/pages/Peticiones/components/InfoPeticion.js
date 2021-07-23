import React, { useState } from "react";

import { useHistory } from "react-router";

import {
  Card,
  Typography,
  Descriptions,
  Button,
  Space,
  Tooltip,
  Alert,
} from "antd";
import {
  ExceptionOutlined,
  SettingFilled,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import ModalEditPeticion from "./ModalEditPeticion";

const InfoPeticion = (props) => {
  const dataPeticion = props.peticion;
  const history = useHistory();

  const { Title } = Typography;

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  return (
    <>
      <Card style={{ maxWidth: 550, float: "right" }}>
        <div style={{ textAlign: "center", width: "100%", marginBottom: 40 }}>
          <Title level={4}>
            <ExceptionOutlined /> Detalle de la Petición
          </Title>
        </div>
        {dataPeticion == "" ? (
          <>
            <Alert
              message="Haga click en el botón 'Ver detalle' de la petición deseada."
              type="info"
              showIcon
            />
            <br />
          </>
        ) : null}

        <>
          <div>
            <Descriptions layout="horizontal" column={1}>
              <Descriptions.Item label="Nombre">
                {dataPeticion.title}
              </Descriptions.Item>
              <Descriptions.Item label="id Petición">
                {dataPeticion.key}
              </Descriptions.Item>
              <Descriptions.Item label="Sprint">
                {dataPeticion.sprint}
              </Descriptions.Item>
              <Descriptions.Item label="Fecha generación">
                {dataPeticion.dateGeneracion}
              </Descriptions.Item>
              <Descriptions.Item label="Fecha actualización">
                {dataPeticion.dateActualizacion}
              </Descriptions.Item>
              <Descriptions.Item label="Creador por">
                {dataPeticion.create}
              </Descriptions.Item>
              <Descriptions.Item label="N° de Casos de prueba">
                {dataPeticion.numberPrueba}
              </Descriptions.Item>
            </Descriptions>
          </div>
          {dataPeticion !== "" ? (
            <>
              <div style={{ marginTop: 25 }}>
                <Space>
                  <Tooltip placement="left" title="Editar Petición">
                    <ModalEditPeticion
                      showModal={showModal}
                      setShowModal={setShowModal}
                      dataPeticion={dataPeticion}
                    />

                    <Button
                      icon={<EditOutlined />}
                      shape="round"
                      type="dashed"
                      onClick={() =>
                        setShowModal({ ...showModal, create: true })
                      }
                    />
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
            </>
          ) : null}
        </>
      </Card>
    </>
  );
};

export default InfoPeticion;
