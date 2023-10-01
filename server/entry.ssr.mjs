import{j,_ as je,a as ke,F as O,s as xe,c as B,i as I,b as k,d as me,e as Se,u as V,f as H,g as S,S as Ee,h as Ae,k as P,l as Ie,m as K,n as A,o as Ne,p as Ce,q as Le,r as pe,t as N,v as Re,w as fe,x as De,y as le,z as Te,A as W}from"./assets/@qwik-city-plan-1cff97d8.mjs";/**
 * @license
 * @builder.io/qwik/server 1.2.12
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var ze=(t=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(t,{get:(e,n)=>(typeof require<"u"?require:e)[n]}):t)(function(t){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+t+'" is not supported')});function Pe(t,e){const n=e==null?void 0:e.mapper,o=t.symbolMapper?t.symbolMapper:i=>{var c;if(n){const r=U(i),a=n[r];if(!a){if((c=globalThis.__qwik_reg_symbols)==null?void 0:c.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return a}};return{isServer:!0,async importSymbol(i,c,r){var h;const a=U(r),d=(h=globalThis.__qwik_reg_symbols)==null?void 0:h.get(a);if(d)return d;let u=String(c);u.endsWith(".js")||(u+=".js");const p=ze(u);if(!(r in p))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${u}'.`);return p[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(c=>{setTimeout(()=>{c(i())})}),chunkForSymbol(i){return o(i,n)}}}async function Fe(t,e){const n=Pe(t,e);xe(n)}var U=t=>{const e=t.lastIndexOf("_");return e>-1?t.slice(e+1):t};function M(){if(typeof performance>"u")return()=>0;const t=performance.now();return()=>(performance.now()-t)/1e6}function ye(t){let e=t.base;return typeof t.base=="function"&&(e=t.base(t)),typeof e=="string"?(e.endsWith("/")||(e+="/"),e):"/build/"}var Oe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,Be=`(() => {
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
})();`,Qe=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
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
})();`;function Ke(t={}){return Array.isArray(t.events)&&t.events.length>0?(t.debug?$e:Qe).replace("window.qEvents",JSON.stringify(t.events)):t.debug?Be:Oe}function We(t,e,n){if(!n)return[];const o=e.prefetchStrategy,s=ye(e);if(o!==null){if(!o||!o.symbolsToPrefetch||o.symbolsToPrefetch==="auto")return Me(t,n,s);if(typeof o.symbolsToPrefetch=="function")try{return o.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function Me(t,e,n){const o=[],s=t==null?void 0:t.qrls,{mapper:i,manifest:c}=e,r=new Map;if(Array.isArray(s))for(const a of s){const d=a.getHash(),u=i[d];u&&qe(c,r,o,n,u[1])}return o}function qe(t,e,n,o,s){const i=o+s;let c=e.get(i);if(!c){c={url:i,imports:[]},e.set(i,c);const r=t.bundles[s];if(r&&Array.isArray(r.imports))for(const a of r.imports)qe(t,e,c.imports,o,a)}n.push(c)}function Ue(t){if(t!=null&&t.mapping!=null&&typeof t.mapping=="object"&&t.symbols!=null&&typeof t.symbols=="object"&&t.bundles!=null&&typeof t.bundles=="object")return t}function J(){let s=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return s+="w.postMessage(u.map(u=>new URL(u,origin)+''));",s+="w.onmessage=()=>{w.terminate()};",s}function Je(t){const e={bundles:Q(t).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(e)}}))`}function Q(t){const e=[],n=o=>{if(Array.isArray(o))for(const s of o)e.includes(s.url)||(e.push(s.url),n(s.imports))};return n(t),e}function Ve(t){const e=new Map;let n=0;const o=(r,a)=>{if(Array.isArray(r))for(const d of r){const u=e.get(d.url)||0;e.set(d.url,u+1),n++,a.has(d.url)||(a.add(d.url),o(d.imports,a))}},s=new Set;for(const r of t)s.clear(),o(r.imports,s);const i=n/e.size*2,c=Array.from(e.entries());return c.sort((r,a)=>a[1]-r[1]),c.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function He(t,e,n){const o=et(t==null?void 0:t.implementation),s=[];return o.prefetchEvent==="always"&&Ye(s,e,n),o.linkInsert==="html-append"&&Ze(s,e,o),o.linkInsert==="js-append"?Xe(s,e,o,n):o.workerFetchInsert==="always"&&Ge(s,e,n),s.length>0?j(O,{children:s}):null}function Ye(t,e,n){const o=Ve(e);for(const s of o)t.push(j("link",{rel:"modulepreload",href:s,nonce:n}));t.push(j("script",{dangerouslySetInnerHTML:Je(e),nonce:n}))}function Ze(t,e,n){const o=Q(e),s=n.linkRel||"prefetch";for(const i of o){const c={};c.href=i,c.rel=s,(s==="prefetch"||s==="preload")&&i.endsWith(".js")&&(c.as="script"),t.push(j("link",c,void 0))}}function Xe(t,e,n,o){const s=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(Q(e))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${s}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${s}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=J(),i+="}"),n.workerFetchInsert==="always"&&(i+=J()),t.push(j("script",{type:"module",dangerouslySetInnerHTML:i,nonce:o}))}function Ge(t,e,n){let o=`const u=${JSON.stringify(Q(e))};`;o+=J(),t.push(j("script",{type:"module",dangerouslySetInnerHTML:o,nonce:n}))}function et(t){return t&&typeof t=="object"?t:tt}var tt={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},nt="<!DOCTYPE html>";async function st(t,e){var C;let n=e.stream,o=0,s=0,i=0,c=0,r="",a;const d=((C=e.streaming)==null?void 0:C.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},u=e.containerTagName??"html",p=e.containerAttributes??{},h=n,E=M(),w=ye(e),y=ot(e.manifest);function m(){r&&(h.write(r),r="",o=0,i++,i===1&&(c=E()))}function b(v){const q=v.length;o+=q,s+=q,r+=v}switch(d.strategy){case"disabled":n={write:b};break;case"direct":n=h;break;case"auto":let v=0,q=!1;const Z=d.maximunChunk??0,$=d.maximunInitialChunk??0;n={write(T){T==="<!--qkssr-f-->"?q||(q=!0):T==="<!--qkssr-pu-->"?v++:T==="<!--qkssr-po-->"?v--:b(T),v===0&&(q||o>=(i===0?$:Z))&&(q=!1,m())}};break}u==="html"?n.write(nt):(n.write("<!--cq-->"),e.qwikLoader?(e.qwikLoader.include===void 0&&(e.qwikLoader.include="never"),e.qwikLoader.position===void 0&&(e.qwikLoader.position="bottom")):e.qwikLoader={include:"never"}),e.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await Fe(e,y);const _=y==null?void 0:y.manifest.injections,l=_?_.map(v=>j(v.tag,v.attributes??{})):void 0,f=M(),g=[];let z=0,R=0;await je(t,{stream:n,containerTagName:u,containerAttributes:p,serverData:e.serverData,base:w,beforeContent:l,beforeClose:async(v,q,Z,$)=>{var te,ne,se,oe,ie,re,ae;z=f();const T=M();a=await ke(v,q,void 0,$);const L=[];if(e.prefetchStrategy!==null){const x=We(a,e,y);if(x.length>0){const ce=He(e.prefetchStrategy,x,(te=e.serverData)==null?void 0:te.nonce);ce&&L.push(ce)}}const we=JSON.stringify(a.state,void 0,void 0);L.push(j("script",{type:"qwik/json",dangerouslySetInnerHTML:it(we),nonce:(ne=e.serverData)==null?void 0:ne.nonce})),a.funcs.length>0&&L.push(j("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:at(a.funcs),nonce:(se=e.serverData)==null?void 0:se.nonce}));const ge=!a||a.mode!=="static",X=((oe=e.qwikLoader)==null?void 0:oe.include)??"auto",G=X==="always"||X==="auto"&&ge;if(G){const x=Ke({events:(ie=e.qwikLoader)==null?void 0:ie.events,debug:e.debug});L.push(j("script",{id:"qwikloader",dangerouslySetInnerHTML:x,nonce:(re=e.serverData)==null?void 0:re.nonce}))}const ee=Array.from(q.$events$,x=>JSON.stringify(x));if(ee.length>0){let x=`window.qwikevents.push(${ee.join(", ")})`;G||(x=`window.qwikevents||=[];${x}`),L.push(j("script",{dangerouslySetInnerHTML:x,nonce:(ae=e.serverData)==null?void 0:ae.nonce}))}return rt(g,v),R=T(),j(O,{children:L})},manifestHash:(y==null?void 0:y.manifest.manifestHash)||"dev"}),u!=="html"&&n.write("<!--/cq-->"),m();const D=a.resources.some(v=>v._cache!==1/0);return{prefetchResources:void 0,snapshotResult:a,flushes:i,manifest:y==null?void 0:y.manifest,size:s,isStatic:!D,timing:{render:z,snapshot:R,firstFlush:c},_symbols:g}}function ot(t){if(t){if("mapper"in t)return t;if(t=Ue(t),t){const e={};return Object.entries(t.mapping).forEach(([n,o])=>{e[U(n)]=[n,o]}),{mapper:e,manifest:t}}}}var it=t=>t.replace(/<(\/?script)/g,"\\x3C$1");function rt(t,e){var n;for(const o of e){const s=(n=o.$componentQrl$)==null?void 0:n.getSymbol();s&&!t.includes(s)&&t.push(s)}}function at(t){return`document.currentScript.qFuncs=[${t.join(`,
`)}]`}const ct={manifestHash:"a0ec6u",symbols:{s_02wMImzEAbk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[26295,35258]},s_0vphQYqOdZI:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_0vphqyqodzi",hash:"0vphQYqOdZI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,854]},s_4ubNSfBp6b8:{origin:"components/Background/background.tsx",displayName:"Background_component",canonicalFilename:"s_4ubnsfbp6b8",hash:"4ubNSfBp6b8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[257,2704]},s_7zIeFC2Z6oc:{origin:"components/Left/left.tsx",displayName:"Left_component",canonicalFilename:"s_7ziefc2z6oc",hash:"7zIeFC2Z6oc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[186,5648]},s_8Drj7PpqPA0:{origin:"components/Right/right.tsx",displayName:"Right_component",canonicalFilename:"s_8drj7ppqpa0",hash:"8Drj7PpqPA0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[185,509]},s_8gdLBszqbaM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[37211,38862]},s_B0lqk5IDDy4:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_b0lqk5iddy4",hash:"B0lqk5IDDy4",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[4513,6098]},s_Nk9PlpjQm9Y:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[48816,50167]},s_TxCFOy819ag:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[23025,35545]},s_VKFlAWJuVm8:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vkflawjuvm8",hash:"VKFlAWJuVm8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[589,617]},s_WmYC5H00wtI:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35829,37092]},s_e0ssiDXoeAM:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_g7Afvl6dlds:{origin:"components/Card/card.tsx",displayName:"Card_component",canonicalFilename:"s_g7afvl6dlds",hash:"g7Afvl6dlds",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[456,5536]},s_kK4W0Ns9Vjc:{origin:"components/Arrow/arrow.tsx",displayName:"Arrow_component",canonicalFilename:"s_kk4w0ns9vjc",hash:"kK4W0Ns9Vjc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[124,798]},s_tntnak2DhJ8:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_tntnak2dhj8",hash:"tntnak2DhJ8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[274,1251]},s_yFoJe2W8NWU:{origin:"components/Ghost/ghost.tsx",displayName:"Ghost_component",canonicalFilename:"s_yfoje2w8nwu",hash:"yFoJe2W8NWU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[175,1059]},s_RPDJAz33WLA:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[23080,23114]},s_A5bZC7WO00A:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[40230,41864]},s_DyVc0YBIqQU:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[44878,46702]},s_BUbtvTyvVRE:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[36230,36291]},s_eBQ0vFsFKsk:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[37738,37801]},s_fX0bDjeJa0E:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[24364,25683]},s_i1Cv0pYJNR0:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[37919,38434]},s_p9MSze0ojs4:{origin:"../node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[49123,49820]}},mapping:{s_02wMImzEAbk:"q-da4e1402.js",s_0vphQYqOdZI:"q-521f5a37.js",s_4ubNSfBp6b8:"q-b0db1763.js",s_7zIeFC2Z6oc:"q-e2a93b4d.js",s_8Drj7PpqPA0:"q-9277c51d.js",s_8gdLBszqbaM:"q-769e00c4.js",s_B0lqk5IDDy4:"q-ec7e4a9a.js",s_Nk9PlpjQm9Y:"q-7eb921af.js",s_TxCFOy819ag:"q-da4e1402.js",s_VKFlAWJuVm8:"q-1de0d8aa.js",s_WmYC5H00wtI:"q-d5c5c1f7.js",s_e0ssiDXoeAM:"q-c2bb3699.js",s_g7Afvl6dlds:"q-35255227.js",s_kK4W0Ns9Vjc:"q-2191e5f7.js",s_tntnak2DhJ8:"q-93eeed2a.js",s_yFoJe2W8NWU:"q-2a19cb27.js",s_RPDJAz33WLA:"q-da4e1402.js",s_A5bZC7WO00A:"q-3f64c075.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-2954ece9.js",s_BUbtvTyvVRE:"q-d5c5c1f7.js",s_eBQ0vFsFKsk:"q-815021a7.js",s_fX0bDjeJa0E:"q-da4e1402.js",s_i1Cv0pYJNR0:"q-769e00c4.js",s_p9MSze0ojs4:"q-7eb921af.js"},bundles:{"q-1de0d8aa.js":{size:102,imports:["q-cad4cea8.js"],origins:["src/entry_layout.js","src/s_vkflawjuvm8.js"],symbols:["s_VKFlAWJuVm8"]},"q-2191e5f7.js":{size:462,imports:["q-cad4cea8.js","q-e2e295ef.js"],origins:["src/entry_Arrow.js","src/s_kk4w0ns9vjc.js"],symbols:["s_kK4W0Ns9Vjc"]},"q-2954ece9.js":{size:889,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-2a19cb27.js":{size:781,imports:["q-cad4cea8.js","q-e2e295ef.js"],origins:["src/entry_Ghost.js","src/media/ghostyboy.png?jsx","src/s_yfoje2w8nwu.js"],symbols:["s_yFoJe2W8NWU"]},"q-2a7ecdfc.js":{size:202,imports:["q-cad4cea8.js"],dynamicImports:["q-93eeed2a.js"],origins:["src/global.css","src/root.tsx"]},"q-35255227.js":{size:2645,imports:["q-cad4cea8.js","q-e2e295ef.js","q-e33d22d1.js"],origins:["src/entry_Card.js","src/s_g7afvl6dlds.js"],symbols:["s_g7Afvl6dlds"]},"q-3f64c075.js":{size:746,imports:["q-cad4cea8.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-484738f9.js":{size:7551,imports:["q-cad4cea8.js"],dynamicImports:["q-663033b0.js","q-c2bb3699.js","q-da4e1402.js"],origins:["@qwik-city-sw-register","node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-521f5a37.js":{size:671,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/entry_RouterHead.js","src/s_0vphqyqodzi.js"],symbols:["s_0vphQYqOdZI"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-67a01500.js":{size:125,imports:["q-cad4cea8.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-769e00c4.js":{size:1144,imports:["q-484738f9.js","q-cad4cea8.js"],dynamicImports:["q-815021a7.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-7eb921af.js":{size:1032,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-815021a7.js":{size:128,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-8236ce77.js":{size:288,imports:["q-cad4cea8.js"],dynamicImports:["q-1de0d8aa.js"],origins:["src/routes/layout.tsx"]},"q-8ea06850.js":{size:2539,origins:["node_modules/.pnpm/@builder.io+qwik-city@1.2.12/node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-9277c51d.js":{size:385,imports:["q-cad4cea8.js","q-e2e295ef.js"],dynamicImports:["q-b0db1763.js"],origins:["src/components/Background/background.tsx","src/entry_Right.js","src/s_8drj7ppqpa0.js"],symbols:["s_8Drj7PpqPA0"]},"q-93eeed2a.js":{size:861,imports:["q-484738f9.js","q-cad4cea8.js"],dynamicImports:["q-521f5a37.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_tntnak2dhj8.js"],symbols:["s_tntnak2DhJ8"]},"q-b0db1763.js":{size:1616,imports:["q-cad4cea8.js","q-e2e295ef.js"],origins:["src/entry_Background.js","src/media/spookylibrary.png?jsx","src/media/spookynewberry-cropped.png?jsx","src/s_4ubnsfbp6b8.js"],symbols:["s_4ubNSfBp6b8"]},"q-c2bb3699.js":{size:467,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-c5152930.js":{size:3519,imports:["q-cad4cea8.js"],dynamicImports:["q-ec7e4a9a.js"],origins:["src/routes/index.tsx"]},"q-cad4cea8.js":{size:46216,origins:["node_modules/.pnpm/@builder.io+qwik@1.2.12_undici@5.22.1/node_modules/@builder.io/qwik/core.min.mjs"]},"q-d5c5c1f7.js":{size:787,imports:["q-484738f9.js","q-cad4cea8.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-da4e1402.js":{size:5430,imports:["q-484738f9.js","q-cad4cea8.js","q-e33d22d1.js"],origins:["src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-e2a93b4d.js":{size:2631,imports:["q-cad4cea8.js","q-e2e295ef.js"],origins:["src/entry_Left.js","src/media/NewberryLogo_flame.png?jsx","src/s_7ziefc2z6oc.js"],symbols:["s_7zIeFC2Z6oc"]},"q-e2e295ef.js":{size:8094,origins:["src/styled-system/css/conditions.mjs","src/styled-system/css/css.mjs"]},"q-e33d22d1.js":{size:341,imports:["q-cad4cea8.js"],dynamicImports:["q-67a01500.js","q-8236ce77.js","q-c5152930.js"],origins:["@qwik-city-plan"]},"q-ec7e4a9a.js":{size:1524,imports:["q-c5152930.js","q-cad4cea8.js","q-e2e295ef.js"],dynamicImports:["q-2191e5f7.js","q-2a19cb27.js","q-35255227.js","q-9277c51d.js","q-e2a93b4d.js"],origins:["src/components/Arrow/arrow.tsx","src/components/Card/card.tsx","src/components/Ghost/ghost.tsx","src/components/Left/left.tsx","src/components/Right/right.tsx","src/entry_routes.js","src/s_b0lqk5iddy4.js"],symbols:["s_B0lqk5IDDy4"]}},injections:[{tag:"link",location:"head",attributes:{rel:"stylesheet",href:"/collection-stories/halloween/build/q-8910decd.css"}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.12",vite:"",rollup:"3.29.3",env:"node",os:"darwin",node:"18.16.0"}},lt='((s,a,i,r)=>{i=(e,t)=>{t=document.querySelector("[q\\\\:base]"),t&&a.active&&a.active.postMessage({type:"qprefetch",base:t.getAttribute("q:base"),...e})},document.addEventListener("qprefetch",e=>{const t=e.detail;a?i(t):t.bundles&&s.push(...t.bundles)}),navigator.serviceWorker.register("/collection-stories/halloween/service-worker.js").then(e=>{r=()=>{a=e,i({bundles:s})},e.installing?e.installing.addEventListener("statechange",t=>{t.target.state=="activated"&&r()}):e.active&&r()}).catch(e=>console.error(e))})([])',ut=N("qc-s"),dt=N("qc-c"),be=N("qc-ic"),ve=N("qc-h"),he=N("qc-l"),mt=N("qc-n"),pt=N("qc-a"),ft=N("qc-ir"),yt=t=>{const e=window,n=location.pathname+location.search,o="_qCitySPA",s="_qCityHistoryPatch",i="_qCityBootstrap",c="_qCityInitPopstate",r="_qCityInitAnchors",a="_qCityInitVisibility",d="_qCityInitScroll",u="_qCityScrollEnabled",p="_qCityScrollDebounce",h="_qCityScroll",E=m=>{m&&e.scrollTo(m.x,m.y)},w=()=>{const m=document.documentElement;return{x:m.scrollLeft,y:m.scrollTop,w:Math.max(m.scrollWidth,m.clientWidth),h:Math.max(m.scrollHeight,m.clientHeight)}},y=m=>{const b=history.state||{};b[h]=m||w(),history.replaceState(b,"")};if(!e[o]&&!e[c]&&!e[r]&&!e[a]&&!e[d]){if(y(),e[c]=()=>{var m;if(!e[o]){if(e[u]=!1,clearTimeout(e[p]),n!==location.pathname+location.search){const _=t.closest("[q\\:container]").querySelector('a[q\\:key="AD_1"]');if(_){const l=_.closest("[q\\:container]"),f=_.cloneNode();f.setAttribute("q:nbs",""),f.style.display="none",l.appendChild(f),e[i]=f,f.click()}else location.reload()}else if(history.scrollRestoration==="manual"){const b=(m=history.state)==null?void 0:m[h];E(b),e[u]=!0}}},!e[s]){e[s]=!0;const m=history.pushState,b=history.replaceState,_=l=>(l===null||typeof l>"u"?l={}:(l==null?void 0:l.constructor)!==Object&&(l={_data:l}),l._qCityScroll=l._qCityScroll||w(),l);history.pushState=(l,f,g)=>(l=_(l),m.call(history,l,f,g)),history.replaceState=(l,f,g)=>(l=_(l),b.call(history,l,f,g))}e[r]=m=>{if(e[o]||m.defaultPrevented)return;const b=m.target.closest("a[href]");if(b&&!b.hasAttribute("preventdefault:click")){const _=b.getAttribute("href"),l=new URL(location.href),f=new URL(_,l),g=f.origin===l.origin,z=f.pathname+f.search===l.pathname+l.search;if(g&&z)if(m.preventDefault(),f.href!==l.href&&history.pushState(null,"",f),!f.hash)f.href.endsWith("#")?window.scrollTo(0,0):(e[u]=!1,clearTimeout(e[p]),y({...w(),x:0,y:0}),location.reload());else{const R=f.hash.slice(1),D=document.getElementById(R);D&&D.scrollIntoView()}}},e[a]=()=>{!e[o]&&e[u]&&document.visibilityState==="hidden"&&y()},e[d]=()=>{e[o]||!e[u]||(clearTimeout(e[p]),e[p]=setTimeout(()=>{y(),e[p]=void 0},200))},e[u]=!0,setTimeout(()=>{addEventListener("popstate",e[c]),addEventListener("scroll",e[d],{passive:!0}),document.body.addEventListener("click",e[r]),e.navigation||document.addEventListener("visibilitychange",e[a],{passive:!0})},0)}},qt=I(yt,"s_DyVc0YBIqQU"),bt=()=>{{const[t,e]=Le().chunkForSymbol(qt.getSymbol(),null),n=Re+"build/"+e;return`(${vt.toString()})('${n}','${t}');`}},vt=async(t,e)=>{var n;if(!window._qcs&&history.scrollRestoration==="manual"){window._qcs=!0;const o=(n=history.state)==null?void 0:n._qCityScroll;o&&window.scrollTo(o.x,o.y);const s=document.currentScript;(await import(t))[e](s)}},ht=()=>{const t=bt();Se();const e=V("nonce"),n=H(be);if(n.value&&n.value.length>0){const o=n.value.length;let s=null;for(let i=o-1;i>=0;i--)n.value[i].default&&(s=S(n.value[i].default,{children:s},1,"zl_0"));return S(O,{children:[s,k("script",{dangerouslySetInnerHTML:t},{nonce:e},null,3,null)]},1,"zl_1")}return Ee},_t=B(I(ht,"s_e0ssiDXoeAM")),wt=(t,e)=>new URL(t,e.href),gt=(t,e)=>t.origin===e.origin,jt=(t,e)=>t.pathname+t.search===e.pathname+e.search,kt=t=>t&&typeof t.then=="function",xt=(t,e,n,o)=>{const s=_e(),c={head:s,withLocale:r=>le(o,r),resolveValue:r=>{const a=r.__id;if(r.__brand==="server_loader"&&!(a in t.loaders))throw new Error("You can not get the returned data of a loader that has not been executed for this request.");const d=t.loaders[a];if(kt(d))throw new Error("Loaders returning a function can not be referred to in the head function.");return d},...e};for(let r=n.length-1;r>=0;r--){const a=n[r]&&n[r].head;a&&(typeof a=="function"?ue(s,le(o,()=>a(c))):typeof a=="object"&&ue(s,a))}return c.head},ue=(t,e)=>{typeof e.title=="string"&&(t.title=e.title),F(t.meta,e.meta),F(t.links,e.links),F(t.styles,e.styles),F(t.scripts,e.scripts),Object.assign(t.frontmatter,e.frontmatter)},F=(t,e)=>{if(Array.isArray(e))for(const n of e){if(typeof n.key=="string"){const o=t.findIndex(s=>s.key===n.key);if(o>-1){t[o]=n;continue}}t.push(n)}},_e=()=>({title:"",meta:[],links:[],styles:[],scripts:[],frontmatter:{}});let de;(function(t){t[t.EOL=0]="EOL",t[t.OPEN_BRACKET=91]="OPEN_BRACKET",t[t.CLOSE_BRACKET=93]="CLOSE_BRACKET",t[t.DOT=46]="DOT",t[t.SLASH=47]="SLASH"})(de||(de={}));const St=()=>H(ve),Et=()=>H(he),At=()=>pe(V("qwikcity")),It=":root{view-transition-name:none}",Nt=async(t,e)=>{const[n,o,s,i]=fe(),{type:c="link",forceReload:r=t===void 0,replaceState:a=!1,scroll:d=!0}=typeof e=="object"?e:{forceReload:e},u=s.value.dest,p=t===void 0?u:wt(t,i.url);if(gt(p,u)&&!(!r&&jt(p,u)))return s.value={type:c,dest:p,forceReload:r,replaceState:a,scroll:d},n.value=void 0,i.isNavigating=!0,new Promise(h=>{o.r=h})},Ct=({track:t})=>{const[e,n,o,s,i,c,r,a,d,u,p]=fe();async function h(){const[w,y]=t(()=>[u.value,e.value]),m=De(""),b=p.url,_=y?"form":w.type;w.replaceState;let l,f,g=null;if(l=new URL(w.dest,p.url),g=i.loadedRoute,f=i.response,g){const[z,R,D,Y]=g,C=D,v=C[C.length-1];p.prevUrl=b,p.url=l,p.params={...R},u.untrackedValue={type:_,dest:l};const q=xt(f,p,C,m);n.headings=v.headings,n.menu=Y,o.value=pe(C),s.links=q.links,s.meta=q.meta,s.styles=q.styles,s.scripts=q.scripts,s.title=q.title,s.frontmatter=q.frontmatter}}return h()},Lt=t=>{Ae(I(It,"s_RPDJAz33WLA"));const e=At();if(!(e!=null&&e.params))throw new Error("Missing Qwik City Env Data");const n=V("url");if(!n)throw new Error("Missing Qwik URL Env Data");const o=new URL(n),s=P({url:o,params:e.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),i={},c=Ie(P(e.response.loaders,{deep:!1})),r=K({type:"initial",dest:o,forceReload:!1,replaceState:!1,scroll:!0}),a=P(_e),d=P({headings:void 0,menu:void 0}),u=K(),p=e.response.action,h=p?e.response.loaders[p]:void 0,E=K(h?{id:p,data:e.response.formData,output:{result:h,status:e.response.status}}:void 0),w=I(Nt,"s_fX0bDjeJa0E",[E,i,r,s]);return A(dt,d),A(be,u),A(ve,a),A(he,s),A(mt,w),A(ut,c),A(pt,E),A(ft,r),Ne(I(Ct,"s_02wMImzEAbk",[E,d,u,a,e,w,c,i,t,r,s])),S(Ce,null,3,"qY_0")},Rt=B(I(Lt,"s_TxCFOy819ag")),Dt=t=>k("script",{nonce:me(t,"nonce")},{dangerouslySetInnerHTML:lt},null,3,"1Z_0"),Tt=()=>{const t=St(),e=Et();return S(O,{children:[k("title",null,null,t.title,1,null),k("link",null,{href:Te(n=>n.url.href,[e],"p0.url.href"),rel:"canonical"},null,3,null),k("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),k("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),t.meta.map(n=>W("meta",{...n},null,0,n.key)),t.links.map(n=>W("link",{...n},null,0,n.key)),t.styles.map(n=>W("style",{...n.props,dangerouslySetInnerHTML:me(n,"style")},null,0,n.key))]},1,"0D_0")},zt=B(I(Tt,"s_0vphQYqOdZI"));const Pt=()=>S(Rt,{children:[k("head",null,null,[k("meta",null,{charSet:"utf-8"},null,3,null),k("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),k("script",null,{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=G-VXBH4RD619"},null,3,null),k("script",{dangerouslySetInnerHTML:"window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-VXBH4RD619');"},{async:!0,defer:!0},null,3,null),S(zt,null,3,"vp_0")],1,null),k("body",null,{lang:"en"},[S(_t,null,3,"vp_1"),S(Dt,null,3,"vp_2")],1,null)]},1,"vp_3"),Ft=B(I(Pt,"s_tntnak2DhJ8"));function Bt(t){return st(S(Ft,null,3,"Qb_0"),{manifest:ct,...t,containerAttributes:{lang:"en-us",...t.containerAttributes}})}export{Bt as default};
