import{r as d,a0 as _,aj as g,af as k,d as y,a as b,c as l,e as m,F as x,ak as B,n as f,f as C,t as H,J as S,al as A,X as q,g as M,l as T}from"./BB77qyfe.js";const $=()=>{const a=d(),s=d([]),c=d([]),u=e=>e.forEach(t=>{const r=t.target.id;t.isIntersecting?s.value.push(r):s.value=s.value.filter(n=>n!==r)}),i=e=>e.forEach(t=>{a.value.observe(t)});return _(s,(e,t)=>{e.length===0?c.value=t:c.value=e},{deep:!0}),g(()=>a.value=new IntersectionObserver(u)),k(()=>{var e;return(e=a.value)==null?void 0:e.disconnect()}),{visibleHeadings:s,activeHeadings:c,updateHeadings:i}},w={class:"docs-toc-links"},D=["href","onClick"],E=y({__name:"DocsTocLinks",props:{links:{type:Array,default:()=>[]}},emits:["move"],setup(a,{emit:s}){const c=s,u=b(),{activeHeadings:i,updateHeadings:e}=$();setTimeout(()=>{e([...document.querySelectorAll(".document-driven-page h1, .docus-content h1"),...document.querySelectorAll(".document-driven-page h2, .docus-content h2"),...document.querySelectorAll(".document-driven-page h3, .docus-content h3"),...document.querySelectorAll(".document-driven-page h4, .docus-content h4")])},300);function t(n){u.push(`#${n}`),c("move",n)}function r(n){c("move",n)}return(n,v)=>{const h=I;return l(),m("ul",w,[(l(!0),m(x,null,B(a.links,o=>(l(),m("li",{key:o.text,class:f([`depth-${o.depth}`])},[C("a",{href:`#${o.id}`,class:f([S(i).includes(o.id)&&"active"]),onClick:A(p=>t(o.id),["prevent"])},H(o.text),11,D),o.children?(l(),q(h,{key:0,links:o.children,onMove:v[0]||(v[0]=p=>r(p))},null,8,["links"])):M("",!0)],2))),128))])}}}),I=T(E,[["__scopeId","data-v-bf4fae2d"]]);export{I as default};
