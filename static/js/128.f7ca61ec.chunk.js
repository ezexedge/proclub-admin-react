(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[128],{1007:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r}));var a=function(e,t){return fetch("https://api.klubo.club/api/page/info/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e,t){return fetch("https://api.klubo.club/api/info/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/info/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e,t,n){return fetch("https://api.klubo.club/api/page/info/".concat(e,"/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},2192:function(e,t,n){"use strict";n.r(t);var a=n(845),c=n(17),i=n.n(c),r=n(29),o=n(10),l=n(1),s=n(302),d=n(19),b=n(733),u=n(814),j=n(742),m=n(823),p=n(70),h=n(798),x=n(741),O=n(888),f=n(1014),g=n(820),v=n(438),y=n(804),w=n(1117),T=(n(8),n(25)),k=n(840),C=n(839),S=n(743),I=n(6),q=n(245),N=n(51),W=n(470),E=n(101),A=n(802),_=n(1150),z=n(1152),F=n(1148),M=n(735),B=n(813),L=n(731),P=n(736),R=n(835),D=n.n(R),G=n(909),J=n(44),U=n.n(J),H=n(732),V=(n(251),n(0)),K=Object(W.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"100%!important"},selectEmpty:{marginTop:e.spacing(2)}}})),Q=Object(I.a)("input")({display:"none"}),X=Object(I.a)(p.a)((function(){return"\n    height: 100%;\n    overflow: auto;\n    flex: 1;\n"})),Y=Object(I.a)(p.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.alpha.black[5],"\n")})),Z=Object(I.a)(A.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.main,";\n      color: ").concat(t.palette.success.contrastText,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n      box-shadow: ").concat(t.colors.shadows.success,";\n      margin-left: auto;\n      margin-right: auto;\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),$=Object(I.a)(p.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n     \n    }\n")})),ee=Object(I.a)(p.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),te=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function ne(e){var t=e.children;return Object(V.jsx)(V.Fragment,{children:t})}function ae(e){var t=e.children,n=Object(E.a)(e,["children"]),a=l.Children.toArray(t),c=Object(l.useState)(0),s=Object(o.a)(c,2),d=s[0],b=s[1],u=a[d],j=Object(l.useState)(!1),m=Object(o.a)(j,2),p=m[0],h=m[1],x=Object(S.a)().t;function O(){return d===a.length-2}return Object(V.jsx)(C.c,Object(T.a)(Object(T.a)({},n),{},{validationSchema:u.props.validationSchema,onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O()){e.next=7;break}return e.next=3,n.onSubmit(t,a);case 3:h(!0),b((function(e){return e+1})),e.next=9;break;case 7:b((function(e){return e+1})),a.setTouched({});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(V.jsxs)(C.b,{autoComplete:"off",children:[Object(V.jsx)(_.a,{alternativeLabel:!0,activeStep:d,children:a.map((function(e,t){return Object(V.jsx)(z.a,{completed:d>t||p,children:Object(V.jsx)(F.a,{children:e.props.label})},e.props.label)}))}),u,p?null:Object(V.jsxs)(Y,{p:4,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(V.jsx)(y.a,{disabled:t||0===d,variant:"outlined",color:"primary",type:"button",onClick:function(){return b((function(e){return e-1}))},children:x("Previous")}),Object(V.jsx)(y.a,{startIcon:t?Object(V.jsx)(M.a,{size:"1rem"}):null,disabled:t,variant:"contained",color:"primary",type:"submit",children:t?x("Submitting"):O()?x("Complete registration"):x("Next step")})]})]})}}))}var ce=function(){var e=K(),t=Object(S.a)().t,n=Object(l.useState)(!0),a=Object(o.a)(n,2);return a[0],a[1],Object(V.jsx)(s.a,{title:"Agregar club",children:Object(V.jsx)(X,{children:Object(V.jsxs)(j.a,{sx:{my:4},maxWidth:"md",children:[Object(V.jsxs)(p.a,{px:4,children:[Object(V.jsx)(v.a,{variant:"h2",sx:{mb:1},children:t("Crear un nuevo club")}),Object(V.jsx)(v.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:3},children:t("Coompleta la informacion basica del club")})]}),Object(V.jsxs)(ae,{initialValues:{nombre:"",nombre_visible:"",terms:!0,descripcion:"",cuit:"",password:"",email:"",phone:"",direccion:"",numero:""},onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te(3e3);case 2:console.log("values",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(V.jsx)(ne,{validationSchema:k.e().shape({nombre:k.g().max(255).required(t("El nombre es obligatorio")),descripcion:k.g().max(255).required(t("La descripcion es obligatoria")),nombre_visible:k.g().max(255).required(t("El nombre visible es obligatorio")),cuit:k.d().min(20).integer().required(t("El CUIT es obligatorio")),password:k.g().min(8).max(255).required(t("The password field is required"))}),label:t("Informacion del club"),children:Object(V.jsx)(p.a,{p:4,children:Object(V.jsxs)(m.a,{container:!0,spacing:3,children:[Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"nombre",component:G.b,label:t("Nombre del club"),placeholder:t("Nombre del club...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"nombre_visible",component:G.b,label:t("Nombre visible"),placeholder:t("Nombre visible...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:12,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"descripcion",component:G.b,label:t("Breve descripcion"),placeholder:t("Breve descripcion...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:12}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"cuit",type:"number",component:G.b,label:t("Cuit"),placeholder:t("CUIT...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"password",component:G.b,label:t("Confirm password"),placeholder:t("El password es obligatorio...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,children:Object(V.jsx)(C.a,{name:"terms",type:"checkbox",component:G.a,Label:{label:Object(V.jsxs)(v.a,{variant:"body2",children:[t("I accept the")," ",Object(V.jsx)(g.a,{component:"a",href:"#",children:t("terms and conditions")}),"."]})}})})]})})}),Object(V.jsx)(ne,{validationSchema:k.e().shape({direccion:k.g().max(255).required(t("La direccion obligatoria")),numero:k.d().integer().min(20).required(t("El numero es obligatorio")),telefono:k.d().integer().min(20).required(t("El telefono es obligatorio")),email:k.g().email(t("el email es obligatorio")).max(255).required(t("The email field is required"))}),label:t("Datos de contacto"),children:Object(V.jsx)(p.a,{p:4,children:Object(V.jsxs)(m.a,{container:!0,spacing:3,children:[Object(V.jsx)(m.a,{item:!0,xs:12,md:9,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"direccion",component:G.b,label:t("Direccion"),placeholder:t("Direccion...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"numero",type:"number",component:G.b,label:t("Numero"),placeholder:t("Numero...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(V.jsxs)(P.a,{variant:"outlined",className:e.formControl,children:[Object(V.jsx)(L.a,{id:"demo-simple-select-outlined-label",children:"Pais"}),Object(V.jsxs)(H.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(V.jsx)(B.a,{value:"",children:Object(V.jsx)("em",{children:"None"})}),Object(V.jsx)(B.a,{value:10,children:"Ten"}),Object(V.jsx)(B.a,{value:20,children:"Twenty"}),Object(V.jsx)(B.a,{value:30,children:"Thirty"})]})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(V.jsxs)(P.a,{variant:"outlined",className:e.formControl,children:[Object(V.jsx)(L.a,{id:"demo-simple-select-outlined-label",children:"Provincia"}),Object(V.jsxs)(H.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(V.jsx)(B.a,{value:"",children:Object(V.jsx)("em",{children:"None"})}),Object(V.jsx)(B.a,{value:10,children:"Ten"}),Object(V.jsx)(B.a,{value:20,children:"Twenty"}),Object(V.jsx)(B.a,{value:30,children:"Thirty"})]})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(V.jsxs)(P.a,{variant:"outlined",className:e.formControl,children:[Object(V.jsx)(L.a,{id:"demo-simple-select-outlined-label",children:"Localidad"}),Object(V.jsxs)(H.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(V.jsx)(B.a,{value:"",children:Object(V.jsx)("em",{children:"None"})}),Object(V.jsx)(B.a,{value:10,children:"Ten"}),Object(V.jsx)(B.a,{value:20,children:"Twenty"}),Object(V.jsx)(B.a,{value:30,children:"Thirty"})]})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(V.jsxs)(P.a,{variant:"outlined",className:e.formControl,children:[Object(V.jsx)(L.a,{id:"demo-simple-select-outlined-label",children:"CP"}),Object(V.jsxs)(H.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(V.jsx)(B.a,{value:"",children:Object(V.jsx)("em",{children:"None"})}),Object(V.jsx)(B.a,{value:10,children:"Ten"}),Object(V.jsx)(B.a,{value:20,children:"Twenty"}),Object(V.jsx)(B.a,{value:30,children:"Thirty"})]})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"telefono",type:"number",component:G.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"email",type:"email",component:G.b,label:t("Mail"),placeholder:t("Mail...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"facebook",type:"text",component:G.b,label:t("Facebook"),placeholder:t("@Facebook...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"instagram",type:"text",component:G.b,label:t("Instagram"),placeholder:t("@Instagram...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"twitter",type:"text",component:G.b,label:t("Twitter"),placeholder:t("@Twitter...")})})]})})}),Object(V.jsx)(ne,{validationSchema:k.e().shape({nombre_responsable:k.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:k.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:k.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:k.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("responsable"),children:Object(V.jsx)(p.a,{p:4,children:Object(V.jsxs)(m.a,{container:!0,spacing:3,children:[Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"nombre_responsable",component:G.b,label:t("Nombre"),placeholder:t("Nombre...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"apellido_responsable",type:"text",component:G.b,label:t("Apellido"),placeholder:t("Apellido...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"telefono_responsable",type:"number",component:G.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"email_responsable",type:"email",component:G.b,label:t("Mail"),placeholder:t("Mail...")})})]})})}),Object(V.jsx)(ne,{validationSchema:k.e().shape({nombre_responsable:k.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:k.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:k.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:k.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("Configuraciones"),children:Object(V.jsx)(p.a,{p:4,children:Object(V.jsxs)(m.a,{container:!0,spacing:3,children:[Object(V.jsx)(m.a,{item:!0,xs:12,md:2,children:Object(V.jsxs)($,{children:[Object(V.jsx)(A.a,{variant:"rounded"}),Object(V.jsxs)(ee,{children:[Object(V.jsx)(Q,{accept:"image/*",id:"icon-button-file",name:"icon-button-file",type:"file"}),Object(V.jsx)("label",{htmlFor:"icon-button-file",children:Object(V.jsx)(u.a,{component:"span",color:"primary",children:Object(V.jsx)(D.a,{})})})]})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"color",type:"text",component:G.b,label:t("Color primario"),placeholder:t("Color primario...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"color2",type:"text",component:G.b,label:t("Texto primario"),placeholder:t("Texto primario...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"color",type:"text",component:G.b,label:t("Color secundario"),placeholder:t("Color secundario...")})}),Object(V.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(V.jsx)(C.a,{fullWidth:!0,name:"color2",type:"text",component:G.b,label:t("Texto secundario"),placeholder:t("Texto secundario...")})})]})})}),Object(V.jsx)(ne,{label:t("Confirmar"),children:Object(V.jsx)(p.a,{px:4,py:8,children:Object(V.jsxs)(j.a,{maxWidth:"sm",children:[Object(V.jsx)(Z,{children:Object(V.jsx)(U.a,{})}),Object(V.jsx)(v.a,{align:"center",sx:{pt:5,pb:4,lineHeight:1.5,px:10},variant:"h2",children:t("Club registrado")}),Object(V.jsx)(y.a,{fullWidth:!0,variant:"contained",href:"/login",children:"Salir"})]})})})]})]})})})},ie=n(849),re=n(816),oe=n(829),le=n.n(oe),se=n(301),de=(Object(I.a)("input")({display:"none"}),Object(I.a)(p.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n    }\n")})),Object(I.a)(p.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),Object(W.a)((function(e){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:e.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var be=function(){var e=de(),t=Object(S.a)().t,n=Object(l.useState)(!1),a=Object(o.a)(n,2),c=a[0],s=a[1],b=Object(se.b)().enqueueSnackbar,u=(Object(N.a)().user,Object(l.useState)({public:!0})),j=Object(o.a)(u,2);return j[0],j[1],Object(V.jsxs)(V.Fragment,{children:[Object(V.jsx)(m.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(V.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:5,className:e.margin,children:[Object(V.jsxs)(m.a,{item:!0,lg:9,xs:12,children:[Object(V.jsx)(v.a,{variant:"h1",children:" Info \xfatil "}),Object(V.jsx)("div",{className:e.texto,children:"All aspects related to the app users can be managed from this page"})]}),Object(V.jsx)(m.a,{item:!0,lg:3,xs:12,children:Object(V.jsx)(y.a,{variant:"contained",color:"primary",startIcon:Object(V.jsx)(le.a,{}),className:e.modified,onClick:function(){s(!0)},component:d.b,to:"/superadmin/dashboard/info/crear",children:"Crear una informaci\xf3n"})})]})}),Object(V.jsx)(re.a,{fullWidth:!0,maxWidth:"md",open:c,onClose:function(){s(!1)},children:Object(V.jsx)(C.c,{initialValues:{email:"",username:"",first_name:"",last_name:"",password:"",submit:null},validationSchema:k.e().shape({username:k.g().max(255).required(t("The username field is required")),first_name:k.g().max(255).required(t("The first name field is required")),last_name:k.g().max(255).required(t("The last name field is required")),email:k.g().email(t("The email provided should be a valid email address")).max(255).required(t("The email field is required")),password:k.g().max(255).required(t("The password field is required"))}),onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(n,a){var c,r,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.resetForm,r=a.setErrors,o=a.setStatus,l=a.setSubmitting,e.prev=1,e.next=4,Object(q.a)(1e3);case 4:c(),o({success:!0}),l(!1),b(t("The user account was created successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:ie.a}),s(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),o({success:!1}),r({submit:e.t0.message}),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur,e.handleChange,e.handleSubmit,e.isSubmitting,e.touched,e.values;return Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(ce,{})})}})})]})},ue=n(92),je=n.n(ue),me=(n(120),n(122)),pe=n.n(me),he=n(1007),xe=n(902),Oe=n(818),fe=Object(I.a)(b.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")}));var ge=function(){var e=Object(S.a)().t,t=(Object(se.b)().enqueueSnackbar,[{value:"popular",text:e("Most popular")},{value:"recent",text:e("Recent tasks")},{value:"updated",text:e("Latest updated tasks")},{value:"oldest",text:e("Oldest tasks first")}]),n=(Object(l.useRef)(null),Object(l.useState)(!1)),a=Object(o.a)(n,2),c=(a[0],a[1],Object(l.useState)(t[0].text)),i=Object(o.a)(c,2);return i[0],i[1],Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(P.a,{fullWidth:!0,children:Object(V.jsx)(fe,{className:"buscadorInfo",type:"text",endAdornment:Object(V.jsx)(Oe.a,{position:"end",children:Object(V.jsx)(y.a,{variant:"contained",size:"small",children:e("Buscar")})}),startAdornment:Object(V.jsx)(Oe.a,{position:"start",children:Object(V.jsx)(je.a,{className:"iconoInfo"})})})})})},ve=(Object(I.a)(b.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")})),Object(I.a)(je.a)((function(e){var t=e.theme;return"\n        color: ".concat(t.colors.alpha.black[30],"\n")})),Object(I.a)(u.a)((function(e){var t=e.theme;return"\n  width: ".concat(t.spacing(6),";\n  height: ").concat(t.spacing(6),";\n  position: absolute;\n  background: ").concat(t.colors.alpha.white[100],";\n  z-index: 5;\n  top: calc(").concat(t.header.height," + ").concat(t.spacing(4),");\n")})));t.default=function(){var e=Object(S.a)().t,t=(Object(se.b)().enqueueSnackbar,window.localStorage.getItem("accessToken")),n=[{value:"popular",text:e("Most popular")},{value:"recent",text:e("Recent tasks")},{value:"updated",text:e("Latest updated tasks")},{value:"oldest",text:e("Oldest tasks first")}],c=(Object(l.useRef)(null),Object(l.useState)(!1)),b=Object(o.a)(c,2),u=(b[0],b[1],Object(l.useState)(n[0].text)),T=Object(o.a)(u,2),k=(T[0],T[1],Object(l.useState)(null)),C=Object(o.a)(k,2),I=C[0],q=C[1],N=Object(l.useState)(1),W=Object(o.a)(N,2),E=W[0],A=W[1],_=Object(l.useState)([]),z=Object(o.a)(_,2),F=(z[0],z[1]),B=Object(l.useState)(!1),L=Object(o.a)(B,2),P=L[0],R=L[1],D=Object(l.useState)([{title:"cargando..."}]),G=Object(o.a)(D,2),J=G[0],U=G[1],H=function(){var e=Object(r.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return R(!0),e.next=3,Object(he.b)(1,t);case 3:n=e.sent,console.log("beneficios",n),q(n.result),A(n.pages),R(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(){var e=Object(r.a)(i.a.mark((function e(){var n,c,r,o,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(xe.c)(t);case 2:n=e.sent,c=[],r=Object(a.a)(n);try{for(r.s();!(o=r.n()).done;)l=o.value,s={title:l.nombre},c.push(s)}catch(i){r.e(i)}finally{r.f()}U(c),F(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){H(),K()}),[]);var Q=function(){var e=Object(r.a)(i.a.mark((function e(n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.currentTarget.textContent),R(!0),e.next=4,Object(he.b)(Number(a),t);case 4:c=e.sent,q(c.result),R(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return console.log("aca etan los tags",J),Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(s.a,{title:"Info \xfatil",children:Object(V.jsxs)(j.a,{maxWidth:"lg",className:"field",children:[Object(V.jsx)(m.a,{mb:4,container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(V.jsxs)(m.a,{item:!0,xs:12,children:[Object(V.jsx)(p.a,{children:Object(V.jsx)(be,{})}),Object(V.jsx)(h.a,{mdUp:!0,children:Object(V.jsx)(ve,{color:"primary",onClick:function(){setMobileOpen(!mobileOpen)},size:"small",children:Object(V.jsx)(pe.a,{})})})]})}),Object(V.jsx)(m.a,{item:!0,xs:12,className:"marginBuscador-documentacion",children:Object(V.jsx)(ge,{})}),Object(V.jsx)(p.a,{className:"marginFilter-documentacion",display:"flex",alignItems:"center",justifyContent:"space-between"}),Object(V.jsxs)(m.a,{container:!0,spacing:3,children:[!0===P&&Object(V.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(V.jsx)(M.a,{mt:4,color:"primary"})}),!1===P&&null!==I&&0===I.length&&Object(V.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(V.jsx)("p",{children:"No hay beneficios"})}),!1===P&&null!==I&&I&&I.map((function(t){return 1===t.pertenece_superadmin?Object(V.jsx)(V.Fragment,{children:Object(V.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(V.jsx)(x.a,{children:Object(V.jsxs)(O.a,{children:[Object(V.jsx)(f.a,{className:"img-documentacion",image:"https://api.klubo.club/api/image/".concat(t.pathImage),title:"Contemplative Reptile"}),Object(V.jsx)(g.a,{href:"#",mt:3,color:"text.primary",className:"titleCardInfo",children:t.titulo}),Object(V.jsx)(m.a,{container:!0,direction:"row",justifyContent:"start",children:t.categoria&&t.categoria.map((function(e,t){return Object(V.jsx)(m.a,{xs:5,mr:1,mt:2,children:Object(V.jsx)(v.a,{noWrap:!0,variant:"p",className:t*Math.random()%2===0?"chipInfo":"chipInfo2",children:e.categoria&&e.categoria.nombre})})}))}),Object(V.jsx)(v.a,{sx:{pb:2},color:"text.secondary",children:Object(V.jsx)("div",{dangerouslySetInnerHTML:{__html:t.descripcion}})}),Object(V.jsx)(y.a,{size:"small",variant:"outlined",component:d.b,to:"/superadmin/dashboard/info/editar/"+t.id,sx:{mr:2},children:e("Editar")}),Object(V.jsx)(y.a,{size:"small",component:d.b,to:"/superadmin/dashboard/info/single/"+t.id,variant:"contained",children:e("M\xe1s info")})]})})})}):Object(V.jsx)(V.Fragment,{})}))]}),Object(V.jsx)(p.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"paginacion-documentacion",children:Object(V.jsx)(w.a,{onChange:Q,count:E,defaultPage:1,siblingCount:0,size:"large",shape:"rounded",color:"primary"})})]})})})}},902:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var a=function(e,t){return fetch("https://api.klubo.club/api/rubro",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))},c=function(e){return fetch("https://api.klubo.club/api/rubro",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/rubro/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}}}]);
//# sourceMappingURL=128.f7ca61ec.chunk.js.map