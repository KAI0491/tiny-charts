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
/** 以下token的命名参考echarts文档的名称*/
/**
 *  根据mapToken获取modelToken
 * @param {object} aliasToken
 */
function getModelToken(aliasToken) {
  const {
    colorLabel,
    colorBgContainerSecondary,
    colorIcon,
    colorAxisLine,
    colorIconInactive,
    colorAxisTickLine,
    colorAxisSplitLine,
    colorAxisPointerLine,
    colorShadowHover,
    colorShadowContainer,
    shadowOffsetYContainer,
    shadowBlurContainer,
    titleSpace,
    titleFontSize,
    subtitleFontSize,
    subtextFontSize,
    axisLabelSpace,
    axisLineType,
    axisLineWidth,
    axisTickLineType,
    axisSplitLineType,
    axisTickLineWidth,
    axisSplitLineWidth,
    axisPointerLineType,
    axisPointerLineWidth,
    axisSplitLineTypeSecondary,
    textFontSize,
    axisNameSpace,
    legendSpace,
    legendItemSize,
    legendCircleItemSize,
    containerGap,
    lineWidthSecondary,
    borderWidthNone,
    containerBoderRadius,
    paddingNone,
    paddingLG,
    colorZoomHandle,
    colorShadowHandle,
    colorZoomHandleBorder,
    colorAxisSplitLineSecondary,
    colorZoomDataAreaFill,
    axisLineWidthSecondary,
    labelFontSize,
    colorAxisLabel,
    colorNone,
    colorTextName,
    colorTitle,
    colorZoomBg,
    colorSubTitle,
    colorZoomDataAreaBorder,
    colorZoomBorder,
    colorZoomFill,
    colorZoomSelectDataAreaFill,
    colorZoomSelectDataAreaBorder,
    shadowOffsetYHandle,
    shadowBlurHandle,
    zoomDataAreaBorderWidth
  } = aliasToken;

  return {
    /** -----标题------ */
    // 主副标题之前的间距
    titleItemGap: titleSpace,
    // 标题文本颜色
    titleTextColor: colorTitle,
    // 标题副文本颜色
    titleSubTextColor: colorSubTitle,
    // 标题文本字号
    titleTextFontSize: titleFontSize,
    // 标题副文本字号
    titleSubtextFontSize: subtitleFontSize,

    /** -----图例------ */
    // 图例文本颜色
    legendTextColor: colorTextName,
    // 图例富文本颜色
    legendTextRichColor: colorTextName,
    // 图例文本字号
    legendTextFontSize: subtextFontSize,
    // 图例富文本颜色
    legendTextRichFontSize: subtextFontSize,
    // 图例文本的padding
    legendTextPadding: [containerGap, 0, 0, 0],
    // 图例富文本的padding
    legendTextRichPadding: [containerGap, 0, 0, 0],
    // 图例每项之间的间隔
    legendItemGap: legendSpace,
    // 圆形图例时每项的宽度
    legendItemWidth: legendItemSize * 6,
    // 圆形图例时每项的高度
    legendCircleItemHeight: legendCircleItemSize,
    // 方形图例时每项的高度
    legendReactItemHeight: legendItemSize,
    // 图例翻页文本颜色
    legendPageTextColor: colorLabel,
    // 图例翻页图标激活颜色
    legendPageIconColor: colorIcon,
    // 图例翻页图标失效颜色
    legendPageIconInactiveColor: colorIconInactive,
    // 图例失效颜色
    legendInactiveColor: colorIconInactive,
    // 图例失效边框颜色
    legendInactiveBorderColor: colorNone,
    // 图例边框宽度
    legendBorderWidth: borderWidthNone,
    // 图例失效边框宽度
    legendInactiveBorderWidth: borderWidthNone,
    // 图例图形边框宽度
    legendItemBorderWidth: borderWidthNone,
    // 图例的padding
    legendPadding: paddingNone,

    /** -----x轴------ */
    // x轴名称间距
    xAxisNameGap: axisNameSpace,
    // x轴名称颜色
    xAxisNameColor: colorTextName,
    // x轴名称字号
    xAxisNameFontSize: subtextFontSize,
    // x轴标签文本颜色
    xAxisLabelColor: colorAxisLabel,
    // x轴标签文本字号
    xAxisLabelFontSize: subtextFontSize,
    // x轴轴线颜色
    xAxisLineColor: colorAxisLine,
    // x轴轴线粗细
    xAxisLineWidth: axisLineWidth,
    // x轴轴线类别
    xAxisLineType: axisLineType,
    // x轴刻度线颜色
    xAxisTickLineColor: colorAxisTickLine,
    // x轴刻度线粗细
    xAxisTickLineWidth: axisTickLineWidth,
    // x轴刻度线类别
    xAxisTickLineType: axisTickLineType,
    // x轴分隔线颜色
    xAxisSplitLineColor: colorAxisSplitLine,
    // x轴分隔线粗细
    xAxisSplitLineWidth: axisSplitLineWidth,
    // x轴分隔线类别
    xAxisSplitLineType: axisSplitLineType,

    /** -----y轴------ */
    // y轴名称间距
    yAxisNameGap: axisNameSpace,
    // y轴名称颜色
    yAxisNameColor: colorTextName,
    // y轴名称字号
    yAxisNameFontSize: subtextFontSize,
    // y轴标签文本颜色
    yAxisLabelColor: colorAxisLabel,
    // y轴标签文本字号
    yAxisLabelFontSize: subtextFontSize,
    // y轴轴线颜色
    yAxisLineColor: colorAxisLine,
    // y轴轴线粗细
    yAxisLineWidth: axisLineWidth,
    // y轴轴线类别
    yAxisLineType: axisLineType,
    // y轴刻度线颜色
    yAxisTickLineColor: colorAxisTickLine,
    // y轴刻度线粗细
    yAxisTickLineWidth: axisTickLineWidth,
    // y轴刻度线类别
    yAxisTickLineType: axisTickLineType,
    // y轴分隔线颜色
    yAxisSplitLineColor: colorAxisSplitLine,
    // y轴分隔线粗细
    yAxisSplitLineWidth: axisSplitLineWidth,
    // y轴分隔线类别
    yAxisSplitLineType: axisSplitLineType,

    /** -----radar轴------ */
    // radar轴名称颜色
    radarAxisNameColor: colorTextName,
    // radar轴名字号
    radarAxisNameFontSize: subtextFontSize,
    // radar轴标签文本颜色
    radarAxisLabelColor: colorAxisLabel,
    // radar轴标签文本字号
    radarAxisLabelFontSize: subtextFontSize,
    // radar轴线颜色
    radarAxisLineColor: colorAxisLine,
    // radar轴线粗细
    radarAxisLineWidth: axisLineWidthSecondary,
    // radar轴线类别
    radarAxisLineType: axisLineType,
    // radar轴刻度线颜色
    radarAxisTickLineColor: colorAxisTickLine,
    // radar轴刻度线粗细
    radarAxisTickLineWidth: axisTickLineWidth,
    // radar轴刻度线类别
    radarAxisTickLineType: axisTickLineType,
    // radar轴分隔线颜色
    radarSplitLineColor: colorAxisSplitLineSecondary,
    // radar轴分隔线粗细
    radarSplitLineWidth: axisSplitLineWidth,
    // radar轴分隔线类别
    radarSplitLineType: axisSplitLineTypeSecondary,

    /** -----极坐标系角度轴------ */
    // 角度轴标签文本颜色
    angleAxisLabelColor: colorAxisLabel,
    // 角度轴标签文本字号
    angleAxisLabelFontSize: subtextFontSize,
    // 角度轴轴线颜色
    angleAxisLineColor: colorAxisLine,
    // 角度轴轴线粗细
    angleAxisLineWidth: axisLineWidthSecondary,
    // 角度轴轴线类别
    angleAxisLineType: axisLineType,
    // 角度轴刻度线颜色
    angleAxisTickLineColor: colorAxisTickLine,
    // 角度轴刻度线粗细
    angleAxisTickLineWidth: axisTickLineWidth,
    // 角度轴刻度线类别
    angleAxisTickLineType: axisTickLineType,
    // 角度轴分隔线颜色
    angleAxisSplitLineColor: colorAxisSplitLine,
    // 角度轴分隔线粗细
    angleAxisSplitLineWidth: axisSplitLineWidth,
    // 角度轴分隔线类别
    angleAxisSplitLineType: axisSplitLineTypeSecondary,


    /** -----极坐标系径向轴------ */
    // 径向轴标签间距
    radiusAxisLabelGap: axisLabelSpace,
    // 径向轴标签颜色
    radiusAxisLabelColor: colorAxisLabel,
    // 径向轴标签字号
    radiusAxisLabelFontSize: subtextFontSize,
    // 径向轴轴线颜色
    radiusAxisLineColor: colorAxisLine,
    // 径向轴轴线粗细
    radiusAxisLineWidth: axisLineWidth,
    // 径向轴轴线类别
    radiusAxisLineType: axisLineType,
    // 径向轴刻度线颜色
    radiusAxisTickLineColor: colorAxisTickLine,
    // 径向轴刻度线粗细
    radiusAxisTickLineWidth: axisTickLineWidth,
    // 径向轴刻度线类别
    radiusAxisTickLineType: axisTickLineType,
    // 径向轴分隔线颜色
    radiusAxisSplitLineColor: colorAxisSplitLineSecondary,
    // 径向轴分隔线粗细
    radiusAxisSplitLineWidth: axisSplitLineWidth,
    // 径向轴分隔线类别
    radiusAxisSplitLineType: axisSplitLineType,

    /** -----tooltip------ */
    // tip背景
    tooltipBg: colorBgContainerSecondary,
    // tip文本颜色
    tooltipTextColor: colorLabel,
    // tip文本字号
    tooltipTextFontSize: textFontSize,
    // tip圆角
    tooltipBorderRaduis: containerBoderRadius,
    // tip坐标轴指示器线颜色
    tooltipAxisPointerLineColor: colorAxisPointerLine,
    // tip坐标轴指示器线粗细
    tooltipAxisPointerLineWidth: axisPointerLineWidth,
    // tip坐标轴指示器线类别
    tooltipAxisPointerLineType: axisPointerLineType,
    // tip坐标轴指示器阴影
    tooltipAxisPointerShadowColor: colorShadowHover,
    // tip阴影
    tooltipShadowColor: colorShadowContainer,
    // tip阴影垂直方向偏移
    tooltipShadowOffsetY: shadowOffsetYContainer,
    // tip阴影模糊
    tooltipShadowBlur: shadowBlurContainer,
    // tip边框
    tooltipBorderWidth: borderWidthNone,
    // tip的padding
    tooltipPadding: paddingLG,

    /** -----visualMap------ */
    // 文本颜色
    visualMapTextColor: colorLabel,
    // 文本字号
    visualMapTextFontSize: labelFontSize,

    /** ----- markLine------ */
    // 标记线粗细
    markLineWidth: lineWidthSecondary,
    // 标记线高亮粗细
    markLineEmphasisWidth: lineWidthSecondary,
    // 标记线文本字号
    markLineLabelFontSize: labelFontSize,

    /** ----- dataZoom------ */
    // dataZoom边框色
    dataZoomBorderColor: colorZoomBorder,
    // dataZoom背景色
    dataZoomBackgroundColor: colorZoomBg,
    // 手柄中心填充色
    dataZoomHandleColor: colorZoomHandle,
    // 手柄外框色
    dataZoomHandleBorderColor: colorZoomHandleBorder,
    // 手柄阴影色
    dataZoomHandleShadowColor: colorShadowHandle,
    // 手柄hover时中心填充色
    dataZoomEmphasisHandleColor: colorZoomHandle,
    // 手柄hover时外框色
    dataZoomEmphasisHandleBorderColor: colorZoomHandleBorder,
    // 选中区域外的线条颜色
    dataZoomDataBackgroundLineColor: colorZoomDataAreaBorder,
    // 选中区域外的面积颜色
    dataZoomDataBackgroundAreaColor: colorZoomDataAreaFill,
    // 数据区域的边框
    dataZoomDataBackgroundLineWidth: zoomDataAreaBorderWidth,
    // 选中区域数据颜色
    dataZoomSelectedDataAreaColor: colorZoomSelectDataAreaFill,
    // 选中区域边框颜色
    dataZoomSelectedDataLineColor: colorZoomSelectDataAreaBorder,
    // 选中区域填充颜色
    dataZoomFillColor: colorZoomFill,
    // 阴影y偏移
    dataZoomHandleShadowOffsetY: shadowOffsetYHandle,
    // 阴影模糊
    dataZoomHandleShadowBlur: shadowBlurHandle,
    // min形态
    // dataZoom边框色
    dataZoomBorderColorMini: colorNone,
    // 手柄阴影色
    dataZoomHandleShadowColorMini: colorShadowHandle,

    /** ----- animation------ */
    // 是否开启动画 
    animation: true,
    // 是否开启动画的阈值
    animationThreshold: 2000,
    // 初始动画的时长
    animationDuration: 750,
    // 初始动画的缓动效果
    animationEasing: 'quinticInOut',
    // 初始动画的延迟
    animationDelay: 0,
    // 数据更新动画的时长
    animationDurationUpdate: 300,
    // 数据更新动画的缓动效果
    animationEasingUpdate: 'quinticInOut',
    // 数据更新动画的延迟
    animationDelayUpdate: 0,
    // 状态切换的动画时长
    stateAnimationDuration: 300,
    // 状态切换的动画缓动
    stateAnimationEasing: 'quinticInOut',
  };
}

export default getModelToken;
