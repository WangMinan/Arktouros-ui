const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./DataScreen-F-v7x3pa.js","./@vueuse-GXTs7r9P.js","./@vue-cXHrMgsi.js","./vue-router-QfQVtIJ1.js","./index-mZv_Vpis.js","./pinia-Cy2NSX6c.js","./ServiceTopologyDiagram-DQrMqVgE.js","./index-BM3jlCjo.js","./axios-B8_nURbH.js","./nprogress-Du6PRFDQ.js","./dayjs-DuEr9S7h.js","./nprogress-BgDCIyLK.css","./element-plus-B8zTVPh2.js","./lodash-es-BJlXfrO7.js","./@element-plus-_Q31Qov3.js","./async-validator-CRx4dHSJ.js","./@popperjs-CUumdR8o.js","./@ctrl-C4Rzlq_k.js","./memoize-one-BdPwpGay.js","./normalize-wheel-es-BQoi3Ox2.js","./@floating-ui-BOzNIQbj.js","./element-plus-CqJ-3YyC.css","./arktourosUiConfigUtil-0zbcKwuZ.js","./echarts-D2MAS9xN.js","./tslib-BDyQ-Jie.js","./zrender-CAoIEdoS.js","./index-DDD-DYbJ.js","./dateUtil-BAIp0Nbc.js","./TraceTopologyDiagram-D4-N29i0.js","./index-CqfVstIv.js","./TraceTopologyDiagram-C_trcKwp.css","./MetricDiagram-B27y1Byo.js","./MetricDiagram-CvbIfpNR.css","./pinia-plugin-persistedstate-BGP-kHEL.js","./DataScreen-lWE-J5Rz.css","./DashBoard-DbXwS5ol.js","./DashBoard-BPq_y3ZL.css","./DashBoardMain-DHfMqkLv.js","./DashBoardMain-CyZrpX6P.css","./ServiceTable-D4HZ-msA.js","./ServiceTable-C2DUByYo.css","./ServiceTopology-CnGnu4gj.js","./ServiceTopology-VNOROQz0.css","./LogMain-DcRYbxQm.js","./vue-clipboard3-CRwmo_gv.js","./clipboard-BuAB72yg.js","./LogMain-CX8Jc3UG.css","./MetricDashboard-D_zaGHj7.js","./MetricDashboard-CQY3QMOf.css","./TraceDashboard-8tZsq7Os.js","./TraceDashboard-DQjEftsd.css","./TraceTimeout-DU8mR1QI.js","./TraceTimeout-wYNuiRT-.css","./404-CWo9eLy9.js","./404-DAXvqb-w.css"])))=>i.map(i=>d[i]);
import { T as A, V as y, al as P, ay as g } from "./@vue-cXHrMgsi.js";
import { c as L } from "./pinia-Cy2NSX6c.js";
import { c as O, a as T } from "./vue-router-QfQVtIJ1.js";
import { e as b, z as k } from "./element-plus-B8zTVPh2.js";
import { Q as R } from "./@element-plus-_Q31Qov3.js";
import { s as D } from "./pinia-plugin-persistedstate-BGP-kHEL.js";
import "./lodash-es-BJlXfrO7.js";
import "./async-validator-CRx4dHSJ.js";
import "./@popperjs-CUumdR8o.js";
import "./@ctrl-C4Rzlq_k.js";
import "./dayjs-DuEr9S7h.js";
import "./memoize-one-BdPwpGay.js";
import "./normalize-wheel-es-BQoi3Ox2.js";
import "./@floating-ui-BOzNIQbj.js";
let I, h;
let __tla = (async () => {
  (function() {
    const r = document.createElement("link").relList;
    if (r && r.supports && r.supports("modulepreload")) return;
    for (const e of document.querySelectorAll('link[rel="modulepreload"]')) l(e);
    new MutationObserver((e) => {
      for (const t of e) if (t.type === "childList") for (const i of t.addedNodes) i.tagName === "LINK" && i.rel === "modulepreload" && l(i);
    }).observe(document, {
      childList: true,
      subtree: true
    });
    function n(e) {
      const t = {};
      return e.integrity && (t.integrity = e.integrity), e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy), e.crossOrigin === "use-credentials" ? t.credentials = "include" : e.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
    }
    function l(e) {
      if (e.ep) return;
      e.ep = true;
      const t = n(e);
      fetch(e.href, t);
    }
  })();
  let S;
  I = (o, r) => {
    const n = o.__vccOpts || o;
    for (const [l, e] of r) n[l] = e;
    return n;
  };
  S = {};
  function V(o, r) {
    const n = P("router-view");
    return A(), y(n);
  }
  let w, N, B, f, a, C;
  w = I(S, [
    [
      "render",
      V
    ]
  ]);
  N = "modulepreload";
  B = function(o, r) {
    return new URL(o, r).href;
  };
  f = {};
  a = function(r, n, l) {
    let e = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName("link"), c = document.querySelector("meta[property=csp-nonce]"), _ = (c == null ? void 0 : c.nonce) || (c == null ? void 0 : c.getAttribute("nonce"));
      e = Promise.allSettled(n.map((s) => {
        if (s = B(s, l), s in f) return;
        f[s] = true;
        const u = s.endsWith(".css"), E = u ? '[rel="stylesheet"]' : "";
        if (!!l) for (let p = i.length - 1; p >= 0; p--) {
          const d = i[p];
          if (d.href === s && (!u || d.rel === "stylesheet")) return;
        }
        else if (document.querySelector(`link[href="${s}"]${E}`)) return;
        const m = document.createElement("link");
        if (m.rel = u ? "stylesheet" : N, u || (m.as = "script"), m.crossOrigin = "", m.href = s, _ && m.setAttribute("nonce", _), document.head.appendChild(m), u) return new Promise((p, d) => {
          m.addEventListener("load", p), m.addEventListener("error", () => d(new Error(`Unable to preload CSS for ${s}`)));
        });
      }));
    }
    function t(i) {
      const c = new Event("vite:preloadError", {
        cancelable: true
      });
      if (c.payload = i, window.dispatchEvent(c), !c.defaultPrevented) throw i;
    }
    return e.then((i) => {
      for (const c of i || []) c.status === "rejected" && t(c.reason);
      return r().catch(t);
    });
  };
  C = [
    {
      path: "/",
      name: "root",
      redirect: "/main"
    },
    {
      path: "/screen",
      name: "dataScreen",
      meta: {
        title: "Arktouros-DataScreen"
      },
      component: () => a(() => import("./DataScreen-F-v7x3pa.js"), __vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34]), import.meta.url)
    },
    {
      path: "/main",
      name: "main",
      meta: {
        title: "Arktouros-UI"
      },
      component: () => a(() => import("./DashBoard-DbXwS5ol.js"), __vite__mapDeps([35,4,5,2,1,3,22,12,13,14,15,16,17,10,18,19,20,21,33,36]), import.meta.url),
      redirect: "/main/default",
      children: [
        {
          path: "default",
          name: "default",
          meta: {
            title: "Arktouros|Default"
          },
          component: () => a(() => import("./DashBoardMain-DHfMqkLv.js"), __vite__mapDeps([37,2,5,3,12,13,14,15,16,17,10,18,19,20,21,33,38]), import.meta.url)
        },
        {
          path: "service",
          name: "service",
          meta: {
            title: "Arktouros|Service"
          },
          children: [
            {
              path: "table",
              name: "table",
              meta: {
                title: "Arktouros|Service|Table"
              },
              component: () => a(() => import("./ServiceTable-D4HZ-msA.js"), __vite__mapDeps([39,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,3,5,33,40]), import.meta.url)
            },
            {
              path: "topology",
              name: "topology",
              meta: {
                title: "Arktouros|Service|Topology"
              },
              component: () => a(() => import("./ServiceTopology-CnGnu4gj.js"), __vite__mapDeps([41,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,6,23,24,25,1,4,5,3,27,33,42]), import.meta.url)
            }
          ]
        },
        {
          path: "log",
          name: "log",
          meta: {
            title: "Arktouros|Log"
          },
          component: () => a(() => import("./LogMain-DcRYbxQm.js"), __vite__mapDeps([43,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,26,3,27,4,5,44,45,33,46]), import.meta.url)
        },
        {
          path: "metric",
          name: "metric",
          meta: {
            title: "Arktouros|Metric"
          },
          component: () => a(() => import("./MetricDashboard-D_zaGHj7.js"), __vite__mapDeps([47,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,31,1,23,24,25,27,32,3,5,33,48]), import.meta.url)
        },
        {
          path: "trace",
          name: "trace",
          meta: {
            title: "Arktouros|Trace"
          },
          children: [
            {
              path: "dashboard",
              name: "traceDashboard",
              meta: {
                title: "Arktouros|Trace|Dashboard"
              },
              component: () => a(() => import("./TraceDashboard-8tZsq7Os.js"), __vite__mapDeps([49,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,29,3,28,1,27,23,24,25,30,5,33,50]), import.meta.url)
            },
            {
              path: "timeout",
              name: "traceTimeout",
              meta: {
                title: "Arktouros|Trace|Timeout"
              },
              component: () => a(() => import("./TraceTimeout-DU8mR1QI.js"), __vite__mapDeps([51,7,8,9,10,11,12,2,13,14,15,16,17,18,19,20,21,22,29,1,23,24,25,27,4,5,3,33,52]), import.meta.url)
            }
          ]
        }
      ]
    },
    {
      path: "/404",
      name: "NotFound",
      component: () => a(() => import("./404-CWo9eLy9.js"), __vite__mapDeps([53,3,2,5,12,13,14,15,16,17,10,18,19,20,21,33,54]), import.meta.url),
      meta: {
        title: "\u60A8\u8BBF\u95EE\u7684\u9875\u9762\u4E0D\u5B58\u5728"
      }
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/404"
    }
  ];
  h = O({
    history: T(),
    routes: C
  });
  h.beforeEach((o, r, n) => (o.meta.title && (document.title = o.meta.title), n()));
  const v = g(w).use(L().use(D)).use(h).use(b, {
    locale: k
  });
  for (const [o, r] of Object.entries(R)) v.component(o, r);
  v.mount("#app");
})();
export {
  I as _,
  __tla,
  h as r
};
