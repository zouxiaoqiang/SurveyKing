(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5565],{5966:function(Y,T,e){"use strict";var z=e(22122),Z=e(81253),L=e(67294),y=e(60692),v=["fieldProps","proFieldProps"],W=["fieldProps","proFieldProps"],g="text",f=function(u){var F=u.fieldProps,x=u.proFieldProps,d=(0,Z.Z)(u,v);return L.createElement(y.Z,(0,z.Z)({mode:"edit",valueType:g,fieldProps:F,filedConfig:{valueType:g},proFieldProps:x},d))},p=function(u){var F=u.fieldProps,x=u.proFieldProps,d=(0,Z.Z)(u,W);return L.createElement(y.Z,(0,z.Z)({mode:"edit",valueType:"password",fieldProps:F,proFieldProps:x,filedConfig:{valueType:g}},d))},E=f;E.Password=p,E.displayName="ProFormComponent",T.Z=E},90672:function(Y,T,e){"use strict";var z=e(22122),Z=e(81253),L=e(67294),y=e(60692),v=["fieldProps","proFieldProps"],W=function(f,p){var E=f.fieldProps,n=f.proFieldProps,u=(0,Z.Z)(f,v);return L.createElement(y.Z,(0,z.Z)({ref:p,mode:"edit",valueType:"textarea",fieldProps:E,proFieldProps:n},u))};T.Z=L.forwardRef(W)},93279:function(Y,T,e){"use strict";var z=e(28991),Z=e(81253),L=e(59250),y=e(13013),v=e(57663),W=e(71577),g=e(30887),f=e(28682),p=e(84305),E=e(88182),n=e(57254),u=e(44545),F=e(94184),x=e.n(F),d=e(67294),Q=e(32070),A=e.n(Q),s=["key","name"],H=function(m){var D=m.children,U=m.menus,r=m.onSelect,j=m.className,I=m.style,a=(0,d.useContext)(E.ZP.ConfigContext),P=a.getPrefixCls,C=P("pro-table-dropdown"),K=d.createElement(f.Z,{onClick:function(t){return r&&r(t.key)}},U==null?void 0:U.map(function(_){return d.createElement(f.Z.Item,{key:_.key},_.name)}));return d.createElement(y.Z,{overlay:K,className:x()(C,j)},d.createElement(W.Z,{style:I},D," ",d.createElement(n.Z,null)))},S=function(m){var D=m.className,U=m.style,r=m.onSelect,j=m.menus,I=j===void 0?[]:j,a=m.children,P=(0,d.useContext)(E.ZP.ConfigContext),C=P.getPrefixCls,K=C("pro-table-dropdown"),_=d.createElement(f.Z,{onClick:function(l){r==null||r(l.key)},items:I.map(function(t){var l=t.key,B=t.name,O=(0,Z.Z)(t,s);return(0,z.Z)((0,z.Z)({key:l},O),{},{title:O.title,label:B})})});return d.createElement(y.Z,{overlay:_,className:x()(K,D)},d.createElement("a",{style:U},a||d.createElement(u.Z,null)))};S.Button=H,T.Z=S},32070:function(){},86468:function(Y,T,e){"use strict";e.d(T,{lq:function(){return u},FQ:function(){return d},fl:function(){return Q}});var z=e(43358),Z=e(34041),L=e(20228),y=e(11382),v=e(11849),W=e(94657),g=e(93224),f=e(3980),p=e(952),E=e(67294),n=e(85893),u=function(s){var H=s.fps,S=H===void 0?30:H,V=s.fetcher,m=s.width,D=s.className,U=s.defaultOptions,r=s.readonly,j=s.value,I=(0,g.Z)(s,["fps","fetcher","width","className","defaultOptions","readonly","value"]),a=(0,E.useState)(!1),P=(0,W.Z)(a,2),C=P[0],K=P[1],_=(0,E.useState)(U||[]),t=(0,W.Z)(_,2),l=t[0],B=t[1],O=E.useRef(0),h=Q(m),J=(0,f.zE)(function(M){K(!0),B([]),O.current+=1;var X=O.current;s.fetcher(M).then(function(R){X===O.current&&(B(R),K(!1))})},S);if(r){var N;return(0,n.jsx)(p.ZP.Item,(0,v.Z)((0,v.Z)({},I),{},{children:(0,n.jsx)("span",{children:(N=l.find(function(M){return M.value===j}))===null||N===void 0?void 0:N.label})}))}return(0,n.jsx)(p.ZP.Item,(0,v.Z)((0,v.Z)({},I),{},{children:(0,n.jsx)(Z.Z,(0,v.Z)({showSearch:!0,placeholder:s.placeholder,filterOption:!1,onSearch:J,allowClear:!0,onFocus:function(){return J("")},onClear:function(){return J("")},loading:C,notFoundContent:C?(0,n.jsx)(y.Z,{size:"small"}):null,options:l},h))}))},F=e(62999),x=e(54680),d=function(s){var H=s.width,S=s.className,V=s.treeData,m=s.placeholder,D=s.readonly,U=s.value,r=(0,g.Z)(s,["width","className","treeData","placeholder","readonly","value"]),j=Q(H);if(D){var I;return(0,n.jsx)(p.ZP.Item,(0,v.Z)((0,v.Z)({},r),{},{children:(0,n.jsx)("span",{children:(I=(0,f.hE)(V,U,"key"))===null||I===void 0?void 0:I.title})}))}return(0,n.jsx)(p.ZP.Item,(0,v.Z)((0,v.Z)({},r),{},{children:(0,n.jsx)(x.Z,(0,v.Z)({dropdownStyle:{maxHeight:400,overflow:"auto"},treeData:V,placeholder:m,treeDefaultExpandAll:!0},j))}))};function Q(A){if(!A)return{};if(typeof A=="number")return{style:{width:A}};if(typeof A=="string")return{className:"pro-field ".concat(typeof A=="string"?"pro-field-".concat(A):"")}}},79871:function(Y,T,e){"use strict";e.d(T,{G:function(){return K},y:function(){return C}});var z=e(57663),Z=e(71577),L=e(3182),y=e(71194),v=e(50146),W=e(34792),g=e(48086),f=e(94657),p=e(83279),E=e(94043),n=e.n(E),u=e(3980),F=e(57119),x=e(49101),d=e(16894),Q=e(93279),A=e(80937),s=e(60780),H=e.n(s),S=e(67294),V=e(11849),m=e(90672),D=e(952),U=e(71975),r=e(5966),j=e(77613),I=e(86468),a=e(85893),P=(0,j.P)(function(_){var t=_.dept,l=_.readonly,B=_.onClose,O=_.onOk,h=(0,u.m2)(),J=(0,S.useRef)(),N=!!(t!=null&&t.id),M=h.depts,X=(0,S.useMemo)(function(){return H()(M.map(function(R){return{value:R.id,title:R.name,key:R.id,parentId:R.parentId}}),{parentProperty:"parentId",customID:"value"})},[M]);return(0,a.jsxs)(U.a,{title:l?"\u7EC4\u7EC7\u673A\u6784\u8BE6\u60C5":N?"\u4FEE\u6539\u7EC4\u7EC7\u673A\u6784":"\u65B0\u5EFA\u7EC4\u7EC7\u673A\u6784",formRef:J,initialValues:(0,V.Z)({},t),visible:!0,submitter:{submitButtonProps:{style:{display:l?"none":"block"}}},drawerProps:{forceRender:!0,destroyOnClose:!0,onClose:function(){B()}},onFinish:function(){var R=(0,L.Z)(n().mark(function i(o){var c;return n().wrap(function(G){for(;;)switch(G.prev=G.next){case 0:return G.next=2,h.saveOrUpdateDept((0,V.Z)((0,V.Z)({},t),o));case 2:c=G.sent,c.success?O():g.default.error("\u4FDD\u5B58\u5931\u8D25");case 4:case"end":return G.stop()}},i)}));return function(i){return R.apply(this,arguments)}}(),children:[(0,a.jsxs)(D.ZP.Group,{children:[(!t||t&&t.id!=="1")&&M.length>0&&(0,a.jsx)(I.FQ,{name:"parentId",width:"md",treeData:X,label:"\u4E0A\u7EA7\u90E8\u95E8",placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",required:!0,readonly:l,value:t==null?void 0:t.id,rules:[{required:!0,message:"\u4E0A\u7EA7\u90E8\u95E8\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,a.jsx)(r.Z,{name:"code",width:"md",label:"\u7F16\u7801",placeholder:"\u8BF7\u8F93\u5165\u7F16\u7801",readonly:l,required:!0,rules:[{required:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A"}]})]}),(0,a.jsxs)(D.ZP.Group,{children:[(0,a.jsx)(r.Z,{name:"name",width:"md",label:"\u5168\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5168\u79F0",readonly:l,required:!0,rules:[{required:!0,message:"\u5168\u79F0\u4E0D\u80FD\u4E3A\u7A7A"}]}),(0,a.jsx)(r.Z,{name:"shortName",width:"md",label:"\u7B80\u79F0",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u7B80\u79F0",readonly:l,required:!0})]}),(0,a.jsx)(D.ZP.Group,{children:(0,a.jsx)(I.lq,{fps:2,name:"managerId",width:"md",label:"\u8D1F\u8D23\u4EBA",placeholder:"\u8F93\u5165\u59D3\u540D\u68C0\u7D22",readonly:l,value:t==null?void 0:t.managerId,defaultOptions:N?[{label:t.managerName,value:t.managerId}]:void 0,fetcher:function(i){return u.hi.loadUsers({name:i}).then(function(o){return o.list.map(function(c){return{label:c.name,value:c.id}})})}})}),(0,a.jsx)(D.ZP.Group,{children:(0,a.jsx)(m.Z,{name:"remark",width:690,label:"\u5907\u6CE8",id:"form-name",placeholder:"\u8BF7\u8F93\u5165\u5907\u6CE8",readonly:l})})]})});function C(_,t){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"id",B=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(!t)return _;for(var O=(0,p.Z)(_);O.length;){var h=O[B?"pop":"shift"]();if(h&&h[l]===t)return[h];h!=null&&h.children&&O.push.apply(O,(0,p.Z)(h.children))}return null}var K=(0,A.Pi)(function(_){var t=_.selectedDept,l=(0,u.m2)(),B=l.loading,O=(0,S.useRef)(),h=(0,S.useState)({visible:!1}),J=(0,f.Z)(h,2),N=J[0],M=J[1],X=C(H()(l.depts,{customID:"id",parentProperty:"parentId"}),t),R=[{title:"\u673A\u6784\u540D\u79F0",dataIndex:"name",width:200},{title:"\u673A\u6784\u7B80\u79F0",dataIndex:"shortName",search:!1,width:200},{title:"\u8D1F\u8D23\u4EBA",dataIndex:"managerName",search:!1,width:150},{title:"\u64CD\u4F5C",valueType:"option",render:function(o,c){return[(0,a.jsx)("a",{onClick:function(){return M({visible:!0,current:c,readonly:!0})},children:"\u8BE6\u60C5"},"editable"),(0,a.jsx)(Q.Z,{onSelect:function(G){if(G==="edit"&&M({visible:!0,current:c}),G==="delete"){if(c.children&&c.children.length>0){g.default.error("\u8BF7\u5148\u5220\u9664\u5B50\u673A\u6784\uFF01");return}v.Z.confirm({title:"\u5220\u9664",content:"\u786E\u5B9A\u5220\u9664\u5F53\u524D\u673A\u6784?",icon:(0,a.jsx)(F.Z,{}),onOk:function(){l.deleteDept(c.id)}})}},menus:[{key:"edit",name:"\u7F16\u8F91"},{key:"delete",name:"\u5220\u9664"}]},"actionGroup")]}}];return(0,a.jsxs)("div",{children:[(0,a.jsx)(d.ZP,{columns:R,actionRef:O,loading:B,dataSource:X,request:(0,L.Z)(n().mark(function i(){return n().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return c.abrupt("return",l.loadDepts());case 1:case"end":return c.stop()}},i)})),columnsState:{persistenceKey:"pro-table-singe-demos",persistenceType:"localStorage"},rowKey:"id",search:!1,scroll:{x:650},pagination:!1,dateFormatter:"string",headerTitle:"\u673A\u6784\u7BA1\u7406",toolBarRender:function(){return[(0,a.jsx)(Z.Z,{icon:(0,a.jsx)(x.Z,{}),type:"primary",onClick:function(){M({visible:!0})},children:"\u65B0\u5EFA"},"button")]}}),N.visible&&(0,a.jsx)(P,{onOk:function(){M({visible:!1})},dept:N.current,readonly:N.readonly,onClose:function(){return M({visible:!1})}})]})})},40017:function(Y,T,e){"use strict";e.d(T,{A:function(){return I}});var z=e(58024),Z=e(91894),L=e(32157),y=e(32138),v=e(34792),W=e(48086),g=e(49111),f=e(19650),p=e(22385),E=e(94199),n=e(94657),u=e(83279),F=e(3980),x=e(81162),d=e(17828),Q=e(59879),A=e(91816),s=e(86504),H=e(63258),S=e(80937),V=e(60780),m=e.n(V),D=e(67294),U=e(79871),r=e(85893);function j(a){var P=[];return a.forEach(function(C){C.children&&(P.push(C.key),P.push.apply(P,(0,u.Z)(j(C.children))))}),P}var I=(0,S.Pi)(function(a){var P=(0,F.m2)(),C=P.depts;(0,D.useEffect)(function(){P.loadDepts()},[P]);var K=(0,D.useMemo)(function(){return m()(C.map(function(i){return{title:i.name,key:i.id,parentId:i.parentId}}),{parentProperty:"parentId",customID:"key"})},[C]),_=(0,D.useState)([]),t=(0,n.Z)(_,2),l=t[0],B=t[1],O=(0,D.useState)(!0),h=(0,n.Z)(O,2),J=h[0],N=h[1],M=(0,D.useMemo)(function(){return j(K)},[K]),X=function(o){B(o),N(!1)},R=function(o){o.length>0?a.onSelect(o[0]):a.onSelect(void 0)};return(0,r.jsx)(Z.Z,{title:"\u7EC4\u7EC7\u673A\u6784",extra:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(f.Z,{children:[l.length>0?(0,r.jsx)(E.Z,{title:"\u6298\u53E0\u6240\u6709",children:(0,r.jsx)(x.Z,{style:{cursor:"pointer"},onClick:function(){return B([])}})}):(0,r.jsx)(E.Z,{title:"\u5C55\u5F00\u6240\u6709",children:(0,r.jsx)(d.Z,{style:{cursor:"pointer"},onClick:function(){return B(M)}})}),(0,r.jsx)(E.Z,{title:"\u5237\u65B0",children:(0,r.jsx)(Q.Z,{style:{cursor:"pointer"},onClick:function(){return P.loadDepts()}})})]})}),children:(0,r.jsx)(y.Z,{expandedKeys:l,onExpand:X,draggable:!0,autoExpandParent:J,onSelect:R,showIcon:!0,treeData:K,onDrop:function(o){if(o.dragNode.pos!=="".concat(o.node.pos,"-0")){if(o.node.parentId!==o.dragNode.parentId&&o.dragNode.parentId!==o.node.key){W.default.error("\u53EA\u80FD\u6539\u53D8\u540C\u7EA7\u673A\u6784\u7684\u987A\u5E8F");return}var c=o.dragNode.parentId,$=(0,U.y)(K,c,"key");if($){var G,b=(G=$[0].children)===null||G===void 0?void 0:G.map(function(k){return k.key}),w=o.dragNode.key,q=b.indexOf(w);b.splice(q,1,""),b.splice(o.dropPosition,0,w),P.sortDept(b.filter(function(k){return k}))}}},icon:function(o){var c=o.expanded;return c?(0,r.jsx)(A.Z,{}):!o.data.children||o.data.children.length===0?(0,r.jsx)(s.Z,{}):(0,r.jsx)(H.Z,{})}})})})},83197:function(Y,T,e){"use strict";e.r(T);var z=e(13062),Z=e(71230),L=e(89032),y=e(15746),v=e(94657),W=e(99937),g=e(80937),f=e(67294),p=e(79871),E=e(40017),n=e(85893),u=(0,g.Pi)(function(){var F=(0,f.useState)(),x=(0,v.Z)(F,2),d=x[0],Q=x[1];return(0,n.jsx)(W.ZP,{title:!1,children:(0,n.jsxs)(Z.Z,{gutter:20,children:[(0,n.jsx)(y.Z,{xs:0,md:8,children:(0,n.jsx)(E.A,{onSelect:function(s){return Q(s)}})}),(0,n.jsx)(y.Z,{xs:24,md:16,children:(0,n.jsx)(p.G,{selectedDept:d})})]})})});T.default=u}}]);
