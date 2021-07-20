import { Space } from "antd";
import { Link } from "react-router-dom";
import { DeleteOutlined, EditOutlined, SettingOutlined } from '@ant-design/icons';
import { Popconfirm } from 'antd';


const handleDelete = (key) => {
  console.log("eliminar", key)
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
    title: "Descripcion",
    dataIndex: "descripcion",
    key: "descripcion",
  },
  {
    title: "Acciones",
    key: "accion",
    render: (_, record) => (
      <Space size="middle">
        <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">
          <EditOutlined />
        </Link>
        
        <Popconfirm title="Sure to delete?" onConfirm={() => handleDelete(record.key)}>
        <a href="!">   <DeleteOutlined />       </a>
        </Popconfirm >

  <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">
    <SettingOutlined />
  </Link>
      </Space >
    ),
  },
];

export const data = [
  {
    key: "1",
    id: "1",
    nombre: "Nombre CP",
    descripcion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
  },
  {
    key: "2",
    id: "2",
    nombre: "Nombre CP",
    descripcion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
  },
  {
    key: "3",
    id: "3",
    nombre: "Nombre CP",
    descripcion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
  },
  {
    key: "4",
    id: "4",
    nombre: "Nombre CP",
    descripcion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
  },
];
