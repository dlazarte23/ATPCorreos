import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
    LISTAR_PROYECTOS,
    LISTAR_PROYECTOS_EXITO,
    LISTAR_PROYECTOS_ERROR
} from '../types/peitcionesType';

/**
 * Cada reducer tiene su propio state
 */
const initialState = {

    proyectos: [],
    peticiones: [],
    loading: false,
    error: null
    
}

// eslint-disable-next-line
export default function ( state = initialState, action ) {

    switch (action.type) {

        case LISTAR_PROYECTOS:
        case AGREGAR_PETICION:
            return {
                ...state,
                loading: true
            }

        case AGREGAR_PETICION_EXITO:
            return {
                ...state,
                loading: false,
                peticiones: [...state.peticiones, action.payload]
            }

        case LISTAR_PROYECTOS_EXITO:
            return {
                ...state,
                loading: false,
                proyectos: action.payload
            }

        case LISTAR_PROYECTOS_ERROR:
        case AGREGAR_PETICION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}