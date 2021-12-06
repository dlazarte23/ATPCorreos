import React from "react";
import { List } from "antd";
import { useSelector, useDispatch } from "react-redux";

import { Link } from "react-router-dom";
import { Popconfirm, Tooltip, Space } from "antd";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";

// actions de redux
import { eliminarPlandePruebaAction } from "../../../stateManagement/actions/planesPruebaAction";

const ListPlandePrueba = ({ subjects, idPlanPrueba, enableFieldsEdit }) => {
  const peticion = useSelector((state) => state.planesPrueba.peticion);

  const dispatch = useDispatch();
  const eliminarPlandePrueba = (idPlan) =>
    dispatch(eliminarPlandePruebaAction(idPlan));

  return (
    <List
      style={{ marginTop: 20 }}
      itemLayout="horizontal"
      dataSource={subjects}
      renderItem={(item) => (
        <List.Item>
          <Link
            to={{
              pathname: "/peticiones/creacion-de-casos-de-prueba",
              state: { peticion, subject: item },
            }}
          >
            {item.subject}
          </Link>

          <Space>
            <Tooltip title={!!!idPlanPrueba && "Editar"}>
              <EditOutlined
                style={{ marginRight: 20 }}
                className={!!!idPlanPrueba && "App-link"}
                disabled={!!idPlanPrueba}
                onClick={() => {
                  enableFieldsEdit(item.id, item.subject);
                }}
              />
            </Tooltip>

            <Popconfirm
              title="¿Está seguro de eliminar?"
              onConfirm={() => eliminarPlandePrueba(item.id)}
              okText="Confirmar"
              cancelText="Cancelar"
              disabled={!!idPlanPrueba}
            >
              <Tooltip title={!!!idPlanPrueba && "Eliminar"}>
                <DeleteOutlined className={!!!idPlanPrueba && "App-link"} />
              </Tooltip>
            </Popconfirm>
          </Space>
        </List.Item>
      )}
    />
  );
};

export default ListPlandePrueba;
