import{d as te,u as G,a as Q,r as N,o as ne,_ as oe,b as ie,c as q,e as R,n as se,F as ae,f as w,g as L,h as z,w as H,T as V,t as re,i as W,p as de,j as ce,k as le,l as pe,m as ue,q as fe,s as we,v as F,x as J,y as X,z as ve,A as he,B as U,C as ye}from"./BB77qyfe.js";const T=i=>(de("data-v-13d0a89a"),i=i(),ce(),i),me=T(()=>w("svg",{viewBox:"0 0 90 90",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[w("path",{d:"M50.0016 71.0999h29.2561c.9293.0001 1.8422-.241 2.6469-.6992.8047-.4582 1.4729-1.1173 1.9373-1.9109.4645-.7936.7088-1.6939.7083-2.6102-.0004-.9162-.2455-1.8163-.7106-2.6095L64.192 29.713c-.4644-.7934-1.1325-1.4523-1.937-1.9105-.8046-.4581-1.7173-.6993-2.6463-.6993-.9291 0-1.8418.2412-2.6463.6993-.8046.4582-1.4726 1.1171-1.937 1.9105l-5.0238 8.5861-9.8224-16.7898c-.4648-.7934-1.1332-1.4522-1.938-1.9102-.8047-.4581-1.7176-.6992-2.6468-.6992-.9292 0-1.842.2411-2.6468.6992-.8048.458-1.4731 1.1168-1.9379 1.9102L6.56062 63.2701c-.46512.7932-.71021 1.6933-.71061 2.6095-.00041.9163.24389 1.8166.70831 2.6102.46443.7936 1.1326 1.4527 1.93732 1.9109.80473.4582 1.71766.6993 2.64686.6992h18.3646c7.2763 0 12.6422-3.1516 16.3345-9.3002l8.9642-15.3081 4.8015-8.1925 14.4099 24.6083H54.8058l-4.8042 8.1925ZM29.2077 62.899l-12.8161-.0028L35.603 30.0869l9.5857 16.4047-6.418 10.9645c-2.4521 3.9894-5.2377 5.4429-9.563 5.4429Z",fill:"currentColor"})],-1)),_e=T(()=>w("span",null,[w("a",{href:"https://nuxt.studio",target:"_blank",rel:"noopener"},"Nuxt Studio"),le(": Preview enabled")],-1)),ge={key:0},ke=T(()=>w("div",{id:"__preview_background"},null,-1)),Ce=T(()=>w("svg",{id:"__preview_loading_icon",width:"32",height:"32",viewBox:"0 0 24 24"},[w("path",{fill:"none",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 0 0 4.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 0 1-15.357-2m15.357 2H15"})],-1)),Ie=T(()=>w("p",null,"Initializing the preview...",-1)),Pe={key:0},Se=T(()=>w("div",{id:"__preview_background"},null,-1)),xe={id:"__preview_loader"},Te=te({__name:"ContentPreviewMode",props:{previewToken:{type:String,required:!0},apiURL:{type:String,required:!0},syncPreview:{type:Function,required:!0},requestPreviewSyncAPI:{type:Function,required:!0}},setup(i){const a=i,r=["__nuxt_preview","__preview_enabled"],l=G(),y=Q(),f=N(!0),g=N(!1),e=N(!1),u=N("");let d;const v=async()=>{W("previewToken").value="",window.sessionStorage.removeItem("previewToken"),window.sessionStorage.removeItem("previewAPI"),await y.replace({query:{preview:void 0}}),window.location.reload()},A=async P=>{const m=await a.syncPreview(P);if(e.value!==!0){if(!m){setTimeout(()=>A(P),1e3);return}W("previewToken").value&&(e.value=!0,await y.replace({query:{}}),l.callHook("nuxt-studio:preview:ready"),window.parent&&window.self!==window.parent&&d.disconnect())}};return ne(async()=>{d=(await oe(()=>import("./CF3NOiUn.js"),[],import.meta.url)).connect(`${a.apiURL}/preview`,{transports:["websocket","polling"],auth:{token:a.previewToken}});let m;d.on("connect",()=>{m=setTimeout(()=>{e.value||(m=setTimeout(()=>{u.value="Preview sync timed out",e.value=!1},3e4),d.emit("draft:requestSync"))},3e4)});const _=()=>{m&&(clearTimeout(m),m=null)};d.on("draft:sync",async S=>{if(_(),!S){try{d.once("draft:ready",()=>{d.emit("draft:requestSync")}),await a.requestPreviewSyncAPI()}catch($){switch(_(),$.response.status){case 404:u.value="Preview draft not found",e.value=!1;break;default:u.value="An error occurred while syncing preview",e.value=!1}}return}A(S)}),d.on("draft:unauthorized",()=>{_(),u.value="Unauthorized preview token",e.value=!1}),d.on("disconnect",()=>{_()}),document.body.classList.add(...r),d.on("draft:update",S=>{g.value=!0,a.syncPreview(S),g.value=!1})}),ie(()=>{document.body.classList.remove(...r)}),(P,m)=>(q(),R("div",null,[f.value?(q(),R("div",{key:0,id:"__nuxt_preview",class:se({__preview_ready:e.value,__preview_refreshing:g.value})},[e.value?(q(),R(ae,{key:0},[me,_e,w("button",{onClick:v}," Close ")],64)):L("",!0)],2)):L("",!0),z(V,{name:"preview-loading"},{default:H(()=>[f.value&&!e.value&&!u.value?(q(),R("div",ge,[ke,w("div",{id:"__preview_loader"},[Ce,Ie,w("button",{onClick:v}," Cancel ")])])):L("",!0)]),_:1}),z(V,{name:"preview-loading"},{default:H(()=>[u.value?(q(),R("div",Pe,[Se,w("div",xe,[w("p",null,re(u.value),1),w("button",{onClick:v}," Exit preview ")])])):L("",!0)]),_:1})]))}}),Ae=pe(Te,[["__scopeId","data-v-13d0a89a"]]),be=(i=[],a,r)=>{const l=[...a||[]],y=[...r||[]],f=JSON.parse(JSON.stringify(i));for(const e of l)if(e.new)f.push({path:e.path,parsed:e.parsed});else if(e.oldPath)if(y.splice(y.findIndex(d=>d.path===e.oldPath),1),l.find(d=>d.path===e.oldPath))f.push({path:e.path,parsed:e.parsed});else{const d=f.find(v=>v.path===e.oldPath);d&&(d.path=e.path,e.parsed?d.parsed=e.parsed:e.pathMeta&&["_file","_path","_id","_locale"].forEach(v=>{d.parsed[v]=e.pathMeta[v]}))}else{const u=f.find(d=>d.path===e.path);u?Object.assign(u,{path:e.path,parsed:e.parsed}):f.push({path:e.path,parsed:e.parsed})}for(const e of y)f.splice(f.findIndex(u=>u.path===e.path),1);const g=new Intl.Collator(void 0,{numeric:!0});return f.sort((e,u)=>g.compare(e.path,u.path)),f},C={appConfig:"app.config.ts",nuxtConfig:"nuxt.config.ts",tokensConfig:"tokens.config.ts"},qe=i=>{let a;return r=>(a||(a=i()),a)};function Y(i,a){for(const r in i){const l=a[r];r in a||delete i[r],l!==null&&typeof l=="object"&&Y(i[r],a[r])}}function j(i,a){for(const r in a){const l=a[r];l!==null&&typeof l=="object"?Array.isArray(l)&&Array.isArray(i[r])?i[r]=l:(i[r]=i[r]||{},j(i[r],l)):i[r]=l}}const Re=qe(()=>JSON.parse(JSON.stringify(X()))),Z=ye((i,a,r)=>{if(Array.isArray(i[a])&&Array.isArray(r))return i[a]=r,!0});let D=[];const Me=()=>{const i=G(),{studio:a,content:r}=ue().public,l={},y=window.sessionStorage.getItem("previewAPI")||(a==null?void 0:a.apiURL),f=Re();let g;const e=fe("studio-client-db",()=>null);e.value||(i.hook("content:storage",n=>{e.value=n}),we("/non-existing-path").findOne());const u=async(n,o)=>{const s=window.sessionStorage.getItem("previewToken"),c=await n.getKeys(`${s}:`);await Promise.all(c.map(t=>n.removeItem(t)));const p=new Set(o.map(t=>t.parsed._id.split(":").shift()));await n.setItem(`${s}$`,JSON.stringify({ignoreSources:Array.from(p)})),await Promise.all(o.map(t=>(l[t.parsed._path]=t.parsed,n.setItem(`${s}:${t.parsed._id}`,JSON.stringify(t.parsed)))))},d=n=>{const o=J(i,X);o!=null&&o.ui&&(o.ui.icons={...o.ui.icons,dynamic:!0}),j(o,Z(n,f)),n||Y(o,f)},v=n=>{var s,c,p,t;const o=(t=(p=(c=(s=i==null?void 0:i.vueApp)==null?void 0:s._context)==null?void 0:c.config)==null?void 0:p.globalProperties)==null?void 0:t.$pinceauTheme;!o||!(o!=null&&o.updateTheme)||(g||(g=JSON.parse(JSON.stringify((o==null?void 0:o.theme).value||{}))),J(i,o.updateTheme,[Z(n,g)]))},A=async n=>{if(D=n.files=n.files||D||[],!e.value)return!1;D=[];const o=be(n.files,n.additions,n.deletions),s=o.filter(t=>![C.appConfig,C.nuxtConfig,C.tokensConfig].includes(t.path));await u(e.value,s);const c=o.find(t=>t.path===C.appConfig);d(c==null?void 0:c.parsed);const p=o.find(t=>t.path===C.tokensConfig);return v(p==null?void 0:p.parsed),O(),!0},P=async()=>{const n=window.sessionStorage.getItem("previewToken");await $fetch("api/projects/preview/sync",{baseURL:y,method:"POST",params:{token:n}})},m=()=>{const n=window.sessionStorage.getItem("previewToken"),o=document.createElement("div");o.id="__nuxt_preview_wrapper",document.body.appendChild(o),ve(Ae,{previewToken:n,apiURL:y,syncPreview:A,requestPreviewSyncAPI:P}).mount(o)},_=async n=>{var c,p,t;const o=window.sessionStorage.getItem("previewToken");if(!n)return null;n=n.replace(/\/$/,"");let s=await((c=e.value)==null?void 0:c.getItem(`${o}:${n}`));return s||(s=await((p=e.value)==null?void 0:p.getItem(`cached:${n}`))),s||(s=s=await((t=e.value)==null?void 0:t.getItem(n))),s||(s=l[n||"/"]),s},S=n=>{var s;const o=window.sessionStorage.getItem("previewToken");e.value&&(l[n.parsed._path]=n.parsed,e.value.setItem(`${o}:${(s=n.parsed)==null?void 0:s._id}`,JSON.stringify(n.parsed)))},$=async n=>{var c;const o=window.sessionStorage.getItem("previewToken"),s=await _(n);if(await((c=e.value)==null?void 0:c.removeItem(`${o}:${n}`)),s){delete l[s._path];const p=await _(s._id);p&&(l[p._path]=p)}},O=async()=>{if(r!=null&&r.documentDriven){const{pages:n}=J(i,he),o=await Promise.all(Object.keys(n.value).map(async s=>{var c;return await _(((c=n.value[s])==null?void 0:c._id)??s)}));n.value=o.reduce((s,c,p)=>(c&&(s[Object.keys(n.value)[p]]=c),s),{})}await i.hooks.callHookParallel("app:data:refresh")};return{apiURL:y,contentStorage:e,syncPreviewFiles:u,syncPreviewAppConfig:d,syncPreviewTokensConfig:v,requestPreviewSynchronization:P,findContentWithId:_,updateContent:S,removeContentWithId:$,requestRerender:O,mountPreviewUI:m,initiateIframeCommunication:ee};function ee(){if(!window.parent||window.self===window.parent)return;const n=Q(),o=F(),s=N(""),c=t=>({path:t.path,query:U(t.query),params:U(t.params),fullPath:t.fullPath,meta:U(t.meta)});window.addEventListener("keydown",t=>{(t.metaKey||t.ctrlKey||t.altKey||t.shiftKey)&&window.parent.postMessage({type:"nuxt-studio:preview:keydown",payload:{key:t.key,metaKey:t.metaKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,altKey:t.altKey}},"*")}),window.addEventListener("message",async t=>{var B;if(!["https://nuxt.studio","https://new.nuxt.studio","https://new.dev.nuxt.studio","https://dev.nuxt.studio","http://localhost:3000",...((B=a==null?void 0:a.iframeMessagingAllowedOrigins)==null?void 0:B.split(",").map(h=>h.trim()))||[]].includes(t.origin))return;const{type:E,payload:b={}}=t.data||{};switch(E){case"nuxt-studio:editor:file-selected":{const h=await _(b.path);h&&(h._partial||!String(b.path).endsWith(".md")||h._path!==F().path&&(s.value=h._path,n.push(h._path)));break}case"nuxt-studio:editor:file-changed":{const{additions:h=[],deletions:M=[]}=b;for(const I of h)await S(I);for(const I of M)await $(I.path);O();break}case"nuxt-studio:preview:sync":{A(b);break}case"nuxt-studio:config:file-changed":{const{additions:h=[],deletions:M=[]}=b,I=h.find(x=>x.path===C.appConfig);I&&d(I==null?void 0:I.parsed),M.find(x=>x.path===C.appConfig)&&d(void 0);const K=h.find(x=>x.path===C.tokensConfig);K&&v(K==null?void 0:K.parsed),M.find(x=>x.path===C.tokensConfig)&&v(void 0);break}}}),i.hook("page:finish",()=>{p(),i.payload.prerenderedAt&&O()}),i.hook("content:document-driven:finish",({route:t,page:k})=>{t.meta.studio_page_contentId=k==null?void 0:k._id}),i.hook("nuxt-studio:preview:ready",()=>{window.parent.postMessage({type:"nuxt-studio:preview:ready",payload:c(F())},"*"),setTimeout(()=>{p()},100)});function p(){const t=Array.from(window.document.querySelectorAll("[data-content-id]")).map(E=>E.getAttribute("data-content-id")),k=Array.from(new Set([o.meta.studio_page_contentId,...t])).filter(Boolean);if(s.value===k[0]){s.value="";return}window.openContentInStudioEditor(k,{navigate:!0,pageContentId:o.meta.studio_page_contentId})}window.openContentInStudioEditor=(t,k={})=>{window.parent.postMessage({type:"nuxt-studio:preview:navigate",payload:{...c(o),contentIds:t,...k}},"*")}}};export{Me as useStudio};
