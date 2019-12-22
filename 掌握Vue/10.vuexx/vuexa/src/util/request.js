import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

axios.interceptors.request.use(config => config);
axios.interceptors.response.use(res => res.data);


export default axios;