<template>
    <div>商品
        <ul>
            <li v-for="p in products" :key="p.id">
                {{p.cartName}}
                <img :src="p.cartCover" width="200" height="200"/>
            </li>
        </ul>
    </div>
</template>

<script>
import * as types from '../store/mutation-types';
import { createNamespacedHelpers } from 'vuex';
let {mapActions, mapState} = createNamespacedHelpers('product');

export default {
    mounted() {
        // this.$store.dispatch(types.GET_LIST);

        this[types.GET_LIST]();
    },
    computed: {
        ...mapState(['products'])
    },
    methods: {
        ...mapActions([types.GET_LIST]),
    }
}
</script>