import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const EditorStepDetalle = (props) => {
  const { editorData, setEditorData } = props;
  //console.log(editorData);
  return (
    <CKEditor
      editor={ClassicEditor}
      data={editorData}
      onReady={(editor) => {
        //console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        const data = editor.getData();
        setEditorData(data);
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
