import{_ as i,A as u,k as l,g as r,C as m,m as d,R as p,a as _}from"./q-a7fc02df.js";import{u as f}from"./q-9b398aad.js";const b=async(a,e)=>{const[s]=i(),t=new FormData(e),o=new URLSearchParams;t.forEach((n,c)=>{typeof n=="string"&&o.append(c,n)}),s("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=a=>{const e=u(a,["action","spaReset","reloadDocument","onSubmit$"]),s=f();return l("form",{...e,children:m(p,null,3,"BC_0"),onSubmit$:d(()=>_(()=>Promise.resolve().then(()=>g),void 0),"s_p9MSze0ojs4",[s])},{action:"get","data-spa-reset":r(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined'),"preventdefault:submit":r(t=>!t.reloadDocument,[a],"!p0.reloadDocument")},0,"BC_1")},g=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
