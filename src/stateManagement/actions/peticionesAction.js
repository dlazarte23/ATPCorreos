import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
    LISTAR_PROYECTOS,
    LISTAR_PROYECTOS_EXITO,
    LISTAR_PROYECTOS_ERROR,
    SELECCION_PROYECTO,
    COMENZAR_DESCARGA_PETICIONES,
    DESCARGA_PETICIONES_EXITO,
    DESCARGA_PETICIONES_ERROR,
    ELIMINAR_PETICION,
    ELIMINAR_PETICION_EXITO,
    ELIMINAR_PETICION_ERROR
} from '../types/peticionesType';

import { message } from "antd";

import { ProyectoBaseUrl as uri  } from '../../Api/ApiUrl';

import { get } from '../../utils/confAxios/petitionGet';
import { post } from '../../utils/confAxios/petitionPost';

/**
 * Actión para obtener la lista de proyectos
 */
export function listarProyectoAction ( ) {

    return async ( dispatch ) => {

        // Avisamos que se esta iniciando la descarga de proyectos
        dispatch( comenzarDecargarProyectos( ) );

        try {

            // consultamos a la endpoint
            const response = await get( uri.getProyectos );

            // le pasamos todos los proyectos obtenidos
            dispatch( proyectosDescargadosExito( response.proyectoDTOS ) );

        } catch ( error ) {

            // si ocurrió un error se manda a registrar el error
            dispatch( proyectosDescargadosError( error ) );

            message.error("Error al obtener los proyectos!");

        }

    }

}

const comenzarDecargarProyectos = ( ) => ({
    type: LISTAR_PROYECTOS
});

const proyectosDescargadosExito = proyectos => ({
    type: LISTAR_PROYECTOS_EXITO,
    payload: proyectos
});

const proyectosDescargadosError = error => ({
    type: LISTAR_PROYECTOS_ERROR,
    payload: error
});

/**
 * Actión para seleccionar el proyecto y almacenarlo de manera global
 * para identificar en base a que proyecto se esta trabajando todas las operaciones
 * @param {*} codProyecto 
 */
export function seleccionarProyectoAction ( codProyecto ) {
    
    return ( dispatch ) => {

        dispatch( seleccionarProyecto( codProyecto ) );

    }

}

const seleccionarProyecto = codProyecto => ({
    type: SELECCION_PROYECTO,
    payload: codProyecto
});

/**
 * Actión para traernos todas las peticiones por el cod de proyecto que exista.
 * @param {*} codProyecto 
 */
export function obtenerPeticionesAction ( codProyecto ) {

    return async ( dispatch ) => {

        dispatch( obtenerPeticion( ) );

        try {

            const response = await get(`${uri.getPeticiones}/${codProyecto}`);
            
            dispatch( obtenerPeticionExito( response.responseSprints ) );

        } catch ( error ) {

            message.error("Error al obtener las peticiones!");

            dispatch( obtenerPeticionError( error ) );

        }

    }

}

const obtenerPeticion = () => ({
    type: COMENZAR_DESCARGA_PETICIONES
});

const obtenerPeticionExito = peticiones => ({
    type: DESCARGA_PETICIONES_EXITO,
    payload: peticiones
});

const obtenerPeticionError = error => ({
    type: DESCARGA_PETICIONES_ERROR,
    payload: error
});

/**
 * Actión para poder hacer el registro de las peticiónes
 * @param {*} peticion  => recibe un objeto con la petición que se va a mandar a crear
 */
export function crearNuevaPeticionAction ( peticion, idProyecto ) {

    return ( dispatch ) => {

        dispatch( agregarPeticion( ) );

        try {

            post( uri.setPeticion, peticion );

            dispatch( agregarPeticionExito( ) );

            /**
             * En esta situación se esta mandao a llamar al action de obtener
             * peiticiones unicamente por temas de que necesitamos el id de esta petición
             */
            dispatch ( obtenerPeticionesAction ( idProyecto ) );

        } catch ( error ) {

            message.error("Error al crear la petición!");

            dispatch( agregarPeticionError( error ) );

        }
    }

}

// avisamos que esta empezando el proceso para guardar la peticion
const agregarPeticion = ( ) => ({
    type: AGREGAR_PETICION,
});

// si se ah guardado en BBDD correctamente
const agregarPeticionExito = ( ) => ({
    type: AGREGAR_PETICION_EXITO
});

// si hubo un error al guardar en la BBDD
const agregarPeticionError = error => ({
    type: AGREGAR_PETICION_ERROR,
    payload: error
});

/**
 * Action para la eliminación de la petición
 * @param {*} idPeticion 
 */
export function eliminarPeticionAction( idPeticion ) {

    return( dispatch ) => {

        dispatch ( eliminarPeticion( ) );

        try {

            // aqui se debe hacer la consulta a la API

            // si la API devuelve un response de correcto meter este dispatch y el mensaje a un if
            message.success("Petición eliminado correctamente!");

            dispatch( eliminarPeticionExito( idPeticion ) );

        } catch ( error ) {

            message.error("Error al tratar de eliminar esta petición!");

            dispatch( eliminarPeticionError( error ) );

        }

    }

}

const eliminarPeticion = () => ({
    type: ELIMINAR_PETICION
});

const eliminarPeticionExito = idPeticion => ({
    type: ELIMINAR_PETICION_EXITO,
    payload: idPeticion
});

const eliminarPeticionError = error => ({
    type: ELIMINAR_PETICION_ERROR,
    payload: error
});