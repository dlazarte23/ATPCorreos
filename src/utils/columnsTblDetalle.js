import { Space } from 'antd';

export const columns = [
    {
        title: "PreCondición",
        dataIndex: "precondicion",
        key: "precondicion"
    },
    {
        title: "Acción",
        dataIndex: "accion",
        key: "accion"
    },
    {
        title: "Resultado Esperado",
        dataIndex: "resultado",
        key: "resultado"
    },
    {
        title: "Evidencias",
        dataIndex: "evidencia",
        key: "evidencia"
    },
    {
        title: "Acciones",
        key: "accion",
        render: () => (
            <Space size="middle">
                <a href="!">Editar</a>
                <a href="!">Eliminar</a>
            </Space>
        )
    }
];

/**
 * Esta data solo sera momentanea, despues de conectar
 * con el backend elimnarla
 */
export const data = [
    {
        key:'1',
        precondicion: 'Lorem impusm',
        accion: 'Nose que hacer uwu',
        resultado: 'Este es el resultado',
        evidencia: 'Soy una imagen'
    },
    {
        key:'2',
        precondicion: 'Lorem impusm',
        accion: 'Nose que hacer uwu',
        resultado: 'Este es el resultado',
        evidencia: 'Soy una imagen'
    },
    {
        key:'3',
        precondicion: 'Lorem impusm',
        accion: 'Nose que hacer uwu',
        resultado: 'Este es el resultado',
        evidencia: 'Soy una imagen'
    },
    {
        key:'4',
        precondicion: 'Lorem impusm',
        accion: 'Nose que hacer uwu',
        resultado: 'Este es el resultado',
        evidencia: 'Soy una imagen'
    },

]