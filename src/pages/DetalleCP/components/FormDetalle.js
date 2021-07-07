import React, { useState } from "react";

import "../detalle-style.css";
import { Steps, Button, message } from "antd";
import EditorStepDetalle from "./EditorStepDetalle";

const FormDetalle = () => {
  const { Step } = Steps;
  const [editorData, setEditorData] = useState(
    "<ul><li>Precondición del caso de prueba!</li><li>Segunda precondición.</li><li>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</li></ul>"
  );
  const [current, setCurrent] = React.useState(0);
  console.log(editorData);

  const steps = [
    {
      title: "Precondición",
      content: (
        <EditorStepDetalle
          editorData={editorData}
          setEditorData={setEditorData}
        />
      ),
    },
    {
      title: "Acción",
      content: "Acción",
    },
    {
      title: "Resultado Esperado",
      content: "Resultado Esperado",
    },
    {
      title: "Evidencias",
      content: "Evidencias",
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    /*  <Steps current={1} percent={60}>
      <Step title="Precondición" />
      <Step title="Acción" />
      <Step title="Resultado Esperado" />
      <Step title="Evidencias" />
    </Steps> */
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Siguiente
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Completar
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Anterior
          </Button>
        )}
      </div>
    </>
  );
};

export default FormDetalle;
