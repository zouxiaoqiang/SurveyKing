(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6527],{41794:function(w,b,a){"use strict";a.r(b),a.d(b,{default:function(){return ue}});var y=a(11849),D=a(2824),le=a(30887),M=a(54689),j=a(67294),z=a(21349),oe=a(34792),N=a(48086),ce=a(43185),R=a(11324),de=a(57663),G=a(71577),B=a(3182),K=a(94043),p=a.n(K),U=a(84391),T=a(15196),P=a(5966),$=a(90672),J=a(30779),L=a(16345),g=a.n(L),F=a(68489),I=a(27400),f=a(80937),e=a(85893),O=(0,f.Pi)(function(){var Z=(0,I.a)(),n=Z.user,c=function(){var v=(0,B.Z)(p().mark(function s(u){var i,d,r,l;return p().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:i=u.onSuccess,d=u.onError,r=u.file,l=u.onProgress,F.hi.upload("/api/public/upload",{file:r},function(t){l&&l({percent:t.loaded/t.total*100})}).then(function(t){if(t.success&&i&&(i(t.data),F.hi.updateUserInfo({avatar:t.data.id}).then(function(E){E.success&&(n.avatar=t.data.id)})),!t.success&&d){var x=new Error("Some error");d({event:x})}});case 2:case"end":return o.stop()}},s)}));return function(u){return v.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:g().avatar,children:(0,e.jsx)("img",{style:{borderRadius:"50%"},src:"/api/public/preview/".concat(n==null?void 0:n.avatar),alt:"avatar"})}),(0,e.jsx)(J.Z,{rotate:!0,shape:"round",children:(0,e.jsx)(R.Z,{showUploadList:!1,customRequest:c,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(U.Z,{}),"\u66F4\u6362\u5934\u50CF"]})})})})]})}),W=function(){var n=(0,I.a)(),c=n.user,v=n.loading,s=(0,j.useMemo)(function(){return c},[]),u=function(){var i=(0,B.Z)(p().mark(function d(r){return p().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:F.hi.updateUserInfo(r).then(function(o){o.success&&(n.user=(0,y.Z)((0,y.Z)({},c),r),N.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))});case 1:case"end":return h.stop()}},d)}));return function(r){return i.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:v?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsxs)(T.ZP,{layout:"vertical",onFinish:u,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:s,hideRequiredMark:!0,children:[(0,e.jsx)(P.Z,{width:"md",name:"name",label:"\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0!"}]}),(0,e.jsx)(P.Z,{name:"phone",label:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"}]}),(0,e.jsx)(P.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)($.Z,{name:"profile",label:"\u4E2A\u4EBA\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB!"}],placeholder:"\u4E2A\u4EBA\u7B80\u4ECB"})]})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(O,{})})]})})},X=(0,f.Pi)(W),ve=a(54421),S=a(38272),fe=a(77576),H=a(12028),Q=function(){var n=function(){var s=(0,e.jsx)(H.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[s]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[s]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[s]}]},c=n();return(0,e.jsx)(j.Fragment,{children:(0,e.jsx)(S.ZP,{itemLayout:"horizontal",dataSource:c,renderItem:function(s){return(0,e.jsx)(S.ZP.Item,{actions:s.actions,children:(0,e.jsx)(S.ZP.Item.Meta,{title:s.title,description:s.description})})}})})},Y=Q,k=a(37476),q=function(){var n=(0,j.useState)(!1),c=(0,D.Z)(n,2),v=c[0],s=c[1],u=(0,I.a)(),i=u.user,d=(0,F.m2)(),r=(0,j.useRef)(),l=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",actions:[(0,e.jsx)("a",{onClick:function(){return s(!0)},children:"\u4FEE\u6539"},"Modify")]}]},h=l();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(S.ZP,{itemLayout:"horizontal",dataSource:h,renderItem:function(t){return(0,e.jsx)(S.ZP.Item,{actions:t.actions,children:(0,e.jsx)(S.ZP.Item.Meta,{title:t.title})})}}),(0,e.jsxs)(k.Z,{title:"\u4FEE\u6539\u5BC6\u7801",visible:v,formRef:r,width:400,modalProps:{onCancel:function(){s(!1)},okText:"\u786E\u8BA4\u4FEE\u6539",maskClosable:!1},onFinish:function(){var o=(0,B.Z)(p().mark(function t(x){return p().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:d.saveOrUpdateUser((0,y.Z)({id:i==null?void 0:i.userId},x)).then(function(A){A.success?(s(!1),N.default.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F")):N.default.error(A.message)});case 1:case"end":return C.stop()}},t)}));return function(t){return o.apply(this,arguments)}}(),children:[(0,e.jsx)(P.Z.Password,{label:"\u65E7\u5BC6\u7801",name:"oldPassword",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5F53\u524D\u767B\u5F55\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(P.Z.Password,{name:"password",label:"\u65B0\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(P.Z.Password,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{validator:function(t,x){var E,C,A=(E=r.current)===null||E===void 0?void 0:E.getFieldValue("password");return x?A!==x&&(C="\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"):C="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",C?Promise.reject(new Error(C)):Promise.resolve()}}]})]})]})},_=(0,f.Pi)(q),m=a(98439),ee=a(64031),te=(0,f.Pi)(function(){var Z=(0,I.a)(),n=Z.system,c=function(){var v=(0,B.Z)(p().mark(function s(u){var i,d,r,l;return p().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:i=u.onSuccess,d=u.onError,r=u.file,l=u.onProgress,F.hi.upload("/api/public/upload",{file:r},function(t){l&&l({percent:t.loaded/t.total*100})}).then(function(t){if(t.success&&i&&(i(t.data),F.hi.updateSysInfo({id:n==null?void 0:n.id,avatar:t.data.id}).then(function(E){E.success&&(n.avatar=t.data.id)})),!t.success&&d){var x=new Error("Some error");d({event:x})}});case 2:case"end":return o.stop()}},s)}));return function(u){return v.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u7CFB\u7EDF\u56FE\u6807"}),(0,e.jsx)("div",{className:g().avatar,children:(0,e.jsx)("img",{src:"/api/public/preview/".concat(n==null?void 0:n.avatar),alt:"avatar"})}),(0,e.jsx)(R.Z,{showUploadList:!1,customRequest:c,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(G.Z,{children:[(0,e.jsx)(U.Z,{}),"\u66F4\u6362\u56FE\u6807"]})})})]})}),ae=function(){var n=(0,I.a)(),c=n.system,v=n.loading,s=(0,j.useMemo)(function(){return(0,ee.Np)({initialValues:c})},[]),u=(0,F.m2)(),i=u.roles;(0,j.useEffect)(function(){u.loadRoles({current:1,pageSize:1024})},[u]),(0,j.useEffect)(function(){s.setInitialValues(c)},[c,s]),(0,j.useEffect)(function(){i.length>0&&s.setFieldState("registerInfo.roles",function(r){return r.dataSource=i.map(function(l){return{label:l.name,value:l.code}})})},[i,s]);var d=function(){var r=(0,B.Z)(p().mark(function l(h){return p().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:F.hi.updateSysInfo((0,y.Z)((0,y.Z)({},c),h)).then(function(x){x.success&&(n.system=(0,y.Z)((0,y.Z)({},c),h),N.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))});case 1:case"end":return t.stop()}},l)}));return function(h){return r.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:v?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsx)(f.RV,{form:s,children:(0,e.jsxs)(m.lt,{breakpoints:[680],layout:["vertical"],labelAlign:["left","right"],children:[(0,e.jsx)(f.gN,{name:"name",title:"\u7CFB\u7EDF\u540D\u79F0",decorator:[m.xJ],component:[m.II]}),(0,e.jsx)(f.gN,{name:"description",title:"\u63CF\u8FF0\u4FE1\u606F",decorator:[m.xJ],component:[m.II.TextArea]}),(0,e.jsxs)(f.Wo,{name:"registerInfo",children:[(0,e.jsx)(f.gN,{name:"registerEnabled",title:"\u5F00\u542F\u6CE8\u518C",decorator:[m.xJ],component:[m.rs]}),(0,e.jsx)(f.gN,{name:"roles",title:"\u6CE8\u518C\u7528\u6237\u53EF\u9009\u62E9\u89D2\u8272\u5217\u8868",decorator:[m.xJ],component:[m.Ph,{mode:"multiple"}],dataSource:i.map(function(r){return{label:r.name,value:r.code}}),reactions:[function(r){var l=r.query("registerInfo.registerEnabled").get("value");l?r.setDisplay("visible"):r.setDisplay("none")}]}),(0,e.jsx)(f.gN,{name:"strongPasswordEnabled",title:"\u5F00\u542F\u5F3A\u5BC6\u7801\u9A8C\u8BC1",decorator:[m.xJ],component:[m.rs],reactions:[function(r){var l=r.query("registerInfo.registerEnabled").get("value");l?r.setDisplay("visible"):r.setDisplay("none")}]})]}),(0,e.jsx)(m.d5,{children:(0,e.jsx)(m.k4,{onSubmit:d,children:"\u63D0\u4EA4"})})]})})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(te,{})})]})})},re=(0,f.Pi)(ae),se=a(2799),V=a.n(se),ne=M.Z.Item,ie=function(){var n=(0,I.a)(),c=n.isAdmin,v={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",appInfo:"\u7CFB\u7EDF\u8BBE\u7F6E"},s=(0,j.useState)({mode:"inline",selectKey:"base"}),u=(0,D.Z)(s,2),i=u[0],d=u[1],r=(0,j.useRef)(),l=function(){return Object.keys(v).filter(function(t){return!(t==="appInfo"&&!c)}).map(function(t){return(0,e.jsx)(ne,{children:v[t]},t)})},h=function(){var t=i.selectKey;switch(t){case"base":return(0,e.jsx)(X,{});case"security":return(0,e.jsx)(_,{});case"notification":return(0,e.jsx)(Y,{});case"appInfo":return(0,e.jsx)(re,{});default:return null}};return(0,e.jsx)(z.Z,{children:(0,e.jsxs)("div",{className:V().main,ref:function(t){t&&(r.current=t)},children:[(0,e.jsx)("div",{className:V().leftMenu,children:(0,e.jsx)(M.Z,{mode:i.mode,selectedKeys:[i.selectKey],onClick:function(t){var x=t.key;d((0,y.Z)((0,y.Z)({},i),{},{selectKey:x}))},children:l()})}),(0,e.jsxs)("div",{className:V().right,children:[(0,e.jsx)("div",{className:V().title,children:v[i.selectKey]}),h()]})]})})},ue=(0,f.Pi)(ie)},16345:function(w){w.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF",area_code:"area_code___3Tg4d",phone_number:"phone_number___1bV0u"}},2799:function(w){w.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}}}]);