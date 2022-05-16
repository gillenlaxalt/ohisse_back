//= import 
// npm
import axios from 'axios';

// local
import { FETCH_USERS, saveUsers } from '../actions/users';

const axiosIntance = axios.create({
   // API url
   baseURL: 'http://0.0.0.0:8080/',
});

const userApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_USERS:
      axiosIntance
        .get('api/admin/users')
        .then(
          (resp) => {
            console.log(resp.data)
            store.dispatch(saveUsers())
          }
        )
        .catch(
          () => console.log('error api'),
        );
      next(action);
      break;

      default:
      next(action);
  }
};

export default userApiMiddleware;