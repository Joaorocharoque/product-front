import axios from 'axios';

const apiGateway = axios.create({
  baseURL: 'https://gateway-api-jj.herokuapp.com',
});

export default apiGateway;