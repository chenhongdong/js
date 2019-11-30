<template>
  <div>
	  <!-- 获取用户选择的数据 -->
	  <cascader :options.sync="options" v-model="value" :lazyload="lazyload"></cascader>
  </div>
</template>

<script>
import cascader from './components/cascader';
import dataList from './data.json';

let fetchData = (pid) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(dataList.filter(data => data.pid == pid));
    }, 300);
  });
};

export default {
  data() {
    return {
	    value: [],
      options: []
    };
  },
  components: {
	  cascader
  },
  async created() {
    this.options = await fetchData(0);
  },
  methods: {
    // async input(value) {  // [{}, {}]
    //   console.log(value);
    //   let current = value[value.length - 1];  // 当前点击项
    //   let children = await fetchData(current.id);
    //   this.$set(current, 'children', children);
    // },
    async lazyload(id, cb) {  // 你需要传入一个方法，这个方法第一个参数是你选中的id，第二个是cb
      let children = await fetchData(id);
      cb(children);
    }
  }
};
</script>