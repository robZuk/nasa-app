(this["webpackJsonpnasa-app"]=this["webpackJsonpnasa-app"]||[]).push([[0],{106:function(e,t,a){e.exports=a(143)},111:function(e,t,a){},143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(28),o=a.n(c),s=(a(111),a(8)),l=a(86),i=a.n(l);var u=function(){return r.a.createElement("div",null,r.a.createElement("svg",{className:"spinner",viewBox:"0 0 50 50"},r.a.createElement("circle",{className:"path",cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"5"})))},m=a(87),p=a.n(m),f=a(93),d="Sea and Lake Ice",g="Severe Storms",v="/icons/iceberg2.png",E=function(e){var t=e.cluster,a=e.setLocationInfo,n=e.className,c=new Date,o=function(e){var t=e.src,o=e.alt,s=e.cluster;return r.a.createElement("button",{className:"marker".concat(n),onClick:function(){return a({id:s.properties.evId,title:s.properties.title,date:c.toISOString(s.properties.date).slice(0,10)})}},r.a.createElement("img",{src:t,alt:o}))};return r.a.createElement(r.a.Fragment,null,"Wildfires"===t.properties.category&&r.a.createElement(o,{src:"/nasa-app/icons/fire4.png",alt:"Wildfires",cluster:t}),"Volcanoes"===t.properties.category&&r.a.createElement(o,{src:"/nasa-app/icons/volcano3.png",alt:"Volcanoes",cluster:t}),t.properties.category===g&&r.a.createElement(o,{src:"/nasa-app/icons/storm3.png",alt:g,cluster:t}),t.properties.category===d&&r.a.createElement(o,{src:"/nasa-app"+v,alt:d,cluster:t}))},b=function(e){var t=e.cluster,a=e.superclusters,n=e.lat,c=e.lng,o=e.pointCount,s=e.type,l=e.mapRef,i=e.closeLocationInfo,u=function(e){var s=e.className;return r.a.createElement("div",{className:s,onClick:function(){var e=Math.min(a.getClusterExpansionZoom(t.id),20);l.current.setZoom(e),l.current.panTo({lat:n,lng:c}),i()}},o)};return r.a.createElement(r.a.Fragment,null,"Wildfires"===s&&r.a.createElement(u,{className:"cluster-marker cluster-marker-wildfires"}),"Volcanoes"===s&&r.a.createElement(u,{className:"cluster-marker cluster-marker-volcanoes"}),s===d&&r.a.createElement(u,{className:"cluster-marker cluster-marker-ices"}),s===g&&r.a.createElement(u,{className:"cluster-marker cluster-marker-storms"}))},y=function(e){var t=e.info,a=e.closeLocationInfo;return r.a.createElement("div",{className:"location-info"},r.a.createElement("h2",null,"Event Location Info"),r.a.createElement("ul",null,r.a.createElement("li",null,"ID: ",r.a.createElement("strong",null,t.id)),r.a.createElement("li",null,"TITLE: ",r.a.createElement("strong",null,t.title)),r.a.createElement("li",null,"DATE: ",r.a.createElement("strong",null,t.date))),r.a.createElement("div",{className:"close-button",onClick:a}))},h=a(5),j=a(63),O=function(e){var t=e.src,a=e.alt,c=e.setEventsType,o=e.event,l=Object(n.useState)(!0),i=Object(s.a)(l,2),u=i[0],m=i[1];return r.a.createElement("button",{className:"marker map-header-button".concat(!u&&"-active"),onClick:function(e){!function(e,t,a){a.preventDefault(),e((function(e){return Object(j.a)(Object(j.a)({},e),{},Object(h.a)({},t,!e[t]))}))}(c,o,e),m((function(e){return!e}))}},r.a.createElement("img",{src:t,alt:a,className:"map-header-button-img"}))},k=function(e){var t=e.setEventsType;return r.a.createElement("div",{className:"map-header"},r.a.createElement(O,{src:"/nasa-app/icons/fire4.png",alt:"Wildfires",setEventsType:t,event:"wildfires"}),r.a.createElement(O,{src:"/nasa-app/icons/volcano3.png",alt:"Volcanoes",setEventsType:t,event:"volcanoes"}),r.a.createElement(O,{src:"/nasa-app"+v,alt:d,setEventsType:t,event:"ices"}),r.a.createElement(O,{src:"/nasa-app/icons/storm3.png",alt:g,setEventsType:t,event:"storms"}))},S=(a(82),a(64)),w=a.n(S),I=a(15),N=a(89),x=r.a.createContext(null),C=function(e){var t=e.children,a=Object(n.useRef)(),c=Object(n.useState)([]),o=Object(s.a)(c,2),l=o[0],i=o[1],u=Object(n.useState)([]),m=Object(s.a)(u,2),p=m[0],f=m[1],v=Object(n.useState)([]),E=Object(s.a)(v,2),b=E[0],y=E[1],h=Object(n.useState)([]),j=Object(s.a)(h,2),O=j[0],k=j[1],S=Object(n.useState)(null),C=Object(s.a)(S,2),L=C[0],D=C[1],T=Object(n.useState)(!1),W=Object(s.a)(T,2),V=W[0],R=W[1],P=Object(n.useState)(!1),A=Object(s.a)(P,2),F=(A[0],A[1]);Object(n.useEffect)((function(){(function(){var e=Object(N.a)(w.a.mark((function e(){var t,a,n,r,c,o,s;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),F(!1),e.prev=2,e.next=5,fetch("https://eonet.gsfc.nasa.gov/api/v3/events");case 5:return t=e.sent,e.next=8,t.json();case 8:a=e.sent,n=a.events,console.log(n),f(n),r=n.filter((function(e){return"Wildfires"===e.categories[0].title})),c=n.filter((function(e){return"Volcanoes"===e.categories[0].title})),o=n.filter((function(e){return e.categories[0].title===d})),s=n.filter((function(e){return e.categories[0].title===g})),i([Object(I.a)(r),Object(I.a)(c),Object(I.a)(o),Object(I.a)(s)]),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(2),F(e.t0);case 22:R(!1);case 23:case"end":return e.stop()}}),e,null,[[2,19]])})));return function(){return e.apply(this,arguments)}})()()}),[]);var Z={mapRef:a,eventsData:l,setEventsData:i,data:p,setData:f,searchedData:b,setSearchedData:y,searchedEventPosition:O,setSearchedEventPosition:k,locationInfo:L,setLocationInfo:D,storeLoading:[V,R]};return r.a.createElement(x.Provider,{value:Z},t)};function L(){var e=Object(n.useContext)(x),t=e.searchedEventPosition,a=e.eventsData,c=e.mapRef,o=e.locationInfo,l=e.setLocationInfo,i=Object(s.a)(a,4),u=i[0],m=i[1],v=i[2],h=i[3],j=Object(n.useState)(null),O=Object(s.a)(j,2),S=O[0],w=O[1],I=Object(n.useState)(10),N=Object(s.a)(I,2),C=N[0],L=N[1],D=Object(n.useState)({wildfires:!0,volcanoes:!0,ices:!0,storms:!0}),T=Object(s.a)(D,2),W=T[0],V=T[1];function R(e){return void 0!==e&&e.map((function(e){return{type:"Feature",properties:{cluster:!1,evId:e.id,category:e.categories[0].title,title:e.title,date:e.geometry[e.geometry.length-1].date},geometry:{type:"Point",coordinates:[parseFloat(e.geometry[e.geometry.length-1].coordinates[0]),parseFloat(e.geometry[e.geometry.length-1].coordinates[1])]}}}))}var P=R(u),A=R(m),F=R(v),Z=R(h);function z(e){var t=Object(f.a)({points:e,bounds:S,zoom:C,options:{radius:75,maxZoom:20}});return{clusters:t.clusters,supercluster:t.supercluster}}var B=z(P),M=z(A),G=z(F),J=z(Z),U=function(){l(null)},K=function(e,a,n){return e.map((function(e){var o=Object(s.a)(e.geometry.coordinates,2),i=o[0],u=o[1],m=e.properties,p=m.cluster,f=m.point_count,d=t[0]===e.geometry.coordinates[0]&&t[1]===e.geometry.coordinates[1]?"-searched":"";return p?r.a.createElement(b,{key:e.id,cluster:e,superclusters:a,lng:i,lat:u,pointCount:f,type:n,mapRef:c,closeLocationInfo:U}):r.a.createElement(E,{key:e.properties.evId,cluster:e,lat:u,lng:i,setLocationInfo:l,searchedEventPosition:t,className:d})}))};return r.a.createElement("div",{className:"map"},r.a.createElement(r.a.Fragment,null,r.a.createElement(k,{setEventsType:V}),r.a.createElement(p.a,{bootstrapURLKeys:{key:"AIzaSyAhdUBl7lw3saMhrAiMydG4aywVJfRaCxo"},defaultCenter:{lat:52.6376,lng:-1.135171},defaultZoom:4,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(e){var t=e.map;c.current=t},onChange:function(e){var t=e.zoom,a=e.bounds;L(t),w([a.nw.lng,a.se.lat,a.se.lng,a.nw.lat])}},W.wildfires&&K(B.clusters,B.supercluster,"Wildfires"),W.volcanoes&&K(M.clusters,M.supercluster,"Volcanoes"),W.ices&&K(G.clusters,G.supercluster,d),W.storms&&K(J.clusters,J.supercluster,g)),o&&r.a.createElement(y,{info:o,closeLocationInfo:U})))}var D=a(200),T=a(199),W=a(198),V=a(201),R=a(195),P=a(202),A=a(203),F=a(192),Z=a(67),z=a.n(Z),B=a(197),M=a(206),G=a(207),J=a(90);function U(){var e=Object(n.useContext)(x),t=e.searchedData,a=e.setSearchedData,c=e.data,o=e.setSearchedEventPosition,l=e.mapRef,i=(e.setLocationInfo,Object(n.useState)([])),u=Object(s.a)(i,2),m=u[0],p=u[1],f=Object(n.useState)(!1),E=Object(s.a)(f,2),b=E[0],y=E[1],h=function(e){return function(t){("keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&y(e)}};return r.a.createElement("div",null,r.a.createElement(r.a.Fragment,null,r.a.createElement(W.a,{onClick:h(!0)},r.a.createElement(z.a,{fontSize:"medium",sx:{m:1,color:J.a[500]}})),r.a.createElement(T.a,{open:b,onClose:h(!1)},r.a.createElement(D.a,{component:"form",sx:{"& > :not(style)":{m:1,width:"37ch"}},noValidate:!0,autoComplete:"off",onSubmit:function(e){!function(e){var t=new RegExp("".concat(e),"ig");a(Object(I.a)(c.filter((function(e){return t.test(e.title)}))))}(m),p(""),e.preventDefault()}},r.a.createElement(F.a,{id:"standard-basic",label:"Search ...",variant:"standard",InputProps:{type:"search",endAdornment:r.a.createElement(M.a,{position:"end"},r.a.createElement(G.a,{edge:"end",type:"submit"},r.a.createElement(z.a,null)))},value:m,onChange:function(e){p(e.target.value)}})),r.a.createElement(D.a,{sx:{width:300},role:"presentation",onClick:h(!1),onKeyDown:h(!1)},r.a.createElement(V.a,null,t.map((function(e){return r.a.createElement(R.a,{button:!0,key:e.id,onClick:function(){return h(!1),l.current.panTo({lat:e.geometry[e.geometry.length-1].coordinates[1],lng:e.geometry[e.geometry.length-1].coordinates[0]}),l.current.setZoom(9),a([]),o(Object(I.a)(e.geometry[e.geometry.length-1].coordinates))}},r.a.createElement(P.a,null,"Wildfires"===e.categories[0].title&&r.a.createElement(B.a,{sx:{bgcolor:J.a[300]}},r.a.createElement("img",{src:"/nasa-app/icons/fire4.png",alt:"Wildfires",className:"event-list-img"})),"Volcanoes"===e.categories[0].title&&r.a.createElement(B.a,{sx:{bgcolor:J.a[300]}},r.a.createElement("img",{src:"/nasa-app/icons/volcano3.png",alt:"Volcanoes",className:"event-list-img"})),e.categories[0].title===d&&r.a.createElement(B.a,{sx:{bgcolor:J.a[300]}},r.a.createElement("img",{src:"/nasa-app"+v,alt:d,className:"event-list-img"})),e.categories[0].title===g&&r.a.createElement(B.a,{sx:{bgcolor:J.a[300]}},r.a.createElement("img",{src:"/nasa-app/icons/storm3.png",alt:g,className:"event-list-img"}))),r.a.createElement(A.a,{primary:e.title}))})))))))}function K(){var e=Object(n.useContext)(x).storeLoading,t=Object(s.a)(e,1)[0];return r.a.createElement("div",{className:"app"},t?r.a.createElement(u,null):r.a.createElement("div",{className:"grid"},r.a.createElement(U,null),r.a.createElement(L,null)))}i.a.config();Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(C,null,r.a.createElement(K,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},82:function(e,t,a){}},[[106,1,2]]]);
//# sourceMappingURL=main.65b24f6f.chunk.js.map