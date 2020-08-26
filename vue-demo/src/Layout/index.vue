<template>
  <div id="layout">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside style="width: auto">
        <SideBar />
      </el-aside>
      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <HeaderBar />
        </el-header>
        <BreadCrumb />
        <el-main>
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { SideBar, HeaderBar, AppMain } from "./components/index";
import BreadCrumb from "@/components/BreadCrumb";

export default {
  components: {
    SideBar,
    HeaderBar,
    AppMain,
    BreadCrumb,
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      tableData: Array(20).fill(item),
    };
  },
};
</script>


<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
</style>
