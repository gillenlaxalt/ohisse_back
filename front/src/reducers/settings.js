// == import

import { HANDLE_DARK, HANDLE_MENU } from "../actions/settings";

// npm

// local

export const initialState = {
  burgerMenu: false,
  darkMode: false,
  isLogged:false,
  login : [{
    mail:'',
    password:'',
  }]
};

const settingsReducers = (state = initialState, action = {}) => {
  switch (action.type) {
    case HANDLE_MENU :
      return {
        ...state,
        burgerMenu: !state.burgerMenu,
      };
      case HANDLE_DARK :
        return {
          ...state,
          darkMode: !state.darkMode,
        }
    default:
      console.log(state);
      return state;
  }
};

export default settingsReducers