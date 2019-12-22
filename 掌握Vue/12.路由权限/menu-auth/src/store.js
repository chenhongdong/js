import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import axios from 'axios';
import { authRoutes } from './router';
// 格式化菜单数据,变成我们需要的结果
let formatMenuList = menuList => {
  let auths = [];
  function format(pid) {
    return menuList.filter(menu => {
      if (menu.pid === pid) {
        auths.push(menu.auth);  // 把后端返回的所有路径权限都放到数组中

        let children = format(menu.id);
        menu.children = children.length ? children : null;
        return true;
      }
    });
  }

  return {
    list: format(-1),
    auths
  }
};

let getNeedRoutes = auth => {
  function filter(authRoutes) {
    return authRoutes.filter(route => {
      if (auth.includes(route.name)) {
        if (route.children) { // 如果有儿子，找到儿子继续看子路由的权限
          route.children = filter(route.children);
        }
        return true;  // 有权限就返回true
      }
    });
  }

  return filter(authRoutes);
}

export default new Vuex.Store({
  state: {
    // 存放菜单的数据
    menuList: [],
    // 表示没有获取过权限，获取后把状态改为true
    hasRule: false,
    // 权限列表，一条权限对应一个路由
    authList: [],
    btnAuth: {}
  },
  mutations: {
    setMenuList(state, menuList) {
      state.menuList = menuList;
    },
    setAuthList(state, auths) {
      state.authList = auths;
      state.hasRule = true;
    },
    setBtnAuth(state, btnAuth) {
      state.btnAuth = btnAuth;
    }
  },
  actions: {
    async getMenuList({commit}) {
      let {data} = await axios.get('http://localhost:3333/role');
      let menuList = data.menuList;
      let {list, auths} = formatMenuList(menuList);

      commit('setMenuList', list);
      commit('setAuthList', auths);

      commit('setBtnAuth', data.btnAuth);
    },
    async getAuthRoute({commit, state}) {
      // 要拿到所有权限的路由，去权限列表里筛选出路由
      let routes = getNeedRoutes(state.authList);
      // 当前需要动态添加的路由
      console.log(routes);
      return routes;
    }
  }
})
