function R(){return R=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},R.apply(this,arguments)}function ee(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,D(e,r)}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(r){return r.__proto__||Object.getPrototypeOf(r)},C(e)}function D(e,r){return D=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,t){return n.__proto__=t,n},D(e,r)}function re(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function T(e,r,n){return re()?T=Reflect.construct.bind():T=function(t,i,a){var u=[null];u.push.apply(u,i);var s=Function.bind.apply(t,u),h=new s;return a&&D(h,a.prototype),h},T.apply(null,arguments)}function te(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function M(e){var r=typeof Map=="function"?new Map:void 0;return M=function(n){if(n===null||!te(n))return n;if(typeof n!="function")throw new TypeError("Super expression must either be null or a function");if(typeof r<"u"){if(r.has(n))return r.get(n);r.set(n,t)}function t(){return T(n,arguments,C(this).constructor)}return t.prototype=Object.create(n.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),D(t,n)},M(e)}var ne=/%[sdj%]/g,ie=function(){};function B(e){if(!e||!e.length)return null;var r={};return e.forEach(function(n){var t=n.field;r[t]=r[t]||[],r[t].push(n)}),r}function F(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),t=1;t<r;t++)n[t-1]=arguments[t];var i=0,a=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var u=e.replace(ne,function(s){if(s==="%%")return"%";if(i>=a)return s;switch(s){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch{return"[Circular]"}break;default:return s}});return u}return e}function ae(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function g(e,r){return!!(e==null||r==="array"&&Array.isArray(e)&&!e.length||ae(r)&&typeof e=="string"&&!e)}function ue(e,r,n){var t=[],i=0,a=e.length;function u(s){t.push.apply(t,s||[]),i++,i===a&&n(t)}e.forEach(function(s){r(s,u)})}function G(e,r,n){var t=0,i=e.length;function a(u){if(u&&u.length){n(u);return}var s=t;t=t+1,s<i?r(e[s],a):n([])}a([])}function se(e){var r=[];return Object.keys(e).forEach(function(n){r.push.apply(r,e[n]||[])}),r}var H=function(e){ee(r,e);function r(n,t){var i;return i=e.call(this,"Async Validation Error")||this,i.errors=n,i.fields=t,i}return r}(M(Error));function oe(e,r,n,t,i){if(r.first){var a=new Promise(function(m,O){var f=function(o){return t(o),o.length?O(new H(o,B(o))):m(i)},y=se(e);G(y,n,f)});return a.catch(function(m){return m}),a}var u=r.firstFields===!0?Object.keys(e):r.firstFields||[],s=Object.keys(e),h=s.length,b=0,p=[],w=new Promise(function(m,O){var f=function(y){if(p.push.apply(p,y),b++,b===h)return t(p),p.length?O(new H(p,B(p))):m(i)};s.length||(t(p),m(i)),s.forEach(function(y){var o=e[y];u.indexOf(y)!==-1?G(o,n,f):ue(o,n,f)})});return w.catch(function(m){return m}),w}function fe(e){return!!(e&&e.message!==void 0)}function le(e,r){for(var n=e,t=0;t<r.length;t++){if(n==null)return n;n=n[r[t]]}return n}function K(e,r){return function(n){var t;return e.fullFields?t=le(r,e.fullFields):t=r[n.field||e.fullField],fe(n)?(n.field=n.field||e.fullField,n.fieldValue=t,n):{message:typeof n=="function"?n():n,fieldValue:t,field:n.field||e.fullField}}}function L(e,r){if(r){for(var n in r)if(r.hasOwnProperty(n)){var t=r[n];typeof t=="object"&&typeof e[n]=="object"?e[n]=R({},e[n],t):e[n]=t}}return e}var Q=function(e,r,n,t,i,a){e.required&&(!n.hasOwnProperty(e.field)||g(r,a||e.type))&&t.push(F(i.messages.required,e.fullField))},ce=function(e,r,n,t,i){(/^\s+$/.test(r)||r==="")&&t.push(F(i.messages.whitespace,e.fullField))},z,de=function(){if(z)return z;var e="[a-fA-F\\d:]",r=function(c){return c&&c.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",t="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+t+":){7}(?:"+t+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+t+":){6}(?:"+n+"|:"+t+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+t+":){5}(?::"+n+"|(?::"+t+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+t+":){4}(?:(?::"+t+"){0,1}:"+n+"|(?::"+t+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+t+":){3}(?:(?::"+t+"){0,2}:"+n+"|(?::"+t+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+t+":){2}(?:(?::"+t+"){0,3}:"+n+"|(?::"+t+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+t+":){1}(?:(?::"+t+"){0,4}:"+n+"|(?::"+t+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+t+"){0,5}:"+n+"|(?::"+t+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),a=new RegExp("(?:^"+n+"$)|(?:^"+i+"$)"),u=new RegExp("^"+n+"$"),s=new RegExp("^"+i+"$"),h=function(c){return c&&c.exact?a:new RegExp("(?:"+r(c)+n+r(c)+")|(?:"+r(c)+i+r(c)+")","g")};h.v4=function(c){return c&&c.exact?u:new RegExp(""+r(c)+n+r(c),"g")},h.v6=function(c){return c&&c.exact?s:new RegExp(""+r(c)+i+r(c),"g")};var b="(?:(?:[a-z]+:)?//)",p="(?:\\S+(?::\\S*)?@)?",w=h.v4().source,m=h.v6().source,O="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",f="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",y="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",o="(?::\\d{2,5})?",A='(?:[/?#][^\\s"]*)?',d="(?:"+b+"|www\\.)"+p+"(?:localhost|"+w+"|"+m+"|"+O+f+y+")"+o+A;return z=new RegExp("(?:^"+d+"$)","i"),z},X={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},$={integer:function(e){return $.number(e)&&parseInt(e,10)===e},float:function(e){return $.number(e)&&!$.integer(e)},array:function(e){return Array.isArray(e)},regexp:function(e){if(e instanceof RegExp)return!0;try{return!!new RegExp(e)}catch{return!1}},date:function(e){return typeof e.getTime=="function"&&typeof e.getMonth=="function"&&typeof e.getYear=="function"&&!isNaN(e.getTime())},number:function(e){return isNaN(e)?!1:typeof e=="number"},object:function(e){return typeof e=="object"&&!$.array(e)},method:function(e){return typeof e=="function"},email:function(e){return typeof e=="string"&&e.length<=320&&!!e.match(X.email)},url:function(e){return typeof e=="string"&&e.length<=2048&&!!e.match(de())},hex:function(e){return typeof e=="string"&&!!e.match(X.hex)}},pe=function(e,r,n,t,i){if(e.required&&r===void 0){Q(e,r,n,t,i);return}var a=["integer","float","array","regexp","object","method","email","number","date","url","hex"],u=e.type;a.indexOf(u)>-1?$[u](r)||t.push(F(i.messages.types[u],e.fullField,e.type)):u&&typeof r!==e.type&&t.push(F(i.messages.types[u],e.fullField,e.type))},ye=function(e,r,n,t,i){var a=typeof e.len=="number",u=typeof e.min=="number",s=typeof e.max=="number",h=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,b=r,p=null,w=typeof r=="number",m=typeof r=="string",O=Array.isArray(r);if(w?p="number":m?p="string":O&&(p="array"),!p)return!1;O&&(b=r.length),m&&(b=r.replace(h,"_").length),a?b!==e.len&&t.push(F(i.messages[p].len,e.fullField,e.len)):u&&!s&&b<e.min?t.push(F(i.messages[p].min,e.fullField,e.min)):s&&!u&&b>e.max?t.push(F(i.messages[p].max,e.fullField,e.max)):u&&s&&(b<e.min||b>e.max)&&t.push(F(i.messages[p].range,e.fullField,e.min,e.max))},_="enum",ge=function(e,r,n,t,i){e[_]=Array.isArray(e[_])?e[_]:[],e[_].indexOf(r)===-1&&t.push(F(i.messages[_],e.fullField,e[_].join(", ")))},he=function(e,r,n,t,i){if(e.pattern){if(e.pattern instanceof RegExp)e.pattern.lastIndex=0,e.pattern.test(r)||t.push(F(i.messages.pattern.mismatch,e.fullField,r,e.pattern));else if(typeof e.pattern=="string"){var a=new RegExp(e.pattern);a.test(r)||t.push(F(i.messages.pattern.mismatch,e.fullField,r,e.pattern))}}},l={required:Q,whitespace:ce,type:pe,range:ye,enum:ge,pattern:he},me=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r,"string")&&!e.required)return n();l.required(e,r,t,a,i,"string"),g(r,"string")||(l.type(e,r,t,a,i),l.range(e,r,t,a,i),l.pattern(e,r,t,a,i),e.whitespace===!0&&l.whitespace(e,r,t,a,i))}n(a)},ve=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&l.type(e,r,t,a,i)}n(a)},be=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(r===""&&(r=void 0),g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&(l.type(e,r,t,a,i),l.range(e,r,t,a,i))}n(a)},qe=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&l.type(e,r,t,a,i)}n(a)},Fe=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),g(r)||l.type(e,r,t,a,i)}n(a)},we=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&(l.type(e,r,t,a,i),l.range(e,r,t,a,i))}n(a)},Oe=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&(l.type(e,r,t,a,i),l.range(e,r,t,a,i))}n(a)},xe=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(r==null&&!e.required)return n();l.required(e,r,t,a,i,"array"),r!=null&&(l.type(e,r,t,a,i),l.range(e,r,t,a,i))}n(a)},Ae=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&l.type(e,r,t,a,i)}n(a)},Ee="enum",je=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i),r!==void 0&&l[Ee](e,r,t,a,i)}n(a)},Pe=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r,"string")&&!e.required)return n();l.required(e,r,t,a,i),g(r,"string")||l.pattern(e,r,t,a,i)}n(a)},Re=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r,"date")&&!e.required)return n();if(l.required(e,r,t,a,i),!g(r,"date")){var s;r instanceof Date?s=r:s=new Date(r),l.type(e,s,t,a,i),s&&l.range(e,s.getTime(),t,a,i)}}n(a)},_e=function(e,r,n,t,i){var a=[],u=Array.isArray(r)?"array":typeof r;l.required(e,r,t,a,i,u),n(a)},V=function(e,r,n,t,i){var a=e.type,u=[],s=e.required||!e.required&&t.hasOwnProperty(e.field);if(s){if(g(r,a)&&!e.required)return n();l.required(e,r,t,u,i,a),g(r,a)||l.type(e,r,t,u,i)}n(u)},ke=function(e,r,n,t,i){var a=[],u=e.required||!e.required&&t.hasOwnProperty(e.field);if(u){if(g(r)&&!e.required)return n();l.required(e,r,t,a,i)}n(a)},N={string:me,method:ve,number:be,boolean:qe,regexp:Fe,integer:we,float:Oe,array:xe,object:Ae,enum:je,pattern:Pe,date:Re,url:V,hex:V,email:V,required:_e,any:ke};function J(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var e=JSON.parse(JSON.stringify(this));return e.clone=this.clone,e}}}var Z=J(),S=function(){function e(n){this.rules=null,this._messages=Z,this.define(n)}var r=e.prototype;return r.define=function(n){var t=this;if(!n)throw new Error("Cannot configure a schema with no rules");if(typeof n!="object"||Array.isArray(n))throw new Error("Rules must be an object");this.rules={},Object.keys(n).forEach(function(i){var a=n[i];t.rules[i]=Array.isArray(a)?a:[a]})},r.messages=function(n){return n&&(this._messages=L(J(),n)),this._messages},r.validate=function(n,t,i){var a=this;t===void 0&&(t={}),i===void 0&&(i=function(){});var u=n,s=t,h=i;if(typeof s=="function"&&(h=s,s={}),!this.rules||Object.keys(this.rules).length===0)return h&&h(null,u),Promise.resolve(u);function b(f){var y=[],o={};function A(c){if(Array.isArray(c)){var q;y=(q=y).concat.apply(q,c)}else y.push(c)}for(var d=0;d<f.length;d++)A(f[d]);y.length?(o=B(y),h(y,o)):h(null,u)}if(s.messages){var p=this.messages();p===Z&&(p=J()),L(p,s.messages),s.messages=p}else s.messages=this.messages();var w={},m=s.keys||Object.keys(this.rules);m.forEach(function(f){var y=a.rules[f],o=u[f];y.forEach(function(A){var d=A;typeof d.transform=="function"&&(u===n&&(u=R({},u)),o=u[f]=d.transform(o)),typeof d=="function"?d={validator:d}:d=R({},d),d.validator=a.getValidationMethod(d),d.validator&&(d.field=f,d.fullField=d.fullField||f,d.type=a.getType(d),w[f]=w[f]||[],w[f].push({rule:d,value:o,source:u,field:f}))})});var O={};return oe(w,s,function(f,y){var I;var o=f.rule,A=(o.type==="object"||o.type==="array")&&(typeof o.fields=="object"||typeof o.defaultField=="object");A=A&&(o.required||!o.required&&f.value),o.field=f.field;function d(v,P){return R({},P,{fullField:o.fullField+"."+v,fullFields:o.fullFields?[].concat(o.fullFields,[v]):[v]})}function c(v){v===void 0&&(v=[]);var P=Array.isArray(v)?v:[v];!s.suppressWarning&&P.length&&e.warning("async-validator:",P),P.length&&o.message!==void 0&&(P=[].concat(o.message));var E=P.map(K(o,u));if(s.first&&E.length)return O[o.field]=1,y(E);if(!A)y(E);else{if(o.required&&!f.value)return o.message!==void 0?E=[].concat(o.message).map(K(o,u)):s.error&&(E=[s.error(o,F(s.messages.required,o.field))]),y(E);var k={};o.defaultField&&Object.keys(f.value).map(function(j){k[j]=o.defaultField}),k=R({},k,f.rule.fields);var U={};Object.keys(k).forEach(function(j){var x=k[j],Y=Array.isArray(x)?x:[x];U[j]=Y.map(d.bind(null,j))});var W=new e(U);W.messages(s.messages),f.rule.options&&(f.rule.options.messages=s.messages,f.rule.options.error=s.error),W.validate(f.value,f.rule.options||s,function(j){var x=[];E&&E.length&&x.push.apply(x,E),j&&j.length&&x.push.apply(x,j),y(x.length?x:null)})}}var q;if(o.asyncValidator)q=o.asyncValidator(o,f.value,c,f.source,s);else if(o.validator){try{q=o.validator(o,f.value,c,f.source,s)}catch(v){(I=console.error)==null||I.call(console,v),s.suppressValidatorError||setTimeout(function(){throw v},0),c(v.message)}q===!0?c():q===!1?c(typeof o.message=="function"?o.message(o.fullField||o.field):o.message||(o.fullField||o.field)+" fails"):q instanceof Array?c(q):q instanceof Error&&c(q.message)}q&&q.then&&q.then(function(){return c()},function(v){return c(v)})},function(f){b(f)},u)},r.getType=function(n){if(n.type===void 0&&n.pattern instanceof RegExp&&(n.type="pattern"),typeof n.validator!="function"&&n.type&&!N.hasOwnProperty(n.type))throw new Error(F("Unknown rule type %s",n.type));return n.type||"string"},r.getValidationMethod=function(n){if(typeof n.validator=="function")return n.validator;var t=Object.keys(n),i=t.indexOf("message");return i!==-1&&t.splice(i,1),t.length===1&&t[0]==="required"?N.required:N[this.getType(n)]||void 0},e}();S.register=function(e,r){if(typeof r!="function")throw new Error("Cannot register a validator by type, validator is not a function");N[e]=r},S.warning=ie,S.messages=Z,S.validators=N;export{S};