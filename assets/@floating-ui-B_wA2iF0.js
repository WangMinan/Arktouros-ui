const N=Math.min,M=Math.max,U=Math.round,Z=Math.floor,P=t=>({x:t,y:t}),Dt={left:"right",right:"left",bottom:"top",top:"bottom"},St={start:"end",end:"start"};function it(t,e,o){return M(t,N(e,o))}function G(t,e){return typeof t=="function"?t(e):t}function V(t){return t.split("-")[0]}function J(t){return t.split("-")[1]}function ht(t){return t==="x"?"y":"x"}function rt(t){return t==="y"?"height":"width"}function tt(t){return["top","bottom"].includes(V(t))?"y":"x"}function lt(t){return ht(tt(t))}function Ct(t,e,o){o===void 0&&(o=!1);const n=J(t),i=lt(t),l=rt(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[l]>e.floating[l]&&(r=et(r)),[r,et(r)]}function kt(t){const e=et(t);return[ct(t),e,ct(e)]}function ct(t){return t.replace(/start|end/g,e=>St[e])}function Ft(t,e,o){const n=["left","right"],i=["right","left"],l=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?l:r;default:return[]}}function Pt(t,e,o,n){const i=J(t);let l=Ft(V(t),o==="start",n);return i&&(l=l.map(r=>r+"-"+i),e&&(l=l.concat(l.map(ct)))),l}function et(t){return t.replace(/left|right|bottom|top/g,e=>Dt[e])}function Ht(t){return{top:0,right:0,bottom:0,left:0,...t}}function pt(t){return typeof t!="number"?Ht(t):{top:t,right:t,bottom:t,left:t}}function nt(t){const{x:e,y:o,width:n,height:i}=t;return{width:n,height:i,top:o,left:e,right:e+n,bottom:o+i,x:e,y:o}}function gt(t,e,o){let{reference:n,floating:i}=t;const l=tt(e),r=lt(e),c=rt(r),s=V(e),a=l==="y",u=n.x+n.width/2-i.width/2,d=n.y+n.height/2-i.height/2,p=n[c]/2-i[c]/2;let f;switch(s){case"top":f={x:u,y:n.y-i.height};break;case"bottom":f={x:u,y:n.y+n.height};break;case"right":f={x:n.x+n.width,y:d};break;case"left":f={x:n.x-i.width,y:d};break;default:f={x:n.x,y:n.y}}switch(J(e)){case"start":f[r]-=p*(o&&a?-1:1);break;case"end":f[r]+=p*(o&&a?-1:1);break}return f}const Wt=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:l=[],platform:r}=o,c=l.filter(Boolean),s=await(r.isRTL==null?void 0:r.isRTL(e));let a=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:u,y:d}=gt(a,n,s),p=n,f={},m=0;for(let h=0;h<c.length;h++){const{name:y,fn:g}=c[h],{x:w,y:x,data:v,reset:b}=await g({x:u,y:d,initialPlacement:n,placement:p,strategy:i,middlewareData:f,rects:a,platform:r,elements:{reference:t,floating:e}});u=w??u,d=x??d,f={...f,[y]:{...f[y],...v}},b&&m<=50&&(m++,typeof b=="object"&&(b.placement&&(p=b.placement),b.rects&&(a=b.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):b.rects),{x:u,y:d}=gt(a,p,s)),h=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:f}};async function st(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:l,rects:r,elements:c,strategy:s}=t,{boundary:a="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=G(e,t),m=pt(f),h=c[p?d==="floating"?"reference":"floating":d],y=nt(await l.getClippingRect({element:(o=await(l.isElement==null?void 0:l.isElement(h)))==null||o?h:h.contextElement||await(l.getDocumentElement==null?void 0:l.getDocumentElement(c.floating)),boundary:a,rootBoundary:u,strategy:s})),g=d==="floating"?{x:n,y:i,width:r.floating.width,height:r.floating.height}:r.reference,w=await(l.getOffsetParent==null?void 0:l.getOffsetParent(c.floating)),x=await(l.isElement==null?void 0:l.isElement(w))?await(l.getScale==null?void 0:l.getScale(w))||{x:1,y:1}:{x:1,y:1},v=nt(l.convertOffsetParentRelativeRectToViewportRelativeRect?await l.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:g,offsetParent:w,strategy:s}):g);return{top:(y.top-v.top+m.top)/x.y,bottom:(v.bottom-y.bottom+m.bottom)/x.y,left:(y.left-v.left+m.left)/x.x,right:(v.right-y.right+m.right)/x.x}}const Bt=t=>({name:"arrow",options:t,async fn(e){const{x:o,y:n,placement:i,rects:l,platform:r,elements:c,middlewareData:s}=e,{element:a,padding:u=0}=G(t,e)||{};if(a==null)return{};const d=pt(u),p={x:o,y:n},f=lt(i),m=rt(f),h=await r.getDimensions(a),y=f==="y",g=y?"top":"left",w=y?"bottom":"right",x=y?"clientHeight":"clientWidth",v=l.reference[m]+l.reference[f]-p[f]-l.floating[m],b=p[f]-l.reference[f],W=await(r.getOffsetParent==null?void 0:r.getOffsetParent(a));let A=W?W[x]:0;(!A||!await(r.isElement==null?void 0:r.isElement(W)))&&(A=c.floating[x]||l.floating[m]);const B=v/2-b/2,$=A/2-h[m]/2-1,X=N(d[g],$),Y=N(d[w],$),T=X,j=A-h[m]-Y,R=A/2-h[m]/2+B,O=it(T,R,j),D=!s.arrow&&J(i)!=null&&R!==O&&l.reference[m]/2-(R<T?X:Y)-h[m]/2<0,k=D?R<T?R-T:R-j:0;return{[f]:p[f]+k,data:{[f]:O,centerOffset:R-O-k,...D&&{alignmentOffset:k}},reset:D}}}),Mt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o,n;const{placement:i,middlewareData:l,rects:r,initialPlacement:c,platform:s,elements:a}=e,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:m="none",flipAlignment:h=!0,...y}=G(t,e);if((o=l.arrow)!=null&&o.alignmentOffset)return{};const g=V(i),w=V(c)===c,x=await(s.isRTL==null?void 0:s.isRTL(a.floating)),v=p||(w||!h?[et(c)]:kt(c));!p&&m!=="none"&&v.push(...Pt(c,h,m,x));const b=[c,...v],W=await st(e,y),A=[];let B=((n=l.flip)==null?void 0:n.overflows)||[];if(u&&A.push(W[g]),d){const T=Ct(i,r,x);A.push(W[T[0]],W[T[1]])}if(B=[...B,{placement:i,overflows:A}],!A.every(T=>T<=0)){var $,X;const T=((($=l.flip)==null?void 0:$.index)||0)+1,j=b[T];if(j)return{data:{index:T,overflows:B},reset:{placement:j}};let R=(X=B.filter(O=>O.overflows[0]<=0).sort((O,D)=>O.overflows[1]-D.overflows[1])[0])==null?void 0:X.placement;if(!R)switch(f){case"bestFit":{var Y;const O=(Y=B.map(D=>[D.placement,D.overflows.filter(k=>k>0).reduce((k,Ot)=>k+Ot,0)]).sort((D,k)=>D[1]-k[1])[0])==null?void 0:Y[0];O&&(R=O);break}case"initialPlacement":R=c;break}if(i!==R)return{reset:{placement:R}}}return{}}}};async function Vt(t,e){const{placement:o,platform:n,elements:i}=t,l=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=V(o),c=J(o),s=tt(o)==="y",a=["left","top"].includes(r)?-1:1,u=l&&s?-1:1,d=G(e,t);let{mainAxis:p,crossAxis:f,alignmentAxis:m}=typeof d=="number"?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return c&&typeof m=="number"&&(f=c==="end"?m*-1:m),s?{x:f*u,y:p*a}:{x:p*a,y:f*u}}const zt=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var o,n;const{x:i,y:l,placement:r,middlewareData:c}=e,s=await Vt(e,t);return r===((o=c.offset)==null?void 0:o.placement)&&(n=c.arrow)!=null&&n.alignmentOffset?{}:{x:i+s.x,y:l+s.y,data:{...s,placement:r}}}}},Nt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:l=!0,crossAxis:r=!1,limiter:c={fn:y=>{let{x:g,y:w}=y;return{x:g,y:w}}},...s}=G(t,e),a={x:o,y:n},u=await st(e,s),d=tt(V(i)),p=ht(d);let f=a[p],m=a[d];if(l){const y=p==="y"?"top":"left",g=p==="y"?"bottom":"right",w=f+u[y],x=f-u[g];f=it(w,f,x)}if(r){const y=d==="y"?"top":"left",g=d==="y"?"bottom":"right",w=m+u[y],x=m-u[g];m=it(w,m,x)}const h=c.fn({...e,[p]:f,[d]:m});return{...h,data:{x:h.x-o,y:h.y-n}}}}};function q(t){return yt(t)?(t.nodeName||"").toLowerCase():"#document"}function L(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function F(t){var e;return(e=(yt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function yt(t){return t instanceof Node||t instanceof L(t).Node}function S(t){return t instanceof Element||t instanceof L(t).Element}function C(t){return t instanceof HTMLElement||t instanceof L(t).HTMLElement}function wt(t){return typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof L(t).ShadowRoot}function K(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=E(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function qt(t){return["table","td","th"].includes(q(t))}function at(t){const e=ft(),o=E(t);return o.transform!=="none"||o.perspective!=="none"||(o.containerType?o.containerType!=="normal":!1)||!e&&(o.backdropFilter?o.backdropFilter!=="none":!1)||!e&&(o.filter?o.filter!=="none":!1)||["transform","perspective","filter"].some(n=>(o.willChange||"").includes(n))||["paint","layout","strict","content"].some(n=>(o.contain||"").includes(n))}function It(t){let e=H(t);for(;C(e)&&!I(e);){if(at(e))return e;e=H(e)}return null}function ft(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function I(t){return["html","body","#document"].includes(q(t))}function E(t){return L(t).getComputedStyle(t)}function ot(t){return S(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function H(t){if(q(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wt(t)&&t.host||F(t);return wt(e)?e.host:e}function xt(t){const e=H(t);return I(e)?t.ownerDocument?t.ownerDocument.body:t.body:C(e)&&K(e)?e:xt(e)}function Q(t,e,o){var n;e===void 0&&(e=[]),o===void 0&&(o=!0);const i=xt(t),l=i===((n=t.ownerDocument)==null?void 0:n.body),r=L(i);return l?e.concat(r,r.visualViewport||[],K(i)?i:[],r.frameElement&&o?Q(r.frameElement):[]):e.concat(i,Q(i,[],o))}function vt(t){const e=E(t);let o=parseFloat(e.width)||0,n=parseFloat(e.height)||0;const i=C(t),l=i?t.offsetWidth:o,r=i?t.offsetHeight:n,c=U(o)!==l||U(n)!==r;return c&&(o=l,n=r),{width:o,height:n,$:c}}function ut(t){return S(t)?t:t.contextElement}function _(t){const e=ut(t);if(!C(e))return P(1);const o=e.getBoundingClientRect(),{width:n,height:i,$:l}=vt(e);let r=(l?U(o.width):o.width)/n,c=(l?U(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}const _t=P(0);function bt(t){const e=L(t);return!ft()||!e.visualViewport?_t:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function $t(t,e,o){return e===void 0&&(e=!1),!o||e&&o!==L(t)?!1:e}function z(t,e,o,n){e===void 0&&(e=!1),o===void 0&&(o=!1);const i=t.getBoundingClientRect(),l=ut(t);let r=P(1);e&&(n?S(n)&&(r=_(n)):r=_(t));const c=$t(l,o,n)?bt(l):P(0);let s=(i.left+c.x)/r.x,a=(i.top+c.y)/r.y,u=i.width/r.x,d=i.height/r.y;if(l){const p=L(l),f=n&&S(n)?L(n):n;let m=p,h=m.frameElement;for(;h&&n&&f!==m;){const y=_(h),g=h.getBoundingClientRect(),w=E(h),x=g.left+(h.clientLeft+parseFloat(w.paddingLeft))*y.x,v=g.top+(h.clientTop+parseFloat(w.paddingTop))*y.y;s*=y.x,a*=y.y,u*=y.x,d*=y.y,s+=x,a+=v,m=L(h),h=m.frameElement}}return nt({width:u,height:d,x:s,y:a})}const Xt=[":popover-open",":modal"];function dt(t){return Xt.some(e=>{try{return t.matches(e)}catch{return!1}})}function Yt(t){let{elements:e,rect:o,offsetParent:n,strategy:i}=t;const l=i==="fixed",r=F(n),c=e?dt(e.floating):!1;if(n===r||c&&l)return o;let s={scrollLeft:0,scrollTop:0},a=P(1);const u=P(0),d=C(n);if((d||!d&&!l)&&((q(n)!=="body"||K(r))&&(s=ot(n)),C(n))){const p=z(n);a=_(n),u.x=p.x+n.clientLeft,u.y=p.y+n.clientTop}return{width:o.width*a.x,height:o.height*a.y,x:o.x*a.x-s.scrollLeft*a.x+u.x,y:o.y*a.y-s.scrollTop*a.y+u.y}}function jt(t){return Array.from(t.getClientRects())}function Rt(t){return z(F(t)).left+ot(t).scrollLeft}function Gt(t){const e=F(t),o=ot(t),n=t.ownerDocument.body,i=M(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),l=M(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+Rt(t);const c=-o.scrollTop;return E(n).direction==="rtl"&&(r+=M(e.clientWidth,n.clientWidth)-i),{width:i,height:l,x:r,y:c}}function Jt(t,e){const o=L(t),n=F(t),i=o.visualViewport;let l=n.clientWidth,r=n.clientHeight,c=0,s=0;if(i){l=i.width,r=i.height;const a=ft();(!a||a&&e==="fixed")&&(c=i.offsetLeft,s=i.offsetTop)}return{width:l,height:r,x:c,y:s}}function Kt(t,e){const o=z(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,l=C(t)?_(t):P(1),r=t.clientWidth*l.x,c=t.clientHeight*l.y,s=i*l.x,a=n*l.y;return{width:r,height:c,x:s,y:a}}function Lt(t,e,o){let n;if(e==="viewport")n=Jt(t,o);else if(e==="document")n=Gt(F(t));else if(S(e))n=Kt(e,o);else{const i=bt(t);n={...e,x:e.x-i.x,y:e.y-i.y}}return nt(n)}function Tt(t,e){const o=H(t);return o===e||!S(o)||I(o)?!1:E(o).position==="fixed"||Tt(o,e)}function Qt(t,e){const o=e.get(t);if(o)return o;let n=Q(t,[],!1).filter(c=>S(c)&&q(c)!=="body"),i=null;const l=E(t).position==="fixed";let r=l?H(t):t;for(;S(r)&&!I(r);){const c=E(r),s=at(r);!s&&c.position==="fixed"&&(i=null),(l?!s&&!i:!s&&c.position==="static"&&i&&["absolute","fixed"].includes(i.position)||K(r)&&!s&&Tt(t,r))?n=n.filter(a=>a!==r):i=c,r=H(r)}return e.set(t,n),n}function Ut(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const l=[...o==="clippingAncestors"?dt(e)?[]:Qt(e,this._c):[].concat(o),n],r=l[0],c=l.reduce((s,a)=>{const u=Lt(e,a,i);return s.top=M(u.top,s.top),s.right=N(u.right,s.right),s.bottom=N(u.bottom,s.bottom),s.left=M(u.left,s.left),s},Lt(e,r,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function Zt(t){const{width:e,height:o}=vt(t);return{width:e,height:o}}function te(t,e,o){const n=C(e),i=F(e),l=o==="fixed",r=z(t,!0,l,e);let c={scrollLeft:0,scrollTop:0};const s=P(0);if(n||!n&&!l)if((q(e)!=="body"||K(i))&&(c=ot(e)),n){const d=z(e,!0,l,e);s.x=d.x+e.clientLeft,s.y=d.y+e.clientTop}else i&&(s.x=Rt(i));const a=r.left+c.scrollLeft-s.x,u=r.top+c.scrollTop-s.y;return{x:a,y:u,width:r.width,height:r.height}}function mt(t){return E(t).position==="static"}function Et(t,e){return!C(t)||E(t).position==="fixed"?null:e?e(t):t.offsetParent}function At(t,e){const o=L(t);if(dt(t))return o;if(!C(t)){let i=H(t);for(;i&&!I(i);){if(S(i)&&!mt(i))return i;i=H(i)}return o}let n=Et(t,e);for(;n&&qt(n)&&mt(n);)n=Et(n,e);return n&&I(n)&&mt(n)&&!at(n)?o:n||It(t)||o}const ee=async function(t){const e=this.getOffsetParent||At,o=this.getDimensions,n=await o(t.floating);return{reference:te(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:n.width,height:n.height}}};function ne(t){return E(t).direction==="rtl"}const oe={convertOffsetParentRelativeRectToViewportRelativeRect:Yt,getDocumentElement:F,getClippingRect:Ut,getOffsetParent:At,getElementRects:ee,getClientRects:jt,getDimensions:Zt,getScale:_,isElement:S,isRTL:ne};function ie(t,e){let o=null,n;const i=F(t);function l(){var c;clearTimeout(n),(c=o)==null||c.disconnect(),o=null}function r(c,s){c===void 0&&(c=!1),s===void 0&&(s=1),l();const{left:a,top:u,width:d,height:p}=t.getBoundingClientRect();if(c||e(),!d||!p)return;const f=Z(u),m=Z(i.clientWidth-(a+d)),h=Z(i.clientHeight-(u+p)),y=Z(a),g={rootMargin:-f+"px "+-m+"px "+-h+"px "+-y+"px",threshold:M(0,N(1,s))||1};let w=!0;function x(v){const b=v[0].intersectionRatio;if(b!==s){if(!w)return r();b?r(!1,b):n=setTimeout(()=>{r(!1,1e-7)},1e3)}w=!1}try{o=new IntersectionObserver(x,{...g,root:i.ownerDocument})}catch{o=new IntersectionObserver(x,g)}o.observe(t)}return r(!0),l}function re(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:l=!0,elementResize:r=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:s=!1}=n,a=ut(t),u=i||l?[...a?Q(a):[],...Q(e)]:[];u.forEach(g=>{i&&g.addEventListener("scroll",o,{passive:!0}),l&&g.addEventListener("resize",o)});const d=a&&c?ie(a,o):null;let p=-1,f=null;r&&(f=new ResizeObserver(g=>{let[w]=g;w&&w.target===a&&f&&(f.unobserve(e),cancelAnimationFrame(p),p=requestAnimationFrame(()=>{var x;(x=f)==null||x.observe(e)})),o()}),a&&!s&&f.observe(a),f.observe(e));let m,h=s?z(t):null;s&&y();function y(){const g=z(t);h&&(g.x!==h.x||g.y!==h.y||g.width!==h.width||g.height!==h.height)&&o(),h=g,m=requestAnimationFrame(y)}return o(),()=>{var g;u.forEach(w=>{i&&w.removeEventListener("scroll",o),l&&w.removeEventListener("resize",o)}),d==null||d(),(g=f)==null||g.disconnect(),f=null,s&&cancelAnimationFrame(m)}}const le=st,ce=zt,se=Nt,ae=Mt,fe=Bt,ue=(t,e,o)=>{const n=new Map,i={platform:oe,...o},l={...i.platform,_c:n};return Wt(t,e,{...i,platform:l})};export{fe as a,re as b,ue as c,le as d,ae as f,ce as o,se as s};
