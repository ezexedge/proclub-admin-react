(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[104],{1026:function(e,t,n){"use strict";var a=n(3),c=n(2),r=n(1),o=(n(5),n(9)),i=n(245),s=n(724),l=n(13),d=n(6),j=n(439),u=n(725);function b(e){return Object(j.a)("MuiCardMedia",e)}Object(u.a)("MuiCardMedia",["root","media","img"]);var p=n(0),h=Object(d.a)("div",{},{name:"MuiCardMedia",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps,a=n.isMediaComponent,r=n.isImageComponent;return Object(i.a)(Object(c.a)({},a&&t.media,r&&t.img),t.root||{})}})((function(e){var t=e.styleProps;return Object(c.a)({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},t.isMediaComponent&&{width:"100%"},t.isImageComponent&&{objectFit:"cover"})})),m=["video","audio","picture","iframe","img"],x=["picture","img"],O=r.forwardRef((function(e,t){var n=Object(l.a)({props:e,name:"MuiCardMedia"}),r=n.children,i=n.className,d=n.component,j=void 0===d?"div":d,u=n.image,O=n.src,f=n.style,g=Object(a.a)(n,["children","className","component","image","src","style"]),v=-1!==m.indexOf(j),y=!v&&u?Object(c.a)({backgroundImage:'url("'.concat(u,'")')},f):f,k=Object(c.a)({},n,{component:j,isMediaComponent:v,isImageComponent:-1!==x.indexOf(j)}),w=function(e){var t=e.classes,n={root:["root",e.isMediaComponent&&"media",e.isImageComponent&&"img"]};return Object(s.a)(n,b,t)}(k);return Object(p.jsx)(h,Object(c.a)({className:Object(o.a)(w.root,i),as:j,ref:t,style:y,styleProps:k,src:v?u||O:void 0},g,{children:r}))}));t.a=O},1045:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"a",(function(){return c})),n.d(t,"d",(function(){return r})),n.d(t,"b",(function(){return o}));var a=function(e,t){return fetch("https://api.klubo.club/api/club/encuesta/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e){return fetch("https://api.klubo.club/api/encuesta-admin/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json"}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e){return fetch("https://api.klubo.club/api/encuesta-superadmin",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},o=function(e,t){return fetch("https://api.klubo.club/api/encuesta/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},2262:function(e,t,n){"use strict";n.r(t);var a=n(17),c=n.n(a),r=n(29),o=n(10),i=n(1),s=n(41),l=n(306),d=(n(8),n(25)),j=(n(845),n(844),n(828)),u=n(6),b=(n(248),n(51)),p=n(476),h=n(19),m=n(145),x=n(854),O=n(827),f=n(443),g=n(808),v=n(834),y=n.n(v),k=n(305),w=n(0),C=(Object(u.a)("input")({display:"none"}),Object(u.a)(m.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n    }\n")})),Object(u.a)(m.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),Object(p.a)((function(e){return{modified:{height:"50px!important",width:"auto",padding:"22px, 32px, 22px, 32px"},modified2:{height:"50px!important",width:"160px",padding:"22px, 32px, 22px, 32px",marginLeft:"7px!important"},extendedIcon:{marginRight:e.spacing(1)},margin:{marginTop:"0px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var P=function(){var e=C(),t=(Object(j.a)().t,Object(i.useState)(!1)),n=Object(o.a)(t,2),a=(n[0],n[1]),c=(Object(k.b)().enqueueSnackbar,Object(b.a)().user,Object(i.useState)({public:!0})),r=Object(o.a)(c,2);return r[0],r[1],Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(O.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(w.jsxs)(O.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:2,className:e.margin,children:[Object(w.jsxs)(O.a,{item:!0,lg:7,xs:12,children:[Object(w.jsx)(f.a,{variant:"h1",children:" Encuestas "}),Object(w.jsx)("div",{className:e.texto,children:"Todos los aspectos relacionados con encuestas de la aplicaci\xf3n se pueden gestionar desde esta p\xe1gina."})]}),Object(w.jsx)(O.a,{item:!0,lg:5,xs:12,display:"flex",justifyContent:"flex-end",children:Object(w.jsx)(g.a,{variant:"contained",color:"primary",className:e.modified,onClick:function(){a(!0)},component:h.b,to:"/admin/dashboard/encuesta/nuevo/crear",startIcon:Object(w.jsx)(y.a,{}),children:"Agregar una encuesta"})})]})})})},I=(n(169),n(842)),M=n(1045),z=n(747),S=n(839),R=n(32),F=n(100),N=n(820),E=n(806),A=n(746),B=n(818),T=n(31),W=n(732),L=n(760),D=n(822),G=n(2269),H=n(813),V=n(884),_=n(879),q=n(880),K=n(881),J=n(1332),Y=n(882),Q=n(819),U=n(853),X=n(824),Z=n(1026),$=n(929),ee=n(996),te=n(1110),ne=n.n(te),ae=n(838),ce=n.n(ae),re=n(9),oe=n(847),ie=n.n(oe),se=n(833),le=n(438),de=n(809),je=n(302),ue=n(814),be=n(832),pe=n.n(be),he=n(843),me=n.n(he),xe=n(865),Oe=n.n(xe),fe=Object(u.a)(g.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")}));var ge=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(i.useRef)(null),r=Object(j.a)().t;return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsxs)(m.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(w.jsxs)(m.a,{display:"flex",alignItems:"center",children:[Object(w.jsxs)(f.a,{variant:"h5",color:"text.secondary",children:[r("Bulk actions"),":"]}),Object(w.jsx)(Q.a,{arrow:!0,placement:"top",title:r("Resend verification email"),children:Object(w.jsx)(B.a,{color:"primary",sx:{ml:1,p:1},children:Object(w.jsx)(Oe.a,{})})}),Object(w.jsx)(fe,{sx:{ml:1},startIcon:Object(w.jsx)(pe.a,{}),variant:"contained",children:r("Delete")})]}),Object(w.jsx)(B.a,{color:"primary",onClick:function(){a(!0)},ref:c,sx:{ml:2,p:1},children:Object(w.jsx)(me.a,{})})]}),Object(w.jsx)(le.a,{keepMounted:!0,anchorEl:c.current,open:n,onClose:function(){a(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},getContentAnchorEl:null,children:Object(w.jsxs)(de.a,{sx:{p:1},component:"nav",children:[Object(w.jsx)(je.b,{button:!0,children:Object(w.jsx)(ue.a,{primary:r("Bulk edit accounts")})}),Object(w.jsx)(je.b,{button:!0,children:Object(w.jsx)(ue.a,{primary:r("Close selected accounts")})})]})})]})},ve=n(91),ye=n.n(ve),ke=n(437),we=n(826),Ce=n(119),Pe=Object(p.a)((function(e){return{ver:{color:"#0061F4!important"},editar:{color:"#6B64F8!important"},eliminar:{color:"#FF1A43!important"},reloj:{color:"#223354!import",opacity:"20%!important",margin:"-2px 0px!important",with:"17px!important",height:"17px!important"},textReloj:{fontFamily:"Roboto!important",fontStyle:"normal!important",fontWeight:"normal!important",fontSize:"13px!important",lineHeight:"15px!important",color:"#223354!important"},timeReloj:{fontFamily:"Roboto",fontStyle:"normal",fontWeight:"normal",fontSize:"12px",lineHeight:"135.9%",color:"rgba(34, 51, 84, 0.5)!important"},nombre:{textTransform:"capitalize!important",color:"black!important"}}})),Ie=Object(u.a)(N.a)((function(){return"\n      .MuiDialog-paper {\n        overflow: visible;\n      }\n"})),Me=Object(u.a)(E.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.error.lighter,";\n      color: ").concat(t.colors.error.main,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),ze=Object(u.a)(A.a)((function(e){var t=e.theme;return"\n\n  position: relative;\n  overflow: visible;\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    border-radius: inherit;\n    z-index: 1;\n    transition: ".concat(t.transitions.create(["box-shadow"]),";\n  }\n      \n    &.Mui-selected::after {\n      box-shadow: 0 0 0 3px ").concat(t.colors.primary.main,";\n    }\n  ")})),Se=Object(u.a)(g.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.main,";\n     color: ").concat(t.palette.error.contrastText,";\n\n     &:hover {\n        background: ").concat(t.colors.error.dark,";\n     }\n    ")})),Re=Object(u.a)(B.a)((function(e){var t=e.theme;return"\n     background: ".concat(t.colors.error.lighter,";\n     color: ").concat(t.colors.error.main,";\n     padding: ").concat(t.spacing(.75),";\n\n     &:hover {\n      background: ").concat(Object(T.j)(t.colors.error.lighter,.4),";\n     }\n")})),Fe=Object(i.forwardRef)((function(e,t){return Object(w.jsx)(W.a,Object(d.a)({direction:"down",ref:t},e))})),Ne=function(e){var t={not_started:{text:"Tem\xe1tica 2",color:"error"},in_progress:{text:"In progress",color:"info"},completed:{text:"Tem\xe1tica 1",color:"success"}}[e],n=t.text,a=t.color;return Object(w.jsx)(se.a,{color:a,children:n})},Ee=function(e){var t=e.projects,n=(Object(F.a)(e,["projects"]),Object(i.useState)([])),a=Object(o.a)(n,2),c=a[0],r=a[1],s=Object(j.a)().t,l=Object(k.b)().enqueueSnackbar,d=Pe(),u=Object(i.useState)(0),b=Object(o.a)(u,2),p=b[0],v=b[1],y=Object(i.useState)(5),C=Object(o.a)(y,2),P=C[0],I=C[1],M=Object(i.useState)(""),z=Object(o.a)(M,2),S=z[0],N=z[1],T=Object(i.useState)({status:null}),W=Object(o.a)(T,2),te=W[0],ae=(W[1],s("Enviada"),s("Cancelada"),function(e,t){v(t)}),oe=function(e){I(parseInt(e.target.value))},le=function(e,t,n){return e.filter((function(e){var a=!0;if(t){var c=!1;["name"].forEach((function(n){e[n].toLowerCase().includes(t.toLowerCase())&&(c=!0)})),n.status&&e.status!==n.status&&(a=!1),c||(a=!1)}return Object.keys(n).forEach((function(t){var c=n[t];c&&e[t]!==c&&(a=!1)})),a}))}(t,S,te),de=function(e,t,n){return e.slice(t*n,t*n+n)}(le,p,P),je=c.length>0,ue=c.length>0&&c.length<t.length,be=c.length===t.length,he=Object(i.useState)("table_view"),me=Object(o.a)(he,2),xe=me[0],Oe=(me[1],Object(i.useState)(!1)),fe=Object(o.a)(Oe,2),ve=fe[0],Ee=fe[1],Ae=function(){Ee(!0)},Be=function(){Ee(!1)},Te=function(e){if(null!==e||""!==e||void 0!==e){var t=e.split("-");return"".concat(t[2],"/").concat(t[1],"/").concat(t[0])}return"error"};return Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(A.a,{sx:{p:1,mb:3},children:Object(w.jsxs)(O.a,{container:!0,spacing:2,children:[Object(w.jsx)(O.a,{item:!0,xs:12,children:Object(w.jsx)(m.a,{p:1,children:Object(w.jsx)(L.a,{sx:{m:0},InputProps:{startAdornment:Object(w.jsx)(D.a,{position:"start",children:Object(w.jsx)(ye.a,{})})},onChange:function(e){e.persist(),N(e.target.value)},placeholder:s("Buscar encuesta"),value:S,fullWidth:!0,variant:"outlined"})})}),Object(w.jsx)(O.a,{item:!0,xs:12,md:3,display:"flex",justifyContent:{xs:"center",md:"flex-end"}})]})}),"table_view"===xe&&Object(w.jsxs)(A.a,{children:[je&&Object(w.jsx)(m.a,{p:2,children:Object(w.jsx)(ge,{})}),!je&&Object(w.jsxs)(m.a,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(f.a,{component:"span",variant:"subtitle1",children:[s("Mostrando"),":"]})," ",Object(w.jsx)("b",{children:de.length})," ",Object(w.jsx)("b",{children:s("Encuestas")})]}),Object(w.jsx)(G.a,{component:"div",count:le.length,onPageChange:ae,onRowsPerPageChange:oe,page:p,rowsPerPage:P,rowsPerPageOptions:[5,10,15],labelRowsPerPage:"Encuestas por p\xe1gina"})]}),Object(w.jsx)(H.a,{}),0===de.length?Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(f.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:s("We couldn't find any projects matching your search criteria")})}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(V.a,{children:Object(w.jsxs)(_.a,{children:[Object(w.jsx)(q.a,{children:Object(w.jsxs)(K.a,{children:[Object(w.jsx)(J.a,{className:d.nombre,children:s("T\xedtulo")}),Object(w.jsx)(J.a,{className:d.nombre,children:s("Enviado por")}),Object(w.jsx)(J.a,{className:d.nombre,children:s("Fecha De Env\xedo")}),Object(w.jsx)(J.a,{className:d.nombre,children:s("Enviado")}),Object(w.jsx)(J.a,{className:d.nombre,children:s("Acciones")})]})}),Object(w.jsx)(Y.a,{children:de.map((function(e){var t=c.includes(e.id);return Object(w.jsxs)(K.a,{hover:!0,selected:t,children:[Object(w.jsx)(J.a,{className:d.capitalize,children:Object(w.jsx)(f.a,{noWrap:!0,variant:"h5",children:e.titulo&&e.titulo.length>130?e.titulo.substring(0,50)+"....":e.titulo})}),Object(w.jsx)(J.a,{className:d.capitalize,children:Object(w.jsx)(f.a,{variant:"h6",gutterBottom:!0,children:e.enviadoPor})}),Object(w.jsxs)(J.a,{className:d.capitalize,children:[Object(w.jsx)(f.a,{noWrap:!0,variant:"subtitle1",color:"text.primary",ml:1,children:"".concat(e&&Te(e.fecha))}),Object(w.jsxs)(f.a,{color:"text.secondary",className:d.timeReloj,children:[Object(w.jsx)(ne.a,{className:d.reloj}),"hora de envio ".concat(e&&e.hora)]})]}),Object(w.jsx)(J.a,{noWrap:!0,children:Object(w.jsx)(se.a,{color:"success",children:Object(w.jsx)(f.a,{color:"success",noWrap:!0,children:"".concat(e&&e.cantidadEnviados," usuarios")})})}),Object(w.jsx)(J.a,{children:Object(w.jsx)(f.a,{noWrap:!0,children:Object(w.jsx)(Q.a,{title:s("Ver"),arrow:!0,children:Object(w.jsx)(B.a,{component:h.b,to:"/admin/dashboard/encuesta/"+e.encuestaId,className:d.ver,children:Object(w.jsx)(ie.a,{fontSize:"small"})})})})})]},e.id)}))})]})}),Object(w.jsx)(m.a,{p:2,children:Object(w.jsx)(G.a,{component:"div",count:le.length,onPageChange:ae,onRowsPerPageChange:oe,page:p,rowsPerPage:P,rowsPerPageOptions:[5,10,15],labelRowsPerPage:"Encuestas por p\xe1gina"})})]})]}),"grid_view"===xe&&Object(w.jsxs)(w.Fragment,{children:[0!==de.length&&Object(w.jsx)(A.a,{sx:{p:2,mb:3},children:Object(w.jsx)(m.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(m.a,{display:"flex",alignItems:"center",children:Object(w.jsx)(Q.a,{arrow:!0,placement:"top",title:s("Select all projects"),children:Object(w.jsx)(U.a,{checked:be,indeterminate:ue,onChange:function(e){r(e.target.checked?t.map((function(e){return e.id})):[])}})})}),je&&Object(w.jsx)(m.a,{flex:1,pl:2,children:Object(w.jsx)(ge,{})}),!je&&Object(w.jsx)(G.a,{component:"div",count:le.length,onPageChange:ae,onRowsPerPageChange:oe,page:p,rowsPerPage:P,rowsPerPageOptions:[5,10,15]})]})})}),0===de.length?Object(w.jsx)(f.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:s("We couldn't find any projects matching your search criteria")}):Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(O.a,{container:!0,spacing:3,children:de.map((function(e){var t=c.includes(e.id);return Object(w.jsx)(O.a,{item:!0,xs:12,sm:6,md:4,children:Object(w.jsx)(ze,{className:Object(re.a)({"Mui-selected":t}),children:Object(w.jsxs)(m.a,{sx:{position:"relative",zIndex:"2"},children:[Object(w.jsxs)(m.a,{pl:2,py:1,pr:1,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(f.a,{component:"span",children:[Object(w.jsxs)("b",{children:[s("Tem\xe1tica"),":"]})," "]}),e.tags.map((function(e){return Object(w.jsxs)("span",{children:[Object(w.jsx)(X.a,{href:"#",children:e}),","," "]},e)}))]}),Object(w.jsx)(U.a,{checked:t,onChange:function(t){return n=e.id,void(c.includes(n)?r((function(e){return e.filter((function(e){return e!==n}))})):r((function(e){return[].concat(Object(R.a)(e),[n])})));var n},value:t})]}),Object(w.jsx)(H.a,{}),Object(w.jsx)(Z.a,{sx:{minHeight:180},image:e.screenshot}),Object(w.jsx)(H.a,{}),Object(w.jsxs)(m.a,{p:2,children:[Ne(e.status),Object(w.jsx)(f.a,{sx:{mt:2},variant:"h4",gutterBottom:!0,children:e.name}),Object(w.jsx)(f.a,{noWrap:!0,variant:"subtitle2",children:e.description})]}),Object(w.jsxs)(m.a,{px:2,display:"flex",alignItems:"flex-end",justifyContent:"space-between",children:[Object(w.jsxs)(m.a,{children:[Object(w.jsxs)(f.a,{variant:"subtitle2",children:[s("Started"),":"," "]}),Object(w.jsx)(f.a,{variant:"h5",children:Object(ke.a)(e.dueDate,"MMMM dd yyyy")})]}),Object(w.jsx)(m.a,{children:Object(w.jsxs)(f.a,{variant:"subtitle2",children:[s("Due in"),":"," ",Object(w.jsxs)(Ce.a,{color:"black",children:[Object(we.a)(e.startDate,e.dueDate,{addSuffix:!0})," ","days"]})]})})]}),Object(w.jsxs)(m.a,{px:2,pb:2,display:"flex",alignItems:"center",children:[Object(w.jsx)($.a,{sx:{flex:1,mr:1},value:e.progress,color:"primary",variant:"determinate"}),Object(w.jsxs)(f.a,{variant:"subtitle1",children:[e.progress,"%"]})]}),Object(w.jsx)(H.a,{}),Object(w.jsxs)(m.a,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(w.jsx)(m.a,{display:"flex",justifyContent:"flex-start",children:e.memberIds.length>0&&Object(w.jsx)(ee.a,{max:4,children:e.memberIds.map((function(e){return Object(w.jsx)(Q.a,{arrow:!0,placement:"top",title:e.name,children:Object(w.jsx)(E.a,{sx:{width:30,height:30},src:e.avatar},e.id)},e.id)}))})}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(g.a,{sx:{mr:1},size:"small",variant:"contained",color:"primary",children:s("Edit")}),Object(w.jsx)(Q.a,{title:s("Delete"),arrow:!0,children:Object(w.jsx)(Re,{onClick:Ae,color:"primary",children:Object(w.jsx)(pe.a,{fontSize:"small"})})})]})]})]})})},e.name)}))}),Object(w.jsxs)(A.a,{sx:{p:2,mt:3,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(w.jsxs)(m.a,{children:[Object(w.jsx)(f.a,{component:"span",variant:"subtitle1",children:s("Showing")})," ",Object(w.jsx)("b",{children:P})," ",s("of")," ",Object(w.jsx)("b",{children:le.length})," ",Object(w.jsx)("b",{children:s("projects")})]}),Object(w.jsx)(G.a,{component:"div",count:le.length,onPageChange:ae,onRowsPerPageChange:oe,page:p,rowsPerPage:P,labelRowsPerPage:"",rowsPerPageOptions:[5,10,15]})]})]})]}),!xe&&Object(w.jsx)(A.a,{sx:{textAlign:"center",p:3},children:Object(w.jsx)(f.a,{align:"center",variant:"h4",fontWeight:"normal",color:"text.secondary",sx:{my:5},gutterBottom:!0,children:s("Choose between table or grid views for displaying the projects list.")})}),Object(w.jsx)(Ie,{open:ve,maxWidth:"sm",fullWidth:!0,TransitionComponent:Fe,keepMounted:!0,onClose:Be,children:Object(w.jsxs)(m.a,{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",p:5,children:[Object(w.jsx)(Me,{children:Object(w.jsx)(ce.a,{})}),Object(w.jsxs)(f.a,{align:"center",sx:{pt:4,px:6},variant:"h1",children:[s("Do you really want to delete this project"),"?"]}),Object(w.jsx)(f.a,{align:"center",sx:{pt:2,pb:4,px:6},fontWeight:"normal",color:"text.secondary",variant:"h3",children:s("You won't be able to revert after deletion")}),Object(w.jsxs)(m.a,{children:[Object(w.jsx)(g.a,{variant:"text",size:"large",sx:{mx:1},onClick:Be,children:s("Cancel")}),Object(w.jsx)(Se,{onClick:function(){Ee(!1),l(s("The projects has been deleted successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:x.a})},size:"large",sx:{mx:1,px:3},variant:"contained",children:s("Delete")})]})]})})]})};Ee.defaultProps={projects:[]};var Ae=Ee;t.default=function(){var e=window.localStorage.getItem("accessToken"),t=Object(S.a)(),n=Object(i.useState)([]),a=Object(o.a)(n,2),d=a[0],j=a[1],u=Object(i.useState)([]),p=Object(o.a)(u,2),h=(p[0],p[1]),x=Object(b.a)().user,f=Object(i.useCallback)(Object(r.a)(c.a.mark((function e(){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("/api/projects");case 3:n=e.sent,t.current&&h(n.data.projects),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);Object(i.useEffect)((function(){f()}),[f]);var g=function(){var t=Object(r.a)(c.a.mark((function t(n){var a;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(M.c)(n,e);case 2:a=t.sent,console.log("aca encuenstas",a),j(a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(i.useEffect)((function(){x&&x.clubId&&g(x.clubId)}),[]),Object(w.jsxs)(l.a,{title:"Klubo | encuestas",children:[Object(w.jsx)(I.a,{children:Object(w.jsx)(P,{})}),Object(w.jsxs)(z.a,{maxWidth:"lg",children:[Object(w.jsx)(O.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(w.jsx)(O.a,{item:!0,xs:12,children:Object(w.jsx)(Ae,{projects:d})})}),Object(w.jsx)(m.a,{m:5})]})]})}},833:function(e,t,n){"use strict";var a=n(25),c=n(100),r=n(6),o=n(0),i=Object(r.a)("span")((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.alpha.black[5],";\n      padding: ").concat(t.spacing(.5,1),";\n      font-size: ").concat(t.typography.pxToRem(13),";\n      border-radius: ").concat(t.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(t.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(t.colors.primary.lighter,";\n          color: ").concat(t.palette.primary.main,"\n        }\n        \n        &-secondary {\n          background-color: ").concat(t.colors.secondary.lighter,";\n          color: ").concat(t.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(t.colors.success.lighter,";\n          color: ").concat(t.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(t.colors.warning.lighter,";\n          color: ").concat(t.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(t.colors.error.lighter,";\n          color: ").concat(t.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(t.colors.info.lighter,";\n          color: ").concat(t.palette.info.main,"\n        }\n      }\n")}));t.a=function(e){e.className;var t=e.color,n=void 0===t?"secondary":t,r=e.children,s=Object(c.a)(e,["className","color","children"]);return Object(o.jsx)(i,Object(a.a)(Object(a.a)({className:"MuiLabel-"+n},s),{},{children:r}))}},834:function(e,t,n){"use strict";var a=n(20),c=n(21);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;c(n(1));var r=a(n(22)),o=n(0),i=(0,r.default)((0,o.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"AddTwoTone");t.default=i},835:function(e,t,n){"use strict";var a=n(10),c=n(2),r=n(3),o=n(1),i=(n(5),n(9)),s=n(724),l=n(6),d=n(120),j=n(76),u=n(818),b=n(439),p=n(725);function h(e){return Object(b.a)("PrivateSwitchBase",e)}Object(p.a)("PrivateSwitchBase",["root","checked","disabled","input"]);var m=n(0),x=Object(l.a)(u.a)({padding:9}),O=Object(l.a)("input")({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),f=o.forwardRef((function(e,t){var n=e.autoFocus,o=e.checked,l=e.checkedIcon,u=e.className,b=e.defaultChecked,p=e.disabled,f=e.icon,g=e.id,v=e.inputProps,y=e.inputRef,k=e.name,w=e.onBlur,C=e.onChange,P=e.onFocus,I=e.readOnly,M=e.required,z=e.tabIndex,S=e.type,R=e.value,F=Object(r.a)(e,["autoFocus","checked","checkedIcon","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),N=Object(d.a)({controlled:o,default:Boolean(b),name:"SwitchBase",state:"checked"}),E=Object(a.a)(N,2),A=E[0],B=E[1],T=Object(j.a)(),W=p;T&&"undefined"===typeof W&&(W=T.disabled);var L="checkbox"===S||"radio"===S,D=Object(c.a)({},e,{checked:A,disabled:W}),G=function(e){var t=e.classes,n={root:["root",e.checked&&"checked",e.disabled&&"disabled"],input:["input"]};return Object(s.a)(n,h,t)}(D);return Object(m.jsxs)(x,Object(c.a)({component:"span",className:Object(i.a)(G.root,u),disabled:W,tabIndex:null,role:void 0,onFocus:function(e){P&&P(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){w&&w(e),T&&T.onBlur&&T.onBlur(e)},styleProps:D,ref:t},F,{children:[Object(m.jsx)(O,Object(c.a)({autoFocus:n,checked:o,defaultChecked:b,className:G.input,disabled:W,id:L&&g,name:k,onChange:function(e){if(!e.nativeEvent.defaultPrevented){var t=e.target.checked;B(t),C&&C(e,t)}},readOnly:I,ref:y,required:M,styleProps:D,tabIndex:z,type:S,value:R},v)),A?l:f]}))}));t.a=f},839:function(e,t,n){"use strict";var a=n(1);t.a=function(){var e=Object(a.useRef)(!0);return Object(a.useEffect)((function(){return function(){e.current=!1}}),[]),e}},842:function(e,t,n){"use strict";var a=n(747),c=n(6),r=n(145),o=n(0),i=Object(c.a)(r.a)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(3,0),";\n")}));t.a=function(e){var t=e.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i,{children:Object(o.jsx)(a.a,{maxWidth:"lg",children:t})})})}},853:function(e,t,n){"use strict";var a=n(8),c=n(3),r=n(2),o=n(1),i=(n(5),n(245)),s=n(724),l=n(835),d=n(118),j=n(0),u=Object(d.a)(Object(j.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),b=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),p=n(31),h=Object(d.a)(Object(j.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),m=n(12),x=n(13),O=n(6),f=n(439),g=n(725);function v(e){return Object(f.a)("MuiCheckbox",e)}var y=Object(g.a)("MuiCheckbox",["root","checked","disabled","indeterminate","colorPrimary","colorSecondary"]),k=Object(O.a)(l.a,{shouldForwardProp:function(e){return Object(O.b)(e)||"classes"===e}},{name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var n=e.styleProps;return Object(i.a)(Object(r.a)({},n.indeterminate&&t.indeterminate,"default"!==n.color&&t["color".concat(Object(m.a)(n.color))]),t.root||{})}})((function(e){var t,n=e.theme,c=e.styleProps;return Object(r.a)({color:n.palette.text.secondary},"default"!==c.color&&(t={},Object(a.a)(t,"&.Mui-checked, &.".concat(y.indeterminate),{color:n.palette[c.color].main,"&:hover":{backgroundColor:Object(p.a)(n.palette[c.color].main,n.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}}),Object(a.a)(t,"&.Mui-disabled",{color:n.palette.action.disabled}),t))})),w=Object(j.jsx)(b,{}),C=Object(j.jsx)(u,{}),P=Object(j.jsx)(h,{}),I=o.forwardRef((function(e,t){var n=Object(x.a)({props:e,name:"MuiCheckbox"}),a=n.checkedIcon,i=void 0===a?w:a,l=n.color,d=void 0===l?"secondary":l,u=n.icon,b=void 0===u?C:u,p=n.indeterminate,h=void 0!==p&&p,O=n.indeterminateIcon,f=void 0===O?P:O,g=n.inputProps,y=n.size,I=void 0===y?"medium":y,M=Object(c.a)(n,["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size"]),z=h?f:b,S=h?f:i,R=Object(r.a)({},n,{color:d,indeterminate:h,size:I}),F=function(e){var t=e.classes,n=e.indeterminate,a=e.color,c={root:["root",n&&"indeterminate","color".concat(Object(m.a)(a))]},o=Object(s.a)(c,v,t);return Object(r.a)({},t,o)}(R);return Object(j.jsx)(k,Object(r.a)({type:"checkbox",color:d,inputProps:Object(r.a)({"data-indeterminate":h},g),icon:o.cloneElement(z,{fontSize:void 0===z.props.fontSize&&"medium"!==I?I:z.props.fontSize}),checkedIcon:o.cloneElement(S,{fontSize:void 0===S.props.fontSize&&"medium"!==I?I:S.props.fontSize}),styleProps:R,ref:t},M,{classes:F}))}));t.a=I},958:function(e,t,n){"use strict";n(1);var a=n(118),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z"}),"KeyboardArrowLeft")},959:function(e,t,n){"use strict";n(1);var a=n(118),c=n(0);t.a=Object(a.a)(Object(c.jsx)("path",{d:"M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z"}),"KeyboardArrowRight")},996:function(e,t,n){"use strict";var a=n(8),c=n(2),r=n(3),o=n(1),i=(n(5),n(252),n(9)),s=n(245),l=n(724),d=n(6),j=n(13),u=n(806),b=n(439),p=n(725);function h(e){return Object(b.a)("MuiAvatarGroup",e)}var m=Object(p.a)("MuiAvatarGroup",["root","avatar"]),x=n(0),O={small:-16,medium:null},f=Object(d.a)("div",{},{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return Object(s.a)(Object(a.a)({},"& .".concat(m.avatar),t.avatar),t.root||{})}})((function(e){var t,n=e.theme;return t={},Object(a.a)(t,"& .MuiAvatar-root",{border:"2px solid ".concat(n.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),Object(a.a)(t,"display","flex"),Object(a.a)(t,"flexDirection","row-reverse"),t})),g=Object(d.a)(u.a,{},{name:"MuiAvatarGroup",slot:"Avatar"})((function(e){var t=e.theme;return{border:"2px solid ".concat(t.palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),v=o.forwardRef((function(e,t){var n=Object(j.a)({props:e,name:"MuiAvatarGroup"}),a=n.children,s=n.className,d=n.max,u=void 0===d?5:d,b=n.spacing,p=void 0===b?"medium":b,m=n.variant,v=void 0===m?"circular":m,y=Object(r.a)(n,["children","className","max","spacing","variant"]),k=u<2?2:u,w=Object(c.a)({},n,{max:u,spacing:p,variant:v}),C=function(e){var t=e.classes;return Object(l.a)({root:["root"],avatar:["avatar"]},h,t)}(w),P=o.Children.toArray(a).filter((function(e){return o.isValidElement(e)})),I=P.length>k?P.length-k+1:0,M=p&&void 0!==O[p]?O[p]:-p;return Object(x.jsxs)(f,Object(c.a)({styleProps:w,className:Object(i.a)(C.root,s),ref:t},y,{children:[I?Object(x.jsxs)(g,{styleProps:w,className:C.avatar,style:{marginLeft:M},variant:v,children:["+",I]}):null,P.slice(0,P.length-I).reverse().map((function(e){return o.cloneElement(e,{className:Object(i.a)(e.props.className,C.avatar),style:Object(c.a)({marginLeft:M},e.props.style),variant:e.props.variant||v})}))]}))}));t.a=v}}]);
//# sourceMappingURL=104.856cbb8b.chunk.js.map