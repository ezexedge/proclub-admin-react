(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[64],{2207:function(e,t,n){"use strict";n.r(t);var c=n(17),a=n.n(c),r=n(29),i=n(10),s=n(1),j=n(302),o=n(166),l=n(19),d=n(822),x=n(142),b=n(438),h=n(803),O=n(823),u=n(856),p=n.n(u),m=n(0);var f=function(){var e=Object(O.a)().t;return Object(m.jsxs)(d.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(x.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:Object(m.jsxs)(x.a,{children:[Object(m.jsx)(b.a,{variant:"h3",component:"h3",gutterBottom:!0,children:e("Storefront")}),Object(m.jsx)(b.a,{variant:"subtitle2",children:e("This is a list of all commerce products")})]})})}),Object(m.jsx)(d.a,{item:!0,children:Object(m.jsx)(h.a,{sx:{mt:{xs:2,sm:0}},component:l.b,startIcon:Object(m.jsx)(p.a,{}),to:"/preview/management/commerce/products",variant:"contained",children:e("Manage products")})})]})},g=n(32),v=n(1408),y=n(298),w=n(741),C=n(1405),I=n(1409),P=n(2210),k=n(808),S=n(804),_=n(1153),z=n(848),A=n(809),R=n(1404),W=n(6),E=n(1114),M=n.n(E),D=Object(W.a)(v.a)((function(){return"\n      &.Mui-expanded {\n        min-height: 48px;\n      }\n\n      .MuiAccordionSummary-content.Mui-expanded {\n        margin: 12px 0;\n      }\n  "})),L=Object(W.a)(y.b)((function(){return"\n      &.MuiButtonBase-root {\n        border-radius: 0;\n      }\n  "}));var F=function(){var e=Object(O.a)().t,t=Object(s.useState)([0]),n=Object(i.a)(t,2),c=n[0],a=n[1],r=function(e){var t=c.indexOf(e),n=Object(g.a)(c);-1===t?n.push(e):n.splice(t,1),a(n)},j=Object(s.useState)([0]),o=Object(i.a)(j,2),l=o[0],d=o[1],x=function(e){var t=l.indexOf(e),n=Object(g.a)(l);-1===t?n.push(e):n.splice(t,1),d(n)},h=Object(s.useState)([200,800]),u=Object(i.a)(h,2),p=u[0],f=u[1];return Object(m.jsxs)(w.a,{children:[Object(m.jsxs)(C.a,{defaultExpanded:!0,children:[Object(m.jsx)(D,{expandIcon:Object(m.jsx)(M.a,{}),children:Object(m.jsx)(b.a,{variant:"h5",children:e("Price Range")})}),Object(m.jsx)(I.a,{sx:{pt:5},children:Object(m.jsx)(P.a,{value:p,step:50,min:100,max:2e3,onChange:function(e,t){f(t)},valueLabelDisplay:"on",valueLabelFormat:function(e){return Object(m.jsxs)("div",{children:["$",e]})}})})]}),Object(m.jsx)(k.a,{}),Object(m.jsxs)(C.a,{defaultExpanded:!0,children:[Object(m.jsx)(D,{expandIcon:Object(m.jsx)(M.a,{}),children:Object(m.jsx)(b.a,{variant:"h5",children:e("Categories")})}),Object(m.jsx)(I.a,{sx:{p:0},children:Object(m.jsx)(S.a,{component:"div",children:[{id:1,name:"Toys & Hobbies",value:"toys_hobbies"},{id:2,name:"Office Supplies",value:"office_supplies"},{id:3,name:"Electronics",value:"electronics"},{id:4,name:"Video Games",value:"video_games"}].map((function(e){return Object(m.jsxs)(L,{sx:{py:0,px:2},button:!0,onClick:r(e.id),children:[Object(m.jsx)(_.a,{sx:{minWidth:32},children:Object(m.jsx)(z.a,{edge:"start",checked:-1!==c.indexOf(e.id),tabIndex:-1,disableRipple:!0})}),Object(m.jsx)(A.a,{primary:e.name,primaryTypographyProps:{variant:"body1"}})]},e.id)}))})})]}),Object(m.jsx)(k.a,{}),Object(m.jsxs)(C.a,{defaultExpanded:!0,children:[Object(m.jsx)(D,{expandIcon:Object(m.jsx)(M.a,{}),children:Object(m.jsx)(b.a,{variant:"h5",children:e("Rating")})}),Object(m.jsx)(I.a,{sx:{p:0},children:Object(m.jsx)(S.a,{component:"div",children:[{id:1,rating:5},{id:2,rating:4},{id:3,rating:3},{id:4,rating:2},{id:5,rating:1}].map((function(e){return Object(m.jsx)(L,{button:!0,onClick:x(e.id),children:Object(m.jsx)(R.a,{value:e.rating,precision:1,readOnly:!0})},e.id)}))})})]})]})},$=n(810),B=n(813),T=n(33),V=n(742),H=n(797),J=n(41),U=n(121),q=n.n(U),G=n(833),Y=n(100),K=n(727),N=n(755),Q=n(817),X=n(1294),Z=n(1300),ee=n(801),te=n(2208),ne=n(1112),ce=n.n(ne),ae=n(879),re=n.n(ae),ie=n(119),se=n(301),je=n(91),oe=n.n(je),le=n(870),de=n.n(le),xe=n(860),be=n.n(xe),he=function(e){var t=e.products,n=(Object(Y.a)(e,["products"]),Object(s.useState)(0)),c=Object(i.a)(n,2),a=c[0],r=c[1],j=Object(s.useState)(4),o=Object(i.a)(j,2),u=o[0],p=o[1],f=Object(O.a)().t,g=Object(se.b)().enqueueSnackbar,v=Object(s.useState)(""),y=Object(i.a)(v,2),C=y[0],I=y[1],P=Object(s.useState)("grid_view"),S=Object(i.a)(P,2),_=S[0],z=S[1],A=function(){g(f("You added a product to cart"),{variant:"success",preventDuplicate:!0,anchorOrigin:{vertical:"top",horizontal:"right"},TransitionComponent:K.a})},E=function(e,t){r(t)},M=function(e){p(parseInt(e.target.value))},D=function(e,t){return e.filter((function(e){var n=!0;if(t){var c=!1;["name"].forEach((function(n){e[n].toLowerCase().includes(t.toLowerCase())&&(c=!0)})),c||(n=!1)}return n}))}(t,C),L=function(e,t,n){return e.slice(t*n,t*n+n)}(D,a,u),F=Object(W.a)(x.a)((function(e){var t=e.theme;return"\n      .MuiAvatar-root {\n        height: auto;\n        width: ".concat(t.spacing(26),";\n        transition: ").concat(t.transitions.create(["opacity"]),";\n\n        &:hover {\n          opacity: .8;\n        }\n      }\n")})),$=Object(W.a)(B.a)((function(e){var t=e.theme;return"\n       color: ".concat(t.colors.error.main,";\n  \n       &:hover {\n        background: ").concat(t.colors.error.lighter,";\n      }\n  ")}));return Object(m.jsxs)(d.a,{container:!0,spacing:3,children:[Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{children:Object(m.jsx)(N.a,{fullWidth:!0,onChange:function(e){e.persist(),I(e.target.value)},value:C,InputProps:{startAdornment:Object(m.jsx)(Q.a,{position:"start",children:Object(m.jsx)(oe.a,{})})},placeholder:f("Search by product name...")})})}),Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsxs)(x.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(m.jsxs)(x.a,{children:[Object(m.jsxs)(b.a,{component:"span",variant:"subtitle1",children:[f("Showing"),":"]})," ",Object(m.jsxs)("b",{children:[D.length," ",f("products")]})]}),Object(m.jsxs)(X.a,{value:_,exclusive:!0,onChange:function(e,t){z(t)},children:[Object(m.jsx)(Z.a,{disableRipple:!0,value:"list_view",children:Object(m.jsx)(be.a,{})}),Object(m.jsx)(Z.a,{disableRipple:!0,value:"grid_view",children:Object(m.jsx)(de.a,{})})]})]})}),"grid_view"===_&&Object(m.jsx)(m.Fragment,{children:0===L.length?Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(b.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:f("We couldn't find any products matching your search criteria")})}):Object(m.jsxs)(m.Fragment,{children:[L.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(m.jsxs)(w.a,{children:[Object(m.jsx)(F,{p:3,display:"flex",alignItems:"center",justifyContent:"center",children:Object(m.jsx)(ee.a,{component:l.b,to:"/preview/management/commerce/product/"+e.id,src:e.images[0],variant:"rounded"})}),Object(m.jsxs)(x.a,{textAlign:"center",px:3,children:[Object(m.jsx)(b.a,{variant:"h3",sx:{mb:1},children:e.name}),Object(m.jsx)(b.a,{variant:"h6",color:"text.secondary",children:e.summary}),Object(m.jsx)(x.a,{py:2,children:Object(m.jsx)(R.a,{readOnly:!0,defaultValue:e.rating,precision:.5})})]}),Object(m.jsx)(x.a,{display:"flex",justifyContent:"center",children:Object(m.jsxs)(x.a,{children:[Object(m.jsxs)(b.a,{component:"span",variant:0!==e.sale_price?"h4":"h3",sx:{pr:2,textDecorationLine:0!==e.sale_price?"line-through":""},children:["$",re()(e.price).format("0,0.00")]}),0!==e.sale_price&&Object(m.jsx)(b.a,{component:"span",variant:"h3",children:Object(m.jsxs)(ie.a,{color:"error",children:["$",re()(e.sale_price).format("0,0.00")]})})]})}),Object(m.jsx)(x.a,{pb:3,pt:1,display:"flex",justifyContent:"center",children:Object(m.jsx)(h.a,{size:"small",variant:"outlined",onClick:A,children:f("Add to cart")})}),Object(m.jsx)(k.a,{}),Object(m.jsxs)(x.a,{p:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(m.jsx)($,{size:"small",children:Object(m.jsx)(ce.a,{fontSize:"small"})}),Object(m.jsxs)(b.a,{variant:"subtitle2",children:[f("In Stock"),":"," ",Object(m.jsx)(b.a,{component:"span",color:"text.primary",variant:"h4",children:e.stock})]})]})]})},e.id)})),Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{sx:{p:2},children:Object(m.jsx)(te.a,{component:"div",count:D.length,onPageChange:E,onRowsPerPageChange:M,page:a,rowsPerPage:u,rowsPerPageOptions:[4,8,12]})})})]})}),"list_view"===_&&Object(m.jsx)(m.Fragment,{children:0===L.length?Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(b.a,{sx:{py:10},variant:"h3",fontWeight:"normal",color:"text.secondary",align:"center",children:f("We couldn't find any products matching your search criteria")})}):Object(m.jsxs)(m.Fragment,{children:[L.map((function(e){return Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsxs)(w.a,{sx:{p:2,display:{md:"flex"},alignItems:{md:"center"}},children:[Object(m.jsx)(F,{p:2,sx:{justifyContent:{md:"center"}},display:"flex",alignItems:"center",children:Object(m.jsx)(ee.a,{component:l.b,to:"/preview/management/commerce/product/"+e.id,src:e.images[0],variant:"rounded"})}),Object(m.jsx)(H.a,{mdDown:!0,children:Object(m.jsx)(k.a,{sx:{mr:2},orientation:"vertical",flexItem:!0})}),Object(m.jsxs)(x.a,{flex:1,p:2,children:[Object(m.jsx)(R.a,{readOnly:!0,defaultValue:e.rating,precision:.5}),Object(m.jsx)(b.a,{variant:"h3",sx:{my:1},children:e.name}),Object(m.jsx)(b.a,{variant:"subtitle2",children:e.summary}),Object(m.jsxs)(x.a,{py:2,children:[Object(m.jsxs)(b.a,{component:"span",variant:0!==e.sale_price?"h4":"h3",sx:{pr:2,textDecorationLine:0!==e.sale_price?"line-through":""},children:["$",re()(e.price).format("0,0.00")]}),0!==e.sale_price&&Object(m.jsx)(b.a,{component:"span",variant:"h3",children:Object(m.jsxs)(ie.a,{color:"error",children:["$",re()(e.sale_price).format("0,0.00")]})})]}),Object(m.jsxs)(x.a,{display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(m.jsxs)(x.a,{display:"flex",alignItems:"center",children:[Object(m.jsx)(h.a,{sx:{mr:2},size:"small",variant:"outlined",onClick:A,children:f("Add to cart")}),Object(m.jsx)($,{size:"small",children:Object(m.jsx)(ce.a,{fontSize:"small"})})]}),Object(m.jsxs)(b.a,{variant:"subtitle2",children:[f("In Stock"),":"," ",Object(m.jsx)(b.a,{component:"span",color:"text.primary",variant:"h4",children:e.stock})]})]})]})]})},e.id)})),Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{sx:{p:2},children:Object(m.jsx)(te.a,{component:"div",count:D.length,onPageChange:E,onRowsPerPageChange:M,page:a,rowsPerPage:u,rowsPerPageOptions:[4,8,12]})})})]})}),!_&&Object(m.jsx)(d.a,{item:!0,xs:12,children:Object(m.jsx)(w.a,{sx:{textAlign:"center",p:3},children:Object(m.jsx)(b.a,{align:"center",variant:"h4",fontWeight:"normal",color:"text.secondary",sx:{my:5},gutterBottom:!0,children:f("Choose between table or grid views for displaying the projects list.")})})})]})};he.defaultProps={products:[]};var Oe=he,ue=n(70),pe=Object(m.jsx)(ue.Scrollbars,{autoHide:!0,children:Object(m.jsx)(F,{})}),me=Object(W.a)($.a)((function(){return"\n    width: 340px;\n    flex-shrink: 0;\n\n  & > .MuiPaper-root {\n        width: 340px;\n        z-index: 3;\n  }\n"})),fe=Object(W.a)(B.a)((function(e){var t=e.theme;return"\n  width: ".concat(t.spacing(6),";\n  height: ").concat(t.spacing(6),";\n")}));t.default=function(){var e=Object(T.a)(),t=Object(s.useState)(!1),n=Object(i.a)(t,2),c=n[0],l=n[1],b=function(){l(!c)},h=Object(G.a)(),O=Object(s.useState)([]),u=Object(i.a)(O,2),p=u[0],g=u[1],v=Object(s.useCallback)(Object(r.a)(a.a.mark((function e(){var t;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("/api/products");case 3:t=e.sent,h.current&&g(t.data.products),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[h]);return Object(s.useEffect)((function(){v()}),[v]),Object(m.jsxs)(j.a,{title:"Products Platform - Applications",children:[Object(m.jsx)(V.a,{maxWidth:"lg",children:Object(m.jsxs)(d.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(m.jsxs)(d.a,{display:"flex",alignItems:"center",item:!0,xs:12,children:[Object(m.jsx)(H.a,{mdUp:!0,children:Object(m.jsx)(fe,{sx:{mr:1},color:"primary",onClick:b,size:"small",children:Object(m.jsx)(q.a,{})})}),Object(m.jsx)(x.a,{flex:1,mt:3,children:Object(m.jsx)(f,{})})]}),Object(m.jsx)(H.a,{mdDown:!0,children:Object(m.jsx)(d.a,{item:!0,xs:12,md:3,children:Object(m.jsx)(F,{})})}),Object(m.jsx)(d.a,{item:!0,xs:12,md:9,children:p&&Object(m.jsx)(Oe,{products:p})})]})}),Object(m.jsx)(H.a,{mdUp:!0,children:Object(m.jsx)(me,{variant:"temporary",anchor:"rtl"===e.direction?"right":"left",open:c,onClose:b,children:pe})}),Object(m.jsx)(o.a,{})]})}},833:function(e,t,n){"use strict";var c=n(1);t.a=function(){var e=Object(c.useRef)(!0);return Object(c.useEffect)((function(){return function(){e.current=!1}}),[]),e}}}]);
//# sourceMappingURL=64.eb6de355.chunk.js.map