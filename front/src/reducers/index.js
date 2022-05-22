// == import
// npm
import { combineReducers } from 'redux';
// local
import settingsReducer from './settings';
import spotsReducer from './spots';
import usersReducer from './users';
import commentsReducer from './comments'

const rootReducer = combineReducers({
  settings: settingsReducer,
  spots: spotsReducer,
  users: usersReducer,
  comments: commentsReducer
});

export default rootReducer;