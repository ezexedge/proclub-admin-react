(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[112],{1802:function(e,t,a){"use strict";a.r(t),a.d(t,"FormikStep",(function(){return F})),a.d(t,"FormikStepper",(function(){return V}));var n=a(24),r=a(100),i=a(16),c=a.n(i),o=a(28),s=a(9),l=a(1),d=a(70),j=a(825),m=a(765),b=a(764),u=a(461),h=a(846),p=a(843),x=a(757),O=a(993),f=a(837),v=a(827),g=a(1051),y=a(1053),C=a(1050),w=a(758),S=a(861),z=a(930),M=a(864),W=a(858),k=a.n(W),A=a(43),_=a.n(A),L=a(309),q=a(766),T=a(5),P=a(254),I=a(0),R=Object(T.a)(d.a)((function(){return"\n    height: 100%;\n    overflow: auto;\n    flex: 1;\n"})),N=Object(T.a)(d.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.alpha.black[5],"\n")})),H=Object(T.a)(j.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.main,";\n      color: ").concat(t.palette.success.contrastText,";\n      width: ").concat(t.spacing(12),";\n      height: ").concat(t.spacing(12),";\n      box-shadow: ").concat(t.colors.shadows.success,";\n      margin-left: auto;\n      margin-right: auto;\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(t.typography.pxToRem(45),";\n      }\n")})),E=function(e){return new Promise((function(t){return setTimeout(t,e)}))};function F(e){var t=e.children;return Object(I.jsx)(I.Fragment,{children:t})}function V(e){var t=e.children,a=Object(r.a)(e,["children"]),i=l.Children.toArray(t),d=Object(l.useState)(0),j=Object(s.a)(d,2),m=j[0],b=j[1],u=i[m],h=Object(l.useState)(!1),p=Object(s.a)(h,2),x=p[0],O=p[1],f=Object(q.a)().t;function z(){return m===i.length-2}return Object(I.jsx)(S.c,Object(n.a)(Object(n.a)({},a),{},{validationSchema:u.props.validationSchema,onSubmit:function(){var e=Object(o.a)(c.a.mark((function e(t,n){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!z()){e.next=7;break}return e.next=3,a.onSubmit(t,n);case 3:O(!0),b((function(e){return e+1})),e.next=9;break;case 7:b((function(e){return e+1})),n.setTouched({});case 9:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.isSubmitting;return Object(I.jsxs)(S.b,{autoComplete:"off",children:[Object(I.jsx)(g.a,{alternativeLabel:!0,activeStep:m,children:i.map((function(e,t){return Object(I.jsx)(y.a,{completed:m>t||x,children:Object(I.jsx)(C.a,{children:e.props.label})},e.props.label)}))}),u,x?null:Object(I.jsxs)(N,{p:4,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(I.jsx)(v.a,{disabled:t||0===m,variant:"outlined",color:"primary",type:"button",onClick:function(){return b((function(e){return e-1}))},children:f("Previous")}),Object(I.jsx)(v.a,{startIcon:t?Object(I.jsx)(w.a,{size:"1rem"}):null,disabled:t,variant:"contained",color:"primary",type:"submit",children:t?f("Submitting"):z()?f("Complete registration"):f("Next step")})]})]})}}))}t.default=function(){var e=Object(q.a)().t,t=Object(l.useState)(!0),a=Object(s.a)(t,2),n=a[0],r=a[1];return Object(I.jsx)(L.a,{title:"Register - Wizard",children:Object(I.jsx)(R,{children:Object(I.jsxs)(m.a,{sx:{my:4},maxWidth:"md",children:[Object(I.jsx)(P.a,{}),Object(I.jsxs)(b.a,{sx:{mt:3,pt:4},children:[Object(I.jsxs)(d.a,{px:4,children:[Object(I.jsx)(u.a,{variant:"h2",sx:{mb:1},children:e("Create account")}),Object(I.jsx)(u.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:3},children:e("Fill in the fields below to sign up for an account.")})]}),Object(I.jsxs)(V,{initialValues:{first_name:"",last_name:"",terms:!0,promo:!0,password:"",password_confirm:"",email:"",phone:"",company_name:"",company_size:"",company_role:""},onSubmit:function(){var e=Object(o.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(3e3);case 2:console.log("values",t);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:[Object(I.jsx)(F,{validationSchema:M.e().shape({email:M.g().email(e("The email provided should be a valid email address")).max(255).required(e("The email field is required")),first_name:M.g().max(255).required(e("The first name field is required")),last_name:M.g().max(255).required(e("The first name field is required")),password:M.g().min(8).max(255).required(e("The password field is required")),password_confirm:M.g().oneOf([M.f("password")],e("Both password fields need to be the same")).required(e("This field is required"))}),label:e("Personal Informations"),children:Object(I.jsx)(d.a,{p:4,children:Object(I.jsxs)(h.a,{container:!0,spacing:3,children:[Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"first_name",component:z.b,label:e("First name"),placeholder:e("Write your first name here...")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"last_name",component:z.b,label:e("Last name"),placeholder:e("Write your last name here...")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"email",component:z.b,label:e("Email"),placeholder:e("Write your email here...")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"password",component:z.b,label:e("Password"),placeholder:e("Write a password here...")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"password_confirm",component:z.b,label:e("Confirm password"),placeholder:e("Confirm password here...")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"phone",type:"number",component:z.b,label:e("Phone number")})}),Object(I.jsxs)(h.a,{item:!0,xs:12,children:[Object(I.jsx)(S.a,{name:"promo",type:"checkbox",component:z.a,Label:{label:e("Yes, I want to receive monthly promotional materials.")}}),Object(I.jsx)("br",{}),Object(I.jsx)(S.a,{name:"terms",type:"checkbox",component:z.a,Label:{label:Object(I.jsxs)(u.a,{variant:"body2",children:[e("I accept the")," ",Object(I.jsx)(p.a,{component:"a",href:"#",children:e("terms and conditions")}),"."]})}})]})]})})}),Object(I.jsx)(F,{validationSchema:M.e().shape({company_size:M.g().max(55).required(e("The first name field is required")),company_name:M.g().max(255).required(e("The first name field is required")),company_role:M.g().max(255).required(e("The first name field is required"))}),label:e("Company Details"),children:Object(I.jsx)(d.a,{p:4,children:Object(I.jsxs)(h.a,{container:!0,spacing:3,children:[Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"company_name",component:z.b,label:e("Company name")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"company_size",type:"number",component:z.b,label:e("Company size")})}),Object(I.jsx)(h.a,{item:!0,xs:12,md:6,children:Object(I.jsx)(S.a,{fullWidth:!0,name:"company_role",component:z.b,label:e("Company role")})})]})})}),Object(I.jsx)(F,{label:e("Complete Registration"),children:Object(I.jsx)(d.a,{px:4,py:8,children:Object(I.jsxs)(m.a,{maxWidth:"sm",children:[Object(I.jsx)(H,{children:Object(I.jsx)(_.a,{})}),Object(I.jsx)(x.a,{in:n,children:Object(I.jsx)(O.a,{sx:{mt:5},action:Object(I.jsx)(f.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){r(!1)},children:Object(I.jsx)(k.a,{fontSize:"inherit"})}),severity:"info",children:e("A confirmation has been sent to your email address")})}),Object(I.jsx)(u.a,{align:"center",sx:{pt:5,pb:4,lineHeight:1.5,px:10},variant:"h2",children:e("Check your email to confirm your email and start using your account")}),Object(I.jsx)(v.a,{fullWidth:!0,variant:"contained",href:"/login",children:"Continue to sign in"})]})})})]})]})]})})})}},858:function(e,t,a){"use strict";var n=a(19),r=a(20);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;r(a(1));var i=n(a(21)),c=a(0),o=(0,i.default)((0,c.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");t.default=o},894:function(e,t,a){"use strict";a(1);var n=a(118),r=a(0);t.a=Object(n.a)(Object(r.jsx)("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close")},993:function(e,t,a){"use strict";var n=a(6),r=a(3),i=a(2),c=a(1),o=(a(4),a(8)),s=a(245),l=a(742),d=a(5),j=a(12),m=a(30),b=a(11),u=a(831),h=a(457),p=a(743);function x(e){return Object(h.a)("MuiAlert",e)}var O=Object(p.a)("MuiAlert",["root","action","icon","message","filledSuccess","filledInfo","filledWarning","filledError","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standardSuccess","standardInfo","standardWarning","standardError"]),f=a(837),v=a(118),g=a(0),y=Object(v.a)(Object(g.jsx)("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),C=Object(v.a)(Object(g.jsx)("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),w=Object(v.a)(Object(g.jsx)("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),S=Object(v.a)(Object(g.jsx)("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),z=a(894),M=Object(d.a)(u.a,{},{name:"MuiAlert",slot:"Root",overridesResolver:function(e,t){var a,r=e.styleProps;return Object(s.a)(Object(i.a)({},t[r.variant],t["".concat(r.variant).concat(Object(b.a)(r.color||r.severity))],(a={},Object(n.a)(a,"& .".concat(O.icon),t.icon),Object(n.a)(a,"& .".concat(O.message),t.message),Object(n.a)(a,"& .".concat(O.action),t.action),a)),t.root||{})}})((function(e){var t=e.theme,a=e.styleProps,r="light"===t.palette.mode?m.b:m.j,c="light"===t.palette.mode?m.j:m.b,o=a.color||a.severity;return Object(i.a)({},t.typography.body2,{borderRadius:t.shape.borderRadius,backgroundColor:"transparent",display:"flex",padding:"6px 16px"},o&&"standard"===a.variant&&Object(n.a)({color:r(t.palette[o].main,.6),backgroundColor:c(t.palette[o].main,.9)},"& .".concat(O.icon),{color:t.palette[o].main}),o&&"outlined"===a.variant&&Object(n.a)({color:r(t.palette[o].main,.6),border:"1px solid ".concat(t.palette[o].main)},"& .".concat(O.icon),{color:t.palette[o].main}),o&&"filled"===a.variant&&{color:"#fff",fontWeight:t.typography.fontWeightMedium,backgroundColor:t.palette[o].main})})),W=Object(d.a)("div",{},{name:"MuiAlert",slot:"Icon"})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),k=Object(d.a)("div",{},{name:"MuiAlert",slot:"Message"})({padding:"8px 0"}),A=Object(d.a)("div",{},{name:"MuiAlert",slot:"Action"})({display:"flex",alignItems:"center",marginLeft:"auto",paddingLeft:16,marginRight:-8}),_={success:Object(g.jsx)(y,{fontSize:"inherit"}),warning:Object(g.jsx)(C,{fontSize:"inherit"}),error:Object(g.jsx)(w,{fontSize:"inherit"}),info:Object(g.jsx)(S,{fontSize:"inherit"})},L=Object(g.jsx)(z.a,{fontSize:"small"}),q=c.forwardRef((function(e,t){var a=Object(j.a)({props:e,name:"MuiAlert"}),n=a.action,c=a.children,s=a.className,d=a.closeText,m=void 0===d?"Close":d,u=a.color,h=a.icon,p=a.iconMapping,O=void 0===p?_:p,v=a.onClose,y=a.role,C=void 0===y?"alert":y,w=a.severity,S=void 0===w?"success":w,z=a.variant,q=void 0===z?"standard":z,T=Object(r.a)(a,["action","children","className","closeText","color","icon","iconMapping","onClose","role","severity","variant"]),P=Object(i.a)({},a,{variant:q,color:u,severity:S}),I=function(e){var t=e.variant,a=e.color,n=e.severity,r=e.classes,i={root:["root","".concat(t).concat(Object(b.a)(a||n)),"".concat(t)],icon:["icon"],message:["message"],action:["action"]};return Object(l.a)(i,x,r)}(P);return Object(g.jsxs)(M,Object(i.a)({role:C,square:!0,elevation:0,styleProps:P,className:Object(o.a)(I.root,s),ref:t},T,{children:[!1!==h?Object(g.jsx)(W,{styleProps:P,className:I.icon,children:h||O[S]||_[S]}):null,Object(g.jsx)(k,{styleProps:P,className:I.message,children:c}),null!=n?Object(g.jsx)(A,{className:I.action,children:n}):null,null==n&&v?Object(g.jsx)(A,{styleProps:P,className:I.action,children:Object(g.jsx)(f.a,{size:"small","aria-label":m,title:m,color:"inherit",onClick:v,children:L})}):null]}))}));t.a=q}}]);
//# sourceMappingURL=112.6ea268e5.chunk.js.map