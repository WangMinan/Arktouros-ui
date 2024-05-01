import{_ as Q,a as Y,g as j,__tla as K}from"./index-CWP6D7WF.js";import{E as h,__tla as X}from"./element-plus-CHlFWOkj.js";import{b as Z}from"./@vueuse-D5Vj-tvK.js";import{i as ee}from"./echarts-DvxK4-OB.js";import{t as te}from"./dateUtil-C89_o2kc.js";import{_ as ae,__tla as le}from"./index-DdqAK7KX.js";import{r as g,_ as re,w as ie,b as me,D as se,c as w,W as i,Q as o,F as M,ai as n,o as T,a as k,U as oe,a8 as ne,T as ue,ay as ce,az as pe}from"./@vue-DhG-XJKL.js";import"./axios-B6xwUs71.js";import"./nprogress-D09IqNcY.js";import"./dayjs-Cdlb6j_n.js";import"./lodash-es-D0J8aJCM.js";import"./@element-plus-0lkil4R3.js";import"./@popperjs-CsO2-mKt.js";import"./@ctrl-r5W6hzzQ.js";import"./async-validator-BTg-XjMW.js";import"./memoize-one-BdPwpGay.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@floating-ui-CYeB_Mhp.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B3govljg.js";import"./pinia-CbaxZSHO.js";import"./vue-router-BGt09ffl.js";import"./pinia-plugin-persistedstate-Bts6f1YT.js";let O,de=Promise.all([(()=>{try{return K}catch{}})(),(()=>{try{return X}catch{}})(),(()=>{try{return le}catch{}})()]).then(async()=>{let x,N,z,A,L,V,C,I;x=async u=>{try{const{data:m}=await Q.get("/metric",{params:{serviceName:u.serviceName,metricNameLimit:u.metricNameLimit,startTimeStamp:u.startTimeStamp,endTimeStamp:u.endTimeStamp}});return m.code!==null&&m.code===2e3?m:m.code!==null?(h.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${m.message}`),null):(h.error("\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25"),null)}catch(m){h.error(`\u83B7\u53D6\u6570\u503C\u5217\u8868\u5931\u8D25, ${m.message}`)}return null},N=u=>(ce("data-v-82e923ef"),u=u(),pe(),u),z=N(()=>k("a",{href:"/main"},"\u4E3B\u9875",-1)),A=N(()=>k("a",{href:"/main/metric"},"\u6570\u503C\u6982\u89C8",-1)),L={class:"search-area"},V={key:0,class:"graph-div"},C=["id"],I={__name:"MetricMain",setup(u){const m=g({serviceName:"",metricNameLimit:0,startTimeStamp:0,endTimeStamp:0}),y=g([]),B=re({lazy:!0,async lazyLoad(e,l){const t=[],{level:s}=e;if(s===0){const r=await Y();if(r===null)return;r.result.map(a=>({leaf:!1,value:a,label:a})).forEach(a=>{t.push(a)})}else if(s===1){const r=await j({query:"",namespace:e.value,pageNum:1,pageSize:1e3});if(r===null)return;r.result.data.map(a=>({leaf:!0,value:a.name,label:a.name===""?"null":a.name})).forEach(a=>{t.push(a)})}l(t)}}),_=g(),p=g([{name:"",serviceName:"",metricType:"",metrics:[]}]),W=()=>{_.value&&(m.value.serviceName=_.value[1])},D=async()=>{c&&c.forEach(t=>t.dispose()),p.value=[],b.value=!0;const e=JSON.parse(JSON.stringify(m.value));if(e.serviceName==="null"&&(e.serviceName=""),e.metricNameLimit===0&&(e.metricNameLimit=null),y.value.length===2)e.startTimeStamp=Date.parse(y.value[0]),e.endTimeStamp=Date.parse(y.value[1]);else{h.warning("\u5F53\u524D\u4E3A\u6B63\u5F0F\u73AF\u5883, \u65F6\u95F4\u8303\u56F4\u7F6E\u7A7A\u65F6\u9ED8\u8BA4\u83B7\u53D6\u8FD1\u534A\u4E2A\u5C0F\u65F6\u5185\u7684\u65E5\u5FD7");const t=new Date;e.startTimestamp=t.getTime()-30*60*1e3,e.endTimestamp=t.getTime()}const l=await x(e);if(l!==null)if(l.result&&l.result.length!==0){for(b.value=!1,l.result.forEach(t=>{t.metrics.forEach(s=>{s.timestamp=te(s.timestamp)})}),p.value=l.result;!document.getElementById("metric-graph-"+(p.value.length-1));)await new Promise(t=>setTimeout(t,100));for(let t=0;t<p.value.length;t++)try{R(p.value[t],t)}catch(s){h.error(s)}}else b.value=!0},b=g(!0);let c=[];const d=Z("theme-appearance","auto");ie(d,()=>{c&&c.forEach(e=>e.dispose());for(let e=0;e<p.value.length;e++)try{R(p.value[e],e)}catch(l){h.error(l)}});let S;me(()=>{c&&c.forEach(e=>e.dispose()),window.addEventListener("resize",E),S=new ResizeObserver(()=>E),S.observe(document.getElementById("metricCardRef"))}),se(()=>{window.removeEventListener("resize",E),S.disconnect()});const E=()=>{c&&c.forEach(e=>{e.resize()})},R=(e,l)=>{let t={backgroundColor:d.value==="dark"?"#212224":"#fff",title:{text:e.name.replace(/_/g," "),textStyle:{fontWeight:"bold",fontSize:14,lineHeight:16,width:document.getElementById("metric-graph-"+l).offsetWidth-20,overflow:"break"},subtext:e.metrics[0].description?e.metrics[0].description:"",subtextStyle:{fontSize:10,lineHeight:12,width:document.getElementById("metric-graph-"+l).offsetWidth-20,overflow:"break"}},tooltip:{trigger:"item",axisPointer:{type:"cross"},backgroundColor:d.value==="dark"?"#212224":"#fff",textStyle:{color:d.value==="dark"?"#fff":"#212224"}}};if(e.metricType==="GAUGE"||e.metricType==="COUNTER")e.metrics.length>=2?(t.xAxis={type:"category",data:e.metrics.map(r=>r.timestamp)},t.yAxis={type:"value"},t.series=[{data:e.metrics.map(r=>Number(r.value)),type:"line"}]):(t.series=[{type:"scatter",symbolSize:1,data:[{value:[0,0],label:{show:!0,formatter:e.metrics[0].value+"",fontSize:20,fontWeight:"bold",color:d.value==="dark"?"#ff0000":"#992233"}}]}],t.xAxis={show:!1,min:-1,max:1},t.yAxis={show:!1,min:-1,max:1});else if(e.metricType==="HISTOGRAM"||e.metricType==="SUMMARY"){let r=[];for(const a in e.metrics[0].buckets)r.push({key:a,value:e.metrics[0].buckets[a]});r.sort((a,f)=>a.key-f.key),t.xAxis={type:"category",data:r.map(a=>a.key)},t.yAxis={type:"value"},t.series=[{data:r.map(a=>Number(a.value)),type:"bar"}]}let s=ee(document.getElementById("metric-graph-"+l),d.value==="dark"?"dark":"light");s.setOption(t),c.push(s)};return(e,l)=>{const t=n("el-breadcrumb-item"),s=n("el-breadcrumb"),r=n("el-row"),a=n("el-cascader"),f=n("el-form-item"),G=n("el-input-number"),H=n("el-tooltip"),P=n("el-date-picker"),J=n("el-button"),$=n("el-form"),q=n("el-divider"),F=n("el-card");return T(),w(M,null,[i(r,null,{default:o(()=>[i(s,{"separator-icon":"ArrowRight"},{default:o(()=>[i(t,null,{default:o(()=>[z]),_:1}),i(t,null,{default:o(()=>[A]),_:1})]),_:1})]),_:1}),i(F,{class:"metric-card",id:"metricCardRef"},{default:o(()=>[k("div",L,[i($,{inline:!0,model:m.value,class:"demo-form-inline"},{default:o(()=>[i(f,{label:"\u670D\u52A1\u540D\u79F0"},{default:o(()=>[i(a,{placeholder:"\u8BF7\u9009\u62E9\u547D\u540D\u7A7A\u95F4\u2192\u670D\u52A1\u540D\u79F0",modelValue:_.value,"onUpdate:modelValue":l[0]||(l[0]=v=>_.value=v),clearable:"",props:B,"show-all-levels":!1,onChange:W},null,8,["modelValue","props"])]),_:1}),i(f,{label:"\u56FE\u8868\u6570\u91CF"},{default:o(()=>[i(H,{effect:"light",content:"\u7F6E0\u65F6\u8868\u793A\u641C\u7D22\u670D\u52A1\u4E0B\u6240\u6709\u6570\u503C\u8BB0\u5F55",placement:"top",enterable:!1},{default:o(()=>[i(G,{min:0,modelValue:m.value.metricNameLimit,"onUpdate:modelValue":l[1]||(l[1]=v=>m.value.metricNameLimit=v)},null,8,["modelValue"])]),_:1})]),_:1}),i(f,{label:"\u8D77\u6B62\u65F6\u95F4"},{default:o(()=>[i(P,{modelValue:y.value,"onUpdate:modelValue":l[2]||(l[2]=v=>y.value=v),type:"datetimerange","range-separator":"\u5230","start-placeholder":"\u5F00\u59CB\u65F6\u95F4","end-placeholder":"\u7ED3\u675F\u65F6\u95F4"},null,8,["modelValue"])]),_:1}),i(f,null,{default:o(()=>[i(J,{type:"primary",onClick:D},{default:o(()=>[oe("\u641C\u7D22")]),_:1})]),_:1})]),_:1},8,["model"])]),i(q),b.value?ue("",!0):(T(),w("div",V,[(T(!0),w(M,null,ne(p.value,(v,U)=>(T(),w("div",{class:"graph-card",key:U},[k("div",{class:"graph-item",id:"metric-graph-"+U},null,8,C)]))),128))]))]),_:1})],64)}}},O=ae(I,[["__scopeId","data-v-82e923ef"]])});export{de as __tla,O as default};
