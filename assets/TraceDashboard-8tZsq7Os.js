import { a as X, g as Y } from "./index-BM3jlCjo.js";
import { g as Z, d as ee } from "./index-CqfVstIv.js";
import { u as ae } from "./vue-router-QfQVtIJ1.js";
import { T as te } from "./TraceTopologyDiagram-D4-N29i0.js";
import { a as le, E as oe } from "./element-plus-B8zTVPh2.js";
import { _ as ne } from "./index-COTCo5V6.js";
import { E as re, r as m, c as E, T as z, U as D, a7 as a, a1 as t, al as o, a5 as f, W as v, V as q, P as se, ai as ue, u as ie } from "./@vue-cXHrMgsi.js";
import "./axios-B8_nURbH.js";
import "./nprogress-Du6PRFDQ.js";
import "./dayjs-DuEr9S7h.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./@vueuse-GXTs7r9P.js";
import "./dateUtil-BAIp0Nbc.js";
import "./echarts-D2MAS9xN.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-CAoIEdoS.js";
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
const ce = { class: "trace-main-container" }, pe = { class: "endpoint-div" }, de = { class: "table-div" }, me = { class: "pagination-div" }, ve = { __name: "TraceDashboard", setup(_e) {
  const N = m(true), u = m([]), h = m(), i = ae(), x = E({ lazy: true, async lazyLoad(l, e) {
    const s = [], { level: I } = l;
    if (I === 0) {
      const d = await X();
      if (d === null) return;
      d.result.map((r) => ({ leaf: false, value: r, label: r })).forEach((r) => {
        s.push(r);
      });
    } else if (I === 1) {
      const d = await Y({ query: "", namespace: l.value, pageNum: 1, pageSize: 1e3 });
      if (d === null) return;
      d.result.data.map((r) => ({ leaf: true, value: r.name, label: r.name === "" ? "null" : r.name })).forEach((r) => {
        s.push(r);
      });
    }
    e(s);
  } }), c = E({ serviceName: "", pageNum: 1, pageSize: 10, startTimestamp: "", endTimestamp: "" }), w = m(), g = m("");
  re(async () => {
    i.currentRoute.value.query.serviceName && (c.serviceName = i.currentRoute.value.query.serviceName, h.value = ["default", i.currentRoute.value.query.serviceName], await y()), i.currentRoute.value.query.traceId && (_.value.includes(i.currentRoute.value.query.traceId) || (_.value = [], _.value.push(i.currentRoute.value.query.traceId)), g.value = i.currentRoute.value.query.traceId), i.currentRoute.value.query.serviceName && i.currentRoute.value.query.traceId && await w.value.getTopology(g.value, N.value, null, null);
  });
  const R = m(0), y = async () => {
    p.value.splice(0, p.value.length), b.splice(0, b.length), R.value = 0, w.value.disposeSpanTopology(), _.value = [], g.value = "", c.serviceName = h.value[1];
    const l = JSON.parse(JSON.stringify(c));
    u.value != null && u.value.length === 2 ? (l.startTimestamp = Date.parse(u.value[0]), l.endTimestamp = Date.parse(u.value[1])) : (l.startTimestamp = null, l.endTimestamp = null);
    const e = await Z(l);
    e === null || e.result.length === 0 || (R.value = e.total, p.value.splice(0, p.value.length), b.splice(0, b.length), e.result.forEach((s) => {
      p.value.push(s);
    }), p.value.forEach((s) => {
      b.push(s.endPoint);
    }), _.value = p.value[0].traceIds, c.pageNum = l.pageNum);
  };
  let _ = m([]);
  const p = m([{ endPoint: {}, traceIds: [] }]), b = E([]), A = async (l) => {
    c.pageSize = l, await y();
  }, L = async (l) => {
    c.pageNum = l, await y();
  }, B = (l) => {
    p.value.forEach((e) => {
      e.endPoint === l && (_.value = e.traceIds);
    });
  }, k = async () => {
    let l = null, e = null;
    u.value != null && u.value.length === 2 && (l = Date.parse(u.value[0]), e = Date.parse(u.value[1])), await w.value.getTopology(g.value, N.value, l, e);
  }, P = async () => {
    const l = le.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await ee();
      if (e === null || e.result.length === 0) return;
      oe.success("\u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E\u6210\u529F");
    } finally {
      l.close(), i.go(0);
    }
  };
  return (l, e) => {
    const s = o("el-breadcrumb-item"), I = o("el-breadcrumb"), d = o("el-button"), r = o("el-tooltip"), C = o("el-row"), U = o("el-cascader"), S = o("el-form-item"), $ = o("el-date-picker"), F = o("el-form"), J = o("el-divider"), T = o("el-table-column"), M = o("ArrowRightBold"), O = o("el-icon"), Q = o("el-table"), W = o("el-pagination"), V = o("el-col"), j = o("el-option"), G = o("el-select"), H = o("el-switch"), K = o("el-card");
    return z(), D("div", ce, [a(C, { class: "breadcrumb-header-row" }, { default: t(() => [a(I, { "separator-icon": "ArrowRight" }, { default: t(() => [a(s, { to: { path: "/main" } }, { default: t(() => [...e[6] || (e[6] = [f(" \u4E3B\u9875 ", -1)])]), _: 1 }), a(s, null, { default: t(() => [...e[7] || (e[7] = [f(" \u94FE\u8DEF ", -1)])]), _: 1 }), a(s, { to: { path: "/main/trace/dashboard" } }, { default: t(() => [...e[8] || (e[8] = [f(" \u8C03\u7528\u94FE\u8DEF ", -1)])]), _: 1 })]), _: 1 }), a(r, { placement: "bottom" }, { content: t(() => [...e[9] || (e[9] = [f(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A", -1), v("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E", -1), f("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 ", -1), v("br", null, null, -1), f(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ", -1)])]), default: t(() => [a(d, { type: "danger", onClick: P }, { default: t(() => [...e[10] || (e[10] = [f(" \u5220\u9664\u6240\u6709\u94FE\u8DEF\u6570\u636E ", -1)])]), _: 1 })]), _: 1 })]), _: 1 }), a(K, { class: "table-card" }, { default: t(() => [a(C, { class: "cascader-div" }, { default: t(() => [a(F, { inline: true }, { default: t(() => [a(S, { label: "\u670D\u52A1\u540D\u79F0" }, { default: t(() => [a(U, { placeholder: "\u8BF7\u9009\u62E9\u5BF9\u5E94\u670D\u52A1", modelValue: h.value, "onUpdate:modelValue": e[0] || (e[0] = (n) => h.value = n), clearable: "", props: x, "show-all-levels": false, onChange: y }, null, 8, ["modelValue", "props"])]), _: 1 }), a(S, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: t(() => [a($, { modelValue: u.value, "onUpdate:modelValue": e[1] || (e[1] = (n) => u.value = n), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4", onClear: y, onChange: y }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })]), _: 1 }), a(J), a(C, { gutter: 10, style: { "margin-top": "2%" } }, { default: t(() => [a(V, { span: 8 }, { default: t(() => [e[11] || (e[11] = v("div", null, "\u8FFD\u8E2A\u7AEF\u70B9\u4FE1\u606F", -1)), v("div", pe, [v("div", de, [a(Q, { data: b, stripe: "" }, { default: t(() => [a(T, { prop: "serviceName", label: "\u670D\u52A1\u540D\u79F0" }), a(T, { prop: "ip", label: "IP\u5730\u5740" }), a(T, { prop: "port", label: "\u7AEF\u53E3\u53F7" }), a(T, { prop: "latency", label: "\u65F6\u5EF6(ms)" }), a(T, { fixed: "right", label: "\u7ED8\u56FE" }, { default: t((n) => [a(r, { effect: "light", content: "\u67E5\u770BEndpoint\u6240\u5728\u94FE\u8DEF\u4FE1\u606F", placement: "top", enterable: false }, { default: t(() => [a(d, { type: "primary", circle: "", size: "small", onClick: (fe) => B(n.row) }, { default: t(() => [a(O, null, { default: t(() => [a(M)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)]), _: 1 })]), _: 1 }, 8, ["data"])]), v("div", me, [(z(), q(W, { size: "small", key: c.pageNum, "current-page": c.pageNum, "page-size": c.pageSize, "page-sizes": [10, 20, 50, 100], layout: "total, pager, sizes", total: R.value, onSizeChange: A, onCurrentChange: L }, null, 8, ["current-page", "page-size", "total"]))])])]), _: 1 }), a(V, { span: 16 }, { default: t(() => [v("div", null, [e[12] || (e[12] = v("div", null, "Span\u8C03\u7528\u56FE", -1)), a(C, { gutter: 15 }, { default: t(() => [a(V, { span: 12 }, { default: t(() => [a(S, { label: "TraceId" }, { default: t(() => [a(G, { modelValue: g.value, "onUpdate:modelValue": e[2] || (e[2] = (n) => g.value = n), placeholder: "\u8BF7\u5728\u5DE6\u4FA7\u9009\u62E9Endpoint\u540E\uFF0C\u9009\u62E9TraceId", style: { width: "90%" }, clearable: "", onChange: e[3] || (e[3] = (n) => k()) }, { default: t(() => [(z(true), D(se, null, ue(ie(_), (n) => (z(), q(j, { key: n, label: n, value: n }, null, 8, ["label", "value"]))), 128))]), _: 1 }, 8, ["modelValue"])]), _: 1 })]), _: 1 }), a(V, { span: 12 }, { default: t(() => [a(S, null, { default: t(() => [a(H, { "active-text": "\u4EC5\u67E5\u770B\u5C5E\u4E8E\u5F53\u524Dservice\u7684span", "inactive-text": "\u67E5\u770B\u5F53\u524Dtrace\u4E0B\u7684\u6240\u6709span", modelValue: N.value, "onUpdate:modelValue": e[4] || (e[4] = (n) => N.value = n), size: "small", onChange: e[5] || (e[5] = (n) => k()) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 })]), _: 1 })]), a(te, { ref_key: "traceTopologyDiagramRef", ref: w, "service-name": h.value }, null, 8, ["service-name"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, Me = ne(ve, [["__scopeId", "data-v-aeacb845"]]);
export {
  Me as default
};
