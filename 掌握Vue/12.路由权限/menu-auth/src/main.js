import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 只要页面切换就执行的钩子
// 根据权限动态添加路由（把路由分成两部分，一部分是有权限的，另一部分是没权限的）
router.beforeEach(async (to, from, next) => {
  // 当前有没有获取过权限， 如果获取过了就不再获取了
  if (!store.state.hasRule) {
    // 获取权限，调用获取权限的接口
    await store.dispatch('getMenuList');  // 去actions中获取数据
    let routes = await store.dispatch('getAuthRoute');

    router.addRoutes(routes);  // addRoutes方法不能保证路由马上被添进去
    next();  // hack 为了保证addRoutes添加成功后再跳转
  } else {
    next(); // 如果已经获取了权限就可以访问页面了
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
