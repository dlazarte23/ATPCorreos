import {
    OBTENER_PLANES_PRUEBA,
    OBTENER_PLANES_PRUEBA_EXITO,
    OBTENER_PLANES_PRUEBA_ERROR,
    AGREGAR_PLAN_PRUEBA,
    AGREGAR_PLAN_PRUEBA_EXITO,
    AGREGAR_PLAN_PRUEBA_ERROR
} from '../types/planesPruebaType';

const initialState = {
    planesPrueba: [],
    loading: false,
    error: null
}

export default function ( state = initialState, action ) {
    switch (action.type) {

        case AGREGAR_PLAN_PRUEBA:
        case OBTENER_PLANES_PRUEBA:
            return {
                ...state,
                loading: true
            }

        case OBTENER_PLANES_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: action.payload
            }

        case AGREGAR_PLAN_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: [...state.planesPrueba, action.payload]
            }

        case AGREGAR_PLAN_PRUEBA_ERROR:
        case OBTENER_PLANES_PRUEBA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

    }

}