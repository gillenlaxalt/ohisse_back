//= import 
// npm
import axios from 'axios';

// local
import { FETCH_SPOTS, saveSpots } from '../actions/spots';

const axiosInstance = axios.create({
   // API url
   baseURL: 'http://0.0.0.0:8080/',
});

const spotApiMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case FETCH_SPOTS:
      axiosInstance
        .get('api/admin/spots')
        .then(
          (resp) => {
            console.log(resp.data)
            store.dispatch(saveSpots(resp.data))
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

export default spotApiMiddleware;