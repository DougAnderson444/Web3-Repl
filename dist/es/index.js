function t(){}function e(t){return t()}function n(){return Object.create(null)}function o(t){t.forEach(e)}function r(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function s(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e,n=e){return t.set(n),e}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function a(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function f(t){return document.createTextNode(t)}function p(){return f(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function h(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function $(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function b(t,e){t.value=null==e?"":e}let g,y;function x(){if(void 0===g){g=!1;try{"undefined"!=typeof window&&window.parent&&window.parent.document}catch(t){g=!0}}return g}function w(t,e,n){t.classList[n?"add":"remove"](e)}function v(t){y=t}function j(){if(!y)throw new Error("Function called outside component initialization");return y}function _(t){j().$$.on_mount.push(t)}function k(){const t=j();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function S(t){return j().$$.context.get(t)}const L=[],E=[],C=[],T=[],R=Promise.resolve();let A=!1;function B(t){C.push(t)}let z=!1;const O=new Set;function U(){if(!z){z=!0;do{for(let t=0;t<L.length;t+=1){const e=L[t];v(e),N(e.$$)}for(v(null),L.length=0;E.length;)E.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];O.has(e)||(O.add(e),e())}C.length=0}while(L.length);for(;T.length;)T.pop()();A=!1,z=!1,O.clear()}}function N(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const W=new Set;function M(t,e){t&&t.i&&(W.delete(t),t.i(e))}function H(t,e,n,o){if(t&&t.o){if(W.has(t))return;W.add(t),undefined.c.push((()=>{W.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function P(t){t&&t.c()}function I(t,n,i,s){const{fragment:c,on_mount:l,on_destroy:u,after_update:a}=t.$$;c&&c.m(n,i),s||B((()=>{const n=l.map(e).filter(r);u?u.push(...n):o(n),t.$$.on_mount=[]})),a.forEach(B)}function V(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(L.push(t),A||(A=!0,R.then(U)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(e,r,i,s,c,l,u=[-1]){const d=y;v(e);const f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:n(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:r.context||[]),callbacks:n(),dirty:u,skip_bound:!1};let p=!1;if(f.ctx=i?i(e,r.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&c(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&D(e,t)),n})):[],f.update(),p=!0,o(f.before_update),f.fragment=!!s&&s(f.ctx),r.target){if(r.hydrate){const t=function(t){return Array.from(t.childNodes)}(r.target);f.fragment&&f.fragment.l(t),t.forEach(a)}else f.fragment&&f.fragment.c();r.intro&&M(e.$$.fragment),I(e,r.target,r.anchor,r.customElement),U()}v(d)}class K{$destroy(){V(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Y=[];function q(e,n=t){let o;const r=[];function s(t){if(i(e,t)&&(e=t,o)){const t=!Y.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),Y.push(n,e)}if(t){for(let t=0;t<Y.length;t+=2)Y[t][0](Y[t+1]);Y.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,c=t){const l=[i,c];return r.push(l),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(l);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}const G=q([]),J=q(0);function Q(t,e,n){const o=t.slice();return o[5]=e[n].name,o[6]=e[n].type,o[7]=e[n].id,o}function X(t){let e,n,o,r,i,s,c=t[5]+"",p=t[6]+"";function b(){return t[3](t[7])}return{c(){e=d("li"),n=f(c),o=f("."),r=f(p),h(e,"class","svelte-sodwks"),w(e,"active",t[7]===t[1])},m(t,c){u(t,e,c),l(e,n),l(e,o),l(e,r),i||(s=m(e,"click",b),i=!0)},p(o,i){t=o,1&i&&c!==(c=t[5]+"")&&$(n,c),1&i&&p!==(p=t[6]+"")&&$(r,p),3&i&&w(e,"active",t[7]===t[1])},d(t){t&&a(e),i=!1,s()}}}function Z(e){let n,o,r,i,s,c,f=e[0],h=[];for(let t=0;t<f.length;t+=1)h[t]=X(Q(e,f,t));return{c(){n=d("ul");for(let t=0;t<h.length;t+=1)h[t].c();o=p(),r=d("li"),i=d("button"),i.textContent="+"},m(t,a){u(t,n,a);for(let t=0;t<h.length;t+=1)h[t].m(n,null);l(n,o),l(n,r),l(r,i),s||(c=m(i,"click",e[4]),s=!0)},p(t,[e]){if(7&e){let r;for(f=t[0],r=0;r<f.length;r+=1){const i=Q(t,f,r);h[r]?h[r].p(i,e):(h[r]=X(i),h[r].c(),h[r].m(n,o))}for(;r<h.length;r+=1)h[r].d(1);h.length=f.length}},i:t,o:t,d(t){t&&a(n),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(h,t),s=!1,c()}}}function tt(t,e,n){let o;s(t,J,(t=>n(1,o=t)));const r=k();let{tabs:i=[]}=e;return t.$$set=t=>{"tabs"in t&&n(0,i=t.tabs)},[i,o,r,t=>r("select",t),()=>r("new")]}class et extends K{constructor(t){super(),F(this,t,tt,Z,i,{tabs:0})}}function nt(e){let n,o,r,i,s;return{c(){n=d("div"),o=d("textarea"),h(o,"class","svelte-100m6e2"),h(n,"class","codemirror-container svelte-100m6e2"),B((()=>e[16].call(n))),w(n,"flex",e[0])},m(t,c){u(t,n,c),l(n,o),b(o,e[4][e[5]].source),e[15](o),r=function(t,e){"static"===getComputedStyle(t).position&&(t.style.position="relative");const n=d("iframe");n.setAttribute("style","display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"),n.setAttribute("aria-hidden","true"),n.tabIndex=-1;const o=x();let r;return o?(n.src="data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>",r=m(window,"message",(t=>{t.source===n.contentWindow&&e()}))):(n.src="about:blank",n.onload=()=>{r=m(n.contentWindow,"resize",e)}),l(t,n),()=>{(o||r&&n.contentWindow)&&r(),a(n)}}(n,e[16].bind(n)),i||(s=m(o,"input",e[14]),i=!0)},p(t,[e]){48&e&&b(o,t[4][t[5]].source),1&e&&w(n,"flex",t[0])},i:t,o:t,d(t){t&&a(n),e[15](null),r(),i=!1,s()}}}function ot(t){return new Promise((e=>setTimeout(e,t)))}function rt(t,e,n){let o,r;s(t,G,(t=>n(4,o=t))),s(t,J,(t=>n(5,r=t)));const i=k();let c,l,u,a,d,f,{flex:p=!1}=e,{lineNumbers:m=!1}=e,{readonly:h=!1}=e,{tab:$=!0}=e,b=!1,g=!1,y=!0,x="";const w={js:{name:"javascript",json:!1},json:{name:"javascript",json:!0},svelte:{name:"handlebars",base:"text/html"},svx:{name:"gfm"}};async function v(t){if(b||!d)return;a&&a.toTextArea();const e={lineNumbers:m,lineWrapping:!0,indentWithTabs:!0,indentUnit:2,tabSize:2,value:"",mode:w[t]||{name:t},readOnly:h,autoCloseBrackets:!0,autoCloseTags:!0};$||(e.extraKeys={Tab:$,"Shift-Tab":$}),y&&await ot(50),b||(n(13,a=d.fromTextArea(c,e)),a.on("change",(t=>{if(!g){const e=t.getValue();i("change",{value:e})}})),y&&await ot(50),a.refresh(),y=!1)}return _((()=>(import("./codemirror-a5f23786.js").then((t=>{d=t.default,v(f||"svelte")})),()=>{b=!0,a&&a.toTextArea()}))),t.$$set=t=>{"flex"in t&&n(0,p=t.flex),"lineNumbers"in t&&n(6,m=t.lineNumbers),"readonly"in t&&n(7,h=t.readonly),"tab"in t&&n(8,$=t.tab)},t.$$.update=()=>{8198&t.$$.dirty&&a&&l&&u&&a.refresh()},[p,l,u,c,o,r,m,h,$,async function(t,e){e!==f&&await v(f=e),x=t,g=!0,a&&a.setValue(x),g=!1},function(t){if(x=t,console.log("updating"),a){const{left:t,top:e}=a.getScrollInfo();console.log("pos ",t,e),a.setValue(x),a.scrollTo(t,e)}},function(){a.refresh()},function(){a.focus()},a,function(){o[r].source=this.value,G.set(o)},function(t){E[t?"unshift":"push"]((()=>{c=t,n(3,c)}))},function(){l=this.offsetWidth,u=this.offsetHeight,n(1,l),n(2,u)}]}class it extends K{constructor(t){super(),F(this,t,rt,nt,i,{flex:0,lineNumbers:6,readonly:7,tab:8,set:9,update:10,resize:11,focus:12})}get set(){return this.$$.ctx[9]}get update(){return this.$$.ctx[10]}get resize(){return this.$$.ctx[11]}get focus(){return this.$$.ctx[12]}}function st(t){let e,n,o;return n=new it({props:{lineNumbers:!1}}),t[2](n),n.$on("change",t[1]),{c(){e=d("div"),P(n.$$.fragment),h(e,"class","editor svelte-bi7lzo")},m(t,r){u(t,e,r),I(n,e,null),o=!0},p(t,[e]){n.$set({})},i(t){o||(M(n.$$.fragment,t),o=!0)},o(t){H(n.$$.fragment,t),o=!1},d(o){o&&a(e),t[2](null),V(n)}}}function ct(t,e,n){const{register_module_editor:o,handle_edit:r}=S("REPL");let i;return _((()=>{o(i)})),[i,r,function(t){E[t?"unshift":"push"]((()=>{i=t,n(0,i)}))}]}class lt extends K{constructor(t){super(),F(this,t,ct,st,i,{})}}function ut(t){let e,n,o,r,i;return n=new et({props:{tabs:t[0]}}),n.$on("select",t[2]),n.$on("new",t[1]),r=new lt({}),{c(){e=d("section"),P(n.$$.fragment),o=p(),P(r.$$.fragment)},m(t,s){u(t,e,s),I(n,e,null),l(e,o),I(r,e,null),i=!0},p(t,[e]){const o={};1&e&&(o.tabs=t[0]),n.$set(o)},i(t){i||(M(n.$$.fragment,t),M(r.$$.fragment,t),i=!0)},o(t){H(n.$$.fragment,t),H(r.$$.fragment,t),i=!1},d(t){t&&a(e),V(n),V(r)}}}function at(t,e,n){let o,r,i;s(t,G,(t=>n(3,r=t))),s(t,J,(t=>n(4,i=t)));const{handle_select:l}=S("REPL");return t.$$.update=()=>{24&t.$$.dirty&&r.findIndex((({id:t})=>{})),8&t.$$.dirty&&n(0,o=r.map((({id:t,name:e,type:n})=>({id:t,name:e,type:n}))))},[o,function(){const t=function(t){const e=t.map((({id:t})=>t));return Math.max(...e)}(r)+1;c(G,r=r.concat({id:t,name:`Component${t}`,type:"svelte",source:""}),r),c(J,i=t,i)},function({detail:t}){i!==t&&(c(J,i=t,i),l(t))},r,i]}class dt extends K{constructor(t){super(),F(this,t,at,ut,i,{})}}function ft(e){let n,o;return{c(){n=d("section"),o=d("iframe"),h(o,"title","Rendered REPL"),h(o,"srcdoc",e[1])},m(t,r){u(t,n,r),l(n,o),e[4](o)},p:t,i:t,o:t,d(t){t&&a(n),e[4](null)}}}function pt(t,e,n){let o,{compiled:r}=e,{injectedCSS:i='/* Some STYLES */\n\thtml, body {position: relative;width: 100%;height: 100%;}body {color: #333;margin: 0;padding: 8px 20px;box-sizing: border-box;font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;}a {color: rgb(0,100,200);text-decoration: none;}a:hover {text-decoration: underline;}a:visited {color: rgb(0,80,160);}label {display: block;}input, button, select, textarea {font-family: inherit;font-size: inherit;padding: 0.4em;margin: 0 0 0.5em 0;box-sizing: border-box;border: 1px solid #ccc;border-radius: 2px;}input:disabled {color: #ccc;}input[type="range"] {height: 0;}button {color: #333;background-color: #f4f4f4;outline: none;}button:active {background-color: #ddd;}button:focus {border-color: #666;} p:last-child{margin-bottom: 30px;}\t\n\t'}=e;const s=`\n\t\t<!doctype html>\n\t\t<html>\n\t\t\t<head>\n\t\t\t\t<link href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism.css" rel="stylesheet" />\n\t\t\t\t<style>\n\t\t\t\t\t/* STYLES */\n\t\t\t\t\t${i}\n\t\t\t\t</style>\n\t\t\t\t<script type="module">\n\n\t\t\t\t\tlet component;\n\t\t\t\t\t\n\t\t\t\t\t// \x3c!-- Turn the string into actual javascript code --\x3e\n\t\t\t\t\t// \x3c!--   import (url) <- ObjectURL <- Blob         --\x3e\n\n\t\t\t\t\tfunction update(source) {\n\t\t\t\t\t\t// \x3c!-- type: 'text/javascript would normally come from response headers --\x3e\n\t\t\t\t\t\tconst blob = new Blob([source], { type: 'text/javascript' });\n\t\t\t\t\t\tconst url = URL.createObjectURL(blob);\n\n\t\t\t\t\t\timport(url).then(({ default: App }) => {\n\t\t\t\t\t\t\tif (component) component.$destroy();\n\n\t\t\t\t\t\t\tdocument.body.innerHTML = '';\n\t\t\t\t\t\t\tcomponent = new App({ target: document.body })\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\n\t\t\t\t\twindow.addEventListener('message', event => {\n\t\t\t\t\t\tupdate(event.data)\n\t\t\t\t\t}, false)\n\t\t\t\t<\/script>\n\t\t\t</head>\n\t\t\t<body></body>\n\t\t</html>\n\t`;return t.$$set=t=>{"compiled"in t&&n(2,r=t.compiled),"injectedCSS"in t&&n(3,i=t.injectedCSS)},t.$$.update=()=>{var e;5&t.$$.dirty&&o&&r&&(e=r,o.contentWindow.postMessage(e,"*"))},[o,s,r,i,function(t){E[t?"unshift":"push"]((()=>{o=t,n(0,o)}))}]}class mt extends K{constructor(t){super(),F(this,t,pt,ft,i,{compiled:2,injectedCSS:3})}}function ht(t){let e,n,o,r,i;return n=new dt({}),r=new mt({props:{compiled:t[0],injectedCSS:t[1]}}),{c(){e=d("main"),P(n.$$.fragment),o=p(),P(r.$$.fragment)},m(t,s){u(t,e,s),I(n,e,null),l(e,o),I(r,e,null),i=!0},p(t,[e]){const n={};1&e&&(n.compiled=t[0]),r.$set(n)},i(t){i||(M(n.$$.fragment,t),M(r.$$.fragment,t),i=!0)},o(t){H(n.$$.fragment,t),H(r.$$.fragment,t),i=!1},d(t){t&&a(e),V(n),V(r)}}}function $t(t){let e=null;t=window.location.href.substring(0,window.location.href.lastIndexOf("/"))+"/"+t;try{let n;try{n=new Blob(["importScripts('"+t+"');"],{type:"application/javascript"})}catch(e){const o=new(window.BlobBuilder||window.WebKitBlobBuilder||window.MozBlobBuilder);o.append("importScripts('"+t+"');"),n=o.getBlob("application/javascript")}const o=(window.URL||window.webkitURL).createObjectURL(n);e=new Worker(o),URL.revokeObjectURL(o)}catch(t){}return e}function bt(t,e,n){let o,r,i,l,u;s(t,G,(t=>n(2,o=t))),s(t,J,(t=>n(5,r=t))),G.set([{id:0,name:"App",type:"svx",source:"---\ntitle: Awesome Title\nauthor: Doug\ndate: Today\n\n---\n\n<script>\nimport Component from './Component1.svelte';\nimport Layout from './layout.svelte';\n\n<\/script>\n<Layout {title} {author} {date} >\n<Component />\n\n# Hi \n## Hello\n### very small\n\n```ts\n// comment\nimport statement from 'module'\nlet variable = 0\n```\n\n</Layout>\n\n"},{id:1,name:"Component1",type:"svelte",source:"\n<h1>Hello</h1>\n\n<style>\nh1 {\n  color: red;\n}\n</style>"},{id:2,name:"layout",type:"svelte",source:'\n<script>\n  export let title;\n  export let author;\n  export let date;\n<\/script>\n\n<style>\n  h1 {\n    color: blue;\n  }\n</style>\n\n<h1>{ title }</h1>\n\n<slot>\n</slot>\n\n<p class="date">on: { date }</p>\n<p class="date">by: { author }</p>\n\n'}]);try{i=new Worker("worker.js"),i.onerror=function(t){t.preventDefault(),i=$t("worker.js")}}catch(t){i=$t("worker.js")}var a,d;return i.addEventListener("message",(t=>{n(0,l=t.data)})),a="REPL",d={register_module_editor(t){u=t},handle_edit(t){c(G,o[r].source=t.detail.value,o)},handle_select(t){c(J,r=t,r),u.update(o[r].source)}},j().$$.context.set(a,d),t.$$.update=()=>{var e;4&t.$$.dirty&&(e=o,i.postMessage(e))},[l,undefined,o]}export default class extends K{constructor(t){super(),F(this,t,bt,ht,i,{})}}
//# sourceMappingURL=index.js.map
