(this.webpackJsonpMeetingRoomBooking=this.webpackJsonpMeetingRoomBooking||[]).push([[0],{101:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){"use strict";n.r(t);var i=n(3),c=n(0),a=n.n(c),r=n(8),o=n.n(r),s=(n(74),n(37)),l=n(11),j=n(19),u=n.n(j),d=n(135);function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,c=function(e,t){if(null==e)return{};var n,i,c={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var O=c.createElement("path",{d:"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027",fill:"#4285F4"}),h=c.createElement("path",{d:"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1",fill:"#34A853"}),p=c.createElement("path",{d:"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782",fill:"#FBBC05"}),g=c.createElement("path",{d:"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251",fill:"#EB4335"});function x(e,t){var n=e.title,i=e.titleId,a=m(e,["title","titleId"]);return c.createElement("svg",b({width:2443,height:2500,viewBox:"0 0 256 262",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":i},a),n?c.createElement("title",{id:i},n):null,O,h,p,g)}var f=c.forwardRef(x);n.p;var v=function(e){return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)("div",{style:{marginTop:"100px",textAlign:"center"},children:Object(i.jsxs)(d.a,{variant:"outlined",onClick:function(e){u.a.handleAuthClick()},children:[Object(i.jsx)(f,{style:{height:"30px",width:"50px"}}),"Login with Google"]})})})},y=(n(79),n(14));var w=function(e){return Object(i.jsx)("div",{style:{backgroundColor:"#f50057",height:"50px"},children:e.sign&&Object(i.jsx)(d.a,{style:{top:"10px",left:"10px",position:"absolute"},variant:"contained",size:"small",onClick:function(){u.a.handleSignoutClick()},children:"Logout"})})},k="CLEAR",S="LOGIN",M="LOGOUT",E="SET_MEETING_DETAILS",T="SET_MEETING_TIMING",C=function(){return{type:k}},I=function(e){return{type:T,payload:{data:e}}},B=function(e){return{type:E,payload:{data:e}}},D=function(e){return{type:S,payload:{user:e}}},A=function(){return{type:M}},N=n(20),R=n(139),Y=n(26),F=n.n(Y),L=n(58),P=n.n(L);var G=function(e){var t=Object(l.g)(),n=Object(y.b)(),a=Object(y.c)((function(e){return e.user})),r=Object(c.useState)(!1),o=Object(N.a)(r,2),s=o[0],j=o[1],b=Object(c.useState)(!1),m=Object(N.a)(b,2),O=m[0],h=m[1],p=Object(c.useState)(!1),g=Object(N.a)(p,2),x=g[0],f=g[1];return Object(i.jsxs)("div",{style:{margin:"10px auto",width:"50%",fontSize:25},children:[Object(i.jsx)("h2",{children:"Booking Summary"}),Object(i.jsxs)(R.a,{container:!0,spacing:1,children:[Object(i.jsxs)(R.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(i.jsx)(R.a,{item:!0,xs:4,children:"Name:"}),Object(i.jsx)(R.a,{item:!0,xs:4,children:a.user.name})]}),Object(i.jsxs)(R.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(i.jsx)(R.a,{item:!0,xs:4,children:"Email:"}),Object(i.jsx)(R.a,{item:!0,xs:4,children:a.user.email})]}),Object(i.jsxs)(R.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(i.jsx)(R.a,{item:!0,xs:4,children:"Meeting Room:"}),Object(i.jsx)(R.a,{item:!0,xs:4,children:a.room.label})]}),Object(i.jsxs)(R.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(i.jsx)(R.a,{item:!0,xs:4,children:"Date:"}),Object(i.jsx)(R.a,{item:!0,xs:4,children:a.date})]}),Object(i.jsxs)(R.a,{container:!0,item:!0,xs:12,spacing:3,children:[Object(i.jsx)(R.a,{item:!0,xs:4,children:"Slot:"}),Object(i.jsx)(R.a,{item:!0,xs:4,children:a.time})]})]}),Object(i.jsx)("br",{}),x&&Object(i.jsx)("h3",{children:"Booking Failed, Retry"}),O?Object(i.jsx)("div",{style:{margin:"0 auto"},children:Object(i.jsx)(P.a,{type:"Puff",color:"#F50057",height:100,width:100,timeout:3e3})}):Object(i.jsx)("div",{children:s?Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(d.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:function(){t.push("/bookingDetails"),n(C())},children:"Book More"}),Object(i.jsx)(d.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:u.a.handleSignoutClick,children:"Finish"})]}):Object(i.jsx)(d.a,{variant:"contained",color:"secondary",style:{width:"100%"},onClick:function(){var e=a.time,t=a.date,n=parseInt(e.split(" ")[0].split(":")[0]);"pm"===e.split(" ")[1]&&(n+=12);var i=parseInt(e.split(" ")[0].split(":")[1]),c=F()(t,"DD-MM-YYYY").set({hour:n,minute:i}),r=F()(t,"DD-MM-YYYY").set({hour:i?n+1:n,minute:i?0:30});h(!0),u.a.createEvent({summary:"Book the meeting on ".concat(a.room.label),description:a.description,start:{dateTime:c.toISOString(),timeZone:"Asia/Kolkata"},end:{dateTime:r.toISOString(),timeZone:"Asia/Kolkata"}},"primary").then((function(e){h(!1),j(!0)})).catch((function(e){h(!1),j(!0),f(!0)}))},children:"Confirm Booking"})})]})},K=n(140),z=(n(101),n(141)),H=function(e){var t=Object(l.g)(),n=Object(y.c)((function(e){return e.user.user})),a=Object(y.c)((function(e){return e.user.description})),r=Object(y.c)((function(e){return e.user.room})),o=Object(y.b)(),s=["Training Room-1","Training Room-2","Training Room-3"],j=Object(c.useState)(a),u=Object(N.a)(j,2),b=u[0],m=u[1],O=Object(c.useState)(r&&r.value),h=Object(N.a)(O,2),p=h[0],g=h[1];return Object(i.jsxs)("div",{className:"meetingRoom",children:[Object(i.jsx)("h2",{children:" Meeting Room Booking "}),Object(i.jsx)(K.a,{id:"select-room",select:!0,label:"Meeting Room",placeholder:"Select Meeting Room",value:p,onChange:function(e){return g(e.target.value)},variant:"outlined",style:{margin:10},children:s.map((function(e,t){return Object(i.jsx)(z.a,{value:t,children:e},t)}))}),Object(i.jsx)(K.a,{id:"username",label:"Name",style:{margin:10},placeholder:"Enter Your Name",variant:"outlined",margin:"normal",InputLabelProps:{shrink:!0},value:n.name,disabled:!0}),Object(i.jsx)(K.a,{label:"Meeting Description",style:{margin:10},placeholder:"Enter meeting description",margin:"normal",value:b,InputLabelProps:{shrink:!0},onChange:function(e){return m(e.target.value)},variant:"outlined"}),Object(i.jsx)("br",{}),Object(i.jsx)(d.a,{variant:"contained",color:"secondary",disabled:!(null!==p&&b),style:{margin:10},onClick:function(){o(B({room:{label:s[p],value:p},description:b})),t.push("/bookingTiming")},children:"Next"})]})},J=n(16),W=n(60),_=(n(102),n(61));var U=function(e){var t=Object(_.a)(Array(19)).map((function(e,t){return F()("".concat(10+Math.floor(t/2),":").concat(t%2===0?"00":"30"),"HH:mm").format("hh:mm a")}));return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("p",{style:{textAlign:"center",fontSize:"25px"},children:"Please select your preferred slot"}),Object(i.jsx)(R.a,{container:!0,justify:"center",children:Object(i.jsx)(R.a,{item:!0,xs:7,children:Object(i.jsx)(R.a,{container:!0,justify:"center",spacing:2,children:t.map((function(t){return Object(i.jsx)(R.a,{item:!0,children:Object(i.jsx)(d.a,{variant:e.slotTime===t?"contained":"outlined",color:e.slotTime===t?"secondary":void 0,onClick:function(){return e.setSlotTime(t)},children:t})},t)}))})})})]})},X=(n(103),function(){var e=Object(y.b)(),t=Object(l.g)(),n=Object(c.useState)(new Date),a=Object(N.a)(n,2),r=a[0],o=a[1],s=Object(c.useState)(null),j=Object(N.a)(s,2),u=j[0],b=j[1],m=Object(c.useState)(!1),O=Object(N.a)(m,2),h=O[0],p=O[1];return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(W.a,{value:r,minDate:new Date,onChange:function(e){o(e),p(!0)}}),Object(i.jsx)("p",{style:{textAlign:"center"},children:F()(r).format("dddd, Do MMMM")}),Object(i.jsx)("br",{}),Object(i.jsx)(U,Object(J.a)({},{slotTime:u,setSlotTime:b})),Object(i.jsx)("br",{}),Object(i.jsx)(d.a,{onClick:function(){e(I({date:F()(r).format("DD-MM-YYYY"),time:u})),t.push("/bookingSummary")},variant:"contained",color:"secondary",disabled:!(h&&u),style:{margin:"10px 40% 30px 40%",width:"20%"},children:"BOOK APPOINTMENT"})]})});var Z=function(){var e=Object(y.b)(),t=Object(y.c)((function(e){return!!e.user.user}));Object(c.useEffect)((function(){u.a.onLoad((function(){u.a.sign&&n(!0),u.a.listenSign((function(e){n(e)}))}))}),[]);var n=function(t){if(t){var n=window.gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile();e(D({name:n.getName(),email:n.getEmail()}))}else e(A())};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(w,{sign:t}),Object(i.jsx)(s.a,{children:t?Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{path:"/bookingDetails",component:H}),Object(i.jsx)(l.b,{path:"/bookingTiming",component:X}),Object(i.jsx)(l.b,{path:"/bookingSummary",component:G}),Object(i.jsx)(l.b,{render:function(){return Object(i.jsx)(l.a,{to:"/bookingDetails"})}})]}):Object(i.jsxs)(l.d,{children:[Object(i.jsx)(l.b,{exact:!0,path:"/",component:v}),Object(i.jsx)(l.b,{render:function(){return Object(i.jsx)(l.a,{to:"/"})}})]})})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=n(30),V=n(59),$={user:null,roomName:null,description:null,date:null,time:null},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return console.log("login",t.payload.user),Object(J.a)(Object(J.a)({},e),{},{user:t.payload.user});case M:return console.log("logout"),Object(J.a)(Object(J.a)({},e),{},{user:null});case E:return Object(J.a)(Object(J.a)({},e),{},{room:t.payload.data.room,description:t.payload.data.description});case T:return Object(J.a)(Object(J.a)({},e),{},{date:t.payload.data.date,time:t.payload.data.time});case k:return Object(J.a)(Object(J.a)({},e),{},{date:null,time:null,room:null,description:null});default:return e}},ee=Object(q.c)({user:Q}),te=function(){return Object(q.e)(ee,Object(q.d)(Object(q.a)(V.a)))}();o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(y.a,{store:te,children:Object(i.jsx)(Z,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e,t,n){},75:function(e){e.exports=JSON.parse('{"clientId":"1010702888907-njk3luqcsai3se5ftvdff7ntmj4gu6pu.apps.googleusercontent.com","apiKey":"AIzaSyBbyVmtW3fm2XHiMXJvK0m5GdfwgWdfgXU","scope":"https://www.googleapis.com/auth/calendar","discoveryDocs":["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]}')}},[[104,1,2]]]);
//# sourceMappingURL=main.b546a735.chunk.js.map