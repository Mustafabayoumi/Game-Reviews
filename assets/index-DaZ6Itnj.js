var Jy=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var _P=Jy((Ot,Pt)=>{function Yh(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerPolicy&&(a.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?a.credentials="include":o.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();function pr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Qh={exports:{}},Fl={},Zh={exports:{}},re={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ja=Symbol.for("react.element"),ev=Symbol.for("react.portal"),tv=Symbol.for("react.fragment"),nv=Symbol.for("react.strict_mode"),rv=Symbol.for("react.profiler"),ov=Symbol.for("react.provider"),av=Symbol.for("react.context"),iv=Symbol.for("react.forward_ref"),lv=Symbol.for("react.suspense"),sv=Symbol.for("react.memo"),uv=Symbol.for("react.lazy"),hf=Symbol.iterator;function cv(e){return e===null||typeof e!="object"?null:(e=hf&&e[hf]||e["@@iterator"],typeof e=="function"?e:null)}var Kh={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Xh=Object.assign,Jh={};function zo(e,t,n){this.props=e,this.context=t,this.refs=Jh,this.updater=n||Kh}zo.prototype.isReactComponent={};zo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function em(){}em.prototype=zo.prototype;function zc(e,t,n){this.props=e,this.context=t,this.refs=Jh,this.updater=n||Kh}var Ic=zc.prototype=new em;Ic.constructor=zc;Xh(Ic,zo.prototype);Ic.isPureReactComponent=!0;var mf=Array.isArray,tm=Object.prototype.hasOwnProperty,$c={current:null},nm={key:!0,ref:!0,__self:!0,__source:!0};function rm(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)tm.call(t,r)&&!nm.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(l===1)o.children=n;else if(1<l){for(var s=Array(l),u=0;u<l;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)o[r]===void 0&&(o[r]=l[r]);return{$$typeof:Ja,type:e,key:a,ref:i,props:o,_owner:$c.current}}function dv(e,t){return{$$typeof:Ja,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Uc(e){return typeof e=="object"&&e!==null&&e.$$typeof===Ja}function fv(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var gf=/\/+/g;function js(e,t){return typeof e=="object"&&e!==null&&e.key!=null?fv(""+e.key):t.toString(36)}function Ui(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case Ja:case ev:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+js(i,0):r,mf(o)?(n="",e!=null&&(n=e.replace(gf,"$&/")+"/"),Ui(o,t,n,"",function(u){return u})):o!=null&&(Uc(o)&&(o=dv(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(gf,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",mf(e))for(var l=0;l<e.length;l++){a=e[l];var s=r+js(a,l);i+=Ui(a,t,n,s,o)}else if(s=cv(e),typeof s=="function")for(e=s.call(e),l=0;!(a=e.next()).done;)a=a.value,s=r+js(a,l++),i+=Ui(a,t,n,s,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function bi(e,t,n){if(e==null)return e;var r=[],o=0;return Ui(e,r,"","",function(a){return t.call(n,a,o++)}),r}function pv(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var lt={current:null},Bi={transition:null},hv={ReactCurrentDispatcher:lt,ReactCurrentBatchConfig:Bi,ReactCurrentOwner:$c};function om(){throw Error("act(...) is not supported in production builds of React.")}re.Children={map:bi,forEach:function(e,t,n){bi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bi(e,function(){t++}),t},toArray:function(e){return bi(e,function(t){return t})||[]},only:function(e){if(!Uc(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};re.Component=zo;re.Fragment=tv;re.Profiler=rv;re.PureComponent=zc;re.StrictMode=nv;re.Suspense=lv;re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hv;re.act=om;re.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Xh({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=$c.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)tm.call(t,s)&&!nm.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&l!==void 0?l[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:Ja,type:e.type,key:o,ref:a,props:r,_owner:i}};re.createContext=function(e){return e={$$typeof:av,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:ov,_context:e},e.Consumer=e};re.createElement=rm;re.createFactory=function(e){var t=rm.bind(null,e);return t.type=e,t};re.createRef=function(){return{current:null}};re.forwardRef=function(e){return{$$typeof:iv,render:e}};re.isValidElement=Uc;re.lazy=function(e){return{$$typeof:uv,_payload:{_status:-1,_result:e},_init:pv}};re.memo=function(e,t){return{$$typeof:sv,type:e,compare:t===void 0?null:t}};re.startTransition=function(e){var t=Bi.transition;Bi.transition={};try{e()}finally{Bi.transition=t}};re.unstable_act=om;re.useCallback=function(e,t){return lt.current.useCallback(e,t)};re.useContext=function(e){return lt.current.useContext(e)};re.useDebugValue=function(){};re.useDeferredValue=function(e){return lt.current.useDeferredValue(e)};re.useEffect=function(e,t){return lt.current.useEffect(e,t)};re.useId=function(){return lt.current.useId()};re.useImperativeHandle=function(e,t,n){return lt.current.useImperativeHandle(e,t,n)};re.useInsertionEffect=function(e,t){return lt.current.useInsertionEffect(e,t)};re.useLayoutEffect=function(e,t){return lt.current.useLayoutEffect(e,t)};re.useMemo=function(e,t){return lt.current.useMemo(e,t)};re.useReducer=function(e,t,n){return lt.current.useReducer(e,t,n)};re.useRef=function(e){return lt.current.useRef(e)};re.useState=function(e){return lt.current.useState(e)};re.useSyncExternalStore=function(e,t,n){return lt.current.useSyncExternalStore(e,t,n)};re.useTransition=function(){return lt.current.useTransition()};re.version="18.3.1";Zh.exports=re;var w=Zh.exports;const Qe=pr(w),mv=Yh({__proto__:null,default:Qe},[w]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gv=w,yv=Symbol.for("react.element"),vv=Symbol.for("react.fragment"),bv=Object.prototype.hasOwnProperty,xv=gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,wv={key:!0,ref:!0,__self:!0,__source:!0};function am(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)bv.call(t,r)&&!wv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:yv,type:e,key:a,ref:i,props:o,_owner:xv.current}}Fl.Fragment=vv;Fl.jsx=am;Fl.jsxs=am;Qh.exports=Fl;var p=Qh.exports,yu={},im={exports:{}},jt={},lm={exports:{}},sm={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(R,W){var G=R.length;R.push(W);e:for(;0<G;){var le=G-1>>>1,ae=R[le];if(0<o(ae,W))R[le]=W,R[G]=ae,G=le;else break e}}function n(R){return R.length===0?null:R[0]}function r(R){if(R.length===0)return null;var W=R[0],G=R.pop();if(G!==W){R[0]=G;e:for(var le=0,ae=R.length,ct=ae>>>1;le<ct;){var Ve=2*(le+1)-1,Ae=R[Ve],Me=Ve+1,Xe=R[Me];if(0>o(Ae,G))Me<ae&&0>o(Xe,Ae)?(R[le]=Xe,R[Me]=G,le=Me):(R[le]=Ae,R[Ve]=G,le=Ve);else if(Me<ae&&0>o(Xe,G))R[le]=Xe,R[Me]=G,le=Me;else break e}}return W}function o(R,W){var G=R.sortIndex-W.sortIndex;return G!==0?G:R.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,l=i.now();e.unstable_now=function(){return i.now()-l}}var s=[],u=[],c=1,d=null,f=3,x=!1,y=!1,m=!1,E=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(R){for(var W=n(u);W!==null;){if(W.callback===null)r(u);else if(W.startTime<=R)r(u),W.sortIndex=W.expirationTime,t(s,W);else break;W=n(u)}}function k(R){if(m=!1,v(R),!y)if(n(s)!==null)y=!0,ln(j);else{var W=n(u);W!==null&&sn(k,W.startTime-R)}}function j(R,W){y=!1,m&&(m=!1,g(A),A=-1),x=!0;var G=f;try{for(v(W),d=n(s);d!==null&&(!(d.expirationTime>W)||R&&!U());){var le=d.callback;if(typeof le=="function"){d.callback=null,f=d.priorityLevel;var ae=le(d.expirationTime<=W);W=e.unstable_now(),typeof ae=="function"?d.callback=ae:d===n(s)&&r(s),v(W)}else r(s);d=n(s)}if(d!==null)var ct=!0;else{var Ve=n(u);Ve!==null&&sn(k,Ve.startTime-W),ct=!1}return ct}finally{d=null,f=G,x=!1}}var C=!1,b=null,A=-1,F=5,L=-1;function U(){return!(e.unstable_now()-L<F)}function ue(){if(b!==null){var R=e.unstable_now();L=R;var W=!0;try{W=b(!0,R)}finally{W?ne():(C=!1,b=null)}}else C=!1}var ne;if(typeof h=="function")ne=function(){h(ue)};else if(typeof MessageChannel<"u"){var pe=new MessageChannel,ut=pe.port2;pe.port1.onmessage=ue,ne=function(){ut.postMessage(null)}}else ne=function(){E(ue,0)};function ln(R){b=R,C||(C=!0,ne())}function sn(R,W){A=E(function(){R(e.unstable_now())},W)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(R){R.callback=null},e.unstable_continueExecution=function(){y||x||(y=!0,ln(j))},e.unstable_forceFrameRate=function(R){0>R||125<R?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<R?Math.floor(1e3/R):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(R){switch(f){case 1:case 2:case 3:var W=3;break;default:W=f}var G=f;f=W;try{return R()}finally{f=G}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(R,W){switch(R){case 1:case 2:case 3:case 4:case 5:break;default:R=3}var G=f;f=R;try{return W()}finally{f=G}},e.unstable_scheduleCallback=function(R,W,G){var le=e.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?le+G:le):G=le,R){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=G+ae,R={id:c++,callback:W,priorityLevel:R,startTime:G,expirationTime:ae,sortIndex:-1},G>le?(R.sortIndex=G,t(u,R),n(s)===null&&R===n(u)&&(m?(g(A),A=-1):m=!0,sn(k,G-le))):(R.sortIndex=ae,t(s,R),y||x||(y=!0,ln(j))),R},e.unstable_shouldYield=U,e.unstable_wrapCallback=function(R){var W=f;return function(){var G=f;f=W;try{return R.apply(this,arguments)}finally{f=G}}}})(sm);lm.exports=sm;var Sv=lm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ev=w,_t=Sv;function N(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var um=new Set,ja={};function qr(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for(ja[e]=t,e=0;e<t.length;e++)um.add(t[e])}var Nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,kv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yf={},vf={};function Tv(e){return vu.call(vf,e)?!0:vu.call(yf,e)?!1:kv.test(e)?vf[e]=!0:(yf[e]=!0,!1)}function Ov(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Pv(e,t,n,r){if(t===null||typeof t>"u"||Ov(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ke={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ke[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ke[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ke[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ke[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ke[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ke[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ke[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ke[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ke[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var Bc=/[\-:]([a-z])/g;function Hc(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Bc,Hc);Ke[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Bc,Hc);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Bc,Hc);Ke[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ke.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ke[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function Vc(e,t,n,r){var o=Ke.hasOwnProperty(t)?Ke[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Pv(t,n,o,r)&&(n=null),r||o===null?Tv(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mn=Ev.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xi=Symbol.for("react.element"),lo=Symbol.for("react.portal"),so=Symbol.for("react.fragment"),qc=Symbol.for("react.strict_mode"),bu=Symbol.for("react.profiler"),cm=Symbol.for("react.provider"),dm=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),wu=Symbol.for("react.suspense_list"),Gc=Symbol.for("react.memo"),Yn=Symbol.for("react.lazy"),fm=Symbol.for("react.offscreen"),bf=Symbol.iterator;function Xo(e){return e===null||typeof e!="object"?null:(e=bf&&e[bf]||e["@@iterator"],typeof e=="function"?e:null)}var Ce=Object.assign,As;function pa(e){if(As===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);As=t&&t[1]||""}return`
`+As+e}var Ns=!1;function Rs(e,t){if(!e||Ns)return"";Ns=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,l=a.length-1;1<=i&&0<=l&&o[i]!==a[l];)l--;for(;1<=i&&0<=l;i--,l--)if(o[i]!==a[l]){if(i!==1||l!==1)do if(i--,l--,0>l||o[i]!==a[l]){var s=`
`+o[i].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=i&&0<=l);break}}}finally{Ns=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?pa(e):""}function Cv(e){switch(e.tag){case 5:return pa(e.type);case 16:return pa("Lazy");case 13:return pa("Suspense");case 19:return pa("SuspenseList");case 0:case 2:case 15:return e=Rs(e.type,!1),e;case 11:return e=Rs(e.type.render,!1),e;case 1:return e=Rs(e.type,!0),e;default:return""}}function Su(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case so:return"Fragment";case lo:return"Portal";case bu:return"Profiler";case qc:return"StrictMode";case xu:return"Suspense";case wu:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case dm:return(e.displayName||"Context")+".Consumer";case cm:return(e._context.displayName||"Context")+".Provider";case Wc:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Gc:return t=e.displayName||null,t!==null?t:Su(e.type)||"Memo";case Yn:t=e._payload,e=e._init;try{return Su(e(t))}catch{}}return null}function _v(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Su(t);case 8:return t===qc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function cr(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function pm(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jv(e){var t=pm(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function wi(e){e._valueTracker||(e._valueTracker=jv(e))}function hm(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=pm(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function rl(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Eu(e,t){var n=t.checked;return Ce({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function xf(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=cr(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function mm(e,t){t=t.checked,t!=null&&Vc(e,"checked",t,!1)}function ku(e,t){mm(e,t);var n=cr(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Tu(e,t.type,n):t.hasOwnProperty("defaultValue")&&Tu(e,t.type,cr(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function wf(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Tu(e,t,n){(t!=="number"||rl(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ha=Array.isArray;function So(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+cr(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Ou(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(N(91));return Ce({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Sf(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(N(92));if(ha(n)){if(1<n.length)throw Error(N(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:cr(n)}}function gm(e,t){var n=cr(t.value),r=cr(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Ef(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function ym(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pu(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?ym(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Si,vm=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Si=Si||document.createElement("div"),Si.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Si.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Aa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var va={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Av=["Webkit","ms","Moz","O"];Object.keys(va).forEach(function(e){Av.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),va[t]=va[e]})});function bm(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||va.hasOwnProperty(e)&&va[e]?(""+t).trim():t+"px"}function xm(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=bm(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var Nv=Ce({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(e,t){if(t){if(Nv[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(N(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(N(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(N(61))}if(t.style!=null&&typeof t.style!="object")throw Error(N(62))}}function _u(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ju=null;function Yc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Au=null,Eo=null,ko=null;function kf(e){if(e=ni(e)){if(typeof Au!="function")throw Error(N(280));var t=e.stateNode;t&&(t=$l(t),Au(e.stateNode,e.type,t))}}function wm(e){Eo?ko?ko.push(e):ko=[e]:Eo=e}function Sm(){if(Eo){var e=Eo,t=ko;if(ko=Eo=null,kf(e),t)for(e=0;e<t.length;e++)kf(t[e])}}function Em(e,t){return e(t)}function km(){}var Ds=!1;function Tm(e,t,n){if(Ds)return e(t,n);Ds=!0;try{return Em(e,t,n)}finally{Ds=!1,(Eo!==null||ko!==null)&&(km(),Sm())}}function Na(e,t){var n=e.stateNode;if(n===null)return null;var r=$l(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(N(231,t,typeof n));return n}var Nu=!1;if(Nn)try{var Jo={};Object.defineProperty(Jo,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",Jo,Jo),window.removeEventListener("test",Jo,Jo)}catch{Nu=!1}function Rv(e,t,n,r,o,a,i,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var ba=!1,ol=null,al=!1,Ru=null,Dv={onError:function(e){ba=!0,ol=e}};function Fv(e,t,n,r,o,a,i,l,s){ba=!1,ol=null,Rv.apply(Dv,arguments)}function Lv(e,t,n,r,o,a,i,l,s){if(Fv.apply(this,arguments),ba){if(ba){var u=ol;ba=!1,ol=null}else throw Error(N(198));al||(al=!0,Ru=u)}}function Wr(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Om(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Tf(e){if(Wr(e)!==e)throw Error(N(188))}function Mv(e){var t=e.alternate;if(!t){if(t=Wr(e),t===null)throw Error(N(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return Tf(o),e;if(a===r)return Tf(o),t;a=a.sibling}throw Error(N(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,l=o.child;l;){if(l===n){i=!0,n=o,r=a;break}if(l===r){i=!0,r=o,n=a;break}l=l.sibling}if(!i){for(l=a.child;l;){if(l===n){i=!0,n=a,r=o;break}if(l===r){i=!0,r=a,n=o;break}l=l.sibling}if(!i)throw Error(N(189))}}if(n.alternate!==r)throw Error(N(190))}if(n.tag!==3)throw Error(N(188));return n.stateNode.current===n?e:t}function Pm(e){return e=Mv(e),e!==null?Cm(e):null}function Cm(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=Cm(e);if(t!==null)return t;e=e.sibling}return null}var _m=_t.unstable_scheduleCallback,Of=_t.unstable_cancelCallback,zv=_t.unstable_shouldYield,Iv=_t.unstable_requestPaint,je=_t.unstable_now,$v=_t.unstable_getCurrentPriorityLevel,Qc=_t.unstable_ImmediatePriority,jm=_t.unstable_UserBlockingPriority,il=_t.unstable_NormalPriority,Uv=_t.unstable_LowPriority,Am=_t.unstable_IdlePriority,Ll=null,mn=null;function Bv(e){if(mn&&typeof mn.onCommitFiberRoot=="function")try{mn.onCommitFiberRoot(Ll,e,void 0,(e.current.flags&128)===128)}catch{}}var tn=Math.clz32?Math.clz32:qv,Hv=Math.log,Vv=Math.LN2;function qv(e){return e>>>=0,e===0?32:31-(Hv(e)/Vv|0)|0}var Ei=64,ki=4194304;function ma(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ll(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var l=i&~o;l!==0?r=ma(l):(a&=i,a!==0&&(r=ma(a)))}else i=n&~o,i!==0?r=ma(i):a!==0&&(r=ma(a));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-tn(t),o=1<<n,r|=e[n],t&=~o;return r}function Wv(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gv(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-tn(a),l=1<<i,s=o[i];s===-1?(!(l&n)||l&r)&&(o[i]=Wv(l,t)):s<=t&&(e.expiredLanes|=l),a&=~l}}function Du(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function Nm(){var e=Ei;return Ei<<=1,!(Ei&4194240)&&(Ei=64),e}function Fs(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function ei(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-tn(t),e[t]=n}function Yv(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-tn(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Zc(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-tn(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var de=0;function Rm(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var Dm,Kc,Fm,Lm,Mm,Fu=!1,Ti=[],tr=null,nr=null,rr=null,Ra=new Map,Da=new Map,Zn=[],Qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Pf(e,t){switch(e){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":Ra.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Da.delete(t.pointerId)}}function ea(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=ni(t),t!==null&&Kc(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Zv(e,t,n,r,o){switch(t){case"focusin":return tr=ea(tr,e,t,n,r,o),!0;case"dragenter":return nr=ea(nr,e,t,n,r,o),!0;case"mouseover":return rr=ea(rr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ra.set(a,ea(Ra.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Da.set(a,ea(Da.get(a)||null,e,t,n,r,o)),!0}return!1}function zm(e){var t=kr(e.target);if(t!==null){var n=Wr(t);if(n!==null){if(t=n.tag,t===13){if(t=Om(n),t!==null){e.blockedOn=t,Mm(e.priority,function(){Fm(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Lu(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ju=r,n.target.dispatchEvent(r),ju=null}else return t=ni(n),t!==null&&Kc(t),e.blockedOn=n,!1;t.shift()}return!0}function Cf(e,t,n){Hi(e)&&n.delete(t)}function Kv(){Fu=!1,tr!==null&&Hi(tr)&&(tr=null),nr!==null&&Hi(nr)&&(nr=null),rr!==null&&Hi(rr)&&(rr=null),Ra.forEach(Cf),Da.forEach(Cf)}function ta(e,t){e.blockedOn===t&&(e.blockedOn=null,Fu||(Fu=!0,_t.unstable_scheduleCallback(_t.unstable_NormalPriority,Kv)))}function Fa(e){function t(o){return ta(o,e)}if(0<Ti.length){ta(Ti[0],e);for(var n=1;n<Ti.length;n++){var r=Ti[n];r.blockedOn===e&&(r.blockedOn=null)}}for(tr!==null&&ta(tr,e),nr!==null&&ta(nr,e),rr!==null&&ta(rr,e),Ra.forEach(t),Da.forEach(t),n=0;n<Zn.length;n++)r=Zn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Zn.length&&(n=Zn[0],n.blockedOn===null);)zm(n),n.blockedOn===null&&Zn.shift()}var To=Mn.ReactCurrentBatchConfig,sl=!0;function Xv(e,t,n,r){var o=de,a=To.transition;To.transition=null;try{de=1,Xc(e,t,n,r)}finally{de=o,To.transition=a}}function Jv(e,t,n,r){var o=de,a=To.transition;To.transition=null;try{de=4,Xc(e,t,n,r)}finally{de=o,To.transition=a}}function Xc(e,t,n,r){if(sl){var o=Lu(e,t,n,r);if(o===null)qs(e,t,r,ul,n),Pf(e,r);else if(Zv(o,e,t,n,r))r.stopPropagation();else if(Pf(e,r),t&4&&-1<Qv.indexOf(e)){for(;o!==null;){var a=ni(o);if(a!==null&&Dm(a),a=Lu(e,t,n,r),a===null&&qs(e,t,r,ul,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else qs(e,t,r,null,n)}}var ul=null;function Lu(e,t,n,r){if(ul=null,e=Yc(r),e=kr(e),e!==null)if(t=Wr(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Om(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return ul=e,null}function Im(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($v()){case Qc:return 1;case jm:return 4;case il:case Uv:return 16;case Am:return 536870912;default:return 16}default:return 16}}var Jn=null,Jc=null,Vi=null;function $m(){if(Vi)return Vi;var e,t=Jc,n=t.length,r,o="value"in Jn?Jn.value:Jn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return Vi=o.slice(e,1<r?1-r:void 0)}function qi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Oi(){return!0}function _f(){return!1}function At(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(a):a[l]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Oi:_f,this.isPropagationStopped=_f,this}return Ce(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oi)},persist:function(){},isPersistent:Oi}),t}var Io={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ed=At(Io),ti=Ce({},Io,{view:0,detail:0}),e1=At(ti),Ls,Ms,na,Ml=Ce({},ti,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:td,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==na&&(na&&e.type==="mousemove"?(Ls=e.screenX-na.screenX,Ms=e.screenY-na.screenY):Ms=Ls=0,na=e),Ls)},movementY:function(e){return"movementY"in e?e.movementY:Ms}}),jf=At(Ml),t1=Ce({},Ml,{dataTransfer:0}),n1=At(t1),r1=Ce({},ti,{relatedTarget:0}),zs=At(r1),o1=Ce({},Io,{animationName:0,elapsedTime:0,pseudoElement:0}),a1=At(o1),i1=Ce({},Io,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),l1=At(i1),s1=Ce({},Io,{data:0}),Af=At(s1),u1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},d1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function f1(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=d1[e])?!!t[e]:!1}function td(){return f1}var p1=Ce({},ti,{key:function(e){if(e.key){var t=u1[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=qi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?c1[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:td,charCode:function(e){return e.type==="keypress"?qi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?qi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),h1=At(p1),m1=Ce({},Ml,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Nf=At(m1),g1=Ce({},ti,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:td}),y1=At(g1),v1=Ce({},Io,{propertyName:0,elapsedTime:0,pseudoElement:0}),b1=At(v1),x1=Ce({},Ml,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),w1=At(x1),S1=[9,13,27,32],nd=Nn&&"CompositionEvent"in window,xa=null;Nn&&"documentMode"in document&&(xa=document.documentMode);var E1=Nn&&"TextEvent"in window&&!xa,Um=Nn&&(!nd||xa&&8<xa&&11>=xa),Rf=" ",Df=!1;function Bm(e,t){switch(e){case"keyup":return S1.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Hm(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var uo=!1;function k1(e,t){switch(e){case"compositionend":return Hm(t);case"keypress":return t.which!==32?null:(Df=!0,Rf);case"textInput":return e=t.data,e===Rf&&Df?null:e;default:return null}}function T1(e,t){if(uo)return e==="compositionend"||!nd&&Bm(e,t)?(e=$m(),Vi=Jc=Jn=null,uo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Um&&t.locale!=="ko"?null:t.data;default:return null}}var O1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ff(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!O1[e.type]:t==="textarea"}function Vm(e,t,n,r){wm(r),t=cl(t,"onChange"),0<t.length&&(n=new ed("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var wa=null,La=null;function P1(e){t0(e,0)}function zl(e){var t=po(e);if(hm(t))return e}function C1(e,t){if(e==="change")return t}var qm=!1;if(Nn){var Is;if(Nn){var $s="oninput"in document;if(!$s){var Lf=document.createElement("div");Lf.setAttribute("oninput","return;"),$s=typeof Lf.oninput=="function"}Is=$s}else Is=!1;qm=Is&&(!document.documentMode||9<document.documentMode)}function Mf(){wa&&(wa.detachEvent("onpropertychange",Wm),La=wa=null)}function Wm(e){if(e.propertyName==="value"&&zl(La)){var t=[];Vm(t,La,e,Yc(e)),Tm(P1,t)}}function _1(e,t,n){e==="focusin"?(Mf(),wa=t,La=n,wa.attachEvent("onpropertychange",Wm)):e==="focusout"&&Mf()}function j1(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zl(La)}function A1(e,t){if(e==="click")return zl(t)}function N1(e,t){if(e==="input"||e==="change")return zl(t)}function R1(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var on=typeof Object.is=="function"?Object.is:R1;function Ma(e,t){if(on(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!vu.call(t,o)||!on(e[o],t[o]))return!1}return!0}function zf(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function If(e,t){var n=zf(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=zf(n)}}function Gm(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Gm(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Ym(){for(var e=window,t=rl();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=rl(e.document)}return t}function rd(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function D1(e){var t=Ym(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Gm(n.ownerDocument.documentElement,n)){if(r!==null&&rd(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=If(n,a);var i=If(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var F1=Nn&&"documentMode"in document&&11>=document.documentMode,co=null,Mu=null,Sa=null,zu=!1;function $f(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||co==null||co!==rl(r)||(r=co,"selectionStart"in r&&rd(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Sa&&Ma(Sa,r)||(Sa=r,r=cl(Mu,"onSelect"),0<r.length&&(t=new ed("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=co)))}function Pi(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var fo={animationend:Pi("Animation","AnimationEnd"),animationiteration:Pi("Animation","AnimationIteration"),animationstart:Pi("Animation","AnimationStart"),transitionend:Pi("Transition","TransitionEnd")},Us={},Qm={};Nn&&(Qm=document.createElement("div").style,"AnimationEvent"in window||(delete fo.animationend.animation,delete fo.animationiteration.animation,delete fo.animationstart.animation),"TransitionEvent"in window||delete fo.transitionend.transition);function Il(e){if(Us[e])return Us[e];if(!fo[e])return e;var t=fo[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Qm)return Us[e]=t[n];return e}var Zm=Il("animationend"),Km=Il("animationiteration"),Xm=Il("animationstart"),Jm=Il("transitionend"),e0=new Map,Uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function hr(e,t){e0.set(e,t),qr(t,[e])}for(var Bs=0;Bs<Uf.length;Bs++){var Hs=Uf[Bs],L1=Hs.toLowerCase(),M1=Hs[0].toUpperCase()+Hs.slice(1);hr(L1,"on"+M1)}hr(Zm,"onAnimationEnd");hr(Km,"onAnimationIteration");hr(Xm,"onAnimationStart");hr("dblclick","onDoubleClick");hr("focusin","onFocus");hr("focusout","onBlur");hr(Jm,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);qr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));qr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));qr("onBeforeInput",["compositionend","keypress","textInput","paste"]);qr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));qr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ga="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),z1=new Set("cancel close invalid load scroll toggle".split(" ").concat(ga));function Bf(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Lv(r,t,void 0,e),e.currentTarget=null}function t0(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var l=r[i],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==a&&o.isPropagationStopped())break e;Bf(o,l,u),a=s}else for(i=0;i<r.length;i++){if(l=r[i],s=l.instance,u=l.currentTarget,l=l.listener,s!==a&&o.isPropagationStopped())break e;Bf(o,l,u),a=s}}}if(al)throw e=Ru,al=!1,Ru=null,e}function ge(e,t){var n=t[Hu];n===void 0&&(n=t[Hu]=new Set);var r=e+"__bubble";n.has(r)||(n0(t,e,2,!1),n.add(r))}function Vs(e,t,n){var r=0;t&&(r|=4),n0(n,e,r,t)}var Ci="_reactListening"+Math.random().toString(36).slice(2);function za(e){if(!e[Ci]){e[Ci]=!0,um.forEach(function(n){n!=="selectionchange"&&(z1.has(n)||Vs(n,!1,e),Vs(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ci]||(t[Ci]=!0,Vs("selectionchange",!1,t))}}function n0(e,t,n,r){switch(Im(t)){case 1:var o=Xv;break;case 4:o=Jv;break;default:o=Xc}n=o.bind(null,t,n,e),o=void 0,!Nu||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function qs(e,t,n,r,o){var a=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var l=r.stateNode.containerInfo;if(l===o||l.nodeType===8&&l.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var s=i.tag;if((s===3||s===4)&&(s=i.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;i=i.return}for(;l!==null;){if(i=kr(l),i===null)return;if(s=i.tag,s===5||s===6){r=a=i;continue e}l=l.parentNode}}r=r.return}Tm(function(){var u=a,c=Yc(n),d=[];e:{var f=e0.get(e);if(f!==void 0){var x=ed,y=e;switch(e){case"keypress":if(qi(n)===0)break e;case"keydown":case"keyup":x=h1;break;case"focusin":y="focus",x=zs;break;case"focusout":y="blur",x=zs;break;case"beforeblur":case"afterblur":x=zs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=n1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=y1;break;case Zm:case Km:case Xm:x=a1;break;case Jm:x=b1;break;case"scroll":x=e1;break;case"wheel":x=w1;break;case"copy":case"cut":case"paste":x=l1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Nf}var m=(t&4)!==0,E=!m&&e==="scroll",g=m?f!==null?f+"Capture":null:f;m=[];for(var h=u,v;h!==null;){v=h;var k=v.stateNode;if(v.tag===5&&k!==null&&(v=k,g!==null&&(k=Na(h,g),k!=null&&m.push(Ia(h,k,v)))),E)break;h=h.return}0<m.length&&(f=new x(f,y,null,n,c),d.push({event:f,listeners:m}))}}if(!(t&7)){e:{if(f=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",f&&n!==ju&&(y=n.relatedTarget||n.fromElement)&&(kr(y)||y[Rn]))break e;if((x||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,x?(y=n.relatedTarget||n.toElement,x=u,y=y?kr(y):null,y!==null&&(E=Wr(y),y!==E||y.tag!==5&&y.tag!==6)&&(y=null)):(x=null,y=u),x!==y)){if(m=jf,k="onMouseLeave",g="onMouseEnter",h="mouse",(e==="pointerout"||e==="pointerover")&&(m=Nf,k="onPointerLeave",g="onPointerEnter",h="pointer"),E=x==null?f:po(x),v=y==null?f:po(y),f=new m(k,h+"leave",x,n,c),f.target=E,f.relatedTarget=v,k=null,kr(c)===u&&(m=new m(g,h+"enter",y,n,c),m.target=v,m.relatedTarget=E,k=m),E=k,x&&y)t:{for(m=x,g=y,h=0,v=m;v;v=no(v))h++;for(v=0,k=g;k;k=no(k))v++;for(;0<h-v;)m=no(m),h--;for(;0<v-h;)g=no(g),v--;for(;h--;){if(m===g||g!==null&&m===g.alternate)break t;m=no(m),g=no(g)}m=null}else m=null;x!==null&&Hf(d,f,x,m,!1),y!==null&&E!==null&&Hf(d,E,y,m,!0)}}e:{if(f=u?po(u):window,x=f.nodeName&&f.nodeName.toLowerCase(),x==="select"||x==="input"&&f.type==="file")var j=C1;else if(Ff(f))if(qm)j=N1;else{j=j1;var C=_1}else(x=f.nodeName)&&x.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(j=A1);if(j&&(j=j(e,u))){Vm(d,j,n,c);break e}C&&C(e,f,u),e==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Tu(f,"number",f.value)}switch(C=u?po(u):window,e){case"focusin":(Ff(C)||C.contentEditable==="true")&&(co=C,Mu=u,Sa=null);break;case"focusout":Sa=Mu=co=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,$f(d,n,c);break;case"selectionchange":if(F1)break;case"keydown":case"keyup":$f(d,n,c)}var b;if(nd)e:{switch(e){case"compositionstart":var A="onCompositionStart";break e;case"compositionend":A="onCompositionEnd";break e;case"compositionupdate":A="onCompositionUpdate";break e}A=void 0}else uo?Bm(e,n)&&(A="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(A="onCompositionStart");A&&(Um&&n.locale!=="ko"&&(uo||A!=="onCompositionStart"?A==="onCompositionEnd"&&uo&&(b=$m()):(Jn=c,Jc="value"in Jn?Jn.value:Jn.textContent,uo=!0)),C=cl(u,A),0<C.length&&(A=new Af(A,e,null,n,c),d.push({event:A,listeners:C}),b?A.data=b:(b=Hm(n),b!==null&&(A.data=b)))),(b=E1?k1(e,n):T1(e,n))&&(u=cl(u,"onBeforeInput"),0<u.length&&(c=new Af("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=b))}t0(d,t)})}function Ia(e,t,n){return{instance:e,listener:t,currentTarget:n}}function cl(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Na(e,n),a!=null&&r.unshift(Ia(e,a,o)),a=Na(e,t),a!=null&&r.push(Ia(e,a,o))),e=e.return}return r}function no(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Hf(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(s!==null&&s===r)break;l.tag===5&&u!==null&&(l=u,o?(s=Na(n,a),s!=null&&i.unshift(Ia(n,s,l))):o||(s=Na(n,a),s!=null&&i.push(Ia(n,s,l)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var I1=/\r\n?/g,$1=/\u0000|\uFFFD/g;function Vf(e){return(typeof e=="string"?e:""+e).replace(I1,`
`).replace($1,"")}function _i(e,t,n){if(t=Vf(t),Vf(e)!==t&&n)throw Error(N(425))}function dl(){}var Iu=null,$u=null;function Uu(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Bu=typeof setTimeout=="function"?setTimeout:void 0,U1=typeof clearTimeout=="function"?clearTimeout:void 0,qf=typeof Promise=="function"?Promise:void 0,B1=typeof queueMicrotask=="function"?queueMicrotask:typeof qf<"u"?function(e){return qf.resolve(null).then(e).catch(H1)}:Bu;function H1(e){setTimeout(function(){throw e})}function Ws(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Fa(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Fa(t)}function or(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Wf(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var $o=Math.random().toString(36).slice(2),pn="__reactFiber$"+$o,$a="__reactProps$"+$o,Rn="__reactContainer$"+$o,Hu="__reactEvents$"+$o,V1="__reactListeners$"+$o,q1="__reactHandles$"+$o;function kr(e){var t=e[pn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Rn]||n[pn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Wf(e);e!==null;){if(n=e[pn])return n;e=Wf(e)}return t}e=n,n=e.parentNode}return null}function ni(e){return e=e[pn]||e[Rn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function po(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(N(33))}function $l(e){return e[$a]||null}var Vu=[],ho=-1;function mr(e){return{current:e}}function ve(e){0>ho||(e.current=Vu[ho],Vu[ho]=null,ho--)}function me(e,t){ho++,Vu[ho]=e.current,e.current=t}var dr={},nt=mr(dr),vt=mr(!1),Lr=dr;function jo(e,t){var n=e.type.contextTypes;if(!n)return dr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function bt(e){return e=e.childContextTypes,e!=null}function fl(){ve(vt),ve(nt)}function Gf(e,t,n){if(nt.current!==dr)throw Error(N(168));me(nt,t),me(vt,n)}function r0(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(N(108,_v(e)||"Unknown",o));return Ce({},n,r)}function pl(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||dr,Lr=nt.current,me(nt,e),me(vt,vt.current),!0}function Yf(e,t,n){var r=e.stateNode;if(!r)throw Error(N(169));n?(e=r0(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,ve(vt),ve(nt),me(nt,e)):ve(vt),me(vt,n)}var On=null,Ul=!1,Gs=!1;function o0(e){On===null?On=[e]:On.push(e)}function W1(e){Ul=!0,o0(e)}function gr(){if(!Gs&&On!==null){Gs=!0;var e=0,t=de;try{var n=On;for(de=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}On=null,Ul=!1}catch(o){throw On!==null&&(On=On.slice(e+1)),_m(Qc,gr),o}finally{de=t,Gs=!1}}return null}var mo=[],go=0,hl=null,ml=0,Mt=[],zt=0,Mr=null,Cn=1,_n="";function wr(e,t){mo[go++]=ml,mo[go++]=hl,hl=e,ml=t}function a0(e,t,n){Mt[zt++]=Cn,Mt[zt++]=_n,Mt[zt++]=Mr,Mr=e;var r=Cn;e=_n;var o=32-tn(r)-1;r&=~(1<<o),n+=1;var a=32-tn(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,Cn=1<<32-tn(t)+o|n<<o|r,_n=a+e}else Cn=1<<a|n<<o|r,_n=e}function od(e){e.return!==null&&(wr(e,1),a0(e,1,0))}function ad(e){for(;e===hl;)hl=mo[--go],mo[go]=null,ml=mo[--go],mo[go]=null;for(;e===Mr;)Mr=Mt[--zt],Mt[zt]=null,_n=Mt[--zt],Mt[zt]=null,Cn=Mt[--zt],Mt[zt]=null}var Ct=null,Tt=null,ke=!1,Xt=null;function i0(e,t){var n=$t(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Qf(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ct=e,Tt=or(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ct=e,Tt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Mr!==null?{id:Cn,overflow:_n}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=$t(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ct=e,Tt=null,!0):!1;default:return!1}}function qu(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Wu(e){if(ke){var t=Tt;if(t){var n=t;if(!Qf(e,t)){if(qu(e))throw Error(N(418));t=or(n.nextSibling);var r=Ct;t&&Qf(e,t)?i0(r,n):(e.flags=e.flags&-4097|2,ke=!1,Ct=e)}}else{if(qu(e))throw Error(N(418));e.flags=e.flags&-4097|2,ke=!1,Ct=e}}}function Zf(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ct=e}function ji(e){if(e!==Ct)return!1;if(!ke)return Zf(e),ke=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Uu(e.type,e.memoizedProps)),t&&(t=Tt)){if(qu(e))throw l0(),Error(N(418));for(;t;)i0(e,t),t=or(t.nextSibling)}if(Zf(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(N(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Tt=or(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Tt=null}}else Tt=Ct?or(e.stateNode.nextSibling):null;return!0}function l0(){for(var e=Tt;e;)e=or(e.nextSibling)}function Ao(){Tt=Ct=null,ke=!1}function id(e){Xt===null?Xt=[e]:Xt.push(e)}var G1=Mn.ReactCurrentBatchConfig;function ra(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(N(309));var r=n.stateNode}if(!r)throw Error(N(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var l=o.refs;i===null?delete l[a]:l[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(N(284));if(!n._owner)throw Error(N(290,e))}return e}function Ai(e,t){throw e=Object.prototype.toString.call(t),Error(N(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Kf(e){var t=e._init;return t(e._payload)}function s0(e){function t(g,h){if(e){var v=g.deletions;v===null?(g.deletions=[h],g.flags|=16):v.push(h)}}function n(g,h){if(!e)return null;for(;h!==null;)t(g,h),h=h.sibling;return null}function r(g,h){for(g=new Map;h!==null;)h.key!==null?g.set(h.key,h):g.set(h.index,h),h=h.sibling;return g}function o(g,h){return g=sr(g,h),g.index=0,g.sibling=null,g}function a(g,h,v){return g.index=v,e?(v=g.alternate,v!==null?(v=v.index,v<h?(g.flags|=2,h):v):(g.flags|=2,h)):(g.flags|=1048576,h)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function l(g,h,v,k){return h===null||h.tag!==6?(h=eu(v,g.mode,k),h.return=g,h):(h=o(h,v),h.return=g,h)}function s(g,h,v,k){var j=v.type;return j===so?c(g,h,v.props.children,k,v.key):h!==null&&(h.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Yn&&Kf(j)===h.type)?(k=o(h,v.props),k.ref=ra(g,h,v),k.return=g,k):(k=Xi(v.type,v.key,v.props,null,g.mode,k),k.ref=ra(g,h,v),k.return=g,k)}function u(g,h,v,k){return h===null||h.tag!==4||h.stateNode.containerInfo!==v.containerInfo||h.stateNode.implementation!==v.implementation?(h=tu(v,g.mode,k),h.return=g,h):(h=o(h,v.children||[]),h.return=g,h)}function c(g,h,v,k,j){return h===null||h.tag!==7?(h=Ar(v,g.mode,k,j),h.return=g,h):(h=o(h,v),h.return=g,h)}function d(g,h,v){if(typeof h=="string"&&h!==""||typeof h=="number")return h=eu(""+h,g.mode,v),h.return=g,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case xi:return v=Xi(h.type,h.key,h.props,null,g.mode,v),v.ref=ra(g,null,h),v.return=g,v;case lo:return h=tu(h,g.mode,v),h.return=g,h;case Yn:var k=h._init;return d(g,k(h._payload),v)}if(ha(h)||Xo(h))return h=Ar(h,g.mode,v,null),h.return=g,h;Ai(g,h)}return null}function f(g,h,v,k){var j=h!==null?h.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return j!==null?null:l(g,h,""+v,k);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:return v.key===j?s(g,h,v,k):null;case lo:return v.key===j?u(g,h,v,k):null;case Yn:return j=v._init,f(g,h,j(v._payload),k)}if(ha(v)||Xo(v))return j!==null?null:c(g,h,v,k,null);Ai(g,v)}return null}function x(g,h,v,k,j){if(typeof k=="string"&&k!==""||typeof k=="number")return g=g.get(v)||null,l(h,g,""+k,j);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case xi:return g=g.get(k.key===null?v:k.key)||null,s(h,g,k,j);case lo:return g=g.get(k.key===null?v:k.key)||null,u(h,g,k,j);case Yn:var C=k._init;return x(g,h,v,C(k._payload),j)}if(ha(k)||Xo(k))return g=g.get(v)||null,c(h,g,k,j,null);Ai(h,k)}return null}function y(g,h,v,k){for(var j=null,C=null,b=h,A=h=0,F=null;b!==null&&A<v.length;A++){b.index>A?(F=b,b=null):F=b.sibling;var L=f(g,b,v[A],k);if(L===null){b===null&&(b=F);break}e&&b&&L.alternate===null&&t(g,b),h=a(L,h,A),C===null?j=L:C.sibling=L,C=L,b=F}if(A===v.length)return n(g,b),ke&&wr(g,A),j;if(b===null){for(;A<v.length;A++)b=d(g,v[A],k),b!==null&&(h=a(b,h,A),C===null?j=b:C.sibling=b,C=b);return ke&&wr(g,A),j}for(b=r(g,b);A<v.length;A++)F=x(b,g,A,v[A],k),F!==null&&(e&&F.alternate!==null&&b.delete(F.key===null?A:F.key),h=a(F,h,A),C===null?j=F:C.sibling=F,C=F);return e&&b.forEach(function(U){return t(g,U)}),ke&&wr(g,A),j}function m(g,h,v,k){var j=Xo(v);if(typeof j!="function")throw Error(N(150));if(v=j.call(v),v==null)throw Error(N(151));for(var C=j=null,b=h,A=h=0,F=null,L=v.next();b!==null&&!L.done;A++,L=v.next()){b.index>A?(F=b,b=null):F=b.sibling;var U=f(g,b,L.value,k);if(U===null){b===null&&(b=F);break}e&&b&&U.alternate===null&&t(g,b),h=a(U,h,A),C===null?j=U:C.sibling=U,C=U,b=F}if(L.done)return n(g,b),ke&&wr(g,A),j;if(b===null){for(;!L.done;A++,L=v.next())L=d(g,L.value,k),L!==null&&(h=a(L,h,A),C===null?j=L:C.sibling=L,C=L);return ke&&wr(g,A),j}for(b=r(g,b);!L.done;A++,L=v.next())L=x(b,g,A,L.value,k),L!==null&&(e&&L.alternate!==null&&b.delete(L.key===null?A:L.key),h=a(L,h,A),C===null?j=L:C.sibling=L,C=L);return e&&b.forEach(function(ue){return t(g,ue)}),ke&&wr(g,A),j}function E(g,h,v,k){if(typeof v=="object"&&v!==null&&v.type===so&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case xi:e:{for(var j=v.key,C=h;C!==null;){if(C.key===j){if(j=v.type,j===so){if(C.tag===7){n(g,C.sibling),h=o(C,v.props.children),h.return=g,g=h;break e}}else if(C.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===Yn&&Kf(j)===C.type){n(g,C.sibling),h=o(C,v.props),h.ref=ra(g,C,v),h.return=g,g=h;break e}n(g,C);break}else t(g,C);C=C.sibling}v.type===so?(h=Ar(v.props.children,g.mode,k,v.key),h.return=g,g=h):(k=Xi(v.type,v.key,v.props,null,g.mode,k),k.ref=ra(g,h,v),k.return=g,g=k)}return i(g);case lo:e:{for(C=v.key;h!==null;){if(h.key===C)if(h.tag===4&&h.stateNode.containerInfo===v.containerInfo&&h.stateNode.implementation===v.implementation){n(g,h.sibling),h=o(h,v.children||[]),h.return=g,g=h;break e}else{n(g,h);break}else t(g,h);h=h.sibling}h=tu(v,g.mode,k),h.return=g,g=h}return i(g);case Yn:return C=v._init,E(g,h,C(v._payload),k)}if(ha(v))return y(g,h,v,k);if(Xo(v))return m(g,h,v,k);Ai(g,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,h!==null&&h.tag===6?(n(g,h.sibling),h=o(h,v),h.return=g,g=h):(n(g,h),h=eu(v,g.mode,k),h.return=g,g=h),i(g)):n(g,h)}return E}var No=s0(!0),u0=s0(!1),gl=mr(null),yl=null,yo=null,ld=null;function sd(){ld=yo=yl=null}function ud(e){var t=gl.current;ve(gl),e._currentValue=t}function Gu(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Oo(e,t){yl=e,ld=yo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(gt=!0),e.firstContext=null)}function Ht(e){var t=e._currentValue;if(ld!==e)if(e={context:e,memoizedValue:t,next:null},yo===null){if(yl===null)throw Error(N(308));yo=e,yl.dependencies={lanes:0,firstContext:e}}else yo=yo.next=e;return t}var Tr=null;function cd(e){Tr===null?Tr=[e]:Tr.push(e)}function c0(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,cd(t)):(n.next=o.next,o.next=n),t.interleaved=n,Dn(e,r)}function Dn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qn=!1;function dd(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function d0(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function jn(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function ar(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,se&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Dn(e,n)}return o=r.interleaved,o===null?(t.next=t,cd(r)):(t.next=o.next,o.next=t),r.interleaved=t,Dn(e,n)}function Wi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}function Xf(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function vl(e,t,n,r){var o=e.updateQueue;Qn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,l=o.shared.pending;if(l!==null){o.shared.pending=null;var s=l,u=s.next;s.next=null,i===null?a=u:i.next=u,i=s;var c=e.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==i&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(a!==null){var d=o.baseState;i=0,c=u=s=null,l=a;do{var f=l.lane,x=l.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:x,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,m=l;switch(f=t,x=n,m.tag){case 1:if(y=m.payload,typeof y=="function"){d=y.call(x,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=m.payload,f=typeof y=="function"?y.call(x,d,f):y,f==null)break e;d=Ce({},d,f);break e;case 2:Qn=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[l]:f.push(l))}else x={eventTime:x,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=x,s=d):c=c.next=x,i|=f;if(l=l.next,l===null){if(l=o.shared.pending,l===null)break;f=l,l=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(!0);if(c===null&&(s=d),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Ir|=i,e.lanes=i,e.memoizedState=d}}function Jf(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(N(191,o));o.call(r)}}}var ri={},gn=mr(ri),Ua=mr(ri),Ba=mr(ri);function Or(e){if(e===ri)throw Error(N(174));return e}function fd(e,t){switch(me(Ba,t),me(Ua,e),me(gn,ri),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Pu(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Pu(t,e)}ve(gn),me(gn,t)}function Ro(){ve(gn),ve(Ua),ve(Ba)}function f0(e){Or(Ba.current);var t=Or(gn.current),n=Pu(t,e.type);t!==n&&(me(Ua,e),me(gn,n))}function pd(e){Ua.current===e&&(ve(gn),ve(Ua))}var Oe=mr(0);function bl(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ys=[];function hd(){for(var e=0;e<Ys.length;e++)Ys[e]._workInProgressVersionPrimary=null;Ys.length=0}var Gi=Mn.ReactCurrentDispatcher,Qs=Mn.ReactCurrentBatchConfig,zr=0,Pe=null,De=null,Ue=null,xl=!1,Ea=!1,Ha=0,Y1=0;function Je(){throw Error(N(321))}function md(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!on(e[n],t[n]))return!1;return!0}function gd(e,t,n,r,o,a){if(zr=a,Pe=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Gi.current=e===null||e.memoizedState===null?X1:J1,e=n(r,o),Ea){a=0;do{if(Ea=!1,Ha=0,25<=a)throw Error(N(301));a+=1,Ue=De=null,t.updateQueue=null,Gi.current=eb,e=n(r,o)}while(Ea)}if(Gi.current=wl,t=De!==null&&De.next!==null,zr=0,Ue=De=Pe=null,xl=!1,t)throw Error(N(300));return e}function yd(){var e=Ha!==0;return Ha=0,e}function dn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ue===null?Pe.memoizedState=Ue=e:Ue=Ue.next=e,Ue}function Vt(){if(De===null){var e=Pe.alternate;e=e!==null?e.memoizedState:null}else e=De.next;var t=Ue===null?Pe.memoizedState:Ue.next;if(t!==null)Ue=t,De=e;else{if(e===null)throw Error(N(310));De=e,e={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ue===null?Pe.memoizedState=Ue=e:Ue=Ue.next=e}return Ue}function Va(e,t){return typeof t=="function"?t(e):t}function Zs(e){var t=Vt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=De,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var l=i=null,s=null,u=a;do{var c=u.lane;if((zr&c)===c)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(l=s=d,i=r):s=s.next=d,Pe.lanes|=c,Ir|=c}u=u.next}while(u!==null&&u!==a);s===null?i=r:s.next=l,on(r,t.memoizedState)||(gt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Pe.lanes|=a,Ir|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Ks(e){var t=Vt(),n=t.queue;if(n===null)throw Error(N(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);on(a,t.memoizedState)||(gt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function p0(){}function h0(e,t){var n=Pe,r=Vt(),o=t(),a=!on(r.memoizedState,o);if(a&&(r.memoizedState=o,gt=!0),r=r.queue,vd(y0.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||Ue!==null&&Ue.memoizedState.tag&1){if(n.flags|=2048,qa(9,g0.bind(null,n,r,o,t),void 0,null),Be===null)throw Error(N(349));zr&30||m0(n,t,o)}return o}function m0(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function g0(e,t,n,r){t.value=n,t.getSnapshot=r,v0(t)&&b0(e)}function y0(e,t,n){return n(function(){v0(t)&&b0(e)})}function v0(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!on(e,n)}catch{return!0}}function b0(e){var t=Dn(e,1);t!==null&&nn(t,e,1,-1)}function ep(e){var t=dn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:e},t.queue=e,e=e.dispatch=K1.bind(null,Pe,e),[t.memoizedState,e]}function qa(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Pe.updateQueue,t===null?(t={lastEffect:null,stores:null},Pe.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function x0(){return Vt().memoizedState}function Yi(e,t,n,r){var o=dn();Pe.flags|=e,o.memoizedState=qa(1|t,n,void 0,r===void 0?null:r)}function Bl(e,t,n,r){var o=Vt();r=r===void 0?null:r;var a=void 0;if(De!==null){var i=De.memoizedState;if(a=i.destroy,r!==null&&md(r,i.deps)){o.memoizedState=qa(t,n,a,r);return}}Pe.flags|=e,o.memoizedState=qa(1|t,n,a,r)}function tp(e,t){return Yi(8390656,8,e,t)}function vd(e,t){return Bl(2048,8,e,t)}function w0(e,t){return Bl(4,2,e,t)}function S0(e,t){return Bl(4,4,e,t)}function E0(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function k0(e,t,n){return n=n!=null?n.concat([e]):null,Bl(4,4,E0.bind(null,t,e),n)}function bd(){}function T0(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&md(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function O0(e,t){var n=Vt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&md(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function P0(e,t,n){return zr&21?(on(n,t)||(n=Nm(),Pe.lanes|=n,Ir|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,gt=!0),e.memoizedState=n)}function Q1(e,t){var n=de;de=n!==0&&4>n?n:4,e(!0);var r=Qs.transition;Qs.transition={};try{e(!1),t()}finally{de=n,Qs.transition=r}}function C0(){return Vt().memoizedState}function Z1(e,t,n){var r=lr(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},_0(e))j0(t,n);else if(n=c0(e,t,n,r),n!==null){var o=it();nn(n,e,r,o),A0(n,t,r)}}function K1(e,t,n){var r=lr(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(_0(e))j0(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,l=a(i,n);if(o.hasEagerState=!0,o.eagerState=l,on(l,i)){var s=t.interleaved;s===null?(o.next=o,cd(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=c0(e,t,o,r),n!==null&&(o=it(),nn(n,e,r,o),A0(n,t,r))}}function _0(e){var t=e.alternate;return e===Pe||t!==null&&t===Pe}function j0(e,t){Ea=xl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function A0(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Zc(e,n)}}var wl={readContext:Ht,useCallback:Je,useContext:Je,useEffect:Je,useImperativeHandle:Je,useInsertionEffect:Je,useLayoutEffect:Je,useMemo:Je,useReducer:Je,useRef:Je,useState:Je,useDebugValue:Je,useDeferredValue:Je,useTransition:Je,useMutableSource:Je,useSyncExternalStore:Je,useId:Je,unstable_isNewReconciler:!1},X1={readContext:Ht,useCallback:function(e,t){return dn().memoizedState=[e,t===void 0?null:t],e},useContext:Ht,useEffect:tp,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Yi(4194308,4,E0.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Yi(4194308,4,e,t)},useInsertionEffect:function(e,t){return Yi(4,2,e,t)},useMemo:function(e,t){var n=dn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=dn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Z1.bind(null,Pe,e),[r.memoizedState,e]},useRef:function(e){var t=dn();return e={current:e},t.memoizedState=e},useState:ep,useDebugValue:bd,useDeferredValue:function(e){return dn().memoizedState=e},useTransition:function(){var e=ep(!1),t=e[0];return e=Q1.bind(null,e[1]),dn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Pe,o=dn();if(ke){if(n===void 0)throw Error(N(407));n=n()}else{if(n=t(),Be===null)throw Error(N(349));zr&30||m0(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,tp(y0.bind(null,r,a,e),[e]),r.flags|=2048,qa(9,g0.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=dn(),t=Be.identifierPrefix;if(ke){var n=_n,r=Cn;n=(r&~(1<<32-tn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Ha++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Y1++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},J1={readContext:Ht,useCallback:T0,useContext:Ht,useEffect:vd,useImperativeHandle:k0,useInsertionEffect:w0,useLayoutEffect:S0,useMemo:O0,useReducer:Zs,useRef:x0,useState:function(){return Zs(Va)},useDebugValue:bd,useDeferredValue:function(e){var t=Vt();return P0(t,De.memoizedState,e)},useTransition:function(){var e=Zs(Va)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1},eb={readContext:Ht,useCallback:T0,useContext:Ht,useEffect:vd,useImperativeHandle:k0,useInsertionEffect:w0,useLayoutEffect:S0,useMemo:O0,useReducer:Ks,useRef:x0,useState:function(){return Ks(Va)},useDebugValue:bd,useDeferredValue:function(e){var t=Vt();return De===null?t.memoizedState=e:P0(t,De.memoizedState,e)},useTransition:function(){var e=Ks(Va)[0],t=Vt().memoizedState;return[e,t]},useMutableSource:p0,useSyncExternalStore:h0,useId:C0,unstable_isNewReconciler:!1};function Qt(e,t){if(e&&e.defaultProps){t=Ce({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Yu(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ce({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hl={isMounted:function(e){return(e=e._reactInternals)?Wr(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=it(),o=lr(e),a=jn(r,o);a.payload=t,n!=null&&(a.callback=n),t=ar(e,a,o),t!==null&&(nn(t,e,o,r),Wi(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=it(),o=lr(e),a=jn(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=ar(e,a,o),t!==null&&(nn(t,e,o,r),Wi(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=it(),r=lr(e),o=jn(n,r);o.tag=2,t!=null&&(o.callback=t),t=ar(e,o,r),t!==null&&(nn(t,e,r,n),Wi(t,e,r))}};function np(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Ma(n,r)||!Ma(o,a):!0}function N0(e,t,n){var r=!1,o=dr,a=t.contextType;return typeof a=="object"&&a!==null?a=Ht(a):(o=bt(t)?Lr:nt.current,r=t.contextTypes,a=(r=r!=null)?jo(e,o):dr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function rp(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hl.enqueueReplaceState(t,t.state,null)}function Qu(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},dd(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Ht(a):(a=bt(t)?Lr:nt.current,o.context=jo(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(Yu(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Hl.enqueueReplaceState(o,o.state,null),vl(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Do(e,t){try{var n="",r=t;do n+=Cv(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function Xs(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Zu(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var tb=typeof WeakMap=="function"?WeakMap:Map;function R0(e,t,n){n=jn(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){El||(El=!0,ic=r),Zu(e,t)},n}function D0(e,t,n){n=jn(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Zu(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){Zu(e,t),typeof r!="function"&&(ir===null?ir=new Set([this]):ir.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function op(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new tb;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=mb.bind(null,e,t,n),t.then(e,e))}function ap(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function ip(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=jn(-1,1),t.tag=2,ar(n,t,1))),n.lanes|=1),e)}var nb=Mn.ReactCurrentOwner,gt=!1;function at(e,t,n,r){t.child=e===null?u0(t,null,n,r):No(t,e.child,n,r)}function lp(e,t,n,r,o){n=n.render;var a=t.ref;return Oo(t,o),r=gd(e,t,n,r,a,o),n=yd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Fn(e,t,o)):(ke&&n&&od(t),t.flags|=1,at(e,t,r,o),t.child)}function sp(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!Pd(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,F0(e,t,a,r,o)):(e=Xi(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!(e.lanes&o)){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Ma,n(i,r)&&e.ref===t.ref)return Fn(e,t,o)}return t.flags|=1,e=sr(a,r),e.ref=t.ref,e.return=t,t.child=e}function F0(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Ma(a,r)&&e.ref===t.ref)if(gt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)e.flags&131072&&(gt=!0);else return t.lanes=e.lanes,Fn(e,t,o)}return Ku(e,t,n,r,o)}function L0(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},me(bo,kt),kt|=n;else{if(!(n&1073741824))return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,me(bo,kt),kt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,me(bo,kt),kt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,me(bo,kt),kt|=r;return at(e,t,o,n),t.child}function M0(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ku(e,t,n,r,o){var a=bt(n)?Lr:nt.current;return a=jo(t,a),Oo(t,o),n=gd(e,t,n,r,a,o),r=yd(),e!==null&&!gt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Fn(e,t,o)):(ke&&r&&od(t),t.flags|=1,at(e,t,n,o),t.child)}function up(e,t,n,r,o){if(bt(n)){var a=!0;pl(t)}else a=!1;if(Oo(t,o),t.stateNode===null)Qi(e,t),N0(t,n,r),Qu(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,l=t.memoizedProps;i.props=l;var s=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ht(u):(u=bt(n)?Lr:nt.current,u=jo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==r||s!==u)&&rp(t,i,r,u),Qn=!1;var f=t.memoizedState;i.state=f,vl(t,r,i,o),s=t.memoizedState,l!==r||f!==s||vt.current||Qn?(typeof c=="function"&&(Yu(t,n,c,r),s=t.memoizedState),(l=Qn||np(t,n,l,r,f,s,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),i.props=r,i.state=s,i.context=u,r=l):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,d0(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:Qt(t.type,l),i.props=u,d=t.pendingProps,f=i.context,s=n.contextType,typeof s=="object"&&s!==null?s=Ht(s):(s=bt(n)?Lr:nt.current,s=jo(t,s));var x=n.getDerivedStateFromProps;(c=typeof x=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(l!==d||f!==s)&&rp(t,i,r,s),Qn=!1,f=t.memoizedState,i.state=f,vl(t,r,i,o);var y=t.memoizedState;l!==d||f!==y||vt.current||Qn?(typeof x=="function"&&(Yu(t,n,x,r),y=t.memoizedState),(u=Qn||np(t,n,u,r,f,y,s)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,s),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,s)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=s,r=u):(typeof i.componentDidUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return Xu(e,t,n,r,a,o)}function Xu(e,t,n,r,o,a){M0(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&Yf(t,n,!1),Fn(e,t,a);r=t.stateNode,nb.current=t;var l=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=No(t,e.child,null,a),t.child=No(t,null,l,a)):at(e,t,l,a),t.memoizedState=r.state,o&&Yf(t,n,!0),t.child}function z0(e){var t=e.stateNode;t.pendingContext?Gf(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Gf(e,t.context,!1),fd(e,t.containerInfo)}function cp(e,t,n,r,o){return Ao(),id(o),t.flags|=256,at(e,t,n,r),t.child}var Ju={dehydrated:null,treeContext:null,retryLane:0};function ec(e){return{baseLanes:e,cachePool:null,transitions:null}}function I0(e,t,n){var r=t.pendingProps,o=Oe.current,a=!1,i=(t.flags&128)!==0,l;if((l=i)||(l=e!==null&&e.memoizedState===null?!1:(o&2)!==0),l?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),me(Oe,o&1),e===null)return Wu(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},!(r&1)&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Wl(i,r,0,null),e=Ar(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=ec(n),t.memoizedState=Ju,e):xd(t,i));if(o=e.memoizedState,o!==null&&(l=o.dehydrated,l!==null))return rb(e,t,i,r,l,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,l=o.sibling;var s={mode:"hidden",children:r.children};return!(i&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=sr(o,s),r.subtreeFlags=o.subtreeFlags&14680064),l!==null?a=sr(l,a):(a=Ar(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?ec(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Ju,r}return a=e.child,e=a.sibling,r=sr(a,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function xd(e,t){return t=Wl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Ni(e,t,n,r){return r!==null&&id(r),No(t,e.child,null,n),e=xd(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function rb(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=Xs(Error(N(422))),Ni(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Wl({mode:"visible",children:r.children},o,0,null),a=Ar(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,t.mode&1&&No(t,e.child,null,i),t.child.memoizedState=ec(i),t.memoizedState=Ju,a);if(!(t.mode&1))return Ni(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var l=r.dgst;return r=l,a=Error(N(419)),r=Xs(a,r,void 0),Ni(e,t,i,r)}if(l=(i&e.childLanes)!==0,gt||l){if(r=Be,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|i)?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,Dn(e,o),nn(r,e,o,-1))}return Od(),r=Xs(Error(N(421))),Ni(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=gb.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,Tt=or(o.nextSibling),Ct=t,ke=!0,Xt=null,e!==null&&(Mt[zt++]=Cn,Mt[zt++]=_n,Mt[zt++]=Mr,Cn=e.id,_n=e.overflow,Mr=t),t=xd(t,r.children),t.flags|=4096,t)}function dp(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Gu(e.return,t,n)}function Js(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function $0(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(at(e,t,r.children,n),r=Oe.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&dp(e,n,t);else if(e.tag===19)dp(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(me(Oe,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&bl(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Js(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&bl(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Js(t,!0,n,null,a);break;case"together":Js(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Qi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Fn(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Ir|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(N(153));if(t.child!==null){for(e=t.child,n=sr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=sr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function ob(e,t,n){switch(t.tag){case 3:z0(t),Ao();break;case 5:f0(t);break;case 1:bt(t.type)&&pl(t);break;case 4:fd(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;me(gl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(me(Oe,Oe.current&1),t.flags|=128,null):n&t.child.childLanes?I0(e,t,n):(me(Oe,Oe.current&1),e=Fn(e,t,n),e!==null?e.sibling:null);me(Oe,Oe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return $0(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),me(Oe,Oe.current),r)break;return null;case 22:case 23:return t.lanes=0,L0(e,t,n)}return Fn(e,t,n)}var U0,tc,B0,H0;U0=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};tc=function(){};B0=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Or(gn.current);var a=null;switch(n){case"input":o=Eu(e,o),r=Eu(e,r),a=[];break;case"select":o=Ce({},o,{value:void 0}),r=Ce({},r,{value:void 0}),a=[];break;case"textarea":o=Ou(e,o),r=Ou(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=dl)}Cu(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var l=o[u];for(i in l)l.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ja.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var s=r[u];if(l=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&s!==l&&(s!=null||l!=null))if(u==="style")if(l){for(i in l)!l.hasOwnProperty(i)||s&&s.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in s)s.hasOwnProperty(i)&&l[i]!==s[i]&&(n||(n={}),n[i]=s[i])}else n||(a||(a=[]),a.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,l=l?l.__html:void 0,s!=null&&l!==s&&(a=a||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(a=a||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ja.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&ge("scroll",e),a||l===s||(a=[])):(a=a||[]).push(u,s))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};H0=function(e,t,n,r){n!==r&&(t.flags|=4)};function oa(e,t){if(!ke)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function et(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function ab(e,t,n){var r=t.pendingProps;switch(ad(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return et(t),null;case 1:return bt(t.type)&&fl(),et(t),null;case 3:return r=t.stateNode,Ro(),ve(vt),ve(nt),hd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ji(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Xt!==null&&(uc(Xt),Xt=null))),tc(e,t),et(t),null;case 5:pd(t);var o=Or(Ba.current);if(n=t.type,e!==null&&t.stateNode!=null)B0(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(N(166));return et(t),null}if(e=Or(gn.current),ji(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[pn]=t,r[$a]=a,e=(t.mode&1)!==0,n){case"dialog":ge("cancel",r),ge("close",r);break;case"iframe":case"object":case"embed":ge("load",r);break;case"video":case"audio":for(o=0;o<ga.length;o++)ge(ga[o],r);break;case"source":ge("error",r);break;case"img":case"image":case"link":ge("error",r),ge("load",r);break;case"details":ge("toggle",r);break;case"input":xf(r,a),ge("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},ge("invalid",r);break;case"textarea":Sf(r,a),ge("invalid",r)}Cu(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var l=a[i];i==="children"?typeof l=="string"?r.textContent!==l&&(a.suppressHydrationWarning!==!0&&_i(r.textContent,l,e),o=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(a.suppressHydrationWarning!==!0&&_i(r.textContent,l,e),o=["children",""+l]):ja.hasOwnProperty(i)&&l!=null&&i==="onScroll"&&ge("scroll",r)}switch(n){case"input":wi(r),wf(r,a,!0);break;case"textarea":wi(r),Ef(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=dl)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=ym(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[pn]=t,e[$a]=r,U0(e,t,!1,!1),t.stateNode=e;e:{switch(i=_u(n,r),n){case"dialog":ge("cancel",e),ge("close",e),o=r;break;case"iframe":case"object":case"embed":ge("load",e),o=r;break;case"video":case"audio":for(o=0;o<ga.length;o++)ge(ga[o],e);o=r;break;case"source":ge("error",e),o=r;break;case"img":case"image":case"link":ge("error",e),ge("load",e),o=r;break;case"details":ge("toggle",e),o=r;break;case"input":xf(e,r),o=Eu(e,r),ge("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=Ce({},r,{value:void 0}),ge("invalid",e);break;case"textarea":Sf(e,r),o=Ou(e,r),ge("invalid",e);break;default:o=r}Cu(n,o),l=o;for(a in l)if(l.hasOwnProperty(a)){var s=l[a];a==="style"?xm(e,s):a==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&vm(e,s)):a==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&Aa(e,s):typeof s=="number"&&Aa(e,""+s):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(ja.hasOwnProperty(a)?s!=null&&a==="onScroll"&&ge("scroll",e):s!=null&&Vc(e,a,s,i))}switch(n){case"input":wi(e),wf(e,r,!1);break;case"textarea":wi(e),Ef(e);break;case"option":r.value!=null&&e.setAttribute("value",""+cr(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?So(e,!!r.multiple,a,!1):r.defaultValue!=null&&So(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return et(t),null;case 6:if(e&&t.stateNode!=null)H0(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(N(166));if(n=Or(Ba.current),Or(gn.current),ji(t)){if(r=t.stateNode,n=t.memoizedProps,r[pn]=t,(a=r.nodeValue!==n)&&(e=Ct,e!==null))switch(e.tag){case 3:_i(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&_i(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[pn]=t,t.stateNode=r}return et(t),null;case 13:if(ve(Oe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ke&&Tt!==null&&t.mode&1&&!(t.flags&128))l0(),Ao(),t.flags|=98560,a=!1;else if(a=ji(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(N(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(N(317));a[pn]=t}else Ao(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;et(t),a=!1}else Xt!==null&&(uc(Xt),Xt=null),a=!0;if(!a)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Oe.current&1?Fe===0&&(Fe=3):Od())),t.updateQueue!==null&&(t.flags|=4),et(t),null);case 4:return Ro(),tc(e,t),e===null&&za(t.stateNode.containerInfo),et(t),null;case 10:return ud(t.type._context),et(t),null;case 17:return bt(t.type)&&fl(),et(t),null;case 19:if(ve(Oe),a=t.memoizedState,a===null)return et(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)oa(a,!1);else{if(Fe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(i=bl(e),i!==null){for(t.flags|=128,oa(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return me(Oe,Oe.current&1|2),t.child}e=e.sibling}a.tail!==null&&je()>Fo&&(t.flags|=128,r=!0,oa(a,!1),t.lanes=4194304)}else{if(!r)if(e=bl(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),oa(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ke)return et(t),null}else 2*je()-a.renderingStartTime>Fo&&n!==1073741824&&(t.flags|=128,r=!0,oa(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=je(),t.sibling=null,n=Oe.current,me(Oe,r?n&1|2:n&1),t):(et(t),null);case 22:case 23:return Td(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?kt&1073741824&&(et(t),t.subtreeFlags&6&&(t.flags|=8192)):et(t),null;case 24:return null;case 25:return null}throw Error(N(156,t.tag))}function ib(e,t){switch(ad(t),t.tag){case 1:return bt(t.type)&&fl(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ro(),ve(vt),ve(nt),hd(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return pd(t),null;case 13:if(ve(Oe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(N(340));Ao()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ve(Oe),null;case 4:return Ro(),null;case 10:return ud(t.type._context),null;case 22:case 23:return Td(),null;case 24:return null;default:return null}}var Ri=!1,tt=!1,lb=typeof WeakSet=="function"?WeakSet:Set,z=null;function vo(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){_e(e,t,r)}else n.current=null}function nc(e,t,n){try{n()}catch(r){_e(e,t,r)}}var fp=!1;function sb(e,t){if(Iu=sl,e=Ym(),rd(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,l=-1,s=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var x;d!==n||o!==0&&d.nodeType!==3||(l=i+o),d!==a||r!==0&&d.nodeType!==3||(s=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(x=d.firstChild)!==null;)f=d,d=x;for(;;){if(d===e)break t;if(f===n&&++u===o&&(l=i),f===a&&++c===r&&(s=i),(x=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=x}n=l===-1||s===-1?null:{start:l,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($u={focusedElem:e,selectionRange:n},sl=!1,z=t;z!==null;)if(t=z,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,z=e;else for(;z!==null;){t=z;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var m=y.memoizedProps,E=y.memoizedState,g=t.stateNode,h=g.getSnapshotBeforeUpdate(t.elementType===t.type?m:Qt(t.type,m),E);g.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var v=t.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(N(163))}}catch(k){_e(t,t.return,k)}if(e=t.sibling,e!==null){e.return=t.return,z=e;break}z=t.return}return y=fp,fp=!1,y}function ka(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&nc(t,n,a)}o=o.next}while(o!==r)}}function Vl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function rc(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function V0(e){var t=e.alternate;t!==null&&(e.alternate=null,V0(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[pn],delete t[$a],delete t[Hu],delete t[V1],delete t[q1])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function q0(e){return e.tag===5||e.tag===3||e.tag===4}function pp(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||q0(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function oc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=dl));else if(r!==4&&(e=e.child,e!==null))for(oc(e,t,n),e=e.sibling;e!==null;)oc(e,t,n),e=e.sibling}function ac(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(ac(e,t,n),e=e.sibling;e!==null;)ac(e,t,n),e=e.sibling}var Ye=null,Zt=!1;function Hn(e,t,n){for(n=n.child;n!==null;)W0(e,t,n),n=n.sibling}function W0(e,t,n){if(mn&&typeof mn.onCommitFiberUnmount=="function")try{mn.onCommitFiberUnmount(Ll,n)}catch{}switch(n.tag){case 5:tt||vo(n,t);case 6:var r=Ye,o=Zt;Ye=null,Hn(e,t,n),Ye=r,Zt=o,Ye!==null&&(Zt?(e=Ye,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ye.removeChild(n.stateNode));break;case 18:Ye!==null&&(Zt?(e=Ye,n=n.stateNode,e.nodeType===8?Ws(e.parentNode,n):e.nodeType===1&&Ws(e,n),Fa(e)):Ws(Ye,n.stateNode));break;case 4:r=Ye,o=Zt,Ye=n.stateNode.containerInfo,Zt=!0,Hn(e,t,n),Ye=r,Zt=o;break;case 0:case 11:case 14:case 15:if(!tt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&(a&2||a&4)&&nc(n,t,i),o=o.next}while(o!==r)}Hn(e,t,n);break;case 1:if(!tt&&(vo(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){_e(n,t,l)}Hn(e,t,n);break;case 21:Hn(e,t,n);break;case 22:n.mode&1?(tt=(r=tt)||n.memoizedState!==null,Hn(e,t,n),tt=r):Hn(e,t,n);break;default:Hn(e,t,n)}}function hp(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new lb),t.forEach(function(r){var o=yb.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Wt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,l=i;e:for(;l!==null;){switch(l.tag){case 5:Ye=l.stateNode,Zt=!1;break e;case 3:Ye=l.stateNode.containerInfo,Zt=!0;break e;case 4:Ye=l.stateNode.containerInfo,Zt=!0;break e}l=l.return}if(Ye===null)throw Error(N(160));W0(a,i,o),Ye=null,Zt=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){_e(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)G0(t,e),t=t.sibling}function G0(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Wt(t,e),cn(e),r&4){try{ka(3,e,e.return),Vl(3,e)}catch(m){_e(e,e.return,m)}try{ka(5,e,e.return)}catch(m){_e(e,e.return,m)}}break;case 1:Wt(t,e),cn(e),r&512&&n!==null&&vo(n,n.return);break;case 5:if(Wt(t,e),cn(e),r&512&&n!==null&&vo(n,n.return),e.flags&32){var o=e.stateNode;try{Aa(o,"")}catch(m){_e(e,e.return,m)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,l=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{l==="input"&&a.type==="radio"&&a.name!=null&&mm(o,a),_u(l,i);var u=_u(l,a);for(i=0;i<s.length;i+=2){var c=s[i],d=s[i+1];c==="style"?xm(o,d):c==="dangerouslySetInnerHTML"?vm(o,d):c==="children"?Aa(o,d):Vc(o,c,d,u)}switch(l){case"input":ku(o,a);break;case"textarea":gm(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var x=a.value;x!=null?So(o,!!a.multiple,x,!1):f!==!!a.multiple&&(a.defaultValue!=null?So(o,!!a.multiple,a.defaultValue,!0):So(o,!!a.multiple,a.multiple?[]:"",!1))}o[$a]=a}catch(m){_e(e,e.return,m)}}break;case 6:if(Wt(t,e),cn(e),r&4){if(e.stateNode===null)throw Error(N(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(m){_e(e,e.return,m)}}break;case 3:if(Wt(t,e),cn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Fa(t.containerInfo)}catch(m){_e(e,e.return,m)}break;case 4:Wt(t,e),cn(e);break;case 13:Wt(t,e),cn(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(Ed=je())),r&4&&hp(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(tt=(u=tt)||c,Wt(t,e),tt=u):Wt(t,e),cn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&e.mode&1)for(z=e,c=e.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,x=f.child,f.tag){case 0:case 11:case 14:case 15:ka(4,f,f.return);break;case 1:vo(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(m){_e(r,n,m)}}break;case 5:vo(f,f.return);break;case 22:if(f.memoizedState!==null){gp(d);continue}}x!==null?(x.return=f,z=x):gp(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(l=d.stateNode,s=d.memoizedProps.style,i=s!=null&&s.hasOwnProperty("display")?s.display:null,l.style.display=bm("display",i))}catch(m){_e(e,e.return,m)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(m){_e(e,e.return,m)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Wt(t,e),cn(e),r&4&&hp(e);break;case 21:break;default:Wt(t,e),cn(e)}}function cn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(q0(n)){var r=n;break e}n=n.return}throw Error(N(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Aa(o,""),r.flags&=-33);var a=pp(e);ac(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,l=pp(e);oc(e,l,i);break;default:throw Error(N(161))}}catch(s){_e(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function ub(e,t,n){z=e,Y0(e)}function Y0(e,t,n){for(var r=(e.mode&1)!==0;z!==null;){var o=z,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||Ri;if(!i){var l=o.alternate,s=l!==null&&l.memoizedState!==null||tt;l=Ri;var u=tt;if(Ri=i,(tt=s)&&!u)for(z=o;z!==null;)i=z,s=i.child,i.tag===22&&i.memoizedState!==null?yp(o):s!==null?(s.return=i,z=s):yp(o);for(;a!==null;)z=a,Y0(a),a=a.sibling;z=o,Ri=l,tt=u}mp(e)}else o.subtreeFlags&8772&&a!==null?(a.return=o,z=a):mp(e)}}function mp(e){for(;z!==null;){var t=z;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:tt||Vl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!tt)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:Qt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&Jf(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Jf(t,i,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Fa(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(N(163))}tt||t.flags&512&&rc(t)}catch(f){_e(t,t.return,f)}}if(t===e){z=null;break}if(n=t.sibling,n!==null){n.return=t.return,z=n;break}z=t.return}}function gp(e){for(;z!==null;){var t=z;if(t===e){z=null;break}var n=t.sibling;if(n!==null){n.return=t.return,z=n;break}z=t.return}}function yp(e){for(;z!==null;){var t=z;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Vl(4,t)}catch(s){_e(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){_e(t,o,s)}}var a=t.return;try{rc(t)}catch(s){_e(t,a,s)}break;case 5:var i=t.return;try{rc(t)}catch(s){_e(t,i,s)}}}catch(s){_e(t,t.return,s)}if(t===e){z=null;break}var l=t.sibling;if(l!==null){l.return=t.return,z=l;break}z=t.return}}var cb=Math.ceil,Sl=Mn.ReactCurrentDispatcher,wd=Mn.ReactCurrentOwner,Ut=Mn.ReactCurrentBatchConfig,se=0,Be=null,Re=null,Ze=0,kt=0,bo=mr(0),Fe=0,Wa=null,Ir=0,ql=0,Sd=0,Ta=null,ht=null,Ed=0,Fo=1/0,Tn=null,El=!1,ic=null,ir=null,Di=!1,er=null,kl=0,Oa=0,lc=null,Zi=-1,Ki=0;function it(){return se&6?je():Zi!==-1?Zi:Zi=je()}function lr(e){return e.mode&1?se&2&&Ze!==0?Ze&-Ze:G1.transition!==null?(Ki===0&&(Ki=Nm()),Ki):(e=de,e!==0||(e=window.event,e=e===void 0?16:Im(e.type)),e):1}function nn(e,t,n,r){if(50<Oa)throw Oa=0,lc=null,Error(N(185));ei(e,n,r),(!(se&2)||e!==Be)&&(e===Be&&(!(se&2)&&(ql|=n),Fe===4&&Kn(e,Ze)),xt(e,r),n===1&&se===0&&!(t.mode&1)&&(Fo=je()+500,Ul&&gr()))}function xt(e,t){var n=e.callbackNode;Gv(e,t);var r=ll(e,e===Be?Ze:0);if(r===0)n!==null&&Of(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Of(n),t===1)e.tag===0?W1(vp.bind(null,e)):o0(vp.bind(null,e)),B1(function(){!(se&6)&&gr()}),n=null;else{switch(Rm(r)){case 1:n=Qc;break;case 4:n=jm;break;case 16:n=il;break;case 536870912:n=Am;break;default:n=il}n=ng(n,Q0.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Q0(e,t){if(Zi=-1,Ki=0,se&6)throw Error(N(327));var n=e.callbackNode;if(Po()&&e.callbackNode!==n)return null;var r=ll(e,e===Be?Ze:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=Tl(e,r);else{t=r;var o=se;se|=2;var a=K0();(Be!==e||Ze!==t)&&(Tn=null,Fo=je()+500,jr(e,t));do try{pb();break}catch(l){Z0(e,l)}while(!0);sd(),Sl.current=a,se=o,Re!==null?t=0:(Be=null,Ze=0,t=Fe)}if(t!==0){if(t===2&&(o=Du(e),o!==0&&(r=o,t=sc(e,o))),t===1)throw n=Wa,jr(e,0),Kn(e,r),xt(e,je()),n;if(t===6)Kn(e,r);else{if(o=e.current.alternate,!(r&30)&&!db(o)&&(t=Tl(e,r),t===2&&(a=Du(e),a!==0&&(r=a,t=sc(e,a))),t===1))throw n=Wa,jr(e,0),Kn(e,r),xt(e,je()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(N(345));case 2:Sr(e,ht,Tn);break;case 3:if(Kn(e,r),(r&130023424)===r&&(t=Ed+500-je(),10<t)){if(ll(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){it(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Bu(Sr.bind(null,e,ht,Tn),t);break}Sr(e,ht,Tn);break;case 4:if(Kn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-tn(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=je()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*cb(r/1960))-r,10<r){e.timeoutHandle=Bu(Sr.bind(null,e,ht,Tn),r);break}Sr(e,ht,Tn);break;case 5:Sr(e,ht,Tn);break;default:throw Error(N(329))}}}return xt(e,je()),e.callbackNode===n?Q0.bind(null,e):null}function sc(e,t){var n=Ta;return e.current.memoizedState.isDehydrated&&(jr(e,t).flags|=256),e=Tl(e,t),e!==2&&(t=ht,ht=n,t!==null&&uc(t)),e}function uc(e){ht===null?ht=e:ht.push.apply(ht,e)}function db(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!on(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t){for(t&=~Sd,t&=~ql,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-tn(t),r=1<<n;e[n]=-1,t&=~r}}function vp(e){if(se&6)throw Error(N(327));Po();var t=ll(e,0);if(!(t&1))return xt(e,je()),null;var n=Tl(e,t);if(e.tag!==0&&n===2){var r=Du(e);r!==0&&(t=r,n=sc(e,r))}if(n===1)throw n=Wa,jr(e,0),Kn(e,t),xt(e,je()),n;if(n===6)throw Error(N(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,Sr(e,ht,Tn),xt(e,je()),null}function kd(e,t){var n=se;se|=1;try{return e(t)}finally{se=n,se===0&&(Fo=je()+500,Ul&&gr())}}function $r(e){er!==null&&er.tag===0&&!(se&6)&&Po();var t=se;se|=1;var n=Ut.transition,r=de;try{if(Ut.transition=null,de=1,e)return e()}finally{de=r,Ut.transition=n,se=t,!(se&6)&&gr()}}function Td(){kt=bo.current,ve(bo)}function jr(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,U1(n)),Re!==null)for(n=Re.return;n!==null;){var r=n;switch(ad(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&fl();break;case 3:Ro(),ve(vt),ve(nt),hd();break;case 5:pd(r);break;case 4:Ro();break;case 13:ve(Oe);break;case 19:ve(Oe);break;case 10:ud(r.type._context);break;case 22:case 23:Td()}n=n.return}if(Be=e,Re=e=sr(e.current,null),Ze=kt=t,Fe=0,Wa=null,Sd=ql=Ir=0,ht=Ta=null,Tr!==null){for(t=0;t<Tr.length;t++)if(n=Tr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Tr=null}return e}function Z0(e,t){do{var n=Re;try{if(sd(),Gi.current=wl,xl){for(var r=Pe.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}xl=!1}if(zr=0,Ue=De=Pe=null,Ea=!1,Ha=0,wd.current=null,n===null||n.return===null){Fe=1,Wa=t,Re=null;break}e:{var a=e,i=n.return,l=n,s=t;if(t=Ze,l.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var x=ap(i);if(x!==null){x.flags&=-257,ip(x,i,l,a,t),x.mode&1&&op(a,u,t),t=x,s=u;var y=t.updateQueue;if(y===null){var m=new Set;m.add(s),t.updateQueue=m}else y.add(s);break e}else{if(!(t&1)){op(a,u,t),Od();break e}s=Error(N(426))}}else if(ke&&l.mode&1){var E=ap(i);if(E!==null){!(E.flags&65536)&&(E.flags|=256),ip(E,i,l,a,t),id(Do(s,l));break e}}a=s=Do(s,l),Fe!==4&&(Fe=2),Ta===null?Ta=[a]:Ta.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=R0(a,s,t);Xf(a,g);break e;case 1:l=s;var h=a.type,v=a.stateNode;if(!(a.flags&128)&&(typeof h.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(ir===null||!ir.has(v)))){a.flags|=65536,t&=-t,a.lanes|=t;var k=D0(a,l,t);Xf(a,k);break e}}a=a.return}while(a!==null)}J0(n)}catch(j){t=j,Re===n&&n!==null&&(Re=n=n.return);continue}break}while(!0)}function K0(){var e=Sl.current;return Sl.current=wl,e===null?wl:e}function Od(){(Fe===0||Fe===3||Fe===2)&&(Fe=4),Be===null||!(Ir&268435455)&&!(ql&268435455)||Kn(Be,Ze)}function Tl(e,t){var n=se;se|=2;var r=K0();(Be!==e||Ze!==t)&&(Tn=null,jr(e,t));do try{fb();break}catch(o){Z0(e,o)}while(!0);if(sd(),se=n,Sl.current=r,Re!==null)throw Error(N(261));return Be=null,Ze=0,Fe}function fb(){for(;Re!==null;)X0(Re)}function pb(){for(;Re!==null&&!zv();)X0(Re)}function X0(e){var t=tg(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?J0(e):Re=t,wd.current=null}function J0(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=ib(n,t),n!==null){n.flags&=32767,Re=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Fe=6,Re=null;return}}else if(n=ab(n,t,kt),n!==null){Re=n;return}if(t=t.sibling,t!==null){Re=t;return}Re=t=e}while(t!==null);Fe===0&&(Fe=5)}function Sr(e,t,n){var r=de,o=Ut.transition;try{Ut.transition=null,de=1,hb(e,t,n,r)}finally{Ut.transition=o,de=r}return null}function hb(e,t,n,r){do Po();while(er!==null);if(se&6)throw Error(N(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(N(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(Yv(e,a),e===Be&&(Re=Be=null,Ze=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Di||(Di=!0,ng(il,function(){return Po(),null})),a=(n.flags&15990)!==0,n.subtreeFlags&15990||a){a=Ut.transition,Ut.transition=null;var i=de;de=1;var l=se;se|=4,wd.current=null,sb(e,n),G0(n,e),D1($u),sl=!!Iu,$u=Iu=null,e.current=n,ub(n),Iv(),se=l,de=i,Ut.transition=a}else e.current=n;if(Di&&(Di=!1,er=e,kl=o),a=e.pendingLanes,a===0&&(ir=null),Bv(n.stateNode),xt(e,je()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(El)throw El=!1,e=ic,ic=null,e;return kl&1&&e.tag!==0&&Po(),a=e.pendingLanes,a&1?e===lc?Oa++:(Oa=0,lc=e):Oa=0,gr(),null}function Po(){if(er!==null){var e=Rm(kl),t=Ut.transition,n=de;try{if(Ut.transition=null,de=16>e?16:e,er===null)var r=!1;else{if(e=er,er=null,kl=0,se&6)throw Error(N(331));var o=se;for(se|=4,z=e.current;z!==null;){var a=z,i=a.child;if(z.flags&16){var l=a.deletions;if(l!==null){for(var s=0;s<l.length;s++){var u=l[s];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:ka(8,c,a)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,x=c.return;if(V0(c),c===u){z=null;break}if(f!==null){f.return=x,z=f;break}z=x}}}var y=a.alternate;if(y!==null){var m=y.child;if(m!==null){y.child=null;do{var E=m.sibling;m.sibling=null,m=E}while(m!==null)}}z=a}}if(a.subtreeFlags&2064&&i!==null)i.return=a,z=i;else e:for(;z!==null;){if(a=z,a.flags&2048)switch(a.tag){case 0:case 11:case 15:ka(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}var h=e.current;for(z=h;z!==null;){i=z;var v=i.child;if(i.subtreeFlags&2064&&v!==null)v.return=i,z=v;else e:for(i=h;z!==null;){if(l=z,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Vl(9,l)}}catch(j){_e(l,l.return,j)}if(l===i){z=null;break e}var k=l.sibling;if(k!==null){k.return=l.return,z=k;break e}z=l.return}}if(se=o,gr(),mn&&typeof mn.onPostCommitFiberRoot=="function")try{mn.onPostCommitFiberRoot(Ll,e)}catch{}r=!0}return r}finally{de=n,Ut.transition=t}}return!1}function bp(e,t,n){t=Do(n,t),t=R0(e,t,1),e=ar(e,t,1),t=it(),e!==null&&(ei(e,1,t),xt(e,t))}function _e(e,t,n){if(e.tag===3)bp(e,e,n);else for(;t!==null;){if(t.tag===3){bp(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(ir===null||!ir.has(r))){e=Do(n,e),e=D0(t,e,1),t=ar(t,e,1),e=it(),t!==null&&(ei(t,1,e),xt(t,e));break}}t=t.return}}function mb(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=it(),e.pingedLanes|=e.suspendedLanes&n,Be===e&&(Ze&n)===n&&(Fe===4||Fe===3&&(Ze&130023424)===Ze&&500>je()-Ed?jr(e,0):Sd|=n),xt(e,t)}function eg(e,t){t===0&&(e.mode&1?(t=ki,ki<<=1,!(ki&130023424)&&(ki=4194304)):t=1);var n=it();e=Dn(e,t),e!==null&&(ei(e,t,n),xt(e,n))}function gb(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),eg(e,n)}function yb(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(N(314))}r!==null&&r.delete(t),eg(e,n)}var tg;tg=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||vt.current)gt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return gt=!1,ob(e,t,n);gt=!!(e.flags&131072)}else gt=!1,ke&&t.flags&1048576&&a0(t,ml,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Qi(e,t),e=t.pendingProps;var o=jo(t,nt.current);Oo(t,n),o=gd(null,t,r,e,o,n);var a=yd();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,bt(r)?(a=!0,pl(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,dd(t),o.updater=Hl,t.stateNode=o,o._reactInternals=t,Qu(t,r,e,n),t=Xu(null,t,r,!0,a,n)):(t.tag=0,ke&&a&&od(t),at(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Qi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=bb(r),e=Qt(r,e),o){case 0:t=Ku(null,t,r,e,n);break e;case 1:t=up(null,t,r,e,n);break e;case 11:t=lp(null,t,r,e,n);break e;case 14:t=sp(null,t,r,Qt(r.type,e),n);break e}throw Error(N(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),Ku(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),up(e,t,r,o,n);case 3:e:{if(z0(t),e===null)throw Error(N(387));r=t.pendingProps,a=t.memoizedState,o=a.element,d0(e,t),vl(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=Do(Error(N(423)),t),t=cp(e,t,r,n,o);break e}else if(r!==o){o=Do(Error(N(424)),t),t=cp(e,t,r,n,o);break e}else for(Tt=or(t.stateNode.containerInfo.firstChild),Ct=t,ke=!0,Xt=null,n=u0(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ao(),r===o){t=Fn(e,t,n);break e}at(e,t,r,n)}t=t.child}return t;case 5:return f0(t),e===null&&Wu(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,Uu(r,o)?i=null:a!==null&&Uu(r,a)&&(t.flags|=32),M0(e,t),at(e,t,i,n),t.child;case 6:return e===null&&Wu(t),null;case 13:return I0(e,t,n);case 4:return fd(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=No(t,null,r,n):at(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),lp(e,t,r,o,n);case 7:return at(e,t,t.pendingProps,n),t.child;case 8:return at(e,t,t.pendingProps.children,n),t.child;case 12:return at(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,me(gl,r._currentValue),r._currentValue=i,a!==null)if(on(a.value,i)){if(a.children===o.children&&!vt.current){t=Fn(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var l=a.dependencies;if(l!==null){i=a.child;for(var s=l.firstContext;s!==null;){if(s.context===r){if(a.tag===1){s=jn(-1,n&-n),s.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?s.next=s:(s.next=c.next,c.next=s),u.pending=s}}a.lanes|=n,s=a.alternate,s!==null&&(s.lanes|=n),Gu(a.return,n,t),l.lanes|=n;break}s=s.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(N(341));i.lanes|=n,l=i.alternate,l!==null&&(l.lanes|=n),Gu(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}at(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Oo(t,n),o=Ht(o),r=r(o),t.flags|=1,at(e,t,r,n),t.child;case 14:return r=t.type,o=Qt(r,t.pendingProps),o=Qt(r.type,o),sp(e,t,r,o,n);case 15:return F0(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:Qt(r,o),Qi(e,t),t.tag=1,bt(r)?(e=!0,pl(t)):e=!1,Oo(t,n),N0(t,r,o),Qu(t,r,o,n),Xu(null,t,r,!0,e,n);case 19:return $0(e,t,n);case 22:return L0(e,t,n)}throw Error(N(156,t.tag))};function ng(e,t){return _m(e,t)}function vb(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function $t(e,t,n,r){return new vb(e,t,n,r)}function Pd(e){return e=e.prototype,!(!e||!e.isReactComponent)}function bb(e){if(typeof e=="function")return Pd(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Wc)return 11;if(e===Gc)return 14}return 2}function sr(e,t){var n=e.alternate;return n===null?(n=$t(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Xi(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")Pd(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case so:return Ar(n.children,o,a,t);case qc:i=8,o|=8;break;case bu:return e=$t(12,n,t,o|2),e.elementType=bu,e.lanes=a,e;case xu:return e=$t(13,n,t,o),e.elementType=xu,e.lanes=a,e;case wu:return e=$t(19,n,t,o),e.elementType=wu,e.lanes=a,e;case fm:return Wl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case cm:i=10;break e;case dm:i=9;break e;case Wc:i=11;break e;case Gc:i=14;break e;case Yn:i=16,r=null;break e}throw Error(N(130,e==null?e:typeof e,""))}return t=$t(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Ar(e,t,n,r){return e=$t(7,e,r,t),e.lanes=n,e}function Wl(e,t,n,r){return e=$t(22,e,r,t),e.elementType=fm,e.lanes=n,e.stateNode={isHidden:!1},e}function eu(e,t,n){return e=$t(6,e,null,t),e.lanes=n,e}function tu(e,t,n){return t=$t(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function xb(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Fs(0),this.expirationTimes=Fs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Fs(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Cd(e,t,n,r,o,a,i,l,s){return e=new xb(e,t,n,l,s),t===1?(t=1,a===!0&&(t|=8)):t=0,a=$t(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(a),e}function wb(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:lo,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function rg(e){if(!e)return dr;e=e._reactInternals;e:{if(Wr(e)!==e||e.tag!==1)throw Error(N(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(bt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(N(171))}if(e.tag===1){var n=e.type;if(bt(n))return r0(e,n,t)}return t}function og(e,t,n,r,o,a,i,l,s){return e=Cd(n,r,!0,e,o,a,i,l,s),e.context=rg(null),n=e.current,r=it(),o=lr(n),a=jn(r,o),a.callback=t??null,ar(n,a,o),e.current.lanes=o,ei(e,o,r),xt(e,r),e}function Gl(e,t,n,r){var o=t.current,a=it(),i=lr(o);return n=rg(n),t.context===null?t.context=n:t.pendingContext=n,t=jn(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=ar(o,t,i),e!==null&&(nn(e,o,i,a),Wi(e,o,i)),i}function Ol(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function xp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function _d(e,t){xp(e,t),(e=e.alternate)&&xp(e,t)}function Sb(){return null}var ag=typeof reportError=="function"?reportError:function(e){console.error(e)};function jd(e){this._internalRoot=e}Yl.prototype.render=jd.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(N(409));Gl(e,t,null,null)};Yl.prototype.unmount=jd.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$r(function(){Gl(null,e,null,null)}),t[Rn]=null}};function Yl(e){this._internalRoot=e}Yl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Lm();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Zn.length&&t!==0&&t<Zn[n].priority;n++);Zn.splice(n,0,e),n===0&&zm(e)}};function Ad(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ql(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function wp(){}function Eb(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=Ol(i);a.call(u)}}var i=og(t,r,e,0,null,!1,!1,"",wp);return e._reactRootContainer=i,e[Rn]=i.current,za(e.nodeType===8?e.parentNode:e),$r(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var l=r;r=function(){var u=Ol(s);l.call(u)}}var s=Cd(e,0,!1,null,null,!1,!1,"",wp);return e._reactRootContainer=s,e[Rn]=s.current,za(e.nodeType===8?e.parentNode:e),$r(function(){Gl(t,s,n,r)}),s}function Zl(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var l=o;o=function(){var s=Ol(i);l.call(s)}}Gl(t,i,e,o)}else i=Eb(n,t,e,o,r);return Ol(i)}Dm=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ma(t.pendingLanes);n!==0&&(Zc(t,n|1),xt(t,je()),!(se&6)&&(Fo=je()+500,gr()))}break;case 13:$r(function(){var r=Dn(e,1);if(r!==null){var o=it();nn(r,e,1,o)}}),_d(e,1)}};Kc=function(e){if(e.tag===13){var t=Dn(e,134217728);if(t!==null){var n=it();nn(t,e,134217728,n)}_d(e,134217728)}};Fm=function(e){if(e.tag===13){var t=lr(e),n=Dn(e,t);if(n!==null){var r=it();nn(n,e,t,r)}_d(e,t)}};Lm=function(){return de};Mm=function(e,t){var n=de;try{return de=e,t()}finally{de=n}};Au=function(e,t,n){switch(t){case"input":if(ku(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=$l(r);if(!o)throw Error(N(90));hm(r),ku(r,o)}}}break;case"textarea":gm(e,n);break;case"select":t=n.value,t!=null&&So(e,!!n.multiple,t,!1)}};Em=kd;km=$r;var kb={usingClientEntryPoint:!1,Events:[ni,po,$l,wm,Sm,kd]},aa={findFiberByHostInstance:kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tb={bundleType:aa.bundleType,version:aa.version,rendererPackageName:aa.rendererPackageName,rendererConfig:aa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Pm(e),e===null?null:e.stateNode},findFiberByHostInstance:aa.findFiberByHostInstance||Sb,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Fi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Fi.isDisabled&&Fi.supportsFiber)try{Ll=Fi.inject(Tb),mn=Fi}catch{}}jt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=kb;jt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(t))throw Error(N(200));return wb(e,t,null,n)};jt.createRoot=function(e,t){if(!Ad(e))throw Error(N(299));var n=!1,r="",o=ag;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Cd(e,1,!1,null,null,n,!1,r,o),e[Rn]=t.current,za(e.nodeType===8?e.parentNode:e),new jd(t)};jt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(N(188)):(e=Object.keys(e).join(","),Error(N(268,e)));return e=Pm(t),e=e===null?null:e.stateNode,e};jt.flushSync=function(e){return $r(e)};jt.hydrate=function(e,t,n){if(!Ql(t))throw Error(N(200));return Zl(null,e,t,!0,n)};jt.hydrateRoot=function(e,t,n){if(!Ad(e))throw Error(N(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=ag;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=og(t,null,e,1,n??null,o,!1,a,i),e[Rn]=t.current,za(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Yl(t)};jt.render=function(e,t,n){if(!Ql(t))throw Error(N(200));return Zl(null,e,t,!1,n)};jt.unmountComponentAtNode=function(e){if(!Ql(e))throw Error(N(40));return e._reactRootContainer?($r(function(){Zl(null,null,e,!1,function(){e._reactRootContainer=null,e[Rn]=null})}),!0):!1};jt.unstable_batchedUpdates=kd;jt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ql(n))throw Error(N(200));if(e==null||e._reactInternals===void 0)throw Error(N(38));return Zl(e,t,n,!1,r)};jt.version="18.3.1-next-f1338f8080-20240426";function ig(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ig)}catch(e){console.error(e)}}ig(),im.exports=jt;var Nd=im.exports;const Ob=pr(Nd),Pb=Yh({__proto__:null,default:Ob},[Nd]);var Sp=Nd;yu.createRoot=Sp.createRoot,yu.hydrateRoot=Sp.hydrateRoot;/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Te(){return Te=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Te.apply(this,arguments)}var Ne;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Ne||(Ne={}));const Ep="popstate";function Cb(e){e===void 0&&(e={});function t(o,a){let{pathname:i="/",search:l="",hash:s=""}=zn(o.location.hash.substr(1));return!i.startsWith("/")&&!i.startsWith(".")&&(i="/"+i),Ga("",{pathname:i,search:l,hash:s},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(o,a){let i=o.document.querySelector("base"),l="";if(i&&i.getAttribute("href")){let s=o.location.href,u=s.indexOf("#");l=u===-1?s:s.slice(0,u)}return l+"#"+(typeof a=="string"?a:Br(a))}function r(o,a){Ur(o.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(a)+")")}return jb(t,n,r,e)}function te(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ur(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function _b(){return Math.random().toString(36).substr(2,8)}function kp(e,t){return{usr:e.state,key:e.key,idx:t}}function Ga(e,t,n,r){return n===void 0&&(n=null),Te({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?zn(t):t,{state:n,key:t&&t.key||r||_b()})}function Br(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function zn(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function jb(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:a=!1}=r,i=o.history,l=Ne.Pop,s=null,u=c();u==null&&(u=0,i.replaceState(Te({},i.state,{idx:u}),""));function c(){return(i.state||{idx:null}).idx}function d(){l=Ne.Pop;let E=c(),g=E==null?null:E-u;u=E,s&&s({action:l,location:m.location,delta:g})}function f(E,g){l=Ne.Push;let h=Ga(m.location,E,g);n&&n(h,E),u=c()+1;let v=kp(h,u),k=m.createHref(h);try{i.pushState(v,"",k)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;o.location.assign(k)}a&&s&&s({action:l,location:m.location,delta:1})}function x(E,g){l=Ne.Replace;let h=Ga(m.location,E,g);n&&n(h,E),u=c();let v=kp(h,u),k=m.createHref(h);i.replaceState(v,"",k),a&&s&&s({action:l,location:m.location,delta:0})}function y(E){let g=o.location.origin!=="null"?o.location.origin:o.location.href,h=typeof E=="string"?E:Br(E);return h=h.replace(/ $/,"%20"),te(g,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,g)}let m={get action(){return l},get location(){return e(o,i)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Ep,d),s=E,()=>{o.removeEventListener(Ep,d),s=null}},createHref(E){return t(o,E)},createURL:y,encodeLocation(E){let g=y(E);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:f,replace:x,go(E){return i.go(E)}};return m}var Ee;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Ee||(Ee={}));const Ab=new Set(["lazy","caseSensitive","path","id","index","children"]);function Nb(e){return e.index===!0}function cc(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,a)=>{let i=[...n,a],l=typeof o.id=="string"?o.id:i.join("-");if(te(o.index!==!0||!o.children,"Cannot specify children on an index route"),te(!r[l],'Found a route id collision on id "'+l+`".  Route id's must be globally unique within Data Router usages`),Nb(o)){let s=Te({},o,t(o),{id:l});return r[l]=s,s}else{let s=Te({},o,t(o),{id:l,children:void 0});return r[l]=s,o.children&&(s.children=cc(o.children,t,i,r)),s}})}function xo(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?zn(t):t,o=Ln(r.pathname||"/",n);if(o==null)return null;let a=lg(e);Db(a);let i=null;for(let l=0;i==null&&l<a.length;++l){let s=qb(o);i=Hb(a[l],s)}return i}function Rb(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function lg(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(a,i,l)=>{let s={relativePath:l===void 0?a.path||"":l,caseSensitive:a.caseSensitive===!0,childrenIndex:i,route:a};s.relativePath.startsWith("/")&&(te(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=An([r,s.relativePath]),c=n.concat(s);a.children&&a.children.length>0&&(te(a.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lg(a.children,t,c,u)),!(a.path==null&&!a.index)&&t.push({path:u,score:Ub(u,a.index),routesMeta:c})};return e.forEach((a,i)=>{var l;if(a.path===""||!((l=a.path)!=null&&l.includes("?")))o(a,i);else for(let s of sg(a.path))o(a,i,s)}),t}function sg(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),a=n.replace(/\?$/,"");if(r.length===0)return o?[a,""]:[a];let i=sg(r.join("/")),l=[];return l.push(...i.map(s=>s===""?a:[a,s].join("/"))),o&&l.push(...i),l.map(s=>e.startsWith("/")&&s===""?"/":s)}function Db(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Bb(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Fb=/^:[\w-]+$/,Lb=3,Mb=2,zb=1,Ib=10,$b=-2,Tp=e=>e==="*";function Ub(e,t){let n=e.split("/"),r=n.length;return n.some(Tp)&&(r+=$b),t&&(r+=Mb),n.filter(o=>!Tp(o)).reduce((o,a)=>o+(Fb.test(a)?Lb:a===""?zb:Ib),r)}function Bb(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Hb(e,t){let{routesMeta:n}=e,r={},o="/",a=[];for(let i=0;i<n.length;++i){let l=n[i],s=i===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",c=dc({path:l.relativePath,caseSensitive:l.caseSensitive,end:s},u);if(!c)return null;Object.assign(r,c.params);let d=l.route;a.push({params:r,pathname:An([o,c.pathname]),pathnameBase:Yb(An([o,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(o=An([o,c.pathnameBase]))}return a}function dc(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Vb(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let a=o[0],i=a.replace(/(.)\/+$/,"$1"),l=o.slice(1);return{params:r.reduce((u,c,d)=>{let{paramName:f,isOptional:x}=c;if(f==="*"){let m=l[d]||"";i=a.slice(0,a.length-m.length).replace(/(.)\/+$/,"$1")}const y=l[d];return x&&!y?u[f]=void 0:u[f]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:a,pathnameBase:i,pattern:e}}function Vb(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ur(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(i,l,s)=>(r.push({paramName:l,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function qb(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ur(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Ln(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Wb(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?zn(e):e;return{pathname:n?n.startsWith("/")?n:Gb(n,t):t,search:Qb(r),hash:Zb(o)}}function Gb(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function nu(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function ug(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Kl(e,t){let n=ug(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function Xl(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=zn(e):(o=Te({},e),te(!o.pathname||!o.pathname.includes("?"),nu("?","pathname","search",o)),te(!o.pathname||!o.pathname.includes("#"),nu("#","pathname","hash",o)),te(!o.search||!o.search.includes("#"),nu("#","search","hash",o)));let a=e===""||o.pathname==="",i=a?"/":o.pathname,l;if(i==null)l=n;else{let d=t.length-1;if(!r&&i.startsWith("..")){let f=i.split("/");for(;f[0]==="..";)f.shift(),d-=1;o.pathname=f.join("/")}l=d>=0?t[d]:"/"}let s=Wb(o,l),u=i&&i!=="/"&&i.endsWith("/"),c=(a||i===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||c)&&(s.pathname+="/"),s}const An=e=>e.join("/").replace(/\/\/+/g,"/"),Yb=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Qb=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Zb=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class Rd{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Dd(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const cg=["post","put","patch","delete"],Kb=new Set(cg),Xb=["get",...cg],Jb=new Set(Xb),ex=new Set([301,302,303,307,308]),tx=new Set([307,308]),ru={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},nx={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},ia={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},Fd=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rx=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),dg="remix-router-transitions";function ox(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;te(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let S=e.detectErrorBoundary;o=T=>({hasErrorBoundary:S(T)})}else o=rx;let a={},i=cc(e.routes,o,void 0,a),l,s=e.basename||"/",u=e.unstable_dataStrategy||sx,c=Te({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),d=null,f=new Set,x=null,y=null,m=null,E=e.hydrationData!=null,g=xo(i,e.history.location,s),h=null;if(g==null){let S=Lt(404,{pathname:e.history.location.pathname}),{matches:T,route:_}=Fp(i);g=T,h={[_.id]:S}}let v,k=g.some(S=>S.route.lazy),j=g.some(S=>S.route.loader);if(k)v=!1;else if(!j)v=!0;else if(c.v7_partialHydration){let S=e.hydrationData?e.hydrationData.loaderData:null,T=e.hydrationData?e.hydrationData.errors:null,_=D=>D.route.loader?typeof D.route.loader=="function"&&D.route.loader.hydrate===!0?!1:S&&S[D.route.id]!==void 0||T&&T[D.route.id]!==void 0:!0;if(T){let D=g.findIndex(I=>T[I.route.id]!==void 0);v=g.slice(0,D+1).every(_)}else v=g.every(_)}else v=e.hydrationData!=null;let C,b={historyAction:e.history.action,location:e.history.location,matches:g,initialized:v,navigation:ru,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||h,fetchers:new Map,blockers:new Map},A=Ne.Pop,F=!1,L,U=!1,ue=new Map,ne=null,pe=!1,ut=!1,ln=[],sn=[],R=new Map,W=0,G=-1,le=new Map,ae=new Set,ct=new Map,Ve=new Map,Ae=new Set,Me=new Map,Xe=new Map,Xr=!1;function ci(){if(d=e.history.listen(S=>{let{action:T,location:_,delta:D}=S;if(Xr){Xr=!1;return}Ur(Xe.size===0||D!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let I=cf({currentLocation:b.location,nextLocation:_,historyAction:T});if(I&&D!=null){Xr=!0,e.history.go(D*-1),mi(I,{state:"blocked",location:_,proceed(){mi(I,{state:"proceeding",proceed:void 0,reset:void 0,location:_}),e.history.go(D)},reset(){let X=new Map(b.blockers);X.set(I,ia),rt({blockers:X})}});return}return xn(T,_)}),n){xx(t,ue);let S=()=>wx(t,ue);t.addEventListener("pagehide",S),ne=()=>t.removeEventListener("pagehide",S)}return b.initialized||xn(Ne.Pop,b.location,{initialHydration:!0}),C}function di(){d&&d(),ne&&ne(),f.clear(),L&&L.abort(),b.fetchers.forEach((S,T)=>dt(T)),b.blockers.forEach((S,T)=>uf(T))}function Wo(S){return f.add(S),()=>f.delete(S)}function rt(S,T){T===void 0&&(T={}),b=Te({},b,S);let _=[],D=[];c.v7_fetcherPersist&&b.fetchers.forEach((I,X)=>{I.state==="idle"&&(Ae.has(X)?D.push(X):_.push(X))}),[...f].forEach(I=>I(b,{deletedFetchers:D,unstable_viewTransitionOpts:T.viewTransitionOpts,unstable_flushSync:T.flushSync===!0})),c.v7_fetcherPersist&&(_.forEach(I=>b.fetchers.delete(I)),D.forEach(I=>dt(I)))}function Un(S,T,_){var D,I;let{flushSync:X}=_===void 0?{}:_,q=b.actionData!=null&&b.navigation.formMethod!=null&&Kt(b.navigation.formMethod)&&b.navigation.state==="loading"&&((D=S.state)==null?void 0:D._isRedirect)!==!0,$;T.actionData?Object.keys(T.actionData).length>0?$=T.actionData:$=null:q?$=b.actionData:$=null;let ee=T.loaderData?Rp(b.loaderData,T.loaderData,T.matches||[],T.errors):b.loaderData,Z=b.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((Q,be)=>Z.set(be,ia)));let qe=F===!0||b.navigation.formMethod!=null&&Kt(b.navigation.formMethod)&&((I=S.state)==null?void 0:I._isRedirect)!==!0;l&&(i=l,l=void 0),pe||A===Ne.Pop||(A===Ne.Push?e.history.push(S,S.state):A===Ne.Replace&&e.history.replace(S,S.state));let We;if(A===Ne.Pop){let Q=ue.get(b.location.pathname);Q&&Q.has(S.pathname)?We={currentLocation:b.location,nextLocation:S}:ue.has(S.pathname)&&(We={currentLocation:S,nextLocation:b.location})}else if(U){let Q=ue.get(b.location.pathname);Q?Q.add(S.pathname):(Q=new Set([S.pathname]),ue.set(b.location.pathname,Q)),We={currentLocation:b.location,nextLocation:S}}rt(Te({},T,{actionData:$,loaderData:ee,historyAction:A,location:S,initialized:!0,navigation:ru,revalidation:"idle",restoreScrollPosition:ff(S,T.matches||b.matches),preventScrollReset:qe,blockers:Z}),{viewTransitionOpts:We,flushSync:X===!0}),A=Ne.Pop,F=!1,U=!1,pe=!1,ut=!1,ln=[],sn=[]}async function fi(S,T){if(typeof S=="number"){e.history.go(S);return}let _=fc(b.location,b.matches,s,c.v7_prependBasename,S,c.v7_relativeSplatPath,T==null?void 0:T.fromRouteId,T==null?void 0:T.relative),{path:D,submission:I,error:X}=Op(c.v7_normalizeFormMethod,!1,_,T),q=b.location,$=Ga(b.location,D,T&&T.state);$=Te({},$,e.history.encodeLocation($));let ee=T&&T.replace!=null?T.replace:void 0,Z=Ne.Push;ee===!0?Z=Ne.Replace:ee===!1||I!=null&&Kt(I.formMethod)&&I.formAction===b.location.pathname+b.location.search&&(Z=Ne.Replace);let qe=T&&"preventScrollReset"in T?T.preventScrollReset===!0:void 0,We=(T&&T.unstable_flushSync)===!0,Q=cf({currentLocation:q,nextLocation:$,historyAction:Z});if(Q){mi(Q,{state:"blocked",location:$,proceed(){mi(Q,{state:"proceeding",proceed:void 0,reset:void 0,location:$}),fi(S,T)},reset(){let be=new Map(b.blockers);be.set(Q,ia),rt({blockers:be})}});return}return await xn(Z,$,{submission:I,pendingError:X,preventScrollReset:qe,replace:T&&T.replace,enableViewTransition:T&&T.unstable_viewTransition,flushSync:We})}function ks(){if(V(),rt({revalidation:"loading"}),b.navigation.state!=="submitting"){if(b.navigation.state==="idle"){xn(b.historyAction,b.location,{startUninterruptedRevalidation:!0});return}xn(A||b.historyAction,b.navigation.location,{overrideNavigation:b.navigation})}}async function xn(S,T,_){L&&L.abort(),L=null,A=S,pe=(_&&_.startUninterruptedRevalidation)===!0,Zy(b.location,b.matches),F=(_&&_.preventScrollReset)===!0,U=(_&&_.enableViewTransition)===!0;let D=l||i,I=_&&_.overrideNavigation,X=xo(D,T,s),q=(_&&_.flushSync)===!0;if(!X){let Q=Lt(404,{pathname:T.pathname}),{matches:be,route:Ie}=Fp(D);_s(),Un(T,{matches:be,loaderData:{},errors:{[Ie.id]:Q}},{flushSync:q});return}if(b.initialized&&!ut&&hx(b.location,T)&&!(_&&_.submission&&Kt(_.submission.formMethod))){Un(T,{matches:X},{flushSync:q});return}L=new AbortController;let $=ro(e.history,T,L.signal,_&&_.submission),ee;if(_&&_.pendingError)ee=[Pa(X).route.id,{type:Ee.error,error:_.pendingError}];else if(_&&_.submission&&Kt(_.submission.formMethod)){let Q=await Ts($,T,_.submission,X,{replace:_.replace,flushSync:q});if(Q.shortCircuited)return;ee=Q.pendingActionResult,I=ou(T,_.submission),q=!1,$=ro(e.history,$.url,$.signal)}let{shortCircuited:Z,loaderData:qe,errors:We}=await Os($,T,X,I,_&&_.submission,_&&_.fetcherSubmission,_&&_.replace,_&&_.initialHydration===!0,q,ee);Z||(L=null,Un(T,Te({matches:X},Dp(ee),{loaderData:qe,errors:We})))}async function Ts(S,T,_,D,I){I===void 0&&(I={}),V();let X=vx(T,_);rt({navigation:X},{flushSync:I.flushSync===!0});let q,$=hc(D,T);if(!$.route.action&&!$.route.lazy)q={type:Ee.error,error:Lt(405,{method:S.method,pathname:T.pathname,routeId:$.route.id})};else if(q=(await M("action",S,[$],D))[0],S.signal.aborted)return{shortCircuited:!0};if(Cr(q)){let ee;return I&&I.replace!=null?ee=I.replace:ee=jp(q.response.headers.get("Location"),new URL(S.url),s)===b.location.pathname+b.location.search,await O(S,q,{submission:_,replace:ee}),{shortCircuited:!0}}if(Pr(q))throw Lt(400,{type:"defer-action"});if(It(q)){let ee=Pa(D,$.route.id);return(I&&I.replace)!==!0&&(A=Ne.Push),{pendingActionResult:[ee.route.id,q]}}return{pendingActionResult:[$.route.id,q]}}async function Os(S,T,_,D,I,X,q,$,ee,Z){let qe=D||ou(T,I),We=I||X||zp(qe),Q=l||i,[be,Ie]=Pp(e.history,b,_,We,T,c.v7_partialHydration&&$===!0,c.unstable_skipActionErrorRevalidation,ut,ln,sn,Ae,ct,ae,Q,s,Z);if(_s(ie=>!(_&&_.some(ot=>ot.route.id===ie))||be&&be.some(ot=>ot.route.id===ie)),G=++W,be.length===0&&Ie.length===0){let ie=Qo();return Un(T,Te({matches:_,loaderData:{},errors:Z&&It(Z[1])?{[Z[0]]:Z[1].error}:null},Dp(Z),ie?{fetchers:new Map(b.fetchers)}:{}),{flushSync:ee}),{shortCircuited:!0}}if(!pe&&(!c.v7_partialHydration||!$)){Ie.forEach(ot=>{let Dt=b.fetchers.get(ot.key),Ge=la(void 0,Dt?Dt.data:void 0);b.fetchers.set(ot.key,Ge)});let ie;Z&&!It(Z[1])?ie={[Z[0]]:Z[1].data}:b.actionData&&(Object.keys(b.actionData).length===0?ie=null:ie=b.actionData),rt(Te({navigation:qe},ie!==void 0?{actionData:ie}:{},Ie.length>0?{fetchers:new Map(b.fetchers)}:{}),{flushSync:ee})}Ie.forEach(ie=>{R.has(ie.key)&&Rt(ie.key),ie.controller&&R.set(ie.key,ie.controller)});let Zo=()=>Ie.forEach(ie=>Rt(ie.key));L&&L.signal.addEventListener("abort",Zo);let{loaderResults:Bn,fetcherResults:Jr}=await B(b.matches,_,be,Ie,S);if(S.signal.aborted)return{shortCircuited:!0};L&&L.signal.removeEventListener("abort",Zo),Ie.forEach(ie=>R.delete(ie.key));let eo=Lp([...Bn,...Jr]);if(eo){if(eo.idx>=be.length){let ie=Ie[eo.idx-be.length].key;ae.add(ie)}return await O(S,eo.result,{replace:q}),{shortCircuited:!0}}let{loaderData:to,errors:un}=Np(b,_,be,Bn,Z,Ie,Jr,Me);Me.forEach((ie,ot)=>{ie.subscribe(Dt=>{(Dt||ie.done)&&Me.delete(ot)})}),c.v7_partialHydration&&$&&b.errors&&Object.entries(b.errors).filter(ie=>{let[ot]=ie;return!be.some(Dt=>Dt.route.id===ot)}).forEach(ie=>{let[ot,Dt]=ie;un=Object.assign(un||{},{[ot]:Dt})});let gi=Qo(),yi=hi(G),vi=gi||yi||Ie.length>0;return Te({loaderData:to,errors:un},vi?{fetchers:new Map(b.fetchers)}:{})}function Go(S,T,_,D){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");R.has(S)&&Rt(S);let I=(D&&D.unstable_flushSync)===!0,X=l||i,q=fc(b.location,b.matches,s,c.v7_prependBasename,_,c.v7_relativeSplatPath,T,D==null?void 0:D.relative),$=xo(X,q,s);if(!$){oe(S,T,Lt(404,{pathname:q}),{flushSync:I});return}let{path:ee,submission:Z,error:qe}=Op(c.v7_normalizeFormMethod,!0,q,D);if(qe){oe(S,T,qe,{flushSync:I});return}let We=hc($,ee);if(F=(D&&D.preventScrollReset)===!0,Z&&Kt(Z.formMethod)){Ps(S,T,ee,We,$,I,Z);return}ct.set(S,{routeId:T,path:ee}),Cs(S,T,ee,We,$,I,Z)}async function Ps(S,T,_,D,I,X,q){if(V(),ct.delete(S),!D.route.action&&!D.route.lazy){let Ge=Lt(405,{method:q.formMethod,pathname:_,routeId:T});oe(S,T,Ge,{flushSync:X});return}let $=b.fetchers.get(S);Y(S,bx(q,$),{flushSync:X});let ee=new AbortController,Z=ro(e.history,_,ee.signal,q);R.set(S,ee);let qe=W,Q=(await M("action",Z,[D],I))[0];if(Z.signal.aborted){R.get(S)===ee&&R.delete(S);return}if(c.v7_fetcherPersist&&Ae.has(S)){if(Cr(Q)||It(Q)){Y(S,Gn(void 0));return}}else{if(Cr(Q))if(R.delete(S),G>qe){Y(S,Gn(void 0));return}else return ae.add(S),Y(S,la(q)),O(Z,Q,{fetcherSubmission:q});if(It(Q)){oe(S,T,Q.error);return}}if(Pr(Q))throw Lt(400,{type:"defer-action"});let be=b.navigation.location||b.location,Ie=ro(e.history,be,ee.signal),Zo=l||i,Bn=b.navigation.state!=="idle"?xo(Zo,b.navigation.location,s):b.matches;te(Bn,"Didn't find any matches after fetcher action");let Jr=++W;le.set(S,Jr);let eo=la(q,Q.data);b.fetchers.set(S,eo);let[to,un]=Pp(e.history,b,Bn,q,be,!1,c.unstable_skipActionErrorRevalidation,ut,ln,sn,Ae,ct,ae,Zo,s,[D.route.id,Q]);un.filter(Ge=>Ge.key!==S).forEach(Ge=>{let Ko=Ge.key,pf=b.fetchers.get(Ko),Xy=la(void 0,pf?pf.data:void 0);b.fetchers.set(Ko,Xy),R.has(Ko)&&Rt(Ko),Ge.controller&&R.set(Ko,Ge.controller)}),rt({fetchers:new Map(b.fetchers)});let gi=()=>un.forEach(Ge=>Rt(Ge.key));ee.signal.addEventListener("abort",gi);let{loaderResults:yi,fetcherResults:vi}=await B(b.matches,Bn,to,un,Ie);if(ee.signal.aborted)return;ee.signal.removeEventListener("abort",gi),le.delete(S),R.delete(S),un.forEach(Ge=>R.delete(Ge.key));let ie=Lp([...yi,...vi]);if(ie){if(ie.idx>=to.length){let Ge=un[ie.idx-to.length].key;ae.add(Ge)}return O(Ie,ie.result)}let{loaderData:ot,errors:Dt}=Np(b,b.matches,to,yi,void 0,un,vi,Me);if(b.fetchers.has(S)){let Ge=Gn(Q.data);b.fetchers.set(S,Ge)}hi(Jr),b.navigation.state==="loading"&&Jr>G?(te(A,"Expected pending action"),L&&L.abort(),Un(b.navigation.location,{matches:Bn,loaderData:ot,errors:Dt,fetchers:new Map(b.fetchers)})):(rt({errors:Dt,loaderData:Rp(b.loaderData,ot,Bn,Dt),fetchers:new Map(b.fetchers)}),ut=!1)}async function Cs(S,T,_,D,I,X,q){let $=b.fetchers.get(S);Y(S,la(q,$?$.data:void 0),{flushSync:X});let ee=new AbortController,Z=ro(e.history,_,ee.signal);R.set(S,ee);let qe=W,Q=(await M("loader",Z,[D],I))[0];if(Pr(Q)&&(Q=await mg(Q,Z.signal,!0)||Q),R.get(S)===ee&&R.delete(S),!Z.signal.aborted){if(Ae.has(S)){Y(S,Gn(void 0));return}if(Cr(Q))if(G>qe){Y(S,Gn(void 0));return}else{ae.add(S),await O(Z,Q);return}if(It(Q)){oe(S,T,Q.error);return}te(!Pr(Q),"Unhandled fetcher deferred data"),Y(S,Gn(Q.data))}}async function O(S,T,_){let{submission:D,fetcherSubmission:I,replace:X}=_===void 0?{}:_;T.response.headers.has("X-Remix-Revalidate")&&(ut=!0);let q=T.response.headers.get("Location");te(q,"Expected a Location header on the redirect Response"),q=jp(q,new URL(S.url),s);let $=Ga(b.location,q,{_isRedirect:!0});if(n){let be=!1;if(T.response.headers.has("X-Remix-Reload-Document"))be=!0;else if(Fd.test(q)){const Ie=e.history.createURL(q);be=Ie.origin!==t.location.origin||Ln(Ie.pathname,s)==null}if(be){X?t.location.replace(q):t.location.assign(q);return}}L=null;let ee=X===!0?Ne.Replace:Ne.Push,{formMethod:Z,formAction:qe,formEncType:We}=b.navigation;!D&&!I&&Z&&qe&&We&&(D=zp(b.navigation));let Q=D||I;if(tx.has(T.response.status)&&Q&&Kt(Q.formMethod))await xn(ee,$,{submission:Te({},Q,{formAction:q}),preventScrollReset:F});else{let be=ou($,D);await xn(ee,$,{overrideNavigation:be,fetcherSubmission:I,preventScrollReset:F})}}async function M(S,T,_,D){try{let I=await ux(u,S,T,_,D,a,o);return await Promise.all(I.map((X,q)=>{if(mx(X)){let $=X.result;return{type:Ee.redirect,response:fx($,T,_[q].route.id,D,s,c.v7_relativeSplatPath)}}return dx(X)}))}catch(I){return _.map(()=>({type:Ee.error,error:I}))}}async function B(S,T,_,D,I){let[X,...q]=await Promise.all([_.length?M("loader",I,_,T):[],...D.map($=>{if($.matches&&$.match&&$.controller){let ee=ro(e.history,$.path,$.controller.signal);return M("loader",ee,[$.match],$.matches).then(Z=>Z[0])}else return Promise.resolve({type:Ee.error,error:Lt(404,{pathname:$.path})})})]);return await Promise.all([Mp(S,_,X,X.map(()=>I.signal),!1,b.loaderData),Mp(S,D.map($=>$.match),q,D.map($=>$.controller?$.controller.signal:null),!0)]),{loaderResults:X,fetcherResults:q}}function V(){ut=!0,ln.push(..._s()),ct.forEach((S,T)=>{R.has(T)&&(sn.push(T),Rt(T))})}function Y(S,T,_){_===void 0&&(_={}),b.fetchers.set(S,T),rt({fetchers:new Map(b.fetchers)},{flushSync:(_&&_.flushSync)===!0})}function oe(S,T,_,D){D===void 0&&(D={});let I=Pa(b.matches,T);dt(S),rt({errors:{[I.route.id]:_},fetchers:new Map(b.fetchers)},{flushSync:(D&&D.flushSync)===!0})}function ze(S){return c.v7_fetcherPersist&&(Ve.set(S,(Ve.get(S)||0)+1),Ae.has(S)&&Ae.delete(S)),b.fetchers.get(S)||nx}function dt(S){let T=b.fetchers.get(S);R.has(S)&&!(T&&T.state==="loading"&&le.has(S))&&Rt(S),ct.delete(S),le.delete(S),ae.delete(S),Ae.delete(S),b.fetchers.delete(S)}function Yo(S){if(c.v7_fetcherPersist){let T=(Ve.get(S)||0)-1;T<=0?(Ve.delete(S),Ae.add(S)):Ve.set(S,T)}else dt(S);rt({fetchers:new Map(b.fetchers)})}function Rt(S){let T=R.get(S);te(T,"Expected fetch controller: "+S),T.abort(),R.delete(S)}function pi(S){for(let T of S){let _=ze(T),D=Gn(_.data);b.fetchers.set(T,D)}}function Qo(){let S=[],T=!1;for(let _ of ae){let D=b.fetchers.get(_);te(D,"Expected fetcher: "+_),D.state==="loading"&&(ae.delete(_),S.push(_),T=!0)}return pi(S),T}function hi(S){let T=[];for(let[_,D]of le)if(D<S){let I=b.fetchers.get(_);te(I,"Expected fetcher: "+_),I.state==="loading"&&(Rt(_),le.delete(_),T.push(_))}return pi(T),T.length>0}function Yy(S,T){let _=b.blockers.get(S)||ia;return Xe.get(S)!==T&&Xe.set(S,T),_}function uf(S){b.blockers.delete(S),Xe.delete(S)}function mi(S,T){let _=b.blockers.get(S)||ia;te(_.state==="unblocked"&&T.state==="blocked"||_.state==="blocked"&&T.state==="blocked"||_.state==="blocked"&&T.state==="proceeding"||_.state==="blocked"&&T.state==="unblocked"||_.state==="proceeding"&&T.state==="unblocked","Invalid blocker state transition: "+_.state+" -> "+T.state);let D=new Map(b.blockers);D.set(S,T),rt({blockers:D})}function cf(S){let{currentLocation:T,nextLocation:_,historyAction:D}=S;if(Xe.size===0)return;Xe.size>1&&Ur(!1,"A router only supports one blocker at a time");let I=Array.from(Xe.entries()),[X,q]=I[I.length-1],$=b.blockers.get(X);if(!($&&$.state==="proceeding")&&q({currentLocation:T,nextLocation:_,historyAction:D}))return X}function _s(S){let T=[];return Me.forEach((_,D)=>{(!S||S(D))&&(_.cancel(),T.push(D),Me.delete(D))}),T}function Qy(S,T,_){if(x=S,m=T,y=_||null,!E&&b.navigation===ru){E=!0;let D=ff(b.location,b.matches);D!=null&&rt({restoreScrollPosition:D})}return()=>{x=null,m=null,y=null}}function df(S,T){return y&&y(S,T.map(D=>Rb(D,b.loaderData)))||S.key}function Zy(S,T){if(x&&m){let _=df(S,T);x[_]=m()}}function ff(S,T){if(x){let _=df(S,T),D=x[_];if(typeof D=="number")return D}return null}function Ky(S){a={},l=cc(S,o,void 0,a)}return C={get basename(){return s},get future(){return c},get state(){return b},get routes(){return i},get window(){return t},initialize:ci,subscribe:Wo,enableScrollRestoration:Qy,navigate:fi,fetch:Go,revalidate:ks,createHref:S=>e.history.createHref(S),encodeLocation:S=>e.history.encodeLocation(S),getFetcher:ze,deleteFetcher:Yo,dispose:di,getBlocker:Yy,deleteBlocker:uf,_internalFetchControllers:R,_internalActiveDeferreds:Me,_internalSetRoutes:Ky},C}function ax(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function fc(e,t,n,r,o,a,i,l){let s,u;if(i){s=[];for(let d of t)if(s.push(d),d.route.id===i){u=d;break}}else s=t,u=t[t.length-1];let c=Xl(o||".",Kl(s,a),Ln(e.pathname,n)||e.pathname,l==="path");return o==null&&(c.search=e.search,c.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!Ld(c.search)&&(c.search=c.search?c.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(c.pathname=c.pathname==="/"?n:An([n,c.pathname])),Br(c)}function Op(e,t,n,r){if(!r||!ax(r))return{path:n};if(r.formMethod&&!yx(r.formMethod))return{path:n,error:Lt(405,{method:r.formMethod})};let o=()=>({path:n,error:Lt(400,{type:"invalid-body"})}),a=r.formMethod||"get",i=e?a.toUpperCase():a.toLowerCase(),l=pg(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!Kt(i))return o();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,y)=>{let[m,E]=y;return""+x+m+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:i,formAction:l,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!Kt(i))return o();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:i,formAction:l,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return o()}}}te(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=pc(r.formData),u=r.formData;else if(r.body instanceof FormData)s=pc(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Ap(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Ap(s)}catch{return o()}let c={formMethod:i,formAction:l,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(Kt(c.formMethod))return{path:n,submission:c};let d=zn(n);return t&&d.search&&Ld(d.search)&&s.append("index",""),d.search="?"+s,{path:Br(d),submission:c}}function ix(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Pp(e,t,n,r,o,a,i,l,s,u,c,d,f,x,y,m){let E=m?It(m[1])?m[1].error:m[1].data:void 0,g=e.createURL(t.location),h=e.createURL(o),v=m&&It(m[1])?m[0]:void 0,k=v?ix(n,v):n,j=m?m[1].statusCode:void 0,C=i&&j&&j>=400,b=k.filter((F,L)=>{let{route:U}=F;if(U.lazy)return!0;if(U.loader==null)return!1;if(a)return typeof U.loader!="function"||U.loader.hydrate?!0:t.loaderData[U.id]===void 0&&(!t.errors||t.errors[U.id]===void 0);if(lx(t.loaderData,t.matches[L],F)||s.some(pe=>pe===F.route.id))return!0;let ue=t.matches[L],ne=F;return Cp(F,Te({currentUrl:g,currentParams:ue.params,nextUrl:h,nextParams:ne.params},r,{actionResult:E,unstable_actionStatus:j,defaultShouldRevalidate:C?!1:l||g.pathname+g.search===h.pathname+h.search||g.search!==h.search||fg(ue,ne)}))}),A=[];return d.forEach((F,L)=>{if(a||!n.some(ut=>ut.route.id===F.routeId)||c.has(L))return;let U=xo(x,F.path,y);if(!U){A.push({key:L,routeId:F.routeId,path:F.path,matches:null,match:null,controller:null});return}let ue=t.fetchers.get(L),ne=hc(U,F.path),pe=!1;f.has(L)?pe=!1:u.includes(L)?pe=!0:ue&&ue.state!=="idle"&&ue.data===void 0?pe=l:pe=Cp(ne,Te({currentUrl:g,currentParams:t.matches[t.matches.length-1].params,nextUrl:h,nextParams:n[n.length-1].params},r,{actionResult:E,unstable_actionStatus:j,defaultShouldRevalidate:C?!1:l})),pe&&A.push({key:L,routeId:F.routeId,path:F.path,matches:U,match:ne,controller:new AbortController})}),[b,A]}function lx(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function fg(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Cp(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function _p(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];te(o,"No route found in manifest");let a={};for(let i in r){let s=o[i]!==void 0&&i!=="hasErrorBoundary";Ur(!s,'Route "'+o.id+'" has a static property "'+i+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+i+'" will be ignored.')),!s&&!Ab.has(i)&&(a[i]=r[i])}Object.assign(o,a),Object.assign(o,Te({},t(o),{lazy:void 0}))}function sx(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function ux(e,t,n,r,o,a,i,l){let s=r.reduce((d,f)=>d.add(f.route.id),new Set),u=new Set,c=await e({matches:o.map(d=>{let f=s.has(d.route.id);return Te({},d,{shouldLoad:f,resolve:y=>(u.add(d.route.id),f?cx(t,n,d,a,i,y,l):Promise.resolve({type:Ee.data,result:void 0}))})}),request:n,params:o[0].params,context:l});return o.forEach(d=>te(u.has(d.route.id),'`match.resolve()` was not called for route id "'+d.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),c.filter((d,f)=>s.has(o[f].route.id))}async function cx(e,t,n,r,o,a,i){let l,s,u=c=>{let d,f=new Promise((m,E)=>d=E);s=()=>d(),t.signal.addEventListener("abort",s);let x=m=>typeof c!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):c({request:t,params:n.params,context:i},...m!==void 0?[m]:[]),y;return a?y=a(m=>x(m)):y=(async()=>{try{return{type:"data",result:await x()}}catch(m){return{type:"error",result:m}}})(),Promise.race([y,f])};try{let c=n.route[e];if(n.route.lazy)if(c){let d,[f]=await Promise.all([u(c).catch(x=>{d=x}),_p(n.route,o,r)]);if(d!==void 0)throw d;l=f}else if(await _p(n.route,o,r),c=n.route[e],c)l=await u(c);else if(e==="action"){let d=new URL(t.url),f=d.pathname+d.search;throw Lt(405,{method:t.method,pathname:f,routeId:n.route.id})}else return{type:Ee.data,result:void 0};else if(c)l=await u(c);else{let d=new URL(t.url),f=d.pathname+d.search;throw Lt(404,{pathname:f})}te(l.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(c){return{type:Ee.error,result:c}}finally{s&&t.signal.removeEventListener("abort",s)}return l}async function dx(e){let{result:t,type:n,status:r}=e;if(hg(t)){let i;try{let l=t.headers.get("Content-Type");l&&/\bapplication\/json\b/.test(l)?t.body==null?i=null:i=await t.json():i=await t.text()}catch(l){return{type:Ee.error,error:l}}return n===Ee.error?{type:Ee.error,error:new Rd(t.status,t.statusText,i),statusCode:t.status,headers:t.headers}:{type:Ee.data,data:i,statusCode:t.status,headers:t.headers}}if(n===Ee.error)return{type:Ee.error,error:t,statusCode:Dd(t)?t.status:r};if(gx(t)){var o,a;return{type:Ee.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((a=t.init)==null?void 0:a.headers)&&new Headers(t.init.headers)}}return{type:Ee.data,data:t,statusCode:r}}function fx(e,t,n,r,o,a){let i=e.headers.get("Location");if(te(i,"Redirects returned/thrown from loaders/actions must have a Location header"),!Fd.test(i)){let l=r.slice(0,r.findIndex(s=>s.route.id===n)+1);i=fc(new URL(t.url),l,o,!0,i,a),e.headers.set("Location",i)}return e}function jp(e,t,n){if(Fd.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),a=Ln(o.pathname,n)!=null;if(o.origin===t.origin&&a)return o.pathname+o.search+o.hash}return e}function ro(e,t,n,r){let o=e.createURL(pg(t)).toString(),a={signal:n};if(r&&Kt(r.formMethod)){let{formMethod:i,formEncType:l}=r;a.method=i.toUpperCase(),l==="application/json"?(a.headers=new Headers({"Content-Type":l}),a.body=JSON.stringify(r.json)):l==="text/plain"?a.body=r.text:l==="application/x-www-form-urlencoded"&&r.formData?a.body=pc(r.formData):a.body=r.formData}return new Request(o,a)}function pc(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Ap(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function px(e,t,n,r,o,a){let i={},l=null,s,u=!1,c={},d=r&&It(r[1])?r[1].error:void 0;return n.forEach((f,x)=>{let y=t[x].route.id;if(te(!Cr(f),"Cannot handle redirect results in processLoaderData"),It(f)){let m=f.error;d!==void 0&&(m=d,d=void 0),l=l||{};{let E=Pa(e,y);l[E.route.id]==null&&(l[E.route.id]=m)}i[y]=void 0,u||(u=!0,s=Dd(f.error)?f.error.status:500),f.headers&&(c[y]=f.headers)}else Pr(f)?(o.set(y,f.deferredData),i[y]=f.deferredData.data,f.statusCode!=null&&f.statusCode!==200&&!u&&(s=f.statusCode),f.headers&&(c[y]=f.headers)):(i[y]=f.data,f.statusCode&&f.statusCode!==200&&!u&&(s=f.statusCode),f.headers&&(c[y]=f.headers))}),d!==void 0&&r&&(l={[r[0]]:d},i[r[0]]=void 0),{loaderData:i,errors:l,statusCode:s||200,loaderHeaders:c}}function Np(e,t,n,r,o,a,i,l){let{loaderData:s,errors:u}=px(t,n,r,o,l);for(let c=0;c<a.length;c++){let{key:d,match:f,controller:x}=a[c];te(i!==void 0&&i[c]!==void 0,"Did not find corresponding fetcher result");let y=i[c];if(!(x&&x.signal.aborted))if(It(y)){let m=Pa(e.matches,f==null?void 0:f.route.id);u&&u[m.route.id]||(u=Te({},u,{[m.route.id]:y.error})),e.fetchers.delete(d)}else if(Cr(y))te(!1,"Unhandled fetcher revalidation redirect");else if(Pr(y))te(!1,"Unhandled fetcher deferred data");else{let m=Gn(y.data);e.fetchers.set(d,m)}}return{loaderData:s,errors:u}}function Rp(e,t,n,r){let o=Te({},t);for(let a of n){let i=a.route.id;if(t.hasOwnProperty(i)?t[i]!==void 0&&(o[i]=t[i]):e[i]!==void 0&&a.route.loader&&(o[i]=e[i]),r&&r.hasOwnProperty(i))break}return o}function Dp(e){return e?It(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function Pa(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function Fp(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function Lt(e,t){let{pathname:n,routeId:r,method:o,type:a}=t===void 0?{}:t,i="Unknown Server Error",l="Unknown @remix-run/router error";return e===400?(i="Bad Request",o&&n&&r?l="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":a==="defer-action"?l="defer() is not supported in actions":a==="invalid-body"&&(l="Unable to encode submission body")):e===403?(i="Forbidden",l='Route "'+r+'" does not match URL "'+n+'"'):e===404?(i="Not Found",l='No route matches URL "'+n+'"'):e===405&&(i="Method Not Allowed",o&&n&&r?l="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(l='Invalid request method "'+o.toUpperCase()+'"')),new Rd(e||500,i,new Error(l),!0)}function Lp(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(Cr(n))return{result:n,idx:t}}}function pg(e){let t=typeof e=="string"?zn(e):e;return Br(Te({},t,{hash:""}))}function hx(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function mx(e){return hg(e.result)&&ex.has(e.result.status)}function Pr(e){return e.type===Ee.deferred}function It(e){return e.type===Ee.error}function Cr(e){return(e&&e.type)===Ee.redirect}function gx(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function hg(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function yx(e){return Jb.has(e.toLowerCase())}function Kt(e){return Kb.has(e.toLowerCase())}async function Mp(e,t,n,r,o,a){for(let i=0;i<n.length;i++){let l=n[i],s=t[i];if(!s)continue;let u=e.find(d=>d.route.id===s.route.id),c=u!=null&&!fg(u,s)&&(a&&a[s.route.id])!==void 0;if(Pr(l)&&(o||c)){let d=r[i];te(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await mg(l,d,o).then(f=>{f&&(n[i]=f||n[i])})}}}async function mg(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:Ee.data,data:e.deferredData.unwrappedData}}catch(o){return{type:Ee.error,error:o}}return{type:Ee.data,data:e.deferredData.data}}}function Ld(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function hc(e,t){let n=typeof t=="string"?zn(t).search:t.search;if(e[e.length-1].route.index&&Ld(n||""))return e[e.length-1];let r=ug(e);return r[r.length-1]}function zp(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:a,json:i}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(a!=null)return{formMethod:t,formAction:n,formEncType:r,formData:a,json:void 0,text:void 0};if(i!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:i,text:void 0}}}function ou(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function vx(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function la(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function bx(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Gn(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function xx(e,t){try{let n=e.sessionStorage.getItem(dg);if(n){let r=JSON.parse(n);for(let[o,a]of Object.entries(r||{}))a&&Array.isArray(a)&&t.set(o,new Set(a||[]))}}catch{}}function wx(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(dg,JSON.stringify(n))}catch(r){Ur(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Pl(){return Pl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Pl.apply(this,arguments)}const oi=w.createContext(null),Md=w.createContext(null),In=w.createContext(null),zd=w.createContext(null),vn=w.createContext({outlet:null,matches:[],isDataRoute:!1}),gg=w.createContext(null);function Sx(e,t){let{relative:n}=t===void 0?{}:t;Uo()||te(!1);let{basename:r,navigator:o}=w.useContext(In),{hash:a,pathname:i,search:l}=Jl(e,{relative:n}),s=i;return r!=="/"&&(s=i==="/"?r:An([r,i])),o.createHref({pathname:s,search:l,hash:a})}function Uo(){return w.useContext(zd)!=null}function Bo(){return Uo()||te(!1),w.useContext(zd).location}function yg(e){w.useContext(In).static||w.useLayoutEffect(e)}function ai(){let{isDataRoute:e}=w.useContext(vn);return e?Mx():Ex()}function Ex(){Uo()||te(!1);let e=w.useContext(oi),{basename:t,future:n,navigator:r}=w.useContext(In),{matches:o}=w.useContext(vn),{pathname:a}=Bo(),i=JSON.stringify(Kl(o,n.v7_relativeSplatPath)),l=w.useRef(!1);return yg(()=>{l.current=!0}),w.useCallback(function(u,c){if(c===void 0&&(c={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let d=Xl(u,JSON.parse(i),a,c.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:An([t,d.pathname])),(c.replace?r.replace:r.push)(d,c.state,c)},[t,r,i,a,e])}const kx=w.createContext(null);function Tx(e){let t=w.useContext(vn).outlet;return t&&w.createElement(kx.Provider,{value:e},t)}function Ox(){let{matches:e}=w.useContext(vn),t=e[e.length-1];return t?t.params:{}}function Jl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=w.useContext(In),{matches:o}=w.useContext(vn),{pathname:a}=Bo(),i=JSON.stringify(Kl(o,r.v7_relativeSplatPath));return w.useMemo(()=>Xl(e,JSON.parse(i),a,n==="path"),[e,i,a,n])}function Px(e,t,n,r){Uo()||te(!1);let{navigator:o}=w.useContext(In),{matches:a}=w.useContext(vn),i=a[a.length-1],l=i?i.params:{};i&&i.pathname;let s=i?i.pathnameBase:"/";i&&i.route;let u=Bo(),c;c=u;let d=c.pathname||"/",f=d;if(s!=="/"){let m=s.replace(/^\//,"").split("/");f="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=xo(e,{pathname:f});return Nx(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},l,m.params),pathname:An([s,o.encodeLocation?o.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?s:An([s,o.encodeLocation?o.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),a,n,r)}function Cx(){let e=Lx(),t=Dd(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return w.createElement(w.Fragment,null,w.createElement("h2",null,"Unexpected Application Error!"),w.createElement("h3",{style:{fontStyle:"italic"}},t),n?w.createElement("pre",{style:o},n):null,null)}const _x=w.createElement(Cx,null);class jx extends w.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?w.createElement(vn.Provider,{value:this.props.routeContext},w.createElement(gg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Ax(e){let{routeContext:t,match:n,children:r}=e,o=w.useContext(oi);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),w.createElement(vn.Provider,{value:t},r)}function Nx(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var a;if((a=n)!=null&&a.errors)e=n.matches;else return null}let i=e,l=(o=n)==null?void 0:o.errors;if(l!=null){let c=i.findIndex(d=>d.route.id&&(l==null?void 0:l[d.route.id])!==void 0);c>=0||te(!1),i=i.slice(0,Math.min(i.length,c+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let c=0;c<i.length;c++){let d=i[c];if((d.route.HydrateFallback||d.route.hydrateFallbackElement)&&(u=c),d.route.id){let{loaderData:f,errors:x}=n,y=d.route.loader&&f[d.route.id]===void 0&&(!x||x[d.route.id]===void 0);if(d.route.lazy||y){s=!0,u>=0?i=i.slice(0,u+1):i=[i[0]];break}}}return i.reduceRight((c,d,f)=>{let x,y=!1,m=null,E=null;n&&(x=l&&d.route.id?l[d.route.id]:void 0,m=d.route.errorElement||_x,s&&(u<0&&f===0?(zx("route-fallback"),y=!0,E=null):u===f&&(y=!0,E=d.route.hydrateFallbackElement||null)));let g=t.concat(i.slice(0,f+1)),h=()=>{let v;return x?v=m:y?v=E:d.route.Component?v=w.createElement(d.route.Component,null):d.route.element?v=d.route.element:v=c,w.createElement(Ax,{match:d,routeContext:{outlet:c,matches:g,isDataRoute:n!=null},children:v})};return n&&(d.route.ErrorBoundary||d.route.errorElement||f===0)?w.createElement(jx,{location:n.location,revalidation:n.revalidation,component:m,error:x,children:h(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):h()},null)}var vg=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(vg||{}),bg=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(bg||{});function Rx(e){let t=w.useContext(oi);return t||te(!1),t}function Dx(e){let t=w.useContext(Md);return t||te(!1),t}function Fx(e){let t=w.useContext(vn);return t||te(!1),t}function xg(e){let t=Fx(),n=t.matches[t.matches.length-1];return n.route.id||te(!1),n.route.id}function Lx(){var e;let t=w.useContext(gg),n=Dx(bg.UseRouteError),r=xg();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Mx(){let{router:e}=Rx(vg.UseNavigateStable),t=xg(),n=w.useRef(!1);return yg(()=>{n.current=!0}),w.useCallback(function(o,a){a===void 0&&(a={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Pl({fromRouteId:t},a)))},[e,t])}const Ip={};function zx(e,t,n){Ip[e]||(Ip[e]=!0)}function Ix(e){let{to:t,replace:n,state:r,relative:o}=e;Uo()||te(!1);let{future:a,static:i}=w.useContext(In),{matches:l}=w.useContext(vn),{pathname:s}=Bo(),u=ai(),c=Xl(t,Kl(l,a.v7_relativeSplatPath),s,o==="path"),d=JSON.stringify(c);return w.useEffect(()=>u(JSON.parse(d),{replace:n,state:r,relative:o}),[u,d,o,n,r]),null}function $x(e){return Tx(e.context)}function Ux(e){let{basename:t="/",children:n=null,location:r,navigationType:o=Ne.Pop,navigator:a,static:i=!1,future:l}=e;Uo()&&te(!1);let s=t.replace(/^\/*/,"/"),u=w.useMemo(()=>({basename:s,navigator:a,static:i,future:Pl({v7_relativeSplatPath:!1},l)}),[s,l,a,i]);typeof r=="string"&&(r=zn(r));let{pathname:c="/",search:d="",hash:f="",state:x=null,key:y="default"}=r,m=w.useMemo(()=>{let E=Ln(c,s);return E==null?null:{location:{pathname:E,search:d,hash:f,state:x,key:y},navigationType:o}},[s,c,d,f,x,y,o]);return m==null?null:w.createElement(In.Provider,{value:u},w.createElement(zd.Provider,{children:n,value:m}))}new Promise(()=>{});function Bx(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:w.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:w.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:w.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Lo(){return Lo=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lo.apply(this,arguments)}function wg(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function Hx(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function Vx(e,t){return e.button===0&&(!t||t==="_self")&&!Hx(e)}const qx=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],Wx=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],Gx="6";try{window.__reactRouterVersion=Gx}catch{}function Yx(e,t){return ox({basename:void 0,future:Lo({},void 0,{v7_prependBasename:!0}),history:Cb({window:void 0}),hydrationData:Qx(),routes:e,mapRouteProperties:Bx,unstable_dataStrategy:void 0,window:void 0}).initialize()}function Qx(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=Lo({},t,{errors:Zx(t.errors)})),t}function Zx(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new Rd(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let a=window[o.__subType];if(typeof a=="function")try{let i=new a(o.message);i.stack="",n[r]=i}catch{}}if(n[r]==null){let a=new Error(o.message);a.stack="",n[r]=a}}else n[r]=o;return n}const Sg=w.createContext({isTransitioning:!1}),Kx=w.createContext(new Map),Xx="startTransition",$p=mv[Xx],Jx="flushSync",Up=Pb[Jx];function ew(e){$p?$p(e):e()}function sa(e){Up?Up(e):e()}class tw{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function nw(e){let{fallbackElement:t,router:n,future:r}=e,[o,a]=w.useState(n.state),[i,l]=w.useState(),[s,u]=w.useState({isTransitioning:!1}),[c,d]=w.useState(),[f,x]=w.useState(),[y,m]=w.useState(),E=w.useRef(new Map),{v7_startTransition:g}=r||{},h=w.useCallback(b=>{g?ew(b):b()},[g]),v=w.useCallback((b,A)=>{let{deletedFetchers:F,unstable_flushSync:L,unstable_viewTransitionOpts:U}=A;F.forEach(ne=>E.current.delete(ne)),b.fetchers.forEach((ne,pe)=>{ne.data!==void 0&&E.current.set(pe,ne.data)});let ue=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!U||ue){L?sa(()=>a(b)):h(()=>a(b));return}if(L){sa(()=>{f&&(c&&c.resolve(),f.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:U.currentLocation,nextLocation:U.nextLocation})});let ne=n.window.document.startViewTransition(()=>{sa(()=>a(b))});ne.finished.finally(()=>{sa(()=>{d(void 0),x(void 0),l(void 0),u({isTransitioning:!1})})}),sa(()=>x(ne));return}f?(c&&c.resolve(),f.skipTransition(),m({state:b,currentLocation:U.currentLocation,nextLocation:U.nextLocation})):(l(b),u({isTransitioning:!0,flushSync:!1,currentLocation:U.currentLocation,nextLocation:U.nextLocation}))},[n.window,f,c,E,h]);w.useLayoutEffect(()=>n.subscribe(v),[n,v]),w.useEffect(()=>{s.isTransitioning&&!s.flushSync&&d(new tw)},[s]),w.useEffect(()=>{if(c&&i&&n.window){let b=i,A=c.promise,F=n.window.document.startViewTransition(async()=>{h(()=>a(b)),await A});F.finished.finally(()=>{d(void 0),x(void 0),l(void 0),u({isTransitioning:!1})}),x(F)}},[h,i,c,n.window]),w.useEffect(()=>{c&&i&&o.location.key===i.location.key&&c.resolve()},[c,f,o.location,i]),w.useEffect(()=>{!s.isTransitioning&&y&&(l(y.state),u({isTransitioning:!0,flushSync:!1,currentLocation:y.currentLocation,nextLocation:y.nextLocation}),m(void 0))},[s.isTransitioning,y]),w.useEffect(()=>{},[]);let k=w.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:b=>n.navigate(b),push:(b,A,F)=>n.navigate(b,{state:A,preventScrollReset:F==null?void 0:F.preventScrollReset}),replace:(b,A,F)=>n.navigate(b,{replace:!0,state:A,preventScrollReset:F==null?void 0:F.preventScrollReset})}),[n]),j=n.basename||"/",C=w.useMemo(()=>({router:n,navigator:k,static:!1,basename:j}),[n,k,j]);return w.createElement(w.Fragment,null,w.createElement(oi.Provider,{value:C},w.createElement(Md.Provider,{value:o},w.createElement(Kx.Provider,{value:E.current},w.createElement(Sg.Provider,{value:s},w.createElement(Ux,{basename:j,location:o.location,navigationType:o.historyAction,navigator:k,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?w.createElement(rw,{routes:n.routes,future:n.future,state:o}):t))))),null)}function rw(e){let{routes:t,future:n,state:r}=e;return Px(t,void 0,r,n)}const ow=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",aw=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,yt=w.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:a,replace:i,state:l,target:s,to:u,preventScrollReset:c,unstable_viewTransition:d}=t,f=wg(t,qx),{basename:x}=w.useContext(In),y,m=!1;if(typeof u=="string"&&aw.test(u)&&(y=u,ow))try{let v=new URL(window.location.href),k=u.startsWith("//")?new URL(v.protocol+u):new URL(u),j=Ln(k.pathname,x);k.origin===v.origin&&j!=null?u=j+k.search+k.hash:m=!0}catch{}let E=Sx(u,{relative:o}),g=lw(u,{replace:i,state:l,target:s,preventScrollReset:c,relative:o,unstable_viewTransition:d});function h(v){r&&r(v),v.defaultPrevented||g(v)}return w.createElement("a",Lo({},f,{href:y||E,onClick:m||a?r:h,ref:n,target:s}))}),wn=w.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:i=!1,style:l,to:s,unstable_viewTransition:u,children:c}=t,d=wg(t,Wx),f=Jl(s,{relative:d.relative}),x=Bo(),y=w.useContext(Md),{navigator:m,basename:E}=w.useContext(In),g=y!=null&&sw(f)&&u===!0,h=m.encodeLocation?m.encodeLocation(f).pathname:f.pathname,v=x.pathname,k=y&&y.navigation&&y.navigation.location?y.navigation.location.pathname:null;o||(v=v.toLowerCase(),k=k?k.toLowerCase():null,h=h.toLowerCase()),k&&E&&(k=Ln(k,E)||k);const j=h!=="/"&&h.endsWith("/")?h.length-1:h.length;let C=v===h||!i&&v.startsWith(h)&&v.charAt(j)==="/",b=k!=null&&(k===h||!i&&k.startsWith(h)&&k.charAt(h.length)==="/"),A={isActive:C,isPending:b,isTransitioning:g},F=C?r:void 0,L;typeof a=="function"?L=a(A):L=[a,C?"active":null,b?"pending":null,g?"transitioning":null].filter(Boolean).join(" ");let U=typeof l=="function"?l(A):l;return w.createElement(yt,Lo({},d,{"aria-current":F,className:L,ref:n,style:U,to:s,unstable_viewTransition:u}),typeof c=="function"?c(A):c)});var mc;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(mc||(mc={}));var Bp;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(Bp||(Bp={}));function iw(e){let t=w.useContext(oi);return t||te(!1),t}function lw(e,t){let{target:n,replace:r,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:l}=t===void 0?{}:t,s=ai(),u=Bo(),c=Jl(e,{relative:i});return w.useCallback(d=>{if(Vx(d,n)){d.preventDefault();let f=r!==void 0?r:Br(u)===Br(c);s(e,{replace:f,state:o,preventScrollReset:a,relative:i,unstable_viewTransition:l})}},[u,s,c,r,o,n,e,a,i,l])}function sw(e,t){t===void 0&&(t={});let n=w.useContext(Sg);n==null&&te(!1);let{basename:r}=iw(mc.useViewTransitionState),o=Jl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let a=Ln(n.currentLocation.pathname,r)||n.currentLocation.pathname,i=Ln(n.nextLocation.pathname,r)||n.nextLocation.pathname;return dc(o.pathname,i)!=null||dc(o.pathname,a)!=null}const uw="/Game-Reviews/assets/wraper-DPpvkmHL.png",cw="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAG0AAABmCAYAAADBPx+VAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODEzM0FEQkY3NENFMTFFQUEwNTdDNERGM0IyRkZBRTYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODEzM0FEQkU3NENFMTFFQUEwNTdDNERGM0IyRkZBRTYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowRTE0N0U0QzIyMkUxMUVBOEYzQUU1QzM0RDQ4M0Q1MCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowRTE0N0U0RDIyMkUxMUVBOEYzQUU1QzM0RDQ4M0Q1MCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv+w73MAAAxESURBVHja7F17bFZnHX5bOnqBwaggl4FsIIOgWDZoYTAuGwNhYwOc1c2oiZrFqFET4yUx+o+LiZp4WeIt0UTnsqnpMhkMx8a6OS7KGC3X0g5ooRvlsiHjDqUt9ffke0567M457zlf3/N972nPL3nSr1/fr98553l/1/dW0N3drVJJlhT0lbSamhob7mOk4HbBFMHNgiF8/6rghKBZsFtwzDYCqqurI3+mKOGdbozgXsFcQYnH34eS0BmCBwU7Ba8IDif5ppNK2mDBUsFyQWnIzxQKqgSzBbWCjYJzKWm5kbkka3yWny8k4Q55Lws6U9LikVto4j4Woq3jqAsC2owQfFJwh2C9YF9KmjnBw31AMF8wSEPULqKNv48SzBTMEhT7fG6S4Jv83DrB2ylp2Qse8jzB/YKbNG0bBRsETb3eBwH1gpcEK2kS/QTR50fYFsHK+ZS0aALtWCWYoGl3iqZtu6YdQv3fC6YL1ghuDQhwVrKzoBNsdpnalLQAv7VcoxGQSwwiavk6rBwQHBIsFixhOuAl5YLPCSoFL9rm72wh7QOCu5lzBV3TdWrVBmpZNtIh2MT/c59ggU+OB5lGbKPZbEtJy3z/IpqkGzVtmxgoHDT03RcEfxdsoSmeFdB2PrX/ZWre5YFK2kz29EmadifZy7fE5F+OC35H0pYJJgcERvezHa5nKzV/QJA2jiF8paZde457dp3K1CeX0K8O82mH0tnnBXMEa+kj+y1pMH8rBAsDfIgj/1aZMtPxHD+PLmrRTpJ3b0BuOFXwHQM+1krScNNVDLXLNW1b2XvzHa2dEdQwx3uQ+ZuXFDI9qGAne1VlRhYSTRryotUh/BYe0vOM0rosiq4xpPNLlSl1gTy/eieGgh4S3MVg6fUkkjaWTn2Bpt1VErXB5goENa5BZQrN9wT4u9GCR+mvXyDp1pNWSl+wQvnX+hyB0/+HLblPCGmnNdjOKBJaVRAQGcNkvsbPnLWVtHkka6ymXYvL2SdRTgueoAlcEeDvClh5qWAy/y/BNVtIm8qeN13T7r8qU3ZCMbZTJV+aiDtJ3jifdhil+JTKjAOiTrqrr1+c9RyRmpqacgYZ8zRNO11m4oLqn1LM9ODjgjJN2310C2/hl5zNERHCUBV4ROmHTOqYHLeo/i3tDKbqGYDNZzrgJZivchtTm005MY9C2EJWBIKkjaFvXYR/jZ76QcEelakvdiSQvBP0dwhWPqGCS2KfFgwXPBOreRTCkK98JSBqusBQ9zX2viiCnvkNwUfpsBtpSvbRHyZNcD8oda1kKuAnz4iJ3BgLaUIYxp5+qHrmFLrlOktP6/v4gJEyfM8jicUg5n7BXpWZ/nY9QeQNYaCCSLLE59n9TIg7HAdpGBRc5PEnPNCnlLnCKeZ1fF/5D9VcIYH7qYXnE0IeCs2fVZnxOa9I9OdCXLcx0oQwDFL+yCNhhg3/qeCi4Rv8sODbIXwuLr6V5O3ha5vnueN+vu6T20HbQo0VFob8stkehEGt/xIDYYom8M9hOp3KTFHAUM8PBL8QfJFlpDILSevkfV30KU4ok6RN9SpDSc+IcyxpO4OaKHIjb/7Lgl8Jvkt/Mt4i4t5jgaG3TIiirmFkrM9D7at8lSYNkeJRjwDjWUZed2QZvd1GPMSHtYe+sDGL6Nak1DOqdCvNcNOklXr4EhODfiNIyBoGGAf5QJtUz4TTPzKinGjguxYTHfyufYxI38kxaVhDcLWXCS8yTVq3jz/pq4D4W10do4Jwcj6HQEzAeZQP3oTcwGAAeJikOVr4prK8Nprv2VinNP6pilAxV0hQiVlKtLOz7KUmvpeSFp40L+3IhSBKnkk4eeheaqEViX2+STuRgKR4PIHpfpjNfMBF4oWBSNo7KlkyhDlgJf38UZcvPJqriyjM80Not9FnhJQCBlGrmdCrgUJaErXNSxoHGmnZ+DXb6osNA8mnZatpTzIYGEWMdL0eFaW6YEC6lLlFIYkh7WQWn0El4SxxyCc98CLTeW+wwetvUTmYVdwfNE23DQUS8ePKfy3AcB9S8ftNKlq1pyHXD8wG0t6liRkUUdP6IueIwz5aOtLD9Do/i/MZhNhCWheJG5ND0nRaeiIgQBrmIhSDw0cGImmOibSFNJ2cJ5rzdQGFlpAWNRixcVR6wJEWNRgpTUlLXoKdkpZATUvNowWConGUORvFEVOEfiU27dgDbZsQoT1MZJjpe4+rzMze3p3iqvr/pcKoZ17xCP97rylDG+y28ERKWsavRSGtLCRppbQoZQZN7IHUPGYk6uyuMA99cEz32JySlh1pYSLIkpiutSUlLT5Ni4O07pS0HomjKhJHPgffeyklrScqi7J7d77MY3O+H5RNpEVNsuMyj0gFTiv/gc28rx+3bWdVmMgpBjWtiL7yEtODi67X+Hne42/OlPDHlPfCk+aUtOw1LQxpdSraYn1HUG0Z7WPC8z7B1jbzGOWBxFl/HOPzbI4oC2aC9Xeflq2MszUIsZW0sAsc4hye8dvf61BK2vsFQcAZSzWtW+VhPkgSAhHHr43MA2nD6csQgEz2ua4rKWneghB9RkjzWBAxMCgmKQ7Gul7rzG2zLQ/IVtKihP1BO4ljV4ZKFzHlfbiulpQ0M6SVaUjDIvzFhq7LGk0r7AeaFiSmlvxeVhatWg1LWoFPNBWHIHq8FkHTdD7MlJZ1J420Dg8Sy2O6pu4ISbZO00ytjjHtz7AMuCRbJQhLmpdpmGWBidRpWpFBTTMpMzye/TnTpHn1tMqamprRlpNWYkjzTSbVuOalHu+3mSZth3r/yRTwF9gWN475h2FHsXNhHk0n1Z/xcS2vGyWturoai/N2++RBX1OZJT/9zTxifA3DOs8a9GPo5HM9/oZN3UJPy4tyU9iivcLjMzjCGGfJYFfwWmXmwICThkiLUlTGZFYUhJ39uN4yGDHi+BacXeBXnlsvihF6P66oG0/jSJJHApq0ktxdBm70ceW9X7JbsAXfbwP+jsN9/LbV7aKvbiTgt0xvZBbmoIlXhbCnYquIyD+vFeKwE9xynyYTaS6x88Ba9tZspYkVjQJD5hG985iLpIMqvj0fsUoUp0DdqWn3huDpqP88qxMwhDjsVrpaE4TATOI8MZw2mO2uPNC0yQTmjtzSK7iAZj8W8Pkfk3zH5F1U8Qo6EU59WqL0Z5zClWB7946ckEbi8BBxAOo0TVPkHzgdYpuBnj2I2uyQiPXPP7GgSAFrgMI09lLWHZDUqnpOy8jq2JKsSXORN5fkjdI0xenu6wz5O5tkCq3O1BDR6PO0Pl0ulxP5C01UDLCX8X6ahCUBfmYC/d1ORppHEk4WBkxx1MpCTerkHJAEN/GuiS82VeZBL3qOBMIBzwloO5upQy3JS9pJT4Ppt+4LEQg1MCAz2kFNj6chKf4D/dcDyn/i6Q2MQOEHNvU2GRYLOmOYLeOP0W+9EcdFxDUIeoDR2iL2SL8No1FJeZjkPafyvFgvQCbQb1Vo2l2mGcRJjLHtlxXnyPV1ahB62zLaf79aIKLBb9Hf4ZAhW84JHcFOtyDEs9os+KfKrAOIVXIx3QD+DvW7OprMmRp/h6O4NtJ558vfFTMxxvXqtiF8k6YwZ1Yil3NEkJ/8WmVqlauU/+EIJTRFd9Fk/ifHhFXw+3Xrv0/TKmzLdY/Kx8SevS5/h3ElvxFwFFe/pDJV8Rdz0JMn0ozPCeG3XmH0O6B2C7/GqHGHy2f4+TvnpIot/MzxGPzWPfS5QROBunm90K6TKo+S7yl0KHH91ZUi3B7QFsRW0d8hQuvrwCQS4rvZaXR+6xBNdZMN0ZEt8x4xGvAbkoIePykgQFjFgOWlPviTCuaJugWMp6jdm5VFR1raNlkV5qfeVXEY6tPuZsEX6H+gAWEn3oxhxaZK066D2vyCCp4Mm5JG6aQW1VPrYML8hoAwuDiNESaKsX61PZCPg8MXK/1o9g6S9batZZkiZa8gpP6bK7+bHuCb5jOV2EqyzzBwGMb3Fyr9SpxWBhm7leVSpOwXBAE46xPzLNco/21zMei4grjiyvl0O3+fpZZuVZafm5Yk0hypY67mmLmhAW3DTOjBgOx2Epao826SRJqiBq1l1LiSZjEbwUlM62gSEydFKpmCgONPDBqWKe9zo72khVHhDpVgKVLJlgZiGsP4DzFRdiobXUzg2xig7LEp38pW+jxHJJXcy/8EGABXevLXUN6qQgAAAABJRU5ErkJggg==";let es=w.createContext(0);function dw(e){const[t,n]=w.useState(null);return w.useEffect(()=>{localStorage.getItem("userToken")!==null&&n(localStorage.getItem("userToken"))},[]),p.jsx(p.Fragment,{children:p.jsx(es.Provider,{value:{UserLogin:t,setUserLogin:n},children:e.children})})}function fw(){const e=ai(),{UserLogin:t,setUserLogin:n}=w.useContext(es),[r,o]=w.useState(!1);function a(){localStorage.removeItem("userToken"),n(null),e("/Login")}const i=()=>{o(!r)};return p.jsx(p.Fragment,{children:p.jsxs("section",{className:"games",children:[p.jsx("header",{children:p.jsx("img",{src:uw,className:"w-full",alt:"game photo"})}),p.jsx("nav",{className:"bg-gray-800  w-full top-0  z-30  md:w-2/3 lg:w-3/4 mx-auto ",children:p.jsxs("div",{className:"container mx-auto flex flex-wrap items-center justify-between p-5",children:[p.jsx(wn,{to:"./",children:p.jsxs("h5",{className:" text-uppercase mb-0 flex items-center",children:[p.jsx("img",{src:cw,alt:"logo photo",className:"max-w-xs ",style:{maxWidth:"40px"}})," Game Reviews"]})}),p.jsx("button",{className:" md:hidden",type:"button",onClick:i,children:p.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:p.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:r?"M6 18L18 6M6 6l12 12":"M4 6h16M4 12h16m-7 6h7"})})}),p.jsx("div",{className:`${r?"block":"hidden"} w-full md:flex md:items-center md:w-auto`,id:"navbarSupportedContent",children:p.jsxs("ul",{className:"flex flex-col md:flex-row md:ml-auto space-y-2 md:space-y-0 md:space-x-4",children:[t!==null?p.jsxs(p.Fragment,{children:[p.jsx(wn,{to:"Mmorpg",children:p.jsx("button",{className:"nav-link active text-uppercase","aria-current":"page","data-category":"mmorpg",children:"mmorpg"})}),p.jsx(wn,{to:"Shooter",children:p.jsx("button",{className:"nav-link text-uppercase","data-category":"shooter",children:"shooter"})}),p.jsx(wn,{to:"Sailing",children:p.jsx("button",{className:"nav-link text-uppercase","data-category":"sailing",children:"sailing"})}),p.jsx(wn,{to:"Permadeath",children:p.jsx("button",{className:"nav-link text-uppercase","data-category":"permadeath",children:"permadeath"})}),p.jsx(wn,{to:"Superhero",children:p.jsx("button",{className:"nav-link text-uppercase","data-category":"superhero",children:"superhero"})}),p.jsx(wn,{to:"Pixel",children:p.jsx("button",{className:"nav-link text-uppercase ","data-category":"pixel",children:"pixel"})})]}):null,t===null?p.jsxs(p.Fragment,{children:[p.jsx(wn,{to:"Login",children:p.jsx("button",{className:"nav-link text-uppercase","data-category":"Login",children:"Login"})}),p.jsx(wn,{to:"Register",children:p.jsx("button",{className:"nav-link text-uppercase ","data-category":"Register",children:"Register"})})]}):p.jsx("button",{onClick:a,className:"nav-link text-uppercase text-md mx-4 bg-slate-600  dark:text-gray-100 text-slate-700 font-normal cursor-pointer",children:p.jsx("span",{children:p.jsx("i",{className:"fa-solid fa-right-from-bracket"})})})]})})]})}),p.jsx("main",{className:"container mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4",id:"gameData"})})})]})})}function pw(){return p.jsx(p.Fragment,{children:p.jsx("footer",{className:"bg-gray-800 text-white py-6 mt-48",children:p.jsxs("div",{className:"container mx-auto text-center",children:[p.jsx("div",{className:"mb-4",children:p.jsx("h2",{className:"text-2xl font-bold",children:"Game Reviews"})}),p.jsxs("div",{className:"flex justify-center space-x-4 mb-4",children:[p.jsx(yt,{className:"text-gray-500 hover:text-white",children:"Home"}),p.jsx(yt,{className:"text-gray-500 hover:text-white",children:"About"}),p.jsx(yt,{className:"text-gray-500 hover:text-white",children:"Contact"}),p.jsx(yt,{className:"text-gray-500 hover:text-white",children:"Privacy Policy"})]}),p.jsx("div",{className:"text-gray-400",children:p.jsx("p",{children:"© 2025 Game Reviews. All rights reserved."})})]})})})}function hw(){return p.jsxs(p.Fragment,{children:[p.jsx(fw,{}),p.jsx($x,{}),p.jsx(pw,{})]})}function Eg(e,t){return function(){return e.apply(t,arguments)}}const{toString:mw}=Object.prototype,{getPrototypeOf:Id}=Object,ts=(e=>t=>{const n=mw.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),an=e=>(e=e.toLowerCase(),t=>ts(t)===e),ns=e=>t=>typeof t===e,{isArray:Ho}=Array,Ya=ns("undefined");function gw(e){return e!==null&&!Ya(e)&&e.constructor!==null&&!Ya(e.constructor)&&Bt(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const kg=an("ArrayBuffer");function yw(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&kg(e.buffer),t}const vw=ns("string"),Bt=ns("function"),Tg=ns("number"),rs=e=>e!==null&&typeof e=="object",bw=e=>e===!0||e===!1,Ji=e=>{if(ts(e)!=="object")return!1;const t=Id(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},xw=an("Date"),ww=an("File"),Sw=an("Blob"),Ew=an("FileList"),kw=e=>rs(e)&&Bt(e.pipe),Tw=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||Bt(e.append)&&((t=ts(e))==="formdata"||t==="object"&&Bt(e.toString)&&e.toString()==="[object FormData]"))},Ow=an("URLSearchParams"),[Pw,Cw,_w,jw]=["ReadableStream","Request","Response","Headers"].map(an),Aw=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ii(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,o;if(typeof e!="object"&&(e=[e]),Ho(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const a=n?Object.getOwnPropertyNames(e):Object.keys(e),i=a.length;let l;for(r=0;r<i;r++)l=a[r],t.call(null,e[l],l,e)}}function Og(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,o;for(;r-- >0;)if(o=n[r],t===o.toLowerCase())return o;return null}const Pg=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Cg=e=>!Ya(e)&&e!==Pg;function gc(){const{caseless:e}=Cg(this)&&this||{},t={},n=(r,o)=>{const a=e&&Og(t,o)||o;Ji(t[a])&&Ji(r)?t[a]=gc(t[a],r):Ji(r)?t[a]=gc({},r):Ho(r)?t[a]=r.slice():t[a]=r};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&ii(arguments[r],n);return t}const Nw=(e,t,n,{allOwnKeys:r}={})=>(ii(t,(o,a)=>{n&&Bt(o)?e[a]=Eg(o,n):e[a]=o},{allOwnKeys:r}),e),Rw=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Dw=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Fw=(e,t,n,r)=>{let o,a,i;const l={};if(t=t||{},e==null)return t;do{for(o=Object.getOwnPropertyNames(e),a=o.length;a-- >0;)i=o[a],(!r||r(i,e,t))&&!l[i]&&(t[i]=e[i],l[i]=!0);e=n!==!1&&Id(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Lw=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},Mw=e=>{if(!e)return null;if(Ho(e))return e;let t=e.length;if(!Tg(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},zw=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Id(Uint8Array)),Iw=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let o;for(;(o=r.next())&&!o.done;){const a=o.value;t.call(e,a[0],a[1])}},$w=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Uw=an("HTMLFormElement"),Bw=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,o){return r.toUpperCase()+o}),Hp=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Hw=an("RegExp"),_g=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};ii(n,(o,a)=>{let i;(i=t(o,a,e))!==!1&&(r[a]=i||o)}),Object.defineProperties(e,r)},Vw=e=>{_g(e,(t,n)=>{if(Bt(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(Bt(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},qw=(e,t)=>{const n={},r=o=>{o.forEach(a=>{n[a]=!0})};return Ho(e)?r(e):r(String(e).split(t)),n},Ww=()=>{},Gw=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,au="abcdefghijklmnopqrstuvwxyz",Vp="0123456789",jg={DIGIT:Vp,ALPHA:au,ALPHA_DIGIT:au+au.toUpperCase()+Vp},Yw=(e=16,t=jg.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Qw(e){return!!(e&&Bt(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zw=e=>{const t=new Array(10),n=(r,o)=>{if(rs(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[o]=r;const a=Ho(r)?[]:{};return ii(r,(i,l)=>{const s=n(i,o+1);!Ya(s)&&(a[l]=s)}),t[o]=void 0,a}}return r};return n(e,0)},Kw=an("AsyncFunction"),Xw=e=>e&&(rs(e)||Bt(e))&&Bt(e.then)&&Bt(e.catch),P={isArray:Ho,isArrayBuffer:kg,isBuffer:gw,isFormData:Tw,isArrayBufferView:yw,isString:vw,isNumber:Tg,isBoolean:bw,isObject:rs,isPlainObject:Ji,isReadableStream:Pw,isRequest:Cw,isResponse:_w,isHeaders:jw,isUndefined:Ya,isDate:xw,isFile:ww,isBlob:Sw,isRegExp:Hw,isFunction:Bt,isStream:kw,isURLSearchParams:Ow,isTypedArray:zw,isFileList:Ew,forEach:ii,merge:gc,extend:Nw,trim:Aw,stripBOM:Rw,inherits:Dw,toFlatObject:Fw,kindOf:ts,kindOfTest:an,endsWith:Lw,toArray:Mw,forEachEntry:Iw,matchAll:$w,isHTMLForm:Uw,hasOwnProperty:Hp,hasOwnProp:Hp,reduceDescriptors:_g,freezeMethods:Vw,toObjectSet:qw,toCamelCase:Bw,noop:Ww,toFiniteNumber:Gw,findKey:Og,global:Pg,isContextDefined:Cg,ALPHABET:jg,generateString:Yw,isSpecCompliantForm:Qw,toJSONObject:Zw,isAsyncFn:Kw,isThenable:Xw};function J(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}P.inherits(J,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:P.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ag=J.prototype,Ng={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Ng[e]={value:e}});Object.defineProperties(J,Ng);Object.defineProperty(Ag,"isAxiosError",{value:!0});J.from=(e,t,n,r,o,a)=>{const i=Object.create(Ag);return P.toFlatObject(e,i,function(s){return s!==Error.prototype},l=>l!=="isAxiosError"),J.call(i,e.message,t,n,r,o),i.cause=e,i.name=e.name,a&&Object.assign(i,a),i};const Jw=null;function yc(e){return P.isPlainObject(e)||P.isArray(e)}function Rg(e){return P.endsWith(e,"[]")?e.slice(0,-2):e}function qp(e,t,n){return e?e.concat(t).map(function(o,a){return o=Rg(o),!n&&a?"["+o+"]":o}).join(n?".":""):t}function eS(e){return P.isArray(e)&&!e.some(yc)}const tS=P.toFlatObject(P,{},null,function(t){return/^is[A-Z]/.test(t)});function os(e,t,n){if(!P.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=P.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,E){return!P.isUndefined(E[m])});const r=n.metaTokens,o=n.visitor||c,a=n.dots,i=n.indexes,s=(n.Blob||typeof Blob<"u"&&Blob)&&P.isSpecCompliantForm(t);if(!P.isFunction(o))throw new TypeError("visitor must be a function");function u(y){if(y===null)return"";if(P.isDate(y))return y.toISOString();if(!s&&P.isBlob(y))throw new J("Blob is not supported. Use a Buffer instead.");return P.isArrayBuffer(y)||P.isTypedArray(y)?s&&typeof Blob=="function"?new Blob([y]):Buffer.from(y):y}function c(y,m,E){let g=y;if(y&&!E&&typeof y=="object"){if(P.endsWith(m,"{}"))m=r?m:m.slice(0,-2),y=JSON.stringify(y);else if(P.isArray(y)&&eS(y)||(P.isFileList(y)||P.endsWith(m,"[]"))&&(g=P.toArray(y)))return m=Rg(m),g.forEach(function(v,k){!(P.isUndefined(v)||v===null)&&t.append(i===!0?qp([m],k,a):i===null?m:m+"[]",u(v))}),!1}return yc(y)?!0:(t.append(qp(E,m,a),u(y)),!1)}const d=[],f=Object.assign(tS,{defaultVisitor:c,convertValue:u,isVisitable:yc});function x(y,m){if(!P.isUndefined(y)){if(d.indexOf(y)!==-1)throw Error("Circular reference detected in "+m.join("."));d.push(y),P.forEach(y,function(g,h){(!(P.isUndefined(g)||g===null)&&o.call(t,g,P.isString(h)?h.trim():h,m,f))===!0&&x(g,m?m.concat(h):[h])}),d.pop()}}if(!P.isObject(e))throw new TypeError("data must be an object");return x(e),t}function Wp(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function $d(e,t){this._pairs=[],e&&os(e,this,t)}const Dg=$d.prototype;Dg.append=function(t,n){this._pairs.push([t,n])};Dg.toString=function(t){const n=t?function(r){return t.call(this,r,Wp)}:Wp;return this._pairs.map(function(o){return n(o[0])+"="+n(o[1])},"").join("&")};function nS(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Fg(e,t,n){if(!t)return e;const r=n&&n.encode||nS,o=n&&n.serialize;let a;if(o?a=o(t,n):a=P.isURLSearchParams(t)?t.toString():new $d(t,n).toString(r),a){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+a}return e}class Gp{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){P.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Lg={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},rS=typeof URLSearchParams<"u"?URLSearchParams:$d,oS=typeof FormData<"u"?FormData:null,aS=typeof Blob<"u"?Blob:null,iS={isBrowser:!0,classes:{URLSearchParams:rS,FormData:oS,Blob:aS},protocols:["http","https","file","blob","url","data"]},Ud=typeof window<"u"&&typeof document<"u",lS=(e=>Ud&&["ReactNative","NativeScript","NS"].indexOf(e)<0)(typeof navigator<"u"&&navigator.product),sS=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",uS=Ud&&window.location.href||"http://localhost",cS=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Ud,hasStandardBrowserEnv:lS,hasStandardBrowserWebWorkerEnv:sS,origin:uS},Symbol.toStringTag,{value:"Module"})),rn={...cS,...iS};function dS(e,t){return os(e,new rn.classes.URLSearchParams,Object.assign({visitor:function(n,r,o,a){return rn.isNode&&P.isBuffer(n)?(this.append(r,n.toString("base64")),!1):a.defaultVisitor.apply(this,arguments)}},t))}function fS(e){return P.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function pS(e){const t={},n=Object.keys(e);let r;const o=n.length;let a;for(r=0;r<o;r++)a=n[r],t[a]=e[a];return t}function Mg(e){function t(n,r,o,a){let i=n[a++];if(i==="__proto__")return!0;const l=Number.isFinite(+i),s=a>=n.length;return i=!i&&P.isArray(o)?o.length:i,s?(P.hasOwnProp(o,i)?o[i]=[o[i],r]:o[i]=r,!l):((!o[i]||!P.isObject(o[i]))&&(o[i]=[]),t(n,r,o[i],a)&&P.isArray(o[i])&&(o[i]=pS(o[i])),!l)}if(P.isFormData(e)&&P.isFunction(e.entries)){const n={};return P.forEachEntry(e,(r,o)=>{t(fS(r),o,n,0)}),n}return null}function hS(e,t,n){if(P.isString(e))try{return(t||JSON.parse)(e),P.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const li={transitional:Lg,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",o=r.indexOf("application/json")>-1,a=P.isObject(t);if(a&&P.isHTMLForm(t)&&(t=new FormData(t)),P.isFormData(t))return o?JSON.stringify(Mg(t)):t;if(P.isArrayBuffer(t)||P.isBuffer(t)||P.isStream(t)||P.isFile(t)||P.isBlob(t)||P.isReadableStream(t))return t;if(P.isArrayBufferView(t))return t.buffer;if(P.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let l;if(a){if(r.indexOf("application/x-www-form-urlencoded")>-1)return dS(t,this.formSerializer).toString();if((l=P.isFileList(t))||r.indexOf("multipart/form-data")>-1){const s=this.env&&this.env.FormData;return os(l?{"files[]":t}:t,s&&new s,this.formSerializer)}}return a||o?(n.setContentType("application/json",!1),hS(t)):t}],transformResponse:[function(t){const n=this.transitional||li.transitional,r=n&&n.forcedJSONParsing,o=this.responseType==="json";if(P.isResponse(t)||P.isReadableStream(t))return t;if(t&&P.isString(t)&&(r&&!this.responseType||o)){const i=!(n&&n.silentJSONParsing)&&o;try{return JSON.parse(t)}catch(l){if(i)throw l.name==="SyntaxError"?J.from(l,J.ERR_BAD_RESPONSE,this,null,this.response):l}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:rn.classes.FormData,Blob:rn.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};P.forEach(["delete","get","head","post","put","patch"],e=>{li.headers[e]={}});const mS=P.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gS=e=>{const t={};let n,r,o;return e&&e.split(`
`).forEach(function(i){o=i.indexOf(":"),n=i.substring(0,o).trim().toLowerCase(),r=i.substring(o+1).trim(),!(!n||t[n]&&mS[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},Yp=Symbol("internals");function ua(e){return e&&String(e).trim().toLowerCase()}function el(e){return e===!1||e==null?e:P.isArray(e)?e.map(el):String(e)}function yS(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const vS=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function iu(e,t,n,r,o){if(P.isFunction(r))return r.call(this,t,n);if(o&&(t=n),!!P.isString(t)){if(P.isString(r))return t.indexOf(r)!==-1;if(P.isRegExp(r))return r.test(t)}}function bS(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function xS(e,t){const n=P.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(o,a,i){return this[r].call(this,t,o,a,i)},configurable:!0})})}let wt=class{constructor(t){t&&this.set(t)}set(t,n,r){const o=this;function a(l,s,u){const c=ua(s);if(!c)throw new Error("header name must be a non-empty string");const d=P.findKey(o,c);(!d||o[d]===void 0||u===!0||u===void 0&&o[d]!==!1)&&(o[d||s]=el(l))}const i=(l,s)=>P.forEach(l,(u,c)=>a(u,c,s));if(P.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(P.isString(t)&&(t=t.trim())&&!vS(t))i(gS(t),n);else if(P.isHeaders(t))for(const[l,s]of t.entries())a(s,l,r);else t!=null&&a(n,t,r);return this}get(t,n){if(t=ua(t),t){const r=P.findKey(this,t);if(r){const o=this[r];if(!n)return o;if(n===!0)return yS(o);if(P.isFunction(n))return n.call(this,o,r);if(P.isRegExp(n))return n.exec(o);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=ua(t),t){const r=P.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||iu(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let o=!1;function a(i){if(i=ua(i),i){const l=P.findKey(r,i);l&&(!n||iu(r,r[l],l,n))&&(delete r[l],o=!0)}}return P.isArray(t)?t.forEach(a):a(t),o}clear(t){const n=Object.keys(this);let r=n.length,o=!1;for(;r--;){const a=n[r];(!t||iu(this,this[a],a,t,!0))&&(delete this[a],o=!0)}return o}normalize(t){const n=this,r={};return P.forEach(this,(o,a)=>{const i=P.findKey(r,a);if(i){n[i]=el(o),delete n[a];return}const l=t?bS(a):String(a).trim();l!==a&&delete n[a],n[l]=el(o),r[l]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return P.forEach(this,(r,o)=>{r!=null&&r!==!1&&(n[o]=t&&P.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(o=>r.set(o)),r}static accessor(t){const r=(this[Yp]=this[Yp]={accessors:{}}).accessors,o=this.prototype;function a(i){const l=ua(i);r[l]||(xS(o,i),r[l]=!0)}return P.isArray(t)?t.forEach(a):a(t),this}};wt.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);P.reduceDescriptors(wt.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});P.freezeMethods(wt);function lu(e,t){const n=this||li,r=t||n,o=wt.from(r.headers);let a=r.data;return P.forEach(e,function(l){a=l.call(n,a,o.normalize(),t?t.status:void 0)}),o.normalize(),a}function zg(e){return!!(e&&e.__CANCEL__)}function Vo(e,t,n){J.call(this,e??"canceled",J.ERR_CANCELED,t,n),this.name="CanceledError"}P.inherits(Vo,J,{__CANCEL__:!0});function Ig(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new J("Request failed with status code "+n.status,[J.ERR_BAD_REQUEST,J.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function wS(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function SS(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o=0,a=0,i;return t=t!==void 0?t:1e3,function(s){const u=Date.now(),c=r[a];i||(i=u),n[o]=s,r[o]=u;let d=a,f=0;for(;d!==o;)f+=n[d++],d=d%e;if(o=(o+1)%e,o===a&&(a=(a+1)%e),u-i<t)return;const x=c&&u-c;return x?Math.round(f*1e3/x):void 0}}function ES(e,t){let n=0;const r=1e3/t;let o=null;return function(){const i=this===!0,l=Date.now();if(i||l-n>r)return o&&(clearTimeout(o),o=null),n=l,e.apply(null,arguments);o||(o=setTimeout(()=>(o=null,n=Date.now(),e.apply(null,arguments)),r-(l-n)))}}const Cl=(e,t,n=3)=>{let r=0;const o=SS(50,250);return ES(a=>{const i=a.loaded,l=a.lengthComputable?a.total:void 0,s=i-r,u=o(s),c=i<=l;r=i;const d={loaded:i,total:l,progress:l?i/l:void 0,bytes:s,rate:u||void 0,estimated:u&&l&&c?(l-i)/u:void 0,event:a,lengthComputable:l!=null};d[t?"download":"upload"]=!0,e(d)},n)},kS=rn.hasStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function o(a){let i=a;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=o(window.location.href),function(i){const l=P.isString(i)?o(i):i;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}(),TS=rn.hasStandardBrowserEnv?{write(e,t,n,r,o,a){const i=[e+"="+encodeURIComponent(t)];P.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),P.isString(r)&&i.push("path="+r),P.isString(o)&&i.push("domain="+o),a===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function OS(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function PS(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function $g(e,t){return e&&!OS(t)?PS(e,t):t}const Qp=e=>e instanceof wt?{...e}:e;function Hr(e,t){t=t||{};const n={};function r(u,c,d){return P.isPlainObject(u)&&P.isPlainObject(c)?P.merge.call({caseless:d},u,c):P.isPlainObject(c)?P.merge({},c):P.isArray(c)?c.slice():c}function o(u,c,d){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u,d)}else return r(u,c,d)}function a(u,c){if(!P.isUndefined(c))return r(void 0,c)}function i(u,c){if(P.isUndefined(c)){if(!P.isUndefined(u))return r(void 0,u)}else return r(void 0,c)}function l(u,c,d){if(d in t)return r(u,c);if(d in e)return r(void 0,u)}const s={url:a,method:a,data:a,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:l,headers:(u,c)=>o(Qp(u),Qp(c),!0)};return P.forEach(Object.keys(Object.assign({},e,t)),function(c){const d=s[c]||o,f=d(e[c],t[c],c);P.isUndefined(f)&&d!==l||(n[c]=f)}),n}const Ug=e=>{const t=Hr({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:o,xsrfCookieName:a,headers:i,auth:l}=t;t.headers=i=wt.from(i),t.url=Fg($g(t.baseURL,t.url),e.params,e.paramsSerializer),l&&i.set("Authorization","Basic "+btoa((l.username||"")+":"+(l.password?unescape(encodeURIComponent(l.password)):"")));let s;if(P.isFormData(n)){if(rn.hasStandardBrowserEnv||rn.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((s=i.getContentType())!==!1){const[u,...c]=s?s.split(";").map(d=>d.trim()).filter(Boolean):[];i.setContentType([u||"multipart/form-data",...c].join("; "))}}if(rn.hasStandardBrowserEnv&&(r&&P.isFunction(r)&&(r=r(t)),r||r!==!1&&kS(t.url))){const u=o&&a&&TS.read(a);u&&i.set(o,u)}return t},CS=typeof XMLHttpRequest<"u",_S=CS&&function(e){return new Promise(function(n,r){const o=Ug(e);let a=o.data;const i=wt.from(o.headers).normalize();let{responseType:l}=o,s;function u(){o.cancelToken&&o.cancelToken.unsubscribe(s),o.signal&&o.signal.removeEventListener("abort",s)}let c=new XMLHttpRequest;c.open(o.method.toUpperCase(),o.url,!0),c.timeout=o.timeout;function d(){if(!c)return;const x=wt.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),m={data:!l||l==="text"||l==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:x,config:e,request:c};Ig(function(g){n(g),u()},function(g){r(g),u()},m),c=null}"onloadend"in c?c.onloadend=d:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(d)},c.onabort=function(){c&&(r(new J("Request aborted",J.ECONNABORTED,o,c)),c=null)},c.onerror=function(){r(new J("Network Error",J.ERR_NETWORK,o,c)),c=null},c.ontimeout=function(){let y=o.timeout?"timeout of "+o.timeout+"ms exceeded":"timeout exceeded";const m=o.transitional||Lg;o.timeoutErrorMessage&&(y=o.timeoutErrorMessage),r(new J(y,m.clarifyTimeoutError?J.ETIMEDOUT:J.ECONNABORTED,o,c)),c=null},a===void 0&&i.setContentType(null),"setRequestHeader"in c&&P.forEach(i.toJSON(),function(y,m){c.setRequestHeader(m,y)}),P.isUndefined(o.withCredentials)||(c.withCredentials=!!o.withCredentials),l&&l!=="json"&&(c.responseType=o.responseType),typeof o.onDownloadProgress=="function"&&c.addEventListener("progress",Cl(o.onDownloadProgress,!0)),typeof o.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",Cl(o.onUploadProgress)),(o.cancelToken||o.signal)&&(s=x=>{c&&(r(!x||x.type?new Vo(null,e,c):x),c.abort(),c=null)},o.cancelToken&&o.cancelToken.subscribe(s),o.signal&&(o.signal.aborted?s():o.signal.addEventListener("abort",s)));const f=wS(o.url);if(f&&rn.protocols.indexOf(f)===-1){r(new J("Unsupported protocol "+f+":",J.ERR_BAD_REQUEST,e));return}c.send(a||null)})},jS=(e,t)=>{let n=new AbortController,r;const o=function(s){if(!r){r=!0,i();const u=s instanceof Error?s:this.reason;n.abort(u instanceof J?u:new Vo(u instanceof Error?u.message:u))}};let a=t&&setTimeout(()=>{o(new J(`timeout ${t} of ms exceeded`,J.ETIMEDOUT))},t);const i=()=>{e&&(a&&clearTimeout(a),a=null,e.forEach(s=>{s&&(s.removeEventListener?s.removeEventListener("abort",o):s.unsubscribe(o))}),e=null)};e.forEach(s=>s&&s.addEventListener&&s.addEventListener("abort",o));const{signal:l}=n;return l.unsubscribe=i,[l,()=>{a&&clearTimeout(a),a=null}]},AS=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,o;for(;r<n;)o=r+t,yield e.slice(r,o),r=o},NS=async function*(e,t,n){for await(const r of e)yield*AS(ArrayBuffer.isView(r)?r:await n(String(r)),t)},Zp=(e,t,n,r,o)=>{const a=NS(e,t,o);let i=0;return new ReadableStream({type:"bytes",async pull(l){const{done:s,value:u}=await a.next();if(s){l.close(),r();return}let c=u.byteLength;n&&n(i+=c),l.enqueue(new Uint8Array(u))},cancel(l){return r(l),a.return()}},{highWaterMark:2})},Kp=(e,t)=>{const n=e!=null;return r=>setTimeout(()=>t({lengthComputable:n,total:e,loaded:r}))},as=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",Bg=as&&typeof ReadableStream=="function",vc=as&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),RS=Bg&&(()=>{let e=!1;const t=new Request(rn.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t})(),Xp=64*1024,bc=Bg&&!!(()=>{try{return P.isReadableStream(new Response("").body)}catch{}})(),_l={stream:bc&&(e=>e.body)};as&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!_l[t]&&(_l[t]=P.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new J(`Response type '${t}' is not supported`,J.ERR_NOT_SUPPORT,r)})})})(new Response);const DS=async e=>{if(e==null)return 0;if(P.isBlob(e))return e.size;if(P.isSpecCompliantForm(e))return(await new Request(e).arrayBuffer()).byteLength;if(P.isArrayBufferView(e))return e.byteLength;if(P.isURLSearchParams(e)&&(e=e+""),P.isString(e))return(await vc(e)).byteLength},FS=async(e,t)=>{const n=P.toFiniteNumber(e.getContentLength());return n??DS(t)},LS=as&&(async e=>{let{url:t,method:n,data:r,signal:o,cancelToken:a,timeout:i,onDownloadProgress:l,onUploadProgress:s,responseType:u,headers:c,withCredentials:d="same-origin",fetchOptions:f}=Ug(e);u=u?(u+"").toLowerCase():"text";let[x,y]=o||a||i?jS([o,a],i):[],m,E;const g=()=>{!m&&setTimeout(()=>{x&&x.unsubscribe()}),m=!0};let h;try{if(s&&RS&&n!=="get"&&n!=="head"&&(h=await FS(c,r))!==0){let C=new Request(t,{method:"POST",body:r,duplex:"half"}),b;P.isFormData(r)&&(b=C.headers.get("content-type"))&&c.setContentType(b),C.body&&(r=Zp(C.body,Xp,Kp(h,Cl(s)),null,vc))}P.isString(d)||(d=d?"cors":"omit"),E=new Request(t,{...f,signal:x,method:n.toUpperCase(),headers:c.normalize().toJSON(),body:r,duplex:"half",withCredentials:d});let v=await fetch(E);const k=bc&&(u==="stream"||u==="response");if(bc&&(l||k)){const C={};["status","statusText","headers"].forEach(A=>{C[A]=v[A]});const b=P.toFiniteNumber(v.headers.get("content-length"));v=new Response(Zp(v.body,Xp,l&&Kp(b,Cl(l,!0)),k&&g,vc),C)}u=u||"text";let j=await _l[P.findKey(_l,u)||"text"](v,e);return!k&&g(),y&&y(),await new Promise((C,b)=>{Ig(C,b,{data:j,headers:wt.from(v.headers),status:v.status,statusText:v.statusText,config:e,request:E})})}catch(v){throw g(),v&&v.name==="TypeError"&&/fetch/i.test(v.message)?Object.assign(new J("Network Error",J.ERR_NETWORK,e,E),{cause:v.cause||v}):J.from(v,v&&v.code,e,E)}}),xc={http:Jw,xhr:_S,fetch:LS};P.forEach(xc,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Jp=e=>`- ${e}`,MS=e=>P.isFunction(e)||e===null||e===!1,Hg={getAdapter:e=>{e=P.isArray(e)?e:[e];const{length:t}=e;let n,r;const o={};for(let a=0;a<t;a++){n=e[a];let i;if(r=n,!MS(n)&&(r=xc[(i=String(n)).toLowerCase()],r===void 0))throw new J(`Unknown adapter '${i}'`);if(r)break;o[i||"#"+a]=r}if(!r){const a=Object.entries(o).map(([l,s])=>`adapter ${l} `+(s===!1?"is not supported by the environment":"is not available in the build"));let i=t?a.length>1?`since :
`+a.map(Jp).join(`
`):" "+Jp(a[0]):"as no adapter specified";throw new J("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:xc};function su(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Vo(null,e)}function eh(e){return su(e),e.headers=wt.from(e.headers),e.data=lu.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Hg.getAdapter(e.adapter||li.adapter)(e).then(function(r){return su(e),r.data=lu.call(e,e.transformResponse,r),r.headers=wt.from(r.headers),r},function(r){return zg(r)||(su(e),r&&r.response&&(r.response.data=lu.call(e,e.transformResponse,r.response),r.response.headers=wt.from(r.response.headers))),Promise.reject(r)})}const Vg="1.7.2",Bd={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Bd[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const th={};Bd.transitional=function(t,n,r){function o(a,i){return"[Axios v"+Vg+"] Transitional option '"+a+"'"+i+(r?". "+r:"")}return(a,i,l)=>{if(t===!1)throw new J(o(i," has been removed"+(n?" in "+n:"")),J.ERR_DEPRECATED);return n&&!th[i]&&(th[i]=!0,console.warn(o(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(a,i,l):!0}};function zS(e,t,n){if(typeof e!="object")throw new J("options must be an object",J.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;for(;o-- >0;){const a=r[o],i=t[a];if(i){const l=e[a],s=l===void 0||i(l,a,e);if(s!==!0)throw new J("option "+a+" must be "+s,J.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new J("Unknown option "+a,J.ERR_BAD_OPTION)}}const wc={assertOptions:zS,validators:Bd},Vn=wc.validators;let Nr=class{constructor(t){this.defaults=t,this.interceptors={request:new Gp,response:new Gp}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let o;Error.captureStackTrace?Error.captureStackTrace(o={}):o=new Error;const a=o.stack?o.stack.replace(/^.+\n/,""):"";try{r.stack?a&&!String(r.stack).endsWith(a.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+a):r.stack=a}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=Hr(this.defaults,n);const{transitional:r,paramsSerializer:o,headers:a}=n;r!==void 0&&wc.assertOptions(r,{silentJSONParsing:Vn.transitional(Vn.boolean),forcedJSONParsing:Vn.transitional(Vn.boolean),clarifyTimeoutError:Vn.transitional(Vn.boolean)},!1),o!=null&&(P.isFunction(o)?n.paramsSerializer={serialize:o}:wc.assertOptions(o,{encode:Vn.function,serialize:Vn.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=a&&P.merge(a.common,a[n.method]);a&&P.forEach(["delete","get","head","post","put","patch","common"],y=>{delete a[y]}),n.headers=wt.concat(i,a);const l=[];let s=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(s=s&&m.synchronous,l.unshift(m.fulfilled,m.rejected))});const u=[];this.interceptors.response.forEach(function(m){u.push(m.fulfilled,m.rejected)});let c,d=0,f;if(!s){const y=[eh.bind(this),void 0];for(y.unshift.apply(y,l),y.push.apply(y,u),f=y.length,c=Promise.resolve(n);d<f;)c=c.then(y[d++],y[d++]);return c}f=l.length;let x=n;for(d=0;d<f;){const y=l[d++],m=l[d++];try{x=y(x)}catch(E){m.call(this,E);break}}try{c=eh.call(this,x)}catch(y){return Promise.reject(y)}for(d=0,f=u.length;d<f;)c=c.then(u[d++],u[d++]);return c}getUri(t){t=Hr(this.defaults,t);const n=$g(t.baseURL,t.url);return Fg(n,t.params,t.paramsSerializer)}};P.forEach(["delete","get","head","options"],function(t){Nr.prototype[t]=function(n,r){return this.request(Hr(r||{},{method:t,url:n,data:(r||{}).data}))}});P.forEach(["post","put","patch"],function(t){function n(r){return function(a,i,l){return this.request(Hr(l||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:a,data:i}))}}Nr.prototype[t]=n(),Nr.prototype[t+"Form"]=n(!0)});let IS=class qg{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(a){n=a});const r=this;this.promise.then(o=>{if(!r._listeners)return;let a=r._listeners.length;for(;a-- >0;)r._listeners[a](o);r._listeners=null}),this.promise.then=o=>{let a;const i=new Promise(l=>{r.subscribe(l),a=l}).then(o);return i.cancel=function(){r.unsubscribe(a)},i},t(function(a,i,l){r.reason||(r.reason=new Vo(a,i,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new qg(function(o){t=o}),cancel:t}}};function $S(e){return function(n){return e.apply(null,n)}}function US(e){return P.isObject(e)&&e.isAxiosError===!0}const Sc={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Sc).forEach(([e,t])=>{Sc[t]=e});function Wg(e){const t=new Nr(e),n=Eg(Nr.prototype.request,t);return P.extend(n,Nr.prototype,t,{allOwnKeys:!0}),P.extend(n,t,null,{allOwnKeys:!0}),n.create=function(o){return Wg(Hr(e,o))},n}const ce=Wg(li);ce.Axios=Nr;ce.CanceledError=Vo;ce.CancelToken=IS;ce.isCancel=zg;ce.VERSION=Vg;ce.toFormData=os;ce.AxiosError=J;ce.Cancel=ce.CanceledError;ce.all=function(t){return Promise.all(t)};ce.spread=$S;ce.isAxiosError=US;ce.mergeConfig=Hr;ce.AxiosHeaders=wt;ce.formToJSON=e=>Mg(P.isHTMLForm(e)?new FormData(e):e);ce.getAdapter=Hg.getAdapter;ce.HttpStatusCode=Sc;ce.default=ce;const{Axios:RP,AxiosError:DP,CanceledError:FP,isCancel:LP,CancelToken:MP,VERSION:zP,all:IP,Cancel:$P,isAxiosError:UP,spread:BP,toFormData:HP,AxiosHeaders:VP,HttpStatusCode:qP,formToJSON:WP,getAdapter:GP,mergeConfig:YP}=ce;var Gg={exports:{}},BS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",HS=BS,VS=HS;function Yg(){}function Qg(){}Qg.resetWarningCache=Yg;var qS=function(){function e(r,o,a,i,l,s){if(s!==VS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}e.isRequired=e;function t(){return e}var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:Qg,resetWarningCache:Yg};return n.PropTypes=n,n};Gg.exports=qS();var WS=Gg.exports;const xe=pr(WS);function GS(e){return e&&typeof e=="object"&&"default"in e?e.default:e}var Zg=w,YS=GS(Zg);function nh(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function QS(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var ZS=!!(typeof window<"u"&&window.document&&window.document.createElement);function KS(e,t,n){if(typeof e!="function")throw new Error("Expected reducePropsToState to be a function.");if(typeof t!="function")throw new Error("Expected handleStateChangeOnClient to be a function.");if(typeof n<"u"&&typeof n!="function")throw new Error("Expected mapStateOnServer to either be undefined or a function.");function r(o){return o.displayName||o.name||"Component"}return function(a){if(typeof a!="function")throw new Error("Expected WrappedComponent to be a React component.");var i=[],l;function s(){l=e(i.map(function(c){return c.props})),u.canUseDOM?t(l):n&&(l=n(l))}var u=function(c){QS(d,c);function d(){return c.apply(this,arguments)||this}d.peek=function(){return l},d.rewind=function(){if(d.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var y=l;return l=void 0,i=[],y};var f=d.prototype;return f.UNSAFE_componentWillMount=function(){i.push(this),s()},f.componentDidUpdate=function(){s()},f.componentWillUnmount=function(){var y=i.indexOf(this);i.splice(y,1),s()},f.render=function(){return YS.createElement(a,this.props)},d}(Zg.PureComponent);return nh(u,"displayName","SideEffect("+r(a)+")"),nh(u,"canUseDOM",ZS),u}}var XS=KS;const JS=pr(XS);var e2=typeof Element<"u",t2=typeof Map=="function",n2=typeof Set=="function",r2=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function tl(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!tl(e[r],t[r]))return!1;return!0}var a;if(t2&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!tl(r.value[1],t.get(r.value[0])))return!1;return!0}if(n2&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(r2&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(e2&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!tl(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var o2=function(t,n){try{return tl(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const a2=pr(o2);/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var rh=Object.getOwnPropertySymbols,i2=Object.prototype.hasOwnProperty,l2=Object.prototype.propertyIsEnumerable;function s2(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function u2(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map(function(a){return t[a]});if(r.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(a){o[a]=a}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var c2=u2()?Object.assign:function(e,t){for(var n,r=s2(e),o,a=1;a<arguments.length;a++){n=Object(arguments[a]);for(var i in n)i2.call(n,i)&&(r[i]=n[i]);if(rh){o=rh(n);for(var l=0;l<o.length;l++)l2.call(n,o[l])&&(r[o[l]]=n[o[l]])}}return r};const d2=pr(c2);var Rr={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},K={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(K).map(function(e){return K[e]});var we={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},jl={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},Qa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},f2=Object.keys(jl).reduce(function(e,t){return e[jl[t]]=t,e},{}),p2=[K.NOSCRIPT,K.SCRIPT,K.STYLE],Jt="data-react-helmet",h2=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m2=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},g2=function(){function e(t,n){for(var r=0;r<n.length;r++){var o=n[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),ft=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y2=function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},oh=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},v2=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:e},Ec=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n===!1?String(t):String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},b2=function(t){var n=Co(t,K.TITLE),r=Co(t,Qa.TITLE_TEMPLATE);if(r&&n)return r.replace(/%s/g,function(){return Array.isArray(n)?n.join(""):n});var o=Co(t,Qa.DEFAULT_TITLE);return n||o||void 0},x2=function(t){return Co(t,Qa.ON_CHANGE_CLIENT_STATE)||function(){}},uu=function(t,n){return n.filter(function(r){return typeof r[t]<"u"}).map(function(r){return r[t]}).reduce(function(r,o){return ft({},r,o)},{})},w2=function(t,n){return n.filter(function(r){return typeof r[K.BASE]<"u"}).map(function(r){return r[K.BASE]}).reverse().reduce(function(r,o){if(!r.length)for(var a=Object.keys(o),i=0;i<a.length;i++){var l=a[i],s=l.toLowerCase();if(t.indexOf(s)!==-1&&o[s])return r.concat(o)}return r},[])},ca=function(t,n,r){var o={};return r.filter(function(a){return Array.isArray(a[t])?!0:(typeof a[t]<"u"&&T2("Helmet: "+t+' should be of type "Array". Instead found type "'+h2(a[t])+'"'),!1)}).map(function(a){return a[t]}).reverse().reduce(function(a,i){var l={};i.filter(function(f){for(var x=void 0,y=Object.keys(f),m=0;m<y.length;m++){var E=y[m],g=E.toLowerCase();n.indexOf(g)!==-1&&!(x===we.REL&&f[x].toLowerCase()==="canonical")&&!(g===we.REL&&f[g].toLowerCase()==="stylesheet")&&(x=g),n.indexOf(E)!==-1&&(E===we.INNER_HTML||E===we.CSS_TEXT||E===we.ITEM_PROP)&&(x=E)}if(!x||!f[x])return!1;var h=f[x].toLowerCase();return o[x]||(o[x]={}),l[x]||(l[x]={}),o[x][h]?!1:(l[x][h]=!0,!0)}).reverse().forEach(function(f){return a.push(f)});for(var s=Object.keys(l),u=0;u<s.length;u++){var c=s[u],d=d2({},o[c],l[c]);o[c]=d}return a},[]).reverse()},Co=function(t,n){for(var r=t.length-1;r>=0;r--){var o=t[r];if(o.hasOwnProperty(n))return o[n]}return null},S2=function(t){return{baseTag:w2([we.HREF,we.TARGET],t),bodyAttributes:uu(Rr.BODY,t),defer:Co(t,Qa.DEFER),encode:Co(t,Qa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:uu(Rr.HTML,t),linkTags:ca(K.LINK,[we.REL,we.HREF],t),metaTags:ca(K.META,[we.NAME,we.CHARSET,we.HTTPEQUIV,we.PROPERTY,we.ITEM_PROP],t),noscriptTags:ca(K.NOSCRIPT,[we.INNER_HTML],t),onChangeClientState:x2(t),scriptTags:ca(K.SCRIPT,[we.SRC,we.INNER_HTML],t),styleTags:ca(K.STYLE,[we.CSS_TEXT],t),title:b2(t),titleAttributes:uu(Rr.TITLE,t)}},kc=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){kc(t)},0)}}(),ah=function(t){return clearTimeout(t)},E2=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||kc:global.requestAnimationFrame||kc,k2=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ah:global.cancelAnimationFrame||ah,T2=function(t){return console&&typeof console.warn=="function"&&console.warn(t)},da=null,O2=function(t){da&&k2(da),t.defer?da=E2(function(){ih(t,function(){da=null})}):(ih(t),da=null)},ih=function(t,n){var r=t.baseTag,o=t.bodyAttributes,a=t.htmlAttributes,i=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.onChangeClientState,c=t.scriptTags,d=t.styleTags,f=t.title,x=t.titleAttributes;Tc(K.BODY,o),Tc(K.HTML,a),P2(f,x);var y={baseTag:oo(K.BASE,r),linkTags:oo(K.LINK,i),metaTags:oo(K.META,l),noscriptTags:oo(K.NOSCRIPT,s),scriptTags:oo(K.SCRIPT,c),styleTags:oo(K.STYLE,d)},m={},E={};Object.keys(y).forEach(function(g){var h=y[g],v=h.newTags,k=h.oldTags;v.length&&(m[g]=v),k.length&&(E[g]=y[g].oldTags)}),n&&n(),u(t,m,E)},Kg=function(t){return Array.isArray(t)?t.join(""):t},P2=function(t,n){typeof t<"u"&&document.title!==t&&(document.title=Kg(t)),Tc(K.TITLE,n)},Tc=function(t,n){var r=document.getElementsByTagName(t)[0];if(r){for(var o=r.getAttribute(Jt),a=o?o.split(","):[],i=[].concat(a),l=Object.keys(n),s=0;s<l.length;s++){var u=l[s],c=n[u]||"";r.getAttribute(u)!==c&&r.setAttribute(u,c),a.indexOf(u)===-1&&a.push(u);var d=i.indexOf(u);d!==-1&&i.splice(d,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);a.length===i.length?r.removeAttribute(Jt):r.getAttribute(Jt)!==l.join(",")&&r.setAttribute(Jt,l.join(","))}},oo=function(t,n){var r=document.head||document.querySelector(K.HEAD),o=r.querySelectorAll(t+"["+Jt+"]"),a=Array.prototype.slice.call(o),i=[],l=void 0;return n&&n.length&&n.forEach(function(s){var u=document.createElement(t);for(var c in s)if(s.hasOwnProperty(c))if(c===we.INNER_HTML)u.innerHTML=s.innerHTML;else if(c===we.CSS_TEXT)u.styleSheet?u.styleSheet.cssText=s.cssText:u.appendChild(document.createTextNode(s.cssText));else{var d=typeof s[c]>"u"?"":s[c];u.setAttribute(c,d)}u.setAttribute(Jt,"true"),a.some(function(f,x){return l=x,u.isEqualNode(f)})?a.splice(l,1):i.push(u)}),a.forEach(function(s){return s.parentNode.removeChild(s)}),i.forEach(function(s){return r.appendChild(s)}),{oldTags:a,newTags:i}},Xg=function(t){return Object.keys(t).reduce(function(n,r){var o=typeof t[r]<"u"?r+'="'+t[r]+'"':""+r;return n?n+" "+o:o},"")},C2=function(t,n,r,o){var a=Xg(r),i=Kg(n);return a?"<"+t+" "+Jt+'="true" '+a+">"+Ec(i,o)+"</"+t+">":"<"+t+" "+Jt+'="true">'+Ec(i,o)+"</"+t+">"},_2=function(t,n,r){return n.reduce(function(o,a){var i=Object.keys(a).filter(function(u){return!(u===we.INNER_HTML||u===we.CSS_TEXT)}).reduce(function(u,c){var d=typeof a[c]>"u"?c:c+'="'+Ec(a[c],r)+'"';return u?u+" "+d:d},""),l=a.innerHTML||a.cssText||"",s=p2.indexOf(t)===-1;return o+"<"+t+" "+Jt+'="true" '+i+(s?"/>":">"+l+"</"+t+">")},"")},Jg=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[jl[o]||o]=t[o],r},n)},j2=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(t).reduce(function(r,o){return r[f2[o]||o]=t[o],r},n)},A2=function(t,n,r){var o,a=(o={key:n},o[Jt]=!0,o),i=Jg(r,a);return[Qe.createElement(K.TITLE,i,n)]},N2=function(t,n){return n.map(function(r,o){var a,i=(a={key:o},a[Jt]=!0,a);return Object.keys(r).forEach(function(l){var s=jl[l]||l;if(s===we.INNER_HTML||s===we.CSS_TEXT){var u=r.innerHTML||r.cssText;i.dangerouslySetInnerHTML={__html:u}}else i[s]=r[l]}),Qe.createElement(t,i)})},Sn=function(t,n,r){switch(t){case K.TITLE:return{toComponent:function(){return A2(t,n.title,n.titleAttributes)},toString:function(){return C2(t,n.title,n.titleAttributes,r)}};case Rr.BODY:case Rr.HTML:return{toComponent:function(){return Jg(n)},toString:function(){return Xg(n)}};default:return{toComponent:function(){return N2(t,n)},toString:function(){return _2(t,n,r)}}}},ey=function(t){var n=t.baseTag,r=t.bodyAttributes,o=t.encode,a=t.htmlAttributes,i=t.linkTags,l=t.metaTags,s=t.noscriptTags,u=t.scriptTags,c=t.styleTags,d=t.title,f=d===void 0?"":d,x=t.titleAttributes;return{base:Sn(K.BASE,n,o),bodyAttributes:Sn(Rr.BODY,r,o),htmlAttributes:Sn(Rr.HTML,a,o),link:Sn(K.LINK,i,o),meta:Sn(K.META,l,o),noscript:Sn(K.NOSCRIPT,s,o),script:Sn(K.SCRIPT,u,o),style:Sn(K.STYLE,c,o),title:Sn(K.TITLE,{title:f,titleAttributes:x},o)}},R2=function(t){var n,r;return r=n=function(o){y2(a,o);function a(){return m2(this,a),v2(this,o.apply(this,arguments))}return a.prototype.shouldComponentUpdate=function(l){return!a2(this.props,l)},a.prototype.mapNestedChildrenToProps=function(l,s){if(!s)return null;switch(l.type){case K.SCRIPT:case K.NOSCRIPT:return{innerHTML:s};case K.STYLE:return{cssText:s}}throw new Error("<"+l.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},a.prototype.flattenArrayTypeChildren=function(l){var s,u=l.child,c=l.arrayTypeChildren,d=l.newChildProps,f=l.nestedChildren;return ft({},c,(s={},s[u.type]=[].concat(c[u.type]||[],[ft({},d,this.mapNestedChildrenToProps(u,f))]),s))},a.prototype.mapObjectTypeChildren=function(l){var s,u,c=l.child,d=l.newProps,f=l.newChildProps,x=l.nestedChildren;switch(c.type){case K.TITLE:return ft({},d,(s={},s[c.type]=x,s.titleAttributes=ft({},f),s));case K.BODY:return ft({},d,{bodyAttributes:ft({},f)});case K.HTML:return ft({},d,{htmlAttributes:ft({},f)})}return ft({},d,(u={},u[c.type]=ft({},f),u))},a.prototype.mapArrayTypeChildrenToProps=function(l,s){var u=ft({},s);return Object.keys(l).forEach(function(c){var d;u=ft({},u,(d={},d[c]=l[c],d))}),u},a.prototype.warnOnInvalidChildren=function(l,s){return!0},a.prototype.mapChildrenToProps=function(l,s){var u=this,c={};return Qe.Children.forEach(l,function(d){if(!(!d||!d.props)){var f=d.props,x=f.children,y=oh(f,["children"]),m=j2(y);switch(u.warnOnInvalidChildren(d,x),d.type){case K.LINK:case K.META:case K.NOSCRIPT:case K.SCRIPT:case K.STYLE:c=u.flattenArrayTypeChildren({child:d,arrayTypeChildren:c,newChildProps:m,nestedChildren:x});break;default:s=u.mapObjectTypeChildren({child:d,newProps:s,newChildProps:m,nestedChildren:x});break}}}),s=this.mapArrayTypeChildrenToProps(c,s),s},a.prototype.render=function(){var l=this.props,s=l.children,u=oh(l,["children"]),c=ft({},u);return s&&(c=this.mapChildrenToProps(s,c)),Qe.createElement(t,c)},g2(a,null,[{key:"canUseDOM",set:function(l){t.canUseDOM=l}}]),a}(Qe.Component),n.propTypes={base:xe.object,bodyAttributes:xe.object,children:xe.oneOfType([xe.arrayOf(xe.node),xe.node]),defaultTitle:xe.string,defer:xe.bool,encodeSpecialCharacters:xe.bool,htmlAttributes:xe.object,link:xe.arrayOf(xe.object),meta:xe.arrayOf(xe.object),noscript:xe.arrayOf(xe.object),onChangeClientState:xe.func,script:xe.arrayOf(xe.object),style:xe.arrayOf(xe.object),title:xe.string,titleAttributes:xe.object,titleTemplate:xe.string},n.defaultProps={defer:!0,encodeSpecialCharacters:!0},n.peek=t.peek,n.rewind=function(){var o=t.rewind();return o||(o=ey({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),o},r},D2=function(){return null},F2=JS(S2,O2,ey)(D2),qt=R2(F2);qt.renderStatic=qt.rewind;function Le(e,t){t===void 0&&(t={});var n=t.insertAt;if(e&&typeof document<"u"){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",n==="top"&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}Le(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var hn=function(){return hn=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},hn.apply(this,arguments)};function Al(e){return Al=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Al(e)}var L2=/^\s+/,M2=/\s+$/;function H(e,t){if(t=t||{},(e=e||"")instanceof H)return e;if(!(this instanceof H))return new H(e,t);var n=function(r){var o={r:0,g:0,b:0},a=1,i=null,l=null,s=null,u=!1,c=!1;typeof r=="string"&&(r=function(y){y=y.replace(L2,"").replace(M2,"").toLowerCase();var m,E=!1;if(Oc[y])y=Oc[y],E=!0;else if(y=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(m=Gt.rgb.exec(y))?{r:m[1],g:m[2],b:m[3]}:(m=Gt.rgba.exec(y))?{r:m[1],g:m[2],b:m[3],a:m[4]}:(m=Gt.hsl.exec(y))?{h:m[1],s:m[2],l:m[3]}:(m=Gt.hsla.exec(y))?{h:m[1],s:m[2],l:m[3],a:m[4]}:(m=Gt.hsv.exec(y))?{h:m[1],s:m[2],v:m[3]}:(m=Gt.hsva.exec(y))?{h:m[1],s:m[2],v:m[3],a:m[4]}:(m=Gt.hex8.exec(y))?{r:St(m[1]),g:St(m[2]),b:St(m[3]),a:fh(m[4]),format:E?"name":"hex8"}:(m=Gt.hex6.exec(y))?{r:St(m[1]),g:St(m[2]),b:St(m[3]),format:E?"name":"hex"}:(m=Gt.hex4.exec(y))?{r:St(m[1]+""+m[1]),g:St(m[2]+""+m[2]),b:St(m[3]+""+m[3]),a:fh(m[4]+""+m[4]),format:E?"name":"hex8"}:(m=Gt.hex3.exec(y))?{r:St(m[1]+""+m[1]),g:St(m[2]+""+m[2]),b:St(m[3]+""+m[3]),format:E?"name":"hex"}:!1}(r)),Al(r)=="object"&&(En(r.r)&&En(r.g)&&En(r.b)?(d=r.r,f=r.g,x=r.b,o={r:255*Se(d,255),g:255*Se(f,255),b:255*Se(x,255)},u=!0,c=String(r.r).substr(-1)==="%"?"prgb":"rgb"):En(r.h)&&En(r.s)&&En(r.v)?(i=ya(r.s),l=ya(r.v),o=function(y,m,E){y=6*Se(y,360),m=Se(m,100),E=Se(E,100);var g=Math.floor(y),h=y-g,v=E*(1-m),k=E*(1-h*m),j=E*(1-(1-h)*m),C=g%6,b=[E,k,v,v,j,E][C],A=[j,E,E,k,v,v][C],F=[v,v,j,E,E,k][C];return{r:255*b,g:255*A,b:255*F}}(r.h,i,l),u=!0,c="hsv"):En(r.h)&&En(r.s)&&En(r.l)&&(i=ya(r.s),s=ya(r.l),o=function(y,m,E){var g,h,v;function k(b,A,F){return F<0&&(F+=1),F>1&&(F-=1),F<1/6?b+6*(A-b)*F:F<.5?A:F<2/3?b+(A-b)*(2/3-F)*6:b}if(y=Se(y,360),m=Se(m,100),E=Se(E,100),m===0)g=h=v=E;else{var j=E<.5?E*(1+m):E+m-E*m,C=2*E-j;g=k(C,j,y+1/3),h=k(C,j,y),v=k(C,j,y-1/3)}return{r:255*g,g:255*h,b:255*v}}(r.h,i,s),u=!0,c="hsl"),r.hasOwnProperty("a")&&(a=r.a));var d,f,x;return a=ty(a),{ok:u,format:r.format||c,r:Math.min(255,Math.max(o.r,0)),g:Math.min(255,Math.max(o.g,0)),b:Math.min(255,Math.max(o.b,0)),a}}(e);this._originalInput=e,this._r=n.r,this._g=n.g,this._b=n.b,this._a=n.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||n.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=n.ok}function lh(e,t,n){e=Se(e,255),t=Se(t,255),n=Se(n,255);var r,o,a=Math.max(e,t,n),i=Math.min(e,t,n),l=(a+i)/2;if(a==i)r=o=0;else{var s=a-i;switch(o=l>.5?s/(2-a-i):s/(a+i),a){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,l}}function sh(e,t,n){e=Se(e,255),t=Se(t,255),n=Se(n,255);var r,o,a=Math.max(e,t,n),i=Math.min(e,t,n),l=a,s=a-i;if(o=a===0?0:s/a,a==i)r=0;else{switch(a){case e:r=(t-n)/s+(t<n?6:0);break;case t:r=(n-e)/s+2;break;case n:r=(e-t)/s+4}r/=6}return{h:r,s:o,v:l}}function uh(e,t,n,r){var o=[en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(Math.round(n).toString(16))];return r&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0):o.join("")}function ch(e,t,n,r){return[en(ny(r)),en(Math.round(e).toString(16)),en(Math.round(t).toString(16)),en(Math.round(n).toString(16))].join("")}function z2(e,t){t=t===0?0:t||10;var n=H(e).toHsl();return n.s-=t/100,n.s=is(n.s),H(n)}function I2(e,t){t=t===0?0:t||10;var n=H(e).toHsl();return n.s+=t/100,n.s=is(n.s),H(n)}function $2(e){return H(e).desaturate(100)}function U2(e,t){t=t===0?0:t||10;var n=H(e).toHsl();return n.l+=t/100,n.l=is(n.l),H(n)}function B2(e,t){t=t===0?0:t||10;var n=H(e).toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(-t/100*255))),n.g=Math.max(0,Math.min(255,n.g-Math.round(-t/100*255))),n.b=Math.max(0,Math.min(255,n.b-Math.round(-t/100*255))),H(n)}function H2(e,t){t=t===0?0:t||10;var n=H(e).toHsl();return n.l-=t/100,n.l=is(n.l),H(n)}function V2(e,t){var n=H(e).toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,H(n)}function q2(e){var t=H(e).toHsl();return t.h=(t.h+180)%360,H(t)}function dh(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var n=H(e).toHsl(),r=[H(e)],o=360/t,a=1;a<t;a++)r.push(H({h:(n.h+a*o)%360,s:n.s,l:n.l}));return r}function W2(e){var t=H(e).toHsl(),n=t.h;return[H(e),H({h:(n+72)%360,s:t.s,l:t.l}),H({h:(n+216)%360,s:t.s,l:t.l})]}function G2(e,t,n){t=t||6,n=n||30;var r=H(e).toHsl(),o=360/n,a=[H(e)];for(r.h=(r.h-(o*t>>1)+720)%360;--t;)r.h=(r.h+o)%360,a.push(H(r));return a}function Y2(e,t){t=t||6;for(var n=H(e).toHsv(),r=n.h,o=n.s,a=n.v,i=[],l=1/t;t--;)i.push(H({h:r,s:o,v:a})),a=(a+l)%1;return i}H.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,n,r=this.toRgb();return e=r.r/255,t=r.g/255,n=r.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(n<=.03928?n/12.92:Math.pow((n+.055)/1.055,2.4))},setAlpha:function(e){return this._a=ty(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=sh(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=sh(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.v);return this._a==1?"hsv("+t+", "+n+"%, "+r+"%)":"hsva("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHsl:function(){var e=lh(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=lh(this._r,this._g,this._b),t=Math.round(360*e.h),n=Math.round(100*e.s),r=Math.round(100*e.l);return this._a==1?"hsl("+t+", "+n+"%, "+r+"%)":"hsla("+t+", "+n+"%, "+r+"%, "+this._roundA+")"},toHex:function(e){return uh(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(t,n,r,o,a){var i=[en(Math.round(t).toString(16)),en(Math.round(n).toString(16)),en(Math.round(r).toString(16)),en(ny(o))];return a&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Se(this._r,255))+"%",g:Math.round(100*Se(this._g,255))+"%",b:Math.round(100*Se(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Se(this._r,255))+"%, "+Math.round(100*Se(this._g,255))+"%, "+Math.round(100*Se(this._b,255))+"%)":"rgba("+Math.round(100*Se(this._r,255))+"%, "+Math.round(100*Se(this._g,255))+"%, "+Math.round(100*Se(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(Q2[uh(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+ch(this._r,this._g,this._b,this._a),n=t,r=this._gradientType?"GradientType = 1, ":"";if(e){var o=H(e);n="#"+ch(o._r,o._g,o._b,o._a)}return"progid:DXImageTransform.Microsoft.gradient("+r+"startColorstr="+t+",endColorstr="+n+")"},toString:function(e){var t=!!e;e=e||this._format;var n=!1,r=this._a<1&&this._a>=0;return t||!r||e!=="hex"&&e!=="hex6"&&e!=="hex3"&&e!=="hex4"&&e!=="hex8"&&e!=="name"?(e==="rgb"&&(n=this.toRgbString()),e==="prgb"&&(n=this.toPercentageRgbString()),e!=="hex"&&e!=="hex6"||(n=this.toHexString()),e==="hex3"&&(n=this.toHexString(!0)),e==="hex4"&&(n=this.toHex8String(!0)),e==="hex8"&&(n=this.toHex8String()),e==="name"&&(n=this.toName()),e==="hsl"&&(n=this.toHslString()),e==="hsv"&&(n=this.toHsvString()),n||this.toHexString()):e==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return H(this.toString())},_applyModification:function(e,t){var n=e.apply(null,[this].concat([].slice.call(t)));return this._r=n._r,this._g=n._g,this._b=n._b,this.setAlpha(n._a),this},lighten:function(){return this._applyModification(U2,arguments)},brighten:function(){return this._applyModification(B2,arguments)},darken:function(){return this._applyModification(H2,arguments)},desaturate:function(){return this._applyModification(z2,arguments)},saturate:function(){return this._applyModification(I2,arguments)},greyscale:function(){return this._applyModification($2,arguments)},spin:function(){return this._applyModification(V2,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(G2,arguments)},complement:function(){return this._applyCombination(q2,arguments)},monochromatic:function(){return this._applyCombination(Y2,arguments)},splitcomplement:function(){return this._applyCombination(W2,arguments)},triad:function(){return this._applyCombination(dh,[3])},tetrad:function(){return this._applyCombination(dh,[4])}},H.fromRatio=function(e,t){if(Al(e)=="object"){var n={};for(var r in e)e.hasOwnProperty(r)&&(n[r]=r==="a"?e[r]:ya(e[r]));e=n}return H(e,t)},H.equals=function(e,t){return!(!e||!t)&&H(e).toRgbString()==H(t).toRgbString()},H.random=function(){return H.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},H.mix=function(e,t,n){n=n===0?0:n||50;var r=H(e).toRgb(),o=H(t).toRgb(),a=n/100;return H({r:(o.r-r.r)*a+r.r,g:(o.g-r.g)*a+r.g,b:(o.b-r.b)*a+r.b,a:(o.a-r.a)*a+r.a})},H.readability=function(e,t){var n=H(e),r=H(t);return(Math.max(n.getLuminance(),r.getLuminance())+.05)/(Math.min(n.getLuminance(),r.getLuminance())+.05)},H.isReadable=function(e,t,n){var r,o,a=H.readability(e,t);switch(o=!1,(r=function(i){var l,s;return l=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase(),s=(i.size||"small").toLowerCase(),l!=="AA"&&l!=="AAA"&&(l="AA"),s!=="small"&&s!=="large"&&(s="small"),{level:l,size:s}}(n)).level+r.size){case"AAsmall":case"AAAlarge":o=a>=4.5;break;case"AAlarge":o=a>=3;break;case"AAAsmall":o=a>=7}return o},H.mostReadable=function(e,t,n){var r,o,a,i,l=null,s=0;o=(n=n||{}).includeFallbackColors,a=n.level,i=n.size;for(var u=0;u<t.length;u++)(r=H.readability(e,t[u]))>s&&(s=r,l=H(t[u]));return H.isReadable(e,l,{level:a,size:i})||!o?l:(n.includeFallbackColors=!1,H.mostReadable(e,["#fff","#000"],n))};var Oc=H.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},Q2=H.hexNames=function(e){var t={};for(var n in e)e.hasOwnProperty(n)&&(t[e[n]]=n);return t}(Oc);function ty(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function Se(e,t){(function(r){return typeof r=="string"&&r.indexOf(".")!=-1&&parseFloat(r)===1})(e)&&(e="100%");var n=function(r){return typeof r=="string"&&r.indexOf("%")!=-1}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function is(e){return Math.min(1,Math.max(0,e))}function St(e){return parseInt(e,16)}function en(e){return e.length==1?"0"+e:""+e}function ya(e){return e<=1&&(e=100*e+"%"),e}function ny(e){return Math.round(255*parseFloat(e)).toString(16)}function fh(e){return St(e)/255}var qn,Li,Mi,Gt=(Li="[\\s|\\(]+("+(qn="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")\\s*\\)?",Mi="[\\s|\\(]+("+qn+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")[,|\\s]+("+qn+")\\s*\\)?",{CSS_UNIT:new RegExp(qn),rgb:new RegExp("rgb"+Li),rgba:new RegExp("rgba"+Mi),hsl:new RegExp("hsl"+Li),hsla:new RegExp("hsla"+Mi),hsv:new RegExp("hsv"+Li),hsva:new RegExp("hsva"+Mi),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function En(e){return!!Gt.CSS_UNIT.exec(e)}var Z2=function(e,t){var n=(typeof e=="string"?parseInt(e):e)||0;if(n>=-5&&n<=5){var r=n,o=parseFloat(t),a=o+r*(o/5)*-1;return(a==0||a<=Number.EPSILON)&&(a=.1),{animationPeriod:a+"s"}}return{animationPeriod:t}},K2=function(e,t){var n=e||{},r="";switch(t){case"small":r="12px";break;case"medium":r="16px";break;case"large":r="20px";break;default:r=void 0}var o={};if(n.fontSize){var a=n.fontSize;o=function(i,l){var s={};for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&l.indexOf(u)<0&&(s[u]=i[u]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(u=Object.getOwnPropertySymbols(i);c<u.length;c++)l.indexOf(u[c])<0&&Object.prototype.propertyIsEnumerable.call(i,u[c])&&(s[u[c]]=i[u[c]])}return s}(n,["fontSize"]),r=a}return{fontSize:r,styles:o}},X2={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},J2=function(e){var t=e.className,n=e.text,r=e.textColor,o=e.staticText,a=e.style;return n?Qe.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(t||"").trim(),style:hn(hn(hn({},o&&X2),r&&{color:r,mixBlendMode:"unset"}),a&&a)},typeof n=="string"&&n.length?n:"loading"):null},ry="rgb(50, 205, 50)";function eE(e,t){t===void 0&&(t=0);var n=[];return function r(o,a){return a===void 0&&(a=0),n.push.apply(n,o),n.length<a&&r(n,a),n.slice(0,a)}(e,t)}Le(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);H(ry).toRgb();Array.from({length:4},function(e,t){return"--atom-phase".concat(t+1,"-rgb")});Le(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);var ao=Array.from({length:4},function(e,t){return"--commet-phase".concat(t+1,"-color")}),yr=function(e){var t,n=K2(e==null?void 0:e.style,e==null?void 0:e.size),r=n.styles,o=n.fontSize,a=e==null?void 0:e.easing,i=Z2(e==null?void 0:e.speedPlus,"1.2s").animationPeriod,l=function(s){var u={};if(s instanceof Array){for(var c=eE(s,ao.length),d=0;d<c.length&&!(d>=4);d++)u[ao[d]]=c[d];return u}try{if(typeof s!="string")throw new Error("Color String expected");for(var f=0;f<ao.length;f++)u[ao[f]]=s}catch(x){for(x instanceof Error?console.warn("[".concat(x.message,']: Received "').concat(typeof s,'" instead with value, ').concat(JSON.stringify(s))):console.warn("".concat(JSON.stringify(s)," received in <Commet /> indicator cannot be processed. Using default instead!")),f=0;f<ao.length;f++)u[ao[f]]=ry}return u}((t=e==null?void 0:e.color)!==null&&t!==void 0?t:"");return Qe.createElement("span",{className:"rli-d-i-b commet-rli-bounding-box",style:hn(hn(hn(hn(hn({},o&&{fontSize:o}),i&&{"--rli-animation-duration":i}),a&&{"--rli-animation-function":a}),l),r),role:"status","aria-live":"polite","aria-label":"Loading"},Qe.createElement("span",{className:"rli-d-i-b commet-indicator"},Qe.createElement("span",{className:"rli-d-i-b commet-box"},Qe.createElement("span",{className:"rli-d-i-b commet-trail trail1"}),Qe.createElement("span",{className:"rli-d-i-b  commetball-box"})),Qe.createElement("span",{className:"rli-d-i-b commet-box"},Qe.createElement("span",{className:"rli-d-i-b commet-trail trail2"}),Qe.createElement("span",{className:"rli-d-i-b commetball-box"})),Qe.createElement(J2,{className:"commet-text",text:e==null?void 0:e.text,textColor:e==null?void 0:e.textColor})))};Le(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-phase".concat(t+1,"-color")});function cu(e){return e&&e.Math===Math&&e}Le(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);cu(typeof window=="object"&&window)||cu(typeof self=="object"&&self)||cu(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(e,t){return"--OP-dotted-phase".concat(t+1,"-color")});Le(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--OP-spokes-phase".concat(t+1,"-color")});Le(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(e,t){return"--OP-annulus-dual-sectors-phase".concat(t+1,"-color")});Le(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return["--OP-annulus-track-phase".concat(t+1,"-color"),"--OP-annulus-sector-phase".concat(t+1,"-color")]});Le(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--four-square-phase".concat(t+1,"-color")});Le(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--mosaic-phase".concat(t+1,"-color")});Le(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--riple-phase".concat(t+1,"-color")});Le(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-pulsate-phase".concat(t+1,"-color")});Le(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-brick-stack-phase".concat(t+1,"-color")});Le(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bob-phase".concat(t+1,"-color")});Le(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--TD-bounce-phase".concat(t+1,"-color")});Le(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--shape-phase".concat(t+1,"-color")});Le(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--trophySpin-phase".concat(t+1,"-color")});Le(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--slab-phase".concat(t+1,"-color")});Le(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(e,t){return"--life-line-phase".concat(t+1,"-color")});function tE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState();w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,20)),r(!1)}catch(s){console.error("There was an error fetching the games!",s),a(s),r(!1)}})()},[]);const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return n===!0?p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})}):o?p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})}):p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Home"})}),p.jsx("main",{className:"container  mx-auto my-5 px-16",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"group h-[100%] mx-auto flex items-center justify-center flex-wrap px-3 border-gray-400 border max-w-sm rounded  overflow-hidden shadow-lg pt-4 transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 rounded-md w-full h-48 object-cover ",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:" px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function nE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,10)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Shooter"})}),p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group flex mx-auto items-center justify-center flex-wrap max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 rounded-md w-full pt-3 h-48 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function rE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=Mmorpg",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,10)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Home"})}),p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group flex items-center justify-center flex-wrap mx-auto max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 w-full h-48 rounded-md pt-3 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function oE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=sailing",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,7)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Sailing"})}),p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group mx-auto flex items-center justify-center flex-wrap max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia- rounded-md w-full pt-3 h-48 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function aE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=pixel",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,10)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsx(p.Fragment,{children:p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group  flex items-center justify-center flex-wrap max-w-sm group mx-auto rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 rounded-md w-full pt-3 h-48 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})})}function iE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=Permadeath",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,10)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Permadeath"})}),p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group mx-auto flex items-center justify-center flex-wrap max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 rounded-md w-full pt-3 h-48 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function lE(){const[e,t]=w.useState([]),[n,r]=w.useState(!0),[o,a]=w.useState(null);if(w.useEffect(()=>{(async()=>{try{const s=await ce.get("https://free-to-play-games-database.p.rapidapi.com/api/games?category=superhero",{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});t(s.data.slice(0,10)),r(!1)}catch(s){console.error("Error fetching games:",s),a(s),r(!1)}})()},[]),n===!0)return p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})});if(o)return p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",o.message]})});const i=(l,s)=>{const u=l.split(" ");return u.length>s?u.slice(0,s).join(" ")+"...":l};return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Superhero"})}),p.jsx("main",{className:"container px-16 mx-auto my-5",children:p.jsx("section",{className:"relative",children:p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6",children:e.map(l=>p.jsx(yt,{to:`/game/${l.id}`,children:p.jsxs("div",{className:"h-[100%] group mx-auto flex items-center justify-center flex-wrap max-w-sm rounded overflow-hidden shadow-lg px-3 border-gray-400 border transform transition duration-300 ease-in-out hover:scale-105",children:[p.jsx("img",{className:"sepia group-hover:sepia-0 rounded-md w-full pt-3 h-48 object-cover",src:l.thumbnail,alt:l.title}),p.jsxs("div",{className:"px-6 py-4",children:[p.jsx("div",{className:"font-bold text-xl mb-2",children:i(l.title,15)}),p.jsx("p",{className:"text-gray-300 text-base",children:l.short_description})]}),p.jsxs("div",{className:"px-6 pt-4 pb-2",children:[p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.genre}),p.jsx("span",{className:"inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-300 mr-2 mb-2",children:l.platform})]})]})},l.id))})})})]})}function sE(){const{id:e}=Ox(),[t,n]=w.useState(null),[r,o]=w.useState(!0),[a,i]=w.useState(null);return w.useEffect(()=>{(async()=>{try{const s=await ce.get(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${e}`,{headers:{"x-rapidapi-key":"0cc2d6a721mshb20618e958e1114p10710ajsn7fb18ae81289","x-rapidapi-host":"free-to-play-games-database.p.rapidapi.com"}});n(s.data),o(!1)}catch(s){console.error("Error fetching game details:",s),i(s),o(!1)}})()},[e]),r===!0?p.jsx("div",{className:"flex pt-40 justify-center items-center",children:p.jsx(yr,{color:"#3A4877",size:"medium",speedPlus:"3",text:"",textColor:""})}):a?p.jsx("div",{className:"flex justify-center items-center",children:p.jsxs("h1",{children:[" Error: ",a.message]})}):p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"GameDetails"})}),p.jsx("div",{className:"container mx-auto my-10  ",children:p.jsxs("div",{className:"flex flex-wrap m-auto w-[90%]",children:[p.jsx("div",{className:"lg:w-1/3 w-full mx-auto my-5",children:p.jsx("img",{src:t.thumbnail,alt:t.title,className:"w-full h-auto object-contain"})}),p.jsxs("div",{className:"lg:w-3/5 w-full pl-6  text-orange-50",children:[p.jsx("h1",{className:"text-3xl font-bold mb-4",children:t.title}),p.jsxs("p",{children:[p.jsx("strong",{children:"Category:"})," ",t.genre]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Platform:"})," ",t.platform]}),p.jsxs("p",{children:[p.jsx("strong",{children:"Status:"})," ",t.status]}),p.jsx("p",{className:"mt-4",children:t.description})]})]})})]})}var uE=function(t){return cE(t)&&!dE(t)};function cE(e){return!!e&&typeof e=="object"}function dE(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||hE(e)}var fE=typeof Symbol=="function"&&Symbol.for,pE=fE?Symbol.for("react.element"):60103;function hE(e){return e.$$typeof===pE}function mE(e){return Array.isArray(e)?[]:{}}function Nl(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Za(mE(e),e,t):e}function gE(e,t,n){return e.concat(t).map(function(r){return Nl(r,n)})}function yE(e,t,n){var r={};return n.isMergeableObject(e)&&Object.keys(e).forEach(function(o){r[o]=Nl(e[o],n)}),Object.keys(t).forEach(function(o){!n.isMergeableObject(t[o])||!e[o]?r[o]=Nl(t[o],n):r[o]=Za(e[o],t[o],n)}),r}function Za(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||gE,n.isMergeableObject=n.isMergeableObject||uE;var r=Array.isArray(t),o=Array.isArray(e),a=r===o;return a?r?n.arrayMerge(e,t,n):yE(e,t,n):Nl(t,n)}Za.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,o){return Za(r,o,n)},{})};var Pc=Za,oy=typeof global=="object"&&global&&global.Object===Object&&global,vE=typeof self=="object"&&self&&self.Object===Object&&self,bn=oy||vE||Function("return this")(),fr=bn.Symbol,ay=Object.prototype,bE=ay.hasOwnProperty,xE=ay.toString,fa=fr?fr.toStringTag:void 0;function wE(e){var t=bE.call(e,fa),n=e[fa];try{e[fa]=void 0;var r=!0}catch{}var o=xE.call(e);return r&&(t?e[fa]=n:delete e[fa]),o}var SE=Object.prototype,EE=SE.toString;function kE(e){return EE.call(e)}var TE="[object Null]",OE="[object Undefined]",ph=fr?fr.toStringTag:void 0;function Gr(e){return e==null?e===void 0?OE:TE:ph&&ph in Object(e)?wE(e):kE(e)}function iy(e,t){return function(n){return e(t(n))}}var Hd=iy(Object.getPrototypeOf,Object);function Yr(e){return e!=null&&typeof e=="object"}var PE="[object Object]",CE=Function.prototype,_E=Object.prototype,ly=CE.toString,jE=_E.hasOwnProperty,AE=ly.call(Object);function hh(e){if(!Yr(e)||Gr(e)!=PE)return!1;var t=Hd(e);if(t===null)return!0;var n=jE.call(t,"constructor")&&t.constructor;return typeof n=="function"&&n instanceof n&&ly.call(n)==AE}function NE(){this.__data__=[],this.size=0}function sy(e,t){return e===t||e!==e&&t!==t}function ls(e,t){for(var n=e.length;n--;)if(sy(e[n][0],t))return n;return-1}var RE=Array.prototype,DE=RE.splice;function FE(e){var t=this.__data__,n=ls(t,e);if(n<0)return!1;var r=t.length-1;return n==r?t.pop():DE.call(t,n,1),--this.size,!0}function LE(e){var t=this.__data__,n=ls(t,e);return n<0?void 0:t[n][1]}function ME(e){return ls(this.__data__,e)>-1}function zE(e,t){var n=this.__data__,r=ls(n,e);return r<0?(++this.size,n.push([e,t])):n[r][1]=t,this}function $n(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}$n.prototype.clear=NE;$n.prototype.delete=FE;$n.prototype.get=LE;$n.prototype.has=ME;$n.prototype.set=zE;function IE(){this.__data__=new $n,this.size=0}function $E(e){var t=this.__data__,n=t.delete(e);return this.size=t.size,n}function UE(e){return this.__data__.get(e)}function BE(e){return this.__data__.has(e)}function si(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var HE="[object AsyncFunction]",VE="[object Function]",qE="[object GeneratorFunction]",WE="[object Proxy]";function uy(e){if(!si(e))return!1;var t=Gr(e);return t==VE||t==qE||t==HE||t==WE}var du=bn["__core-js_shared__"],mh=function(){var e=/[^.]+$/.exec(du&&du.keys&&du.keys.IE_PROTO||"");return e?"Symbol(src)_1."+e:""}();function GE(e){return!!mh&&mh in e}var YE=Function.prototype,QE=YE.toString;function Qr(e){if(e!=null){try{return QE.call(e)}catch{}try{return e+""}catch{}}return""}var ZE=/[\\^$.*+?()[\]{}|]/g,KE=/^\[object .+?Constructor\]$/,XE=Function.prototype,JE=Object.prototype,ek=XE.toString,tk=JE.hasOwnProperty,nk=RegExp("^"+ek.call(tk).replace(ZE,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function rk(e){if(!si(e)||GE(e))return!1;var t=uy(e)?nk:KE;return t.test(Qr(e))}function ok(e,t){return e==null?void 0:e[t]}function Zr(e,t){var n=ok(e,t);return rk(n)?n:void 0}var Ka=Zr(bn,"Map"),Xa=Zr(Object,"create");function ak(){this.__data__=Xa?Xa(null):{},this.size=0}function ik(e){var t=this.has(e)&&delete this.__data__[e];return this.size-=t?1:0,t}var lk="__lodash_hash_undefined__",sk=Object.prototype,uk=sk.hasOwnProperty;function ck(e){var t=this.__data__;if(Xa){var n=t[e];return n===lk?void 0:n}return uk.call(t,e)?t[e]:void 0}var dk=Object.prototype,fk=dk.hasOwnProperty;function pk(e){var t=this.__data__;return Xa?t[e]!==void 0:fk.call(t,e)}var hk="__lodash_hash_undefined__";function mk(e,t){var n=this.__data__;return this.size+=this.has(e)?0:1,n[e]=Xa&&t===void 0?hk:t,this}function Vr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}Vr.prototype.clear=ak;Vr.prototype.delete=ik;Vr.prototype.get=ck;Vr.prototype.has=pk;Vr.prototype.set=mk;function gk(){this.size=0,this.__data__={hash:new Vr,map:new(Ka||$n),string:new Vr}}function yk(e){var t=typeof e;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?e!=="__proto__":e===null}function ss(e,t){var n=e.__data__;return yk(t)?n[typeof t=="string"?"string":"hash"]:n.map}function vk(e){var t=ss(this,e).delete(e);return this.size-=t?1:0,t}function bk(e){return ss(this,e).get(e)}function xk(e){return ss(this,e).has(e)}function wk(e,t){var n=ss(this,e),r=n.size;return n.set(e,t),this.size+=n.size==r?0:1,this}function vr(e){var t=-1,n=e==null?0:e.length;for(this.clear();++t<n;){var r=e[t];this.set(r[0],r[1])}}vr.prototype.clear=gk;vr.prototype.delete=vk;vr.prototype.get=bk;vr.prototype.has=xk;vr.prototype.set=wk;var Sk=200;function Ek(e,t){var n=this.__data__;if(n instanceof $n){var r=n.__data__;if(!Ka||r.length<Sk-1)return r.push([e,t]),this.size=++n.size,this;n=this.__data__=new vr(r)}return n.set(e,t),this.size=n.size,this}function qo(e){var t=this.__data__=new $n(e);this.size=t.size}qo.prototype.clear=IE;qo.prototype.delete=$E;qo.prototype.get=UE;qo.prototype.has=BE;qo.prototype.set=Ek;function kk(e,t){for(var n=-1,r=e==null?0:e.length;++n<r&&t(e[n],n,e)!==!1;);return e}var gh=function(){try{var e=Zr(Object,"defineProperty");return e({},"",{}),e}catch{}}();function cy(e,t,n){t=="__proto__"&&gh?gh(e,t,{configurable:!0,enumerable:!0,value:n,writable:!0}):e[t]=n}var Tk=Object.prototype,Ok=Tk.hasOwnProperty;function dy(e,t,n){var r=e[t];(!(Ok.call(e,t)&&sy(r,n))||n===void 0&&!(t in e))&&cy(e,t,n)}function us(e,t,n,r){var o=!n;n||(n={});for(var a=-1,i=t.length;++a<i;){var l=t[a],s=void 0;s===void 0&&(s=e[l]),o?cy(n,l,s):dy(n,l,s)}return n}function Pk(e,t){for(var n=-1,r=Array(e);++n<e;)r[n]=t(n);return r}var Ck="[object Arguments]";function yh(e){return Yr(e)&&Gr(e)==Ck}var fy=Object.prototype,_k=fy.hasOwnProperty,jk=fy.propertyIsEnumerable,Ak=yh(function(){return arguments}())?yh:function(e){return Yr(e)&&_k.call(e,"callee")&&!jk.call(e,"callee")},ui=Array.isArray;function Nk(){return!1}var py=typeof Ot=="object"&&Ot&&!Ot.nodeType&&Ot,vh=py&&typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,Rk=vh&&vh.exports===py,bh=Rk?bn.Buffer:void 0,Dk=bh?bh.isBuffer:void 0,hy=Dk||Nk,Fk=9007199254740991,Lk=/^(?:0|[1-9]\d*)$/;function Mk(e,t){var n=typeof e;return t=t??Fk,!!t&&(n=="number"||n!="symbol"&&Lk.test(e))&&e>-1&&e%1==0&&e<t}var zk=9007199254740991;function my(e){return typeof e=="number"&&e>-1&&e%1==0&&e<=zk}var Ik="[object Arguments]",$k="[object Array]",Uk="[object Boolean]",Bk="[object Date]",Hk="[object Error]",Vk="[object Function]",qk="[object Map]",Wk="[object Number]",Gk="[object Object]",Yk="[object RegExp]",Qk="[object Set]",Zk="[object String]",Kk="[object WeakMap]",Xk="[object ArrayBuffer]",Jk="[object DataView]",eT="[object Float32Array]",tT="[object Float64Array]",nT="[object Int8Array]",rT="[object Int16Array]",oT="[object Int32Array]",aT="[object Uint8Array]",iT="[object Uint8ClampedArray]",lT="[object Uint16Array]",sT="[object Uint32Array]",ye={};ye[eT]=ye[tT]=ye[nT]=ye[rT]=ye[oT]=ye[aT]=ye[iT]=ye[lT]=ye[sT]=!0;ye[Ik]=ye[$k]=ye[Xk]=ye[Uk]=ye[Jk]=ye[Bk]=ye[Hk]=ye[Vk]=ye[qk]=ye[Wk]=ye[Gk]=ye[Yk]=ye[Qk]=ye[Zk]=ye[Kk]=!1;function uT(e){return Yr(e)&&my(e.length)&&!!ye[Gr(e)]}function Vd(e){return function(t){return e(t)}}var gy=typeof Ot=="object"&&Ot&&!Ot.nodeType&&Ot,Ca=gy&&typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,cT=Ca&&Ca.exports===gy,fu=cT&&oy.process,Mo=function(){try{var e=Ca&&Ca.require&&Ca.require("util").types;return e||fu&&fu.binding&&fu.binding("util")}catch{}}(),xh=Mo&&Mo.isTypedArray,dT=xh?Vd(xh):uT,fT=Object.prototype,pT=fT.hasOwnProperty;function yy(e,t){var n=ui(e),r=!n&&Ak(e),o=!n&&!r&&hy(e),a=!n&&!r&&!o&&dT(e),i=n||r||o||a,l=i?Pk(e.length,String):[],s=l.length;for(var u in e)(t||pT.call(e,u))&&!(i&&(u=="length"||o&&(u=="offset"||u=="parent")||a&&(u=="buffer"||u=="byteLength"||u=="byteOffset")||Mk(u,s)))&&l.push(u);return l}var hT=Object.prototype;function qd(e){var t=e&&e.constructor,n=typeof t=="function"&&t.prototype||hT;return e===n}var mT=iy(Object.keys,Object),gT=Object.prototype,yT=gT.hasOwnProperty;function vT(e){if(!qd(e))return mT(e);var t=[];for(var n in Object(e))yT.call(e,n)&&n!="constructor"&&t.push(n);return t}function vy(e){return e!=null&&my(e.length)&&!uy(e)}function Wd(e){return vy(e)?yy(e):vT(e)}function bT(e,t){return e&&us(t,Wd(t),e)}function xT(e){var t=[];if(e!=null)for(var n in Object(e))t.push(n);return t}var wT=Object.prototype,ST=wT.hasOwnProperty;function ET(e){if(!si(e))return xT(e);var t=qd(e),n=[];for(var r in e)r=="constructor"&&(t||!ST.call(e,r))||n.push(r);return n}function Gd(e){return vy(e)?yy(e,!0):ET(e)}function kT(e,t){return e&&us(t,Gd(t),e)}var by=typeof Ot=="object"&&Ot&&!Ot.nodeType&&Ot,wh=by&&typeof Pt=="object"&&Pt&&!Pt.nodeType&&Pt,TT=wh&&wh.exports===by,Sh=TT?bn.Buffer:void 0,Eh=Sh?Sh.allocUnsafe:void 0;function OT(e,t){if(t)return e.slice();var n=e.length,r=Eh?Eh(n):new e.constructor(n);return e.copy(r),r}function xy(e,t){var n=-1,r=e.length;for(t||(t=Array(r));++n<r;)t[n]=e[n];return t}function PT(e,t){for(var n=-1,r=e==null?0:e.length,o=0,a=[];++n<r;){var i=e[n];t(i,n,e)&&(a[o++]=i)}return a}function wy(){return[]}var CT=Object.prototype,_T=CT.propertyIsEnumerable,kh=Object.getOwnPropertySymbols,Yd=kh?function(e){return e==null?[]:(e=Object(e),PT(kh(e),function(t){return _T.call(e,t)}))}:wy;function jT(e,t){return us(e,Yd(e),t)}function Sy(e,t){for(var n=-1,r=t.length,o=e.length;++n<r;)e[o+n]=t[n];return e}var AT=Object.getOwnPropertySymbols,Ey=AT?function(e){for(var t=[];e;)Sy(t,Yd(e)),e=Hd(e);return t}:wy;function NT(e,t){return us(e,Ey(e),t)}function ky(e,t,n){var r=t(e);return ui(e)?r:Sy(r,n(e))}function RT(e){return ky(e,Wd,Yd)}function DT(e){return ky(e,Gd,Ey)}var Cc=Zr(bn,"DataView"),_c=Zr(bn,"Promise"),jc=Zr(bn,"Set"),Ac=Zr(bn,"WeakMap"),Th="[object Map]",FT="[object Object]",Oh="[object Promise]",Ph="[object Set]",Ch="[object WeakMap]",_h="[object DataView]",LT=Qr(Cc),MT=Qr(Ka),zT=Qr(_c),IT=Qr(jc),$T=Qr(Ac),Pn=Gr;(Cc&&Pn(new Cc(new ArrayBuffer(1)))!=_h||Ka&&Pn(new Ka)!=Th||_c&&Pn(_c.resolve())!=Oh||jc&&Pn(new jc)!=Ph||Ac&&Pn(new Ac)!=Ch)&&(Pn=function(e){var t=Gr(e),n=t==FT?e.constructor:void 0,r=n?Qr(n):"";if(r)switch(r){case LT:return _h;case MT:return Th;case zT:return Oh;case IT:return Ph;case $T:return Ch}return t});var UT=Object.prototype,BT=UT.hasOwnProperty;function HT(e){var t=e.length,n=new e.constructor(t);return t&&typeof e[0]=="string"&&BT.call(e,"index")&&(n.index=e.index,n.input=e.input),n}var jh=bn.Uint8Array;function Qd(e){var t=new e.constructor(e.byteLength);return new jh(t).set(new jh(e)),t}function VT(e,t){var n=t?Qd(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.byteLength)}var qT=/\w*$/;function WT(e){var t=new e.constructor(e.source,qT.exec(e));return t.lastIndex=e.lastIndex,t}var Ah=fr?fr.prototype:void 0,Nh=Ah?Ah.valueOf:void 0;function GT(e){return Nh?Object(Nh.call(e)):{}}function YT(e,t){var n=t?Qd(e.buffer):e.buffer;return new e.constructor(n,e.byteOffset,e.length)}var QT="[object Boolean]",ZT="[object Date]",KT="[object Map]",XT="[object Number]",JT="[object RegExp]",e5="[object Set]",t5="[object String]",n5="[object Symbol]",r5="[object ArrayBuffer]",o5="[object DataView]",a5="[object Float32Array]",i5="[object Float64Array]",l5="[object Int8Array]",s5="[object Int16Array]",u5="[object Int32Array]",c5="[object Uint8Array]",d5="[object Uint8ClampedArray]",f5="[object Uint16Array]",p5="[object Uint32Array]";function h5(e,t,n){var r=e.constructor;switch(t){case r5:return Qd(e);case QT:case ZT:return new r(+e);case o5:return VT(e,n);case a5:case i5:case l5:case s5:case u5:case c5:case d5:case f5:case p5:return YT(e,n);case KT:return new r;case XT:case t5:return new r(e);case JT:return WT(e);case e5:return new r;case n5:return GT(e)}}var Rh=Object.create,m5=function(){function e(){}return function(t){if(!si(t))return{};if(Rh)return Rh(t);e.prototype=t;var n=new e;return e.prototype=void 0,n}}();function g5(e){return typeof e.constructor=="function"&&!qd(e)?m5(Hd(e)):{}}var y5="[object Map]";function v5(e){return Yr(e)&&Pn(e)==y5}var Dh=Mo&&Mo.isMap,b5=Dh?Vd(Dh):v5,x5="[object Set]";function w5(e){return Yr(e)&&Pn(e)==x5}var Fh=Mo&&Mo.isSet,S5=Fh?Vd(Fh):w5,E5=1,k5=2,T5=4,Ty="[object Arguments]",O5="[object Array]",P5="[object Boolean]",C5="[object Date]",_5="[object Error]",Oy="[object Function]",j5="[object GeneratorFunction]",A5="[object Map]",N5="[object Number]",Py="[object Object]",R5="[object RegExp]",D5="[object Set]",F5="[object String]",L5="[object Symbol]",M5="[object WeakMap]",z5="[object ArrayBuffer]",I5="[object DataView]",$5="[object Float32Array]",U5="[object Float64Array]",B5="[object Int8Array]",H5="[object Int16Array]",V5="[object Int32Array]",q5="[object Uint8Array]",W5="[object Uint8ClampedArray]",G5="[object Uint16Array]",Y5="[object Uint32Array]",he={};he[Ty]=he[O5]=he[z5]=he[I5]=he[P5]=he[C5]=he[$5]=he[U5]=he[B5]=he[H5]=he[V5]=he[A5]=he[N5]=he[Py]=he[R5]=he[D5]=he[F5]=he[L5]=he[q5]=he[W5]=he[G5]=he[Y5]=!0;he[_5]=he[Oy]=he[M5]=!1;function _a(e,t,n,r,o,a){var i,l=t&E5,s=t&k5,u=t&T5;if(i!==void 0)return i;if(!si(e))return e;var c=ui(e);if(c){if(i=HT(e),!l)return xy(e,i)}else{var d=Pn(e),f=d==Oy||d==j5;if(hy(e))return OT(e,l);if(d==Py||d==Ty||f&&!o){if(i=s||f?{}:g5(e),!l)return s?NT(e,kT(i,e)):jT(e,bT(i,e))}else{if(!he[d])return o?e:{};i=h5(e,d,l)}}a||(a=new qo);var x=a.get(e);if(x)return x;a.set(e,i),S5(e)?e.forEach(function(E){i.add(_a(E,t,n,E,e,a))}):b5(e)&&e.forEach(function(E,g){i.set(g,_a(E,t,n,g,e,a))});var y=u?s?DT:RT:s?Gd:Wd,m=c?void 0:y(e);return kk(m||e,function(E,g){m&&(g=E,E=e[g]),dy(i,g,_a(E,t,n,g,e,a))}),i}var Q5=1,Z5=4;function zi(e){return _a(e,Q5|Z5)}var Lh=Array.isArray,Mh=Object.keys,K5=Object.prototype.hasOwnProperty,X5=typeof Element<"u";function Nc(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){var n=Lh(e),r=Lh(t),o,a,i;if(n&&r){if(a=e.length,a!=t.length)return!1;for(o=a;o--!==0;)if(!Nc(e[o],t[o]))return!1;return!0}if(n!=r)return!1;var l=e instanceof Date,s=t instanceof Date;if(l!=s)return!1;if(l&&s)return e.getTime()==t.getTime();var u=e instanceof RegExp,c=t instanceof RegExp;if(u!=c)return!1;if(u&&c)return e.toString()==t.toString();var d=Mh(e);if(a=d.length,a!==Mh(t).length)return!1;for(o=a;o--!==0;)if(!K5.call(t,d[o]))return!1;if(X5&&e instanceof Element&&t instanceof Element)return e===t;for(o=a;o--!==0;)if(i=d[o],!(i==="_owner"&&e.$$typeof)&&!Nc(e[i],t[i]))return!1;return!0}return e!==e&&t!==t}var J5=function(t,n){try{return Nc(t,n)}catch(r){if(r.message&&r.message.match(/stack|recursion/i)||r.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",r.name,r.message),!1;throw r}};const Er=pr(J5);var eO=4;function zh(e){return _a(e,eO)}function Cy(e,t){for(var n=-1,r=e==null?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}var tO="[object Symbol]";function Zd(e){return typeof e=="symbol"||Yr(e)&&Gr(e)==tO}var nO="Expected a function";function Kd(e,t){if(typeof e!="function"||t!=null&&typeof t!="function")throw new TypeError(nO);var n=function(){var r=arguments,o=t?t.apply(this,r):r[0],a=n.cache;if(a.has(o))return a.get(o);var i=e.apply(this,r);return n.cache=a.set(o,i)||a,i};return n.cache=new(Kd.Cache||vr),n}Kd.Cache=vr;var rO=500;function oO(e){var t=Kd(e,function(r){return n.size===rO&&n.clear(),r}),n=t.cache;return t}var aO=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,iO=/\\(\\)?/g,lO=oO(function(e){var t=[];return e.charCodeAt(0)===46&&t.push(""),e.replace(aO,function(n,r,o,a){t.push(o?a.replace(iO,"$1"):r||n)}),t});function sO(e){if(typeof e=="string"||Zd(e))return e;var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}var Ih=fr?fr.prototype:void 0,$h=Ih?Ih.toString:void 0;function _y(e){if(typeof e=="string")return e;if(ui(e))return Cy(e,_y)+"";if(Zd(e))return $h?$h.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t}function uO(e){return e==null?"":_y(e)}function jy(e){return ui(e)?Cy(e,sO):Zd(e)?[e]:xy(lO(uO(e)))}var Ay={exports:{}},fe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var He=typeof Symbol=="function"&&Symbol.for,Xd=He?Symbol.for("react.element"):60103,Jd=He?Symbol.for("react.portal"):60106,cs=He?Symbol.for("react.fragment"):60107,ds=He?Symbol.for("react.strict_mode"):60108,fs=He?Symbol.for("react.profiler"):60114,ps=He?Symbol.for("react.provider"):60109,hs=He?Symbol.for("react.context"):60110,ef=He?Symbol.for("react.async_mode"):60111,ms=He?Symbol.for("react.concurrent_mode"):60111,gs=He?Symbol.for("react.forward_ref"):60112,ys=He?Symbol.for("react.suspense"):60113,cO=He?Symbol.for("react.suspense_list"):60120,vs=He?Symbol.for("react.memo"):60115,bs=He?Symbol.for("react.lazy"):60116,dO=He?Symbol.for("react.block"):60121,fO=He?Symbol.for("react.fundamental"):60117,pO=He?Symbol.for("react.responder"):60118,hO=He?Symbol.for("react.scope"):60119;function Nt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xd:switch(e=e.type,e){case ef:case ms:case cs:case fs:case ds:case ys:return e;default:switch(e=e&&e.$$typeof,e){case hs:case gs:case bs:case vs:case ps:return e;default:return t}}case Jd:return t}}}function Ny(e){return Nt(e)===ms}fe.AsyncMode=ef;fe.ConcurrentMode=ms;fe.ContextConsumer=hs;fe.ContextProvider=ps;fe.Element=Xd;fe.ForwardRef=gs;fe.Fragment=cs;fe.Lazy=bs;fe.Memo=vs;fe.Portal=Jd;fe.Profiler=fs;fe.StrictMode=ds;fe.Suspense=ys;fe.isAsyncMode=function(e){return Ny(e)||Nt(e)===ef};fe.isConcurrentMode=Ny;fe.isContextConsumer=function(e){return Nt(e)===hs};fe.isContextProvider=function(e){return Nt(e)===ps};fe.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xd};fe.isForwardRef=function(e){return Nt(e)===gs};fe.isFragment=function(e){return Nt(e)===cs};fe.isLazy=function(e){return Nt(e)===bs};fe.isMemo=function(e){return Nt(e)===vs};fe.isPortal=function(e){return Nt(e)===Jd};fe.isProfiler=function(e){return Nt(e)===fs};fe.isStrictMode=function(e){return Nt(e)===ds};fe.isSuspense=function(e){return Nt(e)===ys};fe.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===cs||e===ms||e===fs||e===ds||e===ys||e===cO||typeof e=="object"&&e!==null&&(e.$$typeof===bs||e.$$typeof===vs||e.$$typeof===ps||e.$$typeof===hs||e.$$typeof===gs||e.$$typeof===fO||e.$$typeof===pO||e.$$typeof===hO||e.$$typeof===dO)};fe.typeOf=Nt;Ay.exports=fe;var mO=Ay.exports,Ry=mO,gO={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},yO={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Dy={};Dy[Ry.ForwardRef]=gO;Dy[Ry.Memo]=yO;function $e(){return $e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},$e.apply(this,arguments)}function Fy(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,a;for(a=0;a<r.length;a++)o=r[a],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}var xs=w.createContext(void 0);xs.displayName="FormikContext";xs.Provider;xs.Consumer;function vO(){var e=w.useContext(xs);return e}var Yt=function(t){return typeof t=="function"},ws=function(t){return t!==null&&typeof t=="object"},bO=function(t){return String(Math.floor(Number(t)))===t},pu=function(t){return Object.prototype.toString.call(t)==="[object String]"},hu=function(t){return ws(t)&&Yt(t.then)};function Et(e,t,n,r){r===void 0&&(r=0);for(var o=jy(t);e&&r<o.length;)e=e[o[r++]];return r!==o.length&&!e||e===void 0?n:e}function Dr(e,t,n){for(var r=zh(e),o=r,a=0,i=jy(t);a<i.length-1;a++){var l=i[a],s=Et(e,i.slice(0,a+1));if(s&&(ws(s)||Array.isArray(s)))o=o[l]=zh(s);else{var u=i[a+1];o=o[l]=bO(u)&&Number(u)>=0?[]:{}}}return(a===0?e:o)[i[a]]===n?e:(n===void 0?delete o[i[a]]:o[i[a]]=n,a===0&&n===void 0&&delete r[i[a]],r)}function Ly(e,t,n,r){n===void 0&&(n=new WeakMap),r===void 0&&(r={});for(var o=0,a=Object.keys(e);o<a.length;o++){var i=a[o],l=e[i];ws(l)?n.get(l)||(n.set(l,!0),r[i]=Array.isArray(l)?[]:{},Ly(l,t,n,r[i])):r[i]=t}return r}function xO(e,t){switch(t.type){case"SET_VALUES":return $e({},e,{values:t.payload});case"SET_TOUCHED":return $e({},e,{touched:t.payload});case"SET_ERRORS":return Er(e.errors,t.payload)?e:$e({},e,{errors:t.payload});case"SET_STATUS":return $e({},e,{status:t.payload});case"SET_ISSUBMITTING":return $e({},e,{isSubmitting:t.payload});case"SET_ISVALIDATING":return $e({},e,{isValidating:t.payload});case"SET_FIELD_VALUE":return $e({},e,{values:Dr(e.values,t.payload.field,t.payload.value)});case"SET_FIELD_TOUCHED":return $e({},e,{touched:Dr(e.touched,t.payload.field,t.payload.value)});case"SET_FIELD_ERROR":return $e({},e,{errors:Dr(e.errors,t.payload.field,t.payload.value)});case"RESET_FORM":return $e({},e,t.payload);case"SET_FORMIK_STATE":return t.payload(e);case"SUBMIT_ATTEMPT":return $e({},e,{touched:Ly(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return $e({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return $e({},e,{isSubmitting:!1});default:return e}}var xr={},Ii={};function My(e){var t=e.validateOnChange,n=t===void 0?!0:t,r=e.validateOnBlur,o=r===void 0?!0:r,a=e.validateOnMount,i=a===void 0?!1:a,l=e.isInitialValid,s=e.enableReinitialize,u=s===void 0?!1:s,c=e.onSubmit,d=Fy(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),f=$e({validateOnChange:n,validateOnBlur:o,validateOnMount:i,onSubmit:c},d),x=w.useRef(f.initialValues),y=w.useRef(f.initialErrors||xr),m=w.useRef(f.initialTouched||Ii),E=w.useRef(f.initialStatus),g=w.useRef(!1),h=w.useRef({});w.useEffect(function(){return g.current=!0,function(){g.current=!1}},[]);var v=w.useState(0),k=v[1],j=w.useRef({values:zi(f.initialValues),errors:zi(f.initialErrors)||xr,touched:zi(f.initialTouched)||Ii,status:zi(f.initialStatus),isSubmitting:!1,isValidating:!1,submitCount:0}),C=j.current,b=w.useCallback(function(O){var M=j.current;j.current=xO(M,O),M!==j.current&&k(function(B){return B+1})},[]),A=w.useCallback(function(O,M){return new Promise(function(B,V){var Y=f.validate(O,M);Y==null?B(xr):hu(Y)?Y.then(function(oe){B(oe||xr)},function(oe){V(oe)}):B(Y)})},[f.validate]),F=w.useCallback(function(O,M){var B=f.validationSchema,V=Yt(B)?B(M):B,Y=M&&V.validateAt?V.validateAt(M,O):SO(O,V);return new Promise(function(oe,ze){Y.then(function(){oe(xr)},function(dt){dt.name==="ValidationError"?oe(wO(dt)):ze(dt)})})},[f.validationSchema]),L=w.useCallback(function(O,M){return new Promise(function(B){return B(h.current[O].validate(M))})},[]),U=w.useCallback(function(O){var M=Object.keys(h.current).filter(function(V){return Yt(h.current[V].validate)}),B=M.length>0?M.map(function(V){return L(V,Et(O,V))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(B).then(function(V){return V.reduce(function(Y,oe,ze){return oe==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||oe&&(Y=Dr(Y,M[ze],oe)),Y},{})})},[L]),ue=w.useCallback(function(O){return Promise.all([U(O),f.validationSchema?F(O):{},f.validate?A(O):{}]).then(function(M){var B=M[0],V=M[1],Y=M[2],oe=Pc.all([B,V,Y],{arrayMerge:EO});return oe})},[f.validate,f.validationSchema,U,A,F]),ne=Ft(function(O){return O===void 0&&(O=C.values),b({type:"SET_ISVALIDATING",payload:!0}),ue(O).then(function(M){return g.current&&(b({type:"SET_ISVALIDATING",payload:!1}),b({type:"SET_ERRORS",payload:M})),M})});w.useEffect(function(){i&&g.current===!0&&Er(x.current,f.initialValues)&&ne(x.current)},[i,ne]);var pe=w.useCallback(function(O){var M=O&&O.values?O.values:x.current,B=O&&O.errors?O.errors:y.current?y.current:f.initialErrors||{},V=O&&O.touched?O.touched:m.current?m.current:f.initialTouched||{},Y=O&&O.status?O.status:E.current?E.current:f.initialStatus;x.current=M,y.current=B,m.current=V,E.current=Y;var oe=function(){b({type:"RESET_FORM",payload:{isSubmitting:!!O&&!!O.isSubmitting,errors:B,touched:V,status:Y,values:M,isValidating:!!O&&!!O.isValidating,submitCount:O&&O.submitCount&&typeof O.submitCount=="number"?O.submitCount:0}})};if(f.onReset){var ze=f.onReset(C.values,Un);hu(ze)?ze.then(oe):oe()}else oe()},[f.initialErrors,f.initialStatus,f.initialTouched,f.onReset]);w.useEffect(function(){g.current===!0&&!Er(x.current,f.initialValues)&&u&&(x.current=f.initialValues,pe(),i&&ne(x.current))},[u,f.initialValues,pe,i,ne]),w.useEffect(function(){u&&g.current===!0&&!Er(y.current,f.initialErrors)&&(y.current=f.initialErrors||xr,b({type:"SET_ERRORS",payload:f.initialErrors||xr}))},[u,f.initialErrors]),w.useEffect(function(){u&&g.current===!0&&!Er(m.current,f.initialTouched)&&(m.current=f.initialTouched||Ii,b({type:"SET_TOUCHED",payload:f.initialTouched||Ii}))},[u,f.initialTouched]),w.useEffect(function(){u&&g.current===!0&&!Er(E.current,f.initialStatus)&&(E.current=f.initialStatus,b({type:"SET_STATUS",payload:f.initialStatus}))},[u,f.initialStatus,f.initialTouched]);var ut=Ft(function(O){if(h.current[O]&&Yt(h.current[O].validate)){var M=Et(C.values,O),B=h.current[O].validate(M);return hu(B)?(b({type:"SET_ISVALIDATING",payload:!0}),B.then(function(V){return V}).then(function(V){b({type:"SET_FIELD_ERROR",payload:{field:O,value:V}}),b({type:"SET_ISVALIDATING",payload:!1})})):(b({type:"SET_FIELD_ERROR",payload:{field:O,value:B}}),Promise.resolve(B))}else if(f.validationSchema)return b({type:"SET_ISVALIDATING",payload:!0}),F(C.values,O).then(function(V){return V}).then(function(V){b({type:"SET_FIELD_ERROR",payload:{field:O,value:Et(V,O)}}),b({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),ln=w.useCallback(function(O,M){var B=M.validate;h.current[O]={validate:B}},[]),sn=w.useCallback(function(O){delete h.current[O]},[]),R=Ft(function(O,M){b({type:"SET_TOUCHED",payload:O});var B=M===void 0?o:M;return B?ne(C.values):Promise.resolve()}),W=w.useCallback(function(O){b({type:"SET_ERRORS",payload:O})},[]),G=Ft(function(O,M){var B=Yt(O)?O(C.values):O;b({type:"SET_VALUES",payload:B});var V=M===void 0?n:M;return V?ne(B):Promise.resolve()}),le=w.useCallback(function(O,M){b({type:"SET_FIELD_ERROR",payload:{field:O,value:M}})},[]),ae=Ft(function(O,M,B){b({type:"SET_FIELD_VALUE",payload:{field:O,value:M}});var V=B===void 0?n:B;return V?ne(Dr(C.values,O,M)):Promise.resolve()}),ct=w.useCallback(function(O,M){var B=M,V=O,Y;if(!pu(O)){O.persist&&O.persist();var oe=O.target?O.target:O.currentTarget,ze=oe.type,dt=oe.name,Yo=oe.id,Rt=oe.value,pi=oe.checked;oe.outerHTML;var Qo=oe.options,hi=oe.multiple;B=M||dt||Yo,V=/number|range/.test(ze)?(Y=parseFloat(Rt),isNaN(Y)?"":Y):/checkbox/.test(ze)?TO(Et(C.values,B),pi,Rt):Qo&&hi?kO(Qo):Rt}B&&ae(B,V)},[ae,C.values]),Ve=Ft(function(O){if(pu(O))return function(M){return ct(M,O)};ct(O)}),Ae=Ft(function(O,M,B){M===void 0&&(M=!0),b({type:"SET_FIELD_TOUCHED",payload:{field:O,value:M}});var V=B===void 0?o:B;return V?ne(C.values):Promise.resolve()}),Me=w.useCallback(function(O,M){O.persist&&O.persist();var B=O.target,V=B.name,Y=B.id;B.outerHTML;var oe=M||V||Y;Ae(oe,!0)},[Ae]),Xe=Ft(function(O){if(pu(O))return function(M){return Me(M,O)};Me(O)}),Xr=w.useCallback(function(O){Yt(O)?b({type:"SET_FORMIK_STATE",payload:O}):b({type:"SET_FORMIK_STATE",payload:function(){return O}})},[]),ci=w.useCallback(function(O){b({type:"SET_STATUS",payload:O})},[]),di=w.useCallback(function(O){b({type:"SET_ISSUBMITTING",payload:O})},[]),Wo=Ft(function(){return b({type:"SUBMIT_ATTEMPT"}),ne().then(function(O){var M=O instanceof Error,B=!M&&Object.keys(O).length===0;if(B){var V;try{if(V=fi(),V===void 0)return}catch(Y){throw Y}return Promise.resolve(V).then(function(Y){return g.current&&b({type:"SUBMIT_SUCCESS"}),Y}).catch(function(Y){if(g.current)throw b({type:"SUBMIT_FAILURE"}),Y})}else if(g.current&&(b({type:"SUBMIT_FAILURE"}),M))throw O})}),rt=Ft(function(O){O&&O.preventDefault&&Yt(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&Yt(O.stopPropagation)&&O.stopPropagation(),Wo().catch(function(M){console.warn("Warning: An unhandled error was caught from submitForm()",M)})}),Un={resetForm:pe,validateForm:ne,validateField:ut,setErrors:W,setFieldError:le,setFieldTouched:Ae,setFieldValue:ae,setStatus:ci,setSubmitting:di,setTouched:R,setValues:G,setFormikState:Xr,submitForm:Wo},fi=Ft(function(){return c(C.values,Un)}),ks=Ft(function(O){O&&O.preventDefault&&Yt(O.preventDefault)&&O.preventDefault(),O&&O.stopPropagation&&Yt(O.stopPropagation)&&O.stopPropagation(),pe()}),xn=w.useCallback(function(O){return{value:Et(C.values,O),error:Et(C.errors,O),touched:!!Et(C.touched,O),initialValue:Et(x.current,O),initialTouched:!!Et(m.current,O),initialError:Et(y.current,O)}},[C.errors,C.touched,C.values]),Ts=w.useCallback(function(O){return{setValue:function(B,V){return ae(O,B,V)},setTouched:function(B,V){return Ae(O,B,V)},setError:function(B){return le(O,B)}}},[ae,Ae,le]),Os=w.useCallback(function(O){var M=ws(O),B=M?O.name:O,V=Et(C.values,B),Y={name:B,value:V,onChange:Ve,onBlur:Xe};if(M){var oe=O.type,ze=O.value,dt=O.as,Yo=O.multiple;oe==="checkbox"?ze===void 0?Y.checked=!!V:(Y.checked=!!(Array.isArray(V)&&~V.indexOf(ze)),Y.value=ze):oe==="radio"?(Y.checked=V===ze,Y.value=ze):dt==="select"&&Yo&&(Y.value=Y.value||[],Y.multiple=!0)}return Y},[Xe,Ve,C.values]),Go=w.useMemo(function(){return!Er(x.current,C.values)},[x.current,C.values]),Ps=w.useMemo(function(){return typeof l<"u"?Go?C.errors&&Object.keys(C.errors).length===0:l!==!1&&Yt(l)?l(f):l:C.errors&&Object.keys(C.errors).length===0},[l,Go,C.errors,f]),Cs=$e({},C,{initialValues:x.current,initialErrors:y.current,initialTouched:m.current,initialStatus:E.current,handleBlur:Xe,handleChange:Ve,handleReset:ks,handleSubmit:rt,resetForm:pe,setErrors:W,setFormikState:Xr,setFieldTouched:Ae,setFieldValue:ae,setFieldError:le,setStatus:ci,setSubmitting:di,setTouched:R,setValues:G,submitForm:Wo,validateForm:ne,validateField:ut,isValid:Ps,dirty:Go,unregisterField:sn,registerField:ln,getFieldProps:Os,getFieldMeta:xn,getFieldHelpers:Ts,validateOnBlur:o,validateOnChange:n,validateOnMount:i});return Cs}function wO(e){var t={};if(e.inner){if(e.inner.length===0)return Dr(t,e.path,e.message);for(var o=e.inner,n=Array.isArray(o),r=0,o=n?o:o[Symbol.iterator]();;){var a;if(n){if(r>=o.length)break;a=o[r++]}else{if(r=o.next(),r.done)break;a=r.value}var i=a;Et(t,i.path)||(t=Dr(t,i.path,i.message))}}return t}function SO(e,t,n,r){n===void 0&&(n=!1);var o=Rc(e);return t[n?"validateSync":"validate"](o,{abortEarly:!1,context:o})}function Rc(e){var t=Array.isArray(e)?[]:{};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var r=String(n);Array.isArray(e[r])===!0?t[r]=e[r].map(function(o){return Array.isArray(o)===!0||hh(o)?Rc(o):o!==""?o:void 0}):hh(e[r])?t[r]=Rc(e[r]):t[r]=e[r]!==""?e[r]:void 0}return t}function EO(e,t,n){var r=e.slice();return t.forEach(function(a,i){if(typeof r[i]>"u"){var l=n.clone!==!1,s=l&&n.isMergeableObject(a);r[i]=s?Pc(Array.isArray(a)?[]:{},a,n):a}else n.isMergeableObject(a)?r[i]=Pc(e[i],a,n):e.indexOf(a)===-1&&r.push(a)}),r}function kO(e){return Array.from(e).filter(function(t){return t.selected}).map(function(t){return t.value})}function TO(e,t,n){if(typeof e=="boolean")return!!t;var r=[],o=!1,a=-1;if(Array.isArray(e))r=e,a=e.indexOf(n),o=a>=0;else if(!n||n=="true"||n=="false")return!!t;return t&&n&&!o?r.concat(n):o?r.slice(0,a).concat(r.slice(a+1)):r}var OO=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?w.useLayoutEffect:w.useEffect;function Ft(e){var t=w.useRef(e);return OO(function(){t.current=e}),w.useCallback(function(){for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return t.current.apply(void 0,r)},[])}var PO=w.forwardRef(function(e,t){var n=e.action,r=Fy(e,["action"]),o=n??"#",a=vO(),i=a.handleReset,l=a.handleSubmit;return w.createElement("form",$e({onSubmit:l,ref:t,onReset:i,action:o},r))});PO.displayName="Form";function Kr(e){this._maxSize=e,this.clear()}Kr.prototype.clear=function(){this._size=0,this._values=Object.create(null)};Kr.prototype.get=function(e){return this._values[e]};Kr.prototype.set=function(e,t){return this._size>=this._maxSize&&this.clear(),e in this._values||this._size++,this._values[e]=t};var CO=/[^.^\]^[]+|(?=\[\]|\.\.)/g,zy=/^\d+$/,_O=/^\d/,jO=/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g,AO=/^\s*(['"]?)(.*?)(\1)\s*$/,tf=512,Uh=new Kr(tf),Bh=new Kr(tf),Hh=new Kr(tf),Fr={Cache:Kr,split:Dc,normalizePath:mu,setter:function(e){var t=mu(e);return Bh.get(e)||Bh.set(e,function(r,o){for(var a=0,i=t.length,l=r;a<i-1;){var s=t[a];if(s==="__proto__"||s==="constructor"||s==="prototype")return r;l=l[t[a++]]}l[t[a]]=o})},getter:function(e,t){var n=mu(e);return Hh.get(e)||Hh.set(e,function(o){for(var a=0,i=n.length;a<i;)if(o!=null||!t)o=o[n[a++]];else return;return o})},join:function(e){return e.reduce(function(t,n){return t+(nf(n)||zy.test(n)?"["+n+"]":(t?".":"")+n)},"")},forEach:function(e,t,n){NO(Array.isArray(e)?e:Dc(e),t,n)}};function mu(e){return Uh.get(e)||Uh.set(e,Dc(e).map(function(t){return t.replace(AO,"$2")}))}function Dc(e){return e.match(CO)||[""]}function NO(e,t,n){var r=e.length,o,a,i,l;for(a=0;a<r;a++)o=e[a],o&&(FO(o)&&(o='"'+o+'"'),l=nf(o),i=!l&&/^\d+$/.test(o),t.call(n,o,l,i,a,e))}function nf(e){return typeof e=="string"&&e&&["'",'"'].indexOf(e.charAt(0))!==-1}function RO(e){return e.match(_O)&&!e.match(zy)}function DO(e){return jO.test(e)}function FO(e){return!nf(e)&&(RO(e)||DO(e))}const LO=/[A-Z\xc0-\xd6\xd8-\xde]?[a-z\xdf-\xf6\xf8-\xff]+(?:['’](?:d|ll|m|re|s|t|ve))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde]|$)|(?:[A-Z\xc0-\xd6\xd8-\xde]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:D|LL|M|RE|S|T|VE))?(?=[\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000]|[A-Z\xc0-\xd6\xd8-\xde](?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])|$)|[A-Z\xc0-\xd6\xd8-\xde]?(?:[a-z\xdf-\xf6\xf8-\xff]|[^\ud800-\udfff\xac\xb1\xd7\xf7\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\xbf\u2000-\u206f \t\x0b\f\xa0\ufeff\n\r\u2028\u2029\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\d+\u2700-\u27bfa-z\xdf-\xf6\xf8-\xffA-Z\xc0-\xd6\xd8-\xde])+(?:['’](?:d|ll|m|re|s|t|ve))?|[A-Z\xc0-\xd6\xd8-\xde]+(?:['’](?:D|LL|M|RE|S|T|VE))?|\d*(?:1ST|2ND|3RD|(?![123])\dTH)(?=\b|[a-z_])|\d*(?:1st|2nd|3rd|(?![123])\dth)(?=\b|[A-Z_])|\d+|(?:[\u2700-\u27bf]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?(?:\u200d(?:[^\ud800-\udfff]|(?:\ud83c[\udde6-\uddff]){2}|[\ud800-\udbff][\udc00-\udfff])[\ufe0e\ufe0f]?(?:[\u0300-\u036f\ufe20-\ufe2f\u20d0-\u20ff]|\ud83c[\udffb-\udfff])?)*/g,Ss=e=>e.match(LO)||[],Es=e=>e[0].toUpperCase()+e.slice(1),rf=(e,t)=>Ss(e).join(t).toLowerCase(),Iy=e=>Ss(e).reduce((t,n)=>`${t}${t?n[0].toUpperCase()+n.slice(1).toLowerCase():n.toLowerCase()}`,""),MO=e=>Es(Iy(e)),zO=e=>rf(e,"_"),IO=e=>rf(e,"-"),$O=e=>Es(rf(e," ")),UO=e=>Ss(e).map(Es).join(" ");var gu={words:Ss,upperFirst:Es,camelCase:Iy,pascalCase:MO,snakeCase:zO,kebabCase:IO,sentenceCase:$O,titleCase:UO},of={exports:{}};of.exports=function(e){return $y(BO(e),e)};of.exports.array=$y;function $y(e,t){var n=e.length,r=new Array(n),o={},a=n,i=HO(t),l=VO(e);for(t.forEach(function(u){if(!l.has(u[0])||!l.has(u[1]))throw new Error("Unknown node. There is an unknown node in the supplied edges.")});a--;)o[a]||s(e[a],a,new Set);return r;function s(u,c,d){if(d.has(u)){var f;try{f=", node was:"+JSON.stringify(u)}catch{f=""}throw new Error("Cyclic dependency"+f)}if(!l.has(u))throw new Error("Found unknown node. Make sure to provided all involved nodes. Unknown node: "+JSON.stringify(u));if(!o[c]){o[c]=!0;var x=i.get(u)||new Set;if(x=Array.from(x),c=x.length){d.add(u);do{var y=x[--c];s(y,l.get(y),d)}while(c);d.delete(u)}r[--n]=u}}}function BO(e){for(var t=new Set,n=0,r=e.length;n<r;n++){var o=e[n];t.add(o[0]),t.add(o[1])}return Array.from(t)}function HO(e){for(var t=new Map,n=0,r=e.length;n<r;n++){var o=e[n];t.has(o[0])||t.set(o[0],new Set),t.has(o[1])||t.set(o[1],new Set),t.get(o[0]).add(o[1])}return t}function VO(e){for(var t=new Map,n=0,r=e.length;n<r;n++)t.set(e[n],n);return t}var qO=of.exports;const WO=pr(qO),GO=Object.prototype.toString,YO=Error.prototype.toString,QO=RegExp.prototype.toString,ZO=typeof Symbol<"u"?Symbol.prototype.toString:()=>"",KO=/^Symbol\((.*)\)(.*)$/;function XO(e){return e!=+e?"NaN":e===0&&1/e<0?"-0":""+e}function Vh(e,t=!1){if(e==null||e===!0||e===!1)return""+e;const n=typeof e;if(n==="number")return XO(e);if(n==="string")return t?`"${e}"`:e;if(n==="function")return"[Function "+(e.name||"anonymous")+"]";if(n==="symbol")return ZO.call(e).replace(KO,"Symbol($1)");const r=GO.call(e).slice(8,-1);return r==="Date"?isNaN(e.getTime())?""+e:e.toISOString(e):r==="Error"||e instanceof Error?"["+YO.call(e)+"]":r==="RegExp"?QO.call(e):null}function ur(e,t){let n=Vh(e,t);return n!==null?n:JSON.stringify(e,function(r,o){let a=Vh(this[r],t);return a!==null?a:o},2)}function Uy(e){return e==null?[]:[].concat(e)}let By,Hy,Vy,JO=/\$\{\s*(\w+)\s*\}/g;By=Symbol.toStringTag;class qh{constructor(t,n,r,o){this.name=void 0,this.message=void 0,this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=void 0,this.inner=void 0,this[By]="Error",this.name="ValidationError",this.value=n,this.path=r,this.type=o,this.errors=[],this.inner=[],Uy(t).forEach(a=>{if(mt.isError(a)){this.errors.push(...a.errors);const i=a.inner.length?a.inner:[a];this.inner.push(...i)}else this.errors.push(a)}),this.message=this.errors.length>1?`${this.errors.length} errors occurred`:this.errors[0]}}Hy=Symbol.hasInstance;Vy=Symbol.toStringTag;class mt extends Error{static formatError(t,n){const r=n.label||n.path||"this";return r!==n.path&&(n=Object.assign({},n,{path:r})),typeof t=="string"?t.replace(JO,(o,a)=>ur(n[a])):typeof t=="function"?t(n):t}static isError(t){return t&&t.name==="ValidationError"}constructor(t,n,r,o,a){const i=new qh(t,n,r,o);if(a)return i;super(),this.value=void 0,this.path=void 0,this.type=void 0,this.params=void 0,this.errors=[],this.inner=[],this[Vy]="Error",this.name=i.name,this.message=i.message,this.type=i.type,this.value=i.value,this.path=i.path,this.errors=i.errors,this.inner=i.inner,Error.captureStackTrace&&Error.captureStackTrace(this,mt)}static[Hy](t){return qh[Symbol.hasInstance](t)||super[Symbol.hasInstance](t)}}let fn={default:"${path} is invalid",required:"${path} is a required field",defined:"${path} must be defined",notNull:"${path} cannot be null",oneOf:"${path} must be one of the following values: ${values}",notOneOf:"${path} must not be one of the following values: ${values}",notType:({path:e,type:t,value:n,originalValue:r})=>{const o=r!=null&&r!==n?` (cast from the value \`${ur(r,!0)}\`).`:".";return t!=="mixed"?`${e} must be a \`${t}\` type, but the final value was: \`${ur(n,!0)}\``+o:`${e} must match the configured type. The validated value was: \`${ur(n,!0)}\``+o}},pt={length:"${path} must be exactly ${length} characters",min:"${path} must be at least ${min} characters",max:"${path} must be at most ${max} characters",matches:'${path} must match the following: "${regex}"',email:"${path} must be a valid email",url:"${path} must be a valid URL",uuid:"${path} must be a valid UUID",datetime:"${path} must be a valid ISO date-time",datetime_precision:"${path} must be a valid ISO date-time with a sub-second precision of exactly ${precision} digits",datetime_offset:'${path} must be a valid ISO date-time with UTC "Z" timezone',trim:"${path} must be a trimmed string",lowercase:"${path} must be a lowercase string",uppercase:"${path} must be a upper case string"},eP={min:"${path} must be greater than or equal to ${min}",max:"${path} must be less than or equal to ${max}",lessThan:"${path} must be less than ${less}",moreThan:"${path} must be greater than ${more}",positive:"${path} must be a positive number",negative:"${path} must be a negative number",integer:"${path} must be an integer"},Fc={min:"${path} field must be later than ${min}",max:"${path} field must be at earlier than ${max}"},tP={isValue:"${path} field must be ${value}"},Lc={noUnknown:"${path} field has unspecified keys: ${unknown}"},nP={min:"${path} field must have at least ${min} items",max:"${path} field must have less than or equal to ${max} items",length:"${path} must have ${length} items"},rP={notType:e=>{const{path:t,value:n,spec:r}=e,o=r.types.length;if(Array.isArray(n)){if(n.length<o)return`${t} tuple value has too few items, expected a length of ${o} but got ${n.length} for value: \`${ur(n,!0)}\``;if(n.length>o)return`${t} tuple value has too many items, expected a length of ${o} but got ${n.length} for value: \`${ur(n,!0)}\``}return mt.formatError(fn.notType,e)}};Object.assign(Object.create(null),{mixed:fn,string:pt,number:eP,date:Fc,object:Lc,array:nP,boolean:tP,tuple:rP});const af=e=>e&&e.__isYupSchema__;class Rl{static fromOptions(t,n){if(!n.then&&!n.otherwise)throw new TypeError("either `then:` or `otherwise:` is required for `when()` conditions");let{is:r,then:o,otherwise:a}=n,i=typeof r=="function"?r:(...l)=>l.every(s=>s===r);return new Rl(t,(l,s)=>{var u;let c=i(...l)?o:a;return(u=c==null?void 0:c(s))!=null?u:s})}constructor(t,n){this.fn=void 0,this.refs=t,this.refs=t,this.fn=n}resolve(t,n){let r=this.refs.map(a=>a.getValue(n==null?void 0:n.value,n==null?void 0:n.parent,n==null?void 0:n.context)),o=this.fn(r,t,n);if(o===void 0||o===t)return t;if(!af(o))throw new TypeError("conditions must return a schema object");return o.resolve(n)}}const $i={context:"$",value:"."};function oP(e,t){return new br(e,t)}class br{constructor(t,n={}){if(this.key=void 0,this.isContext=void 0,this.isValue=void 0,this.isSibling=void 0,this.path=void 0,this.getter=void 0,this.map=void 0,typeof t!="string")throw new TypeError("ref must be a string, got: "+t);if(this.key=t.trim(),t==="")throw new TypeError("ref must be a non-empty string");this.isContext=this.key[0]===$i.context,this.isValue=this.key[0]===$i.value,this.isSibling=!this.isContext&&!this.isValue;let r=this.isContext?$i.context:this.isValue?$i.value:"";this.path=this.key.slice(r.length),this.getter=this.path&&Fr.getter(this.path,!0),this.map=n.map}getValue(t,n,r){let o=this.isContext?r:this.isValue?t:n;return this.getter&&(o=this.getter(o||{})),this.map&&(o=this.map(o)),o}cast(t,n){return this.getValue(t,n==null?void 0:n.parent,n==null?void 0:n.context)}resolve(){return this}describe(){return{type:"ref",key:this.key}}toString(){return`Ref(${this.key})`}static isRef(t){return t&&t.__isYupRef}}br.prototype.__isYupRef=!0;const _r=e=>e==null;function io(e){function t({value:n,path:r="",options:o,originalValue:a,schema:i},l,s){const{name:u,test:c,params:d,message:f,skipAbsent:x}=e;let{parent:y,context:m,abortEarly:E=i.spec.abortEarly,disableStackTrace:g=i.spec.disableStackTrace}=o;function h(U){return br.isRef(U)?U.getValue(n,y,m):U}function v(U={}){const ue=Object.assign({value:n,originalValue:a,label:i.spec.label,path:U.path||r,spec:i.spec,disableStackTrace:U.disableStackTrace||g},d,U.params);for(const pe of Object.keys(ue))ue[pe]=h(ue[pe]);const ne=new mt(mt.formatError(U.message||f,ue),n,ue.path,U.type||u,ue.disableStackTrace);return ne.params=ue,ne}const k=E?l:s;let j={path:r,parent:y,type:u,from:o.from,createError:v,resolve:h,options:o,originalValue:a,schema:i};const C=U=>{mt.isError(U)?k(U):U?s(null):k(v())},b=U=>{mt.isError(U)?k(U):l(U)};if(x&&_r(n))return C(!0);let F;try{var L;if(F=c.call(j,n,j),typeof((L=F)==null?void 0:L.then)=="function"){if(o.sync)throw new Error(`Validation test of type: "${j.type}" returned a Promise during a synchronous validate. This test will finish after the validate call has returned`);return Promise.resolve(F).then(C,b)}}catch(U){b(U);return}C(F)}return t.OPTIONS=e,t}function aP(e,t,n,r=n){let o,a,i;return t?(Fr.forEach(t,(l,s,u)=>{let c=s?l.slice(1,l.length-1):l;e=e.resolve({context:r,parent:o,value:n});let d=e.type==="tuple",f=u?parseInt(c,10):0;if(e.innerType||d){if(d&&!u)throw new Error(`Yup.reach cannot implicitly index into a tuple type. the path part "${i}" must contain an index to the tuple element, e.g. "${i}[0]"`);if(n&&f>=n.length)throw new Error(`Yup.reach cannot resolve an array item at index: ${l}, in the path: ${t}. because there is no value at that index. `);o=n,n=n&&n[f],e=d?e.spec.types[f]:e.innerType}if(!u){if(!e.fields||!e.fields[c])throw new Error(`The schema does not contain the path: ${t}. (failed at: ${i} which is a type: "${e.type}")`);o=n,n=n&&n[c],e=e.fields[c]}a=c,i=s?"["+l+"]":"."+l}),{schema:e,parent:o,parentPath:a}):{parent:o,parentPath:t,schema:e}}class Dl extends Set{describe(){const t=[];for(const n of this.values())t.push(br.isRef(n)?n.describe():n);return t}resolveAll(t){let n=[];for(const r of this.values())n.push(t(r));return n}clone(){return new Dl(this.values())}merge(t,n){const r=this.clone();return t.forEach(o=>r.add(o)),n.forEach(o=>r.delete(o)),r}}function wo(e,t=new Map){if(af(e)||!e||typeof e!="object")return e;if(t.has(e))return t.get(e);let n;if(e instanceof Date)n=new Date(e.getTime()),t.set(e,n);else if(e instanceof RegExp)n=new RegExp(e),t.set(e,n);else if(Array.isArray(e)){n=new Array(e.length),t.set(e,n);for(let r=0;r<e.length;r++)n[r]=wo(e[r],t)}else if(e instanceof Map){n=new Map,t.set(e,n);for(const[r,o]of e.entries())n.set(r,wo(o,t))}else if(e instanceof Set){n=new Set,t.set(e,n);for(const r of e)n.add(wo(r,t))}else if(e instanceof Object){n={},t.set(e,n);for(const[r,o]of Object.entries(e))n[r]=wo(o,t)}else throw Error(`Unable to clone ${e}`);return n}class yn{constructor(t){this.type=void 0,this.deps=[],this.tests=void 0,this.transforms=void 0,this.conditions=[],this._mutate=void 0,this.internalTests={},this._whitelist=new Dl,this._blacklist=new Dl,this.exclusiveTests=Object.create(null),this._typeCheck=void 0,this.spec=void 0,this.tests=[],this.transforms=[],this.withMutation(()=>{this.typeError(fn.notType)}),this.type=t.type,this._typeCheck=t.check,this.spec=Object.assign({strip:!1,strict:!1,abortEarly:!0,recursive:!0,disableStackTrace:!1,nullable:!1,optional:!0,coerce:!0},t==null?void 0:t.spec),this.withMutation(n=>{n.nonNullable()})}get _type(){return this.type}clone(t){if(this._mutate)return t&&Object.assign(this.spec,t),this;const n=Object.create(Object.getPrototypeOf(this));return n.type=this.type,n._typeCheck=this._typeCheck,n._whitelist=this._whitelist.clone(),n._blacklist=this._blacklist.clone(),n.internalTests=Object.assign({},this.internalTests),n.exclusiveTests=Object.assign({},this.exclusiveTests),n.deps=[...this.deps],n.conditions=[...this.conditions],n.tests=[...this.tests],n.transforms=[...this.transforms],n.spec=wo(Object.assign({},this.spec,t)),n}label(t){let n=this.clone();return n.spec.label=t,n}meta(...t){if(t.length===0)return this.spec.meta;let n=this.clone();return n.spec.meta=Object.assign(n.spec.meta||{},t[0]),n}withMutation(t){let n=this._mutate;this._mutate=!0;let r=t(this);return this._mutate=n,r}concat(t){if(!t||t===this)return this;if(t.type!==this.type&&this.type!=="mixed")throw new TypeError(`You cannot \`concat()\` schema's of different types: ${this.type} and ${t.type}`);let n=this,r=t.clone();const o=Object.assign({},n.spec,r.spec);return r.spec=o,r.internalTests=Object.assign({},n.internalTests,r.internalTests),r._whitelist=n._whitelist.merge(t._whitelist,t._blacklist),r._blacklist=n._blacklist.merge(t._blacklist,t._whitelist),r.tests=n.tests,r.exclusiveTests=n.exclusiveTests,r.withMutation(a=>{t.tests.forEach(i=>{a.test(i.OPTIONS)})}),r.transforms=[...n.transforms,...r.transforms],r}isType(t){return t==null?!!(this.spec.nullable&&t===null||this.spec.optional&&t===void 0):this._typeCheck(t)}resolve(t){let n=this;if(n.conditions.length){let r=n.conditions;n=n.clone(),n.conditions=[],n=r.reduce((o,a)=>a.resolve(o,t),n),n=n.resolve(t)}return n}resolveOptions(t){var n,r,o,a;return Object.assign({},t,{from:t.from||[],strict:(n=t.strict)!=null?n:this.spec.strict,abortEarly:(r=t.abortEarly)!=null?r:this.spec.abortEarly,recursive:(o=t.recursive)!=null?o:this.spec.recursive,disableStackTrace:(a=t.disableStackTrace)!=null?a:this.spec.disableStackTrace})}cast(t,n={}){let r=this.resolve(Object.assign({value:t},n)),o=n.assert==="ignore-optionality",a=r._cast(t,n);if(n.assert!==!1&&!r.isType(a)){if(o&&_r(a))return a;let i=ur(t),l=ur(a);throw new TypeError(`The value of ${n.path||"field"} could not be cast to a value that satisfies the schema type: "${r.type}". 

attempted value: ${i} 
`+(l!==i?`result of cast: ${l}`:""))}return a}_cast(t,n){let r=t===void 0?t:this.transforms.reduce((o,a)=>a.call(this,o,t,this),t);return r===void 0&&(r=this.getDefault(n)),r}_validate(t,n={},r,o){let{path:a,originalValue:i=t,strict:l=this.spec.strict}=n,s=t;l||(s=this._cast(s,Object.assign({assert:!1},n)));let u=[];for(let c of Object.values(this.internalTests))c&&u.push(c);this.runTests({path:a,value:s,originalValue:i,options:n,tests:u},r,c=>{if(c.length)return o(c,s);this.runTests({path:a,value:s,originalValue:i,options:n,tests:this.tests},r,o)})}runTests(t,n,r){let o=!1,{tests:a,value:i,originalValue:l,path:s,options:u}=t,c=m=>{o||(o=!0,n(m,i))},d=m=>{o||(o=!0,r(m,i))},f=a.length,x=[];if(!f)return d([]);let y={value:i,originalValue:l,path:s,options:u,schema:this};for(let m=0;m<a.length;m++){const E=a[m];E(y,c,function(h){h&&(Array.isArray(h)?x.push(...h):x.push(h)),--f<=0&&d(x)})}}asNestedTest({key:t,index:n,parent:r,parentPath:o,originalParent:a,options:i}){const l=t??n;if(l==null)throw TypeError("Must include `key` or `index` for nested validations");const s=typeof l=="number";let u=r[l];const c=Object.assign({},i,{strict:!0,parent:r,value:u,originalValue:a[l],key:void 0,[s?"index":"key"]:l,path:s||l.includes(".")?`${o||""}[${s?l:`"${l}"`}]`:(o?`${o}.`:"")+t});return(d,f,x)=>this.resolve(c)._validate(u,c,f,x)}validate(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),a=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return new Promise((i,l)=>o._validate(t,n,(s,u)=>{mt.isError(s)&&(s.value=u),l(s)},(s,u)=>{s.length?l(new mt(s,u,void 0,void 0,a)):i(u)}))}validateSync(t,n){var r;let o=this.resolve(Object.assign({},n,{value:t})),a,i=(r=n==null?void 0:n.disableStackTrace)!=null?r:o.spec.disableStackTrace;return o._validate(t,Object.assign({},n,{sync:!0}),(l,s)=>{throw mt.isError(l)&&(l.value=s),l},(l,s)=>{if(l.length)throw new mt(l,t,void 0,void 0,i);a=s}),a}isValid(t,n){return this.validate(t,n).then(()=>!0,r=>{if(mt.isError(r))return!1;throw r})}isValidSync(t,n){try{return this.validateSync(t,n),!0}catch(r){if(mt.isError(r))return!1;throw r}}_getDefault(t){let n=this.spec.default;return n==null?n:typeof n=="function"?n.call(this,t):wo(n)}getDefault(t){return this.resolve(t||{})._getDefault(t)}default(t){return arguments.length===0?this._getDefault():this.clone({default:t})}strict(t=!0){return this.clone({strict:t})}nullability(t,n){const r=this.clone({nullable:t});return r.internalTests.nullable=io({message:n,name:"nullable",test(o){return o===null?this.schema.spec.nullable:!0}}),r}optionality(t,n){const r=this.clone({optional:t});return r.internalTests.optionality=io({message:n,name:"optionality",test(o){return o===void 0?this.schema.spec.optional:!0}}),r}optional(){return this.optionality(!0)}defined(t=fn.defined){return this.optionality(!1,t)}nullable(){return this.nullability(!0)}nonNullable(t=fn.notNull){return this.nullability(!1,t)}required(t=fn.required){return this.clone().withMutation(n=>n.nonNullable(t).defined(t))}notRequired(){return this.clone().withMutation(t=>t.nullable().optional())}transform(t){let n=this.clone();return n.transforms.push(t),n}test(...t){let n;if(t.length===1?typeof t[0]=="function"?n={test:t[0]}:n=t[0]:t.length===2?n={name:t[0],test:t[1]}:n={name:t[0],message:t[1],test:t[2]},n.message===void 0&&(n.message=fn.default),typeof n.test!="function")throw new TypeError("`test` is a required parameters");let r=this.clone(),o=io(n),a=n.exclusive||n.name&&r.exclusiveTests[n.name]===!0;if(n.exclusive&&!n.name)throw new TypeError("Exclusive tests must provide a unique `name` identifying the test");return n.name&&(r.exclusiveTests[n.name]=!!n.exclusive),r.tests=r.tests.filter(i=>!(i.OPTIONS.name===n.name&&(a||i.OPTIONS.test===o.OPTIONS.test))),r.tests.push(o),r}when(t,n){!Array.isArray(t)&&typeof t!="string"&&(n=t,t=".");let r=this.clone(),o=Uy(t).map(a=>new br(a));return o.forEach(a=>{a.isSibling&&r.deps.push(a.key)}),r.conditions.push(typeof n=="function"?new Rl(o,n):Rl.fromOptions(o,n)),r}typeError(t){let n=this.clone();return n.internalTests.typeError=io({message:t,name:"typeError",skipAbsent:!0,test(r){return this.schema._typeCheck(r)?!0:this.createError({params:{type:this.schema.type}})}}),n}oneOf(t,n=fn.oneOf){let r=this.clone();return t.forEach(o=>{r._whitelist.add(o),r._blacklist.delete(o)}),r.internalTests.whiteList=io({message:n,name:"oneOf",skipAbsent:!0,test(o){let a=this.schema._whitelist,i=a.resolveAll(this.resolve);return i.includes(o)?!0:this.createError({params:{values:Array.from(a).join(", "),resolved:i}})}}),r}notOneOf(t,n=fn.notOneOf){let r=this.clone();return t.forEach(o=>{r._blacklist.add(o),r._whitelist.delete(o)}),r.internalTests.blacklist=io({message:n,name:"notOneOf",test(o){let a=this.schema._blacklist,i=a.resolveAll(this.resolve);return i.includes(o)?this.createError({params:{values:Array.from(a).join(", "),resolved:i}}):!0}}),r}strip(t=!0){let n=this.clone();return n.spec.strip=t,n}describe(t){const n=(t?this.resolve(t):this).clone(),{label:r,meta:o,optional:a,nullable:i}=n.spec;return{meta:o,label:r,optional:a,nullable:i,default:n.getDefault(t),type:n.type,oneOf:n._whitelist.describe(),notOneOf:n._blacklist.describe(),tests:n.tests.map(s=>({name:s.OPTIONS.name,params:s.OPTIONS.params})).filter((s,u,c)=>c.findIndex(d=>d.name===s.name)===u)}}}yn.prototype.__isYupSchema__=!0;for(const e of["validate","validateSync"])yn.prototype[`${e}At`]=function(t,n,r={}){const{parent:o,parentPath:a,schema:i}=aP(this,t,n,r.context);return i[e](o&&o[a],Object.assign({},r,{parent:o,path:t}))};for(const e of["equals","is"])yn.prototype[e]=yn.prototype.oneOf;for(const e of["not","nope"])yn.prototype[e]=yn.prototype.notOneOf;const iP=/^(\d{4}|[+-]\d{6})(?:-?(\d{2})(?:-?(\d{2}))?)?(?:[ T]?(\d{2}):?(\d{2})(?::?(\d{2})(?:[,.](\d{1,}))?)?(?:(Z)|([+-])(\d{2})(?::?(\d{2}))?)?)?$/;function lP(e){const t=Mc(e);if(!t)return Date.parse?Date.parse(e):Number.NaN;if(t.z===void 0&&t.plusMinus===void 0)return new Date(t.year,t.month,t.day,t.hour,t.minute,t.second,t.millisecond).valueOf();let n=0;return t.z!=="Z"&&t.plusMinus!==void 0&&(n=t.hourOffset*60+t.minuteOffset,t.plusMinus==="+"&&(n=0-n)),Date.UTC(t.year,t.month,t.day,t.hour,t.minute+n,t.second,t.millisecond)}function Mc(e){var t,n;const r=iP.exec(e);return r?{year:kn(r[1]),month:kn(r[2],1)-1,day:kn(r[3],1),hour:kn(r[4]),minute:kn(r[5]),second:kn(r[6]),millisecond:r[7]?kn(r[7].substring(0,3)):0,precision:(t=(n=r[7])==null?void 0:n.length)!=null?t:void 0,z:r[8]||void 0,plusMinus:r[9]||void 0,hourOffset:kn(r[10]),minuteOffset:kn(r[11])}:null}function kn(e,t=0){return Number(e)||t}let sP=/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,uP=/^((https?|ftp):)?\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,cP=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,dP="^\\d{4}-\\d{2}-\\d{2}",fP="\\d{2}:\\d{2}:\\d{2}",pP="(([+-]\\d{2}(:?\\d{2})?)|Z)",hP=new RegExp(`${dP}T${fP}(\\.\\d+)?${pP}$`),mP=e=>_r(e)||e===e.trim(),gP={}.toString();function Xn(){return new qy}class qy extends yn{constructor(){super({type:"string",check(t){return t instanceof String&&(t=t.valueOf()),typeof t=="string"}}),this.withMutation(()=>{this.transform((t,n,r)=>{if(!r.spec.coerce||r.isType(t)||Array.isArray(t))return t;const o=t!=null&&t.toString?t.toString():t;return o===gP?t:o})})}required(t){return super.required(t).withMutation(n=>n.test({message:t||fn.required,name:"required",skipAbsent:!0,test:r=>!!r.length}))}notRequired(){return super.notRequired().withMutation(t=>(t.tests=t.tests.filter(n=>n.OPTIONS.name!=="required"),t))}length(t,n=pt.length){return this.test({message:n,name:"length",exclusive:!0,params:{length:t},skipAbsent:!0,test(r){return r.length===this.resolve(t)}})}min(t,n=pt.min){return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(r){return r.length>=this.resolve(t)}})}max(t,n=pt.max){return this.test({name:"max",exclusive:!0,message:n,params:{max:t},skipAbsent:!0,test(r){return r.length<=this.resolve(t)}})}matches(t,n){let r=!1,o,a;return n&&(typeof n=="object"?{excludeEmptyString:r=!1,message:o,name:a}=n:o=n),this.test({name:a||"matches",message:o||pt.matches,params:{regex:t},skipAbsent:!0,test:i=>i===""&&r||i.search(t)!==-1})}email(t=pt.email){return this.matches(sP,{name:"email",message:t,excludeEmptyString:!0})}url(t=pt.url){return this.matches(uP,{name:"url",message:t,excludeEmptyString:!0})}uuid(t=pt.uuid){return this.matches(cP,{name:"uuid",message:t,excludeEmptyString:!1})}datetime(t){let n="",r,o;return t&&(typeof t=="object"?{message:n="",allowOffset:r=!1,precision:o=void 0}=t:n=t),this.matches(hP,{name:"datetime",message:n||pt.datetime,excludeEmptyString:!0}).test({name:"datetime_offset",message:n||pt.datetime_offset,params:{allowOffset:r},skipAbsent:!0,test:a=>{if(!a||r)return!0;const i=Mc(a);return i?!!i.z:!1}}).test({name:"datetime_precision",message:n||pt.datetime_precision,params:{precision:o},skipAbsent:!0,test:a=>{if(!a||o==null)return!0;const i=Mc(a);return i?i.precision===o:!1}})}ensure(){return this.default("").transform(t=>t===null?"":t)}trim(t=pt.trim){return this.transform(n=>n!=null?n.trim():n).test({message:t,name:"trim",test:mP})}lowercase(t=pt.lowercase){return this.transform(n=>_r(n)?n:n.toLowerCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>_r(n)||n===n.toLowerCase()})}uppercase(t=pt.uppercase){return this.transform(n=>_r(n)?n:n.toUpperCase()).test({message:t,name:"string_case",exclusive:!0,skipAbsent:!0,test:n=>_r(n)||n===n.toUpperCase()})}}Xn.prototype=qy.prototype;let yP=new Date(""),vP=e=>Object.prototype.toString.call(e)==="[object Date]";class lf extends yn{constructor(){super({type:"date",check(t){return vP(t)&&!isNaN(t.getTime())}}),this.withMutation(()=>{this.transform((t,n,r)=>!r.spec.coerce||r.isType(t)||t===null?t:(t=lP(t),isNaN(t)?lf.INVALID_DATE:new Date(t)))})}prepareParam(t,n){let r;if(br.isRef(t))r=t;else{let o=this.cast(t);if(!this._typeCheck(o))throw new TypeError(`\`${n}\` must be a Date or a value that can be \`cast()\` to a Date`);r=o}return r}min(t,n=Fc.min){let r=this.prepareParam(t,"min");return this.test({message:n,name:"min",exclusive:!0,params:{min:t},skipAbsent:!0,test(o){return o>=this.resolve(r)}})}max(t,n=Fc.max){let r=this.prepareParam(t,"max");return this.test({message:n,name:"max",exclusive:!0,params:{max:t},skipAbsent:!0,test(o){return o<=this.resolve(r)}})}}lf.INVALID_DATE=yP;function bP(e,t=[]){let n=[],r=new Set,o=new Set(t.map(([i,l])=>`${i}-${l}`));function a(i,l){let s=Fr.split(i)[0];r.add(s),o.has(`${l}-${s}`)||n.push([l,s])}for(const i of Object.keys(e)){let l=e[i];r.add(i),br.isRef(l)&&l.isSibling?a(l.path,i):af(l)&&"deps"in l&&l.deps.forEach(s=>a(s,i))}return WO.array(Array.from(r),n).reverse()}function Wh(e,t){let n=1/0;return e.some((r,o)=>{var a;if((a=t.path)!=null&&a.includes(r))return n=o,!0}),n}function Wy(e){return(t,n)=>Wh(e,t)-Wh(e,n)}const xP=(e,t,n)=>{if(typeof e!="string")return e;let r=e;try{r=JSON.parse(e)}catch{}return n.isType(r)?r:e};function nl(e){if("fields"in e){const t={};for(const[n,r]of Object.entries(e.fields))t[n]=nl(r);return e.setFields(t)}if(e.type==="array"){const t=e.optional();return t.innerType&&(t.innerType=nl(t.innerType)),t}return e.type==="tuple"?e.optional().clone({types:e.spec.types.map(nl)}):"optional"in e?e.optional():e}const wP=(e,t)=>{const n=[...Fr.normalizePath(t)];if(n.length===1)return n[0]in e;let r=n.pop(),o=Fr.getter(Fr.join(n),!0)(e);return!!(o&&r in o)};let Gh=e=>Object.prototype.toString.call(e)==="[object Object]";function SP(e,t){let n=Object.keys(e.fields);return Object.keys(t).filter(r=>n.indexOf(r)===-1)}const EP=Wy([]);function sf(e){return new Gy(e)}class Gy extends yn{constructor(t){super({type:"object",check(n){return Gh(n)||typeof n=="function"}}),this.fields=Object.create(null),this._sortErrors=EP,this._nodes=[],this._excludedEdges=[],this.withMutation(()=>{t&&this.shape(t)})}_cast(t,n={}){var r;let o=super._cast(t,n);if(o===void 0)return this.getDefault(n);if(!this._typeCheck(o))return o;let a=this.fields,i=(r=n.stripUnknown)!=null?r:this.spec.noUnknown,l=[].concat(this._nodes,Object.keys(o).filter(d=>!this._nodes.includes(d))),s={},u=Object.assign({},n,{parent:s,__validating:n.__validating||!1}),c=!1;for(const d of l){let f=a[d],x=d in o;if(f){let y,m=o[d];u.path=(n.path?`${n.path}.`:"")+d,f=f.resolve({value:m,context:n.context,parent:s});let E=f instanceof yn?f.spec:void 0,g=E==null?void 0:E.strict;if(E!=null&&E.strip){c=c||d in o;continue}y=!n.__validating||!g?f.cast(o[d],u):o[d],y!==void 0&&(s[d]=y)}else x&&!i&&(s[d]=o[d]);(x!==d in s||s[d]!==o[d])&&(c=!0)}return c?s:o}_validate(t,n={},r,o){let{from:a=[],originalValue:i=t,recursive:l=this.spec.recursive}=n;n.from=[{schema:this,value:i},...a],n.__validating=!0,n.originalValue=i,super._validate(t,n,r,(s,u)=>{if(!l||!Gh(u)){o(s,u);return}i=i||u;let c=[];for(let d of this._nodes){let f=this.fields[d];!f||br.isRef(f)||c.push(f.asNestedTest({options:n,key:d,parent:u,parentPath:n.path,originalParent:i}))}this.runTests({tests:c,value:u,originalValue:i,options:n},r,d=>{o(d.sort(this._sortErrors).concat(s),u)})})}clone(t){const n=super.clone(t);return n.fields=Object.assign({},this.fields),n._nodes=this._nodes,n._excludedEdges=this._excludedEdges,n._sortErrors=this._sortErrors,n}concat(t){let n=super.concat(t),r=n.fields;for(let[o,a]of Object.entries(this.fields)){const i=r[o];r[o]=i===void 0?a:i}return n.withMutation(o=>o.setFields(r,[...this._excludedEdges,...t._excludedEdges]))}_getDefault(t){if("default"in this.spec)return super._getDefault(t);if(!this._nodes.length)return;let n={};return this._nodes.forEach(r=>{var o;const a=this.fields[r];let i=t;(o=i)!=null&&o.value&&(i=Object.assign({},i,{parent:i.value,value:i.value[r]})),n[r]=a&&"getDefault"in a?a.getDefault(i):void 0}),n}setFields(t,n){let r=this.clone();return r.fields=t,r._nodes=bP(t,n),r._sortErrors=Wy(Object.keys(t)),n&&(r._excludedEdges=n),r}shape(t,n=[]){return this.clone().withMutation(r=>{let o=r._excludedEdges;return n.length&&(Array.isArray(n[0])||(n=[n]),o=[...r._excludedEdges,...n]),r.setFields(Object.assign(r.fields,t),o)})}partial(){const t={};for(const[n,r]of Object.entries(this.fields))t[n]="optional"in r&&r.optional instanceof Function?r.optional():r;return this.setFields(t)}deepPartial(){return nl(this)}pick(t){const n={};for(const r of t)this.fields[r]&&(n[r]=this.fields[r]);return this.setFields(n,this._excludedEdges.filter(([r,o])=>t.includes(r)&&t.includes(o)))}omit(t){const n=[];for(const r of Object.keys(this.fields))t.includes(r)||n.push(r);return this.pick(n)}from(t,n,r){let o=Fr.getter(t,!0);return this.transform(a=>{if(!a)return a;let i=a;return wP(a,t)&&(i=Object.assign({},a),r||delete i[t],i[n]=o(a)),i})}json(){return this.transform(xP)}noUnknown(t=!0,n=Lc.noUnknown){typeof t!="boolean"&&(n=t,t=!0);let r=this.test({name:"noUnknown",exclusive:!0,message:n,test(o){if(o==null)return!0;const a=SP(this.schema,o);return!t||a.length===0||this.createError({params:{unknown:a.join(", ")}})}});return r.spec.noUnknown=t,r}unknown(t=!0,n=Lc.noUnknown){return this.noUnknown(!t,n)}transformKeys(t){return this.transform(n=>{if(!n)return n;const r={};for(const o of Object.keys(n))r[t(o)]=n[o];return r})}camelCase(){return this.transformKeys(gu.camelCase)}snakeCase(){return this.transformKeys(gu.snakeCase)}constantCase(){return this.transformKeys(t=>gu.snakeCase(t).toUpperCase())}describe(t){const n=(t?this.resolve(t):this).clone(),r=super.describe(t);r.fields={};for(const[a,i]of Object.entries(n.fields)){var o;let l=t;(o=l)!=null&&o.value&&(l=Object.assign({},l,{parent:l.value,value:l.value[a]})),r.fields[a]=i.describe(l)}return r}}sf.prototype=Gy.prototype;function kP(){const[e,t]=w.useState(""),[n,r]=w.useState(!1);let{setUserLogin:o}=w.useContext(es),a=ai(),i=sf().shape({email:Xn().email("the email is not valid").required("the email is required"),password:Xn().matches(/^[A-Z][a-z0-9]{5,10}$/,"the password is not valid").required("the password is required")});function l(u){r(!0);let{data:c}=ce.post("https://ecommerce.routemisr.com/api/v1/auth/signin",u).then(d=>{r(!1),d.data.message==="success"&&(o(d.data.token),localStorage.setItem("userToken",d.data.token),a("/"))}).catch(d=>{var f,x;r(!1),t((x=(f=d==null?void 0:d.response)==null?void 0:f.data)==null?void 0:x.message),console.log(d)})}let s=My({initialValues:{email:"",password:""},validationSchema:i,onSubmit:l});return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Login"})}),p.jsxs("div",{className:"max-w-lg mx-auto rounded-lg border shadow-md px-8 py-10 flex flex-col items-center ",children:[p.jsxs("form",{onSubmit:s.handleSubmit,action:"#",className:"w-full flex flex-col gap-4 ",children:[p.jsx("h1",{className:"text-center text-white",children:"Login Now"}),p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"email",className:"text-sm text-gray-300 dark:text-gray-200 mr-2",children:"Email:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.email,type:"email",id:"email",name:"email",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.email&&s.touched.email?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.email})}):null,p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"password",className:"text-sm text-gray-300 dark:text-gray-200 mr-2",children:"Password:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.password,type:"password",id:"password",name:"password",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-300 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.password&&s.touched.password?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.password})}):null,p.jsx("button",{type:"submit",className:"text-white me-5 bg-gray-700 hover:bg-gray-800 focus:ring-4  focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",children:n?p.jsxs(p.Fragment,{children:[" ",p.jsx("i",{className:"fa-solid fa-rotate mx-3"}),"Login "]}):"Login"}),e?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:e})}):null]}),p.jsxs("div",{className:"mt-4 text-center",children:[p.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:"Already have an account? "}),p.jsx(yt,{to:"/Register",className:"font-semibold border-b-2 text-blue-500 hover:text-blue-600",children:"Register"})]})]})]})}function TP(){const[e,t]=w.useState(""),[n,r]=w.useState(!1);let{setUserLogin:o}=w.useContext(es),a=ai(),i=sf().shape({name:Xn().min(5,"the min lenth is 5").max(15,"the max lenth is 15").required("the name is required"),phone:Xn().matches(/^01[0125][0-9]{8}$/,"the phone must egyption number").required("the phone is required"),email:Xn().email("the email is not valid").required("the email is required"),password:Xn().matches(/^[A-Z][a-z0-9]{5,10}$/,"the password is not valid").required("the password is required"),rePassword:Xn().oneOf([oP("password")],"the password is not match").required("the rePassword is required")});function l(u){r(!0),ce.post("https://ecommerce.routemisr.com/api/v1/auth/signup",u).then(c=>{r(!1),c.data.message==="success"&&(o(c.data.token),localStorage.setItem("userToken",c.data.token),a("/"))}).catch(c=>{var d,f;r(!1),t((f=(d=c==null?void 0:c.response)==null?void 0:d.data)==null?void 0:f.message),console.log(c)})}let s=My({initialValues:{name:"",email:"",password:"",rePassword:"",phone:""},validationSchema:i,onSubmit:l});return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"Register"})}),p.jsxs("div",{className:"max-w-lg mx-auto rounded-lg border shadow-md px-8 py-10 flex flex-col items-center",children:[p.jsxs("form",{onSubmit:s.handleSubmit,action:"#",className:"w-full flex flex-col gap-4",children:[p.jsx("h1",{className:"text-center text-white",children:"Register Now"}),p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"name",className:"text-sm text-gray-300 mr-2",children:" Name:"}),p.jsx("input",{type:"text",onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.name,id:"name",name:"name",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.name&&s.touched.name?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.name})}):null,p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"email",className:"text-sm text-gray-300 mr-2",children:"Email:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.email,type:"email",id:"email",name:"email",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.email&&s.touched.email?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.email})}):null,p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"phone",className:"text-sm text-gray-300 mr-2",children:"Phone:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.phone,type:"text",id:"phone",name:"phone",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.phone&&s.touched.phone?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.phone})}):null,p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"password",className:"text-sm text-gray-300 mr-2",children:"Password:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.password,type:"password",id:"password",name:"password",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.password&&s.touched.password?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.password})}):null,p.jsxs("div",{className:"flex items-start flex-col justify-start",children:[p.jsx("label",{htmlFor:"rePassword",className:"text-sm text-gray-300 mr-2",children:"rePassword:"}),p.jsx("input",{onBlur:s.handleBlur,onChange:s.handleChange,value:s.values.rePassword,type:"password",id:"rePassword",name:"rePassword",className:"w-full px-3 dark:text-gray-200 dark:bg-gray-900 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"})]}),s.errors.rePassword&&s.touched.rePassword?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:s.errors.rePassword})}):null,p.jsx("button",{type:"submit",className:"text-white me-5 bg-gray-700 hover:bg-gray-800 focus:ring-4  focus:outline-none focus:ring-gray-300 font-semibold rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",children:n?p.jsxs(p.Fragment,{children:[" ",p.jsx("i",{className:"fa-solid fa-rotate mx-3"}),"Register "]}):"Register"}),e?p.jsx("div",{className:"p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400",role:"alert",children:p.jsx("span",{className:"font-medium",children:e})}):null]}),p.jsxs("div",{className:"mt-4 text-center",children:[p.jsx("span",{className:"text-sm text-gray-500 dark:text-gray-300",children:"Already have an account? "}),p.jsx(yt,{to:"/Login",className:"font-semibold border-b-2 text-blue-500 hover:text-blue-600",children:"Login"})]})]})]})}function Wn(e){return localStorage.getItem("userToken")!==null?e.children:p.jsx(Ix,{to:"/Register"})}const OP="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAAsTAAALEwEAmpwYAAADoklEQVR4nO2bPWgVQRDHf4mg+cAERBArBTWlpZWggpXxA+MHKnkBC1ERJFHjJ4QHitooNhJeTAIq2lgIilUINhItbRSMiRbaaJFEFCWKPlnYC5N9++7di++y984dGDh2bndu/rczO7O3B4XUCOwATgBnUsJdwHaggRCqAbqBKSCfUp4ETmpbZ1EtcD8BDzhffM8Eodu4YQzIAVdTwjltk7RRufiMz8tpfwtYRPpI2TRguEMDOjgEjW9TanxAyrZxYe9W1XhKNPSSfsqZbpAVDeraDI4ZsZxkdFtUeRKpwN5sCAAdlgiaKUNe9QBkLAa2lyGvegBqtUHBctJucYEwedUDkEbyAOBnAEVdYCgBlVvcPBQGQP4/46wHgNkz4FkCKre4Wdnol0F8HoBPhHwmiE+Fs9bcOOXkU2H8MohfBolpGWwEbgKDQHPIfS3AZeCxZnW9Zg76WoGHwM6kuECvGKuzyD3ngV+WwkS1nS1D1wrgh+6rvms4B6DFMMw21rEIFdrhiPpuG/2cA/DAVmoKUi7xRchHgH3AfuC58cWmqYSutcDvJAGwDvhTAoC9QvYGqBMydT0q5HtK6HtimTlOAXhabLNB0Dkhu2YZ47qQh8WCDUVcxxkAW8J2W8IUlykPaCRJANQCL0X/6ZgB2FVElzMAOkTf70B/jAAsAF6Le264BmCh8an5Somx/hWAI0L+FVjmGoAu0W8CWBIjAPXAByHv0e3OAFgMfBL91BkDYgTggpB91vqdAnBJ9Pkojp/FAcBS4wiPyiZxCcBy4JvoczCikXMFQOYH73TscQpAp7j/lY7OcQIg375Km3ENQFbc/15/awt43Eh32yoAgDRy2NAnZYMRaoiKANBjKA5jtTrYUmE1raOmwmaNEcbH5wOATUXqeRurt2QrhkaNYqheH9EL5LuFbDiiLvVMG+cDAEUrgc0WviPGyhkBq9nwZ1UCH9D8wpg1TcbZvvVF9EkA1DM53Q+IMtbRCG/yENHJSRCMmh0W2xI7Dfy0GD4tEqqoNCU2URIBQLM+j9tfIiKv1snUI80XgVVz0NemN1UTsylaDeQBwM8AvAvgYwA+CPpVAL8MZtH/0cn8Pe3UJ+ztUg3bRMNYyn+aqtO7SoG9rej9vEnROJBSEOr0pomsOusDoXSDvN7ZySXgZHeluM948wXFWo3+nTT/n/Bd2//DNfo/OukOaeMJ/eYLjEeQigkqMKoI6fpkd6VY2aL+Ep3x+YD+AoK194kljOciAAAAAElFTkSuQmCC";function PP(){return p.jsxs(p.Fragment,{children:[p.jsx(qt,{children:p.jsx("title",{children:"not_found"})}),p.jsx("img",{className:"w-1/4 flex justify-center mx-auto",src:OP,alt:"not_found"}),p.jsx("h1",{className:"text-center",children:"not_found"})]})}function CP(){let e=Yx([{path:"",element:p.jsx(hw,{}),children:[{index:!0,element:p.jsx(Wn,{children:p.jsx(tE,{})})},{path:"Shooter",element:p.jsx(Wn,{children:p.jsx(nE,{})})},{path:"Mmorpg",element:p.jsx(Wn,{children:p.jsx(rE,{})})},{path:"Sailing",element:p.jsx(Wn,{children:p.jsx(oE,{})})},{path:"Permadeath",element:p.jsx(Wn,{children:p.jsx(iE,{})})},{path:"Pixel",element:p.jsx(Wn,{children:p.jsx(aE,{})})},{path:"Superhero",element:p.jsx(Wn,{children:p.jsx(lE,{})})},{path:"game/:id",element:p.jsxs(Wn,{children:[p.jsx(sE,{})," "]})},{path:"Register",element:p.jsx(TP,{})},{path:"Login",element:p.jsx(kP,{})},{path:"*",element:p.jsx(PP,{})}]}]);return p.jsx(p.Fragment,{children:p.jsx(dw,{children:p.jsx(nw,{router:e})})})}yu.createRoot(document.getElementById("root")).render(p.jsx(Qe.StrictMode,{children:p.jsx(CP,{})}))});export default _P();
