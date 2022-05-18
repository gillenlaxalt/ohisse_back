// == import

// npm

// local

import { CHANGE_FIELD, SAVE_USERS } from "../actions/users";

export const initialState = {
  usersList: [],
  search: [
    {
    inputValue: '',
    },
  ],
  inputCurrentUser:
    {
      firstname: 'a',
      lastname: 'b',
      pseudo: 'c',
      mail: '@',
      descrption: 'e',
    }
  
};

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
    default:
      return state;
  }
};

export default usersReducer;