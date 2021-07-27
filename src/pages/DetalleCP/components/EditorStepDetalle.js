import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { Input } from 'antd';
// const editorConfiguration = {
//   toolbar: [
//     "bold",
//     "italic",
//     "underLine",
//     "|",
//     "bulletedList",
//     "numberedList",
//     "|",
//     "undo",
//     "redo",
//   ],
// };
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
      onChange={(e) => {
             handleChangeContent(e.target.value); 
           }}

      />
      

    //usando el CK-Editor 5
    // <CKEditor
    //   editor={ClassicEditor}
    //   data={initialData}
    //   config={editorConfiguration}
    //   onReady={(editor) => {
    //     //console.log("Editor is ready to use!", editor);
    //   }}
    //   onChange={(event, editor) => {
    //     handleChangeContent(editor.getData());
    //     console.log(editor.getData());
    //   }}
    //   onBlur={(event, editor) => {
    //     //console.log("Blur.", editor);
    //   }}
    //   onFocus={(event, editor) => {
    //     //console.log("Focus.", editor);
    //   }}
    // />


  );
};

export default EditorStepDetalle;
