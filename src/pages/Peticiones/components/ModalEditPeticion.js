import React, { useState } from "react";
import { Modal, Input, InputNumber, Form, Row, Col, Button, DatePicker, Tooltip } from "antd";
import { useDispatch, useSelector } from 'react-redux';

import { EditOutlined } from "@ant-design/icons";
// actions de redux
import { editarPeticionAction } from '../../../stateManagement/actions/peticionesAction';
import moment from 'moment';
export default function ModalEditPeticion(props) {

  const { dataPeticion } = props;

  const { petitionName, petitionCode, number, finishDate, startDate, expectedFinishDate, estimatedHours, otCode, id } = dataPeticion;

  const proyecto = useSelector(
    (state) => state.peticiones.proyectoSeleccionado
  );


  const [form] = Form.useForm();



  const onFinish = () => {
    console.log("on finsh")
  }

  const loading = useSelector(state => state.peticiones.loading);

  // utilizamos use dispatch y nos crea una función
  const dispatch = useDispatch();

  // mandamos a llamar el action de peticionesAction
  const editarPeticion = (peticion, id, idProyecto) => dispatch(editarPeticionAction(peticion, id, idProyecto));

  const dateFormat = "DD/MM/YYYY";

  // cuando el usuario haga clic en guardar cambios
  const handleOk = () => {

    form
      .validateFields()
      .then(values => {

        form.resetFields();

        setShowModal(false)

        values.expectedFinishDate = values.expectedFinishDate._d
        values.finishDate = values.finishDate._d
        values.startDate =values.startDate._d
        // creamos la nueva peticion
        editarPeticion(values, id, proyecto.id);
      })
      .catch(info => {
        console.log("Error al validar: ", info)
      });


  };
  const [showModal, setShowModal] = useState(false)

  const openModal = () => {
    setShowModal(true)
    form.setFieldsValue({
      startDate: moment(startDate, 'YYYY-MM-DD'),
      finishDate: moment(finishDate, 'YYYY-MM-DD'),
      expectedFinishDate: moment(expectedFinishDate, 'YYYY-MM-DD'),
      petitionCode: petitionCode,
      petitionName: petitionName,
      estimatedHours: estimatedHours,
      number: number,
      otCode: otCode,
    });
  }
  const handleCancel = () => {
    setShowModal(false)
  }

  return (
    <>
      <Tooltip placement="left" title="Editar petición">
        <Button
          icon={<EditOutlined />}
          shape="round"
          type="dashed"
          onClick={() => openModal()}
        />
      </Tooltip>
      <Modal
        title={"Editar " + petitionName}
        visible={showModal}
        onCancel={handleCancel}
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
          hideRequiredMark
        >
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="petitionCode"
                label="Id. Petición"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar el id de la petición!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
            <Col span={18}>
              <Form.Item
                name="petitionName"
                label="Nombre petición"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar el nombre de la petición !",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="startDate" label="Fecha de inicio" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>
                <DatePicker placeholder="--/--/--" showToday={false} format={dateFormat}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="finishDate" label="Fecha de entrega" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>
                <DatePicker placeholder="--/--/--" showToday={false} format={dateFormat}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item name="expectedFinishDate" label="Fecha prevista" rules={[
                {
                  required: true,
                  type: "object",
                  message: 'Selecione una fecha'
                },
              ]}>
                <DatePicker placeholder="--/--/--" showToday={false} format={dateFormat} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item name="estimatedHours" label="Horas estimadas" rules={[
                {
                  required: true,
                  type: "number",
                  min: 0,
                  message: 'Ingresar hora'
                },
              ]}>
                <InputNumber className="input-string" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="number"
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
                <InputNumber className="input-string" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="otCode"
                label="Cod. Ot"
                rules={[
                  {
                    required: true,
                    message: "Debe ingresar el codigo de la Ot!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
}
