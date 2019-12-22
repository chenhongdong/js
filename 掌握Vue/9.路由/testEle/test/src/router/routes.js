import Home from '../components/Home.vue';
import User from '../components/User.vue';
import Profile from '../components/Profile.vue';

export default [
    {
        path: '/',
        component: Home
    },
    {
        path: '/profile',
        component: Profile
    },
    {
        path: '/user',
        component: User,
        children: [
            {
                path: 'add',
                // 路由懒加载 返回一个promise，点击路由时会等待promise加载完，而且webpack会自动实现代码分割
                component: () => import('../components/UserAdd.vue')
            },
            {
                path: 'list',
                component: () => import('../components/UserList.vue')
            },
            {
                path: '*',
                component: () => import('../components/UserAdd.vue')
            }
        ]
    }
]