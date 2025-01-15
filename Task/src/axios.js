import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.reddit.com/r/reactjs.json',
  timeout: 10000,  
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
