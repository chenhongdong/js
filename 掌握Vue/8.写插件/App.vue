<template>
    <div>
        <button @click="showMsg">点击弹层</button>
    </div>
</template>

<script>
import Vue from 'vue';

import Message from './components/Message';
Vue.use(Message, {duration: 2000});   // 使用一个插件，我们内部需要提供一个install方法

export default {
    name: 'App',
    mounted() {
        console.log(this._info);
    },
    methods: {
        showMsg() {
            this.$message.info({
                message: '会长大的幸福',
                duration: 3000
            });
        }
    }
}
</script>

<style>

</style>