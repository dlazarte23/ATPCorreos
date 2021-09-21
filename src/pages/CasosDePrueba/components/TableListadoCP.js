import React, { useState, useCallback } from "react";

import { Link } from "react-router-dom";
import { Table, Space, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import { DragableBodyRow } from "../../../components/common/DragAndDrop";

import ModalEditListado from "./ModalEditListado";
import { paginationProps } from "../../../utils/helpers/paginationProps"; 
import { eliminarCasosPruebaAction } from "../../../stateManagement/actions/casosPruebasAction";

const TableListadoCP = ({ peticion, usuario, loading, subject }) => {

  const dispatch = useDispatch();

  const casosDePruebas = useSelector((state) => state.casosPruebas.casosPruebas)
                          .map((elem) => ({ ...elem, key: elem.testId }));

  const handleDelete = (testId) => dispatch(eliminarCasosPruebaAction(usuario.shortUser, testId));

  const [data, setData] = useState(casosDePruebas);

  const columns = [
    {
      title: "#",
      dataIndex: "testId",
      key: "id",
      render: (id, _, index) => <>{index + 1}</>,
    },
    {
      title: "Nombre",
      dataIndex: "testName",
      key: "nombre",
      with: "200",
    },
    {
      title: "Descripción",
      dataIndex: "testDescription",
      key: "descripcion",
    },
    {
      title: "Acciones",
      key: "accion",
      render: (_, record) => (
        <Space size="middle">
          <ModalEditListado
            {...record}
            usuario={usuario}
            loading={loading}
            subject={subject}
          />
          <Popconfirm
            title="¿Está seguro de eliminar?"
            onConfirm={() => handleDelete(record.testId)}
            okText="Confirmar"
            cancelText="Cancelar"
          >
            <a href="!">
              {" "}
              <DeleteOutlined />{" "}
            </a>
          </Popconfirm>

          <Link
            to={{
              pathname: "/peticiones/creacion-de-casos-de-prueba/detalle",
              state: {
                detalle: record,
                peticion: peticion,
                subject: subject,
              },
            }}
            className="btn-yellow-link"
          >
            {" "}
            <SettingOutlined />{" "}
          </Link>
        </Space>
      ),
    },
  ];

  const components = { body: { row: DragableBodyRow } };

  const moveRow = useCallback(( dragIndex, hoverIndex ) => {
    const dragRow = data[ dragIndex ];
    setData( update( data, {
      $splice: [
        [ dragIndex, 1 ],
        [ hoverIndex, 0, dragRow ]
      ]
    }));
  }, [ data ]);

  return (
    <DndProvider backend={ HTML5Backend }>
      <Table
        columns={ columns }
        dataSource={ data }
        size="middle"
        components={ components }
        pagination={ paginationProps }
        locale={{ emptyText: "Sin datos" }}
        onRow={( record, index ) => ({
          index,
          moveRow
        })}
      />
    </DndProvider>
  );
};

export default TableListadoCP;