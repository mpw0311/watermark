(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["watermark"],{"08ba":function(t,e,a){var n=a("d890"),r=a("064b"),i=a("3c10"),o=a("0fc1");for(var s in r){var c=n[s],l=c&&c.prototype;if(l&&l.forEach!==i)try{o(l,"forEach",i)}catch(u){l.forEach=i}}},"0988":function(t,e,a){"use strict";var n=a("c175"),r=a.n(n);r.a},"0adc":function(t,e,a){},1206:function(t,e,a){"use strict";var n=a("d38c"),r=a.n(n);r.a},1660:function(t,e,a){},1784:function(t,e,a){"use strict";var n=a("1c8b"),r=a("58d8").left,i=a("d7e1"),o=a("ff9c"),s=i("reduce"),c=o("reduce",{1:0});n({target:"Array",proto:!0,forced:!s||!c},{reduce:function(t){return r(this,t,arguments.length,arguments.length>1?arguments[1]:void 0)}})},"2c81":function(t,e,a){"use strict";var n=a("a381"),r=a.n(n);r.a},"31d1":function(t,e,a){"use strict";var n=a("92f0"),r=a.n(n);r.a},"3c10":function(t,e,a){"use strict";var n=a("5dfd").forEach,r=a("d7e1"),i=a("ff9c"),o=r("forEach"),s=i("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"3e0c":function(t,e,a){},4194:function(t,e,a){"use strict";var n=a("1c8b"),r=a("5dfd").find,i=a("258f"),o=a("ff9c"),s="find",c=!0,l=o(s);s in[]&&Array(1)[s]((function(){c=!1})),n({target:"Array",proto:!0,forced:c||!l},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(s)},"4b10":function(t,e,a){"use strict";var n=a("e8f3"),r=a.n(n);r.a},"501e":function(t,e,a){},"513c":function(t,e,a){"use strict";var n=a("1e2c"),r=a("d890"),i=a("e8d6"),o=a("1944"),s=a("faa8"),c=a("2118"),l=a("7063"),u=a("9f67"),f=a("efe2"),d=a("6d60"),h=a("b338").f,v=a("aa6b").f,m=a("d910").f,p=a("c10f").trim,g="Number",b=r[g],w=b.prototype,y=c(d(w))==g,x=function(t){var e,a,n,r,i,o,s,c,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=p(l),e=l.charCodeAt(0),43===e||45===e){if(a=l.charCodeAt(2),88===a||120===a)return NaN}else if(48===e){switch(l.charCodeAt(1)){case 66:case 98:n=2,r=49;break;case 79:case 111:n=8,r=55;break;default:return+l}for(i=l.slice(2),o=i.length,s=0;s<o;s++)if(c=i.charCodeAt(s),c<48||c>r)return NaN;return parseInt(i,n)}return+l};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var k,O=function(t){var e=arguments.length<1?0:t,a=this;return a instanceof O&&(y?f((function(){w.valueOf.call(a)})):c(a)!=g)?l(new b(x(e)),a,O):x(e)},C=n?h(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),j=0;C.length>j;j++)s(b,k=C[j])&&!s(O,k)&&m(O,k,v(b,k));O.prototype=w,w.constructor=O,o(r,g,O)}},"58d8":function(t,e,a){var n=a("0c3c"),r=a("3553"),i=a("692f"),o=a("d88d"),s=function(t){return function(e,a,s,c){n(a);var l=r(e),u=i(l),f=o(l.length),d=t?f-1:0,h=t?-1:1;if(s<2)while(1){if(d in u){c=u[d],d+=h;break}if(d+=h,t?d<0:f<=d)throw TypeError("Reduce of empty array with no initial value")}for(;t?d>=0:f>d;d+=h)d in u&&(c=a(c,u[d],d,l));return c}};t.exports={left:s(!1),right:s(!0)}},"6ebc":function(t,e,a){"use strict";var n=a("501e"),r=a.n(n);r.a},7008:function(t,e,a){"use strict";var n=a("3e0c"),r=a.n(n);r.a},"753f":function(t,e){const a=function(t){const e=t.split(",")[0].split(":")[1].split(";")[0],a=atob(t.split(",")[1]),n=a.length,r=new window.ArrayBuffer(n),i=new window.Uint8Array(r);for(let o=0;o<n;o++)i[o]=a.charCodeAt(o);return new Blob([i],{type:e})},n=function(){if(!t.exports.supported)return;const e=window.HTMLCanvasElement.prototype;!e.toBlob&&e.toDataURL&&(e.toBlob=function(t,e,n){t(a(this.toDataURL(e,n)))})},r="undefined"!==typeof window.HTMLCanvasElement&&"undefined"!==typeof window.atob&&"undefined"!==typeof window.Blob&&"undefined"!==typeof window.ArrayBuffer&&"undefined"!==typeof window.Uint8Array;t.exports=a,t.exports.init=n,t.exports.supported=r},"7d48":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticStyle:{"min-width":"1000px"}},[a("main-header"),a("watermark-layout",{scopedSlots:t._u([{key:"header",fn:function(){return[a("watermark-header",{attrs:{formData:t.option,"disabled-save":!t.fileList.length},on:{"update:formData":function(e){t.option=e},"update:form-data":function(e){t.option=e},rotate:t.handleRotate,save:t.handleSave,"save-all":function(e){return t.handleSave("all")},"file-change":t.handleAddFile}})]},proxy:!0},{key:"tool",fn:function(){return[a("div",{staticClass:"watermark-tool"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:t.file&&t.file.name,placement:"bottom-start"}},[a("span",{staticClass:"file-name"},[t._v(" "+t._s(t.file&&t.file.name))])]),a("div",{staticStyle:{width:"140px"}},[a("w-zoom",{model:{value:t.zoom,callback:function(e){t.zoom=e},expression:"zoom"}})],1)],1)]},proxy:!0},{key:"aside-left",fn:function(){return[a("watermark-slider",{attrs:{fileList:t.fileList,active:t.file&&t.file.uid},on:{change:t.handlePreview,delete:t.handleDelete}})]},proxy:!0},{key:"aside",fn:function(){return[a("watermark-editor",{attrs:{formData:t.option},on:{"update:formData":function(e){t.option=e},"update:form-data":function(e){t.option=e}}})]},proxy:!0}])},[a("div",{staticClass:"watermark-area"},[a("div",{staticClass:"watermark-content"},[a("div",{ref:"watermark",staticClass:"watermark"})])])])],1)},r=[],i=(a("dbb3"),a("4194"),a("053b"),a("52ef")),o=(a("6a61"),a("cf7f")),s=a("0261"),c="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),l=new Uint8Array(16);function u(){if(!c)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return c(l)}var f=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function d(t){return"string"===typeof t&&f.test(t)}for(var h=d,v=[],m=0;m<256;++m)v.push((m+256).toString(16).substr(1));function p(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=(v[t[e+0]]+v[t[e+1]]+v[t[e+2]]+v[t[e+3]]+"-"+v[t[e+4]]+v[t[e+5]]+"-"+v[t[e+6]]+v[t[e+7]]+"-"+v[t[e+8]]+v[t[e+9]]+"-"+v[t[e+10]]+v[t[e+11]]+v[t[e+12]]+v[t[e+13]]+v[t[e+14]]+v[t[e+15]]).toLowerCase();if(!h(a))throw TypeError("Stringified UUID is invalid");return a}var g=p;function b(t,e,a){t=t||{};var n=t.random||(t.rng||u)();if(n[6]=15&n[6]|64,n[8]=63&n[8]|128,e){a=a||0;for(var r=0;r<16;++r)e[a+r]=n[r];return e}return g(n)}var w=b;a("b4fb"),a("513c"),a("e18c"),a("1c2e"),a("f3dd"),a("fe59"),a("b73f"),a("bf84"),a("fe8a"),a("08ba");function y(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function x(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function k(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?x(Object(a),!0).forEach((function(e){y(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}a("ecb4");function O(t,e){if(null==t)return{};var a,n,r={},i=Object.keys(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}function C(t,e){if(null==t)return{};var a,n,r=O(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)a=i[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var j=a("bb06"),S=a("9691"),R=a("1462"),E=a("a340"),_=a("753f"),A=a.n(_),I=a("ecc0");A.a.init();var L=function(){function t(){Object(R["a"])(this,t)}return Object(E["a"])(t,[{key:"downloadCanvas",value:function(e,a,n){return new Promise((function(r,i){e.toBlob((function(t){t?(Object(I["saveAs"])(t,a),r()):i()}),"image/".concat(n),t.QUALITY_RATIO)}))}},{key:"saveAsJPEG",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w();return this.downloadCanvas(t,e,"jpeg")}},{key:"saveAsPNG",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w();return this.downloadCanvas(t,e,"jpeg")}}]),t}();L.QUALITY_RATIO=.95;var D=new L,T=function(){function t(){Object(R["a"])(this,t)}return Object(E["a"])(t,[{key:"createCanvasElement",value:function(t,e){var a=document.createElement("canvas");return a.setAttribute("width",this.convertPX(t)),a.setAttribute("height",this.convertPX(e)),a}},{key:"convertPX",value:function(t){if("number"===typeof t)return"".concat(t,"px");if("string"===typeof t)return/px^/.test(t)?t:"".concat(t,"px");throw new Error("".concat(t," 类型错误"))}},{key:"parseIntPlus",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return parseInt(String(t),e)}},{key:"convertRad",value:function(t){return Math.PI/180*t}},{key:"convertDataURL",value:function(t,e){return new Promise((function(a){var n=new FileReader;e&&"dataURL"!==e?n.readAsText(t):n.readAsDataURL(t),n.onload=function(){a(n.result)}}))}}]),t}(),W=function(t){Object(j["a"])(a,t);var e=Object(S["a"])(a);function a(t){var n;Object(R["a"])(this,a),n=e.call(this);var r=n.create(t),i=r.canvas,o=r.ctx;return n.canvas=i,n.ctx=o,n}return Object(E["a"])(a,[{key:"getRealWidth",value:function(t,e){var a=Math.sqrt,n=Math.pow;return a(n(t,2)+n(e,2))}},{key:"create",value:function(t){var e=t.width,a=t.height,n=this.createCanvasElement(e,a),r=n.getContext("2d");if(!(r instanceof CanvasRenderingContext2D))throw new Error("ctx is not defined");return n.width=this.getRealWidth(e,a),n.height=e,{canvas:n,ctx:r}}},{key:"canvasTextAutoLine",value:function(t,e,a,n,r){for(var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:20,o=0,s=e,c=0,l=0;l<a.length;l++)o+=t.measureText(a[l]).width,o>s-n&&(t.fillText(a.substring(c,l),n,r),r+=i,o=0,c=l),l===a.length-1&&t.fillText(a.substring(c,l+1),n,r)}},{key:"renderText",value:function(t){this.clearCanvas();var e=t.text,n=t.rotate,r=t.fillStyle,i=t.fontFamily,o=Math.max(t.fontSize,a.minFontSize),s=Math.sin,c=Math.tan;this.ctx.font="".concat(o,"px ").concat(i),this.ctx.rotate(-n*Math.PI/180),this.ctx.fillStyle=r;var l=this.parseIntPlus(s(n*Math.PI/180)*this.canvasWidth),u=-this.parseIntPlus(l/c((90-n)*Math.PI/180));this.canvasTextAutoLine(this.ctx,this.canvasWidth,e,u+10,l+Number(o)+20,1.4*Number(o))}},{key:"clearCanvas",value:function(){this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight)}},{key:"drawWatermark",value:function(t,e,a,n){var r=n.width,i=n.height,o=n.fontSize;r&&r!==this.canvasWidth&&(this.canvasWidth=r),i&&i!==this.canvasHeight&&(this.canvasHeight=i),n.fontSize=o<10?10:this.parseIntPlus(o),this.renderText(n);var s=t.createPattern(this.canvas,"repeat");s&&(t.fillStyle=s,t.fillRect(0,0,e,a))}},{key:"canvasWidth",get:function(){return this.canvas.width},set:function(t){this.canvas.width=Math.max(t,a.minWidth)}},{key:"canvasHeight",get:function(){return this.canvas.height},set:function(t){var e=Math.max(t,a.minHeight);this.canvas.height=this.getRealWidth(this.canvasWidth,e)}}]),a}(T);W.minWidth=50,W.minHeight=50,W.minFontSize=10;var $=function(t){Object(j["a"])(a,t);var e=Object(S["a"])(a);function a(t){var n;Object(R["a"])(this,a),n=e.call(this),n.events={};var r=t.ref,i=t.height,o=void 0===i?100:i,s=t.width,c=void 0===s?100:s,l=t.dataURL,u=t.events,f=void 0===u?{}:u;n.ref=r,n.userOption=Object.assign({},a.defaultUserOpt),n.rotateType=0,n.validate(t);var d=n.create(c,o),h=d.canvas,v=d.ctx;return n.watermarker=new W({width:100,height:50}),n.canvas=h,n.ctx=v,n.events=f,n.setStyle(),l&&n.addImage(l),n}return Object(E["a"])(a,[{key:"validate",value:function(t){var e=t.ref;if(!(e instanceof HTMLElement))throw new Error("ref ".concat(e," 不是HTMLElement"));return!0}},{key:"setStyle",value:function(){this.ref&&Object.assign(this.ref.style,{"text-align":"center"}),this.canvas&&Object.assign(this.canvas.style,{"transform-origin":"0 0"})}},{key:"setCanvasSize",value:function(t,e){Object.assign(this.canvas.style,{width:"".concat(t||this.canvasWidth,"px"),height:"".concat(e||this.canvasHeight,"px")})}},{key:"create",value:function(t,e){var a=this.createCanvasElement(t,e);if(!(a instanceof HTMLCanvasElement))throw new Error("canvas is not defined");var n=a.getContext("2d");if(!(n instanceof CanvasRenderingContext2D))throw new Error("ctx is not defined");return this.ref.appendChild(a),{canvas:a,ctx:n}}},{key:"drawImage",value:function(){if(this.img){var t=this.img,e=this.imgWidth,a=this.imgHeight;switch(this.rotateType){case 0:default:this.canvasWidth=e,this.canvasHeight=a,this.ctx.fillStyle="#fff",this.ctx.fillRect(0,0,this.canvasWidth,this.canvasHeight),this.ctx.drawImage(t,0,0,e,a);break;case 1:this.canvasWidth=a,this.canvasHeight=e,this.ctx.save(),this.ctx.rotate(90*Math.PI/180),this.ctx.drawImage(t,0,-a,e,a),this.ctx.restore();break;case 2:this.canvasWidth=e,this.canvasHeight=a,this.ctx.save(),this.ctx.rotate(180*Math.PI/180),this.ctx.drawImage(t,-e,-a,e,a),this.ctx.restore();break;case 3:this.canvasWidth=a,this.canvasHeight=e,this.ctx.save(),this.ctx.rotate(270*Math.PI/180),this.ctx.drawImage(t,-e,0,e,a),this.ctx.restore();break}this.zoom(100)}}},{key:"_draw",value:function(){var t=this;return new Promise((function(e,a){try{var n,r;t.clear(),t.drawImage(),t.watermarker.drawWatermark(t.ctx,t.canvasWidth,t.canvasHeight,t.renderOption),null===(n=(r=t.events).onRendered)||void 0===n||n.call(r),e(t),console.log("drawing successful")}catch(i){console.error("drawing err:",i),a(i)}}))}},{key:"draw",value:function(){var t=this;return new Promise((function(e,a){clearTimeout(t.timer),t.timer=setTimeout(Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.abrupt("return",t._draw().then(e,a));case 1:case"end":return n.stop()}}),n)}))))}))}},{key:"loadImage",value:function(t){var e=new Image;return e.src=t,new Promise((function(t,a){e.onload=function(){t(e)},e.onerror=function(t){a(t)}}))}},{key:"addImage",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e,a){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if("string"===typeof e){t.next=4;break}return t.next=3,this.convertDataURL(e);case 3:e=t.sent;case 4:return t.next=6,this.loadImage(e);case 6:return this.img=t.sent,this.fileName=a,t.abrupt("return",this.draw());case 9:case"end":return t.stop()}}),t,this)})));function e(e,a){return t.apply(this,arguments)}return e}()},{key:"rotate",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return"number"===typeof e?this.rotateType=parseInt(e.toString()):this.rotateType++,this.rotateType%=4,t.abrupt("return",this.draw());case 3:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"zoom",value:function(t){var e,a,n=t/100,r=t/100;return this.setCanvasSize(this.canvasWidth*n,this.canvasHeight*r),null===(e=(a=this.events).onZoom)||void 0===e||e.call(a,t),this}},{key:"save",value:function(){this.canvas&&D.saveAsJPEG(this.canvas,this.fileName)}},{key:"setOption",value:function(){var t=Object(o["a"])(regeneratorRuntime.mark((function t(e){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.rotateType,n=C(e,["rotateType"]),Object.assign(this.userOption,n),"number"===typeof a&&this.rotate(a),t.abrupt("return",this.draw());case 4:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()},{key:"clear",value:function(){var t,e;this.ctx.clearRect(0,0,this.canvasWidth,this.canvasHeight),null===(t=(e=this.events).onClear)||void 0===t||t.call(e)}},{key:"destroyed",value:function(){}},{key:"canvasWidth",get:function(){return this.canvas?this.canvas.width:0},set:function(t){this.canvas.width=t}},{key:"canvasHeight",get:function(){return this.canvas?this.canvas.height:0},set:function(t){this.canvas.height=t}},{key:"imgWidth",get:function(){if(!this.img)return 0;var t=this.img.width;return t>a.imgMax?a.imgMax:t}},{key:"imgHeight",get:function(){if(!this.img)return 0;var t=this.img,e=t.width,n=t.height;return e>a.imgMax?a.imgMax*n/e:n}},{key:"renderOption",get:function(){var t=this.userOption,e=t.watermarkWidth,a=t.watermarkHeight,n=C(t,["watermarkWidth","watermarkHeight"]);return k({width:e,height:a},n)}}]),a}(T);$.imgMax=2e3,$.defaultUserOpt={text:"仅用于办理XXXX，他用无效。",fontSize:23,fontFamily:"黑体",fillStyle:"rgba(100, 100, 100, 0.4)",watermarkWidth:280,watermarkHeight:180,rotate:20};var H=$,N=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"watermark-editor"},[a("el-form",{ref:"form",attrs:{model:t.formData,"label-width":"80px",size:"small","label-position":"top","label-suffix":"："}},[a("el-form-item",{attrs:{label:"水印文案"}},[a("el-input",{attrs:{type:"textarea",rows:"4",placeholder:"请输入文案"},model:{value:t.formData.text,callback:function(e){t.$set(t.formData,"text",e)},expression:"formData.text"}})],1)],1)],1)},M=[],P=s["default"].extend({props:{formData:{type:Object,default:function(){return{text:"",fontSize:"",fillStyle:"",watermarkWidth:"",watermarkHeight:"",fontFamily:"",rotate:20}}}},data:function(){return{}}}),z=P,U=(a("7008"),a("9ca4")),F=Object(U["a"])(z,N,M,!1,null,"512e3187",null),V=F.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-container",{staticClass:"layout-container"},[a("el-header",{staticClass:"layout-header",attrs:{height:"48px"}},[t._t("header",[t._v("Header")])],2),a("el-container",{staticClass:"layout-content"},[a("el-aside",{staticClass:"layout-aside aside-left",attrs:{width:"160px"}},[t._t("aside-left",[t._v("Aside")])],2),a("el-container",{staticStyle:{width:"100%",height:"100%","flex-direction":"column"}},[a("el-header",{staticClass:"layout-tool",attrs:{height:"32px"}},[t._t("tool",[t._v("Tool")])],2),a("el-main",[t._t("default",[t._v("Main")])],2)],1),a("el-aside",{staticClass:"layout-aside aside-right",attrs:{width:"300px"}},[t._t("aside",[t._v("Aside")])],2)],1),t.$slots.footer?a("el-footer",{staticClass:"layout-footer",attrs:{height:"32px"}},[t._t("footer",[t._v("Footer")])],2):t._e()],1)},X=[],G=(a("1206"),{}),q=Object(U["a"])(G,B,X,!1,null,"d0210e4a",null),J=q.exports,Q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"watermark-header"},[a("div",{staticClass:"watermark-header-left"},[a("watermark-upload",{on:{change:function(e){return t.$emit("file-change",e)}}}),a("el-form",{ref:"form",staticStyle:{margin:"0 16px",height:"100%"},attrs:{inline:"",model:t.formData,size:"mini"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:"0"===t.activeName,expression:"activeName === '0'"}],staticStyle:{height:"100%",overflow:"hidden"}},[a("el-form-item",{attrs:{label:"字号"}},[a("el-select",{model:{value:t.formData.fontSize,callback:function(e){t.$set(t.formData,"fontSize",e)},expression:"formData.fontSize"}},t._l(t.fontSizeOption,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1)],1),a("el-form-item",{attrs:{label:"字体"}},[a("el-select",{model:{value:t.formData.fontFamily,callback:function(e){t.$set(t.formData,"fontFamily",e)},expression:"formData.fontFamily"}},t._l(t.fontFamilyOption,(function(t){return a("el-option",{key:t.value,attrs:{value:t.value,label:t.label}})})),1)],1),a("el-form-item",{attrs:{label:"水印框宽(px)"}},[a("el-input-number",{staticStyle:{width:"100px"},attrs:{"controls-position":"right"},model:{value:t.formData.watermarkWidth,callback:function(e){t.$set(t.formData,"watermarkWidth",e)},expression:"formData.watermarkWidth"}})],1),a("el-form-item",{attrs:{label:"水印框高(px)"}},[a("el-input-number",{staticStyle:{width:"100px"},attrs:{"controls-position":"right"},model:{value:t.formData.watermarkHeight,callback:function(e){t.$set(t.formData,"watermarkHeight",e)},expression:"formData.watermarkHeight"}})],1),a("el-form-item",{attrs:{label:"字体颜色"}},[a("el-color-picker",{attrs:{predefine:t.predefineColors,"show-alpha":""},model:{value:t.formData.fillStyle,callback:function(e){t.$set(t.formData,"fillStyle",e)},expression:"formData.fillStyle"}})],1)],1),a("div",{directives:[{name:"show",rawName:"v-show",value:"1"===t.activeName,expression:"activeName === '1'"}]},[a("el-form-item",{attrs:{label:"水印倾斜(°)"}},[a("el-input-number",{attrs:{"controls-position":"right"},model:{value:t.formData.rotate,callback:function(e){t.$set(t.formData,"rotate",e)},expression:"formData.rotate"}})],1)],1)])],1),a("div",{staticClass:"watermark-header-right"},[a("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disabledSave},on:{click:function(e){return t.$emit("rotate")}}},[t._v(" 旋转 ")]),a("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disabledSave},on:{click:function(e){return t.$emit("save")}}},[t._v(" 保存 ")]),a("el-button",{attrs:{size:"mini",type:"primary",disabled:t.disabledSave},on:{click:function(e){return t.$emit("save-all")}}},[t._v(" 保存全部 ")])],1)])},Y=[],Z=(a("2eeb"),a("f640")),K=a("a9ef"),tt=[10,12,14,16,18,20,22,24,26,28,32,48,64,72],et=["Araial","Verdana","Georgia","Times New Roman","Courier New","Impact","Comic Sans MS","Tahoma","Garamond","Lucida Console","微软雅黑","宋体","黑体","楷体"],at=["rgba(0, 0, 0, 0.1)","rgba(0, 0, 0, 0.2)","rgba(0, 0, 0, 0.3)","rgba(0, 0, 0, 0.4)","rgba(0, 0, 0, 0.5)","#ddd","#aaa","#999","#666","#555"],nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"watermark-upload"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"","auto-upload":!1,"on-remove":t.handleRemove,"before-remove":t.beforeRemove,"on-exceed":t.handleExceed,"on-change":t.handleChange,"file-list":t.fileList,"list-type":"picture","show-file-list":!1,multiple:!1}},[a("el-button",{attrs:{type:"text"}},[a("i",{staticClass:"el-icon-folder-add",staticStyle:{"font-size":"14px"}}),t._v(" 添加 ")])],1)],1)},rt=[],it=s["default"].extend({name:"upload",data:function(){return{fileList:[]}},methods:{handleChange:function(t){this.$emit("change",t)},handleRemove:function(t,e){this.$emit("change",e)},handleExceed:function(t,e){this.$message.warning("当前限制选择 10 个文件，本次选择了 ".concat(t.length," 个文件，共选择了 ").concat(t.length+e.length," 个文件"))},beforeRemove:function(t){return this.$confirm("确定移除 ".concat(t.name,"？"))}}}),ot=it,st=(a("31d1"),Object(U["a"])(ot,nt,rt,!1,null,"8634f9d6",null)),ct=st.exports,lt=s["default"].extend({components:{WatermarkUpload:ct},props:{formData:{type:Object,default:function(){return{}}},disabledSave:{type:Boolean,default:!1}},data:function(){return{fontFamilyOption:et.map((function(t){return{lable:t,value:t}})),fontSizeOption:tt.map((function(t){return{label:"".concat(t,"px"),value:t}})),predefineColors:at}},computed:{$WatermarkStore:function(){return Object(Z["e"])(K["a"],this.$store)},activeName:function(){return this.$WatermarkStore._mainHeaderActiveName}},methods:{}}),ut=lt,ft=(a("6ebc"),Object(U["a"])(ut,Q,Y,!1,null,"24c5ef00",null)),dt=ft.exports,ht=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"watermark-slider"},t._l(t.fileList,(function(e){return a("li",{key:e.uid,staticClass:"file-box",class:{active:t.active===e.uid},on:{click:function(a){t.active!==e.uid&&t.$emit("change",e)}}},[a("label",{staticClass:"file-status-label",on:{click:function(a){return a.stopPropagation(),t.$emit("delete",e)}}},[a("i",{staticClass:"el-icon-check"}),a("i",{staticClass:"el-icon-close"})]),a("img",{attrs:{src:e.url,alt:e.name}})])})),0)},vt=[],mt=s["default"].extend({props:{fileList:{type:Array,default:function(){return[]}},active:{type:[Number,String]}}}),pt=mt,gt=(a("2c81"),Object(U["a"])(pt,ht,vt,!1,null,"11e90d43",null)),bt=gt.exports,wt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main-header"},[a("div",{staticClass:"main-header-left"},[t._v(" watermark ")]),a("div",{staticClass:"main-header-center"},[a("main-header-editor")],1),a("div",{staticClass:"main-header-right"},[t.isLogin?t._e():a("el-button",{attrs:{type:"text",size:"small",disabled:""},on:{click:t.handleLogin}},[t._v(" 登录 ")])],1)])},yt=[],xt=(a("9302"),a("1784"),a("8e05")),kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-tabs",{staticClass:"main-header-editor",on:{"tab-click":t.handleClick},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"编辑",name:"0"}}),a("el-tab-pane",{attrs:{label:"特色功能",name:"1"}})],1)},Ot=[],Ct=s["default"].extend({data:function(){return{}},computed:{$WatermarkStore:function(){return Object(Z["e"])(K["a"],this.$store)},activeName:{get:function(){return this.$WatermarkStore._mainHeaderActiveName},set:function(t){this.$WatermarkStore.UPDATE_INFO({mainHeaderActiveName:t})}}},methods:{handleClick:function(){}}}),jt=Ct,St=(a("0988"),Object(U["a"])(jt,kt,Ot,!1,null,null,null)),Rt=St.exports,Et=s["default"].extend({components:{MainHeaderEditor:Rt},computed:{$UserStore:function(){return Object(Z["e"])(xt["a"],this.$store)},isLogin:function(){return this.$UserStore._isLogin}},methods:{toqueryStr:function(t){return Object.keys(t).reduce((function(e,a){return t[a]&&e.push("".concat(a,"=").concat(t[a])),e}),[]).join("&")},buildWeChartQrcodeUrl:function(){var t=" https://open.weixin.qq.com/connect/qrconnect",e={appid:"wxb665795cfaf33cf7",redirect_uri:encodeURI(""),response_type:"code",scope:"snsapi_login",state:w()};return"".concat(t,"?").concat(this.toqueryStr(e))},handleLogin:function(){window.open(this.buildWeChartQrcodeUrl())}}}),_t=Et,At=(a("f4cd"),Object(U["a"])(_t,wt,yt,!1,null,null,null)),It=At.exports,Lt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"w-zoom"},[a("div",{staticClass:"w-zoom-minus",on:{click:t.handleMinus}},[a("i",{staticClass:"el-icon-minus",class:{"is-disabled":t.renderValue===this.predefineRange[0]}})]),a("el-tooltip",{attrs:{effect:"dark",content:"缩放大小","open-delay":500,placement:"top"}},[a("div",{staticClass:"w-zoom-input"},[t._v(t._s(t.renderValue)+"%")])]),a("div",{staticClass:"w-zoom-add",on:{click:t.handleAdd}},[a("i",{staticClass:"el-icon-plus",class:{"is-disabled":t.renderValue===this.predefineRange[this.predefineRange.length-1]}})]),a("div",{staticClass:"w-zoom-reset",on:{click:t.handleReset}},[a("i",{staticClass:"el-icon-refresh"})])],1)},Dt=[],Tt=(a("3466"),a("b130"),a("90aa"),s["default"].extend({model:{prop:"value",event:"change"},props:{value:{type:Number,default:0},predefineRange:{type:Array,default:function(){return[10,20,25,50,75,100,110,125,150,175,200]}},showReset:{type:Boolean,default:!1}},data:function(){return{resetVal:100}},computed:{renderValue:function(){return this.predefineRange.includes(this.value)?this.value:100}},methods:{handleMinus:function(){var t=this,e=this.predefineRange.findIndex((function(e){return e===t.renderValue}));e--,e<0||this.$emit("change",this.predefineRange[e])},handleAdd:function(){var t=this,e=this.predefineRange.findIndex((function(e){return e===t.renderValue}));e++;var a=this.predefineRange.length-1;e>a||this.$emit("change",this.predefineRange[e])},handleReset:function(){this.$emit("change",this.resetVal)}},created:function(){this.resetVal=this.value}})),Wt=Tt,$t=(a("4b10"),Object(U["a"])(Wt,Lt,Dt,!1,null,"154da845",null)),Ht=$t.exports,Nt=a("cf05"),Mt=a.n(Nt),Pt=(a("1660"),{name:"example.jpg",uid:w(),url:Mt.a,raw:void 0}),zt=s["default"].extend({name:"watermark",components:{MainHeader:It,WatermarkEditor:V,WatermarkLayout:J,WatermarkHeader:dt,WatermarkSlider:bt,wZoom:Ht},data:function(){return{watermark:null,drawFileUid:Pt.uid,fileList:[Pt],option:{text:"仅用于办理XXXX，他用无效。",fontSize:22,fontFamily:"黑体",fillStyle:"rgba(100, 100, 100, 0.4)",watermarkWidth:280,watermarkHeight:180,rotate:20},zoom:100}},computed:{file:{get:function(){var t=this;return this.fileList.find((function(e){return e.uid===t.drawFileUid}))},set:function(t){this.drawFileUid=null===t||void 0===t?void 0:t.uid}}},methods:{handleAddFile:function(t){var e,a=/png|jpeg|jpg/g;if(!a.test(null===t||void 0===t||null===(e=t.raw)||void 0===e?void 0:e.type))return this.$message({message:"请选择图片格式（.png|.jpg|.jpeg）文件。",type:"warning"});this.fileList.push(t),this.fileList=this.fileList.filter((function(t){return t!==Pt})),this.file=t,this.draw()},handlePreview:function(t){this.file=t,this.draw()},handleRotate:function(){var t;null===(t=this.watermark)||void 0===t||t.rotate()},handleChange:function(t){var e;this.option=t,null===(e=this.watermark)||void 0===e||e.setOption(t)},draw:function(){var t,e,a=this;this.file?null===(e=this.watermark)||void 0===e||e.addImage(this.file.url,this.file.name).then((function(t){a.zoom=100,console.log("draw params",t)})):null===(t=this.watermark)||void 0===t||t.clear()},handleDelete:function(t){var e=this;this.$confirm("确定移除 ".concat(t.name,"？")).then((function(a){var n;"confirm"===a&&(e.fileList=null===(n=e.fileList)||void 0===n?void 0:n.filter((function(e){return e!==t})),e.draw())}))},handleSave:function(t){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var n,r,o,s,c,l,u;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(e.fileList.length){a.next=2;break}return a.abrupt("return");case 2:if("all"===t){a.next=4;break}return a.abrupt("return",null===(n=e.watermark)||void 0===n?void 0:n.save());case 4:r=Object(i["a"])(e.fileList),a.prev=5,r.s();case 7:if((o=r.n()).done){a.next=14;break}return c=o.value,l=c.name,u=c.url,a.next=12,null===(s=e.watermark)||void 0===s?void 0:s.addImage(u,l).then((function(t){return null===t||void 0===t?void 0:t.setOption(e.option)})).then((function(t){return null===t||void 0===t?void 0:t.save()}));case 12:a.next=7;break;case 14:a.next=19;break;case 16:a.prev=16,a.t0=a["catch"](5),r.e(a.t0);case 19:return a.prev=19,r.f(),a.finish(19);case 22:case"end":return a.stop()}}),a,null,[[5,16,19,22]])})))()}},mounted:function(){var t,e=this,a=this.$refs.watermark,n={onZoom:function(t){return e.zoom=t}};this.watermark=new H({ref:a,events:n}),this.file&&(null===(t=this.watermark)||void 0===t||t.addImage(this.file.url,this.file.name))},destroyed:function(){var t;null===(t=this.watermark)||void 0===t||t.destroyed()},watch:{option:{handler:function(t){this.handleChange(t)},deep:!0},zoom:function(t){var e;null===(e=this.watermark)||void 0===e||e.zoom(t)}}}),Ut=zt,Ft=Object(U["a"])(Ut,n,r,!1,null,null,null);e["default"]=Ft.exports},"92f0":function(t,e,a){},9302:function(t,e,a){"use strict";var n=a("1c8b"),r=a("692f"),i=a("da10"),o=a("d7e1"),s=[].join,c=r!=Object,l=o("join",",");n({target:"Array",proto:!0,forced:c||!l},{join:function(t){return s.call(i(this),void 0===t?",":t)}})},a381:function(t,e,a){},b4fb:function(t,e,a){"use strict";var n=a("1c8b"),r=a("efe2"),i=a("74e7"),o=a("a719"),s=a("3553"),c=a("d88d"),l=a("1bbd"),u=a("1ca1"),f=a("1ea7"),d=a("90fb"),h=a("f594"),v=d("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",g=h>=51||!r((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),b=f("concat"),w=function(t){if(!o(t))return!1;var e=t[v];return void 0!==e?!!e:i(t)},y=!g||!b;n({target:"Array",proto:!0,forced:y},{concat:function(t){var e,a,n,r,i,o=s(this),f=u(o,0),d=0;for(e=-1,n=arguments.length;e<n;e++)if(i=-1===e?o:arguments[e],w(i)){if(r=c(i.length),d+r>m)throw TypeError(p);for(a=0;a<r;a++,d++)a in i&&l(f,d,i[a])}else{if(d>=m)throw TypeError(p);l(f,d++,i)}return f.length=d,f}})},b73f:function(t,e,a){var n=a("1c8b"),r=a("efe2"),i=a("da10"),o=a("aa6b").f,s=a("1e2c"),c=r((function(){o(1)})),l=!s||c;n({target:"Object",stat:!0,forced:l,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(i(t),e)}})},bf84:function(t,e,a){var n=a("1c8b"),r=a("1e2c"),i=a("8d44"),o=a("da10"),s=a("aa6b"),c=a("1bbd");n({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,a,n=o(t),r=s.f,l=i(n),u={},f=0;while(l.length>f)a=r(n,e=l[f++]),void 0!==a&&c(u,e,a);return u}})},c10f:function(t,e,a){var n=a("2732"),r=a("fc8c"),i="["+r+"]",o=RegExp("^"+i+i+"*"),s=RegExp(i+i+"*$"),c=function(t){return function(e){var a=String(n(e));return 1&t&&(a=a.replace(o,"")),2&t&&(a=a.replace(s,"")),a}};t.exports={start:c(1),end:c(2),trim:c(3)}},c175:function(t,e,a){},cf05:function(t,e,a){t.exports=a.p+"img/logo.82b9c7a5.png"},d38c:function(t,e,a){},dbb3:function(t,e,a){"use strict";var n=a("1c8b"),r=a("5dfd").filter,i=a("1ea7"),o=a("ff9c"),s=i("filter"),c=o("filter");n({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},e8f3:function(t,e,a){},ecc0:function(t,e,a){(function(a){var n,r,i;(function(a,o){r=[],n=o,i="function"===typeof n?n.apply(e,r):n,void 0===i||(t.exports=i)})(0,(function(){"use strict";function e(t,e){return"undefined"==typeof e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Deprecated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob(["\ufeff",t],{type:t.type}):t}function n(t,e,a){var n=new XMLHttpRequest;n.open("GET",t),n.responseType="blob",n.onload=function(){s(n.response,e,a)},n.onerror=function(){console.error("could not download file")},n.send()}function r(t){var e=new XMLHttpRequest;e.open("HEAD",t,!1);try{e.send()}catch(t){}return 200<=e.status&&299>=e.status}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof a&&a.global===a?a:void 0,s=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(t,e,a){var s=o.URL||o.webkitURL,c=document.createElement("a");e=e||t.name||"download",c.download=e,c.rel="noopener","string"==typeof t?(c.href=t,c.origin===location.origin?i(c):r(c.href)?n(t,e,a):i(c,c.target="_blank")):(c.href=s.createObjectURL(t),setTimeout((function(){s.revokeObjectURL(c.href)}),4e4),setTimeout((function(){i(c)}),0))}:"msSaveOrOpenBlob"in navigator?function(t,a,o){if(a=a||t.name||"download","string"!=typeof t)navigator.msSaveOrOpenBlob(e(t,o),a);else if(r(t))n(t,a,o);else{var s=document.createElement("a");s.href=t,s.target="_blank",setTimeout((function(){i(s)}))}}:function(t,e,a,r){if(r=r||open("","_blank"),r&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof t)return n(t,e,a);var i="application/octet-stream"===t.type,s=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||i&&s)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=t:location=t,r=null},l.readAsDataURL(t)}else{var u=o.URL||o.webkitURL,f=u.createObjectURL(t);r?r.location=f:location.href=f,r=null,setTimeout((function(){u.revokeObjectURL(f)}),4e4)}});o.saveAs=s.saveAs=s,t.exports=s}))}).call(this,a("532c"))},f4cd:function(t,e,a){"use strict";var n=a("0adc"),r=a.n(n);r.a},fc8c:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},fe59:function(t,e,a){"use strict";var n=a("1c8b"),r=a("3c10");n({target:"Array",proto:!0,forced:[].forEach!=r},{forEach:r})},fe8a:function(t,e,a){var n=a("1c8b"),r=a("3553"),i=a("cbab"),o=a("efe2"),s=o((function(){i(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return i(r(t))}})}}]);