// == import

// npm

// local

import { CHANGE_FIELD, SAVE_CURRENT_TOKEN, SAVE_CURRENT_USER, CHANGE_INPUT } from "../actions/users";

export const initialState = {
  usersList: [],
  search: 
    {
    inputValue: '',
    },
  inputCurrentUser:
    {
      firstname:'',
      lastname:'',
      pseudo:'',
      mail:'',
      description:'',
      role:'',
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
      case CHANGE_INPUT:
        return {
          ...state,
          inputCurrentUser:{
            ...state.inputCurrentUser,
            [action.name] : action.value
          }
        }
    default:
      return state;
  }
};

export default usersReducer;