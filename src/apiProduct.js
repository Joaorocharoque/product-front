import axios from 'axios';

const apiProduct = axios.create({
  baseURL: 'https://product-api-jj.herokuapp.com/product',
});

export default apiProduct;