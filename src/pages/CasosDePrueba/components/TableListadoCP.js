import React, { useState, useCallback, useEffect } from "react";

import { Link } from "react-router-dom";
import { Table, Space, Popconfirm, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { DeleteOutlined, SettingOutlined } from "@ant-design/icons";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from 'react-dnd-html5-backend';
import update from 'immutability-helper';

import ModalEditListado from "./ModalEditListado";
import { paginationProps } from "../../../utils/helpers/paginationProps"; 
import { eliminarCasosPruebaAction, orderPosicionTestCase } from "../../../stateManagement/actions/casosPruebasAction";
import { DragableBodyRow } from "../../../components/common/DragableBodyRow";

const TableListadoCP = ({ peticion, usuario, loading, subject }) => {

  const dispatch = useDispatch();
  
  const { casosPruebas : testsCase } = useSelector(( state ) => state.casosPruebas );
  
  const handleDelete = ( testId ) => dispatch(eliminarCasosPruebaAction( usuario.shortUser, testId ));
  
  const [data, setData] = useState( [] ); 
  const [cambioPosicion, setCambioPosicion] = useState( false );

  useEffect(() => { 
    setData(
      testsCase.map(( elem ) => ( { ...elem, key: elem.testId.toString() } ))
    ); 
  }, [ testsCase ]);

  const columns = [
    {
      title: "Order",
      dataIndex: "order",
      key: "numOrder",
    },
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
              {" "}<DeleteOutlined />{" "}
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
            {" "}<SettingOutlined />{" "}
          </Link>
        </Space>
      ),
    },
  ];

  const components = { body: { row: DragableBodyRow } };

  const moveRow = useCallback(( dragIndex, hoverIndex ) => {

    setCambioPosicion( true );

    const dragRow = data[ dragIndex ];

    setData( update( data, {
      $splice: [
        [ dragIndex, 1 ],
        [ hoverIndex, 0, dragRow ]
      ]
    }));

  // eslint-disable-next-line
  }, [ data ]);

  const actualizarPosicion = () => {    
    const datosNuevaPosicion =  {
      testCaseList: data.map(( test, index ) => ( { idTestCase: test.testId, order: index+1 } ) )
    }
    
    dispatch( orderPosicionTestCase( datosNuevaPosicion ) );
    
    setCambioPosicion( false );    
  }

  return (

    <>
      <DndProvider backend={ HTML5Backend }>
        <Table
          columns={ columns.filter( ( col ) => col.dataIndex !== 'order') }
          dataSource={ data }
          size="middle"
          components={ components }
          pagination={ paginationProps }
          locale={{ emptyText: "Sin datos" }}
          onRow={( _, index ) => ({
            index,
            moveRow
          })}
        />
      </DndProvider>

      { 
        ( cambioPosicion ) && (
          <Button 
            type="primary"
            style={{ marginBottom: 20, marginTop: 20}} 
            onClick={ () => actualizarPosicion() }
            block >
              Guardar Posiciones
          </Button>
        ) 
      }
    </>
  );
};

export default TableListadoCP;