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

import { message } from "antd";

import { UsuarioBaseUrl as uri } from "../../Api/ApiUrl";

import { get } from "../../utils/confAxios/petitionGet";

/**
 * Action unicamente para el logeo del usuario
 * @param {*} usuario 
 */
export function logearUsuarioAction( usuario ) {
  return async (dispatch) => {

    dispatch( logeandoUsuario( ) );

    try {

      const endpoint = `${uri.setLoginUser}?usuarioCorto=${usuario.username}&password=${usuario.password}`;
      
      const response = await get( endpoint );

      if ( response.code === 1 ) {

        message.success(`Bienvenido ${response.usuarioCorto} !`);

        dispatch( logearUsuarioExito ( response ) );

        localStorage.setItem("IS_AUTHENTICATED", true);
        localStorage.setItem("DATA_SESION", JSON.stringify(response));

        return "200";

      } else {

        message.error("Ops. Credenciales incorrectas !");

        dispatch( logearUsuarioError( "Credenciales incorrectas" ) );

      }

    } catch ( error ) {

      message.error("Error con el servidor!");

      dispatch( logearUsuarioError( error ) );

    }

  };

}

const logeandoUsuario = () => ({
  type: LOGEO_USUARIO,
});

const logearUsuarioExito = (usuario) => ({
  type: LOGEO_USUARIO_EXITO,
  payload: usuario,
});

const logearUsuarioError = (error) => ({
  type: LOGEO_USUARIO_ERROR,
  payload: error,
});

export function deslogearUsuario(usuario) {
  return async (dispatch) => {
    dispatch(deslogeandoUsuario());
    try {

      message.success("Ah cerrado sesión correctamente!");
      dispatch(deslogearUsuarioExito());

    } catch (error) {

      message.success("Error al tratar de cerrar la sesión!");
      dispatch(deslogearUsuarioError(error));
      
    }
  };
}

const deslogeandoUsuario = () => ({
  type: DESLOGEO_USUARIO,
});

const deslogearUsuarioExito = (usuario) => ({
  type: DESLOGEO_USUARIO_EXITO,
});

const deslogearUsuarioError = (error) => ({
  type: DESLOGEO_USUARIO_ERROR,
  payload: error,
});

/**
 * Action par la verificación del usuario cuando se encuentre data
 * en el local storage
 * @param {*} usuario 
 */
export function verificarLogeoAction ( usuario ) {

  return ( dispatch ) => {

    dispatch( verificarLogeo( ) );

    try {

      dispatch( verificarLogeoExito( usuario ) );

    } catch ( error ) {

      dispatch( verificarLogeoError( error ) );

    }

  }

}

const verificarLogeo = ( ) => ({
  type: VERIFICAR_USUARIO
});

const verificarLogeoExito = usuario => ({
  type: VERIFICAR_USUARIO_EXITO,
  payload: usuario
});

const verificarLogeoError = error => ({
  type: VERIFICAR_USUARIO_ERROR,
  payload: error
});