import axios from 'axios';

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
            //console.log(resp)
          }
        )
  }
}