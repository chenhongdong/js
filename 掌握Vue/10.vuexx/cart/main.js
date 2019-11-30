import Vue from 'vue';
import App from './App.vue';
import router from './src/router';
import store from './src/store';

export default new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
});
