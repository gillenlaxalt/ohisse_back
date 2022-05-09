// == import

// npm

// local

export const initialState = {
  state: 'spots state',
};

const spotsReducer = (state = initialState, action = {}) => {
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

export default spotsReducer;