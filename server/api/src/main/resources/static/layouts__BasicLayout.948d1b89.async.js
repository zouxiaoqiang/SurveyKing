(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[1034],{86698:function(g){g.exports={container:"container___1Rq3A"}},2836:function(g){g.exports={menu:"menu___1L63y",right:"right___3L8KG",action:"action___LP4_P",search:"search___2W0sJ",account:"account___6HXOq",avatar:"avatar___2cOWV",dark:"dark___1NwCY",name:"name___WfKAK"}},29791:function(g,y,n){"use strict";var Z=n(24557),h=n(78874),D=n(11013),x=n(97544),s=n(85893),R=void 0==="1";y.Z=function(){return R?(0,s.jsx)(x.Z,{copyright:!1,links:[{key:"Survey King",title:(0,s.jsx)(Z.Z,{}),href:"https://surveyking.cn",blankTarget:!0},{key:"github",title:(0,s.jsx)(h.Z,{}),href:"https://github.com/javahuang/SurveyKing",blankTarget:!0},{key:"gitee",title:(0,s.jsx)(D.Z,{}),href:"https://gitee.com/surveyking/surveyking",blankTarget:!0}]}):(0,s.jsx)(s.Fragment,{})}},10334:function(g,y,n){"use strict";n.r(y),n.d(y,{default:function(){return on}});var Z=n(83279),h=n(11849),D=n(40336),x=n(67294),s=n(42285),R=n(73727),cn=n(49111),P=n(19650),L=n(1870),un=n(94233),A=n(51890),dn=n(30887),B=n(28682),vn=n(20228),H=n(11382),K=n(3182),W=n(94043),O=n.n(W),I=n(24616),T=n(55035),U=n(17673),mn=n(59250),$=n(13013),S=n(93224),G=n(94184),z=n.n(G),F=n(86698),Y=n.n(F),a=n(85893),J=function(e){var c=e.overlayClassName,r=(0,S.Z)(e,["overlayClassName"]);return(0,a.jsx)($.Z,(0,h.Z)({overlayClassName:z()(Y().container,c)},r))},Q=J,V=n(2836),l=n.n(V),M=n(27400),X=n(80937),k=n(5481),N=n.n(k),b=function(){var p=(0,K.Z)(O().mark(function e(){var c,r,d,v,m;return O().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:c=s.m8.location,r=c.query,d=r===void 0?{}:r,v=c.pathname,m=d.redirect,window.location.pathname!=="/user/login"&&!m&&s.m8.replace({pathname:"/user/login",search:(0,U.stringify)({redirect:v})});case 3:case"end":return f.stop()}},e)}));return function(){return p.apply(this,arguments)}}(),w=function(e){var c=e.menu,r=(0,M.a)(),d=r.user,v=(0,x.useCallback)(function(f){var j=f.key;if(j==="logout"){r.logout(),b();return}s.m8.push("/account/".concat(j))},[r]),m=(0,a.jsx)("span",{className:"".concat(l().action," ").concat(l().account),children:(0,a.jsx)(H.Z,{size:"small",style:{marginLeft:8,marginRight:8}})});if(r.loading||!d||!d.name)return m;var o=(0,a.jsx)(B.Z,{className:l().menu,selectedKeys:[],onClick:v,items:[{label:"\u4E2A\u4EBA\u8BBE\u7F6E",key:"settings",style:{display:c?"flex":"none"},icon:(0,a.jsx)(I.Z,{})},{type:"divider",style:{display:c?"flex":"none"}},{label:"\u9000\u51FA\u767B\u5F55",key:"logout",icon:(0,a.jsx)(T.Z,{})}]});return(0,a.jsx)(Q,{overlay:o,children:(0,a.jsxs)("span",{className:"".concat(l().action," ").concat(l().account),children:[(0,a.jsx)(A.C,{size:"small",className:l().avatar,src:d.avatar?"/api/public/preview/".concat(d.avatar):N(),alt:"avatar"}),(0,a.jsx)("span",{className:"".concat(l().name," anticon"),children:d.name})]})})},q=(0,X.Pi)(w),_=void 0==="1",nn=function(){var e=l().right;return e="".concat(l().right,"  ").concat(l().dark),(0,a.jsxs)(P.Z,{className:e,children:[_&&(0,a.jsx)("span",{className:l().action,onClick:function(){window.open("https://surveyking.cn/docs")},children:(0,a.jsx)(L.Z,{})}),(0,a.jsx)(q,{menu:!0})]})},an=nn,tn=n(29791),en=n(77613),rn=function(e){var c=e.children,r=e.location,d=r===void 0?{pathname:"/"}:r,v=(0,M.a)(),m=v.user,o=v.system,f=(0,s.YB)(),j=f.formatMessage;(0,x.useEffect)(function(){v.currentUser()},[v]),(0,x.useEffect)(function(){var u=document.querySelector("link[rel~='icon']");u&&o.avatar&&(u.href="/api/public/".concat(o.avatar)),document.title=o.name||"\u5377\u738B";var t=document.getElementById("loading-img");t&&(t.src="/api/public/preview/".concat(o.avatar));var i=document.getElementById("loading-name");i&&(i.textContent=document.title)},[o]);var sn=function u(t){return t.filter(function(i){var C;return m==null||(C=m.authorityList)===null||C===void 0?void 0:C.find(function(E){return E.startsWith(i.authority)})}).map(function(i){return(0,h.Z)((0,h.Z)({},i),{},{children:i.children?u(i.children):void 0})})};return(0,a.jsx)(D.ZP,(0,h.Z)((0,h.Z)({title:o==null?void 0:o.name,logo:(0,a.jsx)("img",{src:o.avatar?"/api/public/preview/".concat(o.avatar):N()}),formatMessage:j},e),{},{onMenuHeaderClick:function(){return s.m8.push("/")},menuItemRender:function(t,i){return t.isUrl||!t.path||d.pathname===t.path?i:(0,a.jsx)(R.rU,{to:t.path,children:i})},breadcrumbRender:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];return[{path:"/",breadcrumbName:j({id:"menu.home"})}].concat((0,Z.Z)(t))},itemRender:function(t,i,C,E){var ln=C.indexOf(t)===0;return ln?(0,a.jsx)(R.rU,{to:E.join("/"),children:t.breadcrumbName}):(0,a.jsx)("span",{children:t.breadcrumbName})},footerRender:function(){return(0,a.jsx)(tn.Z,{})},menuDataRender:sn,rightContentRender:function(){return(0,a.jsx)(an,{})},onPageChange:function(){},children:c}))},on=(0,en.P)(rn)},5481:function(g,y,n){g.exports=n.p+"static/logo.de1a765f.svg"}}]);
