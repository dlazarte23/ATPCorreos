import {
    AGREGAR_CASOS_PRUEBA,
    AGREGAR_CASOS_PRUEBA_EXITO,
    AGREGAR_CASOS_PRUEBA_ERROR
} from '../types/casosPruebasType';


export function registrarCasosPruebasAction ( casoDePrueba ) {
    return (dispatch) => {

        dispatch( registrarCasosPrueba() );

        try {

            // aqui se hacen las peticiones con axios a las endpoint<s
            dispatch ( registrarCasosPruebaExito( casoDePrueba ) );

        } catch (error) {

            console.error(error);
            dispatch ( registrarCasosPruebaError( error ) );

        }
    }
}

const registrarCasosPrueba = () => ({
    type: AGREGAR_CASOS_PRUEBA
});

const registrarCasosPruebaExito = casoDePrueba => ({
    type: AGREGAR_CASOS_PRUEBA_EXITO,
    payload: casoDePrueba
});

const registrarCasosPruebaError = estado => ({
    type: AGREGAR_CASOS_PRUEBA_ERROR,
    payload: estado
});
