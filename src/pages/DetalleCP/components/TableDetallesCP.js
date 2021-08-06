import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Table,
  Input,
  Form,
  Popconfirm,
  Typography,
  Divider,
  Image,
  Upload,
} from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

/* // actions de redux
import { eliminarStepAction } from "../../../stateManagement/actions/stepsAction"; */

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

const EditableCell = (props) => {
  const renderCell = () => {
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
    const inputNode =
      title === "Evidencias" ? (
        <Upload listType="picture-card" style={{ width: 80, height: 80 }} />
      ) : (
        <TextArea autoSize={{ minRows: 5, maxRows: 5 }} />
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

const TableDetallesCP = ({ detalle, steps, actualizarStep, eliminarStep }) => {
  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(steps.detallesCasoPrueba);
  const usuario = useSelector((state) => state.usuario.usuario);
  //const dispatch = useDispatch();

  useEffect(() => {
    setDataTable(steps.detallesCasoPrueba);
  }, [steps]);

  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.stepId === editingKey;

  const edit = (record) => {
    //console.log(record);
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

  const save = async (record) => {
    try {
      const row = await form.validateFields();
      //console.log(row);
      const newData = [...dataTable];
      const index = newData.findIndex((item) => record.stepId === item.stepId);
      if (index > -1) {
        const item = newData[index];
        const newStep = {
          idTestCase: detalle.testId,
          results: record.results,
          shortUsername: usuario.shortUser,
          stepComments: row.stepComments,
          stepDescription: row.stepDescription,
          stepExpectedResult: row.stepExpectedResult,
          stepOrder: /* record.stepId */ row.stepOrder,
        };

        console.log(newStep);
        setEditingKey("");
        actualizarStep(newStep, record.stepId);
      }
    } catch (errInfo) {
      //console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "#",
      //dataIndex: ["step", "id"],
      dataIndex: "stepOrder",
      key: "stepOrder",
      editable: true,
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
      title: "Resultado Esperado",
      dataIndex: "stepExpectedResult",
      key: "stepExpectedResult",
      editable: true,
    },
    {
      title: "Evidencias",
      dataIndex: "results",
      key: "results",
      editable: false,
      render: (_, row) =>
        row.results?.map(function (item) {
          //console.log(item);
          return (
            <Image
              width={80}
              height={80}
              src={`data:image/jpeg;base64,${item}`}
            />
          );
        }),
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </a>
            <Popconfirm title="¿Descartar los cambios?" onConfirm={cancel}>
              <a>Cancelar</a>
            </Popconfirm>
          </span>
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
        />
      }
    </Form>
  );
};

export default TableDetallesCP;
