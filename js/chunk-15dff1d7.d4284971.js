(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15dff1d7"],{"034f":function(t,e,n){"use strict";var a=n("485e"),r=n("bc2f").filter,c=n("243e"),i=n("64f1"),o=c("filter"),u=i("filter");a({target:"Array",proto:!0,forced:!o||!u},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"0c3f":function(t,e,n){},1564:function(t,e,n){"use strict";var a=n("485e"),r=n("bc2f").map,c=n("243e"),i=n("64f1"),o=c("map"),u=i("map");a({target:"Array",proto:!0,forced:!o||!u},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},3610:function(t,e,n){"use strict";var a=n("485e"),r=n("554f");a({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},"4c9f":function(t,e,n){"use strict";var a=n("485e"),r=n("bc2f").every,c=n("3891"),i=n("64f1"),o=c("every"),u=i("every");a({target:"Array",proto:!0,forced:!o||!u},{every:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},"4e26":function(t,e,n){},"554f":function(t,e,n){"use strict";var a=n("bc2f").forEach,r=n("3891"),c=n("64f1"),i=r("forEach"),o=c("forEach");t.exports=i&&o?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},"588e":function(t,e,n){var a=n("485e"),r=n("35a9"),c=n("996e"),i=n("3274"),o=n("977b"),u=n("bab6");a({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,a=i(t),r=o.f,f=c(a),s={},l=0;while(f.length>l)n=r(a,e=f[l++]),void 0!==n&&u(s,e,n);return s}})},7984:function(t,e,n){"use strict";n("0c3f")},"8a9c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",{staticStyle:{height:"100vh"}},[n("el-header",[t._v("Header")]),n("el-container",[n("el-aside",{attrs:{width:"220px"}},[n("basic-menu")],1),n("el-main",[n("tab-view",{attrs:{dataList:t.tabViewList},on:{close:t.handleDeleteTag,"close-all":t.clearTabCache,"tag-click":t.handleTabChange}}),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:t.routerCached}},[n("router-view")],1)],1)],1)],1),n("el-footer",[t._v("Footer")])],1)},r=[],c=n("0e4d"),i=n("94ef"),o=n("76ff"),u=n("3a68"),f=n("fd63"),s=n("3753"),l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{on:{select:t.handleSelect}},[n("menu-item",{attrs:{menuData:t.menuData}})],1)},h=[],d=(n("9f1b"),n("eb5b"),n("a593")),b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("fragment",[t._l(t.menuData,(function(e){return[e.children?n("el-submenu",{key:e.key||e.path,attrs:{index:e.path}},[n("template",{slot:"title"},[e.icon?n("i",{class:e.icon}):t._e(),n("span",[t._v(t._s(e.name))])]),n("sub-menu",{attrs:{menuData:e.children}})],2):n("el-menu-item",{key:e.key||e.path,attrs:{index:e.path}},[t._v(" "+t._s(e.name)+" ")])]}))],2)},p=[],m=d["default"].extend({name:"subMenu",props:{menuData:{type:Array}}}),v=m,y=n("c701"),g=Object(y["a"])(v,b,p,!1,null,null,null),C=g.exports,O=n("5566"),j=n("1377"),w=function t(e){var n,a=[],r=Object(j["a"])(e);try{for(r.s();!(n=r.n()).done;){var c=n.value,i=c.name,o=c.path,u=c.children,f=c.redirect,s=c.meta;if(!f){var l=void 0;if(null!==u&&void 0!==u&&u.length){if(!i)continue;l={name:i,path:o,children:t(u)}}else{if(!i||!o||null!==s&&void 0!==s&&s.hidden)continue;l={name:i,path:o}}a.push(l)}}}catch(h){r.e(h)}finally{r.f()}return a},E=function(t){return w(t)},_=d["default"].extend({components:{MenuItem:C},data:function(){return{}},computed:{menuData:function(){var t=O["a"].find((function(t){return"layout"===t.name}));return null!==t&&void 0!==t&&t.children?E(t.children):[]}},methods:{handleSelect:function(t,e){this.$route.path!==t&&this.$router.push({path:t,params:{keyPath:e}})}}}),A=_,L=Object(y["a"])(A,l,h,!1,null,null,null),T=L.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"router-nav"},[t.dataList.length>0?t._l(t.dataList,(function(e){return n("el-tag",{key:e.key,staticClass:"nav-tag",attrs:{type:t.tagType(e.key),closable:""},on:{close:function(n){return t.handleClose(e)},click:function(n){return t.$emit("tag-click",e)}}},[t._v(" "+t._s(e.label)+" ")])})):t._e(),n("el-tag",{staticClass:"nav-tag",attrs:{type:"info"},on:{click:function(e){return t.$emit("close-all")}}},[t._v("全部关闭")])],2)},D=[],x=d["default"].extend({props:{dataList:{type:Array,default:function(){return[]}}},computed:{},methods:{handleClose:function(t){this.$emit("close",t)},tagType:function(t){return this.$route.path===t?"":"info"}}}),V=x,$=(n("7984"),Object(y["a"])(V,k,D,!1,null,"1511a6ed",null)),P=$.exports,H=n("d211"),B=n("cf6b"),S=(n("4c9f"),n("bf6c"),n("1564"),n("b526"),n("f640")),M=n("0613"),I=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){var t;return Object(c["a"])(this,n),t=e.apply(this,arguments),t.tabCacheList=[],t}return Object(i["a"])(n,[{key:"ADD_TAB_CACHE",value:function(t){this.tabCacheList.every((function(e){return e.path!==t.path}))&&this.tabCacheList.push(t)}},{key:"DELETE_TAB_CACHE",value:function(t){var e=this.tabCacheList.findIndex((function(e){return e.path===t}));-1!==e&&this.tabCacheList.splice(e,1)}},{key:"CLEAR_TAB_CACHE",value:function(){this.tabCacheList=[]}},{key:"cacheList",get:function(){return this.tabCacheList}},{key:"tabViewList",get:function(){return this.tabCacheList.map((function(t){return{path:t.path,key:t.path,label:t.name}}))}},{key:"routerCached",get:function(){return this.tabCacheList.map((function(t){return t.name}))}}]),n}(S["d"]);Object(f["a"])([S["c"]],I.prototype,"ADD_TAB_CACHE",null),Object(f["a"])([S["c"]],I.prototype,"DELETE_TAB_CACHE",null),Object(f["a"])([S["c"]],I.prototype,"CLEAR_TAB_CACHE",null),I=Object(f["a"])([Object(S["b"])({name:"tabView",store:M["a"],dynamic:!0,namespaced:!0})],I);var R=Object(S["e"])(I),J=d["default"].extend({computed:Object(H["a"])(Object(H["a"])({},Object(B["mapGetters"])({cacheList:"tabView/cacheList",tabViewList:"tabView/tabViewList",routerCached:"tabView/routerCached"})),{},{$TabViewCache:function(){return R}}),methods:Object(H["a"])(Object(H["a"])({},Object(B["mapMutations"])({addTabCache:"tabView/ADD_TAB_CACHE",deleteTabCache:"tabView/DELETE_TAB_CACHE",clearTabCache:"tabView/CLEAR_TAB_CACHE"})),{},{handleDeleteTag:function(t){this.deleteTabCache(t.path),console.log("$TabViewCache",this.$TabViewCache)},handleTabChange:function(t){this.$route.path!==t.path&&this.$router.push({path:t.path})}}),watch:{$route:{handler:function(t){var e=t.path,n=t.name,a=t.meta,r=void 0===a?{}:a;r.keepAlive&&this.addTabCache({path:e,name:n})},immediate:!0},cacheList:function(t){console.log("cacheList change",t,this.routerCached)}},beforeRouteEnter:function(t,e,n){n()}}),F=function(t){Object(o["a"])(n,t);var e=Object(u["a"])(n);function n(){return Object(c["a"])(this,n),e.apply(this,arguments)}return Object(i["a"])(n,[{key:"mounted",value:function(){console.log("mounted",this.cacheList)}}]),n}(Object(s["c"])(J));F=Object(f["a"])([Object(s["b"])({components:{basicMenu:T,tabView:P},watch:{tabViewList:function(t){console.log("tabViewList watch",t)}}})],F);var G=F,q=G,z=Object(y["a"])(q,a,r,!1,null,null,null),K=z.exports;n("4e26"),e["default"]=K},"9f1b":function(t,e,n){"use strict";var a=n("485e"),r=n("bc2f").find,c=n("3f9d"),i=n("64f1"),o="find",u=!0,f=i(o);o in[]&&Array(1)[o]((function(){u=!1})),a({target:"Array",proto:!0,forced:u||!f},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},b526:function(t,e,n){"use strict";var a=n("485e"),r=n("fd0b"),c=n("b804"),i=n("4a35"),o=n("3c6b"),u=n("0c3a"),f=n("bab6"),s=n("243e"),l=n("64f1"),h=s("splice"),d=l("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,p=Math.min,m=9007199254740991,v="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!h||!d},{splice:function(t,e){var n,a,s,l,h,d,y=o(this),g=i(y.length),C=r(t,g),O=arguments.length;if(0===O?n=a=0:1===O?(n=0,a=g-C):(n=O-2,a=p(b(c(e),0),g-C)),g+n-a>m)throw TypeError(v);for(s=u(y,a),l=0;l<a;l++)h=C+l,h in y&&f(s,l,y[h]);if(s.length=a,n<a){for(l=C;l<g-a;l++)h=l+a,d=l+n,h in y?y[d]=y[h]:delete y[d];for(l=g;l>g-a+n;l--)delete y[l-1]}else if(n>a)for(l=g-a;l>C;l--)h=l+a-1,d=l+n-1,h in y?y[d]=y[h]:delete y[d];for(l=0;l<n;l++)y[l+C]=arguments[l+2];return y.length=g-a+n,s}})},bf6c:function(t,e,n){"use strict";var a=n("485e"),r=n("bc2f").findIndex,c=n("3f9d"),i=n("64f1"),o="findIndex",u=!0,f=i(o);o in[]&&Array(1)[o]((function(){u=!1})),a({target:"Array",proto:!0,forced:u||!f},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(o)},d211:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n("2522"),n("034f"),n("3610"),n("fd07"),n("588e"),n("ed88"),n("f644");function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},ed88:function(t,e,n){var a=n("485e"),r=n("3c6b"),c=n("c59c"),i=n("aad0"),o=i((function(){c(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return c(r(t))}})},f644:function(t,e,n){var a=n("efd0"),r=n("0825"),c=n("554f"),i=n("13d0");for(var o in r){var u=a[o],f=u&&u.prototype;if(f&&f.forEach!==c)try{i(f,"forEach",c)}catch(s){f.forEach=c}}},fd07:function(t,e,n){var a=n("485e"),r=n("aad0"),c=n("3274"),i=n("977b").f,o=n("35a9"),u=r((function(){i(1)})),f=!o||u;a({target:"Object",stat:!0,forced:f,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(c(t),e)}})}}]);