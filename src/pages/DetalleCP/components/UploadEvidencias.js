import React from "react";

import "../detalle-style.css";
import { Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

const { Dragger } = Upload;

//Conversión del imagen a Base64
const getBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      resolve(encoded);
    };
    reader.onerror = (error) => reject(error);
  });
};

const UploadEvidencias = (props) => {
  const { stepData, setStepData } = props;
  const draggerProps = {
    multiple: true,
    //maxCount: 1,
    accept: ".jpg,.png,.gif",
    beforeUpload: async (file) => {
      const base64Img = await getBase64(file);
      const evidencesList = stepData.evidences;
      evidencesList.push(base64Img);
      setStepData({ ...stepData, evidences: evidencesList });
      return false;
    },
    onDrop(e) {
      setStepData({ ...stepData, evidences: [] });
    },
  };

  return (
    <Dragger {...draggerProps} className="uploadDragger">
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">
        Haga click o arrastre una imagen a esta área.
      </p>
      <p className="ant-upload-hint">
        Adjuntar evidencia del step. Formatos aceptados: png, jpg, gif.
      </p>
    </Dragger>
  );
};

export default UploadEvidencias;
