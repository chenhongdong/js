import * as types from '../mutation-types';
import * as apis from '../../api';

export default {
    namespaced: true,
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
            console.log(list);
            commit(types.GET_LIST, list.carts);
        }
    }
}