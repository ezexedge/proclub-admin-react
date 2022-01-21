(this["webpackJsonptokyo-react-admin-dashboard"]=this["webpackJsonptokyo-react-admin-dashboard"]||[]).push([[51],{2259:function(n,e,t){"use strict";t.r(e);var a=t(25),r=t(17),c=t.n(r),o=t(29),i=t(10),s=t(1),l=t(1534),b=t(312),j=t(337),d=t(303),p=t(167),h=t(823),u=t(439),m=t(804),g=t(824),x=t(830),O=t.n(x),f=t(0);var v=function(){var n=Object(g.a)().t;return Object(f.jsxs)(h.a,{container:!0,justifyContent:"space-between",alignItems:"center",children:[Object(f.jsxs)(h.a,{item:!0,children:[Object(f.jsx)(u.a,{variant:"h3",component:"h3",gutterBottom:!0,children:n("Projects Board")}),Object(f.jsx)(u.a,{variant:"subtitle2",children:n("This is your Kanban style projects board")})]}),Object(f.jsx)(h.a,{item:!0,children:Object(f.jsx)(m.a,{sx:{mt:{xs:2,md:0}},variant:"contained",startIcon:Object(f.jsx)(O.a,{fontSize:"small"}),children:n("Add task")})})]})},y=t(302),k=t(742),w=t(814),I=t(850),C=t(143),S=t(730),z=t(756),M=t(815),T=t(100),R=t(9),A=t(920),P=t(986),B=t(802),L=t(434),W=t(805),D=t(299),_=t(810),E=t(822),F=t(6),H=t(147),N=t.n(H),q=t(1115),J=t.n(q),V=t(1256),K=t.n(V),X=t(1887),Z=t.n(X),G=t(1888),Q=t.n(G),U=t(1889),Y=t.n(U),$=t(1073),nn=t.n($),en=Object(F.a)(A.a)((function(n){var e=n.theme;return"\n      flex-grow: 1;\n      height: 8px;\n      background-color: ".concat(e.colors.alpha.black[10],";\n\n      .MuiLinearProgress-barColorPrimary {\n        background-color: ").concat(e.colors.primary.main,";\n        border-top-right-radius: ").concat(e.general.borderRadius,";\n        border-bottom-right-radius: ").concat(e.general.borderRadius,";\n      }\n")})),tn=Object(F.a)(m.a)((function(n){var e=n.theme;return"\n      padding: ".concat(e.spacing(.5)," ").concat(e.spacing(1),";\n      min-width: 32px;\n\n      .MuiSvgIcon-root {\n        color: ").concat(e.colors.alpha.black[30],";\n        margin-right: ").concat(e.spacing(1),";\n      }\n\n      &:hover {\n        .MuiSvgIcon-root {\n          color: ").concat(e.colors.primary.main,";\n        }\n      }\n")})),an=Object(s.forwardRef)((function(n,e){var t=n.taskId,r=n.dragging,c=(n.index,n.list,Object(T.a)(n,["taskId","dragging","index","list"])),o=Object(b.c)((function(n){return function(n,e){var t=n.projectsBoard,r=t.tasks,c=t.members,o=r.byId[e];return Object(a.a)(Object(a.a)({},o),{},{members:o.memberIds.map((function(n){return c.byId[n]}))})}(n,t)})),l=Object(g.a)().t,j=Object(s.useState)(!1),d=Object(i.a)(j,2),p=d[0],h=d[1],m=Object(s.useRef)(null);return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(C.a,Object(a.a)(Object(a.a)({ref:e},c),{},{children:Object(f.jsxs)(k.a,{sx:{m:2,p:2},className:Object(R.a)({dragging:r}),raised:r,variant:r?"elevation":"outlined",children:[Object(f.jsx)(u.a,{variant:"h4",gutterBottom:!0,noWrap:!0,children:o.name}),Object(f.jsx)(u.a,{variant:"subtitle1",noWrap:!0,children:o.description}),Object(f.jsxs)(C.a,{py:1,children:[o.comments>0&&Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:l("Comments"),children:Object(f.jsxs)(tn,{size:"small",color:"primary",children:[Object(f.jsx)(N.a,{}),o.comments]})}),o.attachments>0&&Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:l("File attachments"),children:Object(f.jsxs)(tn,{size:"small",color:"primary",children:[Object(f.jsx)(K.a,{}),o.attachments]})}),o.sub_items>0&&Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:l("Subtasks"),children:Object(f.jsxs)(tn,{size:"small",color:"primary",children:[Object(f.jsx)(Z.a,{}),o.sub_items]})})]}),Object(f.jsxs)(C.a,{children:[Object(f.jsxs)(u.a,{variant:"subtitle1",children:[l("Due")," ",Object(E.a)(o.due_date,new Date,{addSuffix:!0})]}),Object(f.jsx)(en,{value:o.progress,color:"primary",variant:"determinate"})]}),Object(f.jsxs)(C.a,{pt:2,display:"flex",alignItems:"center",justifyContent:"space-between",children:[Object(f.jsx)(C.a,{children:o.members.length>0&&Object(f.jsx)(P.a,{max:4,children:o.members.map((function(n){return Object(f.jsx)(M.a,{arrow:!0,placement:"top",title:n.name,children:Object(f.jsx)(B.a,{sx:{width:30,height:30},src:n.avatar},n.id)},n.name)}))})}),Object(f.jsx)(w.a,{color:"inherit",size:"small",onClick:function(){h(!0)},ref:m,children:Object(f.jsx)(J.a,{fontSize:"small"})})]})]})}),t),Object(f.jsx)(L.a,{keepMounted:!0,anchorEl:m.current,open:p,onClose:function(){h(!1)},anchorOrigin:{vertical:"center",horizontal:"center"},transformOrigin:{vertical:"center",horizontal:"center"},getContentAnchorEl:null,children:Object(f.jsxs)(W.a,{sx:{p:1},component:"nav",children:[Object(f.jsxs)(D.b,{button:!0,children:[Object(f.jsx)(Q.a,{}),Object(f.jsx)(_.a,{primary:l("View details")})]}),Object(f.jsxs)(D.b,{button:!0,children:[Object(f.jsx)(nn.a,{}),Object(f.jsx)(_.a,{primary:l("Move to archive")})]}),Object(f.jsxs)(D.b,{button:!0,children:[Object(f.jsx)(Y.a,{}),Object(f.jsx)(_.a,{primary:l("Delete")})]})]})})]})}));an.defaultProps={dragging:!1};var rn=an,cn=t(829),on=t(857),sn=t.n(on),ln=Object(F.a)(k.a)((function(n){var e=n.theme;return"\n      width: 340px;\n      min-width: 340px;\n      margin-right: ".concat(e.spacing(3),";\n      border-top-width: 8px;\n      border-top-style: solid;\n  ")})),bn=Object(F.a)(w.a)((function(n){var e=n.theme;return"\n      margin-right: ".concat(e.spacing(.5),";\n      padding: ").concat(e.spacing(.4),";\n\n      .MuiSvgIcon-root {\n        font-size: ").concat(e.typography.pxToRem(17),";\n        color: ").concat(e.colors.primary.main,";\n      }\n  ")})),jn=Object(F.a)(m.a)((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.alpha.black[10],";\n      padding: ").concat(e.spacing(1),";\n  ")})),dn=function(n){var e=n.listId,t=Object(g.a)().t,r=Object(b.c)((function(n){return function(n,e){return n.projectsBoard.lists.byId[e]}(n,e)})),d=Object(b.b)(),p=Object(y.b)().enqueueSnackbar,h=Object(s.useState)(r.name),m=Object(i.a)(h,2),x=m[0],v=m[1],k=Object(s.useState)(!1),w=Object(i.a)(k,2),T=w[0],R=w[1],A=function(){R(!0)},P=function(){var n=Object(o.a)(c.a.mark((function n(){var e;return c.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(n.prev=0,x){n.next=5;break}return v(r.name),R(!1),n.abrupt("return");case 5:return e={name:x},R(!1),n.next=9,d(Object(j.d)(r.id,e));case 9:p(t("The project board has been successfully updated"),{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionComponent:I.a}),n.next=16;break;case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0),p(t("There was an error, try again later"),{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionComponent:I.a});case 16:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}();return Object(f.jsxs)(ln,{sx:{borderColor:r.color},children:[Object(f.jsxs)(C.a,{px:2,pt:2,display:"flex",justifyContent:"space-between",alignItems:"center",children:[T?Object(f.jsx)(S.a,{onClickAway:P,children:Object(f.jsx)(z.a,{value:x,size:"small",onBlur:P,onChange:function(n){n.persist(),v(n.target.value)},variant:"outlined",margin:"dense"})}):Object(f.jsx)(u.a,{color:"inherit",variant:"h3",onClick:A,children:r.name}),Object(f.jsxs)(C.a,{display:"flex",alignItems:"center",children:[Object(f.jsx)(M.a,{arrow:!0,placement:"top",title:t("Rename"),children:Object(f.jsx)(bn,{onClick:A,children:Object(f.jsx)(sn.a,{})})}),Object(f.jsx)(cn.a,{color:"primary",children:Object(f.jsx)("b",{children:r.taskIds.length})})]})]}),Object(f.jsx)(C.a,{px:2,pt:2,children:Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:t("Add new task"),children:Object(f.jsx)(jn,{size:"small",color:"secondary",fullWidth:!0,children:Object(f.jsx)(O.a,{fontSize:"small"})})})}),0===r.taskIds.length&&Object(f.jsx)(C.a,{p:4,textAlign:"center",children:Object(f.jsx)(u.a,{variant:"subtitle2",children:t("Drag tasks here to assign them to this board")})}),Object(f.jsx)(l.c,{droppableId:r.id,children:function(n){return Object(f.jsxs)(C.a,{sx:{minHeight:260},ref:n.innerRef,children:[r.taskIds.map((function(n,e){return Object(f.jsx)(l.b,{draggableId:n,index:e,children:function(t,c){return Object(f.jsx)(rn,Object(a.a)(Object(a.a)({taskId:n,dragging:c.isDragging,index:e,list:r,ref:t.innerRef,style:Object(a.a)({},t.draggableProps.style)},t.draggableProps),t.dragHandleProps),n)}},n)})),n.placeholder]})}}),Object(f.jsx)(C.a,{px:2,pb:2,children:Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:t("Add new task"),children:Object(f.jsx)(jn,{size:"small",color:"secondary",fullWidth:!0,children:Object(f.jsx)(O.a,{fontSize:"small"})})})})]})},pn=t(838),hn=t(743),un=t(2228),mn=t(902),gn=t(1535),xn=t(1261),On=t(809),fn=t(1311),vn=t(889),yn=Object(F.a)(C.a)((function(n){var e=n.theme;return"\n      display: flex;\n      overflow-y: hidden;\n      overflow-x: auto;\n      flex-direction: row;\n      padding: ".concat(e.spacing(2),";\n  ")})),kn=Object(F.a)(C.a)((function(n){var e=n.theme;return"\n      margin: 0 -".concat(e.spacing(2),";\n  ")})),wn=Object(F.a)(k.a)((function(n){var e=n.theme;return"\n        border: ".concat(e.colors.primary.main," dashed 1px;\n        height: 100px;\n        flex: 1;\n        min-width: 120px;\n        color: ").concat(e.colors.primary.main,";\n        \n        .MuiCardActionArea-root {\n          height: 100%;\n          justify-content: center;\n          align-items: center;\n          display: flex;\n        }\n        \n        .MuiTouchRipple-root {\n          opacity: .2;\n        }\n        \n        &:hover {\n          border-color: ").concat(e.colors.alpha.black[100],";\n        }\n")})),In=Object(F.a)(B.a)((function(n){var e=n.theme;return"\n        background: ".concat(e.colors.alpha.black[5],";\n        color: ").concat(e.colors.primary.main,";\n        width: ").concat(e.spacing(8),";\n        height: ").concat(e.spacing(8),";\n")})),Cn=Object(F.a)(k.a)((function(n){var e=n.theme;return"\n      padding: ".concat(e.spacing(2),";\n      border: 1px solid ").concat(e.colors.alpha.black[10],";\n  ")})),Sn=Object(F.a)(A.a)((function(n){var e=n.theme;return"\n      flex-grow: 1;\n      height: 6px;\n      background-color: ".concat(e.colors.alpha.black[10],";\n\n      .MuiLinearProgress-barColorPrimary {\n        background-color: ").concat(e.colors.primary.main,";\n        border-top-right-radius: ").concat(e.general.borderRadius,";\n        border-bottom-right-radius: ").concat(e.general.borderRadius,";\n      }\n")})),zn=Object(F.a)(C.a)((function(n){var e=n.theme;return"\n      padding: 0 ".concat(e.spacing(2),";\n      position: relative;\n      bottom: -1px;\n\n      .MuiTabs-root {\n        height: 44px;\n        min-height: 44px;\n      }\n\n      .MuiTabs-scrollableX {\n        overflow-x: auto !important;\n      }\n\n      .MuiTabs-indicator {\n          min-height: 4px;\n          height: 4px;\n          box-shadow: none;\n          bottom: -4px;\n          background: none;\n          border: 0;\n\n          &:after {\n            position: absolute;\n            left: 50%;\n            width: 28px;\n            content: ' ';\n            margin-left: -14px;\n            background: ").concat(e.colors.primary.main,";\n            border-radius: inherit;\n            height: 100%;\n          }\n      }\n\n      .MuiTab-root {\n          &.MuiButtonBase-root {\n              height: 44px;\n              min-height: 44px;\n              background: ").concat(e.colors.alpha.white[50],";\n              border: 1px solid ").concat(e.colors.alpha.black[10],";\n              border-bottom: 0;\n              position: relative;\n              margin-right: ").concat(e.spacing(1),";\n              font-size: ").concat(e.typography.pxToRem(14),";\n              color: ").concat(e.colors.alpha.black[80],";\n              border-bottom-left-radius: 0;\n              border-bottom-right-radius: 0;\n\n              .MuiTouchRipple-root {\n                opacity: .1;\n              }\n\n              &:after {\n                position: absolute;\n                left: 0;\n                right: 0;\n                width: 100%;\n                bottom: 0;\n                height: 1px;\n                content: '';\n                background: ").concat(e.colors.alpha.black[10],";\n              }\n\n              &:hover {\n                color: ").concat(e.colors.alpha.black[100],";\n              }\n          }\n\n          &.Mui-selected {\n              color: ").concat(e.colors.alpha.black[100],";\n              background: ").concat(e.colors.alpha.white[100],";\n              border-bottom-color: ").concat(e.colors.alpha.white[100],";\n\n              &:after {\n                height: 0;\n              }\n          }\n      }\n  ")}));e.default=function(){var n=Object(g.a)().t,e=Object(s.useState)("development_meeting"),t=Object(i.a)(e,2),r=t[0],m=t[1],x=[{value:"react_migration",label:n("React Project Migration")},{value:"development_meeting",label:n("Development Meeting")},{value:"marketing_campaign",label:n("Marketing Campaign")}],k=Object(b.b)(),w=Object(b.c)((function(n){return n.projectsBoard})).lists,S=Object(y.b)().enqueueSnackbar,T=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r,o;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.source,r=t.destination,o=t.draggableId,e.prev=1,r){e.next=4;break}return e.abrupt("return");case 4:if(a.droppableId!==r.droppableId||a.index!==r.index){e.next=6;break}return e.abrupt("return");case 6:if(a.droppableId!==r.droppableId){e.next=11;break}return e.next=9,k(Object(j.b)(o,r.index));case 9:e.next=13;break;case 11:return e.next=13,k(Object(j.b)(o,r.index,r.droppableId));case 13:S(n("Task has been successfully moved"),{variant:"info",anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionComponent:I.a}),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(1),console.error(e.t0),S(n("There was an error, try again later"),{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"center"},TransitionComponent:I.a});case 20:case"end":return e.stop()}}),e,null,[[1,16]])})));return function(n){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){k(Object(j.a)())}),[k]),Object(f.jsxs)(d.a,{title:"Projects Board - Applications",children:[Object(f.jsx)(pn.a,{children:Object(f.jsx)(v,{})}),Object(f.jsx)(hn.a,{maxWidth:"lg",children:Object(f.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(f.jsxs)(h.a,{item:!0,xs:12,children:[Object(f.jsx)(zn,{children:Object(f.jsxs)(un.a,{onChange:function(n,e){m(e)},value:r,variant:"scrollable",textColor:"primary",indicatorColor:"primary",children:[x.map((function(n){return Object(f.jsx)(mn.a,{label:n.label,value:n.value},n.value)})),Object(f.jsx)(mn.a,{href:"#",label:Object(f.jsx)(M.a,{placement:"top",arrow:!0,title:n("Add new project"),children:Object(f.jsx)(O.a,{})}),disabled:!0})]})}),Object(f.jsx)(Cn,{children:Object(f.jsxs)(h.a,{container:!0,direction:"row",justifyContent:"center",alignItems:"stretch",spacing:3,children:[Object(f.jsx)(h.a,{item:!0,xs:12,lg:6,md:6,children:Object(f.jsx)(gn.a,{multiple:!0,sx:{m:2},limitTags:2,options:[{avatar:"/static/images/avatars/1.jpg",name:"Maren Lipshutz"},{avatar:"/static/images/avatars/2.jpg",name:"Zain Vetrovs"},{avatar:"/static/images/avatars/3.jpg",name:"Hanna Siphron"},{avatar:"/static/images/avatars/4.jpg",name:"Cristofer Aminoff"},{avatar:"/static/images/avatars/5.jpg",name:"Maria Calzoni"}],renderOption:function(n,e){return Object(f.jsxs)("li",Object(a.a)(Object(a.a)({},n),{},{children:[Object(f.jsx)(B.a,{sx:{mr:1},src:e.avatar}),e.name]}))},getOptionLabel:function(n){return n.name},renderInput:function(e){return Object(f.jsx)(z.a,Object(a.a)(Object(a.a)({},e),{},{variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},label:n("Assigned"),placeholder:n("Select assignees...")}))},renderTags:function(n,e){return n.map((function(n,t){return Object(f.jsx)(xn.a,Object(a.a)(Object(a.a)({label:n.name},e({index:t})),{},{avatar:Object(f.jsx)(B.a,{src:n.avatar})}))}))}})}),Object(f.jsx)(h.a,{item:!0,xs:12,lg:6,md:6,children:Object(f.jsx)(gn.a,{sx:{m:2},limitTags:2,autoHighlight:!0,options:[{progress:58,name:"Sprint 1"},{progress:43,name:"Sprint 2"},{progress:65,name:"Sprint 3"},{progress:84,name:"Sprint 4"},{progress:43,name:"Sprint 5"}],renderOption:function(n,e){return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("li",Object(a.a)(Object(a.a)({},n),{},{children:Object(f.jsxs)(C.a,{flex:1,py:1,children:[Object(f.jsxs)(C.a,{display:"flex",alignItems:"center",justifyContent:"space-between",pb:1,children:[Object(f.jsx)(u.a,{variant:"h5",children:e.name}),Object(f.jsxs)(cn.a,{color:"success",children:[e.progress,"%"]})]}),Object(f.jsx)(Sn,{value:e.progress,color:"primary",variant:"determinate"})]})})),Object(f.jsx)(On.a,{})]})},getOptionLabel:function(n){return n.name},renderInput:function(e){return Object(f.jsx)(z.a,Object(a.a)(Object(a.a)({},e),{},{variant:"outlined",fullWidth:!0,InputLabelProps:{shrink:!0},label:n("Sprint"),placeholder:n("Select sprint...")}))}})})]})})]}),Object(f.jsx)(h.a,{item:!0,xs:12,children:Object(f.jsx)(kn,{children:Object(f.jsx)(l.a,{onDragEnd:T,children:Object(f.jsxs)(yn,{children:[w.allIds.map((function(n){return Object(f.jsx)(dn,{listId:n},n)})),Object(f.jsx)(M.a,{arrow:!0,title:n("Add a new project panel"),children:Object(f.jsx)(wn,{children:Object(f.jsx)(fn.a,{sx:{px:1},children:Object(f.jsx)(vn.a,{children:Object(f.jsx)(In,{children:Object(f.jsx)(O.a,{fontSize:"large"})})})})})})]})})})})]})}),Object(f.jsx)(p.a,{})]})}},829:function(n,e,t){"use strict";var a=t(25),r=t(100),c=t(6),o=t(0),i=Object(c.a)("span")((function(n){var e=n.theme;return"\n      background-color: ".concat(e.colors.alpha.black[5],";\n      padding: ").concat(e.spacing(.5,1),";\n      font-size: ").concat(e.typography.pxToRem(13),";\n      border-radius: ").concat(e.general.borderRadius,";\n      display: inline-flex;\n      align-items: center;\n      justify-content: center;\n      max-height: ").concat(e.spacing(3),";\n      \n      &.MuiLabel {\n        &-primary {\n          background-color: ").concat(e.colors.primary.lighter,";\n          color: ").concat(e.palette.primary.main,"\n        }\n        \n        &-secondary {\n          background-color: ").concat(e.colors.secondary.lighter,";\n          color: ").concat(e.palette.secondary.main,"\n        }\n        \n        &-success {\n          background-color: ").concat(e.colors.success.lighter,";\n          color: ").concat(e.palette.success.main,"\n        }\n        \n        &-warning {\n          background-color: ").concat(e.colors.warning.lighter,";\n          color: ").concat(e.palette.warning.main,"\n        }\n              \n        &-error {\n          background-color: ").concat(e.colors.error.lighter,";\n          color: ").concat(e.palette.error.main,"\n        }\n        \n        &-info {\n          background-color: ").concat(e.colors.info.lighter,";\n          color: ").concat(e.palette.info.main,"\n        }\n      }\n")}));e.a=function(n){n.className;var e=n.color,t=void 0===e?"secondary":e,c=n.children,s=Object(r.a)(n,["className","color","children"]);return Object(o.jsx)(i,Object(a.a)(Object(a.a)({className:"MuiLabel-"+t},s),{},{children:c}))}},838:function(n,e,t){"use strict";var a=t(743),r=t(6),c=t(143),o=t(0),i=Object(r.a)(c.a)((function(n){var e=n.theme;return"\n        padding: ".concat(e.spacing(4,0),";\n")}));e.a=function(n){var e=n.children;return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)(i,{children:Object(o.jsx)(a.a,{maxWidth:"lg",children:e})})})}}}]);
//# sourceMappingURL=51.ec0d94a5.chunk.js.map