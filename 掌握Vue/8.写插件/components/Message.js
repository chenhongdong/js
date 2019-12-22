import Vue from 'vue';
import Msg from './Message.vue';

// 获取当前组件的实例
let getInstance = () => {
    let vm = new Vue({
        render: h => h(Msg)
    }).$mount();    // $mount()  会在内存中进行挂载
    // vm.$el 挂载后可以拿到真实的dom
    document.body.appendChild(vm.$el);

    // 获取它的子集,就一个子集
    let component = vm.$children[0];

    return {
        add(options) {
            component.add(options);
        }
    }
};

// 单例模式
let instance;
let getInst = () => {   // 返回唯一的实例
    instance = instance || getInstance();

    return instance;
};

const Message = {
    info(options) {
        getInst().add(options);
    },
    success() {
        // todo
    },
    error() {
        // todo
    },
    warn() {
        // todo
    }
};

export {
    Message
}


// 防止多次use
let _Vue;
export default {    // 写插件的原理
    install(Vue, options) {
        // options表示的是Vue.use的第2个参数
        if (!_Vue) {
            _Vue = Vue;
            let $message = {};
            Object.keys(Message).forEach(type => {
                $message[type] = Message[type];
            });
            // 定义到prototype上，就直接可以通过this去调用
            Vue.prototype.$message = $message;
        }

        // vue 遍历组件的特点(先序深度)
        /* 
            parent
                child
                    cc  
        */
        Vue.mixin({ // 灌入一些公用数据的时候需要mixin
            beforeCreate() {    // 相当于在所有的组件中都加了这个方法
                // console.log('before', this.$options.info);  // {a:1,b:2}
                if (this.$options.info) {
                    // 这里是在main.js里写的根元素
                    this._info = this.$options.info;
                    console.log('根', this._info);
                } else {
                    this._info = this.$parent && this.$parent._info;
                    console.log('不是根元素', this._info);
                }
            }
        });
    }
}