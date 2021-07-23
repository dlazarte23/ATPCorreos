import React, { useState } from "react";

import "../detalle-style.css";
import { Steps, Button, message } from "antd";
import {
  FileExclamationOutlined,
  FileTextOutlined,
  FileProtectOutlined,
  FileImageOutlined,
  ArrowRightOutlined,
  SaveOutlined
} from "@ant-design/icons";

import EditorStepDetalle from "./EditorStepDetalle";
import UploadEvidencias from "./UploadEvidencias";

const FormDetalle = () => {
  const { Step } = Steps;

  const [dataPrecondicion, setDataPrecondicion] = useState(
    "<ul><li>Precondición del caso de prueba!</li><li>Segunda precondición.</li><li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li></ul>"
  );
  const [dataAccion, setDataAccion] = useState(
    "<ul><li>Acciones del caso de prueba!</li></ul>"
  );
  const [dataResultado, setDataResultado] = useState(
    "<ul><li>Resultado esperado!</li></ul>"
  );

  const [current, setCurrent] = React.useState(0);
  const [stepData, setStepData] = useState({
    precondition: "",
    action: "",
    expectedResult: "",
    evidences: [],
  });

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
      title: "Resultado Esperado",
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
      content: <UploadEvidencias />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current} labelPlacement="vertical" /* percent={(current + 1) * 25} */>
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
        {current == 0 && (

          <Button
            type="primary"
            disabled={stepData.precondition == '' ? true : false}
            className={stepData.precondition == '' ? "disablednext" : ''}
            icon={<ArrowRightOutlined />}
            onClick={() => next()}>
            Siguiente
          </Button>
        )}
        {current == 1 && (

          <Button
            type="primary"
            disabled={stepData.action == '' ? true : false}
            className={stepData.action == '' ? "disablednext" : ''}
            icon={<ArrowRightOutlined />}
            onClick={() => next()}>
            Siguiente
          </Button>
        )}

        {current == 2 && (

        <Button
          type="primary"
          disabled={stepData.expectedResult == '' ? true : false}
          className={stepData.expectedResult == '' ? "disablednext" : ''}
          icon={<ArrowRightOutlined />}
          onClick={() => next()}>
          Siguiente
        </Button>
        )}

        {current === steps.length - 1 && (
          <Button
            type="primary"
            icon={<SaveOutlined />}
            onClick={() => message.success("Paso agregado!")} >
            Completar
          </Button>
        )}

      </div>
    </>
  );
};

export default FormDetalle;
