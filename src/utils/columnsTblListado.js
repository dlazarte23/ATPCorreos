import { Space } from 'antd';

export const columns = [
    {
        title: "#",
        dataIndex: "id",
        key: "id"
    },
    {
        title: "Nombre",
        dataIndex: "nombre",
        key: "nombre"
    },
    {
        title: "Descripcion",
        dataIndex: "descripcion",
        key: "descripcion"
    },
    {
        title: "Acciones",
        key: "accion",
        render: () => (
            <Space size="middle">
                <a href="!">Editar</a>
                <a href="!">Eliminar</a>
                <a href="!">Configurar</a>
            </Space>
        )
    }
];

export const data = [
    {
        key:'1',
        id: '1',
        nombre: 'Nombre CP',
        descripcion: 'Descripcion CP'
    },
    {
        key:'2',
        id: '2',
        nombre: 'Nombre CP',
        descripcion: 'Descripcion CP'
    },
    {
        key:'3',
        id: '3',
        nombre: 'Nombre CP',
        descripcion: 'Descripcion CP'
    },
    {
        key:'4',
        id: '4',
        nombre: 'Nombre CP',
        descripcion: 'Descripcion CP'
    },

]