import Vue from 'vue';
import App from './App.vue';
import store from './store';

export default new Vue({
    el: '#app',
    render: h => h(App),
    store       // $store
});