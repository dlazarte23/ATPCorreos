import {
    LOGEO_USUARIO,
    LOGEO_USUARIO_EXITO,
    LOGEO_USUARIO_ERROR
} from '../types/usuarioType';

const initialState = {
    usuario: {},
    loading: false,
    error: null
}

// eslint-disable-next-line
export default function ( state = initialState, action) {
    
    switch (action.type) {

        case LOGEO_USUARIO:
            return {
                ...state,
                loading: true
            }
        
        case LOGEO_USUARIO_EXITO:
            return {
                ...state,
                loading: false,
                usuario: action.payload,
                error: null
            }

        case LOGEO_USUARIO_ERROR:
            return {
                ...state,
                loading: false,
                usuario: {},
                error: action.payload
            }
    
        default:
            return state;

    }
}