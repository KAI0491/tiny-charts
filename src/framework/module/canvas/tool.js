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
class Tool {

    constructor(container, option) {}

    // 创建操作按钮
    createTools({
        enlarge,
        center,
        shrunk,
        scale
    }, dom, self) {
        this.dom = dom;
        let containerRect = dom.getBoundingClientRect();
        let baseEnlarge = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+Cjx0aXRsZT4yMDIxMDcwMl9WazVnNU5aUjQ0WllWTVZoWmdWbzVZNDRZRlpOMVpWWlVKVlJaaFVjPC90aXRsZT4KPGcgaWQ9Iumhtemdoi0xIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICA8ZyBpZD0i5Y2V55So5oi36K+m5oOFLeWFqOe9keaLk+aJkSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE4NzguMDAwMDAwLCAtODkwLjAwMDAwMCkiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICA8ZyBpZD0i57yW57uELTExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxODcyLjAwMDAwMCwgODgwLjAwMDAwMCkiPgogICAgICA8ZyBpZD0iMjAyMTA3MDJfVms1ZzVOWlI0NFpZVk1WaFpnVm81WTQ0WUZaTjFaVlpVSlZSWmhVYyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDEwLjAwMDAwMCkiPgogICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIGZpbGw9IiNEOEQ4RDgiIG9wYWNpdHk9IjAiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgLz4KICAgICAgICA8cGF0aCBkPSJNMTAuNSwzIEMxMC45MjczNjMyLDMgMTEuMjc5NTg5MywzLjMyMTcwMDE2IDExLjMyNzcyNjksMy43MzYxNDkwNiBMMTEuMzMzMzMzMywzLjgzMzMzMzMzIEwxMS4zMzMzMzMzLDkuNjY2NjY2NjcgTDE3LjE2NjY2NjcsOS42NjY2NjY2NyBDMTcuNjI2OTAzOSw5LjY2NjY2NjY3IDE4LDEwLjAzOTc2MjggMTgsMTAuNSBDMTgsMTAuOTI3MzYzMiAxNy42NzgyOTk4LDExLjI3OTU4OTMgMTcuMjYzODUwOSwxMS4zMjc3MjY5IEwxNy4xNjY2NjY3LDExLjMzMzMzMzMgTDExLjMzMzMzMzMsMTEuMzMzMzMzMyBMMTEuMzMzMzMzMywxNy4xNjY2NjY3IEMxMS4zMzMzMzMzLDE3LjYyNjkwMzkgMTAuOTYwMjM3MywxOCAxMC41LDE4IEMxMC4wNzI2MzY4LDE4IDkuNzIwNDEwNjcsMTcuNjc4Mjk5OCA5LjY3MjI3MzA4LDE3LjI2Mzg1MDkgTDkuNjY2NjY2NjcsMTcuMTY2NjY2NyBMOS42NjY2NjY2NywxMS4zMzMzMzMzIEwzLjgzMzMzMzMzLDExLjMzMzMzMzMgQzMuMzczMDk2MDQsMTEuMzMzMzMzMyAzLDEwLjk2MDIzNzMgMywxMC41IEMzLDEwLjA3MjYzNjggMy4zMjE3MDAxNiw5LjcyMDQxMDY3IDMuNzM2MTQ5MDYsOS42NzIyNzMwOCBMMy44MzMzMzMzMyw5LjY2NjY2NjY3IEw5LjY2NjY2NjY3LDkuNjY2NjY2NjcgTDkuNjY2NjY2NjcsMy44MzMzMzMzMyBDOS42NjY2NjY2NywzLjM3MzA5NjA0IDEwLjAzOTc2MjgsMyAxMC41LDMgWiIgaWQ9IuW9oueKtue7k+WQiCIgZmlsbD0iI0ZGRkZGRiIgLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9nPgo8L3N2Zz4=';
        let baseCenter = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+MjAyMzAyMDdfVnBWcFZoMVFaZzFsMEFZNDVsWk1aVjBjMU5ZYzR4VTBaTVp0NVFZdzwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljZXnlKjmiLfor6bmg4Ut5YWo572R5ouT5omRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3OC4wMDAwMDAsIC05MjIuMDAwMDAwKSI+CiAgICAgICAgICAgIDxnIGlkPSLnvJbnu4QtMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4NzIuMDAwMDAwLCA4ODAuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0iMjAyMzAyMDdfVnBWcFZoMVFaZzFsMEFZNDVsWk1aVjBjMU5ZYzR4VTBaTVp0NVFZdyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi4wMDAwMDAsIDQyLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxyZWN0IGlkPSLnn6nlvaIiIHg9IjAiIHk9IjAiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIvPgogICAgICAgICAgICAgICAgICAgIDxwYXRoIGQ9Ik0yLjI5MTY2NjY3LDEzLjU0MTY2NjcgQzIuNjM2ODQ0NjMsMTMuNTQxNjY2NyAyLjkxNjY2NjY3LDEzLjgyMTQ4ODcgMi45MTY2NjY2NywxNC4xNjY2NjY3IEwyLjkxNjY2NjY3LDE1LjgzMzMzMzMgTDIuOTE2NjY2NjcsMTUuODMzMzMzMyBDMi45MTY2NjY2NywxNi40ODMwODAxIDMuNDEyNDA2NzMsMTcuMDE3MDQwNiA0LjA0NjI4MzMzLDE3LjA3NzYxMTIgTDQuMTY2NjY2NjcsMTcuMDgzMzMzMyBMNS44MzMzMzMzMywxNy4wODMzMzMzIEM2LjE3ODUxMTMsMTcuMDgzMzMzMyA2LjQ1ODMzMzMzLDE3LjM2MzE1NTMgNi40NTgzMzMzMywxNy43MDgzMzMzIEM2LjQ1ODMzMzMzLDE4LjA1MzUxMTMgNi4xNzg1MTEzLDE4LjMzMzMzMzMgNS44MzMzMzMzMywxOC4zMzMzMzMzIEw0LjE2NjY2NjY3LDE4LjMzMzMzMzMgTDQuMTY2NjY2NjcsMTguMzMzMzMzMyBDMi43ODU5NTQ3OSwxOC4zMzMzMzMzIDEuNjY2NjY2NjcsMTcuMjE0MDQ1MiAxLjY2NjY2NjY3LDE1LjgzMzMzMzMgTDEuNjY2NjY2NjcsMTQuMTY2NjY2NyBDMS42NjY2NjY2NywxMy44MjE0ODg3IDEuOTQ2NDg4NywxMy41NDE2NjY3IDIuMjkxNjY2NjcsMTMuNTQxNjY2NyBaIE0xOC4zMzMzMzMzLDE0LjE2NjY2NjcgTDE4LjMzMzMzMzMsMTUuODMzMzMzMyBMMTguMzMzMzMzMywxNS44MzMzMzMzIEMxOC4zMzMzMzMzLDE3LjIxNDA0NTIgMTcuMjE0MDQ1MiwxOC4zMzMzMzMzIDE1LjgzMzMzMzMsMTguMzMzMzMzMyBMMTQuMTY2NjY2NywxOC4zMzMzMzMzIEMxMy44MjE0ODg3LDE4LjMzMzMzMzMgMTMuNTQxNjY2NywxOC4wNTM1MTEzIDEzLjU0MTY2NjcsMTcuNzA4MzMzMyBDMTMuNTQxNjY2NywxNy4zNjMxNTUzIDEzLjgyMTQ4ODcsMTcuMDgzMzMzMyAxNC4xNjY2NjY3LDE3LjA4MzMzMzMgTDE1LjgzMzMzMzMsMTcuMDgzMzMzMyBMMTUuODMzMzMzMywxNy4wODMzMzMzIEMxNi40ODMwODAxLDE3LjA4MzMzMzMgMTcuMDE3MDQwNiwxNi41ODc1OTMzIDE3LjA3NzYxMTIsMTUuOTUzNzE2NyBMMTcuMDgzMzMzMywxNS44MzMzMzMzIEwxNy4wODMzMzMzLDE0LjE2NjY2NjcgQzE3LjA4MzMzMzMsMTMuODIxNDg4NyAxNy4zNjMxNTUzLDEzLjU0MTY2NjcgMTcuNzA4MzMzMywxMy41NDE2NjY3IEMxOC4wNTM1MTEzLDEzLjU0MTY2NjcgMTguMzMzMzMzMywxMy44MjE0ODg3IDE4LjMzMzMzMzMsMTQuMTY2NjY2NyBaIE0xOC4zMzMzMzMzLDQuMTY2NjY2NjcgTDE4LjMzMzMzMzMsNS44MzMzMzMzMyBDMTguMzMzMzMzMyw2LjE3ODUxMTMgMTguMDUzNTExMyw2LjQ1ODMzMzMzIDE3LjcwODMzMzMsNi40NTgzMzMzMyBDMTcuMzYzMTU1Myw2LjQ1ODMzMzMzIDE3LjA4MzMzMzMsNi4xNzg1MTEzIDE3LjA4MzMzMzMsNS44MzMzMzMzMyBMMTcuMDgzMzMzMyw0LjE2NjY2NjY3IEwxNy4wODMzMzMzLDQuMTY2NjY2NjcgQzE3LjA4MzMzMzMsMy41MTY5MTk5IDE2LjU4NzU5MzMsMi45ODI5NTk0MyAxNS45NTM3MTY3LDIuOTIyMzg4ODIgTDE1LjgzMzMzMzMsMi45MTY2NjY2NyBMMTQuMTY2NjY2NywyLjkxNjY2NjY3IEMxMy44MjE0ODg3LDIuOTE2NjY2NjcgMTMuNTQxNjY2NywyLjYzNjg0NDYzIDEzLjU0MTY2NjcsMi4yOTE2NjY2NyBDMTMuNTQxNjY2NywxLjk0NjQ4ODcgMTMuODIxNDg4NywxLjY2NjY2NjY3IDE0LjE2NjY2NjcsMS42NjY2NjY2NyBMMTUuODMzMzMzMywxLjY2NjY2NjY3IEwxNS44MzMzMzMzLDEuNjY2NjY2NjcgQzE3LjIxNDA0NTIsMS42NjY2NjY2NyAxOC4zMzMzMzMzLDIuNzg1OTU0NzkgMTguMzMzMzMzMyw0LjE2NjY2NjY3IFogTTYuNDU4MzMzMzMsMi4yOTE2NjY2NyBDNi40NTgzMzMzMywyLjYzNjg0NDYzIDYuMTc4NTExMywyLjkxNjY2NjY3IDUuODMzMzMzMzMsMi45MTY2NjY2NyBMNC4xNjY2NjY2NywyLjkxNjY2NjY3IEw0LjE2NjY2NjY3LDIuOTE2NjY2NjcgQzMuNTE2OTE5OSwyLjkxNjY2NjY3IDIuOTgyOTU5NDMsMy40MTI0MDY3MyAyLjkyMjM4ODgyLDQuMDQ2MjgzMzIgTDIuOTE2NjY2NjcsNC4xNjY2NjY2NyBMMi45MTY2NjY2Nyw1LjgzMjUgQzIuOTE2NjY2NjcsNi4xNzc2Nzc5NyAyLjYzNjg0NDYzLDYuNDU3NSAyLjI5MTY2NjY3LDYuNDU3NSBDMS45NDY0ODg3LDYuNDU3NSAxLjY2NjY2NjY3LDYuMTc3Njc3OTcgMS42NjY2NjY2Nyw1LjgzMjUgTDEuNjY2NjY2NjcsNC4xNjY2NjY2NyBMMS42NjY2NjY2Nyw0LjE2NjY2NjY3IEMxLjY2NjY2NjY3LDIuNzg1OTU0NzkgMi43ODU5NTQ3OSwxLjY2NjY2NjY3IDQuMTY2NjY2NjcsMS42NjY2NjY2NyBMNS44MzMzMzMzMywxLjY2NjY2NjY3IEM2LjE3ODUxMTMsMS42NjY2NjY2NyA2LjQ1ODMzMzMzLDEuOTQ2NDg4NyA2LjQ1ODMzMzMzLDIuMjkxNjY2NjcgWiIgaWQ9IuW9oueKtiIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTEzLjk1ODMzMzMsNSBMNi4wNDE2NjY2Nyw1IEM1LjQ2NjM3MDA1LDUgNSw1LjQ2NjM3MDA1IDUsNi4wNDE2NjY2NyBMNSwxMy45NTgzMzMzIEM1LDE0LjUzMzYyOTkgNS40NjYzNzAwNSwxNSA2LjA0MTY2NjY3LDE1IEwxMy45NTgzMzMzLDE1IEMxNC41MzM2Mjk5LDE1IDE1LDE0LjUzMzYyOTkgMTUsMTMuOTU4MzMzMyBMMTUsNi4wNDE2NjY2NyBDMTUsNS40NjYzNzAwNSAxNC41MzM2Mjk5LDUgMTMuOTU4MzMzMyw1IFoiIGlkPSLot6/lvoQiIGZpbGw9IiNGRkZGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgICAgICAgICAgICAgPC9nPgogICAgICAgICAgICA8L2c+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4=';
        let baseShrunk = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjBweCIgaGVpZ2h0PSIyMHB4IiB2aWV3Qm94PSIwIDAgMjAgMjAiIHZlcnNpb249IjEuMSI+CiAgICA8dGl0bGU+MjAyMTA3MDJfWThWZ1kwNDRZRTVSVUpabDVSMDQ0ODBGNXNVSTRFWXcwOVk4VmsxcDwvdGl0bGU+CiAgICA8ZyBpZD0i6aG16Z2iLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSLljZXnlKjmiLfor6bmg4Ut5YWo572R5ouT5omRIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTg3OC4wMDAwMDAsIC05NTQuMDAwMDAwKSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPGcgaWQ9Iue8lue7hC0xMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg3Mi4wMDAwMDAsIDg4MC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSIyMDIxMDcwMl9ZOFZnWTA0NFlFNVJVSlpsNVIwNDQ4MEY1c1VJNEVZdzA5WThWazFwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg2LjAwMDAwMCwgNzQuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICAgICAgPHJlY3QgaWQ9IuefqeW9oiIgZmlsbD0iI0Q4RDhEOCIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIi8+CiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTE3LjE2NjY2NjcsOSBDMTcuNjI2OTAzOSw5IDE4LDkuNDQ3NzE1MyAxOCwxMCBDMTgsMTAuNTEyODM1OCAxNy42NzgyOTk4LDEwLjkzNTUwNzIgMTcuMjYzODUwOSwxMC45OTMyNzIzIEwxNy4xNjY2NjY3LDExIEwzLjgzMzMzMzMzLDExIEMzLjM3MzA5NjA0LDExIDMsMTAuNTUyMjg0NyAzLDEwIEMzLDkuNDg3MTY0MiAzLjMyMTcwMDE2LDkuMDY0NDkyOCAzLjczNjE0OTA2LDkuMDA2NzI3NyBMMy44MzMzMzMzMyw5IEwxNy4xNjY2NjY3LDkgWiIgaWQ9IlN0cm9rZS0xIiBmaWxsPSIjRkZGRkZGIi8+CiAgICAgICAgICAgICAgICA8L2c+CiAgICAgICAgICAgIDwvZz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==';
        let stateDom = `<div class="huicharts-canvas-tools">
      <div class='huicharts-canvas-scale'>
        <div class="huicharts-canvas-tool-item huicharts-canvas-tool-enlarge" style='background-image:url(${enlarge || baseEnlarge})'></div>
        <div class='huicharts-canvas-currentVal'>${(scale * 100).toFixed(0)}%</div>
        <div class="huicharts-canvas-tool-item huicharts-canvas-tool-shrunk" style='background-image:url(${shrunk || baseShrunk})'></div>
      </div>
      <div class='huicharts-canvas-reset'>
        <div class="huicharts-canvas-tool-item huicharts-canvas-tool-center" style='background-image:url(${center || baseCenter})'></div>
      </div>
  </div>`;
        dom.insertAdjacentHTML('beforeend', stateDom);
        dom.getElementsByClassName('huicharts-canvas-tool-enlarge')[0].addEventListener('click', (e) => {
            self.bindClickScale({
                deltaY: -100,
                clientX: containerRect.left + containerRect.width / 2,
                clientY: containerRect.top + containerRect.height / 2
            });
        });
        dom.getElementsByClassName('huicharts-canvas-tool-center')[0].addEventListener('click', (e) => {
            self.reset();
        });
        dom.getElementsByClassName('huicharts-canvas-tool-shrunk')[0].addEventListener('click', (e) => {
            self.bindClickScale({
                deltaY: 100,
                clientX: containerRect.left + containerRect.width / 2,
                clientY: containerRect.top + containerRect.height / 2
            });
        });
    }
    updateVal(value) {
        const dragCurrentVal = this.dom.querySelector('.huicharts-canvas-currentVal');
        if (dragCurrentVal) dragCurrentVal.innerHTML = (value * 100).toFixed(0) + '%';
    }
}
export default Tool;