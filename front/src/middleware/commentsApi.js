// == import

// npm

// local

const axiosInstance = axios.create({
  // API url
  baseURL: 'http://0.0.0.0:8080/',
});

const commentApiMiddleware = (store) => (next) => (action) => {
  const state = store.getState();
  const token = state.users.tokenCurrentUser;

  axiosInstance.default.headers.common.Authorization = `Bearer ${token}`;


};

export default commentApiMiddleware;