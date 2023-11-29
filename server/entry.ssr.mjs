import{j,_ as ke,a as xe,F as O,s as Se,c as Q,i as I,b as k,d as me,e as Ee,u as W,f as V,g as S,S as Ce,h as Ie,k as F,l as Ne,m as Y,n as C,o as Ae,p as Le,q as Te,r as pe,t as N,v as fe,w as ye,x as Pe,y as le,z as ze,A as B}from"./assets/@qwik-city-plan-d6760385.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.12
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var Re=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});function Fe(t,e){const n=e==null?void 0:e.mapper,o=t.symbolMapper?t.symbolMapper:i=>{var a;if(n){const r=K(i),c=n[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return c}};return{isServer:!0,async importSymbol(i,a,r){var h;const c=K(r),u=(h=globalThis.__qwik_reg_symbols)==null?void 0:h.get(c);if(u)return u;let d=String(a);d.endsWith(".js")||(d+=".js");const p=Re(d);if(!(r in p))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${d}'.`);return p[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return o(i,n)}}}async function De(t,e){const n=Fe(t,e);Se(n)}var K=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function U(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function qe(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Oe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Qe=`(() => {
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
})();`,Me=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,$e=`(() => {
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
})();`;function Ye(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?$e:Me).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Qe:Oe}function Be(t,e,n){if(!n)return[];const o=e.prefetchStrategy,s=qe(e);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return Ue(t,n,s);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function Ue(t,e,n){const o=[],s=t==null?void 0:t.qrls,{mapper:i,manifest:a}=e,r=new Map;if(Array.isArray(s))for(const c of s){const u=c.getHash(),d=i[u];d&&be(a,r,o,n,d[1])}return o}function be(t,e,n,o,s){const i=o+s;let a=e.get(i);if(!a){a={url:i,imports:[]},e.set(i,a);const r=t.bundles[s];if(r&&Array.isArray(r.imports))for(const c of r.imports)be(t,e,a.imports,o,c)}n.push(a)}function Ke(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function H(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function He(t){const e={bundles:M(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function M(t){const e=[],n=o=>{if(Array.isArray(o))for(const s of o)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function We(t){const e=new Map;let n=0;const o=(r,c)=>{if(Array.isArray(r))for(const u of r){const d=e.get(u.url)||0;e.set(u.url,d+1),n++,c.has(u.url)||(c.add(u.url),o(u.imports,c))}},s=new Set;for(const r of t)s.clear(),o(r.imports,s);const i=n/e.size*2,a=Array.from(e.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function Ve(t,e,n){const o=et(t==null?void 0:t.implementation),s=[];return o.prefetchEvent==="always"&&Je(s,e,n),o.linkInsert==="html-append"&&Xe(s,e,o),o.linkInsert==="js-append"?Ze(s,e,o,n):o.workerFetchInsert==="always"&&Ge(s,e,n),s.length>0?j(O,{children:s}):null}function Je(t,e,n){const o=We(e);for(const s of o)t.push(j("link",{rel:"modulepreload",href:s,nonce:n}));t.push(j("script",{dangerouslySetInnerHTML:He(e),nonce:n}))}function Xe(t,e,n){const o=M(e),s=n.linkRel||"prefetch";for(const i of o){const a={};a.href=i,a.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(a.as="script"),t.push(j("link",a,void 0))}}function Ze(t,e,n,o){const s=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(M(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${s}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=H(),i+="}"),n.workerFetchInsert==="always"&&(i+=H()),t.push(j("script",{type:"module",dangerouslySetInnerHTML:i,nonce:o}))}function Ge(t,e,n){let o=`const u=${JSON.stringify(M(e))};`;o+=H(),t.push(j("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function et(t){return t&&typeof t=="object"?t:tt}var tt={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},nt="<!DOCTYPE html>";async function st(t,e){var A;let n=e.stream,o=0,s=0,i=0,a=0,r="",c;const u=((A=e.streaming)==null?void 0:A.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},d=e.containerTagName??"html",p=e.containerAttributes??{},h=n,E=U(),w=qe(e),y=ot(e.manifest);function m(){r&&(h.write(r),r="",o=0,i++,i===1&&(a=E()))}function b(_){const q=_.length;o+=q,s+=q,r+=_}switch(u.strategy){case"disabled":n={write:b};break;case"direct":n=h;break;case"auto":let _=0,q=!1;const X=u.maximunChunk??0,$=u.maximunInitialChunk??0;n={write(z){z==="<!--qkssr-f-->"?q||(q=!0):z==="<!--qkssr-pu-->"?_++:z==="<!--qkssr-po-->"?_--:b(z),_===0&&(q||o>=(i===0?$:X))&&(q=!1,m())}};break}d==="html"?n.write(nt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await De(e,y);const v=y==null?void 0:y.manifest.injections,l=v?v.map(_=>j(_.tag,_.attributes??{})):void 0,f=U(),g=[];let R=0,T=0;await ke(t,{stream:n,containerTagName:d,containerAttributes:p,serverData:e.serverData,base:w,beforeContent:l,beforeClose:async(_,q,X,$)=>{var te,ne,se,oe,ie,re,ce;R=f();const z=U();c=await xe(_,q,void 0,$);const L=[];if(e.prefetchStrategy!==null){const x=Be(c,e,y);if(x.length>0){const ae=Ve(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ae&&L.push(ae)}}const ge=JSON.stringify(c.state,void 0,void 0);L.push(j("script",{type:"qwik/json",dangerouslySetInnerHTML:it(ge),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),c.funcs.length>0&&L.push(j("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:ct(c.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const je=!c||c.mode!=="static",Z=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=Z==="always"||Z==="auto"&&je;if(G){const x=Ye({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});L.push(j("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(q.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;G||(x=`window.qwikevents||=[];${x}`),L.push(j("script",{dangerouslySetInnerHTML:x,nonce:(ce=e.serverData)==null?void 0:ce.nonce}))}return rt(g,_),T=z(),j(O,{children:L})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),d!=="html"&&n.write("<!--/cq-->"),m();const P=c.resources.some(_=>_._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:y==null?void 0:y.manifest,size:s,isStatic:!P,timing:{render:R,snapshot:T,firstFlush:a},_symbols:g}}function ot(t){if(t){if("mapper"in t)return t;if(t=Ke(t),t){const e={};return Object.entries(t.mapping).forEach(([n,o])=>{e[K(n)]=[n,o]}),{mapper:e,manifest:t}}}}var it=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function rt(t,e){var n;for(const o of e){const s=(n=o.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}function ct(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const at={manifestHash:"2k7yk5",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0PPzU29MPSc:{origin:"components/SourceButton/sourcebutton.tsx",displayName:"Sourcebutton_component",canonicalFilename:"s_0ppzu29mpsc",hash:"0PPzU29MPSc",ctxKind:"function",ctxName:"component$",captures:!1,loc:[218,3302]},s_1CY5TCHYdKU:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_1cy5tchydku",hash:"1CY5TCHYdKU",ctxKind:"function",ctxName:"component$",captures:!1,loc:[1159,2639]},s_71uYSHkBCtw:{origin:"components/Background/background.tsx",displayName:"Background_component",canonicalFilename:"s_71uyshkbctw",hash:"71uYSHkBCtw",ctxKind:"function",ctxName:"component$",captures:!1,loc:[408,3214]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[37211,38862]},s_EKMoyOV0OMA:{origin:"components/Card/card.tsx",displayName:"Card_component",canonicalFilename:"s_ekmoyov0oma",hash:"EKMoyOV0OMA",ctxKind:"function",ctxName:"component$",captures:!1,loc:[456,5555]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,loc:[48816,50167]},s_Q6dNzwpPCpc:{origin:"components/Left/left.tsx",displayName:"Left_component",canonicalFilename:"s_q6dnzwppcpc",hash:"Q6dNzwpPCpc",ctxKind:"function",ctxName:"component$",captures:!1,loc:[193,6430]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,loc:[23025,35545]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[35829,37092]},s_Yk6ZdDcXFFE:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_yk6zddcxffe",hash:"Yk6ZdDcXFFE",ctxKind:"function",ctxName:"component$",captures:!1,loc:[291,920]},s_aBnpUPtQY6s:{origin:"components/Right/right.tsx",displayName:"Right_component",canonicalFilename:"s_abnpuptqy6s",hash:"aBnpUPtQY6s",ctxKind:"function",ctxName:"component$",captures:!1,loc:[301,1316]},s_d5owTzHelp0:{origin:"components/Arrow/arrow.tsx",displayName:"Arrow_component",canonicalFilename:"s_d5owtzhelp0",hash:"d5owTzHelp0",ctxKind:"function",ctxName:"component$",captures:!1,loc:[124,1058]},s_dEePTDiZSeg:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_deeptdizseg",hash:"dEePTDiZSeg",ctxKind:"function",ctxName:"component$",captures:!1,loc:[295,1272]},s_dd5YY9LQTnI:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_dd5yy9lqtni",hash:"dd5YY9LQTnI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[656,1169]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,loc:[7931,8645]},s_jT0FEQEW9tY:{origin:"routes/winter/index.tsx",displayName:"winter_component",canonicalFilename:"s_jt0feqew9ty",hash:"jT0FEQEW9tY",ctxKind:"function",ctxName:"component$",captures:!1,loc:[915,2073]},s_plo6O2yod5w:{origin:"components/Ghost/ghost.tsx",displayName:"Ghost_component",canonicalFilename:"s_plo6o2yod5w",hash:"plo6O2yod5w",ctxKind:"function",ctxName:"component$",captures:!1,loc:[176,1061]},s_r9TvhsbRXmI:{origin:"routes/halloween/index.tsx",displayName:"halloween_component",canonicalFilename:"s_r9tvhsbrxmi",hash:"r9TvhsbRXmI",ctxKind:"function",ctxName:"component$",captures:!1,loc:[5814,8008]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_PjL1slm5woE:{origin:"components/SourceButton/sourcebutton.tsx",displayName:"Sourcebutton_component_div_button_onClick",canonicalFilename:"s_pjl1slm5woe",hash:"PjL1slm5woE",ctxKind:"eventHandler",ctxName:"onClick$",captures:!0,parent:"s_0PPzU29MPSc",loc:[2195,2271]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]}},mapping:{s_02wMImzEAbk:"q-54e67a05.js",s_0PPzU29MPSc:"q-f0635c72.js",s_1CY5TCHYdKU:"q-2df8f3c2.js",s_71uYSHkBCtw:"q-7af52b36.js",s_8gdLBszqbaM:"q-a9af24be.js",s_EKMoyOV0OMA:"q-eeeec9b2.js",s_Nk9PlpjQm9Y:"q-92db35d2.js",s_Q6dNzwpPCpc:"q-22c6b0aa.js",s_TxCFOy819ag:"q-54e67a05.js",s_WmYC5H00wtI:"q-8fd37a6e.js",s_Yk6ZdDcXFFE:"q-2a76350a.js",s_aBnpUPtQY6s:"q-ec117fe9.js",s_d5owTzHelp0:"q-ef1e0654.js",s_dEePTDiZSeg:"q-8080bfd2.js",s_dd5YY9LQTnI:"q-ec4bb829.js",s_e0ssiDXoeAM:"q-849d4636.js",s_jT0FEQEW9tY:"q-1d3d875a.js",s_plo6O2yod5w:"q-226c84f4.js",s_r9TvhsbRXmI:"q-6011ddc4.js",s_RPDJAz33WLA:"q-54e67a05.js",s_A5bZC7WO00A:"q-9e9b54c1.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-82cca008.js",s_BUbtvTyvVRE:"q-8fd37a6e.js",s_PjL1slm5woE:"q-f0635c72.js",s_eBQ0vFsFKsk:"q-5e4b0493.js",s_fX0bDjeJa0E:"q-54e67a05.js",s_i1Cv0pYJNR0:"q-a9af24be.js",s_p9MSze0ojs4:"q-92db35d2.js"},bundles:{"q-1d3d875a.js":{size:733,imports:["q-258d6c9f.js","q-7388e0ff.js","q-b82a7f33.js","q-e2e295ef.js"],origins:["src/entry_winter.js","src/s_jt0feqew9ty.js"],symbols:["s_jT0FEQEW9tY"]},"q-218c0ef5.js":{size:207,imports:["q-258d6c9f.js"],dynamicImports:["q-8080bfd2.js"],origins:["src/global.css","src/root.tsx","src/snow.css"]},"q-226c84f4.js":{size:584,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_Ghost.js","src/media/ghostyboy.webp?jsx","src/s_plo6o2yod5w.js"],symbols:["s_plo6O2yod5w"]},"q-22c6b0aa.js":{size:2917,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_Left.js","src/s_q6dnzwppcpc.js"],symbols:["s_Q6dNzwpPCpc"]},"q-258d6c9f.js":{size:46199,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.12_undici@5.22.1/node_modules/@builder.io/qwik/core.min.mjs"]},"q-2a76350a.js":{size:712,imports:["q-258d6c9f.js","q-4fa30071.js","q-78f2f2d5.js"],origins:["src/entry_RouterHead.js","src/s_yk6zddcxffe.js"],symbols:["s_Yk6ZdDcXFFE"]},"q-2df8f3c2.js":{size:1032,imports:["q-258d6c9f.js","q-47572907.js","q-b82a7f33.js","q-e2e295ef.js","q-e9ef4b9e.js"],origins:["src/entry_routes.js","src/s_1cy5tchydku.js"],symbols:["s_1CY5TCHYdKU"]},"q-47572907.js":{size:201,imports:["q-258d6c9f.js"],dynamicImports:["q-ef1e0654.js"],origins:["src/components/Arrow/arrow.tsx"]},"q-4fa30071.js":{size:499,imports:["q-258d6c9f.js"],dynamicImports:["q-7388e0ff.js","q-80ea0028.js","q-d9c15840.js","q-e967ea85.js","q-e9ef4b9e.js"],origins:["@qwik-city-plan"]},"q-54e67a05.js":{size:5430,imports:["q-258d6c9f.js","q-4fa30071.js","q-78f2f2d5.js"],origins:["src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-5e4b0493.js":{size:128,imports:["q-258d6c9f.js","q-78f2f2d5.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-6011ddc4.js":{size:1857,imports:["q-258d6c9f.js","q-80ea0028.js","q-b82a7f33.js"],dynamicImports:["q-226c84f4.js","q-f0635c72.js"],origins:["src/components/Ghost/ghost.tsx","src/components/SourceButton/sourcebutton.tsx","src/entry_halloween.js","src/s_r9tvhsbrxmi.js"],symbols:["s_r9TvhsbRXmI"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-7388e0ff.js":{size:885,imports:["q-258d6c9f.js"],dynamicImports:["q-1d3d875a.js"],origins:["src/routes/winter/index.tsx"]},"q-78f2f2d5.js":{size:7527,imports:["q-258d6c9f.js"],dynamicImports:["q-54e67a05.js","q-663033b0.js","q-849d4636.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-7af52b36.js":{size:2223,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_Background.js","src/media/scarynewberry-cropped-overlay.jpg?jsx","src/media/scarynewberry-cropped.png?jsx","src/media/spookynewberry.png?jsx","src/s_71uyshkbctw.js"],symbols:["s_71uYSHkBCtw"]},"q-8080bfd2.js":{size:883,imports:["q-258d6c9f.js","q-78f2f2d5.js"],dynamicImports:["q-2a76350a.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_deeptdizseg.js"],symbols:["s_dEePTDiZSeg"]},"q-80ea0028.js":{size:4661,imports:["q-258d6c9f.js"],dynamicImports:["q-6011ddc4.js"],origins:["src/routes/halloween/index.tsx"]},"q-82cca008.js":{size:889,imports:["q-258d6c9f.js","q-78f2f2d5.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-849d4636.js":{size:462,imports:["q-258d6c9f.js","q-78f2f2d5.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-8fd37a6e.js":{size:787,imports:["q-258d6c9f.js","q-78f2f2d5.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-92db35d2.js":{size:1032,imports:["q-258d6c9f.js","q-78f2f2d5.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-9e9b54c1.js":{size:751,imports:["q-258d6c9f.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-a9af24be.js":{size:1144,imports:["q-258d6c9f.js","q-78f2f2d5.js"],dynamicImports:["q-5e4b0493.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-b82a7f33.js":{size:517,imports:["q-258d6c9f.js"],dynamicImports:["q-22c6b0aa.js","q-ec117fe9.js","q-eeeec9b2.js"],origins:["src/components/Card/card.tsx","src/components/Left/left.tsx","src/components/Right/right.tsx"]},"q-d9c15840.js":{size:310,imports:["q-258d6c9f.js"],dynamicImports:["q-ec4bb829.js"],origins:["src/routes/layout.tsx"]},"q-e2e295ef.js":{size:8094,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]},"q-e967ea85.js":{size:125,imports:["q-258d6c9f.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-e9ef4b9e.js":{size:928,imports:["q-258d6c9f.js"],dynamicImports:["q-2df8f3c2.js"],origins:["src/routes/index.tsx"]},"q-ec117fe9.js":{size:721,imports:["q-258d6c9f.js","q-47572907.js","q-e2e295ef.js"],dynamicImports:["q-7af52b36.js"],origins:["src/components/Background/background.tsx","src/entry_Right.js","src/s_abnpuptqy6s.js"],symbols:["s_aBnpUPtQY6s"]},"q-ec4bb829.js":{size:257,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_layout.js","src/s_dd5yy9lqtni.js"],symbols:["s_dd5YY9LQTnI"]},"q-eeeec9b2.js":{size:2664,imports:["q-258d6c9f.js","q-4fa30071.js","q-e2e295ef.js"],origins:["src/entry_Card.js","src/s_ekmoyov0oma.js"],symbols:["s_EKMoyOV0OMA"]},"q-ef1e0654.js":{size:601,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_Arrow.js","src/s_d5owtzhelp0.js"],symbols:["s_d5owTzHelp0"]},"q-f0635c72.js":{size:1593,imports:["q-258d6c9f.js","q-e2e295ef.js"],origins:["src/entry_Sourcebutton.js","src/s_0ppzu29mpsc.js","src/s_pjl1slm5woe.js"],symbols:["s_0PPzU29MPSc","s_PjL1slm5woE"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/_csh/build/q-ee0056a5.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.12",vite:"",rollup:"3.29.4",env:"node",os:"linux",node:"21.2.0"}},lt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/_csh/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',dt=N("qc-s"),ut=N("qc-c"),_e=N("qc-ic"),he=N("qc-h"),ve=N("qc-l"),mt=N("qc-n"),pt=N("qc-a"),ft=N("qc-ir"),yt=t=>{const e=window,n=location.pathname+location.search,o="_qCitySPA",s="_qCityHistoryPatch",i="_qCityBootstrap",a="_qCityInitPopstate",r="_qCityInitAnchors",c="_qCityInitVisibility",u="_qCityInitScroll",d="_qCityScrollEnabled",p="_qCityScrollDebounce",h="_qCityScroll",E=m=>{m&&e.scrollTo(m.x,m.y)},w=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},y=m=>{const b=history.state||{};b[h]=m||w(),history.replaceState(b,"")};if(!e[o]&&!e[a]&&!e[r]&&!e[c]&&!e[u]){if(y(),e[a]=()=>{var m;if(!e[o]){if(e[d]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const v=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(v){const l=v.closest("[q\\:container]"),f=v.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[i]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const b=(m=history.state)==null?void 0:m[h];E(b),e[d]=!0}}},!e[s]){e[s]=!0;const m=history.pushState,b=history.replaceState,v=l=>(l===null||typeof l>"u"?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||w(),l);history.pushState=(l,f,g)=>(l=v(l),m.call(history,l,f,g)),history.replaceState=(l,f,g)=>(l=v(l),b.call(history,l,f,g))}e[r]=m=>{if(e[o]||m.defaultPrevented)return;const b=m.target.closest("a[href]");if(b&&!b.hasAttribute("preventdefault:click")){const v=b.getAttribute("href"),l=new URL(location.href),f=new URL(v,l),g=f.origin===l.origin,R=f.pathname+f.search===l.pathname+l.search;if(g&&R)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[d]=!1,clearTimeout(e[p]),y({...w(),x:0,y:0}),location.reload());else{const T=f.hash.slice(1),P=document.getElementById(T);P&&P.scrollIntoView()}}},e[c]=()=>{!e[o]&&e[d]&&document.visibilityState==="hidden"&&y()},e[u]=()=>{e[o]||!e[d]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{y(),e[p]=void 0},200))},e[d]=!0,setTimeout(()=>{addEventListener("popstate",e[a]),addEventListener("scroll",e[u],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[c],{passive:!0})},0)}},qt=I(yt,"s_DyVc0YBIqQU"),bt=()=>{{const[t,e]=Te().chunkForSymbol(qt.getSymbol(),null),n=fe+"build/"+e;return`(${_t.toString()})('${n}','${t}');`}},_t=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(n=history.state)==null?void 0:n._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;(await import(t))[e](s)}},ht=()=>{const t=bt();Ee();const e=W("nonce"),n=V(_e);if(n.value&&n.value.length>0){const o=n.value.length;let s=null;for(let i=o-1;i>=0;i--)n.value[i].default&&(s=S(n.value[i].default,{children:s},1,"zl_0"));return S(O,{children:[s,k("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ce},vt=Q(I(ht,"s_e0ssiDXoeAM")),wt=(t,e)=>new URL(t,e.href),gt=(t,e)=>t.origin===e.origin,jt=(t,e)=>t.pathname+t.search===e.pathname+e.search,kt=t=>t&&typeof t.then=="function",xt=(t,e,n,o)=>{const s=we(),a={head:s,withLocale:r=>le(o,r),resolveValue:r=>{const c=r.__id;if(r.__brand==="server_loader"&&!(c in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const u=t.loaders[c];if(kt(u))throw new Error("Loaders returning a function can not be referred to in the head function.");return u},...e};for(let r=n.length-1;r>=0;r--){const c=n[r]&&n[r].head;c&&(typeof c=="function"?de(s,le(o,()=>c(a))):typeof c=="object"&&de(s,c))}return a.head},de=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),D(t.meta,e.meta),D(t.links,e.links),D(t.styles,e.styles),D(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},D=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const o=t.findIndex(s=>s.key===n.key);if(o>-1){t[o]=n;continue}}t.push(n)}},we=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});let ue;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(ue||(ue={}));const St=()=>V(he),Et=()=>V(ve),Ct=()=>pe(W("qwikcity")),It=":root{view-transition-name:none}",Nt=async(t,e)=>{const[n,o,s,i]=ye(),{type:a="link",forceReload:r=t===void 0,replaceState:c=!1,scroll:u=!0}=typeof e=="object"?e:{forceReload:e},d=s.value.dest,p=t===void 0?d:wt(t,i.url);if(gt(p,d)&&!(!r&&jt(p,d)))return s.value={type:a,dest:p,forceReload:r,replaceState:c,scroll:u},n.value=void 0,i.isNavigating=!0,new Promise(h=>{o.r=h})},At=({track:t})=>{const[e,n,o,s,i,a,r,c,u,d,p]=ye();async function h(){const[w,y]=t(()=>[d.value,e.value]),m=Pe(""),b=p.url,v=y?"form":w.type;w.replaceState;let l,f,g=null;if(l=new URL(w.dest,p.url),g=i.loadedRoute,f=i.response,g){const[R,T,P,J]=g,A=P,_=A[A.length-1];p.prevUrl=b,p.url=l,p.params={...T},d.untrackedValue={type:v,dest:l};const q=xt(f,p,A,m);n.headings=_.headings,n.menu=J,o.value=pe(A),s.links=q.links,s.meta=q.meta,s.styles=q.styles,s.scripts=q.scripts,s.title=q.title,s.frontmatter=q.frontmatter}}return h()},Lt=t=>{Ie(I(It,"s_RPDJAz33WLA"));const e=Ct();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=W("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),s=F({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},a=Ne(F(e.response.loaders,{deep:!1})),r=Y({type:"initial",dest:o,forceReload:!1,replaceState:!1,scroll:!0}),c=F(we),u=F({headings:void 0,menu:void 0}),d=Y(),p=e.response.action,h=p?e.response.loaders[p]:void 0,E=Y(h?{id:p,data:e.response.formData,output:{result:h,status:e.response.status}}:void 0),w=I(Nt,"s_fX0bDjeJa0E",[E,i,r,s]);return C(ut,u),C(_e,d),C(he,c),C(ve,s),C(mt,w),C(dt,a),C(pt,E),C(ft,r),Ae(I(At,"s_02wMImzEAbk",[E,u,d,c,e,w,a,i,t,r,s])),S(Le,null,3,"qY_0")},Tt=Q(I(Lt,"s_TxCFOy819ag")),Pt=t=>k("script",{nonce:me(t,"nonce")},{dangerouslySetInnerHTML:lt},null,3,"1Z_0"),zt=()=>{const t=St(),e=Et();return S(O,{children:[k("title",null,null,t.title,1,null),k("link",null,{href:ze(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),k("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),k("link",null,{href:`${fe}/newberry.png`,rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>B("meta",{...n},null,0,n.key)),t.links.map(n=>B("link",{...n},null,0,n.key)),t.styles.map(n=>B("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"do_0")},Rt=Q(I(zt,"s_Yk6ZdDcXFFE"));const Ft=()=>S(Tt,{children:[k("head",null,null,[k("meta",null,{charSet:"utf-8"},null,3,null),k("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),k("script",null,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-VXBH4RD619"},null,3,null),k("script",{dangerouslySetInnerHTML:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VXBH4RD619');"},{async:!0,defer:!0},null,3,null),S(Rt,null,3,"jq_0")],1,null),k("body",null,{lang:"en"},[S(vt,null,3,"jq_1"),S(Pt,null,3,"jq_2")],1,null)]},1,"jq_3"),Dt=Q(I(Ft,"s_dEePTDiZSeg"));function Qt(t){return st(S(Dt,null,3,"Zi_0"),{manifest:at,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Qt as default};
