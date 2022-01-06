(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[122],{1398:function(e,t,a){"use strict";var r=a(17),n=a.n(r),i=a(29),s=a(10),c=a(1),o=a(916),l=a(803),u=a(51),d=a(834),m=a(823),h=a(6),b=a(0),j=Object(h.a)("img")((function(e){var t=e.theme;return"\n    margin-right: ".concat(t.spacing(1),";\n    width: 32px;\n")}));t.a=function(){var e=Object(u.a)().loginWithPopup,t=Object(c.useState)(null),a=Object(s.a)(t,2),r=a[0],h=a[1],p=Object(d.a)(),x=Object(m.a)().t,g=function(){var t=Object(i.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,e();case 3:t.next=9;break;case 5:t.prev=5,t.t0=t.catch(0),console.error(t.t0),p.current&&h(t.t0.message);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[r&&Object(b.jsx)(o.a,{severity:"error",children:r}),Object(b.jsxs)(l.a,{fullWidth:!0,onClick:g,size:"large",sx:{py:2},variant:"outlined",children:[Object(b.jsx)(j,{alt:"Auth0",src:"/static/images/logo/auth0.svg"}),x("Sign in with")," Auth0"]})]})}},1399:function(e,t,a){"use strict";var r=a(17),n=a.n(r),i=a(29),s=a(840),c=a(839),o=a(803),l=a(808),u=a(755),d=a(873),m=a(848),h=a(438),b=a(819),j=a(735),p=a(51),x=a(834),g=a(823),O=a(6),f=a(0),v=Object(O.a)("img")((function(e){var t=e.theme;return"\n    margin-right: ".concat(t.spacing(1),";\n")}));t.a=function(){var e=Object(p.a)(),t=e.createUserWithEmailAndPassword,a=e.signInWithGoogle,r=Object(x.a)(),O=Object(g.a)().t,w=function(){var e=Object(i.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:e.next=8;break;case 5:e.prev=5,e.t0=e.catch(0),console.error(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(){return e.apply(this,arguments)}}();return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsxs)(o.a,{fullWidth:!0,onClick:w,size:"large",variant:"outlined",children:[Object(f.jsx)(v,{alt:"Google",src:"/static/images/logo/google.svg"}),"Register with Google"]}),Object(f.jsx)(l.a,{sx:{mt:4,mb:2},children:O("or")}),Object(f.jsx)(c.c,{initialValues:{email:"",password:"",terms:!0,submit:null},validationSchema:s.e().shape({email:s.g().email(O("The email provided should be a valid email address")).max(255).required(O("The email field is required")),password:s.g().min(8).max(255).required(O("The password field is required")),terms:s.b().oneOf([!0],O("You must agree to our terms and conditions"))}),onSubmit:function(){var e=Object(i.a)(n.a.mark((function e(a,i){var s,c,o;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=i.setErrors,c=i.setStatus,o=i.setSubmitting,e.prev=1,e.next=4,t(a.email,a.password);case 4:r.current&&(c({success:!0}),o(!1)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),r.current&&(c({success:!1}),s({submit:e.t0.message}),o(!1));case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,a){return e.apply(this,arguments)}}(),children:function(e){var t=e.errors,a=e.handleBlur,r=e.handleChange,n=e.handleSubmit,i=e.isSubmitting,s=e.touched,c=e.values;return Object(f.jsxs)("form",{noValidate:!0,onSubmit:n,children:[Object(f.jsx)(u.a,{error:Boolean(s.email&&t.email),fullWidth:!0,helperText:s.email&&t.email,label:O("Email address"),placeholder:O("Your email address here..."),margin:"normal",name:"email",onBlur:a,onChange:r,type:"email",value:c.email,variant:"outlined"}),Object(f.jsx)(u.a,{error:Boolean(s.password&&t.password),fullWidth:!0,helperText:s.password&&t.password,label:O("Password"),placeholder:O("Your password here..."),margin:"normal",name:"password",onBlur:a,onChange:r,type:"password",value:c.password,variant:"outlined"}),Object(f.jsx)(d.a,{control:Object(f.jsx)(m.a,{checked:c.terms,name:"terms",color:"primary",onChange:r}),label:Object(f.jsxs)(h.a,{variant:"body2",children:[O("I accept the")," ",Object(f.jsx)(b.a,{component:"a",href:"#",children:O("terms and conditions")}),"."]})}),Object(f.jsx)(o.a,{sx:{mt:3},color:"primary",startIcon:i?Object(f.jsx)(j.a,{size:"1rem"}):null,disabled:i,size:"large",fullWidth:!0,type:"submit",variant:"contained",children:O("Create account")})]})}})]})}},1400:function(e,t,a){"use strict";var r=a(17),n=a.n(r),i=a(29),s=a(840),c=a(839),o=a(755),l=a(873),u=a(848),d=a(438),m=a(819),h=a(740),b=a(803),j=a(735),p=a(51),x=a(834),g=a(823),O=a(0);t.a=function(){var e=Object(p.a)().register,t=Object(x.a)(),a=Object(g.a)().t;return Object(O.jsx)(c.c,{initialValues:{email:"",name:"",password:"",terms:!1,submit:null},validationSchema:s.e().shape({email:s.g().email(a("The email provided should be a valid email address")).max(255).required(a("The email field is required")),name:s.g().max(255).required(a("The name field is required")),password:s.g().min(8).max(255).required(a("The password field is required")),terms:s.b().oneOf([!0],a("You must agree to our terms and conditions"))}),onSubmit:function(){var a=Object(i.a)(n.a.mark((function a(r,i){var s,c,o;return n.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=i.setErrors,c=i.setStatus,o=i.setSubmitting,a.prev=1,a.next=4,e(r.email,r.name,r.password);case 4:t.current&&(c({success:!0}),o(!1)),a.next=13;break;case 7:a.prev=7,a.t0=a.catch(1),console.error(a.t0),c({success:!1}),s({submit:a.t0.message}),o(!1);case 13:case"end":return a.stop()}}),a,null,[[1,7]])})));return function(e,t){return a.apply(this,arguments)}}(),children:function(e){var t=e.errors,r=e.handleBlur,n=e.handleChange,i=e.handleSubmit,s=e.isSubmitting,c=e.touched,p=e.values;return Object(O.jsxs)("form",{noValidate:!0,onSubmit:i,children:[Object(O.jsx)(o.a,{error:Boolean(c.name&&t.name),fullWidth:!0,margin:"normal",helperText:c.name&&t.name,label:a("Name"),name:"name",onBlur:r,onChange:n,value:p.name,variant:"outlined"}),Object(O.jsx)(o.a,{error:Boolean(c.email&&t.email),fullWidth:!0,margin:"normal",helperText:c.email&&t.email,label:a("Email address"),name:"email",onBlur:r,onChange:n,type:"email",value:p.email,variant:"outlined"}),Object(O.jsx)(o.a,{error:Boolean(c.password&&t.password),fullWidth:!0,margin:"normal",helperText:c.password&&t.password,label:a("Password"),name:"password",onBlur:r,onChange:n,type:"password",value:p.password,variant:"outlined"}),Object(O.jsx)(l.a,{control:Object(O.jsx)(u.a,{checked:p.terms,name:"terms",color:"primary",onChange:n}),label:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(d.a,{variant:"body2",children:[a("I accept the")," ",Object(O.jsx)(m.a,{component:"a",href:"#",children:a("terms and conditions")}),"."]})})}),Boolean(c.terms&&t.terms)&&Object(O.jsx)(h.a,{error:!0,children:t.terms}),Object(O.jsx)(b.a,{sx:{mt:3},color:"primary",startIcon:s?Object(O.jsx)(j.a,{size:"1rem"}):null,disabled:s,type:"submit",fullWidth:!0,size:"large",variant:"contained",children:a("Create your account")})]})}})}},2143:function(e,t,a){"use strict";a.r(t);var r=a(19),n=a(741),i=a(142),s=a(742),c=a(438),o=a(819),l=a(814),u=a(916),d=a(302),m=a(51),h=a(1398),b=a(1399),j=a(1400),p=a(823),x=a(6),g=a(250),O=a(0),f="/static/images/logo/auth0.svg",v="/static/images/logo/firebase.svg",w="/static/images/logo/jwt.svg",y=Object(x.a)(n.a)((function(e){var t=e.theme;return"\n    width: 90px;\n    height: 80px;\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    position: relative;\n    background: ".concat(t.colors.alpha.black[5],";\n    margin: 0 ").concat(t.spacing(1),";\n    border: 1px solid ").concat(t.colors.alpha.black[10],";\n    transition: ").concat(t.transitions.create(["all"]),";\n\n    &:hover {\n      border-color: ").concat(t.colors.primary.main,";\n      background: ").concat(t.colors.alpha.white[100],";\n    }\n")})),k=Object(x.a)(n.a)((function(e){var t=e.theme;return"\n    padding: ".concat(t.spacing(3),";\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    border-bottom-right-radius: 0;\n    border-bottom-left-radius: 0;\n")})),S=Object(x.a)(i.a)((function(){return"\n    height: 100%;\n    display: flex;\n    flex: 1;\n    flex-direction: column;\n"})),W=Object(x.a)(i.a)((function(){return"\n  overflow: auto;\n  display: flex;\n  width: 100%;\n  flex: 1;\n  padding: 20px;\n"}));t.default=function(){var e=Object(m.a)().method,t=Object(p.a)().t;return Object(O.jsx)(d.a,{title:"Register - Basic",children:Object(O.jsxs)(S,{children:[Object(O.jsx)(W,{children:Object(O.jsxs)(s.a,{maxWidth:"sm",children:[Object(O.jsx)(g.a,{}),Object(O.jsxs)(n.a,{sx:{mt:3,px:4,pt:5,pb:3},children:[Object(O.jsxs)(i.a,{children:[Object(O.jsx)(c.a,{variant:"h2",sx:{mb:1},children:t("Create account")}),Object(O.jsx)(c.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",sx:{mb:3},children:t("Fill in the fields below to sign up for an account.")})]}),"Auth0"===e&&Object(O.jsx)(h.a,{}),"FirebaseAuth"===e&&Object(O.jsx)(b.a,{}),"JWT"===e&&Object(O.jsx)(j.a,{}),Object(O.jsxs)(i.a,{mt:4,children:[Object(O.jsx)(c.a,{component:"span",variant:"subtitle2",color:"text.primary",fontWeight:"bold",children:t("Already have an account?")})," ",Object(O.jsx)(o.a,{component:r.b,to:"/login-basic",children:Object(O.jsx)("b",{children:"Sign in here"})})]})]})]})}),Object(O.jsxs)(k,{children:[Object(O.jsxs)(i.a,{mb:3,children:[Object(O.jsx)(l.a,{arrow:!0,placement:"top",title:"Auth0",children:Object(O.jsx)(y,{children:Object(O.jsx)("img",{height:50,alt:"Auth0",src:f})})}),Object(O.jsx)(l.a,{arrow:!0,placement:"top",title:"Firebase",children:Object(O.jsx)(y,{children:Object(O.jsx)("img",{height:50,alt:"Firebase",src:v})})}),Object(O.jsx)(l.a,{arrow:!0,placement:"top",title:"JSON Web Token",children:Object(O.jsx)(y,{children:Object(O.jsx)("img",{height:50,alt:"JSON Web Token",src:w})})})]}),Object(O.jsx)(u.a,{severity:"warning",children:t("Learn how to switch between auth methods by reading the section we\u2019ve prepared in the documentation.")})]})]})})}},834:function(e,t,a){"use strict";var r=a(1);t.a=function(){var e=Object(r.useRef)(!0);return Object(r.useEffect)((function(){return function(){e.current=!1}}),[]),e}}}]);
//# sourceMappingURL=122.a48d9ce2.chunk.js.map