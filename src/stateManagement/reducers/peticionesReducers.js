import {
  AGREGAR_PETICION,
  AGREGAR_PETICION_EXITO,
  AGREGAR_PETICION_ERROR,
  LISTAR_PROYECTOS,
  LISTAR_PROYECTOS_EXITO,
  LISTAR_PROYECTOS_ERROR,
  SELECCION_PROYECTO,
  COMENZAR_DESCARGA_PETICIONES,
  DESCARGA_PETICIONES_EXITO,
  DESCARGA_PETICIONES_ERROR
} from "../types/peitcionesType";

/**
 * Cada reducer tiene su propio state
 */
const initialState = {
  proyectos: [],
  proyectoSeleccionado: null,
  peticiones: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    
    case LISTAR_PROYECTOS:
    case AGREGAR_PETICION:
    case COMENZAR_DESCARGA_PETICIONES:
      return {
        ...state,
        loading: true,
      };

    case AGREGAR_PETICION_EXITO:
      return {
        ...state,
      };

    case LISTAR_PROYECTOS_EXITO:
      return {
        ...state,
        loading: false,
        proyectos: action.payload,
      };

    case SELECCION_PROYECTO:
      return {
        ...state,
        proyectoSeleccionado: action.payload,
      };

    case DESCARGA_PETICIONES_EXITO:
      return {
        ...state,
        loading: false,
        peticiones: action.payload,
      };
      
    case LISTAR_PROYECTOS_ERROR:
    case AGREGAR_PETICION_ERROR:
    case DESCARGA_PETICIONES_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
