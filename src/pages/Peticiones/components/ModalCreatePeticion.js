import React, { useState } from "react";

import { Modal, Input, InputNumber, Form } from "antd";

import { useDispatch, useSelector } from 'react-redux';

// actions de redux
import { crearNuevaPeticionAction } from '../../../stateManagement/actions/peticionesAction';

export default function ModalCreatePeticion(props) {
  
  const { showModal, setShowModal } = props;
  const [ confirmLoading, setConfirmLoading ] = useState(false);

  const [ form ] = Form.useForm();

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

  const loading = useSelector( state => state.peticiones.loading );

  // utilizamos use dispatch y nos crea una función
  const dispatch = useDispatch();

  // mandamos a llamar el action de peticionesAction
  const agregarPeticion = peticion => dispatch( crearNuevaPeticionAction(peticion) );

  // cuando el usuario haga clic en guardar cambios
  const onCrearPeticion = (values) => {

    console.log(values);

    console.log("Esto es una variable llamada desde el state general => ", loading);

    setConfirmLoading(!loading);

    setTimeout(() => {

      setConfirmLoading(false);

      setShowModal({ ...showModal, create: false });

    }, 2000);

    // creamos la nueva peticion
    agregarPeticion(values);

  };

  return (
    <>
      <Modal
        title="Nueva Petición"
        visible={showModal.create}
        onCancel={handleCancel}
        okText="Guardar"
        cancelText="Cancelar"
        confirmLoading={confirmLoading}
        destroyOnClose={true}        
        onOk={() => {
          form
            .validateFields()
            .then(values => {
              form.resetFields();
              onCrearPeticion(values);
            })
            .catch( info => {
              console.log("Error al validar: ", info)
            });
        }} >
        <Form
          {...layout}
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          size="default"
          hideRequiredMark>
            <Form.Item
              name="idPeticion"
              label="Id. Petición"
              rules={[{ required: true, message: "Debe ingresar el id de la petición !" }]} >
              <Input />
            </Form.Item>

            <Form.Item
              name="nomPeticion"
              label="Nombre Petición"
              rules={[{ required: true, message: "Debe ingresar el nombre de la petición !" }]} >
              <Input />
            </Form.Item>
          
            <Form.Item
              name="sprint"
              label="Sprint"
              rules={[{ required: true, type: "number", min: 0, max: 99, message: "El numero de sprint debe estar entre 0 a 99 !"}]} >
              <InputNumber />
            </Form.Item>

        </Form>
      </Modal>
    </>
  );
}
