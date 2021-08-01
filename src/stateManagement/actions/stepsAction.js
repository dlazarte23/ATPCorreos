import {
  GUARDAR_STEP,
  GUARDAR_STEP_EXITO,
  GUARDAR_STEP_ERROR,
  ACTUALIZAR_STEP,
  ACTUALIZAR_STEP_EXITO,
  ACTUALIZAR_STEP_ERROR,
} from "../types/stepsType";

import { message } from "antd";

import { ProyectoBaseUrl as uri } from "../../Api/ApiUrl";

//import { get } from "../../utils/confAxios/petitionGet";
import { post } from "../../utils/confAxios/petitionPost";
import { put } from "../../utils/confAxios/petitionPut";

/**
 * Actión para poder hacer el registro del step
 * @param {*} step  => recibe un objeto con el step que se va a mandar a crear
 */
export function crearNuevoStepAction(step) {
  return (dispatch) => {
    dispatch(guardarStep());

    try {
      post(uri.setTestStep, step);
      dispatch(guardarStepExito());

      /**
       * En esta situación se esta mandao a llamar al action de obtener
       * peiticiones unicamente por temas de que necesitamos el id de esta petición
       */
      //dispatch(obtenerPeticionesAction(idProyecto));
    } catch (error) {
      message.error("Error al crear el step!");
      dispatch(guardarStepError(error));
    }
  };
}

export function actualizarNuevoStepAction(step, id) {
  return (dispatch) => {
    dispatch(actualizarStep());

    try {
      put(`${uri.setTestStep}/${id}`, step);
      dispatch(actualizarStepExito());

      /**
       * En esta situación se esta mandao a llamar al action de obtener
       * peiticiones unicamente por temas de que necesitamos el id de esta petición
       */
      //dispatch(obtenerPeticionesAction(idProyecto));
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
const guardarStepExito = () => ({
  type: GUARDAR_STEP_EXITO,
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
const actualizarStepExito = () => ({
  type: ACTUALIZAR_STEP_EXITO,
});

// si hubo un error al guardar en la BBDD
const actualizarStepError = (error) => ({
  type: ACTUALIZAR_STEP_ERROR,
  payload: error,
});
