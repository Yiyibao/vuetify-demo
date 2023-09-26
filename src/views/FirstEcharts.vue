<template>
  <div
    class="eChart"
    id="myChart"
    :style="{ float: 'left', width: '100%', height: '400px' }"
  ></div>
  <TestCharts />
</template>

<script setup lang="ts">
//全局引入
import * as echarts from "echarts";
import {onMounted} from "vue";
import TestCharts from "@/components/TestCharts.vue";

onMounted(() => {
  initEcharts();
})


function initEcharts() {
  const option = {
    title: {
      text: "ECharts 入门示例"
    },
    tooltip: {},
    legend: {
      data: ["销量"]
    },
    xAxis: {
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar", //类型为柱状图
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  };
  const myChart = echarts.init(document.getElementById("myChart"));// 图标初始化
  myChart.setOption(option);// 渲染页面
//随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    myChart.resize();
  });
}

</script>
