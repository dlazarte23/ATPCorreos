import {
    AGREGAR_CASOS_PRUEBA,
    AGREGAR_CASOS_PRUEBA_EXITO,
    AGREGAR_CASOS_PRUEBA_ERROR
} from '../types/casosPruebasType';

const initialState = {
    casosPruebas: [],
    loading: false,
    error: null
}

// eslint-disable-next-line
export default function ( state = initialState, action) {
    switch (action.type) {

        case AGREGAR_CASOS_PRUEBA:
            return {
                ...state,
                loading: true
            }
            
        case AGREGAR_CASOS_PRUEBA_EXITO:
            return {
                ...state,
                loading: false,
                casosPruebas: [...state.casosPruebas, action.payload]
            }

        case AGREGAR_CASOS_PRUEBA_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        default:
            return state;
    }
}