<template>
    <div>
        B-{{this.$store.state.count}}
        <button @click="minusTen">等待两秒</button>
        {{multi}}
        {{a}}   
    </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
console.log(mapActions(['minusTen']))
export default {
    computed: {
        ...mapGetters(['multi']),
        // 状态如果是多层的数据，需要用函数的形式返回对应的值
        ...mapState({a: state => state.obj.a})
    },
    methods: {
        ...mapActions({minus: 'minusTen'}),
        minusTen() {
            // store.dispatch处理异步操作，派发一个对应在action里的方法名
            // 真正的逻辑由action里的minusTen方法来处理
            // this.$store.dispatch('minusTen', 10);

            this.minus(20);
        }
    }
}
</script>