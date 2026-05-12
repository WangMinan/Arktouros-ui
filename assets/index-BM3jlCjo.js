import { a as c } from "./axios-B8_nURbH.js";
import { N as o } from "./nprogress-Du6PRFDQ.js";
import { r as n } from "./index-COTCo5V6.js";
import { E as t } from "./element-plus-B8zTVPh2.js";
import { a as l } from "./arktourosUiConfigUtil-0zbcKwuZ.js";
o.configure({ easing: "ease", speed: 1e3, showSpinner: false, trickleSpeed: 200, minimum: 0.3, parent: "body" });
const i = () => {
  o.start();
}, u = () => {
  o.done();
}, s = c.create({ baseURL: l() });
s.interceptors.request.use((e) => (i(), e), (e) => Promise.reject(e));
s.interceptors.response.use(async (e) => {
  if (u(), e.data.code === void 0) t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458");
  else switch (e.data.code) {
    case 2e3:
      return e;
    case 400:
      return t.error(e.data.msg), Promise.reject(e);
    case 4040:
      t.error("\u60A8\u7684\u8BF7\u6C42\u7684\u8D44\u6E90\u4E0D\u5B58\u5728,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0"), n.push(n.currentRoute.value.fullPath).then((r) => r);
      break;
    case 5e3:
      t.error("\u540E\u7AEF\u670D\u52A1\u5F02\u5E38,\u5F53\u524D\u9875\u9762\u5C06\u88AB\u5237\u65B0,\u82E5\u65E0\u6548\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), n.push(n.currentRoute.value.fullPath).then((r) => r);
      break;
    default:
      return e;
  }
}, (e) => (u(), t.error("\u540E\u7AEF\u670D\u52A1\u5668\u5F02\u5E38,\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458"), Promise.reject(e)));
const h = async (e) => {
  try {
    const { data: r } = await s.get("/service/namespaces", { params: { query: e } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (t.error("\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    t.error(`\u83B7\u53D6\u547D\u540D\u7A7A\u95F4\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, y = async (e) => {
  try {
    const { data: r } = await s.get("/services", { params: { query: e.query, namespace: e.namespace, pageNum: e.pageNum, pageSize: e.pageSize } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, v = async (e, r) => {
  try {
    e || (e = "default"), r == null && (r = Date.now());
    const { data: a } = await s.get("/service/topology", { params: { namespace: e, timestamp: r } });
    return a.code !== null && a.code === 2e3 ? a : a.code !== null ? (t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${a.message}`), null) : (t.error("\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25"), null);
  } catch (a) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u5217\u8868\u5931\u8D25, ${a.message}`);
  }
  return null;
}, $ = async () => {
  try {
    const { data: e } = await s.get("/service/time-range", {});
    if (e.code !== null && e.code === 2e3) return e;
    if (e.code !== null) return t.error(`\u83B7\u53D6\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5931\u8D25, ${e.message}`), null;
  } catch (e) {
    t.error(`\u83B7\u53D6\u670D\u52A1\u65F6\u95F4\u8303\u56F4\u5931\u8D25, ${e.message}`);
  }
  return null;
};
export {
  s as _,
  h as a,
  $ as b,
  v as c,
  y as g
};
