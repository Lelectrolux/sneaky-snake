(()=>{var t={8552:(t,e,r)=>{var n=r(852)(r(5639),"DataView");t.exports=n},1989:(t,e,r)=>{var n=r(1789),o=r(401),i=r(7667),s=r(1327),a=r(1866);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},8407:(t,e,r)=>{var n=r(7040),o=r(4125),i=r(2117),s=r(7518),a=r(4705);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},7071:(t,e,r)=>{var n=r(852)(r(5639),"Map");t.exports=n},3369:(t,e,r)=>{var n=r(4785),o=r(1285),i=r(6e3),s=r(9916),a=r(5265);function c(t){var e=-1,r=null==t?0:t.length;for(this.clear();++e<r;){var n=t[e];this.set(n[0],n[1])}}c.prototype.clear=n,c.prototype.delete=o,c.prototype.get=i,c.prototype.has=s,c.prototype.set=a,t.exports=c},3818:(t,e,r)=>{var n=r(852)(r(5639),"Promise");t.exports=n},8525:(t,e,r)=>{var n=r(852)(r(5639),"Set");t.exports=n},8668:(t,e,r)=>{var n=r(3369),o=r(619),i=r(2385);function s(t){var e=-1,r=null==t?0:t.length;for(this.__data__=new n;++e<r;)this.add(t[e])}s.prototype.add=s.prototype.push=o,s.prototype.has=i,t.exports=s},6384:(t,e,r)=>{var n=r(8407),o=r(7465),i=r(3779),s=r(7599),a=r(4758),c=r(4309);function u(t){var e=this.__data__=new n(t);this.size=e.size}u.prototype.clear=o,u.prototype.delete=i,u.prototype.get=s,u.prototype.has=a,u.prototype.set=c,t.exports=u},2705:(t,e,r)=>{var n=r(5639).Symbol;t.exports=n},1149:(t,e,r)=>{var n=r(5639).Uint8Array;t.exports=n},577:(t,e,r)=>{var n=r(852)(r(5639),"WeakMap");t.exports=n},7412:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n&&!1!==e(t[r],r,t););return t}},4963:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length,o=0,i=[];++r<n;){var s=t[r];e(s,r,t)&&(i[o++]=s)}return i}},4636:(t,e,r)=>{var n=r(2545),o=r(5694),i=r(1469),s=r(4144),a=r(5776),c=r(6719),u=Object.prototype.hasOwnProperty;t.exports=function(t,e){var r=i(t),p=!r&&o(t),l=!r&&!p&&s(t),f=!r&&!p&&!l&&c(t),h=r||p||l||f,v=h?n(t.length,String):[],d=v.length;for(var b in t)!e&&!u.call(t,b)||h&&("length"==b||l&&("offset"==b||"parent"==b)||f&&("buffer"==b||"byteLength"==b||"byteOffset"==b)||a(b,d))||v.push(b);return v}},2488:t=>{t.exports=function(t,e){for(var r=-1,n=e.length,o=t.length;++r<n;)t[o+r]=e[r];return t}},2908:t=>{t.exports=function(t,e){for(var r=-1,n=null==t?0:t.length;++r<n;)if(e(t[r],r,t))return!0;return!1}},4865:(t,e,r)=>{var n=r(9465),o=r(7813),i=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var s=t[e];i.call(t,e)&&o(s,r)&&(void 0!==r||e in t)||n(t,e,r)}},8470:(t,e,r)=>{var n=r(7813);t.exports=function(t,e){for(var r=t.length;r--;)if(n(t[r][0],e))return r;return-1}},4037:(t,e,r)=>{var n=r(8363),o=r(3674);t.exports=function(t,e){return t&&n(e,o(e),t)}},3886:(t,e,r)=>{var n=r(8363),o=r(1704);t.exports=function(t,e){return t&&n(e,o(e),t)}},9465:(t,e,r)=>{var n=r(8777);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},5990:(t,e,r)=>{var n=r(6384),o=r(7412),i=r(4865),s=r(4037),a=r(3886),c=r(4626),u=r(278),p=r(8805),l=r(1911),f=r(8234),h=r(6904),v=r(4160),d=r(3824),b=r(9148),y=r(8517),x=r(1469),g=r(4144),j=r(6688),_=r(3218),w=r(2928),O=r(3674),S=r(1704),z="[object Arguments]",A="[object Function]",m="[object Object]",k={};k[z]=k["[object Array]"]=k["[object ArrayBuffer]"]=k["[object DataView]"]=k["[object Boolean]"]=k["[object Date]"]=k["[object Float32Array]"]=k["[object Float64Array]"]=k["[object Int8Array]"]=k["[object Int16Array]"]=k["[object Int32Array]"]=k["[object Map]"]=k["[object Number]"]=k[m]=k["[object RegExp]"]=k["[object Set]"]=k["[object String]"]=k["[object Symbol]"]=k["[object Uint8Array]"]=k["[object Uint8ClampedArray]"]=k["[object Uint16Array]"]=k["[object Uint32Array]"]=!0,k["[object Error]"]=k[A]=k["[object WeakMap]"]=!1,t.exports=function t(e,r,E,P,F,M){var D,B=1&r,T=2&r,I=4&r;if(E&&(D=F?E(e,P,F,M):E(e)),void 0!==D)return D;if(!_(e))return e;var U=x(e);if(U){if(D=d(e),!B)return u(e,D)}else{var $=v(e),C=$==A||"[object GeneratorFunction]"==$;if(g(e))return c(e,B);if($==m||$==z||C&&!F){if(D=T||C?{}:y(e),!B)return T?l(e,a(D,e)):p(e,s(D,e))}else{if(!k[$])return F?e:{};D=b(e,$,B)}}M||(M=new n);var L=M.get(e);if(L)return L;M.set(e,D),w(e)?e.forEach((function(n){D.add(t(n,r,E,n,e,M))})):j(e)&&e.forEach((function(n,o){D.set(o,t(n,r,E,o,e,M))}));var N=U?void 0:(I?T?h:f:T?S:O)(e);return o(N||e,(function(n,o){N&&(n=e[o=n]),i(D,o,t(n,r,E,o,e,M))})),D}},3118:(t,e,r)=>{var n=r(3218),o=Object.create,i=function(){function t(){}return function(e){if(!n(e))return{};if(o)return o(e);t.prototype=e;var r=new t;return t.prototype=void 0,r}}();t.exports=i},8866:(t,e,r)=>{var n=r(2488),o=r(1469);t.exports=function(t,e,r){var i=e(t);return o(t)?i:n(i,r(t))}},4239:(t,e,r)=>{var n=r(2705),o=r(9607),i=r(2333),s=n?n.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":s&&s in Object(t)?o(t):i(t)}},9454:(t,e,r)=>{var n=r(4239),o=r(7005);t.exports=function(t){return o(t)&&"[object Arguments]"==n(t)}},939:(t,e,r)=>{var n=r(2492),o=r(7005);t.exports=function t(e,r,i,s,a){return e===r||(null==e||null==r||!o(e)&&!o(r)?e!=e&&r!=r:n(e,r,i,s,t,a))}},2492:(t,e,r)=>{var n=r(6384),o=r(7114),i=r(8351),s=r(6096),a=r(4160),c=r(1469),u=r(4144),p=r(6719),l="[object Arguments]",f="[object Array]",h="[object Object]",v=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,d,b,y){var x=c(t),g=c(e),j=x?f:a(t),_=g?f:a(e),w=(j=j==l?h:j)==h,O=(_=_==l?h:_)==h,S=j==_;if(S&&u(t)){if(!u(e))return!1;x=!0,w=!1}if(S&&!w)return y||(y=new n),x||p(t)?o(t,e,r,d,b,y):i(t,e,j,r,d,b,y);if(!(1&r)){var z=w&&v.call(t,"__wrapped__"),A=O&&v.call(e,"__wrapped__");if(z||A){var m=z?t.value():t,k=A?e.value():e;return y||(y=new n),b(m,k,r,d,y)}}return!!S&&(y||(y=new n),s(t,e,r,d,b,y))}},5588:(t,e,r)=>{var n=r(4160),o=r(7005);t.exports=function(t){return o(t)&&"[object Map]"==n(t)}},2958:(t,e,r)=>{var n=r(6384),o=r(939);t.exports=function(t,e,r,i){var s=r.length,a=s,c=!i;if(null==t)return!a;for(t=Object(t);s--;){var u=r[s];if(c&&u[2]?u[1]!==t[u[0]]:!(u[0]in t))return!1}for(;++s<a;){var p=(u=r[s])[0],l=t[p],f=u[1];if(c&&u[2]){if(void 0===l&&!(p in t))return!1}else{var h=new n;if(i)var v=i(l,f,p,t,e,h);if(!(void 0===v?o(f,l,3,i,h):v))return!1}}return!0}},8458:(t,e,r)=>{var n=r(3560),o=r(5346),i=r(3218),s=r(346),a=/^\[object .+?Constructor\]$/,c=Function.prototype,u=Object.prototype,p=c.toString,l=u.hasOwnProperty,f=RegExp("^"+p.call(l).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");t.exports=function(t){return!(!i(t)||o(t))&&(n(t)?f:a).test(s(t))}},9221:(t,e,r)=>{var n=r(4160),o=r(7005);t.exports=function(t){return o(t)&&"[object Set]"==n(t)}},8749:(t,e,r)=>{var n=r(4239),o=r(1780),i=r(7005),s={};s["[object Float32Array]"]=s["[object Float64Array]"]=s["[object Int8Array]"]=s["[object Int16Array]"]=s["[object Int32Array]"]=s["[object Uint8Array]"]=s["[object Uint8ClampedArray]"]=s["[object Uint16Array]"]=s["[object Uint32Array]"]=!0,s["[object Arguments]"]=s["[object Array]"]=s["[object ArrayBuffer]"]=s["[object Boolean]"]=s["[object DataView]"]=s["[object Date]"]=s["[object Error]"]=s["[object Function]"]=s["[object Map]"]=s["[object Number]"]=s["[object Object]"]=s["[object RegExp]"]=s["[object Set]"]=s["[object String]"]=s["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!s[n(t)]}},280:(t,e,r)=>{var n=r(5726),o=r(6916),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return o(t);var e=[];for(var r in Object(t))i.call(t,r)&&"constructor"!=r&&e.push(r);return e}},313:(t,e,r)=>{var n=r(3218),o=r(5726),i=r(3498),s=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return i(t);var e=o(t),r=[];for(var a in t)("constructor"!=a||!e&&s.call(t,a))&&r.push(a);return r}},1573:(t,e,r)=>{var n=r(2958),o=r(1499),i=r(2634);t.exports=function(t){var e=o(t);return 1==e.length&&e[0][2]?i(e[0][0],e[0][1]):function(r){return r===t||n(r,t,e)}}},2545:t=>{t.exports=function(t,e){for(var r=-1,n=Array(t);++r<t;)n[r]=e(r);return n}},1717:t=>{t.exports=function(t){return function(e){return t(e)}}},4757:t=>{t.exports=function(t,e){return t.has(e)}},4318:(t,e,r)=>{var n=r(1149);t.exports=function(t){var e=new t.constructor(t.byteLength);return new n(e).set(new n(t)),e}},4626:(t,e,r)=>{t=r.nmd(t);var n=r(5639),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,s=i&&i.exports===o?n.Buffer:void 0,a=s?s.allocUnsafe:void 0;t.exports=function(t,e){if(e)return t.slice();var r=t.length,n=a?a(r):new t.constructor(r);return t.copy(n),n}},7157:(t,e,r)=>{var n=r(4318);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.byteLength)}},3147:t=>{var e=/\w*$/;t.exports=function(t){var r=new t.constructor(t.source,e.exec(t));return r.lastIndex=t.lastIndex,r}},419:(t,e,r)=>{var n=r(2705),o=n?n.prototype:void 0,i=o?o.valueOf:void 0;t.exports=function(t){return i?Object(i.call(t)):{}}},7133:(t,e,r)=>{var n=r(4318);t.exports=function(t,e){var r=e?n(t.buffer):t.buffer;return new t.constructor(r,t.byteOffset,t.length)}},278:t=>{t.exports=function(t,e){var r=-1,n=t.length;for(e||(e=Array(n));++r<n;)e[r]=t[r];return e}},8363:(t,e,r)=>{var n=r(4865),o=r(9465);t.exports=function(t,e,r,i){var s=!r;r||(r={});for(var a=-1,c=e.length;++a<c;){var u=e[a],p=i?i(r[u],t[u],u,r,t):void 0;void 0===p&&(p=t[u]),s?o(r,u,p):n(r,u,p)}return r}},8805:(t,e,r)=>{var n=r(8363),o=r(9551);t.exports=function(t,e){return n(t,o(t),e)}},1911:(t,e,r)=>{var n=r(8363),o=r(1442);t.exports=function(t,e){return n(t,o(t),e)}},4429:(t,e,r)=>{var n=r(5639)["__core-js_shared__"];t.exports=n},8777:(t,e,r)=>{var n=r(852),o=function(){try{var t=n(Object,"defineProperty");return t({},"",{}),t}catch(t){}}();t.exports=o},7114:(t,e,r)=>{var n=r(8668),o=r(2908),i=r(4757);t.exports=function(t,e,r,s,a,c){var u=1&r,p=t.length,l=e.length;if(p!=l&&!(u&&l>p))return!1;var f=c.get(t),h=c.get(e);if(f&&h)return f==e&&h==t;var v=-1,d=!0,b=2&r?new n:void 0;for(c.set(t,e),c.set(e,t);++v<p;){var y=t[v],x=e[v];if(s)var g=u?s(x,y,v,e,t,c):s(y,x,v,t,e,c);if(void 0!==g){if(g)continue;d=!1;break}if(b){if(!o(e,(function(t,e){if(!i(b,e)&&(y===t||a(y,t,r,s,c)))return b.push(e)}))){d=!1;break}}else if(y!==x&&!a(y,x,r,s,c)){d=!1;break}}return c.delete(t),c.delete(e),d}},8351:(t,e,r)=>{var n=r(2705),o=r(1149),i=r(7813),s=r(7114),a=r(8776),c=r(1814),u=n?n.prototype:void 0,p=u?u.valueOf:void 0;t.exports=function(t,e,r,n,u,l,f){switch(r){case"[object DataView]":if(t.byteLength!=e.byteLength||t.byteOffset!=e.byteOffset)return!1;t=t.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(t.byteLength!=e.byteLength||!l(new o(t),new o(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return i(+t,+e);case"[object Error]":return t.name==e.name&&t.message==e.message;case"[object RegExp]":case"[object String]":return t==e+"";case"[object Map]":var h=a;case"[object Set]":var v=1&n;if(h||(h=c),t.size!=e.size&&!v)return!1;var d=f.get(t);if(d)return d==e;n|=2,f.set(t,e);var b=s(h(t),h(e),n,u,l,f);return f.delete(t),b;case"[object Symbol]":if(p)return p.call(t)==p.call(e)}return!1}},6096:(t,e,r)=>{var n=r(8234),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,r,i,s,a){var c=1&r,u=n(t),p=u.length;if(p!=n(e).length&&!c)return!1;for(var l=p;l--;){var f=u[l];if(!(c?f in e:o.call(e,f)))return!1}var h=a.get(t),v=a.get(e);if(h&&v)return h==e&&v==t;var d=!0;a.set(t,e),a.set(e,t);for(var b=c;++l<p;){var y=t[f=u[l]],x=e[f];if(i)var g=c?i(x,y,f,e,t,a):i(y,x,f,t,e,a);if(!(void 0===g?y===x||s(y,x,r,i,a):g)){d=!1;break}b||(b="constructor"==f)}if(d&&!b){var j=t.constructor,_=e.constructor;j==_||!("constructor"in t)||!("constructor"in e)||"function"==typeof j&&j instanceof j&&"function"==typeof _&&_ instanceof _||(d=!1)}return a.delete(t),a.delete(e),d}},1957:(t,e,r)=>{var n="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;t.exports=n},8234:(t,e,r)=>{var n=r(8866),o=r(9551),i=r(3674);t.exports=function(t){return n(t,i,o)}},6904:(t,e,r)=>{var n=r(8866),o=r(1442),i=r(1704);t.exports=function(t){return n(t,i,o)}},5050:(t,e,r)=>{var n=r(7019);t.exports=function(t,e){var r=t.__data__;return n(e)?r["string"==typeof e?"string":"hash"]:r.map}},1499:(t,e,r)=>{var n=r(9162),o=r(3674);t.exports=function(t){for(var e=o(t),r=e.length;r--;){var i=e[r],s=t[i];e[r]=[i,s,n(s)]}return e}},852:(t,e,r)=>{var n=r(8458),o=r(7801);t.exports=function(t,e){var r=o(t,e);return n(r)?r:void 0}},5924:(t,e,r)=>{var n=r(5569)(Object.getPrototypeOf,Object);t.exports=n},9607:(t,e,r)=>{var n=r(2705),o=Object.prototype,i=o.hasOwnProperty,s=o.toString,a=n?n.toStringTag:void 0;t.exports=function(t){var e=i.call(t,a),r=t[a];try{t[a]=void 0;var n=!0}catch(t){}var o=s.call(t);return n&&(e?t[a]=r:delete t[a]),o}},9551:(t,e,r)=>{var n=r(4963),o=r(479),i=Object.prototype.propertyIsEnumerable,s=Object.getOwnPropertySymbols,a=s?function(t){return null==t?[]:(t=Object(t),n(s(t),(function(e){return i.call(t,e)})))}:o;t.exports=a},1442:(t,e,r)=>{var n=r(2488),o=r(5924),i=r(9551),s=r(479),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,i(t)),t=o(t);return e}:s;t.exports=a},4160:(t,e,r)=>{var n=r(8552),o=r(7071),i=r(3818),s=r(8525),a=r(577),c=r(4239),u=r(346),p="[object Map]",l="[object Promise]",f="[object Set]",h="[object WeakMap]",v="[object DataView]",d=u(n),b=u(o),y=u(i),x=u(s),g=u(a),j=c;(n&&j(new n(new ArrayBuffer(1)))!=v||o&&j(new o)!=p||i&&j(i.resolve())!=l||s&&j(new s)!=f||a&&j(new a)!=h)&&(j=function(t){var e=c(t),r="[object Object]"==e?t.constructor:void 0,n=r?u(r):"";if(n)switch(n){case d:return v;case b:return p;case y:return l;case x:return f;case g:return h}return e}),t.exports=j},7801:t=>{t.exports=function(t,e){return null==t?void 0:t[e]}},1789:(t,e,r)=>{var n=r(4536);t.exports=function(){this.__data__=n?n(null):{},this.size=0}},401:t=>{t.exports=function(t){var e=this.has(t)&&delete this.__data__[t];return this.size-=e?1:0,e}},7667:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;if(n){var r=e[t];return"__lodash_hash_undefined__"===r?void 0:r}return o.call(e,t)?e[t]:void 0}},1327:(t,e,r)=>{var n=r(4536),o=Object.prototype.hasOwnProperty;t.exports=function(t){var e=this.__data__;return n?void 0!==e[t]:o.call(e,t)}},1866:(t,e,r)=>{var n=r(4536);t.exports=function(t,e){var r=this.__data__;return this.size+=this.has(t)?0:1,r[t]=n&&void 0===e?"__lodash_hash_undefined__":e,this}},3824:t=>{var e=Object.prototype.hasOwnProperty;t.exports=function(t){var r=t.length,n=new t.constructor(r);return r&&"string"==typeof t[0]&&e.call(t,"index")&&(n.index=t.index,n.input=t.input),n}},9148:(t,e,r)=>{var n=r(4318),o=r(7157),i=r(3147),s=r(419),a=r(7133);t.exports=function(t,e,r){var c=t.constructor;switch(e){case"[object ArrayBuffer]":return n(t);case"[object Boolean]":case"[object Date]":return new c(+t);case"[object DataView]":return o(t,r);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return a(t,r);case"[object Map]":return new c;case"[object Number]":case"[object String]":return new c(t);case"[object RegExp]":return i(t);case"[object Set]":return new c;case"[object Symbol]":return s(t)}}},8517:(t,e,r)=>{var n=r(3118),o=r(5924),i=r(5726);t.exports=function(t){return"function"!=typeof t.constructor||i(t)?{}:n(o(t))}},5776:t=>{var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,r){var n=typeof t;return!!(r=null==r?9007199254740991:r)&&("number"==n||"symbol"!=n&&e.test(t))&&t>-1&&t%1==0&&t<r}},7019:t=>{t.exports=function(t){var e=typeof t;return"string"==e||"number"==e||"symbol"==e||"boolean"==e?"__proto__"!==t:null===t}},5346:(t,e,r)=>{var n,o=r(4429),i=(n=/[^.]+$/.exec(o&&o.keys&&o.keys.IE_PROTO||""))?"Symbol(src)_1."+n:"";t.exports=function(t){return!!i&&i in t}},5726:t=>{var e=Object.prototype;t.exports=function(t){var r=t&&t.constructor;return t===("function"==typeof r&&r.prototype||e)}},9162:(t,e,r)=>{var n=r(3218);t.exports=function(t){return t==t&&!n(t)}},7040:t=>{t.exports=function(){this.__data__=[],this.size=0}},4125:(t,e,r)=>{var n=r(8470),o=Array.prototype.splice;t.exports=function(t){var e=this.__data__,r=n(e,t);return!(r<0||(r==e.length-1?e.pop():o.call(e,r,1),--this.size,0))}},2117:(t,e,r)=>{var n=r(8470);t.exports=function(t){var e=this.__data__,r=n(e,t);return r<0?void 0:e[r][1]}},7518:(t,e,r)=>{var n=r(8470);t.exports=function(t){return n(this.__data__,t)>-1}},4705:(t,e,r)=>{var n=r(8470);t.exports=function(t,e){var r=this.__data__,o=n(r,t);return o<0?(++this.size,r.push([t,e])):r[o][1]=e,this}},4785:(t,e,r)=>{var n=r(1989),o=r(8407),i=r(7071);t.exports=function(){this.size=0,this.__data__={hash:new n,map:new(i||o),string:new n}}},1285:(t,e,r)=>{var n=r(5050);t.exports=function(t){var e=n(this,t).delete(t);return this.size-=e?1:0,e}},6e3:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).get(t)}},9916:(t,e,r)=>{var n=r(5050);t.exports=function(t){return n(this,t).has(t)}},5265:(t,e,r)=>{var n=r(5050);t.exports=function(t,e){var r=n(this,t),o=r.size;return r.set(t,e),this.size+=r.size==o?0:1,this}},8776:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t,n){r[++e]=[n,t]})),r}},2634:t=>{t.exports=function(t,e){return function(r){return null!=r&&r[t]===e&&(void 0!==e||t in Object(r))}}},4536:(t,e,r)=>{var n=r(852)(Object,"create");t.exports=n},6916:(t,e,r)=>{var n=r(5569)(Object.keys,Object);t.exports=n},3498:t=>{t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},1167:(t,e,r)=>{t=r.nmd(t);var n=r(1957),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,s=i&&i.exports===o&&n.process,a=function(){try{return i&&i.require&&i.require("util").types||s&&s.binding&&s.binding("util")}catch(t){}}();t.exports=a},2333:t=>{var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},5569:t=>{t.exports=function(t,e){return function(r){return t(e(r))}}},5639:(t,e,r)=>{var n=r(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=n||o||Function("return this")();t.exports=i},619:t=>{t.exports=function(t){return this.__data__.set(t,"__lodash_hash_undefined__"),this}},2385:t=>{t.exports=function(t){return this.__data__.has(t)}},1814:t=>{t.exports=function(t){var e=-1,r=Array(t.size);return t.forEach((function(t){r[++e]=t})),r}},7465:(t,e,r)=>{var n=r(8407);t.exports=function(){this.__data__=new n,this.size=0}},3779:t=>{t.exports=function(t){var e=this.__data__,r=e.delete(t);return this.size=e.size,r}},7599:t=>{t.exports=function(t){return this.__data__.get(t)}},4758:t=>{t.exports=function(t){return this.__data__.has(t)}},4309:(t,e,r)=>{var n=r(8407),o=r(7071),i=r(3369);t.exports=function(t,e){var r=this.__data__;if(r instanceof n){var s=r.__data__;if(!o||s.length<199)return s.push([t,e]),this.size=++r.size,this;r=this.__data__=new i(s)}return r.set(t,e),this.size=r.size,this}},346:t=>{var e=Function.prototype.toString;t.exports=function(t){if(null!=t){try{return e.call(t)}catch(t){}try{return t+""}catch(t){}}return""}},7813:t=>{t.exports=function(t,e){return t===e||t!=t&&e!=e}},5694:(t,e,r)=>{var n=r(9454),o=r(7005),i=Object.prototype,s=i.hasOwnProperty,a=i.propertyIsEnumerable,c=n(function(){return arguments}())?n:function(t){return o(t)&&s.call(t,"callee")&&!a.call(t,"callee")};t.exports=c},1469:t=>{var e=Array.isArray;t.exports=e},8612:(t,e,r)=>{var n=r(3560),o=r(1780);t.exports=function(t){return null!=t&&o(t.length)&&!n(t)}},4144:(t,e,r)=>{t=r.nmd(t);var n=r(5639),o=r(5062),i=e&&!e.nodeType&&e,s=i&&t&&!t.nodeType&&t,a=s&&s.exports===i?n.Buffer:void 0,c=(a?a.isBuffer:void 0)||o;t.exports=c},3560:(t,e,r)=>{var n=r(4239),o=r(3218);t.exports=function(t){if(!o(t))return!1;var e=n(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},1780:t=>{t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},6688:(t,e,r)=>{var n=r(5588),o=r(1717),i=r(1167),s=i&&i.isMap,a=s?o(s):n;t.exports=a},6379:(t,e,r)=>{var n=r(2958),o=r(1499);t.exports=function(t,e){return t===e||n(t,e,o(e))}},3218:t=>{t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},7005:t=>{t.exports=function(t){return null!=t&&"object"==typeof t}},2928:(t,e,r)=>{var n=r(9221),o=r(1717),i=r(1167),s=i&&i.isSet,a=s?o(s):n;t.exports=a},6719:(t,e,r)=>{var n=r(8749),o=r(1717),i=r(1167),s=i&&i.isTypedArray,a=s?o(s):n;t.exports=a},3674:(t,e,r)=>{var n=r(4636),o=r(280),i=r(8612);t.exports=function(t){return i(t)?n(t):o(t)}},1704:(t,e,r)=>{var n=r(4636),o=r(313),i=r(8612);t.exports=function(t){return i(t)?n(t,!0):o(t)}},6410:(t,e,r)=>{var n=r(5990),o=r(1573);t.exports=function(t){return o(n(t,1))}},479:t=>{t.exports=function(){return[]}},5062:t=>{t.exports=function(){return!1}}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={id:n,loaded:!1,exports:{}};return t[n](i,i.exports,r),i.loaded=!0,i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),r.nmd=t=>(t.paths=[],t.children||(t.children=[]),t),(()=>{"use strict";const t=r(6410),e=r(6379),n={up:"⬆️",down:"⬇️",left:"⬅️",right:"➡️"},o=({x:t,y:e})=>`[${String(t).padStart(2,"0")} ${String(e).padStart(2,"0")}]`;window.game=new class{#cols=20;#rows=15;#direction="right";#snake=[Object.freeze({x:2,y:0,direction:"right"}),Object.freeze({x:1,y:0,direction:"right"}),Object.freeze({x:0,y:0,direction:"right"})];#size;#apple;#events;constructor(){var t;this.#size=this.#snake.length,this.#newApple(),this.#events={all:t=t||new Map,on:function(e,r){var n=t.get(e);n?n.push(r):t.set(e,[r])},off:function(e,r){var n=t.get(e);n&&(r?n.splice(n.indexOf(r)>>>0,1):t.set(e,[]))},emit:function(e,r){var n=t.get(e);n&&n.slice().map((function(t){t(r)})),(n=t.get("*"))&&n.slice().map((function(t){t(e,r)}))}},this.#registerControls()}get cols(){return this.#cols}get rows(){return this.#rows}get events(){return this.#events}get state(){return{direction:this.#direction,snake:[...this.#snake],apple:this.#apple,size:this.#size}}changeDirection(t){return(1===this.#snake.length||"up"===t&&"down"!==this.#snake[0].direction||"down"===t&&"up"!==this.#snake[0].direction||"left"===t&&"right"!==this.#snake[0].direction||"right"===t&&"left"!==this.#snake[0].direction)&&(this.#direction!==t&&(this.#direction=t,this.#events.emit("directionChanged",this.state)),!0)}tick(){const t=this.#nextPosition();this.#snake.some((({x:e,y:r})=>e===t.x&&r===t.y))||-1===t.x||t.x===this.#cols||-1===t.y||t.y===this.#rows||(this.#snake.unshift(t),this.#snake.length>this.#size&&this.#snake.pop(),e(t,this.#apple)&&(this.#size++,this.#newApple(),this.#events.emit("appleEaten",this.state)),this.#events.emit("afterTick",this.state))}#nextPosition(){let t={...this.#snake[0],direction:this.#direction};return"up"===t.direction?t.y--:"down"===t.direction?t.y++:"left"===t.direction?t.x--:"right"===t.direction&&t.x++,Object.freeze(t),t}#newApple(){do{this.#apple=Object.freeze({x:Math.floor(Math.random()*this.#cols),y:Math.floor(Math.random()*this.#rows)})}while(this.#snake.some(t(this.#apple)))}up(){this.changeDirection("up")&&this.tick()}down(){this.changeDirection("down")&&this.tick()}left(){this.changeDirection("left")&&this.tick()}right(){this.changeDirection("right")&&this.tick()}#registerControls(){window.addEventListener("keydown",(({code:t})=>{["ArrowUp","Numpad8","KeyW"].includes(t)?this.up():["ArrowDown","Numpad2","KeyS"].includes(t)?this.down():["ArrowLeft","Numpad4","KeyA"].includes(t)?this.left():["ArrowRight","Numpad6","KeyD"].includes(t)?this.right():["NumpadAdd"].includes(t)&&this.#size++}))}},new class{cols;rows;cellSize;gapSize;canvas;ctx;constructor(t,e){this.cols=t.cols,this.rows=t.rows,this.canvas=e,this.ctx=this.canvas.getContext("2d");let r=e.parentElement.scrollWidth,n=e.parentElement.scrollHeight;this.cellSize=r/n>this.cols/this.rows?10*Math.floor(n/this.rows/10):10*Math.floor(r/this.cols/10),this.gapSize=Math.floor(this.cellSize/10),e.width=this.cols*this.cellSize,e.height=this.rows*this.cellSize,this.redraw(t.state),this.#addListeners(t.events)}redraw(t){this.clearBoard(),this.drawSnake(t.snake),this.drawApple(t.apple)}drawSnake(t){t.forEach(((e,r)=>{this.ctx.fillStyle=0===r?"#16A34A":"#22C55E";let n={x:e.x*this.cellSize+this.gapSize,y:e.y*this.cellSize+this.gapSize,w:this.cellSize-2*this.gapSize,h:this.cellSize-2*this.gapSize};t.length!==r+1&&("up"===e.direction?n.h+=2*this.gapSize:"down"===e.direction?(n.y-=2*this.gapSize,n.h+=2*this.gapSize):"left"===e.direction?n.w+=2*this.gapSize:"right"===e.direction&&(n.x-=2*this.gapSize,n.w+=2*this.gapSize)),this.ctx.fillRect(n.x,n.y,n.w,n.h)}))}drawApple(t){this.ctx.fillStyle="#EF4444",this.ctx.strokeStyle="#DC2626",this.ctx.lineWidth=this.gapSize,this.ctx.beginPath(),this.ctx.arc((t.x+.5)*this.cellSize,(t.y+.5)*this.cellSize,Math.floor(this.cellSize/2-2*this.gapSize),0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()}clearBoard(){for(let t=0;t<this.cols;t++)for(let e=0;e<this.cols;e++)this.ctx.fillStyle=(t+e)%2==0?"#FEF3C7":"#FFFBEB",this.ctx.fillRect(t*this.cellSize,e*this.cellSize,this.cellSize,this.cellSize)}#addListeners(t){t.on("afterTick",(t=>this.redraw(t)))}}(game,document.getElementById("snake-square")),new class{constructor(t){this.#addListeners(t.events)}#addListeners(t){t.on("afterTick",this.#logToConsole)}#logToConsole({snake:t,apple:e}){let r=`🍎\t${o(e)}`,i=`🐍\tlength=${t.length}`+t.reduce(((e,r,i)=>0===i||r.direction!==t[i-1].direction?e+`\n${n[r.direction]}\t${o(r)}`:e+`\n\t${o(r)}`),"");console.log(r+"\n"+i)}}(game)})()})();