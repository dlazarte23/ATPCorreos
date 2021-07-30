import React, { useState } from "react";

import {
  Table,
  Input,
  Form,
  Popconfirm,
  Typography,
  Divider,
} from "antd";
import {
  DeleteOutlined,
  EditOutlined,
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
    return (
      <td {...restProps}>
        {editing ? (
          <Form>
            <Form.Item
              name={dataIndex}
              rules={[
                {
                  required: true,
                  message: `Por favor, introduzca ${title}!`,
                },
              ]}
              initialValue={record[dataIndex]}
            >
              <TextArea autoSize={{ minRows: 5, maxRows: 5 }} />
            </Form.Item>
          </Form>
        ) : (
          children
        )}
      </td>
    );
  };

  return <EditableContext.Consumer>{renderCell}</EditableContext.Consumer>;
};

const TableDetallesCP = ({detalle}) => {

  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(detalle);
  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.key === editingKey;

  const edit = (record) => {
    form.setFieldsValue({
      precondicion: "",
      accion: "",
      resultado: "",
      ...record,
    });
    setEditingKey(record.key);
  };

  const cancel = () => {
    setEditingKey("");
  };

  const save = async (key) => {
    try {
      const row = await form.validateFields();
      const newData = [...detalle];
      const index = newData.findIndex((item) => key === item.key);

      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, { ...item, ...row });
        setDataTable(newData);
        setEditingKey("");
      } else {
        newData.push(row);
        setDataTable(newData);
        setEditingKey("");
      }
    } catch (errInfo) {
      //console.log("Validate Failed:", errInfo);
    }
  };

  const columns = [
    {
      title: "#",
      dataIndex: "key",
      editable: false,
    },
    {
      title: "Precondición",
      dataIndex: "testComments",
      editable: true,
    },
    {
      title: "Acción",
      dataIndex: "testDescription",
      editable: true,
    },
    {
      title: "Resultado Esperado",
      dataIndex: "testDescription",
      editable: true,
    },
    {
      title: "Evidencias",
      dataIndex: "",
      editable: false,
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => {
        const editable = isEditing(record);
        return editable ? (
          <span>
            <a
              href="javascript:;"
              onClick={() => save(record.key)}
              style={{
                marginRight: 8,
              }}
            >
              Guardar
            </a>
            <Popconfirm title="¿Está seguro de eliminar?" onConfirm={cancel}>
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
    <Table
      components={components}
      bordered
      size="middle"
      columns={cols}
      dataSource={dataTable}
      rowKey="key"
      rowClassName="editable-row"
      pagination={paginationProps}
    />
  );
};

export default TableDetallesCP;
