// == import

// npm
import axios from 'axios';
import { FECTH_COMMENTS, saveComments } from '../actions/comments';
// local

const axiosInstance = axios.create({
  // API url
  baseURL: 'http://0.0.0.0:8080/',
});

const commentApiMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const token = state.users.tokenCurrentUser;

  axiosInstance.default.headers.common.Authorization = `Bearer ${token}`;

  switch (action.type) {

    case FECTH_COMMENTS:{
      axiosInstance
        .get('api/admin/comments',
        )
        .then((resp) => {
          store.dispatch(saveComments(resp.data))
        })
        .catch((resp) => {
          window.alert(`Erreur : connexion à l'API échouée`);
        });
        next(action);
        break
      }

      default:
        next(action);
  }

};

export default commentApiMiddleware;