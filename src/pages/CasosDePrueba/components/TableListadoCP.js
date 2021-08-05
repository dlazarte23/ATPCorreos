import React from "react";
import { Table, Space, Popconfirm } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";

import { eliminarCasosPruebaAction } from "../../../stateManagement/actions/casosPruebasAction";

import ModalEditListado from "./ModalEditListado";

const paginationProps = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20, 50],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `${total} resultados`,
  hideOnSinglePage: true,
  defaultCurrent: 1,
};

const TableListadoCP = ({ usuario }) => {
  const dispatch = useDispatch();

  const casosDePruebas = useSelector(
    (state) => state.casosPruebas.casosPruebas
  );

  const handleDelete = (testId) =>
    dispatch(eliminarCasosPruebaAction(usuario.shortUser, testId));

  const columns = [
    {
      title: "#",
      dataIndex: "testId",
      key: "id",
    },
    {
      title: "Nombre",
      dataIndex: "testName",
      key: "nombre",
      with: "200",
    },
    {
      title: "Descripción",
      dataIndex: "testDescription",
      key: "descripcion",
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => (
        <Space size="middle">
          <ModalEditListado record={record} />
          <Popconfirm
            title="¿Está seguro de eliminar?"
            onConfirm={() => handleDelete(record.testId)}
            okText="Confirmar"
            cancelText="Cancelar"
          >
            <a href="!">
              {" "}
              <DeleteOutlined />{" "}
            </a>
          </Popconfirm>

          <Link
            to={{
              pathname: "/peticiones/creacion-de-casos-de-prueba/detalle",
              state: {
                detalle: record.responseTestSteps,
              },
            }}
            className="btn-yellow-link"
          >
            {" "}
            <SettingOutlined />{" "}
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={casosDePruebas}
      size="middle"
      pagination={paginationProps}
    />
  );
};

export default TableListadoCP;
