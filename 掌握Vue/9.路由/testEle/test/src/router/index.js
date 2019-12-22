import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);     // router-link 和  router-view

import routes from './routes';


export default new VueRouter({
    mode: 'hash',
    routes
});