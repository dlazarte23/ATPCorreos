import {
  AGREGAR_CASOS_PRUEBA,
  AGREGAR_CASOS_PRUEBA_EXITO,
  AGREGAR_CASOS_PRUEBA_ERROR,
  DESCARGAR_DOCUMENTO,
  DESCARGAR_DOCUMENTO_EXITO,
  DESCARGAR_DOCUMENTO_ERROR,
  LISTAR_CASOS_PRUEBA,
  LISTAR_CASOS_PRUEBA_EXITO,
  LISTAR_CASOS_PRUEBA_ERROR,
  ELIMINAR_CASOS_PRUEBA,
  ELIMINAR_CASOS_PRUEBA_EXITO,
  ELIMINAR_CASOS_PRUEBA_ERROR,
  EDITAR_CASOS_PRUEBA,
  EDITAR_CASOS_PRUEBA_EXITO,
  EDITAR_CASOS_PRUEBA_ERROR,
} from "../types/casosPruebasType";

const initialState = {
  casosPruebas: [],
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default function (state = initialState, action) {
  switch (action.type) {
    case LISTAR_CASOS_PRUEBA:
    case DESCARGAR_DOCUMENTO:
    case EDITAR_CASOS_PRUEBA:
    case ELIMINAR_CASOS_PRUEBA:
    case AGREGAR_CASOS_PRUEBA:
      return {
        ...state,
        loading: true,
      };

    case LISTAR_CASOS_PRUEBA_EXITO:
      return {
        ...state,
        loading: false,
        casosPruebas: action.payload,
      };

    case AGREGAR_CASOS_PRUEBA_EXITO:
      return {
        ...state,
        loading: false,
        casosPruebas: [...state.casosPruebas, action.payload],
      };

    case DESCARGAR_DOCUMENTO_EXITO:
      return {
        ...state,
        loading: false,
      };

    case EDITAR_CASOS_PRUEBA_EXITO:
      return {
        ...state,
        loading: false,
        casosPruebas: state.casosPruebas.map((casoPrueba) =>
          casoPrueba.testId === action.payload.testId
            ? (casoPrueba = action.payload)
            : casoPrueba
        ),
      };

    case ELIMINAR_CASOS_PRUEBA_EXITO:
      return {
        ...state,
        loading: false,
        casosPruebas: state.casosPruebas.filter(
          (casoPrueba) => casoPrueba.testId !== action.payload
        ),
      };

    case LISTAR_CASOS_PRUEBA_ERROR:
    case DESCARGAR_DOCUMENTO_ERROR:
    case AGREGAR_CASOS_PRUEBA_ERROR:
    case EDITAR_CASOS_PRUEBA_ERROR:
    case ELIMINAR_CASOS_PRUEBA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
}
