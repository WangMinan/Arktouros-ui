import { _ as l } from "./index-BM3jlCjo.js";
import { E as r } from "./element-plus-B8zTVPh2.js";
const i = async (e) => {
  try {
    const { data: a } = await l.get("/trace/endPoints", { params: { serviceName: e.serviceName, pageNum: e.pageNum, pageSize: e.pageSize, startTimestamp: e.startTimestamp, endTimestamp: e.endTimestamp } });
    return a.code !== null && a.code === 2e3 ? a : a.code !== null ? (r.error(`\u83B7\u53D6traceId\u8868\u5931\u8D25, ${a.message}`), null) : (r.error("\u83B7\u53D6traceId\u8868\u5931\u8D25"), null);
  } catch (a) {
    r.error(`\u83B7\u53D6traceId\u8868\u5931\u8D25, ${a.message}`);
  }
  return null;
}, u = async (e, a, c, t, s) => {
  try {
    const { data: n } = await l.get("/trace/topology", { params: { traceId: e, serviceName: a, innerService: c, startTimestamp: t, stopTimestamp: s } });
    return n.code !== null && n.code === 2e3 ? n : n.code !== null ? (r.error(`\u83B7\u53D6trace\u4E0B\u62D3\u6251\u5931\u8D25, ${n.message}`), null) : (r.error("\u83B7\u53D6trace\u4E0B\u62D3\u6251\u5931\u8D25"), null);
  } catch (n) {
    r.error(`\u83B7\u53D6trace\u4E0B\u62D3\u6251\u5931\u8D25, ${n.message}`);
  }
  return null;
}, p = async (e, a, c) => {
  try {
    const { data: t } = await l.get("/trace/spanNames", { params: { serviceName: e, startTimestamp: a, stopTimestamp: c } });
    if (t.code !== null && t.code === 2e3) return t;
    if (t.code !== null) return r.error(`\u83B7\u53D6trace\u4E0BspanName\u5217\u8868\u5931\u8D25, ${t.message}`), null;
  } catch (t) {
    r.error(`\u83B7\u53D6trace\u4E0BspanName\u5217\u8868\u5931\u8D25, ${t.message}`);
  }
  return null;
}, d = async (e, a, c, t) => {
  try {
    const { data: s } = await l.get("/trace/spanTimes", { params: { serviceName: e, spanName: a, startTimestamp: c, endTimestamp: t } });
    if (s.code !== null && s.code === 2e3) return s;
    if (s.code !== null) return r.error(`\u83B7\u53D6trace\u4E0BspanTimes\u5217\u8868\u5931\u8D25, ${s.message}`), null;
  } catch (s) {
    r.error(`\u83B7\u53D6trace\u4E0BspanTimes\u5217\u8868\u5931\u8D25, ${s.message}`);
  }
  return null;
}, g = async () => {
  try {
    const { data: e } = await l.delete("/trace/spans");
    return e.code !== null && e.code === 2e3 ? e : e.code !== null ? (r.error(`\u5220\u9664\u6240\u6709span\u5931\u8D25, ${e.message}`), null) : (r.error("\u5220\u9664\u6240\u6709span\u5931\u8D25"), null);
  } catch (e) {
    r.error(`\u5220\u9664\u6240\u6709span\u5931\u8D25, ${e.message}`);
  }
  return null;
};
export {
  u as a,
  d as b,
  p as c,
  g as d,
  i as g
};
