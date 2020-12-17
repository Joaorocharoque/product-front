import axios from 'axios';

const apiProdReport = axios.create({
  baseURL: 'https://product-report-api-jj.herokuapp.com/product/expired',
});

export default apiProdReport;