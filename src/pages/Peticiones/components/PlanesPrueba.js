import React, { useState, useEffect } from "react";

import { 
  Drawer, 
  Typography, 
  Space, 
  Input, 
  Button, 
  Form, 
  Spin,
  Tooltip
} from "antd";
import { 
  UnorderedListOutlined, 
  PlusOutlined, 
  SaveOutlined, 
  CloseOutlined 
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";

import { ListPlandePrueba } from ".";
import { agregarPlanPruebaAction, editarPlanDePruebaAction } from "../../../stateManagement/actions/planesPruebaAction";

const PlanesPrueba = ({ showPP, onCloseDetallePP }) => {

  const { Title } = Typography;
  
  const dispatch = useDispatch();
  
  const [form] = Form.useForm();
  const [inputAddPlan, setInputAddPlan] = useState("");
  const [idPlanPrueba, setIdPlanPrueba] = useState("");
  
  const { id : spring } = useSelector( ( state ) => state.planesPrueba.peticion );
  
  const { shortUser } = useSelector( ( state ) => state.usuario.usuario );
  
  const { planesPrueba : subjects } = useSelector( ( state ) => state.planesPrueba );
  
  const { loading } = useSelector( ( state ) => state.planesPrueba );
  
  const registrarPP = ( subject ) => dispatch( agregarPlanPruebaAction( subject ) );
  
  useEffect(() => {
    !loading && form.resetFields();
  }, [loading, form]);

  const onFinish = ( values ) => {
    
    const pp = {
      spring, 
      subject: values.nomPlanPrueba,
      user: shortUser,
    };

    // se verificar si es una edición
    if ( !!idPlanPrueba ) {

      pp.id = idPlanPrueba;

      dispatch( editarPlanDePruebaAction(pp) );

      setInputAddPlan("");
      setIdPlanPrueba("");

    } else {
      registrarPP( pp );
    }

  };

  const onFinishFailed = ( errorInfo ) => { console.log("Failed:", errorInfo); };

  const onChange = ( { target } ) => { setInputAddPlan( target.value ); };
  
  const enableFieldsEdit = ( idPlan, nomPlan ) => {
    setInputAddPlan(nomPlan);
    setIdPlanPrueba(idPlan);

    form.setFieldsValue({
      nomPlanPrueba: nomPlan
    });
  }

  const cancelEdit = () => {
    setInputAddPlan("");
    setIdPlanPrueba("");

    form.setFieldsValue({
      nomPlanPrueba: ""
    });
  }

  const FragmentEdit = () => {
    return(
      <Space size='small' >
        <Tooltip title="Guardar cambios" placement="bottom">
          <Button 
            type="text" 
            className="App-link"
            icon={ <SaveOutlined/> }
            htmlType="submit" >
          </Button>
        </Tooltip>
        <Tooltip title="Cancelar" placement="bottom">
          <Button 
            type="text"
            className="App-link"
            onClick={ () => cancelEdit() }
            icon={ <CloseOutlined /> }>            
          </Button>
        </Tooltip>
      </Space>
    );
  }

  return (
    <Drawer
      width={500}
      placement="right"
      closable={true}
      onClose={onCloseDetallePP}
      visible={showPP}
    >
      <Spin spinning={loading} tip="Cargando..." size="large">
        <Title level={4} style={{ textAlign: "center" }}>
          <UnorderedListOutlined /> Lista de planes de prueba
        </Title>

        <Space style={{ marginTop: 20 }}>
          <Form
            name="basic"
            layout="inline"
            form={form}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Input 
              value={ idPlanPrueba }
              hidden />

            <Form.Item
              name="nomPlanPrueba"
              required={[
                {
                  require: true,
                  message: "Debe ingresar un nombre!",
                },
              ]}
            >
              <Input
                placeholder="Nombre"
                value={inputAddPlan}
                style={ 
                  ( !!idPlanPrueba ) 
                    ? { width: 348 }
                    : { width: 316 }
                }
                onChange={onChange}
              />
            </Form.Item>
            <Form.Item>
              {
                ( !!idPlanPrueba )
                  ? <FragmentEdit />
                  : <Button 
                      type="text" 
                      icon={ <PlusOutlined/> }
                      htmlType="submit" 
                      disabled={ !inputAddPlan }>
                        Agregar                
                    </Button>
              }              
            </Form.Item>
          </Form>
        </Space>

        <ListPlandePrueba 
          subjects={subjects}
          idPlanPrueba={idPlanPrueba}
          enableFieldsEdit={enableFieldsEdit} />
      </Spin>
    </Drawer>
  );
};

export default PlanesPrueba;
