if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return d[e]||(a=new Promise((async a=>{if("document"in self){const d=document.createElement("script");d.src=e,document.head.appendChild(d),d.onload=a}else importScripts(e),a()}))),a.then((()=>{if(!d[e])throw new Error(`Module ${e} didn’t register its module`);return d[e]}))},a=(a,d)=>{Promise.all(a.map(e)).then((e=>d(1===e.length?e[0]:e)))},d={require:Promise.resolve(a)};self.define=(a,s,r)=>{d[a]||(d[a]=Promise.resolve().then((()=>{let d={};const n={uri:location.origin+a.slice(1)};return Promise.all(s.map((a=>{switch(a){case"exports":return d;case"module":return n;default:return e(a)}}))).then((e=>{const a=r(...e);return d.default||(d.default=a),d}))})))}}define("./service-worker.js",["./workbox-f6829f63"],(function(e){"use strict";e.setCacheNameDetails({prefix:"draw-and-guess"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/draw-and-guess/css/WordBank.c6413630.css",revision:null},{url:"/draw-and-guess/css/app.93eccd31.css",revision:null},{url:"/draw-and-guess/css/chunk-vendors.0e54ad61.css",revision:null},{url:"/draw-and-guess/fonts/element-icons.5bba4d97.ttf",revision:null},{url:"/draw-and-guess/fonts/element-icons.dcdb1ef8.woff",revision:null},{url:"/draw-and-guess/index.html",revision:"d780058538d85bbfe7713e501546e512"},{url:"/draw-and-guess/js/WordBank.6b0907a5.js",revision:null},{url:"/draw-and-guess/js/app.bfdeabdd.js",revision:null},{url:"/draw-and-guess/js/chunk-vendors.f8ce87d4.js",revision:null},{url:"/draw-and-guess/manifest.json",revision:"044e686308581181b7cf00a692cc2f5f"},{url:"/draw-and-guess/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"},{url:"/draw-and-guess/word_bank/091138b3-e3fa-4771-b07e-460c0a2be5cf.json",revision:"0a402afd82bec3a2040c6d651ebef858"},{url:"/draw-and-guess/word_bank/0a185a79-d46f-4336-9577-610591d6bcb6.json",revision:"44851783d26d8581c67cef54aa6b98fb"},{url:"/draw-and-guess/word_bank/281cd66b-529e-40f7-aee1-9fd2cc7a1b1f.json",revision:"5e9d0a879ec53663520ca1b0bd6fdf05"},{url:"/draw-and-guess/word_bank/2dec78a0-23b8-4f5d-bcfa-ee6c12043515.json",revision:"2d291cedcf8508c534b283d2ba69434d"},{url:"/draw-and-guess/word_bank/3275a841-a506-433a-bd47-4db10bbe0c22.json",revision:"347908068034315ee274a5265de0fd2b"},{url:"/draw-and-guess/word_bank/41ca928b-341e-4c20-b644-58f528f7e420.json",revision:"b5c90b9b90fff2bf21086aa48698896a"},{url:"/draw-and-guess/word_bank/4a474261-3e57-4fc3-99da-dcde982104bf.json",revision:"56b8d0dd5b0ee9fe636fb8b33a21d487"},{url:"/draw-and-guess/word_bank/6409e354-1dce-41e5-8491-26c3e65c51f1.json",revision:"3295ddbdd72ccdac16b38a2c6e15f3ce"},{url:"/draw-and-guess/word_bank/6533d555-4564-4f0f-b5f9-35c83f168495.json",revision:"f2193a763c0be4d2f6996b1d97d223ad"},{url:"/draw-and-guess/word_bank/6a7f82d6-903d-4af7-b239-a29b7bd320ae.json",revision:"5cb0197f3a6fa240522f4ba27501365d"},{url:"/draw-and-guess/word_bank/6c99bf54-7a33-4a4d-986b-2e80686fec31.json",revision:"f90286bb8d9397ffffbef56c4b25015e"},{url:"/draw-and-guess/word_bank/76fe371e-1252-4aca-b62c-dcc6f2c633d3.json",revision:"9b79ece761ec46b0699b9772a4a98ff5"},{url:"/draw-and-guess/word_bank/86e6d914-da09-42be-bab3-13283d7e775f.json",revision:"b9528d2117f1c7c0a9a69d114d5edeea"},{url:"/draw-and-guess/word_bank/8ab0b8b5-8bec-4c56-a199-54c0ed5b5e1e.json",revision:"c41229be74657d08a969ab71b3290ea6"},{url:"/draw-and-guess/word_bank/9eb45fda-e04e-414a-9cbb-e823593401f0.json",revision:"5d0f95ca7ad9cdba3e596a5b3b4dc8f8"},{url:"/draw-and-guess/word_bank/a899f844-4864-4b23-bf13-28172b4f4f46.json",revision:"7ac2bd9b48b52c36d0304a2106df4bad"},{url:"/draw-and-guess/word_bank/b693f9c2-6ac0-44af-8d3b-59cfb371f6cf.json",revision:"8a8c3a191f7289a6b33b8a44b6e37d45"},{url:"/draw-and-guess/word_bank/bcf21e5d-764b-4684-8046-1d019a5c8fa5.json",revision:"29c8accc6acd178b4a3033fb49a9ae85"},{url:"/draw-and-guess/word_bank/bf1edee2-e022-457a-bab2-bcd3805ae1e7.json",revision:"130b0aa4e7acca264e91d0819f25d0a1"},{url:"/draw-and-guess/word_bank/e1db9ee7-5148-4fdd-b600-27753f7d765e.json",revision:"38d9afb178b3837112bdf4dece3844ca"},{url:"/draw-and-guess/word_bank/e863818d-d5d1-4eab-9683-49bbfd5ccfda.json",revision:"458c4a89acf2f6d4b236a77d9886739c"},{url:"/draw-and-guess/word_bank/f4bf7539-4a04-4881-8c31-120f1347df63.json",revision:"aab3f975a247a66868bbe99ab3792948"},{url:"/draw-and-guess/word_bank/meta.json",revision:"91a816f25ec9dcb2ed8d2be7f6fe3024"}],{})}));
//# sourceMappingURL=service-worker.js.map
