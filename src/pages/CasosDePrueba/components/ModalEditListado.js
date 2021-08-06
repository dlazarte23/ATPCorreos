import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Modal, Input, Form, Row, Col, Button } from "antd";
import { EditOutlined } from "@ant-design/icons";

import { editarCasosPruebaAction } from "../../../stateManagement/actions/casosPruebasAction";

export default function ModalEditListado({
  testId,
  testName,
  testDescription,
  usuario,
  loading,
  subject,
}) {
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
    form.setFieldsValue({
      testName: testName,
      testDescription: testDescription,
    });
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const onFinish = (values) => {
    console.log("on finsh", values);
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        dispatch(
          editarCasosPruebaAction(testId, {
            ...values,
            shortUsername: usuario.shortUser,
            subjectId: subject.id,
          })
        );
      })
      .catch((info) => {
        console.log("Error al validar: ", info);
      });
  };

  useEffect(() => {
    !loading && setIsModalVisible(loading);
  }, [loading]);

  return (
    <>
      <a>
        {" "}
        <EditOutlined onClick={showModal} />{" "}
      </a>

      <Modal
        title={"Editar " + testName}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        centered="true"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
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
                name="testName"
                label="Nombre de la Prueba"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar el nombre del caso de Prueba !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={12}>
              {" "}
              <Form.Item
                name="testDescription"
                label="Descripción de la Prueba"
                rules={[
                  {
                    required: true,
                    message:
                      "Debe ingresar la descripción del caso de Prueba !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
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
}
