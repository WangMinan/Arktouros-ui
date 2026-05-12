import { a as _ } from "./index-CqfVstIv.js";
import { b as $ } from "./@vueuse-GXTs7r9P.js";
import { t as m } from "./dateUtil-BAIp0Nbc.js";
import { i as h } from "./echarts-D2MAS9xN.js";
import { _ as P } from "./index-COTCo5V6.js";
import { d as b, w as k, E as w, J as x, T as z, U as D, r as B } from "./@vue-cXHrMgsi.js";
const N = { id: "trace-topology-div" }, C = { __name: "TraceTopologyDiagram", props: { serviceName: Array }, setup(u, { expose: f }) {
  const p = B({ name: "", value: "", collapsed: false, children: [] }), v = u, { serviceName: g } = b(v), T = async (o, e, l, s) => {
    if (o === "" || o === void 0) return;
    const n = await _(o, g.value[1], e, l, s);
    n !== null && (p.value = n.result, c());
  };
  let t;
  const i = $("theme-appearance", "auto");
  k(i, () => {
    c();
  });
  const d = () => {
    t && t.dispose();
  };
  f({ getTopology: T, disposeSpanTopology: d });
  let a;
  w(() => {
    window.addEventListener("resize", r), a = new ResizeObserver(() => r), a.observe(document.getElementById("trace-topology-div"));
  }), x(() => {
    window.removeEventListener("resize", r), a.disconnect();
  });
  const r = () => {
    t && t.resize();
  };
  function y(o) {
    const e = o.data.span, l = o.color === "#FFEE00" ? "\u5F02\u5E38" : "\u6B63\u5E38", s = m(e.startTime), n = e.endTime === "-1" ? "\u8BE5Span\u8D85\u65F6" : m(e.endTime), E = e.localEndPoint.ip === "" ? "null" : e.localEndPoint.ip, S = e.remoteEndPoint.ip === "" ? "null" : e.remoteEndPoint.ip;
    return `<div>
                    <div>
                        <b>\u5F53\u524DSpan\u8BE6\u7EC6\u60C5\u51B5</b>
                    </div>
                    <ul>
                        <li>id: ${e.id}</li>
                        <li>\u540D\u79F0: ${e.name}</li>
                        <li>\u6240\u5C5E\u670D\u52A1: ${e.serviceName}</li>
                        <li>\u5F00\u59CB\u65F6\u95F4: ${s}</li>
                        <li>\u7ED3\u675F\u65F6\u95F4: ${n}</li>
                        <li>Span\u72B6\u6001: ${l}</li>
                        <li>\u7236\u8282\u70B9SpanId: ${e.parentSpanId}</li>
                        <li>\u6240\u5C5EendPoint: ${e.localEndPoint.serviceName}</li>
                        <li>\u6240\u5C5EendPoint ip\u4E0E\u7AEF\u53E3: ${E}:${e.localEndPoint.port}</li>
                        <li>\u8FDC\u7A0BendPoint: ${e.remoteEndPoint.serviceName}</li>
                        <li>\u8FDC\u7A0BendPoint ip\u4E0E\u7AEF\u53E3: ${S}:${e.remoteEndPoint.port}</li>
                    </ul>
                </div>`;
  }
  const c = () => {
    d();
    let o = { title: { subtext: "\u7EFF\u8272\u4E3A\u6B63\u5E38Span\u8282\u70B9\uFF0C\u7EA2\u8272\u4E3A\u5F02\u5E38Span\u8282\u70B9", align: "right" }, backgroundColor: i.value === "dark" ? "#212224" : "#fff", tooltip: { trigger: "item", triggerOn: "mousemove", backgroundColor: i.value === "dark" ? "#212224" : "#fff", textStyle: { color: i.value === "dark" ? "#fff" : "#212224" }, formatter: function(e) {
      return y(e);
    } }, series: [{ type: "tree", symbol: "circle", roam: true, expandAndCollapse: true, animationDuration: 550, animationDurationUpdate: 750, label: { position: "right", verticalAlign: "middle", fontSize: 12 }, initialTreeDepth: -1, data: [p.value] }] };
    t = h(document.getElementById("trace-topology-div"), i.value === "dark" ? "dark" : "light"), t.setOption(o);
  };
  return (o, e) => (z(), D("div", N));
} }, J = P(C, [["__scopeId", "data-v-652c6253"]]);
export {
  J as T
};
