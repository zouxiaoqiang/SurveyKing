(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[5349],{66640:function(Q,E,e){"use strict";e.r(E),e.d(E,{Report:function(){return L},default:function(){return gt}});var u=e(67294),w=e(60674),P=e(77613),D=e(23156),S=(0,u.createContext)({}),B=S.Provider,Ft=S.Consumer;function U(n){var i=["Radio","Checkbox","Cascader","Select","QuestionSet"];if(i.includes(n.type))return!0;if(n.type==="FillBlank"||n.type==="MultipleBlank"){var a;if((a=n.children)!==null&&a!==void 0&&a.find(function(r){var l;return((l=r.attribute)===null||l===void 0?void 0:l.dataType)==="number"}))return!0}return!1}var W={Radio:"\u5355\u9009\u9898",Checkbox:"\u591A\u9009\u9898",Cascader:"\u7EA7\u8054\u9898",Select:"\u4E0B\u62C9\u9898",FillBlank:"\u5355\u884C\u6587\u672C\u9898",Textarea:"\u591A\u884C\u6587\u672C\u9898",MultipleBlank:"\u591A\u9879\u586B\u7A7A\u9898"},H=e(69610),G=e(54941),k=function(){function n(){(0,H.Z)(this,n),this._init=this._init.bind(this),this._cleanUp=this._cleanUp.bind(this),this.convertFromInput=this.convertFromInput.bind(this)}return(0,G.Z)(n,[{key:"_init",value:function(){this.canvas=document.createElement("canvas"),this.imgPreview=document.createElement("img"),this.imgPreview.style="position: absolute; top: -9999px",document.body.appendChild(this.imgPreview),this.canvasCtx=this.canvas.getContext("2d")}},{key:"_cleanUp",value:function(){document.body.removeChild(this.imgPreview)}},{key:"convertFromInput",value:function(a,r){this._init();var l=this;this.imgPreview.onload=function(){var p=new Image;l.canvas.width=l.imgPreview.clientWidth,l.canvas.height=l.imgPreview.clientHeight,p.crossOrigin="anonymous",p.src=l.imgPreview.src,p.onload=function(){l.canvasCtx.drawImage(p,0,0);var o=l.canvas.toDataURL("image/png");typeof r=="function"&&r(o),l._cleanUp()}},this.imgPreview.src=a}}]),n}(),O=e(11628),t=e(85893),z=function(i){var a;return i?(a=i.children)===null||a===void 0?void 0:a.filter(function(r){return U(r)}).map(function(r){return r.type==="QuestionSet"?(0,t.jsx)(K,{schema:r},r.id):(0,t.jsx)(st,{schema:r},r.id)}):(0,t.jsx)(t.Fragment,{})},V=(0,P.P)(function(){var n=(0,O.IE)(),i=n.schema;return(0,t.jsx)("div",{children:z(i)})}),K=function(i){return(0,t.jsx)("div",{children:z(i.schema)})},It=e(13062),T=e(71230),Rt=e(66456),X=e(1670),Zt=e(89032),C=e(15746),Pt=e(57663),F=e(71577),$=e(94657),J=e(3375),Y=e(83279),q=e(68023),_=e(81615),tt=e(71257),et=e(79110),rt=e(8690),nt=e(17813),at=e(63294),it=e(93450),ot=e(26379);q.D([rt.N,nt.N,at.N,tt.N,et.N,ot.N,it.N]);var I=[{color:"#5398ff"},{color:"#39d2d9"},{color:"#f16b79"},{color:"#b18160"},{color:"#94ed8c"},{color:"#ffb878"},{color:"#99a4ff"},{color:"#808bea"},{color:"#c36cff"}],lt=(0,u.forwardRef)(function(n,i){var a=n.data,r=n.labels,l=n.loading,p=n.name,o=n.type,N=(0,u.useRef)(null),d=(0,u.useRef)();return(0,u.useEffect)(function(){if(N.current){var y=_.S1(N.current);return d.current=y,function(){y.dispose()}}},[]),(0,u.useImperativeHandle)(i,function(){return{saveAsImage:function(){var s;return(s=d.current)===null||s===void 0?void 0:s.getDataURL({type:"png"})}}}),(0,u.useEffect)(function(){if(!l&&d.current){d.current.hideLoading(),d.current.clear();var y=300;o==="horizontalBar"?(d.current.setOption({title:{text:p},grid:{top:15,bottom:15,left:10*Math.max.apply(Math,(0,Y.Z)(r.map(function(s){return s.length})))+25,right:50},tooltip:{show:!0,trigger:"item"},xAxis:{show:!1},yAxis:{type:"category",data:r,inverse:!0},series:[{type:"bar",barWidth:12,data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,percent:j,itemStyle:I[c%I.length]}}),showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"right",color:"black",formatter:function(c){var f=c.data;return f.percent||"0%"}}}]}),y=r.length*40-r.length):o==="pie"?d.current.setOption({title:{text:p},tooltip:{show:!0,trigger:"item"},series:[{name:p,type:"pie",radius:"60%",data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,name:"".concat(r[c]," ").concat(j),itemStyle:I[c%I.length]}}),emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}},labelLine:{length:10,length2:25}}]}):o==="bar"&&d.current.setOption({title:{text:p},tooltip:{show:!0,trigger:"item"},xAxis:{type:"category",data:r,axisLabel:{interval:0,rotate:30}},yAxis:{show:!1},series:[{type:"bar",barWidth:15,data:a==null?void 0:a.map(function(s,c){var f=s.value,j=s.percent;return{value:f,percent:j,itemStyle:I[c%I.length]}}),showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)"},label:{show:!0,position:"top",color:"black",formatter:function(c){var f=c.data;return f.percent||"0%"}}}]}),d.current.resize({height:y})}else d.current&&d.current.showLoading()},[l,o,a]),(0,t.jsx)("div",{ref:N})}),A=e(76826),st=(0,P.P)(function(n){var i,a,r=n.schema,l=(0,u.useContext)(S),p=l.loading,o=l.reportData,N=(0,u.useState)("horizontalBar"),d=(0,$.Z)(N,2),y=d[0],s=d[1],c=(o==null||(i=o.statistics[r.id])===null||i===void 0?void 0:i.total)||0,f=(0,u.useRef)(null),j=(0,u.useMemo)(function(){if(r.type==="FillBlank"||r.type==="MultipleBlank"){var R=[{title:"\u5408\u8BA1",dataIndex:"sum",width:"20%"},{title:"\u5E73\u5747\u503C",dataIndex:"average",width:"20%"},{title:"\u6700\u9AD8\u503C",dataIndex:"max",width:"20%"},{title:"\u6700\u4F4E\u503C",dataIndex:"min",width:"20%"}];return r.type==="MultipleBlank"?[{title:"\u9009\u9879",dataIndex:"title",width:"20%"}].concat(R):R}return[{title:"\u9009\u9879",dataIndex:"title",width:"50%"},{title:"\u6570\u636E\u91CF",dataIndex:"total",width:"25%",sorter:function(m,h){return m.total-h.total},showSorterTooltip:!1},{title:"\u5360\u6BD4",dataIndex:"percent",width:"25%",sorter:function(m,h){return parseFloat(m.percent)-parseFloat(h.percent)},showSorterTooltip:!1}]},[r.type]),yt=function(){var v,m=(v=f.current)===null||v===void 0?void 0:v.saveAsImage();m&&new k().convertFromInput(m,function(h){var x=document.createElement("a");x.href=h,x.download="haha.png",x.click(),x.remove()})},jt=function(){var v;return(v=r.children)===null||v===void 0?void 0:v.map(function(m){var h=m.id,x=m.title,Z=(0,A.WO)(x),g=o==null?void 0:o.statistics[h];if(g){var b=g.total||0,M=Math.round(1e4*b/(c||1))/100+"%";if(!(o!=null&&o.search)||Z.includes(o.search))return{id:h,title:Z,total:b,percent:M,min:g.min,max:g.max,average:g.average,sum:g.sum}}return{id:h,title:Z,total:0,percent:"0%"}})},St=function(){var v;if(r.type==="FillBlank"||r.type==="MatrixFillBlank")return(0,t.jsx)(t.Fragment,{});var m=[],h=[];return(v=r.children)===null||v===void 0||v.forEach(function(x){var Z=(0,A.WO)(x.title);if(m.push(Z),!(o!=null&&o.search)||Z.includes(o.search)){var g,b=(o==null||(g=o.statistics[x.id])===null||g===void 0?void 0:g.total)||0,M=Math.round(1e4*b/(c||1))/100+"%";h.push({percent:M,value:b})}else h.push({percent:"0%",value:0})}),(0,t.jsxs)(C.Z,{span:24,className:"question-chart",children:[(0,t.jsx)("div",{className:"question-chart-btns",children:(0,t.jsxs)(F.Z.Group,{size:"small",children:[(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("horizontalBar")},children:"\u6761\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("bar")},children:"\u67F1\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",onClick:function(){return s("pie")},children:"\u6247\u5F62\u56FE"}),(0,t.jsx)(F.Z,{type:"link",icon:(0,t.jsx)("div",{className:"divider"})}),(0,t.jsx)(F.Z,{type:"link",icon:(0,t.jsx)(J.Z,{}),onClick:yt})]})}),(0,t.jsx)("div",{children:(0,t.jsx)(lt,{type:y,loading:p,labels:m,data:h,ref:f})})]})},Ct=function(){return(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)(X.Z,{pagination:!1,size:"small",bordered:!0,columns:j,rowKey:"id",dataSource:jt()})})};return(0,t.jsx)("div",{className:"question-item",children:(0,t.jsxs)(T.Z,{gutter:[12,12],className:"question-content",children:[(0,t.jsx)(C.Z,{xs:24,sm:12,children:(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)("span",{className:"question-label",children:(0,A.WO)(r.title)})}),St()]})}),(0,t.jsx)(C.Z,{xs:24,sm:12,children:(0,t.jsxs)(T.Z,{children:[(0,t.jsx)(C.Z,{span:24,children:(0,t.jsx)("div",{className:"question-title",children:(0,t.jsxs)("div",{className:"question-data-desc",children:[(0,t.jsxs)("div",{children:["\u7C7B\u578B\uFF1A",W[r.type]]}),(0,t.jsxs)("div",{children:["\u5FC5\u586B\uFF1A",(a=r.attribute)!==null&&a!==void 0&&a.required?"\u662F":"\u5426"]}),(0,t.jsxs)("div",{children:[c,"\u6761\u6570\u636E"]})]})})}),Ct()]})})]})})}),Bt=e(59250),ut=e(13013),Nt=e(30887),dt=e(28682),bt=e(47673),ct=e(4107),vt=e(19957),ht=e(83663),ft=ct.Z.Search,mt=(0,P.P)(function(){var n=(0,u.useContext)(S),i=n.reportData,a=(0,t.jsx)(dt.Z,{items:[{label:"\u6309\u6570\u636E\u5185\u5BB9\u7B5B\u9009",key:"content"},{label:"\u6309\u63D0\u4EA4\u65E5\u671F\u7B5B\u9009",key:"date"}]});return(0,t.jsxs)("div",{className:"report-header",children:[(0,t.jsxs)("span",{children:["\u5171",(i==null?void 0:i.total)||0,"\u6761\u6570\u636E"]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(ft,{size:"small",placeholder:"\u641C\u7D22",onSearch:function(l){n.loadReportData(l)},style:{width:200,marginRight:10}}),(0,t.jsx)(ut.Z,{overlay:a,placement:"bottomRight",children:(0,t.jsx)(vt.Z,{style:{cursor:"pointer"}})})]}),(0,t.jsx)(ht.Z,{})]})}),xt=function(){return(0,t.jsx)(mt,{})},pt=function(){return(0,t.jsx)("div",{className:"report-container",children:(0,t.jsx)(V,{})})},L=(0,P.P)(function(){var n=(0,O.IE)(),i=(0,u.useMemo)(function(){return new D.Cu(n)},[n]);return(0,u.useEffect)(function(){i.loadReportData()},[]),(0,t.jsx)("div",{className:"survey-report",children:(0,t.jsxs)(B,{value:i,children:[(0,t.jsx)(xt,{}),(0,t.jsx)(pt,{})]})})}),gt=L},11628:function(Q,E,e){"use strict";e.d(E,{xI:function(){return w},Ge:function(){return S},IE:function(){return D}});var u=e(67294),w=(0,u.createContext)({}),P=w.Provider;function D(){var B=(0,u.useContext)(w);return B.store}function S(){var B=D();return B.flowStore}}}]);
