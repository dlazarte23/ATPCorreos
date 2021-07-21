import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function ModalEditListado(props) {
  const nombre = props.record.nombre
  const descripcion = props.record.descripcion

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <EditOutlined onClick={showModal} />

      <Modal title="Editar Nombre CP" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Guardar
          </Button>,
        ]}>
        <p>{nombre}</p>
        <p>{descripcion}</p>
      </Modal>
    </>
  );
};
