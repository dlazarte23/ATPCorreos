import React from "react";
import { Input } from "antd";

const { TextArea } = Input;

const EditorStepDetalle = (props) => {
  const { stepData, setStepData, initialData, current } = props;
  const handleChangeContent = (data) => {
    switch (current) {
      case "precondition":
        setStepData({
          ...stepData,
          precondition: data,
        });
        break;
      case "action":
        setStepData({
          ...stepData,
          action: data,
        });
        break;
      case "expectedResult":
        setStepData({
          ...stepData,
          expectedResult: data,
        });
        break;
      default:
        console.log("");
    }
  };

  return (
    <TextArea
      rows={9}
      defaultValue={initialData}
      onChange={(e) => {
        handleChangeContent(e.target.value);
      }}
    />
  );
};

export default EditorStepDetalle;
