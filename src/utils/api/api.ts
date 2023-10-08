import axios, {AxiosRequestConfig} from 'axios';
import {API_ACCESS_TOKEN, URL} from '@env';

export const configureInterceptor = async () => {
  axios.interceptors.request.use(
    async config => {
      const newConfig = config;

      newConfig.headers.Accept = 'application/json';
      newConfig.headers.Authorization = `Bearer ${API_ACCESS_TOKEN}`;

      return newConfig;
    },
    err => {
      // eslint-disable-next-line no-console
      console.log('request error: ', err);
    },
  );
  axios.interceptors.response.use(
    response => {
      return response.data;
    },
    error => {
      return Promise.reject(error);
    },
  );
};

const fetchUrl = (
  method: string,
  endpoint: string,
  data: null | object = null,
  options?: AxiosRequestConfig,
) => {
  let optionObject = {
    method,
    data,
    url: `${URL}${endpoint}`,
    timeout: 30000,
  };

  if (options) optionObject = {...optionObject, ...options};

  return axios(optionObject);
};

const api = {
  get(endpoint: string, options?: AxiosRequestConfig) {
    return fetchUrl('GET', endpoint, null, options);
  },
  post(endpoint: string, data: object, options: AxiosRequestConfig) {
    return fetchUrl('post', endpoint, data, options);
  },
  put(endpoint: string, data: object, options: AxiosRequestConfig) {
    return fetchUrl('put', endpoint, data, options);
  },
  patch(endpoint: string, data: object, options: AxiosRequestConfig) {
    return fetchUrl('patch', endpoint, data, options);
  },
  delete(endpoint: string, data: object) {
    return fetchUrl('delete', endpoint, data);
  },
};

export default api;
