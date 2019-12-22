<template>
    <div>
        <nav class="nav">
            <router-link to="/">首页</router-link>
            <router-link to="/cart">购物车</router-link>
        </nav>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>
* {margin: 0; padding: 0;}
.nav {
    display: flex;
}
.nav a {
    flex: 1;
    color: #fff;
    background-color: #000;
    height: 40px;
    line-height: 40px;
    text-align: center;
}
.nav .router-link-exact-active {
    background-color: #00a1f4;
}
</style>