import axios from 'axios';

const API_BASE_URL = 'http://your-api-url'; // Replace with your actual API URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const fetchProducts = () => api.get('/products');

export default api;
