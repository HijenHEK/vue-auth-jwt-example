var axios = require('axios');

var axiosInstance = axios.create({
  baseURL: 'http://jwtexample.test/api/',
  headers : {
      'Authorization' : localStorage.getItem('token_type')+ ' ' + localStorage.getItem('access_token')
  }
  /* other custom settings */
});

module.exports = axiosInstance;

