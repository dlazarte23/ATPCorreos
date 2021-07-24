/**
 * Este archivo combina todos los reducers
 */
import { combineReducers } from 'redux';

import peticionesReducer from './peticionesReducers';
import casosPruebasReducer from './casosPruebasReducer';
import usuarioReducer from './usuarioReducer';

export default combineReducers ( {
    usuario: usuarioReducer,
    peticiones: peticionesReducer,
    casosPruebas: casosPruebasReducer
} );