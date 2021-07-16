import { Space } from "antd";

import { Link } from "react-router-dom";

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
    render: () => (
      <Space size="middle">
        <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">Editar</Link>
        <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">
          Eliminar
        </Link>
        <Link to="/peticiones/creacion-de-casos-de-prueba/detalle">
          Configurar
        </Link>
      </Space>
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
