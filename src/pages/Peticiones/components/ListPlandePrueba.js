import { List } from 'antd';
import { useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

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

        </List.Item>
      )}
    />
  )
}



export default ListPlandePrueba