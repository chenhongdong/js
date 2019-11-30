<template>
	<el-tree :data="allData"
			 :render-content="render"
			 :expand-on-click-node="false"
			 default-expand-all></el-tree>
</template>

<script>
import _ from 'lodash';

export default {
	props: {
		data: {
			type: Array,
			default: () => []
		},
		fileDrop: {
			type: Array,
			default: () => []
		},
		dictDrop: {
			type: Array,
			default: () => []
		},
		delete: Function
	},
	data() {
		return {
			allData: [],
			currentId: '',			// 默认当前点击了谁的修改
			currentContent: '',		// 当前编辑的内容
		}
	},
	watch: {	// 需要监控父组件传递的data属性，如果有更新，就重新渲染
		data() {	// 数据更新后再重新渲染
			this.formatData();
		}
	},
	methods: {
		formatData() {
			// 需要根据数据进行克隆，因为子组件不能直接修改父组件的数据
			let allData = _.cloneDeep(this.data);

			let treeMap = allData.reduce((memo, current) => {
				memo[current['id']] = current;
				return memo;
			}, {});
			console.log(treeMap);
			let result = allData.reduce((arr, current) => {
				let pid = current.pid;	// 父id
				let parent = treeMap[pid];

				if (parent) {
					parent.children ? parent.children.push(current) : parent.children = [current];
				} else if (pid === 0) {	// 根文件夹
					arr.push(current);
				}
				return arr;
			}, []);

			this.allData = result;
		},
		render(h, {node ,data, store}) {
			let list = this.isParent(data) ? this.dictDrop : this.fileDrop;

			return (<div>
				{this.isParent(data) ?
					node.expanded ?
						<i class="el-icon-folder-opened"></i> :
						<i class="el-icon-folder"></i> : 
						<i class="el-icon-document"></i>
				}

				{data.id === this.currentId ? <el-input value={this.currentContent} on-input={this.handleInput}></el-input> : data.name} 

				{/* bind绑定时 会把原来的参数向后移动 */}
				{data.id !== this.currentId ? <el-dropdown placement="bottom-start" trigger="click" on-command={this.commandHandle.bind(this, data)}>
					<span class="el-dropdown-link">
						<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						{list.map(item => (
							<el-dropdown-item command={item.text}>{item.value}</el-dropdown-item>
						))}
					</el-dropdown-menu>
				</el-dropdown> : <span>
					<el-button on-click={this.ok.bind(this, data)}>确认</el-button>
					<el-button on-click={this.cancel}>取消</el-button>
				</span>}
				
			</div>)
		},
		isParent(data) {
			return data.type === 'parent';
		},
		commandHandle(data, value) {
			console.log('command', data, value);
			if (value === 'rn') {
				this.rename(data);
			} else if (value === 'rm') {
				this.remove(data);
			}
		},
		rename(data) {
			this.currentContent = data.name;
			this.currentId = data.id;
		},
		remove(data) {
			this.$confirm(`此操作将永久删除该文件, ${data.name} 是否继续?`, '提示', {
					confirmButtonText: '确定',
					cancelButtonText: '取消',
					type: 'warning'
				}).then(() => {
					// 不能直接将数据删除掉，需要调用用户的删除方法
					// 如果用户传递了delete方法，就直接调用
					this.delete ? this.delete(data.id).then(() => {
						this.removeData(data.id);
					}) : this.removeData(data.id); 
					
				}).catch(() => {
					this.$message({
						type: 'info',
						message: '已取消删除'
					});          
				});
		},
		removeData(id) {
			let list = _.cloneDeep(this.data);
			list = list.filter(item => item.id !== id);
			
			// .sync的用户可以同步数据
			this.$emit('update:data', list);

			this.$message({
				type: 'success',
				message: '删除成功'
			});
		},
		ok(data) {
			let list = _.cloneDeep(this.data);
			let item = list.find(item => item.id === data.id);
			item.name = this.currentContent;
			this.currentId = '';
			this.$emit('update:data', list);
			
			this.$message({
				type: 'success',
				message: '修改成功'
			});
		},
		cancel() {
			this.currentId = '';
		},
		handleInput(val) {
			this.currentContent = val;
		}
	},
	mounted() {
		this.formatData();
	}
}
</script>