export const CHANGE_FIELD = 'CHANGE_FIELD';
export const changeField = (value, name) => ({
  type : CHANGE_FIELD,
  value,
  name
})

export const CHANGE_INPUT = 'CHANGE_INPUT';
export const changeInput = (value, name) => ({
  type : CHANGE_INPUT,
  value,
  name
})

// action type FETCH_USERS
// call FETCH_USERS in axios that saveUsers if return ok
export const FETCH_USERS = 'FETCH_USERS';
// action creator : call FETCH_USER to usersAPI
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

// action type current token
export const SAVE_CURRENT_TOKEN ='SAVE_CURRENT_TOKEN';
export const saveCurrentToken = (dataCurrentToken) => ({
  type : SAVE_CURRENT_TOKEN,
  data: dataCurrentToken,
})

//action type fetchUserById
export const FETCH_USER_BY_ID = 'FETCH_USER_BY_ID';
export const fetchUserById = (dataUserByID) => ({
  type : FETCH_USER_BY_ID,
  data : dataUserByID,
})

// action type updateUser 
export const UPDATE_USER ='UPDATE_USER';
// action creator updateUser
export const updateUser = () => ({
  type: UPDATE_USER,
})

// action type updateUser 
export const DELETE_USER ='DELETE_USER';
// action creator updateUser
export const deleteUser = (id, firstname, lastname) => ({
  type: DELETE_USER,
  id,
  firstname,
  lastname
})

// action type emptyAfterDelete
export const EMPTY_AFTER_DELETE = 'EMPTY_AFTER_DELETE';
// action creator emptyAfterDelete
export const emptyAfterDelete = () => ({
  type: EMPTY_AFTER_DELETE,
})

// action type isEmptyInFalse
export const IS_EMPTY_IN_FALSE = 'IS_EMPTY_IN_FALSE';
// action creator isEmptyInFalse
export const isEmptyInFalse = () => ({
  type: IS_EMPTY_IN_FALSE,
})

// action type addInputUser
export const ADD_INPUT_USER = 'ADD_INPUT_USER';
// action creator addInputUser
export const addInputUser = (value, name) => ({
  type: ADD_INPUT_USER,
  value,
  name,
})

// action type addUser
export const ADD_USER = 'ADD_USER';
// action creator addUser
export const addUser = () => ({
  type : ADD_USER,
})


