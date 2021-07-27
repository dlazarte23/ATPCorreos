import React, { useState } from "react";
import { Modal, Input, InputNumber, Form, Row, Col, Button, DatePicker, TimePicker } from "antd";
import { useDispatch, useSelector } from 'react-redux';

// actions de redux
import { crearNuevaPeticionAction } from '../../../stateManagement/actions/peticionesAction';
import moment from 'moment';
export default function ModalEditPeticion(props) {

  const { showModal, setShowModal, dataPeticion, } = props;

  const {nombre, sprint, key, fecEntrega, fecInicio, fecPrevistaEntrega, horasEstimadas } = dataPeticion;
  console.log("1", fecEntrega)
  console.log("2", fecInicio)
  console.log("3", fecPrevistaEntrega)
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const handleCancel = () => {
    setShowModal({ ...showModal, create: false });
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
        title={"Editar " + nombre}
        visible={showModal.create}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        destroyOnClose={true}
        centered="true"
        footer={[
          <Button key="back" onClick={handleCancel}>
            Cancelar
          </Button>,
          <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
           Guardar
          </Button>,
        ]}>
        <Form
          layout="vertical"
          form={form}
          name="nest-messages"
          onFinish={onFinish}
          size="default"
          centered="true"
          hideRequiredMark>
              <Form.Item
            name="nomPeticion"
            label="Nombre Petición"
            rules={[
              {
                required: true,
                message: "Debe ingresar el nombre de la petición !",
              },
            ]}
          >
            <Input defaultValue={nombre}/>
          </Form.Item>
          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="fecEntrega" label="Fecha de Entrega" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>

                <DatePicker placeholder="--/--/--" showToday={false} defaultValue={moment(fecEntrega, 'DD/MM/YYYY')}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fecInicio" label="Fecha de inicio" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>
                <DatePicker placeholder="--/--/--" showToday={false} defaultValue={moment(fecInicio, 'DD/MM/YYYY')}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="fecPrevistaEntrega" label="Fecha prevista" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>
                <DatePicker placeholder="--/--/--" showToday={false} defaultValue={moment(fecPrevistaEntrega, 'DD/MM/YYYY')}/>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="horasEstimadas" label="Horas Estimadas" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Ingresar hora'
                },
              ]}>
                <TimePicker placeholder="--:--" showNow={false} className="input-string" defaultValue={moment(horasEstimadas, 'HH:mm:ss')}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="sprint"
                label="Sprint"

                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 0,
                    max: 99,
                    message: "El numero de sprint debe estar entre 0 a 99 !",
                  },
                ]}
              >
                <InputNumber className="input-string" defaultValue={sprint}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="idPeticion"
                label="Id. Petición"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar el id de la petición !",
                  },
                ]}
              >
                <Input defaultValue={key}/>
              </Form.Item>
            </Col>
          </Row>
       
        </Form>
      </Modal>
    </>
  );
}
