import { Space } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";

export const columns = [
  {
    title: "PreCondición",
    dataIndex: "precondicion",
    key: "precondicion",
  },
  {
    title: "Acción",
    dataIndex: "accion",
    key: "accion",
  },
  {
    title: "Resultado Esperado",
    dataIndex: "resultado",
    key: "resultado",
  },
  {
    title: "Evidencias",
    dataIndex: "evidencia",
    key: "evidencia",
  },
  {
    title: "Acciones",
    key: "accion",
    render: () => (
      <Space size="middle">
        <a href="!">Editar</a>
        <a href="!">Eliminar</a>
      </Space>
    ),
  },
];

/**
 * Esta data solo sera momentanea, despues de conectar
 * con el backend elimnarla
 */

export const data = [];
for (let i = 1; i < 4; i++) {
  data.push({
    key: i,
    precondicion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    accion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
    resultado:
      "To help people create their product prototypes beautifully and efficiently.",
    evidencia: (
      <p style={{ marginBottom: "0em" }}>
        <PaperClipOutlined /> <a>evidencia.png</a>
      </p>
    ),
  });
}
