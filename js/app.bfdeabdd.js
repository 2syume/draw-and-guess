(function(){"use strict";var e={6136:function(e,n,t){var r=t(9963),o=t(6252);function a(e,n){const t=(0,o.up)("router-view");return(0,o.wg)(),(0,o.j4)(t)}const i={};i.render=a;var u=i,s=t(5205);(0,s.z)("/draw-and-guess/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var c=t(2119),l=t(3577);const d=(0,o.HX)("data-v-3b8bd02e");(0,o.dD)("data-v-3b8bd02e");const f={class:"main"},p=(0,o.Uk)("使用词库");(0,o.Cn)();const v=d(((e,n,t,r,a,i)=>{const u=(0,o.up)("nav-bar"),s=(0,o.up)("el-header"),c=(0,o.up)("el-link"),v=(0,o.up)("router-link"),h=(0,o.up)("el-collapse-item"),g=(0,o.up)("el-collapse"),m=(0,o.up)("el-main"),b=(0,o.up)("el-container"),w=(0,o.Q2)("loading");return(0,o.wg)(),(0,o.j4)(b,null,{default:d((()=>[(0,o.Wm)(s,null,{default:d((()=>[(0,o.Wm)(u)])),_:1}),(0,o.Wm)(m,null,{default:d((()=>[(0,o.Wm)("div",f,[(0,o.wy)((0,o.Wm)(g,null,{default:d((()=>[((0,o.wg)(!0),(0,o.j4)(o.HY,null,(0,o.Ko)(e.wordBankMetas,(e=>((0,o.wg)(),(0,o.j4)(h,{key:e.id,title:e.name,name:e.id},{default:d((()=>[(0,o.Wm)("div",null,(0,l.toDisplayString)(e.description),1),(0,o.Wm)("div",null,[(0,o.Wm)(v,{to:{path:`/wordbank/${e.id}`},custom:""},{default:d((({href:e,navigate:n,isActive:t})=>[(0,o.Wm)(c,{active:t,href:e,onClick:n,type:"primary"},{default:d((()=>[p])),_:2},1032,["active","href","onClick"])])),_:2},1032,["to"])])])),_:2},1032,["title","name"])))),128))])),_:1},512),[[w,e.loading]])])])),_:1})])),_:1})}));var h=t(7224),g=t(1124),m=t(9452),b=function(e,n,t,r){var o,a=arguments.length,i=a<3?n:null===r?r=Object.getOwnPropertyDescriptor(n,t):r;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)i=Reflect.decorate(e,n,t,r);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(n,t,i):o(n,t))||i);return a>3&&i&&Object.defineProperty(n,t,i),i};let w=class extends g.w3{constructor(...e){super(...e),(0,h.Z)(this,"wordBankMetas",[]),(0,h.Z)(this,"loading",!0)}mounted(){this.loadWordBankMetas()}async loadWordBankMetas(){const e=await fetch("/draw-and-guess/word_bank/meta.json");this.wordBankMetas=await e.json(),this.loading=!1}};w=b([(0,g.Ei)({components:{NavBar:m.Z}})],w);var y=w;y.render=v,y.__scopeId="data-v-3b8bd02e";var k=y;const j=[{path:"/",name:"Home",component:k},{path:"/wordbank/:id",name:"WordBank",component:()=>t.e(384).then(t.bind(t,9278))}],_=(0,c.p7)({history:(0,c.r5)(),routes:j});var C=_,O=t(9115),W=t(6703),Z=t(8074),A=t(5032),B=t(7741),E=t(9907),N=t(8147),S=t(2517),P=t(5057),T=t(397),M=t(6778),x=t(1188);function D(e){e.use(x.Z),e.use(M.Z),e.use(T.Z),e.use(P.Z),e.use(S.Z),e.use(N.Z),e.use(E.Z),e.use(B.Z),e.use(A.Z),e.use(Z.Z),e.use(W.Z),e.use(O.Z)}const F=(0,r.ri)(u);D(F),F.use(C).mount("#app")},9452:function(e,n,t){t.d(n,{Z:function(){return l}});var r=t(6252);const o=(0,r.HX)("data-v-30525eea");(0,r.dD)("data-v-30525eea");const a={class:"header"},i={class:"logo"},u=(0,r.Uk)("BGMNA 你画我猜词库");(0,r.Cn)();const s=o(((e,n)=>{const t=(0,r.up)("router-link");return(0,r.wg)(),(0,r.j4)("div",a,[(0,r.Wm)("div",i,[(0,r.Wm)(t,{to:"/"},{default:o((()=>[u])),_:1})])])})),c={};c.render=s,c.__scopeId="data-v-30525eea";var l=c}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,loaded:!1,exports:{}};return e[r](a,a.exports,t),a.loaded=!0,a.exports}t.m=e,function(){var e=[];t.O=function(n,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var u=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(t.O).every((function(e){return t.O[e](r[s])}))?r.splice(s--,1):(u=!1,a<i&&(i=a));if(u){e.splice(l--,1);var c=o();void 0!==c&&(n=c)}}return n}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/WordBank.6b0907a5.js"}}(),function(){t.miniCssF=function(e){return"css/"+{384:"WordBank",998:"chunk-vendors"}[e]+"."+{384:"c6413630",998:"0e54ad61"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="draw-and-guess:";t.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var u,s;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==n+a){u=d;break}}u||(s=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,t.nc&&u.setAttribute("nonce",t.nc),u.setAttribute("data-webpack",n+a),u.src=r),e[r]=[o];var f=function(n,t){u.onerror=u.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=f.bind(null,u.onerror),u.onload=f.bind(null,u.onload),s&&document.head.appendChild(u)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){t.p="/draw-and-guess/"}(),function(){var e=function(e,n,t,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)t();else{var i=a&&("load"===a.type?"missing":a.type),u=a&&a.target&&a.target.href||n,s=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=u,o.parentNode.removeChild(o),r(s)}};return o.onerror=o.onload=a,o.href=n,document.head.appendChild(o),o},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===n))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===n)return o}},r=function(r){return new Promise((function(o,a){var i=t.miniCssF(r),u=t.p+i;if(n(i,u))return o();e(r,u,o,a)}))},o={143:0};t.f.miniCss=function(e,n){var t={384:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}(),function(){var e={143:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=a);var i=t.p+t.u(n),u=new Error,s=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;u.message="Loading chunk "+n+" failed.\n("+a+": "+i+")",u.name="ChunkLoadError",u.type=a,u.request=i,o[1](u)}};t.l(i,s,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,a,i=r[0],u=r[1],s=r[2],c=0;for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(s)var l=s(t);for(n&&n(r);c<i.length;c++)a=i[c],t.o(e,a)&&e[a]&&e[a][0](),e[i[c]]=0;return t.O(l)},r=self["webpackChunkdraw_and_guess"]=self["webpackChunkdraw_and_guess"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[998],(function(){return t(6136)}));r=t.O(r)})();
//# sourceMappingURL=app.bfdeabdd.js.map