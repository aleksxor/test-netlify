webpackJsonp([0x7b77232a241a],{53:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof x&&"undefined"!=typeof window&&window.IntersectionObserver&&(x=new window.IntersectionObserver(function(e){e.forEach(function(e){E.forEach(function(n){n[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(n[0]),n[1]())})})},{rootMargin:"200px"})),x}n.__esModule=!0;var i=t(21),o=a(i),l=t(26),d=a(l),s=t(25),c=a(s),u=t(58),m=a(u),f=t(57),g=a(f),h=t(1),p=a(h),v=t(3),b=a(v),y=function(e){var n=(0,g.default)({},e);return n.responsiveResolution&&(n.resolutions=n.responsiveResolution,delete n.responsiveResolution),n.responsiveSizes&&(n.sizes=n.responsiveSizes,delete n.responsiveSizes),n},w={},M=function(e){var n=y(e),t=n.sizes?n.sizes.src:n.resolutions.src;return!!w[t]||(w[t]=!0,!1)},x=void 0,E=[],N=function(e,n){r().observe(e),E.push([e,n])},z=null,I=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},k=function(e){var n=e.src?'src="'+e.src+'" ':'src="" ',t=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",d=e.opacity?e.opacity:"1",s=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+o+l+n+t+i+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+s+";opacity:"+d+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},j=function(e){var n=e.style,t=e.onLoad,a=(0,m.default)(e,["style","onLoad"]);return p.default.createElement("img",(0,g.default)({},a,{onLoad:t,style:(0,g.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))};j.propTypes={style:b.default.object,onLoad:b.default.func};var L=function(e){function n(t){(0,o.default)(this,n);var a=(0,d.default)(this,e.call(this,t)),r=!0,i=!0,l=!1,s=M(t);return!s&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,l=!0),"undefined"==typeof window&&(r=!1,i=!1),a.state={isVisible:r,imgLoaded:i,IOSupported:l},a.handleRef=a.handleRef.bind(a),a}return(0,c.default)(n,e),n.prototype.handleRef=function(e){var n=this;this.state.IOSupported&&e&&N(e,function(){n.setState({isVisible:!0,imgLoaded:!1})})},n.prototype.render=function(){var e=this,n=y(this.props),t=n.title,a=n.alt,r=n.className,i=n.outerWrapperClassName,o=n.style,l=void 0===o?{}:o,d=n.imgStyle,s=void 0===d?{}:d,c=n.placeholderStyle,u=void 0===c?{}:c,m=n.sizes,f=n.resolutions,h=n.backgroundColor,v=n.Tag,b=void 0;b="boolean"==typeof h?"lightgray":h;var w=(0,g.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},s,u),M=(0,g.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},s);if(m){var x=m;return x.srcWebp&&x.srcSetWebp&&I()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),p.default.createElement(v,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},p.default.createElement(v,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,g.default)({position:"relative",overflow:"hidden"},l),ref:this.handleRef},p.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&p.default.createElement(j,{alt:a,title:t,src:x.base64,style:w}),x.tracedSVG&&p.default.createElement(j,{alt:a,title:t,src:x.tracedSVG,style:w}),b&&p.default.createElement(v,{title:t,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&p.default.createElement(j,{alt:a,title:t,srcSet:x.srcSet,src:x.src,sizes:x.sizes,style:M,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),p.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,g.default)({alt:a,title:t},x))}})))}if(f){var E=f,N=(0,g.default)({position:"relative",overflow:"hidden",display:"inline-block",width:E.width,height:E.height},l);return"inherit"===l.display&&delete N.display,E.srcWebp&&E.srcSetWebp&&I()&&(E.src=E.srcWebp,E.srcSet=E.srcSetWebp),p.default.createElement(v,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===l.position?"initial":"relative"}},p.default.createElement(v,{className:(r?r:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},E.base64&&p.default.createElement(j,{alt:a,title:t,src:E.base64,style:w}),E.tracedSVG&&p.default.createElement(j,{alt:a,title:t,src:E.tracedSVG,style:w}),b&&p.default.createElement(v,{title:t,style:{backgroundColor:b,width:E.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:E.height}}),this.state.isVisible&&p.default.createElement(j,{alt:a,title:t,width:E.width,height:E.height,srcSet:E.srcSet,src:E.src,style:M,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),p.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,g.default)({alt:a,title:t,width:E.width,height:E.height},E))}})))}return null},n}(p.default.Component);L.defaultProps={fadeIn:!0,alt:"",Tag:"div"},L.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},n.default=L},46:function(e,n,t){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},r.apply(this,arguments)}Object.defineProperty(n,"__esModule",{value:!0}),n.ReactComponent=void 0;var i=t(1),o=a(i),l=o.default.createElement("path",{d:"M1.246 6.546c.8 1.642 4.32 3.305 3.465 6.864-.49 2.04-3.483 3.834-4.052 6.305-.232 1.008-.127 3.455 1.493 4.11 6.766 2.737 6.574-4.234 7.194-5.315 1.501-2.615 4.642-1.989 4.77-5.593.133-3.726-4.233-3.023-4.871-5.178-.35-1.183.065-4.791-1.388-5.908-4.151-3.19-8.242 1.367-6.611 4.715z",fill:"currentColor",fillRule:"evenodd"}),d=function(e){return o.default.createElement("svg",r({width:15,height:25,viewBox:"0 0 15 25"},e),l)};n.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xLjI0NjAxMzcgNi41NDU1NzYyM2MuODAwMzU0NDcgMS42NDIwOTUxMyA0LjMyMDgxNzEzIDMuMzA1MDYyNDQgMy40NjUyNTIzNyA2Ljg2NDE0MDYzQzQuMjIwNjI1NyAxNS40NTA1OTAxNCAxLjIyNzU2MzYgMTcuMjQ0MDU2NC42NTkxNTM0IDE5LjcxNDk5MjMxYy0uMjMxODMxNzcgMS4wMDc2NDI4OC0uMTI3MDM2NzcgMy40NTQ1NzIwNyAxLjQ5MjQxNzMzIDQuMTA5NjQxNjQgNi43NjYxODEyMyAyLjczNjkwMjY2IDYuNTc0MzM0NjItNC4yMzMxNzUzMSA3LjE5NDczNjI5LTUuMzE0MjAyMDQgMS41MDA4NzIzMS0yLjYxNTA3NzQ2IDQuNjQxNTczNjgtMS45ODkyNTI2IDQuNzY5ODg5MjItNS41OTM2MDY1NS4xMzI1MzQtMy43MjU3NDg5LTQuMjMzNTIxNDYtMy4wMjI5MDM4LTQuODcxNTQ0NjItNS4xNzc4MDQxNi0uMzUwMzcyMzYtMS4xODMwMTQzNy4wNjUxNzk3My00Ljc5MTI0OTA4LTEuMzg3MjgxMDMtNS45MDc3NzAzOEMzLjcwNjAwNTcxLTEuMzU5ODkzNDQtLjM4NTE3NTI3IDMuMTk4Mzg0NSAxLjI0NjAxMzcgNi41NDU1NzYyM3oiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",n.ReactComponent=d},20:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}function r(e){if(e)return"center"===e?u.css(i):u.css(o)}var i=a(["\n      left: 50%;\n      transform: translateX(-50%);\n    "],["\n      left: 50%;\n      transform: translateX(-50%);\n    "]),o=a(["\n    float: right;\n  "],["\n    float: right;\n  "]),l=a(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"],["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"]),d=a(["\n  ",";\n"],["\n  ",";\n"]);Object.defineProperty(n,"__esModule",{value:!0});var s=t(1),c=t(53),u=t(2),m=u.default.div(l),f=u.default(c.default)(d,function(e){return r(e.align)});n.BackgroundImage=function(e){var n=e.image,t=e.className,a=e.align;return s.createElement(m,{className:t},s.createElement(f,{resolutions:n.resolutions,align:a}))}},40:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  h2 {\n    font-size: 2.125rem;\n  }\n"],["\n  h2 {\n    font-size: 2.125rem;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),o=t(15);n.CallToAction=i.default(o.Divider)(r)},41:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var i=t(1),o=t(2),l=o.default.div(r,function(e){return e.invert?e.theme.colors.black:e.theme.colors.white});n.CardContents=function(e){var n=e.className,t=e.invert,a=e.children;return i.createElement(l,{className:n,invert:t},a)}},168:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n"],["\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n"]),i=a(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 ","rem;\n\n  ",";\n\n  ",";\n\n  p {\n    font-size: 1.25rem;\n  }\n\n  & > *:first-child {\n    margin-top: 0;\n  }\n\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n"],["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 ","rem;\n\n  ",";\n\n  ",";\n\n  p {\n    font-size: 1.25rem;\n  }\n\n  & > *:first-child {\n    margin-top: 0;\n  }\n\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n"]),o=a(["\n    padding: 0 ","rem;\n  "],["\n    padding: 0 ","rem;\n  "]),l=a(["\n    padding: 0 1rem;\n  "],["\n    padding: 0 1rem;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var d=t(1),s=t(2),c=s.default.div(r),u=s.default.div(i,function(e){return 2.5*e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(o,function(e){return e.theme.dimensions.containerPadding})},function(e){return e.theme.media.md(l)});n.CardNoImage=function(e){var n=e.className,t=e.header,a=e.text;return d.createElement(c,{className:n},d.createElement(u,null,d.createElement("h2",null,t),d.createElement("p",null,a)))}},15:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  padding: ","rem\n    ","rem;\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n\n  ",";\n"],["\n  padding: ","rem\n    ","rem;\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n\n  ",";\n"]),i=a(["\n    padding: 3rem 1rem;\n    \n    h2 {\n      font-size: 2.25rem;\n    }\n    \n    p {\n      font-size: 1.25rem;\n    }\n  "],["\n    padding: 3rem 1rem;\n    \n    h2 {\n      font-size: 2.25rem;\n    }\n    \n    p {\n      font-size: 1.25rem;\n    }\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),l=t(2),d=t(7),s=l.default(d.Container)(r,function(e){return 2*e.theme.dimensions.containerPadding},function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.md(i)});n.Divider=function(e){var n=e.className,t=e.children;return o.createElement(s,{className:n},t)}},16:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: ","em;\n\n  ",";\n"],["\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  height: ","em;\n\n  ",";\n"]),i=a(["\n    height: ","em;\n  "],["\n    height: ","em;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var o=t(1),l=t(2),d=t(8),s=t(7),c=l.default.div(r,d.getEmSize(700),function(e){return e.theme.media.md(i,d.getEmSize(520))});n.HeightContainer=function(e){var n=e.className,t=e.children;return o.createElement(s.Container,null,o.createElement(c,{className:n},t))}},42:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"]),i=a(["\n    padding: 1rem;\n  "],["\n    padding: 1rem;\n  "]),o=a(["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n\n  ",";\n"],["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n\n  ",";\n"]),l=a(["\n    h1 {\n      font-size: 2.75rem;\n    }\n  \n    p {\n      font-size: 1.375rem;\n    }\n  "],["\n    h1 {\n      font-size: 2.75rem;\n    }\n  \n    p {\n      font-size: 1.375rem;\n    }\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var d=t(1),s=t(2),c=t(16),u=s.default(c.HeightContainer)(r,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.md(i)}),m=s.default.div(o,function(e){return e.theme.media.md(l)});n.Intro=function(e){var n=e.className,t=e.children,a=e.header,r=e.text;return d.createElement(u,null,t,d.createElement(m,{className:n},d.createElement("h1",null,a),d.createElement("p",null,r)))}},44:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  display: block;\n\n  ",";\n"],["\n  display: block;\n\n  ",";\n"]),i=a(["\n    display: none;\n  "],["\n    display: none;\n  "]),o=a(["\n  display: none;\n\n  ",";\n"],["\n  display: none;\n\n  ",";\n"]),l=a(["\n    display: block;\n  "],["\n    display: block;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var d=t(1),s=t(2),c=t(20),u=s.default(c.BackgroundImage)(r,function(e){return e.theme.media.md(i)}),m=s.default(c.BackgroundImage)(o,function(e){return e.theme.media.md(l)});n.ResponsiveBackgroundImage=function(e){var n=e.imageLg,t=e.alignLg,a=e.imageMd,r=e.alignMd,i=e.className;return d.createElement(d.Fragment,null,d.createElement(u,{className:i,image:n,align:t}),d.createElement(m,{className:i,image:a,align:r}))}},45:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  font-size: 1.375rem;\n  // display: inline-block;\n  display: none;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"],["\n  font-size: 1.375rem;\n  // display: inline-block;\n  display: none;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"]),i=a(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]),o=a(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n\n  ",";\n"]),l=a(["\n    width: 26rem;\n  "],["\n    width: 26rem;\n  "]),d=a(["\n    width: auto;\n    padding: 1rem;\n    background-color: transparent;\n  "],["\n    width: auto;\n    padding: 1rem;\n    background-color: transparent;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var s=t(1),c=t(14),u=t(2),m=t(46),f=function(e){var n=e.className,t=e.to;return s.createElement("div",null,s.createElement(c.default,{className:n,to:t},"Read more ",s.createElement(m.ReactComponent,null)))},g=u.default(f)(r),h=u.default.div(i),p=function(e){var n=e.className,t=e.children,a=e.more;return s.createElement("aside",{className:n},t,s.createElement(h,null),a&&s.createElement(g,{to:a}))};n.StyledSideBlock=u.default(p)(o,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(l)},function(e){return e.theme.media.md(d)})},174:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  p {\n    font-size: 1.375rem;\n    margin-bottom: 0.75rem;\n  }\n\n  h3 {\n    margin-top: 0;\n  }\n"],["\n  p {\n    font-size: 1.375rem;\n    margin-bottom: 0.75rem;\n  }\n\n  h3 {\n    margin-top: 0;\n  }\n"]);Object.defineProperty(n,"__esModule",{value:!0});var i=t(2),o=t(41);n.TeamCard=i.default(o.CardContents)(r)},179:function(e,n,t){"use strict";function a(e,n){return e.raw=n,e}var r=a(["\n  max-width: 840px;\n"],["\n  max-width: 840px;\n"]),i=a(["\n  width: auto;\n  background-color: transparent;\n\n  h3 {\n    font-size: 2.125rem;\n  }\n"],["\n  width: auto;\n  background-color: transparent;\n\n  h3 {\n    font-size: 2.125rem;\n  }\n"]),o=a(["\n  position: relative;\n  background: #202020;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 50%;\n    height: 11.875rem;\n    background-color: #646464;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 8rem;\n    right: 0;\n    width: 50%;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n"],["\n  position: relative;\n  background: #202020;\n  width: 100%;\n  z-index: 0;\n  overflow: hidden;\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 50%;\n    height: 11.875rem;\n    background-color: #646464;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 8rem;\n    right: 0;\n    width: 50%;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n"]),l=a(["\n  position: relative;\n  background: #202020;\n  z-index: 1;\n  overflow: hidden;\n\n  p,\n  h2 {\n    z-index: 2;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 23.75rem;\n    height: 11.875rem;\n    background-color: #646464;\n    z-index: -2;\n\n    ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 8rem;\n    right: 0;\n    width: 13.75rem;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n    z-index: -1;\n\n    ",";\n  }\n"],["\n  position: relative;\n  background: #202020;\n  z-index: 1;\n  overflow: hidden;\n\n  p,\n  h2 {\n    z-index: 2;\n  }\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 23.75rem;\n    height: 11.875rem;\n    background-color: #646464;\n    z-index: -2;\n\n    ",";\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 8rem;\n    right: 0;\n    width: 13.75rem;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n    z-index: -1;\n\n    ",";\n  }\n"]),d=a(["\n      height: 30%;\n      width: 40%;\n    "],["\n      height: 30%;\n      width: 40%;\n    "]),s=a(["\n      width: 20%;\n      bottom: 0;\n    "],["\n      width: 20%;\n      bottom: 0;\n    "]),c=a(["\n  ",";\n"],["\n  ",";\n"]),u=a(["\n    flex-direction: column;\n    height: ","rem;\n  "],["\n    flex-direction: column;\n    height: ","rem;\n  "]),m=a(["\n    flex-direction: column-reverse;\n  "],["\n    flex-direction: column-reverse;\n  "]);Object.defineProperty(n,"__esModule",{value:!0});var f=t(1),g=t(43),h=t(42),p=t(15),v=t(16),b=t(168),y=t(174),w=t(40),M=t(2),x=t(14),E=t(45),N=t(20),z=t(8),I=t(44),k=M.default(h.Intro)(r),j=M.default(E.StyledSideBlock)(i),L=M.default.div(o),S=M.default(p.Divider)(l,function(e){return e.theme.media.md(d)},function(e){return e.theme.media.md(s)}),T=M.default(v.HeightContainer)(c,function(e){return e.theme.media.md(u,z.getEmSize(1040))}),D=M.default(T)(c,function(e){return e.theme.media.md(m)}),C=function(e){var n=e.data;return f.createElement(g.Page,null,f.createElement(k,{header:f.createElement("span",null,"Untangling Complexity",f.createElement("br",null),"Since 2012"),text:"Makeomatic is second to none in solving problems that require the highest level of technical expertise."},f.createElement(N.BackgroundImage,{image:n.introImage,align:"center"})),f.createElement(L,null,f.createElement(S,null,f.createElement("h2",null,"Expert Production Crew"),f.createElement("p",null,"Having delivered dozens of multilayered projects for a variety of industries worldwide, we are a tight-knit team ready to execute your idea with speed and precision."))),f.createElement(T,null,f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.vaminevImage,imageMd:n.vaminevImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"CTO / Mad Scientist"),f.createElement("h3",null,"Vitaly Aminev"))),f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.kremenetsImage,imageMd:n.kremenetsImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"CEO / Mobile Expert"),f.createElement("h3",null,"Aleksandr Kremenets")))),f.createElement(D,null,f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.annaImage,imageMd:n.annaImageMd,alignLg:"right",alignMd:"right"}),f.createElement(j,null,f.createElement("p",null,"Head of Design"),f.createElement("h3",null,"Anna Amineva"))),f.createElement(b.CardNoImage,{header:"Design",text:"From intricate UX trees to visual identity, we keep our designs intuitive for users and ready for development right from the get-go."})),f.createElement(w.CallToAction,null,f.createElement("h2",null,"Look through all projects",f.createElement("br",null),"to see the breadth of ",f.createElement(x.default,{to:"/"},"our work"))),f.createElement(T,null,f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.poyarkovImage,imageMd:n.poyarkovImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"Team Master"),f.createElement("h3",null,"Evgeny Poyarkov"))),f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.bratchikovImage,imageMd:n.bratchikovImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"Frontend Hero"),f.createElement("h3",null,"Aleksandr Bratchikov")))),f.createElement(T,null,f.createElement(b.CardNoImage,{header:"Development",text:"We specialize on projects that are plain too hard for most creative agencies to crack. Our experience in cutting-edge tech stacks, such as microservices, and their implementation is what differentiates us from the rest."}),f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.vaminevImage,imageMd:n.vaminevImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"Full-Stack Pro"),f.createElement("h3",null,"Aleksandr Sorokin")))),f.createElement(w.CallToAction,null,f.createElement("h3",null,"Established ",f.createElement(x.default,{to:"/process"},"process")," is the secret to our achievements")),f.createElement(T,null,f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.kubarevImage,imageMd:n.kubarevImageMd,alignLg:"center",alignMd:"center"}),f.createElement(j,null,f.createElement("p",null,"Full-Stack Whiz"),f.createElement("h3",null,"Aleksey Khoroshev"))),f.createElement(y.TeamCard,null,f.createElement(I.ResponsiveBackgroundImage,{imageLg:n.ivanovaImage,imageMd:n.ivanovaImageMd}),f.createElement(j,null,f.createElement("p",null,"Frontend Creator"),f.createElement("h3",null,"Olga Ivanova")))),f.createElement(w.CallToAction,null,f.createElement("h3",null,"Get in touch to discuss ",f.createElement(x.default,{to:"/contacts"},"your project"))))};n.query="** extracted graphql fragment **",n.default=C},2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t(12),r=a.default,i=a.css,o=a.injectGlobal,l=a.keyframes,d=a.withTheme,s=a.ThemeProvider;n.css=i,n.injectGlobal=o,n.keyframes=l,n.withTheme=d,n.ThemeProvider=s,n.default=r}});
//# sourceMappingURL=component---src-pages-team-tsx-d0d6d0b4846ee57dd6a9.js.map