<template>
  <div>
	  <my-tree :data.sync="data"
	  		   :fileDrop="fileDrop"
			   :dictDrop="dictDrop"	
			   :delete="deleteFn"
			   :rename="renameFn"
			   v-if="data.length"	
	  ></my-tree>
  </div>
</template>

<script>
import {getTreeList} from './api';
import MyTree from './components/MyTree.vue';

export default {
	data() {
		return {
			data: [],
			fileDrop: [
				{text: 'rm', value: '删除文件'}
			],
			dictDrop: [
				{text: 'rm', value: "删除文件夹"},
				{text: 'rn', value: "修改名称"},
			]
		}
	},
	components: {
		MyTree
	},
	async mounted() {
		let data = await getTreeList();
		// console.log(data);
		// 1.扁平的数据如何变成 多层数据  (可以递归数据)
		// 数据格式化

		data.parent.forEach(p => p.type = 'parent');
		let allData = [...data.parent, ...data.child];
		console.log('all',allData);

		this.data = allData;

		// 映射表  {1: {name: "文件夹1", pid: 0, id: 1}
	},
	methods: {
		deleteFn() {	// 这个方法必须返回一个promise
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve();
				}, 3000);
			});
		},
		renameFn(id, newName) {
			// 调接口改完再传给tree组件
		}
	}
}
</script>