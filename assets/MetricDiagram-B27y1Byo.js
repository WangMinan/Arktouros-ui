import { w as k, E, J as _, a2 as A, a8 as M, T as h, U as y, P as L, ai as B, W as z, r as N } from "./@vue-cXHrMgsi.js";
import { b as D } from "./@vueuse-GXTs7r9P.js";
import { E as u, a as O } from "./element-plus-B8zTVPh2.js";
import { i as F } from "./echarts-D2MAS9xN.js";
import { _ as x } from "./index-BM3jlCjo.js";
import { t as I } from "./dateUtil-BAIp0Nbc.js";
import { _ as U } from "./index-COTCo5V6.js";
const C = async (a) => {
  try {
    const { data: o } = await x.get("/metrics", { params: { serviceName: a.serviceName, metricNameLimit: a.metricNameLimit, startTimeStamp: a.startTimeStamp, endTimeStamp: a.endTimeStamp } });
    return o.code !== null && o.code === 2e3 ? o : o.code !== null ? (u.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${o.message}`), null) : (u.error("\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25"), null);
  } catch (o) {
    u.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${o.message}`);
  }
  return null;
}, Y = async () => {
  try {
    const { data: a } = await x.delete("/metrics");
    return a.code !== null && a.code === 2e3 ? a : a.code !== null ? (u.error(`\u5220\u9664\u6240\u6709\u6570\u503C\u5931\u8D25, ${a.message}`), null) : (u.error("\u5220\u9664\u6240\u6709\u6570\u503C\u5931\u8D25"), null);
  } catch (a) {
    u.error(`\u5220\u9664\u6240\u6709\u6570\u503C\u5931\u8D25, ${a.message}`);
  }
  return null;
}, R = { class: "graph-div" }, G = ["id"], W = { __name: "MetricDiagram", props: { metricQueryDto: Object, startAndStopTime: Array }, setup(a, { expose: o }) {
  const p = N(true), m = a;
  function T() {
    const e = JSON.parse(JSON.stringify(m.metricQueryDto));
    if (e.serviceName === "null" && (e.serviceName = ""), e.metricNameLimit === 0 && (e.metricNameLimit = null), m.startAndStopTime.length === 2) e.startTimeStamp = Date.parse(m.startAndStopTime[0]), e.endTimeStamp = Date.parse(m.startAndStopTime[1]);
    else {
      u.warning("\u5F53\u524D\u4E3A\u6B63\u5F0F\u73AF\u5883, \u65F6\u95F4\u8303\u56F4\u7F6E\u7A7A\u65F6\u9ED8\u8BA4\u83B7\u53D6\u8FD1\u534A\u4E2A\u5C0F\u65F6\u5185\u7684\u6570\u503C");
      const s = /* @__PURE__ */ new Date();
      e.startTimeStamp = s.getTime() - 30 * 60 * 1e3, e.endTimeStamp = s.getTime();
    }
    return e;
  }
  const c = N([{ name: "", serviceName: "", metricType: "", metrics: [] }]);
  o({ toggleMetrics: async () => {
    n && n.forEach((r) => r.dispose()), c.value = [], p.value = true;
    const e = T();
    let s;
    try {
      s = O.service({ lock: true, text: "\u6B63\u5728\u641C\u7D22\uFF0C\u6570\u636E\u91CF\u8F83\u5927\uFF0C\u8BF7\u8010\u5FC3\u7B49\u5F85", background: "rgba(0, 0, 0, 0.7)" });
      const r = await C(e);
      if (r === null) return;
      if (r.result && r.result.length !== 0) {
        for (p.value = false, r.result.forEach((i) => {
          i.metrics.forEach((t) => {
            t.timestamp = I(t.timestamp);
          });
        }), c.value = r.result; !document.getElementById("metric-graph-" + (c.value.length - 1)); ) await new Promise((i) => setTimeout(i, 100));
        for (let i = 0; i < c.value.length; i++) try {
          b(c.value[i], i);
        } catch (t) {
          u.error(t);
        }
      } else p.value = true;
    } finally {
      s.close();
    }
  } });
  let n = [];
  const d = D("theme-appearance", "auto");
  k(d, () => {
    n && n.forEach((e) => e.dispose());
    for (let e = 0; e < m.metricList.length; e++) try {
      b(m.metricList[e], e);
    } catch (s) {
      u.error(s);
    }
  });
  let g;
  E(() => {
    n && n.forEach((e) => e.dispose()), window.addEventListener("resize", v), g = new ResizeObserver(() => v), g.observe(document.getElementById("metricCardRef"));
  }), _(() => {
    window.removeEventListener("resize", v), g.disconnect();
  });
  const v = () => {
    n && n.forEach((e) => {
      e.resize();
    });
  };
  function w(e, s) {
    return { backgroundColor: d.value === "dark" ? "#212224" : "#fff", title: { text: e.name.replace(/_/g, " "), textStyle: { fontWeight: "bold", fontSize: 14, lineHeight: 16, width: document.getElementById("metric-graph-" + s).offsetWidth - 20, overflow: "break" }, subtext: e.metrics[0].description ? e.metrics[0].description : "", subtextStyle: { fontSize: 10, lineHeight: 12, width: document.getElementById("metric-graph-" + s).offsetWidth - 20, overflow: "break" } }, tooltip: { trigger: "item", axisPointer: { type: "cross" }, backgroundColor: d.value === "dark" ? "#212224" : "#fff", textStyle: { color: d.value === "dark" ? "#fff" : "#212224" } } };
  }
  const f = (e) => Number(e) > 1e9 ? "G" : Number(e) > 1e6 ? "M" : Number(e) > 1e3 ? "K" : null, b = (e, s) => {
    let r = w(e, s);
    if (e.metricType === "GAUGE" || e.metricType === "COUNTER") e.metrics.length >= 2 ? (r.xAxis = { type: "category", data: e.metrics.map((t) => t.timestamp) }, r.yAxis = { type: "value", name: f(e.metrics[e.metrics.length - 1].value) === null ? null : "Unit:" + f(e.metrics[0].value), nameLocation: "start", nameGap: 20 }, r.series = [{ data: e.metrics.map((t) => Number(t.value) > 1e9 ? (Number(t.value) / 1e9).toFixed(2) : Number(t.value) > 1e6 ? (Number(t.value) / 1e6).toFixed(2) : Number(t.value) > 1e3 ? (Number(t.value) / 1e3).toFixed(2) : t.value), type: "line" }]) : (r.series = [{ type: "scatter", symbolSize: 1, data: [{ value: [0, 0], label: { show: true, formatter: e.metrics[0].value + "", fontSize: 20, fontWeight: "bold", color: d.value === "dark" ? "#ff0000" : "#992233" } }] }], r.xAxis = { show: false, min: -1, max: 1 }, r.yAxis = { show: false, min: -1, max: 1 });
    else if (e.metricType === "HISTOGRAM" || e.metricType === "SUMMARY") {
      let t = [];
      for (const l in e.metrics[0].buckets) t.push({ key: l, value: e.metrics[0].buckets[l] });
      t.sort((l, S) => l.key - S.key), r.xAxis = { type: "category", data: t.map((l) => l.key) }, r.yAxis = { type: "value", name: f(t[t.length - 1].value) === null ? null : "Unit:" + f(t[t.length - 1].value) }, r.series = [{ data: t.map((l) => Number(l.value) > 1e9 ? (Number(l.value) / 1e9).toFixed(2) : Number(l.value) > 1e6 ? (Number(l.value) / 1e6).toFixed(2) : Number(l.value) > 1e3 ? (Number(l.value) / 1e3).toFixed(2) : l.value), type: "bar" }];
    }
    let i = F(document.getElementById("metric-graph-" + s), d.value === "dark" ? "dark" : "light");
    i.setOption(r), n.push(i);
  };
  return (e, s) => A((h(), y("div", R, [(h(true), y(L, null, B(c.value, (r, i) => (h(), y("div", { class: "graph-card", key: i }, [z("div", { class: "graph-item", id: "metric-graph-" + i }, null, 8, G)]))), 128))], 512)), [[M, !p.value]]);
} }, q = U(W, [["__scopeId", "data-v-44772a58"]]);
export {
  q as M,
  Y as d
};
