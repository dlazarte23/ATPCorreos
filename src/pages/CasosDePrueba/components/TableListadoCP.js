import React from "react";

import { Table } from "antd";
import { columns } from "../../../utils/columnsTblListado";

import { useSelector } from "react-redux";

const paginationProps = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20, 50],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `${total} resultados`,
  hideOnSinglePage: true,
  defaultCurrent: 1,
};

const TableListadoCP = ( ) => {

  const casosDePruebas = useSelector( state => state.casosPruebas.casosPruebas );

  return (
  <Table
    columns={columns}
    dataSource={casosDePruebas}
    size="middle"
    pagination={paginationProps}
  />
)};

export default TableListadoCP;
