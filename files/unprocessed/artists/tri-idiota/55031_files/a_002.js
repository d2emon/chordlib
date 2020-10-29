/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);


jQuery.noConflict();

jQuery.ajaxSetup({
	cache: false
});

jQuery.fn.ljAddContextualPopup = function(){
	if(!window.ContextualPopup) return this;

	return this.each(function(){
		ContextualPopup.searchAndAdd(this);
	});
};

jQuery.fn.hourglass = function(xhr){
	var hourglasses = [];
	this.each(function(){
		// is complete or was aborted
		if(xhr && (xhr.readyState == 0 || xhr.readyState == 4)) return;

		if(this.nodeType){ // node

		} else { // position from event
			var e = jQuery.event.fix(this),
				hourglass = new Hourglass(),
				offset = {};

			// from keyboard
			if(!e.clientX || !e.clientY){
				offset = jQuery(e.target).offset();
			}

			hourglass.init();
			hourglass.hourglass_at(offset.left || e.pageX, offset.top || e.pageY);
		}

		hourglasses.push(hourglass);

		if(xhr){
			jQuery(hourglass.ele).bind('ajaxComplete', function(event, request){
				if(request == xhr){
					hourglass.hide();
					jQuery(hourglass.ele).unbind('ajaxComplete', arguments.callee);
				}
			});
		}
	});

	return hourglasses;
};

// not work for password
jQuery.fn.placeholder = (function()
{
	var check_focus = function() {
			if (this.value === this.getAttribute("placeholder")) {
				jQuery(this)
					.val("")
					.removeClass("placeholder");
			}
		},
		check_blur = function() {
			if (!this.value) {
				jQuery(this)
					.val(this.getAttribute("placeholder"))
					.addClass("placeholder");
			}
		},
		support;

	return function() {
		if (support === undefined) {
			support = "placeholder" in document.createElement("input");
		}
		if (support === true) {
			return this;
		} else {
			return this.each(function() {
				if (this.getAttribute("placeholder")) {
					var $this = jQuery(this);
					
					if (!$this.data('jQuery-has-placeholder')) {
						$this.focus(check_focus).blur(check_blur);

						jQuery(this.form)
							.submit(function() {
								$this.hasClass("placeholder") && $this.removeClass("placeholder").val("");
							});
					}

					this.value === this.getAttribute("placeholder") || !this.value
						? $this.val(this.getAttribute("placeholder")).addClass("placeholder")
						: $this.removeClass("placeholder");

					$this.data('jQuery-has-placeholder', true)
				}
			});
		}
	}
})();

//this one is fields type agnostic but creates additional label elements, which need to be styled
jQuery.fn.labeledPlaceholder = function(){
	function focus_action(input, label){
		label.hide();
	}

	function blur_action(input, label){
		if (input.val().length === 0) {
			label.show();
		}
	}

	return this.each(function(){

		if('placeholder' in document.createElement('input') && this.tagName.toLowerCase() === "input"){
			return;
		}
		if('placeholder' in document.createElement('textarea') && this.tagName.toLowerCase() === "textarea"){
			return;
		}

		var $this = jQuery(this),
			placeholder = $this.attr('placeholder');

		$this.wrap('<span class="placeholder-wrapper" />');

		if(!placeholder || placeholder.length === 0){
			return;
		}

		var label = jQuery("<label></label>").addClass('placeholder-label').mousedown(function(ev){
			setTimeout(function(){
				focus_action($this, label);
				$this.focus();
			}, 0);
		}).html(placeholder).insertBefore($this);
		$this.focus(function(){
			focus_action($this, label)
		}).blur(function(){
			blur_action($this, label)
		});

		blur_action($this, label);

	});
};

jQuery.fn.input = function(fn){
	return fn ? this.each(function(){
		var last_value = this.value;
		jQuery(this).bind("input keyup paste", function(e){
			// e.originalEvent use from trigger
			if(!e.originalEvent || this.value !== last_value){
				last_value = this.value;
				fn.apply(this, arguments);
			}
		})
	}) : this.trigger("input");
};

// ctrl+enter send form
jQuery.fn.disableEnterSubmit = function() {
	this.bind("keypress", function(e) {
		// keyCode == 10 in IE with ctrlKey
		if ((e.which === 13 || e.which === 10) && e.target && e.target.form) {
			if (e.ctrlKey && !jQuery(":submit", e.target.form).attr("disabled")
				&& (e.target.tagName === "TEXTAREA" || e.target.tagName === "INPUT")
			) {
				e.target.form.submit();
			}

			if (e.target.tagName === "INPUT") {
				e.preventDefault();
			}
		}
	});
	return this;
};

/* function based on markup:
	tab links: ul>li>a
	current tab: ul>li.current
	tab container: ul>li
	tab container current: ul>li.current
*/
(function ($) {
	var supportHistoryAPI = !!window.history.pushState;
	var dataHistory = {};

	function changeTab(containers, links, index) {
		links
			.parent()
			.removeClass('current')
			.eq(index)
			.addClass('current');

		containers.removeClass('current')
			.eq(index)
			.addClass('current');
	}

	function onClick(evt) {
		var item = $(this).parent(),
			index = item.index(),
			data = evt.data;

		if (data.containers[index]) {
			changeTab(data.containers, data.links, index);

			if (supportHistoryAPI) {
				window.history.pushState(null, '', this.href);
			}

			evt.preventDefault();
		}
	}

	if (supportHistoryAPI) {
		$(window).bind('popstate', function () {
			var data = dataHistory[location.href];

			if (data && data.length) {
				var length = data.length;
				while (length) {
					var itemData = data[--length];
					changeTab(itemData.containers, itemData.links, itemData.index);
				}
			}
		});
	}

	$.fn.tabsChanger = function(container) {
		var links = this.children('li').children('a');

		if (container) {
			container = $(container);
		} else {
			// next sibling of links
			container = links.parent().parent().next();
		}

		container = container.children('li');

		if (supportHistoryAPI) {
			links.each(function (index) {
				var urlData = dataHistory[this.href];

				if (!urlData) {
					urlData = dataHistory[this.href] = [];
				}

				urlData.push({
					index: index,
					links: links,
					containers: container
				});
			});
		}

		links.bind('click', {
			containers: container,
			links: links
		}, onClick);

		return this;
	};

})(jQuery);

/** jQuery overlay plugin
 * After creation overlay visibility can be toggled with
 * $( '#selector' ).overlay( 'show' ) and $( '#selector' ).overlay( 'hide' )
 */
jQuery.fn.overlay = function(opts){
	var options = {
		hideOnInit: true,
		hideOnClick: true
	};

	function Overlay(layer, options){
		this.layer = jQuery(layer);
		this.options = options;
		this.updateState(this.options.hideOnInit);
		this.bindEvents();
	}

	Overlay.prototype.bindEvents = function(){
		var overlay = this;

		if(this.options.hideOnClick){
			overlay.layer.mousedown(function(ev){
				ev.stopPropagation();
			});

			jQuery(document).mousedown(function(ev){
				overlay.updateState(true);
				ev.stopPropagation();
			});
		}
	};

	Overlay.prototype.updateState = function(hide){
		this.layerVisible = !hide;
		if(this.layerVisible){
			this.layer.show();
		} else {
			this.layer.hide();
		}
	};

	Overlay.prototype.proccessCommand = function (cmd){
		switch(cmd){
			case 'show' :
				this.updateState(false);
				break;
			case 'hide' :
				this.updateState(true);
				break;
		}
	};

	var cmd;
	if(typeof opts === "string"){
		cmd = opts;
	}

	return this.each(function(){
		if(!this.overlay){
			var o = jQuery.extend({}, options, opts || {});
			this.overlay = new Overlay(this, o);
		}

		if(cmd.length > 0){
			this.overlay.proccessCommand(opts)
		}
	});
};

/**
 * Function assures that callback will run not faster then minDelay.
 *
 * @param {Function} callback A callback to run.
 * @param {Number} minDelay Minimum delay in ms.
 *
 * @return {Function} Callback wrapper to use as a collback in your code.
 */
jQuery.delayedCallback = function(callback, minDelay) {
	var callCount = 2,
		results,
		checkFinish = function() {
			callCount--;
			if (callCount === 0) {
				callback.apply(null, results);
			}
		}

	setTimeout(checkFinish, minDelay);
	return function() {
		results = [].slice.apply(arguments);
		checkFinish();
	};
};

document.documentElement.id = 'js';

/* Cookie plugin. Copyright (c) 2006 Klaus Hartl (stilbuero.de) */
function Cookie(name, value, options)
{
	if (value !== undefined) { // name and value given, set/delete cookie
		options = options || {};
		if (value === null) {
			value = '';
			options.expires = -1;
		}
		var expires = '';
		if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
			var date;
			if (typeof options.expires == 'number') {
				date = new Date;
				date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
			} else {
				date = options.expires;
			}
			expires = '; expires=' + date.toUTCString(); // use expires attribute, max-age is not supported by IE
		}
		// CAUTION: Needed to parenthesize options.path and options.domain
		// in the following expressions, otherwise they evaluate to undefined
		// in the packed version for some reason...
		var path = options.path ? '; path=' + (options.path) : '',
			domain = options.domain ? '; domain=' + (options.domain) : '',
			secure = options.secure ? '; secure' : '';
		document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
	} else { // only name given, get cookie
		var cookieValue = null;
		if (document.cookie && document.cookie != '') {
			var cookies = document.cookie.split(';');
			for (var i = 0; i < cookies.length; i++) {
				var cookie = cookies[i].trim();
				// Does this cookie string begin with the name we want?
				if (cookie.substring(0, name.length + 1) == (name + '=')) {
					cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
					break;
				}
			}
		}
		return cookieValue;
	}
}

//core.js

/**
 * Utility method.
 * @param x <code>any</code> Any JavaScript value, including <code>undefined</code>.
 * @return boolean <code>true</code> if the value is not <code>null</code> and is not <code>undefined</code>.
 */
finite = function(x){
	return isFinite(x) ? x : 0;
};


finiteInt = function(x, base){
	return finite(parseInt(x, base));
};


finiteFloat = function(x){
	return finite(parseFloat(x));
};

/* unique id generator */
Unique = {
	length: 0,
	id: function(){
		return ++this.length;
	}
};

/* event methods */
var Event = Event||{};

Event.stop = function(e){
	// this set in Event.prep
	e = e || window.event || this;
	Event.stopPropagation(e);
	Event.preventDefault(e);
	return false;
};

Event.stopPropagation = function(e){
	if(e && e.stopPropagation)
		e.stopPropagation(); else
		window.event.cancelBubble = true;
};

Event.preventDefault = function(e){
	e = e || window.event;
	if(e.preventDefault)
		e.preventDefault();
	e.returnValue = false;
};

Event.prep = function(e){
	e = e || window.event;
	if(e.stop === undefined)
		e.stop = this.stop;
	if(e.target === undefined)
		e.target = e.srcElement;
	if(e.relatedTarget === undefined)
		e.relatedTarget = e.toElement;
	return e;
};

/**
 * @namespace LiveJournal utility objects
 */
LJ = window.LJ || {};

/**
 * @class Class allows to call a function with  some delay and also prevent
 *     its execution if needed.
 * @constructor
 *
 * @param {Function} func Function to call.
 * @param {number} wait Time in ms to wait before function will be called.
 * @param {boolean=false} resetOnCall it true, the function will be executed only after last call + delay time
 */
LJ.DelayedCall = function(func, wait, resetOnCall) {
	this._func = func;
	this._wait = wait;
	this._resetOnCall = !!resetOnCall;
	this._timer = null;
	this._args = null;
};

LJ.DelayedCall.prototype._timerCallback = function() {
	this._timer = null;
	this._func.apply(null, this._args);
};

/**
 * Run function. All arguments that will be passed to this function will be
 *    passed to the function called.
 */
LJ.DelayedCall.prototype.run = function(/* arguments */) {
	this._args = [].slice.call(arguments, 0);
	if (this._timer) {
		if (this._resetOnCall) {
			clearTimeout(this._timer);
			this._timer = null;
		} else {
			return;
		}
	}

	this._timer = setTimeout(this._timerCallback.bind(this), this._wait);
};

/**
 * Prevent function execution.
 */
LJ.DelayedCall.prototype.stop = function() {
	clearTimeout(this._timer);
	this._timer = null;
};

/**
 * Add pub/sub functionality for an object.
 *
 * @param {Object} obj Target object.
 */
LJ.addPubSub = function(obj) {
	var o = jQuery({});

	obj.addEventListener = function() {
		o.on.apply(o, arguments);
	};

	obj.removeEventListener = function() {
		o.off.apply(o, arguments);
	};

	obj.dispatchMessage = function() {
		o.trigger.apply(o, arguments);
	};
};

/**
 * Format number according to locale. E.g. 1000000 becomes 1,000,000.
 *
 * @param {number} num Number to format.
 */
LJ.commafy = function(num) {
	num = "" + num;
	if (/^\d+$/.test(num)) {
		var delim = LiveJournal.getLocalizedStr('number.punctuation');
		if (delim === '[number.punctuation]') { delim = ','; }

		var hasMatches = true;
		while (hasMatches) {
			hasMatches = false;
			num = num.replace(/(\d)(\d{3})(?!\d)/g, function(str, first, group) {
				hasMatches = true;
				return first + delim + group;
			})
		}
	}

	return num;
};

/**
 * Create function that will call the target function
 * at most once per every delay seconds. The signature and tests
 * are taken from underscore project.
 *
 * @param {Function} func The function to call.
 * @param {number} Delay between the calls in ms.
 */
LJ.throttle = function(func, delay) {
	var ctx, args, timer, shouldBeCalled = false;

	return function() {
		ctx = this;
		args = arguments;

		var callFunc = function() {
			timer = null;
			if (!shouldBeCalled) { return; }
			shouldBeCalled = false;
			timer = setTimeout(callFunc, delay);
			var ret = func.apply(ctx, args);

			return ret;
		};

		shouldBeCalled = true;
		if (timer) { return; }

		return callFunc();
	}
};


/* object extensions */
if (!Object.extend)
	Object.extend = function (d, s){
		if(d) for(var p in s) if(!d[p]) d[p] = s[p];
		return d
	};

if (!Object.override)
	Object.override = function (d, s){
		if(d) for(var p in s) d[p] = s[p];
		return d
	};

/* function extensions */
/**
 * Returns an array of all own enumerable properties found upon a given object,
 * in the same order as that provided by a for-in loop.
 *
 * @param {Object} The object whose enumerable own properties are to be returned.
 *
 * @return {Array} Array with properties names.
 */
Object.extend(Object, {
	keys: function(o) {
		if (o !== Object(o)) {
			throw new TypeError('Object.keys called on non-object');
		}
		var ret=[],p;
		for(p in o) if(Object.prototype.hasOwnProperty.call(o,p)) ret.push(p);
		return ret;
	}
});


Object.extend(Function.prototype, {
	bind: function(that) { // .length is 1
		var target = this,
			slice = [].slice;
		if (typeof target.apply != "function" || typeof target.call != "function")
			return new TypeError();

		var args = slice.call(arguments, 1); // for normal call
		var bound = function () {

			if (this instanceof bound) {

				var self = Object.create(target.prototype);
				var result = target.apply(
					self,
					args.concat(slice.call(arguments))
				);
				if (result !== null && Object(result) === result)
					return result;
				return self;

			} else {
				return target.apply(
					that,
					args.concat(slice.call(arguments))
				);

			}
		}

		return bound;
	},
	
	bindEventListener: function(object) {
		var method = this; // Use double closure to work around IE 6 memory leak.
		return function(e) {
			e = Event.prep(e);
			return method.call(object, e);
		};
	}
});

Object.extend(Function, {
	defer: function(func, args/*, more than one*/) {
		var args = [].slice.call(arguments, 1);

		setTimeout(function() {
			func.apply(null, args);
		}, 0);
	}
});



/* class helpers */
indirectObjects = [];

Class = function(superClass){
	// Set the constructor:
	var constructor = function(){
		if(arguments.length)
			this.init.apply(this, arguments);
	};
	//   -- Accomplish static-inheritance:
	Object.override(constructor, Class);  // inherit static methods from Class

	superClass = superClass || function(){
	};
	superClassFunc = function(){
	}
	Object.extend(superClassFunc.prototype, superClass.prototype)
	Object.extend(superClassFunc.prototype, {
		init: function(){
		},
		destroy: function(){
		}
	})
	Object.override(constructor, superClass); // inherit static methods from the superClass
	constructor.superClass = superClassFunc.prototype;

	// Set the constructor's prototype (accomplish object-inheritance):
	constructor.prototype = new superClass();
	constructor.prototype.constructor = constructor; // rev. 0.7
	//   -- extend prototype with Class instance methods
	Object.extend(constructor.prototype, Class.prototype);
	//   -- override prototype with interface methods
	for(var i = 1; i < arguments.length; i++)
		Object.override(constructor.prototype, arguments[i]);

	return constructor;
};

Class.prototype = {
	destroy: function(){
		try{
			if(this.indirectIndex)
				indirectObjects[ this.indirectIndex ] = undefined;
			delete this.indirectIndex;
		} catch(e){
		}

		for(var property in this){
			try{
				delete this[ property ];
			} catch(e){
			}
		}
	}
};



