import{r as l,o as d,c as _,a as o,g as a,b as r,w as u,d as m,_ as g,u as x,F as h,p as f,e as v}from"./index-335d0dda.js";import{_ as S}from"./lightSwitch-cb69d171.js";import{t as b}from"./toggleDark-3e1957a6.js";import{c as k,a as C}from"./authenticator-34fc8818.js";import"./notificator-4d76e68d.js";const E={id:"modalSessionExpired"},w=o("h3",{id:"modalSessionExpiredTitle"}," You session has expired. ",-1),M=o("p",{id:"modalSessionExpiredMainText"}," It appears that your session is no longer valid. To continue using this service, please log in again. ",-1),$={__name:"TheSessionExpiredModal",setup(t){function s(){k(document.getElementById("modalSessionExpired"))}return(p,e)=>{const n=l("router-link");return d(),_("dialog",E,[o("article",null,[w,M,o("footer",null,[o("a",{id:"modalSessionExpiredCancelButton",href:"#",onClick:e[0]||(e[0]=a(i=>s(),["prevent"])),role:"button",class:"secondary","data-target":"modal-example"}," Cancel "),r(n,{id:"modalSessionExpiredConfirmButton",onClick:e[1]||(e[1]=a(i=>s(),["prevent"])),"data-target":"modal-example",to:"/login",role:"button"},{default:u(()=>[m(" Go to Login ")]),_:1})])])])}}};const c=t=>(f("data-v-117626b8"),t=t(),v(),t),B={class:"container"},I=c(()=>o("ul",null,[o("li",null,[o("strong")])],-1)),y=c(()=>o("img",{src:S,alt:"Light Switch"},null,-1)),T=[y],D={class:"container",id:"docs"},L={__name:"MainDashboard",setup(t){function s(){C()}return(p,e)=>{const n=l("router-view");return d(),_(h,null,[o("nav",B,[I,o("ul",null,[o("li",{class:"contrast",onClick:e[0]||(e[0]=i=>x(b)()),id:"lightSwitch"},T),o("li",null,[o("a",{onClick:[e[1]||(e[1]=i=>s()),e[2]||(e[2]=a(()=>{},["prevent"]))],href:"#"},"Logout")])])]),r($),o("main",D,[r(n)])],64)}}},j=g(L,[["__scopeId","data-v-117626b8"]]);export{j as default};
