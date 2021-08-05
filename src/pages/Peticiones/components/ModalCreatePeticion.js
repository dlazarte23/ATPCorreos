import React, { useState } from "react";

import { Modal, Input, InputNumber, Form, Row, Col, Button, DatePicker } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { SaveOutlined } from "@ant-design/icons";

// actions de redux
import { crearNuevaPeticionAction } from "../../../stateManagement/actions/peticionesAction";

export default function ModalCreatePeticion(props) {
  const { showModal, setShowModal } = props;
  const [confirmLoading, setConfirmLoading] = useState(false);

  const [form] = Form.useForm();

  const handleCancel = () => {
    setShowModal({ ...showModal, create: false });
  };

  const onFinish = () => {
    console.log("on finsh");
  };

  const dateFormat = "DD/MM/YYYY";

  const loading = useSelector((state) => state.peticiones.loading);

  const proyecto = useSelector(
    (state) => state.peticiones.proyectoSeleccionado
  );

  const usuario = useSelector((state) => state.usuario.usuario.shortUser);

  const dispatch = useDispatch();

  const agregarPeticion = (peticion, idProyecto) =>
    dispatch(crearNuevaPeticionAction(peticion, idProyecto));

  // cuando el usuario haga clic en guardar cambios
  const handleOk = () => {
    form
      .validateFields()
      .then(async (values) => {
        form.resetFields();

        setConfirmLoading(!loading);

        setTimeout(() => {
          setConfirmLoading(false);

          setShowModal({ ...showModal, create: false });
        }, 2000);

        const peticion = {
          estimatedHours: values.horasEstimadas,
          expectedFinishDate: values.fecPrevistaEntrega._d,
          finishDate: values.fecEntrega._d,
          number: values.sprint,
          otCode: values.codOt,
          petitionCode: values.idPeticion,
          petitionName: values.nomPeticion,
          project: proyecto.id,
          startDate: values.fecInicio._d,
          user: usuario,
        };

        // creamos la nueva peticion
        agregarPeticion(peticion, proyecto.id);
      })
      .catch((info) => {
        console.log("Error al validar: ", info);
      });
  };

  return (
    <>
      <Modal
        title="Crear Nueva Petición"
        visible={showModal.create}
        onCancel={handleCancel}
        confirmLoading={confirmLoading}
        destroyOnClose={true}
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
            <SaveOutlined /> Crear
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
          <Row gutter={16}>
            <Col span={6}>
              <Form.Item
                name="idPeticion"
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
                name="nomPeticion"
                label="Nombre Petición"
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
              <Form.Item
                name="fecInicio"
                label="Fecha de inicio"
                rules={[
                  {
                    required: true,
                    type: "object",
                    message: "Selecione una fecha",
                  },
                ]}
              >
                <DatePicker
                  placeholder="--/--/--"
                  showToday={false}
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="fecEntrega"
                label="Fecha de entrega"
                rules={[
                  {
                    required: true,
                    type: "object",
                    message: "Selecione una fecha",
                  },
                ]}
              >
                <DatePicker
                  placeholder="--/--/--"
                  showToday={false}
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="fecPrevistaEntrega"
                label="Fecha prevista"
                rules={[
                  {
                    required: true,
                    type: "object",
                    message: "Selecione una fecha",
                  },
                ]}
              >
                <DatePicker
                  placeholder="--/--/--"
                  showToday={false}
                  format={dateFormat}
                />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={8}>
              <Form.Item
                name="horasEstimadas"
                label="Horas Estimadas"
                rules={[
                  {
                    required: true,
                    type: "number",
                    min: 0,
                    message: "Ingresar hora",
                  },
                ]}
              >
                <InputNumber className="input-string" />
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
                <InputNumber className="input-string" />
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item
                name="codOt"
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
