(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{308:function(t,n,e){"undefined"!=typeof self&&self,t.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,e),i.l=!0,i.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(r,i,function(n){return t[n]}.bind(null,i));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="fae3")}({"06cf":function(t,n,e){var r=e("83ab"),i=e("d1e7"),o=e("5c6c"),c=e("fc6a"),a=e("c04e"),u=e("5135"),f=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=a(n,!0),f)try{return s(t,n)}catch(t){}if(u(t,n))return o(!i.f.call(t,n),t[n])}},"07ac":function(t,n,e){var r=e("23e7"),i=e("6f53").values;r({target:"Object",stat:!0},{values:function(t){return i(t)}})},"0cfb":function(t,n,e){var r=e("83ab"),i=e("d039"),o=e("cc12");t.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"1be4":function(t,n,e){var r=e("d066");t.exports=r("document","documentElement")},"1d80":function(t,n){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},"23cb":function(t,n,e){var r=e("a691"),i=Math.max,o=Math.min;t.exports=function(t,n){var e=r(t);return e<0?i(e+n,0):o(e,n)}},"23e7":function(t,n,e){var r=e("da84"),i=e("06cf").f,o=e("9112"),c=e("6eeb"),a=e("ce4e"),u=e("e893"),f=e("94ca");t.exports=function(t,n){var e,s,p,l,d,v=t.target,h=t.global,g=t.stat;if(e=h?r:g?r[v]||a(v,{}):(r[v]||{}).prototype)for(s in n){if(l=n[s],p=t.noTargetGet?(d=i(e,s))&&d.value:e[s],!f(h?s:v+(g?".":"#")+s,t.forced)&&void 0!==p){if(typeof l==typeof p)continue;u(l,p)}(t.sham||p&&p.sham)&&o(l,"sham",!0),c(e,s,l,t)}}},"241c":function(t,n,e){var r=e("ca84"),i=e("7839").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"37e8":function(t,n,e){var r=e("83ab"),i=e("9bf2"),o=e("825a"),c=e("df75");t.exports=r?Object.defineProperties:function(t,n){o(t);for(var e,r=c(n),a=r.length,u=0;a>u;)i.f(t,e=r[u++],n[e]);return t}},"3bbe":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"428f":function(t,n,e){var r=e("da84");t.exports=r},"44ad":function(t,n,e){var r=e("d039"),i=e("c6b6"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?o.call(t,""):Object(t)}:Object},"4d64":function(t,n,e){var r=e("fc6a"),i=e("50c4"),o=e("23cb"),c=function(t){return function(n,e,c){var a,u=r(n),f=i(u.length),s=o(c,f);if(t&&e!=e){for(;f>s;)if((a=u[s++])!=a)return!0}else for(;f>s;s++)if((t||s in u)&&u[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,n,e){var r=e("a691"),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},5135:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5692:function(t,n,e){var r=e("c430"),i=e("c6cd");(t.exports=function(t,n){return i[t]||(i[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.7.0",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,e){var r=e("d066"),i=e("241c"),o=e("7418"),c=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=i.f(c(t)),e=o.f;return e?n.concat(e(t)):n}},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var r=e("1d80"),i="["+e("5899")+"]",o=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),a=function(t){return function(n){var e=String(r(n));return 1&t&&(e=e.replace(o,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:a(1),end:a(2),trim:a(3)}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"69f3":function(t,n,e){var r,i,o,c=e("7f9a"),a=e("da84"),u=e("861d"),f=e("9112"),s=e("5135"),p=e("c6cd"),l=e("f772"),d=e("d012"),v=a.WeakMap;if(c){var h=p.state||(p.state=new v),g=h.get,b=h.has,y=h.set;r=function(t,n){return n.facade=t,y.call(h,t,n),n},i=function(t){return g.call(h,t)||{}},o=function(t){return b.call(h,t)}}else{var m=l("state");d[m]=!0,r=function(t,n){return n.facade=t,f(t,m,n),n},i=function(t){return s(t,m)?t[m]:{}},o=function(t){return s(t,m)}}t.exports={set:r,get:i,has:o,enforce:function(t){return o(t)?i(t):r(t,{})},getterFor:function(t){return function(n){var e;if(!u(n)||(e=i(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}}}},"6eeb":function(t,n,e){var r=e("da84"),i=e("9112"),o=e("5135"),c=e("ce4e"),a=e("8925"),u=e("69f3"),f=u.get,s=u.enforce,p=String(String).split("String");(t.exports=function(t,n,e,a){var u,f=!!a&&!!a.unsafe,l=!!a&&!!a.enumerable,d=!!a&&!!a.noTargetGet;"function"==typeof e&&("string"!=typeof n||o(e,"name")||i(e,"name",n),(u=s(e)).source||(u.source=p.join("string"==typeof n?n:""))),t!==r?(f?!d&&t[n]&&(l=!0):delete t[n],l?t[n]=e:i(t,n,e)):l?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||a(this)}))},"6f53":function(t,n,e){var r=e("83ab"),i=e("df75"),o=e("fc6a"),c=e("d1e7").f,a=function(t){return function(n){for(var e,a=o(n),u=i(a),f=u.length,s=0,p=[];f>s;)e=u[s++],r&&!c.call(a,e)||p.push(t?[e,a[e]]:a[e]);return p}};t.exports={entries:a(!0),values:a(!1)}},7156:function(t,n,e){var r=e("861d"),i=e("d2bb");t.exports=function(t,n,e){var o,c;return i&&"function"==typeof(o=n.constructor)&&o!==e&&r(c=o.prototype)&&c!==e.prototype&&i(t,c),t}},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7c73":function(t,n,e){var r,i=e("825a"),o=e("37e8"),c=e("7839"),a=e("d012"),u=e("1be4"),f=e("cc12"),s=e("f772"),p="prototype",l="script",d=s("IE_PROTO"),v=function(){},h=function(t){return"<script>"+t+"</"+l+">"},g=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(t){}g=r?function(t){t.write(h("")),t.close();var n=t.parentWindow.Object;return t=null,n}(r):function(){var t,n=f("iframe");return n.style.display="none",u.appendChild(n),n.src=String("javascript:"),(t=n.contentWindow.document).open(),t.write(h("document.F=Object")),t.close(),t.F}();for(var t=c.length;t--;)delete g[p][c[t]];return g()};a[d]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(v[p]=i(t),e=new v,v[p]=null,e[d]=t):e=g(),void 0===n?e:o(e,n)}},"7f9a":function(t,n,e){var r=e("da84"),i=e("8925"),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(i(o))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},8875:function(t,n,e){var r,i,o;"undefined"!=typeof self&&self,i=[],void 0===(o="function"==typeof(r=function(){return function t(){var n=Object.getOwnPropertyDescriptor(document,"currentScript");if(!n&&"currentScript"in document&&document.currentScript)return document.currentScript;if(n&&n.get!==t&&document.currentScript)return document.currentScript;try{throw new Error}catch(t){var e,r,i,o=/.*at [^(]*\((.*):(.+):(.+)\)$/gi.exec(t.stack)||/@([^@]*):(\d+):(\d+)\s*$/gi.exec(t.stack),c=o&&o[1]||!1,a=o&&o[2]||!1,u=document.location.href.replace(document.location.hash,""),f=document.getElementsByTagName("script");c===u&&(e=document.documentElement.outerHTML,r=new RegExp("(?:[^\\n]+?\\n){0,"+(a-2)+"}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*","i"),i=e.replace(r,"$1").trim());for(var s=0;s<f.length;s++){if("interactive"===f[s].readyState)return f[s];if(f[s].src===c)return f[s];if(c===u&&f[s].innerHTML&&f[s].innerHTML.trim()===i)return f[s]}return null}}})?r.apply(n,i):r)||(t.exports=o)},8925:function(t,n,e){var r=e("c6cd"),i=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return i.call(t)}),t.exports=r.inspectSource},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),i=e("9bf2"),o=e("5c6c");t.exports=r?function(t,n,e){return i.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),i=/#|\.prototype\./,o=function(t,n){var e=a[c(t)];return e==f||e!=u&&("function"==typeof n?r(n):!!n)},c=o.normalize=function(t){return String(t).replace(i,".").toLowerCase()},a=o.data={},u=o.NATIVE="N",f=o.POLYFILL="P";t.exports=o},"9bf2":function(t,n,e){var r=e("83ab"),i=e("0cfb"),o=e("825a"),c=e("c04e"),a=Object.defineProperty;n.f=r?a:function(t,n,e){if(o(t),n=c(n,!0),o(e),i)try{return a(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},a9e3:function(t,n,e){"use strict";var r=e("83ab"),i=e("da84"),o=e("94ca"),c=e("6eeb"),a=e("5135"),u=e("c6b6"),f=e("7156"),s=e("c04e"),p=e("d039"),l=e("7c73"),d=e("241c").f,v=e("06cf").f,h=e("9bf2").f,g=e("58a8").trim,b="Number",y=i[b],m=y.prototype,x=u(l(m))==b,_=function(t){var n,e,r,i,o,c,a,u,f=s(t,!1);if("string"==typeof f&&f.length>2)if(43===(n=(f=g(f)).charCodeAt(0))||45===n){if(88===(e=f.charCodeAt(2))||120===e)return NaN}else if(48===n){switch(f.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+f}for(c=(o=f.slice(2)).length,a=0;a<c;a++)if((u=o.charCodeAt(a))<48||u>i)return NaN;return parseInt(o,r)}return+f};if(o(b,!y(" 0o1")||!y("0b1")||y("+0x1"))){for(var E,O=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof O&&(x?p((function(){m.valueOf.call(e)})):u(e)!=b)?f(new y(_(n)),e,O):_(n)},S=r?d(y):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),I=0;S.length>I;I++)a(y,E=S[I])&&!a(O,E)&&h(O,E,v(y,E));O.prototype=m,m.constructor=O,c(i,b,O)}},ae40:function(t,n,e){var r=e("83ab"),i=e("d039"),o=e("5135"),c=Object.defineProperty,a={},u=function(t){throw t};t.exports=function(t,n){if(o(a,t))return a[t];n||(n={});var e=[][t],f=!!o(n,"ACCESSORS")&&n.ACCESSORS,s=o(n,0)?n[0]:u,p=o(n,1)?n[1]:void 0;return a[t]=!!e&&!i((function(){if(f&&!r)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:u}):t[1]=1,e.call(t,s,p)}))}},bb2f:function(t,n,e){var r=e("d039");t.exports=!r((function(){return Object.isExtensible(Object.preventExtensions({}))}))},c04e:function(t,n,e){var r=e("861d");t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),i=e("ce4e"),o="__core-js_shared__",c=r[o]||i(o,{});t.exports=c},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(t){"object"==typeof window&&(e=window)}t.exports=e},c975:function(t,n,e){"use strict";var r=e("23e7"),i=e("4d64").indexOf,o=e("a640"),c=e("ae40"),a=[].indexOf,u=!!a&&1/[1].indexOf(1,-0)<0,f=o("indexOf"),s=c("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:u||!f||!s},{indexOf:function(t){return u?a.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},ca84:function(t,n,e){var r=e("5135"),i=e("fc6a"),o=e("4d64").indexOf,c=e("d012");t.exports=function(t,n){var e,a=i(t),u=0,f=[];for(e in a)!r(c,e)&&r(a,e)&&f.push(e);for(;n.length>u;)r(a,e=n[u++])&&(~o(f,e)||f.push(e));return f}},cc12:function(t,n,e){var r=e("da84"),i=e("861d"),o=r.document,c=i(o)&&i(o.createElement);t.exports=function(t){return c?o.createElement(t):{}}},ce4e:function(t,n,e){var r=e("da84"),i=e("9112");t.exports=function(t,n){try{i(r,t,n)}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},d066:function(t,n,e){var r=e("428f"),i=e("da84"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?o(r[t])||o(i[t]):r[t]&&r[t][n]||i[t]&&i[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);n.f=o?function(t){var n=i(this,t);return!!n&&n.enumerable}:r},d2bb:function(t,n,e){var r=e("825a"),i=e("3bbe");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,n=!1,e={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(e,[]),n=e instanceof Array}catch(t){}return function(e,o){return r(e),i(o),n?t.call(e,o):e.__proto__=o,e}}():void 0)},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||function(){return this}()||Function("return this")()}).call(this,e("c8ba"))},dca8:function(t,n,e){var r=e("23e7"),i=e("bb2f"),o=e("d039"),c=e("861d"),a=e("f183").onFreeze,u=Object.freeze;r({target:"Object",stat:!0,forced:o((function(){u(1)})),sham:!i},{freeze:function(t){return u&&c(t)?u(a(t)):t}})},df75:function(t,n,e){var r=e("ca84"),i=e("7839");t.exports=Object.keys||function(t){return r(t,i)}},e893:function(t,n,e){var r=e("5135"),i=e("56ef"),o=e("06cf"),c=e("9bf2");t.exports=function(t,n){for(var e=i(n),a=c.f,u=o.f,f=0;f<e.length;f++){var s=e[f];r(t,s)||a(t,s,u(n,s))}}},f183:function(t,n,e){var r=e("d012"),i=e("861d"),o=e("5135"),c=e("9bf2").f,a=e("90e3"),u=e("bb2f"),f=a("meta"),s=0,p=Object.isExtensible||function(){return!0},l=function(t){c(t,f,{value:{objectID:"O"+ ++s,weakData:{}}})},d=t.exports={REQUIRED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,f)){if(!p(t))return"F";if(!n)return"E";l(t)}return t[f].objectID},getWeakData:function(t,n){if(!o(t,f)){if(!p(t))return!0;if(!n)return!1;l(t)}return t[f].weakData},onFreeze:function(t){return u&&d.REQUIRED&&p(t)&&!o(t,f)&&l(t),t}};r[f]=!0},f772:function(t,n,e){var r=e("5692"),i=e("90e3"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=i(t))}},fae3:function(t,n,e){"use strict";if(e.r(n),e.d(n,"IphonePreview",(function(){return l})),e.d(n,"AndroidPreview",(function(){return d})),e.d(n,"VPNP_APPEARANCE_MODE",(function(){return a})),"undefined"!=typeof window){var r=window.document.currentScript,i=e("8875");r=i(),"currentScript"in document||Object.defineProperty(document,"currentScript",{get:i});var o=r&&r.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);o&&(e.p=o[1])}var c=(e("a9e3"),e("dca8"),Object.freeze({IPHONE_X_HEIGHT:614,IPHONE_X_WIDTH:300,PIXEL_4_HEIGHT:644,PIXEL_4_WIDTH:300})),a=Object.freeze({LIGHT:"light",DARK:"dark"}),u=Object.freeze({LIGHT:"vpnp-notification-light-mode",DARK:"vpnp-notification-dark-mode"}),f=Object.freeze({INITIAL:"vpnp-notification-initial-size",EXPANDED:"vpnp-notification-expanded-size"}),s=(e("c975"),e("07ac"),{props:{image:{type:String,default:""},backgroundImage:{type:String,default:""},backgroundColor:{type:String,default:"#c1c1c1"},appearanceMode:{type:String,default:a.LIGHT,validator:function(t){return-1!==Object.values(a).indexOf(t)}}},computed:{notificationImageStyle:function(){return""!==this.image?{"background-image":"url(".concat(this.image,")")}:{}},backgroundStyle:function(){return""!==this.backgroundImage?{"background-image":"url(".concat(this.backgroundImage,")")}:""!==this.backgroundColor?{"background-color":this.backgroundColor}:void 0},appearanceModeClass:function(){switch(this.appearanceMode){case a.LIGHT:return u.LIGHT;case a.DARK:return u.DARK;default:throw new Error("Unrecognized appearance mode!")}},hasTitle:function(){return""!==this.textTitle},hasBody:function(){return""!==this.textBody},hasImage:function(){return""!==this.image},isExpanded:function(){return this.hasBody},notificationExpandedClass:function(){return this.isExpanded?f.EXPANDED:f.INITIAL}},methods:{toggleNotification:function(){this.$emit("toggle-notification")}}});function p(t,n,e,r,i,o,c,a){var u,f="function"==typeof t?t.options:t;if(n&&(f.render=n,f.staticRenderFns=e,f._compiled=!0),r&&(f.functional=!0),o&&(f._scopeId="data-v-"+o),c?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(c)},f._ssrRegister=u):i&&(u=a?function(){i.call(this,(f.functional?this.parent:this).$root.$options.shadowRoot)}:i),u)if(f.functional){f._injectStyles=u;var s=f.render;f.render=function(t,n){return u.call(n),s(t,n)}}else{var p=f.beforeCreate;f.beforeCreate=p?[].concat(p,u):[u]}return{exports:t,options:f}}var l=p({name:"IphonePreview",mixins:[s],props:{textApplicationName:{type:String,default:"App name"},textTime:{type:String,default:"1h ago",validator:function(t){return t.length<8}},textTitle:{type:String,default:"Title notification"},textBody:{type:String,default:""},height:{type:Number,default:c.IPHONE_X_HEIGHT}},computed:{sizeStyle:function(){return{height:"".concat(this.height,"px"),width:"".concat(this.height*(c.IPHONE_X_WIDTH/c.IPHONE_X_HEIGHT),"px")}}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["vpnp-wrapper-iphone_x"],style:[t.backgroundStyle,t.sizeStyle]},[e("div",{staticClass:"vpnp-iphone_x"},[e("div",{staticClass:"vpnp-content"},[e("div",{staticClass:"vpnp-header"},[t._t("header")],2),e("div",{class:["vpnp-notification",t.appearanceModeClass,t.notificationExpandedClass]},[e("div",{staticClass:"vpnp-notification-heading"},[e("div",{staticClass:"vpnp-notification-heading-icon-name-container"},[e("p",{staticClass:"vpnp-notification-application-icon",on:{click:t.toggleNotification}}),e("p",{staticClass:"vpnp-notification-application-name",domProps:{innerHTML:t._s(t.textApplicationName)}})]),e("p",{staticClass:"vpnp-notification-time",domProps:{innerHTML:t._s(t.textTime)}})]),e("div",{staticClass:"vpnp-notification-content"},[e("div",{staticClass:"vpnp-notification-content-text"},[t.hasTitle?e("p",{staticClass:"vpnp-notification-title",domProps:{innerHTML:t._s(t.textTitle)}}):t._e(),t.hasBody?e("p",{staticClass:"vpnp-notification-body",domProps:{innerHTML:t._s(t.textBody)}}):t._e()]),t.hasImage?e("div",{staticClass:"vpnp-notification-content-image",style:[t.notificationImageStyle]}):t._e()])])])])])}),[],!1,null,null,null).exports,d=p({name:"AndroidPreview",mixins:[s],props:{textApplicationName:{type:String,default:"App name"},textTime:{type:String,default:"1h",validator:function(t){return t.length<4}},textTitle:{type:String,default:""},textBody:{type:String,default:""},height:{type:Number,default:c.PIXEL_4_HEIGHT},isVisibleToggler:{type:Boolean,default:!1}},computed:{sizeStyle:function(){return{height:"".concat(this.height,"px"),width:"".concat(this.height*(c.PIXEL_4_WIDTH/c.PIXEL_4_HEIGHT),"px")}},hasContent:function(){return this.hasTitle||this.hasBody||this.hasImage}}},(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:["vpnp-wrapper-pixel_4"],style:[t.backgroundStyle,t.sizeStyle]},[e("div",{staticClass:"vpnp-pixel_4"},[e("div",{staticClass:"vpnp-content"},[e("div",{staticClass:"vpnp-header"},[t._t("header")],2),e("div",{class:["vpnp-notification",t.appearanceModeClass,t.notificationExpandedClass]},[e("div",{staticClass:"vpnp-notification-heading"},[e("p",{staticClass:"vpnp-notification-application-icon"}),e("p",{staticClass:"vpnp-notification-application-name",domProps:{innerHTML:t._s(t.textApplicationName)}}),e("div",{staticClass:"vpnp-notification-application-time-container"},[e("p",{staticClass:"vpnp-notification-application-time-separator",domProps:{innerHTML:t._s("&#183;")}}),e("p",{staticClass:"vpnp-notification-application-time",domProps:{innerHTML:t._s(t.textTime)}})]),t.isVisibleToggler?e("a",{staticClass:"vpnp-notification-toggler",on:{click:t.toggleNotification}},[e("i",{class:["vpnp-notification-toggler-arrow",t.isExpanded?"up":"down"]})]):t._e()]),t.hasContent?e("div",{staticClass:"vpnp-notification-content"},[e("div",{staticClass:"vpnp-notification-content-text"},[t.hasTitle?e("p",{staticClass:"vpnp-notification-title",domProps:{innerHTML:t._s(t.textTitle)}}):t._e(),t.hasBody?e("p",{staticClass:"vpnp-notification-body",domProps:{innerHTML:t._s(t.textBody)}}):t._e()]),t.hasImage?e("div",{staticClass:"vpnp-notification-content-image",style:[t.notificationImageStyle]}):t._e()]):t._e()])])])])}),[],!1,null,null,null).exports},fc6a:function(t,n,e){var r=e("44ad"),i=e("1d80");t.exports=function(t){return r(i(t))}}})},310:function(t,n,e){},356:function(t,n,e){"use strict";e.r(n);var r=e(308),i=(e(310),{components:{IphonePreview:r.IphonePreview}}),o=e(17),c=Object(o.a)(i,(function(){var t=this.$createElement;return(this._self._c||t)("iphone-preview")}),[],!1,null,null,null);n.default=c.exports}}]);