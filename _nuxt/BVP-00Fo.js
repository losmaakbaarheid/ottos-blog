import{d as g,s as x,a5 as b,aa as y,i as a,c as u,S as r,R as d,w as l,B as p,t as h,f as k,C as v,ab as w,ac as C,G as A,I as N,e as i,ad as $,j as B,U as I,g as f,F as S}from"./GaxZPp-s.js";const V={class:"flex justify-between font-semibold my-4"},j={key:1},R=g({__name:"PrevNext",async setup(_){let t,o;const n=x(),c=([t,o]=b(()=>y("content",n.path)),t=await t,o(),t),[s,e]=c;return(D,G)=>{const m=v;return a(),u("nav",V,[r(s)?(a(),d(m,{key:0,to:r(s).path},{default:l(()=>[p("< "+h(r(s).title),1)]),_:1},8,["to"])):(a(),u("div",j)),r(e)?(a(),d(m,{key:2,to:r(e).path},{default:l(()=>[p(h(r(e).title)+" >",1)]),_:1},8,["to"])):k("",!0)])}}}),U={ref:"host"},E=g({__name:"Utterances",setup(_){const t=w("host"),o=C(),n=A(()=>o.value==="light"?"github-light":"icy-dark");return N([n,t],([c,s])=>{if(!s)return;const e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","losmaakbaarheid/ottos-blog"),e.setAttribute("issue-term","pathname"),e.setAttribute("theme",c),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",""),s.replaceChildren(e)},{immediate:!0}),(c,s)=>{const e=$;return a(),d(e,null,{default:l(()=>[i("div",U,null,512)]),_:1})}}}),F={},M={class:"max-w-2xl px-4 py-10 m-auto bg-white sm:px-8 sm:shadow dark:bg-gray-800 ring-1 ring-gray-200 dark:ring-gray-700 sm:rounded-lg"},P={class:"max-w-none prose dark:prose-invert prose-pre:bg-gray-100 dark:prose-pre:bg-gray-900 hover:prose-a:text-primary-400 prose-a:font-normal prose-a:no-underline prose-a:border-dashed prose-a:border-b hover:prose-a:border-solid hover:prose-a:border-primary-400"},T={class:"max-w-2xl mt-2 m-auto"};function q(_,t){const o=R,n=E;return a(),u(S,null,[i("div",M,[i("main",P,[I(_.$slots,"default")]),f(o)]),i("div",T,[f(n)])],64)}const O=B(F,[["render",q]]);export{O as default};
