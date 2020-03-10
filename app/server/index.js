import axios from 'axios';
import user from './user';

const API_BASE_URL = process.env.API_BASE_URL;

const axiosInstance = axios.create({ baseURL: API_BASE_URL });

export default {
  user: user(axiosInstance),
  setToken: token => {
    axiosInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  removeToken: () => {
    delete axiosInstance.defaults.headers.common.Authorization;
  },
};
