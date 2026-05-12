import { b as O, a as P } from "./index-BM3jlCjo.js";
import { _ as W } from "./ServiceTopologyDiagram-DQrMqVgE.js";
import { t as b } from "./dateUtil-BAIp0Nbc.js";
import { E as j } from "./element-plus-B8zTVPh2.js";
import { _ as N } from "./index-COTCo5V6.js";
import { r as o, E as G, w as H, al as r, T as h, U as w, W as v, a6 as V, a7 as l, a1 as _, P as Q, ai as X, V as Y, u as D, a5 as x } from "./@vue-cXHrMgsi.js";
import "./axios-B8_nURbH.js";
import "./nprogress-Du6PRFDQ.js";
import "./dayjs-DuEr9S7h.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./echarts-D2MAS9xN.js";
import "./tslib-BDyQ-Jie.js";
import "./zrender-CAoIEdoS.js";
import "./@vueuse-GXTs7r9P.js";
import "./index-mZv_Vpis.js";
import "./pinia-Cy2NSX6c.js";
import "./vue-router-QfQVtIJ1.js";
import "./lodash-es-BJlXfrO7.js";
import "./@element-plus-_Q31Qov3.js";
import "./async-validator-CRx4dHSJ.js";
import "./@popperjs-CUumdR8o.js";
import "./@ctrl-C4Rzlq_k.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BOzNIQbj.js";
import "./pinia-plugin-persistedstate-BGP-kHEL.js";
const Z = { class: "timeline-container" }, ee = { class: "timeline-header" }, le = { class: "timeline-current-time" }, te = { class: "timeline-controls" }, ae = { class: "timeline-slider" }, oe = { key: 1, class: "loading-text" }, ne = { class: "timeline-footer" }, se = { class: "timeline-start-time" }, ie = { class: "timeline-end-time" }, re = { __name: "ServiceTopologyTimeline", emits: ["update-topology"], setup(S, { expose: g, emit: T }) {
  const t = o(Date.now() - 864e5), n = o(Date.now()), e = o(Date.now()), s = o(0), m = o(false), p = o(""), y = o(false), c = o(new Date(t.value)), d = o(new Date(n.value)), f = o(6e4), U = [{ label: "1\u6BEB\u79D2", value: 1 }, { label: "100\u6BEB\u79D2", value: 100 }, { label: "1\u79D2", value: 1e3 }, { label: "15\u79D2", value: 15e3 }, { label: "30\u79D2", value: 3e4 }, { label: "1\u5206\u949F", value: 6e4 }, { label: "5\u5206\u949F", value: 3e5 }, { label: "15\u5206\u949F", value: 9e5 }, { label: "30\u5206\u949F", value: 18e5 }, { label: "1\u5C0F\u65F6", value: 36e5 }, { label: "2\u5C0F\u65F6", value: 72e5 }, { label: "4\u5C0F\u65F6", value: 144e5 }, { label: "8\u5C0F\u65F6", value: 288e5 }, { label: "12\u5C0F\u65F6", value: 432e5 }, { label: "24\u5C0F\u65F6", value: 864e5 }];
  g({ userStartTime: c, userEndTime: d, currentTimestamp: e });
  const R = T, $ = async () => {
    try {
      const a = await O();
      a && a.result && (t.value = Number(a.result.startTimestamp), n.value = Number(a.result.endTimestamp), e.value = Number(a.result.endTimestamp), p.value = b(e.value), c.value = new Date(t.value), d.value = new Date(n.value));
    } catch (a) {
      console.error("\u83B7\u53D6\u65F6\u95F4\u8303\u56F4\u5931\u8D25:", a);
    } finally {
      y.value = true, s.value += 1;
    }
  }, k = () => c.value > d.value ? (j.warning("\u5F00\u59CB\u65F6\u95F4\u4E0D\u80FD\u665A\u4E8E\u7ED3\u675F\u65F6\u95F4\uFF0C\u5DF2\u81EA\u52A8\u8C03\u6574"), c.value = new Date(d.value.getTime() - 36e5), false) : true, z = () => {
    k() && C();
  }, L = () => {
    k() && C();
  }, C = () => {
    t.value = c.value.getTime(), n.value = d.value.getTime(), e.value < t.value ? e.value = t.value : e.value > n.value && (e.value = n.value), p.value = b(e.value), s.value += 1, R("update-topology", e.value);
  }, A = (a) => {
    f.value = a, s.value += 1;
  };
  G(async () => {
    await $();
  }), H(e, (a) => {
    p.value = b(a);
  });
  const M = (a) => {
    e.value = Number(a);
  }, B = () => {
    m.value = true;
  }, F = () => {
    m.value = false;
  }, I = () => {
    R("update-topology", e.value);
  };
  return (a, u) => {
    const E = r("el-date-picker"), q = r("el-option"), J = r("el-select"), K = r("el-slider");
    return h(), w("div", Z, [v("div", ee, [u[4] || (u[4] = v("div", { class: "timeline-title" }, "\u670D\u52A1\u62D3\u6251\u65F6\u95F4\u8F74", -1)), v("div", le, "\u5F53\u524D\u9009\u62E9\u65F6\u95F4: " + V(p.value), 1)]), v("div", te, [l(E, { modelValue: c.value, "onUpdate:modelValue": u[0] || (u[0] = (i) => c.value = i), type: "datetime", placeholder: "\u5F00\u59CB\u65F6\u95F4", size: "small", onChange: z }, null, 8, ["modelValue"]), l(E, { modelValue: d.value, "onUpdate:modelValue": u[1] || (u[1] = (i) => d.value = i), type: "datetime", placeholder: "\u7ED3\u675F\u65F6\u95F4", size: "small", onChange: L }, null, 8, ["modelValue"]), l(J, { modelValue: f.value, "onUpdate:modelValue": u[2] || (u[2] = (i) => f.value = i), placeholder: "\u9009\u62E9\u62D6\u52A8\u65F6\u95F4\u6B65\u957F", size: "small", onChange: A }, { default: _(() => [(h(), w(Q, null, X(U, (i) => l(q, { key: i.value, label: i.label, value: i.value }, null, 8, ["label", "value"])), 64))]), _: 1 }, 8, ["modelValue"])]), v("div", ae, [y.value ? (h(), Y(K, { key: s.value, modelValue: e.value, "onUpdate:modelValue": u[3] || (u[3] = (i) => e.value = i), min: t.value, max: n.value, step: f.value, "format-tooltip": D(b), onChange: M, onMouseenter: B, onMouseleave: F, onMouseup: I }, null, 8, ["modelValue", "min", "max", "step", "format-tooltip"])) : (h(), w("div", oe, "\u52A0\u8F7D\u4E2D..."))]), v("div", ne, [v("div", se, V(D(b)(t.value)), 1), v("div", ie, V(D(b)(n.value)), 1)])]);
  };
} }, ue = N(re, [["__scopeId", "data-v-39ab7a34"]]), me = { class: "card-container" }, pe = { __name: "ServiceTopologyAll", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number }, setup(S, { expose: g }) {
  const T = o(), t = o(), n = async () => {
    await T.value.getTopology();
  }, e = () => t.value ? { startTime: t.value.userStartTime.getTime(), stopTime: t.value.currentTimestamp } : { startTime: Date.now() - 24 * 60 * 60 * 1e3, stopTime: Date.now() };
  g({ getTopology: n });
  const s = async (m) => {
    await T.value.drawServiceTopology(m);
  };
  return (m, p) => {
    const y = r("el-card");
    return h(), w("div", me, [l(y, null, { default: _(() => [l(W, { ref_key: "serviceTopologyDiagramRef", ref: T, namespace: S.namespace, symbolSize: 50, repulsion: 200, edgeLength: 100, getTimelineRange: e }, null, 8, ["namespace"]), l(ue, { ref_key: "serviceTopologyTimelineRef", ref: t, onUpdateTopology: s }, null, 512)]), _: 1 })]);
  };
} }, ce = N(pe, [["__scopeId", "data-v-1cf3bf23"]]), de = { class: "topology-container" }, ve = { class: "search-bar" }, _e = { __name: "ServiceTopology", setup(S) {
  const g = o(""), T = async (n, e) => {
    const s = await P(n);
    if (s === null) return;
    const m = s.result.map((p) => ({ value: p }));
    e(m);
  }, t = o();
  return (n, e) => {
    const s = r("el-breadcrumb-item"), m = r("el-breadcrumb"), p = r("el-row"), y = r("Filter"), c = r("el-icon"), d = r("el-autocomplete");
    return h(), w("div", de, [l(p, null, { default: _(() => [l(m, { "separator-icon": "ArrowRight" }, { default: _(() => [l(s, { to: { path: "/main" } }, { default: _(() => [...e[2] || (e[2] = [x(" \u4E3B\u9875 ", -1)])]), _: 1 }), l(s, null, { default: _(() => [...e[3] || (e[3] = [x(" \u670D\u52A1 ", -1)])]), _: 1 }), l(s, { to: { path: "/service/topology" } }, { default: _(() => [...e[4] || (e[4] = [x(" \u670D\u52A1\u62D3\u6251 ", -1)])]), _: 1 })]), _: 1 })]), _: 1 }), v("div", ve, [l(d, { class: "auto-complete-input", modelValue: g.value, "onUpdate:modelValue": e[0] || (e[0] = (f) => g.value = f), "fetch-suggestions": T, clearable: "", placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault", onSelect: e[1] || (e[1] = (f) => t.value.getTopology()), style: { width: "40%" } }, { prepend: _(() => [l(c, null, { default: _(() => [l(y)]), _: 1 })]), _: 1 }, 8, ["modelValue"])]), l(ce, { namespace: g.value, symbolSize: 50, repulsion: 200, edgeLength: 100 }, null, 8, ["namespace"])]);
  };
} }, Je = N(_e, [["__scopeId", "data-v-69fce13c"]]);
export {
  Je as default
};
