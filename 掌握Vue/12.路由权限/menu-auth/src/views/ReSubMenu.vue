<template>
  <el-submenu :index="data.path">
    <template slot="title">
        <router-link :to="data.path">{{data.name}}</router-link>
    </template>
    <template v-for="c in data.children">
        <ReSubMenu :key="c.auth" v-if="c.children" :data="c"></ReSubMenu>
        <el-menu-item v-else :key="c.auth" :index="c.path">{{c.name}}</el-menu-item>
    </template>
  </el-submenu>
</template>

<script>
export default {
    name: 'ReSubMenu',
    props: {
        data: {
            type: Object,
            default: () => {}
        }
    }
}
</script>