/* string extensions */
Object.extend(String, {
	escapeJSChar: function( c ) {
		// try simple escaping
		switch( c ) {
			case "\\": return "\\\\";
			case "\"": return "\\\"";
			case "'":  return "\\'";
			case "\b": return "\\b";
			case "\f": return "\\f";
			case "\n": return "\\n";
			case "\r": return "\\r";
			case "\t": return "\\t";
		}

		// return raw bytes now ... should be UTF-8
		if( c >= " " )
			return c;

		// try \uXXXX escaping, but shouldn't make it for case 1, 2
		c = c.charCodeAt( 0 ).toString( 16 );
		switch( c.length ) {
			case 1: return "\\u000" + c;
			case 2: return "\\u00" + c;
			case 3: return "\\u0" + c;
			case 4: return "\\u" + c;
		}

		// should never make it here
		return "";
	},

	encodeEntity: function( c ) {
		switch( c ) {
			case "<": return "&lt;";
			case ">": return "&gt;";
			case "&": return "&amp;";
			case '"': return "&quot;";
			case "'": return "&apos;";
		}
		return c;
	},

	decodeEntity: function( c ) {
		switch( c ) {
			case "amp": return "&";
			case "quot": return '"';
			case "apos": return "'";
			case "gt": return ">";
			case "lt": return "<";
		}
		var m = c.match( /^#(\d+)$/ );
		if( m && defined( m[ 1 ] ) )
			return String.fromCharCode( m[ 1 ] );
		m = c.match( /^#x([0-9a-f]+)$/i );
		if(  m && defined( m[ 1 ] ) )
			return String.fromCharCode( parseInt( hex, m[ 1 ] ) );
		return c;
	}
});

Object.extend(String.prototype, {
	escapeJS: function()
	{
		return this.replace( /([^ -!#-\[\]-~])/g, function( m, c ) { return String.escapeJSChar( c ); } )
	},

	/**
	 * Encode a string to allow a secure insertion in html code.
	 */
	encodeHTML: function() {
		return this.replace( /([<>&"])/g, function( m, c ) { return String.encodeEntity( c ) } ); /* fix syntax highlight: " */
	},

	decodeHTML: function() {
		return this.replace( /&(.*?);/g, function( m, c ) { return String.decodeEntity( c ) } );
	},

	/**
	 * Add chars in front of string until it gets the length required.
	 *
	 * @param {Number} length Required string length.
	 * @param {String} padChar A char to add in front of string.
	 *
	 * @return {String} A padded string.
	 */
	pad: function(length, padChar)
	{
		return ((new Array(length + 1))
			.join(padChar)
			+ this
		).slice(-length);
	},

	trim: function()
	{
		return this.replace(/^\s+|\s+$/g, '');
	},

	supplant: function(o)
	{
		return this.replace(/{([^{}]*)}/g,
			function (a, b) {
				var r = o[b];
				return typeof r === 'string' || typeof r === 'number' ? r : a;
			});
	}
});

Object.extend(Date, {
	/**
	 * Return timestamp number for current moment.
	 *
	 * @return {Number} A Timestamp.
	 */
	now: function() {
		return +new Date;
	}
});

Object.extend(Array, {
	/**
	 * Returns true if an object is an array, false if it is not.
	 *
	 * @param {Object} Argument to test.
	 *
	 * @return {Boolean} Test result.
	 */
	isArray: function(arg) {
		return Object.prototype.toString.call(arg) == '[object Array]';
	}
});

/* extend array object */
Object.extend(Array.prototype, {
	/**
	 * Check if index fits in current array size and fix it otherwise.
	 *
	 * @param {Number} fromIndex Index to check.
	 * @param {Number} defaultIndex This value will be taken if fromIndex is not defined.
	 *
	 * @return {Number} Fixed index value.
	 */
	fitIndex: function(fromIndex, defaultIndex)
	{
		if (fromIndex !== undefined || fromIndex == null) {
			fromIndex = defaultIndex;
		} else if (fromIndex < 0) {
			fromIndex = this.length + fromIndex;
			if (fromIndex < 0) {
				fromIndex = 0;
			}
		} else if (fromIndex >= this.length) {
			fromIndex = this.length - 1;
		}
		return fromIndex;
	},

	/**
	 * The function takes its arguments and add the ones that are not already inside to the end.
	 *
	 * @return {Number} New length of the array.
	 */
	add: function(/* a1, a2, ... */)
	{
		for (var j, a = arguments, i = 0; i < a.length; i++ ) {
			j = this.indexOf(a[i]);
			if (j < 0) {
				this.push(arguments[i]);
			}
		}
		return this.length;
	},

	/*
	 * The function takes its arguments and removes them from the array, if they are inside
	 *
	 * @return {Number} New length of the array.
	 */
	remove: function(/* a1, a2, ... */)
	{
		for (var j, a = arguments, i = 0; i < a.length; i++ ) {
			j = this.indexOf(a[i]);
			if (j >= 0) {
				this.splice(j, 1);
			}
		}
		return this.length;
	},

	/* javascript 1.5 array methods */
	/* http://developer-test.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Objects:Array#Methods */
	/**
	 * Creates a new array with all elements that pass the test implemented by the provided function.
	 *
	 * @param {Function} fun Function to test each element of the array.
	 * @param {Function} thisp Object to use as this when executing callback.
	 *
	 * @param {Array} Filtered array.
	 */
	filter: function(fun/*, thisp*/)
	{
		var thisp = arguments[1] || null;
		if (typeof fun !== "function") {
			throw new TypeError("First argument is not callable");
		}

		for (var i = 0, len = this.length >>> 0, res = []; i < len; i++) {
			if (i in this) {
				var val = this[i]; // in case fun mutates this
				if (fun.call(thisp, val, i, this))
					res.push(val);
			}
		}
		
		return res;
	},
	
	/**
	 * Executes a provided function once per array element.
	 *
	 * @param {Function} fun Function to test each element of the array.
	 * @param {Function} thisp Object to use as this when executing callback.
	 *
	 * @return {Void}
	 */
	forEach: function(fun/*, thisp*/)
	{
		if (typeof fun !== "function") {
			throw new TypeError("First argument is not callable");
		}

		var thisp = arguments[1] || null;
		for (var i = 0, len = this.length >>> 0; i < len; i++) {
			if (i in this) {
				fun.call(thisp, this[i], i, this);
			}
		}
	},
	
	/**
	 * Returns the first index at which a given element can be found in the array,
	 * or -1 if it is not present.
	 *
	 * @param {Object} elt Element to locate in the array.
	 * @param {Number} from The index at which to begin the search. Defaults to 0, i.e.
	 *     the whole array will be searched. If the index is greater than or equal
	 *     to the length of the array, -1 is returned, i.e. the array will not be
	 *     searched. If negative, it is taken as the offset from the end of the array.
	 *     Note that even when the index is negative, the array is still searched
	 *     from front to back. If the calculated index is less than 0, the whole
	 *     array will be searched.
	 *
	 * @return {Number} Array index.
	 */
	indexOf: function(elt/*, from*/)
	{
		if (this === null || this === void 0) {
			throw new TypeError();
		}

		var len = this.length >>> 0;
		
		var from = Number(arguments[1]) || 0;
		from = from < 0
				? Math.ceil(from)
				: Math.floor(from);
		if (from < 0) {
			from += len;
		}
		for (; from < len; from++) {
			if (((from in this) || (len > from + 1 && this[from] === void 0)) && this[from] === elt) {
				return from;
			}
		}
		return -1;
	},
	
	/**
	 * Returns the last index at which a given element can be found in the array,
	 * or -1 if it is not present. The array is searched backwards, starting at fromIndex.
	 *
	 * @param {Object} elt Element to locate in the array.
	 * @param {Number=0} from The index at which to start searching backwards. Defaults to
	 *     the array's length, i.e. the whole array will be searched. If the index is
	 *     greater than or equal to the length of the array, the whole array will be
	 *     searched. If negative, it is taken as the offset from the end of the array.
	 *     Note that even when the index is negative, the array is still searched from
	 *     back to front. If the calculated index is less than 0, -1 is returned, i.e.
	 *     the array will not be searched. 
	 *
	 * @return {Number} Array index.
	 */
	lastIndexOf: function(elt/*, from*/)
	{
		var len = this.length >>> 0;
		if (len === 1) {
			return -1;
		}
		
		var from = Number(arguments[1]);

		if (arguments.length === 1) {
			from = len;
		} else {
			if (isNaN(from)) {
				if (arguments[1] === void 0) {
					from = 0;
				} else {
					from = -1;
				}
			} else {
				from = (from < 0)
					? Math.ceil(from)
					: Math.floor(from);
				if (from < 0) {
					from += len;
				} else if (from >= len) {
					from = len - 1;
				}
			}
		}
		
		for (; from > -1; from--) {
			if (((from in this) || (len > from + 1 && this[from] === void 0)) && this[from] === elt) {
				return from;
			}
		}
		return -1;
	},

	/**
	 * Tests whether all elements in the array pass the test implemented by the provided function.
	 *
	 * Implementation from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/every
	 *
	 * @param {Function} fun Function to test for each element.
	 * @param {Object=} thisp Object to use as this when executing fun.
	 *
	 * @return {Boolean} Test result.
	 */
	every: function(fun/*, thisp */) {
		if (this === void 0 || this === null) {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t && !fun.call(thisp, t[i], i, t)) {
				return false;
			}
		}

		return true;
	},

	/**
	 * Tests whether some element in the array passes the test implemented
	 * by the provided function.
	 *
	 * Implementation from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/some
	 *
	 * @param {Function} fun Function to test for each element.
	 * @param {Object=} thisp Object to use as this when executing fun.
	 *
	 * @return {Boolean} Test result.
	 */
	some: function(fun/*, thisp */) {
		if (this === void 0 || this === null) {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof fun !== "function") {
			throw new TypeError();
		}

		var thisp = arguments[1];
		for (var i = 0; i < len; i++) {
			if (i in t && fun.call(thisp, t[i], i, t)) {
				return true;
			}
		}

		return false;
	},

	/**
	 * Creates a new array with the results of calling a provided function on every element in this array.
	 *
	 * Implementation from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/map
	 *
	 * @param {Function} callback Function that produces an element of the new Array from an element of the current one.
	 * @param {Object=} thisp Object to use as this when executing fun.
	 *
	 * @return {Boolean} New array.
	 */
	map: function(callback/*, thisp*/ ) {
		var A, k;
		var thisp = arguments[1] || null;

		if (this == null) {
			throw new TypeError(" this is null or not defined");
		}

		var O = Object(this);
		var len = O.length >>> 0;

		if ({}.toString.call(callback) != "[object Function]") {
			throw new TypeError(callback + " is not a function");
		}

		A = new Array(len);
		k = 0;
		while(k < len) {
			var kValue, mappedValue;

			if (k in O) {
				kValue = O[ k ];
				mappedValue = callback.call(thisp, kValue, k, O);
				A[ k ] = mappedValue;
			}
			k++;
		}

		return A;
	},

	/**
	 * Apply a function against an accumulator and each value of the array (from left-to-right)
	 * as to reduce it to a single value.
	 *
	 * Implementation from https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/Reduce
	 *
	 * @param {Function} accumulator Function to execute on each value in the array.
	 * @param {Object=} initial Object to use as the first argument to the first call of the callback.
	 *
	 * @return {Object} Result of function application.
	 */
	reduce: function(accumulator/*, initial */) {
		var i, l = Number(this.length), curr;
		
		if (typeof accumulator !== "function") { // ES5 : "If IsCallable(callbackfn) is false, throw a TypeError exception."
			throw new TypeError("First argument is not callable");
		}

		if (l === 0) {
			if (arguments.length > 1) {
				return arguments[1];
			} else {
				throw new TypeError("No initial value for empty array");
			}
		}

		if (l === null && (arguments.length <= 1)) {// == on purpose to test 0 and false.
			throw new TypeError("Array length is 0 and no second argument");
		}
		
		if (arguments.length <= 1) {
			curr = this[0]; // Increase i to start searching the secondly defined element in the array
			i = 1; // start accumulating at the second element
		} else {
			curr = arguments[1];
		}
		
		for (i = i || 0 ; i < l ; ++i) {
			if(i in this) {
				curr = accumulator.call(undefined, curr, this[i], i, this);
			}
		}
		
		return curr;
	},

	/**
	 * Apply a function simultaneously against two values of the array (from right-to-left)
	 * as to reduce it to a single value.
	 *
	 * @param {Function} callbackfn Function to execute on each value in the array.
	 * @param {Object=} initial Object to use as the first argument to the first call of the callback.
	 *
	 * @return {Object} Result of function application.
	 */
	reduceRight: function(callbackfn/*, initial */) {
		if (this === void 0 || this === null) {
			throw new TypeError();
		}

		var t = Object(this);
		var len = t.length >>> 0;
		if (typeof callbackfn !== "function") {
			throw new TypeError();
		}

		// no value to return if no initial value, empty array
		if (len === 0 && arguments.length === 1)
			throw new TypeError();

		var k = len - 1;
		var accumulator;
		if (arguments.length >= 2) {
			accumulator = arguments[1];
		} else {
			do {
				if (k in this) {
					accumulator = this[k--];
					break;
				}

				// if array contains no values, no initial value to return
				if (--k < 0) {
					throw new TypeError();
				}
			} while (true);
		}

		while (k >= 0) {
			if (k in t) {
				accumulator = callbackfn.call(undefined, accumulator, t[k], k, t);
			}
			k--;
		}

		return accumulator;
	}
});

/* ajax */
var XMLHttpRequest = XMLHttpRequest || window.ActiveXObject && function(){
	return new ActiveXObject('Msxml2.XMLHTTP');
};

//dom.js
/* DOM class */
DOM = {
	getElement: function(e){
		return (typeof e == "string" || typeof e == "number") ? document.getElementById(e) : e;
	},

	addEventListener: function(e, eventName, func, useCapture){
		if(e.addEventListener)
			e.addEventListener(eventName, func, useCapture); else if(e.attachEvent)
			e.attachEvent('on' + eventName, func); else
			e['on' + eventName] = func;
	},

	removeEventListener: function(e, eventName, func, useCapture){
		if(e.removeEventListener)
			e.removeEventListener(eventName, func, useCapture); else if(e.detachEvent)
			e.detachEvent('on' + eventName, func); else
			e['on' + eventName] = undefined;
	},

	/* style */
	getComputedStyle: function(node){
		if(node.currentStyle){
			return node.currentStyle;
		}
		var defaultView = node.ownerDocument.defaultView;
		if(defaultView && defaultView.getComputedStyle){
			return defaultView.getComputedStyle(node, null);
		}
	},

	// given a window (or defaulting to current window), returns
	// object with .x and .y of client's usable area
	getClientDimensions: function(w){
		if(!w)
			w = window;

		var d = {};

		// most browsers
		if(w.innerHeight){
			d.x = w.innerWidth;
			d.y = w.innerHeight;
			return d;
		}

		// IE6, strict
		var de = w.document.documentElement;
		if(de && de.clientHeight){
			d.x = de.clientWidth;
			d.y = de.clientHeight;
			return d;
		}

		// IE, misc
		if(document.body){
			d.x = document.body.clientWidth;
			d.y = document.body.clientHeight;
			return d;
		}

		return undefined;
	},

	getDimensions: function(e){
		if(!e)
			return undefined;

		var style = DOM.getComputedStyle(e);

		return {
			offsetLeft: e.offsetLeft,
			offsetTop: e.offsetTop,
			offsetWidth: e.offsetWidth,
			offsetHeight: e.offsetHeight,
			clientWidth: e.clientWidth,
			clientHeight: e.clientHeight,

			offsetRight: e.offsetLeft + e.offsetWidth,
			offsetBottom: e.offsetTop + e.offsetHeight,
			clientLeft: finiteInt(style.borderLeftWidth) + finiteInt(style.paddingLeft),
			clientTop: finiteInt(style.borderTopWidth) + finiteInt(style.paddingTop),
			clientRight: e.clientLeft + e.clientWidth,
			clientBottom: e.clientTop + e.clientHeight
		};
	},

	getAbsoluteDimensions: function(e){
		var d = DOM.getDimensions(e);
		if(!d)
			return d;
		d.absoluteLeft = d.offsetLeft;
		d.absoluteTop = d.offsetTop;
		d.absoluteRight = d.offsetRight;
		d.absoluteBottom = d.offsetBottom;
		var bork = 0;
		while(e){
			try{ // IE 6 sometimes gives an unwarranted error ("htmlfile: Unspecified error").
				e = e.offsetParent;
			} catch (err){
				if(++bork > 25)
					return null;
			}
			if(!e)
				return d;
			d.absoluteLeft += e.offsetLeft;
			d.absoluteTop += e.offsetTop;
			d.absoluteRight += e.offsetLeft;
			d.absoluteBottom += e.offsetTop;
		}
		return d;
	},


	setLeft: function(e, v){
		e.style.left = finiteInt(v) + "px";
	},
	setTop: function(e, v){
		e.style.top = finiteInt(v) + "px";
	},
	setWidth: function(e, v){
		e.style.width = Math.max(0, finiteInt(v)) + "px";
	},
	setHeight: function(e, v){
		e.style.height = Math.max(0, finiteInt(v)) + "px";
	},

	getWindowScroll: function(w){
		var s = {
			left: 0,
			top: 0
		}

		if(!w) w = window;
		var d = w.document;
		var de = d.documentElement;

		// most browsers
		if(w.pageXOffset !== undefined){
			s.left = w.pageXOffset;
			s.top = w.pageYOffset;
		}

		// ie
		else if(de && de.scrollLeft !== undefined){
			s.left = de.scrollLeft;
			s.top = de.scrollTop;
		}

		// safari
		else if(w.scrollX !== undefined){
			s.left = w.scrollX;
			s.top = w.scrollY;
		}

		// opera
		else if(d.body && d.body.scrollLeft !== undefined){
			s.left = d.body.scrollLeft;
			s.top = d.body.scrollTop;
		}

		return s;
	},

	getAbsoluteCursorPosition: function(event){
		event = event || window.event;
		var s = DOM.getWindowScroll(window);
		return {
			x: s.left + event.clientX,
			y: s.top + event.clientY
		};
	},

	/* dom methods */
	filterElementsByClassName: function(es, className){
		var filtered = [];
		for(var i = 0; i < es.length; i++){
			var e = es[ i ];
			if(DOM.hasClassName(e, className))
				filtered[ filtered.length ] = e;
		}
		return filtered;
	},

	filterElementsByAttribute: function(es, attr){
		if(!es)
			return [];
		if(!attr)
			return es;
		var filtered = [];
		for(var i = 0; i < es.length; i++){
			var element = es[ i ];
			if(!element)
				continue;
			if(element.getAttribute && ( element.getAttribute(attr) ))
				filtered[ filtered.length ] = element;
		}
		return filtered;
	},

	filterElementsByTagName: function(es, tagName){
		if(tagName == "*")
			return es;
		var filtered = [];
		tagName = tagName.toLowerCase();
		for(var i = 0; i < es.length; i++){
			var e = es[ i ];
			if(e.tagName && e.tagName.toLowerCase() == tagName)
				filtered[ filtered.length ] = e;
		}
		return filtered;
	},

	// private
	getElementsByTagAndAttribute: function(root, tagName, attr){
		if(!root)
			root = document;
		var es = root.getElementsByTagName(tagName);
		return DOM.filterElementsByAttribute(es, attr);
	},

	getElementsByAttributeAndValue: function(root, attr, value){
		var es = DOM.getElementsByTagAndAttribute(root, "*", attr);
		var filtered = [];
		for(var i = 0; i < es.length; i++)
			if(es[ i ].getAttribute(attr) == value)
				filtered.push(es[ i ]);
		return filtered;
	},

	getElementsByTagAndClassName: function(root, tagName, className){
		if(!root)
			root = document;
		var elements = root.getElementsByTagName(tagName);
		return DOM.filterElementsByClassName(elements, className);
	},

	getElementsByClassName: function(root, className){
		return DOM.getElementsByTagAndClassName(root, "*", className);
	},

	getAncestors: function(n, includeSelf){
		if(!n)
			return [];
		var as = includeSelf ? [ n ] : [];
		n = n.parentNode;
		while(n){
			as.push(n);
			n = n.parentNode;
		}
		return as;
	},

	getAncestorsByClassName: function(n, className, includeSelf){
		var es = DOM.getAncestors(n, includeSelf);
		return DOM.filterElementsByClassName(es, className);
	},

	getFirstAncestorByClassName: function(n, className, includeSelf){
		return DOM.getAncestorsByClassName(n, className, includeSelf)[ 0 ];
	},

	hasClassName: function(e, className){
		if(!e || !e.className)
			return false;
		var cs = e.className.split(/\s+/g);
		for(var i = 0; i < cs.length; i++){
			if(cs[ i ] == className)
				return true;
		}
		return false;
	},

	addClassName: function(e, className){
		if(!e || !className)
			return false;
		var cs = e.className.split(/\s+/g);
		for(var i = 0; i < cs.length; i++){
			if(cs[ i ] == className)
				return true;
		}
		cs.push(className);
		e.className = cs.join(" ");
		return false;
	},

	removeClassName: function(e, className){
		var r = false;
		if(!e || !e.className || !className)
			return r;
		var cs = (e.className && e.className.length) ? e.className.split(/\s+/g) : [];
		var ncs = [];
		for(var i = 0; i < cs.length; i++){
			if(cs[ i ] == className){
				r = true;
				continue;
			}
			ncs.push(cs[ i ]);
		}
		if(r)
			e.className = ncs.join(" ");
		return r;
	},

	getSelectedRange: function(node){
		var start = 0,
			end = 0;
		if('selectionStart' in node){
			start = node.selectionStart;
			end = node.selectionEnd;
		} else if(node.createTextRange){
			var range = document.selection.createRange();
			if(range.parentElement() == node){
				var dup = range.duplicate();

				if(node.type == 'text'){
					node.focus();
					start = -dup.moveStart('character', -node.value.length);
					end = start + range.text.length;
				} else {// textarea
					var rex = /\r/g;
					dup.moveToElementText(node);
					dup.setEndPoint('EndToStart', range);
					start = dup.text.replace(rex, '').length;
					dup.setEndPoint('EndToEnd', range);
					end = dup.text.replace(rex, '').length;
					dup = document.selection.createRange();
					dup.moveToElementText(node);
					dup.moveStart('character', start);
					while(dup.move('character', -dup.compareEndPoints('StartToStart', range))){
						start++;
					}
					dup.moveStart('character', end - start);
					while(dup.move('character', -dup.compareEndPoints('StartToEnd', range))){
						end++;
					}
				}

			}
		}

		return {
			start: start,
			end: end
		}
	},

	setSelectedRange: function(node, start, end){
		// see https://bugzilla.mozilla.org/show_bug.cgi?id=265159
		node.focus();
		if(node.setSelectionRange){
			node.setSelectionRange(start, end);
		}
		// IE, "else" for opera 10
		else if(document.selection && document.selection.createRange){
			var range = node.createTextRange();
			range.collapse(true);
			range.moveEnd('character', end);
			range.moveStart('character', start);
			range.select();
		}
	}
};

$ = DOM.getElement;



//httpreq.js

// opts:
// url, onError, onData, method (GET or POST), data
// url: where to get/post to
// onError: callback on error
// onData: callback on data received
// method: HTTP method, GET by default
// data: what to send to the server (urlencoded)
HTTPReq = {
	getJSON: function(opts){
		var req = new XMLHttpRequest();

		var state_callback = function(){
			if(req.readyState != 4) return;

			if(req.status != 200){
				if(opts.onError) opts.onError(req.status ? "status: " + req.status : "no data");
				return;
			}

			var resObj;
			var e;
			try{
				eval("resObj = " + req.responseText + ";");
			} catch (e){
			}

			if(e || ! resObj){
				if(opts.onError)
					opts.onError("Error parsing response: \"" + req.responseText + "\"");

				return;
			}

			if(opts.onData)
				opts.onData(resObj);
		};

		req.onreadystatechange = state_callback;

		var method = opts.method || "GET";
		var data = opts.data || null;

		var url = opts.url;
		if(opts.method == "GET" && opts.data){
			url += url.match(/\?/) ? "&" : "?";
			url += opts.data
		}

		url += url.match(/\?/) ? "&" : "?";
		url += "_rand=" + Math.random();

		req.open(method, url, true);

		// we should send null unless we're in a POST
		var to_send = null;

		if(method.toUpperCase() == "POST"){
			req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
			to_send = data;
		}

		req.send(to_send);
	},

	formEncoded: function(vars){
		var enc = [];
		var e;
		for(var key in vars){
			enc.push(encodeURIComponent(key) + "=" + encodeURIComponent(vars[key]));
		}
		return enc.join("&");
	}
};

// This file contains general-purpose LJ code
LiveJournal = {
	hooks: {} // The hook mappings
};

LiveJournal.register_hook = function (hook, func) {
	if (! LiveJournal.hooks[hook]) {
		LiveJournal.hooks[hook] = [];
	}

	LiveJournal.hooks[hook].push(func);
};

// args: hook, params to pass to hook
LiveJournal.run_hook = function () {
	var hookfuncs = LiveJournal.hooks[arguments[0]];
	if (!hookfuncs || !hookfuncs.length) {
		return;
	}

	var hookargs = [].slice.call(arguments, 1);

	var rv = null;

	hookfuncs.forEach(function (hookfunc) {
		rv = hookfunc.apply(null, hookargs);
	});

	return rv;
};

LiveJournal.initPage = function () {
	//register system hooks
	LiveJournal.register_hook('update_wallet_balance', LiveJournal.updateWalletBalance);
	LiveJournal.register_hook('xdr/message', LiveJournal.processXdr);

	// set up various handlers for every page
	LiveJournal.initInboxUpdate();

	LiveJournal.initNotificationStream();
	LiveJournal.initSpoilers();

	//ljuniq cookie is checked in PageStats/Omniture.pm now

	// run other hooks
	LiveJournal.run_hook('page_load');
};

jQuery(LiveJournal.initPage);

/**
 * Spoilers functionality - expand hidden text in posts when user clicks on corresponding link
 */
LiveJournal.initSpoilers = function() {
	jQuery(document).delegate('.lj-spoiler > .lj-spoiler-head a', 'click', function (evt) {
		evt.preventDefault();
		jQuery(this).closest('.lj-spoiler').toggleClass('lj-spoiler-opened');
	});
};

/**
 * Init long-polling connection to the server.
 * Now function can be used for testing purposes and
 * should be modified for any real use. E.g. it could be
 * used as an adapter to the Socket.IO
 */
LiveJournal.initNotificationStream = function(force) {
	force = force || false;
	var abortNotifications = false, seed = Site.notifySeed || 0;

	if (Site.notifyDisabled || (!Cookie('ljnotify') && !force && (Math.random() > seed))) {
		return;
	}

	if (!Cookie('ljnotify')) {
		Cookie('ljnotify', '1', {
			domain: Site.siteroot.replace(/^https?:\/\/www\./, ''),
			expires: 5000,
			path: '/'
		});
	}

	LiveJournal.register_hook('notification.stop', function() {
		abortNotifications = true;
	});

	function requestRound() {
		if (abortNotifications) {
			return;
		}

		jQuery.get(LiveJournal.getAjaxUrl('notifications'), 'json').success(
			function(data) {
				//if it's not a notification than it is a timeout answer
				if (data.type === 'notification') {
					LiveJournal.run_hook(data.name, data.params || []);
				}
				requestRound();
			}).error(function() {
				requestRound()
			});
	}

	requestRound();
};

/**
 * Translate message from xdreceiver. The function will eventually be run
 *		from xdreceiver.html helper frame to send messages between different domains.
 *
 * @param {Object} message Object with the message. Object should always contain type field with event name
 */
LiveJournal.processXdr = function(message) {
	if (message.type) {
		var type = decodeURIComponent(message.type);
	} else {
		return;
	}

	var messageCopy = {};
	for (var name in message) {
		if (message.hasOwnProperty(name) && name !== 'type') {
			messageCopy[name] = decodeURIComponent(message[name]);
		}
	}

	LiveJournal.run_hook(type, messageCopy);
};

// Set up a timer to keep the inbox count updated
LiveJournal.initInboxUpdate = function () {
	// Don't run if not logged in or this is disabled
	if (! Site || ! Site.has_remote || ! Site.inbox_update_poll) {
		return;
	}

	// Don't run if no inbox count
	if (!$('LJ_Inbox_Unread_Count')) {
		return;
	}

	// Update every five minutes
	window.setInterval(LiveJournal.updateInbox, 1000 * 60 * 5);
};

// Do AJAX request to find the number of unread items in the inbox
LiveJournal.updateInbox = function () {

	jQuery.post(LiveJournal.getAjaxUrl('esn_inbox'), {
		action: 'get_unread_items'
	}, function(resp) {
		if (! resp || resp.error) {
			return;
		}

		var unread = $('LJ_Inbox_Unread_Count');
		if (unread) {
			unread.innerHTML = resp.unread_count ? '  (' + resp.unread_count + ')' : '';
		} else {
			unread = $('LJ_Inbox_Unread_Count_Controlstrip');
			if (unread) {
				unread.innerHTML = resp.unread_count ? resp.unread_count : '0';
			}
		}
	}, 'json');
};

//refresh number of tokens in the header
LiveJournal.updateWalletBalance = function () {
	jQuery.get(LiveJournal.getAjaxUrl('get_balance'), function(resp) {
		if (! resp || resp.status != 'OK') {
			return;
		}
		var newBalance = resp.balance ? parseInt(resp.balance, 10) : 0;

		var balance = $('LJ_Wallet_Balance');
		if (balance) {
			if (resp.balance) {
				balance.innerHTML = balance.innerHTML.replace(/\d+/, newBalance);
			} else {
				balance.innerHTML = '';
			}
		} else {
			balance = $('LJ_Wallet_Balance_Controlstrip');
			if (balance) {
				balance.innerHTML = newBalance;
			}
		}
	}, 'json');
};

// handy utilities to create elements with just text in them
function _textSpan() {
	return _textElements('span', arguments);
}
function _textDiv() {
	return _textElements('div', arguments);
}

function _textElements(eleType, txts) {
	var ele = [];
	for (var i = 0; i < txts.length; i++) {
		var node = document.createElement(eleType);
		node.innerHTML = txts[i];
		ele.push(node);
	}

	return ele.length == 1 ? ele[0] : ele;
}

LiveJournal.pollAnswerClick = function(e, data) {
	if (!data.pollid || !data.pollqid) {
		return false;
	}

	var xhr = jQuery.post(LiveJournal.getAjaxUrl('poll'), {
		pollid	 : data.pollid,
		pollqid	 : data.pollqid,
		page		 : data.page,
		pagesize : data.pagesize,
		action	 : 'get_answers'
	}, function(data, status) {
		status == 'success' ? LiveJournal.pollAnswersReceived(data) : LiveJournal.ajaxError(data);
	}, 'json');

	jQuery(e).hourglass(xhr);

	return false;
};

LiveJournal.pollAnswersReceived = function(answers) {
	if (!answers || !answers.pollid || !answers.pollqid) {
		return;
	}

	if (answers.error) {
		return LiveJournal.ajaxError(answers.error);
	}

	var id = '#LJ_Poll_' + answers.pollid + '_' + answers.pollqid,
		to_remove = '.LJ_PollAnswerLink, .lj_pollanswer, .lj_pollanswer_paging',
		html = '<div class="lj_pollanswer">' + (answers.answer_html || '(No answers)') + '</div>';

	answers.paging_html && (html += '<div class="lj_pollanswer_paging">' + answers.paging_html + '</div>');

	jQuery(id)
		.find(to_remove)
		.remove()
		.end()
		.prepend(html)
		.find('.lj_pollanswer')
		.ljAddContextualPopup();
};

// gets a url for doing ajax requests
LiveJournal.getAjaxUrl = function(action, params) {
	// if we are on a journal subdomain then our url will be
	// /journalname/__rpc_action instead of /__rpc_action
	var uselang = LiveJournal.parseGetArgs(location.search).uselang;
	if (uselang) {
		action += '?uselang=' + uselang;
	}
	if (params) {
		action += (uselang ? '&' : '?') + jQuery.param(params);
	}

	return Site.currentJournal ? '/' + Site.currentJournal + '/__rpc_' + action : '/__rpc_' + action;
};

// generic handler for ajax errors
LiveJournal.ajaxError = function (err) {
	if (LJ_IPPU) {
		LJ_IPPU.showNote('Error: ' + err);
	} else {
		alert('Error: ' + err);
	}
};

// given a URL, parse out the GET args and return them in a hash
LiveJournal.parseGetArgs = function (url) {
	url = url || window.location.href;
	url = url.replace(/#.*$/, '');

	var getArgsHash = {};

	var urlParts = url.split('?');
	if (!urlParts[1]) {
		return getArgsHash;
	}
	var getArgs = urlParts[1].split('&');

	for (var arg = 0; arg < getArgs.length; arg++) {
		var pair = getArgs[arg].split('=');
		getArgsHash[pair[0]] = pair[1];

	}

	return getArgsHash;
};

/**
 * Construct an url from base string and params object.
 *
 * @param {String} base Base string.
 * @param {Object} args Object with arguments, that have to be passed with the url.
 * @return {String}
 */
LiveJournal.constructUrl = function(base, args, escapeArgs) {
	var queryStr = base + ( base.indexOf('?') === -1 ? '?' : '&' ), queryArr = [];

	for (var i in args) {
		queryArr.push(i + '=' + ( ( escapeArgs ) ? encodeURIComponent(args[i]) : args[i] ));
	}

	return queryStr + queryArr.join('&');
};

/**
 * Generate a string for ljuniq cookie
 *
 * @return {String}
 */
LiveJournal.generateLjUniq = function() {
	var alpha = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789', result = '', i;

	var len = 15;
	for (i = 0; i < len; ++i) {
		result += alpha.charAt(Math.floor(Math.random() * ( alpha.length - 1 )));
	}

	result += ':' + Math.floor((new Date()) / 1000);
	result += ':pgstats' + ( ( Math.random() < 0.05 ) ? '1' : '0' );

	return result;
};

LiveJournal.checkLjUniq = function() {
	if (!Cookie('ljuniq')) {
		Cookie('ljuniq', LiveJournal.generateLjUniq(), {
				domain: Site.siteroot.replace(/^https?:\/\/www\./, ''),
				expires: 5000,
				path: '/'
			});
	}
};

LiveJournal.closeSiteMessage = function(node, e, id) {
	jQuery.post(LiveJournal.getAjaxUrl('close_site_message'), {
		messageid: id
	}, function(data, status) {
		if (status === 'success') {
			jQuery(node.parentNode.parentNode.parentNode).replaceWith(data.substitude);
		} else {
			LiveJournal.ajaxError(data);
		}
	}, 'json');
};

LiveJournal.parseLikeButtons = function() {
	try {
		FB.XFBML.parse();
	} catch(e) {}

	try {
		if (jQuery.browser.msie) {
			var replaceNode, attrs, j, node;
			var nodes = document.body.getElementsByTagName('plusone');

			for (var i = 0, l = nodes.length; i < l; ++i) {
				replaceNode = document.createElement('g:plusone');
				node = nodes[i];
				attrs = node.attributes;

				for (j = 0; j < attrs.length; ++j) {
					if (attrs[j].specified) {
						replaceNode.setAttribute(attrs[j].nodeName, attrs[j].nodeValue);
					}
				}

				node.parentNode.replaceChild(replaceNode, node);
			}
		}

		gapi.plusone.go();
	} catch(e) {}

	jQuery('a.twitter-share-button').each(function() {
		if (this.href != 'http://twitter.com/share') {
			return;
		}

		var link = jQuery(this), params = {
			url: link.attr('data-url'),
			text: link.attr('data-text'),
			count: link.attr('data-count'),
			lang: link.attr('data-lang')
		};

		link.replaceWith(jQuery('<iframe frameborder="0" scrolling="no" allowtransparency="true" />').css({
			width: '110px',
			height: '20px'
		})
		.attr('src', LiveJournal.constructUrl('http://platform.twitter.com/widgets/tweet_button.html', params))
		.insertBefore(link));
	});
};

/**
 * Insert script in the document.
 *
 * @param {String} url Url of the script
 * @param {Object=} params Data to apply to the scipt node object, e.g. async, text.
 * @param {Node=} parent If exists, script tag will be inserted in this node or before the
 *		 first script tag otherwise.
 */
LiveJournal.injectScript = function(url, params, parent) {

	function loadScript() {
		var defaults = {
			async: true
		};

		params = params || {};
		params = jQuery.extend({}, defaults, params);

		var e = document.createElement('script');
		e.src = url;

		for (var i in params) {
			if (params.hasOwnProperty(i)) {
				e[i] = params[i];
			}
		}

		if (parent) {
			parent.appendChild(e);
		} else {
			s = document.getElementsByTagName('script')[0];
			s.parentNode.insertBefore(e, s);
		}
	}

	//opera doesn't support async attribute, so we load the scrips on onload event to display page faster
	if (jQuery.browser.opera) {
		jQuery(loadScript);
	} else {
		loadScript();
	}
};

LiveJournal.getLocalizedStr = function(key, dict, def) {
	dict = dict || {};
	var str = '';
	if (key in Site.ml_text) {
		str = Site.ml_text[ key ];

		for (var tmpl in dict) {
			str = str.replace('%' + tmpl + '%', dict[ tmpl ]);
		}
	} else {
		str = def || '[' + key + ']';
	}

	return str;
};

LiveJournal.JSON = function() {
	/**
	 * Formats integers to 2 digits.
	 * @param {number} n
	 * @private
	 */
	function f(n) {
		return n < 10 ? '0' + n : n;
	}

	Date.prototype.toJSON = function() {
		return [this.getUTCFullYear(), '-',
			f(this.getUTCMonth() + 1), '-',
			f(this.getUTCDate()), 'T',
			f(this.getUTCHours()), ':',
			f(this.getUTCMinutes()), ':',
			f(this.getUTCSeconds()), 'Z'].join('');
	};

	// table of character substitutions
	/**
	 * @const
	 * @enum {string}
	 */
	var m = {
		'\b': '\\b',
		'\t': '\\t',
		'\n': '\\n',
		'\f': '\\f',
		'\r': '\\r',
		'"' : '\\"',
		'\\': '\\\\'
	};

	/**
	 * Converts a json object into a string.
	 * @param {*} value
	 * @return {string}
	 * @member gadgets.json
	 */
	function stringify(value) {
		var a, // The array holding the partial texts.
			i, // The loop counter.
			k, // The member key.
			l, // Length.
			r = /["\\\x00-\x1f\x7f-\x9f]/g, v;					// The member value.

		switch (typeof value) {
			case 'string':
				// If the string contains no control characters, no quote characters, and no
				// backslash characters, then we can safely slap some quotes around it.
				// Otherwise we must also replace the offending characters with safe ones.
				return r.test(value) ? '"' + value.replace(r, function(a) {
					var c = m[a];
					if (c) {
						return c;
					}
					c = a.charCodeAt();
					return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
				}) + '"' : '"' + value + '"';
			case 'number':
				// JSON numbers must be finite. Encode non-finite numbers as null.
				return isFinite(value) ? String(value) : 'null';
			case 'boolean':
			case 'null':
				return String(value);
			case 'object':
				// Due to a specification blunder in ECMAScript,
				// typeof null is 'object', so watch out for that case.
				if (!value) {
					return 'null';
				}
				// toJSON check removed; re-implement when it doesn't break other libs.
				a = [];
				if (typeof value.length === 'number' && !value.propertyIsEnumerable('length')) {
					// The object is an array. Stringify every element. Use null as a
					// placeholder for non-JSON values.
					l = value.length;
					for (i = 0; i < l; i += 1) {
						a.push(stringify(value[i]) || 'null');
					}
					// Join all of the elements together and wrap them in brackets.
					return '[' + a.join(',') + ']';
				}
				// Otherwise, iterate through all of the keys in the object.
				for (k in value) {
					if (k.match('___$')) {
						continue;
					}
					if (value.hasOwnProperty(k)) {
						if (typeof k === 'string') {
							v = stringify(value[k]);
							if (v) {
								a.push(stringify(k) + ':' + v);
							}
						}
					}
				}
				// Join all of the member texts together and wrap them in braces.
				return '{' + a.join(',') + '}';
		}
		return '';
	}

	return window.JSON || {
		'stringify': stringify,
		'parse': function(text) {
			// Parsing happens in three stages. In the first stage, we run the text against
			// regular expressions that look for non-JSON patterns. We are especially
			// concerned with '()' and 'new' because they can cause invocation, and '='
			// because it can cause mutation. But just to be safe, we want to reject all
			// unexpected forms.

			// We split the first stage into 4 regexp operations in order to work around
			// crippling inefficiencies in IE's and Safari's regexp engines. First we
			// replace all backslash pairs with '@' (a non-JSON character). Second, we
			// replace all simple value tokens with ']' characters. Third, we delete all
			// open brackets that follow a colon or comma or that begin the text. Finally,
			// we look to see that the remaining characters are only whitespace or ']' or
			// ',' or ':' or '{' or '}'. If that is so, then the text is safe for eval.

			if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/b-u]/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
				return eval('(' + text + ')');
			}
			// If the text is not JSON parseable, then return false.

			return false;
		}
	};
}();

/**
 * Check if site if browsed by mobile device
 *
 */
LiveJournal.isMobile = function() {
	var agent = navigator.userAgent || navigator.vendor || window.opera, isMobile = /android.+(mobile|transformer)|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|opera m(ob|in)i|opera tablet|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(agent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(agent.substr(0, 4));

	var forceMobile = false, item;
	if (window.localStorage) {
		item = localStorage.getItem('forceMobile');
		forceMobile = item === '1';
	}
	return function() {
		return forceMobile || isMobile;
	}
}();



/*!
 * jQuery storage plugin.
 * @author Dmitry Petrov <Dmitry.Petrov@sup.com>, 2011
 *
 * Plugin uses local storage if availible and falls back to IE userData mechanism.
 *
 * @TODO: add cookie and simple ( non-persistent ) storage providers.
 *
 * Plugin supports IE5.5+, Firefox 3.5+, Opera 10.5+, Google Chrome, Apple Safari 4+
 */
( function( $ ) {

    var JSON = window.JSON || LiveJournal.JSON;

    function stringify(val) {
        return JSON.stringify(val);
    }

    function parse(val) {
        var ret;

        try {
            ret = JSON.parse(val);
        } catch(e) {
            ret = val;
        }

        return ret;
    }


    /**
     * @namespace $.storage
     */
    $.storage = function() {
        
        /**
         * Every provider should have the same interface and provide isSupported function to
         * test if it's applicable in current browser
         */
        var userDataProvider = function() {
            var storageId = 'jQueryStorageProvider',
                storageName = '__jQueryStorage__',
                node;

            function _create()  {
                node = $( '<link>' ).attr( 'id', storageId ).css( 'display', 'none' ).appendTo( $( 'head' ) ).get(0);
                node.addBehavior( '#default#userdata' );
                node.load( storageName );
            }

            //LJSUP-11805: IE does not allow special symbols as attribute names
            function _normalize(name) {
                return name.replace(/[^0-9a-z_-]/ig, '_');
            };


            _create();

            return {
                /**
                 * Set item in the storage
                 *
                 * @param {String} name
                 * @param {String} val
                 */
                setItem: function( name, val ) {
                    node.setAttribute(_normalize(name), stringify(val) );
                    node.save( storageName );
                },
                /**
                 * Get item from the storage.
                 *
                 * @param {String} Item name.
                 * @return {Object|String} Item value or null it it does not exist.
                 */
                getItem: function( name ) {
                    return parse(node.getAttribute(_normalize(name)));
                },
                /**
                 * Remove item from the storage
                 *
                 * @param @{String} Item name.
                 */
                removeItem: function( name ) {
                    node.removeAttribute( name );
                    node.save( storageName );
                }
            }
        };

        userDataProvider.isSupported = function() { return $.browser.msie && ( +$.browser.version ) > 5; };

        var localStorageProvider = function() {
            function _create()  {
            }

            _create();

            return {
                setItem: function(name, val) {
                    localStorage.setItem(name, stringify(val));
                },
                getItem: function(name) {
                    return parse(localStorage.getItem(name));
                },
                removeItem: function( name ) {
                    localStorage.removeItem(name);
                }
            }
        };

        localStorageProvider.isSupported = function() { return !!window.localStorage; };

        var simpleProvider = function() {
            var store;
            function _create()  {
                store = {};
            }

            _create();

            return {
                setItem: function( name, val ) {
                    store.name = val;
                },
                getItem: function( name ) {
                    return store.name || null;
                },
                removeItem: function( name ) {
                    delete store.name;
                }
            }
        };

        simpleProvider.isSupported = function() { return true; };

        //currently all transports should be implemented inside plugin.
        var providers = [ localStorageProvider, userDataProvider, simpleProvider ];

        for( var i = 0; i < providers.length; ++i ) {
            if( providers[ i ].isSupported() ) {
                return providers[ i ]();
            }
        }

        //We should never reach this point.
    }();

} ) ( jQuery );

var ESN = new Object();

// When page loads, set up "check all" checkboxes
ESN.initCheckAllBtns = function () {
  var ntids  = $("ntypeids");
  var catids = $("catids");

  if (!ntids || !catids)
    return;

  ntidList  = ntids.value;
  catidList = catids.value;

  if (!ntidList || !catidList)
    return;

  ntids  = ntidList.split(",");
  catids = catidList.split(",");

  catids.forEach( function (catid) {
    ntids.forEach( function (ntypeid) {
      var className = "SubscribeCheckbox-" + catid + "-" + ntypeid;

      var cab = new CheckallButton();
      cab.init({
        "class": className,
          "button": $("CheckAll-" + catid + "-" + ntypeid),
          "parent": $("CategoryRow-" + catid)
          });
    });
  });
}

// attach event handlers to all track buttons
ESN.initTrackBtns = function (node) {
    // don't do anything if no remote
    if (!Site.has_remote) return;

    node = node || document;
    var trackBtns = DOM.getElementsByTagAndClassName(node, 'img', 'TrackButton');

    trackBtns.forEach(function (trackBtn) {
        if (!trackBtn || !trackBtn.getAttribute) return;

        if (!trackBtn.getAttribute("lj_subid") && !trackBtn.getAttribute("lj_journalid")) return;
        if (trackBtn.getAttribute("lj_dtalkid") && !Site.remote_can_track_threads) return;

        DOM.addEventListener(trackBtn, 'click', ESN.trackBtnClickHandler.bindEventListener(trackBtn));
    });
};

ESN.trackBtnClickHandler = function (evt) {
    var trackBtn = evt.target;
    if (! trackBtn || trackBtn.tagName.toLowerCase() != "img") return true;

    Event.stop(evt);

    var btnInfo = {};

    ['arg1', 'arg2', 'etypeid', 'newentry_etypeid', 'newentry_token', 'newentry_subid',
     'journalid', 'subid', 'auth_token'].forEach(function (arg) {
        btnInfo[arg] = trackBtn.getAttribute("lj_" + arg);
    });

    // pop up little dialog to either track by inbox/email or go to more options
    var dlg = document.createElement("div");
    var title = _textDiv("Email me when");
    DOM.addClassName(title, "track_title");
    dlg.appendChild(title);

    var TrackCheckbox = function (title, checked) {
        var checkContainer = document.createElement("div");

        var newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.id = "newentrytrack" + Unique.id();
        var newCheckboxLabel = document.createElement("label");
        newCheckboxLabel.setAttribute("for", newCheckbox.id);
        newCheckboxLabel.innerHTML = title;

        checkContainer.appendChild(newCheckbox);
        checkContainer.appendChild(newCheckboxLabel);
        dlg.appendChild(checkContainer);

        newCheckbox.checked = checked ? true : false;

        return newCheckbox;
    };

    // global trackPopup so we can only have one
    if (ESN.trackPopup) {
        ESN.trackPopup.hide();
        ESN.trackPopup = null;
    }

    var saveChangesBtn = document.createElement("input");
    saveChangesBtn.type = "button";
    saveChangesBtn.value = "Save Changes";
    DOM.addClassName(saveChangesBtn, "track_savechanges");

    var trackingNewEntries  = Number(btnInfo['newentry_subid']) ? 1 : 0;
    var trackingNewComments = Number(btnInfo['subid']) ? 1 : 0;

    var newEntryTrackBtn;
    var commentsTrackBtn;

    if (trackBtn.getAttribute("lj_dtalkid")) {
        // this is a thread tracking button
        // always checked: either because they're subscribed, or because
        // they're going to subscribe.
        commentsTrackBtn = TrackCheckbox("someone replies in this comment thread", 1);
    } else {
        // entry tracking button
		newEntryTrackBtn = TrackCheckbox(Site.currentJournal + ' posts a new entry', trackingNewEntries);
        commentsTrackBtn = TrackCheckbox("someone comments on this post", trackingNewComments);
    }

    DOM.addEventListener(saveChangesBtn, "click", function () {
        ESN.toggleSubscriptions(btnInfo, evt, trackBtn, {
            newEntry: newEntryTrackBtn ? newEntryTrackBtn.checked : false,
            newComments: commentsTrackBtn.checked
        });
        if (ESN.trackPopup) ESN.trackPopup.hide();
    });

    var btnsContainer = document.createElement("div");
    DOM.addClassName(btnsContainer, "track_btncontainer");
    dlg.appendChild(btnsContainer);

    btnsContainer.appendChild(saveChangesBtn);

    var custTrackLink = document.createElement("a");
    custTrackLink.href = trackBtn.parentNode.href;
    btnsContainer.appendChild(custTrackLink);
    custTrackLink.innerHTML = "More Options";
    DOM.addClassName(custTrackLink, "track_moreopts");

    ESN.trackPopup = new LJ_IPPU.showNoteElement(dlg, trackBtn, 0);

    DOM.addEventListener(custTrackLink, "click", function (evt) {
        Event.stop(evt);
        document.location.href = trackBtn.parentNode.href;
        if (ESN.trackPopup) ESN.trackPopup.hide();
        return false;
    });

    return false;
}

// toggles subscriptions
ESN.toggleSubscriptions = function (subInfo, evt, btn, subs) {
    subInfo["subid"] = Number(subInfo["subid"]);
    if ((subInfo["subid"] && ! subs["newComments"])
        || (! subInfo["subid"] && subs["newComments"])) {
        ESN.toggleSubscription(subInfo, evt, btn, "newComments");
    }

    subInfo["newentry_subid"] = Number(subInfo["newentry_subid"]);
    if ((subInfo["newentry_subid"] && ! subs["newEntry"])
        || (! subInfo["newentry_subid"] && subs["newEntry"])) {
            var newentrySubInfo = new Object(subInfo);
            newentrySubInfo["subid"] = Number(btn.getAttribute("lj_newentry_subid"));
            ESN.toggleSubscription(newentrySubInfo, evt, btn, "newEntry");
    }
};

// (Un)subscribes to an event
ESN.toggleSubscription = function (subInfo, evt, btn, sub) {
    var action = "";
    var params = {
        auth_token: sub == "newEntry" ? subInfo.newentry_token : subInfo.auth_token
    };

    if (Number(subInfo.subid)) {
        // subscription exists
        action = "delsub";
        params.subid = subInfo.subid;
    } else {
        // create a new subscription
        action = "addsub";

        var param_keys;
        if (sub == "newEntry") {
            params.etypeid = subInfo.newentry_etypeid;
            param_keys = ["journalid"];
        } else {
            param_keys = ["journalid", "arg1", "arg2", "etypeid"];
        }

        param_keys.forEach(function (param) {
            if (Number(subInfo[param]))
                params[param] = parseInt(subInfo[param]);
        });
    }

    params.action = action;

    var reqInfo = {
        "method": "POST",
        "url":    LiveJournal.getAjaxUrl('esn_subs'),
        "data":   HTTPReq.formEncoded(params)
    };

    var gotInfoCallback = function (info) {
        if (! info) return LJ_IPPU.showNote("Error changing subscription", btn);

        if (info.error) return LJ_IPPU.showNote(info.error, btn);

        if (info.success) {
            if (info.msg)
                LJ_IPPU.showNote(info.msg, btn);

            if (info.subscribed) {
                if (info.subid)
					btn.setAttribute('lj_subid', info.subid);
                if (info.newentry_subid)
					btn.setAttribute('lj_newentry_subid', info.newentry_subid);

				btn.setAttribute('title', 'Untrack This');

                // update subthread tracking icons
                var dtalkid = btn.getAttribute("lj_dtalkid");
                if (dtalkid)
                    ESN.updateThreadIcons(dtalkid, "on");
                else // not thread tracking button
                    btn.src = Site.imgprefix + "/btn_tracking.gif?v=17312";
            } else {
                if (info["event_class"] == "LJ::Event::JournalNewComment")
					btn.setAttribute('lj_subid', 0);
                else if (info["event_class"] == "LJ::Event::JournalNewEntry")
					btn.setAttribute('lj_newentry_subid', 0);

				btn.setAttribute('title', 'Track This');

                // update subthread tracking icons
                var dtalkid = btn.getAttribute("lj_dtalkid");
                if (dtalkid) {
                    // set state to "off" if no parents tracking this,
                    // otherwise set state to "parent"
                    var state = "off";
                    var parentBtn;
                    var parent_dtalkid = dtalkid;
                    while (parentBtn = ESN.getThreadParentBtn(parent_dtalkid)) {
                        parent_dtalkid = parentBtn.getAttribute("lj_dtalkid");
                        if (! parent_dtalkid) {
                            break;
                        }

                        if (! Number(parentBtn.getAttribute("lj_subid")))
                            continue;
                        state = "parent";
                        break;
                    }

                    ESN.updateThreadIcons(dtalkid, state);
                } else {
                    // not thread tracking button
                    btn.src = Site.imgprefix + "/btn_track.gif?v=17312";
                }
            }

            if (info.auth_token)
				btn.setAttribute('lj_auth_token', info.auth_token);
            if (info.newentry_token)
				btn.setAttribute('lj_newentry_token', info.newentry_token);
        }
    };

    reqInfo.onData = gotInfoCallback;
    reqInfo.onError = function (err) { LJ_IPPU.showNote("Error: " + err) };

    HTTPReq.getJSON(reqInfo);
};

// given a dtalkid, find the track button for its parent comment (if any)
ESN.getThreadParentBtn = function (dtalkid) {
    var cmtInfo = LJ_cmtinfo[dtalkid + ""];
    if (! cmtInfo) {
        return null;
    }

    var parent_dtalkid = cmtInfo.parent;
    if (! parent_dtalkid)
        return null;

    return $("lj_track_btn_" + parent_dtalkid);
};

// update all the tracking icons under a parent comment
ESN.updateThreadIcons = function (dtalkid, tracking) {
    var btn = $("lj_track_btn_" + dtalkid);
    if (! btn) {
        return;
    }

    var cmtInfo = LJ_cmtinfo[dtalkid + ""];
    if (! cmtInfo) {
        return;
    }

    if (Number(btn.getAttribute("lj_subid")) && tracking != "on") {
        // subscription already exists on this button, don't mess with it
        return;
    }

    if (cmtInfo.rc && cmtInfo.rc.length) {
        // update children
        cmtInfo.rc.forEach(function (child_dtalkid) {
            window.setTimeout(function () {
                var state;
                switch (tracking) {
                case "on":
                    state = "parent";
                    break;
                case "off":
                    state = "off";
                    break;
                case "parent":
                    state = "parent";
                    break;
                default:
                    alert("Unknown tracking state " + tracking);
                    break;
                }
                ESN.updateThreadIcons(child_dtalkid, state);
            }, 300);
        });
    }

    // update icon
    var uri;
    switch (tracking) {
        case "on":
            uri = "/btn_tracking.gif?v=17312";
            break;
        case "off":
            uri = "/btn_track.gif?v=17312";
            break;
        case "parent":
            uri = "/btn_tracking_thread.gif?v=17312";
            break;
        default:
            alert("Unknown tracking state " + tracking);
            break;
    }

    btn.src = Site.imgprefix + uri;
};

jQuery(function($)
{
	ESN.initCheckAllBtns();
	ESN.initTrackBtns();
	
	$('#settings_form').delegate('a.delete-group', 'click', function(e)
	{
		var group = this.href.match('&delete_group=(.*?)&')[1];
		$.post(location.href, {
			delete_group: group
		});
		
		$(this).parents('tr').eq(0).remove();
		
		e.preventDefault();
	});
});
/*
  IPPU methods:
     init([innerHTML]) -- takes innerHTML as optional argument
     show() -- shows the popup
     hide() -- hides popup
     cancel() -- hides and calls cancel callback

  Content setters:
     setContent(innerHTML) -- set innerHTML
     setContentElement(element) -- adds element as a child of the popup

   Accessors:
     getElement() -- returns popup DIV element
     visible() -- returns whether the popup is visible or not

   Titlebar:
     setTitlebar(show) -- true: show titlebar / false: no titlebar
     setTitle(title) -- sets the titlebar text
     getTitlebarElement() -- returns the titlebar element
     setTitlebarClass(className) -- set the class of the titlebar

   Styling:
     setOverflow(overflow) -- sets ele.style.overflow to overflow
     addClass(className) -- adds class to popup
     removeClass(className) -- removes class to popup

   Browser Hacks:
     setAutoHideSelects(autohide) -- when the popup is shown should it find all the selects
                                on the page and hide them (and show them again) (for IE)

   Positioning/Sizing:
     setLocation(left, top) -- set popup location: will be pixels if units not specified
     setLeft(left) -- set left location
     setTop(top)   -- set top location
     setDimensions(width, height) -- set popup dimensions: will be pixels if units not specified
     setAutoCenter(x, y) -- what dimensions to auto-center
     center() -- centers popup on screen
     centerX() -- centers popup horizontally
     centerY() -- centers popup vertically
     setFixedPosition(fixed) -- should the popup stay fixed on the page when it scrolls?
     centerOnWidget(widget) -- center popup on this widget
     setAutoCenterCallback(callback) -- calls callback with this IPPU instance as a parameter
                                        for auto-centering. Some common built-in class methods
                                        you can use as callbacks are:
                                        IPPU.center
                                        IPPU.centerX
                                        IPPU.centerY

     moveForward(amount) -- increases the zIndex by one or amount if specified
     moveBackward(amount) -- decreases the zIndex by one or amount if specified

   Modality:
     setClickToClose(clickToClose) -- if clickToClose is true, clicking outside of the popup
                                      will close it
     setModal(modality) -- If modality is true, then popup will capture all mouse events
                     and optionally gray out the rest of the page. (overrides clickToClose)
     setOverlayVisible(visible) -- If visible is true, when this popup is on the page it
                                   will gray out the rest of the page if this is modal

   Callbacks:
     setCancelledCallback(callback) -- call this when the dialog is closed through clicking
                                       outside, titlebar close button, etc...
     setHiddenCallback(callback) -- called when the dialog is closed in any fashion

   Fading:
     setFadeIn(fadeIn) -- set whether or not to automatically fade the ippu in
     setFadeOut(fadeOut) -- set whether or not to automatically fade the ippu out
     setFadeSpeed(secs) -- sets fade speed

  Class Methods:
   Handy callbacks:
     IPPU.center
     IPPU.centerX
     IPPU.centerY
   Browser testing:
     IPPU.isIE() -- is the browser internet exploder?
     IPPU.ieSafari() -- is this safari?

////////////////////


ippu.setModalDenialCallback(IPPU.cssBorderFlash);


   private:
    Properties:
     ele -- DOM node of div
     shown -- boolean; if element is in DOM
     autoCenterX -- boolean; auto-center horiz
     autoCenterY -- boolean; auto-center vertical
     fixedPosition -- boolean; stay in fixed position when browser scrolls?
     titlebar -- titlebar element
     title -- string; text to go in titlebar
     showTitlebar -- boolean; whether or not to show titlebar
     content -- DIV containing user's specified content
     clickToClose -- boolean; clicking outside popup will close it
     clickHandlerSetup -- boolean; have we set up the click handlers?
     docOverlay -- DIV that overlays the document for capturing clicks
     modal -- boolean; capture all events and prevent user from doing anything
                       until dialog is dismissed
     visibleOverlay -- boolean; make overlay slightly opaque
     clickHandlerFunc -- function; function to handle document clicks
     resizeHandlerFunc -- function; function to handle document resizing
     autoCenterCallback -- function; what callback to call for auto-centering
     cancelledCallback -- function; called when dialog is cancelled
     setAutoHideSelects -- boolean; autohide all SELECT elements on the page when popup is visible
     hiddenSelects -- array; SELECT elements that have been hidden
     hiddenCallback -- funciton; called when dialog is hidden
     fadeIn, fadeOut, fadeSpeed -- fading settings
     fadeMode -- current fading mode (in, out) if there is fading going on

    Methods:
     updateTitlebar() -- create titlebar if it doesn't exist,
                         hide it if titlebar == false,
                         update titlebar text
     updateContent() -- makes sure all currently specified properties are applied
     setupClickCapture() -- if modal, create document-sized div overlay to capture click events
                            otherwise install document onclick handler
     removeClickHandlers() -- remove overlay, event handlers
     clickHandler() -- event handler for clicks
     updateOverlay() -- if we have an overlay, make sure it's where it should be and (in)visible
                        if it should be
     autoCenter() -- centers popup on screen according to autoCenterX and autoCenterY
     hideSelects() -- hide all select element on page
     showSelects() -- show all selects
     _hide () -- actually hides everything, called by hide(), which does fading if necessary
*/

// this belongs somewhere else:
function changeOpac(id, opacity) {
    var e =  $(id);
    if (e && e.style) {
        var object = e.style;
        if (object) {
            //reduce flicker
            if (IPPU.isSafari() && opacity >= 100)
                opacity = 99.99;

            // IE
            if (object.filters)
                object.filters.alpha.opacity = opacity * 100;

            object.opacity = opacity;
        }
    }
}

IPPU = new Class( Object, {
  setFixedPosition: function (fixed) {
    // no fixed position for IE
    if (IPPU.isIE())
      return;

    this.fixedPosition = fixed;
    this.updateContent();
  },

  clickHandler : function (evt) {
    if (!this.clickToClose) return;
    if (!this.visible()) return;

    evt = Event.prep(evt);
    var target = evt.target;
    // don't do anything if inside the popup
    if (DOM.getAncestorsByClassName(target, "ippu", true).length > 0) return;
    this.cancel();
  },

  setCancelledCallback : function (callback) {
    this.cancelledCallback = callback;
  },

  cancel : function () {
    if (this.cancelledCallback)
      this.cancelledCallback();
    this.hide();
  },

  setHiddenCallback: function (callback) {
    this.hiddenCallback = callback;
  },

  setupClickCapture : function () {
    if (!this.visible() || this.clickHandlerSetup){return;}
    if (!this.clickToClose && !this.modal) {return;}

    this.clickHandlerFunc = this.clickHandler.bindEventListener(this);

    if (this.modal) {
      // create document-sized div to capture events
      if (this.overlay) return; // wtf? shouldn't exist yet
      this.overlay = document.createElement("div");
      this.overlay.style.left = "0px";
      this.overlay.style.top = "0px";
      this.overlay.style.margin = "0px";
      this.overlay.style.padding = "0px";
      
      this.overlay.style.backgroundColor = "#000000";
      this.overlay.style.zIndex="900";
      if (IPPU.isIE()){
      		this.overlay.style.filter="progid:DXImageTransform.Microsoft.Alpha(opacity=50)";
		this.overlay.style.position="absolute";
		this.overlay.style.width=document.body.scrollWidth;
		this.overlay.style.height=document.body.scrollHeight;
      }
      else{
      	this.overlay.style.position = "fixed";
      }

      this.ele.parentNode.insertBefore(this.overlay, this.ele);
      this.updateOverlay();

      DOM.addEventListener(this.overlay, "click", this.clickHandlerFunc);
    } else {
      // simple document onclick handler
      DOM.addEventListener(document, "click", this.clickHandlerFunc);
    }

    this.clickHandlerSetup = true;
  },

  updateOverlay : function () {
    if (this.overlay) {
      var cd = DOM.getClientDimensions();
      this.overlay.style.width = (cd.x - 1) + "px";
      if(!IPPU.isIE()){
      	this.overlay.style.height = (cd.y - 1) + "px";
      }	
      if (this.visibleOverlay) {
        this.overlay.backgroundColor = "#000000";
        changeOpac(this.overlay, 0.50);
      } else {
        this.overlay.backgroundColor = "#FFFFFF";
        changeOpac(this.overlay, 0.0);
      }
    }
  },

  resizeHandler : function (evt) {
    this.updateContent();
  },

  removeClickHandlers : function () {
    if (!this.clickHandlerSetup) return;

    var myself = this;
    var handlerFunc = function (evt) {
      myself.clickHandler(evt);
    };

    DOM.removeEventListener(document, "click", this.clickHandlerFunc, false);

    if (this.overlay) {
      DOM.removeEventListener(this.overlay, "click", this.clickHandlerFunc, true);
      this.overlay.parentNode.removeChild(this.overlay);
      this.overlay = undefined;
    }

    this.clickHandlerFunc = undefined;
    this.clickHandlerSetup = false;
  },

  setClickToClose : function (clickToClose) {
    this.clickToClose = clickToClose;

    if (!this.clickHandlerSetup && clickToClose && this.visible()) {
      // popup is already visible, need to set up click handler
      var setupClickCaptureCallback = this.setupClickCapture.bind(this);
      window.setTimeout(setupClickCaptureCallback, 100);
    } else if (!clickToClose && this.clickHandlerSetup) {
      this.removeClickHandlers();
    }

    this.updateContent();
  },

  setModal : function (modal) {
    var changed = (this.modal == modal);

    // if it's modal, we don't want click-to-close
    if (modal)
      this.setClickToClose(false);

    this.modal = modal;
    if (changed) {
      this.removeClickHandlers();
      this.updateContent();
    }
  },

  setOverlayVisible : function (vis) {
    this.visibleOverlay = vis;
    this.updateContent();
  },

  updateContent : function () {
    this.autoCenter();
    this.updateTitlebar();
    this.updateOverlay();
    if (this.titlebar)
      this.setTitlebarClass(this.titlebar.className);

    var setupClickCaptureCallback = this.setupClickCapture.bind(this);
    window.setTimeout(setupClickCaptureCallback, 100);

    if (this.fixedPosition && this.ele.style.position != "fixed")
      this.ele.style.position = "fixed";
    else if (!this.fixedPosition && this.ele.style.position == "fixed")
      this.ele.style.position = "absolute";
  },

  getTitlebarElement : function () {
    return this.titlebar;
  },

  setTitlebarClass : function (className) {
    if (this.titlebar)
      this.titlebar.className = className;
  },

  setOverflow : function (overflow) {
    if (this.ele)
      this.ele.style.overflow = overflow;
  },

  visible : function () {
    return this.shown;
  },

  setTitlebar : function (show) {
    this.showTitlebar = show;

    if (show) {
      if (!this.titlebar) {
        // titlebar hasn't been created. Create it.
        var tbar = document.createElement("div");
        if (!tbar) return;
        tbar.style.width = "100%";

        if (this.title) tbar.innerHTML = this.title;
        this.ele.insertBefore(tbar, this.content);
        this.titlebar = tbar;

      }
    } else if (this.titlebar) {
      this.ele.removeChild(this.titlebar);
      this.titlebar = false;
    }
  },

  setTitle : function (title) {
    this.title = title;
    this.updateTitlebar();
  },

  updateTitlebar : function() {
    if (this.showTitlebar && this.titlebar && this.title != this.titlebar.innerHTML) {
      this.titlebar.innerHTML = this.title;
    }
  },

  addClass : function (className) {
    DOM.addClassName(this.ele, className);
  },

  removeClass : function (className) {
    DOM.removeClassName(this.ele, className);
  },

  setAutoCenterCallback : function (callback) {
    this.autoCenterCallback = callback;
  },

  autoCenter : function () {
    if (!this.visible || !this.visible()) return;

    if (this.autoCenterCallback) {
      this.autoCenterCallback(this);
      return;
    }

    if (this.autoCenterX)
      this.centerX();

    if (this.autoCenterY)
      this.centerY();
  },

  center : function () {
    this.centerX();
    this.centerY();
  },

  centerOnWidget : function (widget, offsetTop, offsetLeft) {
        offsetTop = offsetTop || 0;
        offsetLeft = offsetLeft || 0;
        this.setAutoCenter(false, false);
        this.setAutoCenterCallback(null);
  var wd = DOM.getAbsoluteDimensions(widget);
    var ed = DOM.getAbsoluteDimensions(this.ele);
    var newleft = (wd.absoluteRight - wd.offsetWidth / 2 - ed.offsetWidth / 2) + offsetLeft;
    var newtop = (wd.absoluteBottom - wd.offsetHeight / 2 - ed.offsetHeight / 2) + offsetTop;

        newleft = newleft < 0 ? 0 : newleft;
        newtop  = newtop  < 0 ? 0 : newtop;
    DOM.setLeft(this.ele, newleft);
    DOM.setTop(this.ele, newtop);
  },

  centerX : function () {
    if (!this.visible || !this.visible()) return;

    var cd = DOM.getClientDimensions();
    var newleft = cd.x / 2 - this.ele.offsetWidth / 2;

    // If not fixed position, center relative to the left of the page
    if (!this.fixedPosition) {
        var wd = DOM.getWindowScroll();
        newleft += wd.left;
    }

   DOM.setLeft(this.ele, newleft);
  },

  centerY : function () {
    if (!this.visible || !this.visible()) return;

    var cd = DOM.getClientDimensions();
    var newtop = cd.y / 2 - this.ele.offsetHeight / 2;

    // If not fixed position, center relative to the top of the page
    if (!this.fixedPosition) {
        var wd = DOM.getWindowScroll();
        newtop += wd.top;
    }

    DOM.setTop(this.ele, newtop);
  },

  setAutoCenter : function (autoCenterX, autoCenterY) {
    this.autoCenterX = autoCenterX || false;
    this.autoCenterY = autoCenterY || false;

    if (!autoCenterX && !autoCenterY) {
        this.setAutoCenterCallback(null);
        return;
    }

    this.autoCenter();
  },

  setDimensions : function (width, height) {
    width = width + "";
    height = height + "";
    if (width.match(/^\d+$/)) width += "px";
    if (height.match(/^\d+$/)) height += "px";

    this.ele.style.width  = width;
    this.ele.style.height = height;
  },

  moveForward : function (howMuch) {
      if (!howMuch) howMuch = 1;
      if (! this.ele) return;

      this.ele.style.zIndex += howMuch;
  },

  moveBackward : function (howMuch) {
      if (!howMuch) howMuch = 1;
      if (! this.ele) return;

      this.ele.style.zIndex -= howMuch;
  },

  setLocation : function (left, top) {
      this.setLeft(left);
      this.setTop(top);
  },

  setTop : function (top) {
   if (typeof top != 'string') top += 'px';
     this.ele.style.top = top;
  },

  setLeft : function (left) {
	if (typeof left != 'string') left += 'px';
    this.ele.style.left = left;
  },

  getElement : function () {
    return this.ele;
  },

  setContent : function (html) {
    this.content.innerHTML = html;
  },

  setContentElement : function (element) {
      // remove child nodes
      while (this.content.firstChild) {
          this.content.removeChild(this.content.firstChild);
      };

    this.content.appendChild(element);
  },

  setFadeIn : function (fadeIn) {
      this.fadeIn = fadeIn;
  },

  setFadeOut : function (fadeOut) {
      this.fadeOut = fadeOut;
  },

  setFadeSpeed : function (fadeSpeed) {
      this.fadeSpeed = fadeSpeed;
  },

  show : function () {
    this.shown = true;

    if (this.fadeIn) {
        var opp = 0.01;

        changeOpac(this.ele, opp);
    }

    document.body.appendChild(this.ele);
    this.ele.style.position = "absolute";
    if (this.autoCenterX || this.autoCenterY) this.center();

    this.updateContent();

    if (!this.resizeHandlerFunc) {
      this.resizeHandlerFunc = this.resizeHandler.bindEventListener(this);
      DOM.addEventListener(window, "resize", this.resizeHandlerFunc, false);
    }

    if (this.fadeIn)
        this.fade("in");

    this.hideSelects();
  },

  fade : function (mode, callback) {
      var opp;
      var delta;

      var steps = 10.0;

      if (mode == "in") {
          delta = 1 / steps;
          opp = 0.1;
      } else {
          if (this.ele.style.opacity)
          opp = finiteFloat(this.ele.style.opacity);
          else
          opp = 0.99;

          delta = -1 / steps;
      }

      var fadeSpeed = this.fadeSpeed;
      if (!fadeSpeed) fadeSpeed = 1;

      var fadeInterval = steps / fadeSpeed * 5;

      this.fadeMode = mode;

      var self = this;
      var fade = function () {
          opp += delta;

          // did someone start a fade in the other direction? if so,
          // cancel this fade
          if (self.fadeMode && self.fadeMode != mode) {
              if (callback)
                  callback.call(self, []);

              return;
          }

          if (opp <= 0.1) {
              if (callback)
                  callback.call(self, []);

              self.fadeMode = null;

              return;
          } else if (opp >= 1.0) {
              if (callback)
                  callback.call(self, []);

              self.fadeMode = null;

              return;
          } else {
              changeOpac(self.ele, opp);
              window.setTimeout(fade, fadeInterval);
          }
      };

      fade();
  },

  hide : function () {
    if (! this.visible()) return;

    if (this.fadeOut && this.ele) {
        this.fade("out", this._hide.bind(this));
    } else {
        this._hide();
    }
  },

  _hide : function () {
    if (this.hiddenCallback)
      this.hiddenCallback();

    this.shown = false;
    this.removeClickHandlers();

    if (this.ele)
    document.body.removeChild(this.ele);

    if (this.resizeHandlerFunc)
      DOM.removeEventListener(window, "resize", this.resizeHandlerFunc);

    this.showSelects();
  },

  // you probably want this for IE being dumb
  // (IE thinks select elements are cool and puts them in front of every element on the page)
  setAutoHideSelects : function (autohide) {
    this.autoHideSelects = autohide;
    this.updateContent();
  },

  hideSelects : function () {
    if (!this.autoHideSelects || !IPPU.isIE()) return;
    var sels = document.getElementsByTagName("select");
    var ele;
    for (var i = 0; i < sels.length; i++) {
      ele = sels[i];
      if (!ele) continue;

      // if this element is inside the ippu, skip it
      if (DOM.getAncestorsByClassName(ele, "ippu", true).length > 0) continue;

      if (ele.style.visibility != 'hidden') {
        ele.style.visibility = 'hidden';
        this.hiddenSelects.push(ele);
      }
    }
  },

  showSelects : function () {
    if (! this.autoHideSelects) return;
    var ele;
    while (ele = this.hiddenSelects.pop())
      ele.style.visibility = '';
  },

  init: function (html) {
    var ele = document.createElement("div");
    this.ele = ele;
    this.shown = false;
    this.autoCenterX = false;
    this.autoCenterY = false;
    this.titlebar = null;
    this.title = "";
    this.showTitlebar = false;
    this.clickToClose = false;
    this.modal = false;
    this.clickHandlerSetup = false;
    this.docOverlay = false;
    this.visibleOverlay = false;
    this.clickHandlerFunc = false;
    this.resizeHandlerFunc = false;
    this.fixedPosition = false;
    this.autoCenterCallback = null;
    this.cancelledCallback = null;
    this.autoHideSelects = false;
    this.hiddenCallback = null;
    this.fadeOut = false;
    this.fadeIn = false;
    this.hiddenSelects = [];
    this.fadeMode = null;

    ele.style.position = "absolute";
	ele.style.top = 0;
    ele.style.zIndex   = "1000";

    // plz don't remove thx
    DOM.addClassName(ele, "ippu");

    // create DIV to hold user's content
    this.content = document.createElement("div");

    this.content.innerHTML = html;

    this.ele.appendChild(this.content);
  }
});

// class methods
IPPU.center = function (obj) {
  obj.centerX();
  obj.centerY();
};

IPPU.centerX = function (obj) {
  obj.centerX();
};

IPPU.centerY = function (obj) {
  obj.centerY();
};

IPPU.isIE = function () {
    var UA = navigator.userAgent.toLowerCase();
    if (UA.indexOf('msie') != -1) return true;
    return false;
};

IPPU.isSafari = function () {
    var UA = navigator.userAgent.toLowerCase();
    if (UA.indexOf('safari') != -1) return true;
    return false;
};

LJ_IPPU = new Class ( IPPU, {
  init: function(title) {
    if (!title)
      title = "";

    LJ_IPPU.superClass.init.apply(this, []);

    this.uniqId = this.generateUniqId();
    this.cancelThisFunc = this.cancel.bind(this);

    this.setTitle(title);
    this.setTitlebar(true);
    this.setTitlebarClass("lj_ippu_titlebar");

    this.addClass("lj_ippu");
    this.setAutoCenterCallback(IPPU.center);
    this.setDimensions(514, "auto");
    //this.setOverflow("hidden");

    this.setFixedPosition(true);
    this.setClickToClose(true);
    this.setAutoHideSelects(true);
 },

  setTitle: function (title) {
    var titlebarContent = "\
      <div style='float:right; padding-right: 8px'>" +
      "<img src='" + Site.imgprefix + "/CloseButton.gif?v=7618' width='15' height='15' id='" + this.uniqId + "_cancel' /></div>" + title;

    LJ_IPPU.superClass.setTitle.apply(this, [titlebarContent]);
  },

  generateUniqId: function() {
    var theDate = new Date();
    return "lj_ippu_" + theDate.getHours() + theDate.getMinutes() + theDate.getMilliseconds();
  },

  show: function() {
    LJ_IPPU.superClass.show.apply(this);
    var setupCallback = this.setup_lj_ippu.bind(this);
    this.timerSetup = window.setTimeout(setupCallback, 300);
  },

  setup_lj_ippu: function (evt) {
    var cancelCallback = this.cancelThisFunc;
   $(this.uniqId + "_cancel").onclick = function(){
	    cancelCallback();
    };
  },

  hide: function() {
    clearInterval(this.timerSetup);
    LJ_IPPU.superClass.hide.apply(this);
  }
} );

// Class method to show a popup to show a note to the user
// note = message to show
// underele = element to display the note underneath
LJ_IPPU.showNote = function (note, underele, timeout, style) {
    var noteElement = document.createElement("div");
    noteElement.innerHTML = note;

    return LJ_IPPU.showNoteElement(noteElement, underele, timeout, style);
};

LJ_IPPU.showErrorNote = function (note, underele, timeout) {
    return LJ_IPPU.showNote(note, underele, timeout, "ErrorNote");
};

LJ_IPPU.showNoteElement = function (noteEle, underele, timeout, style) {
    var notePopup = new IPPU();
    notePopup.init();

    var inner = document.createElement("div");
    DOM.addClassName(inner, "Inner");
    inner.appendChild(noteEle);
    notePopup.setContentElement(inner);

    notePopup.setTitlebar(false);
    notePopup.setFadeIn(true);
    notePopup.setFadeOut(true);
    notePopup.setFadeSpeed(4);
    notePopup.setDimensions("auto", "auto");
    if (!style) style = "Note";
    notePopup.addClass(style);

    var dim;
    if (underele) {
        // pop up the box right under the element
        dim = DOM.getAbsoluteDimensions(underele);
        if (!dim) return;
    }

    var bounds = DOM.getClientDimensions();
    if (!bounds) return;

    if (!dim) {
        // no element specified to pop up on, show in the middle
        // notePopup.setModal(true);
        // notePopup.setOverlayVisible(true);
        notePopup.setAutoCenter(true, true);
        notePopup.show();
    } else {
        // default is to auto-center, don't want that
        notePopup.setAutoCenter(false, false);
        notePopup.setLocation(dim.absoluteLeft, dim.absoluteBottom + 4);
        notePopup.show();

        var popupBounds = DOM.getAbsoluteDimensions(notePopup.getElement());
        if (popupBounds.absoluteRight > bounds.x) {
            notePopup.setLocation(bounds.x - popupBounds.offsetWidth - 30, dim.absoluteBottom + 4);
        }
    }

    notePopup.setClickToClose(true);
    notePopup.moveForward();

    if (timeout === undefined) {
        timeout = 5000;
    }

    if (timeout) {
        window.setTimeout(function () {
            if (notePopup)
                notePopup.hide();
        }, timeout);
    }

    return notePopup;
};

LJ_IPPU.textPrompt = function (title, prompt, callback, options) {
		options = options || {};

    title += '';
    var notePopup = new LJ_IPPU(title);

    var inner = document.createElement("div");
    DOM.addClassName(inner, "ljippu_textprompt");

    // label
    if (prompt)
        inner.appendChild(_textDiv(prompt));

    // text field
    var field = document.createElement("textarea");
    DOM.addClassName(field, "htmlfield");
    field.cols = 40;
    field.rows = 5;
    inner.appendChild(field);

    // submit btn
    var btncont = document.createElement("div");
    DOM.addClassName(btncont, "submitbtncontainer");
    var btn = document.createElement("input");
    DOM.addClassName(btn, "submitbtn");
    btn.type = "button";
    btn.value = "Insert";
    btncont.appendChild(btn);
    inner.appendChild(btncont);

    notePopup.setContentElement(inner);

    notePopup.setAutoCenter(true, true);
    notePopup.setDimensions(options.width || "60%", "auto");
    notePopup.show();
    field.focus();

    DOM.addEventListener(btn, "click", function (e) {
        notePopup.hide();
        if (callback)
            callback.apply(null, [field.value]);
    });
}

LJWidget = new Class(Object, {
    // replace the widget contents with an ajax call to render with params
    updateContent: function (params) {
        if (! params) params = {};
        this._show_frame = params["showFrame"];

        if ( params["method"] ) method = params["method"];
        params["_widget_update"] = 1;

        if (this.doAjaxRequest(params)) {
            // hilight the widget to show that its updating
            this.hilightFrame();
        }
    },

    // returns the widget element
    getWidget: function () {
        return $(this.widgetId);
    },

    // do a simple post to the widget
    doPost: function (params) {
        if (! params) params = {};
        this._show_frame = params["showFrame"];
        var postParams = {};

        var classPrefix = this.widgetClass;
        classPrefix = "Widget[" + classPrefix.replace(/::/g, "_") + "]_";

        for (var k in params) {
            var class_k = k;
            if (! k.match(/^Widget\[/) && k != 'lj_form_auth' && ! k.match(/^_widget/)) {
                class_k = classPrefix + k;
            }

            postParams[class_k] = params[k];
        }

        postParams["_widget_post"] = 1;

        this.doAjaxRequest(postParams);
    },

    doPostAndUpdateContent: function (params) {
        if (! params) params = {};

        params["_widget_update"] = 1;

        this.doPost(params);
    },

    // do an ajax post of the form passed in
    postForm: function (formElement) {
      if (! formElement) return false;

      var params = {};

      for (var i=0; i < formElement.elements.length; i++) {
        var element = formElement.elements[i];
        var name = element.name;
        var value = element.value;

        params[name] = value;
      }

      this.doPost(params);
    },

    ///////////////// PRIVATE METHODS ////////////////////

    init: function (id, widgetClass, authToken) {
        LJWidget.superClass.init.apply(this, arguments);
        this.widgetId = id;
        this.widgetClass = widgetClass;
        this.authToken = authToken;
    },

    hilightFrame: function () {
        if (this._show_frame != 1) return;
        if (this._frame) return;

        var widgetEle = this.getWidget();
        if (! widgetEle) return;

        var widgetParent = widgetEle.parentNode;
        if (! widgetParent) return;

        var enclosure = document.createElement("fieldset");
        enclosure.style.borderColor = "red";
        var title = document.createElement("legend");
        title.innerHTML = "Updating...";
        enclosure.appendChild(title);

        widgetParent.appendChild(enclosure);
        enclosure.appendChild(widgetEle);

        this._frame = enclosure;
    },

    removeHilightFrame: function () {
        if (this._show_frame != 1) return;

        var widgetEle = this.getWidget();
        if (! widgetEle) return;

        if (! this._frame) return;

        var par = this._frame.parentNode;
        if (! par) return;

        par.appendChild(widgetEle);
        par.removeChild(this._frame);

        this._frame = null;
    },

    method: "POST",
    endpoint: "widget",
    requestParams: {},

    doAjaxRequest: function (params) {
        if (! params) params = {};

        if (this._ajax_updating) return false;
        this._ajax_updating = true;

        params["_widget_id"]     = this.widgetId;
        params["_widget_class"]  = this.widgetClass;

        params["auth_token"]  = this.authToken;

        if ($('_widget_authas')) {
            params["authas"] = $('_widget_authas').value;
        }

        var reqOpts = {
            method:  this.method,
            data:    HTTPReq.formEncoded(params),
            url:     LiveJournal.getAjaxUrl(this.endpoint),
            onData:  this.ajaxDone.bind(this),
            onError: this.ajaxError.bind(this)
        };

        for (var k in params) {
            reqOpts[k] = params[k];
        }

        HTTPReq.getJSON(reqOpts);

        return true;
    },

    ajaxDone: function (data) {
        this._ajax_updating = false;
        this.removeHilightFrame();

		if (data["_widget_body"]) {
			if (data["_widget_body"].match(/ajax:.[^"]+/)) {
				this.authToken = data["_widget_body"].match(/ajax:.[^"]+/)[0];
			}
		}

        if (data.auth_token) {
            this.authToken = data.auth_token;
        }

        if (data.errors && data.errors != '') {
            return this.ajaxError(data.errors);
        }

        if (data.error) {
            return this.ajaxError(data.error);
        }

        // call callback if one exists
        if (this.onData) {
             this.onData(data);
        }

        if (data["_widget_body"]) {
            // did an update request, got the new body back
            var widgetEle = this.getWidget();
            if (! widgetEle) {
              // widget is gone, ignore
              return;
            }

            widgetEle.innerHTML = data["_widget_body"];

            if (this.onRefresh) {
                this.onRefresh();
            }
        }
    },

    ajaxError: function (err) {
        this._ajax_updating = false;

        if (this.onError) {
            // use class error handler
            this.onError(err);
        } else {
            // use generic error handler
            LiveJournal.ajaxError(err);
        }
    }
});

LJWidget.widgets = [];

LJWidgetIPPU = new Class(LJWidget, {
    init: function (opts, reqParams) {
        var title          = opts.title;
        var widgetClass    = opts.widgetClass;
        var authToken      = opts.authToken;
        var nearEle        = opts.nearElement;
        var not_view_close = opts.not_view_close;

        if (! reqParams) reqParams = {};
        this.reqParams = reqParams;

        // construct a container ippu for this widget
        var ippu = new LJ_IPPU(title, nearEle);
        this.ippu = ippu;
        var c = document.createElement("div");
        c.id = "LJWidgetIPPU_" + Unique.id();
        ippu.setContentElement(c);

        if (opts.width && opts.height)
          ippu.setDimensions(opts.width, opts.height);

        if (opts.overlay) {
            if (IPPU.isIE()) {
                this.ippu.setModal(true);
                this.ippu.setOverlayVisible(true);
                this.ippu.setClickToClose(false);
            } else {
                this.ippu.setModal(true);
                this.ippu.setOverlayVisible(true);
            }
        }

        if (opts.center) ippu.center();
        ippu.show();
        if (not_view_close) ippu.titlebar.getElementsByTagName('img')[0].style.display = 'none';

        var loadingText = document.createElement("div");
        loadingText.style.fontSize = '1.5em';
        loadingText.style.fontWeight = 'bold';
        loadingText.style.margin = '5px';
        loadingText.style.textAlign = 'center';

        loadingText.innerHTML = "Loading...";

        this.loadingText = loadingText;

        c.appendChild(loadingText);

        // id, widgetClass, authToken
        var widgetArgs = [c.id, widgetClass, authToken]
        LJWidgetIPPU.superClass.init.apply(this, widgetArgs);

        var self = this;
        ippu.setCancelledCallback( function() {
            if( self.cancel ) {
                self.cancel();
            }
        } );

        if (!widgetClass)
            return null;

        this.widgetClass = widgetClass;
        this.authToken   = authToken;
        this.title       = title;
        this.nearEle     = nearEle;

        window.setInterval(this.animateLoading.bind(this), 20);

        this.loaded = false;

        // start request for this widget now
        this.loadContent();
        return this;
    },

    animateCount: 0,

    animateLoading: function (i) {
      var ele = this.loadingText;

      if (this.loaded || ! ele) {
        window.clearInterval(i);
        return;
      }

      this.animateCount += 0.05;
      var intensity = ((Math.sin(this.animateCount) + 1) / 2) * 255;
      var hexColor = Math.round(intensity).toString(16);

      if (hexColor.length == 1) hexColor = "0" + hexColor;
      hexColor += hexColor + hexColor;

      ele.style.color = "#" + hexColor;
      this.ippu.center();
    },

    // override doAjaxRequest to add _widget_ippu = 1
    doAjaxRequest: function (params) {
      if (! params) params = {};
      params['_widget_ippu'] = 1;
     if(document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_self")){
       params['Widget[IPPU_SettingProd]_LJ__Setting__InvisibilityGuests_invisibleguests']=
         (document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_self").checked==true)?(1):((document.getElementById("LJ__Setting__InvisibilityGuests_invisibleguests_anon").checked==true)?(2):(0))
     }
      LJWidgetIPPU.superClass.doAjaxRequest.apply(this, [params]);
    },

    close: function () {
      this.ippu.hide();
    },

    loadContent: function () {
      var reqOpts = this.reqParams;
      this.updateContent(reqOpts);
    },

    method: "POST",

    // request finished
    onData: function (data) {
      this.loaded = true;
    },

    render: function (params) {

    }
});

ILikeThis = {
	dialog: jQuery(),
	
	dialogRemove: function()
	{
		this.dialog.remove();
		jQuery(document).unbind('click', this.document_click);
	},
	
	// inline click
	rate: function(e, node, itemid, username)
	{
		var click = node.onclick;
		node.onclick = function(){ return false }
		// has undorate node
		var action = jQuery('.i_like_this_'+itemid+' .i_like_this_already').remove().length ? 'undorate' : 'rate';
		jQuery(node).parent().removeClass('i_dont_like_this');
		
		jQuery.ajax({
			url: LiveJournal.getAjaxUrl('eventrate'),
			data: {
				action: action,
				journal: username,
				itemid: itemid
			},
			type: 'POST',
			dataType: 'json',
			complete: function()
			{
				node.onclick = click;
			},
			success: function(data)
			{
				if (data.status === 'OK') {
					var append_node = jQuery('.we_like_this_'+itemid+' span>span>span');
					if (!append_node.length) { // s1
						append_node = jQuery('.we_like_this_'+itemid);
					}
					append_node.text(data.total);
					if (action == 'rate') {
						var context = jQuery('.i_like_this_'+itemid).addClass('i_dont_like_this'),
							append_node = context.find('span>span>span');
						if (!append_node.length) { // s1
							append_node = jQuery(context);
						}
						append_node.append('<i class="i_like_this_already">/</i>');
					} 
				}
			}
		});
		return false;
	},
	
	// inline click
	showList: function(e, node, itemid, username)
	{
		this.ajax && this.ajax.abort();
		
		this.ajax = jQuery.ajax({
			url: LiveJournal.getAjaxUrl('eventrate'),
			data: {
				action: 'list',
				journal: username,
				itemid: itemid,
				limit: 10
			},
			type: 'POST',
			dataType: 'json',
			success: function(data)
			{
				$node = jQuery(node);
				if (data.status === 'OK') {
					ILikeThis.dialog.remove();
					ILikeThis.dialog = jQuery('<div/>', {
						'class': 'b-popup b-popup-messagebox b-popup-ilikethis',
						css: {top: 0, visibility: 'hidden'},
						html: '<div class="b-popup-head">'
									+'<h4>'+data.ml_users_who_like_it+' ('+data.total+')</h4><i class="i-popup-close" onclick="ILikeThis.dialogRemove()"></i>'
								+'</div>'
								+'<div class="b-popup-content">'
									+'<p class="b-popup-we_like_this">'
										+data.result
									+'</p>'
								+'</div>'
								+(data.total > 10 ? '<div class="b-popup-footer">'
									+'<p><a href="'+Site.siteroot+'/alleventrates.bml?journal='+username+'&itemid='+itemid+'">'
										+data.ml_view_all
									+'</a></p>' : ''
								+'</div>')
					}).ljAddContextualPopup();
					
					ILikeThis.dialog.appendTo(document.body);
					
					//calc with viewport
					var ele_offset = $node.offset(),
						left = ele_offset.left,
						top = ele_offset.top + $node.height() + 0, // TODO: 4 is fix markup height
						$window = jQuery(window);
					
					left = Math.min(left,  $window.width() + $window.scrollLeft() - ILikeThis.dialog.outerWidth(true));
					top = Math.min(top, $window.height() + $window.scrollTop() - ILikeThis.dialog.outerHeight(true));
					
					jQuery(document).click(ILikeThis.document_click);
						
					ILikeThis.dialog.css({
						left: left,
						top: top,
						visibility: 'visible'
					});
					
					var append_node = jQuery('.we_like_this_'+itemid+' span>span>span');
					if (!append_node.length) { // s1
						append_node = jQuery('.we_like_this_'+itemid);
					}
					
					append_node.text(data.total);
				}
			}
		});
		
		return false;
	},
	
	document_click: function(e)
	{
		if (!jQuery(e.target).parents('.b-popup-ilikethis').length) {
			ILikeThis.dialogRemove();
		}
	}
}

DonateButton = {
	buyMore: function(node, ml_message, event) {
		var bubble = jQuery(node).data("buyMoreCachedBubble");
		if (!bubble) {
			bubble = jQuery("<span>" + ml_message + "</span>").bubble({
				target: node
			});
			jQuery(node).data("buyMoreCachedBubble", bubble);
		}

		bubble.bubble("show");
		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
		return false;
	},

	donate: function( link, url_data, event ) {
		var url = link.href,
			origin, h;

		var width = 639;
		var height = 230;

		LJ.rpc.bind( function( ev ) {
			if( ev.origin && ev.origin != Site.siteroot ) {
				return;
			}

			if( ev.data && ev.data.message === "updateWallet" ) {
				LiveJournal.run_hook( 'update_wallet_balance' );
				jQuery.getJSON( LiveJournal.getAjaxUrl( 'give_tokens' ) + "?" + url_data + "&mode=js", 
					function( result ) {
						if( result.html ) {
							$node = jQuery( link ).closest( '.lj-button' );
							$node.replaceWith( result.html );
						}
					} );
			}
		} );

		var popupUrl = url + ( url.indexOf( "?" ) === -1 ? "?" : "&" ) + 'usescheme=nonavigation';
		h = window.open( 'about:blank', 'donate' , 'toolbar=0,status=0,width=' + width + ',height=' + height + ',scrollbars=yes,resizable=yes');
		h.name = location.href.replace( /#.*$/, '' );

		setTimeout( function() {
			LJ.rpc.initRecipient( h, popupUrl, location.href.replace( /#.*$/, '' ) );
		}, 0 );

		event.stopPropagation ? event.stopPropagation() : (event.cancelBubble=true);
		return false;
	}
};

// Share at some S2 styles
jQuery(document).click(function(e)
{
	var a = e.target,
		href = a.href,
		args;
	if (href && !a.shareClickIgnore) {
		if (href.indexOf('http://www.facebook.com/sharer.php') === 0) {
			LJShare.entry({url: decodeURIComponent(LiveJournal.parseGetArgs(href).u)})
				.attach(a, "facebook");
			a.shareClickIgnore = true;
			jQuery(a).click();
			e.preventDefault();
		} else if (href.indexOf("http://twitter.com/share") === 0) {
			args = LiveJournal.parseGetArgs(href);
			LJShare.entry({
				url: decodeURIComponent(args.url),
				title: decodeURIComponent(args.text)
			}).attach(a, "twitter");
			a.shareClickIgnore = true;
			jQuery(a).click();
			e.preventDefault();
		} else if (href.indexOf("http://api.addthis.com/oexchange/0.8/forward/email") === 0) {
			args = LiveJournal.parseGetArgs(href);
			LJShare.entry({
				url: decodeURIComponent(args.url),
				title: decodeURIComponent(args.title)
			}).attach(a, "email");
			a.shareClickIgnore = true;
			jQuery(a).click();
			e.preventDefault();
		}
	}
});

(function() {
	var options = {
		blockSelector: '.yota-contest'
	};

	function retrieveContestInfo( element ) {
		var journal = element.attr( 'data-user' );
		jQuery.getJSON( LiveJournal.getAjaxUrl( 'yota_widget_post' ),
						{ json: 1, journal: journal }, function( answer ) {
			if( 'collected' in answer ) {
				var collected = answer.collected;
				for( var i = 0; i < collected.length; i += 2 ) {
					element.find( "." + collected[ i ] ).html( collected[ i + 1 ] );
				}
			}

			if( 'rating' in answer ) {
				i = 5;
				var key;
				while( --i > 0) {
					key = "" + i;
					if( key in answer.rating ) {
						element.find( '.c' + i ).html( answer.rating[ key ] );
					}
				}
			}
		} );
	}

	function findElement() {
		var element = jQuery( options.blockSelector );

		if( element.length ) {
			element.each( function() {
				retrieveContestInfo( jQuery( this ) );
			} );
		}
	}

	jQuery( function() {
		findElement();
	} );
} )();

(function() {
	var storage = {
		init: function() {
			this._store = window.sessionStorage && sessionStorage.getItem('placeholders') || '';
		},

		makeHash: function(link) {
			return ' ' + encodeURIComponent(link) + ' ';
		},

		inStorage: function(link) {
			return this._store.indexOf(this.makeHash(link)) !== -1;
		},

		addUrl: function(link) {
			if (!window.sessionStorage) { return; }
			if (this.inStorage(link)) { return; }

			this._store += this.makeHash(link);
			sessionStorage.setItem('placeholders', this._store);
		}
	};

	storage.init();

	var placeholders = {
		image: {
			selector: '.b-mediaplaceholder-photo',
			loading: 'b-mediaplaceholder-processing',
			init: function() {
				var self = this;
				doc.on('click', this.selector, function(ev) { 
					self.handler(this, ev);
				});
			},

			handler: function(el, html) {
				var im = new Image();

				im.onload = im.onerror = jQuery.delayedCallback(this.imgLoaded.bind(this, el, im), 500);
				im.src = el.href;
				el.className += ' ' + this.loading;

				storage.addUrl(el.href);
			},

			imgLoaded: function(el, image) {
				var img = jQuery('<img />').attr('src', image.src),
					$el = jQuery(el),
					href = $el.data('href'),
					imw = $el.data('width'),
					imh = $el.data('height');

				if (imw) { img.width(imw); }
				if (imh) { img.height(imh); }

				if (href && href.length > 0) {
					img = jQuery('<a>', { href: href }).append(img);
					$el.next('.b-mediaplaceholder-external').remove();
				}

				$el.replaceWith(img);
			}
		},

		video: {
			handler: function(link, html) {
				link.parentNode.replaceChild(jQuery(unescape(html))[0], link);
			}
		}
	};
	// use replaceChild for no blink scroll effect

	// Placeholder onclick event
	LiveJournal.placeholderClick = function(el, html) {
		var type = (html === 'image') ? html : 'video';

		placeholders[type].handler(el, html);
		return false;
	};

	LiveJournal.register_hook('page_load', function() {
		jQuery('.b-mediaplaceholder').each(function() {
			if(storage.inStorage(this.href)) {
				this.onclick.apply(this);
			}
		});
	});
})();

/**
 * this code initializes common properies for all widgets.
 * If it will become too large, it should be moved to the separate file
 */
(function() {
	widgets = [
		{
			type: 'collapsable',
			handler: function() {
				jQuery(document).on('click', '.appwidget-prop-collapsable', function(ev) {
					if (ev.target.className.indexOf('w-head-status-switch') !== -1) {
						var videoCollapes = ev.target.className.indexOf('collapse') !== -1,
							//widget will have class like appwidget-videoforhomepage where videoforhomepage is the widget id
							id = this.className.replace(/(?:.*?)appwidget-(\S+).*/, '$1-'),
							fullid = id + this.getAttribute('data-cid'),
							cookie = decodeURIComponent(Cookie('clpsd') || ''),
							cookie_ids = cookie ? cookie.split(':') : [];

						jQuery(this).toggleClass('appwidget-prop-collapsed', videoCollapes);

						var found = false;
						for (var i = 0; i < cookie_ids.length; ++i) {
							if (cookie_ids[i].indexOf(id) !== -1) {
								found = true;
								if (videoCollapes) {
									cookie_ids[i] = fullid;
								} else {
									cookie_ids.splice(i, 1);
								}
								break;
							}
						}

						if (!found && videoCollapes) {
							cookie_ids.push(fullid);
						}

						Cookie('clpsd', cookie_ids.length > 0 ? cookie_ids.join(':') : null, { domain: location.host, expires: 30 });
					}
				});
			}
		}
	];

	widgets.forEach(function(prop) { prop.handler(); });
})();


// LiveJournal javascript standard interface routines

// create a little animated hourglass at (x,y) with a unique-ish ID
// returns the element created
Hourglass = new Class( Object, {
  init: function(widget, classname) {
    this.ele = document.createElement("img");
    if (!this.ele) return;

    var imgprefix = Site ? Site.imgprefix : '';

    this.ele.src = imgprefix ? imgprefix + "/hourglass.gif?v=1674" : "/img/hourglass.gif?v=1674";
    this.ele.style.position = "absolute";

    DOM.addClassName(this.ele, classname);

    if (widget)
      this.hourglass_at_widget(widget);
  },

  hourglass_at: function (x, y) {
    this.ele.width = 17;
    this.ele.height = 17;
    this.ele.style.top = (y - 8) + "px";
    this.ele.style.left = (x - 8) + "px";

    // unique ID
    this.ele.id = "lj_hourglass" + x + "." + y;

    document.body.appendChild(this.ele);
  },

  add_class_name: function (classname) {
      if (this.ele)
      DOM.addClassName(this.ele, classname);
  },

  hourglass_at_widget: function (widget) {
    var dim = DOM.getAbsoluteDimensions(widget);
    var x = dim.absoluteLeft;
    var y = dim.absoluteTop;
    var w = dim.absoluteRight - x;
    var h = dim.absoluteBottom - y;
    if (w && h) {
      x += w/2;
      y += h/2;
    }
    this.hourglass_at(x, y);
  },

  hide: function () {
    if (this.ele) {
      try {
        document.body.removeChild(this.ele);
      } catch (e) {}
    }
  }

} );

// ljtalk for ctxpopup
LiveJournal.register_hook("ctxpopup_extrainfo", function (userdata) {
	var content = '';
	if (userdata.is_person) {
		if (userdata.is_online !== null) {
			content = '<a href="' + Site.siteroot + '/chat/">' + userdata.ml_ljtalk + '</a>';
			if (userdata.is_online) {
				content += " " + userdata.ml_online;
			} else if (userdata.is_online == '0') {
				content += " " + userdata.ml_offline;
			}
		}
	}

	return content;
});

// for updating ljcom widgets from livejournal ones
LiveJournal.register_hook("update_other_widgets", function (from_widget) {
	if (from_widget == "LayoutChooser" && Customize.AdLayout) {
		Customize.AdLayout.updateContent();
	}
});

/*
 *  md5.jvs 1.0b 27/06/96
 *
 * Javascript implementation of the RSA Data Security, Inc. MD5
 * Message-Digest Algorithm.
 *
 * Copyright (c) 1996 Henri Torgemane. All Rights Reserved.
 *
 * Permission to use, copy, modify, and distribute this software
 * and its documentation for any purposes and without
 * fee is hereby granted provided that this copyright notice
 * appears in all copies. 
 *
 * Of course, this soft is provided "as is" without express or implied
 * warranty of any kind.
 */



function array(n) {
  for(i=0;i<n;i++) this[i]=0;
  this.length=n;
}

/* Some basic logical functions had to be rewritten because of a bug in
 * Javascript.. Just try to compute 0xffffffff >> 4 with it..
 * Of course, these functions are slower than the original would be, but
 * at least, they work!
 */

function integer(n) { return n%(0xffffffff+1); }

function shr(a,b) {
  a=integer(a);
  b=integer(b);
  if (a-0x80000000>=0) {
    a=a%0x80000000;
    a>>=b;
    a+=0x40000000>>(b-1);
  } else
    a>>=b;
  return a;
}

function shl1(a) {
  a=a%0x80000000;
  if (a&0x40000000==0x40000000)
  {
    a-=0x40000000;  
    a*=2;
    a+=0x80000000;
  } else
    a*=2;
  return a;
}

function shl(a,b) {
  a=integer(a);
  b=integer(b);
  for (var i=0;i<b;i++) a=shl1(a);
  return a;
}

function and(a,b) {
  a=integer(a);
  b=integer(b);
  var t1=(a-0x80000000);
  var t2=(b-0x80000000);
  if (t1>=0) 
    if (t2>=0) 
      return ((t1&t2)+0x80000000);
    else
      return (t1&b);
  else
    if (t2>=0)
      return (a&t2);
    else
      return (a&b);  
}

function or(a,b) {
  a=integer(a);
  b=integer(b);
  var t1=(a-0x80000000);
  var t2=(b-0x80000000);
  if (t1>=0) 
    if (t2>=0) 
      return ((t1|t2)+0x80000000);
    else
      return ((t1|b)+0x80000000);
  else
    if (t2>=0)
      return ((a|t2)+0x80000000);
    else
      return (a|b);  
}

function xor(a,b) {
  a=integer(a);
  b=integer(b);
  var t1=(a-0x80000000);
  var t2=(b-0x80000000);
  if (t1>=0) 
    if (t2>=0) 
      return (t1^t2);
    else
      return ((t1^b)+0x80000000);
  else
    if (t2>=0)
      return ((a^t2)+0x80000000);
    else
      return (a^b);  
}

function not(a) {
  a=integer(a);
  return (0xffffffff-a);
}

/* Here begin the real algorithm */

    var state = new array(4); 
    var count = new array(2);
	count[0] = 0;
	count[1] = 0;                     
    var buffer = new array(64); 
    var transformBuffer = new array(16); 
    var digestBits = new array(16);

    var S11 = 7;
    var S12 = 12;
    var S13 = 17;
    var S14 = 22;
    var S21 = 5;
    var S22 = 9;
    var S23 = 14;
    var S24 = 20;
    var S31 = 4;
    var S32 = 11;
    var S33 = 16;
    var S34 = 23;
    var S41 = 6;
    var S42 = 10;
    var S43 = 15;
    var S44 = 21;

    function F(x,y,z) {
	return or(and(x,y),and(not(x),z));
    }

    function G(x,y,z) {
	return or(and(x,z),and(y,not(z)));
    }

    function H(x,y,z) {
	return xor(xor(x,y),z);
    }

    function I(x,y,z) {
	return xor(y ,or(x , not(z)));
    }

    function rotateLeft(a,n) {
	return or(shl(a, n),(shr(a,(32 - n))));
    }

    function FF(a,b,c,d,x,s,ac) {
        a = a+F(b, c, d) + x + ac;
	a = rotateLeft(a, s);
	a = a+b;
	return a;
    }

    function GG(a,b,c,d,x,s,ac) {
	a = a+G(b, c, d) +x + ac;
	a = rotateLeft(a, s);
	a = a+b;
	return a;
    }

    function HH(a,b,c,d,x,s,ac) {
	a = a+H(b, c, d) + x + ac;
	a = rotateLeft(a, s);
	a = a+b;
	return a;
    }

    function II(a,b,c,d,x,s,ac) {
	a = a+I(b, c, d) + x + ac;
	a = rotateLeft(a, s);
	a = a+b;
	return a;
    }

    function transform(buf,offset) { 
	var a=0, b=0, c=0, d=0; 
	var x = transformBuffer;
	
	a = state[0];
	b = state[1];
	c = state[2];
	d = state[3];
	
	for (i = 0; i < 16; i++) {
	    x[i] = and(buf[i*4+offset],0xff);
	    for (j = 1; j < 4; j++) {
		x[i]+=shl(and(buf[i*4+j+offset] ,0xff), j * 8);
	    }
	}

	/* Round 1 */
	a = FF ( a, b, c, d, x[ 0], S11, 0xd76aa478); /* 1 */
	d = FF ( d, a, b, c, x[ 1], S12, 0xe8c7b756); /* 2 */
	c = FF ( c, d, a, b, x[ 2], S13, 0x242070db); /* 3 */
	b = FF ( b, c, d, a, x[ 3], S14, 0xc1bdceee); /* 4 */
	a = FF ( a, b, c, d, x[ 4], S11, 0xf57c0faf); /* 5 */
	d = FF ( d, a, b, c, x[ 5], S12, 0x4787c62a); /* 6 */
	c = FF ( c, d, a, b, x[ 6], S13, 0xa8304613); /* 7 */
	b = FF ( b, c, d, a, x[ 7], S14, 0xfd469501); /* 8 */
	a = FF ( a, b, c, d, x[ 8], S11, 0x698098d8); /* 9 */
	d = FF ( d, a, b, c, x[ 9], S12, 0x8b44f7af); /* 10 */
	c = FF ( c, d, a, b, x[10], S13, 0xffff5bb1); /* 11 */
	b = FF ( b, c, d, a, x[11], S14, 0x895cd7be); /* 12 */
	a = FF ( a, b, c, d, x[12], S11, 0x6b901122); /* 13 */
	d = FF ( d, a, b, c, x[13], S12, 0xfd987193); /* 14 */
	c = FF ( c, d, a, b, x[14], S13, 0xa679438e); /* 15 */
	b = FF ( b, c, d, a, x[15], S14, 0x49b40821); /* 16 */

	/* Round 2 */
	a = GG ( a, b, c, d, x[ 1], S21, 0xf61e2562); /* 17 */
	d = GG ( d, a, b, c, x[ 6], S22, 0xc040b340); /* 18 */
	c = GG ( c, d, a, b, x[11], S23, 0x265e5a51); /* 19 */
	b = GG ( b, c, d, a, x[ 0], S24, 0xe9b6c7aa); /* 20 */
	a = GG ( a, b, c, d, x[ 5], S21, 0xd62f105d); /* 21 */
	d = GG ( d, a, b, c, x[10], S22,  0x2441453); /* 22 */
	c = GG ( c, d, a, b, x[15], S23, 0xd8a1e681); /* 23 */
	b = GG ( b, c, d, a, x[ 4], S24, 0xe7d3fbc8); /* 24 */
	a = GG ( a, b, c, d, x[ 9], S21, 0x21e1cde6); /* 25 */
	d = GG ( d, a, b, c, x[14], S22, 0xc33707d6); /* 26 */
	c = GG ( c, d, a, b, x[ 3], S23, 0xf4d50d87); /* 27 */
	b = GG ( b, c, d, a, x[ 8], S24, 0x455a14ed); /* 28 */
	a = GG ( a, b, c, d, x[13], S21, 0xa9e3e905); /* 29 */
	d = GG ( d, a, b, c, x[ 2], S22, 0xfcefa3f8); /* 30 */
	c = GG ( c, d, a, b, x[ 7], S23, 0x676f02d9); /* 31 */
	b = GG ( b, c, d, a, x[12], S24, 0x8d2a4c8a); /* 32 */

	/* Round 3 */
	a = HH ( a, b, c, d, x[ 5], S31, 0xfffa3942); /* 33 */
	d = HH ( d, a, b, c, x[ 8], S32, 0x8771f681); /* 34 */
	c = HH ( c, d, a, b, x[11], S33, 0x6d9d6122); /* 35 */
	b = HH ( b, c, d, a, x[14], S34, 0xfde5380c); /* 36 */
	a = HH ( a, b, c, d, x[ 1], S31, 0xa4beea44); /* 37 */
	d = HH ( d, a, b, c, x[ 4], S32, 0x4bdecfa9); /* 38 */
	c = HH ( c, d, a, b, x[ 7], S33, 0xf6bb4b60); /* 39 */
	b = HH ( b, c, d, a, x[10], S34, 0xbebfbc70); /* 40 */
	a = HH ( a, b, c, d, x[13], S31, 0x289b7ec6); /* 41 */
	d = HH ( d, a, b, c, x[ 0], S32, 0xeaa127fa); /* 42 */
	c = HH ( c, d, a, b, x[ 3], S33, 0xd4ef3085); /* 43 */
	b = HH ( b, c, d, a, x[ 6], S34,  0x4881d05); /* 44 */
	a = HH ( a, b, c, d, x[ 9], S31, 0xd9d4d039); /* 45 */
	d = HH ( d, a, b, c, x[12], S32, 0xe6db99e5); /* 46 */
	c = HH ( c, d, a, b, x[15], S33, 0x1fa27cf8); /* 47 */
	b = HH ( b, c, d, a, x[ 2], S34, 0xc4ac5665); /* 48 */

	/* Round 4 */
	a = II ( a, b, c, d, x[ 0], S41, 0xf4292244); /* 49 */
	d = II ( d, a, b, c, x[ 7], S42, 0x432aff97); /* 50 */
	c = II ( c, d, a, b, x[14], S43, 0xab9423a7); /* 51 */
	b = II ( b, c, d, a, x[ 5], S44, 0xfc93a039); /* 52 */
	a = II ( a, b, c, d, x[12], S41, 0x655b59c3); /* 53 */
	d = II ( d, a, b, c, x[ 3], S42, 0x8f0ccc92); /* 54 */
	c = II ( c, d, a, b, x[10], S43, 0xffeff47d); /* 55 */
	b = II ( b, c, d, a, x[ 1], S44, 0x85845dd1); /* 56 */
	a = II ( a, b, c, d, x[ 8], S41, 0x6fa87e4f); /* 57 */
	d = II ( d, a, b, c, x[15], S42, 0xfe2ce6e0); /* 58 */
	c = II ( c, d, a, b, x[ 6], S43, 0xa3014314); /* 59 */
	b = II ( b, c, d, a, x[13], S44, 0x4e0811a1); /* 60 */
	a = II ( a, b, c, d, x[ 4], S41, 0xf7537e82); /* 61 */
	d = II ( d, a, b, c, x[11], S42, 0xbd3af235); /* 62 */
	c = II ( c, d, a, b, x[ 2], S43, 0x2ad7d2bb); /* 63 */
	b = II ( b, c, d, a, x[ 9], S44, 0xeb86d391); /* 64 */

	state[0] +=a;
	state[1] +=b;
	state[2] +=c;
	state[3] +=d;

    }

    function init() {
	count[0]=count[1] = 0;
	state[0] = 0x67452301;
	state[1] = 0xefcdab89;
	state[2] = 0x98badcfe;
	state[3] = 0x10325476;
	for (i = 0; i < digestBits.length; i++)
	    digestBits[i] = 0;
    }

    function update(b) { 
	var index,i;
	
	index = and(shr(count[0],3) , 0x3f);
	if (count[0]<0xffffffff-7) 
	  count[0] += 8;
        else {
	  count[1]++;
	  count[0]-=0xffffffff+1;
          count[0]+=8;
        }
	buffer[index] = and(b,0xff);
	if (index  >= 63) {
	    transform(buffer, 0);
	}
    }

    function finish() {
	var bits = new array(8);
	var	padding; 
	var	i=0, index=0, padLen=0;

	for (i = 0; i < 4; i++) {
	    bits[i] = and(shr(count[0],(i * 8)), 0xff);
	}
        for (i = 0; i < 4; i++) {
	    bits[i+4]=and(shr(count[1],(i * 8)), 0xff);
	}
	index = and(shr(count[0], 3) ,0x3f);
	padLen = (index < 56) ? (56 - index) : (120 - index);
	padding = new array(64); 
	padding[0] = 0x80;
        for (i=0;i<padLen;i++)
	  update(padding[i]);
        for (i=0;i<8;i++) 
	  update(bits[i]);

	for (i = 0; i < 4; i++) {
	    for (j = 0; j < 4; j++) {
		digestBits[i*4+j] = and(shr(state[i], (j * 8)) , 0xff);
	    }
	} 
    }

/* End of the MD5 algorithm */

function hexa(n) {
 var hexa_h = "0123456789abcdef";
 var hexa_c=""; 
 var hexa_m=n;
 for (hexa_i=0;hexa_i<8;hexa_i++) {
   hexa_c=hexa_h.charAt(Math.abs(hexa_m)%16)+hexa_c;
   hexa_m=Math.floor(hexa_m/16);
 }
 return hexa_c;
}


var ascii="01234567890123456789012345678901" +
          " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
          "[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~";

function MD5(entree) 
{
 var l,s,k,ka,kb,kc,kd;

 init();
 for (k=0;k<entree.length;k++) {
   l=entree.charAt(k);
   update(ascii.lastIndexOf(l));
 }
 finish();
 ka=kb=kc=kd=0;
 for (i=0;i<4;i++) ka+=shl(digestBits[15-i], (i*8));
 for (i=4;i<8;i++) kb+=shl(digestBits[15-i], ((i-4)*8));
 for (i=8;i<12;i++) kc+=shl(digestBits[15-i], ((i-8)*8));
 for (i=12;i<16;i++) kd+=shl(digestBits[15-i], ((i-12)*8));
 s=hexa(kd)+hexa(kc)+hexa(kb)+hexa(ka);
 return s; 
}

/* This implement the MD5 test suite */
var testOk=false;
function teste() {
 if (testOk) return;
 document.test.o1.value=MD5(document.test.i1.value);
 document.test.o2.value=MD5(document.test.i2.value);
 document.test.o3.value=MD5(document.test.i3.value);
 document.test.o4.value=MD5(document.test.i4.value);
 document.test.o5.value=MD5(document.test.i5.value);
 document.test.o6.value=MD5(document.test.i6.value);
 document.test.o7.value=MD5(document.test.i7.value);
 testOk=true;
}

jQuery(function() {
	var entries = jQuery(".entry");
    
    function getCurrentEntry() {
        var scrollTop = jQuery(window).scrollTop();
        for (var i=0; i<entries.length; ++i) {
            // there is no exact equality between offset and scrollTop after call to scrollTo:
            // there may be offset=180.1, scrollTop=180
            // console.log("entry=" + i + ", entries.eq(i).offset().top=" + entries.eq(i).offset().top + ", scrollTop=" + scrollTop);
            if (entries.eq(i).offset().top-20 > scrollTop) {
                return i-1;
            }
        }
        return entries.length-1;
    }

	function keyCheck(e) {

    	if (!entries.length) {
            // console.log("No entries");
			return;
		}

        // do not mess with form inputs
        var activeElement = document.activeElement;
        if (activeElement) {
            var nodeName = activeElement.nodeName.toLowerCase();
            if (nodeName=="input" || nodeName=="textarea" || nodeName=="select") {
                // console.log("returning from form element: " + nodeName);
                return;
            }
        }
        // console.log("Key code = " + e.keyCode);

		var pos;
		if (e.keyCode === 78) {
			// next
            var anchor = getCurrentEntry()+1;
            // console.log("next, anchor=" + anchor + ", entries.length=" + entries.length);
			if (anchor >= entries.length) {
				return;
			}
			pos = entries.eq(anchor).offset();
			window.scrollTo(pos.left, pos.top-10);
		}
		if (e.keyCode === 80) {
			//previous
			var anchor = getCurrentEntry()-1;
            // console.log("prev, anchor=" + anchor + ", entries.length=" + entries.length);
			if (anchor < 0) {
                return; 
			}
			pos = entries.eq(anchor).offset();
			window.scrollTo(pos.left, pos.top-10);
		}
	}

    if (entries.length>1) {
        // console.log("Installing keyCheck");
	    jQuery(document).keyup(keyCheck);
    }
});
