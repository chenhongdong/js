import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3030';

axios.interceptors.request.use(config => config);
axios.interceptors.response.use(res => res.data);

export const getTreeList = () => axios.get('/getTreeList');