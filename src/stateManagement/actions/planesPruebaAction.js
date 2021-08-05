import {
    OBTENER_PLANES_PRUEBA,
    OBTENER_PLANES_PRUEBA_EXITO,
    OBTENER_PLANES_PRUEBA_ERROR,
    AGREGAR_PLAN_PRUEBA,
    AGREGAR_PLAN_PRUEBA_EXITO,
    AGREGAR_PLAN_PRUEBA_ERROR,
    EDITAR_PLAN_PRUEBA,
    EDITAR_PLAN_PRUEBA_EXITO,
    EDITAR_PLAN_PRUEBA_ERROR
} from '../types/planesPruebaType';

import { message } from 'antd';

import { ProyectoBaseUrl as uri } from '../../Api/ApiUrl';

import { get } from '../../utils/confAxios/petitionGet';
import { post } from '../../utils/confAxios/petitionPost';

/**
 * Action para obtener todos los planes de prueba por el id de la petición
 * @param {*} idPeticion 
 * @returns 
 */
export function obtenerPlanesDePruebaAction ( idPeticion ) {

    return async ( dispatch ) => {

        dispatch( obtenerPlanesPrueba( ) );
        
        try {
            
            const response = await get(`${uri.getTestPlan}/${idPeticion}`);

            dispatch( obtenerPlanesPruebaExito( response ) );

            return response.spring;
            
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
export function agregarPlanPruebaAction( subject ) {
    
    return async ( dispatch ) => {

        dispatch( agregarPlanesPrueba( ) );
        
        try {
            
            const response = await post(uri.setTestPlan, subject);

            if ( response.status === 201 ) {
                
                dispatch( agregarPlanesPruebaExito( response.data ) );
                message.success("Plan de prueba registrado correctamente!"); 

            }
            
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

/**
 * Type para la actualización del plan de prueba
 * @param {*} idPlanPrueb 
 * @param {*} planPrueba 
 */
 export function editarPlanDePruebaAction ( idPlanPrueb, planPrueba ) {

    return ( dispatch ) => {
        
        dispatch( editarPlanDePrueba() );
        
        try {
            
            // llamada al servicio
            // const response = put(uri +idPlanPrueb, planPrueba);
            //  if ( response.status == 200 ) { }
            // response.data
            
            dispatch( editarPlanDePruebaExito( planPrueba ) );
            
            
        } catch ( error ) {
            
            message.error("Error al actualizar tu plan de prueba!");
            dispatch( editarPlanDePruebaError( error ) );

        }

    } 
    
}

const editarPlanDePrueba = () => ({
    type: EDITAR_PLAN_PRUEBA
});

const editarPlanDePruebaExito = planPrueba => ({
    type: EDITAR_PLAN_PRUEBA_EXITO,
    payload: planPrueba
});

const editarPlanDePruebaError = error => ({
    type: EDITAR_PLAN_PRUEBA_ERROR,
    payload: error
});