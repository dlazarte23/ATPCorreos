import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import {
  Table,
  Input,
  Form,
  Popconfirm,
  Typography,
  Divider,
  Image,
  Upload,
  Button,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { TextArea } = Input;
const EditableContext = React.createContext();

const paginationProps = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20, 50],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `${total} resultados`,
  hideOnSinglePage: true,
  defaultCurrent: 1,
};

const TableDetallesCP = ({
  detalle,
  steps,
  actualizarStep,
  eliminarStep,
  loading,
}) => {
  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(steps.detallesCasoPrueba);
  const usuario = useSelector((state) => state.usuario.usuario);

  useEffect(() => {
    setDataTable(steps.detallesCasoPrueba);
  }, [steps]);

  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.stepId === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      result: [], //evidencias|
      stepDescription: "", //acción
      stepExpectedResults: "", //resultado esperado
      ...record,
    });
    setEditingKey(record.stepId);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const [fileList, setFileList] = useState([]);
  console.log(fileList);

  const save = async (record) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataTable];
      const index = newData.findIndex((item) => record.stepId === item.stepId);
      if (index > -1) {
        const newStep = {
          idTestCase: detalle.testId,
          results: record.results,
          shortUsername: usuario.shortUser,
          stepComments: row.stepComments,
          stepDescription: row.stepDescription,
          stepExpectedResult: row.stepExpectedResult,
          stepOrder: record.stepOrder,
        };
        setEditingKey("");
        console.log(newStep);
        actualizarStep(newStep, record.stepId);
      }
    } catch (errInfo) {}
  };

  const EditableCell = (props) => {
    const renderCell = () => {
      const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow.document.write(image.outerHTML);
      };

      const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
            if (encoded.length % 4 > 0) {
              encoded += "=".repeat(4 - (encoded.length % 4));
            }
            resolve(encoded);
          };
          reader.onerror = (error) => reject(error);
        });
      };

      const {
        editing,
        dataIndex,
        title,
        inputType,
        record,
        index,
        children,
        ...restProps
      } = props;

      //setFileList(record?.results);

      const list = [];
      record?.results?.map(function (item) {
        list.push({
          name: item,
          status: "done",
          thumbUrl: `data:image/jpeg;base64,${item}`,
        });
      });

      const properties = {
        beforeUpload: async (file) => {
          if (file.status !== "removed") {
            const newList = record.results;
            const base64Img = await getBase64(file);
            newList.push(base64Img);
            console.log(newList);
            setFileList(newList);
          }
          return false;
        },
      };

      const inputNode =
        title === "Evidencias" ? (
          <Upload
            {...properties}
            listType="picture"
            defaultFileList={[...list]}
            className="upload-list-inline"
            onPreview={onPreview}
          >
            <Button icon={<UploadOutlined />}>Cargar</Button>
          </Upload>
        ) : (
          <TextArea autoSize={{ minRows: 6, maxRows: 6 }} />
        );
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item
              name={dataIndex}
              rules={[
                {
                  required: true,
                  message: `Por favor, introduzca ${title}!`,
                },
              ]}
              style={{
                margin: 0,
              }}
            >
              {inputNode}
            </Form.Item>
          ) : (
            children
          )}
        </td>
      );
    };

    return <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>;
  };

  const columns = [
    {
      title: "#",
      //dataIndex: ["step", "id"],
      dataIndex: "stepOrder",
      key: "stepOrder",
      editable: false,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.stepOrder - b.stepOrder,
    },
    {
      title: "Precondición",
      dataIndex: "stepDescription",
      key: "stepDescription",
      editable: true,
    },
    {
      title: "Acción",
      dataIndex: "stepComments",
      key: "stepComments",
      editable: true,
    },
    {
      title: "Resultado esperado",
      dataIndex: "stepExpectedResult",
      key: "stepExpectedResult",
      editable: true,
    },
    {
      title: "Evidencias",
      dataIndex: "results",
      key: "results",
      editable: true,
      render: (_, row) =>
        row.results?.map(function (item) {
          return (
            <Image.PreviewGroup key={item}>
              <Image
                width={80}
                height={80}
                src={`data:image/jpeg;base64,${item}`}
              />
            </Image.PreviewGroup>
          );
        }),
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <>
            <Button
              type="link"
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </Button>
            <Popconfirm title="¿Descartar los cambios?" onConfirm={cancel}>
              <Button type="link">Cancelar</Button>
            </Popconfirm>
          </>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
            >
              <EditOutlined title="Editar" />
            </Typography.Link>
            <Divider type="vertical" />
            <Typography.Link disabled={editingKey !== ""}>
              <Popconfirm
                title="¿Está seguro de eliminar?"
                onConfirm={() => eliminarStep(record.stepId)}
                okText="Confirmar"
                cancelText="Cancelar"
              >
                <DeleteOutlined title="Eliminar" />
              </Popconfirm>
            </Typography.Link>
          </>
        );
      },
    },
  ];

  const cols = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  const components = {
    body: {
      cell: EditableCell,
    },
  };

  return (
    <Form form={form} component={false}>
      {
        <Table
          components={components}
          bordered
          size="middle"
          columns={cols}
          dataSource={dataTable}
          rowKey={(record) => record.stepOrder}
          rowClassName="editable-row"
          pagination={paginationProps}
          loading={loading}
          locale={{ emptyText: "Sin datos" }}
        />
      }
    </Form>
  );
};

export default TableDetallesCP;
