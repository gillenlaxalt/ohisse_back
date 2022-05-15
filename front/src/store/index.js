// == import
// npm
import { applyMiddleware, compose, legacy_createStore } from 'redux';
// local
import reducer from '../reducers';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancers = composeEnhencers();
// utilisation de 'legacy_createStore', car 'createStore' est déprécié.
const store = legacy_createStore(reducer, enhancers);
// console.log(store);
export default store;