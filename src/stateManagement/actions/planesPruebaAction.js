import {
    OBTENER_PLANES_PRUEBA,
    OBTENER_PLANES_PRUEBA_EXITO,
    OBTENER_PLANES_PRUEBA_ERROR,
    AGREGAR_PLAN_PRUEBA,
    AGREGAR_PLAN_PRUEBA_EXITO,
    AGREGAR_PLAN_PRUEBA_ERROR
} from '../types/planesPruebaType';

import { message } from 'antd';

/**
 * Action para obtener todos los planes de prueba por el id de la petición
 * @param {*} idPeticion 
 * @returns 
 */
export function obtenerPlanesDePruebaAction ( idPeticion ) {

    return async ( dispatch ) => {

        dispatch( obtenerPlanesPrueba( ) );
        
        try {
            
            /**
             * Aqui hacer el llamado al servicio y lo que retorne pasarlo al dispatch
             * que se encuentra en la linea 22
             */
            // Aqui ---------------------------|°|
            dispatch( obtenerPlanesPruebaExito( [ ] ) );
            
        } catch ( error ) {

            message.error("Error al obtener los planes de prueba!");            
            dispatch( obtenerPlanesPruebaError( error ) );
            
        }

    }

}

const obtenerPlanesPrueba = () => ({
    type: OBTENER_PLANES_PRUEBA
});

const obtenerPlanesPruebaExito = planesPruebas => ({
    type: OBTENER_PLANES_PRUEBA_EXITO,
    payload: planesPruebas
});

const obtenerPlanesPruebaError = error => ({
    type: OBTENER_PLANES_PRUEBA_ERROR,
    payload: error
});

/**
 * Action para el registro del plan de prueba
 * @param {*} idPeticion 
 * @returns 
 */
export function agregarPlanPrueba( idPeticion ) {
    
    return async ( dispatch ) => {

        dispatch( agregarPlanesPrueba( ) );
        
        try {
            
            /**
             * Aqui hacer la llamada a la petición y del response que devuelve dicha petición
             * pasarsela al dispatch unicamente el objeto nuevo creado, ya que este devuelve 
             * su id generado por la BBDD
             */
            dispatch( agregarPlanesPruebaExito( { } ) );
            message.error("Plan de prueba registrado correctamente!");   
            
        } catch ( error ) {
            
            message.error("Error al registrar el plan de prueba!");
            dispatch( agregarPlanesPruebaError( error ) );
            
        }

    }

}

const agregarPlanesPrueba = () => ({
    type: AGREGAR_PLAN_PRUEBA
});

const agregarPlanesPruebaExito = subject => ({
    type: AGREGAR_PLAN_PRUEBA_EXITO,
    payload: subject
});

const agregarPlanesPruebaError = error => ({
    type: AGREGAR_PLAN_PRUEBA_ERROR,
    payload: error
});