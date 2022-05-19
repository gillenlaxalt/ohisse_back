//= import 
// npm
import axios from 'axios';

// local
import { FETCH_USERS, LOGIN, saveCurrentToken, saveCurrentUser, saveUsers, UPDATE_USER } from '../actions/users';
import { isLogged } from '../actions/settings';

const axiosInstance = axios.create({
   // API url
   baseURL: 'http://0.0.0.0:8080/',
});

const userApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS:
      axiosInstance
        .get('api/admin/users')
        .then(
          (resp) => {
            console.log(resp.data)
            store.dispatch(saveUsers(resp.data))
          }
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;
    case LOGIN: {
      const state = store.getState();
      const {mail, password } = state.settings.login;
      console.log(mail, password);
      // we send to API password and email
      axiosInstance
        .post(
          '/api/login',
          {
            email: mail,
            password: password
          },
        )
        // we recive information about user and token
        .then((response) => {
          // const { data: accès_token } = response;

          console.log(response.data.user);
          console.log(response.data.token.original.access_token);
          const token = response.data.token.original.access_token;
          const { user } = response.data;

          // we save token to axios
          axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;

          // we modify the state to inform that the use is connected
          store.dispatch(isLogged());

          // we save the user to the state user-> currentUser
          store.dispatch(saveCurrentUser(user));
          store.dispatch(saveCurrentToken(token))

          // we fetch all favorite spots
          // store.dispatch(fetchFavorites());
        })
        .catch(() => {
          console.log('oups...');
        });
      next(action);
      break;
    };
    case UPDATE_USER:{
      axiosInstance
        .patch(
          `/api/admin/spots/edit/${id}`
        )
    }
      

      default:
      next(action);
  }
};

export default userApiMiddleware;