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
import { isArray } from './type';

// 插入HTML元素
const appendHTML = (dom, child) => {
    dom.insertAdjacentHTML('beforeend', child);
};

// 插入dom元素
const appendDom = (dom, child) => {
    dom.insertAdjacentElement('beforeend', child);
};

// 创建元素
const createDom = (name) => {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
};

// 元素绑定样式
const setStyle = (dom, option) => {
    for (let i in option) {
        if (Object.hasOwnProperty.call(option, i)) {
            dom.setAttribute(i, option[i]);
        }
    }
};

//给指定dom添加class类名，classList为数组类型
function addClass(dom, classes) {
    if (isArray(classes)) {
        classes.forEach(cls => {
            dom.classList.add(cls);
        });
    } else {
        dom.classList.add(classes);
    }
}

//给指定dom添加或更改属性
function attr(dom, key, value) {
    dom.setAttribute(key, value);
}

// 判断父元素是否为指定的 class
const isParent = (targetElement, parentClass) => {
    if (targetElement === document.body) {
        return false;
    } else if (targetElement.parentNode.classList.contains(parentClass)) {
        return targetElement.parentNode;
    } else {
        return isParent(targetElement.parentNode, parentClass);
    }
}


// 计算一段字符的像素长度
const getTextWidth = (text, fontSize = 12) => {
    let result = 0;
    const ele = document.createElement('span');
    // 字符串中带有换行符时，会被自动转换成<br/>标签，若需要考虑这种情况，可以替换成空格，以获取正确的宽度
    ele.innerText = text;
    // 不同的大小和不同的字体都会导致渲染出来的字符串宽度变化，可以传入尽可能完备的样式信息
    ele.setAttribute('style', `font-size: ${fontSize}px`);
    document.documentElement.append(ele);
    result = ele.offsetWidth;
    document.documentElement.removeChild(ele);
    return result;
}


export {
    appendHTML,
    appendDom,
    createDom,
    addClass,
    attr,
    setStyle,
    isParent,
    getTextWidth
}