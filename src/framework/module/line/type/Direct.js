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
// 直连线
export default class Direct {

  constructor() { }

  creatPath(data) {
    const { startConnector, endConnector } = data;
    let m = `M${startConnector.absolute.x} ${startConnector.absolute.y}`;
    let l = `L${endConnector.absolute.x} ${endConnector.absolute.y}`;
    return `${m} ${l}`;
  }
}
