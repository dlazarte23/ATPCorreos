/**
 * createStore => crea el estore de al app
 * applyMiddleware => como se va a usar thunk, y esto agrega como el store
 */
import { createStore, applyMiddleware, compose } from 'redux';

/**
 * permite usar funciones asincronas
 */
import thunk from 'redux-thunk';
import reducer from './reducers';

const store = createStore (
    reducer,
    compose ( applyMiddleware(thunk),
        typeof window === 'object' && 
            typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? 
                window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
);

export default store;