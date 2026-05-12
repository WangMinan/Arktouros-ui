import { a as T, g as x } from "./index-BM3jlCjo.js";
import { M as A, d as E } from "./MetricDiagram-B27y1Byo.js";
import { a as R, E as B } from "./element-plus-B8zTVPh2.js";
import { u as U } from "./vue-router-QfQVtIJ1.js";
import { _ as h } from "./index-COTCo5V6.js";
import { T as z, U as Q, a7 as t, a1 as a, P as F, al as r, W as u, a5 as c, r as _, c as I } from "./@vue-cXHrMgsi.js";
import "./axios-B8_nURbH.js";
import "./nprogress-Du6PRFDQ.js";
import "./dayjs-DuEr9S7h.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./@vueuse-GXTs7r9P.js";
import "./echarts-D2MAS9xN.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-CAoIEdoS.js";
import "./dateUtil-BAIp0Nbc.js";
import "./lodash-es-BJlXfrO7.js";
import "./@element-plus-_Q31Qov3.js";
import "./async-validator-CRx4dHSJ.js";
import "./@popperjs-CUumdR8o.js";
import "./@ctrl-C4Rzlq_k.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BOzNIQbj.js";
import "./pinia-Cy2NSX6c.js";
import "./pinia-plugin-persistedstate-BGP-kHEL.js";
const P = { class: "search-area" }, q = { __name: "MetricDashboard", setup(W) {
  const g = U(), s = _({ serviceName: "", metricNameLimit: 0, startTimeStamp: 0, endTimeStamp: 0 }), v = _([]), y = I({ lazy: true, async lazyLoad(i, e) {
    const n = [], { level: d } = i;
    if (d === 0) {
      const o = await T();
      if (o === null) return;
      o.result.map((l) => ({ leaf: false, value: l, label: l })).forEach((l) => {
        n.push(l);
      });
    } else if (d === 1) {
      const o = await x({ query: "", namespace: i.value, pageNum: 1, pageSize: 1e3 });
      if (o === null) return;
      o.result.data.map((l) => ({ leaf: true, value: l.name, label: l.name === "" ? "null" : l.name })).forEach((l) => {
        n.push(l);
      });
    }
    e(n);
  } }), p = _(), N = () => {
    p.value && (s.value.serviceName = p.value[1]);
  }, b = _(), V = async () => {
    const i = R.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await E();
      if (e === null || e.result.length === 0) return;
      B.success("\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E\u6210\u529F");
    } finally {
      i.close(), g.go(0);
    }
  };
  return (i, e) => {
    const n = r("el-breadcrumb-item"), d = r("el-breadcrumb"), o = r("el-button"), l = r("el-tooltip"), k = r("el-row"), w = r("el-cascader"), f = r("el-form-item"), D = r("el-input-number"), M = r("el-date-picker"), S = r("el-form"), C = r("el-divider"), L = r("el-card");
    return z(), Q(F, null, [t(k, { class: "breadcrumb-header-row" }, { default: a(() => [t(d, { "separator-icon": "ArrowRight" }, { default: a(() => [t(n, null, { default: a(() => [...e[4] || (e[4] = [u("a", { href: "/main" }, "\u4E3B\u9875", -1)])]), _: 1 }), t(n, null, { default: a(() => [...e[5] || (e[5] = [u("a", { href: "/main/metric" }, "\u6570\u503C\u6982\u89C8", -1)])]), _: 1 })]), _: 1 }), t(l, { placement: "bottom" }, { content: a(() => [...e[6] || (e[6] = [c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A", -1), u("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E", -1), c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 ", -1), u("br", null, null, -1), c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ", -1)])]), default: a(() => [t(o, { type: "danger", onClick: V }, { default: a(() => [...e[7] || (e[7] = [c(" \u5220\u9664\u6240\u6709\u6570\u503C\u6570\u636E ", -1)])]), _: 1 })]), _: 1 })]), _: 1 }), t(L, { class: "metric-card", id: "metricCardRef" }, { default: a(() => [u("div", P, [t(S, { inline: true, model: s.value, class: "demo-form-inline" }, { default: a(() => [t(f, { label: "\u670D\u52A1\u540D\u79F0" }, { default: a(() => [t(w, { placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0", modelValue: p.value, "onUpdate:modelValue": e[0] || (e[0] = (m) => p.value = m), clearable: "", props: y, "show-all-levels": false, onChange: N }, null, 8, ["modelValue", "props"])]), _: 1 }), t(f, { label: "\u56FE\u8868\u6570\u91CF" }, { default: a(() => [t(l, { effect: "light", content: "\u7F6E0\u65F6\u8868\u793A\u641C\u7D22\u670D\u52A1\u4E0B\u6240\u6709\u6570\u503C\u8BB0\u5F55", placement: "top", enterable: false }, { default: a(() => [t(D, { min: 0, modelValue: s.value.metricNameLimit, "onUpdate:modelValue": e[1] || (e[1] = (m) => s.value.metricNameLimit = m) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }), t(f, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: a(() => [t(M, { modelValue: v.value, "onUpdate:modelValue": e[2] || (e[2] = (m) => v.value = m), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), t(f, null, { default: a(() => [t(o, { type: "primary", onClick: e[3] || (e[3] = (m) => b.value.toggleMetrics()) }, { default: a(() => [...e[8] || (e[8] = [c("\u641C\u7D22", -1)])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model"])]), t(C), t(A, { ref_key: "metricDiagramRef", ref: b, metricQueryDto: s.value, startAndStopTime: v.value }, null, 8, ["metricQueryDto", "startAndStopTime"])]), _: 1 })], 64);
  };
} }, _e = h(q, [["__scopeId", "data-v-c56159d3"]]);
export {
  _e as default
};
