import { _ as s } from "./index-BM3jlCjo.js";
import { E as a } from "./element-plus-B8zTVPh2.js";
const l = async (e) => {
  try {
    const { data: r } = await s.get("/log/levels", { params: { query: e } });
    return r.code !== null && r.code === 2e3 ? r : r.code !== null ? (a.error(`\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25, ${r.message}`), null) : (a.error("\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25"), null);
  } catch (r) {
    a.error(`\u83B7\u53D6\u65E5\u5FD7\u7EA7\u522B\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, c = async (e) => {
  try {
    const { data: r } = await s.get("/logs", { params: { pageNum: e.pageNum, pageSize: e.pageSize, serviceName: e.serviceName, traceId: e.traceId, keyword: e.keyword, keywordNotIncluded: e.keywordNotIncluded, severityText: e.severityText, startTimestamp: e.startTimestamp, endTimestamp: e.endTimestamp } });
    if (r.code !== null && r.code === 2e3) return r;
    if (r.code !== null) return a.error(`\u83B7\u53D6\u65E5\u5FD7\u5217\u8868\u5931\u8D25, ${r.message}`), null;
  } catch (r) {
    a.error(`\u83B7\u53D6\u65E5\u5FD7\u5217\u8868\u5931\u8D25, ${r.message}`);
  }
  return null;
}, d = async () => {
  try {
    const { data: e } = await s.delete("/logs");
    return e.code !== null && e.code === 2e3 ? e : e.code !== null ? (a.error(`\u5220\u9664\u6240\u6709\u65E5\u5FD7\u5931\u8D25, ${e.message}`), null) : (a.error("\u5220\u9664\u6240\u6709\u65E5\u5FD7\u5931\u8D25"), null);
  } catch (e) {
    a.error(`\u5220\u9664\u6240\u6709\u65E5\u5FD7\u5931\u8D25, ${e.message}`);
  }
  return null;
};
export {
  l as a,
  d,
  c as g
};
