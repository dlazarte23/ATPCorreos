import {
  AGREGAR_CASOS_PRUEBA,
  AGREGAR_CASOS_PRUEBA_EXITO,
  AGREGAR_CASOS_PRUEBA_ERROR,
  LISTAR_CASOS_PRUEBA,
  LISTAR_CASOS_PRUEBA_EXITO,
  LISTAR_CASOS_PRUEBA_ERROR,
  EDITAR_CASOS_PRUEBA,
  EDITAR_CASOS_PRUEBA_EXITO,
  EDITAR_CASOS_PRUEBA_ERROR,
  ELIMINAR_CASOS_PRUEBA,
  ELIMINAR_CASOS_PRUEBA_EXITO,
  ELIMINAR_CASOS_PRUEBA_ERROR,
  DESCARGAR_DOCUMENTO,
  DESCARGAR_DOCUMENTO_EXITO,
  DESCARGAR_DOCUMENTO_ERROR,
} from "../types/casosPruebasType";

import { message } from "antd";

import { ProyectoBaseUrl as uri } from "../../Api/ApiUrl";

import { post } from "../../utils/confAxios/petitionPost";
import { get, getEnriched } from "../../utils/confAxios/petitionGet";
import { patch } from "../../utils/confAxios/petitionPatch";

import FileSaver from "file-saver";

/**
 * Action para el listado de todos los casos de pruebas
 * @param {*} idPeticion
 */
export const listarCasosDePruebaAction = (idPeticion) => {
  return async (dispatch) => {
    dispatch(listarCasosPrueba());

    try {
      const response = await get(`${uri.getCasosDePrueba}/${idPeticion}`);

      dispatch(listarCasosPruebaExito(response));
    } catch (error) {
      message.error("Error al tratar de obtener los casos de pruebas!");
      dispatch(listarCasosPruebaError(error));
    }
  };
}

const listarCasosPrueba = () => ({
  type: LISTAR_CASOS_PRUEBA,
});

const listarCasosPruebaExito = (casosDePrueba) => ({
  type: LISTAR_CASOS_PRUEBA_EXITO,
  payload: casosDePrueba,
});

const listarCasosPruebaError = (error) => ({
  type: LISTAR_CASOS_PRUEBA_ERROR,
  payload: error,
});

/**
 * Action encargado de crear el caso de prueba.
 * @param {*} casoDePrueba
 */
export const registrarCasosPruebasAction = (casoDePrueba) => {
  return async (dispatch) => {
    dispatch(registrarCasosPrueba());

    try {
      const response = await post(uri.setCasoDePrueba, casoDePrueba);

      if (response.status === 201) {
        message.success("Caso de prueba creado correctamente!");

        dispatch(registrarCasosPruebaExito(response.data));
      }
    } catch (error) {
      message.error("Ocurrió un error al registrar el caso de prueba!");

      dispatch(registrarCasosPruebaError(error));
    }
  };
}

const registrarCasosPrueba = () => ({
  type: AGREGAR_CASOS_PRUEBA,
});

const registrarCasosPruebaExito = (casoDePrueba) => ({
  type: AGREGAR_CASOS_PRUEBA_EXITO,
  payload: casoDePrueba,
});

const registrarCasosPruebaError = (error) => ({
  type: AGREGAR_CASOS_PRUEBA_ERROR,
  payload: error,
});

/**
 * Action para la edición del caso de prueba
 * @param {*} idTestCase
 * @param {*} data
 */
export const editarCasosPruebaAction = (idTestCase, data) => {
  return async (dispatch) => {
    dispatch(editarCasosPrueba());

    try {
      const response = await patch(
        `${uri.setCasoDePrueba}/${idTestCase}`,
        data
      );

      if (response.status === 200) {
        message.success("Caso de prueba modificada correctamente!");

        dispatch(editarCasosPruebaExito(response.data));
      }
    } catch (error) {
      dispatch(editarCasosPruebaError());

      message.error("Error al trata de editar el Caso de Prueba!");
    }
  };
}

const editarCasosPrueba = () => ({
  type: EDITAR_CASOS_PRUEBA,
});
const editarCasosPruebaExito = (testCase) => ({
  type: EDITAR_CASOS_PRUEBA_EXITO,
  payload: testCase,
});
const editarCasosPruebaError = (error) => ({
  type: EDITAR_CASOS_PRUEBA_ERROR,
  payload: error,
});

/**
 * Action para la eliminación del caso de prueba
 * @param {*} shortUsername
 * @param {*} idTestCase
 */
export const eliminarCasosPruebaAction = (shortUsername, idTestCase) => {
  return async (dispatch) => {
    dispatch(eliminarCasosPrueba());

    try {
      const response = await patch(
        `${uri.setCasoDePrueba}/${shortUsername}/${idTestCase}`
      );

      if (response.status === 200) {
        message.success("Caso de prueba eliminado correctamente!");
        dispatch(eliminarCasosPruebaExito(idTestCase));
      }
    } catch (error) {
      message.error("Error al tratar de eliminar este Caso de Prueba!");

      dispatch(eliminarCasosPruebaError(error));
    }
  };
}

const eliminarCasosPrueba = () => ({
  type: ELIMINAR_CASOS_PRUEBA,
});

const eliminarCasosPruebaExito = (idTestCase) => ({
  type: ELIMINAR_CASOS_PRUEBA_EXITO,
  payload: idTestCase,
});

const eliminarCasosPruebaError = (error) => ({
  type: ELIMINAR_CASOS_PRUEBA_ERROR,
  payload: error,
});

/**
 * Action para la exportación del documento
 * @param {*} idPeticion
 * @param {*} tipoDocumento
 */
export const descargarDocumento = (idPeticion, tipoDocumento, nombreArchivo) => {
  return async (dispatch) => {
    dispatch(descargaDocumento());

    try {
      if (tipoDocumento === "xml") {
        const response = await get(
          `${uri.getDocumentoXml}?testplan=${idPeticion}`
        );

        FileSaver.saveAs(new Blob([response]), `${nombreArchivo}.xml`);
      } else if (tipoDocumento === "excel") {
        const response = await getEnriched(
          `${uri.getDocumentoExcel}?id=${idPeticion}`,
          { responseType: "blob" }
        );

        FileSaver.saveAs(
          new Blob([response.data], {
            type: "application/vnd.ms-excel",
          }),
          nombreArchivo
        );
      }

      message.success(`Archivo ${tipoDocumento} descargado correctamente!`);

      dispatch(descargaDocumentoExito());
    } catch (error) {
      const { status } = error.response;

      if (status === 400) {
        message.warning(
          `No puede descargar el documento, aún le faltan completar los pasos!`
        );

        dispatch(descargaDocumentoError(error));
      } else if (status === 500) {
        message.error(
          `Ocurrió un error al intentar descargar el archivo ${tipoDocumento}!`
        );

        dispatch(descargaDocumentoError(error));
      }
    }
  };
}

const descargaDocumento = () => ({
  type: DESCARGAR_DOCUMENTO,
});

const descargaDocumentoExito = () => ({
  type: DESCARGAR_DOCUMENTO_EXITO,
});

const descargaDocumentoError = (error) => ({
  type: DESCARGAR_DOCUMENTO_ERROR,
  payload: error,
});
