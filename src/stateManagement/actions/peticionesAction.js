import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
} from '../types/peitcionesType';

export function crearNuevaPeticionAction ( peticion ) {
    return (dispatch) => {

        dispatch( agregarPeticion() );

        try {

            dispatch( agregarPeticionExito(peticion) );

        } catch ( error ) {

            dispatch( agregarPeticionError(true) );

        }
    }
}

// avisamos que esta empezando el proceso para guardar la peticion
const agregarPeticion = () => ({
    type: AGREGAR_PETICION,
});

// si se ah guardado en BBDD correctamente
const agregarPeticionExito = (peticion) => ({
    type: AGREGAR_PETICION_EXITO,
    payload: peticion
});

// si hubo un erro al guardar en la BBDD
const agregarPeticionError = (value) => ({
    type: AGREGAR_PETICION_ERROR,
    payload: value
});