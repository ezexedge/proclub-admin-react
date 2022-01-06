(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[70],{2223:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(470),r=n(302),o=n(742),c=n(142),s=n(741),d=n(838),m=n(17),p=n.n(m),u=n(29),l=(n(8),n(25),n(10)),b=n(840),h=n(839),g=n(823),x=n(6),j=n(244),f=n(51),O=n(849),v=n(822),y=n(438),w=n(815),E=n(301),T=n(0),S=(Object(x.a)("input")({display:"none"}),Object(x.a)(c.a)((function(t){var e=t.theme;return"\n\n    position: relative;\n\n    .MuiAvatar-root {\n      width: ".concat(e.spacing(16),";\n      height: ").concat(e.spacing(16),";\n    }\n")})),Object(x.a)(c.a)((function(t){var e=t.theme;return"\n    position: absolute;\n    width: ".concat(e.spacing(6),";\n    height: ").concat(e.spacing(6),";\n    bottom: -").concat(e.spacing(2),";\n    right: -").concat(e.spacing(2),";\n\n    .MuiIconButton-root {\n      border-radius: 100%;\n      background: ").concat(e.colors.primary.main,";\n      color: ").concat(e.palette.primary.contrastText,";\n      box-shadow: ").concat(e.colors.shadows.primary,";\n      width: ").concat(e.spacing(6),";\n      height: ").concat(e.spacing(6),";\n      padding: 0;\n  \n      &:hover {\n        background: ").concat(e.colors.primary.dark,";\n      }\n    }\n")})),Object(i.a)((function(t){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:t.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important",background:"#FFFFFF",boxShadow:"0px 9px 16px rgba(159, 162, 191, 0.18), 0px 2px 2px rgba(159, 162, 191, 0.32)",border:"6px"},dialog:{backgroundColor:"red!important"}}})));var k=function(){var t=S(),e=Object(g.a)().t,n=Object(a.useState)(!1),i=Object(l.a)(n,2),r=i[0],o=i[1],c=Object(E.b)().enqueueSnackbar,s=(Object(f.a)().user,Object(a.useState)({public:!0})),d=Object(l.a)(s,2);return d[0],d[1],Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(v.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:Object(T.jsxs)(v.a,{container:!0,direction:"row",justify:"space-between",alignItems:"center",spacing:5,className:t.margin,children:[Object(T.jsxs)(v.a,{item:!0,lg:9,xs:12,children:[Object(T.jsx)(y.a,{variant:"h1",children:" Dashboard "}),Object(T.jsx)("div",{className:t.texto,children:"All aspects related to the app users can be managed from this page"})]}),Object(T.jsx)(v.a,{item:!0,lg:3,xs:12})]})}),Object(T.jsx)(w.a,{fullWidth:!0,maxWidth:"md",open:r,onClose:function(){o(!1)},children:Object(T.jsx)(h.c,{initialValues:{email:"",username:"",first_name:"",last_name:"",password:"",submit:null},validationSchema:b.e().shape({username:b.g().max(255).required(e("The username field is required")),first_name:b.g().max(255).required(e("The first name field is required")),last_name:b.g().max(255).required(e("The last name field is required")),email:b.g().email(e("The email provided should be a valid email address")).max(255).required(e("The email field is required")),password:b.g().max(255).required(e("The password field is required"))}),onSubmit:function(){var t=Object(u.a)(p.a.mark((function t(n,a){var i,r,s,d;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=a.resetForm,r=a.setErrors,s=a.setStatus,d=a.setSubmitting,t.prev=1,t.next=4,Object(j.a)(1e3);case 4:i(),s({success:!0}),d(!1),c(e("The user account was created successfully"),{variant:"success",anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:O.a}),o(!1),t.next=16;break;case 10:t.prev=10,t.t0=t.catch(1),console.error(t.t0),s({success:!1}),r({submit:t.t0.message}),d(!1);case 16:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(e,n){return t.apply(this,arguments)}}(),children:function(t){t.errors,t.handleBlur,t.handleChange,t.handleSubmit,t.isSubmitting,t.touched,t.values;return Object(T.jsx)(T.Fragment,{})}})})]})},q=Object(i.a)((function(t){return{modified:{height:"50px!important",width:"208px!important"},extendedIcon:{marginRight:t.spacing(1)},margin:{marginTop:"35px!important"},texto:{color:"#223354!important",marginTop:"12px!important",fontSize:"17px!important",fontWeight:"400!important",opacity:"70%"},title:{color:"#223354!important",fontSize:"30px!important",fontWeight:"700!important"},card:{marginTop:"41px!important"}}}));e.default=function(){var t=q();return Object(T.jsxs)(r.a,{title:"Clubs",children:[Object(T.jsx)(d.a,{children:Object(T.jsx)(k,{})}),Object(T.jsxs)(o.a,{maxWidth:"lg",children:[Object(T.jsx)(s.a,{className:t.card}),Object(T.jsx)(c.a,{m:5})]})]})}},838:function(t,e,n){"use strict";var a=n(742),i=n(6),r=n(142),o=n(0),c=Object(i.a)(r.a)((function(t){var e=t.theme;return"\n        padding: ".concat(e.spacing(4,0),";\n")}));e.a=function(t){var e=t.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(c,{children:Object(o.jsx)(a.a,{maxWidth:"lg",children:e})})})}},849:function(t,e,n){"use strict";var a=n(2),i=n(3),r=n(1),o=(n(5),n(254)),c=n(34),s=n(33),d=n(49),m=n(28),p=n(0),u={entering:{transform:"none"},entered:{transform:"none"}},l={enter:c.b.enteringScreen,exit:c.b.leavingScreen},b=r.forwardRef((function(t,e){var n=t.appear,c=void 0===n||n,b=t.children,h=t.easing,g=t.in,x=t.onEnter,j=t.onEntered,f=t.onEntering,O=t.onExit,v=t.onExited,y=t.onExiting,w=t.style,E=t.timeout,T=void 0===E?l:E,S=t.TransitionComponent,k=void 0===S?o.a:S,q=Object(i.a)(t,["appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),F=Object(s.a)(),C=r.useRef(null),W=Object(m.a)(b.ref,e),z=Object(m.a)(C,W),I=function(t){return function(e){if(t){var n=C.current;void 0===e?t(n):t(n,e)}}},R=I(f),_=I((function(t,e){Object(d.b)(t);var n=Object(d.a)({style:w,timeout:T,easing:h},{mode:"enter"});t.style.webkitTransition=F.transitions.create("transform",n),t.style.transition=F.transitions.create("transform",n),x&&x(t,e)})),N=I(j),A=I(y),B=I((function(t){var e=Object(d.a)({style:w,timeout:T,easing:h},{mode:"exit"});t.style.webkitTransition=F.transitions.create("transform",e),t.style.transition=F.transitions.create("transform",e),O&&O(t)})),J=I(v);return Object(p.jsx)(k,Object(a.a)({appear:c,in:g,nodeRef:C,onEnter:_,onEntered:N,onEntering:R,onExit:B,onExited:J,onExiting:A,timeout:T},q,{children:function(t,e){return r.cloneElement(b,Object(a.a)({style:Object(a.a)({transform:"scale(0)",visibility:"exited"!==t||g?void 0:"hidden"},u[t],w,b.props.style),ref:z},e))}}))}));e.a=b}}]);
//# sourceMappingURL=70.c7caeb3a.chunk.js.map