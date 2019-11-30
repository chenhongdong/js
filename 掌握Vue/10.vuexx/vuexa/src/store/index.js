import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';


const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

Vue.use(Vuex);

import cart from './modules/cart';
import product from './modules/product';

export default new Vuex.Store({
  modules: {  // 模块里的状态  模块里的状态会覆盖根状态
    cart,
    product
  },
  plugins: [vuexLocal.plugin]
  // state: {  // 根状态

  // },
  // mutations: {

  // },
  // actions: {

  // },
});
