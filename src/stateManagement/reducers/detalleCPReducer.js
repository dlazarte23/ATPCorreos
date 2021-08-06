import {
  DESCARGAR_STEP,
  DESCARGAR_STEP_EXITO,
  DESCARGAR_STEP_ERROR,
  GUARDAR_STEP,
  GUARDAR_STEP_EXITO,
  GUARDAR_STEP_ERROR,
  ACTUALIZAR_STEP,
  ACTUALIZAR_STEP_EXITO,
  ACTUALIZAR_STEP_ERROR,
  ELIMINAR_STEP,
  ELIMINAR_STEP_EXITO,
  ELIMINAR_STEP_ERROR,
} from "../types/stepsType";

const initialState = {
  detallesCasoPrueba: [],
  loading: false,
  error: null,
};
// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case ACTUALIZAR_STEP:
    case GUARDAR_STEP:
    case DESCARGAR_STEP:
    case ELIMINAR_STEP:
      return {
        ...state,
        loading: true,
      };

    case DESCARGAR_STEP_EXITO:
      return {
        ...state,
        loading: false,
        detallesCasoPrueba: action.payload
      };

    case ACTUALIZAR_STEP_EXITO:
      return {
        ...state,
        loading: false,
        detallesCasoPrueba: state.detallesCasoPrueba.map( step => step.stepId === action.payload.stepId ? step = action.payload : step )
      }

    case GUARDAR_STEP_EXITO:
      return {
        ...state,
        loading: false,
        detallesCasoPrueba: [ ...state.detallesCasoPrueba, action.payload ]
      };

    case ELIMINAR_STEP_EXITO:
      return {
        ...state,
        loading: false,
        detallesCasoPrueba: state.detallesCasoPrueba.filter(
          (step) => step.stepId !== action.payload
        ),
      };

    case GUARDAR_STEP_ERROR:
    case DESCARGAR_STEP_ERROR:
    case ACTUALIZAR_STEP_ERROR:
    case ELIMINAR_STEP_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
