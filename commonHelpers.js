(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const c of t.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const r=document.querySelector(".cookies"),a=document.querySelector(".cookies-accept"),u=document.querySelector(".cookies-decline");localStorage.getItem("cookiesAccepted")||(r.style.display="block");a.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","true"),r.style.display="none"});u.addEventListener("click",()=>{localStorage.setItem("cookiesAccepted","false"),r.style.display="none"});const n=document.querySelector(".burger-input"),i=document.querySelector(".modal"),l=document.querySelector(".header");n.addEventListener("change",()=>{n.checked?(i.classList.add("active"),l.classList.add("transparent")):(i.classList.remove("active"),l.classList.remove("transparent"))});
//# sourceMappingURL=commonHelpers.js.map
