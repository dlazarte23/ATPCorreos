import React from 'react';

import { Table } from 'antd';

import { columns, data } from '../../../utils/columnsTblDetalle';

const TableDetallesCP = () => (
    <Table columns={columns} dataSource={data}/>
);

export default TableDetallesCP;