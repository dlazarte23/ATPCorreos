import React, { useState } from "react";
import { Modal, Input, Form, Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

export default function ModalEditListado(props) {
  const action = props.record.accion;
  const precondition = props.record.precondicion;
  const result = props.record.resultado;

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
    console.log("on finsh");
  };

  return (
    <>
      <a href="!">
        {" "}
        <EditOutlined onClick={showModal} />{" "}
      </a>

      <Modal
        title="Editar Paso"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered="true"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Guardar
          </Button>,
        ]}
      >
        <Form
          layout="vertical"
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          size="default"
          centered="true"
          hideRequiredMark
        >
          <Row justify="space-between">
            <Col span={10}>
              <Form.Item
                name="precondicion"
                label="Pre-Condición"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar la Pre-Condición del Paso !",
                  },
                ]}
                initialValue={precondition}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="accion"
                label="Acción"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar la Acción del Paso !",
                  },
                ]}
                initialValue={action}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="resEsperado"
            label="Resultado Esperado"
            rules={[
              {
                required: true,
                message: "Debe ingresar el Resultado Esperado del Paso",
              },
            ]}
            initialValue={result}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}
