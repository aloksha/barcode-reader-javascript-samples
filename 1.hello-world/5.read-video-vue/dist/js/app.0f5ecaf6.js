(function(e){function t(t){for(var r,s,o=t[0],i=t[1],l=t[2],d=0,p=[];d<o.length;d++)s=o[d],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&p.push(a[s][0]),a[s]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);u&&u(t);while(p.length)p.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(r=!1)}r&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},c=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],i=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("img",{staticClass:"applogo",attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Dynamsoft Barcode Reader Hello World Sample for Vue"}})],1)},c=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"helloWorld"},[n("h1",[e._v(e._s(e.msg))]),n("button",{on:{click:e.showScanner}},[e._v("Start Barcode Scanner")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.resultValue,expression:"resultValue"}],staticClass:"Input-text",attrs:{type:"text",readonly:"true",placeholder:"The Barcode Result"},domProps:{value:e.resultValue},on:{input:function(t){t.target.composing||(e.resultValue=t.target.value)}}}),n("div",{attrs:{id:"scannerUI"}},[e.libLoaded?e._e():n("span",{staticStyle:{"font-size":"x-large"}},[e._v("Loading Library...")]),e.bShowScanner?n("BarcodeScanner",{on:{appendMessage:e.appendMessage}}):e._e()],1)])},o=[],i=n("1da1"),l=(n("96cf"),n("6c78"));l["a"].BarcodeReader.engineResourcePath="https://cdn.jsdelivr.net/npm/dynamsoft-javascript-barcode@8.1.3/dist/",l["a"].BarcodeReader.productKeys="t0077xQAAAEOf0RjyWar4Q48NrAu7iX4j+Ivl3iqpsR2Mf3W9gf/HMgalcntdpSMel3xw/Mze/z8dpY0eCdkvUxN6+brx+xrzZh4+AWkFKn4=";var u=l["a"],d=function(){var e=this,t=e.$createElement;e._self._c;return e._m(1)},p=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"dbrScanner-cvs-scanarea"},[n("div",{staticClass:"dbrScanner-scanlight",staticStyle:{display:"none"}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"component-barcode-scanner"},[n("svg",{staticClass:"dbrScanner-bg-loading",attrs:{viewBox:"0 0 1792 1792"}},[n("path",{attrs:{d:"M1760 896q0 176-68.5 336t-184 275.5-275.5 184-336 68.5-336-68.5-275.5-184-184-275.5-68.5-336q0-213 97-398.5t265-305.5 374-151v228q-221 45-366.5 221t-145.5 406q0 130 51 248.5t136.5 204 204 136.5 248.5 51 248.5-51 204-136.5 136.5-204 51-248.5q0-230-145.5-406t-366.5-221v-228q206 31 374 151t265 305.5 97 398.5z"}})]),n("svg",{staticClass:"dbrScanner-bg-camera",staticStyle:{display:"none"},attrs:{viewBox:"0 0 2048 1792"}},[n("path",{attrs:{d:"M1024 672q119 0 203.5 84.5t84.5 203.5-84.5 203.5-203.5 84.5-203.5-84.5-84.5-203.5 84.5-203.5 203.5-84.5zm704-416q106 0 181 75t75 181v896q0 106-75 181t-181 75h-1408q-106 0-181-75t-75-181v-896q0-106 75-181t181-75h224l51-136q19-49 69.5-84.5t103.5-35.5h512q53 0 103.5 35.5t69.5 84.5l51 136h224zm-704 1152q185 0 316.5-131.5t131.5-316.5-131.5-316.5-316.5-131.5-316.5 131.5-131.5 316.5 131.5 316.5 316.5 131.5z"}})]),n("video",{staticClass:"dbrScanner-video",attrs:{playsinline:"true"}}),n("canvas",{staticClass:"dbrScanner-cvs-drawarea"}),e._m(0)])}],f=n("b85c"),v={data:function(){return{bDestroyed:!1,scanner:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.BarcodeScanner.createInstance();case 3:if(e.scanner=t.sent,!e.bDestroyed){t.next=7;break}return e.scanner.destroy(),t.abrupt("return");case 7:return t.next=9,e.scanner.setUIElement(e.$el);case 9:return e.scanner.onFrameRead=function(t){var n,r=Object(f["a"])(t);try{for(r.s();!(n=r.n()).done;){var a=n.value;e.$emit("appendMessage",a.barcodeFormatString+": "+a.barcodeText)}}catch(c){r.e(c)}finally{r.f()}},t.next=12,e.scanner.open();case 12:t.next=18;break;case 14:t.prev=14,t.t0=t["catch"](0),e.$emit("appendMessage",t.t0.message),console.error(t.t0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))()},beforeDestroy:function(){this.bDestroyed=!0,this.scanner&&this.scanner.destroy()}},b=v,h=(n("bd23"),n("2877")),m=Object(h["a"])(b,d,p,!1,null,"c7d957c0",null),g=m.exports,y={name:"HelloWorld",props:{msg:String},data:function(){return{resultValue:"",libLoaded:!1,bShowScanner:!1}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.BarcodeScanner.loadWasm();case 3:e.libLoaded=!0,t.next=10;break;case 6:throw t.prev=6,t.t0=t["catch"](0),alert(t.t0.message),t.t0;case 10:case"end":return t.stop()}}),t,null,[[0,6]])})))()},components:{BarcodeScanner:g},methods:{appendMessage:function(e){this.resultValue=e},showScanner:function(){this.bShowScanner=!0}}},S=y,x=(n("8999"),Object(h["a"])(S,s,o,!1,null,"aab9a2ba",null)),w=x.exports,_={name:"App",components:{HelloWorld:w}},j=_,O=(n("034f"),Object(h["a"])(j,a,c,!1,null,null,null)),q=O.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(q)}}).$mount("#app")},"5c0b":function(e,t,n){},"85ec":function(e,t,n){},8999:function(e,t,n){"use strict";n("5c0b")},bd23:function(e,t,n){"use strict";n("f19c")},cf05:function(e,t,n){e.exports=n.p+"img/logo.82b9c7a5.png"},f19c:function(e,t,n){}});
//# sourceMappingURL=app.0f5ecaf6.js.map