import axios from 'axios'; //axiosの利用

const instance = axios.create({
  baseURL:
  "https://firestore.googleapis.com/v1/projects/english-tube-c340d/databases/(default)/documents",
  
  });
  
  export default instance;