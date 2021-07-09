/**
 * Este archivo combina todos los reducers
 */
import { combineReducers } from 'redux';

import peticionesReducer from './peticionesReducers';
import casosPruebasReducer from './casosPruebasReducer';

export default combineReducers ( {
    peticiones: peticionesReducer,
    casosPruebas: casosPruebasReducer
} );