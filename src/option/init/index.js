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
import { isArray, isString } from '../../util/type';
import Theme from '../../feature/token';
import { DEFAULT_THEME_NAME } from '../../util/constants'

/**
 * 设置默认主题
 * @param {外部传入的配置} iChartOption
 */
function setDefaultTheme(iChartOption) {
  iChartOption.theme = iChartOption.theme || Theme.themeName || DEFAULT_THEME_NAME;
}

/**
 * 设置默认颜色集合
 * @param {外部传入的配置} iChartOption
 */
function setDefaultColor(iChartOption) {
  if (!iChartOption.color) {
    iChartOption.color = Theme.config.colorGroup;
  }
}

/**
 * 给x轴赋值key，兼容旧版本属性
 */
function setXAxisKeyName(xAxisItem, defaultKey) {
  let keyName = defaultKey;
  if (isString(xAxisItem.data)) {
    keyName = xAxisItem.data;
    delete xAxisItem.data;
  }
  if (xAxisItem.keyName) {
    keyName = xAxisItem.keyName;
  }
  xAxisItem.keyName = keyName;
}

/**
 * 线性图/条形图专用，设置默认x轴Key值,默认取第一个数据的第一个Key
 * @param {外部传入的配置} iChartOption
 */
function setDefaultXAxis(iChartOption) {
  const data = iChartOption.data;
  let keyName;
  if (data && data.length > 0) {
    const keys = Object.keys(data[0]);
    if (keys.length > 0) {
      keyName = keys[0];
    }
  }
  if (isArray(iChartOption.xAxis)) {
    iChartOption.xAxis.forEach(xAxisItem => {
      setXAxisKeyName(xAxisItem, keyName);
    });
  } else if (typeof iChartOption.xAxis == 'object') {
    setXAxisKeyName(iChartOption.xAxis, keyName);
    iChartOption.xAxis = [iChartOption.xAxis];
  } else {
    iChartOption.xAxis = [{ keyName }];
  }
}

/**
 * 线性图/条形图专用---设置图表的四周padding值
 * @param {外部传入的配置} iChartOption
 */
function setChartPadding(iChartOption) {
  const defaultPadding = [50, 20, 50, 20];
  const padding = iChartOption.padding || iChartOption.chartPadding;
  if (!padding) {
    iChartOption.padding = defaultPadding;
  } else if (padding.length === 1) {
    iChartOption.padding = [padding[0], 20, padding[0], 20];
  } else if (padding.length === 2) {
    iChartOption.padding = [padding[0], padding[1], padding[0], padding[1]];
  } else if (padding.length === 3) {
    iChartOption.padding = [padding[0], padding[1], padding[2], padding[1]];
  } else {
    iChartOption.padding = padding;
  }
  delete iChartOption.chartPadding;
}

/**
 * 设置图表的Legend属性
 * @param {外部传入的配置} iChartOption
 */
function setDefaultLegend(iChartOption) {
  if (!iChartOption.legend) {
    iChartOption.legend = {
      show: true,
      position: {
        left: 'center',
        bottom: 14,
      },
      orient: 'horizontal',
    };
  }
  if (iChartOption.legend.show === undefined) {
    iChartOption.legend.show = false;
  }
  if (!iChartOption.legend.orient) {
    iChartOption.legend.orient = 'horizontal';
  }
  if (!iChartOption.legend.position) {
    iChartOption.legend.position = {
      left: 'center',
      bottom: 15,
    };
  }
}

/**
 * 设置图表区域缩放功能
 * @param {外部传入的配置} iChartOption
 */
function setDefaultDataZoom(iChartOption) {
  if (isArray(iChartOption.dataZoom)) {
    iChartOption.dataZoom.forEach(item => {
      if (item.show === undefined) {
        item.show = false
      }
      if (!item.position) {
        item.position = {
          left: 'center',
          bottom: 20,
        };
      }
    })
    return
  }
  if (!iChartOption.dataZoom) {
    iChartOption.dataZoom = {
      show: false,
      position: {
        left: 40,
        bottom: 18,
      },
    };
  }
  if (iChartOption.dataZoom.show === undefined) {
    iChartOption.dataZoom.show = false;
  }
  if (!iChartOption.dataZoom.position) {
    iChartOption.dataZoom.position = {
      left: 'center',
      bottom: 20,
    };
  }
}

/**
 * 筛选符合规则的data
 * @param {外部传入的配置} iChartOption
 */
function filterDisplayData(iChartOption) {
  if (!iChartOption.data || !iChartOption.dataRules || !iChartOption.dataRules.display) return;
  let displayData = iChartOption.dataRules.display;
  let data = iChartOption.data;
  let newData = [];
  if (displayData.length > 0) {
    data.forEach(item => {
      let obj = {};
      for (const key in item) {
        if (Object.hasOwnProperty.call(item, key)) {
          const element = item[key];
          if (iChartOption.xAxis && (key === iChartOption.xAxis[0].keyName || key === iChartOption.xAxis.name)) {
            obj[key] = element
          }
          if (displayData.includes(key)) {
            obj[key] = element
          }
        }
      }
      newData.push(obj)
    })
    iChartOption.data = newData;
  }
}

// 初始化 iChartOption 的默认配置
function init(iChartOption) {
  setDefaultTheme(iChartOption);
  setDefaultColor(iChartOption);
  setDefaultXAxis(iChartOption);
  setChartPadding(iChartOption);
  setDefaultLegend(iChartOption);
  setDefaultDataZoom(iChartOption);
  filterDisplayData(iChartOption);
  return iChartOption;
}

export default init;
