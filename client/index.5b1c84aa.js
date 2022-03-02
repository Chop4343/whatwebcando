import{S as e,i as t,s as a,e as n,t as i,a as o,c as r,b as s,d as c,f as l,g as d,h as m,k as u,l as h,y as f,I as p,A as g,J as v,K as b,L as y,n as E,M as w,E as S,o as j,p as A,q as k,v as D,w as I,x as $,G as F,F as x}from"./index.47cb3db4.js";import{f as P}from"./index.e9c4c197.js";import{A as C}from"./Article.15023632.js";import{P as L}from"./PromoBox.ad64a895.js";const T=[{heading:"Seamless Experience",features:[{id:"offline",icon:"mdi-action-settings-applications",name:"Offline Mode"},{id:"background-sync",icon:"mdi-action-backup",name:"Background Sync"},{id:"sharing",icon:"mdi-action-explore",name:"Inter-App Sharing"},{id:"payments",icon:"mdi-action-payment",name:"Payments"},{id:"credentials",icon:"mdi-action-lock-open",name:"Credentials"}]},{heading:"Native Behaviors",features:[{id:"local-notifications",icon:"mdi-notification-system-update",name:"Local Notifications"},{id:"push-notifications",icon:"mdi-notification-tap-and-play",name:"Push Messages"},{id:"idle",icon:"mdi-moon",name:"User Idle Detection"},{id:"permissions",icon:"mdi-action-lock-open",name:"Permissions"},{id:"scheduler",icon:"mdi-action-alarm",name:"Task Scheduling"}]},{heading:"App Lifecycle",features:[{id:"distribution",icon:"mdi-distribution",name:"Store Distribution"},{id:"installation",icon:"mdi-action-get-app",name:"Home Screen Installation"},{id:"startup",icon:"mdi-startup",name:"Run On Startup"},{id:"foreground-detection",icon:"mdi-action-flip-to-front",name:"Foreground Detection"},{id:"freeze-resume",icon:"mdi-lifecycle",name:"Freeze/Resume Detection"}]},{heading:"Surroundings",features:[{id:"bluetooth",icon:"mdi-device-bluetooth",name:"Bluetooth"},{id:"nfc",icon:"mdi-device-nfc",name:"NFC"},{id:"usb",icon:"mdi-device-usb",name:"USB"},{id:"serial",icon:"mdi-device-serial",name:"Serial"},{id:"ambient-light",icon:"mdi-device-brightness-low",name:"Ambient Light"}]},{heading:"Camera & Microphone",features:[{id:"camera-microphone",icon:"mdi-image-camera-alt",name:"Audio & Video Capture"},{id:"photos",icon:"mdi-image-camera-roll",name:"Advanced Camera Controls"},{id:"recording",icon:"mdi-av-mic",name:"Recording Media"},{id:"realtime",icon:"mdi-av-videocam",name:"Real-time Communication"},{id:"shape-detection",icon:"mdi-face",name:"Shape Detection"}]},{heading:"Device Features",features:[{id:"network-type-speed",icon:"mdi-device-wifi-tethering",name:"Network Type & Speed"},{id:"online-state",icon:"mdi-device-signal-cellular-connected-no-internet-3-bar",name:"Online State"},{id:"vibration",icon:"mdi-notification-vibration",name:"Vibration"},{id:"battery-status",icon:"mdi-device-battery-80",name:"Battery Status"},{id:"memory",icon:"mdi-hardware-memory",name:"Device Memory"}]},{heading:"Operating System",features:[{id:"storage",icon:"mdi-notification-folder-special",name:"Offline Storage"},{id:"files",icon:"mdi-device-sd-storage",name:"File Access"},{id:"contacts",icon:"mdi-action-account-box",name:"Contacts"},{id:"sms",icon:"mdi-communication-message",name:"SMS"},{id:"storage-quota",icon:"mdi-notification-sim-card-alert",name:"Storage Quotas"}]},{heading:"Input",features:[{id:"touch",icon:"mdi-content-gesture",name:"Touch Gestures"},{id:"speech-recognition",icon:"mdi-av-mic",name:"Speech Recognition"},{id:"clipboard",icon:"mdi-content-content-paste",name:"Clipboard (Copy & Paste)"},{id:"pointer-adaptation",icon:"mdi-hardware-mouse",name:"Pointing Device Adaptation"}]},{heading:"Location & Position",features:[{id:"geolocation",icon:"mdi-device-gps-fixed",name:"Geolocation"},{id:"geofencing",icon:"mdi-action-group-work",name:"Geofencing"},{id:"device-position",icon:"mdi-device-screen-rotation",name:"Device Position"},{id:"device-motion",icon:"mdi-action-3d-rotation",name:"Device Motion"},{id:"proximity",icon:"mdi-image-leak-add",name:"Proximity Sensors"}]},{heading:"Screen & Output",features:[{id:"vr",icon:"mdi-maps-local-play",name:"Virtual & Augmented Reality"},{id:"fullscreen",icon:"mdi-action-settings-overscan",name:"Fullscreen"},{id:"screen-orientation",icon:"mdi-device-screen-lock-rotation",name:"Screen Orientation & Lock"},{id:"wake-lock",icon:"mdi-action-lock",name:"Wake Lock"},{id:"presentation",icon:"mdi-hardware-tv",name:"Presentation Features"}]}];function M(e,t,a){const n=Object.create(e);return n.feature=t[a],n}function G(e,t,a){const n=Object.create(e);return n.group=t[a],n}function N(e){let t,a;return{c(){t=n("span"),a=i("not testable"),this.h()},l(e){t=r(e,"SPAN",{class:!0});var n=s(t);a=c(n,"not testable"),n.forEach(l),this.h()},h(){m(t,"class","support-unk svelte-1en73j4")},m(e,n){u(e,t,n),h(t,a)},p:E,d(e){e&&l(t)}}}function O(e){let t;function a(e,t){return t.isSupported?W:V}let n=a(0,e),i=n(e);return{c(){i.c(),t=S()},l(e){i.l(e),t=S()},m(e,a){i.m(e,a),u(e,t,a)},p(e,o){n!==(n=a(0,o))&&(i.d(1),i=n(o),i&&(i.c(),i.m(t.parentNode,t)))},d(e){i.d(e),e&&l(t)}}}function V(e){let t,a,o;return{c(){t=n("span"),a=i("No "),o=n("i"),this.h()},l(e){t=r(e,"SPAN",{class:!0});var n=s(t);a=c(n,"No "),o=r(n,"I",{class:!0}),s(o).forEach(l),n.forEach(l),this.h()},h(){m(o,"class","mdi mdi-cross svelte-1en73j4"),m(t,"class","support support-no svelte-1en73j4")},m(e,n){u(e,t,n),h(t,a),h(t,o)},d(e){e&&l(t)}}}function W(e){let t,a,o;return{c(){t=n("span"),a=i("Yes "),o=n("i"),this.h()},l(e){t=r(e,"SPAN",{class:!0});var n=s(t);a=c(n,"Yes "),o=r(n,"I",{class:!0}),s(o).forEach(l),n.forEach(l),this.h()},h(){m(o,"class","mdi mdi-check svelte-1en73j4"),m(t,"class","support support-yes svelte-1en73j4")},m(e,n){u(e,t,n),h(t,a),h(t,o)},d(e){e&&l(t)}}}function q(e){return{c:E,l:E,m:E,p:E,d:E}}function B(e){let t,a,v,b,y,E,w,S,j,A,k,D=e.feature.name+"",I={ctx:e,current:null,token:null,pending:q,then:O,catch:N,value:"isSupported",error:"null"};return p(A=e.feature.determineIsSupported(),I),{c(){t=n("li"),a=n("span"),v=n("i"),y=o(),E=n("a"),w=i(D),j=o(),I.block.c(),k=o(),this.h()},l(e){t=r(e,"LI",{class:!0});var n=s(t);a=r(n,"SPAN",{});var i=s(a);v=r(i,"I",{class:!0}),s(v).forEach(l),y=d(i),E=r(i,"A",{rel:!0,href:!0});var o=s(E);w=c(o,D),o.forEach(l),i.forEach(l),j=d(n),I.block.l(n),k=d(n),n.forEach(l),this.h()},h(){m(v,"class",b="mdi "+e.feature.icon+" svelte-1en73j4"),m(E,"rel","prefetch"),m(E,"href",S="/"+e.feature.id+".html"),m(t,"class","svelte-1en73j4")},m(e,n){u(e,t,n),h(t,a),h(a,v),h(a,y),h(a,E),h(E,w),h(t,j),I.block.m(t,I.anchor=null),I.mount=()=>t,I.anchor=k,h(t,k)},p(t,a){e=a,t.filteredGroups&&b!==(b="mdi "+e.feature.icon+" svelte-1en73j4")&&m(v,"class",b),t.filteredGroups&&D!==(D=e.feature.name+"")&&f(w,D),t.filteredGroups&&S!==(S="/"+e.feature.id+".html")&&m(E,"href",S),I.ctx=e,t.filteredGroups&&A!==(A=e.feature.determineIsSupported())&&p(A,I)||I.block.p(t,g(g({},e),I.resolved))},d(e){e&&l(t),I.block.d(),I.token=null,I=null}}}function H(e){let t,a,p,g,b,y,E=e.group.heading+"",w=e.group.resolvedFeatures,S=[];for(let t=0;t<w.length;t+=1)S[t]=B(M(e,w,t));return{c(){t=n("section"),a=n("h3"),p=i(E),g=o(),b=n("ul");for(let e=0;e<S.length;e+=1)S[e].c();y=o(),this.h()},l(e){t=r(e,"SECTION",{class:!0});var n=s(t);a=r(n,"H3",{class:!0});var i=s(a);p=c(i,E),i.forEach(l),g=d(n),b=r(n,"UL",{class:!0});var o=s(b);for(let e=0;e<S.length;e+=1)S[e].l(o);o.forEach(l),y=d(n),n.forEach(l),this.h()},h(){m(a,"class","svelte-1en73j4"),m(b,"class","svelte-1en73j4"),m(t,"class","svelte-1en73j4")},m(e,n){u(e,t,n),h(t,a),h(a,p),h(t,g),h(t,b);for(let e=0;e<S.length;e+=1)S[e].m(b,null);h(t,y)},p(e,t){if(e.filteredGroups&&E!==(E=t.group.heading+"")&&f(p,E),e.filteredGroups){let a;for(w=t.group.resolvedFeatures,a=0;a<w.length;a+=1){const n=M(t,w,a);S[a]?S[a].p(e,n):(S[a]=B(n),S[a].c(),S[a].m(b,null))}for(;a<S.length;a+=1)S[a].d(1);S.length=w.length}},d(e){e&&l(t),v(S,e)}}}function R(e){let t,a,f,p,g,S,j,A,k,D,I,$,F,x,P,C,L,T,M,N,O,V,W,q,B,R,U=e.filteredGroups,Y=[];for(let t=0;t<U.length;t+=1)Y[t]=H(G(e,U,t));return{c(){t=n("div"),a=n("div"),f=n("h2"),p=i("Features"),g=o(),S=n("dl"),j=n("div"),A=n("dt"),k=i("Yes "),D=n("i"),I=o(),$=n("dd"),F=i("Feature available in your current browser"),x=o(),P=n("div"),C=n("dt"),L=i("No "),T=n("i"),M=o(),N=n("dd"),O=i("Feature not available in your current browser"),V=o(),W=n("input"),q=o(),B=n("div");for(let e=0;e<Y.length;e+=1)Y[e].c();this.h()},l(e){t=r(e,"DIV",{class:!0});var n=s(t);a=r(n,"DIV",{});var i=s(a);f=r(i,"H2",{class:!0});var o=s(f);p=c(o,"Features"),o.forEach(l),g=d(i),S=r(i,"DL",{class:!0,"aria-hidden":!0});var m=s(S);j=r(m,"DIV",{class:!0});var u=s(j);A=r(u,"DT",{class:!0});var h=s(A);k=c(h,"Yes "),D=r(h,"I",{class:!0}),s(D).forEach(l),h.forEach(l),I=d(u),$=r(u,"DD",{class:!0});var v=s($);F=c(v,"Feature available in your current browser"),v.forEach(l),x=d(u),u.forEach(l),P=r(m,"DIV",{class:!0});var b=s(P);C=r(b,"DT",{class:!0});var y=s(C);L=c(y,"No "),T=r(y,"I",{class:!0}),s(T).forEach(l),y.forEach(l),M=d(b),N=r(b,"DD",{class:!0});var E=s(N);O=c(E,"Feature not available in your current browser"),E.forEach(l),b.forEach(l),m.forEach(l),i.forEach(l),V=d(n),W=r(n,"INPUT",{type:!0,class:!0,placeholder:!0}),n.forEach(l),q=d(e),B=r(e,"DIV",{class:!0});var w=s(B);for(let e=0;e<Y.length;e+=1)Y[e].l(w);w.forEach(l),this.h()},h(){m(f,"class","svelte-1en73j4"),m(D,"class","mdi mdi-check svelte-1en73j4"),m(A,"class","support support-yes svelte-1en73j4"),m($,"class","svelte-1en73j4"),m(j,"class","svelte-1en73j4"),m(T,"class","mdi mdi-cross"),m(C,"class","support support-no svelte-1en73j4"),m(N,"class","svelte-1en73j4"),m(P,"class","svelte-1en73j4"),m(S,"class","legend svelte-1en73j4"),m(S,"aria-hidden","true"),m(W,"type","text"),m(W,"class","filter-input svelte-1en73j4"),m(W,"placeholder","Filter"),m(t,"class","level svelte-1en73j4"),m(B,"class","features-list-container svelte-1en73j4"),R=[b(W,"input",e.input_input_handler),b(W,"keyup",e.filterFeatures)]},m(n,i){u(n,t,i),h(t,a),h(a,f),h(f,p),h(a,g),h(a,S),h(S,j),h(j,A),h(A,k),h(A,D),h(j,I),h(j,$),h($,F),h(j,x),h(S,P),h(P,C),h(C,L),h(C,T),h(P,M),h(P,N),h(N,O),h(t,V),h(t,W),y(W,e.filter),u(n,q,i),u(n,B,i);for(let e=0;e<Y.length;e+=1)Y[e].m(B,null)},p(e,t){if(e.filter&&W.value!==t.filter&&y(W,t.filter),e.filteredGroups){let a;for(U=t.filteredGroups,a=0;a<U.length;a+=1){const n=G(t,U,a);Y[a]?Y[a].p(e,n):(Y[a]=H(n),Y[a].c(),Y[a].m(B,null))}for(;a<Y.length;a+=1)Y[a].d(1);Y.length=U.length}},i:E,o:E,d(e){e&&l(t),e&&l(q),e&&l(B),v(Y,e),w(R)}}}function U(e,t,a){T.forEach(e=>{e.resolvedFeatures=e.features.map(e=>{const t=P.find(t=>t.id===e.id);return t.icon=e.icon,t})});let n=[...T],i="";return{filteredGroups:n,filter:i,filterFeatures:function(){const e=i.toLocaleLowerCase().trim();e.length<2?a("filteredGroups",n=[...T]):a("filteredGroups",n=T.map(t=>({...t,resolvedFeatures:t.resolvedFeatures.filter(t=>-1!==t.name.toLocaleLowerCase().indexOf(e)||t.description.some(t=>-1!==t.toLocaleLowerCase().indexOf(e))||-1!==t.api.toLocaleLowerCase().indexOf(e))})).filter(e=>!!e.resolvedFeatures.length))},input_input_handler:function(){i=this.value,a("filter",i)}}}class Y extends e{constructor(e){super(),t(this,e,U,R,a,{})}}function _(e,t,a){const n=Object.create(e);return n.article=t[a],n}function z(e){let t;const a=new C({props:{article:e.article}});return{c(){j(a.$$.fragment)},l(e){A(a.$$.fragment,e)},m(e,n){k(a,e,n),t=!0},p(e,t){const n={};e.articles&&(n.article=t.article),a.$set(n)},i(e){t||(D(a.$$.fragment,e),t=!0)},o(e){I(a.$$.fragment,e),t=!1},d(e){$(a,e)}}}function J(e){let t,a,f,p,g,b,y,E,w,S,P,C,T,M,G,N,O,V,W,q,B;const H=new Y({}),R=new L({});let U=e.articles,J=[];for(let t=0;t<U.length;t+=1)J[t]=z(_(e,U,t));const K=e=>I(J[e],1,1,()=>{J[e]=null});return{c(){t=n("meta"),a=n("meta"),f=n("meta"),p=n("meta"),g=n("meta"),b=n("meta"),y=n("meta"),E=o(),w=n("div"),S=n("main"),j(H.$$.fragment),P=o(),C=n("aside"),j(R.$$.fragment),T=o(),M=n("h2"),G=i("Articles"),N=o();for(let e=0;e<J.length;e+=1)J[e].c();O=o(),V=n("p"),W=n("a"),q=i("See all"),this.h()},l(e){t=r(e,"META",{property:!0,content:!0}),a=r(e,"META",{property:!0,content:!0}),f=r(e,"META",{property:!0,content:!0}),p=r(e,"META",{property:!0,content:!0}),g=r(e,"META",{name:!0,content:!0}),b=r(e,"META",{name:!0,content:!0}),y=r(e,"META",{name:!0,content:!0}),E=d(e),w=r(e,"DIV",{class:!0});var n=s(w);S=r(n,"MAIN",{class:!0});var i=s(S);A(H.$$.fragment,i),i.forEach(l),P=d(n),C=r(n,"ASIDE",{class:!0});var o=s(C);A(R.$$.fragment,o),T=d(o),M=r(o,"H2",{class:!0});var m=s(M);G=c(m,"Articles"),m.forEach(l),N=d(o);for(let e=0;e<J.length;e+=1)J[e].l(o);O=d(o),V=r(o,"P",{class:!0});var u=s(V);W=r(u,"A",{href:!0,class:!0});var h=s(W);q=c(h,"See all"),h.forEach(l),u.forEach(l),o.forEach(l),n.forEach(l),this.h()},h(){document.title="What Web Can Do Today",m(t,"property","og:title"),m(t,"content","What Web Can Do Today"),m(a,"property","og:description"),m(a,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),m(f,"property","og:url"),m(f,"content","https://whatwebcando.today/"),m(p,"property","og:image"),m(p,"content","https://whatwebcando.today/images/share-image.png"),m(g,"name","twitter:title"),m(g,"content","What Web Can Do Today"),m(b,"name","twitter:description"),m(b,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),m(y,"name","twitter:image"),m(y,"content","https://whatwebcando.today/images/share-image.png"),m(S,"class","svelte-5qoger"),m(M,"class","svelte-5qoger"),m(W,"href","/articles/"),m(W,"class","button"),m(V,"class","text-center svelte-5qoger"),m(C,"class","svelte-5qoger"),m(w,"class","container svelte-5qoger")},m(e,n){h(document.head,t),h(document.head,a),h(document.head,f),h(document.head,p),h(document.head,g),h(document.head,b),h(document.head,y),u(e,E,n),u(e,w,n),h(w,S),k(H,S,null),h(w,P),h(w,C),k(R,C,null),h(C,T),h(C,M),h(M,G),h(C,N);for(let e=0;e<J.length;e+=1)J[e].m(C,null);h(C,O),h(C,V),h(V,W),h(W,q),B=!0},p(e,t){if(e.articles){let a;for(U=t.articles,a=0;a<U.length;a+=1){const n=_(t,U,a);J[a]?(J[a].p(e,n),D(J[a],1)):(J[a]=z(n),J[a].c(),D(J[a],1),J[a].m(C,O))}for(x(),a=U.length;a<J.length;a+=1)K(a);F()}},i(e){if(!B){D(H.$$.fragment,e),D(R.$$.fragment,e);for(let e=0;e<U.length;e+=1)D(J[e]);B=!0}},o(e){I(H.$$.fragment,e),I(R.$$.fragment,e),J=J.filter(Boolean);for(let e=0;e<J.length;e+=1)I(J[e]);B=!1},d(e){l(t),l(a),l(f),l(p),l(g),l(b),l(y),e&&l(E),e&&l(w),$(H),$(R),v(J,e)}}}async function K({params:e,query:t}){const a=await this.fetch("/articles.json");return{articles:(await a.json()).sort((e,t)=>e.weight>t.weight?-1:e.weight<t.weight?1:0).slice(0,3)}}function Q(e,t,a){let{articles:n}=t;return e.$set=e=>{"articles"in e&&a("articles",n=e.articles)},{articles:n}}export default class extends e{constructor(e){super(),t(this,e,Q,J,a,{articles:0})}}export{K as preload};