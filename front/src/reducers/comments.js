// == import

import { SAVE_COMMENTS } from "../actions/comments";

// npm

// local

export const initialState = {
  commentList: [],
}

const commentsReducer = (state = initialState, action = {}) => {
  switch (action.type) {

    case SAVE_COMMENTS:
      return {
        ...state,
        commentList: action.data
      }
    default:
      return state;
  }
};

export default commentsReducer;