<template>
  <Bar3DChart :options="o"/>
</template>

<script setup lang="ts">
import Bar3DChart from "@/components/Bar3DChart/index.vue"
import {ref} from "vue";
import * as echarts from "echarts";

const o = ref({
    title: {
      text: "不同级别的忍者数量",
      textStyle: {
        color: "#fff",
      },
    },
    legend: {
      data: ['1', '2']
    },
    backgroundColor: "#000",

    xAxis: {
      type: "category",
      data: ["下忍", "中忍", "上忍"],
      axisLabel: {
        color: "#fff",
      },
    },

    yAxis: {
      type: "value",
      max: (value) => {  // 百位起最大值向上取整
        return Math.ceil(value.max / 100) * 100;
      },
      axisLabel: {
        color: "#fff",
      },
      splitLine: {
        lineStyle: {
          color: "#222",
        },
      },
    },

    tooltip: {
      trigger: "axis",
    },

    series: [
      {
        type: "3DBar",
        name: '1',
        data: [100, 50, 200],
        // label: {
        //   show: true,
        //   position: 'top',
        //   color: 'white',
        //   formatter: function (params) {
        //     console.log("111", params)
        //
        //     return params.value + "人";
        //
        //   }
        // },
        barWidth: 30,
        bar3DStyle: {
          leftStyle: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: "rgba(57, 16, 133, 1)"},
              {offset: 1, color: "white"},
            ]), // 覆盖基础样式

          },
          rightStyle: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: "rgba(57, 16, 133, 1)"},
              {offset: 1, color: "white"},
            ]),
            // 覆盖基础样式
          },
          topStyle: {
            fill: "#722ed1", // 覆盖基础样式
          }
        }
      },
      {
        type: "bar",
        data: [100, 50, 200],
        itemStyle: {
          color: 'rgb(0,0,0,0)', // 设置柱状图的背景色
        },
        label: {
          show: true,
          position: 'top',
          color: 'white',
          formatter: function (params) {
            console.log("111", params)

            return params.value + "人";

          }
        },
        barWidth: 30,
      },
      {
        type: "3DBar2",
        name: '2',
        data: [100, 50, 20],
        barWidth: 30,
        bar3DStyle: {
          leftStyle: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: "white"},
              {offset: 1, color: "white"},
            ]), // 覆盖基础样式
          },
          rightStyle: {
            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {offset: 0, color: "rgba(57, 16, 133, 1)"},
              {offset: 1, color: "white"},
            ]), // 覆盖基础样式
          },
          topStyle: {
            fill: "#722ed1", // 覆盖基础样式
          }
        }
      },
      {
        type: "bar",
        data: [100, 50, 200],
        itemStyle: {
          color: 'rgb(0,0,0,0)', // 设置柱状图的背景色
        },
        label: {
          show: true,
          position: 'top',
          color: 'white',
        },
      },
    ],
  }
);

</script>

<style scoped>

</style>
