(this.webpackJsonpautofleet_client=this.webpackJsonpautofleet_client||[]).push([[0],{44:function(t,e,n){},69:function(t,e,n){},75:function(t,e,n){"use strict";n.r(e);var o=n(0),c=n(9),a=n.n(c),i=(n(44),n(11)),l=n(34),r=n.n(l).a.create({baseURL:"http://localhost:5000/api",headers:{Accept:"application/json","Content-type":"application/json","Access-Control-Allow-Origin":"*",common:{Authorization:"Bearer"}}}),s=function(){return r.get("/locations")},d=function(t){return r.post("/getAllIdsInsidePolygon",t)},j=n(18),u=n(4),O=n.p+"static/media/autofleet.581abd35.gif",h=n(21),p=(n(68),n(69),n(3)),g=function(){var t=Object(u.f)();return Object(p.jsx)("div",{className:"App",children:Object(p.jsxs)("header",{className:"autofleet-logo",children:[Object(p.jsx)("img",{src:O,className:"App-logo",alt:"logo",onClick:function(){t.push("/map")}}),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{style:{paddingTop:"50px"},children:"Welcome to the vehicle map of the city London!"}),Object(p.jsx)("div",{className:"d-grid gap-2"}),Object(p.jsx)(h.a,{variant:"primary",size:"lg",children:Object(p.jsx)(j.b,{to:"/map",children:"Enter Map "})})]})]})})},b=n(17),f=n(38),x=n(89),y=function(t){var e=t.text;return Object(p.jsx)("div",{children:e})};var m=function(){var t=Object(i.b)(),e={center:{lat:Object(i.c)((function(t){return t.allLocations}))[0].location.lat,lng:Object(i.c)((function(t){return t.allLocations}))[0].location.lng},zoom:11},n=Object(o.useState)([{lat:51.509865,lng:-.118092},{lat:51.418278,lng:-.237845},{lat:51.410976,lng:-.20755833},{lat:51.4514312744,lng:-.0712783337}]),c=Object(b.a)(n,2),a=c[0],l=c[1],r=function(e,n){!function(t,e){var n=[];Object.keys(t).forEach((function(e){return n.push([t[e].lat,t[e].lng])})),d(n).then((function(t){e({type:"SET_ID_INSIDE_POLYGONE",payload:t.data})})).catch((function(t){console.error(t.message)}))}(a,t),new n.Polygon({paths:a,key:1,strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35}).setMap(e)};return Object(p.jsxs)(x.a,{container:!0,children:[Object(p.jsx)(x.a,{item:!0,xs:9,children:Object(p.jsx)("div",{style:{height:"100vh",width:"100%"},children:Object(p.jsx)(f.a,{bootstrapURLKeys:{key:"AIzaSyB6eO2w0PoRiDYrWa7BtJFx5Hf2GcmNqTE"},defaultCenter:e.center,defaultZoom:e.zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var e=t.map,n=t.maps;return r(e,n)},children:Object(i.c)((function(t){return t.allLocations})).map((function(t){return Object(p.jsx)(y,{lat:t.location.lat,lng:t.location.lng,text:"*"},t.id)}))})})}),Object(p.jsx)(x.a,{item:!0,xs:3,children:Object(p.jsxs)("div",{children:[Object(p.jsx)("div",{children:Object(p.jsx)(h.a,{variant:"primary",size:"lg",onClick:function(){console.log(a),l({lat:51.5456123352,lng:-.0912433416},{lat:51.4598884583,lng:-.1210350022},{lat:51.4746818542,lng:-.0307649989},{lat:51.4514312744,lng:-.0712783337}),console.log(a)},children:"Swap Polygon Coordinates"})}),Object(p.jsxs)("ul",{children:[Object(p.jsx)("h5",{children:"There is "+Object(i.c)((function(t){return t.idArrayInsidePolygon})).length+" cars inside the Polygon, Here is there Id's:"}),Object(i.c)((function(t){return t.idArrayInsidePolygon})).map((function(t,e){return Object(p.jsxs)("li",{children:[" ",t," "]},e)}))]})]})})]})};var v=function(){var t=Object(i.b)();return Object(o.useEffect)((function(){!function(t){s().then((function(e){t({type:"SET_ALL_LOCATIONS",payload:e.data})})).catch((function(t){console.error(t.message)}))}(t)})),Object(p.jsx)(j.a,{children:Object(p.jsxs)(u.c,{children:[Object(p.jsx)(u.a,{path:"/map",exact:!0,component:m}),Object(p.jsx)(u.a,{path:"/",exact:!0,component:g})]})})},_=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,90)).then((function(e){var n=e.getCLS,o=e.getFID,c=e.getFCP,a=e.getLCP,i=e.getTTFB;n(t),o(t),c(t),a(t),i(t)}))},E=n(22),I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"SET_ALL_LOCATIONS"===e.type?t=e.payload:t},L=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"SET_ID_INSIDE_POLYGONE"===e.type?t=e.payload:t},A=Object(E.a)({allLocations:I,idArrayInsidePolygon:L}),S=Object(E.b)(A,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());a.a.render(Object(p.jsx)(i.a,{store:S,children:Object(p.jsx)(v,{})}),document.getElementById("root")),_()}},[[75,1,2]]]);
//# sourceMappingURL=main.17a79d78.chunk.js.map