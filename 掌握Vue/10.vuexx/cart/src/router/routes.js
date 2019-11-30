export default [
    {
        path: '/',
        component: () => import('../views/Home.vue')
    },
    {
        path: '/cart',
        component: () => import('../views/Cart.vue')
    }
];