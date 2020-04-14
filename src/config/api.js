import axios from 'axios';
export const BASE_URL = 'https://telefono-roto.herokuapp.com';

export const api = axios.create({ baseURL: BASE_URL });
