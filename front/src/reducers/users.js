// == import

// npm

// local

import { CHANGE_FIELD, SAVE_CURRENT_TOKEN, SAVE_CURRENT_USER, SAVE_USERS } from "../actions/users";

export const initialState = {

  currentUser: [],
  tokenCurrentUser:"",

  usersList: [],
  search: 

    {
    inputValue: '',
    },
};
console.log(initialState);
const usersReducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
      return {
        ...state,
        [action.name]: action.value,
      };
      case SAVE_USERS:
          return {
            ...state,
            usersList: action.data,
          };

      case SAVE_CURRENT_USER:
        return {
          ...state,
          currentUser: action.data,
        }
      case SAVE_CURRENT_TOKEN:
        return {
          ...state,
          tokenCurrentUser: action.data,
        }
    default:
      return state;
  }
};

export default usersReducer;