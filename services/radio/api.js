import axios from 'axios';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const API_RADIO = axios.create({
    baseURL: publicRuntimeConfig.RADIO_API,
})
axios.interceptors.request.use(config => config);

axios.interceptors.response.use(response => response);
export default API_RADIO;