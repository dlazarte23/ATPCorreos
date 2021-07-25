import { Upload } from "antd";
/* import ModalEditListado from "../pages/DetalleCP/components/ModalEditDetalle"; */

/**
 * Esta data solo sera momentanea, despues de conectar
 * con el backend elimnarla
 */

const props = {
  //action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  onChange({ file, fileList }) {
    if (file.status !== "uploading") {
      console.log(file, fileList);
    }
  },
  defaultFileList: [
    {
      uid: "1",
      name: "xxx.png",
      status: "done",
      response: "Server Error 500", // custom error message to show
      url: "#",
    },
    {
      uid: "3",
      name: "yyy.png",
      status: "error",
      response: "Server Error 500", // custom error message to show
      url: "#",
    },
  ],
  showUploadList: {
    showDownloadIcon: false,
    showRemoveIcon: false,
  },
};

export const data = [];
for (let i = 1; i < 8; i++) {
  data.push({
    key: i,
    id: i,
    precondicion:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    accion:
      "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure).",
    resultado:
      "To help people create their product prototypes beautifully and efficiently.",
    evidencia: <Upload {...props} />,
  });
}
