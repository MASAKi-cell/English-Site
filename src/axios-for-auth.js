import axios from 'axios'; //axiosの利用

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
  
  });
  
  export default instance;