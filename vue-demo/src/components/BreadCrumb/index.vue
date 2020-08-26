<template>
  <el-breadcrumb class="app-breadcrumb" separator-class="el-icon-arrow-right">
    <transition-group>
      <el-breadcrumb-item v-for="item in levelList" :key="item.path">
        <a @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: "BreadCrumb",
  data() {
    return {
      levelList: null
    }
  },
  created() {
    this.getBreadList()
  },
  methods: {
    getBreadList() {
      let matched = this.$route.matched.filter(item => item.name)
      this.levelList = matched;
    }
  },
  handleLink(item) {
    const { redirect, path } = item;
    if(redirect) {
      this.$route.push(redirect)
      return
    }
    this.$route.push(this.pathCompile(path))
  },
  pathCompile(path) {
    const { params } = this.$route;
    let toPath = pathToRegexp.compile(path);
    return toPath(params)
  }
};
</script>