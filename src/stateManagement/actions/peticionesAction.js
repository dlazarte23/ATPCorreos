import {
    AGREGAR_PETICION,
    AGREGAR_PETICION_EXITO,
    AGREGAR_PETICION_ERROR,
    LISTAR_PROYECTOS,
    LISTAR_PROYECTOS_EXITO,
    LISTAR_PROYECTOS_ERROR
} from '../types/peitcionesType';

import { ProyectoBaseUrl as uri  } from '../../Api/ApiUrl';

import { get } from '../../utils/confAxios/petitionGet';

export function listarProyectoAction( ) {

    return async (dispatch) => {

        // Avisamos que se esta iniciando la descarga de proyectos
        dispatch( comenzarDecargarProyectos() );

        try {

            // consultamos a la endpoint
            const response = await get(uri.getProyectos);

            // le pasamos todos los proyectos obtenidos
            dispatch( proyectosDescargadosExito( response.proyectoDTOS ) );

        } catch ( error ) {

            dispatch( proyectosDescargadosError( error ) );

        }

    }

}

const comenzarDecargarProyectos = () => ({
    type: LISTAR_PROYECTOS
});

const proyectosDescargadosExito = proyectos => ({
    type: LISTAR_PROYECTOS_EXITO,
    payload: proyectos
});

const proyectosDescargadosError = error => ({
    type: LISTAR_PROYECTOS_ERROR,
    payload: error
})



export function crearNuevaPeticionAction ( peticion ) {

    return (dispatch) => {

        dispatch( agregarPeticion() );

        try {

            dispatch( agregarPeticionExito( peticion ) );

        } catch ( error ) {

            dispatch( agregarPeticionError( error ) );

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
const agregarPeticionError = (error) => ({
    type: AGREGAR_PETICION_ERROR,
    payload: error
});