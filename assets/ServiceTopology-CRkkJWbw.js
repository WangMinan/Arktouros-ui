import{a as C,b as D,__tla as N}from"./index-BBwaYWlT.js";import{i as R}from"./echarts-DvxK4-OB.js";import{b as q}from"./@vueuse-CYo6n33K.js";import{_ as F,__tla as Q}from"./index-D1Tzy93z.js";import{r as g,b as T,D as W,w as G,c as M,W as t,Q as l,a as c,ai as r,o as P,ay as H,az as J}from"./@vue-CIN5rAIq.js";import"./axios-B4uVmeYG.js";import"./nprogress-D09IqNcY.js";import"./dayjs-Cdlb6j_n.js";import{__tla as K}from"./element-plus-CHAcCvkm.js";import"./lodash-es-D0J8aJCM.js";import"./@element-plus-DDQhs22L.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-B_wA2iF0.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B3govljg.js";import"./pinia-C3d5II23.js";import"./vue-router-BPiurYaj.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";let x,X=Promise.all([(()=>{try{return N}catch{}})(),(()=>{try{return Q}catch{}})(),(()=>{try{return K}catch{}})()]).then(async()=>{let m,v,y,b,h,w,O,k;m=u=>(H("data-v-c92f1520"),u=u(),J(),u),v={class:"topology-container"},y=m(()=>c("a",{href:"/main"},"\u4E3B\u9875",-1)),b=m(()=>c("a",{href:"/main/topology"},"\u670D\u52A1\u62D3\u6251",-1)),h={class:"search-bar"},w={class:"card-container"},O=m(()=>c("div",{id:"service-topology-dom"},null,-1)),k={__name:"ServiceTopology",setup(u){const d=g(""),A=async(a,i)=>{const o=await C(a);if(o===null)return;const e=o.result.map(_=>({value:_}));i(e)},j=g([]),z=g([]),E=async()=>{const a=await D(d.value),i=a.result.nodes;j.value=i.map(e=>e.nodeObject!==null?{draggable:!0,name:e.nodeObject.name,category:e.nodeObject.nodeName,symbolSize:[50,50]}:null);const o=a.result.calls;z.value=o.map(e=>e.source===null||e.target===null?null:{source:e.source.nodeObject.name,target:e.target.nodeObject.name})};let p;T(async()=>{await E(),S(),window.addEventListener("resize",f),p=new ResizeObserver(()=>f),p.observe(document.getElementById("service-topology-dom"))}),W(()=>{window.removeEventListener("resize",f),p.disconnect()});let n;const s=q("theme-appearance","auto"),S=()=>{n&&n.dispose();let a={backgroundColor:s.value==="dark"?"#212224":"#fff",title:{text:"\u670D\u52A1\u5173\u7CFB\u56FE"},tooltip:{trigger:"item",triggerOn:"mousemove",backgroundColor:s.value==="dark"?"#212224":"#fff",textStyle:{color:s.value==="dark"?"#fff":"#212224"}},label:{normal:{show:!0,position:"inside"}},series:[{type:"graph",focusNodeAdjacency:!0,roam:!0,layout:"force",symbol:"circle",data:j.value,links:z.value,label:{normal:{show:!0,position:"inside"}},force:{repulsion:200,edgeLength:100,layoutAnimation:!0},animationEasingUpdate:"quinticInOut",animationDurationUpdate:100}]};n=R(document.getElementById("service-topology-dom"),s.value==="dark"?"dark":"light"),n.setOption(a)},f=()=>{n&&n.resize()};return G(s,()=>{S()}),(a,i)=>{const o=r("el-breadcrumb-item"),e=r("el-breadcrumb"),_=r("el-row"),I=r("Filter"),L=r("el-icon"),U=r("el-autocomplete"),V=r("el-card");return P(),M("div",v,[t(_,null,{default:l(()=>[t(e,{"separator-icon":"ArrowRight"},{default:l(()=>[t(o,null,{default:l(()=>[y]),_:1}),t(o,null,{default:l(()=>[b]),_:1})]),_:1})]),_:1}),c("div",h,[t(U,{class:"auto-complete-input",modelValue:d.value,"onUpdate:modelValue":i[0]||(i[0]=B=>d.value=B),"fetch-suggestions":A,clearable:"",placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4--\u9ED8\u8BA4\u4E3Adefault",onSelect:E,style:{width:"40%"}},{prepend:l(()=>[t(L,null,{default:l(()=>[t(I)]),_:1})]),_:1},8,["modelValue"])]),c("div",w,[t(V,null,{default:l(()=>[O]),_:1})])])}}},x=F(k,[["__scopeId","data-v-c92f1520"]])});export{X as __tla,x as default};
