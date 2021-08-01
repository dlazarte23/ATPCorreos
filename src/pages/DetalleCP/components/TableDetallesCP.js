import React, { useState } from "react";

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

const TableDetallesCP = ({ detalle, actualizarStep }) => {
  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(detalle);
  const [editingKey, setEditingKey] = useState("");
  const isEditing = (record) => record.step.stepName === editingKey;

  const edit = (record) => {
    //console.log(record);
    form.setFieldsValue({
      result: "", //evidencias|
      stepDescription: "", //acción
      stepExpectedResults: "", //resultado esperado
      ...record,
    });
    setEditingKey(record.step.stepName);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...dataTable];
      const index = newData.findIndex((item) => key === item.step.stepName);
      if (index > -1) {
        const item = newData[index];
        const newStep = {
          step: [
            {
              result: item.step.result,
              stepDescription: row.step.stepDescription,
              stepExpectedResults: row.step.stepExpectedResults,
              stepName: item.step.stepName,
              testStatus: 1,
            },
          ],
          testComments: row.testComments,
          testDescription: item.testDescription,
          testId: item.testId,
        };
        console.log(newStep);
        setEditingKey("");
        actualizarStep(newStep, item.testId);
      } /*  else {
        newData.push(row);
        console.log(row);
        setDataTable(newData);
        setEditingKey("");
      } */
    } catch (errInfo) {
      console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "#",
      //dataIndex: ["step", "id"],
      dataIndex: ["step", "stepName"],
      key: "stepName",
      editable: false,
    },
    {
      title: "Precondición",
      dataIndex: "testComments",
      key: "testComments",
      editable: true,
    },
    {
      title: "Acción",
      dataIndex: ["step", "stepDescription"],
      key: ["step", "stepDescription"],
      editable: true,
    },
    {
      title: "Resultado Esperado",
      dataIndex: ["step", "stepExpectedResults"],
      key: ["step", "stepExpectedResults"],
      editable: true,
    },
    {
      title: "Evidencias",
      dataIndex: ["step", "result"],
      key: ["step", "result"],
      editable: false,
      render: (record) => {
        return (
          <Image
            width={80}
            height={80}
            source={{ uri: `data:image/jpeg;base64,${record}` }}
          />
        );
      },
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              onClick={() => save(record.step.stepName)}
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
            <Typography.Link
              disabled={editingKey !== ""}
              /* onClick={() => onDelete(record)} */
            >
              <Popconfirm
                title="¿Está seguro de eliminar?"
                /* onConfirm={() => handleDelete(record.key)} */
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
      <Table
        components={components}
        bordered
        size="middle"
        columns={cols}
        dataSource={dataTable}
        //rowKey="id"
        rowKey={(record) => record.key}
        //rowKey={["step", "stepName"]}
        rowClassName="editable-row"
        pagination={paginationProps}
      />
    </Form>
  );
};

export default TableDetallesCP;
