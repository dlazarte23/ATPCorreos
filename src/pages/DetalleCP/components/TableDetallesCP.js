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
  message
} from "antd";

import {
  DeleteOutlined,
  EditOutlined,
  UploadOutlined,
} from "@ant-design/icons";

import { paginationProps } from "../../../utils/helpers/paginationProps";
import { getBase64 } from "../../../utils/helpers/convertToBase64";

const { TextArea } = Input;

const EditableContext = React.createContext();

const TableDetallesCP = ({
  detalle,
  steps,
  actualizarStep,
  eliminarStep,
  loading,
}) => {

  const [form] = Form.useForm();
  const [dataTable, setDataTable] = useState(steps.detallesCasoPrueba);
  const [editingKey, setEditingKey] = useState("");
  const [fileList, setFileList] = useState([]);
  
  const usuario = useSelector((state) => state.usuario.usuario);
  
  const isEditing = (record) => record.stepId === editingKey;

  useEffect(() => { setDataTable(steps.detallesCasoPrueba); }, [ steps ]);

  const edit = (record) => {
    form.setFieldsValue({
      result: [],
      stepDescription: "",
      stepExpectedResults: "",
      ...record,
    });
    setEditingKey(record.stepId);
  };

  const cancel = () => { setEditingKey(""); };

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
        actualizarStep(newStep, record.stepId);
      }
    } catch ( errInfo ) {
      console.error( errInfo );
    }
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

      const list = [];

      const handlePaste = async ( e ) => {

        if ( record.results.length >= 3 ) {
          message.warning('No puede subir mas de 3 imagenes por detalle!');
          return;
        }
        if ( e.clipboardData.files.length ) {
    
            const archivoObjecto = e.clipboardData.files[0];
    
            const response = await getBase64( archivoObjecto );

            record.results.push(response);

            setFileList([...fileList, record.results ]);

            return true;
        } else {
            message.warning("No encontramos imagenes en su portapapeles!");
        }
      }
      // eslint-disable-next-line
      record?.results?.map( (item) => {
        list.push({
          uid: Math.random()*10000000000000000,
          name: 'image.png',
          status: "done",
          thumbUrl: `data:image/jpeg;base64,${item}`,
          src: item
        });
      });

      const properties = {
        accept: ".jpg,.png",
        beforeUpload: async (file) => {

          if ( record.results.length >= 3 ) {
            message.warning('No puede subir mas de 3 imagenes por detalle!');
            return;
          }
          
          if (file.status !== "removed") {
            const base64Img = await getBase64(file);
            
            record.results.push( base64Img );

            setFileList([...fileList, record.results ]);

          }
          return false;
        },
        onRemove: (file) => {
          record.results = record.results.filter( ( img ) => img !== file.src );

          setFileList([ ...fileList, record.results ]);
        },
      };

      const inputNode =
        title === "Evidencias" ? (
          <div onPaste={ handlePaste } >  
            <Upload
              {...properties}
              listType="picture"
              fileList={[...list]}
              className="upload-list-inline"
              onPreview={ () => message.info("No se puede previsualizar!") }
              >
              <Button icon={<UploadOutlined />}>Cargar</Button>
            </Upload>
            <div 
              style={{ 
                marginTop: 10,
                height: 25,
                border: '1px solid #3E92F5',
                background: 'white',
                width: '100%',
                color: '#3E92F5',
                cursor: "pointer"
              }}>
              <p style={{ marginLeft: 10, textAlign: 'center' }}>Ctrl + v ( aqui )</p>
            </div>
          </div>
        ) : (
          <TextArea autoSize={{ minRows: 6, maxRows: 6 }} />
        );
      return (
        <td {...restProps}>
          {editing ? (
            <Form.Item
              name={dataIndex}
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
      dataIndex: "stepOrder",
      key: "stepOrder",
      editable: false,
      defaultSortOrder: "ascend",
      sorter: (a, b) => a.stepOrder - b.stepOrder,
    },
    {
      title: "Precondición",
      dataIndex: "stepComments",
      key: "stepDescription",
      editable: true,
    },
    {
      title: "Acción",
      dataIndex: "stepDescription",
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
