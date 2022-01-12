(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[54],{2155:function(e,t,a){"use strict";a.r(t);var n=a(302),c=a(10),r=a(1),i=a(822),s=a(438),o=a(823),l=a(1801),j=a(0);var d=function(){var e=Object(o.a)().t,t=Object(r.useState)(!1),a=Object(c.a)(t,2),n=a[0],d=a[1];return Object(j.jsxs)(i.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(j.jsxs)(i.a,{item:!0,children:[Object(j.jsx)(s.a,{variant:"h2",component:"h2",sx:{pb:1},children:e("Monitoring")}),Object(j.jsx)(s.a,{variant:"h4",color:"text.secondary",fontWeight:"normal",children:e("This dashboard shows a live status for all your servers and database clusters!")})]}),Object(j.jsx)(i.a,{item:!0,children:Object(j.jsx)(l.a,{sx:{mt:{xs:2,md:0}},onClick:function(){d(!0)},pending:n,variant:"contained",color:"primary",children:e("Refresh view")})})]})},b=a(166),x=a(837),h=a(742),O=a(866),p=a(741),m=a(803),u=a(808),g=a(888),y=a(142),f=a(734),v=a(918),k=a(813),w=a(6),C=a(821),S=a(1370),M=a(832),P=a.n(M),I=a(25),A=a(100),T=a(246),W=a(33),B=function(e){var t=e.data,a=e.labels,n=Object(A.a)(e,["data","labels"]),c=Object(W.a)(),r={datasets:[{label:"Patients",backgroundColor:"transparent",data:t.previous,borderColor:c.palette.primary.main,pointBorderWidth:0,pointRadius:0,pointHoverRadius:0,type:"line"},{label:"Consultations",backgroundColor:"transparent",data:t.current,borderColor:c.colors.error.main,pointBorderWidth:0,pointRadius:0,pointHoverRadius:0,lineTension:.01}],labels:a};return Object(j.jsx)("div",Object(I.a)(Object(I.a)({},n),{},{children:Object(j.jsx)(T.Line,{data:r,options:{responsive:!0,maintainAspectRatio:!1,cornerRadius:6,animation:!1,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1,beginAtZero:!0,min:0,maxTicksLimit:5}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,beginAtZero:!0,min:0,maxTicksLimit:5}}]},tooltips:{enabled:!1},hover:{mode:"nearest",intersect:!0}}})}))},R=Object(w.a)(O.a)((function(){return"\n    .MuiCardHeader-action {\n      align-self: center;\n      margin: 0;\n    }\n"})),z=Object(w.a)(B)((function(){return"\n    height: 150px;\n"}));var L=function(){var e=Object(o.a)().t,t=Object(r.useState)(!0),a=Object(c.a)(t,2),n=a[0],i=a[1];return Object(j.jsxs)(p.a,{children:[Object(j.jsx)(R,{action:Object(j.jsx)(m.a,{variant:"contained",size:"small",children:e("Run diagnostics")}),title:e("Resources Alarm"),subheader:Object(j.jsxs)(j.Fragment,{children:[e("Server load snapshot from")," ",Object(C.a)(Object(S.a)(new Date,13),new Date,{addSuffix:!0})]})}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(g.a,{children:[Object(j.jsx)(y.a,{height:150,children:Object(j.jsx)(z,{data:{current:[22,40,37,14,34,13,31,30,15,29,25,39,21,26,19,16,20,36,27,18],previous:[32,32,32,18,18,18,24,14,24,28,28,28,31,31,31,21,21,21,15,15,15]},labels:["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"]})}),Object(j.jsx)(f.a,{in:n,children:Object(j.jsx)(v.a,{action:Object(j.jsx)(k.a,{"aria-label":"close",color:"inherit",size:"small",onClick:function(){i(!1)},children:Object(j.jsx)(P.a,{fontSize:"inherit"})}),severity:"error",children:e("Your server is overloaded, fix it as soon as possible!")})})]})]})},D=a(801),F=a(804),H=a(298),U=a(809),G=a(31),N=function(e){var t=e.data,a=Object(A.a)(e,["data"]),n=Object(W.a)(),c={datasets:t.datasets.map((function(e){return Object(I.a)(Object(I.a)({},e),{},{borderWidth:0,hoverBorderWidth:0,backgroundColor:[n.colors.success.main,n.colors.success.lighter],hoverBackgroundColor:[n.colors.success.light,Object(G.a)(n.colors.success.lighter,.3)]})})),labels:t.labels};return Object(j.jsx)(T.Doughnut,Object(I.a)({data:c,options:{responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:60,legend:{display:!1},layout:{padding:0},tooltips:{enabled:!1}}},a))},E=a(1146),J=a.n(E),V=a(123),Z=a.n(V),K=a(44),Y=a.n(K),q=a(119),Q=Object(w.a)(N)((function(e){e.theme;return"\n    width: 130px;\n"})),X=Object(w.a)(y.a)((function(e){var t=e.theme;return"\n    position: relative;\n    width: 130px;\n    height: 130px;\n    \n    .ChartText {\n      color: ".concat(t.colors.warning.main,";\n      font-weight: bold;\n      position: absolute;\n      height: 40px;\n      width: 40px;\n      top: 50%;\n      left: 50%;\n      margin: -20px 0 0 -20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n")})),$=Object(w.a)(D.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.success.lighter,";\n      color: ").concat(t.colors.success.main,";\n      width: ").concat(t.spacing(4),";\n      height: ").concat(t.spacing(4),";\n      margin-right: ").concat(t.spacing(1),";\n")})),_=Object(w.a)(D.a)((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.error.lighter,";\n      color: ").concat(t.colors.error.main,";\n      width: ").concat(t.spacing(4),";\n      height: ").concat(t.spacing(4),";\n      margin-right: ").concat(t.spacing(1),";\n")})),ee=Object(w.a)(k.a)((function(e){var t=e.theme;return"\n    color: ".concat(t.colors.alpha.black[70],";\n    border-radius: 100px;\n    \n    :hover {\n      background-color: ").concat(t.colors.alpha.black[10],";\n      color: ").concat(t.colors.alpha.black[100],";\n    }\n")}));var te=function(){var e=Object(o.a)().t;return Object(j.jsxs)(p.a,{sx:{height:"100%"},children:[Object(j.jsx)(O.a,{action:Object(j.jsx)(m.a,{children:e("Check status")}),title:e("Health Status")}),Object(j.jsx)(y.a,{sx:{p:4},children:Object(j.jsxs)(i.a,{container:!0,alignItems:"center",children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:4,children:Object(j.jsxs)(X,{sx:{mr:3},children:[Object(j.jsx)("div",{className:"ChartText",children:Object(j.jsx)(ee,{children:Object(j.jsx)(J.a,{})})}),Object(j.jsx)(Q,{data:{datasets:[{data:[82,18]}]}})]})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:8,children:Object(j.jsxs)(y.a,{display:"flex",alignItems:"flex-start",flexGrow:1,flexDirection:"column",children:[Object(j.jsxs)(y.a,{sx:{pb:2},children:[Object(j.jsx)(s.a,{color:"text.primary",variant:"h1",sx:{pr:.5,display:"inline-flex"},children:"82"}),Object(j.jsx)(s.a,{color:"text.secondary",variant:"h3",sx:{pr:2,display:"inline-flex"},children:"/100"})]}),Object(j.jsxs)(F.a,{disablePadding:!0,sx:{width:"100%"},children:[Object(j.jsxs)(H.b,{disableGutters:!0,sx:{pb:0},children:[Object(j.jsx)(U.a,{primary:e("High accuracy test run"),primaryTypographyProps:{variant:"subtitle2"}}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(q.a,{color:"success",children:Object(j.jsx)("b",{children:e("Ok")})}),Object(j.jsx)($,{sx:{ml:1},children:Object(j.jsx)(Y.a,{})})]})]}),Object(j.jsxs)(H.b,{disableGutters:!0,sx:{pb:0},children:[Object(j.jsx)(U.a,{primary:e("Storage capacity"),primaryTypographyProps:{variant:"subtitle2"}}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(q.a,{color:"success",children:Object(j.jsx)("b",{children:e("Ok")})}),Object(j.jsx)($,{sx:{ml:1},children:Object(j.jsx)(Y.a,{})})]})]}),Object(j.jsxs)(H.b,{disableGutters:!0,sx:{pb:0},children:[Object(j.jsx)(U.a,{primary:e("Performance test"),primaryTypographyProps:{variant:"subtitle2"}}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(q.a,{color:"error",children:Object(j.jsx)("b",{children:e("Failed")})}),Object(j.jsx)(_,{sx:{ml:1},children:Object(j.jsx)(Z.a,{})})]})]})]})]})})]})})]})},ae=a(931),ne=a(433),ce=a(812),re=a(755),ie=a(817),se=a(814),oe=a(1299),le=a(1802),je=a.n(le),de=a(56),be=a.n(de),xe=a(829),he=a.n(xe),Oe=a(828),pe=a(91),me=a.n(pe),ue=Object(w.a)(y.a)((function(e){var t=e.theme;return"\n    .MuiOutlinedInput-root {\n      background: ".concat(t.colors.alpha.white[100],";\n    }\n")})),ge=Object(w.a)(p.a)((function(e){e.theme;return"\n    position: relative;\n    \n    .MuiCard-indicator {\n      position: absolute;\n      left: 0;\n      right: 0;\n      top: 0;\n      height: 5px;\n    }\n"})),ye=Object(w.a)(ae.a)((function(e){var t=e.theme;return"\n    background: ".concat(t.colors.alpha.black[5],";\n    padding: ").concat(t.spacing(2)," ").concat(t.spacing(2),";\n")})),fe=Object(w.a)(y.a)((function(e){var t=e.theme;return"\n    display: flex;\n    margin-right: ".concat(t.spacing(.5),";\n")})),ve=Object(w.a)(D.a)((function(e){var t=e.theme;return"\n        background: ".concat(t.colors.alpha.black[5],";\n        color: ").concat(t.colors.primary.main,";\n        width: ").concat(t.spacing(8),";\n        height: ").concat(t.spacing(8),";\n")})),ke=Object(w.a)(p.a)((function(e){var t=e.theme;return"\n        border: ".concat(t.colors.primary.main," dashed 1px;\n        height: 100%;\n        color: ").concat(t.colors.primary.main,";\n        \n        .MuiCardActionArea-root {\n          height: 100%;\n          justify-content: center;\n          align-items: center;\n          display: flex;\n        }\n        \n        .MuiTouchRipple-root {\n          opacity: .2;\n        }\n        \n        &:hover {\n          border-color: ").concat(t.colors.alpha.black[100],";\n        }\n")}));var we=function(){var e=Object(o.a)().t,t=Object(W.a)(),a=[{value:"1",badge:"15",text:e("All clusters")},{value:"2",badge:"25",text:e("Oracle")},{value:"3",badge:"35",text:e("IBM")},{value:"4",badge:"45",text:e("Microsoft")}],n=[{value:"1",text:e("Sort by name")},{value:"2",text:e("Sort by name")},{value:"3",text:e("Sort by status")},{value:"4",text:e("Sort by hosts")}],l=Object(r.useRef)(null),d=Object(r.useRef)(null),b=Object(r.useState)(!1),x=Object(c.a)(b,2),h=x[0],O=x[1],p=Object(r.useState)(a[0].text),f=Object(c.a)(p,2),v=f[0],k=f[1],w=Object(r.useState)(!1),C=Object(c.a)(w,2),S=C[0],M=C[1],P=Object(r.useState)("Sort by..."),I=Object(c.a)(P,2),A=I[0],T=I[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{variant:"h3",sx:{pb:3},children:e("Datacenter Clusters")}),Object(j.jsxs)(y.a,{display:{xs:"block",md:"flex"},alignItems:"center",justifyContent:"space-between",sx:{pb:3},children:[Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(m.a,{sx:{mr:1},variant:"contained",color:"secondary",ref:l,onClick:function(){return O(!0)},endIcon:Object(j.jsx)(be.a,{fontSize:"small"}),children:v}),Object(j.jsx)(ne.a,{anchorEl:l.current,onClose:function(){return O(!1)},open:h,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},children:a.map((function(e){return Object(j.jsxs)(ce.a,{onClick:function(){return k(e.text)},children:[e.text,Object(j.jsx)(y.a,{sx:{ml:1},children:Object(j.jsx)(Oe.a,{color:"success",children:e.badge})})]},e.value)}))}),Object(j.jsx)(ue,{children:Object(j.jsx)(re.a,{size:"small",InputProps:{startAdornment:Object(j.jsx)(ie.a,{position:"start",children:Object(j.jsx)(me.a,{})})},placeholder:e("Search...")})})]}),Object(j.jsxs)(y.a,{sx:{pt:{xs:2,md:0}},children:[Object(j.jsx)(m.a,{variant:"outlined",ref:d,onClick:function(){return M(!0)},endIcon:Object(j.jsx)(be.a,{fontSize:"small"}),children:A}),Object(j.jsx)(ne.a,{anchorEl:d.current,onClose:function(){return M(!1)},open:S,getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:n.map((function(e){return Object(j.jsx)(ce.a,{onClick:function(){return T(e.text)},children:e.text},e.value)}))}),Object(j.jsx)(m.a,{sx:{ml:1},variant:"contained",startIcon:Object(j.jsx)(je.a,{}),children:e("Create new cluster")})]})]}),Object(j.jsxs)(i.a,{container:!0,spacing:3,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:5,lg:4,children:Object(j.jsxs)(ge,{children:[Object(j.jsx)(y.a,{className:"MuiCard-indicator",sx:{background:"".concat(t.colors.info.main)}}),Object(j.jsxs)(g.a,{sx:{pb:4,pt:7,px:3,textAlign:"center"},children:[Object(j.jsx)("img",{style:{height:"30px"},src:"/static/images/placeholders/logo/netflix-logo.jpg",alt:"..."}),Object(j.jsx)(s.a,{variant:"h3",sx:{pt:2},gutterBottom:!0,children:"Mainframe Analytics Cluster for Visitors and Page Views"}),Object(j.jsxs)(s.a,{variant:"subtitle2",children:[e("Maintained for")," Netflix Inc."]}),Object(j.jsx)(m.a,{variant:"outlined",color:"primary",sx:{mt:3},children:e("View details")})]}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(ye,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsxs)(s.a,{variant:"subtitle1",children:[Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"7"})})," ",e("hosts")]}),Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},variant:"subtitle1",children:[Object(j.jsx)(fe,{sx:{color:"".concat(t.colors.success.main)},children:Object(j.jsx)(Y.a,{})}),Object(j.jsx)(q.a,{color:"success",children:e("available")})]})]})]})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:5,lg:4,children:Object(j.jsxs)(ge,{children:[Object(j.jsx)(y.a,{className:"MuiCard-indicator",sx:{background:"".concat(t.colors.success.main)}}),Object(j.jsxs)(g.a,{sx:{pb:4,pt:7,px:3,textAlign:"center"},children:[Object(j.jsx)("img",{style:{height:"30px"},src:"/static/images/placeholders/logo/google-logo.jpg",alt:"..."}),Object(j.jsx)(s.a,{variant:"h3",sx:{pt:2},gutterBottom:!0,children:"Main Website Sales Monitoring Cluster Database"}),Object(j.jsxs)(s.a,{variant:"subtitle2",children:[e("Maintained for")," Google Corp."]}),Object(j.jsx)(m.a,{variant:"outlined",color:"primary",sx:{mt:3},children:e("View details")})]}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(ye,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(j.jsxs)(s.a,{variant:"subtitle1",children:[Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"15"})})," ",e("hosts")]}),Object(j.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},variant:"subtitle1",children:[Object(j.jsx)(fe,{sx:{color:"".concat(t.colors.warning.main)},children:Object(j.jsx)(J.a,{})}),Object(j.jsx)(q.a,{color:"warning",children:e("provisioning")})]})]})]})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:12,md:2,lg:4,children:Object(j.jsx)(se.a,{arrow:!0,title:e("Click to add a new cluster"),children:Object(j.jsx)(ke,{children:Object(j.jsx)(oe.a,{sx:{px:1},children:Object(j.jsx)(g.a,{children:Object(j.jsx)(ve,{children:Object(j.jsx)(he.a,{fontSize:"large"})})})})})})})]})]})},Ce=a(8),Se=a(910),Me=a(820),Pe=a(1803),Ie=a.n(Pe),Ae=a(197),Te=a.n(Ae),We=a(1804),Be=a.n(We),Re=a(1141),ze=a.n(Re),Le=a(1805),De=a.n(Le),Fe=Object(w.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    background: ".concat(t.colors.error.main,";\n    width: ").concat(t.spacing(1.1),";\n    height: ").concat(t.spacing(1.1),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n")})),He=Object(w.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    background: ".concat(t.colors.success.main,";\n    width: ").concat(t.spacing(1.1),";\n    height: ").concat(t.spacing(1.1),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n")})),Ue=Object(w.a)(Se.a)((function(e){var t=e.theme;return"\n  .MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track,\n    .MuiSwitch-colorPrimary.Mui-checked .MuiSwitch-thumb {\n      background: ".concat(t.colors.success.main,";\n    }\n    \n    .MuiSwitch-colorPrimary.Mui-checked {\n      color: ").concat(t.colors.success.main,";\n    }\n    \n    .MuiSwitch-colorPrimary.Mui-checked:hover {\n      background-color: ").concat(Object(G.a)(t.colors.success.main,.1),";\n    }\n")}));var Ge=function(){var e=Object(o.a)().t,t=Object(r.useState)({server:!0}),a=Object(c.a)(t,2),n=a[0],l=a[1],d=Object(r.useState)({server:!1}),b=Object(c.a)(d,2),x=b[0],h=b[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(s.a,{variant:"h3",sx:{pb:3},children:e("Virtual Servers")}),Object(j.jsxs)(i.a,{container:!0,spacing:3,children:[Object(j.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(j.jsxs)(p.a,{children:[Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,children:[Object(j.jsx)(s.a,{variant:"h5",lineHeight:1,children:"App Staging"}),Object(j.jsxs)(Oe.a,{color:"success",children:[Object(j.jsx)(He,{}),e("active")]})]}),Object(j.jsxs)(y.a,{sx:{px:2,pb:2},children:[Object(j.jsxs)(F.a,{disablePadding:!0,children:[Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Ie.a,{})}),Object(j.jsx)(U.a,{primary:e("IP Address")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"192.168.1.4"})]}),Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Te.a,{})}),Object(j.jsx)(U.a,{primary:e("CPU")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"12 cores"})]}),Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Be.a,{})}),Object(j.jsx)(U.a,{primary:e("RAM")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"32.568 MB"})]}),Object(j.jsx)(u.a,{component:"li"})]}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",pt:2,justifyContent:"space-between",children:[Object(j.jsx)(y.a,{children:Object(j.jsx)(m.a,{variant:"text",children:e("More information")})}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(se.a,{arrow:!0,title:e("Share"),children:Object(j.jsx)(k.a,{sx:{ml:1},size:"small",color:"primary",children:Object(j.jsx)(ze.a,{fontSize:"small"})})}),Object(j.jsx)(se.a,{arrow:!0,title:e("Refresh"),children:Object(j.jsx)(k.a,{sx:{ml:1},size:"small",color:"primary",children:Object(j.jsx)(De.a,{fontSize:"small"})})}),Object(j.jsx)(u.a,{sx:{mx:2},orientation:"vertical",flexItem:!0}),Object(j.jsx)(Ue,{checked:n.server,onChange:function(e){l(Object(I.a)(Object(I.a)({},n),{},Object(Ce.a)({},e.target.name,e.target.checked)))},color:"primary",name:"server"})]})]})]})]})}),Object(j.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(j.jsxs)(p.a,{children:[Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",justifyContent:"space-between",p:2,children:[Object(j.jsx)(s.a,{variant:"h5",lineHeight:1,children:"Ubuntu Server"}),Object(j.jsxs)(Oe.a,{color:"error",children:[Object(j.jsx)(Fe,{}),e("inactive")]})]}),Object(j.jsxs)(y.a,{sx:{px:2,pb:2},children:[Object(j.jsxs)(F.a,{disablePadding:!0,children:[Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Ie.a,{})}),Object(j.jsx)(U.a,{primary:e("IP Address")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"185.155.188.53"})]}),Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Te.a,{})}),Object(j.jsx)(U.a,{primary:e("CPU")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"8 cores"})]}),Object(j.jsx)(u.a,{component:"li"}),Object(j.jsxs)(H.b,{children:[Object(j.jsx)(Me.a,{sx:{minWidth:36},children:Object(j.jsx)(Be.a,{})}),Object(j.jsx)(U.a,{primary:e("RAM")}),Object(j.jsx)(s.a,{variant:"subtitle2",children:"16.586 MB"})]}),Object(j.jsx)(u.a,{component:"li"})]}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",pt:2,justifyContent:"space-between",children:[Object(j.jsx)(y.a,{children:Object(j.jsx)(m.a,{variant:"text",children:e("More information")})}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",children:[Object(j.jsx)(se.a,{arrow:!0,title:e("Share"),children:Object(j.jsx)(k.a,{sx:{ml:1},size:"small",color:"primary",children:Object(j.jsx)(ze.a,{fontSize:"small"})})}),Object(j.jsx)(se.a,{arrow:!0,title:e("Refresh"),children:Object(j.jsx)(k.a,{sx:{ml:1},size:"small",color:"primary",children:Object(j.jsx)(De.a,{fontSize:"small"})})}),Object(j.jsx)(u.a,{sx:{mx:2},orientation:"vertical",flexItem:!0}),Object(j.jsx)(Ue,{checked:x.server,onChange:function(e){h(Object(I.a)(Object(I.a)({},x),{},Object(Ce.a)({},e.target.name,e.target.checked)))},color:"primary",name:"server"})]})]})]})]})})]})]})},Ne=a(316),Ee=a(315),Je=a(318),Ve=a(334),Ze=function(e){var t=e.data,a=e.labels,n=Object(A.a)(e,["data","labels"]),c=Object(W.a)(),r={datasets:[{label:"Previous Period",backgroundColor:"transparent",data:t.previous,borderColor:c.palette.primary.main,pointBorderColor:c.palette.common.white,pointBorderWidth:3,pointRadius:6,pointHoverRadius:10,pointHoverBackgroundColor:c.palette.primary.main,pointHoverBorderColor:c.palette.common.white,pointHoverColor:c.palette.primary.main,pointHoverBorderWidth:4,pointBackgroundColor:c.palette.primary.main,borderDash:[5,10],type:"line"},{label:"Current Period",backgroundColor:c.palette.warning.main,data:t.current,barThickness:18,maxBarThickness:20,barPercentage:.8,categoryPercentage:.8}],labels:a},i={responsive:!0,maintainAspectRatio:!1,cornerRadius:66,animation:!1,legend:{display:!1},layout:{padding:0},scales:{xAxes:[{gridLines:{display:!1,drawBorder:!1},ticks:{display:!1,fontColor:c.palette.text.secondary}}],yAxes:[{gridLines:{display:!1},ticks:{display:!1,padding:12,fontColor:c.palette.text.secondary,beginAtZero:!0,min:4,maxTicksLimit:8}}]},tooltips:{enabled:!0,mode:"index",intersect:!1,caretSize:6,displayColors:!0,yPadding:8,xPadding:16,borderWidth:4,bodySpacing:10,titleFontSize:16,borderColor:c.palette.common.black,backgroundColor:c.palette.common.black,titleFontColor:c.palette.common.white,bodyFontColor:c.palette.common.white,footerFontColor:c.palette.common.white},hover:{mode:"nearest",intersect:!0}};return Object(j.jsx)("div",Object(I.a)(Object(I.a)({},n),{},{children:Object(j.jsx)(T.Bar,{data:r,options:i})}))},Ke=Object(w.a)("img")((function(e){var t=e.theme;return"\n        width: 46px;\n        margin-right: ".concat(t.spacing(1),";\n")})),Ye=Object(w.a)(Ze)((function(e){e.theme;return"\n        height: 200px;      \n"})),qe=Object(w.a)(H.b)((function(e){var t=e.theme;return"\n        border-radius: 0;\n        padding: ".concat(t.spacing(2),";\n")}));var Qe=function(){var e=Object(o.a)().t;return Object(j.jsxs)(p.a,{children:[Object(j.jsx)(O.a,{title:e("Active Servers")}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(i.a,{container:!0,children:[Object(j.jsx)(i.a,{item:!0,xs:12,md:!0,children:Object(j.jsxs)(F.a,{disablePadding:!0,component:"div",children:[Object(j.jsxs)(qe,{button:!0,children:[Object(j.jsx)(Me.a,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:Object(j.jsx)(Ke,{alt:"Germany",src:Ne.a})}),Object(j.jsx)(U.a,{primary:"Frankfurt",primaryTypographyProps:{variant:"h5"},secondary:"material-ui.com",secondaryTypographyProps:{variant:"subtitle1"}}),Object(j.jsxs)(y.a,{sx:{textAlign:"right"},children:[Object(j.jsx)(Oe.a,{color:"success",children:e("active")}),Object(j.jsxs)(s.a,{align:"right",variant:"body2",color:"text.secondary",noWrap:!0,sx:{pt:.5},children:[e("Page Load"),":"," ",Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"36ms"})})]})]})]}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(qe,{button:!0,children:[Object(j.jsx)(Me.a,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:Object(j.jsx)(Ke,{alt:"USA",src:Ee.a})}),Object(j.jsx)(U.a,{primary:"San Francisco",primaryTypographyProps:{variant:"h5"},secondary:"google.com",secondaryTypographyProps:{variant:"subtitle1"}}),Object(j.jsxs)(y.a,{sx:{textAlign:"right"},children:[Object(j.jsx)(Oe.a,{color:"warning",children:e("provisioning")}),Object(j.jsxs)(s.a,{align:"right",variant:"body2",color:"text.secondary",noWrap:!0,sx:{pt:.5},children:[e("Page Load"),":"," ",Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"255ms"})})]})]})]}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(qe,{button:!0,children:[Object(j.jsx)(Me.a,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:Object(j.jsx)(Ke,{alt:"Spain",src:Je.a})}),Object(j.jsx)(U.a,{primary:"Barcelona",primaryTypographyProps:{variant:"h5"},secondary:"example.xyz",secondaryTypographyProps:{variant:"subtitle1"}}),Object(j.jsxs)(y.a,{sx:{textAlign:"right"},children:[Object(j.jsx)(Oe.a,{color:"error",children:e("high risk")}),Object(j.jsxs)(s.a,{align:"right",variant:"body2",color:"text.secondary",noWrap:!0,sx:{pt:.5},children:[e("Page Load"),":"," ",Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"387ms"})})]})]})]}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(qe,{button:!0,children:[Object(j.jsx)(Me.a,{sx:{minWidth:"36px",display:"flex",alignItems:"center"},children:Object(j.jsx)(Ke,{alt:"USA",src:Ve.a})}),Object(j.jsx)(U.a,{primary:"Toulouse",primaryTypographyProps:{variant:"h5"},secondary:"city.example",secondaryTypographyProps:{variant:"subtitle1"}}),Object(j.jsxs)(y.a,{sx:{textAlign:"right"},children:[Object(j.jsx)(Oe.a,{color:"error",children:e("high risk")}),Object(j.jsxs)(s.a,{align:"right",variant:"body2",color:"text.secondary",noWrap:!0,sx:{pt:.5},children:[e("Page Load"),":"," ",Object(j.jsx)(q.a,{color:"black",children:Object(j.jsx)("b",{children:"456ms"})})]})]})]})]})}),Object(j.jsx)(u.a,{orientation:"vertical",flexItem:!0}),Object(j.jsx)(i.a,{item:!0,xs:12,md:!0,children:Object(j.jsxs)(y.a,{sx:{p:3,height:"100%",display:"flex",flexDirection:"column"},children:[Object(j.jsx)(v.a,{severity:"warning",children:e("Too many servers have problems starting!")}),Object(j.jsx)(Ye,{data:{current:[1008,940,1010,821,1035,1030,957,926,993,1021,997,879],previous:[648,745,897,743,635,842,811,696,878,987,747,731]},labels:["Jan","Feb","Mar","Apr","May","Jun","Aug","Sep","Oct","Nov","Dec"]})]})})]})]})},Xe=a(1806),$e=Object(w.a)("span")((function(e){var t=e.theme;return"\n    border-radius: 22px;\n    width: ".concat(t.spacing(1.5),";\n    height: ").concat(t.spacing(1.5),";\n    display: inline-block;\n    margin-right: ").concat(t.spacing(.5),";\n")}));var _e=function(){var e=Object(o.a)().t,t=Object(W.a)();return Object(j.jsxs)(p.a,{sx:{display:"flex",flexDirection:"column",height:"100%"},children:[Object(j.jsx)(O.a,{title:e("Europe Data Centers")}),Object(j.jsx)(u.a,{}),Object(j.jsxs)(Xe.ComposableMap,{projection:"geoAzimuthalEqualArea",projectionConfig:{rotate:[-10,-48.5,0],scale:1350},children:[Object(j.jsx)(Xe.Geographies,{geography:"https://raw.githubusercontent.com/leakyMirror/map-of-europe/master/TopoJSON/europe.topojson",children:function(e){return e.geographies.map((function(e){return Object(j.jsx)(Xe.Geography,{geography:e,fill:t.colors.alpha.black[100],stroke:t.colors.alpha.white[30]},e.rsmKey)}))}}),Object(j.jsx)(Xe.Marker,{coordinates:[-3.4,52.3],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"United Kingdom",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[3.12,48.37],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"France",children:Object(j.jsx)("circle",{r:12,fill:t.colors.success.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[10.51,51.72],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Germany 1",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[10.54,51.74],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Germany 2",children:Object(j.jsx)("circle",{r:12,fill:t.colors.success.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[18.5,51.39],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Poland",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[-4.2,39.68],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Spain",children:Object(j.jsx)("circle",{r:12,fill:t.colors.success.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[14.18,57.83],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Sweden",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[27.88,50.08],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Ukraine",children:Object(j.jsx)("circle",{r:12,fill:t.colors.success.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[24.19,44.87],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Romania",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[10.15,48.73],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Germany 3",children:Object(j.jsx)("circle",{r:12,fill:t.colors.success.main})})}),Object(j.jsx)(Xe.Marker,{coordinates:[21.89,49.03],children:Object(j.jsx)(se.a,{placement:"top",arrow:!0,title:"Slovakia",children:Object(j.jsx)("circle",{r:12,fill:t.colors.error.main})})})]}),Object(j.jsxs)(y.a,{display:"flex",alignItems:"center",justifyContent:"center",my:2,children:[Object(j.jsxs)(s.a,{variant:"subtitle1",color:"text.primary",sx:{mx:1,display:"flex",alignItems:"center"},children:[Object(j.jsx)($e,{style:{background:t.colors.error.main}}),e("Highest downtime")]}),Object(j.jsxs)(s.a,{variant:"subtitle1",color:"text.primary",sx:{mx:1,display:"flex",alignItems:"center"},children:[Object(j.jsx)($e,{style:{background:t.colors.success.main}}),e("Best Uptime")]})]})]})},et=a(1477),tt=a.n(et);var at=function(){var e=Object(o.a)().t,t=Object(W.a)();return Object(j.jsx)(p.a,{sx:{py:2,display:"flex",alignItems:"center",height:"100%"},children:Object(j.jsxs)(y.a,{sx:{width:"100%"},children:[Object(j.jsx)(s.a,{align:"center",variant:"h3",sx:{mb:2},children:e("CPU Usage")}),Object(j.jsx)(s.a,{align:"center",variant:"h3",fontWeight:"normal",color:"text.secondary",gutterBottom:!0,children:e("Today")}),Object(j.jsx)(tt.a,{style:{width:"90%",margin:"0 auto"},nrOfLevels:16,hideText:!0,colors:[t.colors.error.main,t.colors.warning.main,t.colors.success.main],needleColor:t.colors.alpha.black[100],needleBaseColor:t.colors.alpha.black[100],arcWidth:.25,arcPadding:.02,cornerRadius:3,percent:.59}),Object(j.jsx)(s.a,{align:"center",variant:"h1",children:"59%"}),Object(j.jsx)(u.a,{sx:{mx:3,mt:2,mb:4}}),Object(j.jsx)(s.a,{align:"center",variant:"h3",fontWeight:"normal",color:"text.secondary",gutterBottom:!0,children:e("Yesterday")}),Object(j.jsx)(tt.a,{style:{width:"80%",margin:"0 auto"},nrOfLevels:16,hideText:!0,colors:[t.colors.primary.main,t.colors.primary.light,t.colors.primary.lighter],needleColor:t.colors.alpha.black[100],needleBaseColor:t.colors.alpha.black[100],arcWidth:.2,arcPadding:.02,cornerRadius:3,percent:.47}),Object(j.jsxs)(s.a,{align:"center",variant:"h2",children:["47% ",Object(j.jsxs)(q.a,{color:"success",children:["(",e("good"),")"]})]})]})})},nt=function(e){var t=e.data,a=Object(A.a)(e,["data"]),n={datasets:t.datasets.map((function(e){return Object(I.a)(Object(I.a)({},e),{},{borderWidth:0,hoverBorderWidth:0})})),labels:t.labels};return Object(j.jsx)(T.Doughnut,Object(I.a)({data:n,options:{responsive:!0,maintainAspectRatio:!1,animation:!1,cutoutPercentage:60,legend:{display:!1},layout:{padding:0},tooltips:{enabled:!1}}},a))},ct=Object(w.a)(nt)((function(e){e.theme;return"\n    width: 120px;\n"})),rt=Object(w.a)(y.a)((function(e){e.theme;return"\n    position: relative;\n    width: 120px;\n    height: 120px;\n    \n    .ChartText {\n      font-weight: bold;\n      position: absolute;\n      height: 40px;\n      width: 40px;\n      top: 50%;\n      left: 50%;\n      font-size: 19px;\n      margin: -20px 0 0 -20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n"}));var it=function(){var e=Object(o.a)().t,t=Object(W.a)(),a={datasets:[{backgroundColor:[t.colors.error.main,Object(G.a)(t.colors.error.light,.15)],hoverBackgroundColor:[t.colors.error.dark,Object(G.a)(t.colors.error.light,.25)],data:[25,75]}]};return Object(j.jsxs)(p.a,{sx:{px:{lg:4,xs:2,md:3},py:{lg:7.08,xs:4},display:"flex",alignItems:"center"},children:[Object(j.jsxs)(rt,{sx:{mr:3},children:[Object(j.jsx)("div",{className:"ChartText",style:{color:t.colors.error.main},children:Object(j.jsx)("span",{children:"25%"})}),Object(j.jsx)(ct,{data:a})]}),Object(j.jsx)(s.a,{variant:"h1",children:e("Storage Usage")})]})},st=Object(w.a)(nt)((function(e){e.theme;return"\n    width: 120px;\n"})),ot=Object(w.a)(y.a)((function(e){e.theme;return"\n    position: relative;\n    width: 120px;\n    height: 120px;\n    \n    .ChartText {\n      font-weight: bold;\n      position: absolute;\n      height: 40px;\n      width: 40px;\n      top: 50%;\n      left: 50%;\n      font-size: 19px;\n      margin: -20px 0 0 -20px;\n      display: flex;\n      align-items: center;\n      justify-content: center;\n    }\n"}));var lt=function(){var e=Object(o.a)().t,t=Object(W.a)(),a={datasets:[{backgroundColor:[t.colors.info.main,Object(G.a)(t.colors.info.light,.15)],hoverBackgroundColor:[t.colors.info.dark,Object(G.a)(t.colors.info.light,.25)],data:[79,21]}]};return Object(j.jsxs)(p.a,{sx:{px:{lg:4,xs:2,md:3},py:{lg:7.08,xs:4},display:"flex",alignItems:"center"},children:[Object(j.jsxs)(ot,{sx:{mr:3},children:[Object(j.jsx)("div",{className:"ChartText",style:{color:t.colors.info.main},children:Object(j.jsx)("span",{children:"79%"})}),Object(j.jsx)(st,{data:a})]}),Object(j.jsx)(s.a,{variant:"h1",children:e("Memory Usage")})]})};t.default=function(){return Object(j.jsxs)(n.a,{title:"Monitoring Dashboard",children:[Object(j.jsx)(x.a,{children:Object(j.jsx)(d,{})}),Object(j.jsx)(h.a,{maxWidth:"lg",children:Object(j.jsxs)(i.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(j.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(L,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,md:6,children:Object(j.jsx)(te,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(we,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(Ge,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,children:Object(j.jsx)(Qe,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:5,children:Object(j.jsx)(_e,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:3,children:Object(j.jsx)(at,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:12,md:4,children:Object(j.jsxs)(i.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:12,children:Object(j.jsx)(it,{})}),Object(j.jsx)(i.a,{item:!0,xs:12,sm:6,md:12,children:Object(j.jsx)(lt,{})})]})})]})}),Object(j.jsx)(b.a,{})]})}},828:function(e,t,a){"use strict";var n=a(25),c=a(100),r=a(6),i=a(0),s=Object(r.a)("span")((function(e){var t=e.theme;return"\n      background-color: ".concat(t.colors.alpha.black[5],";\n      padding: ").concat(t.spacing(.5,1),";\n      font-size: ").concat(t.typography.pxToRem(13),";\n      border-radius: ").concat(t.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(t.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(t.colors.primary.lighter,";\n          color: ").concat(t.palette.primary.main,"\n        }\n        \n        &-secondary {\n          background-color: ").concat(t.colors.secondary.lighter,";\n          color: ").concat(t.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(t.colors.success.lighter,";\n          color: ").concat(t.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(t.colors.warning.lighter,";\n          color: ").concat(t.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(t.colors.error.lighter,";\n          color: ").concat(t.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(t.colors.info.lighter,";\n          color: ").concat(t.palette.info.main,"\n        }\n      }\n")}));t.a=function(e){e.className;var t=e.color,a=void 0===t?"secondary":t,r=e.children,o=Object(c.a)(e,["className","color","children"]);return Object(i.jsx)(s,Object(n.a)(Object(n.a)({className:"MuiLabel-"+a},o),{},{children:r}))}},837:function(e,t,a){"use strict";var n=a(742),c=a(6),r=a(142),i=a(0),s=Object(c.a)(r.a)((function(e){var t=e.theme;return"\n        padding: ".concat(t.spacing(4,0),";\n")}));t.a=function(e){var t=e.children;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(s,{children:Object(i.jsx)(n.a,{maxWidth:"lg",children:t})})})}}}]);
//# sourceMappingURL=54.d533430f.chunk.js.map