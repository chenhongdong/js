const express = require('express');
const app = express();

app.use('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With, Current-Page');

    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

let menuList = [
    {pid: -1, path: '/login', name: '登录', id: 0, auth: 'login'},
    {pid: -1, path: '/cart', name: '购物车', id: 1, auth: 'cart'},
    {pid: -1, path: '/shop', name: '商店', id: 2, auth: 'shop'},
    // {pid: -1, path: '/profile', name: '个人中心', id: 3, auth: 'profile'},
    {pid: 1, path: '/cart/cart-list', name: '购物车列表', id: 4, auth: 'cart-list'},
    {pid: 4, path: '/cart/cart-list/lottery', name: '彩票', id: 5, auth: 'lottery'},
    {pid: 4, path: '/cart/cart-list/product', name: '商品', id: 6, auth: 'product'},
];
let btnAuth = {
    edit: true, // 可编辑
};

app.get('/role', function(req, res) {
    res.json({ menuList, btnAuth });
});

app.listen(3333);