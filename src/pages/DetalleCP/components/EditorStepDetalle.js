import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

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
    <CKEditor
      editor={ClassicEditor}
      data={initialData}
      onReady={(editor) => {
        //console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        handleChangeContent(editor.getData());
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
