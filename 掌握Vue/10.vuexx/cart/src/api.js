import axios from './utils/request';

export const getList = () => axios.get('/getlist');