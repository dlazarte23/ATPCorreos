import {
  GUARDAR_STEP,
  GUARDAR_STEP_EXITO,
  GUARDAR_STEP_ERROR,
  ACTUALIZAR_STEP,
  ACTUALIZAR_STEP_EXITO,
  ACTUALIZAR_STEP_ERROR,
  DESCARGAR_STEP,
  DESCARGAR_STEP_EXITO,
  DESCARGAR_STEP_ERROR,
  ELIMINAR_STEP,
  ELIMINAR_STEP_EXITO,
  ELIMINAR_STEP_ERROR,
} from "../types/stepsType";

import { message } from "antd";

import { ProyectoBaseUrl as uri } from "../../Api/ApiUrl";

import { get } from "../../utils/confAxios/petitionGet";
import { post } from "../../utils/confAxios/petitionPost";
import { patch } from "../../utils/confAxios/petitionPatch";

/**
 * Actión para poder hacer el registro del step
 * @param {*} step  => recibe un objeto con el step que se va a mandar a crear
 */
export const crearNuevoStepAction = (step) => {
  return async (dispatch) => {
    dispatch(guardarStep());

    try {
      const response = await post(uri.setTestStep, step);

      if (response.status === 201) {
        message.success("Paso creado correctamente!");
        dispatch(guardarStepExito(response.data));
      }
    } catch (error) {
      message.error("Error al crear el step!");
      dispatch(guardarStepError(error));
    }
  };
}

export const actualizarNuevoStepAction = (step, id) => {
  return async (dispatch) => {
    dispatch(actualizarStep());
    try {
      const response = await patch(`${uri.setTestStep}/${id}`, step);

      if (response.status === 200) {
        message.success("Paso editado correctamente!");
        dispatch(actualizarStepExito(response.data));
        //dispatch(descargarStep());
      }
    } catch (error) {
      message.error("Error al actualizar el step!");
      dispatch(actualizarStepError(error));
    }
  };
}

// avisamos que está empezando el proceso para GUARDAR el step
const guardarStep = () => ({
  type: GUARDAR_STEP,
});

// si se ha guardado en BBDD correctamente
const guardarStepExito = (step) => ({
  type: GUARDAR_STEP_EXITO,
  payload: step,
});

// si hubo un error al guardar en la BBDD
const guardarStepError = (error) => ({
  type: GUARDAR_STEP_ERROR,
  payload: error,
});

// avisamos que está empezando el proceso para ACTUALIZAR el step
const actualizarStep = () => ({
  type: ACTUALIZAR_STEP,
});

// si se ha guardado en BBDD correctamente
const actualizarStepExito = (step) => ({
  type: ACTUALIZAR_STEP_EXITO,
  payload: step,
});

// si hubo un error al guardar en la BBDD
const actualizarStepError = (error) => ({
  type: ACTUALIZAR_STEP_ERROR,
  payload: error,
});

/**
 * Action para descargar el detalle de cada petición por su id de peticion
 * @param {*} idCasoDePrueba
 */
export const descargarDetalleCPAction = (idCasoDePrueba) => {
  return async (dispatch) => {
    dispatch(descargarStep());

    try {
      const response = await get(`${uri.getTestSteps}/${idCasoDePrueba}`);

      dispatch(descargarStepExito(response));
    } catch (error) {
      dispatch(descargarStepError(error));
    }
  };
}

const descargarStep = () => ({
  type: DESCARGAR_STEP,
});

const descargarStepExito = (steps) => ({
  type: DESCARGAR_STEP_EXITO,
  payload: steps,
});

const descargarStepError = (error) => ({
  type: DESCARGAR_STEP_ERROR,
  payload: error,
});

/**
 * Action para la eliminación de la petición
 * @param {*} idStep
 */
export const eliminarStepAction = (idStep) => {
  return async (dispatch) => {
    dispatch(eliminarStep());

    try {
      // aqui se debe hacer la consulta a la API

      const usuario = localStorage.getItem("DATA_SESION");

      const { shortUser } = JSON.parse(usuario);

      const response = await patch(`${uri.setTestStep}/${shortUser}/${idStep}`)

      if (response.status === 200) {
        // si la API devuelve un response de correcto meter este dispatch y el mensaje a un if
        message.success("Paso eliminado correctamente!");
        dispatch(eliminarStepExito(idStep));
      }
    } catch (error) {
      message.error("Error al tratar de eliminar el paso!");

      dispatch(eliminarStepError(error));
    }
  };
}

const eliminarStep = () => ({
  type: ELIMINAR_STEP,
});

const eliminarStepExito = (idStep) => ({
  type: ELIMINAR_STEP_EXITO,
  payload: idStep,
});

const eliminarStepError = (error) => ({
  type: ELIMINAR_STEP_ERROR,
  payload: error,
});
