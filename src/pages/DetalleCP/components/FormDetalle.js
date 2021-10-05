import React, { useState } from "react";

import "../detalle-style.css";
import { Steps, Button, message } from "antd";
import {
  FileExclamationOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  FileImageOutlined,
  ArrowRightOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import EditorStepDetalle from "./EditorStepDetalle";
import UploadEvidencias from "./UploadEvidencias";

import { getBase64 } from "../../../utils/helpers/convertToBase64";

const { Step } = Steps;

const FormDetalle = ({ detalle, stepsData, crearStep }) => {
  // eslint-disable-next-line
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [current, setCurrent] = useState(0);

  const [stepData, setStepData] = useState({
    precondition: "",
    action: "",
    expectedResult: "",
    evidences: [],
  });

  const loading = useSelector((state) => state.peticiones.loading);
  const usuario = useSelector((state) => state.usuario.usuario);
  
  const handlePaste = async ( e ) => {
    if ( e.clipboardData.files.length ) {

        if ( stepData.evidences.length >= 3 ) {
          message.warning('No puede subir mas de 3 imagenes por detalle!');
          return;
        }

        const archivoObjecto = e.clipboardData.files[0];

        const response = await getBase64( archivoObjecto );

        const dataFake = {
            uid: `${ archivoObjecto.name + Math.random() }`,
            name: `image.png`,
            status: 'done',
            src: response
        }

        setStepData( { ...stepData, evidences: [ ...stepData.evidences, dataFake ] } );

    } else {
        message.warning("No encontramos imagenes en su portapapeles!");
    }
  }

  const steps = [
    {
      title: "Precondición",
      icon: <FileExclamationOutlined />,
      content: (
        <EditorStepDetalle
          stepData={stepData}
          setStepData={setStepData}
          initialData={stepData.precondition}
          current="precondition"
          key="1"
        />
      ),
    },
    {
      title: "Acción",
      icon: <FileTextOutlined />,
      content: (
        <EditorStepDetalle
          stepData={stepData}
          setStepData={setStepData}
          initialData={stepData.action}
          current="action"
          key="2"
        />
      ),
    },
    {
      title: "Resultado esperado",
      icon: <FileProtectOutlined />,
      content: (
        <EditorStepDetalle
          stepData={stepData}
          setStepData={setStepData}
          initialData={stepData.expectedResult}
          current="expectedResult"
          key="3"
        />
      ),
    },
    {
      title: "Evidencias",
      icon: <FileImageOutlined />,
      content: (
        <div onPaste={ handlePaste }>
          <UploadEvidencias stepData={stepData} setStepData={setStepData} />
          <div 
            style={{ 
              height: 25,
              border: '1px solid #3E92F5',
              background: 'white',
              color: '#3E92F5',
              cursor: "pointer"
            }}>
            <p style={{ marginLeft: 10 }}>Click aqui para pegar sus imagenes desde el portapapeles...</p>
          </div>
        </div>
      ),
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const onSaveNewStep = () => {    
    setConfirmLoading(!loading);
    setTimeout(() => {
      setConfirmLoading(false);
    }, 2000);

    const arrFiltrada = stepData.evidences.map( ( elemento ) => elemento.src );

    const newStep = {
      idTestCase: detalle.testId,
      results: arrFiltrada,
      shortUsername: usuario.shortUser,
      stepComments: stepData.precondition,
      stepDescription: stepData.action,
      stepExpectedResult: stepData.expectedResult,
      stepOrder: stepsData.length + 1,
    };
    setStepData({
      precondition: "",
      action: "",
      expectedResult: "",
      evidences: [],
    });
    setCurrent(0);

    //Creamos el nuevo step
    crearStep(newStep);
  };

  return (
    <>
      <Steps
        current={current}
        size="small"
        className="site-navigation-steps"
        labelPlacement="horizontal"
      >
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Anterior
          </Button>
        )}
        {current === 0 && (
          <Button
            type="primary"
            disabled={stepData.precondition === ""}
            className={stepData.precondition === "" ? "disablednext" : ""}
            icon={<ArrowRightOutlined />}
            onClick={() => next()}
          >
            Siguiente
          </Button>
        )}
        {current === 1 && (
          <Button
            type="primary"
            disabled={stepData.action === "" ? true : false}
            className={stepData.action === "" ? "disablednext" : ""}
            icon={<ArrowRightOutlined />}
            onClick={() => next()}
          >
            Siguiente
          </Button>
        )}

        {current === 2 && (
          <Button
            type="primary"
            disabled={stepData.expectedResult === "" ? true : false}
            className={stepData.expectedResult === "" ? "disablednext" : ""}
            icon={<ArrowRightOutlined />}
            onClick={() => next()}
          >
            Siguiente
          </Button>
        )}

        {current === steps.length - 1 && (
          <Button
            type="primary"
            icon={<SaveOutlined />}
            disabled={stepData.evidences === "" ? true : false}
            className={stepData.evidences === "" ? "disablednext" : ""}
            onClick={() => onSaveNewStep()}
          >
            Completar
          </Button>
        )}
      </div>
    </>
  );
};

export default FormDetalle;
