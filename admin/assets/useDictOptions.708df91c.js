import"./index.a3f35e3a.js";import{Z as l,ad as f}from"./@vue.50ba5cf8.js";function v(t){const s=l({}),e=Object.keys(t),i=e.map(o=>{const a=t[o];return s[o]=[],()=>a.api(f(a.params)||{})}),r=async()=>{(await Promise.allSettled(i.map(a=>a()))).forEach((a,p)=>{const n=e[p];if(a.status=="fulfilled"){const{transformData:c}=t[n],u=c?c(a.value):a.value;s[n]=u}})};return r(),{optionsData:s,refresh:r}}export{v as u};