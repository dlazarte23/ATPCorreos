import { List } from 'antd';

import { Link } from 'react-router-dom';

const ListPlandePrueba = (props) => {

  const plandeprueba = props.peticion.responseTests;

  return (

    <List
      style={{marginTop: 20}}
      itemLayout="horizontal"
      dataSource={plandeprueba}
      renderItem={item => (
        <List.Item>

          <Link to={{
            pathname: "/peticiones/creacion-de-casos-de-prueba",
            state: { peticion: props.peticion }
          }}>           
              
            {item.subject} 
          
          </Link>

        </List.Item>
      )}
    />
  )
}



export default ListPlandePrueba