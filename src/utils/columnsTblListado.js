import { Space } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";

import ModalEditListado from "../pages/CasosDePrueba/components/ModalEditListado";

const handleDelete = (testId) => {
  console.log("eliminar", testId);
  // const dataSource = [...this.state.dataSource];
  // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
};

export const columns = [
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
