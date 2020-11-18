<template>
  <div id="mountNode"></div>
</template>

<script>
import DemoData from "./defaultData";
import ModulesData from "./student.pdman";
export default {
  name: "Demo",
  data() {
    return {
      demoData: DemoData,
      modulesData: ModulesData.modules,
      paintHeight: window.innerHeight,
      paintWidth: window.innerWidth,
    };
  },
  mounted() {
    this.init(this.paintWidth, this.paintHeight, "demo");
  },
  methods: {
    registerNode() {
      G6.registerNode(type);
    },
    init(paintWidth, paintHeight, id) {
      console.log(id);
      const plugin = new G6.Plugins["layout.dagre"]({
        rankdir: "LR",
        // nodesep: 100,
        // ranksep: 100,
      });
      const minimap = new G6.Plugins["tool.minimap"]({});
      const Util = G6.Util;
      G6.registerNode(
        "customNode",
        {
          cssSize: true, // 不使用内部 size 作为节点尺寸
          getHtml: function (cfg) {
            const model = cfg.model;
            const container = Util.createDOM(
              '<div class="node-conatiner"></div>'
            );
            const title = Util.createDOM(
              `<div class="node-conatiner-title node-conatiner-${model.status}">${model.stationName}</div>`
            );
            container.appendChild(title);
            if (model.trains.length > 0) {
              for (let i = 0; i < model.trains.length; i++) {
                const list = Util.createDOM(`<div class="node-conatiner-list ">
                <span>车次：</span>
            <span ><a href="https://www.baidu.com/s?wd=${model.trains[i]}" title=${model.trains[i]}  style=" position: absolute; z-index: 100;">${model.trains[i]}</a></span>
            </div>`);
                container.appendChild(list);
              }
            }
            return container;
          },
        },
        "html"
      );
      G6.registerNode(
        "customNode2",
        {
          cssSize: true, // 不使用内部 size 作为节点尺寸
          getHtml: function (cfg) {
            const model = cfg.model;
            const container = Util.createDOM(
              '<div class="node-conatiner node-conatiner-move";"></div>'
            );
            const title = Util.createDOM(`<div class="node-conatiner-title node-conatiner-${model.status}">
      ${model.stationName}
    </div>`);
            container.appendChild(title);
            if (model.trains.length > 0) {
              for (let i = 0; i < model.trains.length; i++) {
                const list = Util.createDOM(`<div class="node-conatiner-list">
                <span>车次：</span>
            <span ><a href="https://www.baidu.com/s?wd=${model.trains[i]}" title=${model.trains[i]} style=" position: absolute; z-index: 100;">${model.trains[i]}</a></span>
            </div>`);
                container.appendChild(list);
              }
            }

            return container;
          },
        },
        "html"
      );
      G6.registerNode(
        "aboutMe",
        {
          cssSize: true, // 不使用内部 size 作为节点尺寸
          getHtml: function (cfg) {
            const model = cfg.model;
            const container = Util.createDOM(
              '<div class="node-conatiner ";"></div>'
            );
            const title = Util.createDOM(`<div class="node-conatiner-title node-conatiner-${model.status}">
        ${model.stationName}
      </div>`);
            container.appendChild(title);
            return container;
          },
        },
        "html"
      );
      const miniMap = new G6.Plugins["tool.minimap"]({
        width: 180,
        height: 180,
      });
      const data = this.demoData;
      const net = new G6.Net({
        id: "mountNode",
        height: window.innerHeight,
        fitView: "tc",
        // animate: true,
        // useAnchor: false,
        // grid: null,
        // width: 1200,    // 画布宽
        // height:800,    // 画布高
        plugins: [plugin],
        // mode: 'analysis'
      });

      // const net = new G6.Net({
      //   // id: id || `paint-${this.props.value}`, // 容器ID
      //   id: "mountNode", // 容器ID
      //   height: paintHeight - 20,
      //   width: paintWidth,
      //   mode: "edit",
      //   // fitView: fitView,
      //   // plugins: disableMap ? [] : [miniMap],
      //   plugins: [miniMap],
      //   grid: {
      //     forceAlign: true, // 是否支持网格对齐
      //     cell: 10, // 网格大小
      //     line: {
      //       // 网格线样式
      //       stroke: "#D4D4D4",
      //       opacity: 0.5,
      //     },
      //   },
      // });
      // net.removeBehaviour(['wheelZoom', 'resizeNode']);
      net.source(data.nodes, data.edges);
      net.node().shape("customNode").style({
        stroke: null, // 去除默认边框
        fillOpacity: 1,
      });
      net
        .edge()
        .shape("arrow")
        .style({
          lineWidth: 3,
        })
        .color("rgb(97, 183, 207)");
      net.render();
      // net.changeData(data.nodes, data.edges);
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  display: none;
}

html,
body {
  overflow: hidden;
}
</style>

<style>
.node-conatiner {
  min-width: 200px;
  height: 100%;
  border: 1px solid #999;
  border-radius: 6px;
  overflow: hidden;
  position: relative;
}

.node-conatiner .node-conatiner-title {
  color: white;
  padding-left: 10px;
  line-height: 48px;
  font-size: 2em;
  text-align: center;
  /* height: 60px; */
}

.node-conatiner .node-conatiner-success {
  background: #228ACC;
}

.node-conatiner .node-conatiner-fail {
  background: #FF0030;
}

.node-conatiner .node-conatiner-list {
  background: white;
  padding-left: 10px;
  /* height: 40px; */
  line-height: 40px;
}

.node-conatiner .node-delete {
  position: absolute;
  top: 4px;
  right: 4px;
  z-index: 10;
  /* 使得该元素z层级大于最上层canvas */
}

a {
  position: absolute;
  z-index: 100;
}
</style>>
