import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditorStepDetalle = (props) => {
  const { stepData, setStepData, initialData, current } = props;
  console.log(stepData);
  const handleChangeContent = (data) => {
    console.log("en handleChangeContent");
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
    }
  };
  return (
    <CKEditor
      editor={ClassicEditor}
      data={initialData}
      onReady={(editor) => {
        //console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        handleChangeContent(editor.getData());
        //console.log({ event, editor, data });
      }}
      onBlur={(event, editor) => {
        //console.log("Blur.", editor);
      }}
      onFocus={(event, editor) => {
        //console.log("Focus.", editor);
      }}
    />
  );
};

export default EditorStepDetalle;
