import { List } from 'antd';
import { useSelector, useDispatch } from "react-redux";

import { Link } from 'react-router-dom';
import { Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";


// actions de redux
import { eliminarPlandePruebaAction } from "../../../stateManagement/actions/planesPruebaAction";

const ListPlandePrueba = ({subjects}) => {

  const peticion = useSelector( state => state.planesPrueba.peticion );

  const dispatch = useDispatch( );
  const eliminarPlandePrueba = (idPlan) => dispatch(eliminarPlandePruebaAction(idPlan));

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
                 onConfirm={() => eliminarPlandePrueba(item)}
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