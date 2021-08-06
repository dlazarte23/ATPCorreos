import {
    OBTENER_PLANES_PRUEBA,
    OBTENER_PLANES_PRUEBA_EXITO,
    OBTENER_PLANES_PRUEBA_ERROR,
    AGREGAR_PLAN_PRUEBA,
    AGREGAR_PLAN_PRUEBA_EXITO,
    AGREGAR_PLAN_PRUEBA_ERROR,
    EDITAR_PLAN_PRUEBA,
    EDITAR_PLAN_PRUEBA_EXITO,
    EDITAR_PLAN_PRUEBA_ERROR,
    ELIMINAR_PLAN_PRUEBA,
    ELIMINAR_PLAN_PRUEBA_EXITO,
    ELIMINAR_PLAN_PRUEBA_ERROR
} from '../types/planesPruebaType';

const initialState = {
    planesPrueba: [],
    peticion: {},
    loading: false,
    error: null
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {

        case AGREGAR_PLAN_PRUEBA:
        case OBTENER_PLANES_PRUEBA:
        case EDITAR_PLAN_PRUEBA:
        case ELIMINAR_PLAN_PRUEBA:
            return {
                ...state,
                loading: true
            }

        case OBTENER_PLANES_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: action.payload.testPlanList,
                peticion: action.payload.spring
            }

        case AGREGAR_PLAN_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: [...state.planesPrueba, action.payload]
            }

        case EDITAR_PLAN_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: state.planesPrueba.map(planPrueba => planPrueba.id === action.payload.id ? planPrueba = action.payload : planPrueba)
            }

        case EDITAR_PLAN_PRUEBA_ERROR:
        case AGREGAR_PLAN_PRUEBA_ERROR:
        case OBTENER_PLANES_PRUEBA_ERROR:
        case ELIMINAR_PLAN_PRUEBA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case ELIMINAR_PLAN_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                planesPrueba: state.planesPrueba.filter(planPrueba => planPrueba.id !== action.payload)
            }
        default:
            return state;

    }

}