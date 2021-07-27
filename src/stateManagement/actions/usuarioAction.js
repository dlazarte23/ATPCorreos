import {
  LOGEO_USUARIO,
  LOGEO_USUARIO_EXITO,
  LOGEO_USUARIO_ERROR,
  DESLOGEO_USUARIO,
  DESLOGEO_USUARIO_EXITO,
  DESLOGEO_USUARIO_ERROR,
} from "../types/usuarioType";

import { message } from "antd";

import { UsuarioBaseUrl as uri } from "../../Api/ApiUrl";

import { get } from "../../utils/confAxios/petitionGet";

export function logearUsuario(usuario) {
  return async (dispatch) => {
    dispatch(logeandoUsuario());

    try {
      const response = await get(
        `${uri.setLoginUser}?usuarioCorto=${usuario.username}&password=${usuario.password}`
      );

      if (response.code === 1) {
        message.success(`Bienvenido ${response.usuarioCorto} !`);

        dispatch(logearUsuarioExito(usuario));

        return "200";
      } else {
        message.error("Ops. Credenciales incorrectas !");

        dispatch(logearUsuarioError("Credenciales incorrectas"));
      }
    } catch (error) {
      dispatch(logearUsuarioError(error));
    }
  };
}

export function deslogearUsuario(usuario) {
  return async (dispatch) => {
    dispatch(deslogeandoUsuario());
    try {
      dispatch(deslogearUsuarioExito());
    } catch (error) {
      dispatch(deslogearUsuarioError(error));
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
