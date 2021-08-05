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
  DESCARGA_PETICIONES_ERROR,
  ELIMINAR_PETICION,
  ELIMINAR_PETICION_EXITO,
  ELIMINAR_PETICION_ERROR,
  EDITAR_PETICION,
  EDITAR_PETICION_EXITO,
  EDITAR_PETICION_ERROR
} from "../types/peticionesType";

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
    case EDITAR_PETICION:
    case ELIMINAR_PETICION:
    case COMENZAR_DESCARGA_PETICIONES:
      return {
        ...state,
        loading: true,
      };

    case AGREGAR_PETICION_EXITO:
      return {
        ...state,
        loading: false,
        peticiones: [...state.peticiones, action.payload]
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

    case EDITAR_PETICION_EXITO:
      return {
        ...state,
        loading: false,
        peticiones: state.peticiones.map( peticion => peticion.id === action.payload.id ? peticion = action.payload : peticion )
      }

    case ELIMINAR_PETICION_EXITO:
      return {
        ...state,
        loading: false,
        peticiones: state.peticiones.filter( peticion => peticion.id !== action.payload )
      }
      
    case LISTAR_PROYECTOS_ERROR:
    case AGREGAR_PETICION_ERROR:
    case ELIMINAR_PETICION_ERROR:
    case EDITAR_PETICION_ERROR:
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
