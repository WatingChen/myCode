<template>
  <div class="pagination">
    <el-pagination
      @size-change="handlePageSizeChange"
      @current-change="handleCurrentPageChange"
      :page-sizes="[5, 10, 20, 30, 40, 50, 60, 80, 100]"
      layout="total, sizes, prev, pager, next, jumper"
      :current-page.sync="currentPage"
      :page-size="pageSize"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  data() {
    return {
      currentPage: 1
    };
  },
  props: {
    //避免直接改变prop属性
    // currentPage: {
    //   type: Number,
    //   required: false,
    //   default: 1
    // },
    total: {
      type: Number,
      required: true,
      default: 0
    },
    pageSize: {
      type: Number,
      required: false,
      default: 10
    }
  },
  watch: {
    currentPage(val) {
      if (typeof val === "number") {
        console.log("prop currentPage");
        this.currentPage = val;
      }
    }
  },
  methods: {
    // currentPage变化
    handleCurrentPageChange(val) {
      this.$emit("handleCurrentPageChange", val);
    },
    // pageSize变化
    handlePageSizeChange(val) {
      this.currentPage = 1;
      this.$emit("handlePageSizeChange", val);
    }
  }
};
</script>

<style scoped>
  .pagination {
    margin: 20px 0;
    text-align: right;
  }
</style>
