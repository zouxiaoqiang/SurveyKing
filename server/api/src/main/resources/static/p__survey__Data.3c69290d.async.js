(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[650],{81856:function(ee,V,t){"use strict";t.r(V),t.d(V,{Data:function(){return Y},default:function(){return ot}});var l=t(67294),w=t(72625),j=t(18111),b=t(11849),F=t(94657),z=t(5527),E=t(80937),O=t(11628),U=t(21063),te=t(1013),ne=t.n(te),ht=t(71194),R=t(50146),xt=t(57663),D=t(71577),H=t(63439),e=t(85893),ae=(0,E.Pi)(function(i){var n=i.onCancel,r=(0,l.useContext)(j.xi),a=r.dataStore,s=(0,O.IE)(),c=s.schema,d=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,l.useRef)(new Date().getTime()),x=(0,l.useState)(!1),C=(0,F.Z)(x,2),o=C[0],u=C[1],g=function(){return c?(0,e.jsx)(H.O,{ref:v,schema:c,headerVisible:!1,paginationVisible:!1,footerVisible:!1,onUpload:a.upload}):(0,e.jsx)(e.Fragment,{})},I=function(y){var T;u(!0),(T=v.current)===null||T===void 0||T.submit().then(function(N){N?a.saveData({answer:N.values,attachment:N.attachments,metaInfo:{answerInfo:{startTime:h.current,endTime:new Date().getTime()}}}).then(function(){h.current=new Date().getTime(),u(!1),a.loadData(),y&&y()}):u(!1)})};return(0,e.jsx)("div",{ref:d,className:"add-data",children:(0,e.jsx)(R.Z,{visible:!0,maskClosable:!1,getContainer:function(){return d.current},title:"\u6DFB\u52A0\u6570\u636E",width:600,onCancel:n,footer:(0,e.jsxs)("div",{className:"footer",children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(D.Z,{type:"primary",loading:o,onClick:function(){return I(n)},children:"\u63D0\u4EA4"}),(0,e.jsx)(D.Z,{onClick:function(){n()},children:"\u53D6\u6D88"})]}),(0,e.jsx)("div",{children:(0,e.jsx)(D.Z,{loading:o,type:"link",onClick:function(){I(function(){var y;return(y=v.current)===null||y===void 0?void 0:y.reset()})},children:"\u63D0\u4EA4\u5E76\u518D\u586B\u4E00\u4EFD"})})]}),children:(0,e.jsx)("div",{style:{maxHeight:300,overflowY:"auto"},children:g()})})})}),re=(0,E.Pi)(function(){var i=(0,l.useState)(!1),n=(0,F.Z)(i,2),r=n[0],a=n[1];return(0,e.jsxs)("div",{className:"toolbar-item",children:[(0,e.jsxs)("a",{onClick:function(){return a(!0)},children:[(0,e.jsx)(ne(),{size:18,style:{cursor:"pointer"}}),"\u6DFB\u52A0\u6570\u636E"]}),r&&(0,e.jsx)(ae,{onCancel:function(){return a(!1)}})]})}),se=t(93756),le=t.n(se),ie=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore;return(0,e.jsx)("div",{className:"toolbar-item",style:{width:45,borderRight:"1px solid #c5c5c5"},children:(0,e.jsx)("a",{onClick:function(){n.loadData()},children:(0,e.jsx)(le(),{size:18,style:{cursor:"pointer"}})})})}),mt=t(34792),L=t(48086),oe=t(57119),ue=t(73171),ce=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore,r=n.selected,a=(0,l.useRef)(null),s=function(){(r==null?void 0:r.length)===0?L.default.error("\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u533A\u57DF"):R.Z.confirm({title:"\u5220\u9664\u6570\u636E",getContainer:a.current,icon:(0,e.jsx)(oe.Z,{}),content:(0,e.jsxs)("div",{children:[(0,e.jsxs)("div",{className:"delete-content",children:["\u786E\u5B9A\u8981\u5220\u9664\u8FD9 ",(0,e.jsx)("span",{children:r==null?void 0:r.length}),"\u6761\u6570\u636E\u5417\uFF1F"]}),(0,e.jsx)("div",{className:"delete-description",children:"\u63D0\u793A\uFF1A\u5220\u9664\u7684\u6570\u636E\u53EF\u4EE5\u5728\u56DE\u6536\u7AD9\u91CC\u9762\u627E\u56DE"})]}),okText:"\u5220\u9664",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){n.deleteData()},onCancel:function(){}})};return(0,e.jsx)("div",{className:"toolbar-item",ref:a,children:(0,e.jsxs)("a",{onClick:s,children:[(0,e.jsx)(ue.Z,{size:18,style:{cursor:"pointer"}}),"\u5220\u9664\u6570\u636E"]})})}),jt=t(88983),A=t(47933),Ct=t(9715),k=t(93766),de=t(72147),ve=t.n(de),fe=t(1997),he=function(n){var r=n.value,a=n.onChange,s=(0,O.IE)(),c=(0,l.useState)(!1),d=(0,F.Z)(c,2),v=d[0],h=d[1],x=s.schema;return(0,e.jsxs)("div",{children:[(0,e.jsx)(D.Z,{type:"link",onClick:function(){return h(!0)},children:"\u70B9\u51FB\u9009\u62E9"}),x&&(0,e.jsx)(fe.ZP,{visible:v,helpLink:(0,e.jsx)(D.Z,{type:"link",onClick:function(){return window.open("https://surveyking.cn/docs/guides/data/export")},children:"\u5982\u4F55\u81EA\u5B9A\u4E49\u5BFC\u51FA"}),value:r,fieldTypes:["FillBlank","MultipleBlank","Textarea","Select"],title:"\u5BFC\u51FA\u9644\u4EF6\u547D\u540D\u89C4\u5219\u8BBE\u7F6E",schema:s.schema,onCancel:function(){return h(!1)},helperVariables:[{id:"sourceName",path:"sourceName",title:"\u539F\u59CB\u6587\u4EF6\u540D",type:"FillBlank",tooltip:"hello"},{id:"serialNum",path:"serialNum",title:"\u8FDE\u7EED\u5E8F\u53F7",type:"FillBlank",tooltip:"\u4ECE1\u5F00\u59CB\u7684\u5E8F\u53F7"},{id:"serialNumInAnswer",path:"serialNumInAnswer",title:"\u540C\u4E00\u95EE\u5377\u5185\u8FDE\u7EED\u5E8F\u53F7",type:"FillBlank",tooltip:"\u4ECE1\u5F00\u59CB\u7684\u5E8F\u53F7"},{id:"uploadDateTime",path:"uploadDateTime",title:"\u9644\u4EF6\u4E0A\u4F20\u65E5\u671F\u65F6\u95F4",type:"FillBlank",tooltip:"hello"},{id:"uploadDate",path:"uploadDate",title:"\u9644\u4EF6\u4E0A\u4F20\u65E5\u671F",type:"FillBlank",tooltip:"hello"}],functionVisible:!1,onOk:function(o){h(!1),a&&a(o)}})]})},xe={labelCol:{span:6},wrapperCol:{span:18}},me=function(){var n=k.Z.useForm(),r=(0,F.Z)(n,1),a=r[0],s=(0,l.useContext)(j.xi),c=s.dataStore,d=(0,l.useState)(!1),v=(0,F.Z)(d,2),h=v[0],x=v[1],C=(0,l.useState)("answer"),o=(0,F.Z)(C,2),u=o[0],g=o[1],I=(0,l.useState)("source"),f=(0,F.Z)(I,2),y=f[0],T=f[1],N=function(Z){Z.type==="answer"?c.downloadSurvey():c.downloadSurveyAttachment(u,Z.nameExp)};return(0,e.jsxs)("div",{className:"toolbar-item",children:[(0,e.jsx)("a",{title:"Download result",onClick:function(){return x(!0)},children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(ve(),{size:18,style:{cursor:"pointer"}}),"\u5BFC\u51FA"]})}),(0,e.jsx)(R.Z,{title:"\u5BFC\u51FA\u6570\u636E",visible:h,onCancel:function(){return x(!1)},okText:"\u5BFC\u51FA",onOk:function(){N(a.getFieldsValue())},children:(0,e.jsxs)(k.Z,(0,b.Z)((0,b.Z)({name:"validate_other"},xe),{},{initialValues:{type:"answer",dataType:"excel",atttachNameType:"source"},form:a,children:[(0,e.jsx)(k.Z.Item,{name:"type",label:"\u5BFC\u51FA\u5185\u5BB9",children:(0,e.jsxs)(A.ZP.Group,{onChange:function(Z){g(Z.target.value)},children:[(0,e.jsx)(A.ZP,{value:"answer",children:"\u6570\u636E\u8BE6\u60C5\u8868"}),(0,e.jsx)(A.ZP,{value:"attachment",children:"\u7B54\u6848\u9644\u4EF6"}),(0,e.jsx)(A.ZP,{value:"answerAttachment",children:"\u6570\u636E+\u9644\u4EF6"})]})}),u==="answer"&&(0,e.jsx)(k.Z.Item,{name:"dataType",label:"\u5BFC\u51FA\u683C\u5F0F",children:(0,e.jsx)(A.ZP.Group,{children:(0,e.jsx)(A.ZP,{value:"excel",children:"Excel(.xlsx)"})})}),(u==="attachment"||u==="answerAttachment")&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(k.Z.Item,{name:"atttachNameType",label:"\u9644\u4EF6\u547D\u540D",children:(0,e.jsxs)(A.ZP.Group,{onChange:function(Z){return T(Z.target.value)},children:[(0,e.jsx)(A.ZP,{value:"source",children:"\u539F\u59CB\u6587\u4EF6\u540D"}),(0,e.jsx)(A.ZP,{value:"byField",children:"\u901A\u8FC7\u586B\u5199\u7684\u5185\u5BB9\u547D\u540D"})]})}),y==="byField"&&(0,e.jsx)(k.Z.Item,{name:"nameExp",label:"\u5173\u8054\u5B57\u6BB5",children:(0,e.jsx)(he,{})})]})]}))})]})},je=t(14098),Ce=t.n(je),yt=t(57338),ye=t(25084),pt=t(62350),pe=t(75443),gt=t(13062),B=t(71230),St=t(89032),m=t(15746),Q=t(1870),ge=t(58491),Se=t(57254),K=t(24843),Fe=t(27400),De=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore,r=(0,O.IE)(),a=r.schema,s=(0,Fe.a)(),c=s.isMobile,d=(0,l.useRef)(null),v=(0,l.useRef)(null),h=(0,K.A)("-edit"),x=n.currentIndex,C=n.records.length||0,o=n.records[x],u=o.metaInfo,g=(0,l.useState)(!0),I=(0,F.Z)(g,2),f=I[0],y=I[1],T=(0,l.useState)(!1),N=(0,F.Z)(T,2),p=N[0],Z=N[1],ut=(0,l.useState)(!1),J=(0,F.Z)(ut,2),ct=J[0],X=J[1];(0,l.useEffect)(function(){var S,P=o.answer,M=o.attachment;(S=v.current)===null||S===void 0||S.setValues(P,M)},[o]),(0,l.useEffect)(function(){var S;(S=v.current)===null||S===void 0||S.toggleReadOnly(f)},[f]);var dt=function(){n.currentIndex=-1},vt=function(){return a?(0,e.jsx)(H.O,{ref:v,schema:a,headerVisible:!1,footerVisible:!1,paginationVisible:!1,readOnly:f,onUpload:n.upload}):(0,e.jsx)(e.Fragment,{})},q=function(P){P==="up"?n.currentIndex=n.currentIndex-1:n.currentIndex=n.currentIndex+1},_=function(){return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u5E8F\u53F7:"}),(0,e.jsx)(m.Z,{span:16,children:x+1})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u63D0\u4EA4\u4EBA:"}),(0,e.jsx)(m.Z,{span:16,children:"\u65E0"})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u7B54\u5377\u65F6\u957F:"}),(0,e.jsx)(m.Z,{span:16,children:(0,j.gh)(u.answerInfo.endTime-u.answerInfo.startTime)})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u63D0\u4EA4\u65F6\u95F4:"}),(0,e.jsx)(m.Z,{span:16,children:o.createAt})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u4FEE\u6539\u65F6\u95F4:"}),(0,e.jsx)(m.Z,{span:16,children:o.updateAt||"-"})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u586B\u5199\u8BBE\u5907:"}),(0,e.jsx)(m.Z,{span:16,children:u.clientInfo.deviceType})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u64CD\u4F5C\u7CFB\u7EDF:"}),(0,e.jsx)(m.Z,{span:16,children:u.clientInfo.platform})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"\u6D4F\u89C8\u5668:"}),(0,e.jsx)(m.Z,{span:16,children:u.clientInfo.browser})]}),(0,e.jsxs)(B.Z,{children:[(0,e.jsx)(m.Z,{span:8,children:"IP:"}),(0,e.jsx)(m.Z,{span:16,children:u.clientInfo.remoteIp})]})]})},ft=function(){return f?(0,e.jsxs)("div",{children:[(0,e.jsx)(D.Z,{type:"primary",onClick:function(){return y(!1)},children:"\u4FEE\u6539"}),(0,e.jsx)(D.Z,{type:"primary",danger:!0,style:{marginLeft:5},children:(0,e.jsx)(pe.Z,{title:"\u4F60\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u6761\u6570\u636E\u5417\uFF1F",icon:(0,e.jsx)(Q.Z,{style:{color:"red"}}),okText:"\u5220\u9664",cancelText:"\u53D6\u6D88",onConfirm:function(){n.deleteData(x).then(function(){return dt()})},children:(0,e.jsx)("a",{href:"#",children:"\u5220\u9664"})})}),(0,e.jsx)(D.Z,{type:"link",style:{marginLeft:5},onClick:function(){return X(!0)},children:(0,e.jsx)("a",{href:"#",children:"\u8BE6\u60C5"})}),(0,e.jsx)(ye.Z,{placement:"right",autoFocus:!1,visible:ct,onClose:function(){return X(!1)},children:_()})]}):(0,e.jsxs)("div",{children:[(0,e.jsx)(D.Z,{type:"primary",loading:p,onClick:function(){var M;Z(!0),(M=v.current)===null||M===void 0||M.submit().then(function(G){G?n.updateData({answer:G.values,attachment:G.attachments,id:o.id,projectId:o.projectId}).then(function(){Z(!1),y(!0)}):Z(!1)})},children:"\u63D0\u4EA4"}),(0,e.jsx)(D.Z,{style:{marginLeft:10},onClick:function(){return y(!0)},children:"\u53D6\u6D88"})]})};return(0,e.jsx)("div",{ref:d,className:"edit-data ".concat(h),children:(0,e.jsx)(R.Z,{visible:x>=0,maskClosable:!1,getContainer:function(){return d.current},title:!1,width:800,onCancel:function(){return n.currentIndex=-1},footer:!1,children:(0,e.jsxs)(B.Z,{gutter:16,children:[(0,e.jsxs)(m.Z,{xs:24,sm:16,className:h+"-survey-container",children:[(0,e.jsx)("div",{className:h+"-survey-container-title",children:"\u6570\u636E\u8BE6\u60C5"}),(0,e.jsx)("div",{className:h+"-survey-container-content",children:vt()}),(0,e.jsxs)("div",{className:h+"-survey-container-footer",children:[ft(),(0,e.jsxs)("div",{className:"nav",children:[(0,e.jsxs)("span",{children:[x+1,"/",C]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(D.Z,{type:"text",shape:"circle",icon:(0,e.jsx)(ge.Z,{}),disabled:x===0,onClick:function(){return q("up")}}),(0,e.jsx)(D.Z,{type:"text",shape:"circle",icon:(0,e.jsx)(Se.Z,{}),disabled:x===C-1,onClick:function(){return q("down")}})]})]})]})]}),!c&&(0,e.jsxs)(m.Z,{span:8,className:h+"-metaInfo-container",children:[(0,e.jsx)("div",{className:h+"-metaInfo-container-title",children:"\u57FA\u672C\u4FE1\u606F"}),(0,e.jsx)("div",{className:h+"-metaInfo-container-content",children:_()}),(0,e.jsx)("div",{className:h+"-metaInfo-container-footer"})]})]})})})}),Ze=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore,r=n.selected;return(0,e.jsxs)("div",{className:"toolbar-item",children:[(0,e.jsxs)("a",{onClick:function(){r&&r.length>0?n.currentIndex=r[0]:L.default.error("\u8BF7\u70B9\u51FB\u8981\u7F16\u8F91\u7684\u884C")},children:[(0,e.jsx)(Ce(),{size:14,style:{cursor:"pointer"}}),"\u7F16\u8F91\u6570\u636E"]}),n.currentIndex!==-1&&(0,e.jsx)(De,{})]})}),Ee=t(25769),Ie=t.n(Ee),Ft=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore;return(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsx)("a",{title:"Download result",onClick:function(){n.downloadSurveyAttachment()},children:(0,e.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,e.jsx)(Ie(),{size:18,style:{cursor:"pointer"}}),"\u5BFC\u51FA\u9644\u4EF6"]})})})}),Ne=t(72850),Dt=t(49111),Be=t(19650),Ae=function(n){var r=n.onClose,a=(0,l.useContext)(j.xi),s=a.dataStore,c=(0,O.IE)(),d=c.schema,v=s.deletedRecords||[],h=s.recycleSelected,x=c.mode;(0,l.useEffect)(function(){s.loadDeletedData()},[]);var C=(0,l.useMemo)(function(){var o=(0,j.ZZ)(d);return o.length==0?o.push({name:"\u6682\u65E0\u6570\u636E!"}):(x==="exam"&&o.push({name:"examScore",title:"\u5206\u6570",width:100}),o.push({name:"startTime",title:"\u5F00\u59CB\u65F6\u95F4",width:180}),o.push({name:"endTime",title:"\u63D0\u4EA4\u65F6\u95F4",width:180}),o.push({name:"totalTime",title:"\u7B54\u9898\u65F6\u957F"}),o.push({name:"createByName",title:"\u63D0\u4EA4\u4EBA",width:180}),o.push({name:"remoteIp",title:"IP\u5730\u5740"}),o.push({name:"browserType",title:"\u6D4F\u89C8\u5668"}),o.push({name:"deviceType",title:"\u8BBE\u5907\u7C7B\u578B"}),o.push({name:"platform",title:"\u5E73\u53F0\u7C7B\u578B"})),o},[d]);return(0,e.jsx)(R.Z,{visible:!0,onCancel:r,width:750,bodyStyle:{padding:0},closable:!1,footer:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("span",{style:{float:"left"},children:["\u5DF2\u9009\u4E2D ",h==null?void 0:h.length," \u6761"]}),(0,e.jsxs)(Be.Z,{children:[(0,e.jsx)(D.Z,{onClick:r,children:"\u53D6\u6D88"}),(0,e.jsx)(D.Z,{type:"primary",danger:!0,onClick:function(){var u;if(((u=s.recycleSelected)===null||u===void 0?void 0:u.length)===0){L.default.error("\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u6570\u636E");return}R.Z.confirm({title:"\u5F7B\u5E95\u5220\u9664",content:"\u5F7B\u5E95\u5220\u9664\u4E4B\u540E\uFF0C\u8BE5\u6570\u636E\u5C31\u627E\u4E0D\u56DE\u6765\u4E86\uFF0C\u4ECD\u7136\u786E\u5B9A\u8FD9\u6837\u505A\u5417?",okText:"\u786E\u5B9A",okType:"danger",cancelText:"\u53D6\u6D88",onOk:function(){s.physicalDeleteData()}})},children:"\u5F7B\u5E95\u5220\u9664"}),(0,e.jsx)(D.Z,{type:"primary",onClick:function(){var u;if(((u=s.recycleSelected)===null||u===void 0?void 0:u.length)===0){L.default.info("\u8BF7\u9009\u62E9\u8981\u6062\u590D\u7684\u6570\u636E");return}R.Z.confirm({title:"\u6062\u590D\u6570\u636E",content:"\u786E\u8BA4\u5C06\u9009\u4E2D\u7684\u6570\u636E\u4ECE\u56DE\u6536\u7AD9\u6062\u590D\u5417?",okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){s.restoreData()}})},children:"\u6062\u590D"})]})]}),children:(0,e.jsx)(U._$,{editable:!1,height:450,width:730,selectionMode:"cell",allowSorting:!0,schema:C,data:(0,j.IR)(v,C),onSelect:function(u){s.recycleSelected=u.filter(function(g){return g}).map(function(g){return g._i})}})})},Te=(0,E.Pi)(Ae),Pe=(0,E.Pi)(function(){var i=(0,l.useRef)(null),n=(0,l.useState)(!1),r=(0,F.Z)(n,2),a=r[0],s=r[1],c=(0,l.useContext)(j.xi),d=c.dataStore;return(0,e.jsxs)("div",{className:"toolbar-item",ref:i,style:{width:80,borderRight:"1px solid #c5c5c5"},children:[(0,e.jsxs)("a",{onClick:function(){return s(!0)},children:[(0,e.jsx)(Ne.Z,{size:18,style:{cursor:"pointer"}}),"\u56DE\u6536\u7AD9"]}),a&&(0,e.jsx)(Te,{onClose:function(){s(!1),d.loadData()}})]})}),Re=(0,E.Pi)(function(){return(0,e.jsx)("div",{className:"toolbar-item",style:{width:45,borderRight:"1px solid #c5c5c5"},children:(0,e.jsx)("a",{onClick:function(){window.open("https://surveyking.cn/docs/guides/data")},children:(0,e.jsx)(Q.Z,{size:18,style:{cursor:"pointer"}})})})}),Zt=t(59250),be=t(13013),Et=t(30887),W=t(54689),It=t(77883),ke=t(85482),Oe=t(14603),ze=t.n(Oe),Me=t(83434),Ve=t.n(Me),we=t(53758),Le=t.n(we),$e=t(41198),Ge=t.n($e),Ue=t(34994),He=t.n(Ue),Qe=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore,r=n.pagination,a=r.total,s=r.current,c=r.pageSize,d=(0,l.useRef)(c),v=Math.ceil(a/c);c<=0&&(v=1);var h=(s-1)*c+1,x=s*c;(x<=0||x>a)&&(x=a);var C=function(u){typeof u=="number"?n.loadData({current:s,pageSize:u,total:a}):u==="\u663E\u793A\u6240\u6709"?n.loadData({current:s,pageSize:-1,total:a}):R.Z.confirm({icon:null,content:(0,e.jsx)(k.Z.Item,{label:"\u81EA\u5B9A\u4E49\u9875\u7801",children:(0,e.jsx)(ke.Z,{style:{width:200},defaultValue:c,onChange:function(I){d.current=I}})}),okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onOk:function(){n.loadData({current:s,pageSize:d.current,total:a})}})};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:"toolbar-item",style:{borderLeft:"1px solid #d3cfcf"},children:(0,e.jsx)("a",{className:s===1?"disabled":"",title:"First page",onClick:function(){s>1&&n.loadData({current:1,pageSize:c,total:a})},children:(0,e.jsx)(ze(),{size:18,style:{cursor:"pointer"}})})}),(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsx)("a",{className:s===1?"disabled":"",onClick:function(){s>1&&n.loadData({current:s-1,pageSize:c,total:a})},title:"Previous page",children:(0,e.jsx)(Ge(),{size:18,style:{cursor:"pointer"}})})}),(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsx)("a",{title:"Page set",children:(0,e.jsx)(be.Z,{trigger:["click"],placement:"topCenter",overlay:(0,e.jsx)(W.Z,{style:{minWidth:80,padding:0},children:[20,50,100,500,1e3,"\u663E\u793A\u6240\u6709","\u81EA\u5B9A\u4E49\u9875\u7801"].map(function(o){return(0,e.jsx)(W.Z.Item,{style:{padding:"0 1em"},onClick:function(){return C(o)},children:o},o)})}),children:(0,e.jsxs)("span",{style:{display:"flex",width:65,justifyContent:"center",alignItems:"center"},children:[a===0?"0 \u884C":"".concat(h,"-").concat(x),(0,e.jsx)(He(),{size:18,style:{cursor:"pointer"}})]})})})}),a>0&&(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsx)("a",{onClick:function(){n.loadData()},title:"Refresh total",children:(0,e.jsxs)("span",{style:{lineHeight:"16px"},children:["of ",a]})})}),(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsx)("a",{className:s===v?"disabled":"",onClick:function(){s<v&&n.loadData({current:s+1,pageSize:c,total:a})},title:"Next page",children:(0,e.jsx)(Le(),{size:18,style:{cursor:"pointer"}})})}),(0,e.jsx)("div",{className:"toolbar-item",style:{borderRight:"1px solid #d3cfcf"},children:(0,e.jsx)("a",{className:s===v?"disabled":"",onClick:function(){s<v&&n.loadData({current:c,pageSize:c,total:a})},title:"Last page",children:(0,e.jsx)(Ve(),{size:18,style:{cursor:"pointer"}})})})]})}),Ke=(0,E.Pi)(function(){var i,n=(0,l.useContext)(j.xi),r=n.dataStore,a=((i=r.selected)===null||i===void 0?void 0:i.length)||0;return(0,e.jsx)("div",{className:"toolbar-item",children:(0,e.jsxs)("a",{children:["\u5DF2\u9009\u4E2D ",a," \u6761"]})})}),Nt=t(38979),We=t(59466),Ye=function(){return(0,e.jsx)("div",{className:"toolbar-item tips",children:(0,e.jsxs)(We.Z,{dots:!1,dotPosition:"left",autoplay:!0,children:[(0,e.jsx)("div",{className:"tip",children:"\u{1F609} \u53CC\u51FB\u5355\u5143\u683C\u7F16\u8F91\u95EE\u5377"}),(0,e.jsx)("div",{className:"tip",children:"\u{1F920} \u53F3\u952E\u5355\u5143\u683C\u4E5F\u6709\u5F88\u591A\u529F\u80FD"}),(0,e.jsx)("div",{className:"tip",children:"\u{1F60B} \u53F3\u952E\u5355\u5143\u683C\u53EF\u4EE5\u51BB\u7ED3\u7A97\u683C"}),(0,e.jsx)("div",{className:"tip",children:"\u{1F917} \u652F\u6301\u81EA\u5B9A\u4E49\u5206\u9875"}),(0,e.jsx)("div",{className:"tip",children:"\u{1F913} \u53F3\u952E\u5355\u5143\u683C\u53EF\u4EE5\u8FC7\u6EE4\u884C"})]})})},Je=t(77613);function $(i){return Math.round(i*100)/100}function Xe(i){if(i<1024)return"".concat($(i),"b");if(i<=1024*1024)return"".concat($(i/1024),"Kb");if(i<=1024*1024*1024)return"".concat($(i/1024/1024),"Mb")}var qe=(0,Je.P)(function(){var i=(0,K.a)(),n=i.progress;return typeof n!="number"?(0,e.jsx)(e.Fragment,{}):(0,e.jsx)("div",{className:"toolbar-item progress-bar",children:(0,e.jsx)("div",{"aria-valuemin":0,className:"bp3-progress-bar bp3-intent-primary",role:"progressbar",children:(0,e.jsx)("div",{className:"bp3-progress-meter",children:Xe(n)})})})}),_e=t(11949),et=t.n(_e),tt=function(n){var r=n.files,a=n.onClose,s=(0,l.useRef)(),c=r.filter(function(d){var v=d.originalName.substring(d.originalName.lastIndexOf(".")+1).toLowerCase();return!!["png","jpg","jpeg","bmp","webp","gif","tif"].includes(v)});return(0,l.useEffect)(function(){if(s.current){var d=new(et())(s.current,{viewed:function(){},hidden:function(){a()}});d.show()}},[r]),(0,e.jsx)("div",{ref:s,children:c.map(function(d){return(0,e.jsx)("img",{style:{display:"none"},src:"/api/public/preview/".concat(d.id)},d.id)})})},nt=tt,at=function(n){var r=n.cell,a=n.onClose;return r.type==="image"&&r.value instanceof Array?(0,e.jsx)(nt,{files:r.value,onClose:a}):(0,e.jsx)(e.Fragment,{})},rt=(0,E.Pi)(function(){var i=(0,l.useContext)(j.xi),n=i.dataStore,r=(0,O.IE)(),a=r.schema,s=n.records||[],c=r.mode,d=(0,l.useState)(),v=(0,F.Z)(d,2),h=v[0],x=v[1],C=(0,l.useMemo)(function(){var f=(0,j.ZZ)(a);return f.length==0?f.push({name:"\u6682\u65E0\u6570\u636E!"}):(c==="exam"&&f.push({name:"examScore",title:"\u5206\u6570",width:100,type:"number"}),f.push({name:"openid",title:"\u81EA\u5B9A\u4E49\u5B57\u6BB5",width:120}),f.push({name:"startTime",title:"\u5F00\u59CB\u65F6\u95F4",width:180}),f.push({name:"endTime",title:"\u63D0\u4EA4\u65F6\u95F4",width:180}),f.push({name:"totalTime",title:"\u7B54\u9898\u65F6\u957F"}),f.push({name:"createByName",title:"\u63D0\u4EA4\u4EBA",width:180}),f.push({name:"remoteIp",title:"IP\u5730\u5740"}),f.push({name:"browserType",title:"\u6D4F\u89C8\u5668"}),f.push({name:"deviceType",title:"\u8BBE\u5907\u7C7B\u578B"}),f.push({name:"platform",title:"\u5E73\u53F0\u7C7B\u578B"})),f},[a]),o=(0,l.useState)({width:-1,height:-1}),u=(0,F.Z)(o,2),g=u[0],I=u[1];return(0,l.useEffect)(function(){a&&n.loadData()},[a]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(z.Z,{bounds:!0,onResize:function(y){y.bounds&&I(y.bounds)},children:function(y){var T=y.measureRef;return(0,e.jsx)("div",{className:"dataTable-container",ref:T,children:(0,e.jsx)(U._$,{editable:!1,height:g.height,width:g.width,selectionMode:"cell",allowSorting:!0,schema:C,data:(0,j.IR)(s,C),onSelect:function(p){n.selected=p.filter(function(Z){return Z}).map(function(Z){return Z._i})},onClick:function(p){(p.style==="cell"||p.style==="activeCell")&&x({cell:p,visible:!0})},onDoubleClick:function(p){return p.style==="cell"||p.style==="activeCell"?(n.currentIndex=p.data._i,!0):!1}})})}}),h&&h.visible&&(0,e.jsx)(at,{cell:h.cell,onClose:function(){return x((0,b.Z)((0,b.Z)({},h),{},{visible:!1}))}})]})}),st=function(){return(0,e.jsxs)("div",{className:"toolbar-container",children:[(0,e.jsx)(ie,{}),(0,e.jsx)(re,{}),(0,e.jsx)(Ze,{}),(0,e.jsx)(ce,{}),(0,e.jsx)(me,{}),(0,e.jsx)(Pe,{}),(0,e.jsx)(Re,{})]})},lt=function(){return(0,e.jsxs)("div",{className:"statusBar-container",children:[(0,e.jsx)("div",{children:(0,e.jsx)(Ke,{})}),(0,e.jsx)("div",{children:(0,e.jsx)(Qe,{})}),(0,e.jsxs)("div",{className:"right-content",children:[(0,e.jsx)(qe,{}),(0,e.jsx)(Ye,{})]})]})},it=t(72706),Y=function(){var n=(0,O.IE)(),r=(0,l.useMemo)(function(){return new it.Cu(n)},[n]);return(0,e.jsx)(j.fQ,{value:{dataStore:r,prefixCls:"survey-data"},children:(0,e.jsxs)("div",{className:"survey-data",children:[(0,e.jsx)(st,{}),(0,e.jsx)(rt,{}),(0,e.jsx)(lt,{})]})})},ot=Y},11628:function(ee,V,t){"use strict";t.d(V,{xI:function(){return w},Ge:function(){return F},IE:function(){return b}});var l=t(67294),w=(0,l.createContext)({}),j=w.Provider;function b(){var z=(0,l.useContext)(w);return z.store}function F(){var z=b();return z.flowStore}}}]);