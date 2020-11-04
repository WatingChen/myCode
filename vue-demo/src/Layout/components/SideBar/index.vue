<template>
  <el-menu
    :default-active="$route.path"
    :router="true"
    class="el-menu-vertical-demo"
    :collapse="$store.state.sideBar.isOpen"
    :show-timeout="200"
  >
    <el-menu-item :index="item.name" v-for="item in navList" :key="item.name">
      <i class="el-icon-menu"></i>
      <span slot="title">{{ item.navItem }}</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        {
          name: "/index",
          navItem: "首页",
        },
        {
          name: "/menu1",
          navItem: "Menu1",
        },
      ],
    };
  },
  computed: {
    routes() {
      return this.$router.options.routes;
      console.log(routes);
    },
  },
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
