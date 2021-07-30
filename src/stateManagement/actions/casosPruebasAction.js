import {
    AGREGAR_CASOS_PRUEBA,
    AGREGAR_CASOS_PRUEBA_EXITO,
    AGREGAR_CASOS_PRUEBA_ERROR,
    LISTAR_CASOS_PRUEBA,
    LISTAR_CASOS_PRUEBA_EXITO,
    LISTAR_CASOS_PRUEBA_ERROR,
    DESCARGAR_DOCUMENTO,
    DESCARGAR_DOCUMENTO_EXITO,
    DESCARGAR_DOCUMENTO_ERROR
} from '../types/casosPruebasType';

import { message } from "antd";

import { ProyectoBaseUrl as uri  } from '../../Api/ApiUrl';

import { post } from '../../utils/confAxios/petitionPost';
import { get } from '../../utils/confAxios/petitionGet';

import FileSaver from 'file-saver';

export function listarCasosDePruebaAction ( idPeticion ) {

    return async ( dispatch ) => {

        dispatch( listarCasosPrueba ( ) );
    
        try {

            const response = await get(`${uri.getCasosDePrueba}/${idPeticion}`);

            console.log(response);

            dispatch( listarCasosPruebaExito ( response ) );

        } catch( error ) {
        
            dispatch( listarCasosPruebaError ( error ) );

        }

    }

}

const listarCasosPrueba = () => ({
    type: LISTAR_CASOS_PRUEBA
});

const listarCasosPruebaExito = casosDePrueba => ({
    type: LISTAR_CASOS_PRUEBA_EXITO,
    payload: casosDePrueba
});

const listarCasosPruebaError = error => ({
    type: LISTAR_CASOS_PRUEBA_ERROR,
    payload: error
});

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

                // le pasamos la descripción por aparte, ya que el servicios no lo soporta
                casoDePrueba.descripcion = descripcion;

                dispatch ( registrarCasosPruebaExito( casoDePrueba ) );

            }            

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

/**
 * Action para la exportación del documento
 * @param {*} idPeticion 
 * @param {*} tipoDocumento 
 */
export function descargarDocumento ( idPeticion, tipoDocumento ) {

    return async ( dispatch ) => {

        dispatch( descargaDocumento() );
    
        try {

            const response = await get(
                                tipoDocumento === 'xml' ? 
                                    `${uri.getDocumentoXml}?sprint=${idPeticion}` : 
                                        tipoDocumento === 'excel' ? 
                                            `${uri.getDocumentoExcel}?sprint=${idPeticion}` : 
                                            null
                                );

            console.log(response);

            const nombreArchivo = tipoDocumento === 'xml' ? `exportadoXml${idPeticion}.xml` : `exportadoExcel${idPeticion}.xlsx`;

            FileSaver.saveAs(new Blob([response], {type: "text/plain;charset=utf-8"}), nombreArchivo);

            dispatch( descargaDocumentoExito() );
            
        } catch ( error ) {
            dispatch( descargaDocumentoError() );
        }

    }

}

const descargaDocumento = () => ({
    type: DESCARGAR_DOCUMENTO
});

const descargaDocumentoExito = () => ({
    type: DESCARGAR_DOCUMENTO_EXITO
});

const descargaDocumentoError = () => ({
    type: DESCARGAR_DOCUMENTO_ERROR
});