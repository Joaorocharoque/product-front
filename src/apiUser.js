import axios from 'axios';

const apiUser = axios.create({
  baseURL: 'https://user-api-jj.herokuapp.com/user',
});

export default apiUser;