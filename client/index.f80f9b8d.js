import{S as a,i as t,s as e,o as r,p as s,q as l,v as c,w as i,x as n,a as o,e as f,t as h,g as u,c as g,b as m,d as $,f as p,h as v,k as d,l as b,G as w,J as A,F as E}from"./index.47cb3db4.js";import{M as x}from"./Meta.f0c7970d.js";import{A as j}from"./Article.15023632.js";function I(a,t,e){const r=Object.create(a);return r.article=t[e],r}function F(a){let t;const e=new j({props:{article:a.article}});return{c(){r(e.$$.fragment)},l(a){s(e.$$.fragment,a)},m(a,r){l(e,a,r),t=!0},p(a,t){const r={};a.articles&&(r.article=t.article),e.$set(r)},i(a){t||(c(e.$$.fragment,a),t=!0)},o(a){i(e.$$.fragment,a),t=!1},d(a){n(e,a)}}}function L(a){let t,e,j,L,M,q,y,z,N,V,k,B,D,G;const J=new x({props:{title:"Articles",url:"/articles/"}});let O=a.articles,S=[];for(let t=0;t<O.length;t+=1)S[t]=F(I(a,O,t));const U=a=>i(S[a],1,1,()=>{S[a]=null});return{c(){r(J.$$.fragment),t=o(),e=f("main"),j=f("nav"),L=f("ul"),M=f("li"),q=f("a"),y=h("Features"),z=o(),N=f("li"),V=f("a"),k=h("Articles"),B=o(),D=f("div");for(let a=0;a<S.length;a+=1)S[a].c();this.h()},l(a){s(J.$$.fragment,a),t=u(a),e=g(a,"MAIN",{class:!0});var r=m(e);j=g(r,"NAV",{class:!0,"aria-label":!0});var l=m(j);L=g(l,"UL",{});var c=m(L);M=g(c,"LI",{});var i=m(M);q=g(i,"A",{href:!0});var n=m(q);y=$(n,"Features"),n.forEach(p),i.forEach(p),z=u(c),N=g(c,"LI",{class:!0});var o=m(N);V=g(o,"A",{href:!0,"aria-current":!0});var f=m(V);k=$(f,"Articles"),f.forEach(p),o.forEach(p),c.forEach(p),l.forEach(p),B=u(r),D=g(r,"DIV",{class:!0});var h=m(D);for(let a=0;a<S.length;a+=1)S[a].l(h);h.forEach(p),r.forEach(p),this.h()},h(){v(q,"href","/"),v(V,"href","/articles/"),v(V,"aria-current","page"),v(N,"class","is-active"),v(j,"class","breadcrumb"),v(j,"aria-label","breadcrumbs"),v(D,"class","list svelte-120zoox"),v(e,"class","page svelte-120zoox")},m(a,r){l(J,document.head,null),d(a,t,r),d(a,e,r),b(e,j),b(j,L),b(L,M),b(M,q),b(q,y),b(L,z),b(L,N),b(N,V),b(V,k),b(e,B),b(e,D);for(let a=0;a<S.length;a+=1)S[a].m(D,null);G=!0},p(a,t){if(a.articles){let e;for(O=t.articles,e=0;e<O.length;e+=1){const r=I(t,O,e);S[e]?(S[e].p(a,r),c(S[e],1)):(S[e]=F(r),S[e].c(),c(S[e],1),S[e].m(D,null))}for(E(),e=O.length;e<S.length;e+=1)U(e);w()}},i(a){if(!G){c(J.$$.fragment,a);for(let a=0;a<O.length;a+=1)c(S[a]);G=!0}},o(a){i(J.$$.fragment,a),S=S.filter(Boolean);for(let a=0;a<S.length;a+=1)i(S[a]);G=!1},d(a){n(J),a&&p(t),a&&p(e),A(S,a)}}}async function M({params:a,query:t}){const e=await this.fetch("/articles.json");return{articles:(await e.json()).sort((a,t)=>a.weight>t.weight?-1:a.weight<t.weight?1:0)}}function q(a,t,e){let{articles:r}=t;return a.$set=a=>{"articles"in a&&e("articles",r=a.articles)},{articles:r}}export default class extends a{constructor(a){super(),t(this,a,q,L,e,{articles:0})}}export{M as preload};