/**
 * Este archivo combina todos los reducers
 */
import { combineReducers } from 'redux';

import peticionesReducer from './peticionesReducers';

export default combineReducers ( {
    peticiones: peticionesReducer
} );