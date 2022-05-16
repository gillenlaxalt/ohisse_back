// == import

// npm

// local

import { CHANGE_FIELD, SAVE_CURRENT_USER } from "../actions/users";

export const initialState = {
  currentUser: [],
  search: [
    {
    inputValue: '',
    },
  ],
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
    default:
      return state;
  }
};

export default usersReducer;