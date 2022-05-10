// == import
// npm
import { combineReducers } from 'redux';
// local
import settingsReducer from './settings';
import spotsReducer from './spots';
import usersReducer from './users';

const rootReducer = combineReducers({
  settings: settingsReducer,
  spots: spotsReducer,
  users: usersReducer,
});

export default rootReducer;