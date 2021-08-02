import React, { useState } from "react";

import { Card, Typography, Descriptions, Button, Space, Tooltip, Popconfirm } from "antd";
import {
  ExceptionOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";

import ModalEditPeticion from "./ModalEditPeticion";
import ListPlandePrueba from "./ListPlandePrueba"

import { useDispatch } from "react-redux";

import { eliminarPeticionAction } from "../../../stateManagement/actions/peticionesAction";

const InfoPeticion = (props) => {

  const dispatch = useDispatch( );

  const dataPeticion = props.peticion;

  const { onCloseDetalle } = props;

  const { Title } = Typography;

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  const eliminarPeticion = idPeticion => dispatch( eliminarPeticionAction(idPeticion) );

  const confirmDeletePeticion = idPeticion => {
    eliminarPeticion(idPeticion);
    onCloseDetalle();
  }

  return (
    <>
      <Card style={{ maxWidth: 550, float: "right" }}>
        <div style={{ textAlign: "center", width: "100%", marginBottom: 40 }}>
          <Title level={4}>
            <ExceptionOutlined /> Detalle de la Petición
          </Title>
        </div>
        <div>
          <Descriptions layout="horizontal" column={1}>
            <Descriptions.Item label="Nombre">
              {dataPeticion.nombre}
            </Descriptions.Item>
            <Descriptions.Item label="Id Petición">
              {dataPeticion.codPeticion}
            </Descriptions.Item>
            <Descriptions.Item label="Codigo OT">
              {dataPeticion.codOt}
            </Descriptions.Item>
            <Descriptions.Item label="Sprint">
              {dataPeticion.numero}
            </Descriptions.Item>
            <Descriptions.Item label="Fecha de Entrega">
              {dataPeticion.fecEntrega}
            </Descriptions.Item>
            <Descriptions.Item label="Fecha de Inicio">
              {dataPeticion.fecInicio}
            </Descriptions.Item>
            <Descriptions.Item label="Fecha Prevista de Entrega">
              {dataPeticion.fecPrevistaEntrega}
            </Descriptions.Item>
            <Descriptions.Item label="Horas Estimadas">
              {`${dataPeticion.horasEstimadas} h.`}
            </Descriptions.Item>


            <Descriptions.Item label="Creador por">
              {dataPeticion.create}
            </Descriptions.Item>
          </Descriptions>
        </div>
        {dataPeticion.responseTests.length > 0 ? (
          <>
            <p>Planes de Prueba: </p>
            <Space>
              <ListPlandePrueba peticion={dataPeticion} />
            </Space>
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
                    onClick={() => setShowModal({ ...showModal, create: true })}
                  />
                </Tooltip>

                <Popconfirm
                  title="¿Está seguro de eliminar?"
                  onConfirm={() => confirmDeletePeticion(dataPeticion.id)}
                  okText="Confirmar"
                  cancelText="Cancelar">

                  <Tooltip placement="right" title="Eliminar Petición">
                    <Button
                      icon={<DeleteOutlined />}
                      shape="round"
                      type="dashed"
                      style={{ marginLeft: 10 }}
                    />
                  </Tooltip>
                </Popconfirm>

              </Space>

            </div>

          </>
        ) : null}

      </Card>
    </>
  );
};

export default InfoPeticion;
