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
    LISTAR_CASOS_PRUEBA,
    LISTAR_CASOS_PRUEBA_EXITO,
    LISTAR_CASOS_PRUEBA_ERROR
} from '../types/peitcionesType';

import {
    DESCARGAR_DOCUMENTO,
    DESCARGAR_DOCUMENTO_EXITO,
    DESCARGAR_DOCUMENTO_ERROR
} from '../types/casosPruebasType'


/**
 * Cada reducer tiene su propio state
 */
const initialState = {

    proyectos: [],
    proyectoSeleccionado: null,
    peticiones: [],
    loading: false,
    error: null
    
}

// eslint-disable-next-line
export default function ( state = initialState, action ) {

    switch (action.type) {

        case LISTAR_CASOS_PRUEBA:
        case LISTAR_PROYECTOS:
        case AGREGAR_PETICION:
        case COMENZAR_DESCARGA_PETICIONES:
        case DESCARGAR_DOCUMENTO:
            return {
                ...state,
                loading: true
            }

        case AGREGAR_PETICION_EXITO:
            return {
                ...state
            }

        case LISTAR_PROYECTOS_EXITO:
            return {
                ...state,
                loading: false,
                proyectos: action.payload
            }

        case SELECCION_PROYECTO:
            return {
                ...state,
                proyectoSeleccionado: action.payload
            }

        case DESCARGA_PETICIONES_EXITO:
            return {
                ...state,
                loading: false,
                peticiones: action.payload
            }

        case LISTAR_CASOS_PRUEBA_EXITO:
            return {
                ...state,
                loading: false
            }

        case DESCARGAR_DOCUMENTO_EXITO:
            return {
                ...state,
                loading: false
            }
         
        case DESCARGAR_DOCUMENTO_ERROR:
        case LISTAR_CASOS_PRUEBA_ERROR:
        case LISTAR_PROYECTOS_ERROR:
        case AGREGAR_PETICION_ERROR:
        case DESCARGA_PETICIONES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}