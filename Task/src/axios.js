import axios from 'axios';

// Create an Axios instance with default configuration
const axiosInstance = axios.create({
  baseURL: 'https://www.reddit.com/r/reactjs.json', // Base URL for API
  timeout: 10000,  // Optional: Set timeout for requests (in ms)
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
