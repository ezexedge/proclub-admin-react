(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[130],{2200:function(e,t,n){"use strict";n.r(t);var a=n(847),c=n(17),i=n.n(c),o=n(29),r=n(10),l=n(1),s=n(303),d=n(19),b=n(734),u=n(814),j=n(743),m=n(823),p=n(143),h=n(798),x=n(737),O=n(818),f=n(804),g=n(742),v=n(889),y=n(1014),w=n(820),C=n(439),T=n(1118),k=(n(8),n(25)),S=n(841),I=n(840),N=n(824),W=n(6),q=n(245),E=n(51),A=n(471),_=n(100),z=n(802),F=n(1151),L=n(1153),B=n(1149),M=n(736),P=n(813),D=n(732),R=n(836),G=n.n(R),J=n(910),U=n(44),H=n.n(U),V=n(733),K=(n(251),n(0)),Q=Object(A.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:"100%!important"},selectEmpty:{marginTop:e.spacing(2)}}})),X=Object(W.a)("input")({display:"none"}),Y=Object(W.a)(p.a)((function(){return"\n    height: 100%;\n    overflow: auto;\n    flex: 1;\n"})),Z=Object(W.a)(p.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.alpha.black[5],"\n")})),$=Object(W.a)(z.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.main,";\n      color: ").concat(t.palette.success.contrastText,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n      box-shadow: ").concat(t.colors.shadows.success,";\n      margin-left: auto;\n      margin-right: auto;\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),ee=Object(W.a)(p.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n     \n    }\n")})),te=Object(W.a)(p.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),ne=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function ae(e){var t=e.children;return Object(K.jsx)(K.Fragment,{children:t})}function ce(e){var t=e.children,n=Object(_.a)(e,["children"]),a=l.Children.toArray(t),c=Object(l.useState)(0),s=Object(r.a)(c,2),d=s[0],b=s[1],u=a[d],j=Object(l.useState)(!1),m=Object(r.a)(j,2),p=m[0],h=m[1],x=Object(N.a)().t;function O(){return d===a.length-2}return Object(K.jsx)(I.c,Object(k.a)(Object(k.a)({},n),{},{validationSchema:u.props.validationSchema,onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(t,a){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!O()){e.next=7;break}return e.next=3,n.onSubmit(t,a);case 3:h(!0),b((function(e){return e+1})),e.next=9;break;case 7:b((function(e){return e+1})),a.setTouched({});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(K.jsxs)(I.b,{autoComplete:"off",children:[Object(K.jsx)(F.a,{alternativeLabel:!0,activeStep:d,children:a.map((function(e,t){return Object(K.jsx)(L.a,{completed:d>t||p,children:Object(K.jsx)(B.a,{children:e.props.label})},e.props.label)}))}),u,p?null:Object(K.jsxs)(Z,{p:4,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(K.jsx)(f.a,{disabled:t||0===d,variant:"outlined",color:"primary",type:"button",onClick:function(){return b((function(e){return e-1}))},children:x("Previous")}),Object(K.jsx)(f.a,{startIcon:t?Object(K.jsx)(M.a,{size:"1rem"}):null,disabled:t,variant:"contained",color:"primary",type:"submit",children:t?x("Submitting"):O()?x("Complete registration"):x("Next step")})]})]})}}))}var ie=function(){var e=Q(),t=Object(N.a)().t,n=Object(l.useState)(!0),a=Object(r.a)(n,2);return a[0],a[1],Object(K.jsx)(s.a,{title:"Agregar club",children:Object(K.jsx)(Y,{children:Object(K.jsxs)(j.a,{sx:{my:4},maxWidth:"md",children:[Object(K.jsxs)(p.a,{px:4,children:[Object(K.jsx)(C.a,{variant:"h2",sx:{mb:1},children:t("Crear un nuevo club")}),Object(K.jsx)(C.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:3},children:t("Coompleta la informacion basica del club")})]}),Object(K.jsxs)(ce,{initialValues:{nombre:"",nombre_visible:"",terms:!0,descripcion:"",cuit:"",password:"",email:"",phone:"",direccion:"",numero:""},onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne(3e3);case 2:console.log("values",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre:S.g().max(255).required(t("El nombre es obligatorio")),descripcion:S.g().max(255).required(t("La descripcion es obligatoria")),nombre_visible:S.g().max(255).required(t("El nombre visible es obligatorio")),cuit:S.d().min(20).integer().required(t("El CUIT es obligatorio")),password:S.g().min(8).max(255).required(t("The password field is required"))}),label:t("Informacion del club"),children:Object(K.jsx)(p.a,{p:4,children:Object(K.jsxs)(m.a,{container:!0,spacing:3,children:[Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"nombre",component:J.b,label:t("Nombre del club"),placeholder:t("Nombre del club...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"nombre_visible",component:J.b,label:t("Nombre visible"),placeholder:t("Nombre visible...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:12,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"descripcion",component:J.b,label:t("Breve descripcion"),placeholder:t("Breve descripcion...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:12}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"cuit",type:"number",component:J.b,label:t("Cuit"),placeholder:t("CUIT...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"password",component:J.b,label:t("Confirm password"),placeholder:t("El password es obligatorio...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,children:Object(K.jsx)(I.a,{name:"terms",type:"checkbox",component:J.a,Label:{label:Object(K.jsxs)(C.a,{variant:"body2",children:[t("I accept the")," ",Object(K.jsx)(w.a,{component:"a",href:"#",children:t("terms and conditions")}),"."]})}})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({direccion:S.g().max(255).required(t("La direccion obligatoria")),numero:S.d().integer().min(20).required(t("El numero es obligatorio")),telefono:S.d().integer().min(20).required(t("El telefono es obligatorio")),email:S.g().email(t("el email es obligatorio")).max(255).required(t("The email field is required"))}),label:t("Datos de contacto"),children:Object(K.jsx)(p.a,{p:4,children:Object(K.jsxs)(m.a,{container:!0,spacing:3,children:[Object(K.jsx)(m.a,{item:!0,xs:12,md:9,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"direccion",component:J.b,label:t("Direccion"),placeholder:t("Direccion...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"numero",type:"number",component:J.b,label:t("Numero"),placeholder:t("Numero...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(x.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(D.a,{id:"demo-simple-select-outlined-label",children:"Pais"}),Object(K.jsxs)(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(P.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(P.a,{value:10,children:"Ten"}),Object(K.jsx)(P.a,{value:20,children:"Twenty"}),Object(K.jsx)(P.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(x.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(D.a,{id:"demo-simple-select-outlined-label",children:"Provincia"}),Object(K.jsxs)(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(P.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(P.a,{value:10,children:"Ten"}),Object(K.jsx)(P.a,{value:20,children:"Twenty"}),Object(K.jsx)(P.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(x.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(D.a,{id:"demo-simple-select-outlined-label",children:"Localidad"}),Object(K.jsxs)(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(P.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(P.a,{value:10,children:"Ten"}),Object(K.jsx)(P.a,{value:20,children:"Twenty"}),Object(K.jsx)(P.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:3,children:Object(K.jsxs)(x.a,{variant:"outlined",className:e.formControl,children:[Object(K.jsx)(D.a,{id:"demo-simple-select-outlined-label",children:"CP"}),Object(K.jsxs)(V.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",label:"Age",children:[Object(K.jsx)(P.a,{value:"",children:Object(K.jsx)("em",{children:"None"})}),Object(K.jsx)(P.a,{value:10,children:"Ten"}),Object(K.jsx)(P.a,{value:20,children:"Twenty"}),Object(K.jsx)(P.a,{value:30,children:"Thirty"})]})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"telefono",type:"number",component:J.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"email",type:"email",component:J.b,label:t("Mail"),placeholder:t("Mail...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"facebook",type:"text",component:J.b,label:t("Facebook"),placeholder:t("@Facebook...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"instagram",type:"text",component:J.b,label:t("Instagram"),placeholder:t("@Instagram...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"twitter",type:"text",component:J.b,label:t("Twitter"),placeholder:t("@Twitter...")})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre_responsable:S.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:S.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:S.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:S.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("responsable"),children:Object(K.jsx)(p.a,{p:4,children:Object(K.jsxs)(m.a,{container:!0,spacing:3,children:[Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"nombre_responsable",component:J.b,label:t("Nombre"),placeholder:t("Nombre...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"apellido_responsable",type:"text",component:J.b,label:t("Apellido"),placeholder:t("Apellido...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"telefono_responsable",type:"number",component:J.b,label:t("Telefono"),placeholder:t("Telefono...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"email_responsable",type:"email",component:J.b,label:t("Mail"),placeholder:t("Mail...")})})]})})}),Object(K.jsx)(ae,{validationSchema:S.e().shape({nombre_responsable:S.g().max(255).required(t("El nombre es obligatorio")),apellido_responsable:S.g().max(255).required(t("El apellido es obligatorio")),telefono_responsable:S.d().integer().min(20).required(t("El telefono es obligatorio")),email_responsable:S.g().email(t("el email es obligatorio")).max(255).required(t("El email es obligatorio"))}),label:t("Configuraciones"),children:Object(K.jsx)(p.a,{p:4,children:Object(K.jsxs)(m.a,{container:!0,spacing:3,children:[Object(K.jsx)(m.a,{item:!0,xs:12,md:2,children:Object(K.jsxs)(ee,{children:[Object(K.jsx)(z.a,{variant:"rounded"}),Object(K.jsxs)(te,{children:[Object(K.jsx)(X,{accept:"image/*",id:"icon-button-file",name:"icon-button-file",type:"file"}),Object(K.jsx)("label",{htmlFor:"icon-button-file",children:Object(K.jsx)(u.a,{component:"span",color:"primary",children:Object(K.jsx)(G.a,{})})})]})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"color",type:"text",component:J.b,label:t("Color primario"),placeholder:t("Color primario...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"color2",type:"text",component:J.b,label:t("Texto primario"),placeholder:t("Texto primario...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"color",type:"text",component:J.b,label:t("Color secundario"),placeholder:t("Color secundario...")})}),Object(K.jsx)(m.a,{item:!0,xs:12,md:5,children:Object(K.jsx)(I.a,{fullWidth:!0,name:"color2",type:"text",component:J.b,label:t("Texto secundario"),placeholder:t("Texto secundario...")})})]})})}),Object(K.jsx)(ae,{label:t("Confirmar"),children:Object(K.jsx)(p.a,{px:4,py:8,children:Object(K.jsxs)(j.a,{maxWidth:"sm",children:[Object(K.jsx)($,{children:Object(K.jsx)(H.a,{})}),Object(K.jsx)(C.a,{align:"center",sx:{pt:5,pb:4,lineHeight:1.5,px:10},variant:"h2",children:t("Club registrado")}),Object(K.jsx)(f.a,{fullWidth:!0,variant:"contained",href:"/login",children:"Salir"})]})})})]})]})})})},oe=n(850),re=n(816),le=n(830),se=n.n(le),de=n(302),be=(Object(W.a)("input")({display:"none"}),Object(W.a)(p.a)((function(e){var t=e.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(t.spacing(16),";\n      height: ").concat(t.spacing(16),";\n    }\n")})),Object(W.a)(p.a)((function(e){var t=e.theme;return"\n    position: absolute;\n    width: ".concat(t.spacing(6),";\n    height: ").concat(t.spacing(6),";\n    bottom: -").concat(t.spacing(2),";\n    right: -").concat(t.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(t.colors.primary.main,";\n      color: ").concat(t.palette.primary.contrastText,";\n      box-shadow: ").concat(t.colors.shadows.primary,";\n      width: ").concat(t.spacing(6),";\n      height: ").concat(t.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(t.colors.primary.dark,";\n      }\n    }\n")})),Object(A.a)((function(e){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:e.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var ue=function(){var e=be(),t=Object(N.a)().t,n=Object(l.useState)(!1),a=Object(r.a)(n,2),c=a[0],s=a[1],b=Object(de.b)().enqueueSnackbar,u=(Object(E.a)().user,Object(l.useState)({public:!0})),j=Object(r.a)(u,2);return j[0],j[1],Object(K.jsxs)(K.Fragment,{children:[Object(K.jsx)(m.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(K.jsxs)(m.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:5,className:e.margin,children:[Object(K.jsxs)(m.a,{item:!0,lg:9,xs:12,children:[Object(K.jsx)(C.a,{variant:"h1",children:" Info \xfatil "}),Object(K.jsx)("div",{className:e.texto,children:"All aspects related to the app users can be managed from this page"})]}),Object(K.jsx)(m.a,{item:!0,lg:3,xs:12,children:Object(K.jsx)(f.a,{variant:"contained",color:"primary",startIcon:Object(K.jsx)(se.a,{}),className:e.modified,onClick:function(){s(!0)},component:d.b,to:"/admin/dashboard/info/crear",children:"Crear una informaci\xf3n"})})]})}),Object(K.jsx)(re.a,{fullWidth:!0,maxWidth:"md",open:c,onClose:function(){s(!1)},children:Object(K.jsx)(I.c,{initialValues:{email:"",username:"",first_name:"",last_name:"",password:"",submit:null},validationSchema:S.e().shape({username:S.g().max(255).required(t("The username field is required")),first_name:S.g().max(255).required(t("The first name field is required")),last_name:S.g().max(255).required(t("The last name field is required")),email:S.g().email(t("The email provided should be a valid email address")).max(255).required(t("The email field is required")),password:S.g().max(255).required(t("The password field is required"))}),onSubmit:function(){var e=Object(o.a)(i.a.mark((function e(n,a){var c,o,r,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=a.resetForm,o=a.setErrors,r=a.setStatus,l=a.setSubmitting,e.prev=1,e.next=4,Object(q.a)(1e3);case 4:c(),r({success:!0}),l(!1),b(t("The user account was created successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:oe.a}),s(!1),e.next=16;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),r({success:!1}),o({submit:e.t0.message}),l(!1);case 16:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t,n){return e.apply(this,arguments)}}(),children:function(e){e.errors,e.handleBlur,e.handleChange,e.handleSubmit,e.isSubmitting,e.touched,e.values;return Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(ie,{})})}})})]})},je=n(169),me=n(91),pe=n.n(me),he=(n(119),n(121)),xe=n.n(he),Oe=n(951);n(903),Object(W.a)(b.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")}));var fe=Object(W.a)(b.a)((function(e){var t=e.theme;return"\n    background-color: ".concat(t.colors.alpha.white[100],";\n")})),ge=(Object(W.a)(pe.a)((function(e){var t=e.theme;return"\n        color: ".concat(t.colors.alpha.black[30],"\n")})),Object(W.a)(u.a)((function(e){var t=e.theme;return"\n  width: ".concat(t.spacing(6),";\n  height: ").concat(t.spacing(6),";\n  position: absolute;\n  background: ").concat(t.colors.alpha.white[100],";\n  z-index: 5;\n  top: calc(").concat(t.header.height," + ").concat(t.spacing(4),");\n")})));t.default=function(){var e=Object(N.a)().t,t=(Object(de.b)().enqueueSnackbar,window.localStorage.getItem("accessToken")),n=window.localStorage.getItem("accessToken"),c=Object(je.a)(n),b=[{value:"popular",text:e("Most popular")},{value:"recent",text:e("Recent tasks")},{value:"updated",text:e("Latest updated tasks")},{value:"oldest",text:e("Oldest tasks first")}],u=(Object(l.useRef)(null),Object(l.useState)(!1)),k=Object(r.a)(u,2),S=(k[0],k[1],Object(l.useState)(b[0].text)),I=Object(r.a)(S,2),W=(I[0],I[1],Object(l.useState)(null)),q=Object(r.a)(W,2),E=q[0],A=q[1],_=Object(l.useState)(null),z=Object(r.a)(_,2),F=z[0],L=z[1],B=Object(l.useState)(1),P=Object(r.a)(B,2),D=P[0],R=P[1],G=Object(l.useState)(""),J=Object(r.a)(G,2),U=(J[0],J[1],Object(l.useState)([])),H=Object(r.a)(U,2),V=(H[0],H[1],Object(l.useState)(!1)),Q=Object(r.a)(V,2),X=Q[0],Y=Q[1],Z=Object(l.useState)([{title:"cargando..."}]),$=Object(r.a)(Z,2),ee=$[0],te=($[1],function(){var e=Object(o.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Y(!0),e.next=3,Object(Oe.c)(c.clubId,1,t);case 3:n=e.sent,console.log("beneficios",n),A(n.result),L(n.result),R(n.pages),Y(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}());Object(l.useEffect)((function(){te()}),[]),console.log("beneficios",E);var ne=function(){var e=Object(o.a)(i.a.mark((function e(n,a){var o;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n.currentTarget.textContent),Y(!0),e.next=4,Object(Oe.c)(c.clubId,Number(a),t);case 4:o=e.sent,A(o.result),Y(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}();return console.log("aca etan los tags",ee),Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(s.a,{title:"Klubo | info \xfatil",children:Object(K.jsxs)(j.a,{maxWidth:"lg",className:"field",children:[Object(K.jsx)(m.a,{mb:4,container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:Object(K.jsxs)(m.a,{item:!0,xs:12,children:[Object(K.jsx)(p.a,{children:Object(K.jsx)(ue,{})}),Object(K.jsx)(h.a,{mdUp:!0,children:Object(K.jsx)(ge,{color:"primary",onClick:function(){setMobileOpen(!mobileOpen)},size:"small",children:Object(K.jsx)(xe.a,{})})})]})}),Object(K.jsx)(m.a,{item:!0,xs:12,className:"marginBuscador-documentacion",children:Object(K.jsx)(x.a,{fullWidth:!0,children:Object(K.jsx)(fe,{className:"buscadorInfo",type:"text",onChange:function(e){var t=e.target.value;console.log("....",t),""===e.target.value&&te();var n,c=[],i=Object(a.a)(F);try{var o=function(){var e=n.value;((e.titulo.toLowerCase().includes(t.toLowerCase())||e.descripcion.toLowerCase().includes(t.toLowerCase()))&&c.push(e),e.categoria.length>0)&&(e.categoria.filter((function(e){return e.categoria.nombre.toLowerCase().includes(t.toLowerCase())})).length>0&&(c.find((function(t){return t.id===e.id}))||c.push(e)))};for(i.s();!(n=i.n()).done;)o()}catch(r){i.e(r)}finally{i.f()}console.log("beneficio actualizado",c),A(c)},endAdornment:Object(K.jsx)(O.a,{position:"end",children:Object(K.jsx)(f.a,{variant:"contained",size:"small",children:e("Buscar")})}),startAdornment:Object(K.jsx)(O.a,{position:"start",children:Object(K.jsx)(pe.a,{className:"iconoInfo"})})})})}),Object(K.jsx)(p.a,{className:"marginFilter-documentacion",display:"flex",alignItems:"center",justifyContent:"space-between"}),Object(K.jsxs)(m.a,{container:!0,spacing:3,children:[!0===X&&Object(K.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(K.jsx)(M.a,{mt:4,color:"primary"})}),!1===X&&null!==E&&0===E.length&&Object(K.jsx)(m.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",mt:5,children:Object(K.jsx)("p",{children:"No se encontr\xf3 informaci\xf3n \xfatil"})}),!1===X&&null!==E&&E&&E.map((function(t){return 0===t.pertenece_superadmin?Object(K.jsx)(K.Fragment,{children:Object(K.jsx)(m.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(g.a,{children:Object(K.jsxs)(v.a,{children:[Object(K.jsx)(y.a,{className:"img-documentacion",image:t.pathImage,title:"Contemplative Reptile"}),Object(K.jsx)(w.a,{href:"#",mt:3,color:"text.primary",className:"titleCardInfo",children:t.titulo}),Object(K.jsx)(m.a,{container:!0,direction:"row",justifyContent:"start",children:t.categoria&&t.categoria.map((function(e,t){return Object(K.jsx)(m.a,{xs:5,mr:1,mt:2,children:Object(K.jsx)(C.a,{noWrap:!0,variant:"p",className:t*Math.random()%2===0?"chipInfo":"chipInfo2",children:e.categoria&&e.categoria.nombre})})}))}),Object(K.jsx)(C.a,{sx:{pb:2},color:"text.secondary",children:Object(K.jsx)("div",{dangerouslySetInnerHTML:{__html:t.descripcion}})}),Object(K.jsx)(f.a,{size:"small",variant:"outlined",component:d.b,to:"/admin/dashboard/info/editar/"+t.id,sx:{mr:2},children:e("Editar")}),Object(K.jsx)(f.a,{size:"small",component:d.b,to:"/admin/dashboard/info/single/"+t.id,variant:"contained",children:e("M\xe1s info")})]})})})}):Object(K.jsx)(K.Fragment,{})}))]}),Object(K.jsx)(p.a,{display:"flex",alignItems:"center",justifyContent:"center",className:"paginacion-documentacion",children:Object(K.jsx)(T.a,{onChange:ne,count:D,defaultPage:1,siblingCount:0,size:"large",shape:"rounded",color:"primary"})})]})})})}},903:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return i}));var a=function(e,t){return fetch("https://api.klubo.club/api/rubro",{method:"POST",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(e)}).then((function(e){return console.log(e),e.json()})).catch((function(e){console.log(e)}))},c=function(e){return fetch("https://api.klubo.club/api/rubro",{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(e)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/rubro/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}},951:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"d",(function(){return c})),n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return o}));var a=function(e,t){return fetch("https://api.klubo.club/api/page/info/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},c=function(e,t){return fetch("https://api.klubo.club/api/info/".concat(e),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},i=function(e,t){return fetch("https://api.klubo.club/api/info/".concat(e),{method:"DELETE",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(t)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},o=function(e,t,n){return fetch("https://api.klubo.club/api/page/info/".concat(e,"/").concat(t),{method:"GET",headers:{Accept:"application/json","Content-type":"application/json",Authorization:"Bearer ".concat(n)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}}}]);
//# sourceMappingURL=130.0d46bb0d.chunk.js.map