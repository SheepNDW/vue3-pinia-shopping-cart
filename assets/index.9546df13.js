import{d as y,r as v,o as b,T as $,a as c,c as i,b as l,n as k,t as f,e as S,s as T,F as h,f as C,g as L,h as E,i as p,u as O,R,j as x,k as P,l as w,m as N}from"./vendor.5a51ee39.js";const V=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};V();const A=y("statusStore",{state:()=>({loadingItem:"",messages:[]}),actions:{pushMessage(r){const{title:o,content:s,style:t="success"}=r;this.messages.push({style:t,title:o,content:s})}}});var g=(r,o)=>{const s=r.__vccOpts||r;for(const[t,e]of o)s[t]=e;return s};const B={name:"Toast",props:{msg:{type:Object}},setup(){const r=v(null);return b(()=>{new $(r.value,{delay:3e3}).show()}),{toastRef:r}}},M={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toastRef"},F={class:"toast-header"},I={class:"me-auto"},j=l("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),q={key:0,class:"toast-body"};function z(r,o,s,t,e,n){return c(),i("div",M,[l("div",F,[l("span",{class:k([`bg-${s.msg.style}`,"p-2 rounded me-2 d-inline-block"])},null,2),l("strong",I,f(s.msg.title),1),j]),s.msg.content?(c(),i("div",q,f(s.msg.content),1)):S("",!0)],512)}var D=g(B,[["render",z]]);const H={name:"ToastMessage",components:{Toast:D},setup(){const r=A(),{messages:o}=T(r);return{messages:o}}},W={class:"toast-container position-absolute pe-3 top-0 end-0 mt-2",style:{"z-index":"1050"}};function K(r,o,s,t,e,n){const a=E("Toast");return c(),i("div",W,[(c(!0),i(h,null,C(t.messages,(u,d)=>(c(),L(a,{key:d,msg:u},null,8,["msg"]))),128))])}var U=g(H,[["render",K]]);const G={setup(r){return(o,s)=>(c(),i(h,null,[p(U),p(O(R))],64))}},J="modulepreload",_={},Q="/vue3-pinia-shopping-cart/",X=function(o,s){return!s||s.length===0?o():Promise.all(s.map(t=>{if(t=`${Q}${t}`,t in _)return;_[t]=!0;const e=t.endsWith(".css"),n=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${t}"]${n}`))return;const a=document.createElement("link");if(a.rel=e?"stylesheet":J,e||(a.as="script",a.crossOrigin=""),a.href=t,document.head.appendChild(a),e)return new Promise((u,d)=>{a.addEventListener("load",u),a.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})})).then(()=>o())},Y=()=>X(()=>import("./Cart.440c1121.js"),["assets/Cart.440c1121.js","assets/Cart.75dcf0e3.css","assets/vendor.5a51ee39.js"]),Z=x({history:P(),routes:[{path:"/",name:"Cart",component:Y}]}),m=w(G);m.use(N());m.use(Z);m.mount("#app");export{g as _,A as u};