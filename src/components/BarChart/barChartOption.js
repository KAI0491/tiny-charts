/**
 * Copyright (c) 2024 - present OpenTiny HUICharts Authors.
 * Copyright (c) 2024 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */
// 柱状图柱条响应式配置
const BarChartOption = (width, option, type, stack) => {

  // 计算柱子宽度
  let barWidth;
  // 定义默认列数
  let columns = option.series.length;
  // 包含柱状图/双向柱状图只有一个柱子
  if (type === 'contain' || type === 'both-sides' || type === 'double-sides') {
    columns = 1;
  }
  //堆叠柱状图的柱子需要另外判断
  else if (type === 'stack') {
    columns = stack ? Object.keys(stack).length : 1;
  }
  else if (type === 'range' || type === 'water-fall') {
    columns = option.series.length / 2;
  }

  const rows = option.series[0]?.data?.length;
  const intervalRows = rows;

  // 柱子宽度为16px的初始间距 
  const interval = (width - (rows * columns * 16 + rows * 4 * (columns - 1))) / intervalRows

  if (interval >= 16) {
    barWidth = 16;
  }
  else {
    const flag = (width - intervalRows * 16 - rows * 4 * (columns - 1)) / (rows * columns)
    barWidth = flag > 2 ? flag : 2
  }

  // 不同系列柱子之间的距离
  let barGap;
  if (type === 'contain') {
    barGap = `-100%`;
  }
  // 柱间距离规范是4px
  else {
    barGap = `${4 / barWidth * 100}%`
  }

  option.series.forEach(item => {
    Object.assign(item, {
      barWidth,
      barGap
    });
  });
};

// 动态计算柱条宽度更新配置项
const updateWidth = (baseOption, chartInstance, iChartOption) => {
  let width;
  if (chartInstance.getModel()) {
    if (iChartOption.direction === 'horizontal') {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().height;
    } else {
      width = chartInstance.getModel().getComponent('grid').coordinateSystem.getRect().width;
    }
    BarChartOption(width, baseOption, iChartOption.type, iChartOption.stack);
  }
}

export default updateWidth;