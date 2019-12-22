<template>
  <div class="home">
    <el-menu
      :default-active="'2'"
      :router="true"
      class="el-menu-demo"
    >
      <template v-for="m in menuList">
        <ReSubMenu :key="m.auth" v-if="m.children" :data="m"></ReSubMenu>
        <el-menu-item :index="m.path" :key="m.auth" v-else>{{m.name}}</el-menu-item>
      </template>
    </el-menu>
    <el-button v-if="$store.state.btnAuth.edit">编辑</el-button>
  </div>
</template>

<script>
import {mapState} from 'vuex';
import ReSubMenu from './ReSubMenu';

export default {
  name: 'home',
  computed: {
    ...mapState(['menuList'])
  },
  components: {
    ReSubMenu
  }
}
</script>