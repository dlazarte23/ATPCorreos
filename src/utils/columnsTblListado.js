import { Space } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { Popconfirm } from "antd";
import ModalEditListado from "../pages/CasosDePrueba/components/ModalEditListado";

const handleDelete = (key) => {
  console.log("eliminar", key);
  // const dataSource = [...this.state.dataSource];
  // this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
};

export const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Nombre",
    dataIndex: "nombre",
    key: "nombre",
  },
  {
    title: "Descripción",
    dataIndex: "descripcion",
    key: "descripcion",
  },
  {
    title: "Acciones",
    key: "accion",
    render: (_, record) => (
      <Space size="middle">
        <ModalEditListado record={record} />

        <Popconfirm
          title="Está seguro de eliminar?"
          onConfirm={() => handleDelete(record.key)}
          okText="Confirmar"
          cancelText="Cancelar"
        >
          <a href="!">
            {" "}
            <DeleteOutlined />{" "}
          </a>
        </Popconfirm>

        <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">
          <SettingOutlined />
        </Link>
      </Space>
    ),
  },
];

export const data = [];
for (let i = 1; i < 21; i++) {
  data.push({
    key: i,
    id: i,
    nombre: `Nombre CP #${i}`,
    descripcion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
  });
}
