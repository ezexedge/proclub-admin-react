(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[112],{1159:function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"e",(function(){return a})),e.d(n,"g",(function(){return i})),e.d(n,"a",(function(){return r})),e.d(n,"d",(function(){return c})),e.d(n,"f",(function(){return p})),e.d(n,"c",(function(){return l}));var o=function(t,n){return fetch("https://api.klubo.club/api/documentacion/crear",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)},body:JSON.stringify(t)}).then((function(t){return console.log(t),t.json()})).catch((function(t){console.log(t)}))},a=function(t,n){return fetch("https://api.klubo.club/api/documentacion/solicitud/".concat(t),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},i=function(t,n,e,o){return fetch("https://api.klubo.club/api/documentacion/solicitud/".concat(t,"/").concat(n,"/").concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(o)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},r=function(t,n,e){return fetch("https://api.klubo.club/api/documentacion/aprobado/".concat(t,"/").concat(n),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},c=function(t,n,e){return fetch("https://api.klubo.club/api/documentacion/rechazado/".concat(t,"/").concat(n),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},p=function(t,n){return fetch("https://api.klubo.club/api/categoria-documento/".concat(t),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(t){return t.json()})).catch((function(t){return console.log(t)}))},l=function(t,n,e){return fetch("https://api.klubo.club/api/documentacion/eliminar/solicitud/".concat(t,"/").concat(n),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(t){return console.log(t),t.json()})).catch((function(t){console.log(t)}))}},1814:function(t,n){t.exports=function(t,n,e,o){var a=new Blob("undefined"!==typeof o?[o,t]:[t],{type:e||"application/octet-stream"});if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(a,n);else{var i=window.URL&&window.URL.createObjectURL?window.URL.createObjectURL(a):window.webkitURL.createObjectURL(a),r=document.createElement("a");r.style.display="none",r.href=i,r.setAttribute("download",n),"undefined"===typeof r.download&&r.setAttribute("target","_blank"),document.body.appendChild(r),r.click(),setTimeout((function(){document.body.removeChild(r),window.URL.revokeObjectURL(i)}),200)}}},2288:function(t,n,e){"use strict";e.r(n);var o=e(17),a=e.n(o),i=e(29),r=e(10),c=e(1),p=e.n(c),l=e(41),s=e(307),d=(e(25),e(8)),m=(e(846),e(845),e(829)),u=e(6),b=(e(249),e(19)),f=e(36),h=e(51),x=e(477),j=e(952),g=e.n(j),O=e(747),y=e(894),v=e(1814),w=e.n(v),S=e(258),k=e.n(S),F=e(145),R=(e(855),e(828)),E=e(444),C=e(809),T=e(741),z=e(306),N=e(1159),D=e(0),I=(Object(u.a)("input")({display:"none"}),Object(u.a)(F.a)((function(t){var n=t.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(n.spacing(16),";\n      height: ").concat(n.spacing(16),";\n    }\n")})),Object(u.a)(F.a)((function(t){var n=t.theme;return"\n    position: absolute;\n    width: ".concat(n.spacing(6),";\n    height: ").concat(n.spacing(6),";\n    bottom: -").concat(n.spacing(2),";\n    right: -").concat(n.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(n.colors.primary.main,";\n      color: ").concat(n.palette.primary.contrastText,";\n      box-shadow: ").concat(n.colors.shadows.primary,";\n      width: ").concat(n.spacing(6),";\n      height: ").concat(n.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(n.colors.primary.dark,";\n      }\n    }\n")})),Object(x.a)((function(t){var n;return n={modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:t.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"},boxBtn:{with:"44px!important",height:"44px!important",padding:"10px!important",border:"6px!important",backgroundColor:"white!important"},icon:{color:"#0061F4!important"},linea:{color:"#DDDDDD!important",backgroundColor:"#DDDDDD!important",border:"1px solid #DDDDDD",marginTop:"37px"}},Object(d.a)(n,"modified",{height:"50px",width:"auto",borderRadius:"6px",padding:"50px",color:"white",backgroundColor:"#44D600!important",marginLeft:"13px!important"}),Object(d.a)(n,"modifiedError",{height:"50px",width:"auto",borderRadius:"6px",padding:"50px",color:"white",backgroundColor:"#FF395C!important"}),Object(d.a)(n,"modifiedBlock",{height:"50px",width:"auto",borderRadius:"6px",padding:"22px, 52px, 22px, 52px",color:"white",backgroundColor:"#cfd8dc!important",marginLeft:"13px!important"}),Object(d.a)(n,"extendedIcon",{marginRight:t.spacing(1)}),Object(d.a)(n,"margin",{marginTop:"35px!important"}),Object(d.a)(n,"texto",{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"}),Object(d.a)(n,"titulo",{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"bold!important",fontSize:"30px!important",lineHeight:"35px!important",color:"#223354!important",marginLeft:"17px!important"}),Object(d.a)(n,"card",{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"}),Object(d.a)(n,"container",{width:"100%!important",heigth:"auto!important",padding:"34px!important"}),Object(d.a)(n,"cardSubtitle2",{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"bold!important",fontSize:"18px!important",lineHeight:"27px!important",display:"flex!important",alignItems:"center!important",opacity:"35%",color:"#223354!important"}),Object(d.a)(n,"textEnd",{textAlign:"end"}),Object(d.a)(n,"titleInformacion",{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"14px",lineHeight:"239.3%",marginRight:"5px",color:"#223354",opacity:"0.5"}),Object(d.a)(n,"parrafoInformacion",{fontFamily:"Roboto",fontSize:"16px",fontStyle:"normal",fontWeight:"400",lineHeight:"28px",letterSpacing:"0em"}),Object(d.a)(n,"parrafoEmail",{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",lineHeight:"19px",display:"flex",alignItems:"center",color:"#223354"}),Object(d.a)(n,"headerStyle",{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",lineHeight:"19px",display:"flex",alignItems:"center",color:"#223354",opacity:"0.5"}),Object(d.a)(n,"headerHelp",{with:"16px!important",height:"16px!important",color:"#223354",marginTop:"2px!important",opacity:"0.5"}),Object(d.a)(n,"textCard",{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"normal!important",fontSize:"22px!important",lineHeight:"26px!important",color:"#223354!important"}),Object(d.a)(n,"subTitle",{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"15px",lineHeight:"150.6%",color:"#223354",opacity:"0.8"}),Object(d.a)(n,"spinnerColor",{color:"white!important"}),Object(d.a)(n,"badge",{height:"22px!important",width:"112px!important",padding:"4px, 15px, 4px, 15px!important",backgroundColor:"#0AB6FF!important",borderRadius:"22px",textAlign:"center!important"}),Object(d.a)(n,"badgeText",{fontFamily:"Roboto",fontSize:"12px",fontStyle:"normal",lineHeight:"22px",fontWeight:"700",color:"white"}),n})));var A=function(){var t=I(),n=p.a.useState(2),e=Object(r.a)(n,2),o=(e[0],e[1],Object(f.i)()),l=o.userId,s=o.solicitudId,d=Object(c.useState)(!1),u=Object(r.a)(d,2),x=u[0],j=u[1],v=Object(c.useState)(!1),S=Object(r.a)(v,2),A=S[0],W=S[1],H=Object(c.useState)(!1),B=Object(r.a)(H,2),L=B[0],U=B[1],M=window.localStorage.getItem("accessToken"),_=(Object(m.a)().t,Object(c.useState)(!1)),P=Object(r.a)(_,2),G=(P[0],P[1],Object(z.b)().enqueueSnackbar,Object(c.useState)(null)),J=Object(r.a)(G,2),q=J[0],K=J[1],Q=Object(h.a)().user,V=Object(c.useState)({public:!0}),X=Object(r.a)(V,2),Y=(X[0],X[1],function(){var t=Object(i.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(N.g)(Q.clubId,l,s,M);case 2:n=t.sent,console.log("llamada",n),K(n);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}());Object(c.useEffect)((function(){console.log("creando todo",Q),Q&&Y()}),[]),Object(c.useEffect)((function(){q&&(1===q.estadodocumentacionId||2===q.estadodocumentacionId?j(!0):j(!1))}),[q]),Object(c.useEffect)((function(){!0===A&&(Y(),W(!1))}),[A]),console.log("aca el bloqueo",x);var Z=function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return U(!0),t.next=3,Object(N.a)(l,s,M);case 3:W(!0),U(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),$=function(){var t=Object(i.a)(a.a.mark((function t(){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return U(!0),t.next=3,Object(N.d)(l,s,M);case 3:W(!0),U(!1);case 5:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(R.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(D.jsx)(R.a,{container:!0,direction:"row",justify:"start",alignItems:"center",spacing:5,className:t.margin,children:Object(D.jsxs)(R.a,{item:!0,lg:12,xs:12,display:"flex",children:[Object(D.jsx)(F.a,{component:b.b,to:"/admin/dashboard/documentacion",className:t.boxBtn,children:Object(D.jsx)(g.a,{className:t.icon})}),Object(D.jsx)(E.a,{variant:"h1",mt:.5,ml:3,children:"Documentaci\xf3n"})]})})}),Object(D.jsx)("hr",{className:t.linea}),Object(D.jsxs)(R.a,{container:!0,direction:"row",justify:"space-between",alignItems:"start",children:[Object(D.jsxs)(R.a,{item:!0,xs:3,children:[Object(D.jsxs)(F.a,{children:[Object(D.jsx)(E.a,{mt:3,variant:"h2",children:q&&q.documentacionDe}),Object(D.jsxs)(E.a,{mt:2,className:t.subTitle,children:["Enviado el ",q&&q.fecha," "]})]}),Object(D.jsx)(F.a,{display:"flex",mt:2,children:Object(D.jsx)(F.a,{children:Object(D.jsx)("div",{className:t.badge,children:Object(D.jsx)("p",{className:t.badgeText,children:q&&q.categoria})})})})]}),Object(D.jsx)(R.a,{item:!0,xs:9,mt:3,className:t.textEnd,children:q&&q.documentacion.length>0?Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(C.a,{onClick:$,variant:"contained",className:q&&!0===x?t.modifiedBlock:t.modifiedError,disabled:!(!q||!0!==x),disableElevation:!0,children:[Object(D.jsx)("span",{class:"material-icons-outlined  icon-check",children:!0===L&&!1===x?null:"clear"}),Object(D.jsx)("span",{className:t.iconPadding,children:!0===L&&!1===x?Object(D.jsx)(T.a,{className:t.spinnerColor,m:3}):"Desaprobar"})]}),Object(D.jsxs)(C.a,{onClick:Z,variant:"contained",className:q&&!1===x?t.modifiedBlock:t.modified,disabled:!(!q||!1!==x),disableElevation:!0,children:[Object(D.jsx)("span",{class:"material-icons-outlined  icon-check",children:!0===L&&!0===x?null:"done"}),Object(D.jsx)("span",{className:t.iconPadding,children:!0===L&&!0===x?Object(D.jsx)(T.a,{className:t.spinnerColor,m:3}):"Aprobar documentacion"})]})]}):Object(D.jsx)(E.a,{mr:3,variant:"h2",children:"No hay documentos"})})]}),Object(D.jsx)(R.a,{display:"flex",xs:12,spacing:3,mt:5,children:q&&q.documentacion.map((function(t){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(R.a,{xs:3.9,mr:3,children:Object(D.jsxs)(O.a,{children:[Object(D.jsxs)(F.a,{children:[Object(D.jsx)(y.a,{className:"card-documentacion",children:Object(D.jsx)("span",{className:"material-icons-outlined documentacion",children:"picture_as_pdf"})}),Object(D.jsx)("hr",{className:"line-documentacion"})]}),Object(D.jsxs)(F.a,{ml:2,children:[Object(D.jsxs)(F.a,{display:"flex",alignItems:"center",className:"documentacion-content",mb:1,children:[Object(D.jsx)("span",{className:"material-icons-outlined documentacion-small",children:"picture_as_pdf"}),Object(D.jsx)("h5",{className:"documentacion-font",children:t.titulo}),Object(D.jsx)("br",{})]}),Object(D.jsxs)(F.a,{mb:1,display:"flex",className:"cursor",alignItems:"center",onClick:function(){return n=t.pathFile,e=t.titulo,void k.a.get(n,{responseType:"blob"}).then((function(t){w()(t.data,e)}));var n,e},children:[Object(D.jsx)("span",{class:"material-icons-outlined documentacion-small",children:"file_download"}),Object(D.jsx)("h3",{ml:2,className:"documentacion-font-sub",children:"Descargar documento"})]})]})]})})})}))})]})},W=(e(169),e(843)),H=e(840),B=Object(x.a)((function(t){return{avatar:{height:"109px!important",width:"109px!important"},modified:{height:"50px",width:"256px",borderRadius:"6px",padding:"22px, 32px, 22px, 32px",color:"white",backgroundColor:"#44D600!important",marginLeft:"13px!important"},modifiedError:{height:"50px",width:"175px",borderRadius:"6px",padding:"22px, 32px, 22px, 32px",color:"white",backgroundColor:"#FF395C!important"},extendedIcon:{marginRight:t.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},titulo:{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"bold!important",fontSize:"30px!important",lineHeight:"35px!important",color:"#223354!important",marginLeft:"17px!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},container:{width:"100%!important",heigth:"auto!important",padding:"34px!important"},cardSubtitle2:{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"bold!important",fontSize:"18px!important",lineHeight:"27px!important",display:"flex!important",alignItems:"center!important",opacity:"35%",color:"#223354!important"},textEnd:{textAlign:"end"},titleInformacion:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"14px",lineHeight:"239.3%",marginRight:"5px",color:"#223354",opacity:"0.5"},parrafoInformacion:{fontFamily:"Roboto",fontSize:"16px",fontStyle:"normal",fontWeight:"400",lineHeight:"28px",letterSpacing:"0em"},parrafoEmail:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",lineHeight:"19px",display:"flex",alignItems:"center",color:"#223354"},headerStyle:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"bold",fontSize:"16px",lineHeight:"19px",display:"flex",alignItems:"center",color:"#223354",opacity:"0.5"},headerHelp:{with:"16px!important",height:"16px!important",color:"#223354",marginTop:"2px!important",opacity:"0.5"},textCard:{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"normal!important",fontSize:"22px!important",lineHeight:"26px!important",color:"#223354!important"},subTitle:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"15px",lineHeight:"150.6%",color:"#223354",opacity:"0.8"}}}));n.default=function(){B();var t=Object(H.a)(),n=Object(c.useState)([]),e=Object(r.a)(n,2),o=(e[0],e[1]),p=Object(c.useCallback)(Object(i.a)(a.a.mark((function n(){var e;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.a.get("/api/projects");case 3:e=n.sent,t.current&&o(e.data.projects),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.error(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])}))),[t]);return Object(c.useEffect)((function(){p()}),[p]),Object(D.jsx)(s.a,{title:"Klubo | documento",children:Object(D.jsx)(W.a,{children:Object(D.jsx)(A,{})})})}},840:function(t,n,e){"use strict";var o=e(1);n.a=function(){var t=Object(o.useRef)(!0);return Object(o.useEffect)((function(){return function(){t.current=!1}}),[]),t}},843:function(t,n,e){"use strict";var o=e(748),a=e(6),i=e(145),r=e(0),c=Object(a.a)(i.a)((function(t){var n=t.theme;return"\n        padding: ".concat(n.spacing(3,0),";\n")}));n.a=function(t){var n=t.children;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(c,{children:Object(r.jsx)(o.a,{maxWidth:"lg",children:n})})})}},855:function(t,n,e){"use strict";var o=e(2),a=e(3),i=e(1),r=(e(5),e(259)),c=e(34),p=e(33),l=e(49),s=e(28),d=e(0),m={entering:{transform:"none"},entered:{transform:"none"}},u={enter:c.b.enteringScreen,exit:c.b.leavingScreen},b=i.forwardRef((function(t,n){var e=t.appear,c=void 0===e||e,b=t.children,f=t.easing,h=t.in,x=t.onEnter,j=t.onEntered,g=t.onEntering,O=t.onExit,y=t.onExited,v=t.onExiting,w=t.style,S=t.timeout,k=void 0===S?u:S,F=t.TransitionComponent,R=void 0===F?r.a:F,E=Object(a.a)(t,["appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),C=Object(p.a)(),T=i.useRef(null),z=Object(s.a)(b.ref,n),N=Object(s.a)(T,z),D=function(t){return function(n){if(t){var e=T.current;void 0===n?t(e):t(e,n)}}},I=D(g),A=D((function(t,n){Object(l.b)(t);var e=Object(l.a)({style:w,timeout:k,easing:f},{mode:"enter"});t.style.webkitTransition=C.transitions.create("transform",e),t.style.transition=C.transitions.create("transform",e),x&&x(t,n)})),W=D(j),H=D(v),B=D((function(t){var n=Object(l.a)({style:w,timeout:k,easing:f},{mode:"exit"});t.style.webkitTransition=C.transitions.create("transform",n),t.style.transition=C.transitions.create("transform",n),O&&O(t)})),L=D(y);return Object(d.jsx)(R,Object(o.a)({appear:c,in:h,nodeRef:T,onEnter:A,onEntered:W,onEntering:I,onExit:B,onExited:L,onExiting:H,timeout:k},E,{children:function(t,n){return i.cloneElement(b,Object(o.a)({style:Object(o.a)({transform:"scale(0)",visibility:"exited"!==t||h?void 0:"hidden"},m[t],w,b.props.style),ref:N},n))}}))}));n.a=b},894:function(t,n,e){"use strict";var o=e(2),a=e(3),i=e(1),r=(e(5),e(9)),c=e(725),p=e(6),l=e(13),s=e(440),d=e(726);function m(t){return Object(s.a)("MuiCardContent",t)}Object(d.a)("MuiCardContent",["root"]);var u=e(0),b=Object(p.a)("div",{},{name:"MuiCardContent",slot:"Root",overridesResolver:function(t,n){return n.root||{}}})((function(){return{padding:16,"&:last-child":{paddingBottom:24}}})),f=i.forwardRef((function(t,n){var e=Object(l.a)({props:t,name:"MuiCardContent"}),i=e.className,p=e.component,s=void 0===p?"div":p,d=Object(a.a)(e,["className","component"]),f=Object(o.a)({},e,{component:s}),h=function(t){var n=t.classes;return Object(c.a)({root:["root"]},m,n)}(f);return Object(u.jsx)(b,Object(o.a)({as:s,className:Object(r.a)(h.root,i),styleProps:f,ref:n},d))}));n.a=f},952:function(t,n,e){"use strict";var o=e(20),a=e(21);Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;a(e(1));var i=o(e(22)),r=e(0),c=(0,i.default)((0,r.jsx)("path",{d:"M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21z"}),"KeyboardBackspace");n.default=c}}]);
//# sourceMappingURL=112.6d3f7889.chunk.js.map