import React, { useState } from "react";
import { Modal, Input, InputNumber, Form } from "antd";

export default function ModalCreatePeticion(props) {
  const { showModal, setShowModal } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const handleOk = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setShowModal({ ...showModal, create: false });
    }, 2000);
  };

  const handleCancel = () => {
    setShowModal({ ...showModal, create: false });
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };

  return (
    <>
      <Modal
        title="Nueva Petición"
        visible={showModal.create}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Guardar"
        cancelText="Cancelar"
        confirmLoading={confirmLoading}
        destroyOnClose={true}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          size="default"
        >
          <Form.Item
            name={["petticion", "name"]}
            label="Nombre Petición"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["peticion", "id"]}
            label="Id. Petición"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["peticion", "sprint"]}
            label="Sprint"
            rules={[{ type: "number", min: 0, max: 99 }]}
          >
            <InputNumber />
          </Form.Item>
          {/* <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item> */}
        </Form>
      </Modal>
    </>
  );
}
