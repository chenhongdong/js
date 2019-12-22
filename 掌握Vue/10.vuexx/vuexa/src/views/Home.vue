<template>
  <div class="home">
    商品
    <ul>
      <li v-for="product in products" :key="product.id">
        {{product.cartName}}
        <img :src="product.cartCover" width="300" height="200">
      </li>
    </ul>
  </div>
</template>

<script>
import * as types from '../store/mutation-types';
import { createNamespacedHelpers } from 'vuex';
let { mapActions, mapState } = createNamespacedHelpers('product');  // 如果确定只有这一个product，用这种就可以

export default {
	mounted() {
    // this.$store.dispatch('product/'+types.GET_LIST);
    
    if (this.products.length === 0) {
      this[types.GET_LIST]();
    }
  },
  computed: {
    ...mapState(['products'])
  },
  methods: {
    // ...mapActions('product', [types.GET_LIST])   // 如果不仅仅是product的，用这种可以写多种的
    ...mapActions([types.GET_LIST])
  }
}
</script>
