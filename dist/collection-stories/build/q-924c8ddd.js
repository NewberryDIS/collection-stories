import{_ as F,N as Y,c as at,d as st,D as it,U as lt,V as ct,G as T,w as ut,W as V,K as p,e as dt,C as mt,m as j,a as O,R as ft,f as _t}from"./q-a7fc02df.js";import{t as pt,j as Z,k as W,r as $,l as tt,m as et,n as z,o as vt,p as yt,q as ht,s as L,v as q,w as St,x as Ct,y as Et,z as wt,c as bt,C as qt,d as gt,D as Rt,R as Lt,e as Dt,f as At,h as It,i as Pt}from"./q-9b398aad.js";import{c as J,m as Q,r as B}from"./q-75b3b209.js";const kt=":root{view-transition-name:none}",Ut=async(v,n)=>{const[y,S,a,C]=F(),{type:i="link",forceReload:d=v===void 0,replaceState:m=!1,scroll:E=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=v===void 0?l:pt(v,C.url);if(!Z(o,l)){location.href=o.href;return}if(!d&&W(o,l)){i==="link"&&o.href!==location.href&&history.pushState(null,"",o),$(i,o,new URL(location.href),tt()),i==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:i,dest:o,forceReload:d,replaceState:m,scroll:E},et(o,Y()),z(B,Q,J,o.pathname),y.value=void 0,C.isNavigating=!0,new Promise(w=>{S.r=w})},Tt=({track:v})=>{const[n,y,S,a,C,i,d,m,E,l,o]=F();async function w(){var G;const[u,g]=v(()=>[l.value,n.value]),ot=at(""),D=o.url,f=g?"form":u.type,nt=u.replaceState;let r,R,x=null,A;{r=new URL(u.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let I=z(B,Q,J,r.pathname);A=Y();const P=R=await et(r,A,!0,g);if(!P){l.untrackedValue={type:f,dest:r};return}const H=P.href,k=new URL(H,r);vt(k,r)||(r=k,I=z(B,Q,J,r.pathname)),x=await I}if(x){const[I,P,H,k]=x,U=H,rt=U[U.length-1];o.prevUrl=D,o.url=r,o.params={...P},l.untrackedValue={type:f,dest:r};const b=yt(R,o,U,ot);y.headings=rt.headings,y.menu=k,S.value=st(U),a.links=b.links,a.meta=b.meta,a.styles=b.styles,a.scripts=b.scripts,a.title=b.title,a.frontmatter=b.frontmatter;{E.viewTransition!==!1&&(document.__q_view_transition__=!0);let K;f==="popstate"&&(K=tt()),u.scroll&&(!u.forceReload||!W(r,D))&&(f==="link"||f==="popstate")&&(document.__q_scroll_restore__=()=>$(f,r,D,K));const X=R==null?void 0:R.loaders,t=window;if(X&&Object.assign(d,X),ht.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),i(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const s=history.pushState,_=history.replaceState,h=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||q(document.documentElement),e);history.pushState=(e,c,N)=>(e=h(e),s.call(history,e,c,N)),history.replaceState=(e,c,N)=>(e=h(e),_.call(history,e,c,N))}document.body.addEventListener("click",s=>{if(s.defaultPrevented)return;const _=s.target.closest("a[href]");if(_&&!_.hasAttribute("preventdefault:click")){const h=_.getAttribute("href"),e=new URL(location.href),c=new URL(h,e);if(Z(c,e)&&W(c,e)){if(s.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),L({...q(document.documentElement),x:0,y:0}),location.reload();return}i(_.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const s=q(document.documentElement);L(s)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const s=q(document.documentElement);L(s),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(G=t._qCityBootstrap)==null||G.remove(),t._qCityBootstrap=void 0,St.resolve()}if(f!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const s=q(document.documentElement);L(s)}Ct(window,f,D,r,nt),it(A).then(()=>{var h;Et(A).setAttribute("q:route",I);const _=q(document.documentElement);L(_),t._qCityScrollEnabled=!0,o.isNavigating=!1,(h=m.r)==null||h.call(m)})}}}w()},xt=v=>{lt(j(()=>O(()=>Promise.resolve().then(()=>M),void 0),"s_RPDJAz33WLA"));const n=wt();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const y=ct("url");if(!y)throw new Error("Missing Qwik URL Env Data");const S=new URL(y),a=T({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},i=ut(T(n.response.loaders,{deep:!1})),d=V({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=T(bt),E=T({headings:void 0,menu:void 0}),l=V(),o=n.response.action,w=o?n.response.loaders[o]:void 0,u=V(w?{id:o,data:n.response.formData,output:{result:w,status:n.response.status}}:void 0),g=j(()=>O(()=>Promise.resolve().then(()=>M),void 0),"s_fX0bDjeJa0E",[u,C,d,a]);return p(qt,E),p(gt,l),p(Rt,m),p(Lt,a),p(Dt,g),p(At,i),p(It,u),p(Pt,d),dt(j(()=>O(()=>Promise.resolve().then(()=>M),void 0),"s_02wMImzEAbk",[u,E,l,m,n,g,i,C,v,d,a])),mt(ft,null,3,"qY_0")},M=Object.freeze(Object.defineProperty({__proto__:null,_hW:_t,s_02wMImzEAbk:Tt,s_RPDJAz33WLA:kt,s_TxCFOy819ag:xt,s_fX0bDjeJa0E:Ut},Symbol.toStringTag,{value:"Module"}));export{_t as _hW,Tt as s_02wMImzEAbk,kt as s_RPDJAz33WLA,xt as s_TxCFOy819ag,Ut as s_fX0bDjeJa0E};
