(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var a=n(3),i=n.n(a),r=n(4),s=n(5),c=n(8),l=n(6),o=n(1),m=n.n(o),u=(n(13),n(7)),d=(n(14),n(0)),j=function(t){var e=t.images,n=t.itemWidth,a=t.frameSize,i=t.step,r=t.animationDuration,s=Object(o.useState)(0),c=Object(u.a)(s,2),l=c[0],m=c[1],j=function(t){var n=l+("forward"===t?i:-i);n>=e.length-a?m(e.length-a):m(n<=0?0:n)},b={transitionDuration:"".concat(r,"ms"),transform:"translateX(-".concat(l*n,"px)")};return Object(d.jsxs)("div",{className:"Carousel",style:{width:"".concat(n*a,"px")},children:[Object(d.jsx)("ul",{className:"Carousel__list",children:e.map((function(t){return Object(d.jsx)("li",{className:"Carousel__emoji",style:b,children:Object(d.jsx)("img",{src:t,width:n,alt:t.substring(t.lastIndexOf("/")+1,t.lastIndexOf("."))})},t)}))}),Object(d.jsx)("button",{type:"button",onClick:function(){return j("backward")},disabled:0===l,children:"Prev"}),Object(d.jsx)("button",{type:"button","data-cy":"next",onClick:function(){return j("forward")},disabled:l===e.length-a,children:"Next"})]})},b=["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],p=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(t=e.call.apply(e,[this].concat(i))).state={itemWidth:130,frameSize:3,step:3,animationDuration:1e3},t}return Object(s.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.itemWidth,a=e.frameSize,i=e.step,r=e.animationDuration;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("h1",{"data-cy":"title",children:["Carousel with ",b.length," images"]}),Object(d.jsxs)("div",{className:"parametr-editor",children:[Object(d.jsxs)("label",{htmlFor:"itemId",children:["Item width:",Object(d.jsx)("input",{id:"itemId",type:"number",value:n,min:130,max:1300,onChange:function(e){t.setState({itemWidth:+e.target.value})}})]}),Object(d.jsxs)("label",{htmlFor:"frameId",children:["Displayed images number",Object(d.jsx)("input",{id:"frameId",type:"number",value:a,min:1,max:10,onChange:function(e){t.setState({frameSize:+e.target.value})}})]}),Object(d.jsxs)("label",{htmlFor:"stepId",children:["Step:",Object(d.jsx)("input",{id:"stepId",type:"number",value:i,min:1,max:10,onChange:function(e){t.setState({step:+e.target.value})}})]}),Object(d.jsxs)("label",{htmlFor:"durationId",children:["Animation duration:",Object(d.jsx)("input",{id:"durationId",type:"number",value:r,min:100,max:1e5,step:100,onChange:function(e){t.setState({animationDuration:+e.target.value})}})]})]}),Object(d.jsx)(j,{images:b,step:i,frameSize:a,itemWidth:n,animationDuration:r})]})}}]),n}(m.a.Component),h=p;i.a.render(Object(d.jsx)(h,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.3a2cbff0.chunk.js.map