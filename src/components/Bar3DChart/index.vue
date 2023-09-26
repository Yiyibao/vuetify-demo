<template>
  <div
    class="eChart"
    id="test"
    style="width: 100%;height: 100% "
  ></div>
</template>

<script setup lang="ts">
import * as echarts from "echarts";
import {onMounted} from "vue";
import renderFunction from "@/components/Bar3DChart/RenderFunction";
import {EChartsOption} from "echarts";
import renderFunction2 from "@/components/Bar3DChart/RenderFunction2";

interface Props {
  options: EChartsOption
}
const props = defineProps<Props>();
onMounted(() => {
  initEcharts();
})

const rightShape = echarts.graphic.extendShape({
  buildPath(ctx, shape) {
    const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape;
    // 侧面宽度
    const WIDTH = 15;
    // 斜角高度
    const OBLIQUE_ANGLE_HEIGHT = -3.6;

    const p1 = [basicsXAxis, topBasicsYAxis];
    const p2 = [basicsXAxis, bottomYAxis];
    const p3 = [basicsXAxis + WIDTH, bottomYAxis];
    const p4 = [basicsXAxis + WIDTH, topBasicsYAxis + OBLIQUE_ANGLE_HEIGHT];

    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p4[0], p4[1]);
  },
});

const topShape = echarts.graphic.extendShape({
  buildPath(ctx, shape) {
    const { topBasicsYAxis, basicsXAxis } = shape;
    // 侧面宽度
    const WIDTH = 15;
    // 斜角高度
    const OBLIQUE_ANGLE_HEIGHT = 3.6;

    const p1 = [basicsXAxis, topBasicsYAxis];
    const p2 = [basicsXAxis + WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT];
    const p3 = [basicsXAxis, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT * 2];
    const p4 = [basicsXAxis - WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT];

    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p4[0], p4[1]);
  },
});


const leftShape = echarts.graphic.extendShape({
  buildPath(ctx, shape) {
    const { topBasicsYAxis, bottomYAxis, basicsXAxis } = shape;
    // 侧面宽度
    const WIDTH = 15;
    // 斜角高度
    const OBLIQUE_ANGLE_HEIGHT = 3.6;

    const p1 = [basicsXAxis - WIDTH, topBasicsYAxis - OBLIQUE_ANGLE_HEIGHT];
    const p2 = [basicsXAxis - WIDTH, bottomYAxis];
    const p3 = [basicsXAxis, bottomYAxis];
    const p4 = [basicsXAxis, topBasicsYAxis];

    ctx.moveTo(p1[0], p1[1]);
    ctx.lineTo(p2[0], p2[1]);
    ctx.lineTo(p3[0], p3[1]);
    ctx.lineTo(p4[0], p4[1]);
  },
});



function initEcharts() {
  const shapeName = echarts.graphic.extendShape({
    buildPath(ctx, shape) {

    }
  })
  echarts.graphic.registerShape('shapeName', shapeName);

  echarts.graphic.registerShape("leftShape", leftShape);
  echarts.graphic.registerShape("rightShape", rightShape);
  echarts.graphic.registerShape("topShape", topShape);


  const option = props.options;

  for (let s of (option.series as Array)) {
    if(s.type=="3DBar") {
      s.type = 'custom';
      s.renderItem = renderFunction(s.bar3DStyle,150);
    }
    if(s.type=="3DBar2") {
      s.type = 'custom';
      s.renderItem = renderFunction2(s.bar3DStyle);
    }
  }
  const myChart1 = echarts.init(document.getElementById("test"));// 图标初始化
  myChart1.setOption(option);// 渲染页面
//随着屏幕大小调节图表
  window.addEventListener("resize", () => {
    myChart1.resize();
  });



}




</script>

<style scoped>

</style>
