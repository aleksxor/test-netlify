webpackJsonp([0xc956abe28b23],{52:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){return"undefined"==typeof M&&"undefined"!=typeof window&&window.IntersectionObserver&&(M=new window.IntersectionObserver(function(e){e.forEach(function(e){x.forEach(function(n){n[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(M.unobserve(n[0]),n[1]())})})},{rootMargin:"200px"})),M}n.__esModule=!0;var r=t(21),o=a(r),l=t(26),s=a(l),c=t(25),d=a(c),u=t(57),m=a(u),p=t(56),f=a(p),g=t(1),h=a(g),b=t(3),y=a(b),v=function(e){var n=(0,f.default)({},e);return n.responsiveResolution&&(n.resolutions=n.responsiveResolution,delete n.responsiveResolution),n.responsiveSizes&&(n.sizes=n.responsiveSizes,delete n.responsiveSizes),n},w={},E=function(e){var n=v(e),t=n.sizes?n.sizes.src:n.resolutions.src;return!!w[t]||(w[t]=!0,!1)},M=void 0,x=[],N=function(e,n){i().observe(e),x.push([e,n])},z=null,I=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var n=e.src?'src="'+e.src+'" ':'src="" ',t=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+o+l+n+t+r+i+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},k=function(e){var n=e.style,t=e.onLoad,a=(0,m.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,f.default)({},a,{onLoad:t,style:(0,f.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))};k.propTypes={style:y.default.object,onLoad:y.default.func};var S=function(e){function n(t){(0,o.default)(this,n);var a=(0,s.default)(this,e.call(this,t)),i=!0,r=!0,l=!1,c=E(t);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!1,l=!0),"undefined"==typeof window&&(i=!1,r=!1),a.state={isVisible:i,imgLoaded:r,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,d.default)(n,e),n.prototype.handleRef=function(e){var n=this;this.state.IOSupported&&e&&N(e,function(){n.setState({isVisible:!0,imgLoaded:!1})})},n.prototype.render=function(){var e=this,n=v(this.props),t=n.title,a=n.alt,i=n.className,r=n.outerWrapperClassName,o=n.style,l=void 0===o?{}:o,s=n.imgStyle,c=void 0===s?{}:s,d=n.placeholderStyle,u=void 0===d?{}:d,m=n.sizes,p=n.resolutions,g=n.backgroundColor,b=n.Tag,y=void 0;y="boolean"==typeof g?"lightgray":g;var w=(0,f.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c,u),E=(0,f.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(m){var M=m;return M.srcWebp&&M.srcSetWebp&&I()&&(M.src=M.srcWebp,M.srcSet=M.srcSetWebp),h.default.createElement(b,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},h.default.createElement(b,{className:(i?i:"")+" gatsby-image-wrapper",style:(0,f.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},h.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),M.base64&&h.default.createElement(k,{alt:a,title:t,src:M.base64,style:w}),M.tracedSVG&&h.default.createElement(k,{alt:a,title:t,src:M.tracedSVG,style:w}),y&&h.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(k,{alt:a,title:t,srcSet:M.srcSet,src:M.src,sizes:M.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,f.default)({alt:a,title:t},M))}})))}if(p){var x=p,N=(0,f.default)({position:"relative",overflow:"hidden",display:"inline-block",width:x.width,height:x.height},l);return"inherit"===l.display&&delete N.display,x.srcWebp&&x.srcSetWebp&&I()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),h.default.createElement(b,{className:(r?r:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},h.default.createElement(b,{className:(i?i:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},x.base64&&h.default.createElement(k,{alt:a,title:t,src:x.base64,style:w}),x.tracedSVG&&h.default.createElement(k,{alt:a,title:t,src:x.tracedSVG,style:w}),y&&h.default.createElement(b,{title:t,style:{backgroundColor:y,width:x.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:x.height}}),this.state.isVisible&&h.default.createElement(k,{alt:a,title:t,width:x.width,height:x.height,srcSet:x.srcSet,src:x.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,f.default)({alt:a,title:t,width:x.width,height:x.height},x))}})))}return null},n}(h.default.Component);S.defaultProps={fadeIn:!0,alt:"",Tag:"div"},S.propTypes={responsiveResolution:y.default.object,responsiveSizes:y.default.object,resolutions:y.default.object,sizes:y.default.object,fadeIn:y.default.bool,title:y.default.string,alt:y.default.string,className:y.default.oneOfType([y.default.string,y.default.object]),outerWrapperClassName:y.default.oneOfType([y.default.string,y.default.object]),style:y.default.object,imgStyle:y.default.object,placeholderStyle:y.default.object,position:y.default.string,backgroundColor:y.default.oneOfType([y.default.string,y.default.bool]),onLoad:y.default.func,Tag:y.default.string},n.default=S},45:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(){return i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},i.apply(this,arguments)}Object.defineProperty(n,"__esModule",{value:!0}),n.ReactComponent=void 0;var r=t(1),o=a(r),l=o.default.createElement("path",{d:"M1.246 6.546c.8 1.642 4.32 3.305 3.465 6.864-.49 2.04-3.483 3.834-4.052 6.305-.232 1.008-.127 3.455 1.493 4.11 6.766 2.737 6.574-4.234 7.194-5.315 1.501-2.615 4.642-1.989 4.77-5.593.133-3.726-4.233-3.023-4.871-5.178-.35-1.183.065-4.791-1.388-5.908-4.151-3.19-8.242 1.367-6.611 4.715z",fill:"currentColor",fillRule:"evenodd"}),s=function(e){return o.default.createElement("svg",i({width:15,height:25,viewBox:"0 0 15 25"},e),l)};n.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xLjI0NjAxMzcgNi41NDU1NzYyM2MuODAwMzU0NDcgMS42NDIwOTUxMyA0LjMyMDgxNzEzIDMuMzA1MDYyNDQgMy40NjUyNTIzNyA2Ljg2NDE0MDYzQzQuMjIwNjI1NyAxNS40NTA1OTAxNCAxLjIyNzU2MzYgMTcuMjQ0MDU2NC42NTkxNTM0IDE5LjcxNDk5MjMxYy0uMjMxODMxNzcgMS4wMDc2NDI4OC0uMTI3MDM2NzcgMy40NTQ1NzIwNyAxLjQ5MjQxNzMzIDQuMTA5NjQxNjQgNi43NjYxODEyMyAyLjczNjkwMjY2IDYuNTc0MzM0NjItNC4yMzMxNzUzMSA3LjE5NDczNjI5LTUuMzE0MjAyMDQgMS41MDA4NzIzMS0yLjYxNTA3NzQ2IDQuNjQxNTczNjgtMS45ODkyNTI2IDQuNzY5ODg5MjItNS41OTM2MDY1NS4xMzI1MzQtMy43MjU3NDg5LTQuMjMzNTIxNDYtMy4wMjI5MDM4LTQuODcxNTQ0NjItNS4xNzc4MDQxNi0uMzUwMzcyMzYtMS4xODMwMTQzNy4wNjUxNzk3My00Ljc5MTI0OTA4LTEuMzg3MjgxMDMtNS45MDc3NzAzOEMzLjcwNjAwNTcxLTEuMzU5ODkzNDQtLjM4NTE3NTI3IDMuMTk4Mzg0NSAxLjI0NjAxMzcgNi41NDU1NzYyM3oiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",n.ReactComponent=s},14:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"],["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"]);Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(52),l=t(2),s=l.default.div(i);n.BackgroundImage=function(e){var n=e.image,t=e.className;return r.createElement(s,{className:t},r.createElement(o.default,{resolutions:n.resolutions}))}},40:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  h2 {\n    font-size: 2.125rem;\n  }\n"],["\n  h2 {\n    font-size: 2.125rem;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var r=t(2),o=t(15);n.CallToAction=r.default(o.Divider)(i)},41:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var r=t(1),o=t(2),l=t(14),s=o.default.div(i,function(e){return e.invert?e.theme.colors.black:e.theme.colors.white});n.CardContents=function(e){var n=e.className,t=e.bgImage,a=e.invert,i=e.children;return r.createElement(s,{className:n,invert:a},r.createElement(l.BackgroundImage,{image:t}),i)}},15:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  padding: ","rem\n    ","rem;\n\n  ",";\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n"],["\n  padding: ","rem\n    ","rem;\n\n  ",";\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n"]),r=a(["\n    padding-left: ","rem;\n  "],["\n    padding-left: ","rem;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),l=t(2),s=t(7),c=l.default(s.Container)(i,function(e){return 2*e.theme.dimensions.containerPadding},function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(r,function(e){return 3*e.theme.dimensions.containerPadding})});n.Divider=function(e){var n=e.className,t=e.children;return o.createElement(c,{className:n},t)}},42:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"]),r=a(["\n    padding-left: ","rem;\n  "],["\n    padding-left: ","rem;\n  "]),o=a(["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n"],["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var l=t(1),s=t(2),c=t(16),d=t(14),u=s.default(c.RatioContainer)(i,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(r,function(e){return 3*e.theme.dimensions.containerPadding})}),m=s.default.div(o);n.Intro=function(e){var n=e.className,t=e.bgImage,a=e.header,i=e.text;return l.createElement(u,null,l.createElement(d.BackgroundImage,{image:t}),l.createElement(m,{className:n},l.createElement("h1",null,a),l.createElement("p",null,i)))}},16:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  position: relative;\n  width: 100%;\n  height: ","em;\n"],["\n  position: relative;\n  width: 100%;\n  height: ","em;\n"]),r=a(["\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n"]);Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),l=t(2),s=t(20),c=t(7),d=l.default.section(i,s.getEmSize(700)),u=l.default.div(r);n.RatioContainer=function(e){var n=e.className,t=e.children;return o.createElement(c.Container,null,o.createElement(d,null,o.createElement(u,{className:n},t)))}},44:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  font-size: 1.375rem;\n  // display: inline-block;\n  display: none;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"],["\n  font-size: 1.375rem;\n  // display: inline-block;\n  display: none;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"]),r=a(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]),o=a(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n"]),l=a(["\n    padding-left: ","rem;\n    width: 26rem;\n  "],["\n    padding-left: ","rem;\n    width: 26rem;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var s=t(1),c=t(13),d=t(2),u=t(45),m=function(e){var n=e.className,t=e.to;return s.createElement("div",null,s.createElement(c.default,{className:n,to:t},"Read more ",s.createElement(u.ReactComponent,null)))},p=d.default(m)(i),f=d.default.div(r),g=function(e){var n=e.className,t=e.children,a=e.more;return s.createElement("aside",{className:n},t,s.createElement(f,null),a&&s.createElement(p,{to:a}))};n.StyledSideBlock=d.default(g)(o,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(l,function(e){return 3*e.theme.dimensions.containerPadding})})},176:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var i=a(["\n  margin-top: 2.5rem;\n  font-size: 1.125rem;\n  color: ",";\n"],["\n  margin-top: 2.5rem;\n  font-size: 1.125rem;\n  color: ",";\n"]),r=a(["\n  background-color: transparent;\n"],["\n  background-color: transparent;\n"]),o=a(["\n  color: ",";\n"],["\n  color: ",";\n"]),l=a(["\n  position: relative;\n  width: 100%;\n  background: #202020;\n  background-size: 100%;\n  background: linear-gradient(90deg, #202020 0%, #202020 50%, #414141 50%, #414141 100%);\n"],["\n  position: relative;\n  width: 100%;\n  background: #202020;\n  background-size: 100%;\n  background: linear-gradient(90deg, #202020 0%, #202020 50%, #414141 50%, #414141 100%);\n"]),s=a(["\n  position: relative;\n  background: #000;\n\n  p,\n  h2 {\n    position: relative;\n    z-index: 2;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 90%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background: #000;\n    background-size: 100%;\n    background: linear-gradient(45deg, #202020 0%, #202020 90%, transparent 90%, transparent 100%);\n    z-index: 0;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 40%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #000;\n    background-size: 100%;\n    background: linear-gradient(135deg, transparent 0%, transparent 50%, #414141 50%, #414141 100%);\n    z-index: 1;\n  }\n"],["\n  position: relative;\n  background: #000;\n\n  p,\n  h2 {\n    position: relative;\n    z-index: 2;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    width: 90%;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    background: #000;\n    background-size: 100%;\n    background: linear-gradient(45deg, #202020 0%, #202020 90%, transparent 90%, transparent 100%);\n    z-index: 0;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    width: 40%;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    background: #000;\n    background-size: 100%;\n    background: linear-gradient(135deg, transparent 0%, transparent 50%, #414141 50%, #414141 100%);\n    z-index: 1;\n  }\n"]),c=a(["\n  background-color: #191919;\n"],["\n  background-color: #191919;\n"]);Object.defineProperty(n,"__esModule",{value:!0});var d=t(1),u=t(2),m=t(13),p=t(43),f=t(42),g=t(16),h=t(41),b=t(15),y=t(40),v=t(44),w=u.default.div(i,function(e){return e.theme.colors.gray.desc}),E=u.default(v.StyledSideBlock)(r),M=u.default(E)(o,function(e){return e.theme.colors.black}),x=u.default.div(l),N=u.default(b.Divider)(s),z=u.default(v.StyledSideBlock)(c),I=function(e){var n=e.data;return d.createElement(p.Page,null,d.createElement(f.Intro,{bgImage:n.introImage,header:d.createElement("span",null,"Ideas",d.createElement("br",null),"Turned Products"),text:"Makeomatic is your cutting-edge web development and design partner specializing in creating high-load interactive applications."}),d.createElement(b.Divider,null,d.createElement("h2",null,"Enter Innovation Lab"),d.createElement("p",null,"Whether you have a business plan, a sketch or just a few ideas about the product you'd like to realize, ",d.createElement(m.default,{to:"/process"},"we work with you")," from that point onwards, all the way through validating your market assumption, designing an optimal solution, and developing a prototype to be tested and iterated upon based on the feedback from the market until it becomes a sustainable product.")),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section1Image},d.createElement(v.StyledSideBlock,{more:"/contacts"},d.createElement("h3",null,"Cappasity 3D"),d.createElement("p",null,"Cappasity Cloud platform,",d.createElement("br",null),"Cappasity Blockchain"),d.createElement(w,null,"Cappasity is your cutting-edge web development and design partner specializing in creating high-load interactive applications.")))),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section2Image},d.createElement(v.StyledSideBlock,{more:"/contacts"},d.createElement("h3",null,"Radio FX"),d.createElement("p",null,"iOS & Android apps,",d.createElement("br",null),"Cloud platform, design"),d.createElement(w,null,"RadioFX is your cutting-edge web development and design partner specializing in creating high-load interactive applications.")))),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section3Image},d.createElement(v.StyledSideBlock,{more:"/contacts"},d.createElement("h3",null,"Microfleet"),d.createElement("p",null,"Our product",d.createElement("br",null),"Scalable framework"),d.createElement(w,null,"Microfleet is your cutting-edge web development and design partner specializing in creating high-load interactive applications.")))),d.createElement(x,null,d.createElement(N,null,d.createElement("h2",null,"Behind The Scene"),d.createElement("p",null,"A ",d.createElement(m.default,{to:"/team"},"cohesive team")," of engineers, designers and project managers headquartered in in beautiful Vancouver, BC"))),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section4Image},d.createElement(v.StyledSideBlock,{more:"/contacts"},d.createElement("h3",null,"True Preferences"),d.createElement("p",null,"iOS & Android apps,",d.createElement("br",null),"Cloud platform, design"),d.createElement(w,null,"True Preferences is your cutting-edge web development and design partner specializing in in creating high-load interactive applications.")))),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section51Image},d.createElement(E,{more:"/contacts"},d.createElement("h3",null,"Byczynski"),d.createElement("p",null,"Branding,",d.createElement("br",null),"Print materials"))),d.createElement(h.CardContents,{bgImage:n.section52Image},d.createElement(M,{more:"/contacts"},d.createElement("h3",null,"Gemix"),d.createElement("p",null,"Branding,",d.createElement("br",null),"Print materials")))),d.createElement(g.RatioContainer,null,d.createElement(h.CardContents,{bgImage:n.section6Image},d.createElement(z,{more:"/contacts"},d.createElement("h3",null,"Artune"),d.createElement("p",null,"iOS app,",d.createElement("br",null),"Software"),d.createElement(w,null,"Artune is your cutting-edge web development and design partner specializing in creating high-load interactive applications.")))),d.createElement(y.CallToAction,null,d.createElement("h2",null,"Ask us about ",d.createElement(m.default,{to:"/process"},"your project"))))};n.query="** extracted graphql fragment **",n.default=I},2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(9),i=a.default,r=a.css,o=a.injectGlobal,l=a.keyframes,s=a.withTheme,c=a.ThemeProvider;n.css=r,n.injectGlobal=o,n.keyframes=l,n.withTheme=s,n.ThemeProvider=c,n.default=i}});
//# sourceMappingURL=component---src-pages-index-tsx-1ebcded7c2a57430e412.js.map