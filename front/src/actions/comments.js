// action type fetchComments
export const FECTH_COMMENTS = 'FECTH_COMMENTS';
// action creator fetchComments
export const fetchComments = () => ({
  type : FECTH_COMMENTS,
})

//action type saveComments
export const SAVE_COMMENTS = 'SAVE_COMMENTS';
// action creator saveComments
export const saveComments = (data) => ({
  type: SAVE_COMMENTS,
  data
})