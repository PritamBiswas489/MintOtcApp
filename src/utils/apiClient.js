import axios from 'axios';
import {getValue} from '@utils/localstorage';
// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'https://back.travelmoney.co.il',

  headers: {
    'Content-Type': 'application/json; charset=UTF-8',
    'X-localization': 'en',
  },
});

// Add a request interceptor
apiClient.interceptors.request.use(
  async config => {
    const lang = 'en';
    return config;
  },
  error => Promise.reject(error),
);

export default apiClient;
