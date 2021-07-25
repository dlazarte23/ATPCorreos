import React from "react";

import { Table } from "antd";

import { columns, data } from "../../../utils/columnsTblDetalle";

const paginationProps = {
  defaultPageSize: 5,
  pageSizeOptions: [5, 10, 20, 50],
  showSizeChanger: true,
  showQuickJumper: true,
  showTotal: (total) => `${total} resultados`,
  hideOnSinglePage: true,
  defaultCurrent: 1,
};

const TableDetallesCP = () => (
  <Table
    columns={columns}
    dataSource={data}
    size="middle"
    pagination={paginationProps}
  />
);

export default TableDetallesCP;
