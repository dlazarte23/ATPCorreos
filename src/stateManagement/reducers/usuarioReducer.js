import {
  LOGEO_USUARIO,
  LOGEO_USUARIO_EXITO,
  LOGEO_USUARIO_ERROR,
  DESLOGEO_USUARIO,
  DESLOGEO_USUARIO_EXITO,
  DESLOGEO_USUARIO_ERROR,
  VERIFICAR_USUARIO,
  VERIFICAR_USUARIO_EXITO,
  VERIFICAR_USUARIO_ERROR
} from "../types/usuarioType";

const initialState = {
  usuario: {},
  loggedIn: false,
  loading: false,
  error: null,
};

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {

    case VERIFICAR_USUARIO:
    case LOGEO_USUARIO:
      return {
        ...state,
        loading: true,
      };

    case VERIFICAR_USUARIO_EXITO:
    case LOGEO_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        loggedIn: true,
        usuario: action.payload,
        error: null,
      };

    case VERIFICAR_USUARIO_ERROR:
    case LOGEO_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        usuario: {},
        error: action.payload,
      };

    case DESLOGEO_USUARIO:
      return {
        ...state,
        loading: true,
      };

    case DESLOGEO_USUARIO_EXITO:
      return {
        ...state,
        loading: false,
        loggedIn: false,
        usuario: {},
        error: null,
      };

    case DESLOGEO_USUARIO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
      
    default:
      return state;
  }
}
