/* Qwik Service Worker */
const appBundles=[["q-0bb45510.js",[21,31],["Q6dNzwpPCpc"]],["q-0da7a235.js",[21]],["q-15acf7ae.js",[13,21]],["q-177b45be.js",[11,19,21],["Yk6ZdDcXFFE"]],["q-1b74cbbb.js",[21,31],["dv8PeEaLCk0"]],["q-2125e6d0.js",[21]],["q-45b793b0.js",[21,31],["0PPzU29MPSc","PjL1slm5woE"]],["q-485f6e5f.js",[21],["A5bZC7WO00A"]],["q-542d85da.js",[21,31],["d5owTzHelp0"]],["q-663033b0.js",[],["DyVc0YBIqQU"]],["q-68d75098.js",[2,13,21,31],["aBnpUPtQY6s"]],["q-75b3b209.js",[21]],["q-80a8d967.js",[13,19,20,21,35],["bNZttUASZD4","jT0FEQEW9tY"]],["q-80f9ff0f.js",[21]],["q-8ea06850.js",[]],["q-90f0dbe8.js",[11,21,31],["EKMoyOV0OMA"]],["q-924c8ddd.js",[11,19,21],["02wMImzEAbk","fX0bDjeJa0E","RPDJAz33WLA","TxCFOy819ag"]],["q-94480604.js",[19,21],["eBQ0vFsFKsk"]],["q-970b6031.js",[2,13,21,31],["71uYSHkBCtw"]],["q-9b398aad.js",[21]],["q-a1bd23f6.js",[21]],["q-a7fc02df.js",[]],["q-aeee8f86.js",[19,21],["e0ssiDXoeAM"]],["q-b9c36f8b.js",[21]],["q-c12dfa0c.js",[21,31],["plo6O2yod5w"]],["q-c182cef9.js",[20,21,30],["r9TvhsbRXmI"]],["q-c20650a1.js",[19,21],["wOIPfiQ04l4"]],["q-c31a0420.js",[]],["q-c95fce5b.js",[19,21],["Nk9PlpjQm9Y","p9MSze0ojs4"]],["q-dac8a352.js",[19,21],["BUbtvTyvVRE","WmYC5H00wtI"]],["q-dd870303.js",[21]],["q-e2e295ef.js",[]],["q-e2f362eb.js",[19,21],["dEePTDiZSeg"]],["q-ed4a7dfe.js",[21],["tFhMzN07g2A"]],["q-ee8928d1.js",[19,21],["8gdLBszqbaM","i1Cv0pYJNR0"]],["q-f663ad3c.js",[19,21]],["q-f859762b.js",[21,31],["dd5YY9LQTnI"]]];
const libraryBundleIds=[11];
const linkBundles=[[/^\/collection-stories\/$/,[23,36,27]],[/^\/collection-stories\/halloween\/?$/,[23,36,30,25]],[/^\/collection-stories\/winter\/?$/,[23,36,35,12]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],L=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!E(n),E=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},v=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,A]of a)A(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),v(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),v(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",()=>{(async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=L(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})()})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());