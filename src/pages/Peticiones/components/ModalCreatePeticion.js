import React, { useState } from "react";

import { Modal, Input, InputNumber, Form, Row, Col, Button } from "antd";

import { useDispatch, useSelector } from 'react-redux';
import { SaveOutlined } from "@ant-design/icons";

// actions de redux
import { crearNuevaPeticionAction } from '../../../stateManagement/actions/peticionesAction';

export default function ModalCreatePeticion(props) {

  const { showModal, setShowModal } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const handleCancel = () => {
    setShowModal({ ...showModal, create: false });
  };

  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };

  const onFinish = () => {
    console.log("on finsh")
  }

  const loading = useSelector(state => state.peticiones.loading);

  // utilizamos use dispatch y nos crea una función
  const dispatch = useDispatch();

  // mandamos a llamar el action de peticionesAction
  const agregarPeticion = peticion => dispatch(crearNuevaPeticionAction(peticion));

  // cuando el usuario haga clic en guardar cambios
  const handleOk = () => {

    form
      .validateFields()
      .then(values => {
        form.resetFields();

        setConfirmLoading(!loading);

        setTimeout(() => {

          setConfirmLoading(false);

          setShowModal({ ...showModal, create: false });

        }, 2000);

        // creamos la nueva peticion
        agregarPeticion(values);
      })
      .catch(info => {
        console.log("Error al validar: ", info)
      });


  };

  return (
    <>
      <Modal
        title="Nueva Petición"
        visible={showModal.create}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        destroyOnClose={true}
        centered
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
            <SaveOutlined /> Crear
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
              name="idPeticion"
              label="Id. Petición"
              rules={[{ required: true, message: "Debe ingresar el id de la petición !" }]} >
              <Input />
            </Form.Item></Col>
            <Col span={12}>   <Form.Item
              name="nomPeticion"
              label="Nombre Petición"
              rules={[{ required: true, message: "Debe ingresar el nombre de la petición !" }]} >
              <Input />
            </Form.Item></Col>
          </Row>
          <Form.Item
            name="sprint"
            label="Sprint"
            rules={[{ required: true, type: "number", min: 0, max: 99, message: "El numero de sprint debe estar entre 0 a 99 !" }]} >
            <InputNumber />
          </Form.Item>

        </Form>
      </Modal>
    </>
  );
}
