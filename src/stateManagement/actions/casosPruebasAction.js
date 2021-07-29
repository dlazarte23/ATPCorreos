import {
    AGREGAR_CASOS_PRUEBA,
    AGREGAR_CASOS_PRUEBA_EXITO,
    AGREGAR_CASOS_PRUEBA_ERROR
} from '../types/casosPruebasType';

import { message } from "antd";

import { ProyectoBaseUrl as uri  } from '../../Api/ApiUrl';

import { post } from '../../utils/confAxios/petitionPost';

/**
 * Action encargado de crear el caso de prueba.
 * @param {*} casoDePrueba 
 * @param {*} descripcion se esta pasando la descripción por temas de construcción en el back
 */
export function registrarCasosPruebasAction ( casoDePrueba, descripcion ) {
    return async ( dispatch ) => {

        dispatch( registrarCasosPrueba() );

        try {

            const response = await post( uri.setCasoDePrueba, casoDePrueba );

            if ( response.status === 201 ) {

                message.success('Caso de Prueba creado correctamente!');

                casoDePrueba.descripcion = descripcion;

                console.log('asdasdas', casoDePrueba);

                dispatch ( registrarCasosPruebaExito( casoDePrueba ) );

            }

            console.log( response );
            

        } catch (error) {

            message.error('Ocurrió un error al registrar el caso de prueba!');

            dispatch ( registrarCasosPruebaError( error ) );

        }
    }
}

const registrarCasosPrueba = ( ) => ({
    type: AGREGAR_CASOS_PRUEBA
});

const registrarCasosPruebaExito = casoDePrueba => ({
    type: AGREGAR_CASOS_PRUEBA_EXITO,
    payload: casoDePrueba
});

const registrarCasosPruebaError = error => ({
    type: AGREGAR_CASOS_PRUEBA_ERROR,
    payload: error
});
