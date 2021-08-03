(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[283],{155:function(e,t,n){"use strict";n.d(t,{z:function(){return S}});var r=n(2947),a=n(917),i=n(63),o=n(2326),l=n(5284),s=n(227),c=n(4461),u=n(3808),f=n(5415),p=n(7294);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var m=(0,a.F4)({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),v=(0,i.G)(((e,t)=>{var n=(0,o.m)("Spinner",e),r=(0,l.Lr)(e),{label:a="Loading...",thickness:i="2px",speed:u="0.45s",emptyColor:v="transparent",className:h}=r,y=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(r,["label","thickness","speed","emptyColor","className"]),b=(0,c.cx)("chakra-spinner",h),g=d({display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:i,borderBottomColor:v,borderLeftColor:v,animation:m+" "+u+" linear infinite"},n);return p.createElement(s.m$.div,d({ref:t,__css:g,className:b},y),a&&p.createElement(f.TX,null,a))}));u.Ts&&(v.displayName="Spinner");var h=n(8554),y=n.n(h),b=n(8500);function g(){return(g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var[E,x]=(0,b.k)({strict:!1,name:"ButtonGroupContext"}),N=(0,i.G)(((e,t)=>{var{size:n,colorScheme:r,variant:a,className:i,spacing:o="0.5rem",isAttached:l,isDisabled:u}=e,f=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["size","colorScheme","variant","className","spacing","isAttached","isDisabled"]),d=(0,c.cx)("chakra-button__group",i),m=p.useMemo((()=>({size:n,colorScheme:r,variant:a,isDisabled:u})),[n,r,a,u]),v={display:"inline-flex"};return v=g({},v,l?{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}}:{"& > *:not(style) ~ *:not(style)":{marginStart:o}}),p.createElement(E,{value:m},p.createElement(s.m$.div,g({ref:t,role:"group",__css:v,className:d},f)))}));function _(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}function k(){return(k=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}u.Ts&&(N.displayName="ButtonGroup");var S=(0,i.G)(((e,t)=>{var n,a=x(),i=(0,o.m)("Button",k({},a,e)),u=(0,l.Lr)(e),{isDisabled:f=(null==a?void 0:a.isDisabled),isLoading:d,isActive:m,isFullWidth:v,children:h,leftIcon:b,rightIcon:g,loadingText:E,iconSpacing:N="0.5rem",type:S,spinner:L,spinnerPlacement:O="start",className:I,as:T}=u,j=_(u,["isDisabled","isLoading","isActive","isFullWidth","children","leftIcon","rightIcon","loadingText","iconSpacing","type","spinner","spinnerPlacement","className","as"]),M=y()({},null!=(n=null==i?void 0:i._focus)?n:{},{zIndex:1}),B=k({display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",width:v?"100%":"auto"},i,!!a&&{_focus:M}),{ref:R,type:D}=function(e){var[t,n]=p.useState(!e),r=p.useCallback((e=>{e&&n("BUTTON"===e.tagName)}),[]),a=t?"button":void 0;return{ref:r,type:a}}(T);return p.createElement(s.m$.button,k({disabled:f||d,ref:(0,r.l)(t,R),as:T,type:null!=S?S:D,"data-active":(0,c.PB)(m),"data-loading":(0,c.PB)(d),__css:B,className:(0,c.cx)("chakra-button",I)},j),b&&!d&&p.createElement(w,{marginEnd:N},b),d&&"start"===O&&p.createElement(C,{className:"chakra-button__spinner--start",label:E,placement:"start"},L),d?E||p.createElement(s.m$.span,{opacity:0},h):h,d&&"end"===O&&p.createElement(C,{className:"chakra-button__spinner--end",label:E,placement:"end"},L),g&&!d&&p.createElement(w,{marginStart:N},g))}));u.Ts&&(S.displayName="Button");var w=e=>{var{children:t,className:n}=e,r=_(e,["children","className"]),a=p.isValidElement(t)?p.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,i=(0,c.cx)("chakra-button__icon",n);return p.createElement(s.m$.span,k({display:"inline-flex",alignSelf:"center",flexShrink:0},r,{className:i}),a)};u.Ts&&(w.displayName="ButtonIcon");var C=e=>{var{label:t,placement:n,children:r=p.createElement(v,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i}=e,o=_(e,["label","placement","spacing","children","className","__css"]),l=(0,c.cx)("chakra-button__spinner",a),u=k({display:"flex",alignItems:"center",position:t?"relative":"absolute",["start"===n?"marginEnd":"marginStart"]:t?"0.5rem":0,fontSize:"1em",lineHeight:"normal"},i);return p.createElement(s.m$.div,k({className:l},o,{__css:u}),r)};u.Ts&&(C.displayName="ButtonSpinner")},2947:function(e,t,n){"use strict";n.d(t,{l:function(){return i}});var r=n(3808);function a(e,t){if(null!=e)if((0,r.mf)(e))e(t);else try{e.current=t}catch(n){throw new Error("Cannot assign value '"+t+"' to ref '"+e+"'")}}function i(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>a(t,e)))}}},5415:function(e,t,n){"use strict";n.d(t,{NL:function(){return i},TX:function(){return o}});var r=n(227),a=n(3808),i={border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},o=(0,r.m$)("span",{baseStyle:i});a.Ts&&(o.displayName="VisuallyHidden");var l=(0,r.m$)("input",{baseStyle:i});a.Ts&&(l.displayName="VisuallyHiddenInput")},2167:function(e,t,n){"use strict";var r=n(3848),a=n(9448);t.default=void 0;var i=a(n(7294)),o=n(9414),l=n(4651),s=n(7426),c={};function u(e,t,n,r){if(e&&(0,o.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var a=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;c[t+"%"+n+(a?"%"+a:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,a=(0,l.useRouter)(),f=i.default.useMemo((function(){var t=(0,o.resolveHref)(a,e.href,!0),n=r(t,2),i=n[0],l=n[1];return{href:i,as:e.as?(0,o.resolveHref)(a,e.as):l||i}}),[a,e.href,e.as]),p=f.href,d=f.as,m=e.children,v=e.replace,h=e.shallow,y=e.scroll,b=e.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var g=(t=i.Children.only(m))&&"object"===typeof t&&t.ref,E=(0,s.useIntersection)({rootMargin:"200px"}),x=r(E,2),N=x[0],_=x[1],k=i.default.useCallback((function(e){N(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,N]);(0,i.useEffect)((function(){var e=_&&n&&(0,o.isLocalURL)(p),t="undefined"!==typeof b?b:a&&a.locale,r=c[p+"%"+d+(t?"%"+t:"")];e&&!r&&u(a,p,d,{locale:t})}),[d,p,_,b,n,a]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,a,i,l,s){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(n))&&(e.preventDefault(),null==l&&r.indexOf("#")>=0&&(l=!1),t[a?"replace":"push"](n,r,{shallow:i,locale:s,scroll:l}))}(e,a,p,d,v,h,y,b)},onMouseEnter:function(e){(0,o.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(a,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var w="undefined"!==typeof b?b:a&&a.locale,C=a&&a.isLocaleDomain&&(0,o.getDomainLocale)(d,w,a&&a.locales,a&&a.domainLocales);S.href=C||(0,o.addBasePath)((0,o.addLocale)(d,w,a&&a.defaultLocale))}return i.default.cloneElement(t,S)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3848);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!o,s=(0,a.useRef)(),c=(0,a.useState)(!1),u=r(c,2),f=u[0],p=u[1],d=(0,a.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),n||f||e&&e.tagName&&(s.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=l.get(t);if(n)return n;var r=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return l.set(t,n={id:t,observer:a,elements:r}),n}(n),a=r.id,i=r.observer,o=r.elements;return o.set(e,t),i.observe(e),function(){o.delete(e),i.unobserve(e),0===o.size&&(i.disconnect(),l.delete(a))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,a.useEffect)((function(){if(!o&&!f){var e=(0,i.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,i.cancelIdleCallback)(e)}}}),[f]),[d,f]};var a=n(7294),i=n(3447),o="undefined"!==typeof IntersectionObserver;var l=new Map},5063:function(e,t,n){e.exports=n(2167)}}]);