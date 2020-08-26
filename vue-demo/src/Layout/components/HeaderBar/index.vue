<template>
  <div id="headerBar">
    <el-button type="text" class="sideBar-button" :icon="$store.state.sideBar.isOpen ? 'el-icon-s-fold' : 'el-icon-s-unfold'" @click="iSOpenSideBar"></el-button>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span>王小虎</span>
  </div>
</template>

<script>

export default {
  name: "HeaderBar",
  data() {
    return {

    };
  },
  methods: {
    iSOpenSideBar() {
      this.$store.commit('TOGGLE_SIDEBAR')
    },
  },
};
</script>

<style>
.sideBar-button {
  font-size: 30px;
  float: left;
}
</style>
