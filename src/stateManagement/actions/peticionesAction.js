import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
    LISTAR_PROYECTOS,
    LISTAR_PROYECTOS_EXITO,
    LISTAR_PROYECTOS_ERROR,
    SELECCION_PROYECTO
} from '../types/peitcionesType';

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
 * Actión para poder hacer el registro de las peticiónes
 * @param {*} peticion  => recibe un objeto con la petición que se va a mandar a crear
 */
export function crearNuevaPeticionAction ( peticion ) {

    return async ( dispatch ) => {

        dispatch( agregarPeticion( ) );

        try {

            const response = await post( uri.setPeticion, peticion );

            /**console.log(response);

            const usuario = {
                codigoUsuario: 147800,
                email: "kpeinado@everis.com",
                idTipoUsuario: 1,
                nombre: "kevin",
                password: "123456",
                usuarioCorto: "kpeinado"
            }

            const response = await post("http://localhost:8087/s3link/usuario", usuario);
*/
            dispatch( agregarPeticionExito( peticion ) );

        } catch ( error ) {

            dispatch( agregarPeticionError( error ) );

        }
    }

}

// avisamos que esta empezando el proceso para guardar la peticion
const agregarPeticion = ( ) => ({
    type: AGREGAR_PETICION,
});

// si se ah guardado en BBDD correctamente
const agregarPeticionExito = peticion => ({
    type: AGREGAR_PETICION_EXITO,
    payload: peticion
});

// si hubo un error al guardar en la BBDD
const agregarPeticionError = error => ({
    type: AGREGAR_PETICION_ERROR,
    payload: error
});