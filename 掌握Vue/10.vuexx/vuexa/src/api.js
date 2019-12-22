import axios from './util/request';

export const getList = () => axios.get('/getlist');