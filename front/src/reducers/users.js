// == import

// npm

// local

export const initialState = {
  state: 'users state',
};

const usersReducer = ( state = initialState, action = {}) => {
  switch (action.type) {
    // case SAVE_RECIPES:
    //   return {
    //     ...state,
    //     list: action.recipes,
    //   };
    default:
      return state;
  }
};

export default usersReducer;