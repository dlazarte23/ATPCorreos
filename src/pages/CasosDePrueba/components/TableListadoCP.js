import React from 'react';

import { Table } from 'antd';

import { columns, data } from '../../../utils/columnsTblListado';

const TableListadoCP = () => (
    <Table columns={columns} dataSource={data}/>
);

export default TableListadoCP;