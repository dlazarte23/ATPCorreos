import React, { useRef } from "react";

import "../detalle-style.css";
import { message, Upload } from "antd";
import { InboxOutlined } from "@ant-design/icons";

import { getBase64 } from "../../../utils/helpers/convertToBase64";

const { Dragger } = Upload;

const UploadEvidencias = (props) => {
  const { stepData, setStepData } = props;

  const numSubidas = useRef(0);

  const draggerProps = {
    multiple: true,
    //maxCount: 1,
    accept: ".jpg,.png,.gif",
    beforeUpload: async (file) => {

      if ( numSubidas.current === 3 ) {
        message.warning('No puede subir mas de 3 imagenes por detalle!');
        return;
      }

      numSubidas.current ++;

      if ( stepData.evidences.length >= 3 ) {
        message.warning('No puede subir mas de 3 imagenes por detalle!');
        return;
      }

      const base64Img = await getBase64(file);

      const objTemp = {
        uid: file.uid,
        name: file.name,
        src: base64Img,
        status: 'done'
      }

      const evidencesList = stepData.evidences;

      evidencesList.push(objTemp);

      setStepData({ ...stepData, evidences: evidencesList });
      return false;
    },
    onDrop(e) {
      setStepData({ ...stepData, evidences: [] });
    },
    fileList: stepData.evidences,
    onRemove: async ( e ) => {
      setStepData({ 
          ...stepData, 
          evidences: stepData.evidences.filter ( ( img ) => img.uid !== e.uid ) 
      });
      numSubidas.current --;
    }
  };

  return (
    <Dragger 
      {...draggerProps} 
      className="uploadDragger">
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
