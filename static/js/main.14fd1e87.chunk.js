(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(8),s=a.n(n),i=a(2),r=a(3),c=a(5),o=a(4),m=a(1),l=a.n(m),u=(a(13),a(7),a(0)),p=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={imagesAmount:e.props.images.length,itemWidth:e.props.itemWidth,movedDistance:0,gap:0,step:e.props.step,frameSize:e.props.frameSize,animationDuration:e.props.animationDuration,infinite:e.props.infinite},e.handleImagesNext=function(){var t=e.state,a=t.imagesAmount,n=t.itemWidth,s=t.movedDistance,i=t.gap,r=t.step,c=t.infinite,o=t.frameSize;if(c&&e.setState({movedDistance:0}),s+o*(n+i)<a*(n+i)){var m=a*(n+i)-(s+o*(n+i));m<=(n+i)*r?e.setState({movedDistance:s+m}):e.setState({movedDistance:s+(n+i)*r})}},e.handleImagesPrev=function(){var t=e.state,a=t.imagesAmount,n=t.itemWidth,s=t.movedDistance,i=t.gap,r=t.step,c=t.infinite,o=t.frameSize;s>=(n+i)*r?e.setState({movedDistance:s-(n+i)*r}):e.setState({movedDistance:s-s});var m=a*(n+i)-o*(n+i);c&&0===s&&e.setState({movedDistance:m})},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this,t=this.props.images,a=this.state,n=a.imagesAmount,s=a.itemWidth,i=a.movedDistance,r=a.gap,c=a.step,o=a.frameSize,m=a.animationDuration,l=a.infinite,p=(n-o)*(s+r),_={transform:"translateX(".concat(-i,"px"),transition:"".concat(m,"ms")};return Object(u.jsxs)("div",{className:"Carousel",style:{width:"".concat(s*o,"px")},children:[Object(u.jsx)("ul",{className:"Carousel__list",style:_,children:t.map((function(e,t){return Object(u.jsx)("li",{className:"Carousel__item",style:{marginRight:"".concat(r,"px")},children:Object(u.jsx)("img",{src:e,alt:"".concat(t+1),width:"".concat(s)})},e)}))}),Object(u.jsxs)("div",{className:"Carousel__buttons",children:[Object(u.jsx)("button",{disabled:0===i&&!1===l,className:"Carousel__button Carousel__button--prev",type:"button",onClick:this.handleImagesPrev,children:"Prev"}),Object(u.jsx)("button",{"data-cy":"next",disabled:i>=p&&!1===l,className:"Carousel__button Carousel__button--next",type:"button",onClick:this.handleImagesNext,children:"Next"})]}),Object(u.jsxs)("form",{className:"Carousel__form",children:[Object(u.jsxs)("label",{className:"Carousel__form__label",children:["Moving step: ",Object(u.jsx)("input",{className:"Carousel__form__input",type:"number",value:c,min:"1",max:"5",step:"1",onChange:function(t){e.setState({step:+t.target.value})}})]}),Object(u.jsxs)("label",{className:"Carousel__form__label",children:["Frame size: ",Object(u.jsx)("input",{className:"Carousel__form__input",type:"number",value:o,min:"2",max:"5",step:"1",onChange:function(t){e.setState({frameSize:+t.target.value})}})]}),Object(u.jsxs)("label",{className:"Carousel__form__label",children:["Image size: ",Object(u.jsx)("input",{className:"Carousel__form__input",type:"number",value:s,min:"50",max:"200",step:"10",onChange:function(t){e.setState({itemWidth:+t.target.value})}})]}),Object(u.jsxs)("label",{className:"Carousel__form__label",children:["Motion speed: ",Object(u.jsx)("input",{className:"Carousel__form__input",type:"number",value:m,min:"300",max:"3000",step:"100",onChange:function(t){e.setState({animationDuration:+t.target.value})}})]}),Object(u.jsxs)("label",{className:"Carousel__form__label",children:["Infinite: ",Object(u.jsx)("input",{className:"Carousel__form__input Carousel__form__input--checkbox",type:"checkbox",checked:l,onChange:function(){e.setState({infinite:!l})}})]})]})]})}}]),a}(l.a.Component),_=p,b=function(e){Object(c.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],itemWidth:130,step:3,frame:3,moveSpeed:1e3,infinite:!1},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state,t=e.images,a=e.itemWidth,n=e.step,s=e.frame,i=e.moveSpeed,r=e.infinite;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{className:"App__title","data-cy":"title",children:"Carousel with ".concat(t.length," images")}),Object(u.jsx)(_,{images:t,step:n,frameSize:s,itemWidth:a,animationDuration:i,infinite:r})]})}}]),a}(l.a.Component),d=b;s.a.render(Object(u.jsx)(d,{}),document.getElementById("root"))},7:function(e,t,a){}},[[15,1,2]]]);
//# sourceMappingURL=main.14fd1e87.chunk.js.map