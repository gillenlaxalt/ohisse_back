export const HANDLE_MENU = 'HANDLE_MENU';
export const handleMenu = () => ({
  type: HANDLE_MENU,
});

export const HANDLE_DARK = 'HANDLE_DARK';
export const handleDark = () => ({
  type: HANDLE_DARK,
});

export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const changeLoginField = (value, name) => {
  console.log(value,name);
  return  ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name
});}


// action type isLogged
export const IS_LOGGED = 'IS_LOGGED'; 
export const isLogged = () => ({
  type: IS_LOGGED,
});

// action type logout
export const LOGOUT = 'LOGOUT'; 
export const logout = () => ({
  type: LOGOUT,
});

