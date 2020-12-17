import axios from 'axios';

const api = axios.create({
  baseURL: 'https://product-api-jj.herokuapp.com/product',
});

export default api;