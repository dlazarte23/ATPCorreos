import React, { useState } from "react";

import { Card, Typography, Descriptions, Button, Space, Tooltip, Popconfirm, Input } from "antd";

import {
  ExceptionOutlined,
  EditOutlined,
  DeleteOutlined,
  PlusOutlined,
  UnorderedListOutlined
} from "@ant-design/icons";

import ModalEditPeticion from "./ModalEditPeticion";
import PlanesPrueba from "./PlanesPrueba";

import { useDispatch } from "react-redux";

import { eliminarPeticionAction } from "../../../stateManagement/actions/peticionesAction";

const InfoPeticion = (props) => {

  const dispatch = useDispatch();

  const dataPeticion = props.peticion;

  const { onCloseDetalle } = props;

  const { Title } = Typography;

  const [showModal, setShowModal] = useState({
    detail: false,
    create: false,
  });

  // variables unicamente para abrir el 2 drawer del listado de planes de prueba
  const [showPP, setShowPP] = useState(false);

  const onCloseDetallePP = () => {
    setShowPP(false);
  };

  const eliminarPeticion = idPeticion => dispatch(eliminarPeticionAction(idPeticion));

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
        <>
          <div style={{ marginTop: 25 }}>
            <Space>

              <ModalEditPeticion
                showModal={showModal}
                setShowModal={setShowModal}
                dataPeticion={dataPeticion}
              />
              <Tooltip placement="left" title="Editar Petición">
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

            <Space style={{ float: 'right' }}>
              <Button type="primary" icon={<UnorderedListOutlined />} onClick={() => setShowPP(true)} >
                Planes De Prueba
              </Button>
            </Space>

            <PlanesPrueba showPP={showPP} onCloseDetallePP={onCloseDetallePP} data={dataPeticion} />

          </div>

        </>

      </Card>
    </>
  );
};

export default InfoPeticion;
