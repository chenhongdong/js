<template>
	<div class="cascader" v-click-outside="close">
		<div class="title" @click="toggle">{{result}}</div>
		<div v-if="isShow">
			<cascader-item 
				:options="options"
				:value="value"
				@change="change"
				:level="0">
			</cascader-item>
		</div>
	</div>
</template>

<script>
import direct from '../directives/clickOutside';
import cascaderItem from './cascaderItem';
import cloneDeep from 'lodash/cloneDeep';

export default {
	name: 'cascader',
	props: {
		options: {
			type: Array,
			default: () => []
		},
		value: {
			type: Array,
			default: () => []
		},
		lazyload: {
			type: Function
		}
	},
	data() {
		return {
			isShow: false,
		}
	},
	directives: {
		clickOutside: direct.clickOutside
	},
	computed: {
		result() {
			return this.value.map(item => item.label).join('/');
		}
	},
	methods: {
		handle(id, children) {
			let cloneOpts = cloneDeep(this.options);

			let stack = [...cloneOpts];
			let index = 0;
			let current;

			while (current = stack[index++]) {	// 广度遍历
				if (current.id !== id) {
					if (current.children) {
						stack = stack.concat(current.children);
					}
				} else {
					break;
				}
			}
			// 动态的数据加载好后，传递给父亲
			if (current) {
				current.children = children;
				this.$emit('update:options', cloneOpts);
			}
		},
		change(value) {
			console.log('change', value);
			// 先获取点击的是谁，再调用用户的lazyload方法
			let lastItem = value[value.length - 1];
			let id = lastItem.id;
			if (this.lazyload) {
				// 我需要给当前id这一项添加一个children属性
				this.lazyload(id, (children) => this.handle(id, children));
			}
			this.$emit('input', value);
		},
		toggle() {
			this.isShow = !this.isShow;
		},
		close() {
			this.isShow = false;
		}
	},
	components: {
		cascaderItem
	}
}
</script>

<style>
.title {
	width: 150px;
	height: 30px;
	line-height: 30px;
	border: 1px solid #00a1f4;
}
.content {
	display: flex;
}
.content-left {
	border: 1px solid #00a1f4;
	height: 150px;
	overflow-y: auto;
}
.label {
	width: 80px;
	padding-left: 5px;
}
.label:hover {
	background: #0cc;
}
</style>