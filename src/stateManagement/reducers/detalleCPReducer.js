import {
    DESCARGAR_STEP,
    DESCARGAR_STEP_EXITO,
    DESCARGAR_STEP_ERROR,
    GUARDAR_STEP,
    GUARDAR_STEP_EXITO,
    GUARDAR_STEP_ERROR,
    ACTUALIZAR_STEP,
    ACTUALIZAR_STEP_EXITO,
    ACTUALIZAR_STEP_ERROR
} from '../types/stepsType';

const initialState = {
    detallesCasoPrueba: [ ],
    loading: false,
    error: null
}

export default function ( state = initialState , action ) {

    switch ( action.type ) {

        case ACTUALIZAR_STEP:
        case GUARDAR_STEP:
        case DESCARGAR_STEP:
            return {
                ...state,
                loading: true
            }

        case ACTUALIZAR_STEP_EXITO:
        case DESCARGAR_STEP_EXITO:
            return {
                ...state,
                loading: false,
                detallesCasoPrueba: action.payload
            }

        case GUARDAR_STEP_EXITO:
            return {
                ...state
            }

        case GUARDAR_STEP_ERROR:
        case DESCARGAR_STEP_ERROR:
        case ACTUALIZAR_STEP_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;

    }

}