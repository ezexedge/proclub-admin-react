(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[129],{2266:function(e,t,n){"use strict";n.r(t);var a=n(847),c=n(17),i=n.n(c),r=n(29),o=n(10),l=n(1),s=n(303),d=n(733),b=n(732),u=n(734),j=n(814),m=n(743),p=n(823),h=n(143),x=n(798),O=n(742),f=n(809),g=n(737),v=n(889),y=n(1019),w=n(932),T=n(804),C=n(1123),k=(n(8),n(25)),S=n(841),N=n(840),W=n(824),q=n(6),I=n(245),E=n(51),A=n(471),_=n(100),F=n(802),B=n(439),z=n(820),L=n(1157),M=n(1159),D=n(1155),P=n(736),R=n(813),G=n(836),J=n.n(G),U=n(910),V=n(44),H=n.n(V),K=(n(251),n(0)),Q=Object(A.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"100%!important"},selectEmpty:{marginTop:e.spacing(2)}}})),X=Object(q.a)("input")({display:"none"}),Y=Object(q.a)(h.a)((function(){return"\n    height: 100%;\n    overflow: auto;\n    flex: 1;\n"})),Z=Object(q.a)(h.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.alpha.black[5],"\n")})),$=Object(q.a)(F.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.main,";\n      color: ").concat(t.palette.success.contrastText,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n      box-shadow: ").concat(t.colors.shadows.success,";\n      margin-left: auto;\n      margin-right: auto;\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),ee=Object(q.a)(h.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n     \n    }\n")})),te=Object(q.a)(h.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),ne=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function ae(e){var t=e.children;return Object(K.jsx)(K.Fragment,{children:t})}function ce(e){var t=e.children,n=Object(_.a)(e,["children"]),a=l.Children.toArray(t),c=Object(l.useState)(0),s=Object(o.a)(c,2),d=s[0],b=s[1],u=a[d],j=Object(l.useState)(!1),m=Object(o.a)(j,2),p=m[0],h=m[1],x=Object(W.a)().t;function O(){return d===a.length-2}return Object(K.jsx)(N.c,Object(k.a)(Object(k.a)({},n),{},{validationSchema:u.props.validationSchema,onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O()){e.next=7;break}return e.next=3,n.onSubmit(t,a);case 3:h(!0),b((function(e){return e+1})),e.next=9;break;case 7:b((function(e){return e+1})),a.setTouched({});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(K.jsxs)(N.b,{autoComplete:"off",children:[Object(K.jsx)(L.a,{alternativeLabel:!0,activeStep:d,children:a.map((function(e,t){return Object(K.jsx)(M.a,{completed:d>t||p,children:Object(K.jsx)(D.a,{children:e.props.label})},e.props.label)}))}),u,p?null:Object(K.jsxs)(Z,{p:4,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(K.jsx)(T.a,{disabled:t||0===d,variant:"outlined",color:"primary",type:"button",onClick:function(){return b((function(e){return e-1}))},children:x("Previous")}),Object(K.jsx)(T.a,{startIcon:t?Object(K.jsx)(P.a,{size:"1rem"}):null,disabled:t,variant:"contained",color:"primary",type:"submit",children:t?x("Submitting"):O()?x("Complete registration"):x("Next step")})]})]})}}))}var ie=function(){var e=Q(),t=Object(W.a)().t,n=Object(l.useState)(!0),a=Object(o.a)(n,2);return a[0],a[1],Object(K.jsx)(s.a,{title:"Agregar club",children:Object(K.jsx)(Y,{children:Object(K.jsxs)(m.a,{sx:{my:4},maxWidth:"md",children:[Object(K.jsxs)(h.a,{px:4,children:[Object(K.jsx)(B.a,{variant:"h2",sx:{mb:1},children:t("Crear un nuevo club")}),Object(K.jsx)(B.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:3},children:t("Coompleta la informacion basica del club")})]}),Object(K.jsxs)(ce,{initialValues:{nombre:"",nombre_visible:"",terms:!0,descripcion:"",cuit:"",password:"",email:"",phone:"",direccion:"",numero:""},onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(3e3);case 2:console.log("values",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre:S.g().max(255).required(t("El nombre es obligatorio")),descripcion:S.g().max(255).required(t("La descripcion es obligatoria")),nombre_visible:S.g().max(255).required(t("El nombre visible es obligatorio")),cuit:S.d().min(20).integer().required(t("El CUIT es obligatorio")),password:S.g().min(8).max(255).required(t("The password field is required"))}),label:t("Informacion del club"),children:Object(K.jsx)(h.a,{p:4,children:Object(K.jsxs)(p.a,{container:!0,spacing:3,children:[Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"nombre",component:U.b,label:t("Nombre del club"),placeholder:t("Nombre del club...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"nombre_visible",component:U.b,label:t("Nombre visible"),placeholder:t("Nombre visible...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:12,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"descripcion",component:U.b,label:t("Breve descripcion"),placeholder:t("Breve descripcion...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:12}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"cuit",type:"number",component:U.b,label:t("Cuit"),placeholder:t("CUIT...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"password",component:U.b,label:t("Confirm password"),placeholder:t("El password es obligatorio...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,children:Object(K.jsx)(N.a,{name:"terms",type:"checkbox",component:U.a,Label:{label:Object(K.jsxs)(B.a,{variant:"body2",children:[t("I accept the")," ",Object(K.jsx)(z.a,{component:"a",href:"#",children:t("terms and conditions")}),"."]})}})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({direccion:S.g().max(255).required(t("La direccion obligatoria")),numero:S.d().integer().min(20).required(t("El numero es obligatorio")),telefono:S.d().integer().min(20).required(t("El telefono es obligatorio")),email:S.g().email(t("el email es obligatorio")).max(255).required(t("The email field is required"))}),label:t("Datos de contacto"),children:Object(K.jsx)(h.a,{p:4,children:Object(K.jsxs)(p.a,{container:!0,spacing:3,children:[Object(K.jsx)(p.a,{item:!0,xs:12,md:9,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"direccion",component:U.b,label:t("Direccion"),placeholder:t("Direccion...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"numero",type:"number",component:U.b,label:t("Numero"),placeholder:t("Numero...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(g.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(b.a,{id:"demo-simple-select-outlined-label",children:"Pais"}),Object(K.jsxs)(d.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(R.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(R.a,{value:10,children:"Ten"}),Object(K.jsx)(R.a,{value:20,children:"Twenty"}),Object(K.jsx)(R.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(g.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(b.a,{id:"demo-simple-select-outlined-label",children:"Provincia"}),Object(K.jsxs)(d.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(R.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(R.a,{value:10,children:"Ten"}),Object(K.jsx)(R.a,{value:20,children:"Twenty"}),Object(K.jsx)(R.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(g.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(b.a,{id:"demo-simple-select-outlined-label",children:"Localidad"}),Object(K.jsxs)(d.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(R.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(R.a,{value:10,children:"Ten"}),Object(K.jsx)(R.a,{value:20,children:"Twenty"}),Object(K.jsx)(R.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(g.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(b.a,{id:"demo-simple-select-outlined-label",children:"CP"}),Object(K.jsxs)(d.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(R.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(R.a,{value:10,children:"Ten"}),Object(K.jsx)(R.a,{value:20,children:"Twenty"}),Object(K.jsx)(R.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"telefono",type:"number",component:U.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"email",type:"email",component:U.b,label:t("Mail"),placeholder:t("Mail...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"facebook",type:"text",component:U.b,label:t("Facebook"),placeholder:t("@Facebook...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"instagram",type:"text",component:U.b,label:t("Instagram"),placeholder:t("@Instagram...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"twitter",type:"text",component:U.b,label:t("Twitter"),placeholder:t("@Twitter...")})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre_responsable:S.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:S.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:S.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:S.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("responsable"),children:Object(K.jsx)(h.a,{p:4,children:Object(K.jsxs)(p.a,{container:!0,spacing:3,children:[Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"nombre_responsable",component:U.b,label:t("Nombre"),placeholder:t("Nombre...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"apellido_responsable",type:"text",component:U.b,label:t("Apellido"),placeholder:t("Apellido...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"telefono_responsable",type:"number",component:U.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"email_responsable",type:"email",component:U.b,label:t("Mail"),placeholder:t("Mail...")})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre_responsable:S.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:S.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:S.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:S.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("Configuraciones"),children:Object(K.jsx)(h.a,{p:4,children:Object(K.jsxs)(p.a,{container:!0,spacing:3,children:[Object(K.jsx)(p.a,{item:!0,xs:12,md:2,children:Object(K.jsxs)(ee,{children:[Object(K.jsx)(F.a,{variant:"rounded"}),Object(K.jsxs)(te,{children:[Object(K.jsx)(X,{accept:"image/*",id:"icon-button-file",name:"icon-button-file",type:"file"}),Object(K.jsx)("label",{htmlFor:"icon-button-file",children:Object(K.jsx)(j.a,{component:"span",color:"primary",children:Object(K.jsx)(J.a,{})})})]})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"color",type:"text",component:U.b,label:t("Color primario"),placeholder:t("Color primario...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"color2",type:"text",component:U.b,label:t("Texto primario"),placeholder:t("Texto primario...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"color",type:"text",component:U.b,label:t("Color secundario"),placeholder:t("Color secundario...")})}),Object(K.jsx)(p.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(N.a,{fullWidth:!0,name:"color2",type:"text",component:U.b,label:t("Texto secundario"),placeholder:t("Texto secundario...")})})]})})}),Object(K.jsx)(ae,{label:t("Confirmar"),children:Object(K.jsx)(h.a,{px:4,py:8,children:Object(K.jsxs)(m.a,{maxWidth:"sm",children:[Object(K.jsx)($,{children:Object(K.jsx)(H.a,{})}),Object(K.jsx)(B.a,{align:"center",sx:{pt:5,pb:4,lineHeight:1.5,px:10},variant:"h2",children:t("Club registrado")}),Object(K.jsx)(T.a,{fullWidth:!0,variant:"contained",href:"/login",children:"Salir"})]})})})]})]})})})},re=n(19),oe=n(850),le=n(816),se=n(830),de=n.n(se),be=n(302),ue=(Object(q.a)("input")({display:"none"}),Object(q.a)(h.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n    }\n")})),Object(q.a)(h.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),Object(A.a)((function(e){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:e.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var je=function(){var e=ue(),t=Object(W.a)().t,n=Object(l.useState)(!1),a=Object(o.a)(n,2),c=a[0],s=a[1],d=Object(be.b)().enqueueSnackbar,b=(Object(E.a)().user,Object(l.useState)({public:!0})),u=Object(o.a)(b,2);return u[0],u[1],Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(p.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(K.jsxs)(p.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:5,className:e.margin,children:[Object(K.jsxs)(p.a,{item:!0,lg:9,xs:12,children:[Object(K.jsx)(B.a,{variant:"h1",children:" Beneficios "}),Object(K.jsx)("div",{className:e.texto,children:"Todos los aspectos relacionados con beneficios de la aplicaci\xf3n se pueden gestionar desde esta p\xe1gina."})]}),Object(K.jsx)(p.a,{item:!0,lg:3,xs:12,children:Object(K.jsx)(T.a,{variant:"contained",color:"primary",startIcon:Object(K.jsx)(de.a,{}),className:e.modified,onClick:function(){s(!0)},component:re.b,to:"/superadmin/dashboard/beneficio/crear",children:"Crear un beneficio"})})]})}),Object(K.jsx)(le.a,{fullWidth:!0,maxWidth:"md",open:c,onClose:function(){s(!1)},children:Object(K.jsx)(N.c,{initialValues:{email:"",username:"",first_name:"",last_name:"",password:"",submit:null},validationSchema:S.e().shape({username:S.g().max(255).required(t("The username field is required")),first_name:S.g().max(255).required(t("The first name field is required")),last_name:S.g().max(255).required(t("The last name field is required")),email:S.g().email(t("The email provided should be a valid email address")).max(255).required(t("The email field is required")),password:S.g().max(255).required(t("The password field is required"))}),onSubmit:function(){var e=Object(r.a)(i.a.mark((function e(n,a){var c,r,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.resetForm,r=a.setErrors,o=a.setStatus,l=a.setSubmitting,e.prev=1,e.next=4,Object(I.a)(1e3);case 4:c(),o({success:!0}),l(!1),d(t("The user account was created successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:oe.a}),s(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),o({success:!1}),r({submit:e.t0.message}),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur,e.handleChange,e.handleSubmit,e.isSubmitting,e.touched,e.values;return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(ie,{})})}})})]})},me=n(91),pe=n.n(me),he=(n(119),n(121)),xe=n.n(he),Oe=n(952),fe=n(903),ge=(Object(q.a)(u.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")})),Object(q.a)(pe.a)((function(e){var t=e.theme;return"\n        color: ".concat(t.colors.alpha.black[30],"\n")}))),ve=Object(q.a)(j.a)((function(e){var t=e.theme;return"\n  width: ".concat(t.spacing(6),";\n  height: ").concat(t.spacing(6),";\n  position: absolute;\n  background: ").concat(t.colors.alpha.white[100],";\n  z-index: 5;\n  top: calc(").concat(t.header.height," + ").concat(t.spacing(4),");\n")}));t.default=function(){var e=Object(W.a)().t,t=(Object(be.b)().enqueueSnackbar,window.localStorage.getItem("accessToken")),n=[{value:"popular",text:e("Most popular")},{value:"recent",text:e("Recent tasks")},{value:"updated",text:e("Latest updated tasks")},{value:"oldest",text:e("Oldest tasks first")}],c=Object(l.useRef)(null),u=Object(l.useState)(!1),j=Object(o.a)(u,2),k=(j[0],j[1],Object(l.useState)(n[0].text)),S=Object(o.a)(k,2),N=(S[0],S[1],Object(l.useState)(null)),q=Object(o.a)(N,2),I=q[0],E=q[1],A=Object(l.useState)(null),_=Object(o.a)(A,2),F=_[0],B=_[1],z=Object(l.useState)(1),L=Object(o.a)(z,2),M=L[0],D=L[1],R=Object(l.useState)([]),G=Object(o.a)(R,2),J=G[0],U=G[1],V=Object(l.useState)(!1),H=Object(o.a)(V,2),Q=H[0],X=H[1],Y=Object(l.useState)([{title:"cargando..."}]),Z=Object(o.a)(Y,2),$=Z[0],ee=Z[1],te=function(){var e=Object(r.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return X(!0),e.next=3,Object(Oe.c)(1,t);case 3:n=e.sent,console.log("beneficios",n),E(n.result),D(n.pages),B(n.result),X(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ne=function(){var e=Object(r.a)(i.a.mark((function e(){var n,c,r,o,l,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(fe.c)(t);case 2:n=e.sent,c=[],r=Object(a.a)(n);try{for(r.s();!(o=r.n()).done;)l=o.value,s={title:l.nombre},c.push(s)}catch(i){r.e(i)}finally{r.f()}ee(c),U(n);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(l.useEffect)((function(){te(),ne()}),[]);var ae=function(){var e=Object(r.a)(i.a.mark((function e(n,a){var c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.currentTarget.textContent),X(!0),e.next=4,Object(Oe.c)(Number(a),t);case 4:c=e.sent,E(c.result),X(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return console.log("aca etan los tags",$),Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(s.a,{title:"Klubo | beneficios",children:Object(K.jsxs)(m.a,{maxWidth:"lg",className:"field",children:[Object(K.jsx)(p.a,{mb:4,container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(K.jsxs)(p.a,{item:!0,xs:12,children:[Object(K.jsx)(h.a,{children:Object(K.jsx)(je,{})}),Object(K.jsx)(x.a,{mdUp:!0,children:Object(K.jsx)(ve,{color:"primary",onClick:function(){setMobileOpen(!mobileOpen)},size:"small",children:Object(K.jsx)(xe.a,{})})})]})}),Object(K.jsx)(p.a,{item:!0,xs:12,className:"marginBuscador-documentacion",children:Object(K.jsxs)(O.a,{sx:{pl:{xs:1,lg:3},pr:1,display:"flex",alignItems:"center"},children:[Object(K.jsx)(x.a,{lgDown:!0,children:Object(K.jsx)(ge,{})}),Object(K.jsxs)(p.a,{alignItems:"center",justify:"start",container:!0,spacing:0,children:[Object(K.jsx)(x.a,{lgDown:!0,children:Object(K.jsx)(f.a,{orientation:"vertical",sx:{height:48,mx:2}})}),Object(K.jsx)(p.a,{item:!0,xs:12,lg:5,md:5,children:Object(K.jsxs)(g.a,{variant:"outlined",fullWidth:!0,sx:{m:2},children:[Object(K.jsx)(b.a,{htmlFor:"outlined-age-native-simple",children:"Buscar beneficios"}),Object(K.jsxs)(d.a,{native:!0,fullWidth:!0,onChange:function(e){"todos"===e.target.value.toLowerCase()&&te();var t,n=[],c=Object(a.a)(F);try{for(c.s();!(t=c.n()).done;){var i=t.value,r=i.rubro.find((function(t){return t.rubro.nombre.toLowerCase()===e.target.value.toLowerCase()}));console.log("pepepe",r),r&&n.push(i)}}catch(o){c.e(o)}finally{c.f()}E(n)},label:"Buscar beneficios",inputProps:{name:"Buscar beneficios",id:"outlined-age-native-simple"},children:[Object(K.jsx)("option",{"aria-label":"None",value:"todos",children:"Todos"}),J&&J.map((function(e){return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)("option",{value:e.nombre,children:e.nombre})})}))]})]})}),Object(K.jsx)(x.a,{lgDown:!0,children:Object(K.jsx)(f.a,{orientation:"vertical",sx:{height:48,mx:2}})}),Object(K.jsx)(p.a,{item:!0,xs:12,lg:5,md:6})]})]})}),Object(K.jsx)(h.a,{className:"marginFilter-documentacion",display:"flex",alignItems:"center",justifyContent:"space-between"}),Object(K.jsxs)(p.a,{container:!0,spacing:3,children:[!0===Q&&Object(K.jsx)(p.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(K.jsx)(P.a,{mt:4,color:"primary"})}),!1===Q&&null!==I&&0===I.length&&Object(K.jsx)(p.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(K.jsx)("p",{children:"No hay beneficios"})}),!1===Q&&null!==I&&I&&I.map((function(e){return 1===e.pertenece_superadmin?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(p.a,{item:!0,xs:12,md:4,children:Object(K.jsxs)(O.a,{children:[Object(K.jsxs)(v.a,{className:"cardContent-documentacion",children:[Object(K.jsx)(y.a,{className:"img-documentacion",image:e.pathImage,title:"Contemplative Reptile"}),Object(K.jsx)(h.a,{children:Object(K.jsx)("p",{className:"tituloDocumentacion",children:e.nombre})}),Object(K.jsx)(h.a,{children:Object(K.jsx)("div",{className:"descripcionDocumentacion",id:"texto-parse",ref:c,dangerouslySetInnerHTML:{__html:e.descripcion}})}),Object(K.jsx)(p.a,{container:!0,direction:"row",justifyContent:"start",children:e.rubro&&e.rubro.map((function(e){return Object(K.jsx)(p.a,{xs:4,children:Object(K.jsx)("p",{className:"badgesDocumentacion",children:e&&e.rubro&&e.rubro.nombre})})}))})]}),Object(K.jsx)(f.a,{}),Object(K.jsxs)(w.a,{sx:{p:2,display:"flex",alignItems:"center",justifyContent:"space-between"},children:[Object(K.jsx)(T.a,{component:re.b,to:"/superadmin/dashboard/beneficio/editar/"+e.id,className:"btn-documentacion",variant:"outlined",color:"primary",children:"Editar"}),Object(K.jsx)(T.a,{component:re.b,to:"/superadmin/dashboard/beneficio/single/"+e.id,className:"btn-documentacion",variant:"contained",color:"primary",children:"Ver beneficio"})]})]})})}):Object(K.jsx)(K.Fragment,{})}))]}),Object(K.jsx)(h.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"paginacion-documentacion",children:Object(K.jsx)(C.a,{onChange:ae,count:M,defaultPage:1,siblingCount:0,size:"large",shape:"rounded",color:"primary"})})]})})})}},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var a=function(e,t){return fetch("https://api.klubo.club/api/rubro",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))},c=function(e){return fetch("https://api.klubo.club/api/rubro",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/rubro/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},952:function(e,t,n){"use strict";n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"d",(function(){return r}));var a=function(e,t){return fetch("https://api.klubo.club/api/page/beneficios/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e,t){return fetch("https://api.klubo.club/api/beneficios/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/beneficios/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},r=function(e,t,n){return fetch("https://api.klubo.club/api/beneficios/club/".concat(e,"/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}}]);
//# sourceMappingURL=129.f99178da.chunk.js.map