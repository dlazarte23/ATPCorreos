import React from "react";

import { Table } from "antd";
import { columns } from "../../../utils/columnsTblListado";

const paginationProps = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20, 50],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `${total} resultados`,
  hideOnSinglePage: true,
  defaultCurrent: 1,
};

const TableListadoCP = ({dataTable}) => {

  return (
  <Table
    columns={columns}
    dataSource={dataTable}
    size="middle"
    pagination={paginationProps}
  />
)};

export default TableListadoCP;
