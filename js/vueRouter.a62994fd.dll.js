window["vueRouter_library"]=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=13)}({13:function(t,e,r){t.exports=r},14:function(t,e,r){"use strict";function n(t,e){0}function o(t,e){for(var r in e)t[r]=e[r];return t}r.r(e);var i={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(t,e){var r=e.props,n=e.children,i=e.parent,u=e.data;u.routerView=!0;var c=i.$createElement,s=r.name,p=i.$route,f=i._routerViewCache||(i._routerViewCache={}),h=0,l=!1;while(i&&i._routerRoot!==i){var d=i.$vnode?i.$vnode.data:{};d.routerView&&h++,d.keepAlive&&i._directInactive&&i._inactive&&(l=!0),i=i.$parent}if(u.routerViewDepth=h,l){var v=f[s],y=v&&v.component;return y?(v.configProps&&a(y,u,v.route,v.configProps),c(y,u,n)):c()}var m=p.matched[h],g=m&&m.components[s];if(!m||!g)return f[s]=null,c();f[s]={component:g},u.registerRouteInstance=function(t,e){var r=m.instances[s];(e&&r!==t||!e&&r===t)&&(m.instances[s]=e)},(u.hook||(u.hook={})).prepatch=function(t,e){m.instances[s]=e.componentInstance},u.hook.init=function(t){t.data.keepAlive&&t.componentInstance&&t.componentInstance!==m.instances[s]&&(m.instances[s]=t.componentInstance)};var w=m.props&&m.props[s];return w&&(o(f[s],{route:p,configProps:w}),a(g,u,p,w)),c(g,u,n)}};function a(t,e,r,n){var i=e.props=u(r,n);if(i){i=e.props=o({},i);var a=e.attrs=e.attrs||{};for(var c in i)t.props&&c in t.props||(a[c]=i[c],delete i[c])}}function u(t,e){switch(typeof e){case"undefined":return;case"object":return e;case"function":return e(t);case"boolean":return e?t.params:void 0;default:0}}var c=/[!'()*]/g,s=function(t){return"%"+t.charCodeAt(0).toString(16)},p=/%2C/g,f=function(t){return encodeURIComponent(t).replace(c,s).replace(p,",")},h=decodeURIComponent;function l(t,e,r){void 0===e&&(e={});var n,o=r||v;try{n=o(t||"")}catch(u){n={}}for(var i in e){var a=e[i];n[i]=Array.isArray(a)?a.map(d):d(a)}return n}var d=function(t){return null==t||"object"===typeof t?t:String(t)};function v(t){var e={};return t=t.trim().replace(/^(\?|#|&)/,""),t?(t.split("&").forEach((function(t){var r=t.replace(/\+/g," ").split("="),n=h(r.shift()),o=r.length>0?h(r.join("=")):null;void 0===e[n]?e[n]=o:Array.isArray(e[n])?e[n].push(o):e[n]=[e[n],o]})),e):e}function y(t){var e=t?Object.keys(t).map((function(e){var r=t[e];if(void 0===r)return"";if(null===r)return f(e);if(Array.isArray(r)){var n=[];return r.forEach((function(t){void 0!==t&&(null===t?n.push(f(e)):n.push(f(e)+"="+f(t)))})),n.join("&")}return f(e)+"="+f(r)})).filter((function(t){return t.length>0})).join("&"):null;return e?"?"+e:""}var m=/\/?$/;function g(t,e,r,n){var o=n&&n.options.stringifyQuery,i=e.query||{};try{i=w(i)}catch(u){}var a={name:e.name||t&&t.name,meta:t&&t.meta||{},path:e.path||"/",hash:e.hash||"",query:i,params:e.params||{},fullPath:R(e,o),matched:t?x(t):[]};return r&&(a.redirectedFrom=R(r,o)),Object.freeze(a)}function w(t){if(Array.isArray(t))return t.map(w);if(t&&"object"===typeof t){var e={};for(var r in t)e[r]=w(t[r]);return e}return t}var b=g(null,{path:"/"});function x(t){var e=[];while(t)e.unshift(t),t=t.parent;return e}function R(t,e){var r=t.path,n=t.query;void 0===n&&(n={});var o=t.hash;void 0===o&&(o="");var i=e||y;return(r||"/")+i(n)+o}function k(t,e){return e===b?t===e:!!e&&(t.path&&e.path?t.path.replace(m,"")===e.path.replace(m,"")&&t.hash===e.hash&&E(t.query,e.query):!(!t.name||!e.name)&&(t.name===e.name&&t.hash===e.hash&&E(t.query,e.query)&&E(t.params,e.params)))}function E(t,e){if(void 0===t&&(t={}),void 0===e&&(e={}),!t||!e)return t===e;var r=Object.keys(t),n=Object.keys(e);return r.length===n.length&&r.every((function(r){var n=t[r],o=e[r];return null==n||null==o?n===o:"object"===typeof n&&"object"===typeof o?E(n,o):String(n)===String(o)}))}function O(t,e){return 0===t.path.replace(m,"/").indexOf(e.path.replace(m,"/"))&&(!e.hash||t.hash===e.hash)&&_(t.query,e.query)}function _(t,e){for(var r in e)if(!(r in t))return!1;return!0}function A(t,e,r){var n=t.charAt(0);if("/"===n)return t;if("?"===n||"#"===n)return e+t;var o=e.split("/");r&&o[o.length-1]||o.pop();for(var i=t.replace(/^\//,"").split("/"),a=0;a<i.length;a++){var u=i[a];".."===u?o.pop():"."!==u&&o.push(u)}return""!==o[0]&&o.unshift(""),o.join("/")}function j(t){var e="",r="",n=t.indexOf("#");n>=0&&(e=t.slice(n),t=t.slice(0,n));var o=t.indexOf("?");return o>=0&&(r=t.slice(o+1),t=t.slice(0,o)),{path:t,query:r,hash:e}}function C(t){return t.replace(/\/\//g,"/")}var S=Array.isArray||function(t){return"[object Array]"==Object.prototype.toString.call(t)},P=Y,T=I,L=M,$=F,q=X,U=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function I(t,e){var r,n=[],o=0,i=0,a="",u=e&&e.delimiter||"/";while(null!=(r=U.exec(t))){var c=r[0],s=r[1],p=r.index;if(a+=t.slice(i,p),i=p+c.length,s)a+=s[1];else{var f=t[i],h=r[2],l=r[3],d=r[4],v=r[5],y=r[6],m=r[7];a&&(n.push(a),a="");var g=null!=h&&null!=f&&f!==h,w="+"===y||"*"===y,b="?"===y||"*"===y,x=r[2]||u,R=d||v;n.push({name:l||o++,prefix:h||"",delimiter:x,optional:b,repeat:w,partial:g,asterisk:!!m,pattern:R?N(R):m?".*":"[^"+H(x)+"]+?"})}}return i<t.length&&(a+=t.substr(i)),a&&n.push(a),n}function M(t,e){return F(I(t,e),e)}function V(t){return encodeURI(t).replace(/[\/?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function B(t){return encodeURI(t).replace(/[?#]/g,(function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}))}function F(t,e){for(var r=new Array(t.length),n=0;n<t.length;n++)"object"===typeof t[n]&&(r[n]=new RegExp("^(?:"+t[n].pattern+")$",D(e)));return function(e,n){for(var o="",i=e||{},a=n||{},u=a.pretty?V:encodeURIComponent,c=0;c<t.length;c++){var s=t[c];if("string"!==typeof s){var p,f=i[s.name];if(null==f){if(s.optional){s.partial&&(o+=s.prefix);continue}throw new TypeError('Expected "'+s.name+'" to be defined')}if(S(f)){if(!s.repeat)throw new TypeError('Expected "'+s.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(s.optional)continue;throw new TypeError('Expected "'+s.name+'" to not be empty')}for(var h=0;h<f.length;h++){if(p=u(f[h]),!r[c].test(p))throw new TypeError('Expected all "'+s.name+'" to match "'+s.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===h?s.prefix:s.delimiter)+p}}else{if(p=s.asterisk?B(f):u(f),!r[c].test(p))throw new TypeError('Expected "'+s.name+'" to match "'+s.pattern+'", but received "'+p+'"');o+=s.prefix+p}}else o+=s}return o}}function H(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function N(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function z(t,e){return t.keys=e,t}function D(t){return t&&t.sensitive?"":"i"}function K(t,e){var r=t.source.match(/\((?!\?)/g);if(r)for(var n=0;n<r.length;n++)e.push({name:n,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return z(t,e)}function J(t,e,r){for(var n=[],o=0;o<t.length;o++)n.push(Y(t[o],e,r).source);var i=new RegExp("(?:"+n.join("|")+")",D(r));return z(i,e)}function Q(t,e,r){return X(I(t,r),e,r)}function X(t,e,r){S(e)||(r=e||r,e=[]),r=r||{};for(var n=r.strict,o=!1!==r.end,i="",a=0;a<t.length;a++){var u=t[a];if("string"===typeof u)i+=H(u);else{var c=H(u.prefix),s="(?:"+u.pattern+")";e.push(u),u.repeat&&(s+="(?:"+c+s+")*"),s=u.optional?u.partial?c+"("+s+")?":"(?:"+c+"("+s+"))?":c+"("+s+")",i+=s}}var p=H(r.delimiter||"/"),f=i.slice(-p.length)===p;return n||(i=(f?i.slice(0,-p.length):i)+"(?:"+p+"(?=$))?"),i+=o?"$":n&&f?"":"(?="+p+"|$)",z(new RegExp("^"+i,D(r)),e)}function Y(t,e,r){return S(e)||(r=e||r,e=[]),r=r||{},t instanceof RegExp?K(t,e):S(t)?J(t,e,r):Q(t,e,r)}P.parse=T,P.compile=L,P.tokensToFunction=$,P.tokensToRegExp=q;var W=Object.create(null);function G(t,e,r){e=e||{};try{var n=W[t]||(W[t]=P.compile(t));return"string"===typeof e.pathMatch&&(e[0]=e.pathMatch),n(e,{pretty:!0})}catch(o){return""}finally{delete e[0]}}function Z(t,e,r,n){var i="string"===typeof t?{path:t}:t;if(i._normalized)return i;if(i.name){i=o({},t);var a=i.params;return a&&"object"===typeof a&&(i.params=o({},a)),i}if(!i.path&&i.params&&e){i=o({},i),i._normalized=!0;var u=o(o({},e.params),i.params);if(e.name)i.name=e.name,i.params=u;else if(e.matched.length){var c=e.matched[e.matched.length-1].path;i.path=G(c,u,"path "+e.path)}else 0;return i}var s=j(i.path||""),p=e&&e.path||"/",f=s.path?A(s.path,p,r||i.append):p,h=l(s.query,i.query,n&&n.options.parseQuery),d=i.hash||s.hash;return d&&"#"!==d.charAt(0)&&(d="#"+d),{_normalized:!0,path:f,query:h,hash:d}}var tt,et=[String,Object],rt=[String,Array],nt=function(){},ot={name:"RouterLink",props:{to:{type:et,required:!0},tag:{type:String,default:"a"},exact:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:rt,default:"click"}},render:function(t){var e=this,r=this.$router,n=this.$route,i=r.resolve(this.to,n,this.append),a=i.location,u=i.route,c=i.href,s={},p=r.options.linkActiveClass,f=r.options.linkExactActiveClass,h=null==p?"router-link-active":p,l=null==f?"router-link-exact-active":f,d=null==this.activeClass?h:this.activeClass,v=null==this.exactActiveClass?l:this.exactActiveClass,y=u.redirectedFrom?g(null,Z(u.redirectedFrom),null,r):u;s[v]=k(n,y),s[d]=this.exact?s[v]:O(n,y);var m=s[v]?this.ariaCurrentValue:null,w=function(t){it(t)&&(e.replace?r.replace(a,nt):r.push(a,nt))},b={click:it};Array.isArray(this.event)?this.event.forEach((function(t){b[t]=w})):b[this.event]=w;var x={class:s},R=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:u,navigate:w,isActive:s[d],isExactActive:s[v]});if(R){if(1===R.length)return R[0];if(R.length>1||!R.length)return 0===R.length?t():t("span",{},R)}if("a"===this.tag)x.on=b,x.attrs={href:c,"aria-current":m};else{var E=at(this.$slots.default);if(E){E.isStatic=!1;var _=E.data=o({},E.data);for(var A in _.on=_.on||{},_.on){var j=_.on[A];A in b&&(_.on[A]=Array.isArray(j)?j:[j])}for(var C in b)C in _.on?_.on[C].push(b[C]):_.on[C]=w;var S=E.data.attrs=o({},E.data.attrs);S.href=c,S["aria-current"]=m}else x.on=b}return t(this.tag,x,this.$slots.default)}};function it(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&(void 0===t.button||0===t.button)){if(t.currentTarget&&t.currentTarget.getAttribute){var e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function at(t){if(t)for(var e,r=0;r<t.length;r++){if(e=t[r],"a"===e.tag)return e;if(e.children&&(e=at(e.children)))return e}}function ut(t){if(!ut.installed||tt!==t){ut.installed=!0,tt=t;var e=function(t){return void 0!==t},r=function(t,r){var n=t.$options._parentVnode;e(n)&&e(n=n.data)&&e(n=n.registerRouteInstance)&&n(t,r)};t.mixin({beforeCreate:function(){e(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),t.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,r(this,this)},destroyed:function(){r(this)}}),Object.defineProperty(t.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(t.prototype,"$route",{get:function(){return this._routerRoot._route}}),t.component("RouterView",i),t.component("RouterLink",ot);var n=t.config.optionMergeStrategies;n.beforeRouteEnter=n.beforeRouteLeave=n.beforeRouteUpdate=n.created}}var ct="undefined"!==typeof window;function st(t,e,r,n){var o=e||[],i=r||Object.create(null),a=n||Object.create(null);t.forEach((function(t){pt(o,i,a,t)}));for(var u=0,c=o.length;u<c;u++)"*"===o[u]&&(o.push(o.splice(u,1)[0]),c--,u--);return{pathList:o,pathMap:i,nameMap:a}}function pt(t,e,r,n,o,i){var a=n.path,u=n.name;var c=n.pathToRegexpOptions||{},s=ht(a,o,c.strict);"boolean"===typeof n.caseSensitive&&(c.sensitive=n.caseSensitive);var p={path:s,regex:ft(s,c),components:n.components||{default:n.component},instances:{},name:u,parent:o,matchAs:i,redirect:n.redirect,beforeEnter:n.beforeEnter,meta:n.meta||{},props:null==n.props?{}:n.components?n.props:{default:n.props}};if(n.children&&n.children.forEach((function(n){var o=i?C(i+"/"+n.path):void 0;pt(t,e,r,n,p,o)})),e[p.path]||(t.push(p.path),e[p.path]=p),void 0!==n.alias)for(var f=Array.isArray(n.alias)?n.alias:[n.alias],h=0;h<f.length;++h){var l=f[h];0;var d={path:l,children:n.children};pt(t,e,r,d,o,p.path||"/")}u&&(r[u]||(r[u]=p))}function ft(t,e){var r=P(t,[],e);return r}function ht(t,e,r){return r||(t=t.replace(/\/$/,"")),"/"===t[0]||null==e?t:C(e.path+"/"+t)}function lt(t,e){var r=st(t),n=r.pathList,o=r.pathMap,i=r.nameMap;function a(t){st(t,n,o,i)}function u(t,r,a){var u=Z(t,r,!1,e),c=u.name;if(c){var s=i[c];if(!s)return p(null,u);var f=s.regex.keys.filter((function(t){return!t.optional})).map((function(t){return t.name}));if("object"!==typeof u.params&&(u.params={}),r&&"object"===typeof r.params)for(var h in r.params)!(h in u.params)&&f.indexOf(h)>-1&&(u.params[h]=r.params[h]);return u.path=G(s.path,u.params,'named route "'+c+'"'),p(s,u,a)}if(u.path){u.params={};for(var l=0;l<n.length;l++){var d=n[l],v=o[d];if(dt(v.regex,u.path,u.params))return p(v,u,a)}}return p(null,u)}function c(t,r){var n=t.redirect,o="function"===typeof n?n(g(t,r,null,e)):n;if("string"===typeof o&&(o={path:o}),!o||"object"!==typeof o)return p(null,r);var a=o,c=a.name,s=a.path,f=r.query,h=r.hash,l=r.params;if(f=a.hasOwnProperty("query")?a.query:f,h=a.hasOwnProperty("hash")?a.hash:h,l=a.hasOwnProperty("params")?a.params:l,c){i[c];return u({_normalized:!0,name:c,query:f,hash:h,params:l},void 0,r)}if(s){var d=vt(s,t),v=G(d,l,'redirect route with path "'+d+'"');return u({_normalized:!0,path:v,query:f,hash:h},void 0,r)}return p(null,r)}function s(t,e,r){var n=G(r,e.params,'aliased route with path "'+r+'"'),o=u({_normalized:!0,path:n});if(o){var i=o.matched,a=i[i.length-1];return e.params=o.params,p(a,e)}return p(null,e)}function p(t,r,n){return t&&t.redirect?c(t,n||r):t&&t.matchAs?s(t,r,t.matchAs):g(t,r,n,e)}return{match:u,addRoutes:a}}function dt(t,e,r){var n=e.match(t);if(!n)return!1;if(!r)return!0;for(var o=1,i=n.length;o<i;++o){var a=t.keys[o-1],u="string"===typeof n[o]?decodeURIComponent(n[o]):n[o];a&&(r[a.name||"pathMatch"]=u)}return!0}function vt(t,e){return A(t,e.parent?e.parent.path:"/",!0)}var yt=ct&&window.performance&&window.performance.now?window.performance:Date;function mt(){return yt.now().toFixed(3)}var gt=mt();function wt(){return gt}function bt(t){return gt=t}var xt=Object.create(null);function Rt(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var t=window.location.protocol+"//"+window.location.host,e=window.location.href.replace(t,""),r=o({},window.history.state);return r.key=wt(),window.history.replaceState(r,"",e),window.addEventListener("popstate",Ot),function(){window.removeEventListener("popstate",Ot)}}function kt(t,e,r,n){if(t.app){var o=t.options.scrollBehavior;o&&t.app.$nextTick((function(){var i=_t(),a=o.call(t,e,r,n?i:null);a&&("function"===typeof a.then?a.then((function(t){Lt(t,i)})).catch((function(t){0})):Lt(a,i))}))}}function Et(){var t=wt();t&&(xt[t]={x:window.pageXOffset,y:window.pageYOffset})}function Ot(t){Et(),t.state&&t.state.key&&bt(t.state.key)}function _t(){var t=wt();if(t)return xt[t]}function At(t,e){var r=document.documentElement,n=r.getBoundingClientRect(),o=t.getBoundingClientRect();return{x:o.left-n.left-e.x,y:o.top-n.top-e.y}}function jt(t){return Pt(t.x)||Pt(t.y)}function Ct(t){return{x:Pt(t.x)?t.x:window.pageXOffset,y:Pt(t.y)?t.y:window.pageYOffset}}function St(t){return{x:Pt(t.x)?t.x:0,y:Pt(t.y)?t.y:0}}function Pt(t){return"number"===typeof t}var Tt=/^#\d/;function Lt(t,e){var r="object"===typeof t;if(r&&"string"===typeof t.selector){var n=Tt.test(t.selector)?document.getElementById(t.selector.slice(1)):document.querySelector(t.selector);if(n){var o=t.offset&&"object"===typeof t.offset?t.offset:{};o=St(o),e=At(n,o)}else jt(t)&&(e=Ct(t))}else r&&jt(t)&&(e=Ct(t));e&&window.scrollTo(e.x,e.y)}var $t=ct&&function(){var t=window.navigator.userAgent;return(-1===t.indexOf("Android 2.")&&-1===t.indexOf("Android 4.0")||-1===t.indexOf("Mobile Safari")||-1!==t.indexOf("Chrome")||-1!==t.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function qt(t,e){Et();var r=window.history;try{if(e){var n=o({},r.state);n.key=wt(),r.replaceState(n,"",t)}else r.pushState({key:bt(mt())},"",t)}catch(i){window.location[e?"replace":"assign"](t)}}function Ut(t){qt(t,!0)}function It(t,e,r){var n=function(o){o>=t.length?r():t[o]?e(t[o],(function(){n(o+1)})):n(o+1)};n(0)}var Mt={redirected:2,aborted:4,cancelled:8,duplicated:16};function Vt(t,e){return Nt(t,e,Mt.redirected,'Redirected when going from "'+t.fullPath+'" to "'+Dt(e)+'" via a navigation guard.')}function Bt(t,e){var r=Nt(t,e,Mt.duplicated,'Avoided redundant navigation to current location: "'+t.fullPath+'".');return r.name="NavigationDuplicated",r}function Ft(t,e){return Nt(t,e,Mt.cancelled,'Navigation cancelled from "'+t.fullPath+'" to "'+e.fullPath+'" with a new navigation.')}function Ht(t,e){return Nt(t,e,Mt.aborted,'Navigation aborted from "'+t.fullPath+'" to "'+e.fullPath+'" via a navigation guard.')}function Nt(t,e,r,n){var o=new Error(n);return o._isRouter=!0,o.from=t,o.to=e,o.type=r,o}var zt=["params","query","hash"];function Dt(t){if("string"===typeof t)return t;if("path"in t)return t.path;var e={};return zt.forEach((function(r){r in t&&(e[r]=t[r])})),JSON.stringify(e,null,2)}function Kt(t){return Object.prototype.toString.call(t).indexOf("Error")>-1}function Jt(t,e){return Kt(t)&&t._isRouter&&(null==e||t.type===e)}function Qt(t){return function(e,r,n){var o=!1,i=0,a=null;Xt(t,(function(t,e,r,u){if("function"===typeof t&&void 0===t.cid){o=!0,i++;var c,s=Zt((function(e){Gt(e)&&(e=e.default),t.resolved="function"===typeof e?e:tt.extend(e),r.components[u]=e,i--,i<=0&&n()})),p=Zt((function(t){var e="Failed to resolve async component "+u+": "+t;a||(a=Kt(t)?t:new Error(e),n(a))}));try{c=t(s,p)}catch(h){p(h)}if(c)if("function"===typeof c.then)c.then(s,p);else{var f=c.component;f&&"function"===typeof f.then&&f.then(s,p)}}})),o||n()}}function Xt(t,e){return Yt(t.map((function(t){return Object.keys(t.components).map((function(r){return e(t.components[r],t.instances[r],t,r)}))})))}function Yt(t){return Array.prototype.concat.apply([],t)}var Wt="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Gt(t){return t.__esModule||Wt&&"Module"===t[Symbol.toStringTag]}function Zt(t){var e=!1;return function(){var r=[],n=arguments.length;while(n--)r[n]=arguments[n];if(!e)return e=!0,t.apply(this,r)}}var te=function(t,e){this.router=t,this.base=ee(e),this.current=b,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function ee(t){if(!t)if(ct){var e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^https?:\/\/[^\/]+/,"")}else t="/";return"/"!==t.charAt(0)&&(t="/"+t),t.replace(/\/$/,"")}function re(t,e){var r,n=Math.max(t.length,e.length);for(r=0;r<n;r++)if(t[r]!==e[r])break;return{updated:e.slice(0,r),activated:e.slice(r),deactivated:t.slice(r)}}function ne(t,e,r,n){var o=Xt(t,(function(t,n,o,i){var a=oe(t,e);if(a)return Array.isArray(a)?a.map((function(t){return r(t,n,o,i)})):r(a,n,o,i)}));return Yt(n?o.reverse():o)}function oe(t,e){return"function"!==typeof t&&(t=tt.extend(t)),t.options[e]}function ie(t){return ne(t,"beforeRouteLeave",ue,!0)}function ae(t){return ne(t,"beforeRouteUpdate",ue)}function ue(t,e){if(e)return function(){return t.apply(e,arguments)}}function ce(t,e,r){return ne(t,"beforeRouteEnter",(function(t,n,o,i){return se(t,o,i,e,r)}))}function se(t,e,r,n,o){return function(i,a,u){return t(i,a,(function(t){"function"===typeof t&&n.push((function(){pe(t,e.instances,r,o)})),u(t)}))}}function pe(t,e,r,n){e[r]&&!e[r]._isBeingDestroyed?t(e[r]):n()&&setTimeout((function(){pe(t,e,r,n)}),16)}te.prototype.listen=function(t){this.cb=t},te.prototype.onReady=function(t,e){this.ready?t():(this.readyCbs.push(t),e&&this.readyErrorCbs.push(e))},te.prototype.onError=function(t){this.errorCbs.push(t)},te.prototype.transitionTo=function(t,e,r){var n,o=this;try{n=this.router.match(t,this.current)}catch(i){throw this.errorCbs.forEach((function(t){t(i)})),i}this.confirmTransition(n,(function(){var t=o.current;o.updateRoute(n),e&&e(n),o.ensureURL(),o.router.afterHooks.forEach((function(e){e&&e(n,t)})),o.ready||(o.ready=!0,o.readyCbs.forEach((function(t){t(n)})))}),(function(t){r&&r(t),t&&!o.ready&&(o.ready=!0,Jt(t,Mt.redirected)?o.readyCbs.forEach((function(t){t(n)})):o.readyErrorCbs.forEach((function(e){e(t)})))}))},te.prototype.confirmTransition=function(t,e,r){var o=this,i=this.current,a=function(t){!Jt(t)&&Kt(t)&&(o.errorCbs.length?o.errorCbs.forEach((function(e){e(t)})):(n(!1,"uncaught error during route navigation:"),console.error(t))),r&&r(t)},u=t.matched.length-1,c=i.matched.length-1;if(k(t,i)&&u===c&&t.matched[u]===i.matched[c])return this.ensureURL(),a(Bt(i,t));var s=re(this.current.matched,t.matched),p=s.updated,f=s.deactivated,h=s.activated,l=[].concat(ie(f),this.router.beforeHooks,ae(p),h.map((function(t){return t.beforeEnter})),Qt(h));this.pending=t;var d=function(e,r){if(o.pending!==t)return a(Ft(i,t));try{e(t,i,(function(e){!1===e?(o.ensureURL(!0),a(Ht(i,t))):Kt(e)?(o.ensureURL(!0),a(e)):"string"===typeof e||"object"===typeof e&&("string"===typeof e.path||"string"===typeof e.name)?(a(Vt(i,t)),"object"===typeof e&&e.replace?o.replace(e):o.push(e)):r(e)}))}catch(n){a(n)}};It(l,d,(function(){var r=[],n=function(){return o.current===t},u=ce(h,r,n),c=u.concat(o.router.resolveHooks);It(c,d,(function(){if(o.pending!==t)return a(Ft(i,t));o.pending=null,e(t),o.router.app&&o.router.app.$nextTick((function(){r.forEach((function(t){t()}))}))}))}))},te.prototype.updateRoute=function(t){this.current=t,this.cb&&this.cb(t)},te.prototype.setupListeners=function(){},te.prototype.teardownListeners=function(){this.listeners.forEach((function(t){t()})),this.listeners=[]};var fe=function(t){function e(e,r){t.call(this,e,r),this._startLocation=he(this.base)}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(Rt());var o=function(){var r=t.current,o=he(t.base);t.current===b&&o===t._startLocation||t.transitionTo(o,(function(t){n&&kt(e,t,r,!0)}))};window.addEventListener("popstate",o),this.listeners.push((function(){window.removeEventListener("popstate",o)}))}},e.prototype.go=function(t){window.history.go(t)},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){qt(C(n.base+t.fullPath)),kt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){Ut(C(n.base+t.fullPath)),kt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.ensureURL=function(t){if(he(this.base)!==this.current.fullPath){var e=C(this.base+this.current.fullPath);t?qt(e):Ut(e)}},e.prototype.getCurrentLocation=function(){return he(this.base)},e}(te);function he(t){var e=decodeURI(window.location.pathname);return t&&0===e.toLowerCase().indexOf(t.toLowerCase())&&(e=e.slice(t.length)),(e||"/")+window.location.search+window.location.hash}var le=function(t){function e(e,r,n){t.call(this,e,r),n&&de(this.base)||ve()}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.setupListeners=function(){var t=this;if(!(this.listeners.length>0)){var e=this.router,r=e.options.scrollBehavior,n=$t&&r;n&&this.listeners.push(Rt());var o=function(){var e=t.current;ve()&&t.transitionTo(ye(),(function(r){n&&kt(t.router,r,e,!0),$t||we(r.fullPath)}))},i=$t?"popstate":"hashchange";window.addEventListener(i,o),this.listeners.push((function(){window.removeEventListener(i,o)}))}},e.prototype.push=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){ge(t.fullPath),kt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this,o=this,i=o.current;this.transitionTo(t,(function(t){we(t.fullPath),kt(n.router,t,i,!1),e&&e(t)}),r)},e.prototype.go=function(t){window.history.go(t)},e.prototype.ensureURL=function(t){var e=this.current.fullPath;ye()!==e&&(t?ge(e):we(e))},e.prototype.getCurrentLocation=function(){return ye()},e}(te);function de(t){var e=he(t);if(!/^\/#/.test(e))return window.location.replace(C(t+"/#"+e)),!0}function ve(){var t=ye();return"/"===t.charAt(0)||(we("/"+t),!1)}function ye(){var t=window.location.href,e=t.indexOf("#");if(e<0)return"";t=t.slice(e+1);var r=t.indexOf("?");if(r<0){var n=t.indexOf("#");t=n>-1?decodeURI(t.slice(0,n))+t.slice(n):decodeURI(t)}else t=decodeURI(t.slice(0,r))+t.slice(r);return t}function me(t){var e=window.location.href,r=e.indexOf("#"),n=r>=0?e.slice(0,r):e;return n+"#"+t}function ge(t){$t?qt(me(t)):window.location.hash=t}function we(t){$t?Ut(me(t)):window.location.replace(me(t))}var be=function(t){function e(e,r){t.call(this,e,r),this.stack=[],this.index=-1}return t&&(e.__proto__=t),e.prototype=Object.create(t&&t.prototype),e.prototype.constructor=e,e.prototype.push=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index+1).concat(t),n.index++,e&&e(t)}),r)},e.prototype.replace=function(t,e,r){var n=this;this.transitionTo(t,(function(t){n.stack=n.stack.slice(0,n.index).concat(t),e&&e(t)}),r)},e.prototype.go=function(t){var e=this,r=this.index+t;if(!(r<0||r>=this.stack.length)){var n=this.stack[r];this.confirmTransition(n,(function(){e.index=r,e.updateRoute(n)}),(function(t){Jt(t,Mt.duplicated)&&(e.index=r)}))}},e.prototype.getCurrentLocation=function(){var t=this.stack[this.stack.length-1];return t?t.fullPath:"/"},e.prototype.ensureURL=function(){},e}(te),xe=function(t){void 0===t&&(t={}),this.app=null,this.apps=[],this.options=t,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=lt(t.routes||[],this);var e=t.mode||"hash";switch(this.fallback="history"===e&&!$t&&!1!==t.fallback,this.fallback&&(e="hash"),ct||(e="abstract"),this.mode=e,e){case"history":this.history=new fe(this,t.base);break;case"hash":this.history=new le(this,t.base,this.fallback);break;case"abstract":this.history=new be(this,t.base);break;default:0}},Re={currentRoute:{configurable:!0}};function ke(t,e){return t.push(e),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ee(t,e,r){var n="hash"===r?"#"+e:e;return t?C(t+"/"+n):n}xe.prototype.match=function(t,e,r){return this.matcher.match(t,e,r)},Re.currentRoute.get=function(){return this.history&&this.history.current},xe.prototype.init=function(t){var e=this;if(this.apps.push(t),t.$once("hook:destroyed",(function(){var r=e.apps.indexOf(t);r>-1&&e.apps.splice(r,1),e.app===t&&(e.app=e.apps[0]||null),e.app||e.history.teardownListeners()})),!this.app){this.app=t;var r=this.history;if(r instanceof fe||r instanceof le){var n=function(t){var n=r.current,o=e.options.scrollBehavior,i=$t&&o;i&&"fullPath"in t&&kt(e,t,n,!1)},o=function(t){r.setupListeners(),n(t)};r.transitionTo(r.getCurrentLocation(),o,o)}r.listen((function(t){e.apps.forEach((function(e){e._route=t}))}))}},xe.prototype.beforeEach=function(t){return ke(this.beforeHooks,t)},xe.prototype.beforeResolve=function(t){return ke(this.resolveHooks,t)},xe.prototype.afterEach=function(t){return ke(this.afterHooks,t)},xe.prototype.onReady=function(t,e){this.history.onReady(t,e)},xe.prototype.onError=function(t){this.history.onError(t)},xe.prototype.push=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.push(t,e,r)}));this.history.push(t,e,r)},xe.prototype.replace=function(t,e,r){var n=this;if(!e&&!r&&"undefined"!==typeof Promise)return new Promise((function(e,r){n.history.replace(t,e,r)}));this.history.replace(t,e,r)},xe.prototype.go=function(t){this.history.go(t)},xe.prototype.back=function(){this.go(-1)},xe.prototype.forward=function(){this.go(1)},xe.prototype.getMatchedComponents=function(t){var e=t?t.matched?t:this.resolve(t).route:this.currentRoute;return e?[].concat.apply([],e.matched.map((function(t){return Object.keys(t.components).map((function(e){return t.components[e]}))}))):[]},xe.prototype.resolve=function(t,e,r){e=e||this.history.current;var n=Z(t,e,r,this),o=this.match(n,e),i=o.redirectedFrom||o.fullPath,a=this.history.base,u=Ee(a,i,this.mode);return{location:n,route:o,href:u,normalizedTo:n,resolved:o}},xe.prototype.addRoutes=function(t){this.matcher.addRoutes(t),this.history.current!==b&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(xe.prototype,Re),xe.install=ut,xe.version="3.4.3",xe.isNavigationFailure=Jt,xe.NavigationFailureType=Mt,ct&&window.Vue&&window.Vue.use(xe),e["default"]=xe}});