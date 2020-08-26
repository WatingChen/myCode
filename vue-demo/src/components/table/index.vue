<template>
  <el-table
    :data="dataList"
    style="width: 100%"
    v-loading="tableConfig.isLoading"
    :border="tableConfig.hasBorder"
    @selection-change="selectionChange"
  >
    <!-- 选择-->
    <el-table-column v-if="tableConfig.hasSelection" type="selection" width="55" align="center"></el-table-column>

    <!--序号-->
    <el-table-column
      v-if="tableConfig.indexConfig.hasIndex"
      type="index"
      v-bind.sync="tableConfig['indexConfig']"
    ></el-table-column>

    <!-- 数据源 -->
    <!-- <template v-for="(item, index) in columns">
      <el-table-column v-if="!item.render" :key="index" v-bind.sync="item['config']">
        <template slot="header" v-if="headerColumns[index].renderHeader">
          <expand-item
            :column="item"
            :row="headerColumns[index]"
            :render="headerColumns[index].renderHeader"
          ></expand-item>
        </template>
      </el-table-column>

      <el-table-column v-else :key="index" v-bind.sync="item['config']">
        <template slot="header" v-if="headerColumns[index].renderHeader">
          <expand-item
            :column="item"
            :row="headerColumns[index]"
            :render="headerColumns[index].renderHeader"
          ></expand-item>
        </template>
        <template slot-scope="scope">
          <expand-item :column="item" :row="scope.row" :render="item.render"></expand-item>
        </template>
      </el-table-column>
    </template>-->
    <template v-for="(item, index) in columns">
      <el-table-column :key="index" v-bind.sync="item['config']">
        <template slot="header" v-if="headerColumns[index].renderHeader">
          <expand-item
            :column="item"
            :row="headerColumns[index]"
            :render="headerColumns[index].renderHeader"
          ></expand-item>
        </template>
        <template slot-scope="scope">
          <expand-item :column="item" :row="scope.row" :render="item.render"></expand-item>
        </template>
      </el-table-column>
    </template>

    <!-- 操作 -->
    <el-table-column v-if="tableConfig.isShowOperate" label="操作" width="140">
      <template slot-scope="scope">
        <slot name="operate_txt" :todo="scope">
          <el-button @click="handleClick(scope,scope.row,scope.$index)" type="text" size="small">删除</el-button>
        </slot>
      </template>
    </el-table-column>

    <slot></slot>
  </el-table>
</template>

<script>
export default {
  name: "Table",
  props: {
    dataList: {
      required: true,
      type: Array,
      default: () => {
        return [];
      },
    },
    columns: {
      required: true,
      type: Array,
      default: () => {
        return [];
      },
    },
    headerColumns: {
      required: true,
      type: Array,
      default: () => {
        return [];
      },
    },
    tableConfig: {
      required: true,
      type: Object,
      default: {
        hasSelection: {
          type: Boolean,
          default: false,
        },
        indexConfig: {
          type: Object,
          default: false,
          default: {
            hasIndex: {
              type: Boolean,
              default: false,
            },
            label: {
              type: String,
              default: "序号",
            },
          },
        },
        hasLoading: {
          type: Boolean,
          default: false,
        },
        isShowOperate: {
          type: Boolean,
          default: true,
        },
      },
    },
  },
  methods: {
    isRenderHeader(index) {
      if (this.headerColumns[index]) {
        return this.headerColumns[index].renderHeader;
      }
      return undefined;
    },
    handleClick: function (scope, row, index) {
      this.$emit("table_delete", row);
      // console.log(scope);
      // console.log(row);
      // console.log(index);
    },
    selectionChange(val) {
      this.$emit("getChooseCloumns", val);
    },
  },
  watch: {
    showLoading(val) {
      console.log(val);
    },
  },
  components: {
    expandItem: {
      functional: true,
      props: {
        row: Object,
        render: Function,
        column: {
          type: Object,
          default: null,
        },
      },
      render: (h, ctx) => {
        // console.log(ctx)
        const params = {
          row: ctx.props.row,
        };
        let {
          props: { column, render, row },
        } = ctx;
        if (column) params.column = ctx.props.column;
        if (column.config.isRender) {
          return ctx.props.render(h, params);
        } else {
          return <span>{row.name}</span>;
        }
      },
    },
  },
};
</script>
