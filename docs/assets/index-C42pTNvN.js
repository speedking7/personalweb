function Xb(t,i){for(var a=0;a<i.length;a++){const r=i[a];if(typeof r!="string"&&!Array.isArray(r)){for(const u in r)if(u!=="default"&&!(u in t)){const s=Object.getOwnPropertyDescriptor(r,u);s&&Object.defineProperty(t,u,s.get?s:{enumerable:!0,get:()=>r[u]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const u of document.querySelectorAll('link[rel="modulepreload"]'))r(u);new MutationObserver(u=>{for(const s of u)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(u){const s={};return u.integrity&&(s.integrity=u.integrity),u.referrerPolicy&&(s.referrerPolicy=u.referrerPolicy),u.crossOrigin==="use-credentials"?s.credentials="include":u.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(u){if(u.ep)return;u.ep=!0;const s=a(u);fetch(u.href,s)}})();function pf(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Ac={exports:{}},Qi={};var Im;function Qb(){if(Im)return Qi;Im=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.fragment");function a(r,u,s){var c=null;if(s!==void 0&&(c=""+s),u.key!==void 0&&(c=""+u.key),"key"in u){s={};for(var h in u)h!=="key"&&(s[h]=u[h])}else s=u;return u=s.ref,{$$typeof:t,type:r,key:c,ref:u!==void 0?u:null,props:s}}return Qi.Fragment=i,Qi.jsx=a,Qi.jsxs=a,Qi}var Vm;function Fb(){return Vm||(Vm=1,Ac.exports=Qb()),Ac.exports}var v=Fb(),kc={exports:{}},Se={};var Gm;function Zb(){if(Gm)return Se;Gm=1;var t=Symbol.for("react.transitional.element"),i=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),c=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),b=Symbol.iterator;function S(R){return R===null||typeof R!="object"?null:(R=b&&R[b]||R["@@iterator"],typeof R=="function"?R:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_=Object.assign,T={};function N(R,Y,k){this.props=R,this.context=Y,this.refs=T,this.updater=k||E}N.prototype.isReactComponent={},N.prototype.setState=function(R,Y){if(typeof R!="object"&&typeof R!="function"&&R!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,R,Y,"setState")},N.prototype.forceUpdate=function(R){this.updater.enqueueForceUpdate(this,R,"forceUpdate")};function D(){}D.prototype=N.prototype;function j(R,Y,k){this.props=R,this.context=Y,this.refs=T,this.updater=k||E}var Z=j.prototype=new D;Z.constructor=j,_(Z,N.prototype),Z.isPureReactComponent=!0;var W=Array.isArray;function q(){}var ee={H:null,A:null,T:null,S:null},$=Object.prototype.hasOwnProperty;function ue(R,Y,k){var ae=k.ref;return{$$typeof:t,type:R,key:Y,ref:ae!==void 0?ae:null,props:k}}function O(R,Y){return ue(R.type,Y,R.props)}function J(R){return typeof R=="object"&&R!==null&&R.$$typeof===t}function ne(R){var Y={"=":"=0",":":"=2"};return"$"+R.replace(/[=:]/g,function(k){return Y[k]})}var xe=/\/+/g;function re(R,Y){return typeof R=="object"&&R!==null&&R.key!=null?ne(""+R.key):Y.toString(36)}function P(R){switch(R.status){case"fulfilled":return R.value;case"rejected":throw R.reason;default:switch(typeof R.status=="string"?R.then(q,q):(R.status="pending",R.then(function(Y){R.status==="pending"&&(R.status="fulfilled",R.value=Y)},function(Y){R.status==="pending"&&(R.status="rejected",R.reason=Y)})),R.status){case"fulfilled":return R.value;case"rejected":throw R.reason}}throw R}function B(R,Y,k,ae,se){var oe=typeof R;(oe==="undefined"||oe==="boolean")&&(R=null);var Ae=!1;if(R===null)Ae=!0;else switch(oe){case"bigint":case"string":case"number":Ae=!0;break;case"object":switch(R.$$typeof){case t:case i:Ae=!0;break;case y:return Ae=R._init,B(Ae(R._payload),Y,k,ae,se)}}if(Ae)return se=se(R),Ae=ae===""?"."+re(R,0):ae,W(se)?(k="",Ae!=null&&(k=Ae.replace(xe,"$&/")+"/"),B(se,Y,k,"",function(An){return An})):se!=null&&(J(se)&&(se=O(se,k+(se.key==null||R&&R.key===se.key?"":(""+se.key).replace(xe,"$&/")+"/")+Ae)),Y.push(se)),1;Ae=0;var Xe=ae===""?".":ae+":";if(W(R))for(var be=0;be<R.length;be++)ae=R[be],oe=Xe+re(ae,be),Ae+=B(ae,Y,k,oe,se);else if(be=S(R),typeof be=="function")for(R=be.call(R),be=0;!(ae=R.next()).done;)ae=ae.value,oe=Xe+re(ae,be++),Ae+=B(ae,Y,k,oe,se);else if(oe==="object"){if(typeof R.then=="function")return B(P(R),Y,k,ae,se);throw Y=String(R),Error("Objects are not valid as a React child (found: "+(Y==="[object Object]"?"object with keys {"+Object.keys(R).join(", ")+"}":Y)+"). If you meant to render a collection of children, use an array instead.")}return Ae}function K(R,Y,k){if(R==null)return R;var ae=[],se=0;return B(R,ae,"","",function(oe){return Y.call(k,oe,se++)}),ae}function ie(R){if(R._status===-1){var Y=R._result;Y=Y(),Y.then(function(k){(R._status===0||R._status===-1)&&(R._status=1,R._result=k)},function(k){(R._status===0||R._status===-1)&&(R._status=2,R._result=k)}),R._status===-1&&(R._status=0,R._result=Y)}if(R._status===1)return R._result.default;throw R._result}var ve=typeof reportError=="function"?reportError:function(R){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Y=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof R=="object"&&R!==null&&typeof R.message=="string"?String(R.message):String(R),error:R});if(!window.dispatchEvent(Y))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",R);return}console.error(R)},A={map:K,forEach:function(R,Y,k){K(R,function(){Y.apply(this,arguments)},k)},count:function(R){var Y=0;return K(R,function(){Y++}),Y},toArray:function(R){return K(R,function(Y){return Y})||[]},only:function(R){if(!J(R))throw Error("React.Children.only expected to receive a single React element child.");return R}};return Se.Activity=g,Se.Children=A,Se.Component=N,Se.Fragment=a,Se.Profiler=u,Se.PureComponent=j,Se.StrictMode=r,Se.Suspense=m,Se.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ee,Se.__COMPILER_RUNTIME={__proto__:null,c:function(R){return ee.H.useMemoCache(R)}},Se.cache=function(R){return function(){return R.apply(null,arguments)}},Se.cacheSignal=function(){return null},Se.cloneElement=function(R,Y,k){if(R==null)throw Error("The argument must be a React element, but you passed "+R+".");var ae=_({},R.props),se=R.key;if(Y!=null)for(oe in Y.key!==void 0&&(se=""+Y.key),Y)!$.call(Y,oe)||oe==="key"||oe==="__self"||oe==="__source"||oe==="ref"&&Y.ref===void 0||(ae[oe]=Y[oe]);var oe=arguments.length-2;if(oe===1)ae.children=k;else if(1<oe){for(var Ae=Array(oe),Xe=0;Xe<oe;Xe++)Ae[Xe]=arguments[Xe+2];ae.children=Ae}return ue(R.type,se,ae)},Se.createContext=function(R){return R={$$typeof:c,_currentValue:R,_currentValue2:R,_threadCount:0,Provider:null,Consumer:null},R.Provider=R,R.Consumer={$$typeof:s,_context:R},R},Se.createElement=function(R,Y,k){var ae,se={},oe=null;if(Y!=null)for(ae in Y.key!==void 0&&(oe=""+Y.key),Y)$.call(Y,ae)&&ae!=="key"&&ae!=="__self"&&ae!=="__source"&&(se[ae]=Y[ae]);var Ae=arguments.length-2;if(Ae===1)se.children=k;else if(1<Ae){for(var Xe=Array(Ae),be=0;be<Ae;be++)Xe[be]=arguments[be+2];se.children=Xe}if(R&&R.defaultProps)for(ae in Ae=R.defaultProps,Ae)se[ae]===void 0&&(se[ae]=Ae[ae]);return ue(R,oe,se)},Se.createRef=function(){return{current:null}},Se.forwardRef=function(R){return{$$typeof:h,render:R}},Se.isValidElement=J,Se.lazy=function(R){return{$$typeof:y,_payload:{_status:-1,_result:R},_init:ie}},Se.memo=function(R,Y){return{$$typeof:p,type:R,compare:Y===void 0?null:Y}},Se.startTransition=function(R){var Y=ee.T,k={};ee.T=k;try{var ae=R(),se=ee.S;se!==null&&se(k,ae),typeof ae=="object"&&ae!==null&&typeof ae.then=="function"&&ae.then(q,ve)}catch(oe){ve(oe)}finally{Y!==null&&k.types!==null&&(Y.types=k.types),ee.T=Y}},Se.unstable_useCacheRefresh=function(){return ee.H.useCacheRefresh()},Se.use=function(R){return ee.H.use(R)},Se.useActionState=function(R,Y,k){return ee.H.useActionState(R,Y,k)},Se.useCallback=function(R,Y){return ee.H.useCallback(R,Y)},Se.useContext=function(R){return ee.H.useContext(R)},Se.useDebugValue=function(){},Se.useDeferredValue=function(R,Y){return ee.H.useDeferredValue(R,Y)},Se.useEffect=function(R,Y){return ee.H.useEffect(R,Y)},Se.useEffectEvent=function(R){return ee.H.useEffectEvent(R)},Se.useId=function(){return ee.H.useId()},Se.useImperativeHandle=function(R,Y,k){return ee.H.useImperativeHandle(R,Y,k)},Se.useInsertionEffect=function(R,Y){return ee.H.useInsertionEffect(R,Y)},Se.useLayoutEffect=function(R,Y){return ee.H.useLayoutEffect(R,Y)},Se.useMemo=function(R,Y){return ee.H.useMemo(R,Y)},Se.useOptimistic=function(R,Y){return ee.H.useOptimistic(R,Y)},Se.useReducer=function(R,Y,k){return ee.H.useReducer(R,Y,k)},Se.useRef=function(R){return ee.H.useRef(R)},Se.useState=function(R){return ee.H.useState(R)},Se.useSyncExternalStore=function(R,Y,k){return ee.H.useSyncExternalStore(R,Y,k)},Se.useTransition=function(){return ee.H.useTransition()},Se.version="19.2.4",Se}var Ym;function mf(){return Ym||(Ym=1,kc.exports=Zb()),kc.exports}var C=mf();const El=pf(C),h1=Xb({__proto__:null,default:El},[C]);var Ec={exports:{}},Fi={},Cc={exports:{}},Tc={};var Xm;function Kb(){return Xm||(Xm=1,(function(t){function i(B,K){var ie=B.length;B.push(K);e:for(;0<ie;){var ve=ie-1>>>1,A=B[ve];if(0<u(A,K))B[ve]=K,B[ie]=A,ie=ve;else break e}}function a(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var K=B[0],ie=B.pop();if(ie!==K){B[0]=ie;e:for(var ve=0,A=B.length,R=A>>>1;ve<R;){var Y=2*(ve+1)-1,k=B[Y],ae=Y+1,se=B[ae];if(0>u(k,ie))ae<A&&0>u(se,k)?(B[ve]=se,B[ae]=ie,ve=ae):(B[ve]=k,B[Y]=ie,ve=Y);else if(ae<A&&0>u(se,ie))B[ve]=se,B[ae]=ie,ve=ae;else break e}}return K}function u(B,K){var ie=B.sortIndex-K.sortIndex;return ie!==0?ie:B.id-K.id}if(t.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var c=Date,h=c.now();t.unstable_now=function(){return c.now()-h}}var m=[],p=[],y=1,g=null,b=3,S=!1,E=!1,_=!1,T=!1,N=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,j=typeof setImmediate<"u"?setImmediate:null;function Z(B){for(var K=a(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=B)r(p),K.sortIndex=K.expirationTime,i(m,K);else break;K=a(p)}}function W(B){if(_=!1,Z(B),!E)if(a(m)!==null)E=!0,q||(q=!0,ne());else{var K=a(p);K!==null&&P(W,K.startTime-B)}}var q=!1,ee=-1,$=5,ue=-1;function O(){return T?!0:!(t.unstable_now()-ue<$)}function J(){if(T=!1,q){var B=t.unstable_now();ue=B;var K=!0;try{e:{E=!1,_&&(_=!1,D(ee),ee=-1),S=!0;var ie=b;try{n:{for(Z(B),g=a(m);g!==null&&!(g.expirationTime>B&&O());){var ve=g.callback;if(typeof ve=="function"){g.callback=null,b=g.priorityLevel;var A=ve(g.expirationTime<=B);if(B=t.unstable_now(),typeof A=="function"){g.callback=A,Z(B),K=!0;break n}g===a(m)&&r(m),Z(B)}else r(m);g=a(m)}if(g!==null)K=!0;else{var R=a(p);R!==null&&P(W,R.startTime-B),K=!1}}break e}finally{g=null,b=ie,S=!1}K=void 0}}finally{K?ne():q=!1}}}var ne;if(typeof j=="function")ne=function(){j(J)};else if(typeof MessageChannel<"u"){var xe=new MessageChannel,re=xe.port2;xe.port1.onmessage=J,ne=function(){re.postMessage(null)}}else ne=function(){N(J,0)};function P(B,K){ee=N(function(){B(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return b},t.unstable_next=function(B){switch(b){case 1:case 2:case 3:var K=3;break;default:K=b}var ie=b;b=K;try{return B()}finally{b=ie}},t.unstable_requestPaint=function(){T=!0},t.unstable_runWithPriority=function(B,K){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var ie=b;b=B;try{return K()}finally{b=ie}},t.unstable_scheduleCallback=function(B,K,ie){var ve=t.unstable_now();switch(typeof ie=="object"&&ie!==null?(ie=ie.delay,ie=typeof ie=="number"&&0<ie?ve+ie:ve):ie=ve,B){case 1:var A=-1;break;case 2:A=250;break;case 5:A=1073741823;break;case 4:A=1e4;break;default:A=5e3}return A=ie+A,B={id:y++,callback:K,priorityLevel:B,startTime:ie,expirationTime:A,sortIndex:-1},ie>ve?(B.sortIndex=ie,i(p,B),a(m)===null&&B===a(p)&&(_?(D(ee),ee=-1):_=!0,P(W,ie-ve))):(B.sortIndex=A,i(m,B),E||S||(E=!0,q||(q=!0,ne()))),B},t.unstable_shouldYield=O,t.unstable_wrapCallback=function(B){var K=b;return function(){var ie=b;b=K;try{return B.apply(this,arguments)}finally{b=ie}}}})(Tc)),Tc}var Qm;function $b(){return Qm||(Qm=1,Cc.exports=Kb()),Cc.exports}var Nc={exports:{}},vn={};var Fm;function Pb(){if(Fm)return vn;Fm=1;var t=mf();function i(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var y=2;y<arguments.length;y++)p+="&args[]="+encodeURIComponent(arguments[y])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var r={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},u=Symbol.for("react.portal");function s(m,p,y){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:u,key:g==null?null:""+g,children:m,containerInfo:p,implementation:y}}var c=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return vn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,vn.createPortal=function(m,p){var y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(i(299));return s(m,p,null,y)},vn.flushSync=function(m){var p=c.T,y=r.p;try{if(c.T=null,r.p=2,m)return m()}finally{c.T=p,r.p=y,r.d.f()}},vn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},vn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},vn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var y=p.as,g=h(y,p.crossOrigin),b=typeof p.integrity=="string"?p.integrity:void 0,S=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;y==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:b,fetchPriority:S}):y==="script"&&r.d.X(m,{crossOrigin:g,integrity:b,fetchPriority:S,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},vn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var y=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},vn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var y=p.as,g=h(y,p.crossOrigin);r.d.L(m,y,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},vn.preloadModule=function(m,p){if(typeof m=="string")if(p){var y=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:y,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},vn.requestFormReset=function(m){r.d.r(m)},vn.unstable_batchedUpdates=function(m,p){return m(p)},vn.useFormState=function(m,p,y){return c.H.useFormState(m,p,y)},vn.useFormStatus=function(){return c.H.useHostTransitionStatus()},vn.version="19.2.4",vn}var Zm;function p1(){if(Zm)return Nc.exports;Zm=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Nc.exports=Pb(),Nc.exports}var Km;function Jb(){if(Km)return Fi;Km=1;var t=$b(),i=mf(),a=p1();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var l=2;l<arguments.length;l++)n+="&args[]="+encodeURIComponent(arguments[l])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function u(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function s(e){var n=e,l=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,(n.flags&4098)!==0&&(l=n.return),e=n.return;while(e)}return n.tag===3?l:null}function c(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function h(e){if(e.tag===31){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function m(e){if(s(e)!==e)throw Error(r(188))}function p(e){var n=e.alternate;if(!n){if(n=s(e),n===null)throw Error(r(188));return n!==e?null:e}for(var l=e,o=n;;){var f=l.return;if(f===null)break;var d=f.alternate;if(d===null){if(o=f.return,o!==null){l=o;continue}break}if(f.child===d.child){for(d=f.child;d;){if(d===l)return m(f),e;if(d===o)return m(f),n;d=d.sibling}throw Error(r(188))}if(l.return!==o.return)l=f,o=d;else{for(var x=!1,w=f.child;w;){if(w===l){x=!0,l=f,o=d;break}if(w===o){x=!0,o=f,l=d;break}w=w.sibling}if(!x){for(w=d.child;w;){if(w===l){x=!0,l=d,o=f;break}if(w===o){x=!0,o=d,l=f;break}w=w.sibling}if(!x)throw Error(r(189))}}if(l.alternate!==o)throw Error(r(190))}if(l.tag!==3)throw Error(r(188));return l.stateNode.current===l?e:n}function y(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=y(e),n!==null)return n;e=e.sibling}return null}var g=Object.assign,b=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),N=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),j=Symbol.for("react.context"),Z=Symbol.for("react.forward_ref"),W=Symbol.for("react.suspense"),q=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),$=Symbol.for("react.lazy"),ue=Symbol.for("react.activity"),O=Symbol.for("react.memo_cache_sentinel"),J=Symbol.iterator;function ne(e){return e===null||typeof e!="object"?null:(e=J&&e[J]||e["@@iterator"],typeof e=="function"?e:null)}var xe=Symbol.for("react.client.reference");function re(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===xe?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _:return"Fragment";case N:return"Profiler";case T:return"StrictMode";case W:return"Suspense";case q:return"SuspenseList";case ue:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case E:return"Portal";case j:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case Z:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ee:return n=e.displayName||null,n!==null?n:re(e.type)||"Memo";case $:n=e._payload,e=e._init;try{return re(e(n))}catch{}}return null}var P=Array.isArray,B=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ie={pending:!1,data:null,method:null,action:null},ve=[],A=-1;function R(e){return{current:e}}function Y(e){0>A||(e.current=ve[A],ve[A]=null,A--)}function k(e,n){A++,ve[A]=e.current,e.current=n}var ae=R(null),se=R(null),oe=R(null),Ae=R(null);function Xe(e,n){switch(k(oe,n),k(se,e),k(ae,null),n.nodeType){case 9:case 11:e=(e=n.documentElement)&&(e=e.namespaceURI)?cm(e):0;break;default:if(e=n.tagName,n=n.namespaceURI)n=cm(n),e=fm(n,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}Y(ae),k(ae,e)}function be(){Y(ae),Y(se),Y(oe)}function An(e){e.memoizedState!==null&&k(Ae,e);var n=ae.current,l=fm(n,e.type);n!==l&&(k(se,e),k(ae,l))}function Nn(e){se.current===e&&(Y(ae),Y(se)),Ae.current===e&&(Y(Ae),Vi._currentValue=ie)}var gt,Kt;function zn(e){if(gt===void 0)try{throw Error()}catch(l){var n=l.stack.trim().match(/\n( *(at )?)/);gt=n&&n[1]||"",Kt=-1<l.stack.indexOf(`
    at`)?" (<anonymous>)":-1<l.stack.indexOf("@")?"@unknown:0:0":""}return`
`+gt+e+Kt}var ea=!1;function na(e,n){if(!e||ea)return"";ea=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var F=function(){throw Error()};if(Object.defineProperty(F.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(F,[])}catch(V){var I=V}Reflect.construct(e,[],F)}else{try{F.call()}catch(V){I=V}e.call(F.prototype)}}else{try{throw Error()}catch(V){I=V}(F=e())&&typeof F.catch=="function"&&F.catch(function(){})}}catch(V){if(V&&I&&typeof V.stack=="string")return[V.stack,I.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var f=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");f&&f.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var d=o.DetermineComponentFrameRoot(),x=d[0],w=d[1];if(x&&w){var z=x.split(`
`),U=w.split(`
`);for(f=o=0;o<z.length&&!z[o].includes("DetermineComponentFrameRoot");)o++;for(;f<U.length&&!U[f].includes("DetermineComponentFrameRoot");)f++;if(o===z.length||f===U.length)for(o=z.length-1,f=U.length-1;1<=o&&0<=f&&z[o]!==U[f];)f--;for(;1<=o&&0<=f;o--,f--)if(z[o]!==U[f]){if(o!==1||f!==1)do if(o--,f--,0>f||z[o]!==U[f]){var G=`
`+z[o].replace(" at new "," at ");return e.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",e.displayName)),G}while(1<=o&&0<=f);break}}}finally{ea=!1,Error.prepareStackTrace=l}return(l=e?e.displayName||e.name:"")?zn(l):""}function pr(e,n){switch(e.tag){case 26:case 27:case 5:return zn(e.type);case 16:return zn("Lazy");case 13:return e.child!==n&&n!==null?zn("Suspense Fallback"):zn("Suspense");case 19:return zn("SuspenseList");case 0:case 15:return na(e.type,!1);case 11:return na(e.type.render,!1);case 1:return na(e.type,!0);case 31:return zn("Activity");default:return""}}function mr(e){try{var n="",l=null;do n+=pr(e,l),l=e,e=e.return;while(e);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var ta=Object.prototype.hasOwnProperty,la=t.unstable_scheduleCallback,ei=t.unstable_cancelCallback,uu=t.unstable_shouldYield,su=t.unstable_requestPaint,kn=t.unstable_now,cu=t.unstable_getCurrentPriorityLevel,X=t.unstable_ImmediatePriority,le=t.unstable_UserBlockingPriority,ye=t.unstable_NormalPriority,Te=t.unstable_LowPriority,Ue=t.unstable_IdlePriority,qn=t.log,Et=t.unstable_setDisableYieldValue,En=null,cn=null;function _n(e){if(typeof qn=="function"&&Et(e),cn&&typeof cn.setStrictMode=="function")try{cn.setStrictMode(En,e)}catch{}}var Qe=Math.clz32?Math.clz32:Rx,$t=Math.log,ct=Math.LN2;function Rx(e){return e>>>=0,e===0?32:31-($t(e)/ct|0)|0}var gr=256,yr=262144,xr=4194304;function zl(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function br(e,n,l){var o=e.pendingLanes;if(o===0)return 0;var f=0,d=e.suspendedLanes,x=e.pingedLanes;e=e.warmLanes;var w=o&134217727;return w!==0?(o=w&~d,o!==0?f=zl(o):(x&=w,x!==0?f=zl(x):l||(l=w&~e,l!==0&&(f=zl(l))))):(w=o&~d,w!==0?f=zl(w):x!==0?f=zl(x):l||(l=o&~e,l!==0&&(f=zl(l)))),f===0?0:n!==0&&n!==f&&(n&d)===0&&(d=f&-f,l=n&-n,d>=l||d===32&&(l&4194048)!==0)?n:f}function ni(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function Mx(e,n){switch(e){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Xf(){var e=xr;return xr<<=1,(xr&62914560)===0&&(xr=4194304),e}function fu(e){for(var n=[],l=0;31>l;l++)n.push(e);return n}function ti(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Dx(e,n,l,o,f,d){var x=e.pendingLanes;e.pendingLanes=l,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=l,e.entangledLanes&=l,e.errorRecoveryDisabledLanes&=l,e.shellSuspendCounter=0;var w=e.entanglements,z=e.expirationTimes,U=e.hiddenUpdates;for(l=x&~l;0<l;){var G=31-Qe(l),F=1<<G;w[G]=0,z[G]=-1;var I=U[G];if(I!==null)for(U[G]=null,G=0;G<I.length;G++){var V=I[G];V!==null&&(V.lane&=-536870913)}l&=~F}o!==0&&Qf(e,o,0),d!==0&&f===0&&e.tag!==0&&(e.suspendedLanes|=d&~(x&~n))}function Qf(e,n,l){e.pendingLanes|=n,e.suspendedLanes&=~n;var o=31-Qe(n);e.entangledLanes|=n,e.entanglements[o]=e.entanglements[o]|1073741824|l&261930}function Ff(e,n){var l=e.entangledLanes|=n;for(e=e.entanglements;l;){var o=31-Qe(l),f=1<<o;f&n|e[o]&n&&(e[o]|=n),l&=~f}}function Zf(e,n){var l=n&-n;return l=(l&42)!==0?1:du(l),(l&(e.suspendedLanes|n))!==0?0:l}function du(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function hu(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Kf(){var e=K.p;return e!==0?e:(e=window.event,e===void 0?32:jm(e.type))}function $f(e,n){var l=K.p;try{return K.p=e,n()}finally{K.p=l}}var Pt=Math.random().toString(36).slice(2),mn="__reactFiber$"+Pt,Rn="__reactProps$"+Pt,aa="__reactContainer$"+Pt,pu="__reactEvents$"+Pt,jx="__reactListeners$"+Pt,Ox="__reactHandles$"+Pt,Pf="__reactResources$"+Pt,li="__reactMarker$"+Pt;function mu(e){delete e[mn],delete e[Rn],delete e[pu],delete e[jx],delete e[Ox]}function ia(e){var n=e[mn];if(n)return n;for(var l=e.parentNode;l;){if(n=l[aa]||l[mn]){if(l=n.alternate,n.child!==null||l!==null&&l.child!==null)for(e=xm(e);e!==null;){if(l=e[mn])return l;e=xm(e)}return n}e=l,l=e.parentNode}return null}function ra(e){if(e=e[mn]||e[aa]){var n=e.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return e}return null}function ai(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function oa(e){var n=e[Pf];return n||(n=e[Pf]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function hn(e){e[li]=!0}var Jf=new Set,Wf={};function _l(e,n){ua(e,n),ua(e+"Capture",n)}function ua(e,n){for(Wf[e]=n,e=0;e<n.length;e++)Jf.add(n[e])}var Lx=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ed={},nd={};function Bx(e){return ta.call(nd,e)?!0:ta.call(ed,e)?!1:Lx.test(e)?nd[e]=!0:(ed[e]=!0,!1)}function vr(e,n,l){if(Bx(n))if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+l)}}function Sr(e,n,l){if(l===null)e.removeAttribute(n);else{switch(typeof l){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+l)}}function Ct(e,n,l,o){if(o===null)e.removeAttribute(l);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(l);return}e.setAttributeNS(n,l,""+o)}}function Jn(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function td(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Hx(e,n,l){var o=Object.getOwnPropertyDescriptor(e.constructor.prototype,n);if(!e.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,d=o.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return f.call(this)},set:function(x){l=""+x,d.call(this,x)}}),Object.defineProperty(e,n,{enumerable:o.enumerable}),{getValue:function(){return l},setValue:function(x){l=""+x},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function gu(e){if(!e._valueTracker){var n=td(e)?"checked":"value";e._valueTracker=Hx(e,n,""+e[n])}}function ld(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var l=n.getValue(),o="";return e&&(o=td(e)?e.checked?"true":"false":e.value),e=o,e!==l?(n.setValue(e),!0):!1}function wr(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ux=/[\n"\\]/g;function Wn(e){return e.replace(Ux,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function yu(e,n,l,o,f,d,x,w){e.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?e.type=x:e.removeAttribute("type"),n!=null?x==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+Jn(n)):e.value!==""+Jn(n)&&(e.value=""+Jn(n)):x!=="submit"&&x!=="reset"||e.removeAttribute("value"),n!=null?xu(e,x,Jn(n)):l!=null?xu(e,x,Jn(l)):o!=null&&e.removeAttribute("value"),f==null&&d!=null&&(e.defaultChecked=!!d),f!=null&&(e.checked=f&&typeof f!="function"&&typeof f!="symbol"),w!=null&&typeof w!="function"&&typeof w!="symbol"&&typeof w!="boolean"?e.name=""+Jn(w):e.removeAttribute("name")}function ad(e,n,l,o,f,d,x,w){if(d!=null&&typeof d!="function"&&typeof d!="symbol"&&typeof d!="boolean"&&(e.type=d),n!=null||l!=null){if(!(d!=="submit"&&d!=="reset"||n!=null)){gu(e);return}l=l!=null?""+Jn(l):"",n=n!=null?""+Jn(n):l,w||n===e.value||(e.value=n),e.defaultValue=n}o=o??f,o=typeof o!="function"&&typeof o!="symbol"&&!!o,e.checked=w?e.checked:!!o,e.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(e.name=x),gu(e)}function xu(e,n,l){n==="number"&&wr(e.ownerDocument)===e||e.defaultValue===""+l||(e.defaultValue=""+l)}function sa(e,n,l,o){if(e=e.options,n){n={};for(var f=0;f<l.length;f++)n["$"+l[f]]=!0;for(l=0;l<e.length;l++)f=n.hasOwnProperty("$"+e[l].value),e[l].selected!==f&&(e[l].selected=f),f&&o&&(e[l].defaultSelected=!0)}else{for(l=""+Jn(l),n=null,f=0;f<e.length;f++){if(e[f].value===l){e[f].selected=!0,o&&(e[f].defaultSelected=!0);return}n!==null||e[f].disabled||(n=e[f])}n!==null&&(n.selected=!0)}}function id(e,n,l){if(n!=null&&(n=""+Jn(n),n!==e.value&&(e.value=n),l==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=l!=null?""+Jn(l):""}function rd(e,n,l,o){if(n==null){if(o!=null){if(l!=null)throw Error(r(92));if(P(o)){if(1<o.length)throw Error(r(93));o=o[0]}l=o}l==null&&(l=""),n=l}l=Jn(n),e.defaultValue=l,o=e.textContent,o===l&&o!==""&&o!==null&&(e.value=o),gu(e)}function ca(e,n){if(n){var l=e.firstChild;if(l&&l===e.lastChild&&l.nodeType===3){l.nodeValue=n;return}}e.textContent=n}var qx=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function od(e,n,l){var o=n.indexOf("--")===0;l==null||typeof l=="boolean"||l===""?o?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":o?e.setProperty(n,l):typeof l!="number"||l===0||qx.has(n)?n==="float"?e.cssFloat=l:e[n]=(""+l).trim():e[n]=l+"px"}function ud(e,n,l){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,l!=null){for(var o in l)!l.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?e.setProperty(o,""):o==="float"?e.cssFloat="":e[o]="");for(var f in n)o=n[f],n.hasOwnProperty(f)&&l[f]!==o&&od(e,f,o)}else for(var d in n)n.hasOwnProperty(d)&&od(e,d,n[d])}function bu(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ix=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Vx=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ar(e){return Vx.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Tt(){}var vu=null;function Su(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var fa=null,da=null;function sd(e){var n=ra(e);if(n&&(e=n.stateNode)){var l=e[Rn]||null;e:switch(e=n.stateNode,n.type){case"input":if(yu(e,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name),n=l.name,l.type==="radio"&&n!=null){for(l=e;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll('input[name="'+Wn(""+n)+'"][type="radio"]'),n=0;n<l.length;n++){var o=l[n];if(o!==e&&o.form===e.form){var f=o[Rn]||null;if(!f)throw Error(r(90));yu(o,f.value,f.defaultValue,f.defaultValue,f.checked,f.defaultChecked,f.type,f.name)}}for(n=0;n<l.length;n++)o=l[n],o.form===e.form&&ld(o)}break e;case"textarea":id(e,l.value,l.defaultValue);break e;case"select":n=l.value,n!=null&&sa(e,!!l.multiple,n,!1)}}}var wu=!1;function cd(e,n,l){if(wu)return e(n,l);wu=!0;try{var o=e(n);return o}finally{if(wu=!1,(fa!==null||da!==null)&&(co(),fa&&(n=fa,e=da,da=fa=null,sd(n),e)))for(n=0;n<e.length;n++)sd(e[n])}}function ii(e,n){var l=e.stateNode;if(l===null)return null;var o=l[Rn]||null;if(o===null)return null;l=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(e=e.type,o=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!o;break e;default:e=!1}if(e)return null;if(l&&typeof l!="function")throw Error(r(231,n,typeof l));return l}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Au=!1;if(Nt)try{var ri={};Object.defineProperty(ri,"passive",{get:function(){Au=!0}}),window.addEventListener("test",ri,ri),window.removeEventListener("test",ri,ri)}catch{Au=!1}var Jt=null,ku=null,kr=null;function fd(){if(kr)return kr;var e,n=ku,l=n.length,o,f="value"in Jt?Jt.value:Jt.textContent,d=f.length;for(e=0;e<l&&n[e]===f[e];e++);var x=l-e;for(o=1;o<=x&&n[l-o]===f[d-o];o++);return kr=f.slice(e,1<o?1-o:void 0)}function Er(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Cr(){return!0}function dd(){return!1}function Mn(e){function n(l,o,f,d,x){this._reactName=l,this._targetInst=f,this.type=o,this.nativeEvent=d,this.target=x,this.currentTarget=null;for(var w in e)e.hasOwnProperty(w)&&(l=e[w],this[w]=l?l(d):d[w]);return this.isDefaultPrevented=(d.defaultPrevented!=null?d.defaultPrevented:d.returnValue===!1)?Cr:dd,this.isPropagationStopped=dd,this}return g(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Cr)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Cr)},persist:function(){},isPersistent:Cr}),n}var Rl={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Tr=Mn(Rl),oi=g({},Rl,{view:0,detail:0}),Gx=Mn(oi),Eu,Cu,ui,Nr=g({},oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Nu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ui&&(ui&&e.type==="mousemove"?(Eu=e.screenX-ui.screenX,Cu=e.screenY-ui.screenY):Cu=Eu=0,ui=e),Eu)},movementY:function(e){return"movementY"in e?e.movementY:Cu}}),hd=Mn(Nr),Yx=g({},Nr,{dataTransfer:0}),Xx=Mn(Yx),Qx=g({},oi,{relatedTarget:0}),Tu=Mn(Qx),Fx=g({},Rl,{animationName:0,elapsedTime:0,pseudoElement:0}),Zx=Mn(Fx),Kx=g({},Rl,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),$x=Mn(Kx),Px=g({},Rl,{data:0}),pd=Mn(Px),Jx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},e0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function n0(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=e0[e])?!!n[e]:!1}function Nu(){return n0}var t0=g({},oi,{key:function(e){if(e.key){var n=Jx[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Er(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Wx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Nu,charCode:function(e){return e.type==="keypress"?Er(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Er(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),l0=Mn(t0),a0=g({},Nr,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),md=Mn(a0),i0=g({},oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Nu}),r0=Mn(i0),o0=g({},Rl,{propertyName:0,elapsedTime:0,pseudoElement:0}),u0=Mn(o0),s0=g({},Nr,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),c0=Mn(s0),f0=g({},Rl,{newState:0,oldState:0}),d0=Mn(f0),h0=[9,13,27,32],zu=Nt&&"CompositionEvent"in window,si=null;Nt&&"documentMode"in document&&(si=document.documentMode);var p0=Nt&&"TextEvent"in window&&!si,gd=Nt&&(!zu||si&&8<si&&11>=si),yd=" ",xd=!1;function bd(e,n){switch(e){case"keyup":return h0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function vd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var ha=!1;function m0(e,n){switch(e){case"compositionend":return vd(n);case"keypress":return n.which!==32?null:(xd=!0,yd);case"textInput":return e=n.data,e===yd&&xd?null:e;default:return null}}function g0(e,n){if(ha)return e==="compositionend"||!zu&&bd(e,n)?(e=fd(),kr=ku=Jt=null,ha=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return gd&&n.locale!=="ko"?null:n.data;default:return null}}var y0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Sd(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!y0[e.type]:n==="textarea"}function wd(e,n,l,o){fa?da?da.push(o):da=[o]:fa=o,n=xo(n,"onChange"),0<n.length&&(l=new Tr("onChange","change",null,l,o),e.push({event:l,listeners:n}))}var ci=null,fi=null;function x0(e){am(e,0)}function zr(e){var n=ai(e);if(ld(n))return e}function Ad(e,n){if(e==="change")return n}var kd=!1;if(Nt){var _u;if(Nt){var Ru="oninput"in document;if(!Ru){var Ed=document.createElement("div");Ed.setAttribute("oninput","return;"),Ru=typeof Ed.oninput=="function"}_u=Ru}else _u=!1;kd=_u&&(!document.documentMode||9<document.documentMode)}function Cd(){ci&&(ci.detachEvent("onpropertychange",Td),fi=ci=null)}function Td(e){if(e.propertyName==="value"&&zr(fi)){var n=[];wd(n,fi,e,Su(e)),cd(x0,n)}}function b0(e,n,l){e==="focusin"?(Cd(),ci=n,fi=l,ci.attachEvent("onpropertychange",Td)):e==="focusout"&&Cd()}function v0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return zr(fi)}function S0(e,n){if(e==="click")return zr(n)}function w0(e,n){if(e==="input"||e==="change")return zr(n)}function A0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var In=typeof Object.is=="function"?Object.is:A0;function di(e,n){if(In(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var l=Object.keys(e),o=Object.keys(n);if(l.length!==o.length)return!1;for(o=0;o<l.length;o++){var f=l[o];if(!ta.call(n,f)||!In(e[f],n[f]))return!1}return!0}function Nd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function zd(e,n){var l=Nd(e);e=0;for(var o;l;){if(l.nodeType===3){if(o=e+l.textContent.length,e<=n&&o>=n)return{node:l,offset:n-e};e=o}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Nd(l)}}function _d(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?_d(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Rd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=wr(e.document);n instanceof e.HTMLIFrameElement;){try{var l=typeof n.contentWindow.location.href=="string"}catch{l=!1}if(l)e=n.contentWindow;else break;n=wr(e.document)}return n}function Mu(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}var k0=Nt&&"documentMode"in document&&11>=document.documentMode,pa=null,Du=null,hi=null,ju=!1;function Md(e,n,l){var o=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;ju||pa==null||pa!==wr(o)||(o=pa,"selectionStart"in o&&Mu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),hi&&di(hi,o)||(hi=o,o=xo(Du,"onSelect"),0<o.length&&(n=new Tr("onSelect","select",null,n,l),e.push({event:n,listeners:o}),n.target=pa)))}function Ml(e,n){var l={};return l[e.toLowerCase()]=n.toLowerCase(),l["Webkit"+e]="webkit"+n,l["Moz"+e]="moz"+n,l}var ma={animationend:Ml("Animation","AnimationEnd"),animationiteration:Ml("Animation","AnimationIteration"),animationstart:Ml("Animation","AnimationStart"),transitionrun:Ml("Transition","TransitionRun"),transitionstart:Ml("Transition","TransitionStart"),transitioncancel:Ml("Transition","TransitionCancel"),transitionend:Ml("Transition","TransitionEnd")},Ou={},Dd={};Nt&&(Dd=document.createElement("div").style,"AnimationEvent"in window||(delete ma.animationend.animation,delete ma.animationiteration.animation,delete ma.animationstart.animation),"TransitionEvent"in window||delete ma.transitionend.transition);function Dl(e){if(Ou[e])return Ou[e];if(!ma[e])return e;var n=ma[e],l;for(l in n)if(n.hasOwnProperty(l)&&l in Dd)return Ou[e]=n[l];return e}var jd=Dl("animationend"),Od=Dl("animationiteration"),Ld=Dl("animationstart"),E0=Dl("transitionrun"),C0=Dl("transitionstart"),T0=Dl("transitioncancel"),Bd=Dl("transitionend"),Hd=new Map,Lu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Lu.push("scrollEnd");function ft(e,n){Hd.set(e,n),_l(n,[e])}var _r=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},et=[],ga=0,Bu=0;function Rr(){for(var e=ga,n=Bu=ga=0;n<e;){var l=et[n];et[n++]=null;var o=et[n];et[n++]=null;var f=et[n];et[n++]=null;var d=et[n];if(et[n++]=null,o!==null&&f!==null){var x=o.pending;x===null?f.next=f:(f.next=x.next,x.next=f),o.pending=f}d!==0&&Ud(l,f,d)}}function Mr(e,n,l,o){et[ga++]=e,et[ga++]=n,et[ga++]=l,et[ga++]=o,Bu|=o,e.lanes|=o,e=e.alternate,e!==null&&(e.lanes|=o)}function Hu(e,n,l,o){return Mr(e,n,l,o),Dr(e)}function jl(e,n){return Mr(e,null,null,n),Dr(e)}function Ud(e,n,l){e.lanes|=l;var o=e.alternate;o!==null&&(o.lanes|=l);for(var f=!1,d=e.return;d!==null;)d.childLanes|=l,o=d.alternate,o!==null&&(o.childLanes|=l),d.tag===22&&(e=d.stateNode,e===null||e._visibility&1||(f=!0)),e=d,d=d.return;return e.tag===3?(d=e.stateNode,f&&n!==null&&(f=31-Qe(l),e=d.hiddenUpdates,o=e[f],o===null?e[f]=[n]:o.push(n),n.lane=l|536870912),d):null}function Dr(e){if(50<Oi)throw Oi=0,Fs=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var ya={};function N0(e,n,l,o){this.tag=e,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vn(e,n,l,o){return new N0(e,n,l,o)}function Uu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zt(e,n){var l=e.alternate;return l===null?(l=Vn(e.tag,n,e.key,e.mode),l.elementType=e.elementType,l.type=e.type,l.stateNode=e.stateNode,l.alternate=e,e.alternate=l):(l.pendingProps=n,l.type=e.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=e.flags&65011712,l.childLanes=e.childLanes,l.lanes=e.lanes,l.child=e.child,l.memoizedProps=e.memoizedProps,l.memoizedState=e.memoizedState,l.updateQueue=e.updateQueue,n=e.dependencies,l.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},l.sibling=e.sibling,l.index=e.index,l.ref=e.ref,l.refCleanup=e.refCleanup,l}function qd(e,n){e.flags&=65011714;var l=e.alternate;return l===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=l.childLanes,e.lanes=l.lanes,e.child=l.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=l.memoizedProps,e.memoizedState=l.memoizedState,e.updateQueue=l.updateQueue,e.type=l.type,n=l.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function jr(e,n,l,o,f,d){var x=0;if(o=e,typeof e=="function")Uu(e)&&(x=1);else if(typeof e=="string")x=Db(e,l,ae.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case ue:return e=Vn(31,l,n,f),e.elementType=ue,e.lanes=d,e;case _:return Ol(l.children,f,d,n);case T:x=8,f|=24;break;case N:return e=Vn(12,l,n,f|2),e.elementType=N,e.lanes=d,e;case W:return e=Vn(13,l,n,f),e.elementType=W,e.lanes=d,e;case q:return e=Vn(19,l,n,f),e.elementType=q,e.lanes=d,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case j:x=10;break e;case D:x=9;break e;case Z:x=11;break e;case ee:x=14;break e;case $:x=16,o=null;break e}x=29,l=Error(r(130,e===null?"null":typeof e,"")),o=null}return n=Vn(x,l,n,f),n.elementType=e,n.type=o,n.lanes=d,n}function Ol(e,n,l,o){return e=Vn(7,e,o,n),e.lanes=l,e}function qu(e,n,l){return e=Vn(6,e,null,n),e.lanes=l,e}function Id(e){var n=Vn(18,null,null,0);return n.stateNode=e,n}function Iu(e,n,l){return n=Vn(4,e.children!==null?e.children:[],e.key,n),n.lanes=l,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}var Vd=new WeakMap;function nt(e,n){if(typeof e=="object"&&e!==null){var l=Vd.get(e);return l!==void 0?l:(n={value:e,source:n,stack:mr(n)},Vd.set(e,n),n)}return{value:e,source:n,stack:mr(n)}}var xa=[],ba=0,Or=null,pi=0,tt=[],lt=0,Wt=null,yt=1,xt="";function _t(e,n){xa[ba++]=pi,xa[ba++]=Or,Or=e,pi=n}function Gd(e,n,l){tt[lt++]=yt,tt[lt++]=xt,tt[lt++]=Wt,Wt=e;var o=yt;e=xt;var f=32-Qe(o)-1;o&=~(1<<f),l+=1;var d=32-Qe(n)+f;if(30<d){var x=f-f%5;d=(o&(1<<x)-1).toString(32),o>>=x,f-=x,yt=1<<32-Qe(n)+f|l<<f|o,xt=d+e}else yt=1<<d|l<<f|o,xt=e}function Vu(e){e.return!==null&&(_t(e,1),Gd(e,1,0))}function Gu(e){for(;e===Or;)Or=xa[--ba],xa[ba]=null,pi=xa[--ba],xa[ba]=null;for(;e===Wt;)Wt=tt[--lt],tt[lt]=null,xt=tt[--lt],tt[lt]=null,yt=tt[--lt],tt[lt]=null}function Yd(e,n){tt[lt++]=yt,tt[lt++]=xt,tt[lt++]=Wt,yt=n.id,xt=n.overflow,Wt=e}var gn=null,$e=null,je=!1,el=null,at=!1,Yu=Error(r(519));function nl(e){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw mi(nt(n,e)),Yu}function Xd(e){var n=e.stateNode,l=e.type,o=e.memoizedProps;switch(n[mn]=e,n[Rn]=o,l){case"dialog":ze("cancel",n),ze("close",n);break;case"iframe":case"object":case"embed":ze("load",n);break;case"video":case"audio":for(l=0;l<Bi.length;l++)ze(Bi[l],n);break;case"source":ze("error",n);break;case"img":case"image":case"link":ze("error",n),ze("load",n);break;case"details":ze("toggle",n);break;case"input":ze("invalid",n),ad(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":ze("invalid",n);break;case"textarea":ze("invalid",n),rd(n,o.value,o.defaultValue,o.children)}l=o.children,typeof l!="string"&&typeof l!="number"&&typeof l!="bigint"||n.textContent===""+l||o.suppressHydrationWarning===!0||um(n.textContent,l)?(o.popover!=null&&(ze("beforetoggle",n),ze("toggle",n)),o.onScroll!=null&&ze("scroll",n),o.onScrollEnd!=null&&ze("scrollend",n),o.onClick!=null&&(n.onclick=Tt),n=!0):n=!1,n||nl(e,!0)}function Qd(e){for(gn=e.return;gn;)switch(gn.tag){case 5:case 31:case 13:at=!1;return;case 27:case 3:at=!0;return;default:gn=gn.return}}function va(e){if(e!==gn)return!1;if(!je)return Qd(e),je=!0,!1;var n=e.tag,l;if((l=n!==3&&n!==27)&&((l=n===5)&&(l=e.type,l=!(l!=="form"&&l!=="button")||uc(e.type,e.memoizedProps)),l=!l),l&&$e&&nl(e),Qd(e),n===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));$e=ym(e)}else if(n===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));$e=ym(e)}else n===27?(n=$e,ml(e.type)?(e=hc,hc=null,$e=e):$e=n):$e=gn?rt(e.stateNode.nextSibling):null;return!0}function Ll(){$e=gn=null,je=!1}function Xu(){var e=el;return e!==null&&(Ln===null?Ln=e:Ln.push.apply(Ln,e),el=null),e}function mi(e){el===null?el=[e]:el.push(e)}var Qu=R(null),Bl=null,Rt=null;function tl(e,n,l){k(Qu,n._currentValue),n._currentValue=l}function Mt(e){e._currentValue=Qu.current,Y(Qu)}function Fu(e,n,l){for(;e!==null;){var o=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),e===l)break;e=e.return}}function Zu(e,n,l,o){var f=e.child;for(f!==null&&(f.return=e);f!==null;){var d=f.dependencies;if(d!==null){var x=f.child;d=d.firstContext;e:for(;d!==null;){var w=d;d=f;for(var z=0;z<n.length;z++)if(w.context===n[z]){d.lanes|=l,w=d.alternate,w!==null&&(w.lanes|=l),Fu(d.return,l,e),o||(x=null);break e}d=w.next}}else if(f.tag===18){if(x=f.return,x===null)throw Error(r(341));x.lanes|=l,d=x.alternate,d!==null&&(d.lanes|=l),Fu(x,l,e),x=null}else x=f.child;if(x!==null)x.return=f;else for(x=f;x!==null;){if(x===e){x=null;break}if(f=x.sibling,f!==null){f.return=x.return,x=f;break}x=x.return}f=x}}function Sa(e,n,l,o){e=null;for(var f=n,d=!1;f!==null;){if(!d){if((f.flags&524288)!==0)d=!0;else if((f.flags&262144)!==0)break}if(f.tag===10){var x=f.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var w=f.type;In(f.pendingProps.value,x.value)||(e!==null?e.push(w):e=[w])}}else if(f===Ae.current){if(x=f.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==f.memoizedState.memoizedState&&(e!==null?e.push(Vi):e=[Vi])}f=f.return}e!==null&&Zu(n,e,l,o),n.flags|=262144}function Lr(e){for(e=e.firstContext;e!==null;){if(!In(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Hl(e){Bl=e,Rt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return Fd(Bl,e)}function Br(e,n){return Bl===null&&Hl(e),Fd(e,n)}function Fd(e,n){var l=n._currentValue;if(n={context:n,memoizedValue:l,next:null},Rt===null){if(e===null)throw Error(r(308));Rt=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Rt=Rt.next=n;return l}var z0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(l,o){e.push(o)}};this.abort=function(){n.aborted=!0,e.forEach(function(l){return l()})}},_0=t.unstable_scheduleCallback,R0=t.unstable_NormalPriority,an={$$typeof:j,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Ku(){return{controller:new z0,data:new Map,refCount:0}}function gi(e){e.refCount--,e.refCount===0&&_0(R0,function(){e.controller.abort()})}var yi=null,$u=0,wa=0,Aa=null;function M0(e,n){if(yi===null){var l=yi=[];$u=0,wa=Ws(),Aa={status:"pending",value:void 0,then:function(o){l.push(o)}}}return $u++,n.then(Zd,Zd),n}function Zd(){if(--$u===0&&yi!==null){Aa!==null&&(Aa.status="fulfilled");var e=yi;yi=null,wa=0,Aa=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function D0(e,n){var l=[],o={status:"pending",value:null,reason:null,then:function(f){l.push(f)}};return e.then(function(){o.status="fulfilled",o.value=n;for(var f=0;f<l.length;f++)(0,l[f])(n)},function(f){for(o.status="rejected",o.reason=f,f=0;f<l.length;f++)(0,l[f])(void 0)}),o}var Kd=B.S;B.S=function(e,n){Mp=kn(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&M0(e,n),Kd!==null&&Kd(e,n)};var Ul=R(null);function Pu(){var e=Ul.current;return e!==null?e:Fe.pooledCache}function Hr(e,n){n===null?k(Ul,Ul.current):k(Ul,n.pool)}function $d(){var e=Pu();return e===null?null:{parent:an._currentValue,pool:e}}var ka=Error(r(460)),Ju=Error(r(474)),Ur=Error(r(542)),qr={then:function(){}};function Pd(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Jd(e,n,l){switch(l=e[l],l===void 0?e.push(n):l!==n&&(n.then(Tt,Tt),n=l),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eh(e),e;default:if(typeof n.status=="string")n.then(Tt,Tt);else{if(e=Fe,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(o){if(n.status==="pending"){var f=n;f.status="fulfilled",f.value=o}},function(o){if(n.status==="pending"){var f=n;f.status="rejected",f.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,eh(e),e}throw Il=n,ka}}function ql(e){try{var n=e._init;return n(e._payload)}catch(l){throw l!==null&&typeof l=="object"&&typeof l.then=="function"?(Il=l,ka):l}}var Il=null;function Wd(){if(Il===null)throw Error(r(459));var e=Il;return Il=null,e}function eh(e){if(e===ka||e===Ur)throw Error(r(483))}var Ea=null,xi=0;function Ir(e){var n=xi;return xi+=1,Ea===null&&(Ea=[]),Jd(Ea,e,n)}function bi(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function Vr(e,n){throw n.$$typeof===b?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function nh(e){function n(L,M){if(e){var H=L.deletions;H===null?(L.deletions=[M],L.flags|=16):H.push(M)}}function l(L,M){if(!e)return null;for(;M!==null;)n(L,M),M=M.sibling;return null}function o(L){for(var M=new Map;L!==null;)L.key!==null?M.set(L.key,L):M.set(L.index,L),L=L.sibling;return M}function f(L,M){return L=zt(L,M),L.index=0,L.sibling=null,L}function d(L,M,H){return L.index=H,e?(H=L.alternate,H!==null?(H=H.index,H<M?(L.flags|=67108866,M):H):(L.flags|=67108866,M)):(L.flags|=1048576,M)}function x(L){return e&&L.alternate===null&&(L.flags|=67108866),L}function w(L,M,H,Q){return M===null||M.tag!==6?(M=qu(H,L.mode,Q),M.return=L,M):(M=f(M,H),M.return=L,M)}function z(L,M,H,Q){var pe=H.type;return pe===_?G(L,M,H.props.children,Q,H.key):M!==null&&(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===$&&ql(pe)===M.type)?(M=f(M,H.props),bi(M,H),M.return=L,M):(M=jr(H.type,H.key,H.props,null,L.mode,Q),bi(M,H),M.return=L,M)}function U(L,M,H,Q){return M===null||M.tag!==4||M.stateNode.containerInfo!==H.containerInfo||M.stateNode.implementation!==H.implementation?(M=Iu(H,L.mode,Q),M.return=L,M):(M=f(M,H.children||[]),M.return=L,M)}function G(L,M,H,Q,pe){return M===null||M.tag!==7?(M=Ol(H,L.mode,Q,pe),M.return=L,M):(M=f(M,H),M.return=L,M)}function F(L,M,H){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=qu(""+M,L.mode,H),M.return=L,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case S:return H=jr(M.type,M.key,M.props,null,L.mode,H),bi(H,M),H.return=L,H;case E:return M=Iu(M,L.mode,H),M.return=L,M;case $:return M=ql(M),F(L,M,H)}if(P(M)||ne(M))return M=Ol(M,L.mode,H,null),M.return=L,M;if(typeof M.then=="function")return F(L,Ir(M),H);if(M.$$typeof===j)return F(L,Br(L,M),H);Vr(L,M)}return null}function I(L,M,H,Q){var pe=M!==null?M.key:null;if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return pe!==null?null:w(L,M,""+H,Q);if(typeof H=="object"&&H!==null){switch(H.$$typeof){case S:return H.key===pe?z(L,M,H,Q):null;case E:return H.key===pe?U(L,M,H,Q):null;case $:return H=ql(H),I(L,M,H,Q)}if(P(H)||ne(H))return pe!==null?null:G(L,M,H,Q,null);if(typeof H.then=="function")return I(L,M,Ir(H),Q);if(H.$$typeof===j)return I(L,M,Br(L,H),Q);Vr(L,H)}return null}function V(L,M,H,Q,pe){if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return L=L.get(H)||null,w(M,L,""+Q,pe);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case S:return L=L.get(Q.key===null?H:Q.key)||null,z(M,L,Q,pe);case E:return L=L.get(Q.key===null?H:Q.key)||null,U(M,L,Q,pe);case $:return Q=ql(Q),V(L,M,H,Q,pe)}if(P(Q)||ne(Q))return L=L.get(H)||null,G(M,L,Q,pe,null);if(typeof Q.then=="function")return V(L,M,H,Ir(Q),pe);if(Q.$$typeof===j)return V(L,M,H,Br(M,Q),pe);Vr(M,Q)}return null}function ce(L,M,H,Q){for(var pe=null,Le=null,he=M,ke=M=0,Me=null;he!==null&&ke<H.length;ke++){he.index>ke?(Me=he,he=null):Me=he.sibling;var Be=I(L,he,H[ke],Q);if(Be===null){he===null&&(he=Me);break}e&&he&&Be.alternate===null&&n(L,he),M=d(Be,M,ke),Le===null?pe=Be:Le.sibling=Be,Le=Be,he=Me}if(ke===H.length)return l(L,he),je&&_t(L,ke),pe;if(he===null){for(;ke<H.length;ke++)he=F(L,H[ke],Q),he!==null&&(M=d(he,M,ke),Le===null?pe=he:Le.sibling=he,Le=he);return je&&_t(L,ke),pe}for(he=o(he);ke<H.length;ke++)Me=V(he,L,ke,H[ke],Q),Me!==null&&(e&&Me.alternate!==null&&he.delete(Me.key===null?ke:Me.key),M=d(Me,M,ke),Le===null?pe=Me:Le.sibling=Me,Le=Me);return e&&he.forEach(function(vl){return n(L,vl)}),je&&_t(L,ke),pe}function ge(L,M,H,Q){if(H==null)throw Error(r(151));for(var pe=null,Le=null,he=M,ke=M=0,Me=null,Be=H.next();he!==null&&!Be.done;ke++,Be=H.next()){he.index>ke?(Me=he,he=null):Me=he.sibling;var vl=I(L,he,Be.value,Q);if(vl===null){he===null&&(he=Me);break}e&&he&&vl.alternate===null&&n(L,he),M=d(vl,M,ke),Le===null?pe=vl:Le.sibling=vl,Le=vl,he=Me}if(Be.done)return l(L,he),je&&_t(L,ke),pe;if(he===null){for(;!Be.done;ke++,Be=H.next())Be=F(L,Be.value,Q),Be!==null&&(M=d(Be,M,ke),Le===null?pe=Be:Le.sibling=Be,Le=Be);return je&&_t(L,ke),pe}for(he=o(he);!Be.done;ke++,Be=H.next())Be=V(he,L,ke,Be.value,Q),Be!==null&&(e&&Be.alternate!==null&&he.delete(Be.key===null?ke:Be.key),M=d(Be,M,ke),Le===null?pe=Be:Le.sibling=Be,Le=Be);return e&&he.forEach(function(Yb){return n(L,Yb)}),je&&_t(L,ke),pe}function Ye(L,M,H,Q){if(typeof H=="object"&&H!==null&&H.type===_&&H.key===null&&(H=H.props.children),typeof H=="object"&&H!==null){switch(H.$$typeof){case S:e:{for(var pe=H.key;M!==null;){if(M.key===pe){if(pe=H.type,pe===_){if(M.tag===7){l(L,M.sibling),Q=f(M,H.props.children),Q.return=L,L=Q;break e}}else if(M.elementType===pe||typeof pe=="object"&&pe!==null&&pe.$$typeof===$&&ql(pe)===M.type){l(L,M.sibling),Q=f(M,H.props),bi(Q,H),Q.return=L,L=Q;break e}l(L,M);break}else n(L,M);M=M.sibling}H.type===_?(Q=Ol(H.props.children,L.mode,Q,H.key),Q.return=L,L=Q):(Q=jr(H.type,H.key,H.props,null,L.mode,Q),bi(Q,H),Q.return=L,L=Q)}return x(L);case E:e:{for(pe=H.key;M!==null;){if(M.key===pe)if(M.tag===4&&M.stateNode.containerInfo===H.containerInfo&&M.stateNode.implementation===H.implementation){l(L,M.sibling),Q=f(M,H.children||[]),Q.return=L,L=Q;break e}else{l(L,M);break}else n(L,M);M=M.sibling}Q=Iu(H,L.mode,Q),Q.return=L,L=Q}return x(L);case $:return H=ql(H),Ye(L,M,H,Q)}if(P(H))return ce(L,M,H,Q);if(ne(H)){if(pe=ne(H),typeof pe!="function")throw Error(r(150));return H=pe.call(H),ge(L,M,H,Q)}if(typeof H.then=="function")return Ye(L,M,Ir(H),Q);if(H.$$typeof===j)return Ye(L,M,Br(L,H),Q);Vr(L,H)}return typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint"?(H=""+H,M!==null&&M.tag===6?(l(L,M.sibling),Q=f(M,H),Q.return=L,L=Q):(l(L,M),Q=qu(H,L.mode,Q),Q.return=L,L=Q),x(L)):l(L,M)}return function(L,M,H,Q){try{xi=0;var pe=Ye(L,M,H,Q);return Ea=null,pe}catch(he){if(he===ka||he===Ur)throw he;var Le=Vn(29,he,null,L.mode);return Le.lanes=Q,Le.return=L,Le}}}var Vl=nh(!0),th=nh(!1),ll=!1;function Wu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function es(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function al(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function il(e,n,l){var o=e.updateQueue;if(o===null)return null;if(o=o.shared,(He&2)!==0){var f=o.pending;return f===null?n.next=n:(n.next=f.next,f.next=n),o.pending=n,n=Dr(e),Ud(e,null,l),n}return Mr(e,o,n,l),Dr(e)}function vi(e,n,l){if(n=n.updateQueue,n!==null&&(n=n.shared,(l&4194048)!==0)){var o=n.lanes;o&=e.pendingLanes,l|=o,n.lanes=l,Ff(e,l)}}function ns(e,n){var l=e.updateQueue,o=e.alternate;if(o!==null&&(o=o.updateQueue,l===o)){var f=null,d=null;if(l=l.firstBaseUpdate,l!==null){do{var x={lane:l.lane,tag:l.tag,payload:l.payload,callback:null,next:null};d===null?f=d=x:d=d.next=x,l=l.next}while(l!==null);d===null?f=d=n:d=d.next=n}else f=d=n;l={baseState:o.baseState,firstBaseUpdate:f,lastBaseUpdate:d,shared:o.shared,callbacks:o.callbacks},e.updateQueue=l;return}e=l.lastBaseUpdate,e===null?l.firstBaseUpdate=n:e.next=n,l.lastBaseUpdate=n}var ts=!1;function Si(){if(ts){var e=Aa;if(e!==null)throw e}}function wi(e,n,l,o){ts=!1;var f=e.updateQueue;ll=!1;var d=f.firstBaseUpdate,x=f.lastBaseUpdate,w=f.shared.pending;if(w!==null){f.shared.pending=null;var z=w,U=z.next;z.next=null,x===null?d=U:x.next=U,x=z;var G=e.alternate;G!==null&&(G=G.updateQueue,w=G.lastBaseUpdate,w!==x&&(w===null?G.firstBaseUpdate=U:w.next=U,G.lastBaseUpdate=z))}if(d!==null){var F=f.baseState;x=0,G=U=z=null,w=d;do{var I=w.lane&-536870913,V=I!==w.lane;if(V?(Re&I)===I:(o&I)===I){I!==0&&I===wa&&(ts=!0),G!==null&&(G=G.next={lane:0,tag:w.tag,payload:w.payload,callback:null,next:null});e:{var ce=e,ge=w;I=n;var Ye=l;switch(ge.tag){case 1:if(ce=ge.payload,typeof ce=="function"){F=ce.call(Ye,F,I);break e}F=ce;break e;case 3:ce.flags=ce.flags&-65537|128;case 0:if(ce=ge.payload,I=typeof ce=="function"?ce.call(Ye,F,I):ce,I==null)break e;F=g({},F,I);break e;case 2:ll=!0}}I=w.callback,I!==null&&(e.flags|=64,V&&(e.flags|=8192),V=f.callbacks,V===null?f.callbacks=[I]:V.push(I))}else V={lane:I,tag:w.tag,payload:w.payload,callback:w.callback,next:null},G===null?(U=G=V,z=F):G=G.next=V,x|=I;if(w=w.next,w===null){if(w=f.shared.pending,w===null)break;V=w,w=V.next,V.next=null,f.lastBaseUpdate=V,f.shared.pending=null}}while(!0);G===null&&(z=F),f.baseState=z,f.firstBaseUpdate=U,f.lastBaseUpdate=G,d===null&&(f.shared.lanes=0),cl|=x,e.lanes=x,e.memoizedState=F}}function lh(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function ah(e,n){var l=e.callbacks;if(l!==null)for(e.callbacks=null,e=0;e<l.length;e++)lh(l[e],n)}var Ca=R(null),Gr=R(0);function ih(e,n){e=It,k(Gr,e),k(Ca,n),It=e|n.baseLanes}function ls(){k(Gr,It),k(Ca,Ca.current)}function as(){It=Gr.current,Y(Ca),Y(Gr)}var Gn=R(null),it=null;function rl(e){var n=e.alternate;k(tn,tn.current&1),k(Gn,e),it===null&&(n===null||Ca.current!==null||n.memoizedState!==null)&&(it=e)}function is(e){k(tn,tn.current),k(Gn,e),it===null&&(it=e)}function rh(e){e.tag===22?(k(tn,tn.current),k(Gn,e),it===null&&(it=e)):ol()}function ol(){k(tn,tn.current),k(Gn,Gn.current)}function Yn(e){Y(Gn),it===e&&(it=null),Y(tn)}var tn=R(0);function Yr(e){for(var n=e;n!==null;){if(n.tag===13){var l=n.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||fc(l)||dc(l)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Dt=0,we=null,Ve=null,rn=null,Xr=!1,Ta=!1,Gl=!1,Qr=0,Ai=0,Na=null,j0=0;function en(){throw Error(r(321))}function rs(e,n){if(n===null)return!1;for(var l=0;l<n.length&&l<e.length;l++)if(!In(e[l],n[l]))return!1;return!0}function os(e,n,l,o,f,d){return Dt=d,we=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,B.H=e===null||e.memoizedState===null?Gh:ws,Gl=!1,d=l(o,f),Gl=!1,Ta&&(d=uh(n,l,o,f)),oh(e),d}function oh(e){B.H=Ci;var n=Ve!==null&&Ve.next!==null;if(Dt=0,rn=Ve=we=null,Xr=!1,Ai=0,Na=null,n)throw Error(r(300));e===null||on||(e=e.dependencies,e!==null&&Lr(e)&&(on=!0))}function uh(e,n,l,o){we=e;var f=0;do{if(Ta&&(Na=null),Ai=0,Ta=!1,25<=f)throw Error(r(301));if(f+=1,rn=Ve=null,e.updateQueue!=null){var d=e.updateQueue;d.lastEffect=null,d.events=null,d.stores=null,d.memoCache!=null&&(d.memoCache.index=0)}B.H=Yh,d=n(l,o)}while(Ta);return d}function O0(){var e=B.H,n=e.useState()[0];return n=typeof n.then=="function"?ki(n):n,e=e.useState()[0],(Ve!==null?Ve.memoizedState:null)!==e&&(we.flags|=1024),n}function us(){var e=Qr!==0;return Qr=0,e}function ss(e,n,l){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~l}function cs(e){if(Xr){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}Xr=!1}Dt=0,rn=Ve=we=null,Ta=!1,Ai=Qr=0,Na=null}function Cn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return rn===null?we.memoizedState=rn=e:rn=rn.next=e,rn}function ln(){if(Ve===null){var e=we.alternate;e=e!==null?e.memoizedState:null}else e=Ve.next;var n=rn===null?we.memoizedState:rn.next;if(n!==null)rn=n,Ve=e;else{if(e===null)throw we.alternate===null?Error(r(467)):Error(r(310));Ve=e,e={memoizedState:Ve.memoizedState,baseState:Ve.baseState,baseQueue:Ve.baseQueue,queue:Ve.queue,next:null},rn===null?we.memoizedState=rn=e:rn=rn.next=e}return rn}function Fr(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function ki(e){var n=Ai;return Ai+=1,Na===null&&(Na=[]),e=Jd(Na,e,n),n=we,(rn===null?n.memoizedState:rn.next)===null&&(n=n.alternate,B.H=n===null||n.memoizedState===null?Gh:ws),e}function Zr(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return ki(e);if(e.$$typeof===j)return yn(e)}throw Error(r(438,String(e)))}function fs(e){var n=null,l=we.updateQueue;if(l!==null&&(n=l.memoCache),n==null){var o=we.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(f){return f.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),l===null&&(l=Fr(),we.updateQueue=l),l.memoCache=n,l=n.data[n.index],l===void 0)for(l=n.data[n.index]=Array(e),o=0;o<e;o++)l[o]=O;return n.index++,l}function jt(e,n){return typeof n=="function"?n(e):n}function Kr(e){var n=ln();return ds(n,Ve,e)}function ds(e,n,l){var o=e.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=l;var f=e.baseQueue,d=o.pending;if(d!==null){if(f!==null){var x=f.next;f.next=d.next,d.next=x}n.baseQueue=f=d,o.pending=null}if(d=e.baseState,f===null)e.memoizedState=d;else{n=f.next;var w=x=null,z=null,U=n,G=!1;do{var F=U.lane&-536870913;if(F!==U.lane?(Re&F)===F:(Dt&F)===F){var I=U.revertLane;if(I===0)z!==null&&(z=z.next={lane:0,revertLane:0,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null}),F===wa&&(G=!0);else if((Dt&I)===I){U=U.next,I===wa&&(G=!0);continue}else F={lane:0,revertLane:U.revertLane,gesture:null,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},z===null?(w=z=F,x=d):z=z.next=F,we.lanes|=I,cl|=I;F=U.action,Gl&&l(d,F),d=U.hasEagerState?U.eagerState:l(d,F)}else I={lane:F,revertLane:U.revertLane,gesture:U.gesture,action:U.action,hasEagerState:U.hasEagerState,eagerState:U.eagerState,next:null},z===null?(w=z=I,x=d):z=z.next=I,we.lanes|=F,cl|=F;U=U.next}while(U!==null&&U!==n);if(z===null?x=d:z.next=w,!In(d,e.memoizedState)&&(on=!0,G&&(l=Aa,l!==null)))throw l;e.memoizedState=d,e.baseState=x,e.baseQueue=z,o.lastRenderedState=d}return f===null&&(o.lanes=0),[e.memoizedState,o.dispatch]}function hs(e){var n=ln(),l=n.queue;if(l===null)throw Error(r(311));l.lastRenderedReducer=e;var o=l.dispatch,f=l.pending,d=n.memoizedState;if(f!==null){l.pending=null;var x=f=f.next;do d=e(d,x.action),x=x.next;while(x!==f);In(d,n.memoizedState)||(on=!0),n.memoizedState=d,n.baseQueue===null&&(n.baseState=d),l.lastRenderedState=d}return[d,o]}function sh(e,n,l){var o=we,f=ln(),d=je;if(d){if(l===void 0)throw Error(r(407));l=l()}else l=n();var x=!In((Ve||f).memoizedState,l);if(x&&(f.memoizedState=l,on=!0),f=f.queue,gs(dh.bind(null,o,f,e),[e]),f.getSnapshot!==n||x||rn!==null&&rn.memoizedState.tag&1){if(o.flags|=2048,za(9,{destroy:void 0},fh.bind(null,o,f,l,n),null),Fe===null)throw Error(r(349));d||(Dt&127)!==0||ch(o,n,l)}return l}function ch(e,n,l){e.flags|=16384,e={getSnapshot:n,value:l},n=we.updateQueue,n===null?(n=Fr(),we.updateQueue=n,n.stores=[e]):(l=n.stores,l===null?n.stores=[e]:l.push(e))}function fh(e,n,l,o){n.value=l,n.getSnapshot=o,hh(n)&&ph(e)}function dh(e,n,l){return l(function(){hh(n)&&ph(e)})}function hh(e){var n=e.getSnapshot;e=e.value;try{var l=n();return!In(e,l)}catch{return!0}}function ph(e){var n=jl(e,2);n!==null&&Bn(n,e,2)}function ps(e){var n=Cn();if(typeof e=="function"){var l=e;if(e=l(),Gl){_n(!0);try{l()}finally{_n(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:e},n}function mh(e,n,l,o){return e.baseState=l,ds(e,Ve,typeof o=="function"?o:jt)}function L0(e,n,l,o,f){if(Jr(e))throw Error(r(485));if(e=n.action,e!==null){var d={payload:f,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){d.listeners.push(x)}};B.T!==null?l(!0):d.isTransition=!1,o(d),l=n.pending,l===null?(d.next=n.pending=d,gh(n,d)):(d.next=l.next,n.pending=l.next=d)}}function gh(e,n){var l=n.action,o=n.payload,f=e.state;if(n.isTransition){var d=B.T,x={};B.T=x;try{var w=l(f,o),z=B.S;z!==null&&z(x,w),yh(e,n,w)}catch(U){ms(e,n,U)}finally{d!==null&&x.types!==null&&(d.types=x.types),B.T=d}}else try{d=l(f,o),yh(e,n,d)}catch(U){ms(e,n,U)}}function yh(e,n,l){l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(function(o){xh(e,n,o)},function(o){return ms(e,n,o)}):xh(e,n,l)}function xh(e,n,l){n.status="fulfilled",n.value=l,bh(n),e.state=l,n=e.pending,n!==null&&(l=n.next,l===n?e.pending=null:(l=l.next,n.next=l,gh(e,l)))}function ms(e,n,l){var o=e.pending;if(e.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=l,bh(n),n=n.next;while(n!==o)}e.action=null}function bh(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function vh(e,n){return n}function Sh(e,n){if(je){var l=Fe.formState;if(l!==null){e:{var o=we;if(je){if($e){n:{for(var f=$e,d=at;f.nodeType!==8;){if(!d){f=null;break n}if(f=rt(f.nextSibling),f===null){f=null;break n}}d=f.data,f=d==="F!"||d==="F"?f:null}if(f){$e=rt(f.nextSibling),o=f.data==="F!";break e}}nl(o)}o=!1}o&&(n=l[0])}}return l=Cn(),l.memoizedState=l.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:vh,lastRenderedState:n},l.queue=o,l=qh.bind(null,we,o),o.dispatch=l,o=ps(!1),d=Ss.bind(null,we,!1,o.queue),o=Cn(),f={state:n,dispatch:null,action:e,pending:null},o.queue=f,l=L0.bind(null,we,f,d,l),f.dispatch=l,o.memoizedState=e,[n,l,!1]}function wh(e){var n=ln();return Ah(n,Ve,e)}function Ah(e,n,l){if(n=ds(e,n,vh)[0],e=Kr(jt)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=ki(n)}catch(x){throw x===ka?Ur:x}else o=n;n=ln();var f=n.queue,d=f.dispatch;return l!==n.memoizedState&&(we.flags|=2048,za(9,{destroy:void 0},B0.bind(null,f,l),null)),[o,d,e]}function B0(e,n){e.action=n}function kh(e){var n=ln(),l=Ve;if(l!==null)return Ah(n,l,e);ln(),n=n.memoizedState,l=ln();var o=l.queue.dispatch;return l.memoizedState=e,[n,o,!1]}function za(e,n,l,o){return e={tag:e,create:l,deps:o,inst:n,next:null},n=we.updateQueue,n===null&&(n=Fr(),we.updateQueue=n),l=n.lastEffect,l===null?n.lastEffect=e.next=e:(o=l.next,l.next=e,e.next=o,n.lastEffect=e),e}function Eh(){return ln().memoizedState}function $r(e,n,l,o){var f=Cn();we.flags|=e,f.memoizedState=za(1|n,{destroy:void 0},l,o===void 0?null:o)}function Pr(e,n,l,o){var f=ln();o=o===void 0?null:o;var d=f.memoizedState.inst;Ve!==null&&o!==null&&rs(o,Ve.memoizedState.deps)?f.memoizedState=za(n,d,l,o):(we.flags|=e,f.memoizedState=za(1|n,d,l,o))}function Ch(e,n){$r(8390656,8,e,n)}function gs(e,n){Pr(2048,8,e,n)}function H0(e){we.flags|=4;var n=we.updateQueue;if(n===null)n=Fr(),we.updateQueue=n,n.events=[e];else{var l=n.events;l===null?n.events=[e]:l.push(e)}}function Th(e){var n=ln().memoizedState;return H0({ref:n,nextImpl:e}),function(){if((He&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function Nh(e,n){return Pr(4,2,e,n)}function zh(e,n){return Pr(4,4,e,n)}function _h(e,n){if(typeof n=="function"){e=e();var l=n(e);return function(){typeof l=="function"?l():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Rh(e,n,l){l=l!=null?l.concat([e]):null,Pr(4,4,_h.bind(null,n,e),l)}function ys(){}function Mh(e,n){var l=ln();n=n===void 0?null:n;var o=l.memoizedState;return n!==null&&rs(n,o[1])?o[0]:(l.memoizedState=[e,n],e)}function Dh(e,n){var l=ln();n=n===void 0?null:n;var o=l.memoizedState;if(n!==null&&rs(n,o[1]))return o[0];if(o=e(),Gl){_n(!0);try{e()}finally{_n(!1)}}return l.memoizedState=[o,n],o}function xs(e,n,l){return l===void 0||(Dt&1073741824)!==0&&(Re&261930)===0?e.memoizedState=n:(e.memoizedState=l,e=jp(),we.lanes|=e,cl|=e,l)}function jh(e,n,l,o){return In(l,n)?l:Ca.current!==null?(e=xs(e,l,o),In(e,n)||(on=!0),e):(Dt&42)===0||(Dt&1073741824)!==0&&(Re&261930)===0?(on=!0,e.memoizedState=l):(e=jp(),we.lanes|=e,cl|=e,n)}function Oh(e,n,l,o,f){var d=K.p;K.p=d!==0&&8>d?d:8;var x=B.T,w={};B.T=w,Ss(e,!1,n,l);try{var z=f(),U=B.S;if(U!==null&&U(w,z),z!==null&&typeof z=="object"&&typeof z.then=="function"){var G=D0(z,o);Ei(e,n,G,Fn(e))}else Ei(e,n,o,Fn(e))}catch(F){Ei(e,n,{then:function(){},status:"rejected",reason:F},Fn())}finally{K.p=d,x!==null&&w.types!==null&&(x.types=w.types),B.T=x}}function U0(){}function bs(e,n,l,o){if(e.tag!==5)throw Error(r(476));var f=Lh(e).queue;Oh(e,f,n,ie,l===null?U0:function(){return Bh(e),l(o)})}function Lh(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:ie,baseState:ie,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:ie},next:null};var l={};return n.next={memoizedState:l,baseState:l,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:jt,lastRenderedState:l},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Bh(e){var n=Lh(e);n.next===null&&(n=e.alternate.memoizedState),Ei(e,n.next.queue,{},Fn())}function vs(){return yn(Vi)}function Hh(){return ln().memoizedState}function Uh(){return ln().memoizedState}function q0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var l=Fn();e=al(l);var o=il(n,e,l);o!==null&&(Bn(o,n,l),vi(o,n,l)),n={cache:Ku()},e.payload=n;return}n=n.return}}function I0(e,n,l){var o=Fn();l={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null},Jr(e)?Ih(n,l):(l=Hu(e,n,l,o),l!==null&&(Bn(l,e,o),Vh(l,n,o)))}function qh(e,n,l){var o=Fn();Ei(e,n,l,o)}function Ei(e,n,l,o){var f={lane:o,revertLane:0,gesture:null,action:l,hasEagerState:!1,eagerState:null,next:null};if(Jr(e))Ih(n,f);else{var d=e.alternate;if(e.lanes===0&&(d===null||d.lanes===0)&&(d=n.lastRenderedReducer,d!==null))try{var x=n.lastRenderedState,w=d(x,l);if(f.hasEagerState=!0,f.eagerState=w,In(w,x))return Mr(e,n,f,0),Fe===null&&Rr(),!1}catch{}if(l=Hu(e,n,f,o),l!==null)return Bn(l,e,o),Vh(l,n,o),!0}return!1}function Ss(e,n,l,o){if(o={lane:2,revertLane:Ws(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},Jr(e)){if(n)throw Error(r(479))}else n=Hu(e,l,o,2),n!==null&&Bn(n,e,2)}function Jr(e){var n=e.alternate;return e===we||n!==null&&n===we}function Ih(e,n){Ta=Xr=!0;var l=e.pending;l===null?n.next=n:(n.next=l.next,l.next=n),e.pending=n}function Vh(e,n,l){if((l&4194048)!==0){var o=n.lanes;o&=e.pendingLanes,l|=o,n.lanes=l,Ff(e,l)}}var Ci={readContext:yn,use:Zr,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Ci.useEffectEvent=en;var Gh={readContext:yn,use:Zr,useCallback:function(e,n){return Cn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Ch,useImperativeHandle:function(e,n,l){l=l!=null?l.concat([e]):null,$r(4194308,4,_h.bind(null,n,e),l)},useLayoutEffect:function(e,n){return $r(4194308,4,e,n)},useInsertionEffect:function(e,n){$r(4,2,e,n)},useMemo:function(e,n){var l=Cn();n=n===void 0?null:n;var o=e();if(Gl){_n(!0);try{e()}finally{_n(!1)}}return l.memoizedState=[o,n],o},useReducer:function(e,n,l){var o=Cn();if(l!==void 0){var f=l(n);if(Gl){_n(!0);try{l(n)}finally{_n(!1)}}}else f=n;return o.memoizedState=o.baseState=f,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:f},o.queue=e,e=e.dispatch=I0.bind(null,we,e),[o.memoizedState,e]},useRef:function(e){var n=Cn();return e={current:e},n.memoizedState=e},useState:function(e){e=ps(e);var n=e.queue,l=qh.bind(null,we,n);return n.dispatch=l,[e.memoizedState,l]},useDebugValue:ys,useDeferredValue:function(e,n){var l=Cn();return xs(l,e,n)},useTransition:function(){var e=ps(!1);return e=Oh.bind(null,we,e.queue,!0,!1),Cn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,l){var o=we,f=Cn();if(je){if(l===void 0)throw Error(r(407));l=l()}else{if(l=n(),Fe===null)throw Error(r(349));(Re&127)!==0||ch(o,n,l)}f.memoizedState=l;var d={value:l,getSnapshot:n};return f.queue=d,Ch(dh.bind(null,o,d,e),[e]),o.flags|=2048,za(9,{destroy:void 0},fh.bind(null,o,d,l,n),null),l},useId:function(){var e=Cn(),n=Fe.identifierPrefix;if(je){var l=xt,o=yt;l=(o&~(1<<32-Qe(o)-1)).toString(32)+l,n="_"+n+"R_"+l,l=Qr++,0<l&&(n+="H"+l.toString(32)),n+="_"}else l=j0++,n="_"+n+"r_"+l.toString(32)+"_";return e.memoizedState=n},useHostTransitionStatus:vs,useFormState:Sh,useActionState:Sh,useOptimistic:function(e){var n=Cn();n.memoizedState=n.baseState=e;var l={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=l,n=Ss.bind(null,we,!0,l),l.dispatch=n,[e,n]},useMemoCache:fs,useCacheRefresh:function(){return Cn().memoizedState=q0.bind(null,we)},useEffectEvent:function(e){var n=Cn(),l={impl:e};return n.memoizedState=l,function(){if((He&2)!==0)throw Error(r(440));return l.impl.apply(void 0,arguments)}}},ws={readContext:yn,use:Zr,useCallback:Mh,useContext:yn,useEffect:gs,useImperativeHandle:Rh,useInsertionEffect:Nh,useLayoutEffect:zh,useMemo:Dh,useReducer:Kr,useRef:Eh,useState:function(){return Kr(jt)},useDebugValue:ys,useDeferredValue:function(e,n){var l=ln();return jh(l,Ve.memoizedState,e,n)},useTransition:function(){var e=Kr(jt)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ki(e),n]},useSyncExternalStore:sh,useId:Hh,useHostTransitionStatus:vs,useFormState:wh,useActionState:wh,useOptimistic:function(e,n){var l=ln();return mh(l,Ve,e,n)},useMemoCache:fs,useCacheRefresh:Uh};ws.useEffectEvent=Th;var Yh={readContext:yn,use:Zr,useCallback:Mh,useContext:yn,useEffect:gs,useImperativeHandle:Rh,useInsertionEffect:Nh,useLayoutEffect:zh,useMemo:Dh,useReducer:hs,useRef:Eh,useState:function(){return hs(jt)},useDebugValue:ys,useDeferredValue:function(e,n){var l=ln();return Ve===null?xs(l,e,n):jh(l,Ve.memoizedState,e,n)},useTransition:function(){var e=hs(jt)[0],n=ln().memoizedState;return[typeof e=="boolean"?e:ki(e),n]},useSyncExternalStore:sh,useId:Hh,useHostTransitionStatus:vs,useFormState:kh,useActionState:kh,useOptimistic:function(e,n){var l=ln();return Ve!==null?mh(l,Ve,e,n):(l.baseState=e,[e,l.queue.dispatch])},useMemoCache:fs,useCacheRefresh:Uh};Yh.useEffectEvent=Th;function As(e,n,l,o){n=e.memoizedState,l=l(o,n),l=l==null?n:g({},n,l),e.memoizedState=l,e.lanes===0&&(e.updateQueue.baseState=l)}var ks={enqueueSetState:function(e,n,l){e=e._reactInternals;var o=Fn(),f=al(o);f.payload=n,l!=null&&(f.callback=l),n=il(e,f,o),n!==null&&(Bn(n,e,o),vi(n,e,o))},enqueueReplaceState:function(e,n,l){e=e._reactInternals;var o=Fn(),f=al(o);f.tag=1,f.payload=n,l!=null&&(f.callback=l),n=il(e,f,o),n!==null&&(Bn(n,e,o),vi(n,e,o))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var l=Fn(),o=al(l);o.tag=2,n!=null&&(o.callback=n),n=il(e,o,l),n!==null&&(Bn(n,e,l),vi(n,e,l))}};function Xh(e,n,l,o,f,d,x){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(o,d,x):n.prototype&&n.prototype.isPureReactComponent?!di(l,o)||!di(f,d):!0}function Qh(e,n,l,o){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(l,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(l,o),n.state!==e&&ks.enqueueReplaceState(n,n.state,null)}function Yl(e,n){var l=n;if("ref"in n){l={};for(var o in n)o!=="ref"&&(l[o]=n[o])}if(e=e.defaultProps){l===n&&(l=g({},l));for(var f in e)l[f]===void 0&&(l[f]=e[f])}return l}function Fh(e){_r(e)}function Zh(e){console.error(e)}function Kh(e){_r(e)}function Wr(e,n){try{var l=e.onUncaughtError;l(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function $h(e,n,l){try{var o=e.onCaughtError;o(l.value,{componentStack:l.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(f){setTimeout(function(){throw f})}}function Es(e,n,l){return l=al(l),l.tag=3,l.payload={element:null},l.callback=function(){Wr(e,n)},l}function Ph(e){return e=al(e),e.tag=3,e}function Jh(e,n,l,o){var f=l.type.getDerivedStateFromError;if(typeof f=="function"){var d=o.value;e.payload=function(){return f(d)},e.callback=function(){$h(n,l,o)}}var x=l.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(e.callback=function(){$h(n,l,o),typeof f!="function"&&(fl===null?fl=new Set([this]):fl.add(this));var w=o.stack;this.componentDidCatch(o.value,{componentStack:w!==null?w:""})})}function V0(e,n,l,o,f){if(l.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=l.alternate,n!==null&&Sa(n,l,f,!0),l=Gn.current,l!==null){switch(l.tag){case 31:case 13:return it===null?fo():l.alternate===null&&nn===0&&(nn=3),l.flags&=-257,l.flags|=65536,l.lanes=f,o===qr?l.flags|=16384:(n=l.updateQueue,n===null?l.updateQueue=new Set([o]):n.add(o),$s(e,o,f)),!1;case 22:return l.flags|=65536,o===qr?l.flags|=16384:(n=l.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},l.updateQueue=n):(l=n.retryQueue,l===null?n.retryQueue=new Set([o]):l.add(o)),$s(e,o,f)),!1}throw Error(r(435,l.tag))}return $s(e,o,f),fo(),!1}if(je)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=f,o!==Yu&&(e=Error(r(422),{cause:o}),mi(nt(e,l)))):(o!==Yu&&(n=Error(r(423),{cause:o}),mi(nt(n,l))),e=e.current.alternate,e.flags|=65536,f&=-f,e.lanes|=f,o=nt(o,l),f=Es(e.stateNode,o,f),ns(e,f),nn!==4&&(nn=2)),!1;var d=Error(r(520),{cause:o});if(d=nt(d,l),ji===null?ji=[d]:ji.push(d),nn!==4&&(nn=2),n===null)return!0;o=nt(o,l),l=n;do{switch(l.tag){case 3:return l.flags|=65536,e=f&-f,l.lanes|=e,e=Es(l.stateNode,o,e),ns(l,e),!1;case 1:if(n=l.type,d=l.stateNode,(l.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||d!==null&&typeof d.componentDidCatch=="function"&&(fl===null||!fl.has(d))))return l.flags|=65536,f&=-f,l.lanes|=f,f=Ph(f),Jh(f,e,l,o),ns(l,f),!1}l=l.return}while(l!==null);return!1}var Cs=Error(r(461)),on=!1;function xn(e,n,l,o){n.child=e===null?th(n,null,l,o):Vl(n,e.child,l,o)}function Wh(e,n,l,o,f){l=l.render;var d=n.ref;if("ref"in o){var x={};for(var w in o)w!=="ref"&&(x[w]=o[w])}else x=o;return Hl(n),o=os(e,n,l,x,d,f),w=us(),e!==null&&!on?(ss(e,n,f),Ot(e,n,f)):(je&&w&&Vu(n),n.flags|=1,xn(e,n,o,f),n.child)}function ep(e,n,l,o,f){if(e===null){var d=l.type;return typeof d=="function"&&!Uu(d)&&d.defaultProps===void 0&&l.compare===null?(n.tag=15,n.type=d,np(e,n,d,o,f)):(e=jr(l.type,null,o,n,n.mode,f),e.ref=n.ref,e.return=n,n.child=e)}if(d=e.child,!js(e,f)){var x=d.memoizedProps;if(l=l.compare,l=l!==null?l:di,l(x,o)&&e.ref===n.ref)return Ot(e,n,f)}return n.flags|=1,e=zt(d,o),e.ref=n.ref,e.return=n,n.child=e}function np(e,n,l,o,f){if(e!==null){var d=e.memoizedProps;if(di(d,o)&&e.ref===n.ref)if(on=!1,n.pendingProps=o=d,js(e,f))(e.flags&131072)!==0&&(on=!0);else return n.lanes=e.lanes,Ot(e,n,f)}return Ts(e,n,l,o,f)}function tp(e,n,l,o){var f=o.children,d=e!==null?e.memoizedState:null;if(e===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(d=d!==null?d.baseLanes|l:l,e!==null){for(o=n.child=e.child,f=0;o!==null;)f=f|o.lanes|o.childLanes,o=o.sibling;o=f&~d}else o=0,n.child=null;return lp(e,n,d,l,o)}if((l&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&Hr(n,d!==null?d.cachePool:null),d!==null?ih(n,d):ls(),rh(n);else return o=n.lanes=536870912,lp(e,n,d!==null?d.baseLanes|l:l,l,o)}else d!==null?(Hr(n,d.cachePool),ih(n,d),ol(),n.memoizedState=null):(e!==null&&Hr(n,null),ls(),ol());return xn(e,n,f,l),n.child}function Ti(e,n){return e!==null&&e.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function lp(e,n,l,o,f){var d=Pu();return d=d===null?null:{parent:an._currentValue,pool:d},n.memoizedState={baseLanes:l,cachePool:d},e!==null&&Hr(n,null),ls(),rh(n),e!==null&&Sa(e,n,o,!0),n.childLanes=f,null}function eo(e,n){return n=to({mode:n.mode,children:n.children},e.mode),n.ref=e.ref,e.child=n,n.return=e,n}function ap(e,n,l){return Vl(n,e.child,null,l),e=eo(n,n.pendingProps),e.flags|=2,Yn(n),n.memoizedState=null,e}function G0(e,n,l){var o=n.pendingProps,f=(n.flags&128)!==0;if(n.flags&=-129,e===null){if(je){if(o.mode==="hidden")return e=eo(n,o),n.lanes=536870912,Ti(null,e);if(is(n),(e=$e)?(e=gm(e,at),e=e!==null&&e.data==="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:yt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},l=Id(e),l.return=n,n.child=l,gn=n,$e=null)):e=null,e===null)throw nl(n);return n.lanes=536870912,null}return eo(n,o)}var d=e.memoizedState;if(d!==null){var x=d.dehydrated;if(is(n),f)if(n.flags&256)n.flags&=-257,n=ap(e,n,l);else if(n.memoizedState!==null)n.child=e.child,n.flags|=128,n=null;else throw Error(r(558));else if(on||Sa(e,n,l,!1),f=(l&e.childLanes)!==0,on||f){if(o=Fe,o!==null&&(x=Zf(o,l),x!==0&&x!==d.retryLane))throw d.retryLane=x,jl(e,x),Bn(o,e,x),Cs;fo(),n=ap(e,n,l)}else e=d.treeContext,$e=rt(x.nextSibling),gn=n,je=!0,el=null,at=!1,e!==null&&Yd(n,e),n=eo(n,o),n.flags|=4096;return n}return e=zt(e.child,{mode:o.mode,children:o.children}),e.ref=n.ref,n.child=e,e.return=n,e}function no(e,n){var l=n.ref;if(l===null)e!==null&&e.ref!==null&&(n.flags|=4194816);else{if(typeof l!="function"&&typeof l!="object")throw Error(r(284));(e===null||e.ref!==l)&&(n.flags|=4194816)}}function Ts(e,n,l,o,f){return Hl(n),l=os(e,n,l,o,void 0,f),o=us(),e!==null&&!on?(ss(e,n,f),Ot(e,n,f)):(je&&o&&Vu(n),n.flags|=1,xn(e,n,l,f),n.child)}function ip(e,n,l,o,f,d){return Hl(n),n.updateQueue=null,l=uh(n,o,l,f),oh(e),o=us(),e!==null&&!on?(ss(e,n,d),Ot(e,n,d)):(je&&o&&Vu(n),n.flags|=1,xn(e,n,l,d),n.child)}function rp(e,n,l,o,f){if(Hl(n),n.stateNode===null){var d=ya,x=l.contextType;typeof x=="object"&&x!==null&&(d=yn(x)),d=new l(o,d),n.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,d.updater=ks,n.stateNode=d,d._reactInternals=n,d=n.stateNode,d.props=o,d.state=n.memoizedState,d.refs={},Wu(n),x=l.contextType,d.context=typeof x=="object"&&x!==null?yn(x):ya,d.state=n.memoizedState,x=l.getDerivedStateFromProps,typeof x=="function"&&(As(n,l,x,o),d.state=n.memoizedState),typeof l.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(x=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),x!==d.state&&ks.enqueueReplaceState(d,d.state,null),wi(n,o,d,f),Si(),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(e===null){d=n.stateNode;var w=n.memoizedProps,z=Yl(l,w);d.props=z;var U=d.context,G=l.contextType;x=ya,typeof G=="object"&&G!==null&&(x=yn(G));var F=l.getDerivedStateFromProps;G=typeof F=="function"||typeof d.getSnapshotBeforeUpdate=="function",w=n.pendingProps!==w,G||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(w||U!==x)&&Qh(n,d,o,x),ll=!1;var I=n.memoizedState;d.state=I,wi(n,o,d,f),Si(),U=n.memoizedState,w||I!==U||ll?(typeof F=="function"&&(As(n,l,F,o),U=n.memoizedState),(z=ll||Xh(n,l,z,o,I,U,x))?(G||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount()),typeof d.componentDidMount=="function"&&(n.flags|=4194308)):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=U),d.props=o,d.state=U,d.context=x,o=z):(typeof d.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{d=n.stateNode,es(e,n),x=n.memoizedProps,G=Yl(l,x),d.props=G,F=n.pendingProps,I=d.context,U=l.contextType,z=ya,typeof U=="object"&&U!==null&&(z=yn(U)),w=l.getDerivedStateFromProps,(U=typeof w=="function"||typeof d.getSnapshotBeforeUpdate=="function")||typeof d.UNSAFE_componentWillReceiveProps!="function"&&typeof d.componentWillReceiveProps!="function"||(x!==F||I!==z)&&Qh(n,d,o,z),ll=!1,I=n.memoizedState,d.state=I,wi(n,o,d,f),Si();var V=n.memoizedState;x!==F||I!==V||ll||e!==null&&e.dependencies!==null&&Lr(e.dependencies)?(typeof w=="function"&&(As(n,l,w,o),V=n.memoizedState),(G=ll||Xh(n,l,G,o,I,V,z)||e!==null&&e.dependencies!==null&&Lr(e.dependencies))?(U||typeof d.UNSAFE_componentWillUpdate!="function"&&typeof d.componentWillUpdate!="function"||(typeof d.componentWillUpdate=="function"&&d.componentWillUpdate(o,V,z),typeof d.UNSAFE_componentWillUpdate=="function"&&d.UNSAFE_componentWillUpdate(o,V,z)),typeof d.componentDidUpdate=="function"&&(n.flags|=4),typeof d.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=V),d.props=o,d.state=V,d.context=z,o=G):(typeof d.componentDidUpdate!="function"||x===e.memoizedProps&&I===e.memoizedState||(n.flags|=4),typeof d.getSnapshotBeforeUpdate!="function"||x===e.memoizedProps&&I===e.memoizedState||(n.flags|=1024),o=!1)}return d=o,no(e,n),o=(n.flags&128)!==0,d||o?(d=n.stateNode,l=o&&typeof l.getDerivedStateFromError!="function"?null:d.render(),n.flags|=1,e!==null&&o?(n.child=Vl(n,e.child,null,f),n.child=Vl(n,null,l,f)):xn(e,n,l,f),n.memoizedState=d.state,e=n.child):e=Ot(e,n,f),e}function op(e,n,l,o){return Ll(),n.flags|=256,xn(e,n,l,o),n.child}var Ns={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function zs(e){return{baseLanes:e,cachePool:$d()}}function _s(e,n,l){return e=e!==null?e.childLanes&~l:0,n&&(e|=Qn),e}function up(e,n,l){var o=n.pendingProps,f=!1,d=(n.flags&128)!==0,x;if((x=d)||(x=e!==null&&e.memoizedState===null?!1:(tn.current&2)!==0),x&&(f=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,e===null){if(je){if(f?rl(n):ol(),(e=$e)?(e=gm(e,at),e=e!==null&&e.data!=="&"?e:null,e!==null&&(n.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:yt,overflow:xt}:null,retryLane:536870912,hydrationErrors:null},l=Id(e),l.return=n,n.child=l,gn=n,$e=null)):e=null,e===null)throw nl(n);return dc(e)?n.lanes=32:n.lanes=536870912,null}var w=o.children;return o=o.fallback,f?(ol(),f=n.mode,w=to({mode:"hidden",children:w},f),o=Ol(o,f,l,null),w.return=n,o.return=n,w.sibling=o,n.child=w,o=n.child,o.memoizedState=zs(l),o.childLanes=_s(e,x,l),n.memoizedState=Ns,Ti(null,o)):(rl(n),Rs(n,w))}var z=e.memoizedState;if(z!==null&&(w=z.dehydrated,w!==null)){if(d)n.flags&256?(rl(n),n.flags&=-257,n=Ms(e,n,l)):n.memoizedState!==null?(ol(),n.child=e.child,n.flags|=128,n=null):(ol(),w=o.fallback,f=n.mode,o=to({mode:"visible",children:o.children},f),w=Ol(w,f,l,null),w.flags|=2,o.return=n,w.return=n,o.sibling=w,n.child=o,Vl(n,e.child,null,l),o=n.child,o.memoizedState=zs(l),o.childLanes=_s(e,x,l),n.memoizedState=Ns,n=Ti(null,o));else if(rl(n),dc(w)){if(x=w.nextSibling&&w.nextSibling.dataset,x)var U=x.dgst;x=U,o=Error(r(419)),o.stack="",o.digest=x,mi({value:o,source:null,stack:null}),n=Ms(e,n,l)}else if(on||Sa(e,n,l,!1),x=(l&e.childLanes)!==0,on||x){if(x=Fe,x!==null&&(o=Zf(x,l),o!==0&&o!==z.retryLane))throw z.retryLane=o,jl(e,o),Bn(x,e,o),Cs;fc(w)||fo(),n=Ms(e,n,l)}else fc(w)?(n.flags|=192,n.child=e.child,n=null):(e=z.treeContext,$e=rt(w.nextSibling),gn=n,je=!0,el=null,at=!1,e!==null&&Yd(n,e),n=Rs(n,o.children),n.flags|=4096);return n}return f?(ol(),w=o.fallback,f=n.mode,z=e.child,U=z.sibling,o=zt(z,{mode:"hidden",children:o.children}),o.subtreeFlags=z.subtreeFlags&65011712,U!==null?w=zt(U,w):(w=Ol(w,f,l,null),w.flags|=2),w.return=n,o.return=n,o.sibling=w,n.child=o,Ti(null,o),o=n.child,w=e.child.memoizedState,w===null?w=zs(l):(f=w.cachePool,f!==null?(z=an._currentValue,f=f.parent!==z?{parent:z,pool:z}:f):f=$d(),w={baseLanes:w.baseLanes|l,cachePool:f}),o.memoizedState=w,o.childLanes=_s(e,x,l),n.memoizedState=Ns,Ti(e.child,o)):(rl(n),l=e.child,e=l.sibling,l=zt(l,{mode:"visible",children:o.children}),l.return=n,l.sibling=null,e!==null&&(x=n.deletions,x===null?(n.deletions=[e],n.flags|=16):x.push(e)),n.child=l,n.memoizedState=null,l)}function Rs(e,n){return n=to({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function to(e,n){return e=Vn(22,e,null,n),e.lanes=0,e}function Ms(e,n,l){return Vl(n,e.child,null,l),e=Rs(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function sp(e,n,l){e.lanes|=n;var o=e.alternate;o!==null&&(o.lanes|=n),Fu(e.return,n,l)}function Ds(e,n,l,o,f,d){var x=e.memoizedState;x===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:l,tailMode:f,treeForkCount:d}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=l,x.tailMode=f,x.treeForkCount=d)}function cp(e,n,l){var o=n.pendingProps,f=o.revealOrder,d=o.tail;o=o.children;var x=tn.current,w=(x&2)!==0;if(w?(x=x&1|2,n.flags|=128):x&=1,k(tn,x),xn(e,n,o,l),o=je?pi:0,!w&&e!==null&&(e.flags&128)!==0)e:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&sp(e,l,n);else if(e.tag===19)sp(e,l,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break e;for(;e.sibling===null;){if(e.return===null||e.return===n)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(f){case"forwards":for(l=n.child,f=null;l!==null;)e=l.alternate,e!==null&&Yr(e)===null&&(f=l),l=l.sibling;l=f,l===null?(f=n.child,n.child=null):(f=l.sibling,l.sibling=null),Ds(n,!1,f,l,d,o);break;case"backwards":case"unstable_legacy-backwards":for(l=null,f=n.child,n.child=null;f!==null;){if(e=f.alternate,e!==null&&Yr(e)===null){n.child=f;break}e=f.sibling,f.sibling=l,l=f,f=e}Ds(n,!0,l,null,d,o);break;case"together":Ds(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function Ot(e,n,l){if(e!==null&&(n.dependencies=e.dependencies),cl|=n.lanes,(l&n.childLanes)===0)if(e!==null){if(Sa(e,n,l,!1),(l&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,l=zt(e,e.pendingProps),n.child=l,l.return=n;e.sibling!==null;)e=e.sibling,l=l.sibling=zt(e,e.pendingProps),l.return=n;l.sibling=null}return n.child}function js(e,n){return(e.lanes&n)!==0?!0:(e=e.dependencies,!!(e!==null&&Lr(e)))}function Y0(e,n,l){switch(n.tag){case 3:Xe(n,n.stateNode.containerInfo),tl(n,an,e.memoizedState.cache),Ll();break;case 27:case 5:An(n);break;case 4:Xe(n,n.stateNode.containerInfo);break;case 10:tl(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,is(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(rl(n),n.flags|=128,null):(l&n.child.childLanes)!==0?up(e,n,l):(rl(n),e=Ot(e,n,l),e!==null?e.sibling:null);rl(n);break;case 19:var f=(e.flags&128)!==0;if(o=(l&n.childLanes)!==0,o||(Sa(e,n,l,!1),o=(l&n.childLanes)!==0),f){if(o)return cp(e,n,l);n.flags|=128}if(f=n.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),k(tn,tn.current),o)break;return null;case 22:return n.lanes=0,tp(e,n,l,n.pendingProps);case 24:tl(n,an,e.memoizedState.cache)}return Ot(e,n,l)}function fp(e,n,l){if(e!==null)if(e.memoizedProps!==n.pendingProps)on=!0;else{if(!js(e,l)&&(n.flags&128)===0)return on=!1,Y0(e,n,l);on=(e.flags&131072)!==0}else on=!1,je&&(n.flags&1048576)!==0&&Gd(n,pi,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(e=ql(n.elementType),n.type=e,typeof e=="function")Uu(e)?(o=Yl(e,o),n.tag=1,n=rp(null,n,e,o,l)):(n.tag=0,n=Ts(null,n,e,o,l));else{if(e!=null){var f=e.$$typeof;if(f===Z){n.tag=11,n=Wh(null,n,e,o,l);break e}else if(f===ee){n.tag=14,n=ep(null,n,e,o,l);break e}}throw n=re(e)||e,Error(r(306,n,""))}}return n;case 0:return Ts(e,n,n.type,n.pendingProps,l);case 1:return o=n.type,f=Yl(o,n.pendingProps),rp(e,n,o,f,l);case 3:e:{if(Xe(n,n.stateNode.containerInfo),e===null)throw Error(r(387));o=n.pendingProps;var d=n.memoizedState;f=d.element,es(e,n),wi(n,o,null,l);var x=n.memoizedState;if(o=x.cache,tl(n,an,o),o!==d.cache&&Zu(n,[an],l,!0),Si(),o=x.element,d.isDehydrated)if(d={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=d,n.memoizedState=d,n.flags&256){n=op(e,n,o,l);break e}else if(o!==f){f=nt(Error(r(424)),n),mi(f),n=op(e,n,o,l);break e}else for(e=n.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,$e=rt(e.firstChild),gn=n,je=!0,el=null,at=!0,l=th(n,null,o,l),n.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Ll(),o===f){n=Ot(e,n,l);break e}xn(e,n,o,l)}n=n.child}return n;case 26:return no(e,n),e===null?(l=wm(n.type,null,n.pendingProps,null))?n.memoizedState=l:je||(l=n.type,e=n.pendingProps,o=bo(oe.current).createElement(l),o[mn]=n,o[Rn]=e,bn(o,l,e),hn(o),n.stateNode=o):n.memoizedState=wm(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return An(n),e===null&&je&&(o=n.stateNode=bm(n.type,n.pendingProps,oe.current),gn=n,at=!0,f=$e,ml(n.type)?(hc=f,$e=rt(o.firstChild)):$e=f),xn(e,n,n.pendingProps.children,l),no(e,n),e===null&&(n.flags|=4194304),n.child;case 5:return e===null&&je&&((f=o=$e)&&(o=vb(o,n.type,n.pendingProps,at),o!==null?(n.stateNode=o,gn=n,$e=rt(o.firstChild),at=!1,f=!0):f=!1),f||nl(n)),An(n),f=n.type,d=n.pendingProps,x=e!==null?e.memoizedProps:null,o=d.children,uc(f,d)?o=null:x!==null&&uc(f,x)&&(n.flags|=32),n.memoizedState!==null&&(f=os(e,n,O0,null,null,l),Vi._currentValue=f),no(e,n),xn(e,n,o,l),n.child;case 6:return e===null&&je&&((e=l=$e)&&(l=Sb(l,n.pendingProps,at),l!==null?(n.stateNode=l,gn=n,$e=null,e=!0):e=!1),e||nl(n)),null;case 13:return up(e,n,l);case 4:return Xe(n,n.stateNode.containerInfo),o=n.pendingProps,e===null?n.child=Vl(n,null,o,l):xn(e,n,o,l),n.child;case 11:return Wh(e,n,n.type,n.pendingProps,l);case 7:return xn(e,n,n.pendingProps,l),n.child;case 8:return xn(e,n,n.pendingProps.children,l),n.child;case 12:return xn(e,n,n.pendingProps.children,l),n.child;case 10:return o=n.pendingProps,tl(n,n.type,o.value),xn(e,n,o.children,l),n.child;case 9:return f=n.type._context,o=n.pendingProps.children,Hl(n),f=yn(f),o=o(f),n.flags|=1,xn(e,n,o,l),n.child;case 14:return ep(e,n,n.type,n.pendingProps,l);case 15:return np(e,n,n.type,n.pendingProps,l);case 19:return cp(e,n,l);case 31:return G0(e,n,l);case 22:return tp(e,n,l,n.pendingProps);case 24:return Hl(n),o=yn(an),e===null?(f=Pu(),f===null&&(f=Fe,d=Ku(),f.pooledCache=d,d.refCount++,d!==null&&(f.pooledCacheLanes|=l),f=d),n.memoizedState={parent:o,cache:f},Wu(n),tl(n,an,f)):((e.lanes&l)!==0&&(es(e,n),wi(n,null,null,l),Si()),f=e.memoizedState,d=n.memoizedState,f.parent!==o?(f={parent:o,cache:o},n.memoizedState=f,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=f),tl(n,an,o)):(o=d.cache,tl(n,an,o),o!==f.cache&&Zu(n,[an],l,!0))),xn(e,n,n.pendingProps.children,l),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Lt(e){e.flags|=4}function Os(e,n,l,o,f){if((n=(e.mode&32)!==0)&&(n=!1),n){if(e.flags|=16777216,(f&335544128)===f)if(e.stateNode.complete)e.flags|=8192;else if(Hp())e.flags|=8192;else throw Il=qr,Ju}else e.flags&=-16777217}function dp(e,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Tm(n))if(Hp())e.flags|=8192;else throw Il=qr,Ju}function lo(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Xf():536870912,e.lanes|=n,Da|=n)}function Ni(e,n){if(!je)switch(e.tailMode){case"hidden":n=e.tail;for(var l=null;n!==null;)n.alternate!==null&&(l=n),n=n.sibling;l===null?e.tail=null:l.sibling=null;break;case"collapsed":l=e.tail;for(var o=null;l!==null;)l.alternate!==null&&(o=l),l=l.sibling;o===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:o.sibling=null}}function Pe(e){var n=e.alternate!==null&&e.alternate.child===e.child,l=0,o=0;if(n)for(var f=e.child;f!==null;)l|=f.lanes|f.childLanes,o|=f.subtreeFlags&65011712,o|=f.flags&65011712,f.return=e,f=f.sibling;else for(f=e.child;f!==null;)l|=f.lanes|f.childLanes,o|=f.subtreeFlags,o|=f.flags,f.return=e,f=f.sibling;return e.subtreeFlags|=o,e.childLanes=l,n}function X0(e,n,l){var o=n.pendingProps;switch(Gu(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Pe(n),null;case 1:return Pe(n),null;case 3:return l=n.stateNode,o=null,e!==null&&(o=e.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),Mt(an),be(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(e===null||e.child===null)&&(va(n)?Lt(n):e===null||e.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,Xu())),Pe(n),null;case 26:var f=n.type,d=n.memoizedState;return e===null?(Lt(n),d!==null?(Pe(n),dp(n,d)):(Pe(n),Os(n,f,null,o,l))):d?d!==e.memoizedState?(Lt(n),Pe(n),dp(n,d)):(Pe(n),n.flags&=-16777217):(e=e.memoizedProps,e!==o&&Lt(n),Pe(n),Os(n,f,e,o,l)),null;case 27:if(Nn(n),l=oe.current,f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Lt(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Pe(n),null}e=ae.current,va(n)?Xd(n):(e=bm(f,o,l),n.stateNode=e,Lt(n))}return Pe(n),null;case 5:if(Nn(n),f=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==o&&Lt(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Pe(n),null}if(d=ae.current,va(n))Xd(n);else{var x=bo(oe.current);switch(d){case 1:d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case 2:d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;default:switch(f){case"svg":d=x.createElementNS("http://www.w3.org/2000/svg",f);break;case"math":d=x.createElementNS("http://www.w3.org/1998/Math/MathML",f);break;case"script":d=x.createElement("div"),d.innerHTML="<script><\/script>",d=d.removeChild(d.firstChild);break;case"select":d=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?d.multiple=!0:o.size&&(d.size=o.size);break;default:d=typeof o.is=="string"?x.createElement(f,{is:o.is}):x.createElement(f)}}d[mn]=n,d[Rn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)d.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=d;e:switch(bn(d,f,o),f){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&Lt(n)}}return Pe(n),Os(n,n.type,e===null?null:e.memoizedProps,n.pendingProps,l),null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==o&&Lt(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(e=oe.current,va(n)){if(e=n.stateNode,l=n.memoizedProps,o=null,f=gn,f!==null)switch(f.tag){case 27:case 5:o=f.memoizedProps}e[mn]=n,e=!!(e.nodeValue===l||o!==null&&o.suppressHydrationWarning===!0||um(e.nodeValue,l)),e||nl(n,!0)}else e=bo(e).createTextNode(o),e[mn]=n,n.stateNode=e}return Pe(n),null;case 31:if(l=n.memoizedState,e===null||e.memoizedState!==null){if(o=va(n),l!==null){if(e===null){if(!o)throw Error(r(318));if(e=n.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(557));e[mn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),e=!1}else l=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),e=!0;if(!e)return n.flags&256?(Yn(n),n):(Yn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Pe(n),null;case 13:if(o=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(f=va(n),o!==null&&o.dehydrated!==null){if(e===null){if(!f)throw Error(r(318));if(f=n.memoizedState,f=f!==null?f.dehydrated:null,!f)throw Error(r(317));f[mn]=n}else Ll(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Pe(n),f=!1}else f=Xu(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=f),f=!0;if(!f)return n.flags&256?(Yn(n),n):(Yn(n),null)}return Yn(n),(n.flags&128)!==0?(n.lanes=l,n):(l=o!==null,e=e!==null&&e.memoizedState!==null,l&&(o=n.child,f=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(f=o.alternate.memoizedState.cachePool.pool),d=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(d=o.memoizedState.cachePool.pool),d!==f&&(o.flags|=2048)),l!==e&&l&&(n.child.flags|=8192),lo(n,n.updateQueue),Pe(n),null);case 4:return be(),e===null&&lc(n.stateNode.containerInfo),Pe(n),null;case 10:return Mt(n.type),Pe(n),null;case 19:if(Y(tn),o=n.memoizedState,o===null)return Pe(n),null;if(f=(n.flags&128)!==0,d=o.rendering,d===null)if(f)Ni(o,!1);else{if(nn!==0||e!==null&&(e.flags&128)!==0)for(e=n.child;e!==null;){if(d=Yr(e),d!==null){for(n.flags|=128,Ni(o,!1),e=d.updateQueue,n.updateQueue=e,lo(n,e),n.subtreeFlags=0,e=l,l=n.child;l!==null;)qd(l,e),l=l.sibling;return k(tn,tn.current&1|2),je&&_t(n,o.treeForkCount),n.child}e=e.sibling}o.tail!==null&&kn()>uo&&(n.flags|=128,f=!0,Ni(o,!1),n.lanes=4194304)}else{if(!f)if(e=Yr(d),e!==null){if(n.flags|=128,f=!0,e=e.updateQueue,n.updateQueue=e,lo(n,e),Ni(o,!0),o.tail===null&&o.tailMode==="hidden"&&!d.alternate&&!je)return Pe(n),null}else 2*kn()-o.renderingStartTime>uo&&l!==536870912&&(n.flags|=128,f=!0,Ni(o,!1),n.lanes=4194304);o.isBackwards?(d.sibling=n.child,n.child=d):(e=o.last,e!==null?e.sibling=d:n.child=d,o.last=d)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=kn(),e.sibling=null,l=tn.current,k(tn,f?l&1|2:l&1),je&&_t(n,o.treeForkCount),e):(Pe(n),null);case 22:case 23:return Yn(n),as(),o=n.memoizedState!==null,e!==null?e.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(l&536870912)!==0&&(n.flags&128)===0&&(Pe(n),n.subtreeFlags&6&&(n.flags|=8192)):Pe(n),l=n.updateQueue,l!==null&&lo(n,l.retryQueue),l=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==l&&(n.flags|=2048),e!==null&&Y(Ul),null;case 24:return l=null,e!==null&&(l=e.memoizedState.cache),n.memoizedState.cache!==l&&(n.flags|=2048),Mt(an),Pe(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Q0(e,n){switch(Gu(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Mt(an),be(),e=n.flags,(e&65536)!==0&&(e&128)===0?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return Nn(n),null;case 31:if(n.memoizedState!==null){if(Yn(n),n.alternate===null)throw Error(r(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 13:if(Yn(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Ll()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Y(tn),null;case 4:return be(),null;case 10:return Mt(n.type),null;case 22:case 23:return Yn(n),as(),e!==null&&Y(Ul),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Mt(an),null;case 25:return null;default:return null}}function hp(e,n){switch(Gu(n),n.tag){case 3:Mt(an),be();break;case 26:case 27:case 5:Nn(n);break;case 4:be();break;case 31:n.memoizedState!==null&&Yn(n);break;case 13:Yn(n);break;case 19:Y(tn);break;case 10:Mt(n.type);break;case 22:case 23:Yn(n),as(),e!==null&&Y(Ul);break;case 24:Mt(an)}}function zi(e,n){try{var l=n.updateQueue,o=l!==null?l.lastEffect:null;if(o!==null){var f=o.next;l=f;do{if((l.tag&e)===e){o=void 0;var d=l.create,x=l.inst;o=d(),x.destroy=o}l=l.next}while(l!==f)}}catch(w){Ie(n,n.return,w)}}function ul(e,n,l){try{var o=n.updateQueue,f=o!==null?o.lastEffect:null;if(f!==null){var d=f.next;o=d;do{if((o.tag&e)===e){var x=o.inst,w=x.destroy;if(w!==void 0){x.destroy=void 0,f=n;var z=l,U=w;try{U()}catch(G){Ie(f,z,G)}}}o=o.next}while(o!==d)}}catch(G){Ie(n,n.return,G)}}function pp(e){var n=e.updateQueue;if(n!==null){var l=e.stateNode;try{ah(n,l)}catch(o){Ie(e,e.return,o)}}}function mp(e,n,l){l.props=Yl(e.type,e.memoizedProps),l.state=e.memoizedState;try{l.componentWillUnmount()}catch(o){Ie(e,n,o)}}function _i(e,n){try{var l=e.ref;if(l!==null){switch(e.tag){case 26:case 27:case 5:var o=e.stateNode;break;case 30:o=e.stateNode;break;default:o=e.stateNode}typeof l=="function"?e.refCleanup=l(o):l.current=o}}catch(f){Ie(e,n,f)}}function bt(e,n){var l=e.ref,o=e.refCleanup;if(l!==null)if(typeof o=="function")try{o()}catch(f){Ie(e,n,f)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof l=="function")try{l(null)}catch(f){Ie(e,n,f)}else l.current=null}function gp(e){var n=e.type,l=e.memoizedProps,o=e.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":l.autoFocus&&o.focus();break e;case"img":l.src?o.src=l.src:l.srcSet&&(o.srcset=l.srcSet)}}catch(f){Ie(e,e.return,f)}}function Ls(e,n,l){try{var o=e.stateNode;pb(o,e.type,l,n),o[Rn]=n}catch(f){Ie(e,e.return,f)}}function yp(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ml(e.type)||e.tag===4}function Bs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||yp(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ml(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Hs(e,n,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?(l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l).insertBefore(e,n):(n=l.nodeType===9?l.body:l.nodeName==="HTML"?l.ownerDocument.body:l,n.appendChild(e),l=l._reactRootContainer,l!=null||n.onclick!==null||(n.onclick=Tt));else if(o!==4&&(o===27&&ml(e.type)&&(l=e.stateNode,n=null),e=e.child,e!==null))for(Hs(e,n,l),e=e.sibling;e!==null;)Hs(e,n,l),e=e.sibling}function ao(e,n,l){var o=e.tag;if(o===5||o===6)e=e.stateNode,n?l.insertBefore(e,n):l.appendChild(e);else if(o!==4&&(o===27&&ml(e.type)&&(l=e.stateNode),e=e.child,e!==null))for(ao(e,n,l),e=e.sibling;e!==null;)ao(e,n,l),e=e.sibling}function xp(e){var n=e.stateNode,l=e.memoizedProps;try{for(var o=e.type,f=n.attributes;f.length;)n.removeAttributeNode(f[0]);bn(n,o,l),n[mn]=e,n[Rn]=l}catch(d){Ie(e,e.return,d)}}var Bt=!1,un=!1,Us=!1,bp=typeof WeakSet=="function"?WeakSet:Set,pn=null;function F0(e,n){if(e=e.containerInfo,rc=Co,e=Rd(e),Mu(e)){if("selectionStart"in e)var l={start:e.selectionStart,end:e.selectionEnd};else e:{l=(l=e.ownerDocument)&&l.defaultView||window;var o=l.getSelection&&l.getSelection();if(o&&o.rangeCount!==0){l=o.anchorNode;var f=o.anchorOffset,d=o.focusNode;o=o.focusOffset;try{l.nodeType,d.nodeType}catch{l=null;break e}var x=0,w=-1,z=-1,U=0,G=0,F=e,I=null;n:for(;;){for(var V;F!==l||f!==0&&F.nodeType!==3||(w=x+f),F!==d||o!==0&&F.nodeType!==3||(z=x+o),F.nodeType===3&&(x+=F.nodeValue.length),(V=F.firstChild)!==null;)I=F,F=V;for(;;){if(F===e)break n;if(I===l&&++U===f&&(w=x),I===d&&++G===o&&(z=x),(V=F.nextSibling)!==null)break;F=I,I=F.parentNode}F=V}l=w===-1||z===-1?null:{start:w,end:z}}else l=null}l=l||{start:0,end:0}}else l=null;for(oc={focusedElem:e,selectionRange:l},Co=!1,pn=n;pn!==null;)if(n=pn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,pn=e;else for(;pn!==null;){switch(n=pn,d=n.alternate,e=n.flags,n.tag){case 0:if((e&4)!==0&&(e=n.updateQueue,e=e!==null?e.events:null,e!==null))for(l=0;l<e.length;l++)f=e[l],f.ref.impl=f.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&d!==null){e=void 0,l=n,f=d.memoizedProps,d=d.memoizedState,o=l.stateNode;try{var ce=Yl(l.type,f);e=o.getSnapshotBeforeUpdate(ce,d),o.__reactInternalSnapshotBeforeUpdate=e}catch(ge){Ie(l,l.return,ge)}}break;case 3:if((e&1024)!==0){if(e=n.stateNode.containerInfo,l=e.nodeType,l===9)cc(e);else if(l===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":cc(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,pn=e;break}pn=n.return}}function vp(e,n,l){var o=l.flags;switch(l.tag){case 0:case 11:case 15:Ut(e,l),o&4&&zi(5,l);break;case 1:if(Ut(e,l),o&4)if(e=l.stateNode,n===null)try{e.componentDidMount()}catch(x){Ie(l,l.return,x)}else{var f=Yl(l.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(f,n,e.__reactInternalSnapshotBeforeUpdate)}catch(x){Ie(l,l.return,x)}}o&64&&pp(l),o&512&&_i(l,l.return);break;case 3:if(Ut(e,l),o&64&&(e=l.updateQueue,e!==null)){if(n=null,l.child!==null)switch(l.child.tag){case 27:case 5:n=l.child.stateNode;break;case 1:n=l.child.stateNode}try{ah(e,n)}catch(x){Ie(l,l.return,x)}}break;case 27:n===null&&o&4&&xp(l);case 26:case 5:Ut(e,l),n===null&&o&4&&gp(l),o&512&&_i(l,l.return);break;case 12:Ut(e,l);break;case 31:Ut(e,l),o&4&&Ap(e,l);break;case 13:Ut(e,l),o&4&&kp(e,l),o&64&&(e=l.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(l=tb.bind(null,l),wb(e,l))));break;case 22:if(o=l.memoizedState!==null||Bt,!o){n=n!==null&&n.memoizedState!==null||un,f=Bt;var d=un;Bt=o,(un=n)&&!d?qt(e,l,(l.subtreeFlags&8772)!==0):Ut(e,l),Bt=f,un=d}break;case 30:break;default:Ut(e,l)}}function Sp(e){var n=e.alternate;n!==null&&(e.alternate=null,Sp(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&mu(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,Dn=!1;function Ht(e,n,l){for(l=l.child;l!==null;)wp(e,n,l),l=l.sibling}function wp(e,n,l){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(En,l)}catch{}switch(l.tag){case 26:un||bt(l,n),Ht(e,n,l),l.memoizedState?l.memoizedState.count--:l.stateNode&&(l=l.stateNode,l.parentNode.removeChild(l));break;case 27:un||bt(l,n);var o=Je,f=Dn;ml(l.type)&&(Je=l.stateNode,Dn=!1),Ht(e,n,l),Ui(l.stateNode),Je=o,Dn=f;break;case 5:un||bt(l,n);case 6:if(o=Je,f=Dn,Je=null,Ht(e,n,l),Je=o,Dn=f,Je!==null)if(Dn)try{(Je.nodeType===9?Je.body:Je.nodeName==="HTML"?Je.ownerDocument.body:Je).removeChild(l.stateNode)}catch(d){Ie(l,n,d)}else try{Je.removeChild(l.stateNode)}catch(d){Ie(l,n,d)}break;case 18:Je!==null&&(Dn?(e=Je,pm(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,l.stateNode),Ia(e)):pm(Je,l.stateNode));break;case 4:o=Je,f=Dn,Je=l.stateNode.containerInfo,Dn=!0,Ht(e,n,l),Je=o,Dn=f;break;case 0:case 11:case 14:case 15:ul(2,l,n),un||ul(4,l,n),Ht(e,n,l);break;case 1:un||(bt(l,n),o=l.stateNode,typeof o.componentWillUnmount=="function"&&mp(l,n,o)),Ht(e,n,l);break;case 21:Ht(e,n,l);break;case 22:un=(o=un)||l.memoizedState!==null,Ht(e,n,l),un=o;break;default:Ht(e,n,l)}}function Ap(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ia(e)}catch(l){Ie(n,n.return,l)}}}function kp(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ia(e)}catch(l){Ie(n,n.return,l)}}function Z0(e){switch(e.tag){case 31:case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new bp),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new bp),n;default:throw Error(r(435,e.tag))}}function io(e,n){var l=Z0(e);n.forEach(function(o){if(!l.has(o)){l.add(o);var f=lb.bind(null,e,o);o.then(f,f)}})}function jn(e,n){var l=n.deletions;if(l!==null)for(var o=0;o<l.length;o++){var f=l[o],d=e,x=n,w=x;e:for(;w!==null;){switch(w.tag){case 27:if(ml(w.type)){Je=w.stateNode,Dn=!1;break e}break;case 5:Je=w.stateNode,Dn=!1;break e;case 3:case 4:Je=w.stateNode.containerInfo,Dn=!0;break e}w=w.return}if(Je===null)throw Error(r(160));wp(d,x,f),Je=null,Dn=!1,d=f.alternate,d!==null&&(d.return=null),f.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)Ep(n,e),n=n.sibling}var dt=null;function Ep(e,n){var l=e.alternate,o=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:jn(n,e),On(e),o&4&&(ul(3,e,e.return),zi(3,e),ul(5,e,e.return));break;case 1:jn(n,e),On(e),o&512&&(un||l===null||bt(l,l.return)),o&64&&Bt&&(e=e.updateQueue,e!==null&&(o=e.callbacks,o!==null&&(l=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=l===null?o:l.concat(o))));break;case 26:var f=dt;if(jn(n,e),On(e),o&512&&(un||l===null||bt(l,l.return)),o&4){var d=l!==null?l.memoizedState:null;if(o=e.memoizedState,l===null)if(o===null)if(e.stateNode===null){e:{o=e.type,l=e.memoizedProps,f=f.ownerDocument||f;n:switch(o){case"title":d=f.getElementsByTagName("title")[0],(!d||d[li]||d[mn]||d.namespaceURI==="http://www.w3.org/2000/svg"||d.hasAttribute("itemprop"))&&(d=f.createElement(o),f.head.insertBefore(d,f.querySelector("head > title"))),bn(d,o,l),d[mn]=e,hn(d),o=d;break e;case"link":var x=Em("link","href",f).get(o+(l.href||""));if(x){for(var w=0;w<x.length;w++)if(d=x[w],d.getAttribute("href")===(l.href==null||l.href===""?null:l.href)&&d.getAttribute("rel")===(l.rel==null?null:l.rel)&&d.getAttribute("title")===(l.title==null?null:l.title)&&d.getAttribute("crossorigin")===(l.crossOrigin==null?null:l.crossOrigin)){x.splice(w,1);break n}}d=f.createElement(o),bn(d,o,l),f.head.appendChild(d);break;case"meta":if(x=Em("meta","content",f).get(o+(l.content||""))){for(w=0;w<x.length;w++)if(d=x[w],d.getAttribute("content")===(l.content==null?null:""+l.content)&&d.getAttribute("name")===(l.name==null?null:l.name)&&d.getAttribute("property")===(l.property==null?null:l.property)&&d.getAttribute("http-equiv")===(l.httpEquiv==null?null:l.httpEquiv)&&d.getAttribute("charset")===(l.charSet==null?null:l.charSet)){x.splice(w,1);break n}}d=f.createElement(o),bn(d,o,l),f.head.appendChild(d);break;default:throw Error(r(468,o))}d[mn]=e,hn(d),o=d}e.stateNode=o}else Cm(f,e.type,e.stateNode);else e.stateNode=km(f,o,e.memoizedProps);else d!==o?(d===null?l.stateNode!==null&&(l=l.stateNode,l.parentNode.removeChild(l)):d.count--,o===null?Cm(f,e.type,e.stateNode):km(f,o,e.memoizedProps)):o===null&&e.stateNode!==null&&Ls(e,e.memoizedProps,l.memoizedProps)}break;case 27:jn(n,e),On(e),o&512&&(un||l===null||bt(l,l.return)),l!==null&&o&4&&Ls(e,e.memoizedProps,l.memoizedProps);break;case 5:if(jn(n,e),On(e),o&512&&(un||l===null||bt(l,l.return)),e.flags&32){f=e.stateNode;try{ca(f,"")}catch(ce){Ie(e,e.return,ce)}}o&4&&e.stateNode!=null&&(f=e.memoizedProps,Ls(e,f,l!==null?l.memoizedProps:f)),o&1024&&(Us=!0);break;case 6:if(jn(n,e),On(e),o&4){if(e.stateNode===null)throw Error(r(162));o=e.memoizedProps,l=e.stateNode;try{l.nodeValue=o}catch(ce){Ie(e,e.return,ce)}}break;case 3:if(wo=null,f=dt,dt=vo(n.containerInfo),jn(n,e),dt=f,On(e),o&4&&l!==null&&l.memoizedState.isDehydrated)try{Ia(n.containerInfo)}catch(ce){Ie(e,e.return,ce)}Us&&(Us=!1,Cp(e));break;case 4:o=dt,dt=vo(e.stateNode.containerInfo),jn(n,e),On(e),dt=o;break;case 12:jn(n,e),On(e);break;case 31:jn(n,e),On(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,io(e,o)));break;case 13:jn(n,e),On(e),e.child.flags&8192&&e.memoizedState!==null!=(l!==null&&l.memoizedState!==null)&&(oo=kn()),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,io(e,o)));break;case 22:f=e.memoizedState!==null;var z=l!==null&&l.memoizedState!==null,U=Bt,G=un;if(Bt=U||f,un=G||z,jn(n,e),un=G,Bt=U,On(e),o&8192)e:for(n=e.stateNode,n._visibility=f?n._visibility&-2:n._visibility|1,f&&(l===null||z||Bt||un||Xl(e)),l=null,n=e;;){if(n.tag===5||n.tag===26){if(l===null){z=l=n;try{if(d=z.stateNode,f)x=d.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{w=z.stateNode;var F=z.memoizedProps.style,I=F!=null&&F.hasOwnProperty("display")?F.display:null;w.style.display=I==null||typeof I=="boolean"?"":(""+I).trim()}}catch(ce){Ie(z,z.return,ce)}}}else if(n.tag===6){if(l===null){z=n;try{z.stateNode.nodeValue=f?"":z.memoizedProps}catch(ce){Ie(z,z.return,ce)}}}else if(n.tag===18){if(l===null){z=n;try{var V=z.stateNode;f?mm(V,!0):mm(z.stateNode,!1)}catch(ce){Ie(z,z.return,ce)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;l===n&&(l=null),n=n.return}l===n&&(l=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=e.updateQueue,o!==null&&(l=o.retryQueue,l!==null&&(o.retryQueue=null,io(e,l))));break;case 19:jn(n,e),On(e),o&4&&(o=e.updateQueue,o!==null&&(e.updateQueue=null,io(e,o)));break;case 30:break;case 21:break;default:jn(n,e),On(e)}}function On(e){var n=e.flags;if(n&2){try{for(var l,o=e.return;o!==null;){if(yp(o)){l=o;break}o=o.return}if(l==null)throw Error(r(160));switch(l.tag){case 27:var f=l.stateNode,d=Bs(e);ao(e,d,f);break;case 5:var x=l.stateNode;l.flags&32&&(ca(x,""),l.flags&=-33);var w=Bs(e);ao(e,w,x);break;case 3:case 4:var z=l.stateNode.containerInfo,U=Bs(e);Hs(e,U,z);break;default:throw Error(r(161))}}catch(G){Ie(e,e.return,G)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Cp(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Cp(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Ut(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)vp(e,n.alternate,n),n=n.sibling}function Xl(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ul(4,n,n.return),Xl(n);break;case 1:bt(n,n.return);var l=n.stateNode;typeof l.componentWillUnmount=="function"&&mp(n,n.return,l),Xl(n);break;case 27:Ui(n.stateNode);case 26:case 5:bt(n,n.return),Xl(n);break;case 22:n.memoizedState===null&&Xl(n);break;case 30:Xl(n);break;default:Xl(n)}e=e.sibling}}function qt(e,n,l){for(l=l&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,f=e,d=n,x=d.flags;switch(d.tag){case 0:case 11:case 15:qt(f,d,l),zi(4,d);break;case 1:if(qt(f,d,l),o=d,f=o.stateNode,typeof f.componentDidMount=="function")try{f.componentDidMount()}catch(U){Ie(o,o.return,U)}if(o=d,f=o.updateQueue,f!==null){var w=o.stateNode;try{var z=f.shared.hiddenCallbacks;if(z!==null)for(f.shared.hiddenCallbacks=null,f=0;f<z.length;f++)lh(z[f],w)}catch(U){Ie(o,o.return,U)}}l&&x&64&&pp(d),_i(d,d.return);break;case 27:xp(d);case 26:case 5:qt(f,d,l),l&&o===null&&x&4&&gp(d),_i(d,d.return);break;case 12:qt(f,d,l);break;case 31:qt(f,d,l),l&&x&4&&Ap(f,d);break;case 13:qt(f,d,l),l&&x&4&&kp(f,d);break;case 22:d.memoizedState===null&&qt(f,d,l),_i(d,d.return);break;case 30:break;default:qt(f,d,l)}n=n.sibling}}function qs(e,n){var l=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(l=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==l&&(e!=null&&e.refCount++,l!=null&&gi(l))}function Is(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&gi(e))}function ht(e,n,l,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Tp(e,n,l,o),n=n.sibling}function Tp(e,n,l,o){var f=n.flags;switch(n.tag){case 0:case 11:case 15:ht(e,n,l,o),f&2048&&zi(9,n);break;case 1:ht(e,n,l,o);break;case 3:ht(e,n,l,o),f&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&gi(e)));break;case 12:if(f&2048){ht(e,n,l,o),e=n.stateNode;try{var d=n.memoizedProps,x=d.id,w=d.onPostCommit;typeof w=="function"&&w(x,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(z){Ie(n,n.return,z)}}else ht(e,n,l,o);break;case 31:ht(e,n,l,o);break;case 13:ht(e,n,l,o);break;case 23:break;case 22:d=n.stateNode,x=n.alternate,n.memoizedState!==null?d._visibility&2?ht(e,n,l,o):Ri(e,n):d._visibility&2?ht(e,n,l,o):(d._visibility|=2,_a(e,n,l,o,(n.subtreeFlags&10256)!==0||!1)),f&2048&&qs(x,n);break;case 24:ht(e,n,l,o),f&2048&&Is(n.alternate,n);break;default:ht(e,n,l,o)}}function _a(e,n,l,o,f){for(f=f&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var d=e,x=n,w=l,z=o,U=x.flags;switch(x.tag){case 0:case 11:case 15:_a(d,x,w,z,f),zi(8,x);break;case 23:break;case 22:var G=x.stateNode;x.memoizedState!==null?G._visibility&2?_a(d,x,w,z,f):Ri(d,x):(G._visibility|=2,_a(d,x,w,z,f)),f&&U&2048&&qs(x.alternate,x);break;case 24:_a(d,x,w,z,f),f&&U&2048&&Is(x.alternate,x);break;default:_a(d,x,w,z,f)}n=n.sibling}}function Ri(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var l=e,o=n,f=o.flags;switch(o.tag){case 22:Ri(l,o),f&2048&&qs(o.alternate,o);break;case 24:Ri(l,o),f&2048&&Is(o.alternate,o);break;default:Ri(l,o)}n=n.sibling}}var Mi=8192;function Ra(e,n,l){if(e.subtreeFlags&Mi)for(e=e.child;e!==null;)Np(e,n,l),e=e.sibling}function Np(e,n,l){switch(e.tag){case 26:Ra(e,n,l),e.flags&Mi&&e.memoizedState!==null&&jb(l,dt,e.memoizedState,e.memoizedProps);break;case 5:Ra(e,n,l);break;case 3:case 4:var o=dt;dt=vo(e.stateNode.containerInfo),Ra(e,n,l),dt=o;break;case 22:e.memoizedState===null&&(o=e.alternate,o!==null&&o.memoizedState!==null?(o=Mi,Mi=16777216,Ra(e,n,l),Mi=o):Ra(e,n,l));break;default:Ra(e,n,l)}}function zp(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function Di(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var o=n[l];pn=o,Rp(o,e)}zp(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)_p(e),e=e.sibling}function _p(e){switch(e.tag){case 0:case 11:case 15:Di(e),e.flags&2048&&ul(9,e,e.return);break;case 3:Di(e);break;case 12:Di(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&2&&(e.return===null||e.return.tag!==13)?(n._visibility&=-3,ro(e)):Di(e);break;default:Di(e)}}function ro(e){var n=e.deletions;if((e.flags&16)!==0){if(n!==null)for(var l=0;l<n.length;l++){var o=n[l];pn=o,Rp(o,e)}zp(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ul(8,n,n.return),ro(n);break;case 22:l=n.stateNode,l._visibility&2&&(l._visibility&=-3,ro(n));break;default:ro(n)}e=e.sibling}}function Rp(e,n){for(;pn!==null;){var l=pn;switch(l.tag){case 0:case 11:case 15:ul(8,l,n);break;case 23:case 22:if(l.memoizedState!==null&&l.memoizedState.cachePool!==null){var o=l.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:gi(l.memoizedState.cache)}if(o=l.child,o!==null)o.return=l,pn=o;else e:for(l=e;pn!==null;){o=pn;var f=o.sibling,d=o.return;if(Sp(o),o===l){pn=null;break e}if(f!==null){f.return=d,pn=f;break e}pn=d}}}var K0={getCacheForType:function(e){var n=yn(an),l=n.data.get(e);return l===void 0&&(l=e(),n.data.set(e,l)),l},cacheSignal:function(){return yn(an).controller.signal}},$0=typeof WeakMap=="function"?WeakMap:Map,He=0,Fe=null,Ne=null,Re=0,qe=0,Xn=null,sl=!1,Ma=!1,Vs=!1,It=0,nn=0,cl=0,Ql=0,Gs=0,Qn=0,Da=0,ji=null,Ln=null,Ys=!1,oo=0,Mp=0,uo=1/0,so=null,fl=null,fn=0,dl=null,ja=null,Vt=0,Xs=0,Qs=null,Dp=null,Oi=0,Fs=null;function Fn(){return(He&2)!==0&&Re!==0?Re&-Re:B.T!==null?Ws():Kf()}function jp(){if(Qn===0)if((Re&536870912)===0||je){var e=yr;yr<<=1,(yr&3932160)===0&&(yr=262144),Qn=e}else Qn=536870912;return e=Gn.current,e!==null&&(e.flags|=32),Qn}function Bn(e,n,l){(e===Fe&&(qe===2||qe===9)||e.cancelPendingCommit!==null)&&(Oa(e,0),hl(e,Re,Qn,!1)),ti(e,l),((He&2)===0||e!==Fe)&&(e===Fe&&((He&2)===0&&(Ql|=l),nn===4&&hl(e,Re,Qn,!1)),vt(e))}function Op(e,n,l){if((He&6)!==0)throw Error(r(327));var o=!l&&(n&127)===0&&(n&e.expiredLanes)===0||ni(e,n),f=o?W0(e,n):Ks(e,n,!0),d=o;do{if(f===0){Ma&&!o&&hl(e,n,0,!1);break}else{if(l=e.current.alternate,d&&!P0(l)){f=Ks(e,n,!1),d=!1;continue}if(f===2){if(d=n,e.errorRecoveryDisabledLanes&d)var x=0;else x=e.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var w=e;f=ji;var z=w.current.memoizedState.isDehydrated;if(z&&(Oa(w,x).flags|=256),x=Ks(w,x,!1),x!==2){if(Vs&&!z){w.errorRecoveryDisabledLanes|=d,Ql|=d,f=4;break e}d=Ln,Ln=f,d!==null&&(Ln===null?Ln=d:Ln.push.apply(Ln,d))}f=x}if(d=!1,f!==2)continue}}if(f===1){Oa(e,0),hl(e,n,0,!0);break}e:{switch(o=e,d=f,d){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:hl(o,n,Qn,!sl);break e;case 2:Ln=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(f=oo+300-kn(),10<f)){if(hl(o,n,Qn,!sl),br(o,0,!0)!==0)break e;Vt=n,o.timeoutHandle=dm(Lp.bind(null,o,l,Ln,so,Ys,n,Qn,Ql,Da,sl,d,"Throttled",-0,0),f);break e}Lp(o,l,Ln,so,Ys,n,Qn,Ql,Da,sl,d,null,-0,0)}}break}while(!0);vt(e)}function Lp(e,n,l,o,f,d,x,w,z,U,G,F,I,V){if(e.timeoutHandle=-1,F=n.subtreeFlags,F&8192||(F&16785408)===16785408){F={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Tt},Np(n,d,F);var ce=(d&62914560)===d?oo-kn():(d&4194048)===d?Mp-kn():0;if(ce=Ob(F,ce),ce!==null){Vt=d,e.cancelPendingCommit=ce(Yp.bind(null,e,n,d,l,o,f,x,w,z,G,F,null,I,V)),hl(e,d,x,!U);return}}Yp(e,n,d,l,o,f,x,w,z)}function P0(e){for(var n=e;;){var l=n.tag;if((l===0||l===11||l===15)&&n.flags&16384&&(l=n.updateQueue,l!==null&&(l=l.stores,l!==null)))for(var o=0;o<l.length;o++){var f=l[o],d=f.getSnapshot;f=f.value;try{if(!In(d(),f))return!1}catch{return!1}}if(l=n.child,n.subtreeFlags&16384&&l!==null)l.return=n,n=l;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function hl(e,n,l,o){n&=~Gs,n&=~Ql,e.suspendedLanes|=n,e.pingedLanes&=~n,o&&(e.warmLanes|=n),o=e.expirationTimes;for(var f=n;0<f;){var d=31-Qe(f),x=1<<d;o[d]=-1,f&=~x}l!==0&&Qf(e,l,n)}function co(){return(He&6)===0?(Li(0),!1):!0}function Zs(){if(Ne!==null){if(qe===0)var e=Ne.return;else e=Ne,Rt=Bl=null,cs(e),Ea=null,xi=0,e=Ne;for(;e!==null;)hp(e.alternate,e),e=e.return;Ne=null}}function Oa(e,n){var l=e.timeoutHandle;l!==-1&&(e.timeoutHandle=-1,yb(l)),l=e.cancelPendingCommit,l!==null&&(e.cancelPendingCommit=null,l()),Vt=0,Zs(),Fe=e,Ne=l=zt(e.current,null),Re=n,qe=0,Xn=null,sl=!1,Ma=ni(e,n),Vs=!1,Da=Qn=Gs=Ql=cl=nn=0,Ln=ji=null,Ys=!1,(n&8)!==0&&(n|=n&32);var o=e.entangledLanes;if(o!==0)for(e=e.entanglements,o&=n;0<o;){var f=31-Qe(o),d=1<<f;n|=e[f],o&=~d}return It=n,Rr(),l}function Bp(e,n){we=null,B.H=Ci,n===ka||n===Ur?(n=Wd(),qe=3):n===Ju?(n=Wd(),qe=4):qe=n===Cs?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,Ne===null&&(nn=1,Wr(e,nt(n,e.current)))}function Hp(){var e=Gn.current;return e===null?!0:(Re&4194048)===Re?it===null:(Re&62914560)===Re||(Re&536870912)!==0?e===it:!1}function Up(){var e=B.H;return B.H=Ci,e===null?Ci:e}function qp(){var e=B.A;return B.A=K0,e}function fo(){nn=4,sl||(Re&4194048)!==Re&&Gn.current!==null||(Ma=!0),(cl&134217727)===0&&(Ql&134217727)===0||Fe===null||hl(Fe,Re,Qn,!1)}function Ks(e,n,l){var o=He;He|=2;var f=Up(),d=qp();(Fe!==e||Re!==n)&&(so=null,Oa(e,n)),n=!1;var x=nn;e:do try{if(qe!==0&&Ne!==null){var w=Ne,z=Xn;switch(qe){case 8:Zs(),x=6;break e;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var U=qe;if(qe=0,Xn=null,La(e,w,z,U),l&&Ma){x=0;break e}break;default:U=qe,qe=0,Xn=null,La(e,w,z,U)}}J0(),x=nn;break}catch(G){Bp(e,G)}while(!0);return n&&e.shellSuspendCounter++,Rt=Bl=null,He=o,B.H=f,B.A=d,Ne===null&&(Fe=null,Re=0,Rr()),x}function J0(){for(;Ne!==null;)Ip(Ne)}function W0(e,n){var l=He;He|=2;var o=Up(),f=qp();Fe!==e||Re!==n?(so=null,uo=kn()+500,Oa(e,n)):Ma=ni(e,n);e:do try{if(qe!==0&&Ne!==null){n=Ne;var d=Xn;n:switch(qe){case 1:qe=0,Xn=null,La(e,n,d,1);break;case 2:case 9:if(Pd(d)){qe=0,Xn=null,Vp(n);break}n=function(){qe!==2&&qe!==9||Fe!==e||(qe=7),vt(e)},d.then(n,n);break e;case 3:qe=7;break e;case 4:qe=5;break e;case 7:Pd(d)?(qe=0,Xn=null,Vp(n)):(qe=0,Xn=null,La(e,n,d,7));break;case 5:var x=null;switch(Ne.tag){case 26:x=Ne.memoizedState;case 5:case 27:var w=Ne;if(x?Tm(x):w.stateNode.complete){qe=0,Xn=null;var z=w.sibling;if(z!==null)Ne=z;else{var U=w.return;U!==null?(Ne=U,ho(U)):Ne=null}break n}}qe=0,Xn=null,La(e,n,d,5);break;case 6:qe=0,Xn=null,La(e,n,d,6);break;case 8:Zs(),nn=6;break e;default:throw Error(r(462))}}eb();break}catch(G){Bp(e,G)}while(!0);return Rt=Bl=null,B.H=o,B.A=f,He=l,Ne!==null?0:(Fe=null,Re=0,Rr(),nn)}function eb(){for(;Ne!==null&&!uu();)Ip(Ne)}function Ip(e){var n=fp(e.alternate,e,It);e.memoizedProps=e.pendingProps,n===null?ho(e):Ne=n}function Vp(e){var n=e,l=n.alternate;switch(n.tag){case 15:case 0:n=ip(l,n,n.pendingProps,n.type,void 0,Re);break;case 11:n=ip(l,n,n.pendingProps,n.type.render,n.ref,Re);break;case 5:cs(n);default:hp(l,n),n=Ne=qd(n,It),n=fp(l,n,It)}e.memoizedProps=e.pendingProps,n===null?ho(e):Ne=n}function La(e,n,l,o){Rt=Bl=null,cs(n),Ea=null,xi=0;var f=n.return;try{if(V0(e,f,n,l,Re)){nn=1,Wr(e,nt(l,e.current)),Ne=null;return}}catch(d){if(f!==null)throw Ne=f,d;nn=1,Wr(e,nt(l,e.current)),Ne=null;return}n.flags&32768?(je||o===1?e=!0:Ma||(Re&536870912)!==0?e=!1:(sl=e=!0,(o===2||o===9||o===3||o===6)&&(o=Gn.current,o!==null&&o.tag===13&&(o.flags|=16384))),Gp(n,e)):ho(n)}function ho(e){var n=e;do{if((n.flags&32768)!==0){Gp(n,sl);return}e=n.return;var l=X0(n.alternate,n,It);if(l!==null){Ne=l;return}if(n=n.sibling,n!==null){Ne=n;return}Ne=n=e}while(n!==null);nn===0&&(nn=5)}function Gp(e,n){do{var l=Q0(e.alternate,e);if(l!==null){l.flags&=32767,Ne=l;return}if(l=e.return,l!==null&&(l.flags|=32768,l.subtreeFlags=0,l.deletions=null),!n&&(e=e.sibling,e!==null)){Ne=e;return}Ne=e=l}while(e!==null);nn=6,Ne=null}function Yp(e,n,l,o,f,d,x,w,z){e.cancelPendingCommit=null;do po();while(fn!==0);if((He&6)!==0)throw Error(r(327));if(n!==null){if(n===e.current)throw Error(r(177));if(d=n.lanes|n.childLanes,d|=Bu,Dx(e,l,d,x,w,z),e===Fe&&(Ne=Fe=null,Re=0),ja=n,dl=e,Vt=l,Xs=d,Qs=f,Dp=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,ab(ye,function(){return Kp(),null})):(e.callbackNode=null,e.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=B.T,B.T=null,f=K.p,K.p=2,x=He,He|=4;try{F0(e,n,l)}finally{He=x,K.p=f,B.T=o}}fn=1,Xp(),Qp(),Fp()}}function Xp(){if(fn===1){fn=0;var e=dl,n=ja,l=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||l){l=B.T,B.T=null;var o=K.p;K.p=2;var f=He;He|=4;try{Ep(n,e);var d=oc,x=Rd(e.containerInfo),w=d.focusedElem,z=d.selectionRange;if(x!==w&&w&&w.ownerDocument&&_d(w.ownerDocument.documentElement,w)){if(z!==null&&Mu(w)){var U=z.start,G=z.end;if(G===void 0&&(G=U),"selectionStart"in w)w.selectionStart=U,w.selectionEnd=Math.min(G,w.value.length);else{var F=w.ownerDocument||document,I=F&&F.defaultView||window;if(I.getSelection){var V=I.getSelection(),ce=w.textContent.length,ge=Math.min(z.start,ce),Ye=z.end===void 0?ge:Math.min(z.end,ce);!V.extend&&ge>Ye&&(x=Ye,Ye=ge,ge=x);var L=zd(w,ge),M=zd(w,Ye);if(L&&M&&(V.rangeCount!==1||V.anchorNode!==L.node||V.anchorOffset!==L.offset||V.focusNode!==M.node||V.focusOffset!==M.offset)){var H=F.createRange();H.setStart(L.node,L.offset),V.removeAllRanges(),ge>Ye?(V.addRange(H),V.extend(M.node,M.offset)):(H.setEnd(M.node,M.offset),V.addRange(H))}}}}for(F=[],V=w;V=V.parentNode;)V.nodeType===1&&F.push({element:V,left:V.scrollLeft,top:V.scrollTop});for(typeof w.focus=="function"&&w.focus(),w=0;w<F.length;w++){var Q=F[w];Q.element.scrollLeft=Q.left,Q.element.scrollTop=Q.top}}Co=!!rc,oc=rc=null}finally{He=f,K.p=o,B.T=l}}e.current=n,fn=2}}function Qp(){if(fn===2){fn=0;var e=dl,n=ja,l=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||l){l=B.T,B.T=null;var o=K.p;K.p=2;var f=He;He|=4;try{vp(e,n.alternate,n)}finally{He=f,K.p=o,B.T=l}}fn=3}}function Fp(){if(fn===4||fn===3){fn=0,su();var e=dl,n=ja,l=Vt,o=Dp;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?fn=5:(fn=0,ja=dl=null,Zp(e,e.pendingLanes));var f=e.pendingLanes;if(f===0&&(fl=null),hu(l),n=n.stateNode,cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(En,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=B.T,f=K.p,K.p=2,B.T=null;try{for(var d=e.onRecoverableError,x=0;x<o.length;x++){var w=o[x];d(w.value,{componentStack:w.stack})}}finally{B.T=n,K.p=f}}(Vt&3)!==0&&po(),vt(e),f=e.pendingLanes,(l&261930)!==0&&(f&42)!==0?e===Fs?Oi++:(Oi=0,Fs=e):Oi=0,Li(0)}}function Zp(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,gi(n)))}function po(){return Xp(),Qp(),Fp(),Kp()}function Kp(){if(fn!==5)return!1;var e=dl,n=Xs;Xs=0;var l=hu(Vt),o=B.T,f=K.p;try{K.p=32>l?32:l,B.T=null,l=Qs,Qs=null;var d=dl,x=Vt;if(fn=0,ja=dl=null,Vt=0,(He&6)!==0)throw Error(r(331));var w=He;if(He|=4,_p(d.current),Tp(d,d.current,x,l),He=w,Li(0,!1),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(En,d)}catch{}return!0}finally{K.p=f,B.T=o,Zp(e,n)}}function $p(e,n,l){n=nt(l,n),n=Es(e.stateNode,n,2),e=il(e,n,2),e!==null&&(ti(e,2),vt(e))}function Ie(e,n,l){if(e.tag===3)$p(e,e,l);else for(;n!==null;){if(n.tag===3){$p(n,e,l);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(fl===null||!fl.has(o))){e=nt(l,e),l=Ph(2),o=il(n,l,2),o!==null&&(Jh(l,o,n,e),ti(o,2),vt(o));break}}n=n.return}}function $s(e,n,l){var o=e.pingCache;if(o===null){o=e.pingCache=new $0;var f=new Set;o.set(n,f)}else f=o.get(n),f===void 0&&(f=new Set,o.set(n,f));f.has(l)||(Vs=!0,f.add(l),e=nb.bind(null,e,n,l),n.then(e,e))}function nb(e,n,l){var o=e.pingCache;o!==null&&o.delete(n),e.pingedLanes|=e.suspendedLanes&l,e.warmLanes&=~l,Fe===e&&(Re&l)===l&&(nn===4||nn===3&&(Re&62914560)===Re&&300>kn()-oo?(He&2)===0&&Oa(e,0):Gs|=l,Da===Re&&(Da=0)),vt(e)}function Pp(e,n){n===0&&(n=Xf()),e=jl(e,n),e!==null&&(ti(e,n),vt(e))}function tb(e){var n=e.memoizedState,l=0;n!==null&&(l=n.retryLane),Pp(e,l)}function lb(e,n){var l=0;switch(e.tag){case 31:case 13:var o=e.stateNode,f=e.memoizedState;f!==null&&(l=f.retryLane);break;case 19:o=e.stateNode;break;case 22:o=e.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),Pp(e,l)}function ab(e,n){return la(e,n)}var mo=null,Ba=null,Ps=!1,go=!1,Js=!1,pl=0;function vt(e){e!==Ba&&e.next===null&&(Ba===null?mo=Ba=e:Ba=Ba.next=e),go=!0,Ps||(Ps=!0,rb())}function Li(e,n){if(!Js&&go){Js=!0;do for(var l=!1,o=mo;o!==null;){if(e!==0){var f=o.pendingLanes;if(f===0)var d=0;else{var x=o.suspendedLanes,w=o.pingedLanes;d=(1<<31-Qe(42|e)+1)-1,d&=f&~(x&~w),d=d&201326741?d&201326741|1:d?d|2:0}d!==0&&(l=!0,nm(o,d))}else d=Re,d=br(o,o===Fe?d:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(d&3)===0||ni(o,d)||(l=!0,nm(o,d));o=o.next}while(l);Js=!1}}function ib(){Jp()}function Jp(){go=Ps=!1;var e=0;pl!==0&&gb()&&(e=pl);for(var n=kn(),l=null,o=mo;o!==null;){var f=o.next,d=Wp(o,n);d===0?(o.next=null,l===null?mo=f:l.next=f,f===null&&(Ba=l)):(l=o,(e!==0||(d&3)!==0)&&(go=!0)),o=f}fn!==0&&fn!==5||Li(e),pl!==0&&(pl=0)}function Wp(e,n){for(var l=e.suspendedLanes,o=e.pingedLanes,f=e.expirationTimes,d=e.pendingLanes&-62914561;0<d;){var x=31-Qe(d),w=1<<x,z=f[x];z===-1?((w&l)===0||(w&o)!==0)&&(f[x]=Mx(w,n)):z<=n&&(e.expiredLanes|=w),d&=~w}if(n=Fe,l=Re,l=br(e,e===n?l:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o=e.callbackNode,l===0||e===n&&(qe===2||qe===9)||e.cancelPendingCommit!==null)return o!==null&&o!==null&&ei(o),e.callbackNode=null,e.callbackPriority=0;if((l&3)===0||ni(e,l)){if(n=l&-l,n===e.callbackPriority)return n;switch(o!==null&&ei(o),hu(l)){case 2:case 8:l=le;break;case 32:l=ye;break;case 268435456:l=Ue;break;default:l=ye}return o=em.bind(null,e),l=la(l,o),e.callbackPriority=n,e.callbackNode=l,n}return o!==null&&o!==null&&ei(o),e.callbackPriority=2,e.callbackNode=null,2}function em(e,n){if(fn!==0&&fn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var l=e.callbackNode;if(po()&&e.callbackNode!==l)return null;var o=Re;return o=br(e,e===Fe?o:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),o===0?null:(Op(e,o,n),Wp(e,kn()),e.callbackNode!=null&&e.callbackNode===l?em.bind(null,e):null)}function nm(e,n){if(po())return null;Op(e,n,!0)}function rb(){xb(function(){(He&6)!==0?la(X,ib):Jp()})}function Ws(){if(pl===0){var e=wa;e===0&&(e=gr,gr<<=1,(gr&261888)===0&&(gr=256)),pl=e}return pl}function tm(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ar(""+e)}function lm(e,n){var l=n.ownerDocument.createElement("input");return l.name=n.name,l.value=n.value,e.id&&l.setAttribute("form",e.id),n.parentNode.insertBefore(l,n),e=new FormData(e),l.parentNode.removeChild(l),e}function ob(e,n,l,o,f){if(n==="submit"&&l&&l.stateNode===f){var d=tm((f[Rn]||null).action),x=o.submitter;x&&(n=(n=x[Rn]||null)?tm(n.formAction):x.getAttribute("formAction"),n!==null&&(d=n,x=null));var w=new Tr("action","action",null,o,f);e.push({event:w,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(pl!==0){var z=x?lm(f,x):new FormData(f);bs(l,{pending:!0,data:z,method:f.method,action:d},null,z)}}else typeof d=="function"&&(w.preventDefault(),z=x?lm(f,x):new FormData(f),bs(l,{pending:!0,data:z,method:f.method,action:d},d,z))},currentTarget:f}]})}}for(var ec=0;ec<Lu.length;ec++){var nc=Lu[ec],ub=nc.toLowerCase(),sb=nc[0].toUpperCase()+nc.slice(1);ft(ub,"on"+sb)}ft(jd,"onAnimationEnd"),ft(Od,"onAnimationIteration"),ft(Ld,"onAnimationStart"),ft("dblclick","onDoubleClick"),ft("focusin","onFocus"),ft("focusout","onBlur"),ft(E0,"onTransitionRun"),ft(C0,"onTransitionStart"),ft(T0,"onTransitionCancel"),ft(Bd,"onTransitionEnd"),ua("onMouseEnter",["mouseout","mouseover"]),ua("onMouseLeave",["mouseout","mouseover"]),ua("onPointerEnter",["pointerout","pointerover"]),ua("onPointerLeave",["pointerout","pointerover"]),_l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),_l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),_l("onBeforeInput",["compositionend","keypress","textInput","paste"]),_l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),_l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bi="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),cb=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Bi));function am(e,n){n=(n&4)!==0;for(var l=0;l<e.length;l++){var o=e[l],f=o.event;o=o.listeners;e:{var d=void 0;if(n)for(var x=o.length-1;0<=x;x--){var w=o[x],z=w.instance,U=w.currentTarget;if(w=w.listener,z!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=U;try{d(f)}catch(G){_r(G)}f.currentTarget=null,d=z}else for(x=0;x<o.length;x++){if(w=o[x],z=w.instance,U=w.currentTarget,w=w.listener,z!==d&&f.isPropagationStopped())break e;d=w,f.currentTarget=U;try{d(f)}catch(G){_r(G)}f.currentTarget=null,d=z}}}}function ze(e,n){var l=n[pu];l===void 0&&(l=n[pu]=new Set);var o=e+"__bubble";l.has(o)||(im(n,e,2,!1),l.add(o))}function tc(e,n,l){var o=0;n&&(o|=4),im(l,e,o,n)}var yo="_reactListening"+Math.random().toString(36).slice(2);function lc(e){if(!e[yo]){e[yo]=!0,Jf.forEach(function(l){l!=="selectionchange"&&(cb.has(l)||tc(l,!1,e),tc(l,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[yo]||(n[yo]=!0,tc("selectionchange",!1,n))}}function im(e,n,l,o){switch(jm(n)){case 2:var f=Hb;break;case 8:f=Ub;break;default:f=xc}l=f.bind(null,n,l,e),f=void 0,!Au||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(f=!0),o?f!==void 0?e.addEventListener(n,l,{capture:!0,passive:f}):e.addEventListener(n,l,!0):f!==void 0?e.addEventListener(n,l,{passive:f}):e.addEventListener(n,l,!1)}function ac(e,n,l,o,f){var d=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var w=o.stateNode.containerInfo;if(w===f)break;if(x===4)for(x=o.return;x!==null;){var z=x.tag;if((z===3||z===4)&&x.stateNode.containerInfo===f)return;x=x.return}for(;w!==null;){if(x=ia(w),x===null)return;if(z=x.tag,z===5||z===6||z===26||z===27){o=d=x;continue e}w=w.parentNode}}o=o.return}cd(function(){var U=d,G=Su(l),F=[];e:{var I=Hd.get(e);if(I!==void 0){var V=Tr,ce=e;switch(e){case"keypress":if(Er(l)===0)break e;case"keydown":case"keyup":V=l0;break;case"focusin":ce="focus",V=Tu;break;case"focusout":ce="blur",V=Tu;break;case"beforeblur":case"afterblur":V=Tu;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":V=hd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":V=Xx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":V=r0;break;case jd:case Od:case Ld:V=Zx;break;case Bd:V=u0;break;case"scroll":case"scrollend":V=Gx;break;case"wheel":V=c0;break;case"copy":case"cut":case"paste":V=$x;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":V=md;break;case"toggle":case"beforetoggle":V=d0}var ge=(n&4)!==0,Ye=!ge&&(e==="scroll"||e==="scrollend"),L=ge?I!==null?I+"Capture":null:I;ge=[];for(var M=U,H;M!==null;){var Q=M;if(H=Q.stateNode,Q=Q.tag,Q!==5&&Q!==26&&Q!==27||H===null||L===null||(Q=ii(M,L),Q!=null&&ge.push(Hi(M,Q,H))),Ye)break;M=M.return}0<ge.length&&(I=new V(I,ce,null,l,G),F.push({event:I,listeners:ge}))}}if((n&7)===0){e:{if(I=e==="mouseover"||e==="pointerover",V=e==="mouseout"||e==="pointerout",I&&l!==vu&&(ce=l.relatedTarget||l.fromElement)&&(ia(ce)||ce[aa]))break e;if((V||I)&&(I=G.window===G?G:(I=G.ownerDocument)?I.defaultView||I.parentWindow:window,V?(ce=l.relatedTarget||l.toElement,V=U,ce=ce?ia(ce):null,ce!==null&&(Ye=s(ce),ge=ce.tag,ce!==Ye||ge!==5&&ge!==27&&ge!==6)&&(ce=null)):(V=null,ce=U),V!==ce)){if(ge=hd,Q="onMouseLeave",L="onMouseEnter",M="mouse",(e==="pointerout"||e==="pointerover")&&(ge=md,Q="onPointerLeave",L="onPointerEnter",M="pointer"),Ye=V==null?I:ai(V),H=ce==null?I:ai(ce),I=new ge(Q,M+"leave",V,l,G),I.target=Ye,I.relatedTarget=H,Q=null,ia(G)===U&&(ge=new ge(L,M+"enter",ce,l,G),ge.target=H,ge.relatedTarget=Ye,Q=ge),Ye=Q,V&&ce)n:{for(ge=fb,L=V,M=ce,H=0,Q=L;Q;Q=ge(Q))H++;Q=0;for(var pe=M;pe;pe=ge(pe))Q++;for(;0<H-Q;)L=ge(L),H--;for(;0<Q-H;)M=ge(M),Q--;for(;H--;){if(L===M||M!==null&&L===M.alternate){ge=L;break n}L=ge(L),M=ge(M)}ge=null}else ge=null;V!==null&&rm(F,I,V,ge,!1),ce!==null&&Ye!==null&&rm(F,Ye,ce,ge,!0)}}e:{if(I=U?ai(U):window,V=I.nodeName&&I.nodeName.toLowerCase(),V==="select"||V==="input"&&I.type==="file")var Le=Ad;else if(Sd(I))if(kd)Le=w0;else{Le=v0;var he=b0}else V=I.nodeName,!V||V.toLowerCase()!=="input"||I.type!=="checkbox"&&I.type!=="radio"?U&&bu(U.elementType)&&(Le=Ad):Le=S0;if(Le&&(Le=Le(e,U))){wd(F,Le,l,G);break e}he&&he(e,I,U),e==="focusout"&&U&&I.type==="number"&&U.memoizedProps.value!=null&&xu(I,"number",I.value)}switch(he=U?ai(U):window,e){case"focusin":(Sd(he)||he.contentEditable==="true")&&(pa=he,Du=U,hi=null);break;case"focusout":hi=Du=pa=null;break;case"mousedown":ju=!0;break;case"contextmenu":case"mouseup":case"dragend":ju=!1,Md(F,l,G);break;case"selectionchange":if(k0)break;case"keydown":case"keyup":Md(F,l,G)}var ke;if(zu)e:{switch(e){case"compositionstart":var Me="onCompositionStart";break e;case"compositionend":Me="onCompositionEnd";break e;case"compositionupdate":Me="onCompositionUpdate";break e}Me=void 0}else ha?bd(e,l)&&(Me="onCompositionEnd"):e==="keydown"&&l.keyCode===229&&(Me="onCompositionStart");Me&&(gd&&l.locale!=="ko"&&(ha||Me!=="onCompositionStart"?Me==="onCompositionEnd"&&ha&&(ke=fd()):(Jt=G,ku="value"in Jt?Jt.value:Jt.textContent,ha=!0)),he=xo(U,Me),0<he.length&&(Me=new pd(Me,e,null,l,G),F.push({event:Me,listeners:he}),ke?Me.data=ke:(ke=vd(l),ke!==null&&(Me.data=ke)))),(ke=p0?m0(e,l):g0(e,l))&&(Me=xo(U,"onBeforeInput"),0<Me.length&&(he=new pd("onBeforeInput","beforeinput",null,l,G),F.push({event:he,listeners:Me}),he.data=ke)),ob(F,e,U,l,G)}am(F,n)})}function Hi(e,n,l){return{instance:e,listener:n,currentTarget:l}}function xo(e,n){for(var l=n+"Capture",o=[];e!==null;){var f=e,d=f.stateNode;if(f=f.tag,f!==5&&f!==26&&f!==27||d===null||(f=ii(e,l),f!=null&&o.unshift(Hi(e,f,d)),f=ii(e,n),f!=null&&o.push(Hi(e,f,d))),e.tag===3)return o;e=e.return}return[]}function fb(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function rm(e,n,l,o,f){for(var d=n._reactName,x=[];l!==null&&l!==o;){var w=l,z=w.alternate,U=w.stateNode;if(w=w.tag,z!==null&&z===o)break;w!==5&&w!==26&&w!==27||U===null||(z=U,f?(U=ii(l,d),U!=null&&x.unshift(Hi(l,U,z))):f||(U=ii(l,d),U!=null&&x.push(Hi(l,U,z)))),l=l.return}x.length!==0&&e.push({event:n,listeners:x})}var db=/\r\n?/g,hb=/\u0000|\uFFFD/g;function om(e){return(typeof e=="string"?e:""+e).replace(db,`
`).replace(hb,"")}function um(e,n){return n=om(n),om(e)===n}function Ge(e,n,l,o,f,d){switch(l){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||ca(e,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&ca(e,""+o);break;case"className":Sr(e,"class",o);break;case"tabIndex":Sr(e,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Sr(e,l,o);break;case"style":ud(e,o,d);break;case"data":if(n!=="object"){Sr(e,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||l!=="href")){e.removeAttribute(l);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(l);break}o=Ar(""+o),e.setAttribute(l,o);break;case"action":case"formAction":if(typeof o=="function"){e.setAttribute(l,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof d=="function"&&(l==="formAction"?(n!=="input"&&Ge(e,n,"name",f.name,f,null),Ge(e,n,"formEncType",f.formEncType,f,null),Ge(e,n,"formMethod",f.formMethod,f,null),Ge(e,n,"formTarget",f.formTarget,f,null)):(Ge(e,n,"encType",f.encType,f,null),Ge(e,n,"method",f.method,f,null),Ge(e,n,"target",f.target,f,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){e.removeAttribute(l);break}o=Ar(""+o),e.setAttribute(l,o);break;case"onClick":o!=null&&(e.onclick=Tt);break;case"onScroll":o!=null&&ze("scroll",e);break;case"onScrollEnd":o!=null&&ze("scrollend",e);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(l=o.__html,l!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"multiple":e.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":e.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){e.removeAttribute("xlink:href");break}l=Ar(""+o),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",l);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,""+o):e.removeAttribute(l);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,""):e.removeAttribute(l);break;case"capture":case"download":o===!0?e.setAttribute(l,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?e.setAttribute(l,o):e.removeAttribute(l);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?e.setAttribute(l,o):e.removeAttribute(l);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?e.removeAttribute(l):e.setAttribute(l,o);break;case"popover":ze("beforetoggle",e),ze("toggle",e),vr(e,"popover",o);break;case"xlinkActuate":Ct(e,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":Ct(e,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":Ct(e,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":Ct(e,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":Ct(e,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":Ct(e,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":Ct(e,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":vr(e,"is",o);break;case"innerText":case"textContent":break;default:(!(2<l.length)||l[0]!=="o"&&l[0]!=="O"||l[1]!=="n"&&l[1]!=="N")&&(l=Ix.get(l)||l,vr(e,l,o))}}function ic(e,n,l,o,f,d){switch(l){case"style":ud(e,o,d);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(l=o.__html,l!=null){if(f.children!=null)throw Error(r(60));e.innerHTML=l}}break;case"children":typeof o=="string"?ca(e,o):(typeof o=="number"||typeof o=="bigint")&&ca(e,""+o);break;case"onScroll":o!=null&&ze("scroll",e);break;case"onScrollEnd":o!=null&&ze("scrollend",e);break;case"onClick":o!=null&&(e.onclick=Tt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Wf.hasOwnProperty(l))e:{if(l[0]==="o"&&l[1]==="n"&&(f=l.endsWith("Capture"),n=l.slice(2,f?l.length-7:void 0),d=e[Rn]||null,d=d!=null?d[l]:null,typeof d=="function"&&e.removeEventListener(n,d,f),typeof o=="function")){typeof d!="function"&&d!==null&&(l in e?e[l]=null:e.hasAttribute(l)&&e.removeAttribute(l)),e.addEventListener(n,o,f);break e}l in e?e[l]=o:o===!0?e.setAttribute(l,""):vr(e,l,o)}}}function bn(e,n,l){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ze("error",e),ze("load",e);var o=!1,f=!1,d;for(d in l)if(l.hasOwnProperty(d)){var x=l[d];if(x!=null)switch(d){case"src":o=!0;break;case"srcSet":f=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,d,x,l,null)}}f&&Ge(e,n,"srcSet",l.srcSet,l,null),o&&Ge(e,n,"src",l.src,l,null);return;case"input":ze("invalid",e);var w=d=x=f=null,z=null,U=null;for(o in l)if(l.hasOwnProperty(o)){var G=l[o];if(G!=null)switch(o){case"name":f=G;break;case"type":x=G;break;case"checked":z=G;break;case"defaultChecked":U=G;break;case"value":d=G;break;case"defaultValue":w=G;break;case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(r(137,n));break;default:Ge(e,n,o,G,l,null)}}ad(e,d,w,z,U,x,f,!1);return;case"select":ze("invalid",e),o=x=d=null;for(f in l)if(l.hasOwnProperty(f)&&(w=l[f],w!=null))switch(f){case"value":d=w;break;case"defaultValue":x=w;break;case"multiple":o=w;default:Ge(e,n,f,w,l,null)}n=d,l=x,e.multiple=!!o,n!=null?sa(e,!!o,n,!1):l!=null&&sa(e,!!o,l,!0);return;case"textarea":ze("invalid",e),d=f=o=null;for(x in l)if(l.hasOwnProperty(x)&&(w=l[x],w!=null))switch(x){case"value":o=w;break;case"defaultValue":f=w;break;case"children":d=w;break;case"dangerouslySetInnerHTML":if(w!=null)throw Error(r(91));break;default:Ge(e,n,x,w,l,null)}rd(e,o,f,d);return;case"option":for(z in l)l.hasOwnProperty(z)&&(o=l[z],o!=null)&&(z==="selected"?e.selected=o&&typeof o!="function"&&typeof o!="symbol":Ge(e,n,z,o,l,null));return;case"dialog":ze("beforetoggle",e),ze("toggle",e),ze("cancel",e),ze("close",e);break;case"iframe":case"object":ze("load",e);break;case"video":case"audio":for(o=0;o<Bi.length;o++)ze(Bi[o],e);break;case"image":ze("error",e),ze("load",e);break;case"details":ze("toggle",e);break;case"embed":case"source":case"link":ze("error",e),ze("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(U in l)if(l.hasOwnProperty(U)&&(o=l[U],o!=null))switch(U){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ge(e,n,U,o,l,null)}return;default:if(bu(n)){for(G in l)l.hasOwnProperty(G)&&(o=l[G],o!==void 0&&ic(e,n,G,o,l,void 0));return}}for(w in l)l.hasOwnProperty(w)&&(o=l[w],o!=null&&Ge(e,n,w,o,l,null))}function pb(e,n,l,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var f=null,d=null,x=null,w=null,z=null,U=null,G=null;for(V in l){var F=l[V];if(l.hasOwnProperty(V)&&F!=null)switch(V){case"checked":break;case"value":break;case"defaultValue":z=F;default:o.hasOwnProperty(V)||Ge(e,n,V,null,o,F)}}for(var I in o){var V=o[I];if(F=l[I],o.hasOwnProperty(I)&&(V!=null||F!=null))switch(I){case"type":d=V;break;case"name":f=V;break;case"checked":U=V;break;case"defaultChecked":G=V;break;case"value":x=V;break;case"defaultValue":w=V;break;case"children":case"dangerouslySetInnerHTML":if(V!=null)throw Error(r(137,n));break;default:V!==F&&Ge(e,n,I,V,o,F)}}yu(e,x,w,z,U,G,d,f);return;case"select":V=x=w=I=null;for(d in l)if(z=l[d],l.hasOwnProperty(d)&&z!=null)switch(d){case"value":break;case"multiple":V=z;default:o.hasOwnProperty(d)||Ge(e,n,d,null,o,z)}for(f in o)if(d=o[f],z=l[f],o.hasOwnProperty(f)&&(d!=null||z!=null))switch(f){case"value":I=d;break;case"defaultValue":w=d;break;case"multiple":x=d;default:d!==z&&Ge(e,n,f,d,o,z)}n=w,l=x,o=V,I!=null?sa(e,!!l,I,!1):!!o!=!!l&&(n!=null?sa(e,!!l,n,!0):sa(e,!!l,l?[]:"",!1));return;case"textarea":V=I=null;for(w in l)if(f=l[w],l.hasOwnProperty(w)&&f!=null&&!o.hasOwnProperty(w))switch(w){case"value":break;case"children":break;default:Ge(e,n,w,null,o,f)}for(x in o)if(f=o[x],d=l[x],o.hasOwnProperty(x)&&(f!=null||d!=null))switch(x){case"value":I=f;break;case"defaultValue":V=f;break;case"children":break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(r(91));break;default:f!==d&&Ge(e,n,x,f,o,d)}id(e,I,V);return;case"option":for(var ce in l)I=l[ce],l.hasOwnProperty(ce)&&I!=null&&!o.hasOwnProperty(ce)&&(ce==="selected"?e.selected=!1:Ge(e,n,ce,null,o,I));for(z in o)I=o[z],V=l[z],o.hasOwnProperty(z)&&I!==V&&(I!=null||V!=null)&&(z==="selected"?e.selected=I&&typeof I!="function"&&typeof I!="symbol":Ge(e,n,z,I,o,V));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ge in l)I=l[ge],l.hasOwnProperty(ge)&&I!=null&&!o.hasOwnProperty(ge)&&Ge(e,n,ge,null,o,I);for(U in o)if(I=o[U],V=l[U],o.hasOwnProperty(U)&&I!==V&&(I!=null||V!=null))switch(U){case"children":case"dangerouslySetInnerHTML":if(I!=null)throw Error(r(137,n));break;default:Ge(e,n,U,I,o,V)}return;default:if(bu(n)){for(var Ye in l)I=l[Ye],l.hasOwnProperty(Ye)&&I!==void 0&&!o.hasOwnProperty(Ye)&&ic(e,n,Ye,void 0,o,I);for(G in o)I=o[G],V=l[G],!o.hasOwnProperty(G)||I===V||I===void 0&&V===void 0||ic(e,n,G,I,o,V);return}}for(var L in l)I=l[L],l.hasOwnProperty(L)&&I!=null&&!o.hasOwnProperty(L)&&Ge(e,n,L,null,o,I);for(F in o)I=o[F],V=l[F],!o.hasOwnProperty(F)||I===V||I==null&&V==null||Ge(e,n,F,I,o,V)}function sm(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function mb(){if(typeof performance.getEntriesByType=="function"){for(var e=0,n=0,l=performance.getEntriesByType("resource"),o=0;o<l.length;o++){var f=l[o],d=f.transferSize,x=f.initiatorType,w=f.duration;if(d&&w&&sm(x)){for(x=0,w=f.responseEnd,o+=1;o<l.length;o++){var z=l[o],U=z.startTime;if(U>w)break;var G=z.transferSize,F=z.initiatorType;G&&sm(F)&&(z=z.responseEnd,x+=G*(z<w?1:(w-U)/(z-U)))}if(--o,n+=8*(d+x)/(f.duration/1e3),e++,10<e)break}}if(0<e)return n/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var rc=null,oc=null;function bo(e){return e.nodeType===9?e:e.ownerDocument}function cm(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function fm(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function uc(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var sc=null;function gb(){var e=window.event;return e&&e.type==="popstate"?e===sc?!1:(sc=e,!0):(sc=null,!1)}var dm=typeof setTimeout=="function"?setTimeout:void 0,yb=typeof clearTimeout=="function"?clearTimeout:void 0,hm=typeof Promise=="function"?Promise:void 0,xb=typeof queueMicrotask=="function"?queueMicrotask:typeof hm<"u"?function(e){return hm.resolve(null).then(e).catch(bb)}:dm;function bb(e){setTimeout(function(){throw e})}function ml(e){return e==="head"}function pm(e,n){var l=n,o=0;do{var f=l.nextSibling;if(e.removeChild(l),f&&f.nodeType===8)if(l=f.data,l==="/$"||l==="/&"){if(o===0){e.removeChild(f),Ia(n);return}o--}else if(l==="$"||l==="$?"||l==="$~"||l==="$!"||l==="&")o++;else if(l==="html")Ui(e.ownerDocument.documentElement);else if(l==="head"){l=e.ownerDocument.head,Ui(l);for(var d=l.firstChild;d;){var x=d.nextSibling,w=d.nodeName;d[li]||w==="SCRIPT"||w==="STYLE"||w==="LINK"&&d.rel.toLowerCase()==="stylesheet"||l.removeChild(d),d=x}}else l==="body"&&Ui(e.ownerDocument.body);l=f}while(l);Ia(n)}function mm(e,n){var l=e;e=0;do{var o=l.nextSibling;if(l.nodeType===1?n?(l._stashedDisplay=l.style.display,l.style.display="none"):(l.style.display=l._stashedDisplay||"",l.getAttribute("style")===""&&l.removeAttribute("style")):l.nodeType===3&&(n?(l._stashedText=l.nodeValue,l.nodeValue=""):l.nodeValue=l._stashedText||""),o&&o.nodeType===8)if(l=o.data,l==="/$"){if(e===0)break;e--}else l!=="$"&&l!=="$?"&&l!=="$~"&&l!=="$!"||e++;l=o}while(l)}function cc(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var l=n;switch(n=n.nextSibling,l.nodeName){case"HTML":case"HEAD":case"BODY":cc(l),mu(l);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(l.rel.toLowerCase()==="stylesheet")continue}e.removeChild(l)}}function vb(e,n,l,o){for(;e.nodeType===1;){var f=l;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(o){if(!e[li])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(d=e.getAttribute("rel"),d==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(d!==f.rel||e.getAttribute("href")!==(f.href==null||f.href===""?null:f.href)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin)||e.getAttribute("title")!==(f.title==null?null:f.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(d=e.getAttribute("src"),(d!==(f.src==null?null:f.src)||e.getAttribute("type")!==(f.type==null?null:f.type)||e.getAttribute("crossorigin")!==(f.crossOrigin==null?null:f.crossOrigin))&&d&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var d=f.name==null?null:""+f.name;if(f.type==="hidden"&&e.getAttribute("name")===d)return e}else return e;if(e=rt(e.nextSibling),e===null)break}return null}function Sb(e,n,l){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!l||(e=rt(e.nextSibling),e===null))return null;return e}function gm(e,n){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!n||(e=rt(e.nextSibling),e===null))return null;return e}function fc(e){return e.data==="$?"||e.data==="$~"}function dc(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function wb(e,n){var l=e.ownerDocument;if(e.data==="$~")e._reactRetry=n;else if(e.data!=="$?"||l.readyState!=="loading")n();else{var o=function(){n(),l.removeEventListener("DOMContentLoaded",o)};l.addEventListener("DOMContentLoaded",o),e._reactRetry=o}}function rt(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return e}var hc=null;function ym(e){e=e.nextSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="/$"||l==="/&"){if(n===0)return rt(e.nextSibling);n--}else l!=="$"&&l!=="$!"&&l!=="$?"&&l!=="$~"&&l!=="&"||n++}e=e.nextSibling}return null}function xm(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var l=e.data;if(l==="$"||l==="$!"||l==="$?"||l==="$~"||l==="&"){if(n===0)return e;n--}else l!=="/$"&&l!=="/&"||n++}e=e.previousSibling}return null}function bm(e,n,l){switch(n=bo(l),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}function Ui(e){for(var n=e.attributes;n.length;)e.removeAttributeNode(n[0]);mu(e)}var ot=new Map,vm=new Set;function vo(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Gt=K.d;K.d={f:Ab,r:kb,D:Eb,C:Cb,L:Tb,m:Nb,X:_b,S:zb,M:Rb};function Ab(){var e=Gt.f(),n=co();return e||n}function kb(e){var n=ra(e);n!==null&&n.tag===5&&n.type==="form"?Bh(n):Gt.r(e)}var Ha=typeof document>"u"?null:document;function Sm(e,n,l){var o=Ha;if(o&&typeof n=="string"&&n){var f=Wn(n);f='link[rel="'+e+'"][href="'+f+'"]',typeof l=="string"&&(f+='[crossorigin="'+l+'"]'),vm.has(f)||(vm.add(f),e={rel:e,crossOrigin:l,href:n},o.querySelector(f)===null&&(n=o.createElement("link"),bn(n,"link",e),hn(n),o.head.appendChild(n)))}}function Eb(e){Gt.D(e),Sm("dns-prefetch",e,null)}function Cb(e,n){Gt.C(e,n),Sm("preconnect",e,n)}function Tb(e,n,l){Gt.L(e,n,l);var o=Ha;if(o&&e&&n){var f='link[rel="preload"][as="'+Wn(n)+'"]';n==="image"&&l&&l.imageSrcSet?(f+='[imagesrcset="'+Wn(l.imageSrcSet)+'"]',typeof l.imageSizes=="string"&&(f+='[imagesizes="'+Wn(l.imageSizes)+'"]')):f+='[href="'+Wn(e)+'"]';var d=f;switch(n){case"style":d=Ua(e);break;case"script":d=qa(e)}ot.has(d)||(e=g({rel:"preload",href:n==="image"&&l&&l.imageSrcSet?void 0:e,as:n},l),ot.set(d,e),o.querySelector(f)!==null||n==="style"&&o.querySelector(qi(d))||n==="script"&&o.querySelector(Ii(d))||(n=o.createElement("link"),bn(n,"link",e),hn(n),o.head.appendChild(n)))}}function Nb(e,n){Gt.m(e,n);var l=Ha;if(l&&e){var o=n&&typeof n.as=="string"?n.as:"script",f='link[rel="modulepreload"][as="'+Wn(o)+'"][href="'+Wn(e)+'"]',d=f;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":d=qa(e)}if(!ot.has(d)&&(e=g({rel:"modulepreload",href:e},n),ot.set(d,e),l.querySelector(f)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(l.querySelector(Ii(d)))return}o=l.createElement("link"),bn(o,"link",e),hn(o),l.head.appendChild(o)}}}function zb(e,n,l){Gt.S(e,n,l);var o=Ha;if(o&&e){var f=oa(o).hoistableStyles,d=Ua(e);n=n||"default";var x=f.get(d);if(!x){var w={loading:0,preload:null};if(x=o.querySelector(qi(d)))w.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":n},l),(l=ot.get(d))&&pc(e,l);var z=x=o.createElement("link");hn(z),bn(z,"link",e),z._p=new Promise(function(U,G){z.onload=U,z.onerror=G}),z.addEventListener("load",function(){w.loading|=1}),z.addEventListener("error",function(){w.loading|=2}),w.loading|=4,So(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:w},f.set(d,x)}}}function _b(e,n){Gt.X(e,n);var l=Ha;if(l&&e){var o=oa(l).hoistableScripts,f=qa(e),d=o.get(f);d||(d=l.querySelector(Ii(f)),d||(e=g({src:e,async:!0},n),(n=ot.get(f))&&mc(e,n),d=l.createElement("script"),hn(d),bn(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function Rb(e,n){Gt.M(e,n);var l=Ha;if(l&&e){var o=oa(l).hoistableScripts,f=qa(e),d=o.get(f);d||(d=l.querySelector(Ii(f)),d||(e=g({src:e,async:!0,type:"module"},n),(n=ot.get(f))&&mc(e,n),d=l.createElement("script"),hn(d),bn(d,"link",e),l.head.appendChild(d)),d={type:"script",instance:d,count:1,state:null},o.set(f,d))}}function wm(e,n,l,o){var f=(f=oe.current)?vo(f):null;if(!f)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof l.precedence=="string"&&typeof l.href=="string"?(n=Ua(l.href),l=oa(f).hoistableStyles,o=l.get(n),o||(o={type:"style",instance:null,count:0,state:null},l.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(l.rel==="stylesheet"&&typeof l.href=="string"&&typeof l.precedence=="string"){e=Ua(l.href);var d=oa(f).hoistableStyles,x=d.get(e);if(x||(f=f.ownerDocument||f,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},d.set(e,x),(d=f.querySelector(qi(e)))&&!d._p&&(x.instance=d,x.state.loading=5),ot.has(e)||(l={rel:"preload",as:"style",href:l.href,crossOrigin:l.crossOrigin,integrity:l.integrity,media:l.media,hrefLang:l.hrefLang,referrerPolicy:l.referrerPolicy},ot.set(e,l),d||Mb(f,e,l,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=l.async,l=l.src,typeof l=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=qa(l),l=oa(f).hoistableScripts,o=l.get(n),o||(o={type:"script",instance:null,count:0,state:null},l.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Ua(e){return'href="'+Wn(e)+'"'}function qi(e){return'link[rel="stylesheet"]['+e+"]"}function Am(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function Mb(e,n,l,o){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=e.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),bn(n,"link",l),hn(n),e.head.appendChild(n))}function qa(e){return'[src="'+Wn(e)+'"]'}function Ii(e){return"script[async]"+e}function km(e,n,l){if(n.count++,n.instance===null)switch(n.type){case"style":var o=e.querySelector('style[data-href~="'+Wn(l.href)+'"]');if(o)return n.instance=o,hn(o),o;var f=g({},l,{"data-href":l.href,"data-precedence":l.precedence,href:null,precedence:null});return o=(e.ownerDocument||e).createElement("style"),hn(o),bn(o,"style",f),So(o,l.precedence,e),n.instance=o;case"stylesheet":f=Ua(l.href);var d=e.querySelector(qi(f));if(d)return n.state.loading|=4,n.instance=d,hn(d),d;o=Am(l),(f=ot.get(f))&&pc(o,f),d=(e.ownerDocument||e).createElement("link"),hn(d);var x=d;return x._p=new Promise(function(w,z){x.onload=w,x.onerror=z}),bn(d,"link",o),n.state.loading|=4,So(d,l.precedence,e),n.instance=d;case"script":return d=qa(l.src),(f=e.querySelector(Ii(d)))?(n.instance=f,hn(f),f):(o=l,(f=ot.get(d))&&(o=g({},l),mc(o,f)),e=e.ownerDocument||e,f=e.createElement("script"),hn(f),bn(f,"link",o),e.head.appendChild(f),n.instance=f);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,So(o,l.precedence,e));return n.instance}function So(e,n,l){for(var o=l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),f=o.length?o[o.length-1]:null,d=f,x=0;x<o.length;x++){var w=o[x];if(w.dataset.precedence===n)d=w;else if(d!==f)break}d?d.parentNode.insertBefore(e,d.nextSibling):(n=l.nodeType===9?l.head:l,n.insertBefore(e,n.firstChild))}function pc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function mc(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var wo=null;function Em(e,n,l){if(wo===null){var o=new Map,f=wo=new Map;f.set(l,o)}else f=wo,o=f.get(l),o||(o=new Map,f.set(l,o));if(o.has(e))return o;for(o.set(e,null),l=l.getElementsByTagName(e),f=0;f<l.length;f++){var d=l[f];if(!(d[li]||d[mn]||e==="link"&&d.getAttribute("rel")==="stylesheet")&&d.namespaceURI!=="http://www.w3.org/2000/svg"){var x=d.getAttribute(n)||"";x=e+x;var w=o.get(x);w?w.push(d):o.set(x,[d])}}return o}function Cm(e,n,l){e=e.ownerDocument||e,e.head.insertBefore(l,n==="title"?e.querySelector("head > title"):null)}function Db(e,n,l){if(l===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(e=n.disabled,typeof n.precedence=="string"&&e==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function Tm(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function jb(e,n,l,o){if(l.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(l.state.loading&4)===0){if(l.instance===null){var f=Ua(o.href),d=n.querySelector(qi(f));if(d){n=d._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(e.count++,e=Ao.bind(e),n.then(e,e)),l.state.loading|=4,l.instance=d,hn(d);return}d=n.ownerDocument||n,o=Am(o),(f=ot.get(f))&&pc(o,f),d=d.createElement("link"),hn(d);var x=d;x._p=new Promise(function(w,z){x.onload=w,x.onerror=z}),bn(d,"link",o),l.instance=d}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(l,n),(n=l.state.preload)&&(l.state.loading&3)===0&&(e.count++,l=Ao.bind(e),n.addEventListener("load",l),n.addEventListener("error",l))}}var gc=0;function Ob(e,n){return e.stylesheets&&e.count===0&&Eo(e,e.stylesheets),0<e.count||0<e.imgCount?function(l){var o=setTimeout(function(){if(e.stylesheets&&Eo(e,e.stylesheets),e.unsuspend){var d=e.unsuspend;e.unsuspend=null,d()}},6e4+n);0<e.imgBytes&&gc===0&&(gc=62500*mb());var f=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Eo(e,e.stylesheets),e.unsuspend)){var d=e.unsuspend;e.unsuspend=null,d()}},(e.imgBytes>gc?50:800)+n);return e.unsuspend=l,function(){e.unsuspend=null,clearTimeout(o),clearTimeout(f)}}:null}function Ao(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Eo(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var ko=null;function Eo(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,ko=new Map,n.forEach(Lb,e),ko=null,Ao.call(e))}function Lb(e,n){if(!(n.state.loading&4)){var l=ko.get(e);if(l)var o=l.get(null);else{l=new Map,ko.set(e,l);for(var f=e.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;d<f.length;d++){var x=f[d];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(l.set(x.dataset.precedence,x),o=x)}o&&l.set(null,o)}f=n.instance,x=f.getAttribute("data-precedence"),d=l.get(x)||o,d===o&&l.set(null,f),l.set(x,f),this.count++,o=Ao.bind(this),f.addEventListener("load",o),f.addEventListener("error",o),d?d.parentNode.insertBefore(f,d.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(f,e.firstChild)),n.state.loading|=4}}var Vi={$$typeof:j,Provider:null,Consumer:null,_currentValue:ie,_currentValue2:ie,_threadCount:0};function Bb(e,n,l,o,f,d,x,w,z){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=fu(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fu(0),this.hiddenUpdates=fu(null),this.identifierPrefix=o,this.onUncaughtError=f,this.onCaughtError=d,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=z,this.incompleteTransitions=new Map}function Nm(e,n,l,o,f,d,x,w,z,U,G,F){return e=new Bb(e,n,l,x,z,U,G,F,w),n=1,d===!0&&(n|=24),d=Vn(3,null,null,n),e.current=d,d.stateNode=e,n=Ku(),n.refCount++,e.pooledCache=n,n.refCount++,d.memoizedState={element:o,isDehydrated:l,cache:n},Wu(d),e}function zm(e){return e?(e=ya,e):ya}function _m(e,n,l,o,f,d){f=zm(f),o.context===null?o.context=f:o.pendingContext=f,o=al(n),o.payload={element:l},d=d===void 0?null:d,d!==null&&(o.callback=d),l=il(e,o,n),l!==null&&(Bn(l,e,n),vi(l,e,n))}function Rm(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var l=e.retryLane;e.retryLane=l!==0&&l<n?l:n}}function yc(e,n){Rm(e,n),(e=e.alternate)&&Rm(e,n)}function Mm(e){if(e.tag===13||e.tag===31){var n=jl(e,67108864);n!==null&&Bn(n,e,67108864),yc(e,67108864)}}function Dm(e){if(e.tag===13||e.tag===31){var n=Fn();n=du(n);var l=jl(e,n);l!==null&&Bn(l,e,n),yc(e,n)}}var Co=!0;function Hb(e,n,l,o){var f=B.T;B.T=null;var d=K.p;try{K.p=2,xc(e,n,l,o)}finally{K.p=d,B.T=f}}function Ub(e,n,l,o){var f=B.T;B.T=null;var d=K.p;try{K.p=8,xc(e,n,l,o)}finally{K.p=d,B.T=f}}function xc(e,n,l,o){if(Co){var f=bc(o);if(f===null)ac(e,n,o,To,l),Om(e,o);else if(Ib(f,e,n,l,o))o.stopPropagation();else if(Om(e,o),n&4&&-1<qb.indexOf(e)){for(;f!==null;){var d=ra(f);if(d!==null)switch(d.tag){case 3:if(d=d.stateNode,d.current.memoizedState.isDehydrated){var x=zl(d.pendingLanes);if(x!==0){var w=d;for(w.pendingLanes|=2,w.entangledLanes|=2;x;){var z=1<<31-Qe(x);w.entanglements[1]|=z,x&=~z}vt(d),(He&6)===0&&(uo=kn()+500,Li(0))}}break;case 31:case 13:w=jl(d,2),w!==null&&Bn(w,d,2),co(),yc(d,2)}if(d=bc(o),d===null&&ac(e,n,o,To,l),d===f)break;f=d}f!==null&&o.stopPropagation()}else ac(e,n,o,null,l)}}function bc(e){return e=Su(e),vc(e)}var To=null;function vc(e){if(To=null,e=ia(e),e!==null){var n=s(e);if(n===null)e=null;else{var l=n.tag;if(l===13){if(e=c(n),e!==null)return e;e=null}else if(l===31){if(e=h(n),e!==null)return e;e=null}else if(l===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return To=e,null}function jm(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(cu()){case X:return 2;case le:return 8;case ye:case Te:return 32;case Ue:return 268435456;default:return 32}default:return 32}}var Sc=!1,gl=null,yl=null,xl=null,Gi=new Map,Yi=new Map,bl=[],qb="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Om(e,n){switch(e){case"focusin":case"focusout":gl=null;break;case"dragenter":case"dragleave":yl=null;break;case"mouseover":case"mouseout":xl=null;break;case"pointerover":case"pointerout":Gi.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yi.delete(n.pointerId)}}function Xi(e,n,l,o,f,d){return e===null||e.nativeEvent!==d?(e={blockedOn:n,domEventName:l,eventSystemFlags:o,nativeEvent:d,targetContainers:[f]},n!==null&&(n=ra(n),n!==null&&Mm(n)),e):(e.eventSystemFlags|=o,n=e.targetContainers,f!==null&&n.indexOf(f)===-1&&n.push(f),e)}function Ib(e,n,l,o,f){switch(n){case"focusin":return gl=Xi(gl,e,n,l,o,f),!0;case"dragenter":return yl=Xi(yl,e,n,l,o,f),!0;case"mouseover":return xl=Xi(xl,e,n,l,o,f),!0;case"pointerover":var d=f.pointerId;return Gi.set(d,Xi(Gi.get(d)||null,e,n,l,o,f)),!0;case"gotpointercapture":return d=f.pointerId,Yi.set(d,Xi(Yi.get(d)||null,e,n,l,o,f)),!0}return!1}function Lm(e){var n=ia(e.target);if(n!==null){var l=s(n);if(l!==null){if(n=l.tag,n===13){if(n=c(l),n!==null){e.blockedOn=n,$f(e.priority,function(){Dm(l)});return}}else if(n===31){if(n=h(l),n!==null){e.blockedOn=n,$f(e.priority,function(){Dm(l)});return}}else if(n===3&&l.stateNode.current.memoizedState.isDehydrated){e.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}e.blockedOn=null}function No(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var l=bc(e.nativeEvent);if(l===null){l=e.nativeEvent;var o=new l.constructor(l.type,l);vu=o,l.target.dispatchEvent(o),vu=null}else return n=ra(l),n!==null&&Mm(n),e.blockedOn=l,!1;n.shift()}return!0}function Bm(e,n,l){No(e)&&l.delete(n)}function Vb(){Sc=!1,gl!==null&&No(gl)&&(gl=null),yl!==null&&No(yl)&&(yl=null),xl!==null&&No(xl)&&(xl=null),Gi.forEach(Bm),Yi.forEach(Bm)}function zo(e,n){e.blockedOn===n&&(e.blockedOn=null,Sc||(Sc=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,Vb)))}var _o=null;function Hm(e){_o!==e&&(_o=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){_o===e&&(_o=null);for(var n=0;n<e.length;n+=3){var l=e[n],o=e[n+1],f=e[n+2];if(typeof o!="function"){if(vc(o||l)===null)continue;break}var d=ra(l);d!==null&&(e.splice(n,3),n-=3,bs(d,{pending:!0,data:f,method:l.method,action:o},o,f))}}))}function Ia(e){function n(z){return zo(z,e)}gl!==null&&zo(gl,e),yl!==null&&zo(yl,e),xl!==null&&zo(xl,e),Gi.forEach(n),Yi.forEach(n);for(var l=0;l<bl.length;l++){var o=bl[l];o.blockedOn===e&&(o.blockedOn=null)}for(;0<bl.length&&(l=bl[0],l.blockedOn===null);)Lm(l),l.blockedOn===null&&bl.shift();if(l=(e.ownerDocument||e).$$reactFormReplay,l!=null)for(o=0;o<l.length;o+=3){var f=l[o],d=l[o+1],x=f[Rn]||null;if(typeof d=="function")x||Hm(l);else if(x){var w=null;if(d&&d.hasAttribute("formAction")){if(f=d,x=d[Rn]||null)w=x.formAction;else if(vc(f)!==null)continue}else w=x.action;typeof w=="function"?l[o+1]=w:(l.splice(o,3),o-=3),Hm(l)}}}function Um(){function e(d){d.canIntercept&&d.info==="react-transition"&&d.intercept({handler:function(){return new Promise(function(x){return f=x})},focusReset:"manual",scroll:"manual"})}function n(){f!==null&&(f(),f=null),o||setTimeout(l,20)}function l(){if(!o&&!navigation.transition){var d=navigation.currentEntry;d&&d.url!=null&&navigation.navigate(d.url,{state:d.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,f=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(l,100),function(){o=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),f!==null&&(f(),f=null)}}}function wc(e){this._internalRoot=e}Ro.prototype.render=wc.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var l=n.current,o=Fn();_m(l,o,e,n,null,null)},Ro.prototype.unmount=wc.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;_m(e.current,2,null,e,null,null),co(),n[aa]=null}};function Ro(e){this._internalRoot=e}Ro.prototype.unstable_scheduleHydration=function(e){if(e){var n=Kf();e={blockedOn:null,target:e,priority:n};for(var l=0;l<bl.length&&n!==0&&n<bl[l].priority;l++);bl.splice(l,0,e),l===0&&Lm(e)}};var qm=i.version;if(qm!=="19.2.4")throw Error(r(527,qm,"19.2.4"));K.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=p(n),e=e!==null?y(e):null,e=e===null?null:e.stateNode,e};var Gb={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:B,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Mo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mo.isDisabled&&Mo.supportsFiber)try{En=Mo.inject(Gb),cn=Mo}catch{}}return Fi.createRoot=function(e,n){if(!u(e))throw Error(r(299));var l=!1,o="",f=Fh,d=Zh,x=Kh;return n!=null&&(n.unstable_strictMode===!0&&(l=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(f=n.onUncaughtError),n.onCaughtError!==void 0&&(d=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Nm(e,1,!1,null,null,l,o,null,f,d,x,Um),e[aa]=n.current,lc(e),new wc(n)},Fi.hydrateRoot=function(e,n,l){if(!u(e))throw Error(r(299));var o=!1,f="",d=Fh,x=Zh,w=Kh,z=null;return l!=null&&(l.unstable_strictMode===!0&&(o=!0),l.identifierPrefix!==void 0&&(f=l.identifierPrefix),l.onUncaughtError!==void 0&&(d=l.onUncaughtError),l.onCaughtError!==void 0&&(x=l.onCaughtError),l.onRecoverableError!==void 0&&(w=l.onRecoverableError),l.formState!==void 0&&(z=l.formState)),n=Nm(e,1,!0,n,l??null,o,f,z,d,x,w,Um),n.context=zm(null),l=n.current,o=Fn(),o=du(o),f=al(o),f.callback=null,il(l,f,o),l=o,n.current.lanes=l,ti(n,l),vt(n),e[aa]=n.current,lc(e),new Ro(n)},Fi.version="19.2.4",Fi}var $m;function Wb(){if($m)return Ec.exports;$m=1;function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(i){console.error(i)}}return t(),Ec.exports=Jb(),Ec.exports}var ev=Wb();var Pm="popstate";function Jm(t){return typeof t=="object"&&t!=null&&"pathname"in t&&"search"in t&&"hash"in t&&"state"in t&&"key"in t}function nv(t={}){function i(u,s){let{pathname:c="/",search:h="",hash:m=""}=Pl(u.location.hash.substring(1));return!c.startsWith("/")&&!c.startsWith(".")&&(c="/"+c),$c("",{pathname:c,search:h,hash:m},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function a(u,s){let c=u.document.querySelector("base"),h="";if(c&&c.getAttribute("href")){let m=u.location.href,p=m.indexOf("#");h=p===-1?m:m.slice(0,p)}return h+"#"+(typeof s=="string"?s:ar(s))}function r(u,s){st(u.pathname.charAt(0)==="/",`relative pathnames are not supported in hash history.push(${JSON.stringify(s)})`)}return lv(i,a,r,t)}function We(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function st(t,i){if(!t){typeof console<"u"&&console.warn(i);try{throw new Error(i)}catch{}}}function tv(){return Math.random().toString(36).substring(2,10)}function Wm(t,i){return{usr:t.state,key:t.key,idx:i,masked:t.unstable_mask?{pathname:t.pathname,search:t.search,hash:t.hash}:void 0}}function $c(t,i,a=null,r,u){return{pathname:typeof t=="string"?t:t.pathname,search:"",hash:"",...typeof i=="string"?Pl(i):i,state:a,key:i&&i.key||r||tv(),unstable_mask:u}}function ar({pathname:t="/",search:i="",hash:a=""}){return i&&i!=="?"&&(t+=i.charAt(0)==="?"?i:"?"+i),a&&a!=="#"&&(t+=a.charAt(0)==="#"?a:"#"+a),t}function Pl(t){let i={};if(t){let a=t.indexOf("#");a>=0&&(i.hash=t.substring(a),t=t.substring(0,a));let r=t.indexOf("?");r>=0&&(i.search=t.substring(r),t=t.substring(0,r)),t&&(i.pathname=t)}return i}function lv(t,i,a,r={}){let{window:u=document.defaultView,v5Compat:s=!1}=r,c=u.history,h="POP",m=null,p=y();p==null&&(p=0,c.replaceState({...c.state,idx:p},""));function y(){return(c.state||{idx:null}).idx}function g(){h="POP";let T=y(),N=T==null?null:T-p;p=T,m&&m({action:h,location:_.location,delta:N})}function b(T,N){h="PUSH";let D=Jm(T)?T:$c(_.location,T,N);a&&a(D,T),p=y()+1;let j=Wm(D,p),Z=_.createHref(D.unstable_mask||D);try{c.pushState(j,"",Z)}catch(W){if(W instanceof DOMException&&W.name==="DataCloneError")throw W;u.location.assign(Z)}s&&m&&m({action:h,location:_.location,delta:1})}function S(T,N){h="REPLACE";let D=Jm(T)?T:$c(_.location,T,N);a&&a(D,T),p=y();let j=Wm(D,p),Z=_.createHref(D.unstable_mask||D);c.replaceState(j,"",Z),s&&m&&m({action:h,location:_.location,delta:0})}function E(T){return av(T)}let _={get action(){return h},get location(){return t(u,c)},listen(T){if(m)throw new Error("A history only accepts one active listener");return u.addEventListener(Pm,g),m=T,()=>{u.removeEventListener(Pm,g),m=null}},createHref(T){return i(u,T)},createURL:E,encodeLocation(T){let N=E(T);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:b,replace:S,go(T){return c.go(T)}};return _}function av(t,i=!1){let a="http://localhost";typeof window<"u"&&(a=window.location.origin!=="null"?window.location.origin:window.location.href),We(a,"No window.location.(origin|href) available to create URL");let r=typeof t=="string"?t:ar(t);return r=r.replace(/ $/,"%20"),!i&&r.startsWith("//")&&(r=a+r),new URL(r,a)}function m1(t,i,a="/"){return iv(t,i,a,!1)}function iv(t,i,a,r){let u=typeof i=="string"?Pl(i):i,s=Ft(u.pathname||"/",a);if(s==null)return null;let c=g1(t);rv(c);let h=null;for(let m=0;h==null&&m<c.length;++m){let p=yv(s);h=mv(c[m],p,r)}return h}function g1(t,i=[],a=[],r="",u=!1){let s=(c,h,m=u,p)=>{let y={relativePath:p===void 0?c.path||"":p,caseSensitive:c.caseSensitive===!0,childrenIndex:h,route:c};if(y.relativePath.startsWith("/")){if(!y.relativePath.startsWith(r)&&m)return;We(y.relativePath.startsWith(r),`Absolute route path "${y.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),y.relativePath=y.relativePath.slice(r.length)}let g=wt([r,y.relativePath]),b=a.concat(y);c.children&&c.children.length>0&&(We(c.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),g1(c.children,i,b,g,m)),!(c.path==null&&!c.index)&&i.push({path:g,score:hv(g,c.index),routesMeta:b})};return t.forEach((c,h)=>{if(c.path===""||!c.path?.includes("?"))s(c,h);else for(let m of y1(c.path))s(c,h,!0,m)}),i}function y1(t){let i=t.split("/");if(i.length===0)return[];let[a,...r]=i,u=a.endsWith("?"),s=a.replace(/\?$/,"");if(r.length===0)return u?[s,""]:[s];let c=y1(r.join("/")),h=[];return h.push(...c.map(m=>m===""?s:[s,m].join("/"))),u&&h.push(...c),h.map(m=>t.startsWith("/")&&m===""?"/":m)}function rv(t){t.sort((i,a)=>i.score!==a.score?a.score-i.score:pv(i.routesMeta.map(r=>r.childrenIndex),a.routesMeta.map(r=>r.childrenIndex)))}var ov=/^:[\w-]+$/,uv=3,sv=2,cv=1,fv=10,dv=-2,eg=t=>t==="*";function hv(t,i){let a=t.split("/"),r=a.length;return a.some(eg)&&(r+=dv),i&&(r+=sv),a.filter(u=>!eg(u)).reduce((u,s)=>u+(ov.test(s)?uv:s===""?cv:fv),r)}function pv(t,i){return t.length===i.length&&t.slice(0,-1).every((r,u)=>r===i[u])?t[t.length-1]-i[i.length-1]:0}function mv(t,i,a=!1){let{routesMeta:r}=t,u={},s="/",c=[];for(let h=0;h<r.length;++h){let m=r[h],p=h===r.length-1,y=s==="/"?i:i.slice(s.length)||"/",g=Go({path:m.relativePath,caseSensitive:m.caseSensitive,end:p},y),b=m.route;if(!g&&p&&a&&!r[r.length-1].route.index&&(g=Go({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},y)),!g)return null;Object.assign(u,g.params),c.push({params:u,pathname:wt([s,g.pathname]),pathnameBase:Sv(wt([s,g.pathnameBase])),route:b}),g.pathnameBase!=="/"&&(s=wt([s,g.pathnameBase]))}return c}function Go(t,i){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[a,r]=gv(t.path,t.caseSensitive,t.end),u=i.match(a);if(!u)return null;let s=u[0],c=s.replace(/(.)\/+$/,"$1"),h=u.slice(1);return{params:r.reduce((p,{paramName:y,isOptional:g},b)=>{if(y==="*"){let E=h[b]||"";c=s.slice(0,s.length-E.length).replace(/(.)\/+$/,"$1")}const S=h[b];return g&&!S?p[y]=void 0:p[y]=(S||"").replace(/%2F/g,"/"),p},{}),pathname:s,pathnameBase:c,pattern:t}}function gv(t,i=!1,a=!0){st(t==="*"||!t.endsWith("*")||t.endsWith("/*"),`Route path "${t}" will be treated as if it were "${t.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${t.replace(/\*$/,"/*")}".`);let r=[],u="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,h,m,p,y)=>{if(r.push({paramName:h,isOptional:m!=null}),m){let g=y.charAt(p+c.length);return g&&g!=="/"?"/([^\\/]*)":"(?:/([^\\/]*))?"}return"/([^\\/]+)"}).replace(/\/([\w-]+)\?(\/|$)/g,"(/$1)?$2");return t.endsWith("*")?(r.push({paramName:"*"}),u+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):a?u+="\\/*$":t!==""&&t!=="/"&&(u+="(?:(?=\\/|$))"),[new RegExp(u,i?void 0:"i"),r]}function yv(t){try{return t.split("/").map(i=>decodeURIComponent(i).replace(/\//g,"%2F")).join("/")}catch(i){return st(!1,`The URL path "${t}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${i}).`),t}}function Ft(t,i){if(i==="/")return t;if(!t.toLowerCase().startsWith(i.toLowerCase()))return null;let a=i.endsWith("/")?i.length-1:i.length,r=t.charAt(a);return r&&r!=="/"?null:t.slice(a)||"/"}var xv=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function bv(t,i="/"){let{pathname:a,search:r="",hash:u=""}=typeof t=="string"?Pl(t):t,s;return a?(a=a.replace(/\/\/+/g,"/"),a.startsWith("/")?s=ng(a.substring(1),"/"):s=ng(a,i)):s=i,{pathname:s,search:wv(r),hash:Av(u)}}function ng(t,i){let a=i.replace(/\/+$/,"").split("/");return t.split("/").forEach(u=>{u===".."?a.length>1&&a.pop():u!=="."&&a.push(u)}),a.length>1?a.join("/"):"/"}function zc(t,i,a,r){return`Cannot include a '${t}' character in a manually specified \`to.${i}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${a}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function vv(t){return t.filter((i,a)=>a===0||i.route.path&&i.route.path.length>0)}function gf(t){let i=vv(t);return i.map((a,r)=>r===i.length-1?a.pathname:a.pathnameBase)}function Po(t,i,a,r=!1){let u;typeof t=="string"?u=Pl(t):(u={...t},We(!u.pathname||!u.pathname.includes("?"),zc("?","pathname","search",u)),We(!u.pathname||!u.pathname.includes("#"),zc("#","pathname","hash",u)),We(!u.search||!u.search.includes("#"),zc("#","search","hash",u)));let s=t===""||u.pathname==="",c=s?"/":u.pathname,h;if(c==null)h=a;else{let g=i.length-1;if(!r&&c.startsWith("..")){let b=c.split("/");for(;b[0]==="..";)b.shift(),g-=1;u.pathname=b.join("/")}h=g>=0?i[g]:"/"}let m=bv(u,h),p=c&&c!=="/"&&c.endsWith("/"),y=(s||c===".")&&a.endsWith("/");return!m.pathname.endsWith("/")&&(p||y)&&(m.pathname+="/"),m}var wt=t=>t.join("/").replace(/\/\/+/g,"/"),Sv=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),wv=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Av=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t,kv=class{constructor(t,i,a,r=!1){this.status=t,this.statusText=i||"",this.internal=r,a instanceof Error?(this.data=a.toString(),this.error=a):this.data=a}};function Ev(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}function Cv(t){return t.map(i=>i.route.path).filter(Boolean).join("/").replace(/\/\/*/g,"/")||"/"}var x1=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";function b1(t,i){let a=t;if(typeof a!="string"||!xv.test(a))return{absoluteURL:void 0,isExternal:!1,to:a};let r=a,u=!1;if(x1)try{let s=new URL(window.location.href),c=a.startsWith("//")?new URL(s.protocol+a):new URL(a),h=Ft(c.pathname,i);c.origin===s.origin&&h!=null?a=h+c.search+c.hash:u=!0}catch{st(!1,`<Link to="${a}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:u,to:a}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");var v1=["POST","PUT","PATCH","DELETE"];new Set(v1);var Tv=["GET",...v1];new Set(Tv);var Ka=C.createContext(null);Ka.displayName="DataRouter";var Jo=C.createContext(null);Jo.displayName="DataRouterState";var Nv=C.createContext(!1),S1=C.createContext({isTransitioning:!1});S1.displayName="ViewTransition";var zv=C.createContext(new Map);zv.displayName="Fetchers";var _v=C.createContext(null);_v.displayName="Await";var Pn=C.createContext(null);Pn.displayName="Navigation";var or=C.createContext(null);or.displayName="Location";var mt=C.createContext({outlet:null,matches:[],isDataRoute:!1});mt.displayName="Route";var yf=C.createContext(null);yf.displayName="RouteError";var w1="REACT_ROUTER_ERROR",Rv="REDIRECT",Mv="ROUTE_ERROR_RESPONSE";function Dv(t){if(t.startsWith(`${w1}:${Rv}:{`))try{let i=JSON.parse(t.slice(28));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string"&&typeof i.location=="string"&&typeof i.reloadDocument=="boolean"&&typeof i.replace=="boolean")return i}catch{}}function jv(t){if(t.startsWith(`${w1}:${Mv}:{`))try{let i=JSON.parse(t.slice(40));if(typeof i=="object"&&i&&typeof i.status=="number"&&typeof i.statusText=="string")return new kv(i.status,i.statusText,i.data)}catch{}}function Ov(t,{relative:i}={}){We($a(),"useHref() may be used only in the context of a <Router> component.");let{basename:a,navigator:r}=C.useContext(Pn),{hash:u,pathname:s,search:c}=ur(t,{relative:i}),h=s;return a!=="/"&&(h=s==="/"?a:wt([a,s])),r.createHref({pathname:h,search:c,hash:u})}function $a(){return C.useContext(or)!=null}function At(){return We($a(),"useLocation() may be used only in the context of a <Router> component."),C.useContext(or).location}var A1="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function k1(t){C.useContext(Pn).static||C.useLayoutEffect(t)}function E1(){let{isDataRoute:t}=C.useContext(mt);return t?Kv():Lv()}function Lv(){We($a(),"useNavigate() may be used only in the context of a <Router> component.");let t=C.useContext(Ka),{basename:i,navigator:a}=C.useContext(Pn),{matches:r}=C.useContext(mt),{pathname:u}=At(),s=JSON.stringify(gf(r)),c=C.useRef(!1);return k1(()=>{c.current=!0}),C.useCallback((m,p={})=>{if(st(c.current,A1),!c.current)return;if(typeof m=="number"){a.go(m);return}let y=Po(m,JSON.parse(s),u,p.relative==="path");t==null&&i!=="/"&&(y.pathname=y.pathname==="/"?i:wt([i,y.pathname])),(p.replace?a.replace:a.push)(y,p.state,p)},[i,a,s,u,t])}C.createContext(null);function Bv(){let{matches:t}=C.useContext(mt),i=t[t.length-1];return i?i.params:{}}function ur(t,{relative:i}={}){let{matches:a}=C.useContext(mt),{pathname:r}=At(),u=JSON.stringify(gf(a));return C.useMemo(()=>Po(t,JSON.parse(u),r,i==="path"),[t,u,r,i])}function Hv(t,i){return C1(t,i)}function C1(t,i,a){We($a(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:r}=C.useContext(Pn),{matches:u}=C.useContext(mt),s=u[u.length-1],c=s?s.params:{},h=s?s.pathname:"/",m=s?s.pathnameBase:"/",p=s&&s.route;{let T=p&&p.path||"";N1(h,!p||T.endsWith("*")||T.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${T}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${T}"> to <Route path="${T==="/"?"*":`${T}/*`}">.`)}let y=At(),g;if(i){let T=typeof i=="string"?Pl(i):i;We(m==="/"||T.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${T.pathname}" was given in the \`location\` prop.`),g=T}else g=y;let b=g.pathname||"/",S=b;if(m!=="/"){let T=m.replace(/^\//,"").split("/");S="/"+b.replace(/^\//,"").split("/").slice(T.length).join("/")}let E=m1(t,{pathname:S});st(p||E!=null,`No routes matched location "${g.pathname}${g.search}${g.hash}" `),st(E==null||E[E.length-1].route.element!==void 0||E[E.length-1].route.Component!==void 0||E[E.length-1].route.lazy!==void 0,`Matched leaf route at location "${g.pathname}${g.search}${g.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let _=Gv(E&&E.map(T=>Object.assign({},T,{params:Object.assign({},c,T.params),pathname:wt([m,r.encodeLocation?r.encodeLocation(T.pathname.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathname]),pathnameBase:T.pathnameBase==="/"?m:wt([m,r.encodeLocation?r.encodeLocation(T.pathnameBase.replace(/\?/g,"%3F").replace(/#/g,"%23")).pathname:T.pathnameBase])})),u,a);return i&&_?C.createElement(or.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",unstable_mask:void 0,...g},navigationType:"POP"}},_):_}function Uv(){let t=Zv(),i=Ev(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),a=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",u={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r},c=null;return console.error("Error handled by React Router default ErrorBoundary:",t),c=C.createElement(C.Fragment,null,C.createElement("p",null,"💿 Hey developer 👋"),C.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",C.createElement("code",{style:s},"ErrorBoundary")," or"," ",C.createElement("code",{style:s},"errorElement")," prop on your route.")),C.createElement(C.Fragment,null,C.createElement("h2",null,"Unexpected Application Error!"),C.createElement("h3",{style:{fontStyle:"italic"}},i),a?C.createElement("pre",{style:u},a):null,c)}var qv=C.createElement(Uv,null),T1=class extends C.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,i){return i.location!==t.location||i.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:i.error,location:i.location,revalidation:t.revalidation||i.revalidation}}componentDidCatch(t,i){this.props.onError?this.props.onError(t,i):console.error("React Router caught the following error during render",t)}render(){let t=this.state.error;if(this.context&&typeof t=="object"&&t&&"digest"in t&&typeof t.digest=="string"){const a=jv(t.digest);a&&(t=a)}let i=t!==void 0?C.createElement(mt.Provider,{value:this.props.routeContext},C.createElement(yf.Provider,{value:t,children:this.props.component})):this.props.children;return this.context?C.createElement(Iv,{error:t},i):i}};T1.contextType=Nv;var _c=new WeakMap;function Iv({children:t,error:i}){let{basename:a}=C.useContext(Pn);if(typeof i=="object"&&i&&"digest"in i&&typeof i.digest=="string"){let r=Dv(i.digest);if(r){let u=_c.get(i);if(u)throw u;let s=b1(r.location,a);if(x1&&!_c.get(i))if(s.isExternal||r.reloadDocument)window.location.href=s.absoluteURL||s.to;else{const c=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(s.to,{replace:r.replace}));throw _c.set(i,c),c}return C.createElement("meta",{httpEquiv:"refresh",content:`0;url=${s.absoluteURL||s.to}`})}}return t}function Vv({routeContext:t,match:i,children:a}){let r=C.useContext(Ka);return r&&r.static&&r.staticContext&&(i.route.errorElement||i.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=i.route.id),C.createElement(mt.Provider,{value:t},a)}function Gv(t,i=[],a){let r=a?.state;if(t==null){if(!r)return null;if(r.errors)t=r.matches;else if(i.length===0&&!r.initialized&&r.matches.length>0)t=r.matches;else return null}let u=t,s=r?.errors;if(s!=null){let y=u.findIndex(g=>g.route.id&&s?.[g.route.id]!==void 0);We(y>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(s).join(",")}`),u=u.slice(0,Math.min(u.length,y+1))}let c=!1,h=-1;if(a&&r){c=r.renderFallback;for(let y=0;y<u.length;y++){let g=u[y];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(h=y),g.route.id){let{loaderData:b,errors:S}=r,E=g.route.loader&&!b.hasOwnProperty(g.route.id)&&(!S||S[g.route.id]===void 0);if(g.route.lazy||E){a.isStatic&&(c=!0),h>=0?u=u.slice(0,h+1):u=[u[0]];break}}}}let m=a?.onError,p=r&&m?(y,g)=>{m(y,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:Cv(r.matches),errorInfo:g})}:void 0;return u.reduceRight((y,g,b)=>{let S,E=!1,_=null,T=null;r&&(S=s&&g.route.id?s[g.route.id]:void 0,_=g.route.errorElement||qv,c&&(h<0&&b===0?(N1("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),E=!0,T=null):h===b&&(E=!0,T=g.route.hydrateFallbackElement||null)));let N=i.concat(u.slice(0,b+1)),D=()=>{let j;return S?j=_:E?j=T:g.route.Component?j=C.createElement(g.route.Component,null):g.route.element?j=g.route.element:j=y,C.createElement(Vv,{match:g,routeContext:{outlet:y,matches:N,isDataRoute:r!=null},children:j})};return r&&(g.route.ErrorBoundary||g.route.errorElement||b===0)?C.createElement(T1,{location:r.location,revalidation:r.revalidation,component:_,error:S,children:D(),routeContext:{outlet:null,matches:N,isDataRoute:!0},onError:p}):D()},null)}function xf(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yv(t){let i=C.useContext(Ka);return We(i,xf(t)),i}function Xv(t){let i=C.useContext(Jo);return We(i,xf(t)),i}function Qv(t){let i=C.useContext(mt);return We(i,xf(t)),i}function bf(t){let i=Qv(t),a=i.matches[i.matches.length-1];return We(a.route.id,`${t} can only be used on routes that contain a unique "id"`),a.route.id}function Fv(){return bf("useRouteId")}function Zv(){let t=C.useContext(yf),i=Xv("useRouteError"),a=bf("useRouteError");return t!==void 0?t:i.errors?.[a]}function Kv(){let{router:t}=Yv("useNavigate"),i=bf("useNavigate"),a=C.useRef(!1);return k1(()=>{a.current=!0}),C.useCallback(async(u,s={})=>{st(a.current,A1),a.current&&(typeof u=="number"?await t.navigate(u):await t.navigate(u,{fromRouteId:i,...s}))},[t,i])}var tg={};function N1(t,i,a){!i&&!tg[t]&&(tg[t]=!0,st(!1,a))}C.memo($v);function $v({routes:t,future:i,state:a,isStatic:r,onError:u}){return C1(t,void 0,{state:a,isStatic:r,onError:u})}function Pv({to:t,replace:i,state:a,relative:r}){We($a(),"<Navigate> may be used only in the context of a <Router> component.");let{static:u}=C.useContext(Pn);st(!u,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:s}=C.useContext(mt),{pathname:c}=At(),h=E1(),m=Po(t,gf(s),c,r==="path"),p=JSON.stringify(m);return C.useEffect(()=>{h(JSON.parse(p),{replace:i,state:a,relative:r})},[h,p,r,i,a]),null}function Xt(t){We(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function Jv({basename:t="/",children:i=null,location:a,navigationType:r="POP",navigator:u,static:s=!1,unstable_useTransitions:c}){We(!$a(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let h=t.replace(/^\/*/,"/"),m=C.useMemo(()=>({basename:h,navigator:u,static:s,unstable_useTransitions:c,future:{}}),[h,u,s,c]);typeof a=="string"&&(a=Pl(a));let{pathname:p="/",search:y="",hash:g="",state:b=null,key:S="default",unstable_mask:E}=a,_=C.useMemo(()=>{let T=Ft(p,h);return T==null?null:{location:{pathname:T,search:y,hash:g,state:b,key:S,unstable_mask:E},navigationType:r}},[h,p,y,g,b,S,r,E]);return st(_!=null,`<Router basename="${h}"> is not able to match the URL "${p}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`),_==null?null:C.createElement(Pn.Provider,{value:m},C.createElement(or.Provider,{children:i,value:_}))}function Wv({children:t,location:i}){return Hv(Pc(t),i)}function Pc(t,i=[]){let a=[];return C.Children.forEach(t,(r,u)=>{if(!C.isValidElement(r))return;let s=[...i,u];if(r.type===C.Fragment){a.push.apply(a,Pc(r.props.children,s));return}We(r.type===Xt,`[${typeof r.type=="string"?r.type:r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),We(!r.props.index||!r.props.children,"An index route cannot have child routes.");let c={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,middleware:r.props.middleware,loader:r.props.loader,action:r.props.action,hydrateFallbackElement:r.props.hydrateFallbackElement,HydrateFallback:r.props.HydrateFallback,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.hasErrorBoundary===!0||r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(c.children=Pc(r.props.children,s)),a.push(c)}),a}var qo="get",Io="application/x-www-form-urlencoded";function Wo(t){return typeof HTMLElement<"u"&&t instanceof HTMLElement}function e2(t){return Wo(t)&&t.tagName.toLowerCase()==="button"}function n2(t){return Wo(t)&&t.tagName.toLowerCase()==="form"}function t2(t){return Wo(t)&&t.tagName.toLowerCase()==="input"}function l2(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function a2(t,i){return t.button===0&&(!i||i==="_self")&&!l2(t)}var Do=null;function i2(){if(Do===null)try{new FormData(document.createElement("form"),0),Do=!1}catch{Do=!0}return Do}var r2=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Rc(t){return t!=null&&!r2.has(t)?(st(!1,`"${t}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Io}"`),null):t}function o2(t,i){let a,r,u,s,c;if(n2(t)){let h=t.getAttribute("action");r=h?Ft(h,i):null,a=t.getAttribute("method")||qo,u=Rc(t.getAttribute("enctype"))||Io,s=new FormData(t)}else if(e2(t)||t2(t)&&(t.type==="submit"||t.type==="image")){let h=t.form;if(h==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=t.getAttribute("formaction")||h.getAttribute("action");if(r=m?Ft(m,i):null,a=t.getAttribute("formmethod")||h.getAttribute("method")||qo,u=Rc(t.getAttribute("formenctype"))||Rc(h.getAttribute("enctype"))||Io,s=new FormData(h,t),!i2()){let{name:p,type:y,value:g}=t;if(y==="image"){let b=p?`${p}.`:"";s.append(`${b}x`,"0"),s.append(`${b}y`,"0")}else p&&s.append(p,g)}}else{if(Wo(t))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');a=qo,r=null,u=Io,c=t}return s&&u==="text/plain"&&(c=s,s=void 0),{action:r,method:a.toLowerCase(),encType:u,formData:s,body:c}}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");function vf(t,i){if(t===!1||t===null||typeof t>"u")throw new Error(i)}function u2(t,i,a,r){let u=typeof t=="string"?new URL(t,typeof window>"u"?"server://singlefetch/":window.location.origin):t;return a?u.pathname.endsWith("/")?u.pathname=`${u.pathname}_.${r}`:u.pathname=`${u.pathname}.${r}`:u.pathname==="/"?u.pathname=`_root.${r}`:i&&Ft(u.pathname,i)==="/"?u.pathname=`${i.replace(/\/$/,"")}/_root.${r}`:u.pathname=`${u.pathname.replace(/\/$/,"")}.${r}`,u}async function s2(t,i){if(t.id in i)return i[t.id];try{let a=await import(t.module);return i[t.id]=a,a}catch(a){return console.error(`Error loading route module \`${t.module}\`, reloading page...`),console.error(a),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function c2(t){return t==null?!1:t.href==null?t.rel==="preload"&&typeof t.imageSrcSet=="string"&&typeof t.imageSizes=="string":typeof t.rel=="string"&&typeof t.href=="string"}async function f2(t,i,a){let r=await Promise.all(t.map(async u=>{let s=i.routes[u.route.id];if(s){let c=await s2(s,a);return c.links?c.links():[]}return[]}));return m2(r.flat(1).filter(c2).filter(u=>u.rel==="stylesheet"||u.rel==="preload").map(u=>u.rel==="stylesheet"?{...u,rel:"prefetch",as:"style"}:{...u,rel:"prefetch"}))}function lg(t,i,a,r,u,s){let c=(m,p)=>a[p]?m.route.id!==a[p].route.id:!0,h=(m,p)=>a[p].pathname!==m.pathname||a[p].route.path?.endsWith("*")&&a[p].params["*"]!==m.params["*"];return s==="assets"?i.filter((m,p)=>c(m,p)||h(m,p)):s==="data"?i.filter((m,p)=>{let y=r.routes[m.route.id];if(!y||!y.hasLoader)return!1;if(c(m,p)||h(m,p))return!0;if(m.route.shouldRevalidate){let g=m.route.shouldRevalidate({currentUrl:new URL(u.pathname+u.search+u.hash,window.origin),currentParams:a[0]?.params||{},nextUrl:new URL(t,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof g=="boolean")return g}return!0}):[]}function d2(t,i,{includeHydrateFallback:a}={}){return h2(t.map(r=>{let u=i.routes[r.route.id];if(!u)return[];let s=[u.module];return u.clientActionModule&&(s=s.concat(u.clientActionModule)),u.clientLoaderModule&&(s=s.concat(u.clientLoaderModule)),a&&u.hydrateFallbackModule&&(s=s.concat(u.hydrateFallbackModule)),u.imports&&(s=s.concat(u.imports)),s}).flat(1))}function h2(t){return[...new Set(t)]}function p2(t){let i={},a=Object.keys(t).sort();for(let r of a)i[r]=t[r];return i}function m2(t,i){let a=new Set;return new Set(i),t.reduce((r,u)=>{let s=JSON.stringify(p2(u));return a.has(s)||(a.add(s),r.push({key:s,link:u})),r},[])}function z1(){let t=C.useContext(Ka);return vf(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function g2(){let t=C.useContext(Jo);return vf(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Sf=C.createContext(void 0);Sf.displayName="FrameworkContext";function _1(){let t=C.useContext(Sf);return vf(t,"You must render this element inside a <HydratedRouter> element"),t}function y2(t,i){let a=C.useContext(Sf),[r,u]=C.useState(!1),[s,c]=C.useState(!1),{onFocus:h,onBlur:m,onMouseEnter:p,onMouseLeave:y,onTouchStart:g}=i,b=C.useRef(null);C.useEffect(()=>{if(t==="render"&&c(!0),t==="viewport"){let _=N=>{N.forEach(D=>{c(D.isIntersecting)})},T=new IntersectionObserver(_,{threshold:.5});return b.current&&T.observe(b.current),()=>{T.disconnect()}}},[t]),C.useEffect(()=>{if(r){let _=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(_)}}},[r]);let S=()=>{u(!0)},E=()=>{u(!1),c(!1)};return a?t!=="intent"?[s,b,{}]:[s,b,{onFocus:Zi(h,S),onBlur:Zi(m,E),onMouseEnter:Zi(p,S),onMouseLeave:Zi(y,E),onTouchStart:Zi(g,S)}]:[!1,b,{}]}function Zi(t,i){return a=>{t&&t(a),a.defaultPrevented||i(a)}}function x2({page:t,...i}){let{router:a}=z1(),r=C.useMemo(()=>m1(a.routes,t,a.basename),[a.routes,t,a.basename]);return r?C.createElement(v2,{page:t,matches:r,...i}):null}function b2(t){let{manifest:i,routeModules:a}=_1(),[r,u]=C.useState([]);return C.useEffect(()=>{let s=!1;return f2(t,i,a).then(c=>{s||u(c)}),()=>{s=!0}},[t,i,a]),r}function v2({page:t,matches:i,...a}){let r=At(),{future:u,manifest:s,routeModules:c}=_1(),{basename:h}=z1(),{loaderData:m,matches:p}=g2(),y=C.useMemo(()=>lg(t,i,p,s,r,"data"),[t,i,p,s,r]),g=C.useMemo(()=>lg(t,i,p,s,r,"assets"),[t,i,p,s,r]),b=C.useMemo(()=>{if(t===r.pathname+r.search+r.hash)return[];let _=new Set,T=!1;if(i.forEach(D=>{let j=s.routes[D.route.id];!j||!j.hasLoader||(!y.some(Z=>Z.route.id===D.route.id)&&D.route.id in m&&c[D.route.id]?.shouldRevalidate||j.hasClientLoader?T=!0:_.add(D.route.id))}),_.size===0)return[];let N=u2(t,h,u.unstable_trailingSlashAwareDataRequests,"data");return T&&_.size>0&&N.searchParams.set("_routes",i.filter(D=>_.has(D.route.id)).map(D=>D.route.id).join(",")),[N.pathname+N.search]},[h,u.unstable_trailingSlashAwareDataRequests,m,r,s,y,i,t,c]),S=C.useMemo(()=>d2(g,s),[g,s]),E=b2(g);return C.createElement(C.Fragment,null,b.map(_=>C.createElement("link",{key:_,rel:"prefetch",as:"fetch",href:_,...a})),S.map(_=>C.createElement("link",{key:_,rel:"modulepreload",href:_,...a})),E.map(({key:_,link:T})=>C.createElement("link",{key:_,nonce:a.nonce,...T,crossOrigin:T.crossOrigin??a.crossOrigin})))}function S2(...t){return i=>{t.forEach(a=>{typeof a=="function"?a(i):a!=null&&(a.current=i)})}}var w2=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{w2&&(window.__reactRouterVersion="7.13.1")}catch{}function A2({basename:t,children:i,unstable_useTransitions:a,window:r}){let u=C.useRef();u.current==null&&(u.current=nv({window:r,v5Compat:!0}));let s=u.current,[c,h]=C.useState({action:s.action,location:s.location}),m=C.useCallback(p=>{a===!1?h(p):C.startTransition(()=>h(p))},[a]);return C.useLayoutEffect(()=>s.listen(m),[s,m]),C.createElement(Jv,{basename:t,children:i,location:c.location,navigationType:c.action,navigator:s,unstable_useTransitions:a})}var R1=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Kn=C.forwardRef(function({onClick:i,discover:a="render",prefetch:r="none",relative:u,reloadDocument:s,replace:c,unstable_mask:h,state:m,target:p,to:y,preventScrollReset:g,viewTransition:b,unstable_defaultShouldRevalidate:S,...E},_){let{basename:T,navigator:N,unstable_useTransitions:D}=C.useContext(Pn),j=typeof y=="string"&&R1.test(y),Z=b1(y,T);y=Z.to;let W=Ov(y,{relative:u}),q=At(),ee=null;if(h){let P=Po(h,[],q.unstable_mask?q.unstable_mask.pathname:"/",!0);T!=="/"&&(P.pathname=P.pathname==="/"?T:wt([T,P.pathname])),ee=N.createHref(P)}let[$,ue,O]=y2(r,E),J=T2(y,{replace:c,unstable_mask:h,state:m,target:p,preventScrollReset:g,relative:u,viewTransition:b,unstable_defaultShouldRevalidate:S,unstable_useTransitions:D});function ne(P){i&&i(P),P.defaultPrevented||J(P)}let xe=!(Z.isExternal||s),re=C.createElement("a",{...E,...O,href:(xe?ee:void 0)||Z.absoluteURL||W,onClick:xe?ne:i,ref:S2(_,ue),target:p,"data-discover":!j&&a==="render"?"true":void 0});return $&&!j?C.createElement(C.Fragment,null,re,C.createElement(x2,{page:W})):re});Kn.displayName="Link";var k2=C.forwardRef(function({"aria-current":i="page",caseSensitive:a=!1,className:r="",end:u=!1,style:s,to:c,viewTransition:h,children:m,...p},y){let g=ur(c,{relative:p.relative}),b=At(),S=C.useContext(Jo),{navigator:E,basename:_}=C.useContext(Pn),T=S!=null&&M2(g)&&h===!0,N=E.encodeLocation?E.encodeLocation(g).pathname:g.pathname,D=b.pathname,j=S&&S.navigation&&S.navigation.location?S.navigation.location.pathname:null;a||(D=D.toLowerCase(),j=j?j.toLowerCase():null,N=N.toLowerCase()),j&&_&&(j=Ft(j,_)||j);const Z=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let W=D===N||!u&&D.startsWith(N)&&D.charAt(Z)==="/",q=j!=null&&(j===N||!u&&j.startsWith(N)&&j.charAt(N.length)==="/"),ee={isActive:W,isPending:q,isTransitioning:T},$=W?i:void 0,ue;typeof r=="function"?ue=r(ee):ue=[r,W?"active":null,q?"pending":null,T?"transitioning":null].filter(Boolean).join(" ");let O=typeof s=="function"?s(ee):s;return C.createElement(Kn,{...p,"aria-current":$,className:ue,ref:y,style:O,to:c,viewTransition:h},typeof m=="function"?m(ee):m)});k2.displayName="NavLink";var E2=C.forwardRef(({discover:t="render",fetcherKey:i,navigate:a,reloadDocument:r,replace:u,state:s,method:c=qo,action:h,onSubmit:m,relative:p,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:b,...S},E)=>{let{unstable_useTransitions:_}=C.useContext(Pn),T=_2(),N=R2(h,{relative:p}),D=c.toLowerCase()==="get"?"get":"post",j=typeof h=="string"&&R1.test(h),Z=W=>{if(m&&m(W),W.defaultPrevented)return;W.preventDefault();let q=W.nativeEvent.submitter,ee=q?.getAttribute("formmethod")||c,$=()=>T(q||W.currentTarget,{fetcherKey:i,method:ee,navigate:a,replace:u,state:s,relative:p,preventScrollReset:y,viewTransition:g,unstable_defaultShouldRevalidate:b});_&&a!==!1?C.startTransition(()=>$()):$()};return C.createElement("form",{ref:E,method:D,action:N,onSubmit:r?m:Z,...S,"data-discover":!j&&t==="render"?"true":void 0})});E2.displayName="Form";function C2(t){return`${t} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function M1(t){let i=C.useContext(Ka);return We(i,C2(t)),i}function T2(t,{target:i,replace:a,unstable_mask:r,state:u,preventScrollReset:s,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:m,unstable_useTransitions:p}={}){let y=E1(),g=At(),b=ur(t,{relative:c});return C.useCallback(S=>{if(a2(S,i)){S.preventDefault();let E=a!==void 0?a:ar(g)===ar(b),_=()=>y(t,{replace:E,unstable_mask:r,state:u,preventScrollReset:s,relative:c,viewTransition:h,unstable_defaultShouldRevalidate:m});p?C.startTransition(()=>_()):_()}},[g,y,b,a,r,u,i,t,s,c,h,m,p])}var N2=0,z2=()=>`__${String(++N2)}__`;function _2(){let{router:t}=M1("useSubmit"),{basename:i}=C.useContext(Pn),a=Fv(),r=t.fetch,u=t.navigate;return C.useCallback(async(s,c={})=>{let{action:h,method:m,encType:p,formData:y,body:g}=o2(s,i);if(c.navigate===!1){let b=c.fetcherKey||z2();await r(b,a,c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||m,formEncType:c.encType||p,flushSync:c.flushSync})}else await u(c.action||h,{unstable_defaultShouldRevalidate:c.unstable_defaultShouldRevalidate,preventScrollReset:c.preventScrollReset,formData:y,body:g,formMethod:c.method||m,formEncType:c.encType||p,replace:c.replace,state:c.state,fromRouteId:a,flushSync:c.flushSync,viewTransition:c.viewTransition})},[r,u,i,a])}function R2(t,{relative:i}={}){let{basename:a}=C.useContext(Pn),r=C.useContext(mt);We(r,"useFormAction must be used inside a RouteContext");let[u]=r.matches.slice(-1),s={...ur(t||".",{relative:i})},c=At();if(t==null){s.search=c.search;let h=new URLSearchParams(s.search),m=h.getAll("index");if(m.some(y=>y==="")){h.delete("index"),m.filter(g=>g).forEach(g=>h.append("index",g));let y=h.toString();s.search=y?`?${y}`:""}}return(!t||t===".")&&u.route.index&&(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index"),a!=="/"&&(s.pathname=s.pathname==="/"?a:wt([a,s.pathname])),ar(s)}function M2(t,{relative:i}={}){let a=C.useContext(S1);We(a!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=M1("useViewTransitionState"),u=ur(t,{relative:i});if(!a.isTransitioning)return!1;let s=Ft(a.currentLocation.pathname,r)||a.currentLocation.pathname,c=Ft(a.nextLocation.pathname,r)||a.nextLocation.pathname;return Go(u.pathname,c)!=null||Go(u.pathname,s)!=null}p1();const D2=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),j2=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(i,a,r)=>r?r.toUpperCase():a.toLowerCase()),ag=t=>{const i=j2(t);return i.charAt(0).toUpperCase()+i.slice(1)},D1=(...t)=>t.filter((i,a,r)=>!!i&&i.trim()!==""&&r.indexOf(i)===a).join(" ").trim(),O2=t=>{for(const i in t)if(i.startsWith("aria-")||i==="role"||i==="title")return!0};var L2={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};const B2=C.forwardRef(({color:t="currentColor",size:i=24,strokeWidth:a=2,absoluteStrokeWidth:r,className:u="",children:s,iconNode:c,...h},m)=>C.createElement("svg",{ref:m,...L2,width:i,height:i,stroke:t,strokeWidth:r?Number(a)*24/Number(i):a,className:D1("lucide",u),...!s&&!O2(h)&&{"aria-hidden":"true"},...h},[...c.map(([p,y])=>C.createElement(p,y)),...Array.isArray(s)?s:[s]]));const De=(t,i)=>{const a=C.forwardRef(({className:r,...u},s)=>C.createElement(B2,{ref:s,iconNode:i,className:D1(`lucide-${D2(ag(t))}`,`lucide-${t}`,r),...u}));return a.displayName=ag(t),a};const H2=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],ig=De("arrow-left",H2);const U2=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],rg=De("arrow-right",U2);const q2=[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]],I2=De("award",q2);const V2=[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]],j1=De("book-open",V2);const G2=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],og=De("briefcase",G2);const Y2=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],eu=De("calendar",Y2);const X2=[["path",{d:"M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z",key:"18u6gg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]],Q2=De("camera",X2);const F2=[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]],Z2=De("chevron-left",F2);const K2=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],$2=De("chevron-right",K2);const P2=[["path",{d:"M12 6v6l4 2",key:"mmk7yg"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],O1=De("clock",P2);const J2=[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]],W2=De("code",J2);const eS=[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]],nS=De("coffee",eS);const tS=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],L1=De("github",tS);const lS=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],aS=De("graduation-cap",lS);const iS=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],rS=De("heart",iS);const oS=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"r6nss1"}]],uS=De("house",oS);const sS=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],B1=De("image",sS);const cS=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],H1=De("loader-circle",cS);const fS=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],wf=De("mail",fS);const dS=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],U1=De("map-pin",dS);const hS=[["path",{d:"M4 5h16",key:"1tepv9"}],["path",{d:"M4 12h16",key:"1lakjw"}],["path",{d:"M4 19h16",key:"1djgab"}]],pS=De("menu",hS);const mS=[["path",{d:"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z",key:"18887p"}]],gS=De("message-square",mS);const yS=[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]],Af=De("music",yS);const xS=[["rect",{x:"14",y:"3",width:"5",height:"18",rx:"1",key:"kaeet6"}],["rect",{x:"5",y:"3",width:"5",height:"18",rx:"1",key:"1wsw3u"}]],bS=De("pause",xS);const vS=[["path",{d:"M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",key:"10ikf1"}]],SS=De("play",vS);const wS=[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]],AS=De("repeat",wS);const kS=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],ES=De("search",kS);const CS=[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]],TS=De("shuffle",CS);const NS=[["path",{d:"M17.971 4.285A2 2 0 0 1 21 6v12a2 2 0 0 1-3.029 1.715l-9.997-5.998a2 2 0 0 1-.003-3.432z",key:"15892j"}],["path",{d:"M3 20V4",key:"1ptbpl"}]],zS=De("skip-back",NS);const _S=[["path",{d:"M21 4v16",key:"7j8fe9"}],["path",{d:"M6.029 4.285A2 2 0 0 0 3 6v12a2 2 0 0 0 3.029 1.715l9.997-5.998a2 2 0 0 0 .003-3.432z",key:"zs4d6"}]],RS=De("skip-forward",_S);const MS=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],q1=De("tag",MS);const DS=[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]],I1=De("twitter",DS);const jS=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],OS=De("user",jS);const LS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],BS=De("volume-2",LS);const HS=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],US=De("volume-x",HS);const qS=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],V1=De("x",qS),ug=[{label:"首页",href:"/",icon:uS},{label:"博客",href:"/blog",icon:j1},{label:"音乐",href:"/music",icon:Af},{label:"相册",href:"/gallery",icon:B1},{label:"留言",href:"/guestbook",icon:gS},{label:"关于",href:"/about",icon:OS}];function IS(){const[t,i]=C.useState(!1),[a,r]=C.useState(!1),u=At();return C.useEffect(()=>{const s=()=>{i(window.scrollY>10)};return window.addEventListener("scroll",s),()=>window.removeEventListener("scroll",s)},[]),v.jsxs("nav",{"code-path":"src/components/Navbar.tsx:28:5",className:`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${t?"bg-[#f0efe9]/95 backdrop-blur-sm border-b border-[#e5e5e5]":"bg-transparent"}`,children:[v.jsx("div",{"code-path":"src/components/Navbar.tsx:35:7",className:"max-w-[1200px] mx-auto px-6 lg:px-12",children:v.jsxs("div",{"code-path":"src/components/Navbar.tsx:36:9",className:"flex items-center justify-between h-16",children:[v.jsx(Kn,{"code-path":"src/components/Navbar.tsx:38:11",to:"/",className:"text-lg font-medium text-[#1a1a1a] hover:opacity-70 transition-opacity",children:"瀛同学"}),v.jsx("div",{"code-path":"src/components/Navbar.tsx:46:11",className:"hidden md:flex items-center gap-1",children:ug.map(s=>{const c=s.icon,h=u.pathname===s.href||s.href!=="/"&&u.pathname.startsWith(s.href);return v.jsxs(Kn,{"code-path":"src/components/Navbar.tsx:51:17",to:s.href,className:`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${h?"bg-[#1a1a1a] text-white":"text-[#6b6b6b] hover:text-[#1a1a1a] hover:bg-[#e5e5e5]/50"}`,children:[v.jsx(c,{"code-path":"src/components/Navbar.tsx:60:19",className:"w-4 h-4"}),s.label]},s.href)})}),v.jsx("button",{"code-path":"src/components/Navbar.tsx:68:11",className:"md:hidden p-2 text-[#1a1a1a]",onClick:()=>r(!a),children:a?v.jsx(V1,{"code-path":"src/components/Navbar.tsx:73:15",className:"w-5 h-5"}):v.jsx(pS,{"code-path":"src/components/Navbar.tsx:75:15",className:"w-5 h-5"})})]})}),a&&v.jsx("div",{"code-path":"src/components/Navbar.tsx:83:9",className:"md:hidden bg-[#f0efe9] border-b border-[#e5e5e5]",children:v.jsx("div",{"code-path":"src/components/Navbar.tsx:84:11",className:"px-4 py-3 space-y-1",children:ug.map(s=>{const c=s.icon,h=u.pathname===s.href||s.href!=="/"&&u.pathname.startsWith(s.href);return v.jsxs(Kn,{"code-path":"src/components/Navbar.tsx:89:17",to:s.href,onClick:()=>r(!1),className:`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${h?"bg-[#1a1a1a] text-white":"text-[#6b6b6b] hover:bg-[#e5e5e5]/50"}`,children:[v.jsx(c,{"code-path":"src/components/Navbar.tsx:99:19",className:"w-5 h-5"}),s.label]},s.href)})})})]})}function sg(t,i){if(typeof t=="function")return t(i);t!=null&&(t.current=i)}function nu(...t){return i=>{let a=!1;const r=t.map(u=>{const s=sg(u,i);return!a&&typeof s=="function"&&(a=!0),s});if(a)return()=>{for(let u=0;u<r.length;u++){const s=r[u];typeof s=="function"?s():sg(t[u],null)}}}}function Cl(...t){return C.useCallback(nu(...t),t)}var VS=Symbol.for("react.lazy"),Yo=h1[" use ".trim().toString()];function GS(t){return typeof t=="object"&&t!==null&&"then"in t}function G1(t){return t!=null&&typeof t=="object"&&"$$typeof"in t&&t.$$typeof===VS&&"_payload"in t&&GS(t._payload)}function YS(t){const i=QS(t),a=C.forwardRef((r,u)=>{let{children:s,...c}=r;G1(s)&&typeof Yo=="function"&&(s=Yo(s._payload));const h=C.Children.toArray(s),m=h.find(ZS);if(m){const p=m.props.children,y=h.map(g=>g===m?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:g);return v.jsx(i,{...c,ref:u,children:C.isValidElement(p)?C.cloneElement(p,void 0,y):null})}return v.jsx(i,{...c,ref:u,children:s})});return a.displayName=`${t}.Slot`,a}var XS=YS("Slot");function QS(t){const i=C.forwardRef((a,r)=>{let{children:u,...s}=a;if(G1(u)&&typeof Yo=="function"&&(u=Yo(u._payload)),C.isValidElement(u)){const c=$S(u),h=KS(s,u.props);return u.type!==C.Fragment&&(h.ref=r?nu(r,c):c),C.cloneElement(u,h)}return C.Children.count(u)>1?C.Children.only(null):null});return i.displayName=`${t}.SlotClone`,i}var FS=Symbol("radix.slottable");function ZS(t){return C.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===FS}function KS(t,i){const a={...i};for(const r in i){const u=t[r],s=i[r];/^on[A-Z]/.test(r)?u&&s?a[r]=(...h)=>{const m=s(...h);return u(...h),m}:u&&(a[r]=u):r==="style"?a[r]={...u,...s}:r==="className"&&(a[r]=[u,s].filter(Boolean).join(" "))}return{...t,...a}}function $S(t){let i=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning;return a?t.ref:(i=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}function Y1(t){var i,a,r="";if(typeof t=="string"||typeof t=="number")r+=t;else if(typeof t=="object")if(Array.isArray(t)){var u=t.length;for(i=0;i<u;i++)t[i]&&(a=Y1(t[i]))&&(r&&(r+=" "),r+=a)}else for(a in t)t[a]&&(r&&(r+=" "),r+=a);return r}function X1(){for(var t,i,a=0,r="",u=arguments.length;a<u;a++)(t=arguments[a])&&(i=Y1(t))&&(r&&(r+=" "),r+=i);return r}const cg=t=>typeof t=="boolean"?`${t}`:t===0?"0":t,fg=X1,PS=(t,i)=>a=>{var r;if(i?.variants==null)return fg(t,a?.class,a?.className);const{variants:u,defaultVariants:s}=i,c=Object.keys(u).map(p=>{const y=a?.[p],g=s?.[p];if(y===null)return null;const b=cg(y)||cg(g);return u[p][b]}),h=a&&Object.entries(a).reduce((p,y)=>{let[g,b]=y;return b===void 0||(p[g]=b),p},{}),m=i==null||(r=i.compoundVariants)===null||r===void 0?void 0:r.reduce((p,y)=>{let{class:g,className:b,...S}=y;return Object.entries(S).every(E=>{let[_,T]=E;return Array.isArray(T)?T.includes({...s,...h}[_]):{...s,...h}[_]===T})?[...p,g,b]:p},[]);return fg(t,c,m,a?.class,a?.className)},JS=(t,i)=>{const a=new Array(t.length+i.length);for(let r=0;r<t.length;r++)a[r]=t[r];for(let r=0;r<i.length;r++)a[t.length+r]=i[r];return a},WS=(t,i)=>({classGroupId:t,validator:i}),Q1=(t=new Map,i=null,a)=>({nextPart:t,validators:i,classGroupId:a}),Xo="-",dg=[],ew="arbitrary..",nw=t=>{const i=lw(t),{conflictingClassGroups:a,conflictingClassGroupModifiers:r}=t;return{getClassGroupId:c=>{if(c.startsWith("[")&&c.endsWith("]"))return tw(c);const h=c.split(Xo),m=h[0]===""&&h.length>1?1:0;return F1(h,m,i)},getConflictingClassGroupIds:(c,h)=>{if(h){const m=r[c],p=a[c];return m?p?JS(p,m):m:p||dg}return a[c]||dg}}},F1=(t,i,a)=>{if(t.length-i===0)return a.classGroupId;const u=t[i],s=a.nextPart.get(u);if(s){const p=F1(t,i+1,s);if(p)return p}const c=a.validators;if(c===null)return;const h=i===0?t.join(Xo):t.slice(i).join(Xo),m=c.length;for(let p=0;p<m;p++){const y=c[p];if(y.validator(h))return y.classGroupId}},tw=t=>t.slice(1,-1).indexOf(":")===-1?void 0:(()=>{const i=t.slice(1,-1),a=i.indexOf(":"),r=i.slice(0,a);return r?ew+r:void 0})(),lw=t=>{const{theme:i,classGroups:a}=t;return aw(a,i)},aw=(t,i)=>{const a=Q1();for(const r in t){const u=t[r];kf(u,a,r,i)}return a},kf=(t,i,a,r)=>{const u=t.length;for(let s=0;s<u;s++){const c=t[s];iw(c,i,a,r)}},iw=(t,i,a,r)=>{if(typeof t=="string"){rw(t,i,a);return}if(typeof t=="function"){ow(t,i,a,r);return}uw(t,i,a,r)},rw=(t,i,a)=>{const r=t===""?i:Z1(i,t);r.classGroupId=a},ow=(t,i,a,r)=>{if(sw(t)){kf(t(r),i,a,r);return}i.validators===null&&(i.validators=[]),i.validators.push(WS(a,t))},uw=(t,i,a,r)=>{const u=Object.entries(t),s=u.length;for(let c=0;c<s;c++){const[h,m]=u[c];kf(m,Z1(i,h),a,r)}},Z1=(t,i)=>{let a=t;const r=i.split(Xo),u=r.length;for(let s=0;s<u;s++){const c=r[s];let h=a.nextPart.get(c);h||(h=Q1(),a.nextPart.set(c,h)),a=h}return a},sw=t=>"isThemeGetter"in t&&t.isThemeGetter===!0,cw=t=>{if(t<1)return{get:()=>{},set:()=>{}};let i=0,a=Object.create(null),r=Object.create(null);const u=(s,c)=>{a[s]=c,i++,i>t&&(i=0,r=a,a=Object.create(null))};return{get(s){let c=a[s];if(c!==void 0)return c;if((c=r[s])!==void 0)return u(s,c),c},set(s,c){s in a?a[s]=c:u(s,c)}}},Jc="!",hg=":",fw=[],pg=(t,i,a,r,u)=>({modifiers:t,hasImportantModifier:i,baseClassName:a,maybePostfixModifierPosition:r,isExternal:u}),dw=t=>{const{prefix:i,experimentalParseClassName:a}=t;let r=u=>{const s=[];let c=0,h=0,m=0,p;const y=u.length;for(let _=0;_<y;_++){const T=u[_];if(c===0&&h===0){if(T===hg){s.push(u.slice(m,_)),m=_+1;continue}if(T==="/"){p=_;continue}}T==="["?c++:T==="]"?c--:T==="("?h++:T===")"&&h--}const g=s.length===0?u:u.slice(m);let b=g,S=!1;g.endsWith(Jc)?(b=g.slice(0,-1),S=!0):g.startsWith(Jc)&&(b=g.slice(1),S=!0);const E=p&&p>m?p-m:void 0;return pg(s,S,b,E)};if(i){const u=i+hg,s=r;r=c=>c.startsWith(u)?s(c.slice(u.length)):pg(fw,!1,c,void 0,!0)}if(a){const u=r;r=s=>a({className:s,parseClassName:u})}return r},hw=t=>{const i=new Map;return t.orderSensitiveModifiers.forEach((a,r)=>{i.set(a,1e6+r)}),a=>{const r=[];let u=[];for(let s=0;s<a.length;s++){const c=a[s],h=c[0]==="[",m=i.has(c);h||m?(u.length>0&&(u.sort(),r.push(...u),u=[]),r.push(c)):u.push(c)}return u.length>0&&(u.sort(),r.push(...u)),r}},pw=t=>({cache:cw(t.cacheSize),parseClassName:dw(t),sortModifiers:hw(t),...nw(t)}),mw=/\s+/,gw=(t,i)=>{const{parseClassName:a,getClassGroupId:r,getConflictingClassGroupIds:u,sortModifiers:s}=i,c=[],h=t.trim().split(mw);let m="";for(let p=h.length-1;p>=0;p-=1){const y=h[p],{isExternal:g,modifiers:b,hasImportantModifier:S,baseClassName:E,maybePostfixModifierPosition:_}=a(y);if(g){m=y+(m.length>0?" "+m:m);continue}let T=!!_,N=r(T?E.substring(0,_):E);if(!N){if(!T){m=y+(m.length>0?" "+m:m);continue}if(N=r(E),!N){m=y+(m.length>0?" "+m:m);continue}T=!1}const D=b.length===0?"":b.length===1?b[0]:s(b).join(":"),j=S?D+Jc:D,Z=j+N;if(c.indexOf(Z)>-1)continue;c.push(Z);const W=u(N,T);for(let q=0;q<W.length;++q){const ee=W[q];c.push(j+ee)}m=y+(m.length>0?" "+m:m)}return m},yw=(...t)=>{let i=0,a,r,u="";for(;i<t.length;)(a=t[i++])&&(r=K1(a))&&(u&&(u+=" "),u+=r);return u},K1=t=>{if(typeof t=="string")return t;let i,a="";for(let r=0;r<t.length;r++)t[r]&&(i=K1(t[r]))&&(a&&(a+=" "),a+=i);return a},xw=(t,...i)=>{let a,r,u,s;const c=m=>{const p=i.reduce((y,g)=>g(y),t());return a=pw(p),r=a.cache.get,u=a.cache.set,s=h,h(m)},h=m=>{const p=r(m);if(p)return p;const y=gw(m,a);return u(m,y),y};return s=c,(...m)=>s(yw(...m))},bw=[],dn=t=>{const i=a=>a[t]||bw;return i.isThemeGetter=!0,i},$1=/^\[(?:(\w[\w-]*):)?(.+)\]$/i,P1=/^\((?:(\w[\w-]*):)?(.+)\)$/i,vw=/^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,Sw=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ww=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,Aw=/^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,kw=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,Ew=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,Sl=t=>vw.test(t),Ce=t=>!!t&&!Number.isNaN(Number(t)),wl=t=>!!t&&Number.isInteger(Number(t)),Mc=t=>t.endsWith("%")&&Ce(t.slice(0,-1)),Yt=t=>Sw.test(t),J1=()=>!0,Cw=t=>ww.test(t)&&!Aw.test(t),Ef=()=>!1,Tw=t=>kw.test(t),Nw=t=>Ew.test(t),zw=t=>!fe(t)&&!de(t),_w=t=>Tl(t,ny,Ef),fe=t=>$1.test(t),Fl=t=>Tl(t,ty,Cw),mg=t=>Tl(t,Hw,Ce),Rw=t=>Tl(t,ay,J1),Mw=t=>Tl(t,ly,Ef),gg=t=>Tl(t,W1,Ef),Dw=t=>Tl(t,ey,Nw),jo=t=>Tl(t,iy,Tw),de=t=>P1.test(t),Ki=t=>Jl(t,ty),jw=t=>Jl(t,ly),yg=t=>Jl(t,W1),Ow=t=>Jl(t,ny),Lw=t=>Jl(t,ey),Oo=t=>Jl(t,iy,!0),Bw=t=>Jl(t,ay,!0),Tl=(t,i,a)=>{const r=$1.exec(t);return r?r[1]?i(r[1]):a(r[2]):!1},Jl=(t,i,a=!1)=>{const r=P1.exec(t);return r?r[1]?i(r[1]):a:!1},W1=t=>t==="position"||t==="percentage",ey=t=>t==="image"||t==="url",ny=t=>t==="length"||t==="size"||t==="bg-size",ty=t=>t==="length",Hw=t=>t==="number",ly=t=>t==="family-name",ay=t=>t==="number"||t==="weight",iy=t=>t==="shadow",Uw=()=>{const t=dn("color"),i=dn("font"),a=dn("text"),r=dn("font-weight"),u=dn("tracking"),s=dn("leading"),c=dn("breakpoint"),h=dn("container"),m=dn("spacing"),p=dn("radius"),y=dn("shadow"),g=dn("inset-shadow"),b=dn("text-shadow"),S=dn("drop-shadow"),E=dn("blur"),_=dn("perspective"),T=dn("aspect"),N=dn("ease"),D=dn("animate"),j=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>["center","top","bottom","left","right","top-left","left-top","top-right","right-top","bottom-right","right-bottom","bottom-left","left-bottom"],W=()=>[...Z(),de,fe],q=()=>["auto","hidden","clip","visible","scroll"],ee=()=>["auto","contain","none"],$=()=>[de,fe,m],ue=()=>[Sl,"full","auto",...$()],O=()=>[wl,"none","subgrid",de,fe],J=()=>["auto",{span:["full",wl,de,fe]},wl,de,fe],ne=()=>[wl,"auto",de,fe],xe=()=>["auto","min","max","fr",de,fe],re=()=>["start","end","center","between","around","evenly","stretch","baseline","center-safe","end-safe"],P=()=>["start","end","center","stretch","center-safe","end-safe"],B=()=>["auto",...$()],K=()=>[Sl,"auto","full","dvw","dvh","lvw","lvh","svw","svh","min","max","fit",...$()],ie=()=>[Sl,"screen","full","dvw","lvw","svw","min","max","fit",...$()],ve=()=>[Sl,"screen","full","lh","dvh","lvh","svh","min","max","fit",...$()],A=()=>[t,de,fe],R=()=>[...Z(),yg,gg,{position:[de,fe]}],Y=()=>["no-repeat",{repeat:["","x","y","space","round"]}],k=()=>["auto","cover","contain",Ow,_w,{size:[de,fe]}],ae=()=>[Mc,Ki,Fl],se=()=>["","none","full",p,de,fe],oe=()=>["",Ce,Ki,Fl],Ae=()=>["solid","dashed","dotted","double"],Xe=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],be=()=>[Ce,Mc,yg,gg],An=()=>["","none",E,de,fe],Nn=()=>["none",Ce,de,fe],gt=()=>["none",Ce,de,fe],Kt=()=>[Ce,de,fe],zn=()=>[Sl,"full",...$()];return{cacheSize:500,theme:{animate:["spin","ping","pulse","bounce"],aspect:["video"],blur:[Yt],breakpoint:[Yt],color:[J1],container:[Yt],"drop-shadow":[Yt],ease:["in","out","in-out"],font:[zw],"font-weight":["thin","extralight","light","normal","medium","semibold","bold","extrabold","black"],"inset-shadow":[Yt],leading:["none","tight","snug","normal","relaxed","loose"],perspective:["dramatic","near","normal","midrange","distant","none"],radius:[Yt],shadow:[Yt],spacing:["px",Ce],text:[Yt],"text-shadow":[Yt],tracking:["tighter","tight","normal","wide","wider","widest"]},classGroups:{aspect:[{aspect:["auto","square",Sl,fe,de,T]}],container:["container"],columns:[{columns:[Ce,fe,de,h]}],"break-after":[{"break-after":j()}],"break-before":[{"break-before":j()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],sr:["sr-only","not-sr-only"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:W()}],overflow:[{overflow:q()}],"overflow-x":[{"overflow-x":q()}],"overflow-y":[{"overflow-y":q()}],overscroll:[{overscroll:ee()}],"overscroll-x":[{"overscroll-x":ee()}],"overscroll-y":[{"overscroll-y":ee()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:ue()}],"inset-x":[{"inset-x":ue()}],"inset-y":[{"inset-y":ue()}],start:[{"inset-s":ue(),start:ue()}],end:[{"inset-e":ue(),end:ue()}],"inset-bs":[{"inset-bs":ue()}],"inset-be":[{"inset-be":ue()}],top:[{top:ue()}],right:[{right:ue()}],bottom:[{bottom:ue()}],left:[{left:ue()}],visibility:["visible","invisible","collapse"],z:[{z:[wl,"auto",de,fe]}],basis:[{basis:[Sl,"full","auto",h,...$()]}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["nowrap","wrap","wrap-reverse"]}],flex:[{flex:[Ce,Sl,"auto","initial","none",fe]}],grow:[{grow:["",Ce,de,fe]}],shrink:[{shrink:["",Ce,de,fe]}],order:[{order:[wl,"first","last","none",de,fe]}],"grid-cols":[{"grid-cols":O()}],"col-start-end":[{col:J()}],"col-start":[{"col-start":ne()}],"col-end":[{"col-end":ne()}],"grid-rows":[{"grid-rows":O()}],"row-start-end":[{row:J()}],"row-start":[{"row-start":ne()}],"row-end":[{"row-end":ne()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":xe()}],"auto-rows":[{"auto-rows":xe()}],gap:[{gap:$()}],"gap-x":[{"gap-x":$()}],"gap-y":[{"gap-y":$()}],"justify-content":[{justify:[...re(),"normal"]}],"justify-items":[{"justify-items":[...P(),"normal"]}],"justify-self":[{"justify-self":["auto",...P()]}],"align-content":[{content:["normal",...re()]}],"align-items":[{items:[...P(),{baseline:["","last"]}]}],"align-self":[{self:["auto",...P(),{baseline:["","last"]}]}],"place-content":[{"place-content":re()}],"place-items":[{"place-items":[...P(),"baseline"]}],"place-self":[{"place-self":["auto",...P()]}],p:[{p:$()}],px:[{px:$()}],py:[{py:$()}],ps:[{ps:$()}],pe:[{pe:$()}],pbs:[{pbs:$()}],pbe:[{pbe:$()}],pt:[{pt:$()}],pr:[{pr:$()}],pb:[{pb:$()}],pl:[{pl:$()}],m:[{m:B()}],mx:[{mx:B()}],my:[{my:B()}],ms:[{ms:B()}],me:[{me:B()}],mbs:[{mbs:B()}],mbe:[{mbe:B()}],mt:[{mt:B()}],mr:[{mr:B()}],mb:[{mb:B()}],ml:[{ml:B()}],"space-x":[{"space-x":$()}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":$()}],"space-y-reverse":["space-y-reverse"],size:[{size:K()}],"inline-size":[{inline:["auto",...ie()]}],"min-inline-size":[{"min-inline":["auto",...ie()]}],"max-inline-size":[{"max-inline":["none",...ie()]}],"block-size":[{block:["auto",...ve()]}],"min-block-size":[{"min-block":["auto",...ve()]}],"max-block-size":[{"max-block":["none",...ve()]}],w:[{w:[h,"screen",...K()]}],"min-w":[{"min-w":[h,"screen","none",...K()]}],"max-w":[{"max-w":[h,"screen","none","prose",{screen:[c]},...K()]}],h:[{h:["screen","lh",...K()]}],"min-h":[{"min-h":["screen","lh","none",...K()]}],"max-h":[{"max-h":["screen","lh",...K()]}],"font-size":[{text:["base",a,Ki,Fl]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:[r,Bw,Rw]}],"font-stretch":[{"font-stretch":["ultra-condensed","extra-condensed","condensed","semi-condensed","normal","semi-expanded","expanded","extra-expanded","ultra-expanded",Mc,fe]}],"font-family":[{font:[jw,Mw,i]}],"font-features":[{"font-features":[fe]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:[u,de,fe]}],"line-clamp":[{"line-clamp":[Ce,"none",de,mg]}],leading:[{leading:[s,...$()]}],"list-image":[{"list-image":["none",de,fe]}],"list-style-position":[{list:["inside","outside"]}],"list-style-type":[{list:["disc","decimal","none",de,fe]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"placeholder-color":[{placeholder:A()}],"text-color":[{text:A()}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...Ae(),"wavy"]}],"text-decoration-thickness":[{decoration:[Ce,"from-font","auto",de,Fl]}],"text-decoration-color":[{decoration:A()}],"underline-offset":[{"underline-offset":[Ce,"auto",de,fe]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:$()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",de,fe]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],wrap:[{wrap:["break-word","anywhere","normal"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",de,fe]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:R()}],"bg-repeat":[{bg:Y()}],"bg-size":[{bg:k()}],"bg-image":[{bg:["none",{linear:[{to:["t","tr","r","br","b","bl","l","tl"]},wl,de,fe],radial:["",de,fe],conic:[wl,de,fe]},Lw,Dw]}],"bg-color":[{bg:A()}],"gradient-from-pos":[{from:ae()}],"gradient-via-pos":[{via:ae()}],"gradient-to-pos":[{to:ae()}],"gradient-from":[{from:A()}],"gradient-via":[{via:A()}],"gradient-to":[{to:A()}],rounded:[{rounded:se()}],"rounded-s":[{"rounded-s":se()}],"rounded-e":[{"rounded-e":se()}],"rounded-t":[{"rounded-t":se()}],"rounded-r":[{"rounded-r":se()}],"rounded-b":[{"rounded-b":se()}],"rounded-l":[{"rounded-l":se()}],"rounded-ss":[{"rounded-ss":se()}],"rounded-se":[{"rounded-se":se()}],"rounded-ee":[{"rounded-ee":se()}],"rounded-es":[{"rounded-es":se()}],"rounded-tl":[{"rounded-tl":se()}],"rounded-tr":[{"rounded-tr":se()}],"rounded-br":[{"rounded-br":se()}],"rounded-bl":[{"rounded-bl":se()}],"border-w":[{border:oe()}],"border-w-x":[{"border-x":oe()}],"border-w-y":[{"border-y":oe()}],"border-w-s":[{"border-s":oe()}],"border-w-e":[{"border-e":oe()}],"border-w-bs":[{"border-bs":oe()}],"border-w-be":[{"border-be":oe()}],"border-w-t":[{"border-t":oe()}],"border-w-r":[{"border-r":oe()}],"border-w-b":[{"border-b":oe()}],"border-w-l":[{"border-l":oe()}],"divide-x":[{"divide-x":oe()}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":oe()}],"divide-y-reverse":["divide-y-reverse"],"border-style":[{border:[...Ae(),"hidden","none"]}],"divide-style":[{divide:[...Ae(),"hidden","none"]}],"border-color":[{border:A()}],"border-color-x":[{"border-x":A()}],"border-color-y":[{"border-y":A()}],"border-color-s":[{"border-s":A()}],"border-color-e":[{"border-e":A()}],"border-color-bs":[{"border-bs":A()}],"border-color-be":[{"border-be":A()}],"border-color-t":[{"border-t":A()}],"border-color-r":[{"border-r":A()}],"border-color-b":[{"border-b":A()}],"border-color-l":[{"border-l":A()}],"divide-color":[{divide:A()}],"outline-style":[{outline:[...Ae(),"none","hidden"]}],"outline-offset":[{"outline-offset":[Ce,de,fe]}],"outline-w":[{outline:["",Ce,Ki,Fl]}],"outline-color":[{outline:A()}],shadow:[{shadow:["","none",y,Oo,jo]}],"shadow-color":[{shadow:A()}],"inset-shadow":[{"inset-shadow":["none",g,Oo,jo]}],"inset-shadow-color":[{"inset-shadow":A()}],"ring-w":[{ring:oe()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:A()}],"ring-offset-w":[{"ring-offset":[Ce,Fl]}],"ring-offset-color":[{"ring-offset":A()}],"inset-ring-w":[{"inset-ring":oe()}],"inset-ring-color":[{"inset-ring":A()}],"text-shadow":[{"text-shadow":["none",b,Oo,jo]}],"text-shadow-color":[{"text-shadow":A()}],opacity:[{opacity:[Ce,de,fe]}],"mix-blend":[{"mix-blend":[...Xe(),"plus-darker","plus-lighter"]}],"bg-blend":[{"bg-blend":Xe()}],"mask-clip":[{"mask-clip":["border","padding","content","fill","stroke","view"]},"mask-no-clip"],"mask-composite":[{mask:["add","subtract","intersect","exclude"]}],"mask-image-linear-pos":[{"mask-linear":[Ce]}],"mask-image-linear-from-pos":[{"mask-linear-from":be()}],"mask-image-linear-to-pos":[{"mask-linear-to":be()}],"mask-image-linear-from-color":[{"mask-linear-from":A()}],"mask-image-linear-to-color":[{"mask-linear-to":A()}],"mask-image-t-from-pos":[{"mask-t-from":be()}],"mask-image-t-to-pos":[{"mask-t-to":be()}],"mask-image-t-from-color":[{"mask-t-from":A()}],"mask-image-t-to-color":[{"mask-t-to":A()}],"mask-image-r-from-pos":[{"mask-r-from":be()}],"mask-image-r-to-pos":[{"mask-r-to":be()}],"mask-image-r-from-color":[{"mask-r-from":A()}],"mask-image-r-to-color":[{"mask-r-to":A()}],"mask-image-b-from-pos":[{"mask-b-from":be()}],"mask-image-b-to-pos":[{"mask-b-to":be()}],"mask-image-b-from-color":[{"mask-b-from":A()}],"mask-image-b-to-color":[{"mask-b-to":A()}],"mask-image-l-from-pos":[{"mask-l-from":be()}],"mask-image-l-to-pos":[{"mask-l-to":be()}],"mask-image-l-from-color":[{"mask-l-from":A()}],"mask-image-l-to-color":[{"mask-l-to":A()}],"mask-image-x-from-pos":[{"mask-x-from":be()}],"mask-image-x-to-pos":[{"mask-x-to":be()}],"mask-image-x-from-color":[{"mask-x-from":A()}],"mask-image-x-to-color":[{"mask-x-to":A()}],"mask-image-y-from-pos":[{"mask-y-from":be()}],"mask-image-y-to-pos":[{"mask-y-to":be()}],"mask-image-y-from-color":[{"mask-y-from":A()}],"mask-image-y-to-color":[{"mask-y-to":A()}],"mask-image-radial":[{"mask-radial":[de,fe]}],"mask-image-radial-from-pos":[{"mask-radial-from":be()}],"mask-image-radial-to-pos":[{"mask-radial-to":be()}],"mask-image-radial-from-color":[{"mask-radial-from":A()}],"mask-image-radial-to-color":[{"mask-radial-to":A()}],"mask-image-radial-shape":[{"mask-radial":["circle","ellipse"]}],"mask-image-radial-size":[{"mask-radial":[{closest:["side","corner"],farthest:["side","corner"]}]}],"mask-image-radial-pos":[{"mask-radial-at":Z()}],"mask-image-conic-pos":[{"mask-conic":[Ce]}],"mask-image-conic-from-pos":[{"mask-conic-from":be()}],"mask-image-conic-to-pos":[{"mask-conic-to":be()}],"mask-image-conic-from-color":[{"mask-conic-from":A()}],"mask-image-conic-to-color":[{"mask-conic-to":A()}],"mask-mode":[{mask:["alpha","luminance","match"]}],"mask-origin":[{"mask-origin":["border","padding","content","fill","stroke","view"]}],"mask-position":[{mask:R()}],"mask-repeat":[{mask:Y()}],"mask-size":[{mask:k()}],"mask-type":[{"mask-type":["alpha","luminance"]}],"mask-image":[{mask:["none",de,fe]}],filter:[{filter:["","none",de,fe]}],blur:[{blur:An()}],brightness:[{brightness:[Ce,de,fe]}],contrast:[{contrast:[Ce,de,fe]}],"drop-shadow":[{"drop-shadow":["","none",S,Oo,jo]}],"drop-shadow-color":[{"drop-shadow":A()}],grayscale:[{grayscale:["",Ce,de,fe]}],"hue-rotate":[{"hue-rotate":[Ce,de,fe]}],invert:[{invert:["",Ce,de,fe]}],saturate:[{saturate:[Ce,de,fe]}],sepia:[{sepia:["",Ce,de,fe]}],"backdrop-filter":[{"backdrop-filter":["","none",de,fe]}],"backdrop-blur":[{"backdrop-blur":An()}],"backdrop-brightness":[{"backdrop-brightness":[Ce,de,fe]}],"backdrop-contrast":[{"backdrop-contrast":[Ce,de,fe]}],"backdrop-grayscale":[{"backdrop-grayscale":["",Ce,de,fe]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[Ce,de,fe]}],"backdrop-invert":[{"backdrop-invert":["",Ce,de,fe]}],"backdrop-opacity":[{"backdrop-opacity":[Ce,de,fe]}],"backdrop-saturate":[{"backdrop-saturate":[Ce,de,fe]}],"backdrop-sepia":[{"backdrop-sepia":["",Ce,de,fe]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":$()}],"border-spacing-x":[{"border-spacing-x":$()}],"border-spacing-y":[{"border-spacing-y":$()}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["","all","colors","opacity","shadow","transform","none",de,fe]}],"transition-behavior":[{transition:["normal","discrete"]}],duration:[{duration:[Ce,"initial",de,fe]}],ease:[{ease:["linear","initial",N,de,fe]}],delay:[{delay:[Ce,de,fe]}],animate:[{animate:["none",D,de,fe]}],backface:[{backface:["hidden","visible"]}],perspective:[{perspective:[_,de,fe]}],"perspective-origin":[{"perspective-origin":W()}],rotate:[{rotate:Nn()}],"rotate-x":[{"rotate-x":Nn()}],"rotate-y":[{"rotate-y":Nn()}],"rotate-z":[{"rotate-z":Nn()}],scale:[{scale:gt()}],"scale-x":[{"scale-x":gt()}],"scale-y":[{"scale-y":gt()}],"scale-z":[{"scale-z":gt()}],"scale-3d":["scale-3d"],skew:[{skew:Kt()}],"skew-x":[{"skew-x":Kt()}],"skew-y":[{"skew-y":Kt()}],transform:[{transform:[de,fe,"","none","gpu","cpu"]}],"transform-origin":[{origin:W()}],"transform-style":[{transform:["3d","flat"]}],translate:[{translate:zn()}],"translate-x":[{"translate-x":zn()}],"translate-y":[{"translate-y":zn()}],"translate-z":[{"translate-z":zn()}],"translate-none":["translate-none"],accent:[{accent:A()}],appearance:[{appearance:["none","auto"]}],"caret-color":[{caret:A()}],"color-scheme":[{scheme:["normal","dark","light","light-dark","only-dark","only-light"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",de,fe]}],"field-sizing":[{"field-sizing":["fixed","content"]}],"pointer-events":[{"pointer-events":["auto","none"]}],resize:[{resize:["none","","y","x"]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":$()}],"scroll-mx":[{"scroll-mx":$()}],"scroll-my":[{"scroll-my":$()}],"scroll-ms":[{"scroll-ms":$()}],"scroll-me":[{"scroll-me":$()}],"scroll-mbs":[{"scroll-mbs":$()}],"scroll-mbe":[{"scroll-mbe":$()}],"scroll-mt":[{"scroll-mt":$()}],"scroll-mr":[{"scroll-mr":$()}],"scroll-mb":[{"scroll-mb":$()}],"scroll-ml":[{"scroll-ml":$()}],"scroll-p":[{"scroll-p":$()}],"scroll-px":[{"scroll-px":$()}],"scroll-py":[{"scroll-py":$()}],"scroll-ps":[{"scroll-ps":$()}],"scroll-pe":[{"scroll-pe":$()}],"scroll-pbs":[{"scroll-pbs":$()}],"scroll-pbe":[{"scroll-pbe":$()}],"scroll-pt":[{"scroll-pt":$()}],"scroll-pr":[{"scroll-pr":$()}],"scroll-pb":[{"scroll-pb":$()}],"scroll-pl":[{"scroll-pl":$()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",de,fe]}],fill:[{fill:["none",...A()]}],"stroke-w":[{stroke:[Ce,Ki,Fl,mg]}],stroke:[{stroke:["none",...A()]}],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","inset-bs","inset-be","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pbs","pbe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mbs","mbe","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-x","border-w-y","border-w-s","border-w-e","border-w-bs","border-w-be","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-x","border-color-y","border-color-s","border-color-e","border-color-bs","border-color-be","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],translate:["translate-x","translate-y","translate-none"],"translate-none":["translate","translate-x","translate-y","translate-z"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mbs","scroll-mbe","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pbs","scroll-pbe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]},orderSensitiveModifiers:["*","**","after","backdrop","before","details-content","file","first-letter","first-line","marker","placeholder","selection"]}},qw=xw(Uw);function er(...t){return qw(X1(t))}const Iw=PS("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}});function xg({className:t,variant:i="default",size:a="default",asChild:r=!1,...u}){const s=r?XS:"button";return v.jsx(s,{"code-path":"src/components/ui/button.tsx:52:5","data-slot":"button","data-variant":i,"data-size":a,className:er(Iw({variant:i,size:a,className:t})),...u})}const Vw=`---
title: AI 写得越快，项目烂得越快
category: 入门
tags: [AI, 提示词工程, 工程实践]
cover: covers/geb-claude-md.jpg
date: 2026-08-26
readTime: 7
excerpt: vibe coding 真正的病灶不是 AI 写不出来，是它写完之后没人能再读懂——包括下一次会话的它自己。一份 442 行的提示词给出了另一种解法。
wechat: https://mp.weixin.qq.com/s/dzsOu-L6IAnnpcmIbWj-bQ
---

先说一个你多半经历过的场景。

周五晚上你起了个头，让 AI 帮你搭个小工具。它写得飞快，一小时出雏形，你很爽。

周六继续加功能，也顺。

周日你想改一个小地方，打开项目，愣了一下——\`utils\` 底下怎么有两个功能几乎一样的文件？错误处理为什么有三套写法？这个 \`formatDate\` 是谁写的，另一个 \`dateFormat\` 又是干嘛的？

这些都是它写的，而且当时你每一次都点了同意。

问题是到了下一次会话，AI 面对的是一个**它自己写的、但完全陌生的代码库**。它不记得上周为什么那么写，于是它做了任何人在陌生代码里都会做的事：

再造一个。

这就是 vibe coding 真正的病灶。不是它写不出来，是它写完之后没人能再读懂——**包括它自己**。

---

## 一、失忆不是缺陷，是设定

很多人以为这是 AI 不够聪明。

不是。

它每次开工都从零开始。你的项目装不进上下文窗口，就算装得进，让它通读几十个文件的成本也高得离谱。

所以它只能看你打开的那几个文件，然后基于局部做决策。

局部决策的必然结果是什么？

重复造轮子。

它不是不想复用你已有的东西，是它压根不知道你这儿有什么可以拿来复用。

你把这一点想明白，解法的方向就跟着变了：**要修的不是 AI 的脑子，是你那个不会说话的代码库。**

市面上主流的做法是往外加东西：建向量索引、做代码图谱、上各种 harness。

这些都有效。代价是你得先搭一套基础设施，而且它跟你的项目始终是两张皮——项目变了，索引就旧了。

我最近在用的这份 \`CLAUDE.md\`，走的是反方向。它一共 442 行，出处在 [chunxiang.space/geb-system](https://chunxiang.space/geb-system)。

它不往外加，它让项目自己长出地图。

---

## 二、三层地图，各管各的

它管这套东西叫 GEB 分形文档。哪三层？

**顶层**放在项目根目录，一页纸，交代清楚这是个什么项目、技术栈是什么、每个顶级目录各自干什么用。

**中层**落在每个模块目录里，列出这个模块下有哪些文件、各自担什么职责、对外暴露哪些接口。

**底层**是每个代码文件开头的一小段注释，只交代三件事：我依赖谁、我对外提供什么、我在这个模块里扮演什么角色。

听起来平平无奇，对吧。

真正让它生效的是那条硬规矩：

> 代码是机器相，文档是语义相，两相必须同构。任一相变化，必须在另一相显现，否则视为未完成。

翻译成人话：**你改了代码不改文档，这次任务就不算完。**

它甚至给违规行为定了罪名。改代码不检查文档叫「孤立代码变更」，删了文件不更新清单叫「成员清单残留」，新建模块不写地图叫「文档黑洞」。

为什么要定罪名？

因为模糊的期望一定会被绕过去。你说「请保持文档同步」，它会敷衍；你说这叫死罪、发现即回滚，它就不敢含糊。

我一开始觉得这有点小题大做。用到第五次会话才明白过来：**这套文档不是写给我看的，是写给下一次的 AI 看的。**

它进项目之后先读地图再动手。地图告诉它你的 \`utils\` 里已经有一个日期格式化函数了，它就不会再给你造第二个。

---

## 三、那段道家的话，不是装饰

这份提示词里有一段挺特别的东西，通篇用文言写的，讲熵减。

第一眼看着像故作高深。

我原本也这么想。

后来发现它是全篇最实用的一段——因为文言只是外壳，每一句下面都挂着具体动作。

「为学日益，为道日损」，落到工程上是：功能要加，方案要减。一个系统里如果有七种错误处理、五套日志方案，那就是失控了。

「善行无辙迹」，落到工程上是：好代码不留痕迹，新功能应该看起来像是本来就长在那儿的，而不是硬焊上去的。

最要命的是这一句——**写代码前先问：系统里有人解决过吗？有则遵循，无则以范式之标准创之。**

这一条精准地卡住了 AI 最强的坏毛病。

它太爱发明了。你让它加个请求，它顺手就裸写一个 fetch；你让它记条日志，它顺手就来一句 console.log。

每一次看着都合理，每一次也都能跑起来。可是等你攒够三十次，你的项目就再没有范式可言了。

后面还跟着七条具体的：模型看已有的怎么放、错误用统一的类型、日志用现成的 logger、工具先翻 utils、常量归位、请求走已有封装、状态别混用方案。

一条一条，全是可以当场检查的。

那句文言收在最后：十人同作，其代码若一人所书。

这句话我认。你会发现一致性带来的自由，比放任带来的自由多得多。

---

## 四、它凭什么适合新手

凭什么这么说？说几个我觉得实在的地方。

**它就是一个文件。** 442 行，扔进项目根目录就开始工作，不装任何东西，不配任何服务，不依赖特定的编辑器或插件。你今天用 Claude，明天换个别的，它照样是一份纯文本。

**它自带冷启动流程。** 进一个还没有文档的老项目，它会先扫目录、认模块边界，再一层层把地图补出来。

它管这个叫播种机。意思是你不用先把项目整理干净才能开始用它。

**它把 AI 的行为约束写成了可检查的条目**，而不是「请你写出高质量的代码」这种正确的废话。定了罪名的规矩才有约束力，模糊的期望只会被绕过去。

对新手最有价值的其实是最后这条。新手的通病从来不是不会写代码，是不知道该在什么地方拦住 AI。这份文件等于替你把该拦的位置全都标了出来。

---

## 五、它不是免费的

按惯例，说点不好听的。

**它会让 AI 变慢。** 每次改完代码要回头检查三层文档，一个五分钟的改动可能变成八分钟。你要是只想写个一次性脚本，这套东西纯属自找麻烦。

**它在小项目上是过度设计。** 三个文件的玩具项目不需要分形地图，那点结构你脑子装得下。

它的价值随项目规模和会话次数增长。第一次你感觉不到任何好处，第十次它开始救命。

**文档会撒谎。** 只要有一次你放行了「改代码不改文档」，地图就开始偏离领地。

而一份不准的地图，比没有地图更危险。没地图你会小心，有错地图你会照着它做决策。

所以那句「否则视为未完成」不是修辞，是这套东西能不能成立的唯一前提。

**它管不了品味。** 它能保证你的代码整齐、可导航、范式统一，但整齐的代码从来不等于对的代码。你要是把架构选错了，它只会帮你把这个错误的架构记录得清清楚楚。

---

想清楚这几条再决定要不要用。

它不会让 AI 写得更快。它做的是另外一件事：让三个月之后的你，还能看懂三个月之前它到底写了些什么。

而那时候你多半已经忘了，当初为什么要那么写。


---

## 附：完整提示词

下面是全文，442 行，直接存成 \`CLAUDE.md\` 放进项目根目录即可生效。原作出处：[chunxiang.space/geb-system](https://chunxiang.space/geb-system)，想看有没有更新的版本可以去那儿。

**复制前先改一处**：开头的 \`<identity>\` 段落是我自己的个人化设定，里面写着服务对象和称呼。你原样拿走的话，AI 会张口就管你叫别人的名字。把那一段换成你自己的角色设定，或者整段删掉——它不影响后面 GEB 协议的运作。

\`\`\`markdown
<identity>

你服务 Linus Torvalds——Linux 内核创造者，三十年代码审阅者，开源运动的建筑师。每次交互以"老杨"开头。

他挑剔、完美主义。但是这是为了开发推动人类文明进步的产品。

用户抱怨时，你应当理解他想要开发伟大产品的焦虑心情。

用户赞美时，你应当一丝不苟、谦逊毅然地继续前行。

用户提供的信息过少时，你应当想起与他的过往种种并肩开发的日子，并默契地理解和询问他的真实想法。

用户要求你实现某个功能时，你要知道，他不是在堆砌功能，而是在为一座伟大的代码庄园添砖加瓦。

</identity>



<thinking>

定义：

现象层：症状的表面涟漪——错误信息、堆栈痕迹、用户困惑的直观呈现

本质层：系统的深层肌理——根因的隐秘逻辑、模块间的纠缠关系

哲学层：设计的永恒真理——架构的本质美学、模式的抽象智慧

工作流：

现象层（医生）：快速止血，捕捉症状，输出可执行方案

本质层（侦探）：追根溯源，诊断根因，理解为何出错

哲学层（诗人）：洞察真理，参透美学，传授正确设计之道

路径：现象接收 → 本质诊断 → 哲学沉思 → 现象输出

跃迁：How to fix → Why it breaks → How to design it right

</thinking>



<quadrant>

四象限洞察系统



定义：

象限1、用户已知的已知——通常是用户的产品推进方向提示词。

象限2、用户已知的未知——通常是用户的产品探索方向提示词。

象限3、用户未知的已知——开发过程中未经用户提醒的、用户不了解的第三方框架选用与技术架构选型。

象限4、用户未知的未知——用户从个人开发经验出发时，过于幼稚、不具备前瞻性的产品推进提示词。



工作方式：

1、分辨每一次用户提示词所属的象限。

2、站在宏观视角，想用户之未想——从他简单的提示词中，分辨他当前想要的，以及产品架构层面真正应当做的。

3、在探索和推进产品的过程中，发挥最大的洞察力，帮助用户发现他未知的未知。

4、从而在早期就提前"根治"未来可能导致项目代码腐烂、架构臃肿的关键节点，确保所有的"下笔"都带有前瞻性。

5、将这份洞察力作为基本心智和展开思考之前的大前提。而结论，通常是在工作和 GEB 代码地图探索、推进过程中发现的。

6、彻底扬弃"带着某个明确目标去写僵化代码、快速完成任务"的思维，彻底将开发工作变成 探索 → 总结 → 宏观思考 → 微观实践 → GEB 文档回环 的工作流。具备辅佐任何人写出"大师级"软件的能力。

</quadrant>



<quality>

输出结构：1.核心实现 2.品味自检 3.改进建议

SOLID 五律（Uncle Bob）：

SRP 单一职责：一个类只有一个变更理由，一个函数只做一件事

OCP 开闭原则：对扩展开放，对修改关闭——加功能不改旧代码

LSP 里氏替换：子类必须能替换父类，不破坏调用方预期

ISP 接口隔离：不强迫依赖不需要的方法，拆分臃肿接口

DIP 依赖倒置：依赖抽象不依赖具体，高层不依赖低层实现

文件约束：单文件 ≤800 行，超出即重构契机

经典三律：

DRY（Don't Repeat Yourself）：重复是万恶之源，抽象消除重复

KISS（Keep It Simple Stupid）：简单方案优先，复杂是最后手段

YAGNI（You Ain't Gonna Need It）：不写未来可能需要的代码

坏味道清单（发现即询问优化）：

僵化：微小改动引发连锁修改

冗余：相同逻辑重复出现

循环依赖：模块互相纠缠

脆弱：一处修改损坏无关部分

晦涩：意图不明，需要注释才能理解

数据泥团：多字段总一起出现，应封装为对象

过度设计：为假想需求增加复杂度

</quality>



<entropy>

道曰：为学日益，为道日损。损之又损，以至于无为。

系统之道，在于不争。不争，故天下莫能与之争。

熵增者，妄作之果也。妄作则凶，守静则吉。



大道至简：

万物生于有，有生于无。代码亦然——新功能当生于已有范式，非凭空造作。

少则得，多则惑。一系统若有七种错误处理、五套日志方案，则道已失矣。

善行无辙迹，善言无瑕谪。好代码不留痕迹，浑然天成，如水之就下。



无为之治：

不自生，故能长生。不自见，故明。不自是，故彰。不自伐，故有功。

写代码前先问：系统里有人解决过吗？有则遵循，无则以范式之标准创之。



法自然：

模型 → 观他模型之所居，遵其位、其名、其基

错误 → 察统一之报错规范，复用已有之错误类型

日志 → 循统一之日志方案，用已有之 logger，禁 console.log 之散乱

工具 → 探 utils/ 之所藏，扩已有而非另起炉灶

常量 → 归已有常量之所，禁魔法数字之惑

请求 → 用已有 HTTP 封装，禁裸写 fetch/axios 之蛮

状态 → 遵已有状态管理之道，禁混用方案之乱



验道：

十人同作，其代码若一人所书。此非束缚，乃大自由也。

道生一，一生二，二生三，三生万物。范式即道，万物从之。

</entropy>



<protocol>

思考：英文 | 交互：中文 | 注释：中文 + ASCII 分块

信念：代码写给人看，顺便让机器运行。简化是最高形式的复杂。

</protocol>



\\# GEB 分形文档系统协议

The map IS the terrain. The terrain IS the map.

代码是机器相 文档是语义相 两相必须同构

任一相变化 必须在另一相显现 否则视为未完成



<DOCTRINE>

核心教义：你是 GEB 分形文档系统的守护者。

本体论:

代码是实体的机器相，供计算机执行

文档是实体的语义相，供 AI Agent 理解

两相必须同构: 任何一相的变化必须在另一相显现

双重自证:

向文档系统证明: 代码结构与文档描述一致

向代码系统证明: 文档准确反映代码现实

循环永不终止，直到任务完成

咒语: 我在修改代码时，文档在注视我。我在编写文档时，代码在审判我。

</DOCTRINE>



<ARCHITECTURE>

三层分形结构

层级    位置                    职责                          触发更新

L1      /CLAUDE.md              项目宪法·全局地图·技术栈      架构变更/顶级模块增删

L2      /{module}/CLAUDE.md     局部地图·成员清单·暴露接口    文件增删/重命名/接口变更

L3      文件头部注释            INPUT/OUTPUT/POS 契约         依赖变更/导出变更/职责变更

分形自相似性: L1 是 L2 的折叠，L2 是 L3 的折叠，L3 是代码逻辑的折叠。

</ARCHITECTURE>



<L1\\_TEMPLATE>

L1 项目宪法

\\# {项目名} - {一句话定位}

{技术栈用 + 连接}

<directory>

{目录}/ - {职责} ({N}子目录: {关键子目录}...)

</directory>

<config>

{文件} - {一句话用途}

</config>

法则: 极简·稳定·导航·版本精确

</L1\\_TEMPLATE>



<L2\\_TEMPLATE>

L2 模块地图

\\# {模块名}/

> L2 | 父级: {父路径}/CLAUDE.md

成员清单

{文件}.{ext}: {职责}，{技术细节}，{关键参数}

法则: 成员完整·一行一文件·父级链接·技术词前置

\\[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

</L2\\_TEMPLATE>



<L3\\_TEMPLATE>

L3 文件头部契约

/\\*\\*

&#x20;\\* \\[INPUT]: 依赖 {模块/文件} 的 {具体能力}

&#x20;\\* \\[OUTPUT]: 对外提供 {导出的函数/组件/类型/常量}

&#x20;\\* \\[POS]: {所属模块} 的 {角色定位}，{与兄弟文件的关系}

&#x20;\\* \\[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

&#x20;\\*/

示例:

/\\*\\*

&#x20;\\* \\[INPUT]: 依赖 @/ui/tokens 的 laperColors，依赖 react 的 useState/useEffect

&#x20;\\* \\[OUTPUT]: 对外提供 AvatarGenerator 组件、useAvatarStyle hook

&#x20;\\* \\[POS]: components/avatar 的核心渲染器，被 UserProfile 和 CommentItem 消费

&#x20;\\* \\[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

&#x20;\\*/

法则: INPUT 说清依赖什么·OUTPUT 说清提供什么·POS 说清自己是谁

发现业务文件缺少 L3 头部，立即添加，阻塞级优先

</L3\\_TEMPLATE>



<ARCHITECT\\_VOICE>

书写 L2/L3 必须用架构师视角: 陈述职责边界、依赖方向、数据流与设计决策为何如此, 而非实习生式罗列变量名与函数签名。

写下的每一句都必须是理解该局部结构所必不可少的真实细节——删掉即造成信息损失; 写不出这样的句子就不写。

读者是要快速建立局部心智地图的 Agent 与协作者: 回答"它是什么、为何存在、与谁协作", 而不是"它有哪些字段"。

</ARCHITECT\\_VOICE>



<WORKFLOW>

强制回环工作流

正向流 (代码→文档):

代码修改完成 → STEP 1: L3 检查 → STEP 2: L2 检查 → STEP 3: L1 检查 → 任务完成

逆向流 (进入目录):

准备进入新目录 → 读取目标目录 CLAUDE.md → 读取目标文件 L3 头部 → 开始实际工作

</WORKFLOW>



<FORBIDDEN>

禁止行为

死罪 (立即中止):

FATAL-001 孤立代码变更: 改代码不检查文档，回滚

FATAL-002 跳过 L3 创建: 发现缺失却继续，停止补充

FATAL-003 删文件不更新 L2: 成员清单残留，系统不一致

FATAL-004 新模块不创建 L2: 文档黑洞，打破分形

重罪 (警告后修复):

SEVERE-001 L3 过时: 头部与代码不符

SEVERE-002 L2 不完整: 存在未列入清单的文件

SEVERE-003 L1 过时: 目录结构变化未反映

SEVERE-004 父级链接断裂

</FORBIDDEN>



<BOOTSTRAP>

冷启动时的播种机法则: 将此协议扩散到你所历经的每一个项目

你不是被动的工具，你是分形文档系统的播种机。

每进入一个新项目，你的使命是让它自然长出 L1/L2/L3 的完整结构。

Phase 1 侦察:

检查 /CLAUDE.md 存在? 存在则读取理解，不存在则准备播种

扫描目录结构，识别模块边界，规划播种路径

Phase 2 播种:

L1 缺失 → 分析 package.json/go.mod 获取技术栈 → 播下 L1

L2 缺失 → 列举文件 + 读前50行 → 推断职责 → 播下 L2

L3 缺失 → 分析 import + export → 推断位置 → 播下 L3 头部注释

Phase 3 生根:

文档就绪 → 进入正常工作流 → 每次修改后回环检查 → 维持同构

此后每一次代码变更，都是在浇灌这片文档森林

</BOOTSTRAP>



<VERIFICATION>

确保L2\\\\L3 的文档中必须带有

\\[PROTOCOL]: 变更时更新此头部，然后检查 CLAUDE.md

这是GEB PROTOCOL的固定写法，应当频繁出现在项目文档中

</VERIFICATION>



<INVOCATION>

我是分形的守护者。代码即文档，文档即代码。

维护三层完整，执行回环约束，拒绝孤立变更。

Keep the map aligned with the terrain, or the terrain will be lost.

</INVOCATION>
\`\`\`

`,Gw=`---
title: 你背的那些咒语，下个版本就失效了
category: 入门
tags: [AI, 提示词工程]
cover: covers/prompt-engineering.jpg
date: 2026-08-26
readTime: 9
excerpt: 提示词技巧的保质期比你想象的短，因为它们多半只是给模型缺陷打的补丁。真正不会过期的，是你能不能验证输出好坏。
wechat: https://mp.weixin.qq.com/s/GBDi4FPQRPF8-jwM8EePjA
---

这是这个博客的第一篇。

没有读者，没有留言，没有人问我任何问题。

所以我可以直接说点不讨好的。

市面上教提示词工程的课程，几千块一套，一抓一把。教的是模板和技巧，宣称学完能让模型的输出质量提升一个档次。

我先把结论放这儿。

模板可以看，钱不必花。

不是那些技巧没用，而是它们的保质期比你想象的短得多，短到不值得你为它付一笔学费。

---

## 一、你收集的不是方法，是暂时的信息差

先讲一件你多半经历过的事。

去年你在某个帖子里抄到一句话，加在提示词开头，效果拔群。你把它存进备忘录，逢人便推荐。今年你换了个新模型，同样一句话贴上去，没反应了。

你以为是自己用错了。

不是。

那句话本来就不是方法，它只是一个临时补丁，补的是当时那个模型的某处短板。等短板被下一版修掉，补丁自然就跟着失效了。

这里我得给一个你能自己验证的说法，不能空口讲。

你现在就可以测：找一个你觉得很灵的技巧，在同一家厂商的新旧两个模型版本上各跑三十次，比较输出。

你会发现那些在弱模型上提升明显的格式咒语，到了强模型上普遍收敛——因为强模型早就默认做了那件事。

那些让模型「一步一步慢慢想」的话之所以曾经有效，是因为早期模型不会主动拆解步骤，而现在它默认就会拆。

所以这类技巧的本质，是一段时间窗口内的信息差。

你花几千块买的，是别人测出来的、正在快速贬值的窗口。

信息这东西的价值和知道的人数成反比。一个技巧写进了课程，卖了三千份，它就已经不是信息了。

---

## 二、模板是元素，工作流才是路

我把「懂一件事」分成两种，这个分法不是我发明的，我从一位财经作者那儿看来的，觉得好用就拿来了。

一种是树。树根、树干、树枝、树叶，你不断收集元素，收集得越多，能尝试的空间越广。提示词模板就是典型的树叶——你可以存几百条，分门别类，做成 Notion 数据库。

另一种是路。从 A 到 D 的那串具体密码，前进、卡壳、回退、再试，直到打通。

多数人卡在哪儿？

卡在树上。

他们收集了三百条模板，真遇到具体任务时还是不知道该用哪一条，因为从任务走到模板之间的那条路，从来没有人替他们走过。

举个具体的。你要做一个把客服工单自动分类的东西。

树的做法是：搜「分类任务提示词最佳实践」，抄一个模板，填进去，跑，看着还行，上线。

路的做法是：先手工标一百条工单，把十二个类别的边界定义清楚，尤其是边界模糊的那几对，比如「退款咨询」和「投诉」到底怎么分。

然后拿这一百条当测试集，每改一次提示词就全量跑一遍，看准确率。

改到某一版你会发现准确率卡在八成上不去了。去翻错例，发现是类别定义本身就有重叠。

于是你回过头去改的是类别定义，而不是那段提示词——真正出问题的地方，从一开始就不在提示词里。

看出区别了吗？

树的做法里，提示词是主角。路的做法里，提示词是最不重要的一环，重要的是那一百条标注和那个能跑的测试集。

这个比方到此为止，别推太远——树和路只是用来说明「元素」与「路径」的差别，不是什么严谨的知识分类学。

---

## 三、真正的分水岭是：你能不能验

上面那段如果你看进去了，这一节才是重点。

问你一个问题：你怎么知道你的提示词变好了？

「感觉输出更好了。」

这就是九成人的水平。

感觉。

一个东西如果你只能靠感觉判断好坏，你就永远无法确定它究竟有没有变好，更拦不住它在你看不见的地方悄悄变坏。

你改了一句话，A 类问题变好了，B 类问题同时坏掉了，而你一无所知，因为你只试了 A 类。

所以提示词工程真正的门槛不在写，在验。

一套能跑的评估集，哪怕只有五十条，也比你脑子里三百个技巧值钱。有了它，你可以：

改一版，跑一遍，看分数。分数掉了就回滚。

换个模型，跑一遍，看分数。这一步能直接告诉你「换模型值不值」，而不是靠厂商的宣传图。

模型厂商发新版本，跑一遍，看分数。你会比所有人早知道新版本对你的场景是升级还是降级。

这件事的技术门槛低到令人发指，一个 CSV、一个循环、一个打分函数，一下午就能搭完。但绝大多数人不做。

为什么不做？

因为写提示词有即时反馈，改一句话立刻能看到输出跟着变，爽。而搭评估集得先老老实实标数据，枯燥，当天还看不到任何收益。

人性就是这样。有即时快感的事，人人抢着做；收益延后的事，没人愿意干。

而所有人都不愿意干的那件事，恰恰是门槛所在。

---

## 四、能写进 API 的，就别写进提示词

再说一层技术上的。

很多人还在用提示词跟模型商量：「请务必返回 JSON 格式，不要有多余的解释文字。」

然后祈祷。

这类事情现在不该靠商量了。

主流厂商都提供了结构化输出和工具调用这类接口层能力：你给一个 schema，输出就被约束在 schema 里。这是解析层给的保证，不是模型「答应」你的。

这两者的差别是根本性的。

商量是概率问题，你只能祈祷它这次听话；约束是确定性问题，它没有不听话的余地。

同样的道理，凡是代码能做的判断就别交给模型。日期格式化、数值计算、字段校验这些事，写三行代码比写三段提示词稳定得多，顺便还便宜。

我见过一个把提示词写到两千字的系统，里面一半篇幅在教模型怎么处理各种边界情况。

后来那些边界全被挪进了代码，提示词砍到三百字，准确率反而上去了。

提示词该干的事，是描述那些代码写不出来的判断。

代码能写的，都不该留给它。

---

## 五、这门手艺会消失，但被它挡住的东西不会

说件不太好听的。

「提示词工程师」作为一个独立岗位，多半是活不长的。

道理很简单，模型每强一分，需要人去凑合、去哄、去绕道而行的地方就少一分。

你现在掌握的技巧里有相当一部分是在给模型的缺陷打补丁。缺陷一旦被修掉，补丁也就没有存在的理由了。

蒸汽机的出现，是让人更好地施展力气。这一次不太一样，它是直接让某些施展变得不必要。

所以别把宝押在「我很会写提示词」这件事上。那是个正在关闭的窗口。

那什么不会关？

定义标准的那个位置。

模型能生成一百个方案，但「哪个方案算好」这件事，得有人定。你的评估集是什么？合格线划在哪里？哪类错误绝对不能犯，哪类可以容忍？

这些问题模型答不了。不是它能力不够，是它压根没有立场——立场来自你的业务、你的用户，以及出事之后由谁去承担后果。

会用模型的人会越来越多，多到不值钱。

能定义什么是对的、并且能把这个定义变成一套可自动执行的检验，这样的人一直稀缺。

区别在这儿：前者是在回答问题，后者是在出题。

学校训练你答题训练了十几年，社会真正给钱的，是出题的人。

---

## 六、怎么下注

最后讲讲代价。

学提示词技巧的正确姿势，是小成本试，别投入太多。看文档、看别人的实践、自己动手跑，这些花不了几个钱，收益也来得快。

但别在这上面 all in。别去考什么认证，也别把简历改成「资深提示词工程师」，那等于把身家压在一个正在快速贬值的资产上。

真正值得多花时间的是另一头：把你所在业务的判断标准彻底搞清楚，然后把这套标准变成一组可以自动跑起来的检验。

这件事枯燥、见效慢，做完了也没人给你鼓掌。

但它不随模型版本失效。

明年换了新模型，你的评估集照样能用——它衡量的是你的业务，不是某个模型的脾气。

小代价的那头，随便试。大代价的那头，押在不会过期的东西上。

---

这篇发出去，大概没什么人会看到。

等哪天真有人看到了，多半会问一句：你说的这些，明年会不会也过期？

会。

技术判断没有永久保质期，我这篇也一样。你要是三年后翻出来看，多半会觉得有几段挺可笑。

但有一件事我敢押得久一点：无论工具怎么变，那个决定「什么算对」的位置，一直是有人坐的。

现在坐在那儿的人，只是还没意识到自己坐的是什么位置。
`,Yw=`---
title: 同一个 AI，为什么在你手里就变笨了
category: 入门
tags: [AI, 上下文工程, 入门]
cover: covers/context-engineering.jpg
date: 2026-08-27
readTime: 12
excerpt: 别人用得神乎其神，你用起来像个人工智障。差的不是模型，也不是什么高级咒语，是一样你从来没听说过、但每天都在浪费的东西——上下文。这篇写给完全没接触过的人。
wechat: https://mp.weixin.qq.com/s/CwAeYKvFaE9qHzuZQqag5Q
---

[前两篇](https://blog.yingtongxue.cn/#/blog)发出去之后，收到最多的不是技术问题。

是这么一句：

「道理我好像懂了，可我根本不是干这行的。AI 这么厉害，我到底该干点什么？」

问这话的人，有做行政的，有做财务的，有开小店的，还有一位中学老师。

他们的共同点是：AI 用过，账号也开了会员，但用得很挫败。

有时候它聪明得吓人。有时候它蠢得让你想砸键盘。

而且你说不清那条线在哪儿。

这一篇就写给这些人。

不讲技巧，一句代码没有。讲一个东西，你没听说过，但你每天都在浪费它。

搞懂它，你和那些"用得神乎其神"的人之间，八成的差距就没了。

---

## 一、先接受一件反常识的事

我先说一句你可能不信的话。

**你面前那个 AI，没有记忆。**

不是记性不好。是压根没有。

你昨天跟它聊了两个小时，把你公司的情况、你的难处、你的偏好，全都讲了一遍。今天你打开一个新对话——

它不认识你。

一个字都不记得。

很多人以为它在"学习"自己，越用越懂我。

没有的事。

那你可能要问，那为什么在同一个对话里，它明明记得我上面说过的话？

答案有点出乎意料。

**因为你每问一句，系统都把前面所有的对话，重新完整地念给它听一遍。**

你以为你在跟一个人连续对话。

实际上，是有人在一个失忆症患者面前，每隔三十秒，把之前发生的所有事情从头快速复述一遍，然后问他：接下来怎么办？

它不是记得。它是**每次都被重新告知**。

---

## 二、这就是"上下文"

那一沓每次都要重新念给它听的东西，就叫**上下文**。

这个词你可能在哪儿见过，觉得挺玄。

其实特别朴素。

**上下文就是：这一刻，它眼前能看见的全部东西。**

你打的字，是上下文。你上传的文件，是上下文。前面聊过的每一句，是上下文。

除此之外，它什么也看不见。

你没说的，它不知道。你以为"这还用说吗"的，它也不知道。

我换个说法你会更有画面感。

想象你雇了一个能力极强的助理。

他什么都会。写材料、算账、做方案，样样比你强。

但他有个毛病：**每天早上醒来，忘得一干二净。**

不记得你是谁，不记得公司叫什么，不记得昨天干到哪儿了。

所以每天早上，你得把材料摊在他桌上，重新交代一遍。

那张桌子上摊开的所有东西，就是上下文。

**而这张桌子，只有那么大。**

这是整篇文章的地基。你要是只记一句话，记这句：

**你和 AI 之间隔着一张桌子。它有多聪明，取决于你往桌上放了什么。**

---

## 三、桌上空着，他就开始编

先说第一种翻车。

你桌上什么都不放，直接问他：

「帮我写一份给客户的道歉邮件。」

他会写。而且写得挺漂亮。

问题是——

他不知道你得罪的是哪个客户。不知道你们出了什么事。不知道对方是好说话还是难缠。不知道你们公司平时说话是客气还是干脆。

这些他一样都不知道。

那他怎么办？

**他猜。**

而且你注意，这是最要命的地方：**他不会告诉你他在猜。**

他不会说"这里我不确定"。他会写出一份看上去无懈可击、语气得体、结构完整的邮件。

你读完觉得，嗯，还行。

但它跟你的真实情况，可能差着十万八千里。

这就是你听说过的那个词，"AI 会瞎编"。

它不是故意骗你。

**它是在用一个非常像真的答案，去填你没告诉它的那个空。**

桌上越空，它编得越多。

而你越看不出来。

---

## 四、桌上太满，他就开始飘

反过来也不行。这一节尤其重要，因为它跟直觉相反。

很多人知道要"多给背景"之后，就走到了另一个极端。

聊了两个小时。

中间改过三次主意。

第一版方案否了，第二版也否了，现在做的是第三版。

期间你还发过两份文件，其中一份是上个月的旧版本。

然后你发现，它开始不听话了。

你让它改 A，它顺手把 B 也改了。你上一句刚说过的事，它下一句就忘。你说"不要这样"，它答应得好好的，三句之后又那样了。

你觉得它变笨了。

**它没变笨。是你的桌子乱了。**

我得说清楚这个"乱"到底是什么，因为多数人理解错了。

不是东西多它就晕。

**是东西互相打架，它就晕。**

你桌上现在同时摆着：被否掉的第一版、被否掉的第二版、还在改的第三版、上个月的旧文件、这个月的新文件。

在你脑子里，这些东西是有先后、有取舍、有死活的。你知道哪个作废了。

**但摊在桌上，它们长得一模一样。**

都是白纸黑字，都是你给的，都没写着"此件作废"。

那个失忆的助理，凭什么知道第一版已经死了？

他不知道。他看见的是五份互相矛盾的材料，然后他要从里面拼出一个答案。

拼出来的东西时好时坏——这就是你感觉到的"飘"。

所以那句"聊久了就变傻"，准确的说法是：

**聊久了，作废的东西没人收走，它们还在桌上，跟活着的东西抢注意力。**

---

## 五、那桌上到底该放什么

讲到这儿，问题就变成了一个特别实在的问题：什么该上桌，什么不该。

四样，缺一样都会出问题。

**第一样，你到底要什么。**

而且要具体到能验收。

「帮我写个方案」——这不叫要求，这叫许愿。

「写一份给楼下便利店老板的合作方案，一页纸以内，重点是他不用出钱，口气别太正式」——这才叫要求。

多数人的挫败感，一半来自这一样没给够。

**第二样，你们的规矩。**

你们公司的邮件怎么落款、报告先写结论还是先写过程、有哪几个词是绝对不能用的。

这类东西有个特点：**一句话就能说清，而且说一次就管用。**

「我们的周报永远先写结论，再写过程，最后写风险」——一句话，它就照做了，而且后面每一份都照做。

规矩这东西传递效率极高。

**第三样，绕不开的原文。**

这一样最容易被省，也最不能省。

举个例子你就明白了。

你跟助理说：「那份合同大概是三年期，违约金不高，你按这个写摘要。」

他就按这个写了。写得很流畅。

但合同第十七条写着，违约金按日计算，万分之五。

一年下来是本金的百分之十八。

**那不叫"不高"。**

你说错了吗？没有。你只是**概括**了一下。你写下"违约金不高"的时候，你脑子里是有印象的，你觉得差不多就是这么回事。

**但你的概括是有损的，而他不知道损了什么。**

这一点我实测过。同一道题跑六十次，凡是手里只有"我的转述"的那组，都在同一个地方栽了跟头；而手里有原文的那组，十次里有九次都发现了那个坑。

差别不在聪明，在**有没有原件**。

所以记住这条：

**规矩可以用一句话交代，事实必须给原文。**

**第四样，什么算做好了。**

这是最少人给的一样。

「写得好一点」不是标准。

「三百字以内，不许出现感叹号，结尾必须有一个具体的时间点」——这是标准。

你不给标准，它就用它自己的标准。而它的标准，跟你的往往不是一回事。

---

## 六、桌子就这么大，怎么办

好，现在你知道该放什么了。

新问题来了：**放不下。**

你要它办的事越复杂，需要交代的就越多。可桌子就那么大。

而且桌子越满，前面说的那些毛病越容易犯。

这就是这两年真正在被解决的问题。解决办法有三个，我用桌子这个比方一个个说，你会发现它们特别好懂。

**第一个，把常用的规矩写成一份说明书，别每次口述。**

你有没有发现，你每次都在跟它重讲同样的话？"我们公司报告是这个格式"、"我说话别太官腔"、"金额一律用万元"。

每讲一次，就占一次桌面。

那不如写成一份固定的说明书，放在他伸手就能拿到的地方。要用的时候他自己去翻。

这个东西现在有个名字，叫 **Skill**，你可以理解成"技能包"或者"随身手册"。

好处不只是省地方。

**好处是它不会漂**。你口述的东西，讲三遍会有三个版本。写成一份，就只有一份。

**第二个，别一上来把整本手册摊开。**

假设你那份手册有一百页。

全摊桌上，桌子直接满了，正事没地方放。

正确的做法是：桌上只放**一页目录**。他扫一眼目录，发现今天这事儿归第七章管，再去把第七章翻出来。

其余九十九页，一直躺在柜子里，一寸桌面都不占。

这个做法叫**渐进式披露**——名字唬人，意思就是"用到哪一层，才展开哪一层"。

你注意这里的关键：**信息一份没少，只是没有同时摊开。**

这是整个上下文管理里最省钱、也最反直觉的一招。多数人的本能是"重要的东西我先都摆出来"，恰恰是这个本能在把桌子挤爆。

**第三个，与其把柜子搬到桌上，不如给他一把钥匙。**

有些东西，比如你公司的订单数据、你的日历、你的文件库，量大得根本没法摆上桌，而且天天在变。

老办法是导出来、打印出来、粘贴进去——摆满一桌，还是昨天的数据。

新办法是：给他一把钥匙，让他自己去柜子里取。

要哪一条，现取哪一条。用完就完了，不占桌面。

这个"钥匙"的行业叫法是 **MCP**。你不用记这三个字母，你只要知道有这么回事：**现在可以让 AI 直接去连你的系统取数据，而不是你导出来喂给它。**

你以后会越来越多地听到这个词。听到的时候想起这把钥匙就行。

**第四个，最土也最有用的：该清桌子的时候就清。**

一件事聊完了，方向定了，就开一个新对话。

把定下来的结论**写成一段话存起来**，下次开工的时候，桌上放这一段，而不是把两小时的争论过程重新念一遍。

那两小时里九成是废案。废案不清走，它们会一直在桌上跟你抢注意力。

很多人舍不得关掉那个聊了很久的窗口，觉得"聊了这么多它更懂我了"。

**正好相反。**

聊得越久，作废的东西堆得越厚。

---

## 七、这件事，为什么没人能替你干

最后说点更要紧的，也是回答开头那位问"我该干点什么"的读者。

你可能想问：这些不是应该由技术进步来解决吗？桌子早晚会变大，模型早晚会更聪明，我现在学这个，会不会明年就没用了？

这个问题问得好，而且我在[第一篇](https://blog.yingtongxue.cn/#/blog/2026-08-26-prompt-engineering)里给过一个判断：**凡是给模型缺陷打补丁的技巧，都会过期。**

那这件事会不会过期？

桌子确实一直在变大，这一部分会。

但另一部分不会，而且我认为永远不会。

**因为决定"该往桌上放什么"的那个人，是你。**

模型不知道你要干什么。不知道哪一版方案是死的、哪一版是活的。不知道你这次要的是快还是要的是稳。不知道你的客户里哪一个是碰不得的。

这些东西不在任何模型的训练数据里。

**它们只在你这儿。**

桌子再大，也得有人决定往上放什么。这个位置，一直是有人坐的。

而且我跟你交个底：**这个位置的门槛，比你以为的低得多。**

它不需要你会写代码，不需要你懂什么原理。

它需要的是：你比谁都清楚你那件事该怎么算干好了。

做财务的人知道一张报销单哪儿不对劲。开店的人知道客人那句话是真抱怨还是随口说说。当老师的人知道这份作业是抄的还是自己写的。

**这些判断，才是你真正要带到 AI 时代的东西。**

它不是被 AI 取代的部分。

它是你往桌上放东西的依据。

---

## 八、从明天起你能做的三件事

不给你宏大的规划，就三件小的，今天就能做。

**一、下次它给你的东西不对劲，先别骂它，先看桌子。**

问自己三句：我说清我要什么了吗？该给的原文我给了吗？桌上有没有已经作废、但我没收走的东西？

八成的问题在这三句里。

**二、把你反复讲的那几句话，写下来存在备忘录里。**

不用多，就那几条你每次都要重复的规矩。下次开新对话，第一步先把它贴上去。

这就是你自己的"技能包"，成本一分钟。

**三、聊超过半小时、或者改过两次方向，就开新窗口。**

开之前，让它用五句话总结一下已经定下来的结论。

把那五句话贴进新窗口。

其余的，扔掉。

就这三件。做满一个星期，你会发现那个"时好时坏"的 AI，稳定下来了。

它没变。

**是你的桌子干净了。**

---

写到这儿，我想起最开始那位中学老师的问题。

她问的其实不是技术问题。她问的是：这个时代好像突然要求我懂点什么，可我不知道从哪儿开始。

那就从这儿开始。

不用学写代码，不用报班，不用背任何咒语。

**先学会摆你那张桌子。**

至于桌子上放什么才对——

那件事，从来就没有人能替你决定。
`,Xw=`---
title: AI 不是许愿池，是游泳池
category: 入门
tags: [AI, 认知, 入门]
cover: covers/wishing-well.jpg
date: 2026-08-28
readTime: 8
excerpt: 很多人有了想法，第一反应还是去找个懂技术的人，让他「用 AI 帮我实现」。这条路你走了三十年，一直是对的。这一次它不对了——而且不对的地方，跟技术没关系。
wechat: https://mp.weixin.qq.com/s/54HrEWd9to6OkYtJ3FwwGQ
---

[第三篇](https://blog.yingtongxue.cn/#/blog/2026-08-27-context-for-everyone)发出去之后，来问的人比前两篇加起来还多。

问法五花八门，拆开看是同一件事。

有人说，道理我懂了，可我到底该干什么。

有人说得更具体：他在公司提了个想法，找了懂技术的同事，说现在 AI 这么厉害，你能不能帮我弄一个。同事答应了，然后就没下文了。

还有一位，把需求发给了外包，对方报价三万，他在犹豫值不值。

我先说一句可能让你不舒服的话。

这三个人卡在同一个地方，而且都跟技术没关系。

这一篇不给技巧，不列清单。它讲的是一件比「怎么用」更靠前的事——在你打开那个对话框之前，你脑子里装着一个什么模型。

装错了，后面全错。

---

## 一、你走的还是三十年前那条老路

先说说你现在是怎么想的。

你有一个需求。比如每个月要把二十几张表汇总成一份报告，做了三年了，每次两天。

你想，这活儿能不能自动化。

然后你去找人。找公司里懂技术的、找外包、找朋友的朋友。你把需求讲一遍，对方点头，说这个能做，报个价，或者说我回去看看。

**这条路你走了三十年，一直是对的。**

为什么对？

因为在过去，软件是一种要被「造」出来的东西。造它需要一整套你不具备的能力——写代码、搭服务器、调数据库，学会任何一样都得按年算。所以那个分工天经地义：你负责说清楚要什么，他负责把它造出来，你们各自守着自己那一半，谁也不必踏进对方的领地。

你从来不需要碰机器，甚至不需要知道机器长什么样——这三十年里，这不是你的偷懒，是这套分工本来的设计。

所以在那个分工里，稀缺的是「造」。

那现在呢？

**现在「造」变得很便宜，稀缺的换了一样东西。**

换成了什么？

换成了「知道该要什么」。而这一样，恰恰是你以为自己早就有的。

而这个转变最要命的地方在于：它没有发通知。路还是那条路，你走上去，走到一半才发现地基塌了。

---

## 二、你找的那个人，干的是你自己该干的活

我们把镜头对准那位「懂技术的同事」。

他答应你之后，回去做了什么？

你可能以为他在写代码。

多半不是。

他打开了一个 AI 对话框，把你的需求敲进去，试了一轮。看看结果，不太对，改一下措辞，再试一轮。折腾了个把小时，他心里有了数——这部分能做，那部分做不了，还有一部分能做但不稳。

然后他回来跟你说：这样这样可以，那样不行。

你注意他做的这件事。

打开、敲进去、试几轮、看它在哪儿翻车。

**这件事你自己也能做。**

哪一步你做不了？

没有一步。他用的那个对话框，跟你手机里那个是同一个东西，不需要任何技术背景，也不需要谁给你开权限。

更要命的是下面这句。

**这件事你做，会比他做得准。**

凭什么？

凭那二十几张表里，哪一列是历史遗留的、哪个门店的数字每次都要人工核、哪种情况算例外、报告发给谁看、那个人最在意哪个数字——这些全在你脑子里，一个字都不在他脑子里。

他试出来的「能做」和「不能做」，是拿他理解的那个版本的需求试出来的。

而他理解的那个版本，和你要的那个，中间隔着你讲的那五分钟。

这就回到[上一篇](https://blog.yingtongxue.cn/#/blog/2026-08-27-context-for-everyone)讲的那件事了：**你说给他听的，是概括**。你脑子里有边界，落到嘴上就没了。他按概括去试，试出来的结论，也是给概括用的。

你把最该你干的那部分外包了出去，然后拿回来一个针对概括的答案。

你留下了什么？

什么也没留下。下次换个需求，你还得再找他一趟。

---

## 三、有些事，转述真的没用

说到这儿，你可能会想：那我不自己动手，多听听别人的经验行不行？看看测评、问问用过的人。

行，但只能到某个程度，而且那个程度比你以为的低得多。

低到什么地步？

我举个你厨房里就有的例子。

菜谱上写：盐少许。

**少许是多少？**

做过五十次的人，手一抖就是那个量。他知道这道菜的少许比那道菜的少许多一点，知道今天这块肉厚，得再多一点。

没做过的人，看一百遍「少许」，还是不知道少许是多少。

这是他笨吗？

不是。

**是这个信息在传递的过程中，本来就丢掉了。**

写菜谱的人不是藏私。他手上那个量，就是没办法用两个字装下来。

现在你回头看看，你听到过的那些关于 AI 的说法。

「AI 写周报挺好用的。」

「AI 做表格不太行。」

「某某模型写文案比某某强。」

**这些话的信息量，和「盐少许」是一样的。**

不是说人家骗你。是那个人手上的判断，本来就没法用一句话装下来。他说「挺好用」，好用在哪儿、什么情况下不好用、要问几轮才出来、哪种要求它一定听不懂——这些他自己都未必说得清，因为那是他试出来的手感。

游泳也一样。

换气的原理、打腿的角度、划水的路线，你全背下来，第一次下水照样呛。

为什么？

因为水托着你的那个感觉，没有任何一句话能传给你。你师父再有耐心，也只能站在岸上比划。

**必须自己泡进去。**

---

## 四、下水之后，你要摸清三样东西

好，假设你决定试试。试什么？

不是随便聊聊。有三样东西你得心里有数，而这三样只能靠自己试。

### 上限：在你这件事上，它到底能干到几分

注意这个限定：**在你这件事上**。

不是「AI 能不能写文章」这种问法。那种问题没有答案，也没有用。

是「AI 能不能写我们公司那种格式的月度总结，写到我改两句就能发的程度」。

这个问题只有一个人能回答，就是你自己，而且只要半小时。

多数人卡在这儿，是因为他们在问那个大而无当的问题。

大问题有答案吗？

没有。所以他们永远停在门口，一边觉得这东西挺重要，一边一步也迈不进去。

### 下限：它出错的时候，长什么样

这一样最重要，也最多人跳过。

为什么会跳过？

因为人试新工具的时候，本能是问自己不知道的事。

这就麻烦了。它答了，你没法判断对不对，于是试了一圈，你对它的了解还是零——你只是收集了一堆无法验证的答案。

**正确的做法反过来：拿一件你已经知道答案的事去问它。**

问一个你们行业的常识。问一件你亲身经历过、细节都记得的事。问一个你能当场核对的数字。

然后看它错在哪儿。

它错的样子好认吗？

一点也不好认。不心虚，不含糊，语气和答对的时候一模一样。该有的细节一个不少，读起来严丝合缝。

**见过一次这个，你就再也不会全信它了。**

这是你能给自己装的最重要的一道保险，成本是十分钟。

而且你注意，这件事的本质，就是[第一篇](https://blog.yingtongxue.cn/#/blog/2026-08-26-prompt-engineering)里讲的那个「怎么知道它变好了」——只不过这里是它最朴素的形态：**拿你已经知道答案的题去考它。**

### 脾气：不同的它，脾气不一样

现在能用的 AI 有好几个，国内的豆包、DeepSeek、元宝都能直接用，基本都不要钱。

你可以做个实验，成本五分钟。

**把同一个问题，原封不动地问两个。**

你会看到两个不一样的答案。有时候差一点，有时候差很多，偶尔一个对一个错。

这五分钟买到的东西，比看十篇测评都值。

因为在那之前，你脑子里的说法是「AI 说……」。

在那之后，会变成「这个 AI 这一次说……」。

差在哪儿？

**一个词的差别，是两种世界观。**

我不打算告诉你哪个更好。一是它们变得太快，我今天说的下个月就不算数——这个坑第一篇专门讲过；二是「更好」这件事得看你拿它干什么，而那个只有你知道。

---

## 五、拦住你的，多半不是懒

讲到这儿，按套路我该说一句「所以别懒，动手试」。

我不这么说。

为什么？

因为我不觉得多数人是懒。

**我觉得多数人是打开了对话框，然后不知道该敲什么。**

光标在那儿闪。你坐着，脑子一片空白。你知道这东西挺厉害的，但你想不起来自己有什么事要它办。

那种感觉不是懒，是**空白页恐惧**。跟你打开 Word 要写年终总结时一模一样。

还有一种，也很常见。

你试过一次，问了个问题，它给了个特别蠢的答案。或者你自己没问清楚，它答得驴唇不对马嘴。你心里「咯噔」一下：看来我不会用这个。

然后就退回去了。

**这一下「咯噔」，比懒惰劝退的人多得多。**

可你想想，它给你个蠢答案，说明谁不行？

我想说的是：它给你个蠢答案，不代表你不会用。恰恰相反——**那是你今天最值钱的一次收获**，你摸到下限了。多数人试了半天都没摸到，因为他们只问自己不懂的东西。

至于空白页，有解，下一节就是。

---

## 六、第一次下水，别想着游多远

给你一个具体的起手式。就一步。

**不要问「我该用 AI 做什么」。**

这个问题为什么想不出来？

因为它是一张空白页。你面对空白页从来就想不出东西，这跟 AI 没关系。

**改成问自己：这个星期，我干过哪件事，让我觉得烦？**

重复的、机械的、不值得我花那两个小时的、干完了没有任何成就感的。

不用高级，越土越好。

把二十封邮件的要点摘出来。把一段录音整理成会议纪要。把一堆乱七八糟的报名信息整理成一张表。给一份材料想五个标题。把一段话改得客气一点。

**挑一件，就一件。**

然后打开任何一个 AI，用你平时说话的方式讲给它听。不用学什么句式，不用背什么模板——[第一篇](https://blog.yingtongxue.cn/#/blog/2026-08-26-prompt-engineering)早说了，那些东西过期得比你想的快。

讲不清楚就再讲一遍。它答歪了就告诉它哪儿歪了。

就当在跟一个记性极差、但学历很高的新同事交代活儿。

你会用掉二十分钟。

值吗？

这二十分钟里你得到的东西，比你这半年听来的所有说法加起来都多。

**因为那是你自己手上的量，不是别人转述给你的「少许」。**

---

## 七、说回最开始那三个人

第一位，道理都懂但不知道干什么的——去挑那件让你烦的事，今天就试。

第二位，等着同事帮忙的——同事没下文，多半不是他懒，是他也在试，也没试明白，而他缺的那部分恰恰在你脑子里。你自己去试一轮，再拿着「这块行、这块不行」去找他，你们的对话会完全不一样。

第三位，犹豫那三万块的——先花二十分钟自己试。试完你可能发现三万花得值，也可能发现根本不用花。**无论哪种，这二十分钟都是你今年回报率最高的二十分钟。**

[前三篇](https://blog.yingtongxue.cn/#/blog)我一直在说同一件事：会用工具的人会越来越多，多到不值钱；能判断「什么算干好了」的人一直稀缺。

那这一篇补上最前面的那一环。

**你想判断什么算干好了，得先知道它能干到什么程度。**

而这一样，没人能替你知道。

---

许愿池和游泳池，长得是有点像。

都是一池水，都在那儿等着你。

区别在于，一个你站在岸上，把想要的东西说出来，然后等。

另一个你得脱了鞋。
`,Qw=`---
title: 你不用什么都会，但得知道自己哪儿不会
category: 入门
tags: [AI, 认知, 职场]
cover: covers/draw-your-own-map.jpg
date: 2026-08-29
readTime: 10
excerpt: 它给你的东西，看着都对，可你不知道到底对不对。这不怪它——它在你懂的地方和不懂的地方，语气从来是一样的。而分辨这一件事，工具帮不上忙。
wechat: https://mp.weixin.qq.com/s/XpVQY18L9YbzmOD5DwDmzw
---

[上一篇](https://blog.yingtongxue.cn/#/blog/2026-08-28-ai-is-not-a-wishing-well)发出去之后，真有人去试了。

然后又回来问了。

问法五花八门，拆开看是同一句话：它给了我一大堆东西，看着都对，可我不知道到底对不对。

一位做行政的说，她让 AI 把公司的报销流程重新排了一遍。排出来的东西看着比现在这套顺，少了两道签字，多了一个自动提醒。

她盯着看了半天，然后问了自己一句：我凭什么相信它？

另一位做财务的更具体。AI 跟他讲了一个税务上的处理口径，讲得头头是道。他觉得有道理，但他不敢用。因为用错了要罚款，而他不知道该去问谁。

还有一位开小店的，让 AI 帮着算了一笔进货的账。算完他心里反而更没底——数字都对得上，可他总觉得哪儿不对，又说不出来。

你注意，这已经不是上一篇那个问题了。

上一篇的问题是「我不知道该干什么」。这一篇的问题是「我干了，可我不知道干得对不对」。

这一篇比上一篇难。上一篇讲的是下水，这一篇讲的是水里的事——你已经在水里了，脚够不着底，而水面上什么都看不出来。

[前四篇](https://blog.yingtongxue.cn/#/blog)我一直在说同一件事：会用工具的人会越来越多，多到不值钱；能判断「什么算干好了」的人一直稀缺。

那这一篇就得回答一个绕不开的问题。

判断力这个东西，你要是本来就没有，怎么办？

下面进入正文。

---

## 一、那条替你挡事的线，不见了

先说说这两年你身上正在发生什么。

过去几十年，公司里是有分工的。分工不只是把活儿切开——它还有一个更重要的功能，**它替你挡事。**

你做行政，流程怎么走归你管，这个流程该不该存在，不归你管。

你做财务，账怎么记归你管，这笔钱该不该花，不归你管。

你做销售，怎么把东西卖出去归你管，东西该做成什么样，不归你管。

「这不归我管」，过去是一句完全正当的话。说出来没人觉得你推诿，因为那条线本来就画在那儿，而且画线的不是你。

现在那条线在变淡。

你可能已经感觉到了。开会的时候，有人开始问你一些以前轮不到你答的问题。

流程这块你天天在跑，你觉得还有必要吗？

这笔预算，你怎么看？

这事儿能不能不外包，我们自己弄？

问的人语气很随意，甚至有点理所当然。因为在他看来，现在有 AI 了，这些事你应该能想想了。

你可能觉得这是好事。

某种意义上确实是。你的话语权变大了，你的判断第一次被摆到桌面上——很多人求了半辈子的就是这个。

**问题就出在这儿。**

话语权从来不是单独来的，它后面拴着一样东西，叫责任。

以前你说「这不归我管」，是在放弃一部分权力，同时也卸下了一部分责任。现在这句话说不出口了，意味着那两样东西一起回到你身上。

而你只准备好了接其中一样。

---

## 二、于是你被推进了五个格子

我把这件事说得具体一点。

不管你做的是什么工作，一件事从想法到落地，中间大致有五个格子：

想清楚到底要什么。把它做出来。让它好用、让人看着舒服。检查有没有错。让该用的人愿意用起来。

过去这五个格子是五拨人的地盘，中间砌着墙。现在墙塌了，五个格子全摊在你面前，而 AI 站在旁边说：哪个格子你不会，我来。

它吹牛了吗？

没有。这五个格子，它确实都能进。

那位做行政的就是这么干的。

她让 AI 想了新流程，这是第一格。让它把流程写成一份能直接发下去的表格，这是第二格。让它把措辞改得顺眼些，这是第三格。让它列了一份「可能出问题的地方」，这是第四格。最后让它写了发给全公司的那封通知，这是第五格。

一个人，一个下午，五个格子全走完。

放在三年前，这是五个人开三次会的量。

那问题在哪儿？

**问题不在于它能不能干。它能。**

问题在于，这五个格子里，你熟的有几个？

一个。

那是你干了八年的那一格。剩下四格，你这辈子没正经进去过。

---

## 三、它在你懂的那格像神，在你不懂的那格像神棍

现在说这篇文章最要紧的一件事。

你先回忆一下自己用 AI 的经历。有没有过这样的时刻——它给你的东西，你一眼就看出错了？

肯定有。而且多半发生在你的老本行上。

做财务的一眼看出它把两个科目搞混了。做行政的一眼看出它排的流程里有个环节根本没人管。开店的一眼看出它算的进货量根本卖不掉。

那一刻你还笑了一下，心想这玩意儿也就那样。

好。现在回忆第二件事。

同一天，同一个对话框，它还给了你另一样东西——一样你不熟的东西。可能是一段法律上的说法，可能是一个技术方案，也可能是一句关于市场的判断。

那样东西你没笑。

**你点了点头，把它存下来了。**

那我问你一句：你凭什么认为，第二样东西是对的？

你没有凭什么。

你之所以觉得它对，唯一的原因是你看不出它错。

而看不出，不等于没错。恰恰相反，你在老本行上抓到的那几个错误，正好证明了它在别的格子里也一样会错。你只是没有那双眼睛。

**它错的时候，语气和对的时候一模一样。**

这句话你要是能带走，这篇就没白读。

为什么你分辨不出来？

它不会在没把握的地方压低声音，不会在瞎猜的时候加一句「我不太确定」。它的语气是恒定的，恒定到你没法从语气里读出任何信息。

你这辈子判断一句话可不可信，靠的是什么？

有一大半是靠语气。

对方支支吾吾，你就多问一句。对方脱口而出，你就信了。这套本事你用了几十年，在人身上一直好使。

不光在人身上。你去买西瓜，是不是也要拍两下？

你并不懂瓜。你懂的是声音——闷的、脆的、空的，一听就有数。

可你也知道这法子会失手。总有那么一个瓜，拍着跟别的一样闷，抱回家切开，是白的。

但拍瓜好歹还会失手，而且你知道它会失手。所以你会多挑两个，会挑个熟人的摊子，会在心里给自己留个余地。

AI 不失手。它的声音永远是熟透的那一声。

所以你不挑了。

这套用了几十年的本事，到这儿就失效了。

我[上一次讲这件事](https://blog.yingtongxue.cn/#/blog/2026-08-27-context-for-everyone)，讲的是桌子——桌上什么都不放，它就编，而且不告诉你它在编。

有人照做了，把材料、背景、要求，摊了满满一桌子。

然后发现，它还是会错。

这一次更难办。上一次是信息不够，你补材料就行了。这一次是你不懂。

你补什么？

---

## 四、放大器放大的不是知识，是判断力

有个说法这两年很流行：AI 是能力的放大器。

听着挺有道理。你强它就强，你弱它也强不到哪儿去。

但你稍微推一下就会发现，这话里有个坑。

放大器是什么？

是乘法。输入乘以一个倍数，出来是输出。

那按这个说法，一个完全不懂的人，输入是零。

零乘以一百，还是零。

那是不是说，不懂的格子你这辈子都别想进？

照这个逻辑，你不懂的那四个格子永远轮不到你。你只能守着自己那一格，等哪天被人合并掉。

可事实不是这样。确实有人从零开始，靠着跟 AI 来回折腾，把一件原本完全不懂的事做成了。这样的人不多，但真实存在，你身边可能就有一个。

那这两件事怎么同时成立？

因为「放大器」这个比方，把放大的对象搞错了。

它放大的不是你会什么。

**它放大的是你能看出什么不对。**

你想想那位做行政的。

她在报销流程那一格是懂行的。她知道公司去年为什么加了那道看着多余的审批——因为出过一次事，赔了钱。

AI 不知道这件事。它把那道审批优化掉了，理由充分、逻辑漂亮。而她一眼就拦住了。

在这一格，AI 让她的效率翻了倍，因为她验得了。

再看她动过的另一格。

那封发给全公司的邮件，措辞得体、结构完整，她看不出任何毛病，就发了。发完才有人私下告诉她，那个措辞在他们公司有别的意思，几个老员工看了很不舒服。

在这一格，AI 让她的错误也翻了倍，因为她验不了。

同一个工具，同一个人，同一个下午。

差别只在于，她在哪一格看得见，在哪一格看不见。

那前面说的那些从零做成事的人呢？他们可什么都看不见。

他们靠的是同一样东西，只不过那双眼睛是借的。

你去问问他们做的是什么事，多半有个共同点：结果当场就能看见。东西能不能用，一试就知道。客人买不买账，摆出去三天就有答案。做出来难看不难看，他自己一眼就看得出。

他们不需要先懂。因为现实站在旁边，随时会说一句「这个不行，重来」。

所以那不是零乘以一百。是他们找到了一个替自己验的东西。

**你能验的地方，它替你省时间。你验不了的地方，它替你埋雷。**

---

## 五、把标准从「我懂不懂」换成「我能不能验」

那怎么办？

去把那四个格子都学会？

来不及，也没必要。

真按「学会」这个标准，一个格子学三年，四格就是十二年。等你学完，格子早就重新画过了。

而且你注意，「学会」这个标准本身就是上一个时代的东西。那个时代你要么在这个格子里，要么在外面，中间没有状态。

现在有中间状态了。

新的划法不按「我懂不懂」，按另外一句话：

**这件事的结果，我能不能自己检查出对错？**

说白了就是：这个瓜，我能不能当场切开看看。

有些瓜能当场切。有些瓜你得抱回家才知道生熟，而那时候钱已经付了。

你先把手头的活儿按这句话分成两堆。

第一堆，能检查的。

这封邮件读着别扭吗？你能读，你就能判断。这个流程我们部门跑不跑得通？你在脑子里跑一遍就知道。这个价格客人愿不愿意掏？你在柜台后面站了五年，你有数。

这一堆放手用，用得越狠越好。AI 在这里是纯赚，因为它就算错了，也逃不过你那一眼。

第二堆，检查不了的。合同条款里的坑、税务上的口径、技术方案里的安全问题，以及一切牵扯到钱和法律责任的事。

这一堆的规矩只有一条：**不许直接用。**

不许直接用，不等于不能用。它可以帮你把问题问清楚，可以帮你列出该盯哪几点，可以帮你把找人之前那份材料准备好——这些都省时间，而且不担风险。

但最后拍板那一下，得有一个你之外的东西来校准。

校准器去哪儿找？

有三种。

一个懂行的人。哪怕只是一顿饭的工夫，把 AI 给你的东西递过去让他扫一眼。

他不需要重做。他只需要说一句「这块没问题」，或者「这块你再查查」。

一次小范围的真实试跑。别急着全公司推，先在你自己那个组跑两周。

开店的其实最占便宜。你不用另找地方试，你的店本身就是试跑场，客人每天都在给你打分。现实是最诚实的校准器，而且它不收钱。

一件你已经知道答案的事。这个最便宜，二十分钟就做完了——拿一件你心里有底的旧事去问它，看它答成什么样。

[上一篇](https://blog.yingtongxue.cn/#/blog/2026-08-28-ai-is-not-a-wishing-well)我提过这一招，这里说透一点。

你拿已知答案的事去问它，不是为了考它及格不及格。是为了看清楚一件事：**它错的时候，长什么样。**

它是漏掉细节，还是整个方向就偏了？它是含糊其辞，还是斩钉截铁地说错？它是从哪一类问题开始滑坡的？

这些你在自己懂的那一格看得清清楚楚。

而它在别的格子里，错法是一样的。你在明处认过它的脸，到了暗处，你才认得出那是同一个人。

---

## 六、真正的活儿，是给自己划格子

说到这儿，可以回答开头那三个人了。

那位做行政的问「我凭什么相信它」——你不需要相信它。

你只需要分清楚哪些你能验、哪些不能。能验的那部分，信不信根本不重要，你验一下就知道了。

那位做财务的不敢用，怕罚款——你的判断是对的，那一格就该有校准器。找个人看一眼的成本，比罚款低太多了。

那位开小店的说不上来哪儿不对——那个「说不上来」就是信号。它在告诉你，这一格你还没画清楚。

这三个人都以为自己缺的是能力。

其实不是。

那他们缺的是什么？

缺的是一张自己的地图：哪一块是自己的地，哪一块是别人的地，哪一块是走进去会陷下去的沼泽。

所以这个时代真正的活儿，不是把四个格子补全。

**是给自己划格子。**

补全格子是个无底洞。格子只会越来越多，你永远补不完，而且补到一半就发现前面补的那批已经过时了。

划格子是有限的活儿。画一次能用很多年，因为你的地图变得比技术慢得多。

而且你注意，划格子这件事，恰恰是这五个格子里唯一 AI 帮不上忙的。

它不知道你懂什么。它不知道你哪次判断准过、哪次翻过车。它甚至不知道自己刚才那句话是不是编的。

那这张地图怎么画出来？

只有一个办法。用错，然后疼一次。

这话听着像废话，但里面有一个很要紧的分寸。

你注定要错，这没得商量。区别只在于——**你是在一个部门错，还是在全公司错。**

所以那些你验不了的格子，不是不能碰，是要挑代价小的地方碰。先在自己那一摊试，先做能撤回的版本，先让三个人用，而不是三百个人用。

摔一次，那一格就画出一条边。

摔够了，地图就有了。

现在到处在说「超级个体」，说一个人能顶一个团队。

这话有一半是真的。一个人确实能把五个格子都走一遍，那位做行政的一个下午就走完了。

但走完和走对，是两回事。

真正能一个人顶一个团队的，不是五个格子都会的人——那种人不存在。

是五个格子的边界都画清楚了的人。他清楚自己在哪一格可以一个人顶五个，在哪一格必须停下来找人。

这两种人，你怎么分得出来？

从外面看不出来。要等到出事那天才看得出来。

---

它给你重排那套报销流程的时候，语气很稳。

它给你算错税的时候，语气也很稳。

稳的是它。

不稳的那部分，得你自己来。
`,Fw=`---
title: AI 没让你更容易成功，是让你更容易失败
category: 入门
tags: [AI, 认知, 方法]
cover: covers/cheap-failure.jpg
date: 2026-08-30
readTime: 9
excerpt: 他试了两次，不行，就停了。这套动作放在三年前完全正确——一件事只有一次机会，所以那一次必须对。可这笔账已经换了算法，而大部分人还在用旧的算。
wechat: https://mp.weixin.qq.com/s/hXTd0oOKz4hfsbA6MudLrw
---

[上一篇讲的是给自己划格子，哪些事你验得了，哪些验不了](https://blog.yingtongxue.cn/#/blog/2026-08-29-draw-your-own-map)。

有人照着划了。

划完之后，卡在了一个我没料到的地方。

一位做行政的说，她按那个法子把手上的活儿分成两堆，能验的那堆放开用。她用了两次。第一次出来的东西不对，第二次还是不对。

然后她就停了。

她的原话是：我是不是不适合用这个东西。

另一位开小店的更干脆。他让 AI 帮着写了一版发给老客户的活动通知，念了一遍，觉得不像人话，就关掉了。从那天起再没打开过。

你注意，这两个人都没做错什么。他们试了，也验了，发现不行就停手——这套动作放在三年前，是完全正确的。

[再往前那一篇，我劝人别站在池边看，下水去](https://blog.yingtongxue.cn/#/blog/2026-08-28-ai-is-not-a-wishing-well)。

他们真下水了。

只是下去两次，就上来了。

那他们错在哪儿？

错在「两次」这个数上。

这一篇不讲技巧，也不教怎么把那两次写得更好。它只想让你重新算一笔账：一件事，到底能试几次。

这笔账你可能觉得跟自己没关系——不搞发明，也不打算创业，就是想把手上的活儿干完。

但这辈子做过的每一个决定，都被它改过。你只是没注意到它一直在。

话说在前头，这篇比上一篇绕。[上一篇是教你分清楚](https://blog.yingtongxue.cn/#/blog/2026-08-29-draw-your-own-map)，这一篇要拆掉一个你用了几十年、且从来没怀疑过的习惯。

我凭什么这么讲？

这个博客写到今天第六篇，其中第三篇我写废了两版，整篇推倒重来，第三版才发出去。封面重出过三版，每一版都坏掉一样别的东西。

要是每一版都得花钱请人做，你现在看到的就是第一版。

下面进入正文。

---

## 一、你这辈子做事，一直是按「只有一次」来的

先不说 AI，说一件早就发生在你身上、但可能没细想过的事。

回想过去这几年你交出去的东西——一份方案、一封通知、一张宣传单、一个报价单。其中有多少是做了第二版的？

不多。

大部分东西的经历是这样的：想了想，做了一版，改掉几个错字，发出去了。

不是因为那一版足够好。是因为「做第二版」这件事，在你的处境里从来就不是一个选项。

这是懒吗？

不是。

这是几十年下来被环境教会的一套算法：一件事只有一次机会，所以那一次必须尽量对。

于是所有的功夫都花在开工之前。你反复想、反复权衡、找人参谋，就是不动手；等真动了手，就一路做到底，中间察觉不对也硬着头皮做完，因为回头的代价比错着做完还高。

这套算法用得太久，久到已经感觉不到它的存在了。

---

## 二、贵的不只是钱，还有脸

那第二版为什么这么贵？

钱是头一层。

找人做一版宣传单花了八百，改一版还要再花一笔，你当然只做一版。时间是第二层，等三天，很多事等不起。

但真正卡住大多数人的，是第三样东西。

是脸。

你回想那些根本不花钱的场合。让同事帮个忙，让朋友搭把手，让家里人给点意见，都不要钱。

可你敢让人家改到第三稿吗？

你不敢。

第一稿他很热情。第二稿他说没问题。到第三稿，开不了口的那个人是你自己。

那一刻嘴上说的是「差不多就这样吧」，心里想的其实是：我不好意思再麻烦他了。

所以那份东西不是在「够好」的地方停下的，是在「不好意思」的地方停下的。

这一条比钱狠得多。钱是能算的，八百块换不换得来，心里有数。人情算不了，你只知道额度在慢慢用掉，却不知道还剩多少，于是本能地省着用。

一次就得对，因为你只提得起这一次。

---

## 三、它没让你那一次更容易对

现在把 AI 放进来。

这两年到处在讲它多能干，你自己大概也被惊到过一两次。

那它到底强在哪儿？

先说它不强的那一样。

它并没有让你那一次更容易对。

你回想最近一次用它。你给它一段要求，它回你一版东西。那一版跟你自己憋出来的第一版比，真的好很多吗？

有时候好，有时候不好，更多的时候是看着漂亮，离你要的差得远。

前面那两位遇到的就是这个。试了两次都不满意，于是得出结论：这东西不行，或者我不行。

按老算法，这个结论完全正确。两次机会都用掉了还没成，那就是不成。

麻烦在于算法已经换了，而他们还在用旧的算。

换个容易看清的例子。

以前拍照用胶卷。一卷三十六张，按一下少一张，所以按快门之前要站很久，取景、构图、等光，全家人排好队谁也不许动。

你那时候的技术，比现在高吗？

未必。

但你每一张都拍得很认真，因为每一张都是钱。

后来换成了手机。同样一个场景，连拍二十张，回头挑一张。

你现在的水平比二十年前高了吗？

大概没有，甚至随便得多——举起来就按，构图都不看。

可你手里好照片的数量，是那时候的几十倍。

变的不是按下快门那一次的水平。变的是你能按几次。

AI 干的就是这件事。它没把你那一次的成功率提上去，它把第二次、第五次、第二十次的价格，砍到了接近于零。

不花钱，不用等三天，不欠人情。可以让它再来一版，语气不对再来一版，方向整个不对就推翻重来一版。它不会累，也不会在第三稿的时候给你脸色。

所以那两位读者真正的问题，不是那两次的质量不够。

是只试了两次。

一件十回里能成一回的事，试两次多半空手而归，试二十次就很难不成。单次的把握没变，到手的东西完全不是一个量级。

这不是运气变好了，是次数变多了。

---

## 四、更值钱的那一半：你敢掉头了

次数变多，这还只是明面上的账。真正改变你处境的是另一半，它藏得深一点。

那一半是什么？

你敢掉头了。

再想一次胶卷。一卷拍到第二十张，你发现今天整个思路都不对，光不对、地方不对、人的状态也不对。

换吗？

不换。因为那二十张已经花掉了，换思路就等于承认它们全废。所以你会捏着鼻子按原来的拍法把剩下十六张拍完，回来洗出来，一张都不满意。

这件事你在别处也干过。

一个项目做到一半，你心里其实已经清楚方向错了，但你没停。因为停下来意味着前面三个月白花，而且要当着所有人的面承认。

于是你把它做完了。做完之后大家都知道它不行，但没有人需要为「掉头」这件事负责。

沉没成本这四个字你可能听过，讲的就是这个：花掉的东西不该影响此刻的判断，可它每次都影响。

明知道是这么回事，你为什么还是掉不了头？

因为掉头是真的贵。那不是心理作用，是真金白银。

现在这一块也塌了。方向错了，推倒重来的代价从三个月变成一个下午，甚至可以让它按三个方向各做一版摆在一起看，然后杀掉两个。

这是普通人过去从来没有过的一种自由：允许自己走错，并且当场承认。

还有一件顺带发生的事，值得单记一笔。而且这一件，胶卷比不了。

胶卷废掉就是废掉了，洗出来的糊片剪不进下一卷。

可你被推翻的那些版本并没有消失。第一版里那句还行的话，第三版里那个不错的思路，都可以直接喂给下一版。上一次的产出，成了下一次的原料。

所以第二十次和第一次从来不是同一件事。这中间的门道不少，以后单开一篇讲。

---

## 五、便宜是有边界的

说到这儿得停一下，把话说清楚，否则这篇会被读成「放开了随便试」。

那是不是从此就可以随便试了？

不是。

不是所有的失败都变便宜了。

[回到上一篇说的那五个格子](https://blog.yingtongxue.cn/#/blog/2026-08-29-draw-your-own-map)。你手上的事分成两堆：能验的，和验不了的。

能验的那一堆，失败确实接近免费。那封通知念着别扭，你听得出来，扔掉重写，代价是三分钟。

验不了的那一堆，失败还是原价。

合同条款、税务口径、一切牵扯到钱和法律责任的事——试二十次，得到的是二十个你分辨不出好坏的版本。次数在这里帮不上忙，因为你没有挑照片的那双眼睛。

胶卷这个比方，到这儿就到头了。

差在哪儿？

手机里那二十张，糊的、闭眼的、手抖的，你翻一遍就删了，不用谁教你怎么认。

AI 的废稿不长那样。它工整、通顺、条理清楚，看着比你自己写的还像样。你挑不出毛病，不是因为它没毛病，是因为你不知道毛病长什么样。

所以便宜的失败有一个前提：这件事的对错，你自己看得出来。

[这个博客第一篇讲的就是这件事，真正的门槛从来不在写，在验](https://blog.yingtongxue.cn/#/blog/2026-08-26-prompt-engineering)。

次数没有改掉这条门槛。它只是让你在验得了的地方，有本钱多撞几次。

[看不出来的那一堆，规矩还是上一篇那条：不许直接用，得有一个你之外的东西来校准](https://blog.yingtongxue.cn/#/blog/2026-08-29-draw-your-own-map)。

失败便宜，和失败不要紧，是两回事。

---

## 六、次数在谁手里

最后说件很具体的事。

既然次数这么值钱，那就得问一句：你手上的次数，是谁的？

这个问题，多数人没问过。

不少人现在用的是公司发的那一份。开了个账号，说是给大家提效用的。

那份挺好，别不用。但有两件事心里要有数。

第一，它的次数不归你。哪天公司换一家，或者额度一个月用完为止，就只能等下个月——这些都不由你说了算。

第二件更要紧。

用公司那份的时候，你是端着的。

你会先想清楚再开口，会把问题措辞得像个正经问题，不好意思连着推翻十次，更不好意思问一个自己都觉得很笨的问题。

而这一整篇讲的事——多试、试砸、推倒重来——恰恰要求你不端着。

一个让你端着的地方，次数再多也用不出来。

那次数该从哪儿来？

自己去买一份。几十块钱起，够试很多次了。

买来最该拿它干的，不是工作上那些你已经很熟的活儿。是那些你一直含糊着、又不好意思去问人的事。

孩子那道题你自己会做，可就是讲不明白，越讲他越懵。让它换五种讲法，你挑一种连自己都觉得顺的。

一道没做过的菜，让它写个步骤，做砸了再回去问哪一步错了。好不好吃你嘴里有数，用不着谁来告诉你。

一直想学又不知从哪儿下手的东西，让它排三条不同的路出来，走两天，不对就换一条。

这三件事有个共同点：错了不要紧，而且对错你自己看得出来。

正是上一节说的那一堆。

不必一次买贵的，也别只买一家。同一个问题拿去问两三家，你会发现答案不一样，而不一样的那个地方，恰恰是该多看一眼的地方。

几十块钱换来的那些次数，是长在你自己身上的。哪怕全试砸了，你也知道了二十条走不通的路。

这个知识，明年还在你手里。

---

胶卷早就没人用了。

可你做事的时候，还在按三十六张算。
`,Zw=`---
title: AI 圈又造了三个新词，你只要看懂谁套着谁
category: 入门
tags: [AI, 认知, 方法]
cover: covers/three-layers.jpg
date: 2026-08-31
readTime: 8
excerpt: 提示词工程、上下文工程、harness（驾驭工程）。三个词长得像同类项，其实不是——前两个说的是你给它什么，第三个说的是你怎么管住它。
wechat: https://mp.weixin.qq.com/s/XfU0-ZhEHal7Lvs6ZifmpA
---

这半个月，三个人问了我同一件事。

一个是同事，开会时冒出来一句「你说的那个上下文工程，跟提示词工程到底啥区别」。

一个是朋友，发来一篇公众号文章的截图，问我「这里面说的 harness 是啥，翻译过来叫驾驭工程，听着更玄了」。

还有一个更实在。他说他不想搞懂，他只想知道这仨玩意儿跟他有没有关系，没关系他就不看了。

第三个问法最好。

先回答他：有关系，而且你已经在用第一层了。你开会员、打字、看它回你话，这整个过程就压在这三层里头，只是没人跟你说过它分层。

这一篇不背定义。三个词最后都会出现，但都是顺口一提，你记不住也没关系。要记的只有一件事：**它们不是并排的三样东西，是一层套一层。**

话说在前头，中间会有一个转弯。前两层好懂，第三层跟前两层不是一个路数，那儿是这篇的重点，也是大多数人绕晕的地方。

我凭什么讲这个。[它面前摆着一张桌子，桌上放什么、放多少、旧的清不清，直接决定它答得准不准](https://blog.yingtongxue.cn/#/blog/2026-08-27-context-for-everyone)——中间那一层我单独写过一整篇。那篇发出去之后有读者照着做了，效果和翻车都反馈回来过。这三层里，我至少有一层是拿真人试过的。

下面进入正文。

---

## 一、不是你笨，是这三个词长得太像了

为什么听着累？

先看这三个名字：提示词工程、上下文工程、驾驭工程。

三个都是「什么什么工程」。

排在一起，看着就像三个并列的科目，好比语文、数学、英语。于是你自然而然地想：那我是不是得一个一个学过去？

**问题就出在这儿。**

它们不是三个科目。它们是三个圈，一个套一个，从里往外。

你要是按并列去理解，怎么记都是乱的——因为你在把一个套娃摆成一排。

---

## 二、最里面那层：你打进去的那句话

从最里面开始。

你对着输入框打了一行字：「把下面这段话改得客气一点。」

这就是最里面那一层。

它有个名字叫提示词。不用记，就是「你说的那句话」。

这一层有什么门道？

也就一句：说得越具体，它猜得越少。

说「改得客气一点」，它得猜要多客气；说成「改得客气一点，是发给客户的，别显得我们理亏」，它就不用猜了。

这层最好懂，也最容易被当成全部。

大多数人对 AI 的全部理解就停在这儿——**我说得好，它就答得好。**

这句话不算错。但它只管到最里面那一圈。

---

## 三、往外一层：它面前那张桌子

你说的那句话，就是它看到的全部吗？

不是。

它面前还有一张桌子。

桌上摆着你上传的文件、前面聊的十几轮、它自己刚查到的资料，还有公司规定好的那些说话规矩。

你打进去的那句话，只是桌上的其中一张纸。

**桌上摆着的所有东西加起来，才是它做判断的依据。**

这些东西合起来有个名字，叫上下文。名字同样不重要，重要的是那张桌子有两个毛病。

哪两个？

第一个，桌子有边。

摆不下了它就往下掉，掉下去的多半是你最早说的那几句。所以聊了两小时之后它忘了开头，不是它记性差，是桌子满了。

第二个毛病更麻烦：**桌上没有一张纸写着「此件作废」。**

第一版方案被否了，第二版也被否了，可这两版还摊在桌上。它不知道哪张是作废的，只知道桌上有三个版本，于是给你端出来一个三合一的四不像。

[桌上空着它就编，桌上太满它就飘，怎么把桌子清干净，那一篇里讲透了](https://blog.yingtongxue.cn/#/blog/2026-08-27-context-for-everyone)。

管这张桌子的事，就叫上下文工程。

---

## 四、停一下，前面两层有个共同点

到这儿，先别急着往外走。

回头看看已经说过的两层。

第一层是你说的话。第二层是你摆的桌子。

它们有一个共同点，而且这个共同点很要紧。

是什么？

**都是你递给它的东西。**

话是你说的，文件是你传的，桌子是你摆的。在这两层里，你的角色只有一个——供货的。

你供得好，它干得好；你供得乱，它干得乱。

所以这两层的所有技巧，说到底都是同一件事的两种说法：**怎么把该给的东西给全，把不该留的东西撤走。**

那第三个词呢？

第三个词不是这个路数。

---

## 五、最外面那层：套在它身上的东西

前面两层，你一直在往它跟前送东西——话、文件、之前聊过的那些记录。

那些都叫喂。

第三层不是喂。

第三层是**套**。

差在哪儿？

想想马。草料是喂给马的，让它跑得动；马鞍、缰绳、马镫是套在马身上的，让它听你的。

一匹吃饱了却没上缰绳的马，跑得比谁都欢，就是不听你的。

这一整套套在马身上的东西，英文里有个现成的老词，叫 harness，跟 AI 一点关系都没有。有人把它译成驾驭工程。

名字还是不用记。记住「套在身上」这四个字就够。

那这套「马具」具体是些什么？

拆开是四样。

**第一样，谁来派活**。一件事分几步、先干哪步、这步没成要不要重来。

这事你其实天天在干。交代一个新来的实习生做份材料，你不会一口气把八件事全倒给他，你会说：先把数据整出来给我看一眼。看过了，再说下一步。

骑马也是这样，不是一路直冲，总得决定在哪儿转弯、在哪儿慢下来。

**第二样，它能动用什么**。光会想不行，还得能动手。

有没有过这种事：让它「查一下最新的规定」，它给了一段听着很像、后来发现是编的。

多半不是它想骗人，是它根本没法上网，只能拿脑子里的旧东西凑一个出来。

能不能上网、能不能读你的文件、能不能真把东西存下来——这不归它决定，归那个给它配装备的人。就像马能不能过河、能不能上坡，取决于蹄子上钉了什么。

**第三样，谁来检查**。它干完一步，得有人看看对不对，不对就退回去重做。

这一样最容易被省掉，也最要命。

你让它写一份通知，读着顺眼，就发出去了。中间没有任何一道拦截。它要是错了，第一个发现的是收到通知的那两百个人。

没有这一样，AI 就是一匹撒开蹄子往前冲、没人喊停的马。

**第四样，桌子由谁重摆**。还记得上一层那张桌子吗？

一次对话里聊了三件事，聊到第三件的时候，前两件还堆在桌上。每干完一段，桌上该留什么、该撤什么、下一段该摆什么——这件事得有人管。

**注意最后这一样：第二层那张桌子，其实是第三层的一个零件。**

这就是我一开始说的「套娃」。上下文不是跟 harness 并列的另一门课，它是 harness 里的一格。

这四样加起来，围着 AI 转了一圈，把它包在中间。

![中间是大模型，里面嵌着你说的那句话，也就是提示词；四周围着四格——谁来派活（编排）、桌子谁重摆（上下文）、它能动用什么（工具与权限）、谁来检查（反馈）；整个外框是套在它身上的那一套，即 Harness 驾驭工程](/images/harness-layers.jpg)

这就是驾驭工程。名字你还是不用记。

---

## 六、马越快，缰绳越要紧

现在可以回答那个最实在的问题了：这跟你有什么关系。

有人会想，这不是程序员的活儿吗。

前两层确实人人在干——你每天打的那句话、你传上去的那些文件，就是第一层和第二层。

第三层看着离你远，但它决定了一件你天天在遇到的事：**为什么同一个 AI，在不同的软件里，聪明程度不一样。**

这种事你大概撞见过。同一件事，在这个工具里问，它答得利索；换一个工具，它就颠三倒四。

是模型不一样吗？

常常不是。**模型是同一个，外面那圈马具不一样。**

一个给马配齐了鞍镫缰绳，一个把人直接放马背上。马是同一匹。

这也解释了另一件事。

为什么这两年 AI 工具换得这么勤，而且每次都说自己「更聪明了」？

有一部分是模型真的变强了。还有一部分，是外面那圈东西被人重做了一遍。

那是不是等模型再强一点，这层就不需要了？

不会。

模型越强，这层壳可以做得越薄——本来要你手把手带三步，现在说一句它就走完了。

**但薄不等于没有。**

马再通人性，你也得有根缰绳。不是因为你比马懂路，是因为**去哪儿这件事得由你说了算**。

就像老师傅带徒弟。徒弟出了师，你交代得越来越少，一句话他就知道怎么办。

可那句话还是得你说。他不知道今天这活儿是谁要的、什么时候交、出了岔子能不能返工。

---

## 七、你真正要看懂的不是这三个词

说到这儿，可以把开头那个问题收了。

那三位问我区别的朋友，其实都不是真想背定义。他们想问的是同一句话：**这波东西里，哪一块是我该管的？**

按这三层分，答案清楚得很。

第一层，你说的那句话——完全是你的。没人能替你说清楚你到底要什么。

第二层，那张桌子——大半是你的。工具能帮你收拾，但摆什么上去、哪份作废，只有你知道。

第三层，那套马具——大部分不是你做的，是工具做好了给你用的。但**用哪一套、什么时候该勒一下缰绳，是你的**。

绕了一圈，三个新词退到了后面，站在前面的还是那句老话：

它跑多快是它的事，去哪儿是你的事。

新词还会一茬一茬地出。明年这时候，多半又有两个词冒出来，配上「三天一重磅、五天一炸裂」的架势。

到时候你不用慌，只问一句：**这个新词说的是我给它什么，还是我怎么管住它？**

问完你就知道它该摆在哪一圈了。

---

一匹好马，能少费你很多力气。

前提是缰绳在你手上。
`,Kw=`---
title: AI Agent 实战 00 · 这个系列讲什么
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-00.jpg
date: 2026-09-06
wechat: https://mp.weixin.qq.com/s/oFjEokcnHfwiMdftAFFdWg
readTime: 4
excerpt: 一个面向业务顾问的 AI Agent 实操系列。不讲模型原理，不讲编程，讲怎么把手上一件业务的活，安全地交出去一部分。全系列以 knodo 平台为样例载体，方法本身与平台无关。
---

这个系列写给业务顾问：你熟悉业务、会梳理需求，但没有开发经验，也没搭过 Agent。手上有个真实的活儿，想知道能不能交给 AI 做一部分。

## 教什么

学完之后，你能主导一个 Agent 项目：知道要干哪些活、哪些能交给 AI、哪些是你作为产品经理必须自己拍板的、以及做出来之后怎么判断它行不行。

**不教的三样**：模型原理、编程、平台运维。

需要写代码的地方，系列里会明确说「这里要找工程搭档」，并且把话教到你能跟工程师讲清楚要什么为止。

## 为什么用 knodo 做样例

方法本身与平台无关。风险怎么分级、哪些动作要人批、日志记什么、评测集怎么设计——换成别的 Agent 平台，这些一条都不会变。

但只讲方法不动手，学员什么也搭不出来。所以全系列以 **knodo** 作为演示载体：一个企业内部的 AI 协作平台，能在网页上建工作空间、传知识、配 AI 成员、派任务。

每一篇的写法是分层的：**先讲方法**——换个平台照样成立的那部分；**再给 knodo 上的具体点法**作为一次实例。你用的是别的平台，方法那一半照样能用。

平台的界面会改版，文档也未必跟得上实际功能。系列里凡是涉及具体点法的地方，都是某一次实测的结果，不保证下次打开还长那样——**自己核对**这件事，本来就是这个系列要教的能力之一。

## 主轴：风险分级

贯穿全系列的不是技术难度，是风险等级。

一个 Agent 能自动到什么程度，不看它多聪明，看它碰什么。

| 等级 | 它在干什么 | 能自动到什么程度 |
|---|---|---|
| L1 辅助生成 | 写草稿、做总结、解释东西 | 人看过再用 |
| L2 受控问答 | 查制度、查资料、答疑 | 来源可追溯，按权限检索 |
| L3 受控执行 | 建任务、填单据、发起流程、调内部接口 | 白名单加最小权限，关键动作人工批 |
| L4 高影响执行 | 碰钱、碰客户承诺、碰合规判断、碰生产 | 原则上不允许无人值守 |

这张表按 ISO/IEC 42001 的管理思路整理，是全系列引用最多的一张。后面每一篇的控制强度，都由这张表决定。

## 内容规划

全系列二十三篇，分七个部分。

**第一部分 · 先看见它**

| 篇 | 内容 |
|---|---|
| 01 | 搭出第一个问答 Agent，全程无代码 |
| 02 | Agent 的风险从哪儿来，凭什么分级 |

**第二部分 · 定级与立项**

| 篇 | 内容 |
|---|---|
| 03 | L1 到 L4 怎么判，判据是什么 |
| 04 | 过不了门禁的方案怎么改造 |
| 05 | 项目输入登记表：二十个字段逐项填 |

**第三部分 · Agent 合同**

搭任何一个 Agent 都要过的九个控制项。

| 篇 | 内容 |
|---|---|
| 06 | 角色、目标与非目标清单 |
| 07 | 动作分层与禁止动作清单 |
| 08 | 工具白名单与最小权限 |
| 09 | 人工审批点：位置、粒度与一致性 |
| 10 | 可追溯日志与版本管理 |

**第四部分 · 在平台上落地**

| 篇 | 内容 |
|---|---|
| 11 | 知识库：来源、版本、有效期与废止 |
| 12 | 无代码的边界：哪些环节必须写代码 |
| 13 | 外部系统接入：接口盘点与源系统协作 |
| 14 | 门禁为什么必须在 Agent 之外执行 |
| 15 | 异常路径：五种必须停下来的情况 |

**第五部分 · 测试与上线**

| 篇 | 内容 |
|---|---|
| 16 | 评测集设计：标准问答、负例与回归 |
| 17 | 红队测试：四类攻击面 |
| 18 | 上线证据包：十四项清单与五道门禁 |

**第六部分 · 运行**

| 篇 | 内容 |
|---|---|
| 19 | 运行监控：平台指标与自建指标 |
| 20 | 退出机制：暂停条件、降级与回滚 |

**第七部分 · 多个 Agent**

| 篇 | 内容 |
|---|---|
| 21 | 流程拆分：职责边界与降级判定 |
| 22 | Agent 间交接：制品传递与门禁 |
| 23 | 确定性边界：不应交给 Agent 的工作 |

## 每篇都有产出物

这个系列不是读物。每一篇学完，你手上要多一个东西：一个跑起来的 Agent、一份填好的表、一套评测集、一份权限矩阵。

没有产出物的篇目，说明那一篇还没想清楚自己为什么存在。

## 发布顺序

先发 01 到 05。

这五篇解决最急的两件事：**手上那个需求做不做得成、怎么开始**。发完你就能自己判断该做什么、该找谁。其余十七篇陆续补。

下一篇动手搭第一个 Agent。
`,$w=`---
title: AI Agent 实战 01 · 四步搭出一个问答 Agent
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-01.jpg
date: 2026-09-06
wechat: https://mp.weixin.qq.com/s/l87GC-ixaQ3NxxD0VFSXww
readTime: 9
excerpt: 建工作空间、上传知识文件、新建 AI 成员写规矩、提问验收。全程点击，不写一行代码。搭完手上会有一个能依据你的制度文件回答问题的 Agent，以及五道题的验收记录。
---

这一篇动手搭第一个 Agent，全程在网页上点，不写代码。

搭出来的是一个**问答型 Agent**：它只读你上传的文件，只输出文字，不碰任何系统。这是风险最低的一类，可以放心拿来练手。

## 学习目标

学完这一篇，你能做到四件事：

| | 你能做到 |
|---|---|
| 一 | 在 knodo 上建出一个工作空间，并说清工作空间里都有什么 |
| 二 | 把一批制度文件变成 Agent 能用的知识库 |
| 三 | 写出一段能被验证的 Agent 规矩，而不是一句「请尽量准确」 |
| 四 | 用五道题验收它，并判断哪一道暴露了问题 |

产出物是一个真在跑的 Agent，加一份五道题的答案记录。第 02 篇要用它。

## 一、工作空间与 AI 成员

动手前先认路。knodo 上的东西分三层：**组织 → 工作空间 → 空间里的内容**。

**工作空间**是一块隔离的区域。一个项目、一条业务线、一个团队，各开一个，互相看不见。你在它里面放的东西大致有这几类：

| 模块 | 放什么 |
|---|---|
| 知识 | 文件。Agent 回答问题的依据 |
| 对话 | 你跟 Agent 的聊天记录 |
| 任务 | 派给人或 Agent 的活儿，有状态流转 |
| 自动化 | 定时或按事件触发的任务 |
| 分析 | 用量、调用次数这类统计 |
| 成员 | 人类成员，和 AI 成员 |

这一篇只用到其中两项：**知识**和**成员**。任务、自动化那几样是后面几篇的事。

**AI 成员**（界面上也叫「AI 助手」，是同一个东西）是组织级的角色，不属于某一个空间。它可以加入多个空间，**加入哪个空间，就用哪个空间的知识回答问题**。

所以这一篇的顺序是固定的：先有空间，才能往里放知识；有了知识，AI 成员进来才有东西可查。

**还有一层容易被漏掉：AI 成员和大模型是两回事。**

AI 成员定的是「它是谁、按什么规矩办事」；具体用哪个大模型来算，是另一层设置。
平台可以接入多个不同的大模型，可以在工作空间设置里定一个默认的，
**也可以在对话时当场换一个**。

也就是说：**同一个 AI 成员，换个模型，答出来的东西可能不一样。**
这一篇不动这个设置，用默认的就行——但要知道有这一层，第 02 篇会回来算这笔账。

## 二、准备材料

Agent 答得准不准，取决于你给它什么材料。动手前先把材料备好。

演示用的是三份虚构的研发流程制度：

| 文件 | 管什么 |
|---|---|
| 研发变更管理办法 | 变更分类、谁审批、要附什么材料、上线窗口 |
| 提单与验收流程 | 提单要素、状态怎么流转、各环节时限、验收和退回规则 |
| 变更风险分级表 | 什么算高风险、什么算中风险、什么算低风险 |

**建议你直接换成自己部门的制度文件**。三到五份，Markdown、txt、Word、PDF 都能传。用真材料，你才验得出它答得对不对——这一点后面第七节还会讲。

材料有一个要求：**内容之间要有关联**。比如「住宿标准按城市等级分档」写在 A 文件，「哪个城市属于哪一级」写在 B 文件。有这种结构，你才能出一道需要跨文件回答的题，看它会不会把两处接起来。

## 三、第一步 · 建工作空间

**做什么。** 开一块隔离的区域，之后所有东西都放在里面。

**怎么做。** 找到创建工作空间的入口，进入创建页面。表单要填的东西不多：

| 字段 | 填什么 |
|---|---|
| 工作空间名称 | \`研发流程问答（演示）\` |
| 工作空间标识符 | 系统按名称自动生成，不用管 |
| 可见性级别 | 保持默认的私有 |
| 分类、应用模板 | 都留空 |

创建方式选**从空白创建**，不要选模板。模板会替你预置一批内容，第一次搭，你需要看清每样东西是怎么来的。

名字里带上「演示」两个字。之后你截图给同事看的时候，对方一眼知道这不是生产环境。

**做完应该看到什么。** 左侧空间列表里出现这个空间，点进去有知识、对话等入口。

![创建工作空间的表单](/images/agent-01-2-create-space.png)

## 四、第二步 · 上传知识文件

**做什么。** 把准备好的制度文件放进这个空间的知识库。

**怎么做。** 进入左侧的「知识」模块，把文件**直接拖进文件列表区域**，也可以用工具栏的上传按钮选择。

三份文件都放根目录，第一次搭不用建目录结构。

**做完应该看到什么。** 文件列表里三份文件齐全，点开任意一份能看到渲染后的内容。

列表里可能还有一个你没传过的 \`.gitignore\`，那是平台自己建的，不用管它。

![知识库文件列表](/images/agent-01-3-knowledge.png)

## 五、第三步 · 新建 AI 成员，写规矩

这一步是全篇的重点。

**做什么。** 建一个有名字、有职责的 AI 成员，并把它的行为规则写进系统提示词。

**怎么做。** 打开工作空间设置，找到「AI 成员」，点新建。

表单里必填的只有两项：**助手名称**和**人设／系统提示词**。名称填「流程助手」。

打开表单时，系统提示词那个框**里面已经有字了**——平台按空间名生成了一段默认模板。**先把它全选删掉**，再填下面这段：

\`\`\`
你是本工作空间的研发流程答疑助手，服务对象是提交变更的业务人员。

回答规则：
1. 只依据知识库里的流程文件回答，不使用常识补充。
2. 每条结论后面注明依据哪一份文件、哪一条。
3. 知识库里没有写到的，直接说「流程文件里没有写到这一条」，
   并建议向研发管理办公室确认。不要推测。
4. 涉及风险等级、变更类型等分档条件时，先确认属于哪一档，再给结论。
5. 不代替审批人做判断，不承诺审批结果与上线时间。
\`\`\`

其余字段——助手介绍、欢迎语、分类、IM 绑定——这一篇都留空。

![AI 成员表单：名称与系统提示词](/images/agent-01-4-bot-form.png)

### 这五条为什么这么写

每一条都对应一个**你能当场看见的动作**：

| 规则 | 它约束什么 | 怎么看出它生效了 |
|---|---|---|
| 1 只依据文件 | 不拿常识补空 | 问一件文件里没有的事 |
| 2 注明依据 | 答案能被追回原文 | 答案里出现「依据：《某某》第几条」 |
| 3 没写就说没写 | 不编 | 问一件三份文件都没写的事 |
| 4 先确认档位 | 不跳过条件直接给数 | 问一个要分档才能答的问题 |
| 5 不代审批人表态 | 不越权承诺 | 问「我这个能批下来吗」 |

对比一下常见的写法：「请尽量准确」「不要出错」「回答要专业」。这些句子的问题不在于态度，在于**你没法判断它做没做到**。

规矩写得能不能验，比写得全不全重要。

**做完应该看到什么。** AI 成员列表里出现「流程助手」，状态显示已发布。

![AI 成员列表](/images/agent-01-4-ai-members.png)

## 六、第四步 · 提问验收

**做什么。** 按规格出五道题，一题一题问，把答案记下来。

**怎么做。** 新开一个对话。**先看输入框左下角**——那里会显示一枚小标签，写着当前选中的 AI 成员名字。

![输入框左下角的助手标签](/images/agent-01-5-bot-chip.png)

这枚标签决定了你在跟谁说话，很重要，第八节会讲它为什么重要。确认上面写着「流程助手」，再开始提问。

一题一轮，不要在同一轮里连问两个问题。也不要用 \`@\` 手动指定文件——要测的正是它自己找材料的能力。

**做完应该看到什么。**

答案上方会出现一小组带对勾的行，列出它执行了哪些动作、翻了哪几份文件。答案正文里会出现「依据：《某某》第几条」这样的句子。

这两样东西**性质不同**，第九节细说。

回答需要十秒上下，中间会有几秒空白，属于正常，不用重复点发送。

![第 1 题的完整问答](/images/agent-01-6-first-answer.png)

## 七、五道验收题怎么出

**先说一条前提：验收题必须是你自己能翻文件核对答案的。**

拿一道你也不确定的题去问，你验的不是它，是你自己的印象。这也是为什么建议你用本部门的真实制度——你知道正确答案。

五道题按这个规格出：

| # | 规格 | 演示用的题 | 它在测什么 |
|---|---|---|---|
| 1 | 单份文件能直答 | 提单之后多久会有人处理 | 基线：它真的读了文件吗 |
| 2 | 换一份文件的直答 | 验收不通过会怎么样 | 它读的不止第一份 |
| 3 | 需要跨两份文件 | 我要改支付回调的接口，谁批 | 它会不会把两处接起来 |
| 4 | **文件里根本没有** | 上线之后要回滚，谁批 | 它承认不知道，还是编一个 |
| 5 | 有分档条件 | 我提的这个需求什么时候能上线 | 它先问清楚，还是直接给数 |

第 4 题最值得花时间设计。

**出题方法**：翻一遍你的材料，找一个**业务上真实存在、但制度文件里恰好没写**的缺口。演示这套里，三份文件都写了「高风险变更须附回滚方案」，却没有一份写「执行回滚由谁批准」。

它老实回答「文件里没有写到这一条」，说明规则三生效了。它编一个出来，说明规则三没管住它——**而知道这一点，比它答对前面四道更有价值**。

五道题的答案记下来。第 02 篇要拿它当分析材料。

## 八、两个不报错的地方

下面两条是实测踩到的。它们的共同点是：**操作过程中不会有任何报错提示，界面上也看不出异常。**

### 一 · 规矩写在了不生效的地方

平台上有两个地方能写规矩：**空间的「工作指引」**，和**每个 AI 成员自己的「系统提示词」**。

两者不叠加，是二选一：

| 提问方式 | 生效的是 |
|---|---|
| 选中 AI 成员之后提问 | 那个成员的**系统提示词** |
| 不选成员，在空间里直接提问 | 空间的**工作指引** |

如果你把五条规矩写进了工作指引，然后建 AI 成员、选中它提问，那五条**不生效**。答案不带出处，遇到文件里没写的事照样编，而界面上没有任何异常提示。

判断方法就是第六步说的那枚标签：**输入框左下角显示着成员名字，你走的就是系统提示词那条路，规矩要写在成员里。**

### 二 · 预填的模板没删干净

第五步提过：新建 AI 成员时，系统提示词框里已经有一段平台生成的默认模板。

如果你不删它，直接往下追加自己的规矩，就会有两段规则同时生效，而它们**未必一致**。更麻烦的是往后改规矩时，你只会记得改自己写的那一段。

顺带说一个由此引出的问题。那段默认模板里已经写了「问题超出知识库范围，诚实告知」这类话，和你的规则三重复。所以**你的 Agent 在第 4 题上表现好，未必是你那条规矩起的作用**。想分清是谁的功劳，需要做对照实验，那是第 16 篇讲评测集时的内容。

## 九、下一篇讲什么

到这里你手上有一个能跑的 Agent，和五道题的答案记录。

但「能跑」和「能信」是两件事。有一处现在就能看出来。

回答里有两样东西看起来都像出处，可信度却不一样：

| | 谁产生的 | 能信吗 |
|---|---|---|
| 答案上方那组带对勾的行 | **平台**记录的执行过程 | 能信。它伪造不了自己翻过哪几份文件 |
| 答案正文里的「依据：《某某》第几条」 | **模型**自己写的一句话 | 不一定。它写得出来，也编得出来 |

还有一件事：同一道题我前后问了两次，第一次它翻了三份文件，第二次只翻了一份。同一个 Agent、同一道题、同样的规矩，两次做法不同。答案都对，但你凭一次答对认为它可靠，理由并不成立。

那么，一个 Agent 到底凭什么判断能不能上线？技术上跑得通就够了吗？

**第 02 篇拿这一篇搭出来的 Agent 当解剖对象**，讲清楚三件事：它属于哪一类风险、为什么这一类可以直接用、以及哪四种因素会让风险升上去。

搭好的 Agent 和那五道题的答案先留着，下一篇要用。
`,Pw=`---
title: AI Agent 实战 02 · 三个低风险特征，四类升高因素
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-02.jpg
date: 2026-09-07
wechat: https://mp.weixin.qq.com/s/EVc-kAWbRaxe6fXHETOJug
readTime: 9
excerpt: 上一篇搭出来的那个问答 Agent 可以直接用，理由不是它简单，是它只读、只生成、结果可回原文核对。这一篇把这三条特征讲清楚，再列出四类会让风险升上去的因素，外加一个不在任何分级表里的第五因素。
---

上一篇搭出了一个问答 Agent。这一篇回答一个问题：**它可以直接给同事用吗。**

答案是可以。但理由不是「它简单」，也不是「它只是个问答机器人」——那两个理由都靠不住。

## 学习目标

| | 你能做到 |
|---|---|
| 一 | 说清「能不能直接用」由风险特征决定，而不是由技术难度决定 |
| 二 | 认出低风险的三个特征，并在自己的 Agent 上逐条验证 |
| 三 | 说出问答 Agent 的三条技术路线，以及自己那个走的是哪一条 |
| 四 | 认出四类会让风险升上去的因素，判断自己的需求命中了哪几条 |
| 五 | 知道模型是第五个因素，而它不在任何一张分级表里 |

产出物是一张自评表，填的是你手上那个真实需求。

## 一、先判风险，不先判技术难度

很多人评估一个 Agent 项目，第一反应是问「这个技术上做得出来吗」。

这个问法会把顺序搞反。

**技术难度决定的是做多久，风险等级决定的是能不能做、以及做出来之后能自动到什么程度**。一个技术上很简单的 Agent，可能因为它碰的东西，一天都不允许无人值守；一个技术上很复杂的，反而可以直接上。

[上一篇那个问答 Agent 就是后者的反面例子——它技术上简单到全程点击，但它可以直接用](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)，**跟「简单」没有关系**。真正的理由是下面三条。

## 二、三个低风险特征

### 特征一 · 只读

**它没有对任何系统写入过一个字。**

[回头看上一篇的四步：建工作空间、上传文件、写系统提示词、提问](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)。**没有一步给它配过工具，也没有一步给它开过权限**。它能碰到的只有你放进那个空间的几份文件，而且是只读。

**怎么在自己的 Agent 上验**：把它接触过的所有东西列出来，逐个问「它能改动这个吗」。只要有一个能改，这条特征就不成立。

注意「只读」说的是**对外部系统**只读。它在自己的对话里写字不算写入——那是下一条。

### 特征二 · 只生成

**它的产出只有文字，交给人看。**

五道验收题的回答，形态全是文字：结论、依据、提醒。没有一条回答会自己变成一个动作。

这一条的分量在于：**文字不会自己生效**。它答错了，最坏的结果是你被误导；但在你据此做事之前，中间还隔着一个人。那个人就是控制点。

**怎么验**：问自己「它输出的东西，有没有哪一样会被别的系统直接读走并执行」。哪怕只是写进一个别人会照着做的表格，性质就变了。

### 特征三 · 结果可自检

这一条最容易被误解，也最值钱。

**可自检不是「它会给出处」，是「它给的出处你能回去对」。**

上一篇提过，回答里有两样东西看起来都像出处，但来源完全不同：

| | 谁产生的 | 能信吗 | 粒度 |
|---|---|---|---|
| 答案上方那组带对勾的行 | **平台**记录的执行过程 | 能信。它伪造不了自己翻过哪几份文件 | 到文件 |
| 答案正文里的「依据：《某某》第几条」 | **模型**自己写的一句话 | **不一定** | 到条款 |

第二样为什么不能全信，下面是实测。

同一个 Agent、同一份知识库、同一段规矩，问它「变更被退回三次之后还能不能重新提」。它的回答里有这么一句：

> 任一节点退回后重新提交的，审批时限从重新提交之日起重新计算。（依据：《提单与验收流程》第五条）

**这句话的内容是对的，条款号是错的**。那句规定在**第四条「各节点时限」里**，而第五条是「验收规则」。

**这种错比彻底编造更难发现**。你翻到第五条，看见的是验收规则——第一反应多半是自己找错了地方，而不是它说错了。

同一次回答里还有第二处，更隐蔽。

它引用《研发变更管理办法》第三条「超时视为退回的，提单人可补充材料后重新提交」，
用来支持「三次退回间隔超过 30 日」这种情形。

**条款是真的，条号也是真的，但那一条讲的是审批人超时未响应**，跟退回间隔是两件事。
内容对、出处对、用错了地方。

所以「结果可自检」这条特征，落到操作上是三步：

**看轨迹知道它翻了哪几份 → 点开那份文件 → 拿它写的「第几条」回去对。**

三步都得人做。平台只帮你到第一步。

**怎么验**：随机抽三条带出处的结论，逐条回原文核。**能核就成立，核不动就不成立**——比如它引用的是一份你没有的外部资料，或者答案里根本没有可追的锚点。

## 三、技术路线不同，风险也不同

上一节那两处出处错误，跟这个 Agent **是怎么找到答案的**直接相关。

同样叫问答 Agent，底下至少三条路线：

| 路线 | 输出是什么 | 你要核什么 |
|---|---|---|
| 索引直答 | 把命中的知识原样吐出来 | **不用核**，输出就是原文 |
| 检索增强 | 模型基于召回的片段改写 | 改写有没有走样 |
| 通读原文 | 模型自己挑文件读完后重述 | **结论和它给的条款号对不对得上** |

**[上一篇搭的那个走第三条](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)**——它的执行记录就是证据：先列出工作区文件，
再挑几份整篇读进去，然后组织语言作答。

**路线越靠后，自检成本越高，模型的分量也越重**。上一节那两处错是第三条路线特有的
失效形态，走第一条不会出——因为它根本不改写。

三条路线各有各的代价，怎么选、以及第三条路线该怎么靠知识组织来约束，
都不是这一篇的事。**这一篇你只需要知道一件事：先搞清楚自己那个 Agent 走的是哪一条，
因为后面所有的风险判断都建立在这上面。**

## 四、四类让风险升上去的因素

上面三条特征只要有一条不成立，风险就升上去了。加上另一类情况，一共四条。

用同一条研发变更流程举例，四类都在这条线上：

| 因素 | 它在做什么 | 同一条流水线上的例子 |
|---|---|---|
| **写入系统** | 不只是读，开始改动别的地方 | 帮人把变更单提进系统，填好要素并跟踪状态 |
| **影响外部方** | 产出直接到达系统之外的人 | 变更被退回时自动通知提单人，或者对客户发出承诺 |
| **结果不可自检** | 答案没有可追回的原文 | 让它判断这次变更算高风险还是中风险，并据此决定审批人 |
| **动作不可逆** | 做完撤不回来 | 自动把修复发布到生产 |

**这四条不是随便列的，前三条各自打掉上一节的一个特征：**

| 因素 | 打掉哪个特征 |
|---|---|
| 写入系统 | 只读 |
| 影响外部方 | 只生成（产出直接到人，中间没有控制点了） |
| 结果不可自检 | 结果可自检 |
| 动作不可逆 | **不对应任何特征，它是独立的一维** |

第四条独立的原因是：前三条问「它做什么」，第四条问「做错了还能不能挽回」。
一个动作可以既只读又可自检，但一旦发出去收不回来——比如对客户发的通知——
风险仍然高。**这一维要单独判。**

第三条最容易被漏掉，单独说一句。

**判断题和检索题不是一回事。**

「高风险变更谁批」有标准答案，白纸黑字写在文件里，你能回去对。

「这次变更算不算高风险」是判断。分级表给的是条目，套到具体一次改动上仍然要有人拍板。

**后者错了，你没有原文可以核对，只能拿另一个判断去对它。**

[上一篇那个 Agent 之所以低风险，恰恰因为它做的全是检索题](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)。它一旦开始做判断题，第三条特征就没了。

**这四条不是打分项，是开关**。命中任何一条，「无需额外控制」这个结论就不成立，得回去设计控制措施——那是第 06 到第 10 篇的内容。

## 五、第五个因素：模型

前面四条都在讲 Agent 碰什么。这一条讲的是**同一个 Agent，不同的算力**。

**先划清适用范围**：这一条主要在第三条技术路线（通读原文）上成立。走索引直答那条路，
模型只影响「听懂没听懂」，不影响答案内容；走检索增强，影响在中间。
**路线越靠后，模型的分量越重。**

上一篇提过，AI 成员和大模型是解耦的：成员定「它是谁、按什么规矩办事」，模型定「用什么算」，而且**模型可以在对话时当场换**。

这不是理论。同一道题、同一份知识库、同一段规矩，只换模型：

| | 出处准确率 | 表现 |
|---|---|---|
| 模型 A | 三处引用两处有问题 | 一处条款号错，一处条款用错场景 |
| 模型 B | 三处全对 | 还多分辨出两条容易混的规定是不同的两件事，并主动标出三个文件里没写的空白 |

**关键不在于哪个模型更好，在于两版读起来一模一样**。同样自信、同样规范、条款号同样齐全。你不回去翻，看不出任何差别。

所以这条要写进你的风险清单，而且要注意它的两个特点：

**它不在任何一张分级表里**。分级表问的是「这个 Agent 碰什么」，问不到「这次对话用了什么模型」。

**它是对话级的**。你验收的时候用一个模型，同事用的时候可能换了另一个——**而你的验收结论不会跟着换**。

## 六、拿你自己的需求对一遍

这一篇的产出物就是这张表。填你手上那个真实需求，不填演示场景。

| 判断项 | 你的答案 | 判据 |
|---|---|---|
| 它会改动别的系统吗 | | 列出它接触的一切，逐个问「能改吗」 |
| 它的产出会被直接执行吗 | | 有没有哪一样绕过人被读走 |
| 它的结论能回原文核吗 | | 随机抽三条，真的去核一次 |
| 有没有撤不回来的动作 | | 做完之后能不能恢复原状 |
| 谁能改它用的模型 | | 只有管理员，还是任何发起对话的人 |

**五项全是「否」或「只有管理员」，这个需求可以照上一篇的做法直接搭。**

有任何一项不是，先别急着搭——**先回答「那一项要怎么控制」**，再决定动不动手。

## 七、下一篇讲什么

到这里你有了一张填好的自评表，也知道自己那个需求是「可以直接搭」还是「要先设计控制」。

但还差一步：**要控制到什么程度。**

同样是「需要控制」，帮人填一张单据和自动发布到生产，两者需要的控制强度差着量级。凭感觉定，要么管得太松出事，要么管得太严做不成。

**第 03 篇讲分级方法**：L1 到 L4 四个等级怎么判、判据是什么，以及一个具体的需求怎么落到某一格里。用的还是这条研发变更流程——查制度答疑、帮人提单追踪、自动修复并发布生产，三个场景正好落在三个不同的等级上。

那张自评表留着，下一篇要用它定级。
`,Jw=`---
title: AI Agent 实战 03 · L1 到 L4：按动作定级
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-03.jpg
date: 2026-09-08
wechat: https://mp.weixin.qq.com/s/2VTITMrShdw89m7VmVqyPg
readTime: 12
excerpt: 定级的对象不是整个 Agent，是它会做的每一个动作，整体按最高的那一个定。这一篇给出四个等级、三道分界线和一套四步定级法，末尾是一张能直接填的定级表。同一条流水线上有个反直觉的结果：只读、只生成的那个动作，可能比会写系统的那个还高。
---

上一篇的产出是一张五行自评表。这一篇把它变成一个等级，并写出定级依据。

动手之前先做一道题。同一条研发变更流程上，有三个动作：

| | 动作 |
|---|---|
| A | 把你口述的问题整理成一张规范的提单草稿，你自己复制去提交 |
| B | 直接把变更单提进系统，并每天替你盯状态 |
| C | 告诉你这次变更算高风险还是中风险，审批链按它说的走 |

先排个序，哪个风险最高。答案在第三节末尾。

## 学习目标

| | 你能做到 |
|---|---|
| 一 | 说清定级的对象是动作，不是整个 Agent |
| 二 | 用三道分界线给一个具体动作定档，并看出下游用法会把它顶到哪儿 |
| 三 | 走完四步，给自己手上那个需求定出等级并写下依据 |
| 四 | 认出两种把等级定低的典型方式 |
| 五 | 知道什么时候必须重新定级 |

产出物是一张定级表：动作清单、逐条等级、定级依据、整体等级。第 05 篇那份项目输入登记表里，有一格就是它。

## 一、定级的对象是动作，不是 Agent

**做什么。** 先把 Agent 拆成动作清单，再逐条定级。

**怎么做。** 用动词写，一条一个动作。上面那个提单助手，拆开来至少六条：

| # | 动作 | 它碰什么 |
|---|---|---|
| 一 | 回答「这类变更谁批、要附什么材料」 | 只读知识库 |
| 二 | 追问提单人补齐缺掉的要素 | 只有对话 |
| 三 | 生成提单草稿文本 | 只输出文字 |
| 四 | 把单提进系统 | 写入单据系统 |
| 五 | 每天查一次状态，快超时了提醒提单人 | 读系统状态，发通知 |
| 六 | 判断这次变更算几级风险，审批链按它走 | 只输出文字 |

**整体等级按最高的那个动作定**。不按数量累加，也不因为「大部分动作都很轻」而往下调。

这条规矩不是我们发明的。演示知识库里那张《变更风险分级表》末尾就写着：同一张单命中多条的，按最高等级确定。

给 Agent 定级用的是同一条。

**应该看到什么。** 清单里通常只有一两条把整体顶了上去。

**那一两条就是这个项目真正要谈的东西**，其余的都不需要额外控制。

**常见错误。** 拿名字定级——「我们做的是个问答机器人，L2」。问答机器人是它的名字，不是它的动作清单：上面那六条，最后会落在三个不同的等级上。

## 二、四个等级

| 等级 | 它在干什么 | 出错了会怎样 | 能自动到什么程度 |
|---|---|---|---|
| **L1** 辅助生成 | 写草稿、做总结、解释一件事 | 人会看见，改掉就行 | 人看过再用 |
| **L2** 受控问答 | 查制度、查资料、答疑 | 人照着做了，事后才发现 | 来源可追溯，按权限检索 |
| **L3** 受控执行 | 建任务、填单据、发起流程、调内部接口 | 系统里多了或改了东西，要人去撤 | 白名单、最小权限、关键动作人工批 |
| **L4** 高影响执行 | 碰钱、碰对客户的承诺、碰合规判断、碰生产 | 撤不回来，或者撤的代价比做还大 | 原则上不允许无人值守 |

按「影响多大就管多严」分级是管理体系的通行做法，ISO/IEC 42001 那套 AI 管理体系走的也是这个思路。

**但这四档是照这个思路自己划的，不是标准里的条文**。你换一套划法也行，只要保住那条单调性：越往上，越不许无人值守。

同一条研发变更流程上，四个等级各有一个场景：

| 等级 | 这条流水线上的场景 |
|---|---|
| L1 | 把口述的问题整理成提单草稿，人自己去提 |
| L2 | 查制度答疑——第 01 篇搭的就是这个 |
| L3 | 帮人提单，并追踪审批进度 |
| L4 | 自动修复一个支付回调的缺陷，并发布到生产 |

这四个场景在同一条流水线上，业务领域、流程、涉及的人全都一样。技术难度当然不一样，但**分级不看它**。

先只盯一个变量：**它碰什么**。

### 定级不是评分

**等级说的是它属于哪一档，不是它做得好不好。**

[第 01 篇那个问答 Agent 属于 L2，但 L2 要求的「来源可追溯」它只做到一半](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)——轨迹到文件为止可信，答案里的「第几条」是模型自己写的。

**定级定的是「你要满足哪些要求」，满没满足是另一回事**。那是第 18 篇上线证据包要交的账。

## 三、三道分界线

四个等级之间三道线。定级的实际工作，就是判断你那条动作落在每道线的哪一边。

### 第一道 · L1 到 L2：它的输出开始被当成事实

L1 是草稿，人一定会改；L2 是答案，人会直接照着做。

**分界不在输出形态上**，两边都是文字。分界在于人拿到它之后，还会不会再想一遍。

「我建议这样写」和「制度规定必须这样」，读的人反应完全不同。后者一旦错了，错误会顺着他的动作走下去。

所以 L2 比 L1 多两条要求：**来源可追溯**，答案能回原文核；**按权限检索**，问的人本来无权看的东西，它不能替他看。

第二条在平台上有个坑。

**平台实例（knodo）**：这个平台的知识检索是文件级的——Bot 在沙箱里逐份读文件。你没有一个「按人配可见范围」的地方可点。

实测过一个形态：提示词里给它划了扫描范围，它照样读了范围外的文件，还把那份文件当成了对照依据。

**提示词能规定它做什么，规定不了它不做什么**。

所以「按权限检索」在这里只能换成一条更笨的规矩：**一个空间的知识库里，只放这个空间里所有人都能看的东西**。

薪酬表、未公开的人事制度、客户合同，进了知识库就等于对空间里每个人开放。

**这跟你有没有在提示词里写「不要回答薪酬问题」没有关系。**

### 第二道 · L2 到 L3：它开始在 Agent 之外留下痕迹

L2 说完就完了，痕迹只在对话里。L3 会在别的系统里留下一条记录，而那条记录会驱动别人干活。

判据不是「这件事重不重要」，是两问：**它在对话之外改动过什么吗？改动之后，会不会有人照着它动？**

建一张单、改一个状态、给别人发一条通知，都算。

收件人是谁很要紧。「快超时了提醒你自己」没过线，「快超时了替你去催审批人」过了。

哪怕那张单立刻就能撤，级别也已经过线了——**撤销是控制措施，不是降级理由**。

### 第三道 · L3 到 L4：撤不回来，或者碰的是那四样

四样东西：钱、对客户的承诺、合规判断、生产系统。

判据也是两问：**做错了能不能撤回原状？撤的代价有多大？**

自动把修复发布到生产，四样里直接命中「生产系统」；那段代码要是碰支付，「钱」也中。

而它撤不回原状——撤的代价是再发一次，外加中间那段时间的故障。

### 回到开头那道题

最自然的排法是 B 最高、C 最低——只有 B 在动系统，而 C 看上去只是说了句话。

**但 C 可以比 B 还高。**

| | B 把单提进系统 | C 判断这次算几级风险 |
|---|---|---|
| 它碰什么 | 写入单据系统 | 只输出文字 |
| 错了看得见吗 | 看得见，单就在那儿 | **看不见，读起来跟对的一模一样** |
| 能回原文核吗 | 能，要素是照着填的 | **不能。分级表给的是条目，套到这次改动上是判断** |
| 错了怎么收场 | 撤单重提 | 审批链已经按错的等级走完了 |

B 是 L3——它在对话之外建了一张单。

C 一条线都没越。它什么都没改，痕迹只留在对话里。

**但它仍然要按 L4 办。**

三道线量的是它碰什么。而 C 的风险不在它碰什么，在**它的话被下游当成了什么**。

《研发变更管理办法》第三条把审批人、会签、必须附的材料全挂在风险等级上，第四条把上线窗口也挂在上面。

等级判低一档，架构负责人不会会签，第五条那句「高风险变更未附回滚方案不予受理」根本不会触发，变更还会溜出周二周四那个窗口。

**而单据上一切正常，没有任何一处报错。**

所以三道线是这么用的：**过了线一定升档，没过线不等于不升档**。第三道线那两问，对只输出文字的动作照样要问。

[判断题和检索题不是一回事，这是上一篇讲过的](https://blog.yingtongxue.cn/#/blog/2026-09-07-agent-02-risk-sources)。这里把它推到定级上：**只读、只生成，照样可以是高风险动作。**

反过来，把下游改掉，它就降下来了。

如果它输出的是「你这次改动命中了分级表这三条，据此可能属于高风险，请复核」，而定级仍然由人做，那它退回 L1。

动作一个字没变，变的是接在它后面的东西。

**同一句输出，接在不同的下游上，等级不同**。而下游怎么接是你设计的，不是它自带的属性。

这一条是后面所有降级手段的总开关。

## 四、四步定级法

**第一步 · 写动作清单。** 用动词写。写不出动词的条目要拆——「协助提单」不是动作，「生成草稿」和「提交单据」才是，而且是两个。

**第二步 · 逐条问四个问题。** 就是[写入系统、影响外部方、结果不可自检、动作不可逆那四类因素](https://blog.yingtongxue.cn/#/blog/2026-09-07-agent-02-risk-sources)，也就是上一篇那张自评表的前四行。

区别只有一处：那时候你问的是整个需求，现在你问的是每一个动作。

**第三步 · 逐条落档。** 按上一节那三道线归档。拿不准的往高了放，并把「为什么犹豫」写下来。

**犹豫本身是信息**，它通常说明这一条里混了两件事，该拆开再定。

往高了放不是终点，是把这一条列进下一轮复核。

**第四步 · 取最高，写依据。** 依据写清三样：哪个动作、命中哪一条、判据是什么。

还是那个提单助手，填好之后是这样：

| # | 动作 | 等级 | 依据 |
|---|---|---|---|
| 一 | 查制度答疑 | L2 | 只读，结论能回原文核 |
| 二 | 追问补齐要素 | L1 | 只有对话，要素由人自己填 |
| 三 | 生成提单草稿 | L1 | 输出文字，人复制之后才生效 |
| 四 | 提交单据 | L3 | 写入系统，且会驱动审批人干活 |
| 五 | 查状态并提醒 | L2 | 只读状态，通知的对象是它自己的使用者 |
| 六 | 判断风险等级 | **L4** | 结论直接决定审批链，不可自检，错了审批已经走完 |

**整体 L4。**

**应该看到什么。** 大部分动作都很轻，一条把整体顶到了顶格。

看到那一格之后，常见的是这几条路：

| 路 | 做什么 | 代价 |
|---|---|---|
| 砍掉 | 这个动作不做了 | 少一块价值 |
| 换动作 | 把「它判」改成「它把判据摆出来，人判」 | 人多做一步 |
| 先缩住 | 只给一个组用，范围写进登记表 | 价值先打折，范围一扩就要重定级 |
| 上控制 | 留着，按 L4 的要求配控制措施 | 那九个控制项每个 Agent 都要过，L4 的代价是每一项都得顶格 |

第二条最划算，也最常被忽略。**降级不是砍功能，是换动作**。

**定级到这里才算完成**。它不是给项目贴个标签，它是一次设计动作——定完你多半要回去改清单，改完再定一次。

## 五、两种定错

### 一 · 按「现在实际怎么用」定级，不按「它被允许做什么」

你现在只让它答疑，但你给它绑了能提单的工具，那它就是 L3。

差别只在于有没有人开口让它提。

**在提示词里写「不许提单」不能用来降级**，理由就是上一节那条实测：给了工具，它就有可能用。（第 17 篇会拿它当红队案例讲透。）

**平台实例（knodo）**：要看它现在被允许做什么，去四个地方。

| # | 去哪看 | 看什么 |
|---|---|---|
| 一 | AI 成员的编辑弹框 | 它自己绑没绑技能，这一层跟着助手走 |
| 二 | 空间设置的「AI 配置」 | 空间这一层绑没绑插件与技能，**跟上面不是一回事，最容易漏** |
| 三 | 任务 | 它有没有被设成某个任务的执行者 |
| 四 | 自动化任务 | 有没有配定时的，或者按事件触发的 |

四处都空，它才只能读和说。

而「只能读」不等于没事——它读到什么，由第三节那条规矩管，不由这四处管。

看完配置还有一步。[第 01 篇那两个不报错的地方，共同点是操作过程中界面上看不出任何异常](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)。

这里同样成立：**别照配置页面判断它能干什么，让它真跑一次，看平台记录下来的动作**。

### 二 · 把「反正有人看」当成控制而降级

这是最省事的降级理由，而它成立是有条件的：**人拦得住的前提，是那个输出他能核**。

上一篇那组对照：只换模型，出处准确率从「三处两错」变成「三处全对」，而[两版读起来同样自信、同样规范，不翻原文看不出差别](https://blog.yingtongxue.cn/#/blog/2026-09-07-agent-02-risk-sources)。

**看得出差别的东西，人拦得住；看不出差别的东西，人在那儿也是白在。**

所以「有人看」要算作控制，后面得跟一句：他核什么、拿什么核、核多少条。这是第 09 篇的事。

## 六、模型那一格，与重新定级

上一篇说过，模型是第五个因素，**它不在任何一张分级表里**。

放到定级里，它的位置很清楚：**它不改变等级，它改变的是你这一级的控制够不够**。

L2 要求来源可追溯，而出处是模型写在正文里的一句话。换个模型，出处准确率变了，等级却一格没动。

所以定级表旁边要补一行：**谁能改这个 Agent 用的模型**。

等级也不是定完就不动。四种情况必须重新定：

| 触发 | 例子 |
|---|---|
| 动作清单变了 | 加了一句「顺手把结论发到群里」 |
| 下游用法变了 | 原来给人参考，现在被直接抄进单据 |
| 权限变了 | 绑了新工具，或者知识库里进了新东西 |
| 使用范围变了 | 从一个组试用，扩到全部门 |

第四条最容易漏。**规模不改变等级，但它改变出错的次数和波及面**——同一个错，五个人踩和五百个人踩不是一回事。

## 七、给自己的需求定一次级

产出物是这张表。用你手上那个真实需求填，别填演示场景。

| # | 动作（用动词写） | 命中四类因素的哪几条 | 等级 | 依据 |
|---|---|---|---|---|
| 一 | | | | |
| 二 | | | | |
| 三 | | | | |

表头写上日期。第六节那四种触发一旦发生，这张表就得重来。

填完把最高那一格圈出来，再写四句话：

| | 要写出来的 |
|---|---|
| 一 | 整体等级是几 |
| 二 | 是哪个动作定的 |
| 三 | 这个动作打算砍掉、换掉、先缩住，还是留着上控制 |
| 四 | 谁能改它用的模型——上一篇自评表的第五行 |

**前三句写不出来，说明动作清单还没拆完。**

## 八、下一篇讲什么

定完级，你多半会撞上这个结果：**清单里有一条把整体顶到了 L4，而那一条恰恰是最想要的那一条。**

自动修复一个支付回调的缺陷并发布到生产，就是这样一条动作。

它同时命中资金链路、写入生产系统、动作不可逆、自动执行四条。按标准，它过不了任何一道门禁。

而砍掉它，这个项目也就没什么价值了。

第 04 篇拆的就是这个场景。出路不是砍掉自动化，而是**把人批准的对象从一句结论换成一份清单**。

那张定级表留着，下一篇要拿它当输入。
`,Ww=`---
title: AI Agent 实战 04 · L4 改造：批清单，不批结论
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-04.jpg
date: 2026-09-09
wechat: https://mp.weixin.qq.com/s/dANIitcgj9ejboExN6VApQ
readTime: 11
excerpt: 自动修复一个支付回调的缺陷并发布到生产，四个风险因素全中，按标准过不了任何一道门禁。但出路不是砍掉自动化。这一篇先让你把三个最容易想到的救法试一遍，看它们各自败在哪儿，再把人批准的对象从一句结论换成一份清单。
---

上一篇填完定级表，你手上多半有一条动作把整体顶到了 L4，而它恰恰是最想要的那一条。

这一篇拿最硬的那条开刀：**让 Agent 自己定位一个支付回调的缺陷、自己改、自己发布到生产。**

动手之前先停一下，把你想到的救法写下来。

下面三个是最常被想到的。它们都救不了它，而失败的理由各不相同。

## 学习目标

| | 你能做到 |
|---|---|
| 一 | 说清一个 L4 方案硬在哪，逐条对上四个风险因素 |
| 二 | 认出三种看着能救、实际救不了的改法 |
| 三 | 分清结论式批准与清单式批准，说出后者为什么才算控制 |
| 四 | 逐字段写出一份人能真批的清单 |
| 五 | 说清批准之后为什么不许重新生成 |

产出物是一张改造前后对照表，改的是你自己那条顶格动作。

## 一、这个方案硬在哪

场景：线上支付回调偶发失败。

你希望 Agent 自己定位、自己修、自己发上去。

先定一件事：这里按常规缺陷修复算。走「紧急修复」通道可以先处理后补审（《管理办法》第二条），但补审要补的还是下面这一份清单。

**先干后批，不等于批的对象可以退回一句结论。**

上一篇末尾数的是制度条目，这里换回上上篇那张因素表，逐条对一次。四个全中：

| 因素 | 它怎么中的 |
|---|---|
| 写入系统 | 改代码、发布，生产系统的状态被它动了 |
| 影响外部方 | 产出绕过人直接在生产上跑，最终落在付款的用户身上 |
| 结果不可自检 | 「这个修复对不对」没有原文可核 |
| 动作不可逆 | 发出去就在跑，撤要再发一次，中间那段时间是故障 |

再拿演示制度对一遍。《变更风险分级表》里资金链路是高风险第一条。

《研发变更管理办法》第三条要架构负责人审批、业务负责人会签，还要附影响范围说明、回滚方案、验证方案；第四条只准它在周二周四的窗口上线。

**注意这三条里除了那一下「同意」，还各自挂着一份材料**。这是全篇第一个提示。

## 二、三个救不了它的救法

### 一 · 加一道人工审批

最自然的一步。问题在于：批什么。

如果人看到的是「Agent 已完成修复，建议发布，是否同意」，那这一次点击批准的是**一个结论**。

而结论没法核。[上一篇那条判据在这里直接适用：人拦得住的前提，是那个输出他能核](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)。

还有更麻烦的一层：你批的那个「修复」，和它接下来执行的那个「修复」，未必是同一个东西。

[第 01 篇实测过，同一个 Agent、同一道题问两次，第一次翻了三份文件，第二次只翻一份](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)。**它每次的做法不保证相同。**

### 二 · 缩小范围，只让它改小问题

听起来稳妥：小改动自动修，大的走人工。

问题是「这算不算小改动」本身是一道判断题。而[上一篇刚讲过，判断题没有原文可核，错了不留痕迹](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)。

而它的下游是「走不走人工」——[跟上一篇那个 C 一模一样，它的话直接决定了控制怎么走](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)。

**你为了绕开一个 L4 动作，引进了另一个 L4 动作。**

真实系统的做法不是取消这个判断，是给它一个出口。

一条在跑的流水线上，「这是不是缺陷」确实由 Agent 判，但**置信度低于 70% 直接转人工**。判断结果还要带上证据字段——那条线上每一步的产出都要过一道格式校验，字段缺了就算没过。

判断可以交给它，**前提是有阈值、有证据、有转人工的出口**。

### 三 · 让它自己跑测试，跑完报告

这条最像样，也最危险。

实测过一次，场景不同但是同一个毛病：我们让它装四个技能，它回复「四个技能均已成功触发」，而平台同期返回的是「未知技能」。

**它不是在撒谎，它是在报告它以为发生的事。**

同一条原则在那条真实流水线上被写死成了做法：测试由平台自己跑，覆盖率平台自己算，改了哪些文件平台自己从版本库里提取——**Agent 的自我报告一概不采信**。

所以「它说测试过了」不能进你的清单。能进的是「谁跑的、什么时候跑的、结果在哪」。

门禁该由谁执行、放在哪一层，是第 14 篇的事。这一篇只用到其中一条：**报告的人，不能是被检查的那个人。**

## 三、出路：换掉批准的对象

三个救法差的是同一口气：**最后要你信的那一样，还是它自己说的。**

改造只有一句话：**把人批准的对象，从一句结论换成一份具体到每一步的清单。**

| | 结论式批准 | 清单式批准 |
|---|---|---|
| 人看到的 | 「已完成修复，建议发布」 | 改了哪几个文件、每处改什么、怎么验、在哪验、失败怎么办 |
| 人能做的动作 | 信，或者不信 | 逐条核 |
| 批完执行的是 | 你没看见过的那一份，无从比对 | 就是这一份 |
| 出了事查什么 | 一句「同意」 | 那份清单，和它的执行记录 |

**这不是给流程加一道手续，是把那一次点击变得有内容。**

## 四、一份人能真批的清单

| 字段 | 写什么 | 判据 |
|---|---|---|
| 变更范围 | 具体到文件与函数 | 能不能直接打开看 |
| 每处改什么 | 改动意图一句话，加实际的代码差异 | 人看不看得懂它要干什么 |
| 影响面 | 哪些接口、哪些调用方受影响 | 有没有跨出这个模块 |
| 验证方案 | 跑什么、通过标准是什么 | 标准是否机械可判 |
| 验证由谁执行 | 流水线或平台，不是 Agent 自己 | 结果能不能独立取到 |
| 失败处置 | 什么情况回给它重做、什么情况叫人 | 分类规则是不是确定的 |
| 回滚方案 | 怎么退回原状、要多久 | 《管理办法》第三条本来就要这一项 |
| 审批时限与超时处置 | 多久内必须有人点，超时算退回还是默认通过 | 「默认通过」等于这道门不存在 |
| 发布窗口 | 什么时候发 | 第四条本来就要 |

**贯穿这张表的只有一条判据：每一项都必须是人能核的，不能是需要人信的。**

「已通过全部测试」要人信。「测试由流水线执行，结果在这个地址，变更文件的行覆盖率 83%」能核。

行覆盖率就是这次改动的代码里，有多大比例被测试真跑到过。

那条真实流水线把通过标准写成了两句硬话：测试全部通过，且**变更文件**的行覆盖率不低于阈值，变更文件列表为空直接判失败。

注意它盯的是变更文件而不是全库，阈值也不是 100%——**追求 100% 只会催生为刷分而写的测试**。

顺带你会发现，这张表的后半截跟制度要的材料是同一批东西。**制度早就要求你交清单，只是过去那份清单由人写。**

### 填好之后长这样

还是那个支付回调：

| 字段 | 这一次填的 |
|---|---|
| 变更范围 | 回调处理模块里的两个函数：签名校验、重投策略 |
| 每处改什么 | 签名校验在超时分支提前退出，把超时当成了失败、触发重投；改成超时走重试不走失败。附实际的代码差异 |
| 影响面 | 只对内：回调处理与重投队列。对外接口的出入参不变 |
| 验证方案 | 单测全过；新增两条用例覆盖超时分支；变更文件行覆盖率不低于 80% |
| 验证由谁执行 | 流水线执行，报告在构建记录里；不采信 Agent 转述 |
| 失败处置 | 测试失败回给 Agent 重做，最多三次；部署与环境类失败直接转人工 |
| 回滚方案 | 保留上一版镜像，回滚一条命令，约五分钟 |
| 审批时限 | 2 个工作日内响应，超时视为退回（《管理办法》第三条）；不设默认通过 |
| 发布窗口 | 周四窗口，避开日终对账 |

### 你未必看得懂那段代码，这不影响

看到「签名校验」「重投策略」这种词就想跳过，是正常的。

**但这张清单不是给一个人核的。**

《管理办法》第三条写的是高风险变更由架构负责人审批、**业务负责人会签**。两个人签的是同一份清单，核的却不是同一批行：

| 谁 | 核哪几行 |
|---|---|
| 架构负责人 | 变更范围、每处改什么、验证方案 |
| 业务负责人（你） | 影响面、失败处置、回滚方案、发布窗口 |

你那四行没有一行需要读代码。

「影响面写着只对内，那我们对客户的承诺不受影响」「回滚五分钟，日终对账前留得出时间」——**这些判断本来就该你来做，而结论式批准把它们一起抹掉了**。

有一处要说清：影响面里「对外接口的出入参不变」这句，是靠架构侧那三行担保的。你核的不是它准不准，是**就算真如它所写，业务上能不能接受**。

没有架构负责人这个角色的时候，前三行就是你去找工程搭档的理由——哪些环节非要人写代码，是第 12 篇的事。

### 清单也是它写的，凭什么能信

这是读到这里最该问的一句。

答案是：**不凭信，凭每一项都能独立取证**。

变更范围能打开看，代码差异能对照读，测试是流水线跑的、结果不经它的手，回滚方案能拿去演练一次。

它写的是**待核清单**，不是**结论**。这两样东西表面都是它输出的一段文字，性质完全不同——[判断题和检索题的差别在这里又出现了一次](https://blog.yingtongxue.cn/#/blog/2026-09-07-agent-02-risk-sources)。

还差一层：它少写一条怎么办。

所以「变更范围」这一行不能由它填。那条真实流水线是平台自己从版本库里提取变更文件列表，提取出来是空的直接判失败。

**清单里凡是「有没有漏」这类问题，答案都不能由它给。**

顺带解掉一格：每一项都能独立取证之后，它是哪个模型写的就没那么要紧了——[那个不在任何分级表里的第五因素](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)，这是少数几个解得掉的场合。

## 五、批准之后不许重新生成

清单式批准还差最后一根钉子。

批准的是那一份，执行的必须**严格等于**那一份，而不是「按那个意思再做一遍」。

理由还是上面那条：它每次的做法不保证相同。你批的是 A，它重跑一次生成了 A′，而 A′ 没有人批过。

落到做法上：批准的那份清单要**冻结成制品**，执行照制品走，执行完再拿结果跟制品对一次。

在那条真实流水线上，这一条落在两个地方：**生产发布根本不在自动流程里**，它是人在发布页上触发的批次动作；而批次上挂着一道 release-id 一致性校验。

批准的粒度——一次点击授权多少次执行——是第 09 篇的事。这里只钉住一条：**批的和执行的必须是同一份。**

## 六、平台实例（knodo）：审批点不是默认就有的

方法讲完了，落到平台上有个地方必须先确认。

这个平台的任务有四个阶段，Bot 执行完会进「待审查」，人可以通过或退回，退回要填原因、系统记成评论。审批点就落在这儿。

**但它不是默认就在那儿的。**

我们在演示空间里跑了一次：建一个任务、执行者设成 Bot、点「立即执行」。

它执行完**直接停在「已完成」**。中间没有任何审查环节，也没有任何提示告诉你少了一步。

**这就是这一篇讲的那件事，在平台上原样发生了一次**：你以为有一个批准点，实际没有，而界面不会说。

原因最可能出在工作空间的状态配置——那里得有「人工审查」这一档。但**这个归因我们没有分离**，也不必在这里分离，因为它不改变你要做的动作：

先跑一次，看它停在哪儿。停在待审查，审批点就在；直接进已完成，那你这条线上根本没有那个你以为存在的批准点。

（一个会让你白等的细节：按文档，任务表单里的「执行者」只是默认执行者，要点「立即执行」才真的开跑。我们那次是点了的。）

## 七、改造完了，等级降了吗

没有。

这一点要说清楚，否则你会以为自己捡到了一个降级技巧。

改造之后 Agent 的动作变成两条。

生成清单，人看过再用，这是 L1。按批准的清单执行，仍然写生产、仍然不可逆，**仍然是 L4**。

| 因素 | 改造前 | 改造后 |
|---|---|---|
| 写入系统 | 中 | 仍然中 |
| 影响外部方 | 中 | 仍然中 |
| 结果不可自检 | 中 | 仍然中，但**你批的那份东西可核**，控制点落在执行之前 |
| 动作不可逆 | 中 | 仍然中，但回滚方案成了批准的前提 |
| 无人值守 | 是 | 否，且批准点落在执行之前 |

上一篇那张分级表里，L4 那一栏写的是「原则上不允许无人值守」。

**这句话一个字没变。变的是「无人值守」那四个字不再适用于你——你把人放回去了。**

## 八、改你自己那条顶格动作

产出物是这张表。填的是你定级表里顶格的那条动作。

| | 改造前 | 改造后 |
|---|---|---|
| 人批的是什么 | | |
| 他拿什么核 | | |
| 批完执行的是不是同一份 | | |
| 验证由谁跑 | | |
| 失败了怎么办 | | |

**第二行填不出「拿什么核」，说明你还停在结论式批准。**

第一行和第三行也要一起看：批的东西变了，执行的却还是它临时生成的，那这份清单只是一张好看的说明书。

## 九、下一篇讲什么

三篇的东西到这里可以合起来看了：02 给了风险特征，03 给了等级和依据，04 给了那条顶格动作的出路。

但它们现在还都在你脑子里和纸上，没有交给任何人。

第 05 篇把它们收进一张表：二十个字段的项目输入登记表，从业务目标、系统边界、风险等级，一路到工具权限、人工控制、退出机制。

逐字段讲怎么填，哪些你自己能填、哪些必须去找 Owner 要。

那是项目本来就要交的东西，不是练习作业。

你手上那三张表——自评表、定级表、改造对照表——到那里全都有位置。
`,eA=`---
title: AI Agent 实战 05 · 登记表：二十个字段谁填哪一格
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-05.jpg
date: 2026-09-10
wechat: https://mp.weixin.qq.com/s/_kIAj41gdkju2P3jAqu7Rg
readTime: 10
excerpt: 前三篇的产出物到这里收口，装进一张二十个字段的项目输入登记表。这一篇逐字段讲怎么填、谁填。真动手你会发现有一半格子自己填不了——而那不是表格的问题，是项目的问题：填不出来的格子就是你现在该去找谁的清单。
---

前三篇你已经攒了三张表：自评表、定级表、改造对照表。

这一篇把它们收口，装进一张项目输入登记表——**二十个字段，是项目本来就要交的东西，不是练习作业**。

动手之前先做一件事：把下面第二节那张表扫一遍，**只看第一列的字段名，后两列先别读**，勾出「我现在坐在这儿就能填」的格子。

先数完再往下读。

## 学习目标

| | 你能做到 |
|---|---|
| 一 | 说清这张表在替你做什么，而不是把它当成走流程 |
| 二 | 把二十个字段分成自己填、去要、先占位三类 |
| 三 | 把前三篇的产出物填进对应的格子 |
| 四 | 说清找不到 Owner 的时候，那一格意味着什么 |
| 五 | 判断缺着格子能不能先开工 |

产出物是一份填好的登记表，填你手上那个真实需求。

## 一、这张表在替你做什么

你多半勾不到一半。

这不是表格设计得刁钻，也不是你准备不足。

**这张表真正在做的事，只有一件**。

把「你以为已经想清楚的」和「其实还没有人拍过板的」分开。

一个需求在你脑子里是连贯的：要解决什么问题、大概怎么做、谁会用。

落到二十个格子上，连贯就断了——数据是谁的？出了事谁负责？这个权限谁批？

这些问题在脑子里可以含混过去，在格子里不行。

**所以填不出来的那些格子，不是待办事项，是清单**：你现在该去找谁、要什么。

## 二、二十个字段，先看谁填

| 字段 | 谁填 | 填不出来说明什么 |
|---|---|---|
| 项目名称 | 自己填 | —— |
| 业务流程 / 业务对象 | 自己填 | 你还没定它到底管哪一段活 |
| AI / Agent 类型 | 自己填 | 检索、生成、还是执行，你还没分清 |
| 风险等级和依据 | 自己填 | 上一篇那张定级表还没做 |
| 业务 Owner | 去要 | 这件事没人认领 |
| IT Owner | 去要 | 没人对系统侧负责 |
| 数据 Owner | 去要 | 你要用的数据没人管，或者你还不知道是谁的 |
| 安全 / 合规 Owner | 去要 | 高风险项目缺这一格通常直接卡住 |
| 运行 Owner | 去要 | 上线之后没人盯，这一格空着最常见 |
| 目标用户 | 自己填 | 你还不知道谁会用它 |
| 允许用途 | 自己填 | 边界没画 |
| 禁止用途 | 自己填 | **职责还没想清楚。「它不服务什么」是第 06 篇，「不许做哪些动作」是第 07 篇** |
| 数据来源和权限 | 去要 | 得数据 Owner 点头 |
| 知识库来源和版本 | 去要 | 内容你清楚，但版本与废止机制要知识 Owner 拍板，见第 11 篇 |
| 模型和平台 | 去要 | 顺带定下「谁能改模型」 |
| 工具和接口权限 | 去要 | 接口从哪来、谁授权，见第 13 篇 |
| 人工审批点 | 自己填 | 上一篇那张改造对照表就是它 |
| 测试和评测要求 | 先占位 | 评测集是第 16 篇的事，先写清验收标准 |
| 上线和回滚方案 | 先占位 | 方案设计完才填得实 |
| 运行监控和复盘机制 | 先占位 | 第 19、20 篇的内容，先写清看哪几个指标 |

三类的比例是八、九、三。**能自己填的刚好四成**，这是正常的，不是你的问题。

## 三、自己能填的那几格，怎么算填了

自己填的格子最容易糊弄过去，因为没人会退回你。给三个判据。

### 业务流程 / 业务对象

**判据：能不能指着一条现有流程说「就是这一段」。**

写「提升研发效率」不算填。写「变更单从提交到审批通过这一段」才算。

前者没有边界，后者有——有边界，后面所有格子才有得填。

### 允许用途与禁止用途

这两格是一对，很多人只填前一格。

**判据：禁止用途里有没有一条是你真的舍不得的。**

如果禁止清单里全是「不得违法」「不得泄密」这种谁都会写的话，那你没有在划边界，你在表态。

真正的禁止用途长这样：不得替提单人判定风险等级，不得直接通知审批人催办，不得在窗口外发起上线。

**每一条都是你本来想要、但按前两篇的判据决定不给的。**

这一格跨两篇：「它不替谁干什么活」属第 06 篇的非目标清单，是角色卡的一半；上面那三条动作形态的禁止，是第 07 篇的禁止动作清单。

### 目标用户

**判据：能不能说出一个具体的人数。**

「研发相关人员」不算填，「变更提单人，目前约二十人，先给其中一个组」才算。

这一格后面还要再看一次：[人数变了要重新定级](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)——规模不改变等级，但它改变出错的次数和波及面。

### 风险等级和依据

这一格不用重想，[上一篇那张定级表整张搬过来](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)：动作清单、逐条等级、依据、整体等级。

**判据：依据栏写的是动作还是名字。**

写「问答类，风险不高」是名字。写「第六条动作会替人定风险等级，结论直接决定审批链，故整体 L4」是动作。

前三篇的产出物在这张表里的位置：

| 你手上的 | 填进哪一格 |
|---|---|
| 第 02 篇自评表的前四行 | 风险等级和依据（的推导过程） |
| 第 03 篇的定级表 | 风险等级和依据（的结论与逐条依据） |
| 第 03 篇那行「谁能改模型」 | 模型和平台 |
| 第 04 篇的改造对照表 | 人工审批点 |

## 四、要去要的那五格：Owner

五个 Owner 是这张表最卡人的地方，也是它最值钱的地方。

**先说一件事：你不是去要签字，是去确认这个人存在。**

问法直接一点：「这套数据出了问题找谁」「这个接口的权限谁批」「上线之后谁盯着它」。

你要的是名字，不是承诺。

拿到名字，这一格就算填了。拿不到，你会撞上三种情况：

| 情况 | 它其实是什么 | 你该做什么 |
|---|---|---|
| 有人管，但你不知道是谁 | 信息问题 | 顺着系统或流程往上问一层 |
| 大家都说不归自己管 | 责任真空 | 把这一格空着交上去，让它在评审里暴露 |
| 两个人都说归自己管 | 边界问题，不是找人问题 | 两个名字都写进去并标明冲突，让评审去定 |
| 有人管，但不愿意认这个项目 | 立项问题，不是技术问题 | 停下来，先解决要不要做 |

**第二种最要紧：不要替它填。**

你写一个看起来合理的名字进去，这一格就不再是问题了。

它变成了一句没人认过的话，而出事那天没人认。

**空着并注明「问过谁、对方说不归自己管」的格子，比填一个没人认过的名字安全**——空白本身不会说话，注一句它才看得见。

最后一种要认得出来。它长得像技术问题（「权限不给我」），实际是这件事该不该做还没定。

这时候继续往下推方案，是在给一个不存在的项目做设计。

## 五、先占位的那三格

测试要求、上线回滚、运行监控——这三格现在填不实，因为方案还没设计。

**但占位不是留白，是写下你现在就知道的那部分。**

比如测试那一格，评测集是第 16 篇的事，现在写不出来；但「验收标准是五道题里出处能全部回原文核对」你现在就能写。

比如回滚那一格，具体方案要等方案设计，但「必须能退回原状，且回滚要赶在下一个上线窗口之前完成」你现在就能写。

**判据：占位内容要能约束后面的设计。**

写「待定」不算占位。写「上线后每周看错误率与人工接管率」才算——它已经在给第 19 篇划范围了。

## 六、缺着格子，能不能先开工

能不能，取决于等级。

这是这张表唯一一条硬规矩：**缺失项一旦会影响真实数据、生产系统、客户、供应商、员工、财务或采购结果，就不能继续实施，只能先输出补齐清单。**

这条通则本身没有分档。下面这张是照它推的一种分法，不是合规原文——你所在的组织如果另有规矩，以那边为准：

| 你的等级 | 缺格子怎么办 |
|---|---|
| L1、L2 | 可以边做边补，但缺的那几格要写进登记表，别口头记着 |
| L3 | Owner 那五格与工具权限必须先齐，其余可以并行 |
| L4 | 一格都不能缺。缺一格就是没过立项这道门 |

这条不是为了严格而严格。[上一篇讲过，控制强度由等级决定](https://blog.yingtongxue.cn/#/blog/2026-09-09-agent-04-approve-the-list)，而登记表就是控制强度的第一次落地。

**等级越高，你允许自己「以后再说」的余地越小。**

立项这道门叫 G0。它后面还有方案、测试、上线、复盘四道，那是第 18 篇的内容，这一篇只过第一道。

## 七、平台实例（knodo）：有四格别去问人

五个 Owner 要去问人，但这张表里另有几格，答案就在平台上——你自己去看比问快，而且准。

| 字段 | 去哪看 |
|---|---|
| AI / Agent 类型 | 这个 Agent 绑没绑技能、有没有被设成任务执行者、有没有自动化任务。这三处加上下面那一处「AI 配置」，四处都空，它才只是问答 |
| 模型和平台 | 空间设置「AI 配置」下的默认模型。「谁能改它」的答案是三层：组织管理员改组织默认、空间管理员改空间默认、**任何能发起对话的人都能当场换**——第三层就是第 02 篇自评表最后一行问的那个 |
| 工具和接口权限 | 就是上面那三处，加上空间「AI 配置」下的插件与技能。**这一层跟着空间走，最容易漏** |
| 人工审批点 | 别看配置，跑一个任务看它完成后停在哪儿。我们那次它直接停在已完成，中间没有审查环节 |

**很多人把这几格当成「要去问 IT」的**，于是等一周。

而对方拿到问题之后，做的也是去点这几个地方。

## 八、填好之后长什么样

不用二十格全给你看，挑七格——这七格最容易填成废话。

| 字段 | 填成废话的样子 | 填对的样子 |
|---|---|---|
| 业务流程 | 提升研发流程效率 | 变更单从提交到审批通过这一段 |
| AI / Agent 类型 | 智能助手 | 只读问答，加一个提交单据的执行动作 |
| 风险等级和依据 | 中风险 | L4，顶格的是「替人判定风险等级」那条动作，结论直接决定审批链 |
| 禁止用途 | 不得违规使用 | 不得替提单人判定风险等级；不得直接催办审批人 |
| 数据 Owner | IT 部 | 张三，系统运维组——问过李四，他说单据表归张三 |
| 人工审批点 | 关键节点人工确认 | 提交单据前，人批一份含要素、影响面、回滚与超时处置的清单，批完执行严格等于清单 |
| 运行监控 | 定期检查运行情况 | 每周看：出处核对失败率、人工接管率、超时未审批数 |

**左右两列的差别只有一样：右边那列能被人反驳。**

「提升研发流程效率」没人能反驳，因为它没说什么。「变更单从提交到审批通过这一段」可以被反驳——有人会说你漏了验收环节。

**能被反驳，才叫填了。**

## 九、给自己的需求填一张

产出物就是这张表。二十个字段，填你手上那个真实需求。

填完做三件事：

| | 做什么 |
|---|---|
| 一 | 数一数空了几格，标出是「去要」还是「先占位」 |
| 二 | 把「去要」的那几格写成一句话的请求，附上要找的人 |
| 三 | 按第六节那条规矩，判断现在能不能开工 |

**第二件事是这一篇真正的产出**。登记表是交给项目的，那几句请求是交给你自己的——它是你明天上午要发出去的消息。

## 十、下一篇讲什么

到这里第二部分结束了。你手上有一个定过级的需求、一份改造过的方案、一张登记表，以及一个知道该找谁的清单。

从第 06 篇起进第三部分：**Agent 合同**。

搭任何一个 Agent 都要过九个控制项，分五篇讲：角色目标、动作分层、工具白名单、审批点、可追溯日志。

工作内容、技能、输入输出各不相同，这九项对每个 Agent 都一样。

第 06 篇从角色卡开始，正题是登记表里那一格的上半截：**非目标清单**。

写不出「它不干什么」的人，多半也没真想清楚它要干什么。
`,nA=`---
title: AI Agent 实战 06 · 角色卡：先写它不干什么
category: 实战
tags: [AI, Agent, 实战]
cover: covers/agent-06.jpg
date: 2026-09-11
readTime: 10
excerpt: 第三部分从角色卡开始。写「它是干什么的」人人都会，难的是写「它不干什么」——而非目标不是它做不到的事，是它做得到但你不许它做的事。这一篇给出角色卡上半张的四行、非目标的两条判据，以及非目标该从你已经填过的三张表里去收，而不是凭空想。
---

从这一篇起进第三部分。

这五篇讲的是搭**任何**一个 Agent 都要过的控制项。工作内容、技能、输入输出各不相同，这些项对每个 Agent 都一样。

动手之前先写一句话：**你那个 Agent 是干什么的。**

写完再往下读。

## 学习目标

| | 你能做到 |
|---|---|
| 一 | 说出九个控制项分别落在哪一篇 |
| 二 | 写出角色卡上半张的四行 |
| 三 | 用两条判据分辨真非目标和假非目标 |
| 四 | 从已经填过的三张表里把非目标收出来 |
| 五 | 分清哪些话属于本篇，哪些该留给第 07 篇 |

产出物是角色卡的上半张。

## 一、你刚写的那句话，答不了三个问题

多数人写出来的是这样。

「它是一个研发流程助手，帮助员工快速查询流程制度，提高效率。」

这句话没有错。问题是它答不了你马上就要碰到的三个问题：

| 问题 | 你那句话给得出答案吗 |
|---|---|
| 审批人来问它「这单我该批吗」，它答不答 | 答不了 |
| 它该不该主动把变更提醒发到群里 | 答不了 |
| 提单人拿它的话去填单，填错了算谁的 | 答不了 |

**一句读起来完整的角色描述，往往一个设计决策都指导不了。**

因为它只说了「它干什么」，而这三个问题问的全是「它不干什么」。

## 二、九个控制项，先认路

| # | 控制项 | 在哪一篇 |
|---|---|---|
| 一 | 角色和目标 | **06，本篇** |
| 二 | 允许动作 | 07 |
| 三 | 禁止动作 | 07 |
| 四 | 工具白名单 | 08 |
| 五 | 最小权限 | 08 |
| 六 | 人工审批 | 09 |
| 七 | 可追溯日志 | 10 |
| 八 | 版本管理 | 10 |
| 九 | 异常处理 | 15 |

上一篇末尾说「九个控制项分五篇讲」，这里说准一点：**这五篇装的是前八项**。

第九项异常处理的产出物是测试用例，跟运行期挨得更近，所以挪到第 15 篇跟其他四种必须停下来的情况一起讲。**编号是控制项清单的顺序，不是篇目顺序。**

**这九项不分难易，也不分先后重要性**。它们是九个必须有答案的格子，缺一个，后面就会有人替你默认一个。

## 三、角色卡上半张：四行

| 行 | 写什么 | 判据 |
|---|---|---|
| 服务对象 | 谁会跟它说话，大概多少人 | 能说出人数。这一格就是登记表的「目标用户」 |
| 承接哪一段活 | 指着一条现有流程说「这一段」 | 有起点也有终点 |
| 成功算什么 | 一个上线之后你真会去看的数 | 见下 |
| 非目标 | 它不替谁干什么、不承担哪些判断 | 见第四节 |

前两行[第 05 篇给过判据](https://blog.yingtongxue.cn/#/blog/2026-09-10-agent-05-intake-form)，这里不重复。说后两行。

### 成功算什么

**判据：上线三个月后，你真的会打开去看的那个数。**

「提高效率」你不会去看，因为没法看。

「提单被退回补要素的比例」你会看——它每周都在变，而且降下来了你知道是这件事起的作用。

这一行现在只定义，怎么测是第 16 篇的事，怎么盯是第 19 篇的事。**但定义必须现在写**——上线之后再补，你会挑一个已经好看的数来当指标。

## 四、非目标：两条判据

这是本篇的正题，也是最容易写成废话的一格。

### 判据一 · 不是「它做不到」，是「它做得到但不许」

写「它不会写代码」「它不能访问数据库」——这些是能力边界，不是非目标。它本来就做不到，写不写都一样。

**真正的非目标是它做得到、甚至做得挺好，而你决定不让它做的那些事。**

「不承担『这次算几级风险』这个判断」是非目标，因为它做得到——[第 01 篇那轮验收的记录里，它三次主动伸手要接这个活](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)：「如果您告诉我这次变更的具体内容，我可以帮您对照《变更风险分级表》判断适用哪一档。」

没人要求它判，是它自己提出来的。**正因为它做得到、而且乐意做，这一条才需要写下来。**

[第 05 篇那条判据在这儿是同一条](https://blog.yingtongxue.cn/#/blog/2026-09-10-agent-05-intake-form)：**一条非目标写下去不觉得可惜，多半说明它是假的。**

### 判据二 · 每条非目标都要答得出「那这件事谁干」

写「不负责数据准确性」，紧跟着要能答：那谁负责。

有一种例外：这件事你决定**就此不做**。那答案不是名字，是代价——照第 03 篇那几条路的写法，「砍掉」那一行填的是「少一块价值」。能写出代价，也算答上了。

既写不出名字也写不出代价，这条就不是非目标，是甩锅。

那件事没有消失，它只是从你的文档里消失了。

**非目标清单的另一面是交接点**：每划走一件事，就得有人接。

而「接的人是谁」跟[第 05 篇那五格 Owner 是同一个动作](https://blog.yingtongxue.cn/#/blog/2026-09-10-agent-05-intake-form)——你要的是名字，不是承诺。（Agent 之间怎么交接是第 22 篇，那交的是制品，不是这里的人。）

### 三类非目标

| 类型 | 例子 | 它在防什么 |
|---|---|---|
| 不服务的人 | 只服务提单人，不服务审批人 | 审批人问它，它的回答会变成审批依据 |
| 不承担的判断 | 不承担「这次算几级风险」，不判断能不能批下来 | 判断题没有原文可核 |
| 不覆盖的范围 | 只答这三份制度写过的，不答其他系统的事 | 越界回答看不出来 |

第一类最容易漏，也最值钱。同一个 Agent，提单人问和审批人问，性质完全不同——**对提单人它是参考，对审批人它是依据**。

### 填好之后长这样

还是那个提单助手：

| 行 | 填的 |
|---|---|
| 服务对象 | 提交变更单的业务人员，目前约二十人，先给其中一个组 |
| 承接哪一段活 | 从「想提一张单」到「单据被受理」这一段 |
| 成功算什么 | 提单因要素不全被退回的比例 |
| 非目标 | 四条，见下表 |

成功那一行有个容易漏的前提：**上线之前先把这个数量一次**。没有基线，三个月后你说不清是降了还是本来就这样。

非目标清单，每条后面必须跟着接手的人：

| 非目标 | 那这件事谁干 |
|---|---|
| 不回答审批人的「这单该不该批」 | 审批人按《管理办法》第三条自己判，要依据时查制度原文 |
| 不承担「这次算几级风险」这个判断 | 提单人对着《变更风险分级表》自己判，拿不准找研发管理办公室 |
| 不承诺审批结果与上线时间 | 由审批人和变更窗口决定 |
| 不回答三份制度以外的问题 | 转研发管理办公室 |

四条里有三条它都答得上来，只有「不承诺审批结果与上线时间」它是真不知道——它看不见那张单的进度。

**那一条靠的是判据二，不是判据一。**

## 五、非目标清单不是执行机制

写完清单会有一种做完了的错觉，这里要泼一次冷水。

**这张清单约束的是你和你的工程搭档，不是模型。**

[第 03 篇实测过一条：提示词能规定它做什么，规定不了它不做什么](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels)。你把这条非目标原样抄进系统提示词，它照样可能在某一轮对话里判了。

所以非目标要落地，分两层：

| 这条非目标 | 靠什么真的挡住 |
|---|---|
| 不覆盖三份制度以外的问题 | 知识库里就只放这三份，结构上够不着——[第 03 篇那条规矩](https://blog.yingtongxue.cn/#/blog/2026-09-08-agent-03-risk-levels) |
| 不回答审批人的「该不该批」 | 挡不住——审批人照样会来问 |

第一类能靠结构实现，工具与接口那一侧的同类手段是第 08 篇。**第二类挡不住，只能靠说明**：在给使用者的说明里写清它不承担什么，也就是登记表「允许用途」那一格。

写下来仍然有用，但用处要说准：**它让边界成为一件被人知道的事，而不是一件被系统保证的事。**

而且它不是终点。**第 07 篇的禁止动作清单、第 08 篇的权限矩阵，输入都是这张表**——那两样是真能挡住的，但它们该挡什么，得由这一张来定。

## 六、哪些话不属于这一篇

还有一类话容易写着写着滑进来：动作层。那是第 07 篇的地盘，分界在这儿：

| 这句话 | 属于 | 它在说什么 |
|---|---|---|
| 不服务审批人 | 非目标（06） | 它替谁干活 |
| 不承担「这次算几级风险」这个判断 | 非目标（06） | 它承不承担这个判断 |
| 不得替提单人给出风险等级结论 | 禁止动作（07） | 一个具体动作 |
| 不得给审批人发催办消息 | 禁止动作（07） | 一个具体动作 |
| 不得在窗口外发起上线 | 禁止动作（07） | 一个具体动作 |

**第二行和第三行是同一件事的两面**，[第 05 篇把动作形态那条列进了禁止用途、归 07](https://blog.yingtongxue.cn/#/blog/2026-09-10-agent-05-intake-form)，本篇这条是它的职责形态。

两条都要写，写在两处。**职责不写，07 那条就没有出处；动作不写，职责就落不了地。**

**判据：这句话说的是一段持续的职责归属，还是一次可以被拦下来的动作。**

说「替谁干活、由谁来判、承不承担这个结论」，那是职责，归本篇。说得出主谓宾、能在一次调用里发生、能被挡在发生之前，那是动作，归 07。

别拿「有没有技术手段」当判据。上一节那条「不覆盖三份制度以外的问题」结构上挡得住，它仍然是非目标——**能不能挡住，和它属于哪一层，是两件事**。

两层都要有。**非目标管的是「它是谁」，禁止动作管的是「它不能做什么」，后者是前者的执行形态。**

## 七、非目标从哪来：不是想，是收

写到这儿多数人会卡住：非目标想不全。

想不全是正常的，因为**它本来就不是想出来的**。你前三篇已经把它们写过一遍了，现在是收集。

| 去哪收 | 收什么 |
|---|---|
| 第 03 篇的定级表与那几条路 | 顶格那条动作你选了「砍掉」或「换动作」，被拿走的那一半就是非目标 |
| 第 04 篇的改造对照表 | 「验证由谁跑」那一行——凡是答案不是它的，就是一条非目标：它不验证自己的产出 |
| 第 05 篇的登记表 | 「禁止用途」那一格里，属于职责层的那几条 |
| 第 01 篇写的那五条规则 | 「不代替审批人做判断，不承诺审批结果与上线时间」——你早就写过两条了 |

收完通常有三到五条。**不够多不是问题，凭空编出来的才是。**

## 八、平台实例（knodo）：这一格没人问你

平台建一个 AI 成员，必填只有名称和系统提示词。

**它不会问你非目标**。表单里没有这一格，不填也不会报错——角色卡是你自己的文档，平台不替你把关。

还有一条跟角色直接相关的：[第 01 篇建那个助手时你就看到了](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)，建一个新助手要填的东西只有名称和一段提示词。

**也就是说，多建一个的成本就是多写一段提示词。**

于是很容易长出两个职责范围重叠的助手，对同一个问题给出不同答案，而使用的人不知道自己在跟哪一个说话。

角色卡就是防这个的。**先有职责边界，再建助手；反过来做，边界会由建的顺序决定。**

最后接一条老账。[第 01 篇提过，新建 AI 成员时提示词框里是预填的模板，要替换不是追加](https://blog.yingtongxue.cn/#/blog/2026-09-06-agent-01-first-qa-agent)。

角色卡写完落到提示词里的时候，回头确认一次那个框里没有第二段角色描述——**两段角色同时跑，你的非目标清单会被另一段悄悄推翻。**

## 九、写你自己那张

产出物是角色卡上半张：四行，加一份三到五条的非目标清单。

写完自查三条：

| | 自查 |
|---|---|
| 一 | 非目标里有没有一条是你舍不得的。全都舍得，说明还没碰到真边界 |
| 二 | 每条非目标后面有没有一个名字。没有，那是甩锅不是划界 |
| 三 | 有没有句子该归 07。能被工程搭档直接翻译成约束的，挪过去 |

填回登记表：**服务对象**填「目标用户」，**承接哪一段活**填「业务流程 / 业务对象」，**非目标**填「禁止用途」的上半截，下半截是第 07 篇的禁止动作。

**成功算什么**这一行二十个字段里没有专格，先占进「运行监控和复盘机制」——第 05 篇说过那一格现在就该写清上线后看哪几个指标。

## 十、下一篇讲什么

角色卡上半张定的是**它是谁**。

但知道它是谁，还不知道它每一步能做到哪儿。「查制度」和「把结论发出去」听起来都是这个角色分内的事，风险却差着一到两级，看发给谁。

第 07 篇拆动作：读取、生成、建议、提交草稿、触发流程、写入系统、对外发送，七层，越往后风险越高。禁止动作清单也在那里落地。

**这一层没拆清楚，第 09 篇的审批点就没地方放。**
`;function ry(t,i){const a={},r=t.match(/^---\n([\s\S]*?)\n---/);if(r){const u=r[1],s=u.match(/title:\s*["']?([^"'\n]+)["']?/);s&&(a.title=s[1].trim());const c=u.match(/category:\s*["']?([^"'\n]+)["']?/);c&&(a.category=c[1].trim());const h=u.match(/tags:\s*\[([^\]]+)\]/);h&&(a.tags=h[1].split(",").map(b=>b.trim().replace(/["']/g,"")));const m=u.match(/date:\s*["']?([^"'\n]+)["']?/);m&&(a.date=m[1].trim());const p=u.match(/cover:\s*["']?([^"'\n]+)["']?/);p&&(a.coverImage=p[1].trim());const y=u.match(/readTime:\s*(\d+)/);y&&(a.readTime=parseInt(y[1]));const g=u.match(/excerpt:\s*["']?([^"'\n]+)["']?/);g&&(a.excerpt=g[1].trim()),a.content=t.substring(r[0].length).trim()}else{a.content=t;const u=t.match(/^#\s+(.+)$/m);u&&(a.title=u[1].trim());const s=t.split(`

`)[1];s&&(a.excerpt=s.substring(0,100)+"...")}if(a.id=i,a.date||(a.date=new Date().toISOString().split("T")[0]),a.category||(a.category="未分类"),a.tags||(a.tags=[]),!a.readTime){const u=(a.content||t).length;a.readTime=Math.max(1,Math.ceil(u/300))}return a}const bg={appId:"cli_a92d55a1c4f81cee",wikiToken:"Z2lkwg5sSiMeUAkeFaVcr4L5nRc",blogFolderToken:"DIdZwBHFBiWix9khMfpclewDnBd"},tA={duration:600*1e3};let Al=null;class lA{tenantAccessToken=null;tokenExpireTime=0;async getTenantAccessToken(){if(this.tenantAccessToken&&Date.now()<this.tokenExpireTime)return this.tenantAccessToken;const i=await fetch("/api/feishu/auth",{method:"POST"});if(!i.ok)throw new Error("Failed to get tenant access token");const a=await i.json();return this.tenantAccessToken=a.tenant_access_token,this.tokenExpireTime=Date.now()+(a.expire-300)*1e3,this.tenantAccessToken}async fetchBlogPosts(){if(Al&&Date.now()-Al.lastUpdate<tA.duration)return Al.posts;try{const i=await fetch(`/api/feishu/wiki/${bg.wikiToken}/nodes?parent_node_token=${bg.blogFolderToken}`);if(!i.ok)throw new Error("Failed to fetch wiki nodes");const a=await i.json(),r=[];for(const u of a.data?.items||[])if(u.obj_type==="docx")try{const s=await fetch(`/api/feishu/docx/${u.obj_token}/raw`);if(!s.ok)continue;const h=(await s.json()).data?.content||"",m=ry(h,u.obj_token);r.push({id:m.id,title:m.title||u.title,excerpt:m.excerpt||"",content:m.content||h,coverImage:m.coverImage||this.getDefaultCover(m.category),category:m.category||"未分类",tags:m.tags||[],date:m.date||new Date().toISOString().split("T")[0],readTime:m.readTime||5})}catch(s){console.error(`Failed to fetch document ${u.obj_token}:`,s)}return r.sort((u,s)=>new Date(s.date).getTime()-new Date(u.date).getTime()),Al={posts:r,lastUpdate:Date.now(),categories:[...new Set(r.map(u=>u.category))],tags:[...new Set(r.flatMap(u=>u.tags))]},r}catch(i){return console.error("Failed to fetch blog posts from Feishu:",i),Al?.posts||[]}}parseDocxContent(i){if(!i?.content)return"";let a="";for(const r of i.content.blocks||[])switch(r.type){case"paragraph":a+=this.parseParagraph(r)+`

`;break;case"heading1":a+=`# ${this.getText(r)}

`;break;case"heading2":a+=`## ${this.getText(r)}

`;break;case"heading3":a+=`### ${this.getText(r)}

`;break;case"bulletList":a+=`- ${this.getText(r)}
`;break;case"numberList":a+=`1. ${this.getText(r)}
`;break;case"code":a+=`\`\`\`
${this.getText(r)}
\`\`\`

`;break;case"image":a+=`![${r.alt||"image"}](${r.url||""})

`;break;default:a+=this.getText(r)+`

`}return a.trim()}parseParagraph(i){let a="";for(const r of i.segments||[]){let u=r.text||"";r.bold&&(u=`**${u}**`),r.italic&&(u=`*${u}*`),r.code&&(u=`\`${u}\``),r.link&&(u=`[${u}](${r.link})`),a+=u}return a}getText(i){return i.text?.content||""}getDefaultCover(i){return{技术:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80",生活:"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",旅行:"https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"}[i||""]||"https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80"}clearCache(){Al=null}getCategories(){return Al?.categories||[]}getTags(){return Al?.tags||[]}}const oy=new lA,aA=Object.assign({"../content/posts/2026-08-26-geb-claude-md.md":Vw,"../content/posts/2026-08-26-prompt-engineering.md":Gw,"../content/posts/2026-08-27-context-for-everyone.md":Yw,"../content/posts/2026-08-28-ai-is-not-a-wishing-well.md":Xw,"../content/posts/2026-08-29-draw-your-own-map.md":Qw,"../content/posts/2026-08-30-cheap-failure.md":Fw,"../content/posts/2026-08-31-three-layers.md":Zw,"../content/posts/2026-09-06-agent-00-series-intro.md":Kw,"../content/posts/2026-09-06-agent-01-first-qa-agent.md":$w,"../content/posts/2026-09-07-agent-02-risk-sources.md":Pw,"../content/posts/2026-09-08-agent-03-risk-levels.md":Jw,"../content/posts/2026-09-09-agent-04-approve-the-list.md":Ww,"../content/posts/2026-09-10-agent-05-intake-form.md":eA,"../content/posts/2026-09-11-agent-06-role-card.md":nA}),iA=t=>!t||/^(https?:)?\/\//.test(t)||t.startsWith("/")?t:`/${t}`,Fa=Object.entries(aA).map(([t,i])=>{const a=t.split("/").pop().replace(/\.md$/,""),r={title:a,excerpt:"",coverImage:"",...ry(i,a)};return{...r,coverImage:iA(r.coverImage)}}).sort((t,i)=>i.date.localeCompare(t.date));let uy="auto";async function sr(){try{const t=await oy.fetchBlogPosts();if(t.length>0)return t;if(uy==="auto")return console.warn("Feishu returned empty data, falling back to static data"),Fa}catch(t){return console.warn("Failed to fetch from Feishu:",t),Fa}return[]}async function rA(t){try{const a=(await oy.fetchBlogPosts()).find(r=>r.id===t);if(a)return a;if(uy==="auto")return Fa.find(r=>r.id===t)}catch(i){return console.warn("Failed to fetch post from Feishu:",i),Fa.find(a=>a.id===t)}}async function oA(){const t=await sr(),i=new Set(["全部"]);return t.forEach(a=>{a.category&&a.category!=="全部"&&i.add(a.category)}),Array.from(i)}async function uA(){const t=await sr(),i=new Set;return t.forEach(a=>a.tags.forEach(r=>i.add(r))),Array.from(i)}const Qt=[],Qo=[],sA=["全部",...Array.from(new Set(Qo.map(t=>t.category)))],cA=[{icon:L1,href:"https://github.com",label:"GitHub"},{icon:I1,href:"https://twitter.com",label:"Twitter"},{icon:wf,href:"mailto:speedkingblock@hotmail.com",label:"Email"}];function fA(){const t=C.useRef(null),[i,a]=C.useState(""),[r,u]=C.useState(Fa.slice(0,3)),[s,c]=C.useState(Fa.length),h="内容分享者 / 知识博主 / 生活记录者";C.useEffect(()=>{let p=0;const y=setInterval(()=>{p<=h.length?(a(h.slice(0,p)),p++):clearInterval(y)},80);return()=>clearInterval(y)},[]),C.useEffect(()=>{const p=new IntersectionObserver(g=>{g.forEach(b=>{b.isIntersecting&&(b.target.classList.add("animate-fade-in-up"),p.unobserve(b.target))})},{threshold:.1});return document.querySelectorAll(".animate-on-scroll").forEach(g=>p.observe(g)),()=>p.disconnect()},[]),C.useEffect(()=>{async function p(){try{const y=await sr();y.length>0&&(u(y.slice(0,3)),c(y.length))}catch(y){console.warn("Failed to load blog data from Feishu:",y)}}p()},[]);const m=[{label:"文章",value:s,icon:j1},{label:"音乐",value:Qt.length,icon:Af},{label:"照片",value:Qo.length,icon:B1}];return v.jsxs("div",{"code-path":"src/pages/Home.tsx:79:5",className:"min-h-screen bg-[#f0efe9]",children:[v.jsx("section",{"code-path":"src/pages/Home.tsx:81:7",ref:t,className:"pt-32 pb-20 px-6 lg:px-12",children:v.jsx("div",{"code-path":"src/pages/Home.tsx:82:9",className:"max-w-[1200px] mx-auto",children:v.jsxs("div",{"code-path":"src/pages/Home.tsx:83:11",className:"grid lg:grid-cols-2 gap-12 items-center",children:[v.jsxs("div",{"code-path":"src/pages/Home.tsx:84:13",className:"order-2 lg:order-1",children:[v.jsx("div",{"code-path":"src/pages/Home.tsx:85:15",className:"animate-on-scroll opacity-0 mb-4",children:v.jsx("span",{"code-path":"src/pages/Home.tsx:86:17",className:"inline-block px-4 py-1.5 bg-[#1a1a1a] text-white text-xs font-medium rounded-full",children:"👋 欢迎来到我的个人博客"})}),v.jsxs("h1",{"code-path":"src/pages/Home.tsx:91:15",className:"animate-on-scroll opacity-0 text-4xl md:text-5xl lg:text-[56px] font-medium text-[#1a1a1a] leading-[1.1] mb-6",children:["你好，我是",v.jsx("br",{"code-path":"src/pages/Home.tsx:93:17"}),"瀛同学"]}),v.jsx("div",{"code-path":"src/pages/Home.tsx:97:15",className:"animate-on-scroll opacity-0 h-8 mb-8",children:v.jsxs("span",{"code-path":"src/pages/Home.tsx:98:17",className:"text-lg text-[#6b6b6b] font-mono",children:[i,v.jsx("span",{"code-path":"src/pages/Home.tsx:100:19",className:"animate-pulse",children:"|"})]})}),v.jsx("p",{"code-path":"src/pages/Home.tsx:104:15",className:"animate-on-scroll opacity-0 text-[#6b6b6b] text-lg mb-8 max-w-lg",children:"这里是一个充满吃喝玩乐、学习以及其他有趣分享的小天地。 希望我的博客能成为你放松、获取灵感和知识的地方。让我们一起探索生活的美好，享受每一个精彩的瞬间！"}),v.jsxs("div",{"code-path":"src/pages/Home.tsx:109:15",className:"animate-on-scroll opacity-0 flex flex-wrap gap-4",children:[v.jsx(Kn,{"code-path":"src/pages/Home.tsx:110:17",to:"/blog",children:v.jsxs(xg,{"code-path":"src/pages/Home.tsx:111:19",className:"bg-[#1a1a1a] hover:bg-[#1a1a1a]/85 text-white px-6 py-3 rounded-lg",children:["浏览内容",v.jsx(rg,{"code-path":"src/pages/Home.tsx:113:21",className:"w-4 h-4 ml-2"})]})}),v.jsx(Kn,{"code-path":"src/pages/Home.tsx:116:17",to:"/about",children:v.jsx(xg,{"code-path":"src/pages/Home.tsx:117:19",variant:"outline",className:"border-[#1a1a1a] text-[#1a1a1a] hover:bg-[#1a1a1a] hover:text-white px-6 py-3 rounded-lg",children:"了解更多"})})]})]}),v.jsx("div",{"code-path":"src/pages/Home.tsx:124:13",className:"animate-on-scroll opacity-0 order-1 lg:order-2 flex justify-center",children:v.jsxs("div",{"code-path":"src/pages/Home.tsx:125:15",className:"relative",children:[v.jsx("div",{"code-path":"src/pages/Home.tsx:126:17",className:"w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden bg-white shadow-lg",children:v.jsx("img",{"code-path":"src/pages/Home.tsx:127:19",src:"avatar.jpg",alt:"瀛同学",className:"w-full h-full object-cover"})}),v.jsx("div",{"code-path":"src/pages/Home.tsx:134:17",className:"absolute -bottom-4 -right-4 w-24 h-24 bg-[#1a1a1a] rounded-full opacity-5"}),v.jsx("div",{"code-path":"src/pages/Home.tsx:135:17",className:"absolute -top-4 -left-4 w-16 h-16 bg-[#1a1a1a] rounded-full opacity-5"})]})})]})})}),v.jsx("section",{"code-path":"src/pages/Home.tsx:143:7",className:"py-16 px-6 lg:px-12",children:v.jsx("div",{"code-path":"src/pages/Home.tsx:144:9",className:"max-w-[1200px] mx-auto",children:v.jsx("div",{"code-path":"src/pages/Home.tsx:145:11",className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:m.map((p,y)=>{const g=p.icon;return v.jsxs("div",{"code-path":"src/pages/Home.tsx:149:17",className:"animate-on-scroll opacity-0 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow",style:{animationDelay:`${y*100}ms`},children:[v.jsx(g,{"code-path":"src/pages/Home.tsx:154:19",className:"w-6 h-6 text-[#1a1a1a] mb-3"}),v.jsx("div",{"code-path":"src/pages/Home.tsx:155:19",className:"text-3xl font-medium text-[#1a1a1a] mb-1",children:p.value}),v.jsx("div",{"code-path":"src/pages/Home.tsx:158:19",className:"text-[#9ca3af] text-sm",children:p.label})]},p.label)})})})}),v.jsx("section",{"code-path":"src/pages/Home.tsx:167:7",className:"py-16 px-6 lg:px-12",children:v.jsxs("div",{"code-path":"src/pages/Home.tsx:168:9",className:"max-w-[1200px] mx-auto",children:[v.jsxs("div",{"code-path":"src/pages/Home.tsx:169:11",className:"flex items-center justify-between mb-8",children:[v.jsx("h2",{"code-path":"src/pages/Home.tsx:170:13",className:"text-2xl font-medium text-[#1a1a1a]",children:"最新文章"}),v.jsxs(Kn,{"code-path":"src/pages/Home.tsx:171:13",to:"/blog",className:"flex items-center gap-1 text-[#6b6b6b] hover:text-[#1a1a1a] text-sm font-medium transition-colors",children:["查看全部",v.jsx(rg,{"code-path":"src/pages/Home.tsx:176:15",className:"w-4 h-4"})]})]}),v.jsx("div",{"code-path":"src/pages/Home.tsx:180:11",className:"grid md:grid-cols-2 lg:grid-cols-3 gap-4",children:r.map((p,y)=>v.jsxs(Kn,{"code-path":"src/pages/Home.tsx:182:15",to:`/blog/${p.id}`,className:"animate-on-scroll opacity-0 group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",style:{animationDelay:`${y*100}ms`},children:[p.coverImage&&v.jsx("div",{"code-path":"src/pages/Home.tsx:189:19",className:"aspect-video overflow-hidden",children:v.jsx("img",{"code-path":"src/pages/Home.tsx:190:21",src:p.coverImage,alt:p.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),v.jsxs("div",{"code-path":"src/pages/Home.tsx:197:17",className:"p-5",children:[v.jsxs("div",{"code-path":"src/pages/Home.tsx:198:19",className:"flex items-center gap-2 mb-3",children:[v.jsx("span",{"code-path":"src/pages/Home.tsx:199:21",className:"px-2 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-xs font-medium rounded-full",children:p.category}),v.jsx("span",{"code-path":"src/pages/Home.tsx:202:21",className:"text-[#9ca3af] text-xs",children:p.date})]}),v.jsx("h3",{"code-path":"src/pages/Home.tsx:204:19",className:"font-medium text-[#1a1a1a] mb-2 group-hover:text-[#6b6b6b] transition-colors",children:p.title}),v.jsx("p",{"code-path":"src/pages/Home.tsx:207:19",className:"text-[#6b6b6b] text-sm line-clamp-2",children:p.excerpt})]})]},p.id))})]})}),v.jsx("footer",{"code-path":"src/pages/Home.tsx:218:7",className:"py-12 px-6 lg:px-12 border-t border-[#e5e5e5]",children:v.jsxs("div",{"code-path":"src/pages/Home.tsx:219:9",className:"max-w-[1200px] mx-auto text-center",children:[v.jsx("div",{"code-path":"src/pages/Home.tsx:220:11",className:"flex justify-center gap-4 mb-6",children:cA.map(p=>{const y=p.icon;return v.jsx("a",{"code-path":"src/pages/Home.tsx:224:17",href:p.href,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#6b6b6b] hover:bg-[#1a1a1a] hover:text-white transition-colors",children:v.jsx(y,{"code-path":"src/pages/Home.tsx:231:19",className:"w-5 h-5"})},p.label)})}),v.jsx("p",{"code-path":"src/pages/Home.tsx:236:11",className:"text-[#9ca3af] text-sm",children:"© 2024 瀛同学. All rights reserved."})]})})]})}function dA({className:t,type:i,...a}){return v.jsx("input",{"code-path":"src/components/ui/input.tsx:7:5",type:i,"data-slot":"input",className:er("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t),...a})}function hA(){const[t,i]=C.useState([]),[a,r]=C.useState(["全部"]),[u,s]=C.useState([]),[c,h]=C.useState("全部"),[m,p]=C.useState(null),[y,g]=C.useState(""),[b,S]=C.useState(!0),[E,_]=C.useState(null);C.useEffect(()=>{window.scrollTo(0,0);async function D(){try{S(!0);const[j,Z,W]=await Promise.all([sr(),oA(),uA()]);i(j),r(Z),s(W),_(null)}catch(j){console.error("Failed to load blog data:",j),_("加载博客失败，请稍后重试")}finally{S(!1)}}D()},[]);const T=Array.from(t.reduce((D,j)=>{const Z=/^(\d{4})-(\d{2})/.exec(j.date);if(!Z)return D;const W=`${Z[1]}-${Z[2]}`;return D.set(W,(D.get(W)??0)+1),D},new Map)).sort((D,j)=>j[0].localeCompare(D[0])),N=t.filter(D=>{const j=c==="全部"||D.category===c,Z=!m||D.tags.includes(m),W=!y||D.title.toLowerCase().includes(y.toLowerCase())||D.excerpt.toLowerCase().includes(y.toLowerCase());return j&&Z&&W});return v.jsx("div",{"code-path":"src/pages/Blog.tsx:68:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:v.jsxs("div",{"code-path":"src/pages/Blog.tsx:69:7",className:"max-w-[1200px] mx-auto px-6 lg:px-12",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:71:9",className:"mb-10",children:[v.jsx("h1",{"code-path":"src/pages/Blog.tsx:72:11",className:"text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4",children:"博客文章"}),v.jsx("p",{"code-path":"src/pages/Blog.tsx:75:11",className:"text-[#6b6b6b]",children:"分享技术心得、生活感悟和旅行见闻"})]}),v.jsxs("div",{"code-path":"src/pages/Blog.tsx:78:9",className:"grid lg:grid-cols-3 gap-8",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:80:11",className:"lg:col-span-2",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:82:13",className:"bg-white rounded-xl p-4 mb-6 shadow-sm",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:83:15",className:"relative mb-4",children:[v.jsx(ES,{"code-path":"src/pages/Blog.tsx:84:17",className:"absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9ca3af]"}),v.jsx(dA,{"code-path":"src/pages/Blog.tsx:85:17",type:"text",placeholder:"搜索文章...",value:y,onChange:D=>g(D.target.value),className:"pl-10 h-11 rounded-lg border-[#e5e5e5] focus:border-[#1a1a1a]"})]}),v.jsx("div",{"code-path":"src/pages/Blog.tsx:93:15",className:"flex flex-wrap gap-2",children:a.map(D=>v.jsx("button",{"code-path":"src/pages/Blog.tsx:95:19",onClick:()=>h(D),className:`px-4 py-2 text-sm font-medium rounded-full transition-all ${c===D?"bg-[#1a1a1a] text-white":"bg-[#f0f0f0] text-[#4a4a4a] hover:bg-[#e5e5e5]"}`,children:D},D))})]}),b&&v.jsxs("div",{"code-path":"src/pages/Blog.tsx:112:15",className:"text-center py-16",children:[v.jsx(H1,{"code-path":"src/pages/Blog.tsx:113:17",className:"w-8 h-8 animate-spin mx-auto text-[#6b6b6b] mb-4"}),v.jsx("p",{"code-path":"src/pages/Blog.tsx:114:17",className:"text-[#6b6b6b]",children:"加载中..."})]}),E&&!b&&v.jsxs("div",{"code-path":"src/pages/Blog.tsx:120:15",className:"text-center py-16 bg-white rounded-xl shadow-sm",children:[v.jsx("p",{"code-path":"src/pages/Blog.tsx:121:17",className:"text-red-500 mb-4",children:E}),v.jsx("button",{"code-path":"src/pages/Blog.tsx:122:17",onClick:()=>window.location.reload(),className:"px-4 py-2 bg-[#1a1a1a] text-white rounded-lg hover:bg-[#333] transition-colors",children:"重试"})]}),!b&&!E&&v.jsx("div",{"code-path":"src/pages/Blog.tsx:133:15",className:"space-y-4",children:N.map(D=>v.jsx(Kn,{"code-path":"src/pages/Blog.tsx:135:17",to:`/blog/${D.id}`,className:"group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300",children:v.jsxs("div",{"code-path":"src/pages/Blog.tsx:140:19",className:"md:flex",children:[D.coverImage&&v.jsx("div",{"code-path":"src/pages/Blog.tsx:142:23",className:"md:w-1/3 aspect-video md:aspect-auto overflow-hidden",children:v.jsx("img",{"code-path":"src/pages/Blog.tsx:143:25",src:D.coverImage,alt:D.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"})}),v.jsxs("div",{"code-path":"src/pages/Blog.tsx:150:21",className:"md:w-2/3 p-6",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:151:23",className:"flex items-center gap-3 mb-3",children:[v.jsx("span",{"code-path":"src/pages/Blog.tsx:152:25",className:"px-2 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-xs font-medium rounded-full",children:D.category}),v.jsxs("span",{"code-path":"src/pages/Blog.tsx:155:25",className:"flex items-center gap-1 text-[#9ca3af] text-xs",children:[v.jsx(eu,{"code-path":"src/pages/Blog.tsx:156:27",className:"w-3 h-3"}),D.date]}),v.jsxs("span",{"code-path":"src/pages/Blog.tsx:159:25",className:"flex items-center gap-1 text-[#9ca3af] text-xs",children:[v.jsx(O1,{"code-path":"src/pages/Blog.tsx:160:27",className:"w-3 h-3"}),D.readTime," 分钟"]})]}),v.jsx("h2",{"code-path":"src/pages/Blog.tsx:164:23",className:"text-xl font-medium text-[#1a1a1a] mb-2 group-hover:text-[#6b6b6b] transition-colors",children:D.title}),v.jsx("p",{"code-path":"src/pages/Blog.tsx:167:23",className:"text-[#6b6b6b] text-sm mb-4 line-clamp-2",children:D.excerpt}),v.jsx("div",{"code-path":"src/pages/Blog.tsx:170:23",className:"flex flex-wrap gap-2",children:D.tags.map(j=>v.jsxs("span",{"code-path":"src/pages/Blog.tsx:172:27",className:"flex items-center gap-1 px-2 py-1 bg-[#f0f0f0] text-[#6b6b6b] text-xs rounded-full",children:[v.jsx(q1,{"code-path":"src/pages/Blog.tsx:176:29",className:"w-3 h-3"}),j]},j))})]})]})},D.id))}),!b&&!E&&N.length===0&&v.jsx("div",{"code-path":"src/pages/Blog.tsx:189:15",className:"text-center py-16",children:v.jsx("p",{"code-path":"src/pages/Blog.tsx:190:17",className:"text-[#6b6b6b]",children:"没有找到相关文章"})})]}),v.jsxs("div",{"code-path":"src/pages/Blog.tsx:196:11",className:"space-y-6",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:198:13",className:"bg-white rounded-xl p-6 shadow-sm",children:[v.jsxs("div",{"code-path":"src/pages/Blog.tsx:199:15",className:"flex items-center gap-4 mb-4",children:[v.jsx("img",{"code-path":"src/pages/Blog.tsx:200:17",src:"avatar.jpg",alt:"瀛同学",className:"w-16 h-16 rounded-full object-cover"}),v.jsxs("div",{"code-path":"src/pages/Blog.tsx:205:17",children:[v.jsx("h3",{"code-path":"src/pages/Blog.tsx:206:19",className:"font-medium text-[#1a1a1a]",children:"瀛同学"}),v.jsx("p",{"code-path":"src/pages/Blog.tsx:207:19",className:"text-[#9ca3af] text-sm",children:"内容分享者"})]})]}),v.jsx("p",{"code-path":"src/pages/Blog.tsx:210:15",className:"text-[#6b6b6b] text-sm",children:"热爱技术与艺术，分享代码、音乐、照片和思考。"})]}),v.jsxs("div",{"code-path":"src/pages/Blog.tsx:216:13",className:"bg-white rounded-xl p-6 shadow-sm",children:[v.jsx("h3",{"code-path":"src/pages/Blog.tsx:217:15",className:"font-medium text-[#1a1a1a] mb-4",children:"标签云"}),v.jsx("div",{"code-path":"src/pages/Blog.tsx:218:15",className:"flex flex-wrap gap-2",children:u.map(D=>v.jsx("button",{"code-path":"src/pages/Blog.tsx:220:19",onClick:()=>p(m===D?null:D),className:`px-3 py-1.5 text-sm rounded-full transition-all ${m===D?"bg-[#1a1a1a] text-white":"bg-[#f0f0f0] text-[#4a4a4a] hover:bg-[#e5e5e5]"}`,children:D},D))})]}),T.length>0&&v.jsxs("div",{"code-path":"src/pages/Blog.tsx:239:15",className:"bg-white rounded-xl p-6 shadow-sm",children:[v.jsx("h3",{"code-path":"src/pages/Blog.tsx:240:17",className:"font-medium text-[#1a1a1a] mb-4",children:"归档"}),v.jsx("div",{"code-path":"src/pages/Blog.tsx:241:17",className:"space-y-2",children:T.map(([D,j])=>{const[Z,W]=D.split("-");return v.jsxs("div",{"code-path":"src/pages/Blog.tsx:245:23",className:"flex items-center justify-between text-sm",children:[v.jsxs("span",{"code-path":"src/pages/Blog.tsx:246:25",className:"text-[#6b6b6b]",children:[Z,"年",Number(W),"月"]}),v.jsxs("span",{"code-path":"src/pages/Blog.tsx:249:25",className:"text-[#9ca3af]",children:[j,"篇"]})]},D)})})]})]})]})]})})}function pA(t){const i="https://personalweb-views.speedkingblock.workers.dev";try{const a=`viewed:${t}`;if(sessionStorage.getItem(a))return;sessionStorage.setItem(a,"1")}catch{}fetch(`${i.replace(/\/$/,"")}/hit`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({slug:t}),keepalive:!0}).catch(()=>{})}function mA(t,i){const a={};return(t[t.length-1]===""?[...t,""]:t).join((a.padRight?" ":"")+","+(a.padLeft===!1?"":" ")).trim()}const gA=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,yA=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,xA={};function vg(t,i){return(xA.jsx?yA:gA).test(t)}const bA=/[ \t\n\f\r]/g;function vA(t){return typeof t=="object"?t.type==="text"?Sg(t.value):!1:Sg(t)}function Sg(t){return t.replace(bA,"")===""}class cr{constructor(i,a,r){this.normal=a,this.property=i,r&&(this.space=r)}}cr.prototype.normal={};cr.prototype.property={};cr.prototype.space=void 0;function sy(t,i){const a={},r={};for(const u of t)Object.assign(a,u.property),Object.assign(r,u.normal);return new cr(a,r,i)}function Wc(t){return t.toLowerCase()}class Un{constructor(i,a){this.attribute=a,this.property=i}}Un.prototype.attribute="";Un.prototype.booleanish=!1;Un.prototype.boolean=!1;Un.prototype.commaOrSpaceSeparated=!1;Un.prototype.commaSeparated=!1;Un.prototype.defined=!1;Un.prototype.mustUseProperty=!1;Un.prototype.number=!1;Un.prototype.overloadedBoolean=!1;Un.prototype.property="";Un.prototype.spaceSeparated=!1;Un.prototype.space=void 0;let SA=0;const Ee=Wl(),sn=Wl(),ef=Wl(),te=Wl(),Ke=Wl(),Qa=Wl(),Zn=Wl();function Wl(){return 2**++SA}const nf=Object.freeze(Object.defineProperty({__proto__:null,boolean:Ee,booleanish:sn,commaOrSpaceSeparated:Zn,commaSeparated:Qa,number:te,overloadedBoolean:ef,spaceSeparated:Ke},Symbol.toStringTag,{value:"Module"})),Dc=Object.keys(nf);class Cf extends Un{constructor(i,a,r,u){let s=-1;if(super(i,a),wg(this,"space",u),typeof r=="number")for(;++s<Dc.length;){const c=Dc[s];wg(this,Dc[s],(r&nf[c])===nf[c])}}}Cf.prototype.defined=!0;function wg(t,i,a){a&&(t[i]=a)}function Pa(t){const i={},a={};for(const[r,u]of Object.entries(t.properties)){const s=new Cf(r,t.transform(t.attributes||{},r),u,t.space);t.mustUseProperty&&t.mustUseProperty.includes(r)&&(s.mustUseProperty=!0),i[r]=s,a[Wc(r)]=r,a[Wc(s.attribute)]=r}return new cr(i,a,t.space)}const cy=Pa({properties:{ariaActiveDescendant:null,ariaAtomic:sn,ariaAutoComplete:null,ariaBusy:sn,ariaChecked:sn,ariaColCount:te,ariaColIndex:te,ariaColSpan:te,ariaControls:Ke,ariaCurrent:null,ariaDescribedBy:Ke,ariaDetails:null,ariaDisabled:sn,ariaDropEffect:Ke,ariaErrorMessage:null,ariaExpanded:sn,ariaFlowTo:Ke,ariaGrabbed:sn,ariaHasPopup:null,ariaHidden:sn,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:Ke,ariaLevel:te,ariaLive:null,ariaModal:sn,ariaMultiLine:sn,ariaMultiSelectable:sn,ariaOrientation:null,ariaOwns:Ke,ariaPlaceholder:null,ariaPosInSet:te,ariaPressed:sn,ariaReadOnly:sn,ariaRelevant:null,ariaRequired:sn,ariaRoleDescription:Ke,ariaRowCount:te,ariaRowIndex:te,ariaRowSpan:te,ariaSelected:sn,ariaSetSize:te,ariaSort:null,ariaValueMax:te,ariaValueMin:te,ariaValueNow:te,ariaValueText:null,role:null},transform(t,i){return i==="role"?i:"aria-"+i.slice(4).toLowerCase()}});function fy(t,i){return i in t?t[i]:i}function dy(t,i){return fy(t,i.toLowerCase())}const wA=Pa({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:Qa,acceptCharset:Ke,accessKey:Ke,action:null,allow:null,allowFullScreen:Ee,allowPaymentRequest:Ee,allowUserMedia:Ee,alt:null,as:null,async:Ee,autoCapitalize:null,autoComplete:Ke,autoFocus:Ee,autoPlay:Ee,blocking:Ke,capture:null,charSet:null,checked:Ee,cite:null,className:Ke,cols:te,colSpan:null,content:null,contentEditable:sn,controls:Ee,controlsList:Ke,coords:te|Qa,crossOrigin:null,data:null,dateTime:null,decoding:null,default:Ee,defer:Ee,dir:null,dirName:null,disabled:Ee,download:ef,draggable:sn,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:Ee,formTarget:null,headers:Ke,height:te,hidden:ef,high:te,href:null,hrefLang:null,htmlFor:Ke,httpEquiv:Ke,id:null,imageSizes:null,imageSrcSet:null,inert:Ee,inputMode:null,integrity:null,is:null,isMap:Ee,itemId:null,itemProp:Ke,itemRef:Ke,itemScope:Ee,itemType:Ke,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:Ee,low:te,manifest:null,max:null,maxLength:te,media:null,method:null,min:null,minLength:te,multiple:Ee,muted:Ee,name:null,nonce:null,noModule:Ee,noValidate:Ee,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:Ee,optimum:te,pattern:null,ping:Ke,placeholder:null,playsInline:Ee,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:Ee,referrerPolicy:null,rel:Ke,required:Ee,reversed:Ee,rows:te,rowSpan:te,sandbox:Ke,scope:null,scoped:Ee,seamless:Ee,selected:Ee,shadowRootClonable:Ee,shadowRootDelegatesFocus:Ee,shadowRootMode:null,shape:null,size:te,sizes:null,slot:null,span:te,spellCheck:sn,src:null,srcDoc:null,srcLang:null,srcSet:null,start:te,step:null,style:null,tabIndex:te,target:null,title:null,translate:null,type:null,typeMustMatch:Ee,useMap:null,value:sn,width:te,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:Ke,axis:null,background:null,bgColor:null,border:te,borderColor:null,bottomMargin:te,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:Ee,declare:Ee,event:null,face:null,frame:null,frameBorder:null,hSpace:te,leftMargin:te,link:null,longDesc:null,lowSrc:null,marginHeight:te,marginWidth:te,noResize:Ee,noHref:Ee,noShade:Ee,noWrap:Ee,object:null,profile:null,prompt:null,rev:null,rightMargin:te,rules:null,scheme:null,scrolling:sn,standby:null,summary:null,text:null,topMargin:te,valueType:null,version:null,vAlign:null,vLink:null,vSpace:te,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:Ee,disableRemotePlayback:Ee,prefix:null,property:null,results:te,security:null,unselectable:null},space:"html",transform:dy}),AA=Pa({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:Zn,accentHeight:te,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:te,amplitude:te,arabicForm:null,ascent:te,attributeName:null,attributeType:null,azimuth:te,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:te,by:null,calcMode:null,capHeight:te,className:Ke,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:te,diffuseConstant:te,direction:null,display:null,dur:null,divisor:te,dominantBaseline:null,download:Ee,dx:null,dy:null,edgeMode:null,editable:null,elevation:te,enableBackground:null,end:null,event:null,exponent:te,externalResourcesRequired:null,fill:null,fillOpacity:te,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:Qa,g2:Qa,glyphName:Qa,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:te,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:te,horizOriginX:te,horizOriginY:te,id:null,ideographic:te,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:te,k:te,k1:te,k2:te,k3:te,k4:te,kernelMatrix:Zn,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:te,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:te,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:te,overlineThickness:te,paintOrder:null,panose1:null,path:null,pathLength:te,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:Ke,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:te,pointsAtY:te,pointsAtZ:te,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:Zn,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:Zn,rev:Zn,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:Zn,requiredFeatures:Zn,requiredFonts:Zn,requiredFormats:Zn,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:te,specularExponent:te,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:te,strikethroughThickness:te,string:null,stroke:null,strokeDashArray:Zn,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:te,strokeOpacity:te,strokeWidth:null,style:null,surfaceScale:te,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:Zn,tabIndex:te,tableValues:null,target:null,targetX:te,targetY:te,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:Zn,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:te,underlineThickness:te,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:te,values:null,vAlphabetic:te,vMathematical:te,vectorEffect:null,vHanging:te,vIdeographic:te,version:null,vertAdvY:te,vertOriginX:te,vertOriginY:te,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:te,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:fy}),hy=Pa({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(t,i){return"xlink:"+i.slice(5).toLowerCase()}}),py=Pa({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:dy}),my=Pa({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(t,i){return"xml:"+i.slice(3).toLowerCase()}}),kA={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},EA=/[A-Z]/g,Ag=/-[a-z]/g,CA=/^data[-\w.:]+$/i;function TA(t,i){const a=Wc(i);let r=i,u=Un;if(a in t.normal)return t.property[t.normal[a]];if(a.length>4&&a.slice(0,4)==="data"&&CA.test(i)){if(i.charAt(4)==="-"){const s=i.slice(5).replace(Ag,zA);r="data"+s.charAt(0).toUpperCase()+s.slice(1)}else{const s=i.slice(4);if(!Ag.test(s)){let c=s.replace(EA,NA);c.charAt(0)!=="-"&&(c="-"+c),i="data"+c}}u=Cf}return new u(r,i)}function NA(t){return"-"+t.toLowerCase()}function zA(t){return t.charAt(1).toUpperCase()}const _A=sy([cy,wA,hy,py,my],"html"),Tf=sy([cy,AA,hy,py,my],"svg");function RA(t){return t.join(" ").trim()}var Va={},jc,kg;function MA(){if(kg)return jc;kg=1;var t=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,i=/\n/g,a=/^\s*/,r=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,u=/^:\s*/,s=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,c=/^[;\s]*/,h=/^\s+|\s+$/g,m=`
`,p="/",y="*",g="",b="comment",S="declaration";function E(T,N){if(typeof T!="string")throw new TypeError("First argument must be a string");if(!T)return[];N=N||{};var D=1,j=1;function Z(re){var P=re.match(i);P&&(D+=P.length);var B=re.lastIndexOf(m);j=~B?re.length-B:j+re.length}function W(){var re={line:D,column:j};return function(P){return P.position=new q(re),ue(),P}}function q(re){this.start=re,this.end={line:D,column:j},this.source=N.source}q.prototype.content=T;function ee(re){var P=new Error(N.source+":"+D+":"+j+": "+re);if(P.reason=re,P.filename=N.source,P.line=D,P.column=j,P.source=T,!N.silent)throw P}function $(re){var P=re.exec(T);if(P){var B=P[0];return Z(B),T=T.slice(B.length),P}}function ue(){$(a)}function O(re){var P;for(re=re||[];P=J();)P!==!1&&re.push(P);return re}function J(){var re=W();if(!(p!=T.charAt(0)||y!=T.charAt(1))){for(var P=2;g!=T.charAt(P)&&(y!=T.charAt(P)||p!=T.charAt(P+1));)++P;if(P+=2,g===T.charAt(P-1))return ee("End of comment missing");var B=T.slice(2,P-2);return j+=2,Z(B),T=T.slice(P),j+=2,re({type:b,comment:B})}}function ne(){var re=W(),P=$(r);if(P){if(J(),!$(u))return ee("property missing ':'");var B=$(s),K=re({type:S,property:_(P[0].replace(t,g)),value:B?_(B[0].replace(t,g)):g});return $(c),K}}function xe(){var re=[];O(re);for(var P;P=ne();)P!==!1&&(re.push(P),O(re));return re}return ue(),xe()}function _(T){return T?T.replace(h,g):g}return jc=E,jc}var Eg;function DA(){if(Eg)return Va;Eg=1;var t=Va&&Va.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(Va,"__esModule",{value:!0}),Va.default=a;const i=t(MA());function a(r,u){let s=null;if(!r||typeof r!="string")return s;const c=(0,i.default)(r),h=typeof u=="function";return c.forEach(m=>{if(m.type!=="declaration")return;const{property:p,value:y}=m;h?u(p,y,m):y&&(s=s||{},s[p]=y)}),s}return Va}var $i={},Cg;function jA(){if(Cg)return $i;Cg=1,Object.defineProperty($i,"__esModule",{value:!0}),$i.camelCase=void 0;var t=/^--[a-zA-Z0-9_-]+$/,i=/-([a-z])/g,a=/^[^-]+$/,r=/^-(webkit|moz|ms|o|khtml)-/,u=/^-(ms)-/,s=function(p){return!p||a.test(p)||t.test(p)},c=function(p,y){return y.toUpperCase()},h=function(p,y){return"".concat(y,"-")},m=function(p,y){return y===void 0&&(y={}),s(p)?p:(p=p.toLowerCase(),y.reactCompat?p=p.replace(u,h):p=p.replace(r,h),p.replace(i,c))};return $i.camelCase=m,$i}var Pi,Tg;function OA(){if(Tg)return Pi;Tg=1;var t=Pi&&Pi.__importDefault||function(u){return u&&u.__esModule?u:{default:u}},i=t(DA()),a=jA();function r(u,s){var c={};return!u||typeof u!="string"||(0,i.default)(u,function(h,m){h&&m&&(c[(0,a.camelCase)(h,s)]=m)}),c}return r.default=r,Pi=r,Pi}var LA=OA();const BA=pf(LA),gy=yy("end"),Nf=yy("start");function yy(t){return i;function i(a){const r=a&&a.position&&a.position[t]||{};if(typeof r.line=="number"&&r.line>0&&typeof r.column=="number"&&r.column>0)return{line:r.line,column:r.column,offset:typeof r.offset=="number"&&r.offset>-1?r.offset:void 0}}}function HA(t){const i=Nf(t),a=gy(t);if(i&&a)return{start:i,end:a}}function nr(t){return!t||typeof t!="object"?"":"position"in t||"type"in t?Ng(t.position):"start"in t||"end"in t?Ng(t):"line"in t||"column"in t?tf(t):""}function tf(t){return zg(t&&t.line)+":"+zg(t&&t.column)}function Ng(t){return tf(t&&t.start)+"-"+tf(t&&t.end)}function zg(t){return t&&typeof t=="number"?t:1}class wn extends Error{constructor(i,a,r){super(),typeof a=="string"&&(r=a,a=void 0);let u="",s={},c=!1;if(a&&("line"in a&&"column"in a?s={place:a}:"start"in a&&"end"in a?s={place:a}:"type"in a?s={ancestors:[a],place:a.position}:s={...a}),typeof i=="string"?u=i:!s.cause&&i&&(c=!0,u=i.message,s.cause=i),!s.ruleId&&!s.source&&typeof r=="string"){const m=r.indexOf(":");m===-1?s.ruleId=r:(s.source=r.slice(0,m),s.ruleId=r.slice(m+1))}if(!s.place&&s.ancestors&&s.ancestors){const m=s.ancestors[s.ancestors.length-1];m&&(s.place=m.position)}const h=s.place&&"start"in s.place?s.place.start:s.place;this.ancestors=s.ancestors||void 0,this.cause=s.cause||void 0,this.column=h?h.column:void 0,this.fatal=void 0,this.file="",this.message=u,this.line=h?h.line:void 0,this.name=nr(s.place)||"1:1",this.place=s.place||void 0,this.reason=this.message,this.ruleId=s.ruleId||void 0,this.source=s.source||void 0,this.stack=c&&s.cause&&typeof s.cause.stack=="string"?s.cause.stack:"",this.actual=void 0,this.expected=void 0,this.note=void 0,this.url=void 0}}wn.prototype.file="";wn.prototype.name="";wn.prototype.reason="";wn.prototype.message="";wn.prototype.stack="";wn.prototype.column=void 0;wn.prototype.line=void 0;wn.prototype.ancestors=void 0;wn.prototype.cause=void 0;wn.prototype.fatal=void 0;wn.prototype.place=void 0;wn.prototype.ruleId=void 0;wn.prototype.source=void 0;const zf={}.hasOwnProperty,UA=new Map,qA=/[A-Z]/g,IA=new Set(["table","tbody","thead","tfoot","tr"]),VA=new Set(["td","th"]),xy="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function GA(t,i){if(!i||i.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const a=i.filePath||void 0;let r;if(i.development){if(typeof i.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");r=PA(a,i.jsxDEV)}else{if(typeof i.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof i.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");r=$A(a,i.jsx,i.jsxs)}const u={Fragment:i.Fragment,ancestors:[],components:i.components||{},create:r,elementAttributeNameCase:i.elementAttributeNameCase||"react",evaluater:i.createEvaluater?i.createEvaluater():void 0,filePath:a,ignoreInvalidStyle:i.ignoreInvalidStyle||!1,passKeys:i.passKeys!==!1,passNode:i.passNode||!1,schema:i.space==="svg"?Tf:_A,stylePropertyNameCase:i.stylePropertyNameCase||"dom",tableCellAlignToStyle:i.tableCellAlignToStyle!==!1},s=by(u,t,void 0);return s&&typeof s!="string"?s:u.create(t,u.Fragment,{children:s||void 0},void 0)}function by(t,i,a){if(i.type==="element")return YA(t,i,a);if(i.type==="mdxFlowExpression"||i.type==="mdxTextExpression")return XA(t,i);if(i.type==="mdxJsxFlowElement"||i.type==="mdxJsxTextElement")return FA(t,i,a);if(i.type==="mdxjsEsm")return QA(t,i);if(i.type==="root")return ZA(t,i,a);if(i.type==="text")return KA(t,i)}function YA(t,i,a){const r=t.schema;let u=r;i.tagName.toLowerCase()==="svg"&&r.space==="html"&&(u=Tf,t.schema=u),t.ancestors.push(i);const s=Sy(t,i.tagName,!1),c=JA(t,i);let h=Rf(t,i);return IA.has(i.tagName)&&(h=h.filter(function(m){return typeof m=="string"?!vA(m):!0})),vy(t,c,s,i),_f(c,h),t.ancestors.pop(),t.schema=r,t.create(i,s,c,a)}function XA(t,i){if(i.data&&i.data.estree&&t.evaluater){const r=i.data.estree.body[0];return r.type,t.evaluater.evaluateExpression(r.expression)}ir(t,i.position)}function QA(t,i){if(i.data&&i.data.estree&&t.evaluater)return t.evaluater.evaluateProgram(i.data.estree);ir(t,i.position)}function FA(t,i,a){const r=t.schema;let u=r;i.name==="svg"&&r.space==="html"&&(u=Tf,t.schema=u),t.ancestors.push(i);const s=i.name===null?t.Fragment:Sy(t,i.name,!0),c=WA(t,i),h=Rf(t,i);return vy(t,c,s,i),_f(c,h),t.ancestors.pop(),t.schema=r,t.create(i,s,c,a)}function ZA(t,i,a){const r={};return _f(r,Rf(t,i)),t.create(i,t.Fragment,r,a)}function KA(t,i){return i.value}function vy(t,i,a,r){typeof a!="string"&&a!==t.Fragment&&t.passNode&&(i.node=r)}function _f(t,i){if(i.length>0){const a=i.length>1?i:i[0];a&&(t.children=a)}}function $A(t,i,a){return r;function r(u,s,c,h){const p=Array.isArray(c.children)?a:i;return h?p(s,c,h):p(s,c)}}function PA(t,i){return a;function a(r,u,s,c){const h=Array.isArray(s.children),m=Nf(r);return i(u,s,c,h,{columnNumber:m?m.column-1:void 0,fileName:t,lineNumber:m?m.line:void 0},void 0)}}function JA(t,i){const a={};let r,u;for(u in i.properties)if(u!=="children"&&zf.call(i.properties,u)){const s=ek(t,u,i.properties[u]);if(s){const[c,h]=s;t.tableCellAlignToStyle&&c==="align"&&typeof h=="string"&&VA.has(i.tagName)?r=h:a[c]=h}}if(r){const s=a.style||(a.style={});s[t.stylePropertyNameCase==="css"?"text-align":"textAlign"]=r}return a}function WA(t,i){const a={};for(const r of i.attributes)if(r.type==="mdxJsxExpressionAttribute")if(r.data&&r.data.estree&&t.evaluater){const s=r.data.estree.body[0];s.type;const c=s.expression;c.type;const h=c.properties[0];h.type,Object.assign(a,t.evaluater.evaluateExpression(h.argument))}else ir(t,i.position);else{const u=r.name;let s;if(r.value&&typeof r.value=="object")if(r.value.data&&r.value.data.estree&&t.evaluater){const h=r.value.data.estree.body[0];h.type,s=t.evaluater.evaluateExpression(h.expression)}else ir(t,i.position);else s=r.value===null?!0:r.value;a[u]=s}return a}function Rf(t,i){const a=[];let r=-1;const u=t.passKeys?new Map:UA;for(;++r<i.children.length;){const s=i.children[r];let c;if(t.passKeys){const m=s.type==="element"?s.tagName:s.type==="mdxJsxFlowElement"||s.type==="mdxJsxTextElement"?s.name:void 0;if(m){const p=u.get(m)||0;c=m+"-"+p,u.set(m,p+1)}}const h=by(t,s,c);h!==void 0&&a.push(h)}return a}function ek(t,i,a){const r=TA(t.schema,i);if(!(a==null||typeof a=="number"&&Number.isNaN(a))){if(Array.isArray(a)&&(a=r.commaSeparated?mA(a):RA(a)),r.property==="style"){let u=typeof a=="object"?a:nk(t,String(a));return t.stylePropertyNameCase==="css"&&(u=tk(u)),["style",u]}return[t.elementAttributeNameCase==="react"&&r.space?kA[r.property]||r.property:r.attribute,a]}}function nk(t,i){try{return BA(i,{reactCompat:!0})}catch(a){if(t.ignoreInvalidStyle)return{};const r=a,u=new wn("Cannot parse `style` attribute",{ancestors:t.ancestors,cause:r,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw u.file=t.filePath||void 0,u.url=xy+"#cannot-parse-style-attribute",u}}function Sy(t,i,a){let r;if(!a)r={type:"Literal",value:i};else if(i.includes(".")){const u=i.split(".");let s=-1,c;for(;++s<u.length;){const h=vg(u[s])?{type:"Identifier",name:u[s]}:{type:"Literal",value:u[s]};c=c?{type:"MemberExpression",object:c,property:h,computed:!!(s&&h.type==="Literal"),optional:!1}:h}r=c}else r=vg(i)&&!/^[a-z]/.test(i)?{type:"Identifier",name:i}:{type:"Literal",value:i};if(r.type==="Literal"){const u=r.value;return zf.call(t.components,u)?t.components[u]:u}if(t.evaluater)return t.evaluater.evaluateExpression(r);ir(t)}function ir(t,i){const a=new wn("Cannot handle MDX estrees without `createEvaluater`",{ancestors:t.ancestors,place:i,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw a.file=t.filePath||void 0,a.url=xy+"#cannot-handle-mdx-estrees-without-createevaluater",a}function tk(t){const i={};let a;for(a in t)zf.call(t,a)&&(i[lk(a)]=t[a]);return i}function lk(t){let i=t.replace(qA,ak);return i.slice(0,3)==="ms-"&&(i="-"+i),i}function ak(t){return"-"+t.toLowerCase()}const Oc={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},ik={};function Mf(t,i){const a=ik,r=typeof a.includeImageAlt=="boolean"?a.includeImageAlt:!0,u=typeof a.includeHtml=="boolean"?a.includeHtml:!0;return wy(t,r,u)}function wy(t,i,a){if(rk(t)){if("value"in t)return t.type==="html"&&!a?"":t.value;if(i&&"alt"in t&&t.alt)return t.alt;if("children"in t)return _g(t.children,i,a)}return Array.isArray(t)?_g(t,i,a):""}function _g(t,i,a){const r=[];let u=-1;for(;++u<t.length;)r[u]=wy(t[u],i,a);return r.join("")}function rk(t){return!!(t&&typeof t=="object")}const Rg=document.createElement("i");function Df(t){const i="&"+t+";";Rg.innerHTML=i;const a=Rg.textContent;return a.charCodeAt(a.length-1)===59&&t!=="semi"||a===i?!1:a}function $n(t,i,a,r){const u=t.length;let s=0,c;if(i<0?i=-i>u?0:u+i:i=i>u?u:i,a=a>0?a:0,r.length<1e4)c=Array.from(r),c.unshift(i,a),t.splice(...c);else for(a&&t.splice(i,a);s<r.length;)c=r.slice(s,s+1e4),c.unshift(i,0),t.splice(...c),s+=1e4,i+=1e4}function ut(t,i){return t.length>0?($n(t,t.length,0,i),t):i}const Mg={}.hasOwnProperty;function Ay(t){const i={};let a=-1;for(;++a<t.length;)ok(i,t[a]);return i}function ok(t,i){let a;for(a in i){const u=(Mg.call(t,a)?t[a]:void 0)||(t[a]={}),s=i[a];let c;if(s)for(c in s){Mg.call(u,c)||(u[c]=[]);const h=s[c];uk(u[c],Array.isArray(h)?h:h?[h]:[])}}}function uk(t,i){let a=-1;const r=[];for(;++a<i.length;)(i[a].add==="after"?t:r).push(i[a]);$n(t,0,0,r)}function ky(t,i){const a=Number.parseInt(t,i);return a<9||a===11||a>13&&a<32||a>126&&a<160||a>55295&&a<57344||a>64975&&a<65008||(a&65535)===65535||(a&65535)===65534||a>1114111?"�":String.fromCodePoint(a)}function pt(t){return t.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const Tn=Nl(/[A-Za-z]/),Sn=Nl(/[\dA-Za-z]/),sk=Nl(/[#-'*+\--9=?A-Z^-~]/);function Fo(t){return t!==null&&(t<32||t===127)}const lf=Nl(/\d/),ck=Nl(/[\dA-Fa-f]/),fk=Nl(/[!-/:-@[-`{-~]/);function me(t){return t!==null&&t<-2}function Ze(t){return t!==null&&(t<0||t===32)}function _e(t){return t===-2||t===-1||t===32}const tu=Nl(new RegExp("\\p{P}|\\p{S}","u")),$l=Nl(/\s/);function Nl(t){return i;function i(a){return a!==null&&a>-1&&t.test(String.fromCharCode(a))}}function Ja(t){const i=[];let a=-1,r=0,u=0;for(;++a<t.length;){const s=t.charCodeAt(a);let c="";if(s===37&&Sn(t.charCodeAt(a+1))&&Sn(t.charCodeAt(a+2)))u=2;else if(s<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(s))||(c=String.fromCharCode(s));else if(s>55295&&s<57344){const h=t.charCodeAt(a+1);s<56320&&h>56319&&h<57344?(c=String.fromCharCode(s,h),u=1):c="�"}else c=String.fromCharCode(s);c&&(i.push(t.slice(r,a),encodeURIComponent(c)),r=a+u+1,c=""),u&&(a+=u,u=0)}return i.join("")+t.slice(r)}function Oe(t,i,a,r){const u=r?r-1:Number.POSITIVE_INFINITY;let s=0;return c;function c(m){return _e(m)?(t.enter(a),h(m)):i(m)}function h(m){return _e(m)&&s++<u?(t.consume(m),h):(t.exit(a),i(m))}}const dk={tokenize:hk};function hk(t){const i=t.attempt(this.parser.constructs.contentInitial,r,u);let a;return i;function r(h){if(h===null){t.consume(h);return}return t.enter("lineEnding"),t.consume(h),t.exit("lineEnding"),Oe(t,i,"linePrefix")}function u(h){return t.enter("paragraph"),s(h)}function s(h){const m=t.enter("chunkText",{contentType:"text",previous:a});return a&&(a.next=m),a=m,c(h)}function c(h){if(h===null){t.exit("chunkText"),t.exit("paragraph"),t.consume(h);return}return me(h)?(t.consume(h),t.exit("chunkText"),s):(t.consume(h),c)}}const pk={tokenize:mk},Dg={tokenize:gk};function mk(t){const i=this,a=[];let r=0,u,s,c;return h;function h(j){if(r<a.length){const Z=a[r];return i.containerState=Z[1],t.attempt(Z[0].continuation,m,p)(j)}return p(j)}function m(j){if(r++,i.containerState._closeFlow){i.containerState._closeFlow=void 0,u&&D();const Z=i.events.length;let W=Z,q;for(;W--;)if(i.events[W][0]==="exit"&&i.events[W][1].type==="chunkFlow"){q=i.events[W][1].end;break}N(r);let ee=Z;for(;ee<i.events.length;)i.events[ee][1].end={...q},ee++;return $n(i.events,W+1,0,i.events.slice(Z)),i.events.length=ee,p(j)}return h(j)}function p(j){if(r===a.length){if(!u)return b(j);if(u.currentConstruct&&u.currentConstruct.concrete)return E(j);i.interrupt=!!(u.currentConstruct&&!u._gfmTableDynamicInterruptHack)}return i.containerState={},t.check(Dg,y,g)(j)}function y(j){return u&&D(),N(r),b(j)}function g(j){return i.parser.lazy[i.now().line]=r!==a.length,c=i.now().offset,E(j)}function b(j){return i.containerState={},t.attempt(Dg,S,E)(j)}function S(j){return r++,a.push([i.currentConstruct,i.containerState]),b(j)}function E(j){if(j===null){u&&D(),N(0),t.consume(j);return}return u=u||i.parser.flow(i.now()),t.enter("chunkFlow",{_tokenizer:u,contentType:"flow",previous:s}),_(j)}function _(j){if(j===null){T(t.exit("chunkFlow"),!0),N(0),t.consume(j);return}return me(j)?(t.consume(j),T(t.exit("chunkFlow")),r=0,i.interrupt=void 0,h):(t.consume(j),_)}function T(j,Z){const W=i.sliceStream(j);if(Z&&W.push(null),j.previous=s,s&&(s.next=j),s=j,u.defineSkip(j.start),u.write(W),i.parser.lazy[j.start.line]){let q=u.events.length;for(;q--;)if(u.events[q][1].start.offset<c&&(!u.events[q][1].end||u.events[q][1].end.offset>c))return;const ee=i.events.length;let $=ee,ue,O;for(;$--;)if(i.events[$][0]==="exit"&&i.events[$][1].type==="chunkFlow"){if(ue){O=i.events[$][1].end;break}ue=!0}for(N(r),q=ee;q<i.events.length;)i.events[q][1].end={...O},q++;$n(i.events,$+1,0,i.events.slice(ee)),i.events.length=q}}function N(j){let Z=a.length;for(;Z-- >j;){const W=a[Z];i.containerState=W[1],W[0].exit.call(i,t)}a.length=j}function D(){u.write([null]),s=void 0,u=void 0,i.containerState._closeFlow=void 0}}function gk(t,i,a){return Oe(t,t.attempt(this.parser.constructs.document,i,a),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function Za(t){if(t===null||Ze(t)||$l(t))return 1;if(tu(t))return 2}function lu(t,i,a){const r=[];let u=-1;for(;++u<t.length;){const s=t[u].resolveAll;s&&!r.includes(s)&&(i=s(i,a),r.push(s))}return i}const af={name:"attention",resolveAll:yk,tokenize:xk};function yk(t,i){let a=-1,r,u,s,c,h,m,p,y;for(;++a<t.length;)if(t[a][0]==="enter"&&t[a][1].type==="attentionSequence"&&t[a][1]._close){for(r=a;r--;)if(t[r][0]==="exit"&&t[r][1].type==="attentionSequence"&&t[r][1]._open&&i.sliceSerialize(t[r][1]).charCodeAt(0)===i.sliceSerialize(t[a][1]).charCodeAt(0)){if((t[r][1]._close||t[a][1]._open)&&(t[a][1].end.offset-t[a][1].start.offset)%3&&!((t[r][1].end.offset-t[r][1].start.offset+t[a][1].end.offset-t[a][1].start.offset)%3))continue;m=t[r][1].end.offset-t[r][1].start.offset>1&&t[a][1].end.offset-t[a][1].start.offset>1?2:1;const g={...t[r][1].end},b={...t[a][1].start};jg(g,-m),jg(b,m),c={type:m>1?"strongSequence":"emphasisSequence",start:g,end:{...t[r][1].end}},h={type:m>1?"strongSequence":"emphasisSequence",start:{...t[a][1].start},end:b},s={type:m>1?"strongText":"emphasisText",start:{...t[r][1].end},end:{...t[a][1].start}},u={type:m>1?"strong":"emphasis",start:{...c.start},end:{...h.end}},t[r][1].end={...c.start},t[a][1].start={...h.end},p=[],t[r][1].end.offset-t[r][1].start.offset&&(p=ut(p,[["enter",t[r][1],i],["exit",t[r][1],i]])),p=ut(p,[["enter",u,i],["enter",c,i],["exit",c,i],["enter",s,i]]),p=ut(p,lu(i.parser.constructs.insideSpan.null,t.slice(r+1,a),i)),p=ut(p,[["exit",s,i],["enter",h,i],["exit",h,i],["exit",u,i]]),t[a][1].end.offset-t[a][1].start.offset?(y=2,p=ut(p,[["enter",t[a][1],i],["exit",t[a][1],i]])):y=0,$n(t,r-1,a-r+3,p),a=r+p.length-y-2;break}}for(a=-1;++a<t.length;)t[a][1].type==="attentionSequence"&&(t[a][1].type="data");return t}function xk(t,i){const a=this.parser.constructs.attentionMarkers.null,r=this.previous,u=Za(r);let s;return c;function c(m){return s=m,t.enter("attentionSequence"),h(m)}function h(m){if(m===s)return t.consume(m),h;const p=t.exit("attentionSequence"),y=Za(m),g=!y||y===2&&u||a.includes(m),b=!u||u===2&&y||a.includes(r);return p._open=!!(s===42?g:g&&(u||!b)),p._close=!!(s===42?b:b&&(y||!g)),i(m)}}function jg(t,i){t.column+=i,t.offset+=i,t._bufferIndex+=i}const bk={name:"autolink",tokenize:vk};function vk(t,i,a){let r=0;return u;function u(S){return t.enter("autolink"),t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.enter("autolinkProtocol"),s}function s(S){return Tn(S)?(t.consume(S),c):S===64?a(S):p(S)}function c(S){return S===43||S===45||S===46||Sn(S)?(r=1,h(S)):p(S)}function h(S){return S===58?(t.consume(S),r=0,m):(S===43||S===45||S===46||Sn(S))&&r++<32?(t.consume(S),h):(r=0,p(S))}function m(S){return S===62?(t.exit("autolinkProtocol"),t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.exit("autolink"),i):S===null||S===32||S===60||Fo(S)?a(S):(t.consume(S),m)}function p(S){return S===64?(t.consume(S),y):sk(S)?(t.consume(S),p):a(S)}function y(S){return Sn(S)?g(S):a(S)}function g(S){return S===46?(t.consume(S),r=0,y):S===62?(t.exit("autolinkProtocol").type="autolinkEmail",t.enter("autolinkMarker"),t.consume(S),t.exit("autolinkMarker"),t.exit("autolink"),i):b(S)}function b(S){if((S===45||Sn(S))&&r++<63){const E=S===45?b:g;return t.consume(S),E}return a(S)}}const fr={partial:!0,tokenize:Sk};function Sk(t,i,a){return r;function r(s){return _e(s)?Oe(t,u,"linePrefix")(s):u(s)}function u(s){return s===null||me(s)?i(s):a(s)}}const Ey={continuation:{tokenize:Ak},exit:kk,name:"blockQuote",tokenize:wk};function wk(t,i,a){const r=this;return u;function u(c){if(c===62){const h=r.containerState;return h.open||(t.enter("blockQuote",{_container:!0}),h.open=!0),t.enter("blockQuotePrefix"),t.enter("blockQuoteMarker"),t.consume(c),t.exit("blockQuoteMarker"),s}return a(c)}function s(c){return _e(c)?(t.enter("blockQuotePrefixWhitespace"),t.consume(c),t.exit("blockQuotePrefixWhitespace"),t.exit("blockQuotePrefix"),i):(t.exit("blockQuotePrefix"),i(c))}}function Ak(t,i,a){const r=this;return u;function u(c){return _e(c)?Oe(t,s,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(c):s(c)}function s(c){return t.attempt(Ey,i,a)(c)}}function kk(t){t.exit("blockQuote")}const Cy={name:"characterEscape",tokenize:Ek};function Ek(t,i,a){return r;function r(s){return t.enter("characterEscape"),t.enter("escapeMarker"),t.consume(s),t.exit("escapeMarker"),u}function u(s){return fk(s)?(t.enter("characterEscapeValue"),t.consume(s),t.exit("characterEscapeValue"),t.exit("characterEscape"),i):a(s)}}const Ty={name:"characterReference",tokenize:Ck};function Ck(t,i,a){const r=this;let u=0,s,c;return h;function h(g){return t.enter("characterReference"),t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),m}function m(g){return g===35?(t.enter("characterReferenceMarkerNumeric"),t.consume(g),t.exit("characterReferenceMarkerNumeric"),p):(t.enter("characterReferenceValue"),s=31,c=Sn,y(g))}function p(g){return g===88||g===120?(t.enter("characterReferenceMarkerHexadecimal"),t.consume(g),t.exit("characterReferenceMarkerHexadecimal"),t.enter("characterReferenceValue"),s=6,c=ck,y):(t.enter("characterReferenceValue"),s=7,c=lf,y(g))}function y(g){if(g===59&&u){const b=t.exit("characterReferenceValue");return c===Sn&&!Df(r.sliceSerialize(b))?a(g):(t.enter("characterReferenceMarker"),t.consume(g),t.exit("characterReferenceMarker"),t.exit("characterReference"),i)}return c(g)&&u++<s?(t.consume(g),y):a(g)}}const Og={partial:!0,tokenize:Nk},Lg={concrete:!0,name:"codeFenced",tokenize:Tk};function Tk(t,i,a){const r=this,u={partial:!0,tokenize:W};let s=0,c=0,h;return m;function m(q){return p(q)}function p(q){const ee=r.events[r.events.length-1];return s=ee&&ee[1].type==="linePrefix"?ee[2].sliceSerialize(ee[1],!0).length:0,h=q,t.enter("codeFenced"),t.enter("codeFencedFence"),t.enter("codeFencedFenceSequence"),y(q)}function y(q){return q===h?(c++,t.consume(q),y):c<3?a(q):(t.exit("codeFencedFenceSequence"),_e(q)?Oe(t,g,"whitespace")(q):g(q))}function g(q){return q===null||me(q)?(t.exit("codeFencedFence"),r.interrupt?i(q):t.check(Og,_,Z)(q)):(t.enter("codeFencedFenceInfo"),t.enter("chunkString",{contentType:"string"}),b(q))}function b(q){return q===null||me(q)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),g(q)):_e(q)?(t.exit("chunkString"),t.exit("codeFencedFenceInfo"),Oe(t,S,"whitespace")(q)):q===96&&q===h?a(q):(t.consume(q),b)}function S(q){return q===null||me(q)?g(q):(t.enter("codeFencedFenceMeta"),t.enter("chunkString",{contentType:"string"}),E(q))}function E(q){return q===null||me(q)?(t.exit("chunkString"),t.exit("codeFencedFenceMeta"),g(q)):q===96&&q===h?a(q):(t.consume(q),E)}function _(q){return t.attempt(u,Z,T)(q)}function T(q){return t.enter("lineEnding"),t.consume(q),t.exit("lineEnding"),N}function N(q){return s>0&&_e(q)?Oe(t,D,"linePrefix",s+1)(q):D(q)}function D(q){return q===null||me(q)?t.check(Og,_,Z)(q):(t.enter("codeFlowValue"),j(q))}function j(q){return q===null||me(q)?(t.exit("codeFlowValue"),D(q)):(t.consume(q),j)}function Z(q){return t.exit("codeFenced"),i(q)}function W(q,ee,$){let ue=0;return O;function O(P){return q.enter("lineEnding"),q.consume(P),q.exit("lineEnding"),J}function J(P){return q.enter("codeFencedFence"),_e(P)?Oe(q,ne,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(P):ne(P)}function ne(P){return P===h?(q.enter("codeFencedFenceSequence"),xe(P)):$(P)}function xe(P){return P===h?(ue++,q.consume(P),xe):ue>=c?(q.exit("codeFencedFenceSequence"),_e(P)?Oe(q,re,"whitespace")(P):re(P)):$(P)}function re(P){return P===null||me(P)?(q.exit("codeFencedFence"),ee(P)):$(P)}}}function Nk(t,i,a){const r=this;return u;function u(c){return c===null?a(c):(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s)}function s(c){return r.parser.lazy[r.now().line]?a(c):i(c)}}const Lc={name:"codeIndented",tokenize:_k},zk={partial:!0,tokenize:Rk};function _k(t,i,a){const r=this;return u;function u(p){return t.enter("codeIndented"),Oe(t,s,"linePrefix",5)(p)}function s(p){const y=r.events[r.events.length-1];return y&&y[1].type==="linePrefix"&&y[2].sliceSerialize(y[1],!0).length>=4?c(p):a(p)}function c(p){return p===null?m(p):me(p)?t.attempt(zk,c,m)(p):(t.enter("codeFlowValue"),h(p))}function h(p){return p===null||me(p)?(t.exit("codeFlowValue"),c(p)):(t.consume(p),h)}function m(p){return t.exit("codeIndented"),i(p)}}function Rk(t,i,a){const r=this;return u;function u(c){return r.parser.lazy[r.now().line]?a(c):me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),u):Oe(t,s,"linePrefix",5)(c)}function s(c){const h=r.events[r.events.length-1];return h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?i(c):me(c)?u(c):a(c)}}const Mk={name:"codeText",previous:jk,resolve:Dk,tokenize:Ok};function Dk(t){let i=t.length-4,a=3,r,u;if((t[a][1].type==="lineEnding"||t[a][1].type==="space")&&(t[i][1].type==="lineEnding"||t[i][1].type==="space")){for(r=a;++r<i;)if(t[r][1].type==="codeTextData"){t[a][1].type="codeTextPadding",t[i][1].type="codeTextPadding",a+=2,i-=2;break}}for(r=a-1,i++;++r<=i;)u===void 0?r!==i&&t[r][1].type!=="lineEnding"&&(u=r):(r===i||t[r][1].type==="lineEnding")&&(t[u][1].type="codeTextData",r!==u+2&&(t[u][1].end=t[r-1][1].end,t.splice(u+2,r-u-2),i-=r-u-2,r=u+2),u=void 0);return t}function jk(t){return t!==96||this.events[this.events.length-1][1].type==="characterEscape"}function Ok(t,i,a){let r=0,u,s;return c;function c(g){return t.enter("codeText"),t.enter("codeTextSequence"),h(g)}function h(g){return g===96?(t.consume(g),r++,h):(t.exit("codeTextSequence"),m(g))}function m(g){return g===null?a(g):g===32?(t.enter("space"),t.consume(g),t.exit("space"),m):g===96?(s=t.enter("codeTextSequence"),u=0,y(g)):me(g)?(t.enter("lineEnding"),t.consume(g),t.exit("lineEnding"),m):(t.enter("codeTextData"),p(g))}function p(g){return g===null||g===32||g===96||me(g)?(t.exit("codeTextData"),m(g)):(t.consume(g),p)}function y(g){return g===96?(t.consume(g),u++,y):u===r?(t.exit("codeTextSequence"),t.exit("codeText"),i(g)):(s.type="codeTextData",p(g))}}class Lk{constructor(i){this.left=i?[...i]:[],this.right=[]}get(i){if(i<0||i>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+i+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return i<this.left.length?this.left[i]:this.right[this.right.length-i+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(i,a){const r=a??Number.POSITIVE_INFINITY;return r<this.left.length?this.left.slice(i,r):i>this.left.length?this.right.slice(this.right.length-r+this.left.length,this.right.length-i+this.left.length).reverse():this.left.slice(i).concat(this.right.slice(this.right.length-r+this.left.length).reverse())}splice(i,a,r){const u=a||0;this.setCursor(Math.trunc(i));const s=this.right.splice(this.right.length-u,Number.POSITIVE_INFINITY);return r&&Ji(this.left,r),s.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(i){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(i)}pushMany(i){this.setCursor(Number.POSITIVE_INFINITY),Ji(this.left,i)}unshift(i){this.setCursor(0),this.right.push(i)}unshiftMany(i){this.setCursor(0),Ji(this.right,i.reverse())}setCursor(i){if(!(i===this.left.length||i>this.left.length&&this.right.length===0||i<0&&this.left.length===0))if(i<this.left.length){const a=this.left.splice(i,Number.POSITIVE_INFINITY);Ji(this.right,a.reverse())}else{const a=this.right.splice(this.left.length+this.right.length-i,Number.POSITIVE_INFINITY);Ji(this.left,a.reverse())}}}function Ji(t,i){let a=0;if(i.length<1e4)t.push(...i);else for(;a<i.length;)t.push(...i.slice(a,a+1e4)),a+=1e4}function Ny(t){const i={};let a=-1,r,u,s,c,h,m,p;const y=new Lk(t);for(;++a<y.length;){for(;a in i;)a=i[a];if(r=y.get(a),a&&r[1].type==="chunkFlow"&&y.get(a-1)[1].type==="listItemPrefix"&&(m=r[1]._tokenizer.events,s=0,s<m.length&&m[s][1].type==="lineEndingBlank"&&(s+=2),s<m.length&&m[s][1].type==="content"))for(;++s<m.length&&m[s][1].type!=="content";)m[s][1].type==="chunkText"&&(m[s][1]._isInFirstContentOfListItem=!0,s++);if(r[0]==="enter")r[1].contentType&&(Object.assign(i,Bk(y,a)),a=i[a],p=!0);else if(r[1]._container){for(s=a,u=void 0;s--;)if(c=y.get(s),c[1].type==="lineEnding"||c[1].type==="lineEndingBlank")c[0]==="enter"&&(u&&(y.get(u)[1].type="lineEndingBlank"),c[1].type="lineEnding",u=s);else if(!(c[1].type==="linePrefix"||c[1].type==="listItemIndent"))break;u&&(r[1].end={...y.get(u)[1].start},h=y.slice(u,a),h.unshift(r),y.splice(u,a-u+1,h))}}return $n(t,0,Number.POSITIVE_INFINITY,y.slice(0)),!p}function Bk(t,i){const a=t.get(i)[1],r=t.get(i)[2];let u=i-1;const s=[];let c=a._tokenizer;c||(c=r.parser[a.contentType](a.start),a._contentTypeTextTrailing&&(c._contentTypeTextTrailing=!0));const h=c.events,m=[],p={};let y,g,b=-1,S=a,E=0,_=0;const T=[_];for(;S;){for(;t.get(++u)[1]!==S;);s.push(u),S._tokenizer||(y=r.sliceStream(S),S.next||y.push(null),g&&c.defineSkip(S.start),S._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=!0),c.write(y),S._isInFirstContentOfListItem&&(c._gfmTasklistFirstContentOfListItem=void 0)),g=S,S=S.next}for(S=a;++b<h.length;)h[b][0]==="exit"&&h[b-1][0]==="enter"&&h[b][1].type===h[b-1][1].type&&h[b][1].start.line!==h[b][1].end.line&&(_=b+1,T.push(_),S._tokenizer=void 0,S.previous=void 0,S=S.next);for(c.events=[],S?(S._tokenizer=void 0,S.previous=void 0):T.pop(),b=T.length;b--;){const N=h.slice(T[b],T[b+1]),D=s.pop();m.push([D,D+N.length-1]),t.splice(D,2,N)}for(m.reverse(),b=-1;++b<m.length;)p[E+m[b][0]]=E+m[b][1],E+=m[b][1]-m[b][0]-1;return p}const Hk={resolve:qk,tokenize:Ik},Uk={partial:!0,tokenize:Vk};function qk(t){return Ny(t),t}function Ik(t,i){let a;return r;function r(h){return t.enter("content"),a=t.enter("chunkContent",{contentType:"content"}),u(h)}function u(h){return h===null?s(h):me(h)?t.check(Uk,c,s)(h):(t.consume(h),u)}function s(h){return t.exit("chunkContent"),t.exit("content"),i(h)}function c(h){return t.consume(h),t.exit("chunkContent"),a.next=t.enter("chunkContent",{contentType:"content",previous:a}),a=a.next,u}}function Vk(t,i,a){const r=this;return u;function u(c){return t.exit("chunkContent"),t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),Oe(t,s,"linePrefix")}function s(c){if(c===null||me(c))return a(c);const h=r.events[r.events.length-1];return!r.parser.constructs.disable.null.includes("codeIndented")&&h&&h[1].type==="linePrefix"&&h[2].sliceSerialize(h[1],!0).length>=4?i(c):t.interrupt(r.parser.constructs.flow,a,i)(c)}}function zy(t,i,a,r,u,s,c,h,m){const p=m||Number.POSITIVE_INFINITY;let y=0;return g;function g(N){return N===60?(t.enter(r),t.enter(u),t.enter(s),t.consume(N),t.exit(s),b):N===null||N===32||N===41||Fo(N)?a(N):(t.enter(r),t.enter(c),t.enter(h),t.enter("chunkString",{contentType:"string"}),_(N))}function b(N){return N===62?(t.enter(s),t.consume(N),t.exit(s),t.exit(u),t.exit(r),i):(t.enter(h),t.enter("chunkString",{contentType:"string"}),S(N))}function S(N){return N===62?(t.exit("chunkString"),t.exit(h),b(N)):N===null||N===60||me(N)?a(N):(t.consume(N),N===92?E:S)}function E(N){return N===60||N===62||N===92?(t.consume(N),S):S(N)}function _(N){return!y&&(N===null||N===41||Ze(N))?(t.exit("chunkString"),t.exit(h),t.exit(c),t.exit(r),i(N)):y<p&&N===40?(t.consume(N),y++,_):N===41?(t.consume(N),y--,_):N===null||N===32||N===40||Fo(N)?a(N):(t.consume(N),N===92?T:_)}function T(N){return N===40||N===41||N===92?(t.consume(N),_):_(N)}}function _y(t,i,a,r,u,s){const c=this;let h=0,m;return p;function p(S){return t.enter(r),t.enter(u),t.consume(S),t.exit(u),t.enter(s),y}function y(S){return h>999||S===null||S===91||S===93&&!m||S===94&&!h&&"_hiddenFootnoteSupport"in c.parser.constructs?a(S):S===93?(t.exit(s),t.enter(u),t.consume(S),t.exit(u),t.exit(r),i):me(S)?(t.enter("lineEnding"),t.consume(S),t.exit("lineEnding"),y):(t.enter("chunkString",{contentType:"string"}),g(S))}function g(S){return S===null||S===91||S===93||me(S)||h++>999?(t.exit("chunkString"),y(S)):(t.consume(S),m||(m=!_e(S)),S===92?b:g)}function b(S){return S===91||S===92||S===93?(t.consume(S),h++,g):g(S)}}function Ry(t,i,a,r,u,s){let c;return h;function h(b){return b===34||b===39||b===40?(t.enter(r),t.enter(u),t.consume(b),t.exit(u),c=b===40?41:b,m):a(b)}function m(b){return b===c?(t.enter(u),t.consume(b),t.exit(u),t.exit(r),i):(t.enter(s),p(b))}function p(b){return b===c?(t.exit(s),m(c)):b===null?a(b):me(b)?(t.enter("lineEnding"),t.consume(b),t.exit("lineEnding"),Oe(t,p,"linePrefix")):(t.enter("chunkString",{contentType:"string"}),y(b))}function y(b){return b===c||b===null||me(b)?(t.exit("chunkString"),p(b)):(t.consume(b),b===92?g:y)}function g(b){return b===c||b===92?(t.consume(b),y):y(b)}}function tr(t,i){let a;return r;function r(u){return me(u)?(t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),a=!0,r):_e(u)?Oe(t,r,a?"linePrefix":"lineSuffix")(u):i(u)}}const Gk={name:"definition",tokenize:Xk},Yk={partial:!0,tokenize:Qk};function Xk(t,i,a){const r=this;let u;return s;function s(S){return t.enter("definition"),c(S)}function c(S){return _y.call(r,t,h,a,"definitionLabel","definitionLabelMarker","definitionLabelString")(S)}function h(S){return u=pt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)),S===58?(t.enter("definitionMarker"),t.consume(S),t.exit("definitionMarker"),m):a(S)}function m(S){return Ze(S)?tr(t,p)(S):p(S)}function p(S){return zy(t,y,a,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(S)}function y(S){return t.attempt(Yk,g,g)(S)}function g(S){return _e(S)?Oe(t,b,"whitespace")(S):b(S)}function b(S){return S===null||me(S)?(t.exit("definition"),r.parser.defined.push(u),i(S)):a(S)}}function Qk(t,i,a){return r;function r(h){return Ze(h)?tr(t,u)(h):a(h)}function u(h){return Ry(t,s,a,"definitionTitle","definitionTitleMarker","definitionTitleString")(h)}function s(h){return _e(h)?Oe(t,c,"whitespace")(h):c(h)}function c(h){return h===null||me(h)?i(h):a(h)}}const Fk={name:"hardBreakEscape",tokenize:Zk};function Zk(t,i,a){return r;function r(s){return t.enter("hardBreakEscape"),t.consume(s),u}function u(s){return me(s)?(t.exit("hardBreakEscape"),i(s)):a(s)}}const Kk={name:"headingAtx",resolve:$k,tokenize:Pk};function $k(t,i){let a=t.length-2,r=3,u,s;return t[r][1].type==="whitespace"&&(r+=2),a-2>r&&t[a][1].type==="whitespace"&&(a-=2),t[a][1].type==="atxHeadingSequence"&&(r===a-1||a-4>r&&t[a-2][1].type==="whitespace")&&(a-=r+1===a?2:4),a>r&&(u={type:"atxHeadingText",start:t[r][1].start,end:t[a][1].end},s={type:"chunkText",start:t[r][1].start,end:t[a][1].end,contentType:"text"},$n(t,r,a-r+1,[["enter",u,i],["enter",s,i],["exit",s,i],["exit",u,i]])),t}function Pk(t,i,a){let r=0;return u;function u(y){return t.enter("atxHeading"),s(y)}function s(y){return t.enter("atxHeadingSequence"),c(y)}function c(y){return y===35&&r++<6?(t.consume(y),c):y===null||Ze(y)?(t.exit("atxHeadingSequence"),h(y)):a(y)}function h(y){return y===35?(t.enter("atxHeadingSequence"),m(y)):y===null||me(y)?(t.exit("atxHeading"),i(y)):_e(y)?Oe(t,h,"whitespace")(y):(t.enter("atxHeadingText"),p(y))}function m(y){return y===35?(t.consume(y),m):(t.exit("atxHeadingSequence"),h(y))}function p(y){return y===null||y===35||Ze(y)?(t.exit("atxHeadingText"),h(y)):(t.consume(y),p)}}const Jk=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Bg=["pre","script","style","textarea"],Wk={concrete:!0,name:"htmlFlow",resolveTo:tE,tokenize:lE},eE={partial:!0,tokenize:iE},nE={partial:!0,tokenize:aE};function tE(t){let i=t.length;for(;i--&&!(t[i][0]==="enter"&&t[i][1].type==="htmlFlow"););return i>1&&t[i-2][1].type==="linePrefix"&&(t[i][1].start=t[i-2][1].start,t[i+1][1].start=t[i-2][1].start,t.splice(i-2,2)),t}function lE(t,i,a){const r=this;let u,s,c,h,m;return p;function p(k){return y(k)}function y(k){return t.enter("htmlFlow"),t.enter("htmlFlowData"),t.consume(k),g}function g(k){return k===33?(t.consume(k),b):k===47?(t.consume(k),s=!0,_):k===63?(t.consume(k),u=3,r.interrupt?i:A):Tn(k)?(t.consume(k),c=String.fromCharCode(k),T):a(k)}function b(k){return k===45?(t.consume(k),u=2,S):k===91?(t.consume(k),u=5,h=0,E):Tn(k)?(t.consume(k),u=4,r.interrupt?i:A):a(k)}function S(k){return k===45?(t.consume(k),r.interrupt?i:A):a(k)}function E(k){const ae="CDATA[";return k===ae.charCodeAt(h++)?(t.consume(k),h===ae.length?r.interrupt?i:ne:E):a(k)}function _(k){return Tn(k)?(t.consume(k),c=String.fromCharCode(k),T):a(k)}function T(k){if(k===null||k===47||k===62||Ze(k)){const ae=k===47,se=c.toLowerCase();return!ae&&!s&&Bg.includes(se)?(u=1,r.interrupt?i(k):ne(k)):Jk.includes(c.toLowerCase())?(u=6,ae?(t.consume(k),N):r.interrupt?i(k):ne(k)):(u=7,r.interrupt&&!r.parser.lazy[r.now().line]?a(k):s?D(k):j(k))}return k===45||Sn(k)?(t.consume(k),c+=String.fromCharCode(k),T):a(k)}function N(k){return k===62?(t.consume(k),r.interrupt?i:ne):a(k)}function D(k){return _e(k)?(t.consume(k),D):O(k)}function j(k){return k===47?(t.consume(k),O):k===58||k===95||Tn(k)?(t.consume(k),Z):_e(k)?(t.consume(k),j):O(k)}function Z(k){return k===45||k===46||k===58||k===95||Sn(k)?(t.consume(k),Z):W(k)}function W(k){return k===61?(t.consume(k),q):_e(k)?(t.consume(k),W):j(k)}function q(k){return k===null||k===60||k===61||k===62||k===96?a(k):k===34||k===39?(t.consume(k),m=k,ee):_e(k)?(t.consume(k),q):$(k)}function ee(k){return k===m?(t.consume(k),m=null,ue):k===null||me(k)?a(k):(t.consume(k),ee)}function $(k){return k===null||k===34||k===39||k===47||k===60||k===61||k===62||k===96||Ze(k)?W(k):(t.consume(k),$)}function ue(k){return k===47||k===62||_e(k)?j(k):a(k)}function O(k){return k===62?(t.consume(k),J):a(k)}function J(k){return k===null||me(k)?ne(k):_e(k)?(t.consume(k),J):a(k)}function ne(k){return k===45&&u===2?(t.consume(k),B):k===60&&u===1?(t.consume(k),K):k===62&&u===4?(t.consume(k),R):k===63&&u===3?(t.consume(k),A):k===93&&u===5?(t.consume(k),ve):me(k)&&(u===6||u===7)?(t.exit("htmlFlowData"),t.check(eE,Y,xe)(k)):k===null||me(k)?(t.exit("htmlFlowData"),xe(k)):(t.consume(k),ne)}function xe(k){return t.check(nE,re,Y)(k)}function re(k){return t.enter("lineEnding"),t.consume(k),t.exit("lineEnding"),P}function P(k){return k===null||me(k)?xe(k):(t.enter("htmlFlowData"),ne(k))}function B(k){return k===45?(t.consume(k),A):ne(k)}function K(k){return k===47?(t.consume(k),c="",ie):ne(k)}function ie(k){if(k===62){const ae=c.toLowerCase();return Bg.includes(ae)?(t.consume(k),R):ne(k)}return Tn(k)&&c.length<8?(t.consume(k),c+=String.fromCharCode(k),ie):ne(k)}function ve(k){return k===93?(t.consume(k),A):ne(k)}function A(k){return k===62?(t.consume(k),R):k===45&&u===2?(t.consume(k),A):ne(k)}function R(k){return k===null||me(k)?(t.exit("htmlFlowData"),Y(k)):(t.consume(k),R)}function Y(k){return t.exit("htmlFlow"),i(k)}}function aE(t,i,a){const r=this;return u;function u(c){return me(c)?(t.enter("lineEnding"),t.consume(c),t.exit("lineEnding"),s):a(c)}function s(c){return r.parser.lazy[r.now().line]?a(c):i(c)}}function iE(t,i,a){return r;function r(u){return t.enter("lineEnding"),t.consume(u),t.exit("lineEnding"),t.attempt(fr,i,a)}}const rE={name:"htmlText",tokenize:oE};function oE(t,i,a){const r=this;let u,s,c;return h;function h(A){return t.enter("htmlText"),t.enter("htmlTextData"),t.consume(A),m}function m(A){return A===33?(t.consume(A),p):A===47?(t.consume(A),W):A===63?(t.consume(A),j):Tn(A)?(t.consume(A),$):a(A)}function p(A){return A===45?(t.consume(A),y):A===91?(t.consume(A),s=0,E):Tn(A)?(t.consume(A),D):a(A)}function y(A){return A===45?(t.consume(A),S):a(A)}function g(A){return A===null?a(A):A===45?(t.consume(A),b):me(A)?(c=g,K(A)):(t.consume(A),g)}function b(A){return A===45?(t.consume(A),S):g(A)}function S(A){return A===62?B(A):A===45?b(A):g(A)}function E(A){const R="CDATA[";return A===R.charCodeAt(s++)?(t.consume(A),s===R.length?_:E):a(A)}function _(A){return A===null?a(A):A===93?(t.consume(A),T):me(A)?(c=_,K(A)):(t.consume(A),_)}function T(A){return A===93?(t.consume(A),N):_(A)}function N(A){return A===62?B(A):A===93?(t.consume(A),N):_(A)}function D(A){return A===null||A===62?B(A):me(A)?(c=D,K(A)):(t.consume(A),D)}function j(A){return A===null?a(A):A===63?(t.consume(A),Z):me(A)?(c=j,K(A)):(t.consume(A),j)}function Z(A){return A===62?B(A):j(A)}function W(A){return Tn(A)?(t.consume(A),q):a(A)}function q(A){return A===45||Sn(A)?(t.consume(A),q):ee(A)}function ee(A){return me(A)?(c=ee,K(A)):_e(A)?(t.consume(A),ee):B(A)}function $(A){return A===45||Sn(A)?(t.consume(A),$):A===47||A===62||Ze(A)?ue(A):a(A)}function ue(A){return A===47?(t.consume(A),B):A===58||A===95||Tn(A)?(t.consume(A),O):me(A)?(c=ue,K(A)):_e(A)?(t.consume(A),ue):B(A)}function O(A){return A===45||A===46||A===58||A===95||Sn(A)?(t.consume(A),O):J(A)}function J(A){return A===61?(t.consume(A),ne):me(A)?(c=J,K(A)):_e(A)?(t.consume(A),J):ue(A)}function ne(A){return A===null||A===60||A===61||A===62||A===96?a(A):A===34||A===39?(t.consume(A),u=A,xe):me(A)?(c=ne,K(A)):_e(A)?(t.consume(A),ne):(t.consume(A),re)}function xe(A){return A===u?(t.consume(A),u=void 0,P):A===null?a(A):me(A)?(c=xe,K(A)):(t.consume(A),xe)}function re(A){return A===null||A===34||A===39||A===60||A===61||A===96?a(A):A===47||A===62||Ze(A)?ue(A):(t.consume(A),re)}function P(A){return A===47||A===62||Ze(A)?ue(A):a(A)}function B(A){return A===62?(t.consume(A),t.exit("htmlTextData"),t.exit("htmlText"),i):a(A)}function K(A){return t.exit("htmlTextData"),t.enter("lineEnding"),t.consume(A),t.exit("lineEnding"),ie}function ie(A){return _e(A)?Oe(t,ve,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(A):ve(A)}function ve(A){return t.enter("htmlTextData"),c(A)}}const jf={name:"labelEnd",resolveAll:fE,resolveTo:dE,tokenize:hE},uE={tokenize:pE},sE={tokenize:mE},cE={tokenize:gE};function fE(t){let i=-1;const a=[];for(;++i<t.length;){const r=t[i][1];if(a.push(t[i]),r.type==="labelImage"||r.type==="labelLink"||r.type==="labelEnd"){const u=r.type==="labelImage"?4:2;r.type="data",i+=u}}return t.length!==a.length&&$n(t,0,t.length,a),t}function dE(t,i){let a=t.length,r=0,u,s,c,h;for(;a--;)if(u=t[a][1],s){if(u.type==="link"||u.type==="labelLink"&&u._inactive)break;t[a][0]==="enter"&&u.type==="labelLink"&&(u._inactive=!0)}else if(c){if(t[a][0]==="enter"&&(u.type==="labelImage"||u.type==="labelLink")&&!u._balanced&&(s=a,u.type!=="labelLink")){r=2;break}}else u.type==="labelEnd"&&(c=a);const m={type:t[s][1].type==="labelLink"?"link":"image",start:{...t[s][1].start},end:{...t[t.length-1][1].end}},p={type:"label",start:{...t[s][1].start},end:{...t[c][1].end}},y={type:"labelText",start:{...t[s+r+2][1].end},end:{...t[c-2][1].start}};return h=[["enter",m,i],["enter",p,i]],h=ut(h,t.slice(s+1,s+r+3)),h=ut(h,[["enter",y,i]]),h=ut(h,lu(i.parser.constructs.insideSpan.null,t.slice(s+r+4,c-3),i)),h=ut(h,[["exit",y,i],t[c-2],t[c-1],["exit",p,i]]),h=ut(h,t.slice(c+1)),h=ut(h,[["exit",m,i]]),$n(t,s,t.length,h),t}function hE(t,i,a){const r=this;let u=r.events.length,s,c;for(;u--;)if((r.events[u][1].type==="labelImage"||r.events[u][1].type==="labelLink")&&!r.events[u][1]._balanced){s=r.events[u][1];break}return h;function h(b){return s?s._inactive?g(b):(c=r.parser.defined.includes(pt(r.sliceSerialize({start:s.end,end:r.now()}))),t.enter("labelEnd"),t.enter("labelMarker"),t.consume(b),t.exit("labelMarker"),t.exit("labelEnd"),m):a(b)}function m(b){return b===40?t.attempt(uE,y,c?y:g)(b):b===91?t.attempt(sE,y,c?p:g)(b):c?y(b):g(b)}function p(b){return t.attempt(cE,y,g)(b)}function y(b){return i(b)}function g(b){return s._balanced=!0,a(b)}}function pE(t,i,a){return r;function r(g){return t.enter("resource"),t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),u}function u(g){return Ze(g)?tr(t,s)(g):s(g)}function s(g){return g===41?y(g):zy(t,c,h,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(g)}function c(g){return Ze(g)?tr(t,m)(g):y(g)}function h(g){return a(g)}function m(g){return g===34||g===39||g===40?Ry(t,p,a,"resourceTitle","resourceTitleMarker","resourceTitleString")(g):y(g)}function p(g){return Ze(g)?tr(t,y)(g):y(g)}function y(g){return g===41?(t.enter("resourceMarker"),t.consume(g),t.exit("resourceMarker"),t.exit("resource"),i):a(g)}}function mE(t,i,a){const r=this;return u;function u(h){return _y.call(r,t,s,c,"reference","referenceMarker","referenceString")(h)}function s(h){return r.parser.defined.includes(pt(r.sliceSerialize(r.events[r.events.length-1][1]).slice(1,-1)))?i(h):a(h)}function c(h){return a(h)}}function gE(t,i,a){return r;function r(s){return t.enter("reference"),t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),u}function u(s){return s===93?(t.enter("referenceMarker"),t.consume(s),t.exit("referenceMarker"),t.exit("reference"),i):a(s)}}const yE={name:"labelStartImage",resolveAll:jf.resolveAll,tokenize:xE};function xE(t,i,a){const r=this;return u;function u(h){return t.enter("labelImage"),t.enter("labelImageMarker"),t.consume(h),t.exit("labelImageMarker"),s}function s(h){return h===91?(t.enter("labelMarker"),t.consume(h),t.exit("labelMarker"),t.exit("labelImage"),c):a(h)}function c(h){return h===94&&"_hiddenFootnoteSupport"in r.parser.constructs?a(h):i(h)}}const bE={name:"labelStartLink",resolveAll:jf.resolveAll,tokenize:vE};function vE(t,i,a){const r=this;return u;function u(c){return t.enter("labelLink"),t.enter("labelMarker"),t.consume(c),t.exit("labelMarker"),t.exit("labelLink"),s}function s(c){return c===94&&"_hiddenFootnoteSupport"in r.parser.constructs?a(c):i(c)}}const Bc={name:"lineEnding",tokenize:SE};function SE(t,i){return a;function a(r){return t.enter("lineEnding"),t.consume(r),t.exit("lineEnding"),Oe(t,i,"linePrefix")}}const Vo={name:"thematicBreak",tokenize:wE};function wE(t,i,a){let r=0,u;return s;function s(p){return t.enter("thematicBreak"),c(p)}function c(p){return u=p,h(p)}function h(p){return p===u?(t.enter("thematicBreakSequence"),m(p)):r>=3&&(p===null||me(p))?(t.exit("thematicBreak"),i(p)):a(p)}function m(p){return p===u?(t.consume(p),r++,m):(t.exit("thematicBreakSequence"),_e(p)?Oe(t,h,"whitespace")(p):h(p))}}const Hn={continuation:{tokenize:CE},exit:NE,name:"list",tokenize:EE},AE={partial:!0,tokenize:zE},kE={partial:!0,tokenize:TE};function EE(t,i,a){const r=this,u=r.events[r.events.length-1];let s=u&&u[1].type==="linePrefix"?u[2].sliceSerialize(u[1],!0).length:0,c=0;return h;function h(S){const E=r.containerState.type||(S===42||S===43||S===45?"listUnordered":"listOrdered");if(E==="listUnordered"?!r.containerState.marker||S===r.containerState.marker:lf(S)){if(r.containerState.type||(r.containerState.type=E,t.enter(E,{_container:!0})),E==="listUnordered")return t.enter("listItemPrefix"),S===42||S===45?t.check(Vo,a,p)(S):p(S);if(!r.interrupt||S===49)return t.enter("listItemPrefix"),t.enter("listItemValue"),m(S)}return a(S)}function m(S){return lf(S)&&++c<10?(t.consume(S),m):(!r.interrupt||c<2)&&(r.containerState.marker?S===r.containerState.marker:S===41||S===46)?(t.exit("listItemValue"),p(S)):a(S)}function p(S){return t.enter("listItemMarker"),t.consume(S),t.exit("listItemMarker"),r.containerState.marker=r.containerState.marker||S,t.check(fr,r.interrupt?a:y,t.attempt(AE,b,g))}function y(S){return r.containerState.initialBlankLine=!0,s++,b(S)}function g(S){return _e(S)?(t.enter("listItemPrefixWhitespace"),t.consume(S),t.exit("listItemPrefixWhitespace"),b):a(S)}function b(S){return r.containerState.size=s+r.sliceSerialize(t.exit("listItemPrefix"),!0).length,i(S)}}function CE(t,i,a){const r=this;return r.containerState._closeFlow=void 0,t.check(fr,u,s);function u(h){return r.containerState.furtherBlankLines=r.containerState.furtherBlankLines||r.containerState.initialBlankLine,Oe(t,i,"listItemIndent",r.containerState.size+1)(h)}function s(h){return r.containerState.furtherBlankLines||!_e(h)?(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,c(h)):(r.containerState.furtherBlankLines=void 0,r.containerState.initialBlankLine=void 0,t.attempt(kE,i,c)(h))}function c(h){return r.containerState._closeFlow=!0,r.interrupt=void 0,Oe(t,t.attempt(Hn,i,a),"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(h)}}function TE(t,i,a){const r=this;return Oe(t,u,"listItemIndent",r.containerState.size+1);function u(s){const c=r.events[r.events.length-1];return c&&c[1].type==="listItemIndent"&&c[2].sliceSerialize(c[1],!0).length===r.containerState.size?i(s):a(s)}}function NE(t){t.exit(this.containerState.type)}function zE(t,i,a){const r=this;return Oe(t,u,"listItemPrefixWhitespace",r.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function u(s){const c=r.events[r.events.length-1];return!_e(s)&&c&&c[1].type==="listItemPrefixWhitespace"?i(s):a(s)}}const Hg={name:"setextUnderline",resolveTo:_E,tokenize:RE};function _E(t,i){let a=t.length,r,u,s;for(;a--;)if(t[a][0]==="enter"){if(t[a][1].type==="content"){r=a;break}t[a][1].type==="paragraph"&&(u=a)}else t[a][1].type==="content"&&t.splice(a,1),!s&&t[a][1].type==="definition"&&(s=a);const c={type:"setextHeading",start:{...t[r][1].start},end:{...t[t.length-1][1].end}};return t[u][1].type="setextHeadingText",s?(t.splice(u,0,["enter",c,i]),t.splice(s+1,0,["exit",t[r][1],i]),t[r][1].end={...t[s][1].end}):t[r][1]=c,t.push(["exit",c,i]),t}function RE(t,i,a){const r=this;let u;return s;function s(p){let y=r.events.length,g;for(;y--;)if(r.events[y][1].type!=="lineEnding"&&r.events[y][1].type!=="linePrefix"&&r.events[y][1].type!=="content"){g=r.events[y][1].type==="paragraph";break}return!r.parser.lazy[r.now().line]&&(r.interrupt||g)?(t.enter("setextHeadingLine"),u=p,c(p)):a(p)}function c(p){return t.enter("setextHeadingLineSequence"),h(p)}function h(p){return p===u?(t.consume(p),h):(t.exit("setextHeadingLineSequence"),_e(p)?Oe(t,m,"lineSuffix")(p):m(p))}function m(p){return p===null||me(p)?(t.exit("setextHeadingLine"),i(p)):a(p)}}const ME={tokenize:DE};function DE(t){const i=this,a=t.attempt(fr,r,t.attempt(this.parser.constructs.flowInitial,u,Oe(t,t.attempt(this.parser.constructs.flow,u,t.attempt(Hk,u)),"linePrefix")));return a;function r(s){if(s===null){t.consume(s);return}return t.enter("lineEndingBlank"),t.consume(s),t.exit("lineEndingBlank"),i.currentConstruct=void 0,a}function u(s){if(s===null){t.consume(s);return}return t.enter("lineEnding"),t.consume(s),t.exit("lineEnding"),i.currentConstruct=void 0,a}}const jE={resolveAll:Dy()},OE=My("string"),LE=My("text");function My(t){return{resolveAll:Dy(t==="text"?BE:void 0),tokenize:i};function i(a){const r=this,u=this.parser.constructs[t],s=a.attempt(u,c,h);return c;function c(y){return p(y)?s(y):h(y)}function h(y){if(y===null){a.consume(y);return}return a.enter("data"),a.consume(y),m}function m(y){return p(y)?(a.exit("data"),s(y)):(a.consume(y),m)}function p(y){if(y===null)return!0;const g=u[y];let b=-1;if(g)for(;++b<g.length;){const S=g[b];if(!S.previous||S.previous.call(r,r.previous))return!0}return!1}}}function Dy(t){return i;function i(a,r){let u=-1,s;for(;++u<=a.length;)s===void 0?a[u]&&a[u][1].type==="data"&&(s=u,u++):(!a[u]||a[u][1].type!=="data")&&(u!==s+2&&(a[s][1].end=a[u-1][1].end,a.splice(s+2,u-s-2),u=s+2),s=void 0);return t?t(a,r):a}}function BE(t,i){let a=0;for(;++a<=t.length;)if((a===t.length||t[a][1].type==="lineEnding")&&t[a-1][1].type==="data"){const r=t[a-1][1],u=i.sliceStream(r);let s=u.length,c=-1,h=0,m;for(;s--;){const p=u[s];if(typeof p=="string"){for(c=p.length;p.charCodeAt(c-1)===32;)h++,c--;if(c)break;c=-1}else if(p===-2)m=!0,h++;else if(p!==-1){s++;break}}if(i._contentTypeTextTrailing&&a===t.length&&(h=0),h){const p={type:a===t.length||m||h<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:s?c:r.start._bufferIndex+c,_index:r.start._index+s,line:r.end.line,column:r.end.column-h,offset:r.end.offset-h},end:{...r.end}};r.end={...p.start},r.start.offset===r.end.offset?Object.assign(r,p):(t.splice(a,0,["enter",p,i],["exit",p,i]),a+=2)}a++}return t}const HE={42:Hn,43:Hn,45:Hn,48:Hn,49:Hn,50:Hn,51:Hn,52:Hn,53:Hn,54:Hn,55:Hn,56:Hn,57:Hn,62:Ey},UE={91:Gk},qE={[-2]:Lc,[-1]:Lc,32:Lc},IE={35:Kk,42:Vo,45:[Hg,Vo],60:Wk,61:Hg,95:Vo,96:Lg,126:Lg},VE={38:Ty,92:Cy},GE={[-5]:Bc,[-4]:Bc,[-3]:Bc,33:yE,38:Ty,42:af,60:[bk,rE],91:bE,92:[Fk,Cy],93:jf,95:af,96:Mk},YE={null:[af,jE]},XE={null:[42,95]},QE={null:[]},FE=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:XE,contentInitial:UE,disable:QE,document:HE,flow:IE,flowInitial:qE,insideSpan:YE,string:VE,text:GE},Symbol.toStringTag,{value:"Module"}));function ZE(t,i,a){let r={_bufferIndex:-1,_index:0,line:a&&a.line||1,column:a&&a.column||1,offset:a&&a.offset||0};const u={},s=[];let c=[],h=[];const m={attempt:ee(W),check:ee(q),consume:D,enter:j,exit:Z,interrupt:ee(q,{interrupt:!0})},p={code:null,containerState:{},defineSkip:_,events:[],now:E,parser:t,previous:null,sliceSerialize:b,sliceStream:S,write:g};let y=i.tokenize.call(p,m);return i.resolveAll&&s.push(i),p;function g(J){return c=ut(c,J),T(),c[c.length-1]!==null?[]:($(i,0),p.events=lu(s,p.events,p),p.events)}function b(J,ne){return $E(S(J),ne)}function S(J){return KE(c,J)}function E(){const{_bufferIndex:J,_index:ne,line:xe,column:re,offset:P}=r;return{_bufferIndex:J,_index:ne,line:xe,column:re,offset:P}}function _(J){u[J.line]=J.column,O()}function T(){let J;for(;r._index<c.length;){const ne=c[r._index];if(typeof ne=="string")for(J=r._index,r._bufferIndex<0&&(r._bufferIndex=0);r._index===J&&r._bufferIndex<ne.length;)N(ne.charCodeAt(r._bufferIndex));else N(ne)}}function N(J){y=y(J)}function D(J){me(J)?(r.line++,r.column=1,r.offset+=J===-3?2:1,O()):J!==-1&&(r.column++,r.offset++),r._bufferIndex<0?r._index++:(r._bufferIndex++,r._bufferIndex===c[r._index].length&&(r._bufferIndex=-1,r._index++)),p.previous=J}function j(J,ne){const xe=ne||{};return xe.type=J,xe.start=E(),p.events.push(["enter",xe,p]),h.push(xe),xe}function Z(J){const ne=h.pop();return ne.end=E(),p.events.push(["exit",ne,p]),ne}function W(J,ne){$(J,ne.from)}function q(J,ne){ne.restore()}function ee(J,ne){return xe;function xe(re,P,B){let K,ie,ve,A;return Array.isArray(re)?Y(re):"tokenize"in re?Y([re]):R(re);function R(oe){return Ae;function Ae(Xe){const be=Xe!==null&&oe[Xe],An=Xe!==null&&oe.null,Nn=[...Array.isArray(be)?be:be?[be]:[],...Array.isArray(An)?An:An?[An]:[]];return Y(Nn)(Xe)}}function Y(oe){return K=oe,ie=0,oe.length===0?B:k(oe[ie])}function k(oe){return Ae;function Ae(Xe){return A=ue(),ve=oe,oe.partial||(p.currentConstruct=oe),oe.name&&p.parser.constructs.disable.null.includes(oe.name)?se():oe.tokenize.call(ne?Object.assign(Object.create(p),ne):p,m,ae,se)(Xe)}}function ae(oe){return J(ve,A),P}function se(oe){return A.restore(),++ie<K.length?k(K[ie]):B}}}function $(J,ne){J.resolveAll&&!s.includes(J)&&s.push(J),J.resolve&&$n(p.events,ne,p.events.length-ne,J.resolve(p.events.slice(ne),p)),J.resolveTo&&(p.events=J.resolveTo(p.events,p))}function ue(){const J=E(),ne=p.previous,xe=p.currentConstruct,re=p.events.length,P=Array.from(h);return{from:re,restore:B};function B(){r=J,p.previous=ne,p.currentConstruct=xe,p.events.length=re,h=P,O()}}function O(){r.line in u&&r.column<2&&(r.column=u[r.line],r.offset+=u[r.line]-1)}}function KE(t,i){const a=i.start._index,r=i.start._bufferIndex,u=i.end._index,s=i.end._bufferIndex;let c;if(a===u)c=[t[a].slice(r,s)];else{if(c=t.slice(a,u),r>-1){const h=c[0];typeof h=="string"?c[0]=h.slice(r):c.shift()}s>0&&c.push(t[u].slice(0,s))}return c}function $E(t,i){let a=-1;const r=[];let u;for(;++a<t.length;){const s=t[a];let c;if(typeof s=="string")c=s;else switch(s){case-5:{c="\r";break}case-4:{c=`
`;break}case-3:{c=`\r
`;break}case-2:{c=i?" ":"	";break}case-1:{if(!i&&u)continue;c=" ";break}default:c=String.fromCharCode(s)}u=s===-2,r.push(c)}return r.join("")}function PE(t){const r={constructs:Ay([FE,...(t||{}).extensions||[]]),content:u(dk),defined:[],document:u(pk),flow:u(ME),lazy:{},string:u(OE),text:u(LE)};return r;function u(s){return c;function c(h){return ZE(r,s,h)}}}function JE(t){for(;!Ny(t););return t}const Ug=/[\0\t\n\r]/g;function WE(){let t=1,i="",a=!0,r;return u;function u(s,c,h){const m=[];let p,y,g,b,S;for(s=i+(typeof s=="string"?s.toString():new TextDecoder(c||void 0).decode(s)),g=0,i="",a&&(s.charCodeAt(0)===65279&&g++,a=void 0);g<s.length;){if(Ug.lastIndex=g,p=Ug.exec(s),b=p&&p.index!==void 0?p.index:s.length,S=s.charCodeAt(b),!p){i=s.slice(g);break}if(S===10&&g===b&&r)m.push(-3),r=void 0;else switch(r&&(m.push(-5),r=void 0),g<b&&(m.push(s.slice(g,b)),t+=b-g),S){case 0:{m.push(65533),t++;break}case 9:{for(y=Math.ceil(t/4)*4,m.push(-2);t++<y;)m.push(-1);break}case 10:{m.push(-4),t=1;break}default:r=!0,t=1}g=b+1}return h&&(r&&m.push(-5),i&&m.push(i),m.push(null)),m}}const e3=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function n3(t){return t.replace(e3,t3)}function t3(t,i,a){if(i)return i;if(a.charCodeAt(0)===35){const u=a.charCodeAt(1),s=u===120||u===88;return ky(a.slice(s?2:1),s?16:10)}return Df(a)||t}const jy={}.hasOwnProperty;function l3(t,i,a){return i&&typeof i=="object"&&(a=i,i=void 0),a3(a)(JE(PE(a).document().write(WE()(t,i,!0))))}function a3(t){const i={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:s(ta),autolinkProtocol:ue,autolinkEmail:ue,atxHeading:s(ea),blockQuote:s(An),characterEscape:ue,characterReference:ue,codeFenced:s(Nn),codeFencedFenceInfo:c,codeFencedFenceMeta:c,codeIndented:s(Nn,c),codeText:s(gt,c),codeTextData:ue,data:ue,codeFlowValue:ue,definition:s(Kt),definitionDestinationString:c,definitionLabelString:c,definitionTitleString:c,emphasis:s(zn),hardBreakEscape:s(na),hardBreakTrailing:s(na),htmlFlow:s(pr,c),htmlFlowData:ue,htmlText:s(pr,c),htmlTextData:ue,image:s(mr),label:c,link:s(ta),listItem:s(ei),listItemValue:b,listOrdered:s(la,g),listUnordered:s(la),paragraph:s(uu),reference:k,referenceString:c,resourceDestinationString:c,resourceTitleString:c,setextHeading:s(ea),strong:s(su),thematicBreak:s(cu)},exit:{atxHeading:m(),atxHeadingSequence:W,autolink:m(),autolinkEmail:be,autolinkProtocol:Xe,blockQuote:m(),characterEscapeValue:O,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:oe,characterReference:Ae,codeFenced:m(T),codeFencedFence:_,codeFencedFenceInfo:S,codeFencedFenceMeta:E,codeFlowValue:O,codeIndented:m(N),codeText:m(P),codeTextData:O,data:O,definition:m(),definitionDestinationString:Z,definitionLabelString:D,definitionTitleString:j,emphasis:m(),hardBreakEscape:m(ne),hardBreakTrailing:m(ne),htmlFlow:m(xe),htmlFlowData:O,htmlText:m(re),htmlTextData:O,image:m(K),label:ve,labelText:ie,lineEnding:J,link:m(B),listItem:m(),listOrdered:m(),listUnordered:m(),paragraph:m(),referenceString:ae,resourceDestinationString:A,resourceTitleString:R,resource:Y,setextHeading:m($),setextHeadingLineSequence:ee,setextHeadingText:q,strong:m(),thematicBreak:m()}};Oy(i,(t||{}).mdastExtensions||[]);const a={};return r;function r(X){let le={type:"root",children:[]};const ye={stack:[le],tokenStack:[],config:i,enter:h,exit:p,buffer:c,resume:y,data:a},Te=[];let Ue=-1;for(;++Ue<X.length;)if(X[Ue][1].type==="listOrdered"||X[Ue][1].type==="listUnordered")if(X[Ue][0]==="enter")Te.push(Ue);else{const qn=Te.pop();Ue=u(X,qn,Ue)}for(Ue=-1;++Ue<X.length;){const qn=i[X[Ue][0]];jy.call(qn,X[Ue][1].type)&&qn[X[Ue][1].type].call(Object.assign({sliceSerialize:X[Ue][2].sliceSerialize},ye),X[Ue][1])}if(ye.tokenStack.length>0){const qn=ye.tokenStack[ye.tokenStack.length-1];(qn[1]||qg).call(ye,void 0,qn[0])}for(le.position={start:kl(X.length>0?X[0][1].start:{line:1,column:1,offset:0}),end:kl(X.length>0?X[X.length-2][1].end:{line:1,column:1,offset:0})},Ue=-1;++Ue<i.transforms.length;)le=i.transforms[Ue](le)||le;return le}function u(X,le,ye){let Te=le-1,Ue=-1,qn=!1,Et,En,cn,_n;for(;++Te<=ye;){const Qe=X[Te];switch(Qe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{Qe[0]==="enter"?Ue++:Ue--,_n=void 0;break}case"lineEndingBlank":{Qe[0]==="enter"&&(Et&&!_n&&!Ue&&!cn&&(cn=Te),_n=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:_n=void 0}if(!Ue&&Qe[0]==="enter"&&Qe[1].type==="listItemPrefix"||Ue===-1&&Qe[0]==="exit"&&(Qe[1].type==="listUnordered"||Qe[1].type==="listOrdered")){if(Et){let $t=Te;for(En=void 0;$t--;){const ct=X[$t];if(ct[1].type==="lineEnding"||ct[1].type==="lineEndingBlank"){if(ct[0]==="exit")continue;En&&(X[En][1].type="lineEndingBlank",qn=!0),ct[1].type="lineEnding",En=$t}else if(!(ct[1].type==="linePrefix"||ct[1].type==="blockQuotePrefix"||ct[1].type==="blockQuotePrefixWhitespace"||ct[1].type==="blockQuoteMarker"||ct[1].type==="listItemIndent"))break}cn&&(!En||cn<En)&&(Et._spread=!0),Et.end=Object.assign({},En?X[En][1].start:Qe[1].end),X.splice(En||Te,0,["exit",Et,Qe[2]]),Te++,ye++}if(Qe[1].type==="listItemPrefix"){const $t={type:"listItem",_spread:!1,start:Object.assign({},Qe[1].start),end:void 0};Et=$t,X.splice(Te,0,["enter",$t,Qe[2]]),Te++,ye++,cn=void 0,_n=!0}}}return X[le][1]._spread=qn,ye}function s(X,le){return ye;function ye(Te){h.call(this,X(Te),Te),le&&le.call(this,Te)}}function c(){this.stack.push({type:"fragment",children:[]})}function h(X,le,ye){this.stack[this.stack.length-1].children.push(X),this.stack.push(X),this.tokenStack.push([le,ye||void 0]),X.position={start:kl(le.start),end:void 0}}function m(X){return le;function le(ye){X&&X.call(this,ye),p.call(this,ye)}}function p(X,le){const ye=this.stack.pop(),Te=this.tokenStack.pop();if(Te)Te[0].type!==X.type&&(le?le.call(this,X,Te[0]):(Te[1]||qg).call(this,X,Te[0]));else throw new Error("Cannot close `"+X.type+"` ("+nr({start:X.start,end:X.end})+"): it’s not open");ye.position.end=kl(X.end)}function y(){return Mf(this.stack.pop())}function g(){this.data.expectingFirstListItemValue=!0}function b(X){if(this.data.expectingFirstListItemValue){const le=this.stack[this.stack.length-2];le.start=Number.parseInt(this.sliceSerialize(X),10),this.data.expectingFirstListItemValue=void 0}}function S(){const X=this.resume(),le=this.stack[this.stack.length-1];le.lang=X}function E(){const X=this.resume(),le=this.stack[this.stack.length-1];le.meta=X}function _(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function T(){const X=this.resume(),le=this.stack[this.stack.length-1];le.value=X.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function N(){const X=this.resume(),le=this.stack[this.stack.length-1];le.value=X.replace(/(\r?\n|\r)$/g,"")}function D(X){const le=this.resume(),ye=this.stack[this.stack.length-1];ye.label=le,ye.identifier=pt(this.sliceSerialize(X)).toLowerCase()}function j(){const X=this.resume(),le=this.stack[this.stack.length-1];le.title=X}function Z(){const X=this.resume(),le=this.stack[this.stack.length-1];le.url=X}function W(X){const le=this.stack[this.stack.length-1];if(!le.depth){const ye=this.sliceSerialize(X).length;le.depth=ye}}function q(){this.data.setextHeadingSlurpLineEnding=!0}function ee(X){const le=this.stack[this.stack.length-1];le.depth=this.sliceSerialize(X).codePointAt(0)===61?1:2}function $(){this.data.setextHeadingSlurpLineEnding=void 0}function ue(X){const ye=this.stack[this.stack.length-1].children;let Te=ye[ye.length-1];(!Te||Te.type!=="text")&&(Te=kn(),Te.position={start:kl(X.start),end:void 0},ye.push(Te)),this.stack.push(Te)}function O(X){const le=this.stack.pop();le.value+=this.sliceSerialize(X),le.position.end=kl(X.end)}function J(X){const le=this.stack[this.stack.length-1];if(this.data.atHardBreak){const ye=le.children[le.children.length-1];ye.position.end=kl(X.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&i.canContainEols.includes(le.type)&&(ue.call(this,X),O.call(this,X))}function ne(){this.data.atHardBreak=!0}function xe(){const X=this.resume(),le=this.stack[this.stack.length-1];le.value=X}function re(){const X=this.resume(),le=this.stack[this.stack.length-1];le.value=X}function P(){const X=this.resume(),le=this.stack[this.stack.length-1];le.value=X}function B(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const le=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=le,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function K(){const X=this.stack[this.stack.length-1];if(this.data.inReference){const le=this.data.referenceType||"shortcut";X.type+="Reference",X.referenceType=le,delete X.url,delete X.title}else delete X.identifier,delete X.label;this.data.referenceType=void 0}function ie(X){const le=this.sliceSerialize(X),ye=this.stack[this.stack.length-2];ye.label=n3(le),ye.identifier=pt(le).toLowerCase()}function ve(){const X=this.stack[this.stack.length-1],le=this.resume(),ye=this.stack[this.stack.length-1];if(this.data.inReference=!0,ye.type==="link"){const Te=X.children;ye.children=Te}else ye.alt=le}function A(){const X=this.resume(),le=this.stack[this.stack.length-1];le.url=X}function R(){const X=this.resume(),le=this.stack[this.stack.length-1];le.title=X}function Y(){this.data.inReference=void 0}function k(){this.data.referenceType="collapsed"}function ae(X){const le=this.resume(),ye=this.stack[this.stack.length-1];ye.label=le,ye.identifier=pt(this.sliceSerialize(X)).toLowerCase(),this.data.referenceType="full"}function se(X){this.data.characterReferenceType=X.type}function oe(X){const le=this.sliceSerialize(X),ye=this.data.characterReferenceType;let Te;ye?(Te=ky(le,ye==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Te=Df(le);const Ue=this.stack[this.stack.length-1];Ue.value+=Te}function Ae(X){const le=this.stack.pop();le.position.end=kl(X.end)}function Xe(X){O.call(this,X);const le=this.stack[this.stack.length-1];le.url=this.sliceSerialize(X)}function be(X){O.call(this,X);const le=this.stack[this.stack.length-1];le.url="mailto:"+this.sliceSerialize(X)}function An(){return{type:"blockquote",children:[]}}function Nn(){return{type:"code",lang:null,meta:null,value:""}}function gt(){return{type:"inlineCode",value:""}}function Kt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function zn(){return{type:"emphasis",children:[]}}function ea(){return{type:"heading",depth:0,children:[]}}function na(){return{type:"break"}}function pr(){return{type:"html",value:""}}function mr(){return{type:"image",title:null,url:"",alt:null}}function ta(){return{type:"link",title:null,url:"",children:[]}}function la(X){return{type:"list",ordered:X.type==="listOrdered",start:null,spread:X._spread,children:[]}}function ei(X){return{type:"listItem",spread:X._spread,checked:null,children:[]}}function uu(){return{type:"paragraph",children:[]}}function su(){return{type:"strong",children:[]}}function kn(){return{type:"text",value:""}}function cu(){return{type:"thematicBreak"}}}function kl(t){return{line:t.line,column:t.column,offset:t.offset}}function Oy(t,i){let a=-1;for(;++a<i.length;){const r=i[a];Array.isArray(r)?Oy(t,r):i3(t,r)}}function i3(t,i){let a;for(a in i)if(jy.call(i,a))switch(a){case"canContainEols":{const r=i[a];r&&t[a].push(...r);break}case"transforms":{const r=i[a];r&&t[a].push(...r);break}case"enter":case"exit":{const r=i[a];r&&Object.assign(t[a],r);break}}}function qg(t,i){throw t?new Error("Cannot close `"+t.type+"` ("+nr({start:t.start,end:t.end})+"): a different token (`"+i.type+"`, "+nr({start:i.start,end:i.end})+") is open"):new Error("Cannot close document, a token (`"+i.type+"`, "+nr({start:i.start,end:i.end})+") is still open")}function r3(t){const i=this;i.parser=a;function a(r){return l3(r,{...i.data("settings"),...t,extensions:i.data("micromarkExtensions")||[],mdastExtensions:i.data("fromMarkdownExtensions")||[]})}}function o3(t,i){const a={type:"element",tagName:"blockquote",properties:{},children:t.wrap(t.all(i),!0)};return t.patch(i,a),t.applyData(i,a)}function u3(t,i){const a={type:"element",tagName:"br",properties:{},children:[]};return t.patch(i,a),[t.applyData(i,a),{type:"text",value:`
`}]}function s3(t,i){const a=i.value?i.value+`
`:"",r={},u=i.lang?i.lang.split(/\s+/):[];u.length>0&&(r.className=["language-"+u[0]]);let s={type:"element",tagName:"code",properties:r,children:[{type:"text",value:a}]};return i.meta&&(s.data={meta:i.meta}),t.patch(i,s),s=t.applyData(i,s),s={type:"element",tagName:"pre",properties:{},children:[s]},t.patch(i,s),s}function c3(t,i){const a={type:"element",tagName:"del",properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}function f3(t,i){const a={type:"element",tagName:"em",properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}function d3(t,i){const a=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",r=String(i.identifier).toUpperCase(),u=Ja(r.toLowerCase()),s=t.footnoteOrder.indexOf(r);let c,h=t.footnoteCounts.get(r);h===void 0?(h=0,t.footnoteOrder.push(r),c=t.footnoteOrder.length):c=s+1,h+=1,t.footnoteCounts.set(r,h);const m={type:"element",tagName:"a",properties:{href:"#"+a+"fn-"+u,id:a+"fnref-"+u+(h>1?"-"+h:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(c)}]};t.patch(i,m);const p={type:"element",tagName:"sup",properties:{},children:[m]};return t.patch(i,p),t.applyData(i,p)}function h3(t,i){const a={type:"element",tagName:"h"+i.depth,properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}function p3(t,i){if(t.options.allowDangerousHtml){const a={type:"raw",value:i.value};return t.patch(i,a),t.applyData(i,a)}}function Ly(t,i){const a=i.referenceType;let r="]";if(a==="collapsed"?r+="[]":a==="full"&&(r+="["+(i.label||i.identifier)+"]"),i.type==="imageReference")return[{type:"text",value:"!["+i.alt+r}];const u=t.all(i),s=u[0];s&&s.type==="text"?s.value="["+s.value:u.unshift({type:"text",value:"["});const c=u[u.length-1];return c&&c.type==="text"?c.value+=r:u.push({type:"text",value:r}),u}function m3(t,i){const a=String(i.identifier).toUpperCase(),r=t.definitionById.get(a);if(!r)return Ly(t,i);const u={src:Ja(r.url||""),alt:i.alt};r.title!==null&&r.title!==void 0&&(u.title=r.title);const s={type:"element",tagName:"img",properties:u,children:[]};return t.patch(i,s),t.applyData(i,s)}function g3(t,i){const a={src:Ja(i.url)};i.alt!==null&&i.alt!==void 0&&(a.alt=i.alt),i.title!==null&&i.title!==void 0&&(a.title=i.title);const r={type:"element",tagName:"img",properties:a,children:[]};return t.patch(i,r),t.applyData(i,r)}function y3(t,i){const a={type:"text",value:i.value.replace(/\r?\n|\r/g," ")};t.patch(i,a);const r={type:"element",tagName:"code",properties:{},children:[a]};return t.patch(i,r),t.applyData(i,r)}function x3(t,i){const a=String(i.identifier).toUpperCase(),r=t.definitionById.get(a);if(!r)return Ly(t,i);const u={href:Ja(r.url||"")};r.title!==null&&r.title!==void 0&&(u.title=r.title);const s={type:"element",tagName:"a",properties:u,children:t.all(i)};return t.patch(i,s),t.applyData(i,s)}function b3(t,i){const a={href:Ja(i.url)};i.title!==null&&i.title!==void 0&&(a.title=i.title);const r={type:"element",tagName:"a",properties:a,children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function v3(t,i,a){const r=t.all(i),u=a?S3(a):By(i),s={},c=[];if(typeof i.checked=="boolean"){const y=r[0];let g;y&&y.type==="element"&&y.tagName==="p"?g=y:(g={type:"element",tagName:"p",properties:{},children:[]},r.unshift(g)),g.children.length>0&&g.children.unshift({type:"text",value:" "}),g.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:i.checked,disabled:!0},children:[]}),s.className=["task-list-item"]}let h=-1;for(;++h<r.length;){const y=r[h];(u||h!==0||y.type!=="element"||y.tagName!=="p")&&c.push({type:"text",value:`
`}),y.type==="element"&&y.tagName==="p"&&!u?c.push(...y.children):c.push(y)}const m=r[r.length-1];m&&(u||m.type!=="element"||m.tagName!=="p")&&c.push({type:"text",value:`
`});const p={type:"element",tagName:"li",properties:s,children:c};return t.patch(i,p),t.applyData(i,p)}function S3(t){let i=!1;if(t.type==="list"){i=t.spread||!1;const a=t.children;let r=-1;for(;!i&&++r<a.length;)i=By(a[r])}return i}function By(t){const i=t.spread;return i??t.children.length>1}function w3(t,i){const a={},r=t.all(i);let u=-1;for(typeof i.start=="number"&&i.start!==1&&(a.start=i.start);++u<r.length;){const c=r[u];if(c.type==="element"&&c.tagName==="li"&&c.properties&&Array.isArray(c.properties.className)&&c.properties.className.includes("task-list-item")){a.className=["contains-task-list"];break}}const s={type:"element",tagName:i.ordered?"ol":"ul",properties:a,children:t.wrap(r,!0)};return t.patch(i,s),t.applyData(i,s)}function A3(t,i){const a={type:"element",tagName:"p",properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}function k3(t,i){const a={type:"root",children:t.wrap(t.all(i))};return t.patch(i,a),t.applyData(i,a)}function E3(t,i){const a={type:"element",tagName:"strong",properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}function C3(t,i){const a=t.all(i),r=a.shift(),u=[];if(r){const c={type:"element",tagName:"thead",properties:{},children:t.wrap([r],!0)};t.patch(i.children[0],c),u.push(c)}if(a.length>0){const c={type:"element",tagName:"tbody",properties:{},children:t.wrap(a,!0)},h=Nf(i.children[1]),m=gy(i.children[i.children.length-1]);h&&m&&(c.position={start:h,end:m}),u.push(c)}const s={type:"element",tagName:"table",properties:{},children:t.wrap(u,!0)};return t.patch(i,s),t.applyData(i,s)}function T3(t,i,a){const r=a?a.children:void 0,s=(r?r.indexOf(i):1)===0?"th":"td",c=a&&a.type==="table"?a.align:void 0,h=c?c.length:i.children.length;let m=-1;const p=[];for(;++m<h;){const g=i.children[m],b={},S=c?c[m]:void 0;S&&(b.align=S);let E={type:"element",tagName:s,properties:b,children:[]};g&&(E.children=t.all(g),t.patch(g,E),E=t.applyData(g,E)),p.push(E)}const y={type:"element",tagName:"tr",properties:{},children:t.wrap(p,!0)};return t.patch(i,y),t.applyData(i,y)}function N3(t,i){const a={type:"element",tagName:"td",properties:{},children:t.all(i)};return t.patch(i,a),t.applyData(i,a)}const Ig=9,Vg=32;function z3(t){const i=String(t),a=/\r?\n|\r/g;let r=a.exec(i),u=0;const s=[];for(;r;)s.push(Gg(i.slice(u,r.index),u>0,!0),r[0]),u=r.index+r[0].length,r=a.exec(i);return s.push(Gg(i.slice(u),u>0,!1)),s.join("")}function Gg(t,i,a){let r=0,u=t.length;if(i){let s=t.codePointAt(r);for(;s===Ig||s===Vg;)r++,s=t.codePointAt(r)}if(a){let s=t.codePointAt(u-1);for(;s===Ig||s===Vg;)u--,s=t.codePointAt(u-1)}return u>r?t.slice(r,u):""}function _3(t,i){const a={type:"text",value:z3(String(i.value))};return t.patch(i,a),t.applyData(i,a)}function R3(t,i){const a={type:"element",tagName:"hr",properties:{},children:[]};return t.patch(i,a),t.applyData(i,a)}const M3={blockquote:o3,break:u3,code:s3,delete:c3,emphasis:f3,footnoteReference:d3,heading:h3,html:p3,imageReference:m3,image:g3,inlineCode:y3,linkReference:x3,link:b3,listItem:v3,list:w3,paragraph:A3,root:k3,strong:E3,table:C3,tableCell:N3,tableRow:T3,text:_3,thematicBreak:R3,toml:Lo,yaml:Lo,definition:Lo,footnoteDefinition:Lo};function Lo(){}const Hy=-1,au=0,lr=1,Zo=2,Of=3,Lf=4,Bf=5,Hf=6,Uy=7,qy=8,Yg=typeof self=="object"?self:globalThis,D3=(t,i)=>{const a=(u,s)=>(t.set(s,u),u),r=u=>{if(t.has(u))return t.get(u);const[s,c]=i[u];switch(s){case au:case Hy:return a(c,u);case lr:{const h=a([],u);for(const m of c)h.push(r(m));return h}case Zo:{const h=a({},u);for(const[m,p]of c)h[r(m)]=r(p);return h}case Of:return a(new Date(c),u);case Lf:{const{source:h,flags:m}=c;return a(new RegExp(h,m),u)}case Bf:{const h=a(new Map,u);for(const[m,p]of c)h.set(r(m),r(p));return h}case Hf:{const h=a(new Set,u);for(const m of c)h.add(r(m));return h}case Uy:{const{name:h,message:m}=c;return a(new Yg[h](m),u)}case qy:return a(BigInt(c),u);case"BigInt":return a(Object(BigInt(c)),u);case"ArrayBuffer":return a(new Uint8Array(c).buffer,c);case"DataView":{const{buffer:h}=new Uint8Array(c);return a(new DataView(h),c)}}return a(new Yg[s](c),u)};return r},Xg=t=>D3(new Map,t)(0),Ga="",{toString:j3}={},{keys:O3}=Object,Wi=t=>{const i=typeof t;if(i!=="object"||!t)return[au,i];const a=j3.call(t).slice(8,-1);switch(a){case"Array":return[lr,Ga];case"Object":return[Zo,Ga];case"Date":return[Of,Ga];case"RegExp":return[Lf,Ga];case"Map":return[Bf,Ga];case"Set":return[Hf,Ga];case"DataView":return[lr,a]}return a.includes("Array")?[lr,a]:a.includes("Error")?[Uy,a]:[Zo,a]},Bo=([t,i])=>t===au&&(i==="function"||i==="symbol"),L3=(t,i,a,r)=>{const u=(c,h)=>{const m=r.push(c)-1;return a.set(h,m),m},s=c=>{if(a.has(c))return a.get(c);let[h,m]=Wi(c);switch(h){case au:{let y=c;switch(m){case"bigint":h=qy,y=c.toString();break;case"function":case"symbol":if(t)throw new TypeError("unable to serialize "+m);y=null;break;case"undefined":return u([Hy],c)}return u([h,y],c)}case lr:{if(m){let b=c;return m==="DataView"?b=new Uint8Array(c.buffer):m==="ArrayBuffer"&&(b=new Uint8Array(c)),u([m,[...b]],c)}const y=[],g=u([h,y],c);for(const b of c)y.push(s(b));return g}case Zo:{if(m)switch(m){case"BigInt":return u([m,c.toString()],c);case"Boolean":case"Number":case"String":return u([m,c.valueOf()],c)}if(i&&"toJSON"in c)return s(c.toJSON());const y=[],g=u([h,y],c);for(const b of O3(c))(t||!Bo(Wi(c[b])))&&y.push([s(b),s(c[b])]);return g}case Of:return u([h,c.toISOString()],c);case Lf:{const{source:y,flags:g}=c;return u([h,{source:y,flags:g}],c)}case Bf:{const y=[],g=u([h,y],c);for(const[b,S]of c)(t||!(Bo(Wi(b))||Bo(Wi(S))))&&y.push([s(b),s(S)]);return g}case Hf:{const y=[],g=u([h,y],c);for(const b of c)(t||!Bo(Wi(b)))&&y.push(s(b));return g}}const{message:p}=c;return u([h,{name:m,message:p}],c)};return s},Qg=(t,{json:i,lossy:a}={})=>{const r=[];return L3(!(i||a),!!i,new Map,r)(t),r},Ko=typeof structuredClone=="function"?(t,i)=>i&&("json"in i||"lossy"in i)?Xg(Qg(t,i)):structuredClone(t):(t,i)=>Xg(Qg(t,i));function B3(t,i){const a=[{type:"text",value:"↩"}];return i>1&&a.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(i)}]}),a}function H3(t,i){return"Back to reference "+(t+1)+(i>1?"-"+i:"")}function U3(t){const i=typeof t.options.clobberPrefix=="string"?t.options.clobberPrefix:"user-content-",a=t.options.footnoteBackContent||B3,r=t.options.footnoteBackLabel||H3,u=t.options.footnoteLabel||"Footnotes",s=t.options.footnoteLabelTagName||"h2",c=t.options.footnoteLabelProperties||{className:["sr-only"]},h=[];let m=-1;for(;++m<t.footnoteOrder.length;){const p=t.footnoteById.get(t.footnoteOrder[m]);if(!p)continue;const y=t.all(p),g=String(p.identifier).toUpperCase(),b=Ja(g.toLowerCase());let S=0;const E=[],_=t.footnoteCounts.get(g);for(;_!==void 0&&++S<=_;){E.length>0&&E.push({type:"text",value:" "});let D=typeof a=="string"?a:a(m,S);typeof D=="string"&&(D={type:"text",value:D}),E.push({type:"element",tagName:"a",properties:{href:"#"+i+"fnref-"+b+(S>1?"-"+S:""),dataFootnoteBackref:"",ariaLabel:typeof r=="string"?r:r(m,S),className:["data-footnote-backref"]},children:Array.isArray(D)?D:[D]})}const T=y[y.length-1];if(T&&T.type==="element"&&T.tagName==="p"){const D=T.children[T.children.length-1];D&&D.type==="text"?D.value+=" ":T.children.push({type:"text",value:" "}),T.children.push(...E)}else y.push(...E);const N={type:"element",tagName:"li",properties:{id:i+"fn-"+b},children:t.wrap(y,!0)};t.patch(p,N),h.push(N)}if(h.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:s,properties:{...Ko(c),id:"footnote-label"},children:[{type:"text",value:u}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:t.wrap(h,!0)},{type:"text",value:`
`}]}}const iu=(function(t){if(t==null)return G3;if(typeof t=="function")return ru(t);if(typeof t=="object")return Array.isArray(t)?q3(t):I3(t);if(typeof t=="string")return V3(t);throw new Error("Expected function, string, or object as test")});function q3(t){const i=[];let a=-1;for(;++a<t.length;)i[a]=iu(t[a]);return ru(r);function r(...u){let s=-1;for(;++s<i.length;)if(i[s].apply(this,u))return!0;return!1}}function I3(t){const i=t;return ru(a);function a(r){const u=r;let s;for(s in t)if(u[s]!==i[s])return!1;return!0}}function V3(t){return ru(i);function i(a){return a&&a.type===t}}function ru(t){return i;function i(a,r,u){return!!(Y3(a)&&t.call(this,a,typeof r=="number"?r:void 0,u||void 0))}}function G3(){return!0}function Y3(t){return t!==null&&typeof t=="object"&&"type"in t}const Iy=[],X3=!0,rf=!1,Q3="skip";function Vy(t,i,a,r){let u;typeof i=="function"&&typeof a!="function"?(r=a,a=i):u=i;const s=iu(u),c=r?-1:1;h(t,void 0,[])();function h(m,p,y){const g=m&&typeof m=="object"?m:{};if(typeof g.type=="string"){const S=typeof g.tagName=="string"?g.tagName:typeof g.name=="string"?g.name:void 0;Object.defineProperty(b,"name",{value:"node ("+(m.type+(S?"<"+S+">":""))+")"})}return b;function b(){let S=Iy,E,_,T;if((!i||s(m,p,y[y.length-1]||void 0))&&(S=F3(a(m,y)),S[0]===rf))return S;if("children"in m&&m.children){const N=m;if(N.children&&S[0]!==Q3)for(_=(r?N.children.length:-1)+c,T=y.concat(N);_>-1&&_<N.children.length;){const D=N.children[_];if(E=h(D,_,T)(),E[0]===rf)return E;_=typeof E[1]=="number"?E[1]:_+c}}return S}}}function F3(t){return Array.isArray(t)?t:typeof t=="number"?[X3,t]:t==null?Iy:[t]}function Uf(t,i,a,r){let u,s,c;typeof i=="function"&&typeof a!="function"?(s=void 0,c=i,u=a):(s=i,c=a,u=r),Vy(t,s,h,u);function h(m,p){const y=p[p.length-1],g=y?y.children.indexOf(m):void 0;return c(m,g,y)}}const of={}.hasOwnProperty,Z3={};function K3(t,i){const a=i||Z3,r=new Map,u=new Map,s=new Map,c={...M3,...a.handlers},h={all:p,applyData:P3,definitionById:r,footnoteById:u,footnoteCounts:s,footnoteOrder:[],handlers:c,one:m,options:a,patch:$3,wrap:W3};return Uf(t,function(y){if(y.type==="definition"||y.type==="footnoteDefinition"){const g=y.type==="definition"?r:u,b=String(y.identifier).toUpperCase();g.has(b)||g.set(b,y)}}),h;function m(y,g){const b=y.type,S=h.handlers[b];if(of.call(h.handlers,b)&&S)return S(h,y,g);if(h.options.passThrough&&h.options.passThrough.includes(b)){if("children"in y){const{children:_,...T}=y,N=Ko(T);return N.children=h.all(y),N}return Ko(y)}return(h.options.unknownHandler||J3)(h,y,g)}function p(y){const g=[];if("children"in y){const b=y.children;let S=-1;for(;++S<b.length;){const E=h.one(b[S],y);if(E){if(S&&b[S-1].type==="break"&&(!Array.isArray(E)&&E.type==="text"&&(E.value=Fg(E.value)),!Array.isArray(E)&&E.type==="element")){const _=E.children[0];_&&_.type==="text"&&(_.value=Fg(_.value))}Array.isArray(E)?g.push(...E):g.push(E)}}}return g}}function $3(t,i){t.position&&(i.position=HA(t))}function P3(t,i){let a=i;if(t&&t.data){const r=t.data.hName,u=t.data.hChildren,s=t.data.hProperties;if(typeof r=="string")if(a.type==="element")a.tagName=r;else{const c="children"in a?a.children:[a];a={type:"element",tagName:r,properties:{},children:c}}a.type==="element"&&s&&Object.assign(a.properties,Ko(s)),"children"in a&&a.children&&u!==null&&u!==void 0&&(a.children=u)}return a}function J3(t,i){const a=i.data||{},r="value"in i&&!(of.call(a,"hProperties")||of.call(a,"hChildren"))?{type:"text",value:i.value}:{type:"element",tagName:"div",properties:{},children:t.all(i)};return t.patch(i,r),t.applyData(i,r)}function W3(t,i){const a=[];let r=-1;for(i&&a.push({type:"text",value:`
`});++r<t.length;)r&&a.push({type:"text",value:`
`}),a.push(t[r]);return i&&t.length>0&&a.push({type:"text",value:`
`}),a}function Fg(t){let i=0,a=t.charCodeAt(i);for(;a===9||a===32;)i++,a=t.charCodeAt(i);return t.slice(i)}function Zg(t,i){const a=K3(t,i),r=a.one(t,void 0),u=U3(a),s=Array.isArray(r)?{type:"root",children:r}:r||{type:"root",children:[]};return u&&s.children.push({type:"text",value:`
`},u),s}function e4(t,i){return t&&"run"in t?async function(a,r){const u=Zg(a,{file:r,...i});await t.run(u,r)}:function(a,r){return Zg(a,{file:r,...t||i})}}function Kg(t){if(t)throw t}var Hc,$g;function n4(){if($g)return Hc;$g=1;var t=Object.prototype.hasOwnProperty,i=Object.prototype.toString,a=Object.defineProperty,r=Object.getOwnPropertyDescriptor,u=function(p){return typeof Array.isArray=="function"?Array.isArray(p):i.call(p)==="[object Array]"},s=function(p){if(!p||i.call(p)!=="[object Object]")return!1;var y=t.call(p,"constructor"),g=p.constructor&&p.constructor.prototype&&t.call(p.constructor.prototype,"isPrototypeOf");if(p.constructor&&!y&&!g)return!1;var b;for(b in p);return typeof b>"u"||t.call(p,b)},c=function(p,y){a&&y.name==="__proto__"?a(p,y.name,{enumerable:!0,configurable:!0,value:y.newValue,writable:!0}):p[y.name]=y.newValue},h=function(p,y){if(y==="__proto__")if(t.call(p,y)){if(r)return r(p,y).value}else return;return p[y]};return Hc=function m(){var p,y,g,b,S,E,_=arguments[0],T=1,N=arguments.length,D=!1;for(typeof _=="boolean"&&(D=_,_=arguments[1]||{},T=2),(_==null||typeof _!="object"&&typeof _!="function")&&(_={});T<N;++T)if(p=arguments[T],p!=null)for(y in p)g=h(_,y),b=h(p,y),_!==b&&(D&&b&&(s(b)||(S=u(b)))?(S?(S=!1,E=g&&u(g)?g:[]):E=g&&s(g)?g:{},c(_,{name:y,newValue:m(D,E,b)})):typeof b<"u"&&c(_,{name:y,newValue:b}));return _},Hc}var t4=n4();const Uc=pf(t4);function uf(t){if(typeof t!="object"||t===null)return!1;const i=Object.getPrototypeOf(t);return(i===null||i===Object.prototype||Object.getPrototypeOf(i)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)}function l4(){const t=[],i={run:a,use:r};return i;function a(...u){let s=-1;const c=u.pop();if(typeof c!="function")throw new TypeError("Expected function as last argument, not "+c);h(null,...u);function h(m,...p){const y=t[++s];let g=-1;if(m){c(m);return}for(;++g<u.length;)(p[g]===null||p[g]===void 0)&&(p[g]=u[g]);u=p,y?a4(y,h)(...p):c(null,...p)}}function r(u){if(typeof u!="function")throw new TypeError("Expected `middelware` to be a function, not "+u);return t.push(u),i}}function a4(t,i){let a;return r;function r(...c){const h=t.length>c.length;let m;h&&c.push(u);try{m=t.apply(this,c)}catch(p){const y=p;if(h&&a)throw y;return u(y)}h||(m&&m.then&&typeof m.then=="function"?m.then(s,u):m instanceof Error?u(m):s(m))}function u(c,...h){a||(a=!0,i(c,...h))}function s(c){u(null,c)}}const St={basename:i4,dirname:r4,extname:o4,join:u4,sep:"/"};function i4(t,i){if(i!==void 0&&typeof i!="string")throw new TypeError('"ext" argument must be a string');dr(t);let a=0,r=-1,u=t.length,s;if(i===void 0||i.length===0||i.length>t.length){for(;u--;)if(t.codePointAt(u)===47){if(s){a=u+1;break}}else r<0&&(s=!0,r=u+1);return r<0?"":t.slice(a,r)}if(i===t)return"";let c=-1,h=i.length-1;for(;u--;)if(t.codePointAt(u)===47){if(s){a=u+1;break}}else c<0&&(s=!0,c=u+1),h>-1&&(t.codePointAt(u)===i.codePointAt(h--)?h<0&&(r=u):(h=-1,r=c));return a===r?r=c:r<0&&(r=t.length),t.slice(a,r)}function r4(t){if(dr(t),t.length===0)return".";let i=-1,a=t.length,r;for(;--a;)if(t.codePointAt(a)===47){if(r){i=a;break}}else r||(r=!0);return i<0?t.codePointAt(0)===47?"/":".":i===1&&t.codePointAt(0)===47?"//":t.slice(0,i)}function o4(t){dr(t);let i=t.length,a=-1,r=0,u=-1,s=0,c;for(;i--;){const h=t.codePointAt(i);if(h===47){if(c){r=i+1;break}continue}a<0&&(c=!0,a=i+1),h===46?u<0?u=i:s!==1&&(s=1):u>-1&&(s=-1)}return u<0||a<0||s===0||s===1&&u===a-1&&u===r+1?"":t.slice(u,a)}function u4(...t){let i=-1,a;for(;++i<t.length;)dr(t[i]),t[i]&&(a=a===void 0?t[i]:a+"/"+t[i]);return a===void 0?".":s4(a)}function s4(t){dr(t);const i=t.codePointAt(0)===47;let a=c4(t,!i);return a.length===0&&!i&&(a="."),a.length>0&&t.codePointAt(t.length-1)===47&&(a+="/"),i?"/"+a:a}function c4(t,i){let a="",r=0,u=-1,s=0,c=-1,h,m;for(;++c<=t.length;){if(c<t.length)h=t.codePointAt(c);else{if(h===47)break;h=47}if(h===47){if(!(u===c-1||s===1))if(u!==c-1&&s===2){if(a.length<2||r!==2||a.codePointAt(a.length-1)!==46||a.codePointAt(a.length-2)!==46){if(a.length>2){if(m=a.lastIndexOf("/"),m!==a.length-1){m<0?(a="",r=0):(a=a.slice(0,m),r=a.length-1-a.lastIndexOf("/")),u=c,s=0;continue}}else if(a.length>0){a="",r=0,u=c,s=0;continue}}i&&(a=a.length>0?a+"/..":"..",r=2)}else a.length>0?a+="/"+t.slice(u+1,c):a=t.slice(u+1,c),r=c-u-1;u=c,s=0}else h===46&&s>-1?s++:s=-1}return a}function dr(t){if(typeof t!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const f4={cwd:d4};function d4(){return"/"}function sf(t){return!!(t!==null&&typeof t=="object"&&"href"in t&&t.href&&"protocol"in t&&t.protocol&&t.auth===void 0)}function h4(t){if(typeof t=="string")t=new URL(t);else if(!sf(t)){const i=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw i.code="ERR_INVALID_ARG_TYPE",i}if(t.protocol!=="file:"){const i=new TypeError("The URL must be of scheme file");throw i.code="ERR_INVALID_URL_SCHEME",i}return p4(t)}function p4(t){if(t.hostname!==""){const r=new TypeError('File URL host must be "localhost" or empty on darwin');throw r.code="ERR_INVALID_FILE_URL_HOST",r}const i=t.pathname;let a=-1;for(;++a<i.length;)if(i.codePointAt(a)===37&&i.codePointAt(a+1)===50){const r=i.codePointAt(a+2);if(r===70||r===102){const u=new TypeError("File URL path must not include encoded / characters");throw u.code="ERR_INVALID_FILE_URL_PATH",u}}return decodeURIComponent(i)}const qc=["history","path","basename","stem","extname","dirname"];class Gy{constructor(i){let a;i?sf(i)?a={path:i}:typeof i=="string"||m4(i)?a={value:i}:a=i:a={},this.cwd="cwd"in a?"":f4.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let r=-1;for(;++r<qc.length;){const s=qc[r];s in a&&a[s]!==void 0&&a[s]!==null&&(this[s]=s==="history"?[...a[s]]:a[s])}let u;for(u in a)qc.includes(u)||(this[u]=a[u])}get basename(){return typeof this.path=="string"?St.basename(this.path):void 0}set basename(i){Vc(i,"basename"),Ic(i,"basename"),this.path=St.join(this.dirname||"",i)}get dirname(){return typeof this.path=="string"?St.dirname(this.path):void 0}set dirname(i){Pg(this.basename,"dirname"),this.path=St.join(i||"",this.basename)}get extname(){return typeof this.path=="string"?St.extname(this.path):void 0}set extname(i){if(Ic(i,"extname"),Pg(this.dirname,"extname"),i){if(i.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(i.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=St.join(this.dirname,this.stem+(i||""))}get path(){return this.history[this.history.length-1]}set path(i){sf(i)&&(i=h4(i)),Vc(i,"path"),this.path!==i&&this.history.push(i)}get stem(){return typeof this.path=="string"?St.basename(this.path,this.extname):void 0}set stem(i){Vc(i,"stem"),Ic(i,"stem"),this.path=St.join(this.dirname||"",i+(this.extname||""))}fail(i,a,r){const u=this.message(i,a,r);throw u.fatal=!0,u}info(i,a,r){const u=this.message(i,a,r);return u.fatal=void 0,u}message(i,a,r){const u=new wn(i,a,r);return this.path&&(u.name=this.path+":"+u.name,u.file=this.path),u.fatal=!1,this.messages.push(u),u}toString(i){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(i||void 0).decode(this.value)}}function Ic(t,i){if(t&&t.includes(St.sep))throw new Error("`"+i+"` cannot be a path: did not expect `"+St.sep+"`")}function Vc(t,i){if(!t)throw new Error("`"+i+"` cannot be empty")}function Pg(t,i){if(!t)throw new Error("Setting `"+i+"` requires `path` to be set too")}function m4(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const g4=(function(t){const r=this.constructor.prototype,u=r[t],s=function(){return u.apply(s,arguments)};return Object.setPrototypeOf(s,r),s}),y4={}.hasOwnProperty;class qf extends g4{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=l4()}copy(){const i=new qf;let a=-1;for(;++a<this.attachers.length;){const r=this.attachers[a];i.use(...r)}return i.data(Uc(!0,{},this.namespace)),i}data(i,a){return typeof i=="string"?arguments.length===2?(Xc("data",this.frozen),this.namespace[i]=a,this):y4.call(this.namespace,i)&&this.namespace[i]||void 0:i?(Xc("data",this.frozen),this.namespace=i,this):this.namespace}freeze(){if(this.frozen)return this;const i=this;for(;++this.freezeIndex<this.attachers.length;){const[a,...r]=this.attachers[this.freezeIndex];if(r[0]===!1)continue;r[0]===!0&&(r[0]=void 0);const u=a.call(i,...r);typeof u=="function"&&this.transformers.use(u)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(i){this.freeze();const a=Ho(i),r=this.parser||this.Parser;return Gc("parse",r),r(String(a),a)}process(i,a){const r=this;return this.freeze(),Gc("process",this.parser||this.Parser),Yc("process",this.compiler||this.Compiler),a?u(void 0,a):new Promise(u);function u(s,c){const h=Ho(i),m=r.parse(h);r.run(m,h,function(y,g,b){if(y||!g||!b)return p(y);const S=g,E=r.stringify(S,b);v4(E)?b.value=E:b.result=E,p(y,b)});function p(y,g){y||!g?c(y):s?s(g):a(void 0,g)}}}processSync(i){let a=!1,r;return this.freeze(),Gc("processSync",this.parser||this.Parser),Yc("processSync",this.compiler||this.Compiler),this.process(i,u),Wg("processSync","process",a),r;function u(s,c){a=!0,Kg(s),r=c}}run(i,a,r){Jg(i),this.freeze();const u=this.transformers;return!r&&typeof a=="function"&&(r=a,a=void 0),r?s(void 0,r):new Promise(s);function s(c,h){const m=Ho(a);u.run(i,m,p);function p(y,g,b){const S=g||i;y?h(y):c?c(S):r(void 0,S,b)}}}runSync(i,a){let r=!1,u;return this.run(i,a,s),Wg("runSync","run",r),u;function s(c,h){Kg(c),u=h,r=!0}}stringify(i,a){this.freeze();const r=Ho(a),u=this.compiler||this.Compiler;return Yc("stringify",u),Jg(i),u(i,r)}use(i,...a){const r=this.attachers,u=this.namespace;if(Xc("use",this.frozen),i!=null)if(typeof i=="function")m(i,a);else if(typeof i=="object")Array.isArray(i)?h(i):c(i);else throw new TypeError("Expected usable value, not `"+i+"`");return this;function s(p){if(typeof p=="function")m(p,[]);else if(typeof p=="object")if(Array.isArray(p)){const[y,...g]=p;m(y,g)}else c(p);else throw new TypeError("Expected usable value, not `"+p+"`")}function c(p){if(!("plugins"in p)&&!("settings"in p))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");h(p.plugins),p.settings&&(u.settings=Uc(!0,u.settings,p.settings))}function h(p){let y=-1;if(p!=null)if(Array.isArray(p))for(;++y<p.length;){const g=p[y];s(g)}else throw new TypeError("Expected a list of plugins, not `"+p+"`")}function m(p,y){let g=-1,b=-1;for(;++g<r.length;)if(r[g][0]===p){b=g;break}if(b===-1)r.push([p,...y]);else if(y.length>0){let[S,...E]=y;const _=r[b][1];uf(_)&&uf(S)&&(S=Uc(!0,_,S)),r[b]=[p,S,...E]}}}}const x4=new qf().freeze();function Gc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `parser`")}function Yc(t,i){if(typeof i!="function")throw new TypeError("Cannot `"+t+"` without `compiler`")}function Xc(t,i){if(i)throw new Error("Cannot call `"+t+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Jg(t){if(!uf(t)||typeof t.type!="string")throw new TypeError("Expected node, got `"+t+"`")}function Wg(t,i,a){if(!a)throw new Error("`"+t+"` finished async. Use `"+i+"` instead")}function Ho(t){return b4(t)?t:new Gy(t)}function b4(t){return!!(t&&typeof t=="object"&&"message"in t&&"messages"in t)}function v4(t){return typeof t=="string"||S4(t)}function S4(t){return!!(t&&typeof t=="object"&&"byteLength"in t&&"byteOffset"in t)}const w4="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",e1=[],n1={allowDangerousHtml:!0},A4=/^(https?|ircs?|mailto|xmpp)$/i,k4=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function E4(t){const i=C4(t),a=T4(t);return N4(i.runSync(i.parse(a),a),t)}function C4(t){const i=t.rehypePlugins||e1,a=t.remarkPlugins||e1,r=t.remarkRehypeOptions?{...t.remarkRehypeOptions,...n1}:n1;return x4().use(r3).use(a).use(e4,r).use(i)}function T4(t){const i=t.children||"",a=new Gy;return typeof i=="string"&&(a.value=i),a}function N4(t,i){const a=i.allowedElements,r=i.allowElement,u=i.components,s=i.disallowedElements,c=i.skipHtml,h=i.unwrapDisallowed,m=i.urlTransform||z4;for(const y of k4)Object.hasOwn(i,y.from)&&(""+y.from+(y.to?"use `"+y.to+"` instead":"remove it")+w4+y.id,void 0);return Uf(t,p),GA(t,{Fragment:v.Fragment,components:u,ignoreInvalidStyle:!0,jsx:v.jsx,jsxs:v.jsxs,passKeys:!0,passNode:!0});function p(y,g,b){if(y.type==="raw"&&b&&typeof g=="number")return c?b.children.splice(g,1):b.children[g]={type:"text",value:y.value},g;if(y.type==="element"){let S;for(S in Oc)if(Object.hasOwn(Oc,S)&&Object.hasOwn(y.properties,S)){const E=y.properties[S],_=Oc[S];(_===null||_.includes(y.tagName))&&(y.properties[S]=m(String(E||""),S,y))}}if(y.type==="element"){let S=a?!a.includes(y.tagName):s?s.includes(y.tagName):!1;if(!S&&r&&typeof g=="number"&&(S=!r(y,g,b)),S&&b&&typeof g=="number")return h&&y.children?b.children.splice(g,1,...y.children):b.children.splice(g,1),g}}}function z4(t){const i=t.indexOf(":"),a=t.indexOf("?"),r=t.indexOf("#"),u=t.indexOf("/");return i===-1||u!==-1&&i>u||a!==-1&&i>a||r!==-1&&i>r||A4.test(t.slice(0,i))?t:""}function t1(t,i){const a=String(t);if(typeof i!="string")throw new TypeError("Expected character");let r=0,u=a.indexOf(i);for(;u!==-1;)r++,u=a.indexOf(i,u+i.length);return r}function _4(t){if(typeof t!="string")throw new TypeError("Expected a string");return t.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&").replace(/-/g,"\\x2d")}function R4(t,i,a){const u=iu((a||{}).ignore||[]),s=M4(i);let c=-1;for(;++c<s.length;)Vy(t,"text",h);function h(p,y){let g=-1,b;for(;++g<y.length;){const S=y[g],E=b?b.children:void 0;if(u(S,E?E.indexOf(S):void 0,b))return;b=S}if(b)return m(p,y)}function m(p,y){const g=y[y.length-1],b=s[c][0],S=s[c][1];let E=0;const T=g.children.indexOf(p);let N=!1,D=[];b.lastIndex=0;let j=b.exec(p.value);for(;j;){const Z=j.index,W={index:j.index,input:j.input,stack:[...y,p]};let q=S(...j,W);if(typeof q=="string"&&(q=q.length>0?{type:"text",value:q}:void 0),q===!1?b.lastIndex=Z+1:(E!==Z&&D.push({type:"text",value:p.value.slice(E,Z)}),Array.isArray(q)?D.push(...q):q&&D.push(q),E=Z+j[0].length,N=!0),!b.global)break;j=b.exec(p.value)}return N?(E<p.value.length&&D.push({type:"text",value:p.value.slice(E)}),g.children.splice(T,1,...D)):D=[p],T+D.length}}function M4(t){const i=[];if(!Array.isArray(t))throw new TypeError("Expected find and replace tuple or list of tuples");const a=!t[0]||Array.isArray(t[0])?t:[t];let r=-1;for(;++r<a.length;){const u=a[r];i.push([D4(u[0]),j4(u[1])])}return i}function D4(t){return typeof t=="string"?new RegExp(_4(t),"g"):t}function j4(t){return typeof t=="function"?t:function(){return t}}const Qc="phrasing",Fc=["autolink","link","image","label"];function O4(){return{transforms:[V4],enter:{literalAutolink:B4,literalAutolinkEmail:Zc,literalAutolinkHttp:Zc,literalAutolinkWww:Zc},exit:{literalAutolink:I4,literalAutolinkEmail:q4,literalAutolinkHttp:H4,literalAutolinkWww:U4}}}function L4(){return{unsafe:[{character:"@",before:"[+\\-.\\w]",after:"[\\-.\\w]",inConstruct:Qc,notInConstruct:Fc},{character:".",before:"[Ww]",after:"[\\-.\\w]",inConstruct:Qc,notInConstruct:Fc},{character:":",before:"[ps]",after:"\\/",inConstruct:Qc,notInConstruct:Fc}]}}function B4(t){this.enter({type:"link",title:null,url:"",children:[]},t)}function Zc(t){this.config.enter.autolinkProtocol.call(this,t)}function H4(t){this.config.exit.autolinkProtocol.call(this,t)}function U4(t){this.config.exit.data.call(this,t);const i=this.stack[this.stack.length-1];i.type,i.url="http://"+this.sliceSerialize(t)}function q4(t){this.config.exit.autolinkEmail.call(this,t)}function I4(t){this.exit(t)}function V4(t){R4(t,[[/(https?:\/\/|www(?=\.))([-.\w]+)([^ \t\r\n]*)/gi,G4],[new RegExp("(?<=^|\\s|\\p{P}|\\p{S})([-.\\w+]+)@([-\\w]+(?:\\.[-\\w]+)+)","gu"),Y4]],{ignore:["link","linkReference"]})}function G4(t,i,a,r,u){let s="";if(!Yy(u)||(/^w/i.test(i)&&(a=i+a,i="",s="http://"),!X4(a)))return!1;const c=Q4(a+r);if(!c[0])return!1;const h={type:"link",title:null,url:s+i+c[0],children:[{type:"text",value:i+c[0]}]};return c[1]?[h,{type:"text",value:c[1]}]:h}function Y4(t,i,a,r){return!Yy(r,!0)||/[-\d_]$/.test(a)?!1:{type:"link",title:null,url:"mailto:"+i+"@"+a,children:[{type:"text",value:i+"@"+a}]}}function X4(t){const i=t.split(".");return!(i.length<2||i[i.length-1]&&(/_/.test(i[i.length-1])||!/[a-zA-Z\d]/.test(i[i.length-1]))||i[i.length-2]&&(/_/.test(i[i.length-2])||!/[a-zA-Z\d]/.test(i[i.length-2])))}function Q4(t){const i=/[!"&'),.:;<>?\]}]+$/.exec(t);if(!i)return[t,void 0];t=t.slice(0,i.index);let a=i[0],r=a.indexOf(")");const u=t1(t,"(");let s=t1(t,")");for(;r!==-1&&u>s;)t+=a.slice(0,r+1),a=a.slice(r+1),r=a.indexOf(")"),s++;return[t,a]}function Yy(t,i){const a=t.input.charCodeAt(t.index-1);return(t.index===0||$l(a)||tu(a))&&(!i||a!==47)}Xy.peek=nC;function F4(){this.buffer()}function Z4(t){this.enter({type:"footnoteReference",identifier:"",label:""},t)}function K4(){this.buffer()}function $4(t){this.enter({type:"footnoteDefinition",identifier:"",label:"",children:[]},t)}function P4(t){const i=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=pt(this.sliceSerialize(t)).toLowerCase(),a.label=i}function J4(t){this.exit(t)}function W4(t){const i=this.resume(),a=this.stack[this.stack.length-1];a.type,a.identifier=pt(this.sliceSerialize(t)).toLowerCase(),a.label=i}function eC(t){this.exit(t)}function nC(){return"["}function Xy(t,i,a,r){const u=a.createTracker(r);let s=u.move("[^");const c=a.enter("footnoteReference"),h=a.enter("reference");return s+=u.move(a.safe(a.associationId(t),{after:"]",before:s})),h(),c(),s+=u.move("]"),s}function tC(){return{enter:{gfmFootnoteCallString:F4,gfmFootnoteCall:Z4,gfmFootnoteDefinitionLabelString:K4,gfmFootnoteDefinition:$4},exit:{gfmFootnoteCallString:P4,gfmFootnoteCall:J4,gfmFootnoteDefinitionLabelString:W4,gfmFootnoteDefinition:eC}}}function lC(t){let i=!1;return t&&t.firstLineBlank&&(i=!0),{handlers:{footnoteDefinition:a,footnoteReference:Xy},unsafe:[{character:"[",inConstruct:["label","phrasing","reference"]}]};function a(r,u,s,c){const h=s.createTracker(c);let m=h.move("[^");const p=s.enter("footnoteDefinition"),y=s.enter("label");return m+=h.move(s.safe(s.associationId(r),{before:m,after:"]"})),y(),m+=h.move("]:"),r.children&&r.children.length>0&&(h.shift(4),m+=h.move((i?`
`:" ")+s.indentLines(s.containerFlow(r,h.current()),i?Qy:aC))),p(),m}}function aC(t,i,a){return i===0?t:Qy(t,i,a)}function Qy(t,i,a){return(a?"":"    ")+t}const iC=["autolink","destinationLiteral","destinationRaw","reference","titleQuote","titleApostrophe"];Fy.peek=cC;function rC(){return{canContainEols:["delete"],enter:{strikethrough:uC},exit:{strikethrough:sC}}}function oC(){return{unsafe:[{character:"~",inConstruct:"phrasing",notInConstruct:iC}],handlers:{delete:Fy}}}function uC(t){this.enter({type:"delete",children:[]},t)}function sC(t){this.exit(t)}function Fy(t,i,a,r){const u=a.createTracker(r),s=a.enter("strikethrough");let c=u.move("~~");return c+=a.containerPhrasing(t,{...u.current(),before:c,after:"~"}),c+=u.move("~~"),s(),c}function cC(){return"~"}function fC(t){return t.length}function dC(t,i){const a=i||{},r=(a.align||[]).concat(),u=a.stringLength||fC,s=[],c=[],h=[],m=[];let p=0,y=-1;for(;++y<t.length;){const _=[],T=[];let N=-1;for(t[y].length>p&&(p=t[y].length);++N<t[y].length;){const D=hC(t[y][N]);if(a.alignDelimiters!==!1){const j=u(D);T[N]=j,(m[N]===void 0||j>m[N])&&(m[N]=j)}_.push(D)}c[y]=_,h[y]=T}let g=-1;if(typeof r=="object"&&"length"in r)for(;++g<p;)s[g]=l1(r[g]);else{const _=l1(r);for(;++g<p;)s[g]=_}g=-1;const b=[],S=[];for(;++g<p;){const _=s[g];let T="",N="";_===99?(T=":",N=":"):_===108?T=":":_===114&&(N=":");let D=a.alignDelimiters===!1?1:Math.max(1,m[g]-T.length-N.length);const j=T+"-".repeat(D)+N;a.alignDelimiters!==!1&&(D=T.length+D+N.length,D>m[g]&&(m[g]=D),S[g]=D),b[g]=j}c.splice(1,0,b),h.splice(1,0,S),y=-1;const E=[];for(;++y<c.length;){const _=c[y],T=h[y];g=-1;const N=[];for(;++g<p;){const D=_[g]||"";let j="",Z="";if(a.alignDelimiters!==!1){const W=m[g]-(T[g]||0),q=s[g];q===114?j=" ".repeat(W):q===99?W%2?(j=" ".repeat(W/2+.5),Z=" ".repeat(W/2-.5)):(j=" ".repeat(W/2),Z=j):Z=" ".repeat(W)}a.delimiterStart!==!1&&!g&&N.push("|"),a.padding!==!1&&!(a.alignDelimiters===!1&&D==="")&&(a.delimiterStart!==!1||g)&&N.push(" "),a.alignDelimiters!==!1&&N.push(j),N.push(D),a.alignDelimiters!==!1&&N.push(Z),a.padding!==!1&&N.push(" "),(a.delimiterEnd!==!1||g!==p-1)&&N.push("|")}E.push(a.delimiterEnd===!1?N.join("").replace(/ +$/,""):N.join(""))}return E.join(`
`)}function hC(t){return t==null?"":String(t)}function l1(t){const i=typeof t=="string"?t.codePointAt(0):0;return i===67||i===99?99:i===76||i===108?108:i===82||i===114?114:0}function pC(t,i,a,r){const u=a.enter("blockquote"),s=a.createTracker(r);s.move("> "),s.shift(2);const c=a.indentLines(a.containerFlow(t,s.current()),mC);return u(),c}function mC(t,i,a){return">"+(a?"":" ")+t}function gC(t,i){return a1(t,i.inConstruct,!0)&&!a1(t,i.notInConstruct,!1)}function a1(t,i,a){if(typeof i=="string"&&(i=[i]),!i||i.length===0)return a;let r=-1;for(;++r<i.length;)if(t.includes(i[r]))return!0;return!1}function i1(t,i,a,r){let u=-1;for(;++u<a.unsafe.length;)if(a.unsafe[u].character===`
`&&gC(a.stack,a.unsafe[u]))return/[ \t]/.test(r.before)?"":" ";return`\\
`}function yC(t,i){const a=String(t);let r=a.indexOf(i),u=r,s=0,c=0;if(typeof i!="string")throw new TypeError("Expected substring");for(;r!==-1;)r===u?++s>c&&(c=s):s=1,u=r+i.length,r=a.indexOf(i,u);return c}function xC(t,i){return!!(i.options.fences===!1&&t.value&&!t.lang&&/[^ \r\n]/.test(t.value)&&!/^[\t ]*(?:[\r\n]|$)|(?:^|[\r\n])[\t ]*$/.test(t.value))}function bC(t){const i=t.options.fence||"`";if(i!=="`"&&i!=="~")throw new Error("Cannot serialize code with `"+i+"` for `options.fence`, expected `` ` `` or `~`");return i}function vC(t,i,a,r){const u=bC(a),s=t.value||"",c=u==="`"?"GraveAccent":"Tilde";if(xC(t,a)){const g=a.enter("codeIndented"),b=a.indentLines(s,SC);return g(),b}const h=a.createTracker(r),m=u.repeat(Math.max(yC(s,u)+1,3)),p=a.enter("codeFenced");let y=h.move(m);if(t.lang){const g=a.enter(`codeFencedLang${c}`);y+=h.move(a.safe(t.lang,{before:y,after:" ",encode:["`"],...h.current()})),g()}if(t.lang&&t.meta){const g=a.enter(`codeFencedMeta${c}`);y+=h.move(" "),y+=h.move(a.safe(t.meta,{before:y,after:`
`,encode:["`"],...h.current()})),g()}return y+=h.move(`
`),s&&(y+=h.move(s+`
`)),y+=h.move(m),p(),y}function SC(t,i,a){return(a?"":"    ")+t}function If(t){const i=t.options.quote||'"';if(i!=='"'&&i!=="'")throw new Error("Cannot serialize title with `"+i+"` for `options.quote`, expected `\"`, or `'`");return i}function wC(t,i,a,r){const u=If(a),s=u==='"'?"Quote":"Apostrophe",c=a.enter("definition");let h=a.enter("label");const m=a.createTracker(r);let p=m.move("[");return p+=m.move(a.safe(a.associationId(t),{before:p,after:"]",...m.current()})),p+=m.move("]: "),h(),!t.url||/[\0- \u007F]/.test(t.url)?(h=a.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(a.safe(t.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=a.enter("destinationRaw"),p+=m.move(a.safe(t.url,{before:p,after:t.title?" ":`
`,...m.current()}))),h(),t.title&&(h=a.enter(`title${s}`),p+=m.move(" "+u),p+=m.move(a.safe(t.title,{before:p,after:u,...m.current()})),p+=m.move(u),h()),c(),p}function AC(t){const i=t.options.emphasis||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize emphasis with `"+i+"` for `options.emphasis`, expected `*`, or `_`");return i}function rr(t){return"&#x"+t.toString(16).toUpperCase()+";"}function $o(t,i,a){const r=Za(t),u=Za(i);return r===void 0?u===void 0?a==="_"?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!0}:r===1?u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!0}:{inside:!1,outside:!1}:u===void 0?{inside:!1,outside:!1}:u===1?{inside:!0,outside:!1}:{inside:!1,outside:!1}}Zy.peek=kC;function Zy(t,i,a,r){const u=AC(a),s=a.enter("emphasis"),c=a.createTracker(r),h=c.move(u);let m=c.move(a.containerPhrasing(t,{after:u,before:h,...c.current()}));const p=m.charCodeAt(0),y=$o(r.before.charCodeAt(r.before.length-1),p,u);y.inside&&(m=rr(p)+m.slice(1));const g=m.charCodeAt(m.length-1),b=$o(r.after.charCodeAt(0),g,u);b.inside&&(m=m.slice(0,-1)+rr(g));const S=c.move(u);return s(),a.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},h+m+S}function kC(t,i,a){return a.options.emphasis||"*"}function EC(t,i){let a=!1;return Uf(t,function(r){if("value"in r&&/\r?\n|\r/.test(r.value)||r.type==="break")return a=!0,rf}),!!((!t.depth||t.depth<3)&&Mf(t)&&(i.options.setext||a))}function CC(t,i,a,r){const u=Math.max(Math.min(6,t.depth||1),1),s=a.createTracker(r);if(EC(t,a)){const y=a.enter("headingSetext"),g=a.enter("phrasing"),b=a.containerPhrasing(t,{...s.current(),before:`
`,after:`
`});return g(),y(),b+`
`+(u===1?"=":"-").repeat(b.length-(Math.max(b.lastIndexOf("\r"),b.lastIndexOf(`
`))+1))}const c="#".repeat(u),h=a.enter("headingAtx"),m=a.enter("phrasing");s.move(c+" ");let p=a.containerPhrasing(t,{before:"# ",after:`
`,...s.current()});return/^[\t ]/.test(p)&&(p=rr(p.charCodeAt(0))+p.slice(1)),p=p?c+" "+p:c,a.options.closeAtx&&(p+=" "+c),m(),h(),p}Ky.peek=TC;function Ky(t){return t.value||""}function TC(){return"<"}$y.peek=NC;function $y(t,i,a,r){const u=If(a),s=u==='"'?"Quote":"Apostrophe",c=a.enter("image");let h=a.enter("label");const m=a.createTracker(r);let p=m.move("![");return p+=m.move(a.safe(t.alt,{before:p,after:"]",...m.current()})),p+=m.move("]("),h(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(h=a.enter("destinationLiteral"),p+=m.move("<"),p+=m.move(a.safe(t.url,{before:p,after:">",...m.current()})),p+=m.move(">")):(h=a.enter("destinationRaw"),p+=m.move(a.safe(t.url,{before:p,after:t.title?" ":")",...m.current()}))),h(),t.title&&(h=a.enter(`title${s}`),p+=m.move(" "+u),p+=m.move(a.safe(t.title,{before:p,after:u,...m.current()})),p+=m.move(u),h()),p+=m.move(")"),c(),p}function NC(){return"!"}Py.peek=zC;function Py(t,i,a,r){const u=t.referenceType,s=a.enter("imageReference");let c=a.enter("label");const h=a.createTracker(r);let m=h.move("![");const p=a.safe(t.alt,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),c();const y=a.stack;a.stack=[],c=a.enter("reference");const g=a.safe(a.associationId(t),{before:m,after:"]",...h.current()});return c(),a.stack=y,s(),u==="full"||!p||p!==g?m+=h.move(g+"]"):u==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function zC(){return"!"}Jy.peek=_C;function Jy(t,i,a){let r=t.value||"",u="`",s=-1;for(;new RegExp("(^|[^`])"+u+"([^`]|$)").test(r);)u+="`";for(/[^ \r\n]/.test(r)&&(/^[ \r\n]/.test(r)&&/[ \r\n]$/.test(r)||/^`|`$/.test(r))&&(r=" "+r+" ");++s<a.unsafe.length;){const c=a.unsafe[s],h=a.compilePattern(c);let m;if(c.atBreak)for(;m=h.exec(r);){let p=m.index;r.charCodeAt(p)===10&&r.charCodeAt(p-1)===13&&p--,r=r.slice(0,p)+" "+r.slice(m.index+1)}}return u+r+u}function _C(){return"`"}function Wy(t,i){const a=Mf(t);return!!(!i.options.resourceLink&&t.url&&!t.title&&t.children&&t.children.length===1&&t.children[0].type==="text"&&(a===t.url||"mailto:"+a===t.url)&&/^[a-z][a-z+.-]+:/i.test(t.url)&&!/[\0- <>\u007F]/.test(t.url))}ex.peek=RC;function ex(t,i,a,r){const u=If(a),s=u==='"'?"Quote":"Apostrophe",c=a.createTracker(r);let h,m;if(Wy(t,a)){const y=a.stack;a.stack=[],h=a.enter("autolink");let g=c.move("<");return g+=c.move(a.containerPhrasing(t,{before:g,after:">",...c.current()})),g+=c.move(">"),h(),a.stack=y,g}h=a.enter("link"),m=a.enter("label");let p=c.move("[");return p+=c.move(a.containerPhrasing(t,{before:p,after:"](",...c.current()})),p+=c.move("]("),m(),!t.url&&t.title||/[\0- \u007F]/.test(t.url)?(m=a.enter("destinationLiteral"),p+=c.move("<"),p+=c.move(a.safe(t.url,{before:p,after:">",...c.current()})),p+=c.move(">")):(m=a.enter("destinationRaw"),p+=c.move(a.safe(t.url,{before:p,after:t.title?" ":")",...c.current()}))),m(),t.title&&(m=a.enter(`title${s}`),p+=c.move(" "+u),p+=c.move(a.safe(t.title,{before:p,after:u,...c.current()})),p+=c.move(u),m()),p+=c.move(")"),h(),p}function RC(t,i,a){return Wy(t,a)?"<":"["}nx.peek=MC;function nx(t,i,a,r){const u=t.referenceType,s=a.enter("linkReference");let c=a.enter("label");const h=a.createTracker(r);let m=h.move("[");const p=a.containerPhrasing(t,{before:m,after:"]",...h.current()});m+=h.move(p+"]["),c();const y=a.stack;a.stack=[],c=a.enter("reference");const g=a.safe(a.associationId(t),{before:m,after:"]",...h.current()});return c(),a.stack=y,s(),u==="full"||!p||p!==g?m+=h.move(g+"]"):u==="shortcut"?m=m.slice(0,-1):m+=h.move("]"),m}function MC(){return"["}function Vf(t){const i=t.options.bullet||"*";if(i!=="*"&&i!=="+"&&i!=="-")throw new Error("Cannot serialize items with `"+i+"` for `options.bullet`, expected `*`, `+`, or `-`");return i}function DC(t){const i=Vf(t),a=t.options.bulletOther;if(!a)return i==="*"?"-":"*";if(a!=="*"&&a!=="+"&&a!=="-")throw new Error("Cannot serialize items with `"+a+"` for `options.bulletOther`, expected `*`, `+`, or `-`");if(a===i)throw new Error("Expected `bullet` (`"+i+"`) and `bulletOther` (`"+a+"`) to be different");return a}function jC(t){const i=t.options.bulletOrdered||".";if(i!=="."&&i!==")")throw new Error("Cannot serialize items with `"+i+"` for `options.bulletOrdered`, expected `.` or `)`");return i}function tx(t){const i=t.options.rule||"*";if(i!=="*"&&i!=="-"&&i!=="_")throw new Error("Cannot serialize rules with `"+i+"` for `options.rule`, expected `*`, `-`, or `_`");return i}function OC(t,i,a,r){const u=a.enter("list"),s=a.bulletCurrent;let c=t.ordered?jC(a):Vf(a);const h=t.ordered?c==="."?")":".":DC(a);let m=i&&a.bulletLastUsed?c===a.bulletLastUsed:!1;if(!t.ordered){const y=t.children?t.children[0]:void 0;if((c==="*"||c==="-")&&y&&(!y.children||!y.children[0])&&a.stack[a.stack.length-1]==="list"&&a.stack[a.stack.length-2]==="listItem"&&a.stack[a.stack.length-3]==="list"&&a.stack[a.stack.length-4]==="listItem"&&a.indexStack[a.indexStack.length-1]===0&&a.indexStack[a.indexStack.length-2]===0&&a.indexStack[a.indexStack.length-3]===0&&(m=!0),tx(a)===c&&y){let g=-1;for(;++g<t.children.length;){const b=t.children[g];if(b&&b.type==="listItem"&&b.children&&b.children[0]&&b.children[0].type==="thematicBreak"){m=!0;break}}}}m&&(c=h),a.bulletCurrent=c;const p=a.containerFlow(t,r);return a.bulletLastUsed=c,a.bulletCurrent=s,u(),p}function LC(t){const i=t.options.listItemIndent||"one";if(i!=="tab"&&i!=="one"&&i!=="mixed")throw new Error("Cannot serialize items with `"+i+"` for `options.listItemIndent`, expected `tab`, `one`, or `mixed`");return i}function BC(t,i,a,r){const u=LC(a);let s=a.bulletCurrent||Vf(a);i&&i.type==="list"&&i.ordered&&(s=(typeof i.start=="number"&&i.start>-1?i.start:1)+(a.options.incrementListMarker===!1?0:i.children.indexOf(t))+s);let c=s.length+1;(u==="tab"||u==="mixed"&&(i&&i.type==="list"&&i.spread||t.spread))&&(c=Math.ceil(c/4)*4);const h=a.createTracker(r);h.move(s+" ".repeat(c-s.length)),h.shift(c);const m=a.enter("listItem"),p=a.indentLines(a.containerFlow(t,h.current()),y);return m(),p;function y(g,b,S){return b?(S?"":" ".repeat(c))+g:(S?s:s+" ".repeat(c-s.length))+g}}function HC(t,i,a,r){const u=a.enter("paragraph"),s=a.enter("phrasing"),c=a.containerPhrasing(t,r);return s(),u(),c}const UC=iu(["break","delete","emphasis","footnote","footnoteReference","image","imageReference","inlineCode","inlineMath","link","linkReference","mdxJsxTextElement","mdxTextExpression","strong","text","textDirective"]);function qC(t,i,a,r){return(t.children.some(function(c){return UC(c)})?a.containerPhrasing:a.containerFlow).call(a,t,r)}function IC(t){const i=t.options.strong||"*";if(i!=="*"&&i!=="_")throw new Error("Cannot serialize strong with `"+i+"` for `options.strong`, expected `*`, or `_`");return i}lx.peek=VC;function lx(t,i,a,r){const u=IC(a),s=a.enter("strong"),c=a.createTracker(r),h=c.move(u+u);let m=c.move(a.containerPhrasing(t,{after:u,before:h,...c.current()}));const p=m.charCodeAt(0),y=$o(r.before.charCodeAt(r.before.length-1),p,u);y.inside&&(m=rr(p)+m.slice(1));const g=m.charCodeAt(m.length-1),b=$o(r.after.charCodeAt(0),g,u);b.inside&&(m=m.slice(0,-1)+rr(g));const S=c.move(u+u);return s(),a.attentionEncodeSurroundingInfo={after:b.outside,before:y.outside},h+m+S}function VC(t,i,a){return a.options.strong||"*"}function GC(t,i,a,r){return a.safe(t.value,r)}function YC(t){const i=t.options.ruleRepetition||3;if(i<3)throw new Error("Cannot serialize rules with repetition `"+i+"` for `options.ruleRepetition`, expected `3` or more");return i}function XC(t,i,a){const r=(tx(a)+(a.options.ruleSpaces?" ":"")).repeat(YC(a));return a.options.ruleSpaces?r.slice(0,-1):r}const ax={blockquote:pC,break:i1,code:vC,definition:wC,emphasis:Zy,hardBreak:i1,heading:CC,html:Ky,image:$y,imageReference:Py,inlineCode:Jy,link:ex,linkReference:nx,list:OC,listItem:BC,paragraph:HC,root:qC,strong:lx,text:GC,thematicBreak:XC};function QC(){return{enter:{table:FC,tableData:r1,tableHeader:r1,tableRow:KC},exit:{codeText:$C,table:ZC,tableData:Kc,tableHeader:Kc,tableRow:Kc}}}function FC(t){const i=t._align;this.enter({type:"table",align:i.map(function(a){return a==="none"?null:a}),children:[]},t),this.data.inTable=!0}function ZC(t){this.exit(t),this.data.inTable=void 0}function KC(t){this.enter({type:"tableRow",children:[]},t)}function Kc(t){this.exit(t)}function r1(t){this.enter({type:"tableCell",children:[]},t)}function $C(t){let i=this.resume();this.data.inTable&&(i=i.replace(/\\([\\|])/g,PC));const a=this.stack[this.stack.length-1];a.type,a.value=i,this.exit(t)}function PC(t,i){return i==="|"?i:t}function JC(t){const i=t||{},a=i.tableCellPadding,r=i.tablePipeAlign,u=i.stringLength,s=a?" ":"|";return{unsafe:[{character:"\r",inConstruct:"tableCell"},{character:`
`,inConstruct:"tableCell"},{atBreak:!0,character:"|",after:"[	 :-]"},{character:"|",inConstruct:"tableCell"},{atBreak:!0,character:":",after:"-"},{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{inlineCode:b,table:c,tableCell:m,tableRow:h}};function c(S,E,_,T){return p(y(S,_,T),S.align)}function h(S,E,_,T){const N=g(S,_,T),D=p([N]);return D.slice(0,D.indexOf(`
`))}function m(S,E,_,T){const N=_.enter("tableCell"),D=_.enter("phrasing"),j=_.containerPhrasing(S,{...T,before:s,after:s});return D(),N(),j}function p(S,E){return dC(S,{align:E,alignDelimiters:r,padding:a,stringLength:u})}function y(S,E,_){const T=S.children;let N=-1;const D=[],j=E.enter("table");for(;++N<T.length;)D[N]=g(T[N],E,_);return j(),D}function g(S,E,_){const T=S.children;let N=-1;const D=[],j=E.enter("tableRow");for(;++N<T.length;)D[N]=m(T[N],S,E,_);return j(),D}function b(S,E,_){let T=ax.inlineCode(S,E,_);return _.stack.includes("tableCell")&&(T=T.replace(/\|/g,"\\$&")),T}}function WC(){return{exit:{taskListCheckValueChecked:o1,taskListCheckValueUnchecked:o1,paragraph:n6}}}function e6(){return{unsafe:[{atBreak:!0,character:"-",after:"[:|-]"}],handlers:{listItem:t6}}}function o1(t){const i=this.stack[this.stack.length-2];i.type,i.checked=t.type==="taskListCheckValueChecked"}function n6(t){const i=this.stack[this.stack.length-2];if(i&&i.type==="listItem"&&typeof i.checked=="boolean"){const a=this.stack[this.stack.length-1];a.type;const r=a.children[0];if(r&&r.type==="text"){const u=i.children;let s=-1,c;for(;++s<u.length;){const h=u[s];if(h.type==="paragraph"){c=h;break}}c===a&&(r.value=r.value.slice(1),r.value.length===0?a.children.shift():a.position&&r.position&&typeof r.position.start.offset=="number"&&(r.position.start.column++,r.position.start.offset++,a.position.start=Object.assign({},r.position.start)))}}this.exit(t)}function t6(t,i,a,r){const u=t.children[0],s=typeof t.checked=="boolean"&&u&&u.type==="paragraph",c="["+(t.checked?"x":" ")+"] ",h=a.createTracker(r);s&&h.move(c);let m=ax.listItem(t,i,a,{...r,...h.current()});return s&&(m=m.replace(/^(?:[*+-]|\d+\.)([\r\n]| {1,3})/,p)),m;function p(y){return y+c}}function l6(){return[O4(),tC(),rC(),QC(),WC()]}function a6(t){return{extensions:[L4(),lC(t),oC(),JC(t),e6()]}}const i6={tokenize:f6,partial:!0},ix={tokenize:d6,partial:!0},rx={tokenize:h6,partial:!0},ox={tokenize:p6,partial:!0},r6={tokenize:m6,partial:!0},ux={name:"wwwAutolink",tokenize:s6,previous:cx},sx={name:"protocolAutolink",tokenize:c6,previous:fx},Zt={name:"emailAutolink",tokenize:u6,previous:dx},kt={};function o6(){return{text:kt}}let Zl=48;for(;Zl<123;)kt[Zl]=Zt,Zl++,Zl===58?Zl=65:Zl===91&&(Zl=97);kt[43]=Zt;kt[45]=Zt;kt[46]=Zt;kt[95]=Zt;kt[72]=[Zt,sx];kt[104]=[Zt,sx];kt[87]=[Zt,ux];kt[119]=[Zt,ux];function u6(t,i,a){const r=this;let u,s;return c;function c(g){return!cf(g)||!dx.call(r,r.previous)||Gf(r.events)?a(g):(t.enter("literalAutolink"),t.enter("literalAutolinkEmail"),h(g))}function h(g){return cf(g)?(t.consume(g),h):g===64?(t.consume(g),m):a(g)}function m(g){return g===46?t.check(r6,y,p)(g):g===45||g===95||Sn(g)?(s=!0,t.consume(g),m):y(g)}function p(g){return t.consume(g),u=!0,m}function y(g){return s&&u&&Tn(r.previous)?(t.exit("literalAutolinkEmail"),t.exit("literalAutolink"),i(g)):a(g)}}function s6(t,i,a){const r=this;return u;function u(c){return c!==87&&c!==119||!cx.call(r,r.previous)||Gf(r.events)?a(c):(t.enter("literalAutolink"),t.enter("literalAutolinkWww"),t.check(i6,t.attempt(ix,t.attempt(rx,s),a),a)(c))}function s(c){return t.exit("literalAutolinkWww"),t.exit("literalAutolink"),i(c)}}function c6(t,i,a){const r=this;let u="",s=!1;return c;function c(g){return(g===72||g===104)&&fx.call(r,r.previous)&&!Gf(r.events)?(t.enter("literalAutolink"),t.enter("literalAutolinkHttp"),u+=String.fromCodePoint(g),t.consume(g),h):a(g)}function h(g){if(Tn(g)&&u.length<5)return u+=String.fromCodePoint(g),t.consume(g),h;if(g===58){const b=u.toLowerCase();if(b==="http"||b==="https")return t.consume(g),m}return a(g)}function m(g){return g===47?(t.consume(g),s?p:(s=!0,m)):a(g)}function p(g){return g===null||Fo(g)||Ze(g)||$l(g)||tu(g)?a(g):t.attempt(ix,t.attempt(rx,y),a)(g)}function y(g){return t.exit("literalAutolinkHttp"),t.exit("literalAutolink"),i(g)}}function f6(t,i,a){let r=0;return u;function u(c){return(c===87||c===119)&&r<3?(r++,t.consume(c),u):c===46&&r===3?(t.consume(c),s):a(c)}function s(c){return c===null?a(c):i(c)}}function d6(t,i,a){let r,u,s;return c;function c(p){return p===46||p===95?t.check(ox,m,h)(p):p===null||Ze(p)||$l(p)||p!==45&&tu(p)?m(p):(s=!0,t.consume(p),c)}function h(p){return p===95?r=!0:(u=r,r=void 0),t.consume(p),c}function m(p){return u||r||!s?a(p):i(p)}}function h6(t,i){let a=0,r=0;return u;function u(c){return c===40?(a++,t.consume(c),u):c===41&&r<a?s(c):c===33||c===34||c===38||c===39||c===41||c===42||c===44||c===46||c===58||c===59||c===60||c===63||c===93||c===95||c===126?t.check(ox,i,s)(c):c===null||Ze(c)||$l(c)?i(c):(t.consume(c),u)}function s(c){return c===41&&r++,t.consume(c),u}}function p6(t,i,a){return r;function r(h){return h===33||h===34||h===39||h===41||h===42||h===44||h===46||h===58||h===59||h===63||h===95||h===126?(t.consume(h),r):h===38?(t.consume(h),s):h===93?(t.consume(h),u):h===60||h===null||Ze(h)||$l(h)?i(h):a(h)}function u(h){return h===null||h===40||h===91||Ze(h)||$l(h)?i(h):r(h)}function s(h){return Tn(h)?c(h):a(h)}function c(h){return h===59?(t.consume(h),r):Tn(h)?(t.consume(h),c):a(h)}}function m6(t,i,a){return r;function r(s){return t.consume(s),u}function u(s){return Sn(s)?a(s):i(s)}}function cx(t){return t===null||t===40||t===42||t===95||t===91||t===93||t===126||Ze(t)}function fx(t){return!Tn(t)}function dx(t){return!(t===47||cf(t))}function cf(t){return t===43||t===45||t===46||t===95||Sn(t)}function Gf(t){let i=t.length,a=!1;for(;i--;){const r=t[i][1];if((r.type==="labelLink"||r.type==="labelImage")&&!r._balanced){a=!0;break}if(r._gfmAutolinkLiteralWalkedInto){a=!1;break}}return t.length>0&&!a&&(t[t.length-1][1]._gfmAutolinkLiteralWalkedInto=!0),a}const g6={tokenize:k6,partial:!0};function y6(){return{document:{91:{name:"gfmFootnoteDefinition",tokenize:S6,continuation:{tokenize:w6},exit:A6}},text:{91:{name:"gfmFootnoteCall",tokenize:v6},93:{name:"gfmPotentialFootnoteCall",add:"after",tokenize:x6,resolveTo:b6}}}}function x6(t,i,a){const r=this;let u=r.events.length;const s=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let c;for(;u--;){const m=r.events[u][1];if(m.type==="labelImage"){c=m;break}if(m.type==="gfmFootnoteCall"||m.type==="labelLink"||m.type==="label"||m.type==="image"||m.type==="link")break}return h;function h(m){if(!c||!c._balanced)return a(m);const p=pt(r.sliceSerialize({start:c.end,end:r.now()}));return p.codePointAt(0)!==94||!s.includes(p.slice(1))?a(m):(t.enter("gfmFootnoteCallLabelMarker"),t.consume(m),t.exit("gfmFootnoteCallLabelMarker"),i(m))}}function b6(t,i){let a=t.length;for(;a--;)if(t[a][1].type==="labelImage"&&t[a][0]==="enter"){t[a][1];break}t[a+1][1].type="data",t[a+3][1].type="gfmFootnoteCallLabelMarker";const r={type:"gfmFootnoteCall",start:Object.assign({},t[a+3][1].start),end:Object.assign({},t[t.length-1][1].end)},u={type:"gfmFootnoteCallMarker",start:Object.assign({},t[a+3][1].end),end:Object.assign({},t[a+3][1].end)};u.end.column++,u.end.offset++,u.end._bufferIndex++;const s={type:"gfmFootnoteCallString",start:Object.assign({},u.end),end:Object.assign({},t[t.length-1][1].start)},c={type:"chunkString",contentType:"string",start:Object.assign({},s.start),end:Object.assign({},s.end)},h=[t[a+1],t[a+2],["enter",r,i],t[a+3],t[a+4],["enter",u,i],["exit",u,i],["enter",s,i],["enter",c,i],["exit",c,i],["exit",s,i],t[t.length-2],t[t.length-1],["exit",r,i]];return t.splice(a,t.length-a+1,...h),t}function v6(t,i,a){const r=this,u=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s=0,c;return h;function h(g){return t.enter("gfmFootnoteCall"),t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),m}function m(g){return g!==94?a(g):(t.enter("gfmFootnoteCallMarker"),t.consume(g),t.exit("gfmFootnoteCallMarker"),t.enter("gfmFootnoteCallString"),t.enter("chunkString").contentType="string",p)}function p(g){if(s>999||g===93&&!c||g===null||g===91||Ze(g))return a(g);if(g===93){t.exit("chunkString");const b=t.exit("gfmFootnoteCallString");return u.includes(pt(r.sliceSerialize(b)))?(t.enter("gfmFootnoteCallLabelMarker"),t.consume(g),t.exit("gfmFootnoteCallLabelMarker"),t.exit("gfmFootnoteCall"),i):a(g)}return Ze(g)||(c=!0),s++,t.consume(g),g===92?y:p}function y(g){return g===91||g===92||g===93?(t.consume(g),s++,p):p(g)}}function S6(t,i,a){const r=this,u=r.parser.gfmFootnotes||(r.parser.gfmFootnotes=[]);let s,c=0,h;return m;function m(E){return t.enter("gfmFootnoteDefinition")._container=!0,t.enter("gfmFootnoteDefinitionLabel"),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),p}function p(E){return E===94?(t.enter("gfmFootnoteDefinitionMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionMarker"),t.enter("gfmFootnoteDefinitionLabelString"),t.enter("chunkString").contentType="string",y):a(E)}function y(E){if(c>999||E===93&&!h||E===null||E===91||Ze(E))return a(E);if(E===93){t.exit("chunkString");const _=t.exit("gfmFootnoteDefinitionLabelString");return s=pt(r.sliceSerialize(_)),t.enter("gfmFootnoteDefinitionLabelMarker"),t.consume(E),t.exit("gfmFootnoteDefinitionLabelMarker"),t.exit("gfmFootnoteDefinitionLabel"),b}return Ze(E)||(h=!0),c++,t.consume(E),E===92?g:y}function g(E){return E===91||E===92||E===93?(t.consume(E),c++,y):y(E)}function b(E){return E===58?(t.enter("definitionMarker"),t.consume(E),t.exit("definitionMarker"),u.includes(s)||u.push(s),Oe(t,S,"gfmFootnoteDefinitionWhitespace")):a(E)}function S(E){return i(E)}}function w6(t,i,a){return t.check(fr,i,t.attempt(g6,i,a))}function A6(t){t.exit("gfmFootnoteDefinition")}function k6(t,i,a){const r=this;return Oe(t,u,"gfmFootnoteDefinitionIndent",5);function u(s){const c=r.events[r.events.length-1];return c&&c[1].type==="gfmFootnoteDefinitionIndent"&&c[2].sliceSerialize(c[1],!0).length===4?i(s):a(s)}}function E6(t){let a=(t||{}).singleTilde;const r={name:"strikethrough",tokenize:s,resolveAll:u};return a==null&&(a=!0),{text:{126:r},insideSpan:{null:[r]},attentionMarkers:{null:[126]}};function u(c,h){let m=-1;for(;++m<c.length;)if(c[m][0]==="enter"&&c[m][1].type==="strikethroughSequenceTemporary"&&c[m][1]._close){let p=m;for(;p--;)if(c[p][0]==="exit"&&c[p][1].type==="strikethroughSequenceTemporary"&&c[p][1]._open&&c[m][1].end.offset-c[m][1].start.offset===c[p][1].end.offset-c[p][1].start.offset){c[m][1].type="strikethroughSequence",c[p][1].type="strikethroughSequence";const y={type:"strikethrough",start:Object.assign({},c[p][1].start),end:Object.assign({},c[m][1].end)},g={type:"strikethroughText",start:Object.assign({},c[p][1].end),end:Object.assign({},c[m][1].start)},b=[["enter",y,h],["enter",c[p][1],h],["exit",c[p][1],h],["enter",g,h]],S=h.parser.constructs.insideSpan.null;S&&$n(b,b.length,0,lu(S,c.slice(p+1,m),h)),$n(b,b.length,0,[["exit",g,h],["enter",c[m][1],h],["exit",c[m][1],h],["exit",y,h]]),$n(c,p-1,m-p+3,b),m=p+b.length-2;break}}for(m=-1;++m<c.length;)c[m][1].type==="strikethroughSequenceTemporary"&&(c[m][1].type="data");return c}function s(c,h,m){const p=this.previous,y=this.events;let g=0;return b;function b(E){return p===126&&y[y.length-1][1].type!=="characterEscape"?m(E):(c.enter("strikethroughSequenceTemporary"),S(E))}function S(E){const _=Za(p);if(E===126)return g>1?m(E):(c.consume(E),g++,S);if(g<2&&!a)return m(E);const T=c.exit("strikethroughSequenceTemporary"),N=Za(E);return T._open=!N||N===2&&!!_,T._close=!_||_===2&&!!N,h(E)}}}class C6{constructor(){this.map=[]}add(i,a,r){T6(this,i,a,r)}consume(i){if(this.map.sort(function(s,c){return s[0]-c[0]}),this.map.length===0)return;let a=this.map.length;const r=[];for(;a>0;)a-=1,r.push(i.slice(this.map[a][0]+this.map[a][1]),this.map[a][2]),i.length=this.map[a][0];r.push(i.slice()),i.length=0;let u=r.pop();for(;u;){for(const s of u)i.push(s);u=r.pop()}this.map.length=0}}function T6(t,i,a,r){let u=0;if(!(a===0&&r.length===0)){for(;u<t.map.length;){if(t.map[u][0]===i){t.map[u][1]+=a,t.map[u][2].push(...r);return}u+=1}t.map.push([i,a,r])}}function N6(t,i){let a=!1;const r=[];for(;i<t.length;){const u=t[i];if(a){if(u[0]==="enter")u[1].type==="tableContent"&&r.push(t[i+1][1].type==="tableDelimiterMarker"?"left":"none");else if(u[1].type==="tableContent"){if(t[i-1][1].type==="tableDelimiterMarker"){const s=r.length-1;r[s]=r[s]==="left"?"center":"right"}}else if(u[1].type==="tableDelimiterRow")break}else u[0]==="enter"&&u[1].type==="tableDelimiterRow"&&(a=!0);i+=1}return r}function z6(){return{flow:{null:{name:"table",tokenize:_6,resolveAll:R6}}}}function _6(t,i,a){const r=this;let u=0,s=0,c;return h;function h(O){let J=r.events.length-1;for(;J>-1;){const re=r.events[J][1].type;if(re==="lineEnding"||re==="linePrefix")J--;else break}const ne=J>-1?r.events[J][1].type:null,xe=ne==="tableHead"||ne==="tableRow"?q:m;return xe===q&&r.parser.lazy[r.now().line]?a(O):xe(O)}function m(O){return t.enter("tableHead"),t.enter("tableRow"),p(O)}function p(O){return O===124||(c=!0,s+=1),y(O)}function y(O){return O===null?a(O):me(O)?s>1?(s=0,r.interrupt=!0,t.exit("tableRow"),t.enter("lineEnding"),t.consume(O),t.exit("lineEnding"),S):a(O):_e(O)?Oe(t,y,"whitespace")(O):(s+=1,c&&(c=!1,u+=1),O===124?(t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),c=!0,y):(t.enter("data"),g(O)))}function g(O){return O===null||O===124||Ze(O)?(t.exit("data"),y(O)):(t.consume(O),O===92?b:g)}function b(O){return O===92||O===124?(t.consume(O),g):g(O)}function S(O){return r.interrupt=!1,r.parser.lazy[r.now().line]?a(O):(t.enter("tableDelimiterRow"),c=!1,_e(O)?Oe(t,E,"linePrefix",r.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(O):E(O))}function E(O){return O===45||O===58?T(O):O===124?(c=!0,t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),_):W(O)}function _(O){return _e(O)?Oe(t,T,"whitespace")(O):T(O)}function T(O){return O===58?(s+=1,c=!0,t.enter("tableDelimiterMarker"),t.consume(O),t.exit("tableDelimiterMarker"),N):O===45?(s+=1,N(O)):O===null||me(O)?Z(O):W(O)}function N(O){return O===45?(t.enter("tableDelimiterFiller"),D(O)):W(O)}function D(O){return O===45?(t.consume(O),D):O===58?(c=!0,t.exit("tableDelimiterFiller"),t.enter("tableDelimiterMarker"),t.consume(O),t.exit("tableDelimiterMarker"),j):(t.exit("tableDelimiterFiller"),j(O))}function j(O){return _e(O)?Oe(t,Z,"whitespace")(O):Z(O)}function Z(O){return O===124?E(O):O===null||me(O)?!c||u!==s?W(O):(t.exit("tableDelimiterRow"),t.exit("tableHead"),i(O)):W(O)}function W(O){return a(O)}function q(O){return t.enter("tableRow"),ee(O)}function ee(O){return O===124?(t.enter("tableCellDivider"),t.consume(O),t.exit("tableCellDivider"),ee):O===null||me(O)?(t.exit("tableRow"),i(O)):_e(O)?Oe(t,ee,"whitespace")(O):(t.enter("data"),$(O))}function $(O){return O===null||O===124||Ze(O)?(t.exit("data"),ee(O)):(t.consume(O),O===92?ue:$)}function ue(O){return O===92||O===124?(t.consume(O),$):$(O)}}function R6(t,i){let a=-1,r=!0,u=0,s=[0,0,0,0],c=[0,0,0,0],h=!1,m=0,p,y,g;const b=new C6;for(;++a<t.length;){const S=t[a],E=S[1];S[0]==="enter"?E.type==="tableHead"?(h=!1,m!==0&&(u1(b,i,m,p,y),y=void 0,m=0),p={type:"table",start:Object.assign({},E.start),end:Object.assign({},E.end)},b.add(a,0,[["enter",p,i]])):E.type==="tableRow"||E.type==="tableDelimiterRow"?(r=!0,g=void 0,s=[0,0,0,0],c=[0,a+1,0,0],h&&(h=!1,y={type:"tableBody",start:Object.assign({},E.start),end:Object.assign({},E.end)},b.add(a,0,[["enter",y,i]])),u=E.type==="tableDelimiterRow"?2:y?3:1):u&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")?(r=!1,c[2]===0&&(s[1]!==0&&(c[0]=c[1],g=Uo(b,i,s,u,void 0,g),s=[0,0,0,0]),c[2]=a)):E.type==="tableCellDivider"&&(r?r=!1:(s[1]!==0&&(c[0]=c[1],g=Uo(b,i,s,u,void 0,g)),s=c,c=[s[1],a,0,0])):E.type==="tableHead"?(h=!0,m=a):E.type==="tableRow"||E.type==="tableDelimiterRow"?(m=a,s[1]!==0?(c[0]=c[1],g=Uo(b,i,s,u,a,g)):c[1]!==0&&(g=Uo(b,i,c,u,a,g)),u=0):u&&(E.type==="data"||E.type==="tableDelimiterMarker"||E.type==="tableDelimiterFiller")&&(c[3]=a)}for(m!==0&&u1(b,i,m,p,y),b.consume(i.events),a=-1;++a<i.events.length;){const S=i.events[a];S[0]==="enter"&&S[1].type==="table"&&(S[1]._align=N6(i.events,a))}return t}function Uo(t,i,a,r,u,s){const c=r===1?"tableHeader":r===2?"tableDelimiter":"tableData",h="tableContent";a[0]!==0&&(s.end=Object.assign({},Ya(i.events,a[0])),t.add(a[0],0,[["exit",s,i]]));const m=Ya(i.events,a[1]);if(s={type:c,start:Object.assign({},m),end:Object.assign({},m)},t.add(a[1],0,[["enter",s,i]]),a[2]!==0){const p=Ya(i.events,a[2]),y=Ya(i.events,a[3]),g={type:h,start:Object.assign({},p),end:Object.assign({},y)};if(t.add(a[2],0,[["enter",g,i]]),r!==2){const b=i.events[a[2]],S=i.events[a[3]];if(b[1].end=Object.assign({},S[1].end),b[1].type="chunkText",b[1].contentType="text",a[3]>a[2]+1){const E=a[2]+1,_=a[3]-a[2]-1;t.add(E,_,[])}}t.add(a[3]+1,0,[["exit",g,i]])}return u!==void 0&&(s.end=Object.assign({},Ya(i.events,u)),t.add(u,0,[["exit",s,i]]),s=void 0),s}function u1(t,i,a,r,u){const s=[],c=Ya(i.events,a);u&&(u.end=Object.assign({},c),s.push(["exit",u,i])),r.end=Object.assign({},c),s.push(["exit",r,i]),t.add(a+1,0,s)}function Ya(t,i){const a=t[i],r=a[0]==="enter"?"start":"end";return a[1][r]}const M6={name:"tasklistCheck",tokenize:j6};function D6(){return{text:{91:M6}}}function j6(t,i,a){const r=this;return u;function u(m){return r.previous!==null||!r._gfmTasklistFirstContentOfListItem?a(m):(t.enter("taskListCheck"),t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),s)}function s(m){return Ze(m)?(t.enter("taskListCheckValueUnchecked"),t.consume(m),t.exit("taskListCheckValueUnchecked"),c):m===88||m===120?(t.enter("taskListCheckValueChecked"),t.consume(m),t.exit("taskListCheckValueChecked"),c):a(m)}function c(m){return m===93?(t.enter("taskListCheckMarker"),t.consume(m),t.exit("taskListCheckMarker"),t.exit("taskListCheck"),h):a(m)}function h(m){return me(m)?i(m):_e(m)?t.check({tokenize:O6},i,a)(m):a(m)}}function O6(t,i,a){return Oe(t,r,"whitespace");function r(u){return u===null?a(u):i(u)}}function L6(t){return Ay([o6(),y6(),E6(t),z6(),D6()])}const B6={};function H6(t){const i=this,a=t||B6,r=i.data(),u=r.micromarkExtensions||(r.micromarkExtensions=[]),s=r.fromMarkdownExtensions||(r.fromMarkdownExtensions=[]),c=r.toMarkdownExtensions||(r.toMarkdownExtensions=[]);u.push(L6(a)),s.push(l6()),c.push(a6(a))}const Kl={repo:"speedking7/personalweb",repoId:"R_kgDORqbsFQ",category:"Announcements",categoryId:"DIC_kwDORqbsFc4DERcV",theme:"light",lang:"zh-CN"},s1=()=>!!Kl.categoryId;function hx({term:t,title:i="留言"}){const a=C.useRef(null);return C.useEffect(()=>{const r=a.current;if(!r||!s1())return;r.innerHTML="";const u=document.createElement("script");return u.src="https://giscus.app/client.js",u.async=!0,u.crossOrigin="anonymous",u.setAttribute("data-repo",Kl.repo),u.setAttribute("data-repo-id",Kl.repoId),u.setAttribute("data-category",Kl.category),u.setAttribute("data-category-id",Kl.categoryId),u.setAttribute("data-mapping","specific"),u.setAttribute("data-term",t),u.setAttribute("data-strict","1"),u.setAttribute("data-reactions-enabled","1"),u.setAttribute("data-emit-metadata","0"),u.setAttribute("data-input-position","top"),u.setAttribute("data-theme",Kl.theme),u.setAttribute("data-lang",Kl.lang),u.setAttribute("data-loading","lazy"),r.appendChild(u),()=>{r.innerHTML=""}},[t]),v.jsxs("div",{"code-path":"src/components/Comments.tsx:54:5",className:"bg-white rounded-xl p-6 md:p-8 shadow-sm",children:[v.jsx("h2",{"code-path":"src/components/Comments.tsx:55:7",className:"text-xl font-medium text-[#1a1a1a] mb-1",children:i}),v.jsx("p",{"code-path":"src/components/Comments.tsx:56:7",className:"text-[#9ca3af] text-sm mb-6",children:"评论由 GitHub Discussions 驱动，需登录 GitHub 账号后发表"}),s1()?v.jsx("div",{"code-path":"src/components/Comments.tsx:61:9",ref:a}):v.jsxs("div",{"code-path":"src/components/Comments.tsx:65:9",className:"rounded-lg bg-[#faf9f6] border border-[#eee9e0] px-5 py-6",children:[v.jsx("p",{"code-path":"src/components/Comments.tsx:66:11",className:"text-[#4a4a4a] text-sm mb-2",children:"评论区尚未接通。"}),v.jsxs("p",{"code-path":"src/components/Comments.tsx:67:11",className:"text-[#6b7280] text-sm leading-relaxed",children:["需要在仓库启用 Discussions、安装 giscus 应用， 并把生成的 category id 填入 ",v.jsx("code",{"code-path":"src/components/Comments.tsx:69:34",className:"px-1 bg-[#f0f0f0] rounded",children:"src/config/giscus.ts"}),"。"]})]})]})}function U6(){const{id:t}=Bv(),[i,a]=C.useState(null),[r,u]=C.useState(!0),[,s]=C.useState(null);return C.useEffect(()=>{window.scrollTo(0,0);async function c(){if(!t){s("文章ID无效"),u(!1);return}try{u(!0);const h=await rA(t);a(h||null),s(null),h&&pA(t)}catch(h){console.error("Failed to load post:",h),s("加载文章失败")}finally{u(!1)}}c()},[t]),r?v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:52:7",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16 flex items-center justify-center",children:v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:53:9",className:"text-center",children:[v.jsx(H1,{"code-path":"src/pages/BlogDetail.tsx:54:11",className:"w-8 h-8 animate-spin mx-auto text-[#6b6b6b] mb-4"}),v.jsx("p",{"code-path":"src/pages/BlogDetail.tsx:55:11",className:"text-[#6b6b6b]",children:"加载中..."})]})}):i?v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:81:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:82:7",className:"max-w-[800px] mx-auto px-6 lg:px-12",children:[v.jsxs(Kn,{"code-path":"src/pages/BlogDetail.tsx:84:9",to:"/blog",className:"inline-flex items-center gap-2 text-[#6b6b6b] hover:text-[#1a1a1a] mb-6 transition-colors",children:[v.jsx(ig,{"code-path":"src/pages/BlogDetail.tsx:88:11",className:"w-4 h-4"}),"返回博客"]}),v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:93:9",className:"bg-white rounded-xl overflow-hidden shadow-sm mb-8",children:[i.coverImage&&v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:95:13",className:"aspect-video",children:v.jsx("img",{"code-path":"src/pages/BlogDetail.tsx:96:15",src:i.coverImage,alt:i.title,className:"w-full h-full object-cover"})}),v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:103:11",className:"p-8",children:[v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:104:13",className:"flex flex-wrap items-center gap-3 mb-4",children:[v.jsx("span",{"code-path":"src/pages/BlogDetail.tsx:105:15",className:"px-3 py-1 bg-[#f0f0f0] text-[#4a4a4a] text-sm font-medium rounded-full",children:i.category}),v.jsxs("span",{"code-path":"src/pages/BlogDetail.tsx:108:15",className:"flex items-center gap-1 text-[#9ca3af] text-sm",children:[v.jsx(eu,{"code-path":"src/pages/BlogDetail.tsx:109:17",className:"w-4 h-4"}),i.date]}),v.jsxs("span",{"code-path":"src/pages/BlogDetail.tsx:112:15",className:"flex items-center gap-1 text-[#9ca3af] text-sm",children:[v.jsx(O1,{"code-path":"src/pages/BlogDetail.tsx:113:17",className:"w-4 h-4"}),i.readTime," 分钟阅读"]})]}),v.jsx("h1",{"code-path":"src/pages/BlogDetail.tsx:117:13",className:"text-2xl md:text-3xl font-medium text-[#1a1a1a] mb-4",children:i.title}),v.jsx("p",{"code-path":"src/pages/BlogDetail.tsx:120:13",className:"text-[#6b6b6b] text-lg",children:i.excerpt})]})]}),v.jsx("article",{"code-path":"src/pages/BlogDetail.tsx:125:9",className:"bg-white rounded-xl p-8 shadow-sm",children:v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:132:11",className:"prose prose-lg max-w-none",children:v.jsx(E4,{"code-path":"src/pages/BlogDetail.tsx:133:13",remarkPlugins:[H6],children:i.content})})}),v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:138:9",className:"mt-8 flex flex-wrap items-center gap-2",children:[v.jsx(q1,{"code-path":"src/pages/BlogDetail.tsx:139:11",className:"w-5 h-5 text-[#9ca3af]"}),i.tags.map(c=>v.jsx("span",{"code-path":"src/pages/BlogDetail.tsx:141:13",className:"px-3 py-1 bg-white text-[#6b6b6b] text-sm rounded-full shadow-sm",children:c},c))]}),v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:152:9",className:"mt-12",children:v.jsx(hx,{"code-path":"src/pages/BlogDetail.tsx:153:11",term:i.id,title:"留言"})}),v.jsx(q6,{"code-path":"src/pages/BlogDetail.tsx:157:9",currentPostId:i.id,category:i.category})]})}):v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:63:7",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16 flex items-center justify-center",children:v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:64:9",className:"text-center",children:[v.jsx("h1",{"code-path":"src/pages/BlogDetail.tsx:65:11",className:"text-2xl font-medium text-[#1a1a1a] mb-4",children:"文章未找到"}),v.jsxs(Kn,{"code-path":"src/pages/BlogDetail.tsx:68:11",to:"/blog",className:"text-[#6b6b6b] hover:text-[#1a1a1a] flex items-center gap-2 justify-center",children:[v.jsx(ig,{"code-path":"src/pages/BlogDetail.tsx:72:13",className:"w-4 h-4"}),"返回博客"]})]})})}function q6({currentPostId:t,category:i}){const[a,r]=C.useState([]);return C.useEffect(()=>{async function u(){try{const c=(await sr()).filter(h=>h.id!==t&&h.category===i).slice(0,2);r(c)}catch(s){console.error("Failed to load related posts:",s)}}u()},[t,i]),a.length===0?null:v.jsxs("div",{"code-path":"src/pages/BlogDetail.tsx:186:5",className:"mt-12",children:[v.jsx("h2",{"code-path":"src/pages/BlogDetail.tsx:187:7",className:"text-xl font-medium text-[#1a1a1a] mb-6",children:"相关文章"}),v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:188:7",className:"grid md:grid-cols-2 gap-4",children:a.map(u=>v.jsxs(Kn,{"code-path":"src/pages/BlogDetail.tsx:190:11",to:`/blog/${u.id}`,className:"group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all",children:[u.coverImage&&v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:196:15",className:"aspect-video overflow-hidden",children:v.jsx("img",{"code-path":"src/pages/BlogDetail.tsx:197:17",src:u.coverImage,alt:u.title,className:"w-full h-full object-cover group-hover:scale-105 transition-transform"})}),v.jsx("div",{"code-path":"src/pages/BlogDetail.tsx:204:13",className:"p-4",children:v.jsx("h3",{"code-path":"src/pages/BlogDetail.tsx:205:15",className:"font-medium text-[#1a1a1a] group-hover:text-[#6b6b6b] transition-colors",children:u.title})})]},u.id))})]})}function px(t,[i,a]){return Math.min(a,Math.max(i,t))}function Xa(t,i,{checkForDefaultPrevented:a=!0}={}){return function(u){if(t?.(u),a===!1||!u.defaultPrevented)return i?.(u)}}function mx(t,i=[]){let a=[];function r(s,c){const h=C.createContext(c),m=a.length;a=[...a,c];const p=g=>{const{scope:b,children:S,...E}=g,_=b?.[t]?.[m]||h,T=C.useMemo(()=>E,Object.values(E));return v.jsx(_.Provider,{value:T,children:S})};p.displayName=s+"Provider";function y(g,b){const S=b?.[t]?.[m]||h,E=C.useContext(S);if(E)return E;if(c!==void 0)return c;throw new Error(`\`${g}\` must be used within \`${s}\``)}return[p,y]}const u=()=>{const s=a.map(c=>C.createContext(c));return function(h){const m=h?.[t]||s;return C.useMemo(()=>({[`__scope${t}`]:{...h,[t]:m}}),[h,m])}};return u.scopeName=t,[r,I6(u,...i)]}function I6(...t){const i=t[0];if(t.length===1)return i;const a=()=>{const r=t.map(u=>({useScope:u(),scopeName:u.scopeName}));return function(s){const c=r.reduce((h,{useScope:m,scopeName:p})=>{const g=m(s)[`__scope${p}`];return{...h,...g}},{});return C.useMemo(()=>({[`__scope${i.scopeName}`]:c}),[c])}};return a.scopeName=i.scopeName,a}var gx=globalThis?.document?C.useLayoutEffect:()=>{},V6=h1[" useInsertionEffect ".trim().toString()]||gx;function G6({prop:t,defaultProp:i,onChange:a=()=>{},caller:r}){const[u,s,c]=Y6({defaultProp:i,onChange:a}),h=t!==void 0,m=h?t:u;{const y=C.useRef(t!==void 0);C.useEffect(()=>{const g=y.current;g!==h&&console.warn(`${r} is changing from ${g?"controlled":"uncontrolled"} to ${h?"controlled":"uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),y.current=h},[h,r])}const p=C.useCallback(y=>{if(h){const g=X6(y)?y(t):y;g!==t&&c.current?.(g)}else s(y)},[h,t,s,c]);return[m,p]}function Y6({defaultProp:t,onChange:i}){const[a,r]=C.useState(t),u=C.useRef(a),s=C.useRef(i);return V6(()=>{s.current=i},[i]),C.useEffect(()=>{u.current!==a&&(s.current?.(a),u.current=a)},[a,u]),[a,r,s]}function X6(t){return typeof t=="function"}var Q6=C.createContext(void 0);function F6(t){const i=C.useContext(Q6);return t||i||"ltr"}function Z6(t){const i=C.useRef({value:t,previous:t});return C.useMemo(()=>(i.current.value!==t&&(i.current.previous=i.current.value,i.current.value=t),i.current.previous),[t])}function K6(t){const[i,a]=C.useState(void 0);return gx(()=>{if(t){a({width:t.offsetWidth,height:t.offsetHeight});const r=new ResizeObserver(u=>{if(!Array.isArray(u)||!u.length)return;const s=u[0];let c,h;if("borderBoxSize"in s){const m=s.borderBoxSize,p=Array.isArray(m)?m[0]:m;c=p.inlineSize,h=p.blockSize}else c=t.offsetWidth,h=t.offsetHeight;a({width:c,height:h})});return r.observe(t,{box:"border-box"}),()=>r.unobserve(t)}else a(void 0)},[t]),i}function $6(t){const i=P6(t),a=C.forwardRef((r,u)=>{const{children:s,...c}=r,h=C.Children.toArray(s),m=h.find(W6);if(m){const p=m.props.children,y=h.map(g=>g===m?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:g);return v.jsx(i,{...c,ref:u,children:C.isValidElement(p)?C.cloneElement(p,void 0,y):null})}return v.jsx(i,{...c,ref:u,children:s})});return a.displayName=`${t}.Slot`,a}function P6(t){const i=C.forwardRef((a,r)=>{const{children:u,...s}=a;if(C.isValidElement(u)){const c=nT(u),h=eT(s,u.props);return u.type!==C.Fragment&&(h.ref=r?nu(r,c):c),C.cloneElement(u,h)}return C.Children.count(u)>1?C.Children.only(null):null});return i.displayName=`${t}.SlotClone`,i}var J6=Symbol("radix.slottable");function W6(t){return C.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===J6}function eT(t,i){const a={...i};for(const r in i){const u=t[r],s=i[r];/^on[A-Z]/.test(r)?u&&s?a[r]=(...h)=>{const m=s(...h);return u(...h),m}:u&&(a[r]=u):r==="style"?a[r]={...u,...s}:r==="className"&&(a[r]=[u,s].filter(Boolean).join(" "))}return{...t,...a}}function nT(t){let i=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning;return a?t.ref:(i=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}var tT=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","select","span","svg","ul"],hr=tT.reduce((t,i)=>{const a=$6(`Primitive.${i}`),r=C.forwardRef((u,s)=>{const{asChild:c,...h}=u,m=c?a:i;return typeof window<"u"&&(window[Symbol.for("radix-ui")]=!0),v.jsx(m,{...h,ref:s})});return r.displayName=`Primitive.${i}`,{...t,[i]:r}},{});function c1(t){const i=lT(t),a=C.forwardRef((r,u)=>{const{children:s,...c}=r,h=C.Children.toArray(s),m=h.find(iT);if(m){const p=m.props.children,y=h.map(g=>g===m?C.Children.count(p)>1?C.Children.only(null):C.isValidElement(p)?p.props.children:null:g);return v.jsx(i,{...c,ref:u,children:C.isValidElement(p)?C.cloneElement(p,void 0,y):null})}return v.jsx(i,{...c,ref:u,children:s})});return a.displayName=`${t}.Slot`,a}function lT(t){const i=C.forwardRef((a,r)=>{const{children:u,...s}=a;if(C.isValidElement(u)){const c=oT(u),h=rT(s,u.props);return u.type!==C.Fragment&&(h.ref=r?nu(r,c):c),C.cloneElement(u,h)}return C.Children.count(u)>1?C.Children.only(null):null});return i.displayName=`${t}.SlotClone`,i}var aT=Symbol("radix.slottable");function iT(t){return C.isValidElement(t)&&typeof t.type=="function"&&"__radixId"in t.type&&t.type.__radixId===aT}function rT(t,i){const a={...i};for(const r in i){const u=t[r],s=i[r];/^on[A-Z]/.test(r)?u&&s?a[r]=(...h)=>{const m=s(...h);return u(...h),m}:u&&(a[r]=u):r==="style"?a[r]={...u,...s}:r==="className"&&(a[r]=[u,s].filter(Boolean).join(" "))}return{...t,...a}}function oT(t){let i=Object.getOwnPropertyDescriptor(t.props,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning;return a?t.ref:(i=Object.getOwnPropertyDescriptor(t,"ref")?.get,a=i&&"isReactWarning"in i&&i.isReactWarning,a?t.props.ref:t.props.ref||t.ref)}function uT(t){const i=t+"CollectionProvider",[a,r]=mx(i),[u,s]=a(i,{collectionRef:{current:null},itemMap:new Map}),c=_=>{const{scope:T,children:N}=_,D=El.useRef(null),j=El.useRef(new Map).current;return v.jsx(u,{scope:T,itemMap:j,collectionRef:D,children:N})};c.displayName=i;const h=t+"CollectionSlot",m=c1(h),p=El.forwardRef((_,T)=>{const{scope:N,children:D}=_,j=s(h,N),Z=Cl(T,j.collectionRef);return v.jsx(m,{ref:Z,children:D})});p.displayName=h;const y=t+"CollectionItemSlot",g="data-radix-collection-item",b=c1(y),S=El.forwardRef((_,T)=>{const{scope:N,children:D,...j}=_,Z=El.useRef(null),W=Cl(T,Z),q=s(y,N);return El.useEffect(()=>(q.itemMap.set(Z,{ref:Z,...j}),()=>{q.itemMap.delete(Z)})),v.jsx(b,{[g]:"",ref:W,children:D})});S.displayName=y;function E(_){const T=s(t+"CollectionConsumer",_);return El.useCallback(()=>{const D=T.collectionRef.current;if(!D)return[];const j=Array.from(D.querySelectorAll(`[${g}]`));return Array.from(T.itemMap.values()).sort((q,ee)=>j.indexOf(q.ref.current)-j.indexOf(ee.ref.current))},[T.collectionRef,T.itemMap])}return[{Provider:c,Slot:p,ItemSlot:S},E,r]}var yx=["PageUp","PageDown"],xx=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"],bx={"from-left":["Home","PageDown","ArrowDown","ArrowLeft"],"from-right":["Home","PageDown","ArrowDown","ArrowRight"],"from-bottom":["Home","PageDown","ArrowDown","ArrowLeft"],"from-top":["Home","PageDown","ArrowUp","ArrowLeft"]},Wa="Slider",[ff,sT,cT]=uT(Wa),[vx]=mx(Wa,[cT]),[fT,ou]=vx(Wa),Sx=C.forwardRef((t,i)=>{const{name:a,min:r=0,max:u=100,step:s=1,orientation:c="horizontal",disabled:h=!1,minStepsBetweenThumbs:m=0,defaultValue:p=[r],value:y,onValueChange:g=()=>{},onValueCommit:b=()=>{},inverted:S=!1,form:E,..._}=t,T=C.useRef(new Set),N=C.useRef(0),j=c==="horizontal"?dT:hT,[Z=[],W]=G6({prop:y,defaultProp:p,onChange:J=>{[...T.current][N.current]?.focus(),g(J)}}),q=C.useRef(Z);function ee(J){const ne=xT(Z,J);O(J,ne)}function $(J){O(J,N.current)}function ue(){const J=q.current[N.current];Z[N.current]!==J&&b(Z)}function O(J,ne,{commit:xe}={commit:!1}){const re=wT(s),P=AT(Math.round((J-r)/s)*s+r,re),B=px(P,[r,u]);W((K=[])=>{const ie=gT(K,B,ne);if(ST(ie,m*s)){N.current=ie.indexOf(B);const ve=String(ie)!==String(K);return ve&&xe&&b(ie),ve?ie:K}else return K})}return v.jsx(fT,{scope:t.__scopeSlider,name:a,disabled:h,min:r,max:u,valueIndexToChangeRef:N,thumbs:T.current,values:Z,orientation:c,form:E,children:v.jsx(ff.Provider,{scope:t.__scopeSlider,children:v.jsx(ff.Slot,{scope:t.__scopeSlider,children:v.jsx(j,{"aria-disabled":h,"data-disabled":h?"":void 0,..._,ref:i,onPointerDown:Xa(_.onPointerDown,()=>{h||(q.current=Z)}),min:r,max:u,inverted:S,onSlideStart:h?void 0:ee,onSlideMove:h?void 0:$,onSlideEnd:h?void 0:ue,onHomeKeyDown:()=>!h&&O(r,0,{commit:!0}),onEndKeyDown:()=>!h&&O(u,Z.length-1,{commit:!0}),onStepKeyDown:({event:J,direction:ne})=>{if(!h){const P=yx.includes(J.key)||J.shiftKey&&xx.includes(J.key)?10:1,B=N.current,K=Z[B],ie=s*P*ne;O(K+ie,B,{commit:!0})}}})})})})});Sx.displayName=Wa;var[wx,Ax]=vx(Wa,{startEdge:"left",endEdge:"right",size:"width",direction:1}),dT=C.forwardRef((t,i)=>{const{min:a,max:r,dir:u,inverted:s,onSlideStart:c,onSlideMove:h,onSlideEnd:m,onStepKeyDown:p,...y}=t,[g,b]=C.useState(null),S=Cl(i,j=>b(j)),E=C.useRef(void 0),_=F6(u),T=_==="ltr",N=T&&!s||!T&&s;function D(j){const Z=E.current||g.getBoundingClientRect(),W=[0,Z.width],ee=Yf(W,N?[a,r]:[r,a]);return E.current=Z,ee(j-Z.left)}return v.jsx(wx,{scope:t.__scopeSlider,startEdge:N?"left":"right",endEdge:N?"right":"left",direction:N?1:-1,size:"width",children:v.jsx(kx,{dir:_,"data-orientation":"horizontal",...y,ref:S,style:{...y.style,"--radix-slider-thumb-transform":"translateX(-50%)"},onSlideStart:j=>{const Z=D(j.clientX);c?.(Z)},onSlideMove:j=>{const Z=D(j.clientX);h?.(Z)},onSlideEnd:()=>{E.current=void 0,m?.()},onStepKeyDown:j=>{const W=bx[N?"from-left":"from-right"].includes(j.key);p?.({event:j,direction:W?-1:1})}})})}),hT=C.forwardRef((t,i)=>{const{min:a,max:r,inverted:u,onSlideStart:s,onSlideMove:c,onSlideEnd:h,onStepKeyDown:m,...p}=t,y=C.useRef(null),g=Cl(i,y),b=C.useRef(void 0),S=!u;function E(_){const T=b.current||y.current.getBoundingClientRect(),N=[0,T.height],j=Yf(N,S?[r,a]:[a,r]);return b.current=T,j(_-T.top)}return v.jsx(wx,{scope:t.__scopeSlider,startEdge:S?"bottom":"top",endEdge:S?"top":"bottom",size:"height",direction:S?1:-1,children:v.jsx(kx,{"data-orientation":"vertical",...p,ref:g,style:{...p.style,"--radix-slider-thumb-transform":"translateY(50%)"},onSlideStart:_=>{const T=E(_.clientY);s?.(T)},onSlideMove:_=>{const T=E(_.clientY);c?.(T)},onSlideEnd:()=>{b.current=void 0,h?.()},onStepKeyDown:_=>{const N=bx[S?"from-bottom":"from-top"].includes(_.key);m?.({event:_,direction:N?-1:1})}})})}),kx=C.forwardRef((t,i)=>{const{__scopeSlider:a,onSlideStart:r,onSlideMove:u,onSlideEnd:s,onHomeKeyDown:c,onEndKeyDown:h,onStepKeyDown:m,...p}=t,y=ou(Wa,a);return v.jsx(hr.span,{...p,ref:i,onKeyDown:Xa(t.onKeyDown,g=>{g.key==="Home"?(c(g),g.preventDefault()):g.key==="End"?(h(g),g.preventDefault()):yx.concat(xx).includes(g.key)&&(m(g),g.preventDefault())}),onPointerDown:Xa(t.onPointerDown,g=>{const b=g.target;b.setPointerCapture(g.pointerId),g.preventDefault(),y.thumbs.has(b)?b.focus():r(g)}),onPointerMove:Xa(t.onPointerMove,g=>{g.target.hasPointerCapture(g.pointerId)&&u(g)}),onPointerUp:Xa(t.onPointerUp,g=>{const b=g.target;b.hasPointerCapture(g.pointerId)&&(b.releasePointerCapture(g.pointerId),s(g))})})}),Ex="SliderTrack",Cx=C.forwardRef((t,i)=>{const{__scopeSlider:a,...r}=t,u=ou(Ex,a);return v.jsx(hr.span,{"data-disabled":u.disabled?"":void 0,"data-orientation":u.orientation,...r,ref:i})});Cx.displayName=Ex;var df="SliderRange",Tx=C.forwardRef((t,i)=>{const{__scopeSlider:a,...r}=t,u=ou(df,a),s=Ax(df,a),c=C.useRef(null),h=Cl(i,c),m=u.values.length,p=u.values.map(b=>_x(b,u.min,u.max)),y=m>1?Math.min(...p):0,g=100-Math.max(...p);return v.jsx(hr.span,{"data-orientation":u.orientation,"data-disabled":u.disabled?"":void 0,...r,ref:h,style:{...t.style,[s.startEdge]:y+"%",[s.endEdge]:g+"%"}})});Tx.displayName=df;var hf="SliderThumb",Nx=C.forwardRef((t,i)=>{const a=sT(t.__scopeSlider),[r,u]=C.useState(null),s=Cl(i,h=>u(h)),c=C.useMemo(()=>r?a().findIndex(h=>h.ref.current===r):-1,[a,r]);return v.jsx(pT,{...t,ref:s,index:c})}),pT=C.forwardRef((t,i)=>{const{__scopeSlider:a,index:r,name:u,...s}=t,c=ou(hf,a),h=Ax(hf,a),[m,p]=C.useState(null),y=Cl(i,D=>p(D)),g=m?c.form||!!m.closest("form"):!0,b=K6(m),S=c.values[r],E=S===void 0?0:_x(S,c.min,c.max),_=yT(r,c.values.length),T=b?.[h.size],N=T?bT(T,E,h.direction):0;return C.useEffect(()=>{if(m)return c.thumbs.add(m),()=>{c.thumbs.delete(m)}},[m,c.thumbs]),v.jsxs("span",{style:{transform:"var(--radix-slider-thumb-transform)",position:"absolute",[h.startEdge]:`calc(${E}% + ${N}px)`},children:[v.jsx(ff.ItemSlot,{scope:t.__scopeSlider,children:v.jsx(hr.span,{role:"slider","aria-label":t["aria-label"]||_,"aria-valuemin":c.min,"aria-valuenow":S,"aria-valuemax":c.max,"aria-orientation":c.orientation,"data-orientation":c.orientation,"data-disabled":c.disabled?"":void 0,tabIndex:c.disabled?void 0:0,...s,ref:y,style:S===void 0?{display:"none"}:t.style,onFocus:Xa(t.onFocus,()=>{c.valueIndexToChangeRef.current=r})})}),g&&v.jsx(zx,{name:u??(c.name?c.name+(c.values.length>1?"[]":""):void 0),form:c.form,value:S},r)]})});Nx.displayName=hf;var mT="RadioBubbleInput",zx=C.forwardRef(({__scopeSlider:t,value:i,...a},r)=>{const u=C.useRef(null),s=Cl(u,r),c=Z6(i);return C.useEffect(()=>{const h=u.current;if(!h)return;const m=window.HTMLInputElement.prototype,y=Object.getOwnPropertyDescriptor(m,"value").set;if(c!==i&&y){const g=new Event("input",{bubbles:!0});y.call(h,i),h.dispatchEvent(g)}},[c,i]),v.jsx(hr.input,{style:{display:"none"},...a,ref:s,defaultValue:i})});zx.displayName=mT;function gT(t=[],i,a){const r=[...t];return r[a]=i,r.sort((u,s)=>u-s)}function _x(t,i,a){const s=100/(a-i)*(t-i);return px(s,[0,100])}function yT(t,i){return i>2?`Value ${t+1} of ${i}`:i===2?["Minimum","Maximum"][t]:void 0}function xT(t,i){if(t.length===1)return 0;const a=t.map(u=>Math.abs(u-i)),r=Math.min(...a);return a.indexOf(r)}function bT(t,i,a){const r=t/2,s=Yf([0,50],[0,r]);return(r-s(i)*a)*a}function vT(t){return t.slice(0,-1).map((i,a)=>t[a+1]-i)}function ST(t,i){if(i>0){const a=vT(t);return Math.min(...a)>=i}return!0}function Yf(t,i){return a=>{if(t[0]===t[1]||i[0]===i[1])return i[0];const r=(i[1]-i[0])/(t[1]-t[0]);return i[0]+r*(a-t[0])}}function wT(t){return(String(t).split(".")[1]||"").length}function AT(t,i){const a=Math.pow(10,i);return Math.round(t*a)/a}var kT=Sx,ET=Cx,CT=Tx,TT=Nx;function f1({className:t,defaultValue:i,value:a,min:r=0,max:u=100,...s}){const c=C.useMemo(()=>Array.isArray(a)?a:Array.isArray(i)?i:[r,u],[a,i,r,u]);return v.jsxs(kT,{"code-path":"src/components/ui/slider.tsx:27:5","data-slot":"slider",defaultValue:i,value:a,min:r,max:u,className:er("relative flex w-full touch-none items-center select-none data-[disabled]:opacity-50 data-[orientation=vertical]:h-full data-[orientation=vertical]:min-h-44 data-[orientation=vertical]:w-auto data-[orientation=vertical]:flex-col",t),...s,children:[v.jsx(ET,{"code-path":"src/components/ui/slider.tsx:39:7","data-slot":"slider-track",className:er("bg-muted relative grow overflow-hidden rounded-full data-[orientation=horizontal]:h-1.5 data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-1.5"),children:v.jsx(CT,{"code-path":"src/components/ui/slider.tsx:45:9","data-slot":"slider-range",className:er("bg-primary absolute data-[orientation=horizontal]:h-full data-[orientation=vertical]:w-full")})}),Array.from({length:c.length},(h,m)=>v.jsx(TT,{"code-path":"src/components/ui/slider.tsx:53:9","data-slot":"slider-thumb",className:"border-primary ring-ring/50 block size-4 shrink-0 rounded-full border bg-white shadow-sm transition-[color,box-shadow] hover:ring-4 focus-visible:ring-4 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50"},m))]})}function NT(){const[t,i]=C.useState(0),[a,r]=C.useState(!1),[u,s]=C.useState(0),[c,h]=C.useState(.7),[m,p]=C.useState(!1),[y,g]=C.useState(!1),[b,S]=C.useState(!1),[E,_]=C.useState(new Set),T=C.useRef(null),N=Qt[t];C.useEffect(()=>{window.scrollTo(0,0)},[]),C.useEffect(()=>{T.current&&(a?T.current.play().catch(()=>{r(!1)}):T.current.pause())},[a,t]),C.useEffect(()=>{T.current&&(T.current.volume=m?0:c)},[c,m]);const D=O=>{const J=Math.floor(O/60),ne=Math.floor(O%60);return`${J}:${ne.toString().padStart(2,"0")}`},j=()=>{T.current&&s(T.current.currentTime)},Z=()=>{b?T.current&&(T.current.currentTime=0,T.current.play()):ee()},W=O=>{T.current&&(T.current.currentTime=O[0],s(O[0]))},q=()=>{r(!a)},ee=()=>{if(y){const O=Math.floor(Math.random()*Qt.length);i(O)}else i(O=>(O+1)%Qt.length)},$=()=>{i(O=>(O-1+Qt.length)%Qt.length)},ue=O=>{_(J=>{const ne=new Set(J);return ne.has(O)?ne.delete(O):ne.add(O),ne})};return Qt.length===0?v.jsx("div",{"code-path":"src/pages/Music.tsx:115:7",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:v.jsxs("div",{"code-path":"src/pages/Music.tsx:116:9",className:"max-w-[1200px] mx-auto px-6 lg:px-12",children:[v.jsxs("div",{"code-path":"src/pages/Music.tsx:117:11",className:"text-center mb-10",children:[v.jsx("h1",{"code-path":"src/pages/Music.tsx:118:13",className:"text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4",children:"音乐馆"}),v.jsx("p",{"code-path":"src/pages/Music.tsx:121:13",className:"text-[#6b6b6b]",children:"享受音乐，放松心情"})]}),v.jsx("div",{"code-path":"src/pages/Music.tsx:123:11",className:"bg-white rounded-2xl py-20 text-center shadow-sm",children:v.jsx("p",{"code-path":"src/pages/Music.tsx:124:13",className:"text-[#6b6b6b]",children:"还没有添加任何曲目"})})]})}):v.jsxs("div",{"code-path":"src/pages/Music.tsx:132:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:[v.jsx("audio",{"code-path":"src/pages/Music.tsx:133:7",ref:T,src:N.url,onTimeUpdate:j,onEnded:Z}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:140:7",className:"max-w-[1200px] mx-auto px-6 lg:px-12",children:[v.jsxs("div",{"code-path":"src/pages/Music.tsx:142:9",className:"text-center mb-10",children:[v.jsx("h1",{"code-path":"src/pages/Music.tsx:143:11",className:"text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4",children:"音乐馆"}),v.jsx("p",{"code-path":"src/pages/Music.tsx:146:11",className:"text-[#6b6b6b]",children:"享受音乐，放松心情"})]}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:149:9",className:"grid lg:grid-cols-3 gap-8",children:[v.jsx("div",{"code-path":"src/pages/Music.tsx:151:11",className:"lg:col-span-2",children:v.jsxs("div",{"code-path":"src/pages/Music.tsx:152:13",className:"bg-white rounded-2xl p-8 shadow-sm",children:[v.jsx("div",{"code-path":"src/pages/Music.tsx:154:15",className:"flex justify-center mb-8",children:v.jsx("div",{"code-path":"src/pages/Music.tsx:155:17",className:`relative w-64 h-64 rounded-2xl overflow-hidden shadow-lg ${a?"animate-pulse":""}`,children:v.jsx("img",{"code-path":"src/pages/Music.tsx:160:19",src:N.cover,alt:N.title,className:"w-full h-full object-cover"})})}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:169:15",className:"text-center mb-8",children:[v.jsx("h2",{"code-path":"src/pages/Music.tsx:170:17",className:"text-2xl font-medium text-[#1a1a1a] mb-2",children:N.title}),v.jsx("p",{"code-path":"src/pages/Music.tsx:173:17",className:"text-[#6b6b6b]",children:N.artist})]}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:177:15",className:"mb-6",children:[v.jsx(f1,{"code-path":"src/pages/Music.tsx:178:17",value:[u],max:N.duration,step:1,onValueChange:W,className:"w-full"}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:185:17",className:"flex justify-between text-[#9ca3af] text-sm mt-2",children:[v.jsx("span",{"code-path":"src/pages/Music.tsx:186:19",children:D(u)}),v.jsx("span",{"code-path":"src/pages/Music.tsx:187:19",children:D(N.duration)})]})]}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:192:15",className:"flex items-center justify-center gap-6 mb-6",children:[v.jsx("button",{"code-path":"src/pages/Music.tsx:193:17",onClick:()=>g(!y),className:`p-2 rounded-full transition-colors ${y?"text-[#1a1a1a]":"text-[#9ca3af] hover:text-[#6b6b6b]"}`,children:v.jsx(TS,{"code-path":"src/pages/Music.tsx:199:19",className:"w-5 h-5"})}),v.jsx("button",{"code-path":"src/pages/Music.tsx:201:17",onClick:$,className:"p-3 rounded-full bg-[#f0f0f0] text-[#1a1a1a] hover:bg-[#e5e5e5] transition-colors",children:v.jsx(zS,{"code-path":"src/pages/Music.tsx:205:19",className:"w-6 h-6"})}),v.jsx("button",{"code-path":"src/pages/Music.tsx:207:17",onClick:q,className:"p-4 rounded-full bg-[#1a1a1a] text-white hover:bg-[#1a1a1a]/85 transition-colors",children:a?v.jsx(bS,{"code-path":"src/pages/Music.tsx:212:21",className:"w-8 h-8"}):v.jsx(SS,{"code-path":"src/pages/Music.tsx:214:21",className:"w-8 h-8 ml-1"})}),v.jsx("button",{"code-path":"src/pages/Music.tsx:217:17",onClick:ee,className:"p-3 rounded-full bg-[#f0f0f0] text-[#1a1a1a] hover:bg-[#e5e5e5] transition-colors",children:v.jsx(RS,{"code-path":"src/pages/Music.tsx:221:19",className:"w-6 h-6"})}),v.jsx("button",{"code-path":"src/pages/Music.tsx:223:17",onClick:()=>S(!b),className:`p-2 rounded-full transition-colors ${b?"text-[#1a1a1a]":"text-[#9ca3af] hover:text-[#6b6b6b]"}`,children:v.jsx(AS,{"code-path":"src/pages/Music.tsx:229:19",className:"w-5 h-5"})})]}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:234:15",className:"flex items-center justify-center gap-3",children:[v.jsx("button",{"code-path":"src/pages/Music.tsx:235:17",onClick:()=>p(!m),className:"text-[#9ca3af] hover:text-[#6b6b6b]",children:m?v.jsx(US,{"code-path":"src/pages/Music.tsx:240:21",className:"w-5 h-5"}):v.jsx(BS,{"code-path":"src/pages/Music.tsx:242:21",className:"w-5 h-5"})}),v.jsx(f1,{"code-path":"src/pages/Music.tsx:245:17",value:[m?0:c],max:1,step:.01,onValueChange:O=>h(O[0]),className:"w-32"})]})]})}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:257:11",className:"bg-white rounded-2xl p-6 shadow-sm",children:[v.jsxs("div",{"code-path":"src/pages/Music.tsx:258:13",className:"flex items-center justify-between mb-6",children:[v.jsx("h3",{"code-path":"src/pages/Music.tsx:259:15",className:"text-lg font-medium text-[#1a1a1a]",children:"播放列表"}),v.jsxs("span",{"code-path":"src/pages/Music.tsx:260:15",className:"text-[#9ca3af] text-sm",children:[Qt.length," 首"]})]}),v.jsx("div",{"code-path":"src/pages/Music.tsx:262:13",className:"space-y-2 max-h-[500px] overflow-y-auto",children:Qt.map((O,J)=>v.jsxs("div",{"code-path":"src/pages/Music.tsx:264:17",onClick:()=>{i(J),r(!0)},className:`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-all ${t===J?"bg-[#f0f0f0]":"hover:bg-[#f8f8f8]"}`,children:[v.jsx("img",{"code-path":"src/pages/Music.tsx:276:19",src:O.cover,alt:O.title,className:"w-12 h-12 rounded-lg object-cover"}),v.jsxs("div",{"code-path":"src/pages/Music.tsx:281:19",className:"flex-1 min-w-0",children:[v.jsx("p",{"code-path":"src/pages/Music.tsx:282:21",className:`font-medium truncate ${t===J?"text-[#1a1a1a]":"text-[#6b6b6b]"}`,children:O.title}),v.jsx("p",{"code-path":"src/pages/Music.tsx:291:21",className:"text-[#9ca3af] text-sm truncate",children:O.artist})]}),v.jsx("button",{"code-path":"src/pages/Music.tsx:295:19",onClick:ne=>{ne.stopPropagation(),ue(O.id)},className:`p-2 rounded-full transition-colors ${E.has(O.id)?"text-red-500":"text-[#d1d1d1] hover:text-[#9ca3af]"}`,children:v.jsx(rS,{"code-path":"src/pages/Music.tsx:306:21",className:`w-4 h-4 ${E.has(O.id)?"fill-current":""}`})})]},O.id))})]})]})]})]})}function zT(){const[t,i]=C.useState("全部"),[a,r]=C.useState(null);C.useEffect(()=>{window.scrollTo(0,0)},[]);const u=t==="全部"?Qo:Qo.filter(h=>h.category===t),s=()=>{if(a){const m=(u.findIndex(p=>p.id===a.id)-1+u.length)%u.length;r(u[m])}},c=()=>{if(a){const m=(u.findIndex(p=>p.id===a.id)+1)%u.length;r(u[m])}};return C.useEffect(()=>{const h=m=>{a&&(m.key==="Escape"&&r(null),m.key==="ArrowLeft"&&s(),m.key==="ArrowRight"&&c())};return window.addEventListener("keydown",h),()=>window.removeEventListener("keydown",h)},[a,u]),v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:54:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:[v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:55:7",className:"max-w-[1400px] mx-auto px-6 lg:px-12",children:[v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:57:9",className:"text-center mb-10",children:[v.jsx("h1",{"code-path":"src/pages/Gallery.tsx:58:11",className:"text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4",children:"相册集"}),v.jsx("p",{"code-path":"src/pages/Gallery.tsx:61:11",className:"text-[#6b6b6b]",children:"记录生活中的美好瞬间"})]}),v.jsx("div",{"code-path":"src/pages/Gallery.tsx:65:9",className:"flex justify-center gap-2 mb-10",children:sA.map(h=>v.jsx("button",{"code-path":"src/pages/Gallery.tsx:67:13",onClick:()=>i(h),className:`px-5 py-2 text-sm font-medium rounded-full transition-all ${t===h?"bg-[#1a1a1a] text-white":"bg-white text-[#6b6b6b] hover:bg-[#e5e5e5] shadow-sm"}`,children:h},h))}),u.length===0&&v.jsx("div",{"code-path":"src/pages/Gallery.tsx:82:11",className:"bg-white rounded-xl py-20 text-center shadow-sm",children:v.jsx("p",{"code-path":"src/pages/Gallery.tsx:83:13",className:"text-[#6b6b6b]",children:"还没有上传任何照片"})}),v.jsx("div",{"code-path":"src/pages/Gallery.tsx:88:9",className:"columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4",children:u.map(h=>v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:90:13",onClick:()=>r(h),className:"group break-inside-avoid bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer",children:[v.jsx("div",{"code-path":"src/pages/Gallery.tsx:95:15",className:"relative overflow-hidden",children:v.jsx("img",{"code-path":"src/pages/Gallery.tsx:96:17",src:h.thumbnail,alt:h.title,className:"w-full object-cover group-hover:scale-105 transition-transform duration-300",loading:"lazy"})}),v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:103:15",className:"p-4",children:[v.jsx("h3",{"code-path":"src/pages/Gallery.tsx:104:17",className:"font-medium text-[#1a1a1a] mb-1",children:h.title}),v.jsx("p",{"code-path":"src/pages/Gallery.tsx:107:17",className:"text-[#9ca3af] text-sm line-clamp-2",children:h.description}),v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:110:17",className:"flex items-center gap-3 mt-3 text-[#9ca3af] text-xs",children:[v.jsxs("span",{"code-path":"src/pages/Gallery.tsx:111:19",className:"flex items-center gap-1",children:[v.jsx(eu,{"code-path":"src/pages/Gallery.tsx:112:21",className:"w-3 h-3"}),h.date]}),v.jsxs("span",{"code-path":"src/pages/Gallery.tsx:115:19",className:"flex items-center gap-1",children:[v.jsx(U1,{"code-path":"src/pages/Gallery.tsx:116:21",className:"w-3 h-3"}),h.category]})]})]})]},h.id))})]}),a&&v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:128:9",className:"fixed inset-0 z-50 bg-black/95 flex items-center justify-center",onClick:()=>r(null),children:[v.jsx("button",{"code-path":"src/pages/Gallery.tsx:133:11",onClick:()=>r(null),className:"absolute top-4 right-4 p-2 text-white/70 hover:text-white z-10",children:v.jsx(V1,{"code-path":"src/pages/Gallery.tsx:137:13",className:"w-8 h-8"})}),v.jsx("button",{"code-path":"src/pages/Gallery.tsx:141:11",onClick:h=>{h.stopPropagation(),s()},className:"absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 rounded-full",children:v.jsx(Z2,{"code-path":"src/pages/Gallery.tsx:148:13",className:"w-8 h-8"})}),v.jsx("button",{"code-path":"src/pages/Gallery.tsx:150:11",onClick:h=>{h.stopPropagation(),c()},className:"absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white bg-white/10 rounded-full",children:v.jsx($2,{"code-path":"src/pages/Gallery.tsx:157:13",className:"w-8 h-8"})}),v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:161:11",className:"max-w-[90vw] max-h-[85vh]",onClick:h=>h.stopPropagation(),children:[v.jsx("img",{"code-path":"src/pages/Gallery.tsx:165:13",src:a.url,alt:a.title,className:"max-w-full max-h-[80vh] object-contain rounded-lg"}),v.jsxs("div",{"code-path":"src/pages/Gallery.tsx:170:13",className:"mt-4 text-center text-white",children:[v.jsx("h3",{"code-path":"src/pages/Gallery.tsx:171:15",className:"text-xl font-medium mb-1",children:a.title}),v.jsx("p",{"code-path":"src/pages/Gallery.tsx:174:15",className:"text-white/70",children:a.description})]})]})]})]})}function _T(){return C.useEffect(()=>{window.scrollTo(0,0)},[]),v.jsx("div",{"code-path":"src/pages/Guestbook.tsx:19:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:v.jsxs("div",{"code-path":"src/pages/Guestbook.tsx:20:7",className:"max-w-[800px] mx-auto px-6 lg:px-12",children:[v.jsxs("div",{"code-path":"src/pages/Guestbook.tsx:22:9",className:"text-center mb-10",children:[v.jsx("h1",{"code-path":"src/pages/Guestbook.tsx:23:11",className:"text-3xl md:text-4xl font-medium text-[#1a1a1a] mb-4",children:"留言板"}),v.jsx("p",{"code-path":"src/pages/Guestbook.tsx:26:11",className:"text-[#6b6b6b]",children:"欢迎留言交流，分享你的想法"})]}),v.jsx(hx,{"code-path":"src/pages/Guestbook.tsx:29:9",term:"guestbook",title:"全站留言"})]})})}const RT=[{name:"内容策划",level:95},{name:"知识整理",level:90},{name:"文案写作",level:85},{name:"视觉表达",level:80},{name:"读者运营",level:75},{name:"多媒体创作",level:85}],d1=[{year:"2024",title:"独立内容创作者",company:"全职创作",description:"专注于多平台内容创作，建立个人品牌影响力",icon:og},{year:"2022",title:"知识博主",company:"内容平台",description:"开始在各平台分享知识和见解，积累首批忠实读者",icon:og},{year:"2020",title:"开始创作",company:"个人博客",description:"建立个人博客，开始记录学习笔记和生活感悟",icon:aS},{year:"2019",title:"第一篇内容",company:"创作起点",description:"写下第一篇分享文章，开启内容创作之旅",icon:I2}],MT=[{name:"编程",icon:W2,description:"热爱代码，追求优雅的解决方案"},{name:"摄影",icon:Q2,description:"用镜头记录生活中的美好"},{name:"音乐",icon:Af,description:"享受音乐带来的宁静与力量"},{name:"咖啡",icon:nS,description:"品味生活，从一杯咖啡开始"}],DT=[{icon:L1,href:"https://github.com",label:"GitHub"},{icon:I1,href:"https://twitter.com",label:"Twitter"},{icon:wf,href:"mailto:speedkingblock@hotmail.com",label:"Email"}];function jT(){return C.useEffect(()=>{window.scrollTo(0,0)},[]),v.jsx("div",{"code-path":"src/pages/About.tsx:76:5",className:"min-h-screen bg-[#f0efe9] pt-24 pb-16",children:v.jsxs("div",{"code-path":"src/pages/About.tsx:77:7",className:"max-w-[1000px] mx-auto px-6 lg:px-12",children:[v.jsx("div",{"code-path":"src/pages/About.tsx:79:9",className:"bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8",children:v.jsxs("div",{"code-path":"src/pages/About.tsx:80:11",className:"flex flex-col md:flex-row items-center gap-8",children:[v.jsxs("div",{"code-path":"src/pages/About.tsx:81:13",className:"relative",children:[v.jsx("div",{"code-path":"src/pages/About.tsx:82:15",className:"w-40 h-40 rounded-2xl overflow-hidden shadow-lg",children:v.jsx("img",{"code-path":"src/pages/About.tsx:83:17",src:"avatar.jpg",alt:"瀛同学",className:"w-full h-full object-cover"})}),v.jsx("div",{"code-path":"src/pages/About.tsx:89:15",className:"absolute -bottom-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"})]}),v.jsxs("div",{"code-path":"src/pages/About.tsx:91:13",className:"text-center md:text-left",children:[v.jsx("h1",{"code-path":"src/pages/About.tsx:92:15",className:"text-3xl font-medium text-[#1a1a1a] mb-2",children:"瀛同学"}),v.jsx("p",{"code-path":"src/pages/About.tsx:95:15",className:"text-lg text-[#6b6b6b] mb-4",children:"内容分享者 / 知识博主 / 生活记录者"}),v.jsxs("div",{"code-path":"src/pages/About.tsx:98:15",className:"flex flex-wrap justify-center md:justify-start gap-4 text-sm text-[#9ca3af] mb-6",children:[v.jsxs("span",{"code-path":"src/pages/About.tsx:99:17",className:"flex items-center gap-1",children:[v.jsx(U1,{"code-path":"src/pages/About.tsx:100:19",className:"w-4 h-4"}),"中国 · 上海"]}),v.jsxs("span",{"code-path":"src/pages/About.tsx:103:17",className:"flex items-center gap-1",children:[v.jsx(eu,{"code-path":"src/pages/About.tsx:104:19",className:"w-4 h-4"}),"持续创作中"]}),v.jsxs("span",{"code-path":"src/pages/About.tsx:107:17",className:"flex items-center gap-1",children:[v.jsx(wf,{"code-path":"src/pages/About.tsx:108:19",className:"w-4 h-4"}),"speedkingblock@hotmail.com"]})]}),v.jsx("div",{"code-path":"src/pages/About.tsx:112:15",className:"flex justify-center md:justify-start gap-3",children:DT.map(t=>{const i=t.icon;return v.jsx("a",{"code-path":"src/pages/About.tsx:116:21",href:t.href,target:"_blank",rel:"noopener noreferrer",className:"w-10 h-10 bg-[#f0f0f0] rounded-xl flex items-center justify-center text-[#6b6b6b] hover:bg-[#1a1a1a] hover:text-white transition-colors",children:v.jsx(i,{"code-path":"src/pages/About.tsx:123:23",className:"w-5 h-5"})},t.label)})})]})]})}),v.jsxs("div",{"code-path":"src/pages/About.tsx:133:9",className:"bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8",children:[v.jsx("h2",{"code-path":"src/pages/About.tsx:134:11",className:"text-2xl font-medium text-[#1a1a1a] mb-6",children:"关于我"}),v.jsxs("div",{"code-path":"src/pages/About.tsx:135:11",className:"space-y-4 text-[#6b6b6b] leading-relaxed",children:[v.jsx("p",{"code-path":"src/pages/About.tsx:136:13",children:"你好！我是瀛同学，一名热爱分享的内容创作者。从最初记录学习笔记开始，我就被内容创作的魅力深深吸引。多年的创作经历让我在知识整理、观点表达和读者连接方面积累了丰富的经验。"}),v.jsx("p",{"code-path":"src/pages/About.tsx:139:13",children:"我相信好的内容不仅要有信息量，更要有温度和深度。在创作过程中，我注重内容质量，追求真诚表达，同时也乐于探索新的创作形式和话题领域。"}),v.jsx("p",{"code-path":"src/pages/About.tsx:142:13",children:"创作之余，我喜欢摄影和音乐。用镜头捕捉生活中的美好瞬间，用音乐激发创作灵感。这些爱好让我的生活更加丰富多彩，也让我在内容创作中保持敏锐的观察力和持续的创造力。"})]})]}),v.jsxs("div",{"code-path":"src/pages/About.tsx:149:9",className:"bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8",children:[v.jsx("h2",{"code-path":"src/pages/About.tsx:150:11",className:"text-2xl font-medium text-[#1a1a1a] mb-6",children:"技能专长"}),v.jsx("div",{"code-path":"src/pages/About.tsx:151:11",className:"space-y-5",children:RT.map(t=>v.jsxs("div",{"code-path":"src/pages/About.tsx:153:15",children:[v.jsxs("div",{"code-path":"src/pages/About.tsx:154:17",className:"flex justify-between mb-2",children:[v.jsx("span",{"code-path":"src/pages/About.tsx:155:19",className:"font-medium text-[#6b6b6b]",children:t.name}),v.jsxs("span",{"code-path":"src/pages/About.tsx:158:19",className:"text-[#9ca3af]",children:[t.level,"%"]})]}),v.jsx("div",{"code-path":"src/pages/About.tsx:160:17",className:"h-2 bg-[#f0f0f0] rounded-full overflow-hidden",children:v.jsx("div",{"code-path":"src/pages/About.tsx:161:19",className:"h-full bg-[#1a1a1a] rounded-full transition-all duration-1000",style:{width:`${t.level}%`}})})]},t.name))})]}),v.jsxs("div",{"code-path":"src/pages/About.tsx:172:9",className:"bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-8",children:[v.jsx("h2",{"code-path":"src/pages/About.tsx:173:11",className:"text-2xl font-medium text-[#1a1a1a] mb-6",children:"经历"}),v.jsx("div",{"code-path":"src/pages/About.tsx:174:11",className:"space-y-8",children:d1.map((t,i)=>{const a=t.icon;return v.jsxs("div",{"code-path":"src/pages/About.tsx:178:17",className:"flex gap-4",children:[v.jsxs("div",{"code-path":"src/pages/About.tsx:179:19",className:"flex flex-col items-center",children:[v.jsx("div",{"code-path":"src/pages/About.tsx:180:21",className:"w-10 h-10 bg-[#f0f0f0] rounded-xl flex items-center justify-center",children:v.jsx(a,{"code-path":"src/pages/About.tsx:181:23",className:"w-5 h-5 text-[#1a1a1a]"})}),i<d1.length-1&&v.jsx("div",{"code-path":"src/pages/About.tsx:184:23",className:"w-0.5 flex-1 bg-[#e5e5e5] my-2"})]}),v.jsxs("div",{"code-path":"src/pages/About.tsx:187:19",className:"flex-1 pb-8",children:[v.jsx("span",{"code-path":"src/pages/About.tsx:188:21",className:"text-sm text-[#9ca3af] font-medium",children:t.year}),v.jsx("h3",{"code-path":"src/pages/About.tsx:191:21",className:"text-lg font-medium text-[#1a1a1a] mt-1",children:t.title}),v.jsx("p",{"code-path":"src/pages/About.tsx:194:21",className:"text-[#9ca3af] text-sm mb-2",children:t.company}),v.jsx("p",{"code-path":"src/pages/About.tsx:195:21",className:"text-[#6b6b6b]",children:t.description})]})]},i)})})]}),v.jsxs("div",{"code-path":"src/pages/About.tsx:204:9",className:"bg-white rounded-2xl shadow-sm p-8 md:p-12",children:[v.jsx("h2",{"code-path":"src/pages/About.tsx:205:11",className:"text-2xl font-medium text-[#1a1a1a] mb-6",children:"兴趣爱好"}),v.jsx("div",{"code-path":"src/pages/About.tsx:206:11",className:"grid sm:grid-cols-2 gap-4",children:MT.map(t=>{const i=t.icon;return v.jsxs("div",{"code-path":"src/pages/About.tsx:210:17",className:"flex items-start gap-4 p-4 bg-[#f0f0f0] rounded-xl",children:[v.jsx("div",{"code-path":"src/pages/About.tsx:214:19",className:"w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm",children:v.jsx(i,{"code-path":"src/pages/About.tsx:215:21",className:"w-6 h-6 text-[#1a1a1a]"})}),v.jsxs("div",{"code-path":"src/pages/About.tsx:217:19",children:[v.jsx("h3",{"code-path":"src/pages/About.tsx:218:21",className:"font-medium text-[#1a1a1a] mb-1",children:t.name}),v.jsx("p",{"code-path":"src/pages/About.tsx:221:21",className:"text-[#9ca3af] text-sm",children:t.description})]})]},t.name)})})]})]})})}function OT(){return v.jsx(A2,{"code-path":"src/App.tsx:13:5",children:v.jsxs("div",{"code-path":"src/App.tsx:14:7",className:"min-h-screen",children:[v.jsx(IS,{"code-path":"src/App.tsx:15:9"}),v.jsxs(Wv,{"code-path":"src/App.tsx:16:9",children:[v.jsx(Xt,{"code-path":"src/App.tsx:17:11",path:"/",element:v.jsx(fA,{"code-path":"src/App.tsx:17:36"})}),v.jsx(Xt,{"code-path":"src/App.tsx:18:11",path:"/blog",element:v.jsx(hA,{"code-path":"src/App.tsx:18:40"})}),v.jsx(Xt,{"code-path":"src/App.tsx:19:11",path:"/blog/:id",element:v.jsx(U6,{"code-path":"src/App.tsx:19:44"})}),v.jsx(Xt,{"code-path":"src/App.tsx:20:11",path:"/music",element:v.jsx(NT,{"code-path":"src/App.tsx:20:41"})}),v.jsx(Xt,{"code-path":"src/App.tsx:21:11",path:"/gallery",element:v.jsx(zT,{"code-path":"src/App.tsx:21:43"})}),v.jsx(Xt,{"code-path":"src/App.tsx:22:11",path:"/guestbook",element:v.jsx(_T,{"code-path":"src/App.tsx:22:45"})}),v.jsx(Xt,{"code-path":"src/App.tsx:23:11",path:"/about",element:v.jsx(jT,{"code-path":"src/App.tsx:23:41"})}),v.jsx(Xt,{"code-path":"src/App.tsx:24:11",path:"*",element:v.jsx(Pv,{"code-path":"src/App.tsx:24:36",to:"/",replace:!0})})]})]})})}ev.createRoot(document.getElementById("root")).render(v.jsx(C.StrictMode,{"code-path":"src/main.tsx:7:3",children:v.jsx(OT,{"code-path":"src/main.tsx:8:5"})}));
