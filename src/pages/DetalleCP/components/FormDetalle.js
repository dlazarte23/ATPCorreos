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
import { useDispatch, useSelector } from "react-redux";
import EditorStepDetalle from "./EditorStepDetalle";
import UploadEvidencias from "./UploadEvidencias";

// actions de redux
import { crearNuevoStepAction } from "../../../stateManagement/actions/stepsAction";

const { Step } = Steps;

const FormDetalle = ({ detalle, stepsData, crearStep }) => {
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [stepData, setStepData] = useState({
    precondition: "",
    action: "",
    expectedResult: "",
    evidences: [],
  });

  //console.log(detalle);

  const loading = useSelector((state) => state.peticiones.loading);
  const usuario = useSelector((state) => state.usuario.usuario);
  const dispatch = useDispatch();

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
      content: (
        <UploadEvidencias stepData={stepData} setStepData={setStepData} />
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

    const newStep = {
      idTestCase: detalle.testId,
      results: stepData.evidences,
      shortUsername: usuario.shortUser,
      stepComments: stepData.action,
      stepDescription: stepData.precondition,
      stepExpectedResult: stepData.expectedResult,
      stepOrder: stepsData.length + 1,
    };
    //console.log(newStep);

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
