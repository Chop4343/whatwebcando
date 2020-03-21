import{a as e,b as t,c as n,d as a,i,s as r,e as o,S as c,f as s,t as l,g as u,h as d,j as f,k as m,l as h,m as p,o as v,q as g,r as y,D as b,O as w,F as E,P as j,Q as S,R as A,n as k,T as O,U as P,V as D,J as $,v as I,w as x,x as F,A as C,B as T,C as L,L as M,K as G}from"./index.95ec79ca.js";import{_ as N}from"./index.02a02c24.js";import{f as V}from"./index.dbadc901.js";import{A as W}from"./Article.c4a645a5.js";import{P as q}from"./PromoBox.62345c00.js";var B=[{heading:"Camera & Microphone",features:[{id:"camera-microphone",icon:"mdi-image-camera-alt",name:"Audio & Video Capture"},{id:"photos",icon:"mdi-image-camera-roll",name:"Advanced Camera Controls"},{id:"recording",icon:"mdi-av-mic",name:"Recording Media"},{id:"realtime",icon:"mdi-av-videocam",name:"Real-time Communication"}]},{heading:"Surroundings",features:[{id:"bluetooth",icon:"mdi-device-bluetooth",name:"Bluetooth"},{id:"usb",icon:"mdi-device-usb",name:"USB"},{id:"nfc",icon:"mdi-device-nfc",name:"NFC"},{id:"ambient-light",icon:"mdi-device-brightness-low",name:"Ambient Light"}]},{heading:"Device Features",features:[{id:"network-type-speed",icon:"mdi-device-wifi-tethering",name:"Network Type & Speed"},{id:"online-state",icon:"mdi-device-signal-cellular-connected-no-internet-3-bar",name:"Online State"},{id:"vibration",icon:"mdi-notification-vibration",name:"Vibration"},{id:"battery-status",icon:"mdi-device-battery-80",name:"Battery Status"},{id:"memory",icon:"mdi-hardware-memory",name:"Device Memory"}]},{heading:"Native Behaviors",features:[{id:"local-notifications",icon:"mdi-notification-system-update",name:"Local Notifications"},{id:"push-notifications",icon:"mdi-notification-tap-and-play",name:"Push Messages"},{id:"installation",icon:"mdi-action-get-app",name:"Home Screen Installation"},{id:"foreground-detection",icon:"mdi-action-flip-to-front",name:"Foreground Detection"},{id:"permissions",icon:"mdi-action-lock-open",name:"Permissions"}]},{heading:"Operating System",features:[{id:"storage",icon:"mdi-notification-folder-special",name:"Offline Storage"},{id:"files",icon:"mdi-device-sd-storage",name:"File Access"},{id:"contacts",icon:"mdi-action-account-box",name:"Contacts"},{id:"sms",icon:"mdi-communication-message",name:"SMS"},{id:"storage-quota",icon:"mdi-notification-sim-card-alert",name:"Storage Quotas"},{id:"scheduler",icon:"mdi-action-alarm",name:"Task Scheduling"}]},{heading:"Input",features:[{id:"touch",icon:"mdi-content-gesture",name:"Touch Gestures"},{id:"speech-recognition",icon:"mdi-av-mic",name:"Speech Recognition"},{id:"clipboard",icon:"mdi-content-content-paste",name:"Clipboard (Copy & Paste)"},{id:"pointer-adaptation",icon:"mdi-hardware-mouse",name:"Pointing Device Adaptation"}]},{heading:"Seamless Experience",features:[{id:"offline",icon:"mdi-action-settings-applications",name:"Offline Mode"},{id:"background-sync",icon:"mdi-action-backup",name:"Background Sync"},{id:"sharing",icon:"mdi-action-explore",name:"Inter-App Sharing"},{id:"payments",icon:"mdi-action-payment",name:"Payments"},{id:"credentials",icon:"mdi-action-lock-open",name:"Credentials"}]},{heading:"Location & Position",features:[{id:"geolocation",icon:"mdi-device-gps-fixed",name:"Geolocation"},{id:"geofencing",icon:"mdi-action-group-work",name:"Geofencing"},{id:"device-position",icon:"mdi-device-screen-rotation",name:"Device Position"},{id:"device-motion",icon:"mdi-action-3d-rotation",name:"Device Motion"},{id:"proximity",icon:"mdi-image-leak-add",name:"Proximity Sensors"}]},{heading:"Screen & Output",features:[{id:"vr",icon:"mdi-maps-local-play",name:"Virtual & Augmented Reality"},{id:"fullscreen",icon:"mdi-action-settings-overscan",name:"Fullscreen"},{id:"screen-orientation",icon:"mdi-device-screen-lock-rotation",name:"Screen Orientation & Lock"},{id:"wake-lock",icon:"mdi-action-lock",name:"Wake Lock"},{id:"presentation",icon:"mdi-hardware-tv",name:"Presentation Features"}]}];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function R(e,t,n){var a=Object.create(e);return a.feature=t[n],a}function _(e,t,n){var a=Object.create(e);return a.group=t[n],a}function U(e){return{c:k,l:k,m:k,p:k,d:k}}function Y(e){var t;function n(e,t){return t.isSupported?J:Q}var a=n(0,e),i=a(e);return{c:function(){i.c(),t=$()},l:function(e){i.l(e),t=$()},m:function(e,n){i.m(e,n),g(e,t,n)},p:function(e,r){a!==(a=n(0,r))&&(i.d(1),(i=a(r))&&(i.c(),i.m(t.parentNode,t)))},d:function(e){i.d(e),e&&h(t)}}}function Q(e){var t,n,a;return{c:function(){t=s("span"),n=l("No "),a=s("i"),this.h()},l:function(e){t=d(e,"SPAN",{class:!0});var i=f(t);n=m(i,"No "),a=d(i,"I",{class:!0}),f(a).forEach(h),i.forEach(h),this.h()},h:function(){v(a,"class","mdi mdi-cross svelte-8j3vyy"),v(t,"class","support support-no svelte-8j3vyy")},m:function(e,i){g(e,t,i),y(t,n),y(t,a)},d:function(e){e&&h(t)}}}function J(e){var t,n,a;return{c:function(){t=s("span"),n=l("Yes "),a=s("i"),this.h()},l:function(e){t=d(e,"SPAN",{class:!0});var i=f(t);n=m(i,"Yes "),a=d(i,"I",{class:!0}),f(a).forEach(h),i.forEach(h),this.h()},h:function(){v(a,"class","mdi mdi-check svelte-8j3vyy"),v(t,"class","support support-yes svelte-8j3vyy")},m:function(e,i){g(e,t,i),y(t,n),y(t,a)},d:function(e){e&&h(t)}}}function K(e){return{c:k,l:k,m:k,p:k,d:k}}function z(e){var t,n,a,i,r,o,c,j,S,A,k,O=e.feature.name+"",P={ctx:e,current:null,token:null,pending:K,then:Y,catch:U,value:"isSupported",error:"null"};return w(A=e.feature.determineIsSupported(),P),{c:function(){t=s("li"),n=s("span"),a=s("i"),r=u(),o=s("a"),c=l(O),S=u(),P.block.c(),k=u(),this.h()},l:function(e){t=d(e,"LI",{class:!0});var i=f(t);n=d(i,"SPAN",{});var s=f(n);a=d(s,"I",{class:!0}),f(a).forEach(h),r=p(s),o=d(s,"A",{rel:!0,href:!0});var l=f(o);c=m(l,O),l.forEach(h),s.forEach(h),S=p(i),P.block.l(i),k=p(i),i.forEach(h),this.h()},h:function(){v(a,"class",i="mdi "+e.feature.icon+" svelte-8j3vyy"),v(o,"rel","prefetch"),v(o,"href",j="/"+e.feature.id+".html"),v(t,"class","svelte-8j3vyy")},m:function(e,i){g(e,t,i),y(t,n),y(n,a),y(n,r),y(n,o),y(o,c),y(t,S),P.block.m(t,P.anchor=null),P.mount=function(){return t},P.anchor=k,y(t,k)},p:function(t,n){e=n,t.filteredGroups&&i!==(i="mdi "+e.feature.icon+" svelte-8j3vyy")&&v(a,"class",i),t.filteredGroups&&O!==(O=e.feature.name+"")&&b(c,O),t.filteredGroups&&j!==(j="/"+e.feature.id+".html")&&v(o,"href",j),P.ctx=e,t.filteredGroups&&A!==(A=e.feature.determineIsSupported())&&w(A,P)||P.block.p(t,E(E({},e),P.resolved))},d:function(e){e&&h(t),P.block.d(),P.token=null,P=null}}}function X(e){for(var t,n,a,i,r,o,c=e.group.heading+"",w=e.group.resolvedFeatures,E=[],S=0;S<w.length;S+=1)E[S]=z(R(e,w,S));return{c:function(){t=s("section"),n=s("h3"),a=l(c),i=u(),r=s("ul");for(var e=0;e<E.length;e+=1)E[e].c();o=u(),this.h()},l:function(e){t=d(e,"SECTION",{class:!0});var s=f(t);n=d(s,"H3",{class:!0});var l=f(n);a=m(l,c),l.forEach(h),i=p(s),r=d(s,"UL",{class:!0});for(var u=f(r),v=0;v<E.length;v+=1)E[v].l(u);u.forEach(h),o=p(s),s.forEach(h),this.h()},h:function(){v(n,"class","svelte-8j3vyy"),v(r,"class","svelte-8j3vyy"),v(t,"class","svelte-8j3vyy")},m:function(e,c){g(e,t,c),y(t,n),y(n,a),y(t,i),y(t,r);for(var s=0;s<E.length;s+=1)E[s].m(r,null);y(t,o)},p:function(e,t){if(e.filteredGroups&&c!==(c=t.group.heading+"")&&b(a,c),e.filteredGroups){var n;for(w=t.group.resolvedFeatures,n=0;n<w.length;n+=1){var i=R(t,w,n);E[n]?E[n].p(e,i):(E[n]=z(i),E[n].c(),E[n].m(r,null))}for(;n<E.length;n+=1)E[n].d(1);E.length=w.length}},d:function(e){e&&h(t),j(E,e)}}}function Z(e){for(var t,n,a,i,r,o,c,b,w,E,P,D,$,I,x,F,C,T,L,M,G,N,V,W,q,B,H=e.filteredGroups,R=[],U=0;U<H.length;U+=1)R[U]=X(_(e,H,U));return{c:function(){t=s("div"),n=s("div"),a=s("h2"),i=l("Features"),r=u(),o=s("dl"),c=s("div"),b=s("dt"),w=l("Yes "),E=s("i"),P=u(),D=s("dd"),$=l("Feature available in your current browser"),I=u(),x=s("div"),F=s("dt"),C=l("No "),T=s("i"),L=u(),M=s("dd"),G=l("Feature not available in your current browser"),N=u(),V=s("input"),W=u(),q=s("div");for(var e=0;e<R.length;e+=1)R[e].c();this.h()},l:function(e){t=d(e,"DIV",{class:!0});var s=f(t);n=d(s,"DIV",{});var l=f(n);a=d(l,"H2",{class:!0});var u=f(a);i=m(u,"Features"),u.forEach(h),r=p(l),o=d(l,"DL",{class:!0,"aria-hidden":!0});var v=f(o);c=d(v,"DIV",{class:!0});var g=f(c);b=d(g,"DT",{class:!0});var y=f(b);w=m(y,"Yes "),E=d(y,"I",{class:!0}),f(E).forEach(h),y.forEach(h),P=p(g),D=d(g,"DD",{class:!0});var j=f(D);$=m(j,"Feature available in your current browser"),j.forEach(h),I=p(g),g.forEach(h),x=d(v,"DIV",{class:!0});var S=f(x);F=d(S,"DT",{class:!0});var A=f(F);C=m(A,"No "),T=d(A,"I",{class:!0}),f(T).forEach(h),A.forEach(h),L=p(S),M=d(S,"DD",{class:!0});var k=f(M);G=m(k,"Feature not available in your current browser"),k.forEach(h),S.forEach(h),v.forEach(h),l.forEach(h),N=p(s),V=d(s,"INPUT",{type:!0,class:!0,placeholder:!0}),s.forEach(h),W=p(e),q=d(e,"DIV",{class:!0});for(var O=f(q),B=0;B<R.length;B+=1)R[B].l(O);O.forEach(h),this.h()},h:function(){v(a,"class","svelte-8j3vyy"),v(E,"class","mdi mdi-check svelte-8j3vyy"),v(b,"class","support support-yes svelte-8j3vyy"),v(D,"class","svelte-8j3vyy"),v(c,"class","svelte-8j3vyy"),v(T,"class","mdi mdi-cross"),v(F,"class","support support-no svelte-8j3vyy"),v(M,"class","svelte-8j3vyy"),v(x,"class","svelte-8j3vyy"),v(o,"class","legend svelte-8j3vyy"),v(o,"aria-hidden","true"),v(V,"type","text"),v(V,"class","filter-input svelte-8j3vyy"),v(V,"placeholder","Filter"),v(t,"class","level svelte-8j3vyy"),v(q,"class","features-list-container svelte-8j3vyy"),B=[S(V,"input",e.input_input_handler),S(V,"keyup",e.filterFeatures)]},m:function(s,l){g(s,t,l),y(t,n),y(n,a),y(a,i),y(n,r),y(n,o),y(o,c),y(c,b),y(b,w),y(b,E),y(c,P),y(c,D),y(D,$),y(c,I),y(o,x),y(x,F),y(F,C),y(F,T),y(x,L),y(x,M),y(M,G),y(t,N),y(t,V),A(V,e.filter),g(s,W,l),g(s,q,l);for(var u=0;u<R.length;u+=1)R[u].m(q,null)},p:function(e,t){if(e.filter&&V.value!==t.filter&&A(V,t.filter),e.filteredGroups){var n;for(H=t.filteredGroups,n=0;n<H.length;n+=1){var a=_(t,H,n);R[n]?R[n].p(e,a):(R[n]=X(a),R[n].c(),R[n].m(q,null))}for(;n<R.length;n+=1)R[n].d(1);R.length=H.length}},i:k,o:k,d:function(e){e&&h(t),e&&h(W),e&&h(q),j(R,e),O(B)}}}function ee(e,t,n){B.forEach((function(e){e.resolvedFeatures=e.features.map((function(e){var t=V.find((function(t){return t.id===e.id}));return t.icon=e.icon,t}))}));var a=P(B),i="";return{filteredGroups:a,filter:i,filterFeatures:function(){var e=i.toLocaleLowerCase().trim();e.length<2?n("filteredGroups",a=P(B)):n("filteredGroups",a=B.map((function(t){return function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(n,!0).forEach((function(t){D(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t,{resolvedFeatures:t.resolvedFeatures.filter((function(t){return-1!==t.name.toLocaleLowerCase().indexOf(e)||t.description.some((function(t){return-1!==t.toLocaleLowerCase().indexOf(e)}))||-1!==t.api.toLocaleLowerCase().indexOf(e)}))})})).filter((function(e){return!!e.resolvedFeatures.length})))},input_input_handler:function(){i=this.value,n("filter",i)}}}var te=function(s){function l(e){var c;return t(this,l),c=n(this,a(l).call(this)),i(o(c),e,ee,Z,r,{}),c}return e(l,c),l}();function ne(e,t,n){var a=Object.create(e);return a.article=t[n],a}function ae(e){var t,n=new W({props:{article:e.article}});return{c:function(){I(n.$$.fragment)},l:function(e){x(n.$$.fragment,e)},m:function(e,a){F(n,e,a),t=!0},p:function(e,t){var a={};e.articles&&(a.article=t.article),n.$set(a)},i:function(e){t||(C(n.$$.fragment,e),t=!0)},o:function(e){T(n.$$.fragment,e),t=!1},d:function(e){L(n,e)}}}function ie(e){for(var t,n,a,i,r,o,c,b,w,E,S,A,k,O,P,D,$,N,V,W,B,H=new te({}),R=new q({}),_=e.articles,U=[],Y=0;Y<_.length;Y+=1)U[Y]=ae(ne(e,_,Y));var Q=function(e){return T(U[e],1,1,(function(){U[e]=null}))};return{c:function(){t=s("meta"),n=s("meta"),a=s("meta"),i=s("meta"),r=s("meta"),o=s("meta"),c=s("meta"),b=u(),w=s("div"),E=s("main"),I(H.$$.fragment),S=u(),A=s("aside"),I(R.$$.fragment),k=u(),O=s("h2"),P=l("Articles"),D=u();for(var e=0;e<U.length;e+=1)U[e].c();$=u(),N=s("p"),V=s("a"),W=l("See all"),this.h()},l:function(e){t=d(e,"META",{property:!0,content:!0}),n=d(e,"META",{property:!0,content:!0}),a=d(e,"META",{property:!0,content:!0}),i=d(e,"META",{property:!0,content:!0}),r=d(e,"META",{name:!0,content:!0}),o=d(e,"META",{name:!0,content:!0}),c=d(e,"META",{name:!0,content:!0}),b=p(e),w=d(e,"DIV",{class:!0});var s=f(w);E=d(s,"MAIN",{class:!0});var l=f(E);x(H.$$.fragment,l),l.forEach(h),S=p(s),A=d(s,"ASIDE",{class:!0});var u=f(A);x(R.$$.fragment,u),k=p(u),O=d(u,"H2",{class:!0});var v=f(O);P=m(v,"Articles"),v.forEach(h),D=p(u);for(var g=0;g<U.length;g+=1)U[g].l(u);$=p(u),N=d(u,"P",{class:!0});var y=f(N);V=d(y,"A",{href:!0,class:!0});var j=f(V);W=m(j,"See all"),j.forEach(h),y.forEach(h),u.forEach(h),s.forEach(h),this.h()},h:function(){document.title="What Web Can Do Today",v(t,"property","og:title"),v(t,"content","What Web Can Do Today"),v(n,"property","og:description"),v(n,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),v(a,"property","og:url"),v(a,"content","https://whatwebcando.today/"),v(i,"property","og:image"),v(i,"content","https://whatwebcando.today/images/share-image.png"),v(r,"name","twitter:title"),v(r,"content","What Web Can Do Today"),v(o,"name","twitter:description"),v(o,"content","Can I rely on the Web Platform features to build my app? An overview of the device integration HTML5 APIs."),v(c,"name","twitter:image"),v(c,"content","https://whatwebcando.today/images/share-image.png"),v(E,"class","svelte-5qoger"),v(O,"class","svelte-5qoger"),v(V,"href","/articles/"),v(V,"class","button"),v(N,"class","text-center svelte-5qoger"),v(A,"class","svelte-5qoger"),v(w,"class","container svelte-5qoger")},m:function(e,s){y(document.head,t),y(document.head,n),y(document.head,a),y(document.head,i),y(document.head,r),y(document.head,o),y(document.head,c),g(e,b,s),g(e,w,s),y(w,E),F(H,E,null),y(w,S),y(w,A),F(R,A,null),y(A,k),y(A,O),y(O,P),y(A,D);for(var l=0;l<U.length;l+=1)U[l].m(A,null);y(A,$),y(A,N),y(N,V),y(V,W),B=!0},p:function(e,t){if(e.articles){var n;for(_=t.articles,n=0;n<_.length;n+=1){var a=ne(t,_,n);U[n]?(U[n].p(e,a),C(U[n],1)):(U[n]=ae(a),U[n].c(),C(U[n],1),U[n].m(A,$))}for(G(),n=_.length;n<U.length;n+=1)Q(n);M()}},i:function(e){if(!B){C(H.$$.fragment,e),C(R.$$.fragment,e);for(var t=0;t<_.length;t+=1)C(U[t]);B=!0}},o:function(e){T(H.$$.fragment,e),T(R.$$.fragment,e),U=U.filter(Boolean);for(var t=0;t<U.length;t+=1)T(U[t]);B=!1},d:function(e){h(t),h(n),h(a),h(i),h(r),h(o),h(c),e&&h(b),e&&h(w),L(H),L(R),j(U,e)}}}function re(e){var t,n,a;return N.async((function(i){for(;;)switch(i.prev=i.next){case 0:return e.params,e.query,i.next=3,N.awrap(this.fetch("/articles.json"));case 3:return t=i.sent,i.next=6,N.awrap(t.json());case 6:return n=i.sent,a=n.sort((function(e,t){return e.weight>t.weight?-1:e.weight<t.weight?1:0})),i.abrupt("return",{articles:a.slice(0,3)});case 9:case"end":return i.stop()}}),null,this)}function oe(e,t,n){var a=t.articles;return e.$set=function(e){"articles"in e&&n("articles",a=e.articles)},{articles:a}}var ce=function(s){function l(e){var c;return t(this,l),c=n(this,a(l).call(this)),i(o(c),e,oe,ie,r,{articles:0}),c}return e(l,c),l}();export default ce;export{re as preload};
