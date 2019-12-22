import Vue from 'vue';
import App from './App.vue';


let info = {a:1,b:2};

export default new Vue({
    el: '#app',
    info,
    render: h => h(App)
});