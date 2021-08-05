/**
 * Este archivo combina todos los reducers
 */
import { combineReducers } from 'redux';

import peticionesReducer from './peticionesReducers';
import casosPruebasReducer from './casosPruebasReducer';
import detalleCPReducer from './detalleCPReducer';
import usuarioReducer from './usuarioReducer';
import planesPruebaReducer from './planesPruebaReducer';

export default combineReducers ( {
    usuario: usuarioReducer,
    peticiones: peticionesReducer,
    casosPruebas: casosPruebasReducer,
    detalleCasoPrueba: detalleCPReducer,
    planesPrueba: planesPruebaReducer
} );