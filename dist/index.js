!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r(require("@golden-tiger/regexp-gene"),require("vue")):"function"==typeof define&&define.amd?define([,],r):"object"==typeof exports?exports.Template=r(require("@golden-tiger/regexp-gene"),require("vue")):e.Template=r(e[void 0],e[void 0])}("undefined"==typeof self?this:self,((e,r)=>(()=>{"use strict";var t={713:r=>{r.exports=e},405:e=>{e.exports=r}},o={};function n(e){var r=o[e];if(void 0!==r)return r.exports;var p=o[e]={exports:{}};return t[e](p,p.exports,n),p.exports}n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var p={};return(()=>{n.r(p),n.d(p,{SymbolRenderer:()=>r,uid:()=>t,useVueRenderer:()=>i});var e=n(713);const r=Symbol("renderer");function t(){return"r"+Date.now()+"_"+(0,e.gene)(/[0-9a-zA-Z]{10}/)}var o=n(405);function i(){const e=new Map,n=new Map;function p(r){return e.get(r)}function i(e,{rendererContext:u}){if("string"==typeof e)return e;const{type:d,props:s,slots:f,[r]:a}=e;if(a?.hollow)return(f?.default||[]).map((e=>i(e,{rendererContext:u})));const c=t(),l=(0,o.h)(p(d)||d||"div",{"data-uid":c,"data-role":"renderer-box",...s||{}},Object.entries(f||{}).reduce(((e,[r,t])=>(e[r]=e=>t.map((r=>{if("string"==typeof r)return r;const{props:t}=r;return r.props={...t||{},...e},r})).map((e=>i(e,{rendererContext:u}))),e)),{}));return n.set(c,l),l}return{Renderer:(0,o.defineComponent)({props:{options:{}},setup(e,r){const{options:t}=e,o={};return r.expose({rendererContext:o}),()=>i(t,{rendererContext:o})}}),rendererNodeMap:n,registerComponent:function(r,t){e.set(r,t)},getComponent:p}}})(),p})()));