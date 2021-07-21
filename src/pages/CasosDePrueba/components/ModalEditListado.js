import React, { useState } from 'react';
import { Modal, Input, InputNumber, Form, Row, Col, Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';

export default function ModalEditListado(props) {
  const nombre = props.record.nombre
  const descripcion = props.record.descripcion
  const [form] = Form.useForm();

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
  const onFinish = () => {
    console.log("on finsh")
  }

  return (
    <>
     <a> <EditOutlined onClick={showModal} /> </a>

      <Modal title={"Editar "+ nombre} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Guardar
          </Button>,
        ]}>
        <Form
          layout="vertical"
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          size="default"
          centered={true}
          hideRequiredMark>
          <Row justify="space-between">
            <Col span={10}><Form.Item
              name="nomPrueba"
              label="Nombre de la Prueba"
              rules={[{ required: true, message: "Debe ingresar el nombre del caso de Prueba !" }]} >
              <Input defaultValue={nombre} />
            </Form.Item></Col>
            <Col span={12}>   <Form.Item
              name="contprueba"
              label="Contenido de la Prueba"
              rules={[{ required: true, message: "Debe ingresar la descripción del caso de Prueba !" }]} >
              <Input defaultValue={descripcion} />
            </Form.Item></Col>
          </Row>
          {/* <Form.Item
            name="sprint"
            label="Sprint"
            rules={[{ required: true, type: "number", min: 0, max: 99, message: "El numero de sprint debe estar entre 0 a 99 !" }]} >
            <InputNumber />
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
};
