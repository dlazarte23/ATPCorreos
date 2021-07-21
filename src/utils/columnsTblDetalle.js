import { Space } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { Popconfirm, Upload } from "antd";
import ModalEditListado from "../pages/DetalleCP/components/ModalEditDetalle";

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
    render: (_, record) => (
      <Space size="middle">
        <ModalEditListado record={record} />

        <Popconfirm
          title="Sure to delete?"
          onConfirm={() => handleDelete(record.key)}
        >
          <a href="!">
            <DeleteOutlined />
          </a>
        </Popconfirm>
      </Space>
    ),
  },
];

/**
 * Esta data solo sera momentanea, despues de conectar
 * con el backend elimnarla
 */

const props = {
  //action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "#",
    },
    {
      uid: "3",
      name: "yyy.png",
      status: "error",
      response: "Server Error 500", // custom error message to show
      url: "#",
    },
  ],
  showUploadList: {
    showDownloadIcon: false,
    showRemoveIcon: false,
  },
};

export const data = [];
for (let i = 1; i < 4; i++) {
  data.push({
    key: i,
    id: i,
    precondicion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    accion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
    resultado:
      "To help people create their product prototypes beautifully and efficiently.",
    evidencia: <Upload {...props} />,
  });
}
