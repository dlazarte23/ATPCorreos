import { List } from 'antd';

import { useHistory } from "react-router";



const ListPlandePrueba = (props) => {
  const plandeprueba = props.peticion.responseTests;

  const history = useHistory();

  return (

    <List
      itemLayout="horizontal"
      dataSource={plandeprueba}
      renderItem={item => (
        <List.Item>

          <div
            onClick={() =>
              history.push({
                pathname: "/peticiones/creacion-de-casos-de-prueba",
                state: { peticion: props.peticion }
              })
            }
          >
            <a>  {item.subject}</a>
          </div>
        </List.Item>
      )}
    />
  )
}



export default ListPlandePrueba