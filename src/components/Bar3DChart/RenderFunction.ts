export default (style, columnGap) => {
  return function renderItem(params, api) {
    const { seriesIndex } = params;
    // console.log("seriesIndex",seriesIndex)
    // // 计算每个柱状图的宽度（包括列间距）
    // const itemWidth = api.size([0, 1])[0] + columnGap;
    // console.log("1",itemWidth)
    //
    // // 计算当前柱状图的起始位置
    // const startX = api.coord([api.value(seriesIndex), 0])[0] - itemWidth / 2;
    // console.log("2",startX)

    // 计算基础坐标
    const basicsCoord = api.coord([api.value(seriesIndex), api.value(1)]);
    // console.log("x",api.value(seriesIndex))
    // console.log("y",api.value(1))
    // console.log("basic",basicsCoord);
    const topBasicsYAxis = basicsCoord[1];
    const basicsXAxis = basicsCoord[0] - 20;
    // console.log("xpx",basicsXAxis);
    const bottomYAxis = api.coord([api.value(seriesIndex), 0])[1];
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
