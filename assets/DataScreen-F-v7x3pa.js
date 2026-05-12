import { u as B, a as C } from "./@vueuse-GXTs7r9P.js";
import { u as A } from "./vue-router-QfQVtIJ1.js";
import { u as Q } from "./index-mZv_Vpis.js";
import { d as V, s as z } from "./pinia-Cy2NSX6c.js";
import { r as d, al as n, T as x, U as L, W as _, a6 as D, u as f, a7 as e, a1 as t, E as P, P as F, ai as U, V as W, a5 as $, c as H } from "./@vue-cXHrMgsi.js";
import { _ as b } from "./index-COTCo5V6.js";
import { _ as Z } from "./ServiceTopologyDiagram-DQrMqVgE.js";
import { g as q } from "./index-DDD-DYbJ.js";
import { t as J } from "./dateUtil-BAIp0Nbc.js";
import { T as K } from "./TraceTopologyDiagram-D4-N29i0.js";
import { g as X } from "./index-CqfVstIv.js";
import { M as Y } from "./MetricDiagram-B27y1Byo.js";
import { g as j } from "./index-BM3jlCjo.js";
import "./element-plus-B8zTVPh2.js";
import "./lodash-es-BJlXfrO7.js";
import "./@element-plus-_Q31Qov3.js";
import "./async-validator-CRx4dHSJ.js";
import "./@popperjs-CUumdR8o.js";
import "./@ctrl-C4Rzlq_k.js";
import "./dayjs-DuEr9S7h.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BOzNIQbj.js";
import "./pinia-plugin-persistedstate-BGP-kHEL.js";
import "./echarts-D2MAS9xN.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-CAoIEdoS.js";
import "./axios-B8_nURbH.js";
import "./nprogress-Du6PRFDQ.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
const E = V("header", () => {
  const v = d({ service: "" });
  return { currentHeader: v, resetActive: () => {
    v.value.service = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentHeader"], key: "currentHeader" } }), G = { class: "header", id: "header" }, O = { class: "l-content" }, ee = { class: "r-content" }, te = { __name: "DataScreenHeader", setup(v) {
  const s = A(), k = E(), { currentHeader: h } = z(k), c = B({ storageKey: "theme-appearance", valueDark: "dark", valueLight: "light" }), y = Q(), N = C(c), w = (u) => {
    let a = u.clientX, l = u.clientY, g = Math.hypot(Math.max(a, innerWidth - a), Math.max(l, innerHeight - l));
    if (!document.startViewTransition) {
      N();
      return;
    }
    document.startViewTransition(async () => {
      N();
    }).ready.then(() => {
      let p = [`circle(0px at ${a}px ${l}px)`, `circle(${g}px at ${a}px ${l}px)`];
      document.documentElement.animate({ clipPath: c.value ? [...p].reverse() : p }, { duration: 200, easing: "ease-in", pseudoElement: c.value ? "::view-transition-old(root)" : "::view-transition-new(root)" });
    });
  };
  return (u, a) => {
    const l = n("el-switch"), g = n("el-button"), S = n("el-tooltip"), p = n("el-space");
    return x(), L("div", G, [_("div", O, [_("h1", null, "\u670D\u52A1\u6CBB\u7406\u589E\u5F3A\u8F6F\u4EF6\u53EF\u89C6\u5316\u5927\u5C4F -- \u5F53\u524D\u670D\u52A1: " + D(f(h).service), 1)]), a[2] || (a[2] = _("div", { class: "flex-grow" }, null, -1)), _("div", ee, [e(p, { wrap: "" }, { default: t(() => [_("div", null, [e(l, { "model-value": f(c), onClick: w, "active-icon": "Sunny", "inactive-icon": "Moon", size: "large", "inline-prompt": "", style: { "--el-switch-on-color": "#64676a" } }, null, 8, ["model-value"])]), _("div", null, [e(S, { content: "\u8FD4\u56DE\u9996\u9875", placement: "bottom" }, { default: t(() => [e(g, { icon: "HomeFilled", circle: "", onClick: a[0] || (a[0] = (M) => {
      f(s).push("/main"), f(y).resetActive();
    }) })]), _: 1 })]), _("div", null, [e(S, { content: "\u5237\u65B0", placement: "bottom" }, { default: t(() => [e(g, { icon: "Refresh", circle: "", onClick: a[1] || (a[1] = (M) => f(s).go(0)) })]), _: 1 })])]), _: 1 })])]);
  };
} }, ae = b(te, [["__scopeId", "data-v-7c9e3d00"]]), oe = { class: "data-card-container" }, re = { __name: "DataScreenMain", setup(v) {
  const s = d(""), k = H({ query: "", namespace: "default", pageNum: 1, pageSize: 100 }), h = E(), c = d({ pageNum: 1, pageSize: 3, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: Date.now() }), y = H({ serviceName: "", pageNum: 1, pageSize: 10 }), N = async () => {
    const o = await j(k);
    o === null && (s.value = "");
    const i = [];
    o.result.data.map((r) => {
      i.push(r.name);
    }), s.value = i[Math.floor(Math.random() * i.length)], h.$patch((r) => {
      r.currentHeader.service = s.value;
    });
  }, w = d([]), u = d([]), a = async () => {
    const o = await q(c.value);
    w.value = o.result.data;
  }, l = async () => {
    const o = await X(y);
    o === null || o.result.length === 0 || (o.result.forEach((i) => {
      i.traceIds.forEach((r) => {
        u.value.push(r);
      });
    }), p.value.getTopology(u.value[Math.floor(Math.random() * u.value.length)]));
  }, g = async () => {
    await M.value.toggleMetrics();
  }, S = async () => {
    await N(), await a(), await l(), await g();
  }, p = d(), M = d(), R = d({ serviceName: "", metricNameLimit: 2, startTimeStamp: 0, endTimeStamp: 0 });
  return P(() => {
    S();
    const o = document.getElementById("service-topology-dom");
    o.style.width = "400px", o.style.height = "250px";
    const i = document.getElementById("trace-topology-div");
    i.style.width = "300px", i.style.height = "180px";
  }), (o, i) => {
    const r = n("el-card"), m = n("el-col"), I = n("el-row");
    return x(), L("div", oe, [e(I, { gutter: 15, class: "diagram-row-1" }, { default: t(() => [e(m, { span: 14 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(Z, { class: "service-topology-diagram", namespace: "default", symbolSize: 25, repulsion: 50, edgeLength: 50 })]), _: 1 })]), _: 1 }), e(m, { span: 10 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [(x(true), L(F, null, U(w.value, (T) => (x(), W(I, { "v-if": w.value.length > 0, key: T, style: { "word-break": "break-all" } }, { default: t(() => [e(m, { span: 4 }, { default: t(() => [$(D(T.serviceName), 1)]), _: 2 }, 1024), e(m, { span: 4 }, { default: t(() => [$(D(f(J)(T.timestamp)), 1)]), _: 2 }, 1024), e(m, { span: 3 }, { default: t(() => [$(D(T.severityText), 1)]), _: 2 }, 1024), e(m, { span: 8 }, { default: t(() => [$(D(T.content), 1)]), _: 2 }, 1024)]), _: 2 }, 1032, ["v-if"]))), 128))]), _: 1 })]), _: 1 })]), _: 1 }), e(I, { gutter: 15, class: "diagram-row-2" }, { default: t(() => [e(m, { span: 8 }, { default: t(() => [e(r, { class: "diagram-el-card" }, { default: t(() => [e(K, { ref_key: "traceTopologyDiagramRef", ref: p, serviceName: ["default", s.value], innerService: false }, null, 8, ["serviceName"])]), _: 1 })]), _: 1 }), e(m, { span: 16 }, { default: t(() => [e(r, { class: "diagram-el-card", id: "metricCardRef" }, { default: t(() => [e(Y, { ref_key: "metricDiagramRef", ref: M, metricQueryDto: R.value, startAndStopTime: ["1990-09-25T00:00:00Z", "2024-09-25T00:00:00Z"] }, null, 8, ["metricQueryDto"])]), _: 1 })]), _: 1 })]), _: 1 })]);
  };
} }, ne = b(re, [["__scopeId", "data-v-7deb1bd1"]]), se = { class: "dataScreenContainer" }, ie = { __name: "DataScreen", setup(v) {
  return (s, k) => {
    const h = n("el-header"), c = n("el-main"), y = n("el-container");
    return x(), L("div", se, [e(y, null, { default: t(() => [e(h, null, { default: t(() => [e(ae)]), _: 1 }), e(c, null, { default: t(() => [e(ne)]), _: 1 })]), _: 1 })]);
  };
} }, Qe = b(ie, [["__scopeId", "data-v-46aa57ad"]]);
export {
  Qe as default
};
