webpackJsonp([0x7b77232a241a],{52:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return"undefined"==typeof x&&"undefined"!=typeof window&&window.IntersectionObserver&&(x=new window.IntersectionObserver(function(e){e.forEach(function(e){M.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),x}t.__esModule=!0;var i=n(21),l=a(i),o=n(26),s=a(o),c=n(25),d=a(c),u=n(57),m=a(u),f=n(56),p=a(f),g=n(1),h=a(g),v=n(3),b=a(v),y=function(e){var t=(0,p.default)({},e);return t.responsiveResolution&&(t.resolutions=t.responsiveResolution,delete t.responsiveResolution),t.responsiveSizes&&(t.sizes=t.responsiveSizes,delete t.responsiveSizes),t},w={},E=function(e){var t=y(e),n=t.sizes?t.sizes.src:t.resolutions.src;return!!w[n]||(w[n]=!0,!1)},x=void 0,M=[],N=function(e,t){r().observe(e),M.push([e,t])},z=null,I=function(){if(null!==z)return z;var e="undefined"!=typeof window?window.document.createElement("canvas"):{};return z=!(!e.getContext||!e.getContext("2d"))&&0===e.toDataURL("image/webp").indexOf("data:image/webp")},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',n=e.srcSet?'srcset="'+e.srcSet+'" ':"",a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",s=e.opacity?e.opacity:"1",c=e.transitionDelay?e.transitionDelay:"0.5s";return"<img "+l+o+t+n+i+r+a+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+c+";opacity:"+s+';width:100%;height:100%;object-fit:cover;object-position:center"/>'},T=function(e){var t=e.style,n=e.onLoad,a=(0,m.default)(e,["style","onLoad"]);return h.default.createElement("img",(0,p.default)({},a,{onLoad:n,style:(0,p.default)({position:"absolute",top:0,left:0,transition:"opacity 0.5s",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},t)}))};T.propTypes={style:b.default.object,onLoad:b.default.func};var S=function(e){function t(n){(0,l.default)(this,t);var a=(0,s.default)(this,e.call(this,n)),r=!0,i=!0,o=!1,c=E(n);return!c&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,i=!1,o=!0),"undefined"==typeof window&&(r=!1,i=!1),a.state={isVisible:r,imgLoaded:i,IOSupported:o},a.handleRef=a.handleRef.bind(a),a}return(0,d.default)(t,e),t.prototype.handleRef=function(e){var t=this;this.state.IOSupported&&e&&N(e,function(){t.setState({isVisible:!0,imgLoaded:!1})})},t.prototype.render=function(){var e=this,t=y(this.props),n=t.title,a=t.alt,r=t.className,i=t.outerWrapperClassName,l=t.style,o=void 0===l?{}:l,s=t.imgStyle,c=void 0===s?{}:s,d=t.placeholderStyle,u=void 0===d?{}:d,m=t.sizes,f=t.resolutions,g=t.backgroundColor,v=t.Tag,b=void 0;b="boolean"==typeof g?"lightgray":g;var w=(0,p.default)({opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s"},c,u),E=(0,p.default)({opacity:this.state.imgLoaded||this.props.fadeIn===!1?1:0},c);if(m){var x=m;return x.srcWebp&&x.srcSetWebp&&I()&&(x.src=x.srcWebp,x.srcSet=x.srcSetWebp),h.default.createElement(v,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},h.default.createElement(v,{className:(r?r:"")+" gatsby-image-wrapper",style:(0,p.default)({position:"relative",overflow:"hidden"},o),ref:this.handleRef},h.default.createElement(v,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&h.default.createElement(T,{alt:a,title:n,src:x.base64,style:w}),x.tracedSVG&&h.default.createElement(T,{alt:a,title:n,src:x.tracedSVG,style:w}),b&&h.default.createElement(v,{title:n,style:{backgroundColor:b,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&h.default.createElement(T,{alt:a,title:n,srcSet:x.srcSet,src:x.src,sizes:x.sizes,style:E,onLoad:function(){e.state.IOSupported&&e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,p.default)({alt:a,title:n},x))}})))}if(f){var M=f,N=(0,p.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},o);return"inherit"===o.display&&delete N.display,M.srcWebp&&M.srcSetWebp&&I()&&(M.src=M.srcWebp,M.srcSet=M.srcSetWebp),h.default.createElement(v,{className:(i?i:"")+" gatsby-image-outer-wrapper",style:{position:"absolute"===o.position?"initial":"relative"}},h.default.createElement(v,{className:(r?r:"")+" gatsby-image-wrapper",style:N,ref:this.handleRef},M.base64&&h.default.createElement(T,{alt:a,title:n,src:M.base64,style:w}),M.tracedSVG&&h.default.createElement(T,{alt:a,title:n,src:M.tracedSVG,style:w}),b&&h.default.createElement(v,{title:n,style:{backgroundColor:b,width:M.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:M.height}}),this.state.isVisible&&h.default.createElement(T,{alt:a,title:n,width:M.width,height:M.height,srcSet:M.srcSet,src:M.src,style:E,onLoad:function(){e.setState({imgLoaded:!0}),e.props.onLoad&&e.props.onLoad()}}),h.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,p.default)({alt:a,title:n,width:M.width,height:M.height},M))}})))}return null},t}(h.default.Component);S.defaultProps={fadeIn:!0,alt:"",Tag:"div"},S.propTypes={responsiveResolution:b.default.object,responsiveSizes:b.default.object,resolutions:b.default.object,sizes:b.default.object,fadeIn:b.default.bool,title:b.default.string,alt:b.default.string,className:b.default.oneOfType([b.default.string,b.default.object]),outerWrapperClassName:b.default.oneOfType([b.default.string,b.default.object]),style:b.default.object,imgStyle:b.default.object,placeholderStyle:b.default.object,position:b.default.string,backgroundColor:b.default.oneOfType([b.default.string,b.default.bool]),onLoad:b.default.func,Tag:b.default.string},t.default=S},45:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}Object.defineProperty(t,"__esModule",{value:!0}),t.ReactComponent=void 0;var i=n(1),l=a(i),o=l.default.createElement("path",{d:"M1.246 6.546c.8 1.642 4.32 3.305 3.465 6.864-.49 2.04-3.483 3.834-4.052 6.305-.232 1.008-.127 3.455 1.493 4.11 6.766 2.737 6.574-4.234 7.194-5.315 1.501-2.615 4.642-1.989 4.77-5.593.133-3.726-4.233-3.023-4.871-5.178-.35-1.183.065-4.791-1.388-5.908-4.151-3.19-8.242 1.367-6.611 4.715z",fill:"currentColor",fillRule:"evenodd"}),s=function(e){return l.default.createElement("svg",r({width:15,height:25,viewBox:"0 0 15 25"},e),o)};t.default="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUiIGhlaWdodD0iMjUiIHZpZXdCb3g9IjAgMCAxNSAyNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxwYXRoIGQ9Ik0xLjI0NjAxMzcgNi41NDU1NzYyM2MuODAwMzU0NDcgMS42NDIwOTUxMyA0LjMyMDgxNzEzIDMuMzA1MDYyNDQgMy40NjUyNTIzNyA2Ljg2NDE0MDYzQzQuMjIwNjI1NyAxNS40NTA1OTAxNCAxLjIyNzU2MzYgMTcuMjQ0MDU2NC42NTkxNTM0IDE5LjcxNDk5MjMxYy0uMjMxODMxNzcgMS4wMDc2NDI4OC0uMTI3MDM2NzcgMy40NTQ1NzIwNyAxLjQ5MjQxNzMzIDQuMTA5NjQxNjQgNi43NjYxODEyMyAyLjczNjkwMjY2IDYuNTc0MzM0NjItNC4yMzMxNzUzMSA3LjE5NDczNjI5LTUuMzE0MjAyMDQgMS41MDA4NzIzMS0yLjYxNTA3NzQ2IDQuNjQxNTczNjgtMS45ODkyNTI2IDQuNzY5ODg5MjItNS41OTM2MDY1NS4xMzI1MzQtMy43MjU3NDg5LTQuMjMzNTIxNDYtMy4wMjI5MDM4LTQuODcxNTQ0NjItNS4xNzc4MDQxNi0uMzUwMzcyMzYtMS4xODMwMTQzNy4wNjUxNzk3My00Ljc5MTI0OTA4LTEuMzg3MjgxMDMtNS45MDc3NzAzOEMzLjcwNjAwNTcxLTEuMzU5ODkzNDQtLjM4NTE3NTI3IDMuMTk4Mzg0NSAxLjI0NjAxMzcgNi41NDU1NzYyM3oiIGZpbGw9ImN1cnJlbnRDb2xvciIgZmlsbC1ydWxlPSJldmVub2RkIi8+Cjwvc3ZnPgo=",t.ReactComponent=s},13:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"],["\n  position: absolute;\n  width: 100%;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  z-index: -1;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n(52),o=n(2),s=o.default.div(r);t.BackgroundImage=function(e){var t=e.image,n=e.className;return i.createElement(s,{className:n},i.createElement(l.default,{sizes:t.sizes}))}},40:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  h2 {\n    font-size: 2.125rem;\n  }\n"],["\n  h2 {\n    font-size: 2.125rem;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(15);t.CallToAction=i.default(l.Divider)(r)},41:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"],["\n  position: relative;\n  overflow: hidden;\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n  color: ",";\n\n  p {\n    margin-top: 0.75rem;\n    font-size: 1.375rem;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),l=n(2),o=n(13),s=l.default.div(r,function(e){return e.invert?e.theme.colors.black:e.theme.colors.white});t.CardContents=function(e){var t=e.className,n=e.bgImage,a=e.invert,r=e.children;return i.createElement(s,{className:t,invert:a},i.createElement(o.BackgroundImage,{image:n}),r)}},167:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n"],["\n  flex-basis: 0;\n  flex-grow: 1;\n  flex-shrink: 1;\n"]),i=a(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 ","rem;\n\n  p {\n    font-size: 1.25rem;\n  }\n\n  & > *:first-child {\n    margin-top: 0;\n  }\n\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n"],["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 ","rem;\n\n  p {\n    font-size: 1.25rem;\n  }\n\n  & > *:first-child {\n    margin-top: 0;\n  }\n\n  & > *:last-child {\n    margin-bottom: 0;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n(2),s=o.default.div(r),c=o.default.div(i,function(e){return 2.5*e.theme.dimensions.containerPadding});t.CardNoImage=function(e){var t=e.className,n=e.header,a=e.text;return l.createElement(s,{className:t},l.createElement(c,null,l.createElement("h2",null,n),l.createElement("p",null,a)))}},15:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  padding: ","rem\n    ","rem;\n\n  ",";\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n"],["\n  padding: ","rem\n    ","rem;\n\n  ",";\n\n  h2 {\n    letter-spacing: 1.22px;\n    max-width: 800px;\n  }\n\n  a {\n    text-decoration: underline;\n    font-weight: 700;\n  }\n\n  p {\n    font-size: 1.375rem;\n    max-width: 800px;\n  }\n"]),i=a(["\n    padding-left: ","rem;\n  "],["\n    padding-left: ","rem;\n  "]);Object.defineProperty(t,"__esModule",{value:!0});var l=n(1),o=n(2),s=o.default.section(r,function(e){return 2*e.theme.dimensions.containerPadding},function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(i,function(e){return 3*e.theme.dimensions.containerPadding})});t.Divider=function(e){var t=e.className,n=e.children;return l.createElement(s,{className:t},n)}},42:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  padding: ","rem;\n\n  ",";\n"]),i=a(["\n    padding-left: ","rem;\n  "],["\n    padding-left: ","rem;\n  "]),l=a(["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n"],["\n  max-width: 786px;\n\n  p {\n    font-size: 1.75rem;\n    line-height: 1.1786;\n    letter-spacing: 0.38px;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(2),c=n(16),d=n(13),u=s.default(c.RatioContainer)(r,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(i,function(e){return 3*e.theme.dimensions.containerPadding})}),m=s.default.div(l);t.Intro=function(e){var t=e.className,n=e.bgImage,a=e.header,r=e.text;return o.createElement(u,null,o.createElement(d.BackgroundImage,{image:n}),o.createElement(m,{className:t},o.createElement("h1",null,a),o.createElement("p",null,r)))}},16:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  position: relative;\n  width: 100%;\n  padding-top: 54.6875%;\n\n  ",";\n"],["\n  position: relative;\n  width: 100%;\n  padding-top: 54.6875%;\n\n  ",";\n"]),i=a(["\n    min-height: ","em;\n  "],["\n    min-height: ","em;\n  "]),l=a(["\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n"],["\n  position: absolute;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  width: 100%;\n  top: 0;\n  bottom: 0;\n  left: 0;\n"]);Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(2),c=n(20),d=s.default.section(r,function(e){return e.theme.media.lg(i,c.getEmSize(700))}),u=s.default.div(l);t.RatioContainer=function(e){var t=e.className,n=e.children;return o.createElement(d,null,o.createElement(u,{className:t},n))}},44:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  font-size: 1.375rem;\n  display: inline-block;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"],["\n  font-size: 1.375rem;\n  display: inline-block;\n  color: inherit;\n\n  &:hover {\n    text-decoration: none;\n  }\n\n  svg {\n    display: inline-block;\n    vertical-align: middle;\n    margin-left: 1rem;\n  }\n"]),i=a(["\n  flex-grow: 1;\n"],["\n  flex-grow: 1;\n"]),l=a(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n"],["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  background-color: #000;\n  padding: ","rem;\n  width: 20rem;\n  height: 100%;\n  margin: 0 auto 0 0;\n\n  ",";\n"]),o=a(["\n    padding-left: ","rem;\n    width: 26rem;\n  "],["\n    padding-left: ","rem;\n    width: 26rem;\n  "]);Object.defineProperty(t,"__esModule",{value:!0});var s=n(1),c=n(12),d=n(2),u=n(45),m=function(e){var t=e.className,n=e.to;return s.createElement("div",null,s.createElement(c.default,{className:t,to:n},"Read more ",s.createElement(u.ReactComponent,null)))},f=d.default(m)(r),p=d.default.div(i),g=function(e){var t=e.className,n=e.children,a=e.more;return s.createElement("aside",{className:t},n,s.createElement(p,null),a&&s.createElement(f,{to:a}))};t.StyledSideBlock=d.default(g)(l,function(e){return e.theme.dimensions.containerPadding},function(e){return e.theme.media.lg(o,function(e){return 3*e.theme.dimensions.containerPadding})})},173:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  p {\n    font-size: 1.375rem;\n    margin-bottom: 0.75rem;\n  }\n\n  h3 {\n    margin-top: 0;\n  }\n"],["\n  p {\n    font-size: 1.375rem;\n    margin-bottom: 0.75rem;\n  }\n\n  h3 {\n    margin-top: 0;\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),l=n(41);t.TeamCard=i.default(l.CardContents)(r)},178:function(e,t,n){"use strict";function a(e,t){return e.raw=t,e}var r=a(["\n  max-width: 840px;\n"],["\n  max-width: 840px;\n"]),i=a(["\n  width: auto;\n  background-color: transparent;\n\n  h3 {\n    font-size: 2.125rem;\n  }\n"],["\n  width: auto;\n  background-color: transparent;\n\n  h3 {\n    font-size: 2.125rem;\n  }\n"]),l=a(["\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 23.75rem;\n    height: 11.875rem;\n    background-color: #646464;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 13.75rem;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n"],["\n  position: relative;\n\n  &::before {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    right: 0;\n    width: 23.75rem;\n    height: 11.875rem;\n    background-color: #646464;\n  }\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 13.75rem;\n    height: 13.75rem;\n    background-color: rgba(255, 255, 255, 0.15);\n  }\n"]);Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),s=n(43),c=n(14),d=n(42),u=n(15),m=n(16),f=n(167),p=n(173),g=n(40),h=n(2),v=n(12),b=n(44),y=h.default(d.Intro)(r),w=h.default(b.StyledSideBlock)(i),E=h.default(u.Divider)(l),x=function(e){var t=e.data;return o.createElement(s.Page,null,o.createElement(c.Container,null,o.createElement(y,{bgImage:t.introImage,header:o.createElement("span",null,"Untangling Complexity",o.createElement("br",null),"Since 2012"),text:"Makeomatic is second to none in solving problems that require the highest level of technical expertise."}),o.createElement(E,null,o.createElement("h2",null,"Expert Production Crew"),o.createElement("p",null,"Having delivered dozens of multilayered projects for a variety of industries worldwide, we are a tight-knit team ready to execute your idea with speed and precision.")),o.createElement(m.RatioContainer,null,o.createElement(p.TeamCard,{bgImage:t.vaminevImage},o.createElement(w,null,o.createElement("p",null,"CTO / Mad Scientist"),o.createElement("h3",null,"Vitaly Aminev"))),o.createElement(p.TeamCard,{bgImage:t.kremenetsImage},o.createElement(w,null,o.createElement("p",null,"CEO / Mobile Expert"),o.createElement("h3",null,"Aleksandr Kremenets")))),o.createElement(m.RatioContainer,null,o.createElement(p.TeamCard,{bgImage:t.annaImage},o.createElement(w,null,o.createElement("p",null,"Head of Design"),o.createElement("h3",null,"Anna Amineva"))),o.createElement(f.CardNoImage,{header:"Design",text:"From intricate UX trees to visual identity, we keep our designs intuitive for users and ready for development right from the get-go."})),o.createElement(g.CallToAction,null,o.createElement("h2",null,"Look through all projects",o.createElement("br",null),"to see the breadth of ",o.createElement(v.default,{to:"/"},"our work"))),o.createElement(m.RatioContainer,null,o.createElement(p.TeamCard,{bgImage:t.vaminevImage},o.createElement(w,null,o.createElement("p",null,"Team Master"),o.createElement("h3",null,"Evgeny Poyarkov"))),o.createElement(p.TeamCard,{bgImage:t.kremenetsImage},o.createElement(w,null,o.createElement("p",null,"Frontend Hero"),o.createElement("h3",null,"Aleksandr Bratchikov")))),o.createElement(m.RatioContainer,null,o.createElement(f.CardNoImage,{header:"Development",text:"We specialize on projects that are plain too hard for most creative agencies to crack. Our experience in cutting-edge tech stacks, such as microservices, and their implementation is what differentiates us from the rest."}),o.createElement(p.TeamCard,{bgImage:t.vaminevImage},o.createElement(w,null,o.createElement("p",null,"Full-Stack Pro"),o.createElement("h3",null,"Aleksandr Sorokin")))),o.createElement(g.CallToAction,null,o.createElement("h3",null,"Established ",o.createElement(v.default,{to:"/process"},"process")," is the secret to our achievements")),o.createElement(m.RatioContainer,null,o.createElement(p.TeamCard,{bgImage:t.vaminevImage},o.createElement(w,null,o.createElement("p",null,"Full-Stack Whiz"),o.createElement("h3",null,"Aleksey Khoroshev"))),o.createElement(p.TeamCard,{bgImage:t.annaImage},o.createElement(w,null,o.createElement("p",null,"Frontend Creator"),o.createElement("h3",null,"Olga Ivanova")))),o.createElement(g.CallToAction,null,o.createElement("h3",null,"Get in touch to discuss ",o.createElement(v.default,{to:"/contacts"},"your project")))))};t.query="** extracted graphql fragment **",t.default=x},2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),r=a.default,i=a.css,l=a.injectGlobal,o=a.keyframes,s=a.withTheme,c=a.ThemeProvider;t.css=i,t.injectGlobal=l,t.keyframes=o,t.withTheme=s,t.ThemeProvider=c,t.default=r}});
//# sourceMappingURL=component---src-pages-team-tsx-6f683871671e660faab1.js.map