var axios = require('axios');

// axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('access_token');
// axios.defaults.baseURL = "http://jwtexample.test/api/" ;
var axiosInstance = axios.create({
  baseURL: 'http://jwtexample.test/api/',
  headers : {
    'Content-Type' : 'application/json',
    'Accept' : 'application/json',
    'Authorization' : localStorage.getItem('token_type')+ ' ' + localStorage.getItem('access_token')
  }
  /* other custom settings */
});

export default axiosInstance;

