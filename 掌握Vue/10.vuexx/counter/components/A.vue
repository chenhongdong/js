<template>
    <div>
        A-{{count}}
        <button @click="addTen">点击</button>
        {{this.$store.getters.multi}}
    </div>
</template>

<script>
// 简化store状态名字过长
import { mapState, mapMutations } from 'vuex';


export default {
    computed: {
        // mapState中更改名字用对象,如：mapState({'c': 'count'})
        ...mapState(['count']),
        /* mapState(['count'])和下面代码一致
        count: () => {
            return this.$store.state.count;
        } 
        */
    },
    methods: {
        // ...mapMutations(['addTen']),
        ...mapMutations({add: 'addTen'}),
        addTen() {
            // 同步操作，直接调用store.commit方法，commit会触发mutation的方法
            // 调用addTen这个mutation方法，并传入了参数10
            // this.$store.commit('addTen', 10);

            this.add(10);
        }
    }
}
</script>