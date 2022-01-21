(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[103],{1019:function(e,t,n){"use strict";var a=n(3),c=n(2),o=n(1),r=(n(5),n(9)),i=n(242),s=n(720),l=n(13),d=n(6),j=n(435),u=n(721);function b(e){return Object(j.a)("MuiCardMedia",e)}Object(u.a)("MuiCardMedia",["root","media","img"]);var p=n(0),h=Object(d.a)("div",{},{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps,a=n.isMediaComponent,o=n.isImageComponent;return Object(i.a)(Object(c.a)({},a&&t.media,o&&t.img),t.root||{})}})((function(e){var t=e.styleProps;return Object(c.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),m=["video","audio","picture","iframe","img"],O=["picture","img"],x=o.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCardMedia"}),o=n.children,i=n.className,d=n.component,j=void 0===d?"div":d,u=n.image,x=n.src,f=n.style,g=Object(a.a)(n,["children","className","component","image","src","style"]),v=-1!==m.indexOf(j),y=!v&&u?Object(c.a)({backgroundImage:'url("'.concat(u,'")')},f):f,k=Object(c.a)({},n,{component:j,isMediaComponent:v,isImageComponent:-1!==O.indexOf(j)}),w=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(s.a)(n,b,t)}(k);return Object(p.jsx)(h,Object(c.a)({className:Object(r.a)(w.root,i),as:j,ref:t,style:y,styleProps:k,src:v?u||x:void 0},g,{children:o}))}));t.a=x},1146:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"e",(function(){return c})),n.d(t,"g",(function(){return o})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"c",(function(){return l}));var a=function(e,t){return fetch("https://api.klubo.club/api/documentacion/crear",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))},c=function(e,t){return fetch("https://api.klubo.club/api/documentacion/solicitud/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},o=function(e,t,n,a){return fetch("https://api.klubo.club/api/documentacion/solicitud/".concat(e,"/").concat(t,"/").concat(n),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e,t,n){return fetch("https://api.klubo.club/api/documentacion/aprobado/".concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t,n){return fetch("https://api.klubo.club/api/documentacion/rechazado/".concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},s=function(e,t){return fetch("https://api.klubo.club/api/categoria-documento/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},l=function(e,t,n){return fetch("https://api.klubo.club/api/documentacion/eliminar/solicitud/".concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))}},2252:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n.n(a),o=n(29),r=n(10),i=n(1),s=n(41),l=n(303),d=n(8),j=n(25),u=(n(841),n(840),n(824)),b=n(6),p=(n(245),n(51)),h=n(471),m=n(19),O=n(143),x=n(850),f=n(823),g=n(439),v=n(804),y=n(830),k=n.n(y),w=n(302),C=n(0),P=(Object(b.a)("input")({display:"none"}),Object(b.a)(O.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n    }\n")})),Object(b.a)(O.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),Object(h.a)((function(e){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:e.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var I=function(){var e=P(),t=(Object(u.a)().t,Object(i.useState)(!1)),n=Object(r.a)(t,2),a=(n[0],n[1]),c=(Object(w.b)().enqueueSnackbar,Object(p.a)().user,Object(i.useState)({public:!0})),o=Object(r.a)(c,2);return o[0],o[1],Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(f.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(C.jsxs)(f.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:5,className:e.margin,children:[Object(C.jsxs)(f.a,{item:!0,lg:9,xs:12,children:[Object(C.jsx)(g.a,{variant:"h1",children:"Documentaci\xf3n"}),Object(C.jsx)("div",{className:e.texto,children:"Todos los aspectos relacionados con documentaci\xf3n de usuarios de la aplicaci\xf3n se pueden gestionar desde esta p\xe1gina."})]}),Object(C.jsx)(f.a,{item:!0,lg:3,xs:12,children:Object(C.jsx)(v.a,{variant:"contained",color:"primary",startIcon:Object(C.jsx)(k.a,{}),className:e.modified,onClick:function(){a(!0)},component:m.b,to:"/admin/dashboard/documentacion/nuevo/crear",children:"Solicitar documentaci\xf3n"})})]})})})},S=(n(167),n(838)),z=n(1146),M=n(743),R=n(834),A=n(32),N=n(847),F=n(100),B=n(816),T=n(802),E=n(742),W=n(814),L=n(31),D=n(728),H=n(756),G=n(818),V=n(737),q=n(732),_=n(733),J=n(813),K=n(2263),U=n(809),Y=n(879),Q=n(875),X=n(876),Z=n(877),$=n(1309),ee=n(882),te=n(815),ne=n(849),ae=n(820),ce=n(1019),oe=n(920),re=n(986),ie=n(1101),se=n.n(ie),le=n(833),de=n.n(le),je=n(9),ue=n(843),be=n.n(ue),pe=n(829),he=n(434),me=n(805),Oe=n(299),xe=n(810),fe=n(828),ge=n.n(fe),ve=n(839),ye=n.n(ve),ke=n(859),we=n.n(ke),Ce=Object(b.a)(v.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")}));var Pe=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useRef)(null),o=Object(u.a)().t;return Object(C.jsxs)(C.Fragment,{children:[Object(C.jsxs)(O.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(O.a,{display:"flex",alignItems:"center",children:[Object(C.jsxs)(g.a,{variant:"h5",color:"text.secondary",children:[o("Bulk actions"),":"]}),Object(C.jsx)(te.a,{arrow:!0,placement:"top",title:o("Resend verification email"),children:Object(C.jsx)(W.a,{color:"primary",sx:{ml:1,p:1},children:Object(C.jsx)(we.a,{})})}),Object(C.jsx)(Ce,{sx:{ml:1},startIcon:Object(C.jsx)(ge.a,{}),variant:"contained",children:o("Delete")})]}),Object(C.jsx)(W.a,{color:"primary",onClick:function(){a(!0)},ref:c,sx:{ml:2,p:1},children:Object(C.jsx)(ye.a,{})})]}),Object(C.jsx)(he.a,{keepMounted:!0,anchorEl:c.current,open:n,onClose:function(){a(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},getContentAnchorEl:null,children:Object(C.jsxs)(me.a,{sx:{p:1},component:"nav",children:[Object(C.jsx)(Oe.b,{button:!0,children:Object(C.jsx)(xe.a,{primary:o("Bulk edit accounts")})}),Object(C.jsx)(Oe.b,{button:!0,children:Object(C.jsx)(xe.a,{primary:o("Close selected accounts")})})]})})]})},Ie=n(91),Se=n.n(Ie),ze=(n(119),Object(h.a)((function(e){return{ver:{color:"#0061F4!important"},editar:{color:"#6B64F8!important"},eliminar:{color:"#FF1A43!important"},reloj:{color:"#223354!import",opacity:"20%!important",margin:"-2px 0px!important",with:"17px!important",height:"17px!important"},textReloj:{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"normal!important",fontSize:"13px!important",lineHeight:"15px!important",color:"#223354!important"},timeReloj:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"12px",lineHeight:"135.9%",color:"rgba(34, 51, 84, 0.5)!important"},nombre:{textTransform:"capitalize!important",color:"black!important"}}}))),Me=Object(b.a)(B.a)((function(){return"\n      .MuiDialog-paper {\n        overflow: visible;\n      }\n"})),Re=Object(b.a)(T.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.error.lighter,";\n      color: ").concat(t.colors.error.main,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),Ae=Object(b.a)(E.a)((function(e){var t=e.theme;return"\n\n  position: relative;\n  overflow: visible;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n    z-index: 1;\n    transition: ".concat(t.transitions.create(["box-shadow"]),";\n  }\n      \n    &.Mui-selected::after {\n      box-shadow: 0 0 0 3px ").concat(t.colors.primary.main,";\n    }\n  ")})),Ne=Object(b.a)(v.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")})),Fe=Object(b.a)(W.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.lighter,";\n     color: ").concat(t.colors.error.main,";\n     padding: ").concat(t.spacing(.75),";\n\n     &:hover {\n      background: ").concat(Object(L.j)(t.colors.error.lighter,.4),";\n     }\n")})),Be=Object(i.forwardRef)((function(e,t){return Object(C.jsx)(D.a,Object(j.a)({direction:"down",ref:t},e))})),Te=function(e){var t={pendiente:{text:"pendiente",color:"error"},revision:{text:"revision",color:"info"},aprobado:{text:"aprobado",color:"success"}}[e],n=t.text,a=t.color;return Object(C.jsx)(pe.a,{color:a,children:n})},Ee=function(e){var t=e.projects,n=e.onChangeLoading,a=(Object(F.a)(e,["projects","onChangeLoading"]),Object(i.useState)([])),s=Object(r.a)(a,2),l=s[0],b=s[1],h=Object(u.a)().t,y=Object(w.b)().enqueueSnackbar,k=Object(i.useState)([]),P=Object(r.a)(k,2),I=P[0],S=(P[1],Object(i.useState)()),M=Object(r.a)(S,2),R=M[0],B=M[1],L=Object(i.useState)(null),D=Object(r.a)(L,2),ie=D[0],le=D[1],ue=Object(i.useState)(null),pe=Object(r.a)(ue,2),he=pe[0],me=pe[1],Oe=window.localStorage.getItem("accessToken"),xe=ze(),fe=Object(p.a)().user,ve=Object(i.useState)(0),ye=Object(r.a)(ve,2),ke=ye[0],we=ye[1],Ce=Object(i.useState)(5),Ie=Object(r.a)(Ce,2),Ee=Ie[0],We=Ie[1],Le=Object(i.useState)(""),De=Object(r.a)(Le,2),He=De[0],Ge=De[1],Ve=Object(i.useState)({status:null}),qe=Object(r.a)(Ve,2),_e=qe[0],Je=qe[1],Ke=Object(i.useState)({status:null}),Ue=Object(r.a)(Ke,2),Ye=Ue[0],Qe=Ue[1],Xe=function(){var e=Object(o.a)(c.a.mark((function e(t){var n,a,o,r,i,s;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.f)(t,Oe);case 2:n=e.sent,console.log("aca categoria",n),a=[],o=Object(N.a)(n);try{for(o.s();!(r=o.n()).done;)i=r.value,s={id:i.nombre,name:i.nombre},a.push(s)}catch(c){o.e(c)}finally{o.f()}a.unshift({id:"all",name:"Todos"}),B(a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(i.useEffect)((function(){fe&&Xe(fe.clubId)}),[]),console.log("categorias...",R);var Ze=function(e,t){we(t)},$e=function(e){We(parseInt(e.target.value))},et=function(e,t,n,a){return e.filter((function(e){var c=!0;if(t){var o=!1;["enviadoA","title","estadoDocumentacion"].forEach((function(n){e[n].toLowerCase().includes(t.toLowerCase())&&(o=!0)})),n.status&&e.status!==n.status&&(c=!1),o||(c=!1)}return Object.keys(n).forEach((function(t){var a=n[t];a&&e.estadoDocumentacion!==a&&(c=!1)})),Object.keys(a).forEach((function(t){var n=a[t];n&&e.categoria!==n&&(c=!1)})),c}))}(t,He,_e,Ye),tt=function(e,t,n){return e.slice(t*n,t*n+n)}(et,ke,Ee),nt=l.length>0,at=l.length>0&&l.length<t.length,ct=l.length===t.length,ot=Object(i.useState)("table_view"),rt=Object(r.a)(ot,2),it=rt[0],st=(rt[1],Object(i.useState)(!1)),lt=Object(r.a)(st,2),dt=lt[0],jt=lt[1],ut=function(e,t){le(e),me(t),jt(!0)},bt=function(){jt(!1)},pt=function(){var e=Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return jt(!1),console.log("...eliminado",ie),e.next=4,Object(z.c)(ie,he,Oe);case 4:t=e.sent,console.log("resultado eliminar solicitud",t),n(!0),y(h("The projects has been deleted successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:x.a});case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ht=function(e){if(null!==e||""!==e||void 0!==e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}return"error"};return console.log("aca estan los filters",I),Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(E.a,{sx:{p:1,mb:3},children:Object(C.jsxs)(f.a,{container:!0,spacing:2,children:[Object(C.jsx)(f.a,{item:!0,xs:12,children:Object(C.jsx)(O.a,{p:1,children:Object(C.jsx)(H.a,{sx:{m:0},InputProps:{startAdornment:Object(C.jsx)(G.a,{position:"start",children:Object(C.jsx)(Se.a,{})})},onChange:function(e){e.persist(),Ge(e.target.value)},placeholder:h("Buscar documentaci\xf3n"),value:He,fullWidth:!0,variant:"outlined"})})}),Object(C.jsx)(f.a,{item:!0,xs:12,sm:3,mt:1,md:3,children:Object(C.jsxs)(V.a,{fullWidth:!0,variant:"outlined",children:[Object(C.jsx)(q.a,{children:h("Categoria")}),Object(C.jsx)(_.a,{value:Ye.status||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),Qe((function(e){return Object(j.a)(Object(j.a)({},e),{},{status:t})}))},label:h("Categoria"),children:R&&R.map((function(e){return Object(C.jsx)(J.a,{value:e.id,children:e.name},e.id)}))})]})}),Object(C.jsx)(f.a,{item:!0,xs:12,sm:6,md:3,children:Object(C.jsx)(O.a,{p:1,children:Object(C.jsxs)(V.a,{fullWidth:!0,variant:"outlined",children:[Object(C.jsx)(q.a,{children:h("Estado")}),Object(C.jsx)(_.a,{value:_e.status||"all",onChange:function(e){var t=null;"all"!==e.target.value&&(t=e.target.value),Je((function(e){return Object(j.a)(Object(j.a)({},e),{},{status:t})}))},label:h("Status"),children:[{id:"all",name:"Todos"},{id:"revision",name:"revision"},{id:"pendiente",name:"pendiente"},{id:"aprobado",name:"aprobado"}].map((function(e){return Object(C.jsx)(J.a,{value:e.id,children:e.name},e.id)}))})]})})}),Object(C.jsx)(f.a,{item:!0,xs:12,md:3,display:"flex",justifyContent:{xs:"center",md:"flex-end"}})]})}),"table_view"===it&&Object(C.jsxs)(E.a,{children:[nt&&Object(C.jsx)(O.a,{p:2,children:Object(C.jsx)(Pe,{})}),!nt&&Object(C.jsxs)(O.a,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(g.a,{component:"span",variant:"subtitle1",children:[h("Mostrando"),":"]})," ",Object(C.jsx)("b",{children:tt.length})," ",Object(C.jsx)("b",{children:h("documentos")})]}),Object(C.jsx)(K.a,{component:"div",count:et.length,onPageChange:Ze,onRowsPerPageChange:$e,page:ke,rowsPerPage:Ee,rowsPerPageOptions:[5,10,15],labelRowsPerPage:"Documentos por p\xe1gina"})]}),Object(C.jsx)(U.a,{}),0===tt.length?Object(C.jsx)(C.Fragment,{children:Object(C.jsx)(g.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:h("We couldn't find any projects matching your search criteria")})}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(Y.a,{children:Object(C.jsxs)(Q.a,{children:[Object(C.jsx)(X.a,{children:Object(C.jsxs)(Z.a,{children:[Object(C.jsx)($.a,{className:xe.nombre,children:h("Nombre")}),Object(C.jsx)($.a,{className:xe.nombre,children:h("Titulo")}),Object(C.jsx)($.a,{className:xe.nombre,children:h("Categoria")}),Object(C.jsx)($.a,{className:xe.nombre,children:h("Fecha de Recepci\xf3n")}),Object(C.jsx)($.a,{className:xe.nombre,children:h("Estado")}),Object(C.jsx)($.a,{className:xe.nombre,children:h("Acciones")})]})}),Object(C.jsx)(ee.a,{children:tt.map((function(e){var t=l.includes(e.id);return Object(C.jsxs)(Z.a,{hover:!0,selected:t,children:[Object(C.jsx)($.a,{children:Object(C.jsx)(g.a,{children:Object(C.jsxs)(O.a,{display:"flex",alignItems:"center",children:[Object(C.jsx)(T.a,{sx:{mr:1},src:e.avatar}),Object(C.jsx)(O.a,{className:xe.deporte,variant:"h5",children:Object(C.jsx)(g.a,{variant:"h5",children:e.enviadoA})})]})})}),Object(C.jsx)($.a,{children:Object(C.jsx)(g.a,{variant:"h5",children:e.title})}),Object(C.jsx)($.a,{children:Object(C.jsx)(g.a,{variant:"h5",children:e.categoria})}),Object(C.jsxs)($.a,{noWrap:!0,variant:"h6",gutterBottom:!0,children:[Object(C.jsxs)(g.a,{variant:"subtitle1",color:"text.primary",children:[" ",e.fecha&&ht(e.fecha)]}),Object(C.jsxs)(g.a,{color:"text.secondary",className:xe.timeReloj,children:[Object(C.jsx)(se.a,{className:xe.reloj}),"hora de envio ".concat(e.hora&&e.hora)]})]}),Object(C.jsx)($.a,{children:Object(C.jsx)(g.a,{noWrap:!0,children:Te(e.estadoDocumentacion)})}),Object(C.jsx)($.a,{children:Object(C.jsxs)(g.a,{noWrap:!0,children:[Object(C.jsx)(te.a,{title:h("View"),arrow:!0,children:Object(C.jsx)(W.a,{component:m.b,to:"/admin/dashboard/documentacion/usuario/".concat(e.usuarioId,"/").concat(e.solicituddocumentoId),color:"primary",className:xe.ver,children:Object(C.jsx)(be.a,{fontSize:"small"})})}),Object(C.jsx)(te.a,{title:h("Delete"),arrow:!0,children:Object(C.jsx)(W.a,{onClick:function(){return ut(e.solicituddocumentoId,e.usuarioId)},className:xe.eliminar,children:Object(C.jsx)(ge.a,{fontSize:"small"})})})]})})]},e.id)}))})]})}),Object(C.jsx)(O.a,{p:2,children:Object(C.jsx)(K.a,{component:"div",count:et.length,onPageChange:Ze,onRowsPerPageChange:$e,page:ke,rowsPerPage:Ee,rowsPerPageOptions:[5,10,15],labelRowsPerPage:"Documentos por p\xe1gina"})})]})]}),"grid_view"===it&&Object(C.jsxs)(C.Fragment,{children:[0!==tt.length&&Object(C.jsx)(E.a,{sx:{p:2,mb:3},children:Object(C.jsx)(O.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(O.a,{display:"flex",alignItems:"center",children:Object(C.jsx)(te.a,{arrow:!0,placement:"top",title:h("Select all projects"),children:Object(C.jsx)(ne.a,{checked:ct,indeterminate:at,onChange:function(e){b(e.target.checked?t.map((function(e){return e.id})):[])}})})}),nt&&Object(C.jsx)(O.a,{flex:1,pl:2,children:Object(C.jsx)(Pe,{})}),!nt&&Object(C.jsx)(K.a,{component:"div",count:et.length,onPageChange:Ze,onRowsPerPageChange:$e,page:ke,rowsPerPage:Ee,rowsPerPageOptions:[5,10,15]})]})})}),0===tt.length?Object(C.jsx)(g.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:h("We couldn't find any projects matching your search criteria")}):Object(C.jsxs)(C.Fragment,{children:[Object(C.jsx)(f.a,{container:!0,spacing:3,children:tt.map((function(e){var t=l.includes(e.id);return Object(C.jsx)(f.a,{item:!0,xs:12,sm:6,md:4,children:Object(C.jsx)(Ae,{className:Object(je.a)({"Mui-selected":t}),children:Object(C.jsxs)(O.a,{sx:{position:"relative",zIndex:"2"},children:[Object(C.jsxs)(O.a,{pl:2,py:1,pr:1,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(g.a,{component:"span",children:[Object(C.jsxs)("b",{children:[h("Tags"),":"]})," "]}),e.tags.map((function(e){return Object(C.jsxs)("span",{children:[Object(C.jsx)(ae.a,{href:"#",children:e}),","," "]},e)}))]}),Object(C.jsx)(ne.a,{checked:t,onChange:function(t){return n=e.id,void(l.includes(n)?b((function(e){return e.filter((function(e){return e!==n}))})):b((function(e){return[].concat(Object(A.a)(e),[n])})));var n},value:t})]}),Object(C.jsx)(U.a,{}),Object(C.jsx)(ce.a,{sx:{minHeight:180},image:e.screenshot}),Object(C.jsx)(U.a,{}),Object(C.jsxs)(O.a,{p:2,children:[Te(e.status),Object(C.jsx)(g.a,{sx:{mt:2},variant:"h4",gutterBottom:!0,children:e.name}),Object(C.jsx)(g.a,{noWrap:!0,variant:"subtitle2",children:e.description})]}),Object(C.jsxs)(O.a,{px:2,display:"flex",alignItems:"flex-end",justifyContent:"space-between",children:[Object(C.jsxs)(O.a,{children:[Object(C.jsxs)(g.a,{variant:"subtitle2",children:[h("Started"),":"," "]}),Object(C.jsx)(g.a,{variant:"h5",children:e.fecha&&ht(e.fecha)})]}),Object(C.jsx)(O.a,{children:Object(C.jsxs)(g.a,{variant:"subtitle2",children:[h("Due in"),":"," "]})})]}),Object(C.jsxs)(O.a,{px:2,pb:2,display:"flex",alignItems:"center",children:[Object(C.jsx)(oe.a,{sx:{flex:1,mr:1},value:e.progress,color:"primary",variant:"determinate"}),Object(C.jsxs)(g.a,{variant:"subtitle1",children:[e.progress,"%"]})]}),Object(C.jsx)(U.a,{}),Object(C.jsxs)(O.a,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(C.jsx)(O.a,{display:"flex",justifyContent:"flex-start",children:e.memberIds.length>0&&Object(C.jsx)(re.a,{max:4,children:e.memberIds.map((function(e){return Object(C.jsx)(te.a,{arrow:!0,placement:"top",title:e.name,children:Object(C.jsx)(T.a,{sx:{width:30,height:30},src:e.avatar},e.id)},e.id)}))})}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(v.a,{sx:{mr:1},size:"small",variant:"contained",color:"primary",children:h("Edit")}),Object(C.jsx)(te.a,{title:h("Delete"),arrow:!0,children:Object(C.jsx)(Fe,{onClick:ut,color:"primary",children:Object(C.jsx)(ge.a,{fontSize:"small"})})})]})]})]})})},e.name)}))}),Object(C.jsxs)(E.a,{sx:{p:2,mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(C.jsxs)(O.a,{children:[Object(C.jsx)(g.a,{component:"span",variant:"subtitle1",children:h("Mostrando")})," ",Object(C.jsx)("b",{children:Ee})," ",h("of")," ",Object(C.jsx)("b",{children:et.length})," ",Object(C.jsx)("b",{children:h("documentos")})]}),Object(C.jsx)(K.a,Object(d.a)({component:"div",count:et.length,onPageChange:Ze,onRowsPerPageChange:$e,page:ke,rowsPerPage:Ee,labelRowsPerPage:"",rowsPerPageOptions:[5,10,15]},"labelRowsPerPage","Documentos por p\xe1gina"))]})]})]}),!it&&Object(C.jsx)(E.a,{sx:{textAlign:"center",p:3},children:Object(C.jsx)(g.a,{align:"center",variant:"h4",fontWeight:"normal",color:"text.secondary",sx:{my:5},gutterBottom:!0,children:h("Choose between table or grid views for displaying the projects list.")})}),Object(C.jsx)(Me,{open:dt,maxWidth:"sm",fullWidth:!0,TransitionComponent:Be,keepMounted:!0,onClose:bt,children:Object(C.jsxs)(O.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:5,children:[Object(C.jsx)(Re,{children:Object(C.jsx)(de.a,{})}),Object(C.jsxs)(g.a,{align:"center",sx:{pt:4,px:6},variant:"h1",children:[h("Do you really want to delete this project"),"?"]}),Object(C.jsx)(g.a,{align:"center",sx:{pt:2,pb:4,px:6},fontWeight:"normal",color:"text.secondary",variant:"h3",children:h("You won't be able to revert after deletion")}),Object(C.jsxs)(O.a,{children:[Object(C.jsx)(v.a,{variant:"text",size:"large",sx:{mx:1},onClick:bt,children:h("Cancel")}),Object(C.jsx)(Ne,{onClick:pt,size:"large",sx:{mx:1,px:3},variant:"contained",children:h("Delete")})]})]})})]})};Ee.defaultProps={projects:[]};var We=Ee;t.default=function(){var e=Object(p.a)().user,t=window.localStorage.getItem("accessToken"),n=Object(R.a)(),a=Object(i.useState)([]),d=Object(r.a)(a,2),j=(d[0],d[1]),u=Object(i.useState)([]),b=Object(r.a)(u,2),h=b[0],m=b[1],x=Object(i.useState)(!1),g=Object(r.a)(x,2),v=g[0],y=g[1],k=Object(i.useCallback)(Object(o.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/projects");case 3:t=e.sent,n.current&&j(t.data.projects),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[n]),w=function(){var e=Object(o.a)(c.a.mark((function e(n){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(z.e)(n,t);case 2:a=e.sent,m(a),console.log("resultao llamada",a);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(i.useEffect)((function(){e&&w(e.clubId)}),[]),Object(i.useEffect)((function(){!0===v&&(w(e.clubId),y(!1))}),[v]),Object(i.useEffect)((function(){k()}),[k]),Object(C.jsxs)(l.a,{title:"Klubo | documentaci\xf3n",children:[Object(C.jsx)(S.a,{children:Object(C.jsx)(I,{})}),Object(C.jsxs)(M.a,{maxWidth:"lg",children:[Object(C.jsx)(f.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(C.jsx)(f.a,{item:!0,xs:12,children:Object(C.jsx)(We,{projects:h,onChangeLoading:function(e){y(e)}})})}),Object(C.jsx)(O.a,{m:5})]})]})}},829:function(e,t,n){"use strict";var a=n(25),c=n(100),o=n(6),r=n(0),i=Object(o.a)("span")((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.alpha.black[5],";\n      padding: ").concat(t.spacing(.5,1),";\n      font-size: ").concat(t.typography.pxToRem(13),";\n      border-radius: ").concat(t.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(t.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(t.colors.primary.lighter,";\n          color: ").concat(t.palette.primary.main,"\n        }\n        \n        &-secondary {\n          background-color: ").concat(t.colors.secondary.lighter,";\n          color: ").concat(t.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(t.colors.success.lighter,";\n          color: ").concat(t.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(t.colors.warning.lighter,";\n          color: ").concat(t.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(t.colors.error.lighter,";\n          color: ").concat(t.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(t.colors.info.lighter,";\n          color: ").concat(t.palette.info.main,"\n        }\n      }\n")}));t.a=function(e){e.className;var t=e.color,n=void 0===t?"secondary":t,o=e.children,s=Object(c.a)(e,["className","color","children"]);return Object(r.jsx)(i,Object(a.a)(Object(a.a)({className:"MuiLabel-"+n},s),{},{children:o}))}},830:function(e,t,n){"use strict";var a=n(20),c=n(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;c(n(1));var o=a(n(22)),r=n(0),i=(0,o.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.default=i},831:function(e,t,n){"use strict";var a=n(10),c=n(2),o=n(3),r=n(1),i=(n(5),n(9)),s=n(720),l=n(6),d=n(120),j=n(76),u=n(814),b=n(435),p=n(721);function h(e){return Object(b.a)("PrivateSwitchBase",e)}Object(p.a)("PrivateSwitchBase",["root","checked","disabled","input"]);var m=n(0),O=Object(l.a)(u.a)({padding:9}),x=Object(l.a)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),f=r.forwardRef((function(e,t){var n=e.autoFocus,r=e.checked,l=e.checkedIcon,u=e.className,b=e.defaultChecked,p=e.disabled,f=e.icon,g=e.id,v=e.inputProps,y=e.inputRef,k=e.name,w=e.onBlur,C=e.onChange,P=e.onFocus,I=e.readOnly,S=e.required,z=e.tabIndex,M=e.type,R=e.value,A=Object(o.a)(e,["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(d.a)({controlled:r,default:Boolean(b),name:"SwitchBase",state:"checked"}),F=Object(a.a)(N,2),B=F[0],T=F[1],E=Object(j.a)(),W=p;E&&"undefined"===typeof W&&(W=E.disabled);var L="checkbox"===M||"radio"===M,D=Object(c.a)({},e,{checked:B,disabled:W}),H=function(e){var t=e.classes,n={root:["root",e.checked&&"checked",e.disabled&&"disabled"],input:["input"]};return Object(s.a)(n,h,t)}(D);return Object(m.jsxs)(O,Object(c.a)({component:"span",className:Object(i.a)(H.root,u),disabled:W,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),E&&E.onFocus&&E.onFocus(e)},onBlur:function(e){w&&w(e),E&&E.onBlur&&E.onBlur(e)},styleProps:D,ref:t},A,{children:[Object(m.jsx)(x,Object(c.a)({autoFocus:n,checked:r,defaultChecked:b,className:H.input,disabled:W,id:L&&g,name:k,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;T(t),C&&C(e,t)}},readOnly:I,ref:y,required:S,styleProps:D,tabIndex:z,type:M,value:R},v)),B?l:f]}))}));t.a=f},834:function(e,t,n){"use strict";var a=n(1);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},838:function(e,t,n){"use strict";var a=n(743),c=n(6),o=n(143),r=n(0),i=Object(c.a)(o.a)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4,0),";\n")}));t.a=function(e){var t=e.children;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(i,{children:Object(r.jsx)(a.a,{maxWidth:"lg",children:t})})})}},849:function(e,t,n){"use strict";var a=n(8),c=n(3),o=n(2),r=n(1),i=(n(5),n(242)),s=n(720),l=n(831),d=n(118),j=n(0),u=Object(d.a)(Object(j.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=n(31),h=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(12),O=n(13),x=n(6),f=n(435),g=n(721);function v(e){return Object(f.a)("MuiCheckbox",e)}var y=Object(g.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=Object(x.a)(l.a,{shouldForwardProp:function(e){return Object(x.b)(e)||"classes"===e}},{name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps;return Object(i.a)(Object(o.a)({},n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(m.a)(n.color))]),t.root||{})}})((function(e){var t,n=e.theme,c=e.styleProps;return Object(o.a)({color:n.palette.text.secondary},"default"!==c.color&&(t={},Object(a.a)(t,"&.Mui-checked, &.".concat(y.indeterminate),{color:n.palette[c.color].main,"&:hover":{backgroundColor:Object(p.a)(n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),Object(a.a)(t,"&.Mui-disabled",{color:n.palette.action.disabled}),t))})),w=Object(j.jsx)(b,{}),C=Object(j.jsx)(u,{}),P=Object(j.jsx)(h,{}),I=r.forwardRef((function(e,t){var n=Object(O.a)({props:e,name:"MuiCheckbox"}),a=n.checkedIcon,i=void 0===a?w:a,l=n.color,d=void 0===l?"secondary":l,u=n.icon,b=void 0===u?C:u,p=n.indeterminate,h=void 0!==p&&p,x=n.indeterminateIcon,f=void 0===x?P:x,g=n.inputProps,y=n.size,I=void 0===y?"medium":y,S=Object(c.a)(n,["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),z=h?f:b,M=h?f:i,R=Object(o.a)({},n,{color:d,indeterminate:h,size:I}),A=function(e){var t=e.classes,n=e.indeterminate,a=e.color,c={root:["root",n&&"indeterminate","color".concat(Object(m.a)(a))]},r=Object(s.a)(c,v,t);return Object(o.a)({},t,r)}(R);return Object(j.jsx)(k,Object(o.a)({type:"checkbox",color:d,inputProps:Object(o.a)({"data-indeterminate":h},g),icon:r.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"medium"!==I?I:z.props.fontSize}),checkedIcon:r.cloneElement(M,{fontSize:void 0===M.props.fontSize&&"medium"!==I?I:M.props.fontSize}),styleProps:R,ref:t},S,{classes:A}))}));t.a=I},949:function(e,t,n){"use strict";n(1);var a=n(118),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},950:function(e,t,n){"use strict";n(1);var a=n(118),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},986:function(e,t,n){"use strict";var a=n(8),c=n(2),o=n(3),r=n(1),i=(n(5),n(249),n(9)),s=n(242),l=n(720),d=n(6),j=n(13),u=n(802),b=n(435),p=n(721);function h(e){return Object(b.a)("MuiAvatarGroup",e)}var m=Object(p.a)("MuiAvatarGroup",["root","avatar"]),O=n(0),x={small:-16,medium:null},f=Object(d.a)("div",{},{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return Object(s.a)(Object(a.a)({},"& .".concat(m.avatar),t.avatar),t.root||{})}})((function(e){var t,n=e.theme;return t={},Object(a.a)(t,"& .MuiAvatar-root",{border:"2px solid ".concat(n.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(a.a)(t,"display","flex"),Object(a.a)(t,"flexDirection","row-reverse"),t})),g=Object(d.a)(u.a,{},{name:"MuiAvatarGroup",slot:"Avatar"})((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),v=r.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiAvatarGroup"}),a=n.children,s=n.className,d=n.max,u=void 0===d?5:d,b=n.spacing,p=void 0===b?"medium":b,m=n.variant,v=void 0===m?"circular":m,y=Object(o.a)(n,["children","className","max","spacing","variant"]),k=u<2?2:u,w=Object(c.a)({},n,{max:u,spacing:p,variant:v}),C=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"]},h,t)}(w),P=r.Children.toArray(a).filter((function(e){return r.isValidElement(e)})),I=P.length>k?P.length-k+1:0,S=p&&void 0!==x[p]?x[p]:-p;return Object(O.jsxs)(f,Object(c.a)({styleProps:w,className:Object(i.a)(C.root,s),ref:t},y,{children:[I?Object(O.jsxs)(g,{styleProps:w,className:C.avatar,style:{marginLeft:S},variant:v,children:["+",I]}):null,P.slice(0,P.length-I).reverse().map((function(e){return r.cloneElement(e,{className:Object(i.a)(e.props.className,C.avatar),style:Object(c.a)({marginLeft:S},e.props.style),variant:e.props.variant||v})}))]}))}));t.a=v}}]);
//# sourceMappingURL=103.f7b69c91.chunk.js.map