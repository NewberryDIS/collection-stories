import{l as W,j as F,k as at,r as st,m as Y,n as z,o as Z,p as it,q as $,s as L,t as q,v as lt,w as ct,x as ut,y as dt,c as _t,C as mt,d as pt,D as vt,R as ft,e as yt,f as ht,h as St,i as Ct,z as Et}from"./q-24738f2c.js";import{_ as D,a as tt,b as wt,N as et,c as bt,D as qt,U as gt,V as Rt,G as V,w as Lt,W as N,K as v,d as Dt,C as Pt,m as j,R as At,e as It}from"./q-69d0408b.js";const kt=()=>D(()=>import("./q-cb07597f.js"),["build/q-cb07597f.js","build/q-69d0408b.js"]),J=[["/",[kt,()=>D(()=>import("./q-8fb85d61.js"),["build/q-8fb85d61.js","build/q-69d0408b.js"])]]],Q=[];const B=!0;const Tt=({track:f})=>{const[n,y,S,a,C,i,d,_,E,l,o]=tt();async function w(){var G;const[u,g]=f(()=>[l.value,n.value]),ot=wt(""),P=o.url,m=g?"form":u.type,nt=u.replaceState;let r,R,x=null,A;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let I=W(J,Q,B,r.pathname);A=et();const k=R=await F(r,A,!0,g);if(!k){l.untrackedValue={type:m,dest:r};return}const H=k.href,T=new URL(H,r);at(T,r)||(r=T,I=W(J,Q,B,r.pathname)),x=await I}if(x){const[I,k,H,T]=x,U=H,rt=U[U.length-1];o.prevUrl=P,o.url=r,o.params={...k},l.untrackedValue={type:m,dest:r};const b=st(R,o,U,ot);y.headings=rt.headings,y.menu=T,S.value=bt(U),a.links=b.links,a.meta=b.meta,a.styles=b.styles,a.scripts=b.scripts,a.title=b.title,a.frontmatter=b.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let K;m==="popstate"&&(K=Y()),u.scroll&&(!u.forceReload||!z(r,P))&&(m==="link"||m==="popstate")&&(document.__q_scroll_restore__=()=>Z(m,r,P,K));const X=R==null?void 0:R.loaders,t=window;if(X&&Object.assign(d,X),it.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,p=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||q(document.documentElement),e);history.pushState=(e,c,O)=>(e=h(e),s.call(history,e,c,O)),history.replaceState=(e,c,O)=>(e=h(e),p.call(history,e,c,O))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const p=s.target.closest("a[href]");if(p&&!p.hasAttribute("preventdefault:click")){const h=p.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if($(c,e)&&z(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),L({...q(document.documentElement),x:0,y:0}),location.reload();return}i(p.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=q(document.documentElement);L(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=q(document.documentElement);L(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(G=t._qCityBootstrap)==null||G.remove(),t._qCityBootstrap=void 0,lt.resolve()}if(m!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=q(document.documentElement);L(s)}ct(window,m,P,r,nt),qt(A).then(()=>{var h;ut(A).setAttribute("q:route",I);const p=q(document.documentElement);L(p),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=_.r)==null||h.call(_)})}}}w()},Ut=f=>{gt(j(()=>D(()=>Promise.resolve().then(()=>M),void 0),"s_RPDJAz33WLA"));const n=dt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=Rt("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=V({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=Lt(V(n.response.loaders,{deep:!1})),d=N({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),_=V(_t),E=V({headings:void 0,menu:void 0}),l=N(),o=n.response.action,w=o?n.response.loaders[o]:void 0,u=N(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),g=j(()=>D(()=>Promise.resolve().then(()=>M),void 0),"s_fX0bDjeJa0E",[u,C,d,a]);return v(mt,E),v(pt,l),v(vt,_),v(ft,a),v(yt,g),v(ht,i),v(St,u),v(Ct,d),Dt(j(()=>D(()=>Promise.resolve().then(()=>M),void 0),"s_02wMImzEAbk",[u,E,l,_,n,g,i,C,f,d,a])),Pt(At,null,3,"qY_0")},Vt=":root{view-transition-name:none}",xt=async(f,n)=>{const[y,S,a,C]=tt(),{type:i="link",forceReload:d=f===void 0,replaceState:_=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=f===void 0?l:Et(f,C.url);if(!$(o,l)){location.href=o.href;return}if(!d&&z(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),Z(i,o,new URL(location.href),Y()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:_,scroll:E},F(o,et()),W(J,Q,B,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(w=>{S.r=w})},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:It,s_02wMImzEAbk:Tt,s_RPDJAz33WLA:Vt,s_TxCFOy819ag:Ut,s_fX0bDjeJa0E:xt},Symbol.toStringTag,{value:"Module"}));export{It as _hW,Tt as s_02wMImzEAbk,Vt as s_RPDJAz33WLA,Ut as s_TxCFOy819ag,xt as s_fX0bDjeJa0E};
