(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6527],{46502:function(P){P.exports={baseView:"baseView___3sRG3",left:"left___GavW0",right:"right___3-EXe",avatar_title:"avatar_title___13ztg",avatar:"avatar___1GisI",button_view:"button_view___o9apF",area_code:"area_code___3Tg4d",phone_number:"phone_number___1bV0u"}},41215:function(P){P.exports={main:"main___2yGev",leftMenu:"leftMenu___179-W",right:"right___2jdGg",title:"title___3cGwa"}},41794:function(P,b,a){"use strict";a.r(b),a.d(b,{default:function(){return le}});var oe=a(30887),z=a(28682),j=a(11849),D=a(94657),p=a(67294),K=a(21349),ce=a(34792),V=a(48086),de=a(43185),M=a(32620),ve=a(57663),R=a(71577),N=a(3182),T=a(94043),y=a.n(T),G=a(84391),$=a(952),S=a(5966),J=a(90672),L=a(21172),O=a(46502),g=a.n(O),F=a(3980),I=a(27400),f=a(80937),W=a(5481),U=a.n(W),e=a(85893),X=(0,f.Pi)(function(){var Z=(0,I.a)(),r=Z.user,o=function(){var v=(0,N.Z)(y().mark(function n(u){var i,d,s,l;return y().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:i=u.onSuccess,d=u.onError,s=u.file,l=u.onProgress,F.hi.upload("/api/public/upload",{file:s},function(t){l&&l({percent:t.loaded/t.total*100})}).then(function(t){if(t.success&&i&&(i(t.data),F.hi.updateUserInfo({avatar:t.data.id}).then(function(E){E.success&&(r.avatar=t.data.id)})),!t.success&&d){var x=new Error("Some error");d({event:x})}});case 2:case"end":return c.stop()}},n)}));return function(u){return v.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u5934\u50CF"}),(0,e.jsx)("div",{className:g().avatar,children:r!=null&&r.avatar?(0,e.jsx)("img",{style:{borderRadius:"50%"},src:"/api/public/preview/".concat(r==null?void 0:r.avatar),alt:"avatar"}):(0,e.jsx)("img",{style:{borderRadius:"50%"},src:U(),alt:"avatar"})}),(0,e.jsx)(L.Z,{rotate:!0,shape:"round",children:(0,e.jsx)(M.Z,{showUploadList:!1,customRequest:o,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(R.Z,{children:[(0,e.jsx)(G.Z,{}),"\u66F4\u6362\u5934\u50CF"]})})})})]})}),Y=function(){var r=(0,I.a)(),o=r.user,v=r.loading,n=(0,p.useMemo)(function(){return o},[]),u=function(){var i=(0,N.Z)(y().mark(function d(s){return y().wrap(function(h){for(;;)switch(h.prev=h.next){case 0:F.hi.updateUserInfo(s).then(function(c){c.success&&(r.user=(0,j.Z)((0,j.Z)({},o),s),V.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))});case 1:case"end":return h.stop()}},d)}));return function(s){return i.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:v?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsxs)($.ZP,{layout:"vertical",onFinish:u,submitter:{resetButtonProps:{style:{display:"none"}},submitButtonProps:{children:"\u66F4\u65B0\u57FA\u672C\u4FE1\u606F"}},initialValues:n,hideRequiredMark:!0,children:[(0,e.jsx)(S.Z,{width:"md",name:"name",label:"\u59D3\u540D",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u6635\u79F0!"}]}),(0,e.jsx)(S.Z,{name:"phone",label:"\u624B\u673A\u53F7",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u8054\u7CFB\u7535\u8BDD!"}]}),(0,e.jsx)(S.Z,{width:"md",name:"email",label:"\u90AE\u7BB1",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u60A8\u7684\u90AE\u7BB1!"}]}),(0,e.jsx)(J.Z,{name:"profile",label:"\u4E2A\u4EBA\u7B80\u4ECB",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4E2A\u4EBA\u7B80\u4ECB!"}],placeholder:"\u4E2A\u4EBA\u7B80\u4ECB"})]})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(X,{})})]})})},H=(0,f.Pi)(Y),fe=a(54421),B=a(38272),me=a(77576),Q=a(12028),k=function(){var r=function(){var n=(0,e.jsx)(Q.Z,{checkedChildren:"\u5F00",unCheckedChildren:"\u5173",defaultChecked:!0});return[{title:"\u8D26\u6237\u5BC6\u7801",description:"\u5176\u4ED6\u7528\u6237\u7684\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]},{title:"\u7CFB\u7EDF\u6D88\u606F",description:"\u7CFB\u7EDF\u6D88\u606F\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]},{title:"\u5F85\u529E\u4EFB\u52A1",description:"\u5F85\u529E\u4EFB\u52A1\u5C06\u4EE5\u7AD9\u5185\u4FE1\u7684\u5F62\u5F0F\u901A\u77E5",actions:[n]}]},o=r();return(0,e.jsx)(p.Fragment,{children:(0,e.jsx)(B.ZP,{itemLayout:"horizontal",dataSource:o,renderItem:function(n){return(0,e.jsx)(B.ZP.Item,{actions:n.actions,children:(0,e.jsx)(B.ZP.Item.Meta,{title:n.title,description:n.description})})}})})},q=k,_=a(37476),ee=function(){var r=(0,p.useState)(!1),o=(0,D.Z)(r,2),v=o[0],n=o[1],u=(0,I.a)(),i=u.user,d=(0,F.m2)(),s=(0,p.useRef)(),l=function(){return[{title:"\u8D26\u6237\u5BC6\u7801",actions:[(0,e.jsx)("a",{onClick:function(){return n(!0)},children:"\u4FEE\u6539"},"Modify")]}]},h=l();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(B.ZP,{itemLayout:"horizontal",dataSource:h,renderItem:function(t){return(0,e.jsx)(B.ZP.Item,{actions:t.actions,children:(0,e.jsx)(B.ZP.Item.Meta,{title:t.title})})}}),(0,e.jsxs)(_.Y,{title:"\u4FEE\u6539\u5BC6\u7801",visible:v,formRef:s,width:400,modalProps:{onCancel:function(){n(!1)},okText:"\u786E\u8BA4\u4FEE\u6539",maskClosable:!1},onFinish:function(){var c=(0,N.Z)(y().mark(function t(x){return y().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:d.saveOrUpdateUser((0,j.Z)({id:i==null?void 0:i.userId},x)).then(function(A){A.success?(n(!1),V.default.success("\u5BC6\u7801\u4FEE\u6539\u6210\u529F")):V.default.error(A.message)});case 1:case"end":return C.stop()}},t)}));return function(t){return c.apply(this,arguments)}}(),children:[(0,e.jsx)(S.Z.Password,{label:"\u65E7\u5BC6\u7801",name:"oldPassword",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5F53\u524D\u767B\u5F55\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(S.Z.Password,{name:"password",label:"\u65B0\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u8F93\u5165\u5BC6\u7801",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u5BC6\u7801\uFF01"}]}),(0,e.jsx)(S.Z.Password,{name:"confirmPassword",label:"\u786E\u8BA4\u5BC6\u7801",fieldProps:{size:"large"},placeholder:"\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",rules:[{validator:function(t,x){var E,C,A=(E=s.current)===null||E===void 0?void 0:E.getFieldValue("password");return x?A!==x&&(C="\u4E24\u6B21\u5BC6\u7801\u8F93\u5165\u4E0D\u4E00\u81F4"):C="\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801",C?Promise.reject(new Error(C)):Promise.resolve()}}]})]})]})},ae=(0,f.Pi)(ee),m=a(59750),te=a(64031),re=(0,f.Pi)(function(){var Z=(0,I.a)(),r=Z.system,o=function(){var v=(0,N.Z)(y().mark(function n(u){var i,d,s,l;return y().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:i=u.onSuccess,d=u.onError,s=u.file,l=u.onProgress,F.hi.upload("/api/public/upload",{file:s},function(t){l&&l({percent:t.loaded/t.total*100})}).then(function(t){if(t.success&&i&&(i(t.data),F.hi.updateSysInfo({id:r==null?void 0:r.id,avatar:t.data.id}).then(function(E){E.success&&(r.avatar=t.data.id)})),!t.success&&d){var x=new Error("Some error");d({event:x})}});case 2:case"end":return c.stop()}},n)}));return function(u){return v.apply(this,arguments)}}();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().avatar_title,children:"\u7CFB\u7EDF\u56FE\u6807"}),(0,e.jsx)("div",{className:g().avatar,children:r.avatar?(0,e.jsx)("img",{src:"/api/public/preview/".concat(r==null?void 0:r.avatar),alt:"avatar"}):(0,e.jsx)("img",{src:U()})}),(0,e.jsx)(M.Z,{showUploadList:!1,customRequest:o,children:(0,e.jsx)("div",{className:g().button_view,children:(0,e.jsxs)(R.Z,{children:[(0,e.jsx)(G.Z,{}),"\u66F4\u6362\u56FE\u6807"]})})})]})}),se=function(){var r=(0,I.a)(),o=r.system,v=r.loading,n=(0,p.useMemo)(function(){return(0,te.Np)({initialValues:o})},[]),u=(0,F.m2)(),i=u.roles;(0,p.useEffect)(function(){u.loadRoles({current:1,pageSize:1024})},[u]),(0,p.useEffect)(function(){n.setInitialValues(o)},[o,n]),(0,p.useEffect)(function(){i.length>0&&n.setFieldState("registerInfo.roles",function(s){return s.dataSource=i.map(function(l){return{label:l.name,value:l.code}})})},[i,n]);var d=function(){var s=(0,N.Z)(y().mark(function l(h){return y().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:F.hi.updateSysInfo((0,j.Z)((0,j.Z)({},o),h)).then(function(x){x.success&&(r.system=(0,j.Z)((0,j.Z)((0,j.Z)({},o),h),{},{avatar:o.avatar}),V.default.success("\u66F4\u65B0\u57FA\u672C\u4FE1\u606F\u6210\u529F"))});case 1:case"end":return t.stop()}},l)}));return function(h){return s.apply(this,arguments)}}();return(0,e.jsx)("div",{className:g().baseView,children:v?null:(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{className:g().left,children:(0,e.jsx)(f.RV,{form:n,children:(0,e.jsxs)(m.lt,{breakpoints:[680],layout:["vertical"],labelAlign:["left","right"],children:[(0,e.jsx)(f.gN,{name:"name",title:"\u7CFB\u7EDF\u540D\u79F0",decorator:[m.xJ],component:[m.II]}),(0,e.jsx)(f.gN,{name:"description",title:"\u63CF\u8FF0\u4FE1\u606F",decorator:[m.xJ],component:[m.II.TextArea]}),(0,e.jsxs)(f.Wo,{name:"registerInfo",children:[(0,e.jsx)(f.gN,{name:"registerEnabled",title:"\u5F00\u542F\u6CE8\u518C",decorator:[m.xJ],component:[m.rs]}),(0,e.jsx)(f.gN,{name:"roles",title:"\u6CE8\u518C\u7528\u6237\u53EF\u9009\u62E9\u89D2\u8272\u5217\u8868",decorator:[m.xJ],component:[m.Ph,{mode:"multiple"}],dataSource:i.map(function(s){return{label:s.name,value:s.code}}),reactions:[function(s){var l=s.query("registerInfo.registerEnabled").get("value");l?s.setDisplay("visible"):s.setDisplay("none")}]}),(0,e.jsx)(f.gN,{name:"strongPasswordEnabled",title:"\u5F00\u542F\u5F3A\u5BC6\u7801\u9A8C\u8BC1",decorator:[m.xJ],component:[m.rs],reactions:[function(s){var l=s.query("registerInfo.registerEnabled").get("value");l?s.setDisplay("visible"):s.setDisplay("none")}]})]}),(0,e.jsx)(m.d5,{children:(0,e.jsx)(m.k4,{onSubmit:d,children:"\u63D0\u4EA4"})})]})})}),(0,e.jsx)("div",{className:g().right,children:(0,e.jsx)(re,{})})]})})},ne=(0,f.Pi)(se),ie=a(41215),w=a.n(ie),ue=function(){var r=(0,I.a)(),o=r.isAdmin,v={base:"\u57FA\u672C\u8BBE\u7F6E",security:"\u5B89\u5168\u8BBE\u7F6E",appInfo:"\u7CFB\u7EDF\u8BBE\u7F6E"},n=(0,p.useState)({mode:"inline",selectKey:"base"}),u=(0,D.Z)(n,2),i=u[0],d=u[1],s=(0,p.useRef)(),l=function(){return Object.keys(v).filter(function(t){return!(t==="appInfo"&&!o)}).map(function(t){return{label:v[t],key:t}})},h=function(){var t=i.selectKey;switch(t){case"base":return(0,e.jsx)(H,{});case"security":return(0,e.jsx)(ae,{});case"notification":return(0,e.jsx)(q,{});case"appInfo":return(0,e.jsx)(ne,{});default:return null}};return(0,e.jsx)(K.Z,{children:(0,e.jsxs)("div",{className:w().main,ref:function(t){t&&(s.current=t)},children:[(0,e.jsx)("div",{className:w().leftMenu,children:(0,e.jsx)(z.Z,{mode:i.mode,selectedKeys:[i.selectKey],onClick:function(t){var x=t.key;d((0,j.Z)((0,j.Z)({},i),{},{selectKey:x}))},items:l()})}),(0,e.jsxs)("div",{className:w().right,children:[(0,e.jsx)("div",{className:w().title,children:v[i.selectKey]}),h()]})]})})},le=(0,f.Pi)(ue)},5481:function(P,b,a){P.exports=a.p+"static/logo.de1a765f.svg"}}]);
