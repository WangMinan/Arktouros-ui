import { c as w } from "./index-BM3jlCjo.js";
import { i as O } from "./echarts-D2MAS9xN.js";
import { b as T } from "./@vueuse-GXTs7r9P.js";
import { a as E } from "./element-plus-B8zTVPh2.js";
import { u as C } from "./index-mZv_Vpis.js";
import { u as $ } from "./vue-router-QfQVtIJ1.js";
import { E as j, J as z, w as _, T as F, U as N, r as p } from "./@vue-cXHrMgsi.js";
const L = { id: "service-topology-dom" }, J = { __name: "ServiceTopologyDiagram", props: { namespace: String, symbolSize: Number, repulsion: Number, edgeLength: Number, getTimelineRange: Function }, setup(f, { expose: y }) {
  const b = C(), v = $(), i = f, d = p([]), g = p([]), S = async (e) => {
    let n = E.service({ lock: true, text: "\u6B63\u5728\u751F\u6210\u670D\u52A1\u62D3\u6251\uFF0C\u8BF7\u7B49\u5F85\u3002", background: "rgba(0, 0, 0, 0.7)" });
    try {
      const t = await w(i.namespace, e), a = t.result.nodes;
      d.value = a.map((o) => o.nodeObject !== null ? { draggable: true, name: o.nodeObject.name, category: o.nodeObject.status ? 0 : 1, symbolSize: [i.symbolSize, i.symbolSize], item: o, itemStyle: { color: o.nodeObject.status ? "#C7EDCC" : "#FF2700", borderColor: o.nodeObject.status ? "#6EF780" : "#FFEE00" } } : null);
      const l = t.result.calls;
      g.value = l.map((o) => o.source === null || o.target === null ? null : { source: o.source.nodeObject.name, target: o.target.nodeObject.name });
    } finally {
      n.close();
    }
  };
  let c;
  j(async () => {
    await u(), window.addEventListener("resize", m), c = new ResizeObserver(() => m), c.observe(document.getElementById("service-topology-dom"));
  }), z(() => {
    window.removeEventListener("resize", m), c.disconnect();
  });
  let r;
  const s = T("theme-appearance", "auto");
  function h(e) {
    const n = e.status ? "\u6B63\u5E38" : "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", t = e.tags.length === 0 ? "[]" : JSON.stringify(e.tags);
    return `<div>
                    <div>
                        <b>\u5F53\u524DService\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u547D\u540D\u7A7A\u95F4: ${e.namespace}</li>
                        <li>\u72B6\u6001: ${n}</li>
                        <li>\u6807\u7B7E: ${t}</li>
                    </ul>
                </div>`;
  }
  const k = async (e) => {
    b.$patch((l) => {
      l.currentAside.active = "/main/trace/timeout";
    });
    const { startTime: n, stopTime: t } = i.getTimelineRange();
    let a = e.tags.find((l) => l.key === "long_duration");
    Array.isArray(a) ? a = a[0].value : a ? a = a.value : a = "", await v.push(`/main/trace/timeout?serviceName=${e.name}&startTime=${n}&stopTime=${t}&namespace=${e.namespace}&spanName=${a}`);
  }, u = async (e) => {
    await S(e), r && r.dispose();
    let n = { backgroundColor: s.value === "dark" ? "#212224" : "#fff", title: { text: "\u670D\u52A1\u5173\u7CFB\u56FE" }, legend: {}, tooltip: { trigger: "item", triggerOn: "mousemove", backgroundColor: s.value === "dark" ? "#212224" : "#fff", textStyle: { color: s.value === "dark" ? "#fff" : "#212224" }, formatter: function(t) {
      return t.data.item !== void 0 ? h(t.data.item.nodeObject) : null;
    } }, label: { normal: { show: true, position: "inside" } }, series: [{ type: "graph", edgeSymbol: ["none", "arrow"], focusNodeAdjacency: true, roam: true, layout: "force", symbol: "circle", data: d.value, links: g.value, label: { normal: { show: true, position: "inside" } }, force: { repulsion: i.repulsion, edgeLength: i.edgeLength, layoutAnimation: true }, animationEasingUpdate: "quinticInOut", animationDurationUpdate: 100, categories: [{ name: "\u670D\u52A1\u5728\u7EBF", itemStyle: { color: "#C7EDCC" } }, { name: "\u8D85\u65F6\u5F02\u5E38\u6216\u79BB\u7EBF", itemStyle: { color: "#FF2700" } }] }] };
    r = O(document.getElementById("service-topology-dom"), s.value === "dark" ? "dark" : "light"), r.setOption(n), r.on("click", async function(t) {
      await k(t.data.item.nodeObject);
    });
  }, m = () => {
    r && r.resize();
  };
  return _(s, async () => {
    await u();
  }), y({ drawServiceTopology: u }), (e, n) => (F(), N("div", L));
} };
export {
  J as _
};
