<template>
  <div id="app">
    <cube-tab-bar @click="clickHandler" v-model="selectedLabelDefault">
      <cube-tab v-for="item in tabs" :label="item.label" :key="item.label" :value="item.value">
        <i slot="icon" :class="item.icon"></i>
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedLabelDefault: "/",
      tabs: [
        {
		  label: "商品列表",
		  value: '/',
          icon: "cubeic-home"
        },
        {
		  label: "购物车",
		  value: '/cart',
          icon: "cubeic-mall"
        }
      ]
    };
  },
  watch: {
	  $route() {
		  this.selectedLabelDefault = this.$route.path;
	  }
  },
  methods: {
	  clickHandler(value) {
		  console.log(value);
		  this.$router.push(value);
	  }
  }
};
</script>