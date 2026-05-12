import { u as q, E as z, n as J, w as W, G as P, B as x, r as D, g as U, o as X, a as Y, j as Z, aA as ee, k as te, f as E, F as ne } from "./@vue-cXHrMgsi.js";
function B(e) {
  return U() ? (X(e), true) : false;
}
function O(e) {
  return typeof e == "function" ? e() : q(e);
}
const re = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const ae = Object.prototype.toString, oe = (e) => ae.call(e) === "[object Object]", G = () => {
};
function se(e, t) {
  function n(...o) {
    return new Promise((r, s) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(r).catch(s);
    });
  }
  return n;
}
const H = (e) => e();
function ie(e = H) {
  const t = D(true);
  function n() {
    t.value = false;
  }
  function o() {
    t.value = true;
  }
  const r = (...s) => {
    t.value && e(...s);
  };
  return { isActive: P(t), pause: n, resume: o, eventFilter: r };
}
function ue(e) {
  return x();
}
function le(...e) {
  if (e.length !== 1) return Z(...e);
  const t = e[0];
  return typeof t == "function" ? P(ee(() => ({ get: t, set: G }))) : D(t);
}
function ce(e, t, n = {}) {
  const { eventFilter: o = H, ...r } = n;
  return W(e, se(o, t), r);
}
function fe(e, t, n = {}) {
  const { eventFilter: o, ...r } = n, { eventFilter: s, pause: u, resume: i, isActive: l } = ie(o);
  return { stop: ce(e, t, { ...r, eventFilter: s }), pause: u, resume: i, isActive: l };
}
function I(e, t = true, n) {
  ue() ? z(e, n) : t ? e() : J(e);
}
function Ae(e = false, t = {}) {
  const { truthyValue: n = true, falsyValue: o = false } = t, r = Y(e), s = D(e);
  function u(i) {
    if (arguments.length) return s.value = i, s.value;
    {
      const l = O(n);
      return s.value = s.value === l ? O(o) : l, s.value;
    }
  }
  return r ? u : [s, u];
}
function K(e) {
  var t;
  const n = O(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const M = re ? window : void 0;
function R(...e) {
  let t, n, o, r;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, r] = e, t = M) : [t, n, o, r] = e, !t) return G;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const s = [], u = () => {
    s.forEach((m) => m()), s.length = 0;
  }, i = (m, c, S, h) => (m.addEventListener(c, S, h), () => m.removeEventListener(c, S, h)), l = W(() => [K(t), O(r)], ([m, c]) => {
    if (u(), !m) return;
    const S = oe(c) ? { ...c } : c;
    s.push(...n.flatMap((h) => o.map((v) => i(m, h, v, S))));
  }, { immediate: true, flush: "post" }), p = () => {
    l(), u();
  };
  return B(p), p;
}
function de() {
  const e = D(false), t = x();
  return t && z(() => {
    e.value = true;
  }, t), e;
}
function pe(e) {
  const t = de();
  return E(() => (t.value, !!e()));
}
function me(e, t = {}) {
  const { window: n = M } = t, o = pe(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let r;
  const s = D(false), u = (p) => {
    s.value = p.matches;
  }, i = () => {
    r && ("removeEventListener" in r ? r.removeEventListener("change", u) : r.removeListener(u));
  }, l = ne(() => {
    o.value && (i(), r = n.matchMedia(O(e)), "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u), s.value = r.matches);
  });
  return B(() => {
    l(), i(), r = void 0;
  }), s;
}
const N = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, j = "__vueuse_ssr_handlers__", ge = he();
function he() {
  return j in N || (N[j] = N[j] || {}), N[j];
}
function Q(e, t) {
  return ge[e] || t;
}
function ve(e) {
  return e == null ? "any" : e instanceof Set ? "set" : e instanceof Map ? "map" : e instanceof Date ? "date" : typeof e == "boolean" ? "boolean" : typeof e == "string" ? "string" : typeof e == "object" ? "object" : Number.isNaN(e) ? "any" : "number";
}
const ye = { boolean: { read: (e) => e === "true", write: (e) => String(e) }, object: { read: (e) => JSON.parse(e), write: (e) => JSON.stringify(e) }, number: { read: (e) => Number.parseFloat(e), write: (e) => String(e) }, any: { read: (e) => e, write: (e) => String(e) }, string: { read: (e) => e, write: (e) => String(e) }, map: { read: (e) => new Map(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e.entries())) }, set: { read: (e) => new Set(JSON.parse(e)), write: (e) => JSON.stringify(Array.from(e)) }, date: { read: (e) => new Date(e), write: (e) => e.toISOString() } }, V = "vueuse-storage";
function we(e, t, n, o = {}) {
  var r;
  const { flush: s = "pre", deep: u = true, listenToStorageChanges: i = true, writeDefaults: l = true, mergeDefaults: p = false, shallow: m, window: c = M, eventFilter: S, onError: h = (a) => {
    console.error(a);
  }, initOnMounted: v } = o, g = (m ? te : D)(typeof t == "function" ? t() : t);
  if (!n) try {
    n = Q("getDefaultStorage", () => {
      var a;
      return (a = M) == null ? void 0 : a.localStorage;
    })();
  } catch (a) {
    h(a);
  }
  if (!n) return g;
  const w = O(t), L = ve(w), b = (r = o.serializer) != null ? r : ye[L], { pause: T, resume: f } = fe(g, () => _(g.value), { flush: s, deep: u, eventFilter: S });
  c && i && I(() => {
    R(c, "storage", y), R(c, V, F), v && y();
  }), v || y();
  function A(a, d) {
    c && c.dispatchEvent(new CustomEvent(V, { detail: { key: e, oldValue: a, newValue: d, storageArea: n } }));
  }
  function _(a) {
    try {
      const d = n.getItem(e);
      if (a == null) A(d, null), n.removeItem(e);
      else {
        const C = b.write(a);
        d !== C && (n.setItem(e, C), A(d, C));
      }
    } catch (d) {
      h(d);
    }
  }
  function k(a) {
    const d = a ? a.newValue : n.getItem(e);
    if (d == null) return l && w != null && n.setItem(e, b.write(w)), w;
    if (!a && p) {
      const C = b.read(d);
      return typeof p == "function" ? p(C, w) : L === "object" && !Array.isArray(C) ? { ...w, ...C } : C;
    } else return typeof d != "string" ? d : b.read(d);
  }
  function y(a) {
    if (!(a && a.storageArea !== n)) {
      if (a && a.key == null) {
        g.value = w;
        return;
      }
      if (!(a && a.key !== e)) {
        T();
        try {
          (a == null ? void 0 : a.newValue) !== b.write(g.value) && (g.value = k(a));
        } catch (d) {
          h(d);
        } finally {
          a ? J(f) : f();
        }
      }
    }
  }
  function F(a) {
    y(a.detail);
  }
  return g;
}
function $(e) {
  return me("(prefers-color-scheme: dark)", e);
}
function Se(e = {}) {
  const { selector: t = "html", attribute: n = "class", initialValue: o = "auto", window: r = M, storage: s, storageKey: u = "vueuse-color-scheme", listenToStorageChanges: i = true, storageRef: l, emitAuto: p, disableTransition: m = true } = e, c = { auto: "", light: "light", dark: "dark", ...e.modes || {} }, S = $({ window: r }), h = E(() => S.value ? "dark" : "light"), v = l || (u == null ? le(o) : we(u, o, s, { window: r, listenToStorageChanges: i })), g = E(() => v.value === "auto" ? h.value : v.value), w = Q("updateHTMLAttrs", (f, A, _) => {
    const k = typeof f == "string" ? r == null ? void 0 : r.document.querySelector(f) : K(f);
    if (!k) return;
    let y;
    if (m && (y = r.document.createElement("style"), y.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), r.document.head.appendChild(y)), A === "class") {
      const F = _.split(/\s/g);
      Object.values(c).flatMap((a) => (a || "").split(/\s/g)).filter(Boolean).forEach((a) => {
        F.includes(a) ? k.classList.add(a) : k.classList.remove(a);
      });
    } else k.setAttribute(A, _);
    m && (r.getComputedStyle(y).opacity, document.head.removeChild(y));
  });
  function L(f) {
    var A;
    w(t, n, (A = c[f]) != null ? A : f);
  }
  function b(f) {
    e.onChanged ? e.onChanged(f, L) : L(f);
  }
  W(g, b, { flush: "post", immediate: true }), I(() => b(g.value));
  const T = E({ get() {
    return p ? v.value : g.value;
  }, set(f) {
    v.value = f;
  } });
  try {
    return Object.assign(T, { store: v, system: h, state: g });
  } catch {
    return T;
  }
}
function Ce(e = {}) {
  const { valueDark: t = "dark", valueLight: n = "", window: o = M } = e, r = Se({ ...e, onChanged: (i, l) => {
    var p;
    e.onChanged ? (p = e.onChanged) == null || p.call(e, i === "dark", l, i) : l(i);
  }, modes: { dark: t, light: n } }), s = E(() => r.system ? r.system.value : $({ window: o }).value ? "dark" : "light");
  return E({ get() {
    return r.value === "dark";
  }, set(i) {
    const l = i ? "dark" : "light";
    s.value === l ? r.value = "auto" : r.value = l;
  } });
}
export {
  Ae as a,
  we as b,
  Ce as u
};
