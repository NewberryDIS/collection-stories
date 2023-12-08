import{j as u,_ as oe,a as re,F as S,s as ae,c as W,i as Z,u as ce,b as le,d as w,e as b,f as de,g as me,h as k,k as ue,R as pe,S as fe,Q as ye}from"./assets/@qwik-city-plan-3a23d460.mjs";import"tumblr.js";/**
 * @license
 * @builder.io/qwik/server 1.2.12
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var be=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(n,t)=>(typeof require<"u"?require:n)[t]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function qe(e,n){const t=n==null?void 0:n.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(t){const r=E(i),c=t[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",t)}return c}};return{isServer:!0,async importSymbol(i,a,r){var j;const c=E(r),l=(j=globalThis.__qwik_reg_symbols)==null?void 0:j.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const h=be(m);if(!(r in h))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return h[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,t)}}}async function _e(e,n){const t=qe(e,n);ae(t)}var E=e=>{const n=e.lastIndexOf("_");return n>-1?e.slice(n+1):e};function x(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function J(e){let n=e.base;return typeof e.base=="function"&&(n=e.base(e)),typeof n=="string"?(n.endsWith("/")||(n+="/"),n):"/build/"}var we=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,je=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,he=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function ge(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ve:he).replace("window.qEvents",JSON.stringify(e.events)):e.debug?je:we}function ke(e,n,t){if(!t)return[];const s=n.prefetchStrategy,o=J(n);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return xe(e,t,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:t.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function xe(e,n,t){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=n,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),m=i[l];m&&V(a,r,s,t,m[1])}return s}function V(e,n,t,s,o){const i=s+o;let a=n.get(i);if(!a){a={url:i,imports:[]},n.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)V(e,n,a.imports,s,c)}t.push(a)}function Ee(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function N(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ne(e){const n={bundles:v(e).map(t=>t.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(n)}}))`}function v(e){const n=[],t=s=>{if(Array.isArray(s))for(const o of s)n.includes(o.url)||(n.push(o.url),t(o.imports))};return t(e),n}function Se(e){const n=new Map;let t=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const m=n.get(l.url)||0;n.set(l.url,m+1),t++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=t/n.size*2,a=Array.from(n.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ce(e,n,t){const s=Fe(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&ze(o,n,t),s.linkInsert==="html-append"&&Ae(o,n,s),s.linkInsert==="js-append"?Ie(o,n,s,t):s.workerFetchInsert==="always"&&Te(o,n,t),o.length>0?u(S,{children:o}):null}function ze(e,n,t){const s=Se(n);for(const o of s)e.push(u("link",{rel:"modulepreload",href:o,nonce:t}));e.push(u("script",{dangerouslySetInnerHTML:Ne(n),nonce:t}))}function Ae(e,n,t){const s=v(n),o=t.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ie(e,n,t,s){const o=t.linkRel||"prefetch";let i="";t.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(v(n))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,t.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",t.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=N(),i+="}"),t.workerFetchInsert==="always"&&(i+=N()),e.push(u("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Te(e,n,t){let s=`const u=${JSON.stringify(v(n))};`;s+=N(),e.push(u("script",{type:"module",dangerouslySetInnerHTML:s,nonce:t}))}function Fe(e){return e&&typeof e=="object"?e:Pe}var Pe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Le="<!DOCTYPE html>";async function Re(e,n){var P;let t=n.stream,s=0,o=0,i=0,a=0,r="",c;const l=((P=n.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=n.containerTagName??"html",h=n.containerAttributes??{},j=t,X=x(),G=J(n),p=De(n.manifest);function C(){r&&(j.write(r),r="",s=0,i++,i===1&&(a=X()))}function z(d){const f=d.length;s+=f,o+=f,r+=d}switch(l.strategy){case"disabled":t={write:z};break;case"direct":t=j;break;case"auto":let d=0,f=!1;const L=l.maximunChunk??0,g=l.maximunInitialChunk??0;t={write(_){_==="<!--qkssr-f-->"?f||(f=!0):_==="<!--qkssr-pu-->"?d++:_==="<!--qkssr-po-->"?d--:z(_),d===0&&(f||s>=(i===0?g:L))&&(f=!1,C())}};break}m==="html"?t.write(Le):(t.write("<!--cq-->"),n.qwikLoader?(n.qwikLoader.include===void 0&&(n.qwikLoader.include="never"),n.qwikLoader.position===void 0&&(n.qwikLoader.position="bottom")):n.qwikLoader={include:"never"}),n.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await _e(n,p);const A=p==null?void 0:p.manifest.injections,ee=A?A.map(d=>u(d.tag,d.attributes??{})):void 0,ne=x(),I=[];let T=0,F=0;await oe(e,{stream:t,containerTagName:m,containerAttributes:h,serverData:n.serverData,base:G,beforeContent:ee,beforeClose:async(d,f,L,g)=>{var $,O,Y,K,M,B,U;T=ne();const _=x();c=await re(d,f,void 0,g);const q=[];if(n.prefetchStrategy!==null){const y=ke(c,n,p);if(y.length>0){const H=Ce(n.prefetchStrategy,y,($=n.serverData)==null?void 0:$.nonce);H&&q.push(H)}}const se=JSON.stringify(c.state,void 0,void 0);q.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:Qe(se),nonce:(O=n.serverData)==null?void 0:O.nonce})),c.funcs.length>0&&q.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Oe(c.funcs),nonce:(Y=n.serverData)==null?void 0:Y.nonce}));const ie=!c||c.mode!=="static",R=((K=n.qwikLoader)==null?void 0:K.include)??"auto",D=R==="always"||R==="auto"&&ie;if(D){const y=ge({events:(M=n.qwikLoader)==null?void 0:M.events,debug:n.debug});q.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:y,nonce:(B=n.serverData)==null?void 0:B.nonce}))}const Q=Array.from(f.$events$,y=>JSON.stringify(y));if(Q.length>0){let y=`window.qwikevents.push(${Q.join(", ")})`;D||(y=`window.qwikevents||=[];${y}`),q.push(u("script",{dangerouslySetInnerHTML:y,nonce:(U=n.serverData)==null?void 0:U.nonce}))}return $e(I,d),F=_(),u(S,{children:q})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&t.write("<!--/cq-->"),C();const te=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!te,timing:{render:T,snapshot:F,firstFlush:a},_symbols:I}}function De(e){if(e){if("mapper"in e)return e;if(e=Ee(e),e){const n={};return Object.entries(e.mapping).forEach(([t,s])=>{n[E(t)]=[t,s]}),{mapper:n,manifest:e}}}}var Qe=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function $e(e,n){var t;for(const s of n){const o=(t=s.$componentQrl$)==null?void 0:t.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Oe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}const Ye={manifestHash:"obpcft",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0PPzU29MPSc:{origin:"components/SourceButton/sourcebutton.tsx",displayName:"Sourcebutton_component",canonicalFilename:"s_0ppzu29mpsc",hash:"0PPzU29MPSc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[309,2252]},s_1CY5TCHYdKU:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_1cy5tchydku",hash:"1CY5TCHYdKU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1714,2950]},s_71uYSHkBCtw:{origin:"components/Background/background.tsx",displayName:"Background_component",canonicalFilename:"s_71uyshkbctw",hash:"71uYSHkBCtw",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1141,4337]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_EKMoyOV0OMA:{origin:"components/Card/card.tsx",displayName:"Card_component",canonicalFilename:"s_ekmoyov0oma",hash:"EKMoyOV0OMA",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[432,5468]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48816,50167]},s_Q6dNzwpPCpc:{origin:"components/Left/left.tsx",displayName:"Left_component",canonicalFilename:"s_q6dnzwppcpc",hash:"Q6dNzwpPCpc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[191,4694]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_Yk6ZdDcXFFE:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_yk6zddcxffe",hash:"Yk6ZdDcXFFE",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[291,920]},s_aBnpUPtQY6s:{origin:"components/Right/right.tsx",displayName:"Right_component",canonicalFilename:"s_abnpuptqy6s",hash:"aBnpUPtQY6s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[299,1937]},s_d5owTzHelp0:{origin:"components/Arrow/arrow.tsx",displayName:"Arrow_component",canonicalFilename:"s_d5owtzhelp0",hash:"d5owTzHelp0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[124,1058]},s_dEePTDiZSeg:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_deeptdizseg",hash:"dEePTDiZSeg",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[295,1272]},s_dd5YY9LQTnI:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_dd5yy9lqtni",hash:"dd5YY9LQTnI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[338,802]},s_dv8PeEaLCk0:{origin:"components/TumblrCard/tumblrcard.tsx",displayName:"Tumblrcard_component",canonicalFilename:"s_dv8peealck0",hash:"dv8PeEaLCk0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[346,3317]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_jT0FEQEW9tY:{origin:"routes/winter/index.tsx",displayName:"winter_component",canonicalFilename:"s_jt0feqew9ty",hash:"jT0FEQEW9tY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[3538,6080]},s_plo6O2yod5w:{origin:"components/Ghost/ghost.tsx",displayName:"Ghost_component",canonicalFilename:"s_plo6o2yod5w",hash:"plo6O2yod5w",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[355,3018]},s_r9TvhsbRXmI:{origin:"routes/halloween/index.tsx",displayName:"halloween_component",canonicalFilename:"s_r9tvhsbrxmi",hash:"r9TvhsbRXmI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[5296,7286]},s_tFhMzN07g2A:{origin:"components/Snowflake/snowflake.tsx",displayName:"Snowflake_component",canonicalFilename:"s_tfhmzn07g2a",hash:"tFhMzN07g2A",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[1423,2028]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_DQi3Atjeh4c:{origin:"routes/index.tsx",displayName:"routes_component__Fragment_Left_h1_onClick",canonicalFilename:"s_dqi3atjeh4c",hash:"DQi3Atjeh4c",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_1CY5TCHYdKU",loc:[1922,1964]},s_PjL1slm5woE:{origin:"components/SourceButton/sourcebutton.tsx",displayName:"Sourcebutton_component_div_button_onClick",canonicalFilename:"s_pjl1slm5woe",hash:"PjL1slm5woE",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_0PPzU29MPSc",loc:[1748,1796]},s_bNZttUASZD4:{origin:"routes/winter/index.tsx",displayName:"winter_component_showNzo",canonicalFilename:"s_bnzttuaszd4",hash:"bNZttUASZD4",ctxKind:"function",ctxName:"$",captures:!0,parent:"s_jT0FEQEW9tY",loc:[3639,3784]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]}},mapping:{s_02wMImzEAbk:"q-64f9e1fd.js",s_0PPzU29MPSc:"q-5c4f240b.js",s_1CY5TCHYdKU:"q-c47f329f.js",s_71uYSHkBCtw:"q-a84611d5.js",s_8gdLBszqbaM:"q-b60985bb.js",s_EKMoyOV0OMA:"q-0e4e49f9.js",s_Nk9PlpjQm9Y:"q-2c4aa37f.js",s_Q6dNzwpPCpc:"q-643663a9.js",s_TxCFOy819ag:"q-64f9e1fd.js",s_WmYC5H00wtI:"q-088e7094.js",s_Yk6ZdDcXFFE:"q-db2680ea.js",s_aBnpUPtQY6s:"q-17aeeb68.js",s_d5owTzHelp0:"q-248f1e0f.js",s_dEePTDiZSeg:"q-3252eeec.js",s_dd5YY9LQTnI:"q-9373a45b.js",s_dv8PeEaLCk0:"q-6ca336b9.js",s_e0ssiDXoeAM:"q-58646606.js",s_jT0FEQEW9tY:"q-42e16b30.js",s_plo6O2yod5w:"q-bef7c1ee.js",s_r9TvhsbRXmI:"q-609f6935.js",s_tFhMzN07g2A:"q-418b6013.js",s_RPDJAz33WLA:"q-64f9e1fd.js",s_A5bZC7WO00A:"q-6c945c84.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-ddf1aa3e.js",s_BUbtvTyvVRE:"q-088e7094.js",s_DQi3Atjeh4c:"q-c47f329f.js",s_PjL1slm5woE:"q-5c4f240b.js",s_bNZttUASZD4:"q-42e16b30.js",s_eBQ0vFsFKsk:"q-67413e10.js",s_fX0bDjeJa0E:"q-64f9e1fd.js",s_i1Cv0pYJNR0:"q-b60985bb.js",s_p9MSze0ojs4:"q-2c4aa37f.js"},bundles:{"q-02b46e8c.js":{size:125,imports:["q-a9dc43ae.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-088e7094.js":{size:787,imports:["q-08ea78b2.js","q-a9dc43ae.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-08ea78b2.js":{size:8301,imports:["q-a9dc43ae.js"],dynamicImports:["q-58646606.js","q-64f9e1fd.js","q-663033b0.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-0e4e49f9.js":{size:3586,imports:["q-5cdc7a24.js","q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Card.js","src/s_ekmoyov0oma.js"],symbols:["s_EKMoyOV0OMA"]},"q-17aeeb68.js":{size:1028,imports:["q-61734d57.js","q-a9dc43ae.js","q-bf773122.js","q-e2e295ef.js"],dynamicImports:["q-248f1e0f.js"],origins:["src/components/Arrow/arrow.tsx","src/entry_Right.js","src/s_abnpuptqy6s.js"],symbols:["s_aBnpUPtQY6s"]},"q-248f1e0f.js":{size:601,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Arrow.js","src/s_d5owtzhelp0.js"],symbols:["s_d5owTzHelp0"]},"q-2c4aa37f.js":{size:1037,imports:["q-08ea78b2.js","q-a9dc43ae.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-3252eeec.js":{size:883,imports:["q-08ea78b2.js","q-a9dc43ae.js"],dynamicImports:["q-db2680ea.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_deeptdizseg.js"],symbols:["s_dEePTDiZSeg"]},"q-418b6013.js":{size:138,imports:["q-a9dc43ae.js"],origins:["src/entry_Snowflake.js","src/s_tfhmzn07g2a.js"],symbols:["s_tFhMzN07g2A"]},"q-42e16b30.js":{size:2444,imports:["q-08ea78b2.js","q-4931de63.js","q-61734d57.js","q-6b10e412.js","q-a9dc43ae.js","q-ddda8672.js"],origins:["src/entry_winter.js","src/s_bnzttuaszd4.js","src/s_jt0feqew9ty.js"],symbols:["s_bNZttUASZD4","s_jT0FEQEW9tY"]},"q-4931de63.js":{size:675,imports:["q-a9dc43ae.js"],dynamicImports:["q-0e4e49f9.js","q-17aeeb68.js","q-5c4f240b.js","q-bef7c1ee.js"],origins:["src/components/Card/card.tsx","src/components/Ghost/ghost.tsx","src/components/Right/right.tsx","src/components/SourceButton/sourcebutton.tsx"]},"q-58646606.js":{size:462,imports:["q-08ea78b2.js","q-a9dc43ae.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-5c4f240b.js":{size:1527,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Sourcebutton.js","src/s_0ppzu29mpsc.js","src/s_pjl1slm5woe.js"],symbols:["s_0PPzU29MPSc","s_PjL1slm5woE"]},"q-5cdc7a24.js":{size:548,imports:["q-a9dc43ae.js"],dynamicImports:["q-02b46e8c.js","q-6b10e412.js","q-6c330ffb.js","q-7ecec6bd.js","q-dd4e19cc.js"],origins:["@qwik-city-plan"]},"q-609f6935.js":{size:1866,imports:["q-4931de63.js","q-a9dc43ae.js","q-dd4e19cc.js","q-ddda8672.js"],origins:["src/entry_halloween.js","src/s_r9tvhsbrxmi.js"],symbols:["s_r9TvhsbRXmI"]},"q-61734d57.js":{size:222,imports:["q-a9dc43ae.js"],origins:["src/media/snow/winter-bg-snowflakes-3.png?jsx"]},"q-61a64d55.js":{size:207,imports:["q-a9dc43ae.js"],dynamicImports:["q-3252eeec.js"],origins:["src/global.css","src/root.tsx","src/snow.css"]},"q-643663a9.js":{size:2756,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Left.js","src/s_q6dnzwppcpc.js"],symbols:["s_Q6dNzwpPCpc"]},"q-64f9e1fd.js":{size:5430,imports:["q-08ea78b2.js","q-5cdc7a24.js","q-a9dc43ae.js"],origins:["src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-67413e10.js":{size:128,imports:["q-08ea78b2.js","q-a9dc43ae.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-6b10e412.js":{size:531,imports:["q-08ea78b2.js","q-a9dc43ae.js"],dynamicImports:["q-42e16b30.js"],origins:["src/routes/winter/index.tsx"]},"q-6c330ffb.js":{size:500,imports:["q-08ea78b2.js","q-a9dc43ae.js"],dynamicImports:["q-c47f329f.js"],origins:["src/routes/index.tsx"]},"q-6c945c84.js":{size:751,imports:["q-a9dc43ae.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-6ca336b9.js":{size:1500,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Tumblrcard.js","src/s_dv8peealck0.js"],symbols:["s_dv8PeEaLCk0"]},"q-7ecec6bd.js":{size:310,imports:["q-a9dc43ae.js"],dynamicImports:["q-9373a45b.js"],origins:["src/routes/layout.tsx"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-9373a45b.js":{size:252,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_layout.js","src/s_dd5yy9lqtni.js"],symbols:["s_dd5YY9LQTnI"]},"q-a84611d5.js":{size:2513,imports:["q-61734d57.js","q-a9dc43ae.js","q-bf773122.js","q-e2e295ef.js"],origins:["src/entry_Background.js","src/media/scarynewberry-cropped-overlay.jpg?jsx","src/media/spookynewberry.png?jsx","src/media/wintry.png?jsx","src/s_71uyshkbctw.js"],symbols:["s_71uYSHkBCtw"]},"q-a9dc43ae.js":{size:46252,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.12_undici@5.26.2/node_modules/@builder.io/qwik/core.min.mjs"]},"q-b60985bb.js":{size:1144,imports:["q-08ea78b2.js","q-a9dc43ae.js"],dynamicImports:["q-67413e10.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-bef7c1ee.js":{size:1719,imports:["q-a9dc43ae.js","q-e2e295ef.js"],origins:["src/entry_Ghost.js","src/media/ghostyball.webp?jsx","src/media/ghostyboy.webp?jsx","src/s_plo6o2yod5w.js"],symbols:["s_plo6O2yod5w"]},"q-bf773122.js":{size:1260,imports:["q-61734d57.js","q-a9dc43ae.js"],dynamicImports:["q-a84611d5.js"],origins:["src/components/Background/background.tsx","src/media/snow/winter-bg-snowflakes-1.png?jsx","src/media/snow/winter-bg-snowflakes-2.png?jsx","src/media/snow/winter-bg-snowflakes-4.png?jsx","src/media/snow/winter-bg-snowflakes-5.png?jsx","src/media/snow/winter-bg-snowflakes-6.png?jsx"]},"q-c47f329f.js":{size:1297,imports:["q-08ea78b2.js","q-6c330ffb.js","q-a9dc43ae.js","q-ddda8672.js","q-e2e295ef.js"],dynamicImports:["q-6ca336b9.js"],origins:["src/components/TumblrCard/tumblrcard.tsx","src/entry_routes.js","src/s_1cy5tchydku.js","src/s_dqi3atjeh4c.js"],symbols:["s_1CY5TCHYdKU","s_DQi3Atjeh4c"]},"q-db2680ea.js":{size:712,imports:["q-08ea78b2.js","q-5cdc7a24.js","q-a9dc43ae.js"],origins:["src/entry_RouterHead.js","src/s_yk6zddcxffe.js"],symbols:["s_Yk6ZdDcXFFE"]},"q-dd4e19cc.js":{size:4616,imports:["q-a9dc43ae.js"],dynamicImports:["q-609f6935.js"],origins:["src/routes/halloween/index.tsx"]},"q-ddda8672.js":{size:201,imports:["q-a9dc43ae.js"],dynamicImports:["q-643663a9.js"],origins:["src/components/Left/left.tsx"]},"q-ddf1aa3e.js":{size:889,imports:["q-08ea78b2.js","q-a9dc43ae.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-e2e295ef.js":{size:8094,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/_csh/build/q-5cb268f6.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.12",vite:"",rollup:"3.29.4",env:"node",os:"darwin",node:"18.16.0"}},Ke=()=>{const e=ce(),n=le();return w(S,{children:[b("title",null,null,e.title,1,null),b("link",null,{href:de(t=>t.url.href,[n],"p0.url.href"),rel:"canonical"},null,3,null),b("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),b("link",null,{href:`${me}/newberry.png`,rel:"icon",type:"image/svg+xml"},null,3,null),e.meta.map(t=>k("meta",{...t},null,0,t.key)),e.links.map(t=>k("link",{...t},null,0,t.key)),e.styles.map(t=>k("style",{...t.props,dangerouslySetInnerHTML:ue(t,"style")},null,0,t.key))]},1,"do_0")},Me=W(Z(Ke,"s_Yk6ZdDcXFFE"));const Be=()=>w(ye,{children:[b("head",null,null,[b("meta",null,{charSet:"utf-8"},null,3,null),b("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),b("script",null,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-VXBH4RD619"},null,3,null),b("script",{dangerouslySetInnerHTML:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VXBH4RD619');"},{async:!0,defer:!0},null,3,null),w(Me,null,3,"jq_0")],1,null),b("body",null,{lang:"en"},[w(pe,null,3,"jq_1"),w(fe,null,3,"jq_2")],1,null)]},1,"jq_3"),Ue=W(Z(Be,"s_dEePTDiZSeg"));function Je(e){return Re(w(Ue,null,3,"Zi_0"),{manifest:Ye,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Je as default};
