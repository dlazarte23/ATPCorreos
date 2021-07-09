import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
} from '../types/peitcionesType';

/**
 * Cada reducer tiene su propio state
 */
const initialState = {

    peticiones: [],
    loading: false,
    error: null
    
}

// eslint-disable-next-line
export default function ( state = initialState, action ) {

    switch (action.type) {

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