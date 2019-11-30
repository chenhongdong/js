<template>
  <el-container>
	  <el-header>
		  <el-menu mode="horizontal"
		  		   active-text-color="#409EFF" 
				   background-color="#B3C0D1"
				   :default-active="$route.path"
				   :router="true">
			  <el-menu-item index="/">首页</el-menu-item>
			  <el-menu-item index="/profile">个人中心</el-menu-item>
			  <el-menu-item index="/user">用户</el-menu-item>
		  </el-menu>
	  </el-header>
	  <el-main>
		  <router-view></router-view>
	  </el-main>
	  <el-footer>底部</el-footer>
  </el-container>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {margin: 0;padding: 0;}
.el-header, .el-footer {
	background-color: #B3C0D1;
	color: #333;
	line-height: 60px;
}
.el-main {
	height: calc(100vh - 120px);
}
</style>