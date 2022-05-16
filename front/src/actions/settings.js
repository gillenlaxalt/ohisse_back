export const HANDLE_MENU = 'HANDLE_MENU';
export const handleMenu = () => ({
  type: HANDLE_MENU,
});

export const HANDLE_DARK = 'HANDLE_DARK';
export const handleDark = () => ({
  type: HANDLE_DARK,
});

export const CHANGE_LOGIN_FIELD = 'CHANGE_LOGIN_FIELD';
export const changeLoginField = (value, name) => ({
  type: CHANGE_LOGIN_FIELD,
  value,
  name
});

