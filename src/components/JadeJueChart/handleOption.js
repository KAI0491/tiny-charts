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
import cloneDeep from '../../util/cloneDeep';
import { getColor } from '../../util/color';
import defendXSS from '../../util/defendXSS';

const cloudThemeBarWidth={
  large: 8,
  medium: 6,
  small: 4
}

const defaultThemeBarWidth={
  large: 16,
  medium: 12,
  small: 8
}

const gap={
  large: 8,
  medium: 4,
  small: 0
}

// 主题中 线宽由线数量来决定
function setThemeBarRule(theme, data, position){
  const isCloud = theme.includes('cloud');
  let barWidth, textGap;
  if(data.length >= 5){
    barWidth = isCloud ? cloudThemeBarWidth.small: defaultThemeBarWidth.small;
    textGap = gap.small;
  }else if(data.length === 4){
    barWidth = isCloud ? cloudThemeBarWidth.medium: defaultThemeBarWidth.medium;
    textGap = gap.medium;
  }else if(data.length <= 3){
    barWidth = isCloud ? cloudThemeBarWidth.large: defaultThemeBarWidth.large;
    textGap = gap.large;
  }
  return { barWidth, textGap }
}

// 主题中 线间距为文本的行高 + 字间距（当前规范字体12 行高为20） 减去线宽 
// 计算内圈的大小，用外圈尺寸 - (lineHeight*data.length)
function setThemeRadius(iChartOption, baseOpt, chartInstance, textGap){
  const lineHeight = 20;
  const { _dom } = chartInstance;
  const { data } = iChartOption;
  const { width, height } = _dom.getBoundingClientRect();
  const canvasRadius = width > height ? height / 2 : width / 2;
  let outerRing = baseOpt.polar.radius[1];
  let innerRing;
  if(typeof outerRing === 'number'){
    innerRing = outerRing - ((lineHeight + textGap) * data.length) 
  }else if(outerRing.indexOf('%')>-1){
    outerRing = Number(outerRing.slice(0,-1)) / 100;
    innerRing = outerRing*canvasRadius - ((lineHeight + textGap) * data.length)
  }
  baseOpt.polar.radius[0] = innerRing;
}

// 配置玉玦图默认线宽为8
export function setbarWidth(iChartOption, baseOpt, chartInstance) {
  const { barWidth, theme, data, position } = iChartOption;
  // 有配置主题时，根据规范设置线宽 与 线间距
  let themeBarWidth;
  if(theme){
    let themeBarRile = setThemeBarRule(theme, data, position);
    themeBarWidth = themeBarRile.barWidth;
    // 配置了position.radius 且第一个为auto
    if(!position?.radius || position?.radius?.[0] === 'auto') setThemeRadius(iChartOption, baseOpt, chartInstance, themeBarRile.textGap)
  }
  baseOpt.series.forEach(series => {
    series.barWidth = barWidth ? barWidth : themeBarWidth || 8;
  });
}

// 配置玉玦图的起点角度及文本位置(兼容老属性startAngle及labelAlign)
export function setStartAngle(iChartOption, baseOpt) {
  if (!iChartOption?.angleAxis?.startAngle) {
    if (!iChartOption.startAngle) {
      iChartOption.startAngle = 90;
    }
    baseOpt.angleAxis.startAngle = iChartOption.startAngle;
  }
  if (!iChartOption?.radiusAxis?.axisLabel?.align) {
    if (!iChartOption.labelAlign) {
      iChartOption.labelAlign = 'right';
    }
    baseOpt.radiusAxis.axisLabel.align = iChartOption.labelAlign;
  }
}

/**
 * 为第一种数据类型单独配置legend.data和对应颜色
 * @param {*} iChartOption
 * @param {*} baseOpt
 */
export function handleLegendData(iChartOption, baseOpt) {
  const { data, color } = iChartOption;
  data.forEach(dataItem => {
    if (!dataItem.children || dataItem.children.length === 0) {
      baseOpt.legend.data = [];
    }
  });

  // 图例使用反转数据，由外向内展示图例
  const reverseData = [...data]
    .map((item, index) => {
      item.beforeReverseIndex = index;
      return item;
    })
    .reverse();
  if (Array.isArray(baseOpt.legend.data)) {
    reverseData.forEach(dataItem => {
      baseOpt.legend.data.push({
        name: dataItem.name,
        itemStyle: {
          color: getColor(color, dataItem.beforeReverseIndex),
        },
      });
    });
  }
}

function handleJadeJueFormatter(JadeJueTooltip, baseOpt, type) {
  JadeJueTooltip.formatter = params => {
    let htmlString = '';
    let value = params.data.beforeChangeValue;
    let name = params.data.name || params.name;
    if (type === 'process') {
      value = baseOpt.series[params.seriesIndex].beforeChangeValue;
      name = baseOpt.series[params.seriesIndex].name;
    }
    htmlString +=
      `<span style="display:inline-block;margin-right:5px;margin-left:8px;border-radius:50%;height:10px;">${defendXSS(name)}</span>` +
      '<br/>' +
      `<span style="display:inline-block;margin-right:5px;margin-left:8px;border-radius:50%;height:10px;width:10px;background:${defendXSS(params.color)}"></span>` +
      '<span style="display:inline-block;margin-right:5px;border-radius:50%;height:10px;">' +
      `${defendXSS(name)}</span>` +
      `<span style="display:inline-block;margin-right:8px;margin-left:25px;font-weight:bold">${defendXSS(value)}</span>`;
    return htmlString;
  };
}

// 配置悬浮提示框样式
export function setTooltip(formatter, baseOpt, type) {
  const JadeJueTooltip = cloneDeep(baseOpt.tooltip);
  if (formatter) {
    JadeJueTooltip.formatter = formatter;
  } else {
    handleJadeJueFormatter(JadeJueTooltip, baseOpt, type);
  }
  JadeJueTooltip.trigger = 'item';
  return JadeJueTooltip;
}

/**
 * 允许自定义柱体最小占比（场景不支持使用原生的barMinAngle），设置了之后，需要变更传入的data
 * @param {*} iChartOption
 * @param {*} baseOpt
 */
export function handleMinRatio(iChartOption, baseOpt, type) {
  const { barMinRatio, data, tipHtml } = iChartOption;
  if (barMinRatio) {
    const minValue = (barMinRatio * baseOpt.angleAxis.sum) / 100;
    if (type === 'process') {
      baseOpt.series.forEach(item => {
        item.beforeChangeValue = item.data[0];
        if (item.data[0] <= minValue) {
          item.data[0] = minValue;
        }
      });
    } else {
      baseOpt.series.forEach((series, index) => {
        series.data.forEach((dataItem, index_) => {
          if (series.name === dataItem.name) {
            dataItem.beforeChangeValue = dataItem.value;
            if (dataItem.value <= minValue) {
              dataItem.value = minValue;
              data[index].value = minValue;
            }
          }
        });
      });
    }
    // 配置了barMinRatio会修改data中的value值，需要重新设置tooltip进行覆盖
    baseOpt.tooltip = setTooltip(tipHtml, baseOpt, type);
  }
}
