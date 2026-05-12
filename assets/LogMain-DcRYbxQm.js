import { a as te, g as oe } from "./index-BM3jlCjo.js";
import { g as ne, d as re, a as ue } from "./index-DDD-DYbJ.js";
import { u as se } from "./vue-router-QfQVtIJ1.js";
import { a as de, E } from "./element-plus-B8zTVPh2.js";
import { t as k } from "./dateUtil-BAIp0Nbc.js";
import { u as ie } from "./index-mZv_Vpis.js";
import { u as me } from "./vue-clipboard3-CRwmo_gv.js";
import { _ as pe } from "./index-COTCo5V6.js";
import { E as ce, T as S, U as D, W as f, a7 as a, a1 as l, P as B, al as s, r as g, a5 as c, ai as ve, V as fe, a6 as w, u as ge, c as _e } from "./@vue-cXHrMgsi.js";
import "./axios-B8_nURbH.js";
import "./nprogress-Du6PRFDQ.js";
import "./dayjs-DuEr9S7h.js";
import "./arktourosUiConfigUtil-0zbcKwuZ.js";
import "./lodash-es-BJlXfrO7.js";
import "./@element-plus-_Q31Qov3.js";
import "./async-validator-CRx4dHSJ.js";
import "./@popperjs-CUumdR8o.js";
import "./@ctrl-C4Rzlq_k.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BOzNIQbj.js";
import "./pinia-Cy2NSX6c.js";
import "./clipboard-BuAB72yg.js";
import "./pinia-plugin-persistedstate-BGP-kHEL.js";
const ye = { class: "log-main-container" }, be = { class: "search-area" }, Ve = { class: "pagination-div" }, Ne = { __name: "LogMain", setup(we) {
  const A = ie(), I = se(), T = g(0), _ = g([]), V = g(), b = g([]), r = g({ pageNum: 1, pageSize: 10, serviceName: "", traceId: "", keyword: "", keywordNotIncluded: "", severityText: "", startTimestamp: 0, endTimestamp: 0 }), N = async () => {
    const o = JSON.parse(JSON.stringify(r.value));
    b.value.length === 2 ? (o.startTimestamp = Date.parse(b.value[0]), o.endTimestamp = Date.parse(b.value[1])) : (o.startTimestamp = null, o.endTimestamp = null);
    const e = await ne(o);
    e !== null && (T.value = parseInt(e.result.total), e.result.data.forEach((n) => {
      n.serviceName || (n.serviceName = "null");
    }), _.value = e.result.data);
  }, F = async (o) => {
    r.value.pageSize = o, await N();
  }, O = async (o) => {
    r.value.pageNum = o, await N();
  }, R = async (o, e) => {
    const n = await ue(o);
    if (n === null) {
      e([]);
      return;
    }
    const v = n.result.map((i) => i ? { value: i } : { value: "null" });
    e(v);
  };
  ce(async () => {
    await N();
  });
  const L = g(false), u = g({}), J = (o) => {
    const e = JSON.parse(JSON.stringify(o));
    u.value = e, u.value.timestamp = k(e.timestamp), u.value.error = e.error ? "\u5F02\u5E38" : "\u6B63\u5E38", u.value.tags = e.tags.map((n) => n.key + "->" + n.value).join(`
`), L.value = true;
  }, $ = async (o) => {
    if (!o.serviceName || !o.traceId) {
      E.warning("\u8BE5\u65E5\u5FD7\u672A\u4E0A\u62A5\u94FE\u8DEF\u4FE1\u606F");
      return;
    }
    A.$patch((e) => {
      e.currentAside.active = "/main/trace/dashboard";
    }), await I.push(`/main/trace/dashboard?serviceName=${o.serviceName}&traceId=${o.traceId}`);
  }, M = _e({ lazy: true, async lazyLoad(o, e) {
    const n = [], { level: v } = o;
    if (v === 0) {
      const i = await te();
      if (i === null) return;
      i.result.map((m) => ({ leaf: false, value: m, label: m })).forEach((m) => {
        n.push(m);
      });
    } else if (v === 1) {
      const i = await oe({ query: "", namespace: o.value, pageNum: 1, pageSize: 1e3 });
      if (i === null) return;
      i.result.data.map((m) => ({ leaf: true, value: m.name, label: m.name === "" ? "null" : m.name })).forEach((m) => {
        n.push(m);
      });
    }
    e(n);
  } }), j = () => {
    V.value ? (r.value.serviceName = V.value[1], (r.value.serviceName === "" || r.value.serviceName == null) && (r.value.serviceName = "null")) : r.value.serviceName = null;
  }, P = async () => {
    const o = de.service({ lock: true, text: "\u6B63\u5728\u6267\u884C\u6570\u636E\u8FD0\u7EF4\u64CD\u4F5C\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const e = await re();
      if (e === null || e.result.length === 0) return;
      E.success("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E\u6210\u529F");
    } finally {
      o.close(), _.value.splice(0, _.value.length), I.go(0);
    }
  }, { toClipboard: h } = me(), C = (o) => {
    let e = "";
    return o.forEach((n) => {
      e += k(n.timestamp) + ", ", e += n.serviceName + ", ", e += n.severityText + ", ", e += n.content + ", ", e += n.traceId + ", ", e += n.spanId + ", ", e += n.error + ", ", e += `
`;
    }), e;
  }, q = async () => {
    try {
      await h(C(_.value));
    } catch (o) {
      console.error(o);
    }
  }, Q = async () => {
    const o = C(_.value), e = new Blob([o], { type: "text/plain;charset=utf-8" }), n = URL.createObjectURL(e), v = document.createElement("a");
    v.href = n, v.download = "logs.txt", v.click(), URL.revokeObjectURL(n);
  };
  return (o, e) => {
    const n = s("el-breadcrumb-item"), v = s("el-breadcrumb"), i = s("el-button"), m = s("el-tooltip"), U = s("el-row"), W = s("el-cascader"), d = s("el-form-item"), p = s("el-input"), G = s("el-date-picker"), H = s("el-autocomplete"), x = s("el-form"), K = s("el-divider"), y = s("el-col"), X = s("Share"), z = s("el-icon"), Y = s("InfoFilled"), Z = s("el-pagination"), ee = s("el-card"), ae = s("el-dialog");
    return S(), D(B, null, [f("div", ye, [a(U, { class: "breadcrumb-header-row" }, { default: l(() => [a(v, { "separator-icon": "ArrowRight" }, { default: l(() => [a(n, null, { default: l(() => [...e[17] || (e[17] = [f("a", { href: "/main" }, "\u4E3B\u9875", -1)])]), _: 1 }), a(n, null, { default: l(() => [...e[18] || (e[18] = [f("a", { href: "/main/log" }, "\u65E5\u5FD7\u6982\u89C8", -1)])]), _: 1 })]), _: 1 }), a(m, { placement: "bottom" }, { content: l(() => [...e[19] || (e[19] = [c(" \u70B9\u51FB\u8BE5\u6309\u94AE\u5C06\u4F1A", -1), f("b", { style: { color: "red" } }, "\u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E", -1), c("\uFF0C\u8BF7\u786E\u4FDD\u60A8\u77E5\u6653\u8BE5\u64CD\u4F5C\u5C06\u5E26\u6765\u7684\u540E\u679C\u3002 ", -1), f("br", null, null, -1), c(" \u5220\u9664\u64CD\u4F5C\u5C06\u9501\u5B9A\u7528\u6237\u754C\u9762\u76F4\u81F3\u5220\u9664\u5B8C\u6210\u3002 ", -1)])]), default: l(() => [a(i, { type: "danger", onClick: P }, { default: l(() => [...e[20] || (e[20] = [c(" \u5220\u9664\u6240\u6709\u65E5\u5FD7\u6570\u636E ", -1)])]), _: 1 })]), _: 1 })]), _: 1 }), a(ee, { class: "log-card" }, { default: l(() => [f("div", be, [a(x, { inline: true, model: r.value }, { default: l(() => [a(d, { label: "\u670D\u52A1\u540D\u79F0" }, { default: l(() => [a(W, { placeholder: "\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0", modelValue: V.value, "onUpdate:modelValue": e[0] || (e[0] = (t) => V.value = t), clearable: "", props: M, "show-all-levels": false, onChange: j }, null, 8, ["modelValue", "props"])]), _: 1 }), a(d, { label: "traceId" }, { default: l(() => [a(p, { modelValue: r.value.traceId, "onUpdate:modelValue": e[1] || (e[1] = (t) => r.value.traceId = t), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2AtraceId", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u8D77\u6B62\u65F6\u95F4" }, { default: l(() => [a(G, { modelValue: b.value, "onUpdate:modelValue": e[2] || (e[2] = (t) => b.value = t), type: "datetimerange", "range-separator": "\u5230", "start-placeholder": "\u5F00\u59CB\u65F6\u95F4", "end-placeholder": "\u7ED3\u675F\u65F6\u95F4" }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: l(() => [a(H, { class: "auto-complete-input", modelValue: r.value.severityText, "onUpdate:modelValue": e[3] || (e[3] = (t) => r.value.severityText = t), "fetch-suggestions": R, clearable: "", placeholder: "\u8BF7\u8F93\u5165\u65E5\u5FD7\u7EA7\u522B" }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u5185\u5BB9\u5173\u952E\u8BCD" }, { default: l(() => [a(p, { modelValue: r.value.keyword, "onUpdate:modelValue": e[4] || (e[4] = (t) => r.value.keyword = t), placeholder: "\u8BF7\u8F93\u5165\u4E00\u4E2A\u5185\u5BB9\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD" }, { default: l(() => [a(p, { modelValue: r.value.keywordNotIncluded, "onUpdate:modelValue": e[5] || (e[5] = (t) => r.value.keywordNotIncluded = t), placeholder: "\u8BF7\u8F93\u5165\u5185\u5BB9\u4E0D\u5305\u542B\u7684\u5173\u952E\u8BCD", clearable: "" }, null, 8, ["modelValue"])]), _: 1 }), a(d, null, { default: l(() => [a(i, { type: "primary", onClick: N, icon: "Search" }, { default: l(() => [...e[21] || (e[21] = [c("\u641C\u7D22", -1)])]), _: 1 })]), _: 1 }), a(d, null, { default: l(() => [a(i, { type: "primary", onClick: q, icon: "CopyDocument" }, { default: l(() => [...e[22] || (e[22] = [c("\u590D\u5236\u641C\u7D22\u7ED3\u679C", -1)])]), _: 1 })]), _: 1 }), a(d, null, { default: l(() => [a(i, { type: "primary", onClick: Q, icon: "Download" }, { default: l(() => [...e[23] || (e[23] = [c("\u4E0B\u8F7D\u65E5\u5FD7\u6587\u4EF6", -1)])]), _: 1 })]), _: 1 })]), _: 1 }, 8, ["model"])]), a(K), (S(true), D(B, null, ve(_.value, (t) => (S(), fe(U, { gutter: 5, key: t, style: { "word-break": "break-all" } }, { default: l(() => [a(y, { span: 4 }, { default: l(() => [c(w(t.serviceName), 1)]), _: 2 }, 1024), a(y, { span: 4 }, { default: l(() => [c(w(ge(k)(t.timestamp)), 1)]), _: 2 }, 1024), a(y, { span: 2 }, { default: l(() => [c(w(t.severityText), 1)]), _: 2 }, 1024), a(y, { span: 10 }, { default: l(() => [c(w(t.content), 1)]), _: 2 }, 1024), a(y, { span: 2 }, { default: l(() => [a(m, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5BF9\u5E94\u94FE\u8DEF\u4FE1\u606F", placement: "top", enterable: false }, { default: l(() => [a(i, { type: "primary", circle: "", size: "small", onClick: (le) => $(t) }, { default: l(() => [a(z, null, { default: l(() => [a(X)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024), a(y, { span: 1 }, { default: l(() => [a(m, { effect: "light", content: "\u67E5\u770B\u65E5\u5FD7\u5177\u4F53\u4FE1\u606F", placement: "top", enterable: false }, { default: l(() => [a(i, { type: "primary", circle: "", size: "small", onClick: (le) => J(t) }, { default: l(() => [a(z, null, { default: l(() => [a(Y)]), _: 1 })]), _: 1 }, 8, ["onClick"])]), _: 2 }, 1024)]), _: 2 }, 1024)]), _: 2 }, 1024))), 128)), f("div", Ve, [a(Z, { "current-page": r.value.pageNum, "onUpdate:currentPage": e[6] || (e[6] = (t) => r.value.pageNum = t), "page-size": r.value.pageSize, "onUpdate:pageSize": e[7] || (e[7] = (t) => r.value.pageSize = t), "page-sizes": [10, 20, 50, 100], layout: "total, prev, pager, next, sizes", total: T.value, onSizeChange: F, onCurrentChange: O }, null, 8, ["current-page", "page-size", "total"])])]), _: 1 })]), a(ae, { modelValue: L.value, "onUpdate:modelValue": e[16] || (e[16] = (t) => L.value = t), title: "Log", width: "60%" }, { default: l(() => [a(x, { "label-position": "left", "label-width": "auto", model: u.value, disabled: "" }, { default: l(() => [a(d, { label: "\u65E5\u5FD7\u65F6\u95F4" }, { default: l(() => [a(p, { modelValue: u.value.timestamp, "onUpdate:modelValue": e[8] || (e[8] = (t) => u.value.timestamp = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u65E5\u5FD7\u7EA7\u522B" }, { default: l(() => [a(p, { modelValue: u.value.severityText, "onUpdate:modelValue": e[9] || (e[9] = (t) => u.value.severityText = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u65E5\u5FD7\u5185\u5BB9" }, { default: l(() => [a(p, { type: "textarea", modelValue: u.value.content, "onUpdate:modelValue": e[10] || (e[10] = (t) => u.value.content = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u670D\u52A1\u540D\u79F0" }, { default: l(() => [a(p, { modelValue: u.value.serviceName, "onUpdate:modelValue": e[11] || (e[11] = (t) => u.value.serviceName = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u8FFD\u8E2AId" }, { default: l(() => [a(p, { modelValue: u.value.traceId, "onUpdate:modelValue": e[12] || (e[12] = (t) => u.value.traceId = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "SpanId" }, { default: l(() => [a(p, { modelValue: u.value.spanId, "onUpdate:modelValue": e[13] || (e[13] = (t) => u.value.spanId = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "\u72B6\u6001" }, { default: l(() => [a(p, { modelValue: u.value.error, "onUpdate:modelValue": e[14] || (e[14] = (t) => u.value.error = t) }, null, 8, ["modelValue"])]), _: 1 }), a(d, { label: "Tags" }, { default: l(() => [a(p, { type: "textarea", rows: 3, modelValue: u.value.tags, "onUpdate:modelValue": e[15] || (e[15] = (t) => u.value.tags = t) }, null, 8, ["modelValue"])]), _: 1 })]), _: 1 }, 8, ["model"])]), _: 1 }, 8, ["modelValue"])], 64);
  };
} }, We = pe(Ne, [["__scopeId", "data-v-9e88a83a"]]);
export {
  We as default
};
