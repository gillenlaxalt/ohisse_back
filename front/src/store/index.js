// == import
// npm
import { applyMiddleware, compose, legacy_createStore } from 'redux';
// local
import reducer from '../reducers';
import usersApi from '../middleware/usersApi';
import spotsApi from '../middleware/spotsApi';

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// To combined few api middleware 
const enhancers = composeEnhencers(
  applyMiddleware(usersApi, spotsApi)

);
// using 'legacy_createStore', because 'createStore' depriced.
const store = legacy_createStore(reducer, enhancers);
// console.log(store);
export default store;