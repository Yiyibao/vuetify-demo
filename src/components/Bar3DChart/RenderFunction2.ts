export default (style) => {
  return function renderItem(params, api) {
    const { seriesIndex } = params;

    // console.log("我运行了")
    // console.log("series",seriesIndex)
    // console.log("x",api.value(seriesIndex))
    // 计算基础坐标
    const basicsCoord = api.coord([api.value(0), api.value(1)]);
    // console.log("x",api.value(seriesIndex))
    // console.log("y",api.value(1))
    // console.log("basic",basicsCoord);
    const topBasicsYAxis = basicsCoord[1];
    const basicsXAxis = basicsCoord[0] + 20;
    // console.log("xpx",basicsXAxis);
    const bottomYAxis = api.coord([api.value(0), 0])[1];
    // console.log("boY",bottomYAxis)

    return {
      type: "group",
      children: [
        {
          type: "leftShape",
          shape: {
            topBasicsYAxis,
            basicsXAxis,
            bottomYAxis,
          },
          style: {
            ...api.style(),
            ...style.leftStyle
          },
          // position: [startX, 0],  // 设置柱状图的起始位置
          scale: [1, 1],  // 设置柱状图的缩放比例
        },
        {
          type: "rightShape",
          shape: {
            topBasicsYAxis,
            basicsXAxis,
            bottomYAxis,
          },
          style: {
            ...api.style(),
            ...style.rightStyle
          },
          // position: [startX, 0],
          scale: [1, 1],
        },
        {
          type: "topShape",
          shape: {
            topBasicsYAxis,
            basicsXAxis,
            bottomYAxis,
          },
          style: {
            ...api.style(),
            ...style.topStyle
          },
          // position: [startX, 0],
          scale: [1, 1],

        },

      ],
    };
  };
};
