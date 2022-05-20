// == import

// npm

// local
import { CHANGE_FIELD, SAVE_SPOTS } from "../actions/spots";

export const initialState = {
  search: [
    {
    inputValue: '',
    },
  ],
  spotsList: [],
};

const spotsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_FIELD:
    return {
      ...state,
      [action.name]: action.value,
    };
    case SAVE_SPOTS:
      return {
        ...state,
        spotsList: action.data,
      }
    default:
      return state;
  }
};

export default spotsReducer;