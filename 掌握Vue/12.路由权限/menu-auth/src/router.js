import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

// 默认路由，没有权限
export let defaultRoutes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/login.vue')
  },
  {
    path: '*',
    component: () => import('@/components/404.vue')
  }
];
// 有权限的路由  需要查看用户权限，动态添加路由
export let authRoutes = [
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/components/menu/cart.vue'),
    children: [
      {
        path: 'cart-list',
        name: 'cart-list',
        component: () => import('@/components/menu/cartList.vue'),
        children: [
          {
            path: 'lottery',
            name: 'lottery',
            component: () => import('@/components/menu/lottery.vue')
          },
          {
            path: 'product',
            name: 'product',
            component: () => import('@/components/menu/product.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/components/menu/store.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/components/menu/profile.vue')
  }
];

export default new Router({
  routes: defaultRoutes
});
