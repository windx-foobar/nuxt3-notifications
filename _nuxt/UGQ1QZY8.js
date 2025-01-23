import{u as f,d as h,q as C,c as v,e as w,h as d,w as g,f as t,k as l,t as r,Y as k,p as b,j as x,l as y}from"./BB77qyfe.js";function N(){return{notify:f().vueApp.config.globalProperties.$notify}}const n=c=>(b("data-v-cb6f9aa7"),c=c(),x(),c),$={id:"demo"},S={class:"custom-template"},L=n(()=>t("div",{class:"custom-template-icon"},[t("svg",{width:"32",height:"32",viewBox:"0 0 32 32",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},[t("g",{id:"Page-1",stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},[t("g",{id:"Icon-Set",transform:"translate(-100.000000, -1139.000000)",fill:"currentColor"},[t("path",{d:"M122.027,1148.07 C121.548,1147.79 120.937,1147.96 120.661,1148.43 L114.266,1159.51 L110.688,1156.21 C110.31,1155.81 109.677,1155.79 109.274,1156.17 C108.871,1156.54 108.85,1157.18 109.228,1157.58 L113.8,1161.8 C114.177,1162.2 114.81,1162.22 115.213,1161.84 C115.335,1161.73 122.393,1149.43 122.393,1149.43 C122.669,1148.96 122.505,1148.34 122.027,1148.07 L122.027,1148.07 Z M116,1169 C108.268,1169 102,1162.73 102,1155 C102,1147.27 108.268,1141 116,1141 C123.732,1141 130,1147.27 130,1155 C130,1162.73 123.732,1169 116,1169 L116,1169 Z M116,1139 C107.164,1139 100,1146.16 100,1155 C100,1163.84 107.164,1171 116,1171 C124.836,1171 132,1163.84 132,1155 C132,1146.16 124.836,1139 116,1139 L116,1139 Z"})])])])],-1)),M={class:"custom-template-content"},I={class:"custom-template-title"},B=["innerHTML"],R=["onClick"],T=n(()=>t("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[t("path",{d:"M7 17L16.8995 7.10051",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"}),t("path",{d:"M7 7.00001L16.8995 16.8995",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"})],-1)),P=[T],j={class:"content"},A=n(()=>t("p",null,"CSS animation:",-1)),D={class:"block"},E=n(()=>t("i",{class:"icon ion-information-circled"},null,-1)),V=n(()=>t("i",{class:"icon ion-alert-circled"},null,-1)),Z=n(()=>t("i",{class:"icon ion-close-circled"},null,-1)),H=n(()=>t("i",{class:"icon ion-close-circled"},null,-1)),O=n(()=>t("p",null,null,-1)),q=n(()=>t("p",null,"Custom style:",-1)),F=n(()=>t("p",null,null,-1)),G=n(()=>t("p",null,"Custom template:",-1)),U=n(()=>t("p",null,null,-1)),W=n(()=>t("u",null,"clean all",-1)),Y=n(()=>t("p",null,null,-1)),z=h({__name:"Playground",setup(c){const{notify:u}=N(),p=C("id",()=>0);function e(a,o=""){const i=`
    This is notification text!
    <br>
    Date: ${new Date}
  `;u({group:a,title:`Test ${o} notification #${p.value++}`,text:i,type:o,data:{randomNumber:Math.random()}})}function m(a){u({group:a,clean:!0})}return(a,o)=>{const i=k;return v(),w("div",$,[d(i,{group:"foo-css",position:"bottom left","dangerously-set-inner-html":"",speed:500}),d(i,{group:"custom-style",position:"top center",classes:"n-light",max:3,width:400,duration:-1,"dangerously-set-inner-html":""}),d(i,{group:"custom-template",duration:5e3,width:650,"animation-name":"v-fade-left",position:"top left","dangerously-set-inner-html":""},{body:g(({item:s,close:_})=>[t("div",S,[L,t("div",M,[t("div",I,[l(r(s.title)+" ",1),t("p",null," Random number: "+r(s.data.randomNumber),1)]),t("div",{class:"custom-template-text",innerHTML:s.text},null,8,B)]),t("div",{class:"custom-template-close",onClick:_},P,8,R)])]),_:1}),d(i,{group:"full-width",width:"100%",position:"bottom left","dangerously-set-inner-html":""}),t("div",j,[A,t("div",D,[t("button",{class:"success",onClick:o[0]||(o[0]=s=>e("foo-css","success"))},[E,l(" SUCCESS ")]),t("button",{class:"warn",onClick:o[1]||(o[1]=s=>e("foo-css","warn"))},[V,l(" WARNING ")]),t("button",{class:"error",onClick:o[2]||(o[2]=s=>e("foo-css","error"))},[Z,l(" ERROR ")]),t("button",{class:"info",onClick:o[3]||(o[3]=s=>e("foo-css","info"))},[H,l(" INFO ")])]),t("div",null,[O,q,t("button",{onClick:o[4]||(o[4]=s=>e("custom-style"))},"top center (max=3, duration=infinity)"),F,G,t("button",{onClick:o[5]||(o[5]=s=>e("custom-template"))},"show top left"),U,t("button",{onClick:o[6]||(o[6]=s=>m("custom-template"))},[W,l(" top left")]),Y,t("button",{onClick:o[7]||(o[7]=s=>e("full-width"))},"show bottom (full width)")])])])}}}),K=y(z,[["__scopeId","data-v-cb6f9aa7"]]);export{K as default};
