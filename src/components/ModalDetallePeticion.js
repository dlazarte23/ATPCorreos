import React from "react";
import { Modal, Descriptions } from "antd";
import { BarsOutlined } from "@ant-design/icons";

export default function ModalDetallePeticion(props) {
  const { showModal, setShowModal } = props;

  const handleOk = () => {
    setShowModal({ ...showModal, detail: false });
  };

  const handleCancel = () => {
    setShowModal({ ...showModal, detail: false });
  };

  return (
    <>
      <Modal
        title={
          <p style={{ marginBottom: "0em" }}>
            <BarsOutlined /> Detalle de la Petición
          </p>
        }
        visible={showModal.detail}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Aceptar"
        width={600}
        destroyOnClose={true}
      >
        <Descriptions layout="horizontal" /* bordered={true} */ column={2}>
          <Descriptions.Item label="Nombre">
            Nombre de la petición 1
          </Descriptions.Item>
          <Descriptions.Item label="id Petición">9676417</Descriptions.Item>
          <Descriptions.Item label="Sprint">18</Descriptions.Item>
          <Descriptions.Item label="Fecha generación">
            01/01/2021
          </Descriptions.Item>
          <Descriptions.Item label="Fecha actualización">
            21/05/2021
          </Descriptions.Item>
          <Descriptions.Item label="Creador por">
            Diego Antonio Lazarte Peláez
          </Descriptions.Item>
          <Descriptions.Item label="N° de Casos de prueba">
            16
          </Descriptions.Item>
        </Descriptions>
      </Modal>
    </>
  );
}
