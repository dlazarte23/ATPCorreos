import { List } from 'antd';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';
import {
  Popconfirm,
  Typography,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";


const ListPlandePrueba = ({subjects}) => {

  const peticion = useSelector( state => state.planesPrueba.peticion );
 

  return (

    <List
      style={{marginTop: 20}}
      itemLayout="horizontal"
      dataSource={subjects}
      renderItem={item => (
        <List.Item>

          <Link to={{
            pathname: "/peticiones/creacion-de-casos-de-prueba",
            state: { peticion, subject: item }
          }}>           
              
            {item.subject} 
          
          </Link>
   
              <Popconfirm
                title="¿Está seguro de eliminar?"
                // onConfirm={() => eliminarStep(record.stepId)}
                okText="Confirmar"
                cancelText="Cancelar"
              >
                <DeleteOutlined title="Eliminar" />
              </Popconfirm>

        </List.Item>
      )}
    />
  )
}



export default ListPlandePrueba