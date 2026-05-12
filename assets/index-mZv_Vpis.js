import { d as s } from "./pinia-Cy2NSX6c.js";
import { r } from "./@vue-cXHrMgsi.js";
const a = s("aside", () => {
  const e = r({ active: "", isCollapse: false });
  return { currentAside: e, resetActive: () => {
    e.value.active = "";
  } };
}, { persist: { storage: sessionStorage, paths: ["currentAside"], key: "currentAside" } });
export {
  a as u
};
