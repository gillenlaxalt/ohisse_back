export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, name) => ({
  type : CHANGE_FIELD,
  value,
  name
})

// action type FETCH_USERS
// call FETCH_USERS in axios that saveUsers if return ok
export const FETCH_USERS = 'FETCH_USERS';

// action creator : call FETCH_USER
export const fetchUsers = () => ({
  type: FETCH_USERS,
})

// action type SAVE_USERS
export const SAVE_USERS = 'SAVE_USERS';

// action creator call in axios to received user list. In store users
export const saveUsers = (data) => ({
  type : SAVE_USERS,
  data,
});

// action type login
export const LOGIN = 'LOGIN';

export const login = () => ({
  type: LOGIN,
})

// action type to saveCurrentUser login
export const SAVE_CURRENT_USER ='SAVE_CURENT_USER';
// action creator to save current user login
export const saveCurrentUser = (dataCurrentUser) => ({
  type: SAVE_CURRENT_USER,
  data : dataCurrentUser,
})