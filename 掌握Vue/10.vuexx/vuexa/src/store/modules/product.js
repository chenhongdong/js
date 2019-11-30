import * as types from '../mutation-types';
import * as apis from '../../api';

export default {
    namespaced: true,   // 命名空间独立的模块，保证actions这些不会被覆盖
    state: {
        products: []
    },
    mutations: {
        [types.GET_LIST](state, list) {
            state.products = list;
        }
    },
    actions: {
        async [types.GET_LIST]({commit}) {
            
            let list = await apis.getList();
            console.log('list', list.carts);
            commit(types.GET_LIST, list.carts);
        }
    }
}