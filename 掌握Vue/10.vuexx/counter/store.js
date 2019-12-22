import Vue from 'vue';
import Vuex from 'vuex';    // install,mixin   mixin会给所有的vue实例上增加$store

Vue.use(Vuex);

export default new Vuex.Store({ // new Vue
    state: {        // data
        count: 10,
        obj: {
            a: 110
        }
    },
    mutations: {    // methods
        addTen(state, count) {
            state.count += count;
        },
    },
    getters: {  // computed
        multi(state) {
            return state.count%3 === 0 ? '能整除3' : '不能整除3';
        }
    },
    actions: {  // async methods
        // 把一些公共的方法或者公共调取接口的方法都放在action中
        minusTen({commit}, count) {
            setTimeout(() => {
                commit('addTen', -count);
            }, 2000);
        }
    }
});
