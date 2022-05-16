// == import

// npm

// local
import { CHANGE_FIELD } from "../actions/spots";

export const initialState = {
  search: [
    {
    inputValue: '',
    },
  ],
};

const spotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
    return {
      ...state,
      [action.name]: action.value,
      };
    default:
      return state;
  }
};

export default spotsReducer;