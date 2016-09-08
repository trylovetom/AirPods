(function e(h,j,l){function m(a,c){if(!j[a]){if(!h[a]){var d=typeof require=="function"&&require;
if(!c&&d){return d(a,!0)}if(i){return i(a,!0)}var b=new Error("Cannot find module '"+a+"'");
throw b.code="MODULE_NOT_FOUND",b}var f=j[a]={exports:{}};h[a][0].call(f.exports,function(g){var n=h[a][1][g];
return m(n?n:g)},f,f.exports,e,h,j,l)}return j[a].exports}var i=typeof require=="function"&&require;
for(var k=0;k<l.length;k++){m(l[k])}return m})({1:[function(m,l,h){var j=m("./utils/addEventListener");
var i=m("./shared/getEventType");l.exports=function k(a,c,b,d){c=i(a,c);return j(a,c,b,d)
}},{"./shared/getEventType":11,"./utils/addEventListener":15}],2:[function(l,k,m){var i=l("./utils/dispatchEvent");
var h=l("./shared/getEventType");k.exports=function j(a,b,c){b=h(a,b);return i(a,b,c)
}},{"./shared/getEventType":11,"./utils/dispatchEvent":16}],3:[function(d,g,f){g.exports={addEventListener:d("./addEventListener"),dispatchEvent:d("./dispatchEvent"),preventDefault:d("./preventDefault"),removeEventListener:d("./removeEventListener"),stop:d("./stop"),stopPropagation:d("./stopPropagation"),target:d("./target")}
},{"./addEventListener":1,"./dispatchEvent":2,"./preventDefault":9,"./removeEventListener":10,"./stop":12,"./stopPropagation":13,"./target":14}],4:[function(p,r,o){var n=p("./utils/eventTypeAvailable");
var k=p("./shared/camelCasedEventTypes");var q=p("./shared/windowFallbackEventTypes");
var m=p("./shared/prefixHelper");var s={};r.exports=function l(a,b){var f;var d;
var c;b=b||"div";a=a.toLowerCase();if(!(b in s)){s[b]={}}d=s[b];if(a in d){return d[a]
}if(n(a,b)){return d[a]=a}if(a in k){for(c=0;c<k[a].length;c++){f=k[a][c];if(n(f.toLowerCase(),b)){return d[a]=f
}}}for(c=0;c<m.evt.length;c++){f=m.evt[c]+a;if(n(f,b)){m.reduce(c);return d[a]=f
}}if(b!=="window"&&q.indexOf(a)){return d[a]=l(a,"window")}return d[a]=false}},{"./shared/camelCasedEventTypes":5,"./shared/prefixHelper":6,"./shared/windowFallbackEventTypes":7,"./utils/eventTypeAvailable":8}],5:[function(d,g,f){g.exports={transitionend:["webkitTransitionEnd","MSTransitionEnd"],animationstart:["webkitAnimationStart","MSAnimationStart"],animationend:["webkitAnimationEnd","MSAnimationEnd"],animationiteration:["webkitAnimationIteration","MSAnimationIteration"],fullscreenchange:["MSFullscreenChange"],fullscreenerror:["MSFullscreenError"]}
},{}],6:[function(j,p,k){var l=["-webkit-","-moz-","-ms-"];var o=["Webkit","Moz","ms"];
var m=["webkit","moz","ms"];var q=function(){this.initialize()};var n=q.prototype;
n.initialize=function(){this.reduced=false;this.css=l;this.dom=o;this.evt=m};n.reduce=function(a){if(!this.reduced){this.reduced=true;
this.css=[this.css[a]];this.dom=[this.dom[a]];this.evt=[this.evt[a]]}};p.exports=new q()
},{}],7:[function(d,g,f){g.exports=["transitionend","animationstart","animationend","animationiteration"]
},{}],8:[function(k,i,g){var h={window:window,document:document};i.exports=function j(a,c){var b;
a="on"+a;if(!(c in h)){h[c]=document.createElement(c)}b=h[c];if(a in b){return true
}if("setAttribute" in b){b.setAttribute(a,"return;");return(typeof b[a]==="function")
}return false}},{}],9:[function(i,h,g){h.exports=function f(a){a=a||window.event;
if(a.preventDefault){a.preventDefault()}else{a.returnValue=false}}},{}],10:[function(l,k,m){var h=l("./utils/removeEventListener");
var i=l("./shared/getEventType");k.exports=function j(a,c,b,d){c=i(a,c);return h(a,c,b,d)
}},{"./shared/getEventType":11,"./utils/removeEventListener":17}],11:[function(k,i,g){var j=k("@marcom/ac-prefixer/getEventType");
i.exports=function h(a,b){var c;var d;if("tagName" in a){c=a.tagName}else{if(a===window){c="window"
}else{c="document"}}d=j(b,c);if(d){return d}return b}},{"@marcom/ac-prefixer/getEventType":4}],12:[function(l,j,h){var i=l("./stopPropagation");
var m=l("./preventDefault");j.exports=function k(a){a=a||window.event;i(a);m(a);
a.stopped=true;a.returnValue=false}},{"./preventDefault":9,"./stopPropagation":13}],13:[function(i,h,f){h.exports=function g(a){a=a||window.event;
if(a.stopPropagation){a.stopPropagation()}else{a.cancelBubble=true}}},{}],14:[function(f,i,g){i.exports=function h(a){a=a||window.event;
return(typeof a.target!=="undefined")?a.target:a.srcElement}},{}],15:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.addEventListener){a.addEventListener(c,b,!!d)
}else{a.attachEvent("on"+c,b)}return a}},{}],16:[function(f,i,g){f("@marcom/ac-polyfills/CustomEvent");
i.exports=function h(a,b,c){var d;if(a.dispatchEvent){if(c){d=new CustomEvent(b,c)
}else{d=new CustomEvent(b)}a.dispatchEvent(d)}else{d=document.createEventObject();
if(c&&"detail" in c){d.detail=c.detail}a.fireEvent("on"+b,d)}return a}},{"@marcom/ac-polyfills/CustomEvent":"@marcom/ac-polyfills/CustomEvent"}],17:[function(f,i,g){i.exports=function h(a,c,b,d){if(a.removeEventListener){a.removeEventListener(c,b,!!d)
}else{a.detachEvent("on"+c,b)}return a}},{}],18:[function(d,g,f){g.exports=8},{}],19:[function(d,g,f){g.exports=11
},{}],20:[function(d,g,f){g.exports=9},{}],21:[function(d,g,f){g.exports=10},{}],22:[function(d,g,f){g.exports=1
},{}],23:[function(d,g,f){g.exports=3},{}],24:[function(i,h,f){h.exports=function g(b){var c=document.createDocumentFragment();
var a;if(b){a=document.createElement("div");a.innerHTML=b;while(a.firstChild){c.appendChild(a.firstChild)
}}return c}},{}],25:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var j=l("./internal/isNodeType");
var i=l("./ELEMENT_NODE");k.exports=function h(a,b){b=b||i;a=Array.prototype.slice.call(a);
return a.filter(function(c){return j(c,b)})}},{"./ELEMENT_NODE":22,"./internal/isNodeType":33,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],26:[function(i,h,g){h.exports=function f(a,b){if("hasAttribute" in a){return a.hasAttribute(b)
}return(a.attributes.getNamedItem(b)!==null)}},{}],27:[function(d,g,f){g.exports={createDocumentFragment:d("./createDocumentFragment"),filterByNodeType:d("./filterByNodeType"),hasAttribute:d("./hasAttribute"),indexOf:d("./indexOf"),insertAfter:d("./insertAfter"),insertBefore:d("./insertBefore"),insertFirstChild:d("./insertFirstChild"),insertLastChild:d("./insertLastChild"),isComment:d("./isComment"),isDocument:d("./isDocument"),isDocumentFragment:d("./isDocumentFragment"),isDocumentType:d("./isDocumentType"),isElement:d("./isElement"),isNode:d("./isNode"),isNodeList:d("./isNodeList"),isTextNode:d("./isTextNode"),remove:d("./remove"),replace:d("./replace"),COMMENT_NODE:d("./COMMENT_NODE"),DOCUMENT_FRAGMENT_NODE:d("./DOCUMENT_FRAGMENT_NODE"),DOCUMENT_NODE:d("./DOCUMENT_NODE"),DOCUMENT_TYPE_NODE:d("./DOCUMENT_TYPE_NODE"),ELEMENT_NODE:d("./ELEMENT_NODE"),TEXT_NODE:d("./TEXT_NODE")}
},{"./COMMENT_NODE":18,"./DOCUMENT_FRAGMENT_NODE":19,"./DOCUMENT_NODE":20,"./DOCUMENT_TYPE_NODE":21,"./ELEMENT_NODE":22,"./TEXT_NODE":23,"./createDocumentFragment":24,"./filterByNodeType":25,"./hasAttribute":26,"./indexOf":28,"./insertAfter":29,"./insertBefore":30,"./insertFirstChild":31,"./insertLastChild":32,"./isComment":35,"./isDocument":36,"./isDocumentFragment":37,"./isDocumentType":38,"./isElement":39,"./isNode":40,"./isNodeList":41,"./isTextNode":42,"./remove":43,"./replace":44}],28:[function(m,l,h){m("@marcom/ac-polyfills/Array/prototype.indexOf");
m("@marcom/ac-polyfills/Array/prototype.slice");var j=m("./internal/validate");
var i=m("./filterByNodeType");l.exports=function k(a,c){var d=a.parentNode;var b;
if(!d){return 0}b=d.childNodes;if(c!==false){b=i(b,c)}else{b=Array.prototype.slice.call(b)
}return b.indexOf(a)}},{"./filterByNodeType":25,"./internal/validate":34,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],29:[function(g,k,h){var i=g("./internal/validate");
k.exports=function j(b,a){i.insertNode(b,true,"insertAfter");i.childNode(a,true,"insertAfter");
i.hasParentNode(a,"insertAfter");if(!a.nextSibling){return a.parentNode.appendChild(b)
}return a.parentNode.insertBefore(b,a.nextSibling)}},{"./internal/validate":34}],30:[function(k,j,h){var i=k("./internal/validate");
j.exports=function g(b,a){i.insertNode(b,true,"insertBefore");i.childNode(a,true,"insertBefore");
i.hasParentNode(a,"insertBefore");return a.parentNode.insertBefore(b,a)}},{"./internal/validate":34}],31:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(b,a){i.insertNode(b,true,"insertFirstChild");i.parentNode(a,true,"insertFirstChild");
if(!a.firstChild){return a.appendChild(b)}return a.insertBefore(b,a.firstChild)
}},{"./internal/validate":34}],32:[function(g,k,h){var j=g("./internal/validate");
k.exports=function i(b,a){j.insertNode(b,true,"insertLastChild");j.parentNode(a,true,"insertLastChild");
return a.appendChild(b)}},{"./internal/validate":34}],33:[function(g,k,h){var j=g("../isNode");
k.exports=function i(a,b){if(!j(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)}},{"../isNode":40}],34:[function(z,B,w){var D=z("./isNodeType");
var C=z("../COMMENT_NODE");var v=z("../DOCUMENT_FRAGMENT_NODE");var x=z("../ELEMENT_NODE");
var y=z("../TEXT_NODE");var t=[x,y,C,v];var A=" must be an Element, TextNode, Comment, or Document Fragment";
var q=[x,y,C];var u=" must be an Element, TextNode, or Comment";var s=[x,v];var r=" must be an Element, or Document Fragment";
var E=" must have a parentNode";B.exports={parentNode:function(d,a,b,c){c=c||"target";
if((d||a)&&!D(d,s)){throw new TypeError(b+": "+c+r)}},childNode:function(d,a,b,c){c=c||"target";
if(!d&&!a){return}if(!D(d,q)){throw new TypeError(b+": "+c+u)}},insertNode:function(d,a,b,c){c=c||"node";
if(!d&&!a){return}if(!D(d,t)){throw new TypeError(b+": "+c+A)}},hasParentNode:function(c,a,b){b=b||"target";
if(!c.parentNode){throw new TypeError(a+": "+b+E)}}}},{"../COMMENT_NODE":18,"../DOCUMENT_FRAGMENT_NODE":19,"../ELEMENT_NODE":22,"../TEXT_NODE":23,"./isNodeType":33}],35:[function(m,l,i){var j=m("./internal/isNodeType");
var k=m("./COMMENT_NODE");l.exports=function h(a){return j(a,k)}},{"./COMMENT_NODE":18,"./internal/isNodeType":33}],36:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_NODE":20,"./internal/isNodeType":33}],37:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./DOCUMENT_FRAGMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./DOCUMENT_FRAGMENT_NODE":19,"./internal/isNodeType":33}],38:[function(h,m,i){var j=h("./internal/isNodeType");
var k=h("./DOCUMENT_TYPE_NODE");m.exports=function l(a){return j(a,k)}},{"./DOCUMENT_TYPE_NODE":21,"./internal/isNodeType":33}],39:[function(m,l,h){var j=m("./internal/isNodeType");
var i=m("./ELEMENT_NODE");l.exports=function k(a){return j(a,i)}},{"./ELEMENT_NODE":22,"./internal/isNodeType":33}],40:[function(f,i,g){i.exports=function h(a){return !!(a&&a.nodeType)
}},{}],41:[function(k,j,g){var i=/^\[object (HTMLCollection|NodeList|Object)\]$/;
j.exports=function h(a){if(!a){return false}if(typeof a.length!=="number"){return false
}if(typeof a[0]==="object"&&(!a[0]||!a[0].nodeType)){return false}return i.test(Object.prototype.toString.call(a))
}},{}],42:[function(m,l,i){var j=m("./internal/isNodeType");var h=m("./TEXT_NODE");
l.exports=function k(a){return j(a,h)}},{"./TEXT_NODE":23,"./internal/isNodeType":33}],43:[function(k,j,g){var i=k("./internal/validate");
j.exports=function h(a){i.childNode(a,true,"remove");if(!a.parentNode){return a
}return a.parentNode.removeChild(a)}},{"./internal/validate":34}],44:[function(g,j,h){var i=g("./internal/validate");
j.exports=function k(b,a){i.insertNode(b,true,"insertFirstChild","newNode");i.childNode(a,true,"insertFirstChild","oldNode");
i.hasParentNode(a,"insertFirstChild","oldNode");return a.parentNode.replaceChild(b,a)
}},{"./internal/validate":34}],45:[function(m,l,h){var k=m("@marcom/ac-prefixer/getStyleProperty");
var j=m("@marcom/ac-prefixer/stripPrefixes");l.exports=function i(){var c=Array.prototype.slice.call(arguments);
var g=c.shift(c);var a=window.getComputedStyle(g);var b={};var q;var f;var r;var d;
if(typeof c[0]!=="string"){c=c[0]}for(d=0;d<c.length;d++){q=c[d];f=k(q);if(f){q=j(f);
r=a[f];if(!r||r==="auto"){r=null}if(r){r=j(r)}}else{r=null}b[q]=r}return b}},{"@marcom/ac-prefixer/getStyleProperty":49,"@marcom/ac-prefixer/stripPrefixes":55}],46:[function(d,g,f){g.exports={getStyle:d("./getStyle"),setStyle:d("./setStyle")}
},{"./getStyle":45,"./setStyle":58}],47:[function(i,h,f){h.exports=function g(a){var b;
var c;var d;if(!a&&a!==0){return""}if(Array.isArray(a)){return a+""}if(typeof a==="object"){b="";
c=Object.keys(a);for(d=0;d<c.length;d++){b+=c[d]+"("+a[c[d]]+") "}return b.trim()
}return a}},{}],48:[function(n,m,o){var i=n("./shared/stylePropertyCache");var k=n("./getStyleProperty");
var l=n("./getStyleValue");m.exports=function j(a,b){var c;a=k(a);if(!a){return false
}c=i[a].css;if(typeof b!=="undefined"){b=l(a,b);if(b===false){return false}c+=":"+b+";"
}return c}},{"./getStyleProperty":49,"./getStyleValue":50,"./shared/stylePropertyCache":53}],49:[function(q,r,o){var u=q("./shared/stylePropertyCache");
var n=q("./shared/getStyleTestElement");var t=q("./utils/toCSS");var l=q("./utils/toDOM");
var m=q("./shared/prefixHelper");var s=function(c,b){var a=t(c);var d=(b===false)?false:t(b);
u[c]=u[b]=u[a]=u[d]={dom:b,css:d};return b};r.exports=function p(c){var f;var b;
var d;var a;c+="";if(c in u){return u[c].dom}d=n();c=l(c);b=c.charAt(0).toUpperCase()+c.substring(1);
if(c==="filter"){f=["WebkitFilter","filter"]}else{f=(c+" "+m.dom.join(b+" ")+b).split(" ")
}for(a=0;a<f.length;a++){if(typeof d.style[f[a]]!=="undefined"){if(a!==0){m.reduce(a-1)
}return s(c,f[a])}}return s(c,false)}},{"./shared/getStyleTestElement":51,"./shared/prefixHelper":52,"./shared/stylePropertyCache":53,"./utils/toCSS":56,"./utils/toDOM":57}],50:[function(t,v,q){var s=t("./getStyleProperty");
var n=t("./shared/styleValueAvailable");var o=t("./shared/prefixHelper");var w=t("./shared/stylePropertyCache");
var p={};var m=/(\([^\)]+\))/gi;var r=/([^ ,;\(]+(\([^\)]+\))?)/gi;v.exports=function u(b,c){var a;
c+="";b=s(b);if(!b){return false}if(n(b,c)){return c}a=w[b].css;c=c.replace(r,function(h){var i;
var d;var f;var g;if(h[0]==="#"||!isNaN(h[0])){return h}d=h.replace(m,"");f=a+":"+d;
if(f in p){if(p[f]===false){return""}return h.replace(d,p[f])}i=o.css.map(function(j){return j+h
});i=[h].concat(i);for(g=0;g<i.length;g++){if(n(b,i[g])){if(g!==0){o.reduce(g-1)
}p[f]=i[g].replace(m,"");return i[g]}}p[f]=false;return""});c=c.trim();return(c==="")?false:c
}},{"./getStyleProperty":49,"./shared/prefixHelper":52,"./shared/stylePropertyCache":53,"./shared/styleValueAvailable":54}],51:[function(k,j,g){var i;
j.exports=function h(){if(!i){i=document.createElement("_")}else{i.style.cssText="";
i.removeAttribute("style")}return i};j.exports.resetElement=function(){i=null}},{}],52:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{dup:6}],53:[function(d,g,f){g.exports={}},{}],54:[function(s,t,r){var u=s("./stylePropertyCache");
var q=s("./getStyleTestElement");var n=false;var l;var m;var p=function(){var b;
if(!n){n=true;l=("CSS" in window&&"supports" in window.CSS);m=false;b=q();try{b.style.width="invalid"
}catch(a){m=true}}};t.exports=function o(d,f){var a;var b;p();if(l){d=u[d].css;
return CSS.supports(d,f)}b=q();a=b.style[d];if(m){try{b.style[d]=f}catch(c){return false
}}else{b.style[d]=f}return(b.style[d]&&b.style[d]!==a)};t.exports.resetFlags=function(){n=false
}},{"./getStyleTestElement":51,"./stylePropertyCache":53}],55:[function(k,j,h){var g=/(-webkit-|-moz-|-ms-)|^(webkit|moz|ms)/gi;
j.exports=function i(a){a=String.prototype.replace.call(a,g,"");return a.charAt(0).toLowerCase()+a.substring(1)
}},{}],56:[function(k,j,g){var i=/^(webkit|moz|ms)/gi;j.exports=function h(a){var b;
if(a.toLowerCase()==="cssfloat"){return"float"}if(i.test(a)){a="-"+a}return a.replace(/([A-Z]+)([A-Z][a-z])/g,"$1-$2").replace(/([a-z\d])([A-Z])/g,"$1-$2").toLowerCase()
}},{}],57:[function(g,k,h){var i=/-([a-z])/g;k.exports=function j(a){var b;if(a.toLowerCase()==="float"){return"cssFloat"
}a=a.replace(i,function(c,d){return d.toUpperCase()});if(a.substr(0,2)==="Ms"){a="ms"+a.substring(2)
}return a}},{}],58:[function(n,m,o){var j=n("@marcom/ac-prefixer/getStyleCSS");
var l=n("@marcom/ac-prefixer/getStyleProperty");var i=n("./internal/normalizeValue");
m.exports=function k(h,b){var c="";var d;var q;var f;var a;var g;if(typeof b!=="object"){throw new TypeError("setStyle: styles must be an Object")
}for(q in b){a=i(b[q]);if(!a&&a!==0){f=l(q);if("removeAttribute" in h.style){h.style.removeAttribute(f)
}else{h.style[f]=""}}else{d=j(q,a);if(d!==false){c+=" "+d}}}if(c.length){g=h.style.cssText;
if(g.charAt(g.length-1)!==";"){g+=";"}g+=c;h.style.cssText=g}return h}},{"./internal/normalizeValue":47,"@marcom/ac-prefixer/getStyleCSS":48,"@marcom/ac-prefixer/getStyleProperty":49}],59:[function(n,l,o){var i=n("@marcom/ac-dom-nodes/filterByNodeType");
var j=n("./filterBySelector");var k=n("./internal/validate");l.exports=function m(a,c){var b;
k.parentNode(a,true,"children");k.selector(c,false,"children");b=a.children||a.childNodes;
b=i(b);if(c){b=j(b,c)}return b}},{"./filterBySelector":60,"./internal/validate":62,"@marcom/ac-dom-nodes/filterByNodeType":25}],60:[function(l,k,m){l("@marcom/ac-polyfills/Array/prototype.slice");
l("@marcom/ac-polyfills/Array/prototype.filter");var h=l("./matchesSelector");var j=l("./internal/validate");
k.exports=function i(a,b){j.selector(b,true,"filterBySelector");a=Array.prototype.slice.call(a);
return a.filter(function(c){return h(c,b)})}},{"./internal/validate":62,"./matchesSelector":63,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],61:[function(d,g,f){g.exports=window.Element?(function(a){return a.matches||a.matchesSelector||a.webkitMatchesSelector||a.mozMatchesSelector||a.msMatchesSelector||a.oMatchesSelector
}(Element.prototype)):null},{}],62:[function(z,C,x){z("@marcom/ac-polyfills/Array/prototype.indexOf");
var r=z("@marcom/ac-dom-nodes/isNode");var D=z("@marcom/ac-dom-nodes/COMMENT_NODE");
var v=z("@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE");var w=z("@marcom/ac-dom-nodes/DOCUMENT_NODE");
var y=z("@marcom/ac-dom-nodes/ELEMENT_NODE");var A=z("@marcom/ac-dom-nodes/TEXT_NODE");
var E=function(a,b){if(!r(a)){return false}if(typeof b==="number"){return(a.nodeType===b)
}return(b.indexOf(a.nodeType)!==-1)};var t=[y,w,v];var s=" must be an Element, Document, or Document Fragment";
var q=[y,A,D];var u=" must be an Element, TextNode, or Comment";var B=" must be a string";
C.exports={parentNode:function(d,a,b,c){c=c||"node";if((d||a)&&!E(d,t)){throw new TypeError(b+": "+c+s)
}},childNode:function(d,a,b,c){c=c||"node";if(!d&&!a){return}if(!E(d,q)){throw new TypeError(b+": "+c+u)
}},selector:function(d,a,b,c){c=c||"selector";if((d||a)&&typeof d!=="string"){throw new TypeError(b+": "+c+B)
}}}},{"@marcom/ac-dom-nodes/COMMENT_NODE":18,"@marcom/ac-dom-nodes/DOCUMENT_FRAGMENT_NODE":19,"@marcom/ac-dom-nodes/DOCUMENT_NODE":20,"@marcom/ac-dom-nodes/ELEMENT_NODE":22,"@marcom/ac-dom-nodes/TEXT_NODE":23,"@marcom/ac-dom-nodes/isNode":40,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],63:[function(p,o,q){var n=p("@marcom/ac-dom-nodes/isElement");
var l=p("./internal/validate");var k=p("./internal/nativeMatches");var m=p("./shims/matchesSelector");
o.exports=function j(a,b){l.selector(b,true,"matchesSelector");if(!n(a)){return false
}if(!k){return m(a,b)}return k.call(a,b)}},{"./internal/nativeMatches":61,"./internal/validate":62,"./shims/matchesSelector":66,"@marcom/ac-dom-nodes/isElement":39}],64:[function(o,n,j){var k=o("./internal/validate");
var i=o("./shims/querySelector");var l=("querySelector" in document);n.exports=function m(b,a){a=a||document;
k.parentNode(a,true,"querySelector","context");k.selector(b,true,"querySelector");
if(!l){return i(b,a)}return a.querySelector(b)}},{"./internal/validate":62,"./shims/querySelector":67}],65:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.slice");
var k=i("./internal/validate");var l=i("./shims/querySelectorAll");var m=("querySelectorAll" in document);
o.exports=function n(b,a){a=a||document;k.parentNode(a,true,"querySelectorAll","context");
k.selector(b,true,"querySelectorAll");if(!m){return l(b,a)}return Array.prototype.slice.call(a.querySelectorAll(b))
}},{"./internal/validate":62,"./shims/querySelectorAll":68,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],66:[function(k,j,g){var i=k("../querySelectorAll");
j.exports=function h(a,f){var b=a.parentNode||document;var d=i(f,b);var c;for(c=0;
c<d.length;c++){if(d[c]===a){return true}}return false}},{"../querySelectorAll":65}],67:[function(g,k,h){var j=g("./querySelectorAll");
k.exports=function i(b,a){var c=j(b,a);return c.length?c[0]:null}},{"./querySelectorAll":68}],68:[function(s,t,q){s("@marcom/ac-polyfills/Array/prototype.indexOf");
var m=s("@marcom/ac-dom-nodes/isElement");var o=s("@marcom/ac-dom-nodes/isDocumentFragment");
var l=s("@marcom/ac-dom-nodes/remove");var r="_ac_qsa_";var n=function(c,b){var a;
if(b===document){return true}a=c;while((a=a.parentNode)&&m(a)){if(a===b){return true
}}return false};var p=function(a){if("recalc" in a){a.recalc(false)}else{document.recalc(false)
}window.scrollBy(0,0)};t.exports=function u(b,g){var d=document.createElement("style");
var c=r+(Math.random()+"").slice(-6);var a=[];var f;g=g||document;document[c]=[];
if(o(g)){g.appendChild(d)}else{document.documentElement.firstChild.appendChild(d)
}d.styleSheet.cssText="*{display:recalc;}"+b+'{ac-qsa:expression(document["'+c+'"] && document["'+c+'"].push(this));}';
p(g);while(document[c].length){f=document[c].shift();f.style.removeAttribute("ac-qsa");
if(a.indexOf(f)===-1&&n(f,g)){a.push(f)}}document[c]=null;l(d);p(g);return a}},{"@marcom/ac-dom-nodes/isDocumentFragment":37,"@marcom/ac-dom-nodes/isElement":39,"@marcom/ac-dom-nodes/remove":43,"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],69:[function(h,l,i){var m=h("./children");
var j=h("./internal/validate");l.exports=function k(a,c){var b=[];j.childNode(a,true,"siblings");
j.selector(c,false,"siblings");if(a.parentNode){b=m(a.parentNode,c);b=b.filter(function(d){return(d!==a)
})}return b}},{"./children":59,"./internal/validate":62}],70:[function(m,l,h){var j=m("./ac-clock/Clock"),k=m("./ac-clock/ThrottledClock"),i=m("./ac-clock/sharedClockInstance");
i.Clock=j;i.ThrottledClock=k;l.exports=i},{"./ac-clock/Clock":71,"./ac-clock/ThrottledClock":72,"./ac-clock/sharedClockInstance":73}],71:[function(o,n,i){o("@marcom/ac-polyfills/Function/prototype.bind");
o("@marcom/ac-polyfills/requestAnimationFrame");var l;var m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var j=new Date().getTime();function k(){m.call(this);this.lastFrameTime=null;this._animationFrame=null;
this._active=false;this._startTime=null;this._boundOnAnimationFrame=this._onAnimationFrame.bind(this);
this._getTime=Date.now||function(){return new Date().getTime()}}l=k.prototype=new m(null);
l.start=function(){if(this._active){return}this._tick()};l.stop=function(){if(this._active){window.cancelAnimationFrame(this._animationFrame)
}this._animationFrame=null;this.lastFrameTime=null;this._active=false};l.destroy=function(){this.stop();
this.off();var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};l.isRunning=function(){return this._active
};l._tick=function(){if(!this._active){this._active=true}this._animationFrame=window.requestAnimationFrame(this._boundOnAnimationFrame)
};l._onAnimationFrame=function(b){if(this.lastFrameTime===null){this.lastFrameTime=b
}var a=b-this.lastFrameTime;var c=0;if(a>=1000){a=0}if(a!==0){c=1000/a}if(this._firstFrame===true){a=0;
this._firstFrame=false}if(c===0){this._firstFrame=true}else{var d={time:b,delta:a,fps:c,naturalFps:c,timeNow:this._getTime()};
this.trigger("update",d);this.trigger("draw",d)}this._animationFrame=null;this.lastFrameTime=b;
if(this._active!==false){this._tick()}else{this.lastFrameTime=null}};n.exports=k
},{"@marcom/ac-event-emitter-micro":106,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],72:[function(o,n,i){o("@marcom/ac-polyfills/requestAnimationFrame");
var l;var j=o("./sharedClockInstance"),m=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function k(a,b){if(a===null){return}m.call(this);b=b||{};this._fps=a||null;this._clock=b.clock||j;
this._lastThrottledTime=null;this._clockEvent=null;this._boundOnClockDraw=this._onClockDraw.bind(this);
this._boundOnClockUpdate=this._onClockUpdate.bind(this);this._clock.on("update",this._boundOnClockUpdate)
}l=k.prototype=new m(null);l.setFps=function(a){this._fps=a;return this};l.getFps=function(){return this._fps
};l.start=function(){this._clock.start();return this};l.stop=function(){this._clock.stop();
return this};l.isRunning=function(){return this._clock.isRunning()};l.destroy=function(){this._clock.off("update",this._boundOnClockUpdate);
this._clock.destroy.call(this)};l._onClockUpdate=function(b){if(this._lastThrottledTime===null){this._lastThrottledTime=this._clock.lastFrameTime
}var a=b.time-this._lastThrottledTime;if(!this._fps){throw new TypeError("FPS is not defined.")
}if(Math.ceil(1000/a)>=this._fps+2){return}this._clockEvent=b;this._clockEvent.delta=a;
this._clockEvent.fps=1000/a;this._lastThrottledTime=this._clockEvent.time;this._clock.once("draw",this._boundOnClockDraw);
this.trigger("update",this._clockEvent)};l._onClockDraw=function(){this.trigger("draw",this._clockEvent)
};n.exports=k},{"./sharedClockInstance":73,"@marcom/ac-event-emitter-micro":106,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame"}],73:[function(f,i,g){var h=f("./Clock");
i.exports=new h()},{"./Clock":71}],74:[function(d,g,f){g.exports={Clip:d("./ac-clip/Clip")}
},{"./ac-clip/Clip":75}],75:[function(u,v,t){u("@marcom/ac-polyfills/Array/isArray");
var r=u("@marcom/ac-object/create");var m=u("@marcom/ac-easing").createPredefined;
var w=u("@marcom/ac-clock");var o=u("@marcom/ac-easing").Ease;var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p="ease";function q(d,f,b,a){a=a||{};this._options=a;this._isYoyo=a.yoyo;this._direction=1;
this._timeScale=1;this._loop=a.loop||0;this._loopCount=0;this._target=d;this.duration(f);
this._delay=(a.delay||0)*1000;this._remainingDelay=this._delay;this._progress=0;
this._clock=a.clock||w;this._playing=false;this._getTime=Date.now||function(){return new Date().getTime()
};this._propsTo=b||{};this._propsFrom=a.propsFrom||{};this._onStart=a.onStart||null;
this._onUpdate=a.onUpdate||null;this._onDraw=a.onDraw||null;this._onComplete=a.onComplete||null;
var c=a.ease||p;this._ease=(typeof c==="function")?new o(c):m(c);this._start=this._start.bind(this);
this._update=this._update.bind(this);this._draw=this._draw.bind(this);this._isPrepared=false;
q._add(this);n.call(this)}var s=q.prototype=r(n.prototype);q.COMPLETE="complete";
q.PAUSE="pause";q.PLAY="play";s.play=function(){if(!this._playing){this._playing=true;
if(this._delay===0||this._remainingDelay===0){this._start()}else{if(!this._isPrepared){this._setDiff();
this._updateProps()}this._startTimeout=setTimeout(this._start,this._remainingDelay/this._timeScale);
this._delayStart=this._getTime()}}return this};s.pause=function(){if(this._playing){if(this._startTimeout){this._remainingDelay=this._getTime()-this._delayStart;
clearTimeout(this._startTimeout)}this._stop();this.trigger(q.PAUSE,this)}return this
};s.destroy=function(){this.pause();this._options=null;this._target=null;this._storeTarget=null;
this._ease=null;this._clock=null;this._propsTo=null;this._propsFrom=null;this._storePropsTo=null;
this._storePropsFrom=null;this._propsDiff=null;this._propsEase=null;this._onStart=null;
this._onUpdate=null;this._onDraw=null;this._onComplete=null;q._remove(this);n.prototype.destroy.call(this);
return this};s.reset=function(){if(!this._isPrepared){return}this._stop();this._resetLoop(this._target,this._storeTarget);
this._direction=1;this._loop=this._options.loop||0;this._loopCount=0;this._propsFrom=this._storePropsFrom;
this._propsTo=this._storePropsTo;this._progress=0;this._setStartTime();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}return this};s.playing=function(){return this._playing
};s.target=function(){return this._target};s.duration=function(a){if(a!==undefined){this._duration=a;
this._durationMs=(a*1000)/this._timeScale;if(this._playing){this._setStartTime()
}}return this._duration};s.timeScale=function(a){if(a!==undefined){this._timeScale=a;
this.duration(this._duration)}return this._timeScale};s.currentTime=function(a){if(a!==undefined){return this.progress(a/this._duration)*this._duration
}return(this.progress()*this._duration)};s.progress=function(a){if(a!==undefined){this._progress=Math.min(1,Math.max(0,a));
this._setStartTime();if(!this._isPrepared){this._setDiff()}if(this._playing&&a===1){this._completeProps();
if(this._onUpdate){this._onUpdate.call(this,this)}if(this._onDraw){this._onDraw.call(this,this)
}this._complete()}else{this._updateProps();if(this._onUpdate){this._onUpdate.call(this,this)
}if(this._onDraw){this._onDraw.call(this,this)}}}return this._progress};s._resetLoop=function(c,a){var b;
for(b in a){if(a.hasOwnProperty(b)){if(a[b]!==null){if(typeof a[b]==="object"){this._resetLoop(c[b],a[b])
}else{c[b]=a[b]}}}}};s._cloneObjects=function(){var b={};var c={};var a={};this._cloneObjectsLoop(this._target,this._propsTo,this._propsFrom,b,c,a);
return{target:b,propsTo:c,propsFrom:a}};s._cloneObjectsLoop=function(g,b,c,d,i,a){var h;
var f;for(f in c){if(c.hasOwnProperty(f)&&b[f]===undefined&&g[f]!==undefined){d[f]=g[f];
i[f]=g[f];a[f]=c[f]}}for(f in b){if(g.hasOwnProperty(f)){h=typeof g[f];if(g[f]!==null&&h==="object"){if(Array.isArray(g[f])){d[f]=[];
i[f]=[];a[f]=[]}else{d[f]={};i[f]={};a[f]={}}this._cloneObjectsLoop(g[f],b[f]||{},c[f]||{},d[f],i[f],a[f])
}else{if(b[f]!==null&&h==="number"){d[f]=g[f];i[f]=b[f];if(c&&c[f]!==undefined){a[f]=c[f]
}}}}}};s._prepareProperties=function(){if(!this._isPrepared){var a=this._cloneObjects();
this._storeTarget=a.target;this._propsTo=a.propsTo;this._storePropsTo=this._propsTo;
this._propsFrom=a.propsFrom;this._storePropsFrom=this._propsFrom;this._isPrepared=true
}};s._setStartTime=function(){this._startTime=this._getTime()-(this.progress()*this._durationMs)
};s._setDiff=function(){if(!this._isPrepared){this._prepareProperties()}this._propsDiff={};
this._setDiffLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff)};
s._setDiffLoop=function(b,c,f,g){var a;var d;for(d in b){if(b.hasOwnProperty(d)){a=typeof b[d];
if(b[d]!==null&&a==="object"){c[d]=c[d]||{};g[d]=g[d]||{};this._setDiffLoop(b[d],c[d],f[d],g[d])
}else{if(a==="number"&&f[d]!==undefined){if(c[d]!==undefined){f[d]=c[d]}else{c[d]=f[d]
}g[d]=b[d]-f[d]}else{b[d]=null;c[d]=null}}}}};s._start=function(){this._startTimeout=null;
this._remainingDelay=0;this._setStartTime();this._clock.on("update",this._update);
this._clock.on("draw",this._draw);if(!this._clock.isRunning()){this._clock.start()
}this._setDiff();this._playing=true;this._running=true;if(this._onStart){this._onStart.call(this,this)
}this.trigger(q.PLAY,this)};s._stop=function(){this._playing=false;this._running=false;
this._clock.off("update",this._update);this._clock.off("draw",this._draw)};s._updateProps=function(){var a;
if(this._direction===1){a=this._ease.getValue(this._progress)}else{a=1-this._ease.getValue(1-this._progress)
}this._updatePropsLoop(this._propsTo,this._propsFrom,this._target,this._propsDiff,a)
};s._updatePropsLoop=function(b,c,f,g,a){var d;for(d in b){if(b.hasOwnProperty(d)&&b[d]!==null){if(typeof b[d]!=="number"){this._updatePropsLoop(b[d],c[d],f[d],g[d],a)
}else{f[d]=c[d]+(g[d]*a)}}}};s._completeProps=function(){this._completePropsLoop(this._propsTo,this._target)
};s._completePropsLoop=function(b,a){var c;for(c in b){if(b.hasOwnProperty(c)&&b[c]!==null){if(typeof b[c]!=="number"){this._completePropsLoop(b[c],a[c])
}else{a[c]=b[c]}}}};s._complete=function(){if(this._isYoyo&&((this._loop>0&&this._loopCount<=this._loop)||(this._loop===0&&this._loopCount===0))){this._propsFrom=(this._direction===1)?this._storePropsTo:this._storePropsFrom;
this._propsTo=(this._direction===1)?this._storePropsFrom:this._storePropsTo;this._direction*=-1;
if(this._direction===-1){++this._loopCount}this.progress(0);this._start()}else{if(this._loopCount<this._loop){++this._loopCount;
this.progress(0);this._start()}else{this.trigger(q.COMPLETE,this);if(this._onComplete){this._onComplete.call(this,this)
}if(this._options&&this._options.destroyOnComplete){this.destroy()}}}};s._update=function(a){if(this._running){this._progress=(a.timeNow-this._startTime)/this._durationMs;
if(this._progress>=1){this._progress=1;this._running=false;this._completeProps()
}else{this._updateProps()}if(this._onUpdate){this._onUpdate.call(this,this)}}};
s._draw=function(a){if(this._onDraw){this._onDraw.call(this,this)}if(!this._running){this._stop();
if(this._progress===1){this._complete()}}};q._instantiate=function(){this._clips=[];
return this};q._add=function(a){this._clips.push(a)};q._remove=function(b){var a=this._clips.indexOf(b);
if(a>-1){this._clips.splice(a,1)}};q.getAll=function(b){if(b!==undefined){var a=[];
var c=this._clips.length;while(c--){if(this._clips[c].target()===b){a.push(this._clips[c])
}}return a}return Array.prototype.slice.call(this._clips)};q.destroyAll=function(b){var a=this.getAll(b);
if(this._clips.length===a.length){this._clips=[]}var c=a.length;while(c--){a[c].destroy()
}return a};q.to=function(c,d,b,a){a=a||{};if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new q(c,d,b,a).play()};q.from=function(b,c,a,d){d=d||{};d.propsFrom=a;if(d.destroyOnComplete===undefined){d.destroyOnComplete=true
}return new q(b,c,d.propsTo,d).play()};v.exports=q._instantiate()},{"@marcom/ac-clock":70,"@marcom/ac-easing":98,"@marcom/ac-event-emitter-micro":106,"@marcom/ac-object/create":484,"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray"}],76:[function(f,i,g){var h=f("./ac-color/Color");
h.decimalToHex=f("./ac-color/static/decimalToHex");h.hexToDecimal=f("./ac-color/static/hexToDecimal");
h.hexToRgb=f("./ac-color/static/hexToRgb");h.isColor=f("./ac-color/static/isColor");
h.isHex=f("./ac-color/static/isHex");h.isRgb=f("./ac-color/static/isRgb");h.isRgba=f("./ac-color/static/isRgba");
h.mixColors=f("./ac-color/static/mixColors");h.rgbaToArray=f("./ac-color/static/rgbaToArray");
h.rgbToArray=f("./ac-color/static/rgbToArray");h.rgbToDecimal=f("./ac-color/static/rgbToDecimal");
h.rgbToHex=f("./ac-color/static/rgbToHex");h.rgbToHsl=f("./ac-color/static/rgbToHsl");
h.rgbToHsv=f("./ac-color/static/rgbToHsv");h.rgbaToObject=f("./ac-color/static/rgbaToObject");
h.rgbToObject=f("./ac-color/static/rgbToObject");h.shortToLongHex=f("./ac-color/static/shortToLongHex");
i.exports={Color:h}},{"./ac-color/Color":77,"./ac-color/static/decimalToHex":79,"./ac-color/static/hexToDecimal":80,"./ac-color/static/hexToRgb":81,"./ac-color/static/isColor":82,"./ac-color/static/isHex":83,"./ac-color/static/isRgb":84,"./ac-color/static/isRgba":85,"./ac-color/static/mixColors":86,"./ac-color/static/rgbToArray":87,"./ac-color/static/rgbToDecimal":88,"./ac-color/static/rgbToHex":89,"./ac-color/static/rgbToHsl":90,"./ac-color/static/rgbToHsv":91,"./ac-color/static/rgbToObject":92,"./ac-color/static/rgbaToArray":93,"./ac-color/static/rgbaToObject":94,"./ac-color/static/shortToLongHex":95}],77:[function(H,K,v){var E=H("./helpers/cssColorNames");
var z=H("./static/hexToRgb");var A=H("./static/isColor");var G=H("./static/isHex");
var J=H("./static/isRgba");var w=H("./static/mixColors");var B=H("./static/rgbaToArray");
var y=H("./static/rgbToArray");var t=H("./static/rgbToDecimal");var D=H("./static/rgbToHex");
var I=H("./static/rgbaToObject");var C=H("./static/rgbToObject");var x=H("./static/shortToLongHex");
function u(a){if(!A(a)&&!E.nameToRgbObject[a]){throw new Error(a+" is not a supported color.")
}this._setColor(a)}var F=u.prototype;F._setColor=function(c){this._color={};if(G(c)){this._color.hex=x(c);
this._color.rgb={color:z(c)}}else{if(J(c)){this._color.rgba={color:c};var a=this.rgbaObject();
this._color.rgb={color:"rgb("+a.r+", "+a.g+", "+a.b+")"}}else{if(E.nameToRgbObject[c]){var b=E.nameToRgbObject[c];
this._color.rgb={object:b,color:"rgb("+b.r+", "+b.g+", "+b.b+")"}}else{this._color.rgb={color:c}
}}}};F.rgb=function(){return this._color.rgb.color};F.rgba=function(){if(this._color.rgba===undefined){var a=this.rgbObject();
this._color.rgba={color:"rgba("+a.r+", "+a.g+", "+a.b+", 1)"}}return this._color.rgba.color
};F.hex=function(){if(this._color.hex===undefined){this._color.hex=D.apply(this,this.rgbArray())
}return this._color.hex};F.decimal=function(){if(this._color.decimal===undefined){this._color.decimal=t(this.rgb())
}return this._color.decimal};F.cssName=function(){return E.rgbToName[this.rgb()]||null
};F.rgbArray=function(){if(this._color.rgb.array===undefined){this._color.rgb.array=y(this.rgb())
}return this._color.rgb.array};F.rgbaArray=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.array===undefined){this._color.rgba.array=B(this.rgba())}return this._color.rgba.array
};F.rgbObject=function(){if(this._color.rgb.object===undefined){this._color.rgb.object=C(this.rgb())
}return this._color.rgb.object};F.rgbaObject=function(){if(this._color.rgba===undefined){this.rgba()
}if(this._color.rgba.object===undefined){this._color.rgba.object=I(this.rgba())
}return this._color.rgba.object};F.getRed=function(){return this.rgbObject().r};
F.getGreen=function(){return this.rgbObject().g};F.getBlue=function(){return this.rgbObject().b
};F.getAlpha=function(){if(this._color.rgba===undefined){return 1}return this.rgbaObject().a
};F.setRed=function(a){if(a!==this.getRed()){this._setColor("rgba("+a+", "+this.getGreen()+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().r};F.setGreen=function(a){if(a!==this.getGreen()){this._setColor("rgba("+this.getRed()+", "+a+", "+this.getBlue()+", "+this.getAlpha()+")")
}return this.rgbObject().g};F.setBlue=function(a){if(a!==this.getBlue()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+a+", "+this.getAlpha()+")")
}return this.rgbObject().b};F.setAlpha=function(a){if(a!==this.getAlpha()){this._setColor("rgba("+this.getRed()+", "+this.getGreen()+", "+this.getBlue()+", "+a+")")
}return this.rgbaObject().a};F.mix=function(c,b){var a=C(w(this.rgb(),c,b));this._setColor("rgba("+a.r+", "+a.g+", "+a.b+", "+this.getAlpha()+")");
return this.rgb()};F.clone=function(){return new u(this.rgb())};K.exports=u},{"./helpers/cssColorNames":78,"./static/hexToRgb":81,"./static/isColor":82,"./static/isHex":83,"./static/isRgba":85,"./static/mixColors":86,"./static/rgbToArray":87,"./static/rgbToDecimal":88,"./static/rgbToHex":89,"./static/rgbToObject":92,"./static/rgbaToArray":93,"./static/rgbaToObject":94,"./static/shortToLongHex":95}],78:[function(g,k,h){var j={"rgb(240, 248, 255)":"aliceblue","rgb(250, 235, 215)":"antiquewhite","rgb(0, 0, 0)":"black","rgb(0, 0, 255)":"blue","rgb(0, 255, 255)":"cyan","rgb(0, 0, 139)":"darkblue","rgb(0, 139, 139)":"darkcyan","rgb(0, 100, 0)":"darkgreen","rgb(0, 206, 209)":"darkturquoise","rgb(0, 191, 255)":"deepskyblue","rgb(0, 128, 0)":"green","rgb(0, 255, 0)":"lime","rgb(0, 0, 205)":"mediumblue","rgb(0, 250, 154)":"mediumspringgreen","rgb(0, 0, 128)":"navy","rgb(0, 255, 127)":"springgreen","rgb(0, 128, 128)":"teal","rgb(25, 25, 112)":"midnightblue","rgb(30, 144, 255)":"dodgerblue","rgb(32, 178, 170)":"lightseagreen","rgb(34, 139, 34)":"forestgreen","rgb(46, 139, 87)":"seagreen","rgb(47, 79, 79)":"darkslategray","rgb(50, 205, 50)":"limegreen","rgb(60, 179, 113)":"mediumseagreen","rgb(64, 224, 208)":"turquoise","rgb(65, 105, 225)":"royalblue","rgb(70, 130, 180)":"steelblue","rgb(72, 61, 139)":"darkslateblue","rgb(72, 209, 204)":"mediumturquoise","rgb(75, 0, 130)":"indigo","rgb(85, 107, 47)":"darkolivegreen","rgb(95, 158, 160)":"cadetblue","rgb(100, 149, 237)":"cornflowerblue","rgb(102, 205, 170)":"mediumaquamarine","rgb(105, 105, 105)":"dimgray","rgb(106, 90, 205)":"slateblue","rgb(107, 142, 35)":"olivedrab","rgb(112, 128, 144)":"slategray","rgb(119, 136, 153)":"lightslategray","rgb(123, 104, 238)":"mediumslateblue","rgb(124, 252, 0)":"lawngreen","rgb(127, 255, 212)":"aquamarine","rgb(127, 255, 0)":"chartreuse","rgb(128, 128, 128)":"gray","rgb(128, 0, 0)":"maroon","rgb(128, 128, 0)":"olive","rgb(128, 0, 128)":"purple","rgb(135, 206, 250)":"lightskyblue","rgb(135, 206, 235)":"skyblue","rgb(138, 43, 226)":"blueviolet","rgb(139, 0, 139)":"darkmagenta","rgb(139, 0, 0)":"darkred","rgb(139, 69, 19)":"saddlebrown","rgb(143, 188, 143)":"darkseagreen","rgb(144, 238, 144)":"lightgreen","rgb(147, 112, 219)":"mediumpurple","rgb(148, 0, 211)":"darkviolet","rgb(152, 251, 152)":"palegreen","rgb(153, 50, 204)":"darkorchid","rgb(154, 205, 50)":"yellowgreen","rgb(160, 82, 45)":"sienna","rgb(165, 42, 42)":"brown","rgb(169, 169, 169)":"darkgray","rgb(173, 255, 47)":"greenyellow","rgb(173, 216, 230)":"lightblue","rgb(175, 238, 238)":"paleturquoise","rgb(176, 196, 222)":"lightsteelblue","rgb(176, 224, 230)":"powderblue","rgb(178, 34, 34)":"firebrick","rgb(184, 134, 11)":"darkgoldenrod","rgb(186, 85, 211)":"mediumorchid","rgb(188, 143, 143)":"rosybrown","rgb(189, 183, 107)":"darkkhaki","rgb(192, 192, 192)":"silver","rgb(199, 21, 133)":"mediumvioletred","rgb(205, 92, 92)":"indianred","rgb(205, 133, 63)":"peru","rgb(210, 105, 30)":"chocolate","rgb(210, 180, 140)":"tan","rgb(211, 211, 211)":"lightgray","rgb(216, 191, 216)":"thistle","rgb(218, 165, 32)":"goldenrod","rgb(218, 112, 214)":"orchid","rgb(219, 112, 147)":"palevioletred","rgb(220, 20, 60)":"crimson","rgb(220, 220, 220)":"gainsboro","rgb(221, 160, 221)":"plum","rgb(222, 184, 135)":"burlywood","rgb(224, 255, 255)":"lightcyan","rgb(230, 230, 250)":"lavender","rgb(233, 150, 122)":"darksalmon","rgb(238, 232, 170)":"palegoldenrod","rgb(238, 130, 238)":"violet","rgb(240, 255, 255)":"azure","rgb(240, 255, 240)":"honeydew","rgb(240, 230, 140)":"khaki","rgb(240, 128, 128)":"lightcoral","rgb(244, 164, 96)":"sandybrown","rgb(245, 245, 220)":"beige","rgb(245, 255, 250)":"mintcream","rgb(245, 222, 179)":"wheat","rgb(245, 245, 245)":"whitesmoke","rgb(248, 248, 255)":"ghostwhite","rgb(250, 250, 210)":"lightgoldenrodyellow","rgb(250, 240, 230)":"linen","rgb(250, 128, 114)":"salmon","rgb(253, 245, 230)":"oldlace","rgb(255, 228, 196)":"bisque","rgb(255, 235, 205)":"blanchedalmond","rgb(255, 127, 80)":"coral","rgb(255, 248, 220)":"cornsilk","rgb(255, 140, 0)":"darkorange","rgb(255, 20, 147)":"deeppink","rgb(255, 250, 240)":"floralwhite","rgb(255, 215, 0)":"gold","rgb(255, 105, 180)":"hotpink","rgb(255, 255, 240)":"ivory","rgb(255, 240, 245)":"lavenderblush","rgb(255, 250, 205)":"lemonchiffon","rgb(255, 182, 193)":"lightpink","rgb(255, 160, 122)":"lightsalmon","rgb(255, 255, 224)":"lightyellow","rgb(255, 0, 255)":"magenta","rgb(255, 228, 225)":"mistyrose","rgb(255, 228, 181)":"moccasin","rgb(255, 222, 173)":"navajowhite","rgb(255, 165, 0)":"orange","rgb(255, 69, 0)":"orangered","rgb(255, 239, 213)":"papayawhip","rgb(255, 218, 185)":"peachpuff","rgb(255, 192, 203)":"pink","rgb(255, 0, 0)":"red","rgb(255, 245, 238)":"seashell","rgb(255, 250, 250)":"snow","rgb(255, 99, 71)":"tomato","rgb(255, 255, 255)":"white","rgb(255, 255, 0)":"yellow","rgb(102, 51, 153)":"rebeccapurple"};
var i={aqua:{r:0,g:255,b:255},aliceblue:{r:240,g:248,b:255},antiquewhite:{r:250,g:235,b:215},black:{r:0,g:0,b:0},blue:{r:0,g:0,b:255},cyan:{r:0,g:255,b:255},darkblue:{r:0,g:0,b:139},darkcyan:{r:0,g:139,b:139},darkgreen:{r:0,g:100,b:0},darkturquoise:{r:0,g:206,b:209},deepskyblue:{r:0,g:191,b:255},green:{r:0,g:128,b:0},lime:{r:0,g:255,b:0},mediumblue:{r:0,g:0,b:205},mediumspringgreen:{r:0,g:250,b:154},navy:{r:0,g:0,b:128},springgreen:{r:0,g:255,b:127},teal:{r:0,g:128,b:128},midnightblue:{r:25,g:25,b:112},dodgerblue:{r:30,g:144,b:255},lightseagreen:{r:32,g:178,b:170},forestgreen:{r:34,g:139,b:34},seagreen:{r:46,g:139,b:87},darkslategray:{r:47,g:79,b:79},darkslategrey:{r:47,g:79,b:79},limegreen:{r:50,g:205,b:50},mediumseagreen:{r:60,g:179,b:113},turquoise:{r:64,g:224,b:208},royalblue:{r:65,g:105,b:225},steelblue:{r:70,g:130,b:180},darkslateblue:{r:72,g:61,b:139},mediumturquoise:{r:72,g:209,b:204},indigo:{r:75,g:0,b:130},darkolivegreen:{r:85,g:107,b:47},cadetblue:{r:95,g:158,b:160},cornflowerblue:{r:100,g:149,b:237},mediumaquamarine:{r:102,g:205,b:170},dimgray:{r:105,g:105,b:105},dimgrey:{r:105,g:105,b:105},slateblue:{r:106,g:90,b:205},olivedrab:{r:107,g:142,b:35},slategray:{r:112,g:128,b:144},slategrey:{r:112,g:128,b:144},lightslategray:{r:119,g:136,b:153},lightslategrey:{r:119,g:136,b:153},mediumslateblue:{r:123,g:104,b:238},lawngreen:{r:124,g:252,b:0},aquamarine:{r:127,g:255,b:212},chartreuse:{r:127,g:255,b:0},gray:{r:128,g:128,b:128},grey:{r:128,g:128,b:128},maroon:{r:128,g:0,b:0},olive:{r:128,g:128,b:0},purple:{r:128,g:0,b:128},lightskyblue:{r:135,g:206,b:250},skyblue:{r:135,g:206,b:235},blueviolet:{r:138,g:43,b:226},darkmagenta:{r:139,g:0,b:139},darkred:{r:139,g:0,b:0},saddlebrown:{r:139,g:69,b:19},darkseagreen:{r:143,g:188,b:143},lightgreen:{r:144,g:238,b:144},mediumpurple:{r:147,g:112,b:219},darkviolet:{r:148,g:0,b:211},palegreen:{r:152,g:251,b:152},darkorchid:{r:153,g:50,b:204},yellowgreen:{r:154,g:205,b:50},sienna:{r:160,g:82,b:45},brown:{r:165,g:42,b:42},darkgray:{r:169,g:169,b:169},darkgrey:{r:169,g:169,b:169},greenyellow:{r:173,g:255,b:47},lightblue:{r:173,g:216,b:230},paleturquoise:{r:175,g:238,b:238},lightsteelblue:{r:176,g:196,b:222},powderblue:{r:176,g:224,b:230},firebrick:{r:178,g:34,b:34},darkgoldenrod:{r:184,g:134,b:11},mediumorchid:{r:186,g:85,b:211},rosybrown:{r:188,g:143,b:143},darkkhaki:{r:189,g:183,b:107},silver:{r:192,g:192,b:192},mediumvioletred:{r:199,g:21,b:133},indianred:{r:205,g:92,b:92},peru:{r:205,g:133,b:63},chocolate:{r:210,g:105,b:30},tan:{r:210,g:180,b:140},lightgray:{r:211,g:211,b:211},lightgrey:{r:211,g:211,b:211},thistle:{r:216,g:191,b:216},goldenrod:{r:218,g:165,b:32},orchid:{r:218,g:112,b:214},palevioletred:{r:219,g:112,b:147},crimson:{r:220,g:20,b:60},gainsboro:{r:220,g:220,b:220},plum:{r:221,g:160,b:221},burlywood:{r:222,g:184,b:135},lightcyan:{r:224,g:255,b:255},lavender:{r:230,g:230,b:250},darksalmon:{r:233,g:150,b:122},palegoldenrod:{r:238,g:232,b:170},violet:{r:238,g:130,b:238},azure:{r:240,g:255,b:255},honeydew:{r:240,g:255,b:240},khaki:{r:240,g:230,b:140},lightcoral:{r:240,g:128,b:128},sandybrown:{r:244,g:164,b:96},beige:{r:245,g:245,b:220},mintcream:{r:245,g:255,b:250},wheat:{r:245,g:222,b:179},whitesmoke:{r:245,g:245,b:245},ghostwhite:{r:248,g:248,b:255},lightgoldenrodyellow:{r:250,g:250,b:210},linen:{r:250,g:240,b:230},salmon:{r:250,g:128,b:114},oldlace:{r:253,g:245,b:230},bisque:{r:255,g:228,b:196},blanchedalmond:{r:255,g:235,b:205},coral:{r:255,g:127,b:80},cornsilk:{r:255,g:248,b:220},darkorange:{r:255,g:140,b:0},deeppink:{r:255,g:20,b:147},floralwhite:{r:255,g:250,b:240},fuchsia:{r:255,g:0,b:255},gold:{r:255,g:215,b:0},hotpink:{r:255,g:105,b:180},ivory:{r:255,g:255,b:240},lavenderblush:{r:255,g:240,b:245},lemonchiffon:{r:255,g:250,b:205},lightpink:{r:255,g:182,b:193},lightsalmon:{r:255,g:160,b:122},lightyellow:{r:255,g:255,b:224},magenta:{r:255,g:0,b:255},mistyrose:{r:255,g:228,b:225},moccasin:{r:255,g:228,b:181},navajowhite:{r:255,g:222,b:173},orange:{r:255,g:165,b:0},orangered:{r:255,g:69,b:0},papayawhip:{r:255,g:239,b:213},peachpuff:{r:255,g:218,b:185},pink:{r:255,g:192,b:203},red:{r:255,g:0,b:0},seashell:{r:255,g:245,b:238},snow:{r:255,g:250,b:250},tomato:{r:255,g:99,b:71},white:{r:255,g:255,b:255},yellow:{r:255,g:255,b:0},rebeccapurple:{r:102,g:51,b:153}};
k.exports={rgbToName:j,nameToRgbObject:i}},{}],79:[function(i,h,f){h.exports=function g(a){return"#"+(a).toString(16)
}},{}],80:[function(i,h,g){h.exports=function f(a){return parseInt(a.substr(1),16)
}},{}],81:[function(j,i,k){var h=j("./shortToLongHex");i.exports=function g(a){a=h(a);
var b=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);return b?"rgb("+parseInt(b[1],16)+", "+parseInt(b[2],16)+", "+parseInt(b[3],16)+")":null
}},{"./shortToLongHex":95}],82:[function(o,m,i){var k=o("./isRgb");var l=o("./isRgba");
var j=o("./isHex");m.exports=function n(a){return j(a)||k(a)||l(a)}},{"./isHex":83,"./isRgb":84,"./isRgba":85}],83:[function(i,h,f){h.exports=function g(a){var b=/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i;
return b.test(a)}},{}],84:[function(f,i,g){i.exports=function h(a){var b=/^rgb\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5])\s*\)$/;
return b.exec(a)!==null}},{}],85:[function(f,i,g){i.exports=function h(a){var b=/^rgba\(\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*([01]?[0-9]?[0-9]|2[0-4][0-9]|25[0-5]),\s*(0(\.\d+)?|1(\.0+)?)\s*\)$/;
return b.exec(a)!==null}},{}],86:[function(n,m,o){var i=n("./isHex");var j=n("./hexToRgb");
var k=n("./rgbToObject");m.exports=function l(g,a,b){g=i(g)?j(g):g;a=i(a)?j(a):a;
g=k(g);a=k(a);var c=g.r+((a.r-g.r)*b);var d=g.g+((a.g-g.g)*b);var f=g.b+((a.b-g.b)*b);
return"rgb("+Math.round(c)+", "+Math.round(d)+", "+Math.round(f)+")"}},{"./hexToRgb":81,"./isHex":83,"./rgbToObject":92}],87:[function(g,k,h){var j=g("./rgbToObject");
k.exports=function i(b){var a=j(b);return[a.r,a.g,a.b]}},{"./rgbToObject":92}],88:[function(n,m,i){var o=n("./hexToDecimal");
var k=n("./rgbToArray");var l=n("./rgbToHex");m.exports=function j(b){var a=l.apply(this,k(b));
return o(a)}},{"./hexToDecimal":80,"./rgbToArray":87,"./rgbToHex":89}],89:[function(f,i,g){i.exports=function h(a,b,c){return"#"+((1<<24)+(a<<16)+(b<<8)+c).toString(16).slice(1)
}},{}],90:[function(i,h,f){h.exports=function g(v,l,c){if(arguments.length!==3){return false
}v/=255;l/=255;c/=255;var b=Math.max(v,l,c);var s=Math.min(v,l,c);var d=b+s;var a=b-s;
var r;var w;var u=(d/2);if(b===s){r=w=0}else{w=u>0.5?a/(2-b-s):a/d;switch(b){case v:r=(l-c)/a;
break;case l:r=2+((c-v)/a);break;case c:r=4+((v-l)/a);break}r*=60;if(r<0){r+=360
}}return([r,Math.round(100*w),Math.round(100*u)])}},{}],91:[function(i,h,g){h.exports=function f(y,r,d){if(arguments.length!==3){return false
}var x=y/255;var w=r/255;var b=d/255;var c=Math.max(x,w,b);var v=Math.min(x,w,b);
var s;var z;var A=c;var a=c-v;z=c===0?0:a/c;if(c===v){s=0}else{switch(c){case x:s=(w-b)/a+(w<b?6:0);
break;case w:s=(b-x)/a+2;break;case b:s=(x-w)/a+4;break}s/=6}return[Math.round(360*s),Math.round(100*z),Math.round(100*A)]
}},{}],92:[function(f,i,g){i.exports=function h(b){var a=/rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3])}}},{}],93:[function(g,k,h){var i=g("./rgbaToObject");
k.exports=function j(b){var a=i(b);return[a.r,a.g,a.b,a.a]}},{"./rgbaToObject":94}],94:[function(f,i,g){i.exports=function h(b){var a=/rgba\(\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(0(\.\d+)?|1(\.0+)?)\s*\)/;
var c=a.exec(b);return{r:Number(c[1]),g:Number(c[2]),b:Number(c[3]),a:Number(c[4])}
}},{}],95:[function(i,h,f){h.exports=function g(a){var b=/^#?([a-f\d])([a-f\d])([a-f\d])$/i;
a=a.replace(b,function(l,c,d,m){return"#"+c+c+d+d+m+m});return a}},{}],96:[function(j,i,k){var g=j("./utils/getBoundingClientRect");
i.exports=function h(c,a){var b;if(a){b=g(c);return{width:b.width,height:b.height}
}return{width:c.offsetWidth,height:c.offsetHeight}}},{"./utils/getBoundingClientRect":97}],97:[function(i,h,f){h.exports=function g(b){var a=b.getBoundingClientRect();
return{top:a.top,right:a.right,bottom:a.bottom,left:a.left,width:a.width||a.right-a.left,height:a.height||a.bottom-a.top}
}},{}],98:[function(d,g,f){g.exports={createBezier:d("./ac-easing/createBezier"),createPredefined:d("./ac-easing/createPredefined"),createStep:d("./ac-easing/createStep"),Ease:d("./ac-easing/Ease")}
},{"./ac-easing/Ease":99,"./ac-easing/createBezier":100,"./ac-easing/createPredefined":101,"./ac-easing/createStep":102}],99:[function(h,m,i){var j="Ease expects an easing function.";
function k(a,b){if(typeof a!=="function"){throw new TypeError(j)}this.easingFunction=a;
this.cssString=b||null}var l=k.prototype;l.getValue=function(a){return this.easingFunction(a,0,1,1)
};m.exports=k},{}],100:[function(i,o,j){i("@marcom/ac-polyfills/Array/prototype.every");
var m=i("./Ease");var k=i("./helpers/KeySpline");var n="Bezier curve expects exactly four (4) numbers. Given: ";
o.exports=function l(r,b,s,c){var a=Array.prototype.slice.call(arguments);var f=a.every(function(p){return(typeof p==="number")
});if(a.length!==4||!f){throw new TypeError(n+a)}var d=new k(r,b,s,c);var h=function(q,w,p,v){return d.get(q/v)*p+w
};var g="cubic-bezier("+a.join(", ")+")";return new m(h,g)}},{"./Ease":99,"./helpers/KeySpline":103,"@marcom/ac-polyfills/Array/prototype.every":"@marcom/ac-polyfills/Array/prototype.every"}],101:[function(q,s,p){var l=q("./createStep");
var o=q("./helpers/cssAliases");var r=q("./helpers/easingFunctions");var m=q("./Ease");
var n='Easing function "%TYPE%" not recognized among the following: '+Object.keys(r).join(", ");
s.exports=function k(b){var a;if(b==="step-start"){return l(1,"start")}else{if(b==="step-end"){return l(1,"end")
}else{a=r[b]}}if(!a){throw new Error(n.replace("%TYPE%",b))}return new m(a,o[b])
}},{"./Ease":99,"./createStep":102,"./helpers/cssAliases":104,"./helpers/easingFunctions":105}],102:[function(n,m,o){var l=n("./Ease");
var i="Step function expects a numeric value greater than zero. Given: ";var j='Step function direction must be either "start" or "end" (default). Given: ';
m.exports=function k(d,a){a=a||"end";if(typeof d!=="number"||d<1){throw new TypeError(i+d)
}if(a!=="start"&&a!=="end"){throw new TypeError(j+a)}var b=function(h,f,g,s){var t=g/d;
var u=Math[(a==="start")?"floor":"ceil"](h/s*d);return f+t*u};var c="steps("+d+", "+a+")";
return new l(b,c)}},{"./Ease":99}],103:[function(f,i,g){
/*! MIT License
 *
 * KeySpline - use bezier curve for transition easing function
 * Copyright (c) 2012 Gaetan Renaudeau <renaudeau.gaetan@gmail.com>
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 */
;
function h(a,d,b,q){this.get=function(j){if(a===d&&b===q){return j}return t(p(j),d,q)
};function r(k,j){return 1-3*j+3*k}function s(k,j){return 3*j-6*k}function u(j){return 3*j
}function t(j,l,k){return((r(l,k)*j+s(l,k))*j+u(l))*j}function c(j,l,k){return 3*r(l,k)*j*j+2*s(l,k)*j+u(l)
}function p(k){var m=k;for(var l=0;l<4;++l){var j=c(m,a,b);if(j===0){return m}var n=t(m,a,b)-k;
m-=n/j}return m}}i.exports=h},{}],104:[function(i,h,f){var g={linear:"cubic-bezier(0, 0, 1, 1)",ease:"cubic-bezier(0.25, 0.1, 0.25, 1)","ease-in":"cubic-bezier(0.42, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.58, 1)","ease-in-out":"cubic-bezier(0.42, 0, 0.58, 1)","ease-in-cubic":"cubic-bezier(0.55, 0.055, 0.675, 0.19)","ease-out-cubic":"cubic-bezier(0.215, 0.61, 0.355, 1)","ease-in-out-cubic":"cubic-bezier(0.645, 0.045, 0.355, 1)","ease-in-quad":"cubic-bezier(0.55, 0.085, 0.68, 0.53)","ease-out-quad":"cubic-bezier(0.25, 0.46, 0.45, 0.94)","ease-in-out-quad":"cubic-bezier(0.455, 0.03, 0.515, 0.955)","ease-in-quart":"cubic-bezier(0.895, 0.03, 0.685, 0.22)","ease-out-quart":"cubic-bezier(0.165, 0.84, 0.44, 1)","ease-in-out-quart":"cubic-bezier(0.77, 0, 0.175, 1)","ease-in-quint":"cubic-bezier(0.755, 0.05, 0.855, 0.06)","ease-out-quint":"cubic-bezier(0.23, 1, 0.32, 1)","ease-in-out-quint":"cubic-bezier(0.86, 0, 0.07, 1)","ease-in-sine":"cubic-bezier(0.47, 0, 0.745, 0.715)","ease-out-sine":"cubic-bezier(0.39, 0.575, 0.565, 1)","ease-in-out-sine":"cubic-bezier(0.445, 0.05, 0.55, 0.95)","ease-in-expo":"cubic-bezier(0.95, 0.05, 0.795, 0.035)","ease-out-expo":"cubic-bezier(0.19, 1, 0.22, 1)","ease-in-out-expo":"cubic-bezier(1, 0, 0, 1)","ease-in-circ":"cubic-bezier(0.6, 0.04, 0.98, 0.335)","ease-out-circ":"cubic-bezier(0.075, 0.82, 0.165, 1)","ease-in-out-circ":"cubic-bezier(0.785, 0.135, 0.15, 0.86)","ease-in-back":"cubic-bezier(0.6, -0.28, 0.735, 0.045)","ease-out-back":"cubic-bezier(0.175, 0.885, 0.32, 1.275)","ease-in-out-back":"cubic-bezier(0.68, -0.55, 0.265, 1.55)"};
g.easeIn=g["ease-in"];g.easeOut=g["ease-out"];g.easeInOut=g["ease-in-out"];g.easeInCubic=g["ease-in-cubic"];
g.easeOutCubic=g["ease-out-cubic"];g.easeInOutCubic=g["ease-in-out-cubic"];g.easeInQuad=g["ease-in-quad"];
g.easeOutQuad=g["ease-out-quad"];g.easeInOutQuad=g["ease-in-out-quad"];g.easeInQuart=g["ease-in-quart"];
g.easeOutQuart=g["ease-out-quart"];g.easeInOutQuart=g["ease-in-out-quart"];g.easeInQuint=g["ease-in-quint"];
g.easeOutQuint=g["ease-out-quint"];g.easeInOutQuint=g["ease-in-out-quint"];g.easeInSine=g["ease-in-sine"];
g.easeOutSine=g["ease-out-sine"];g.easeInOutSine=g["ease-in-out-sine"];g.easeInExpo=g["ease-in-expo"];
g.easeOutExpo=g["ease-out-expo"];g.easeInOutExpo=g["ease-in-out-expo"];g.easeInCirc=g["ease-in-circ"];
g.easeOutCirc=g["ease-out-circ"];g.easeInOutCirc=g["ease-in-out-circ"];g.easeInBack=g["ease-in-back"];
g.easeOutBack=g["ease-out-back"];g.easeInOutBack=g["ease-in-out-back"];h.exports=g
},{}],105:[function(ay,aA,W){var S=ay("../createBezier");var af=S(0.25,0.1,0.25,1).easingFunction;
var aw=S(0.42,0,1,1).easingFunction;var Z=S(0,0,0.58,1).easingFunction;var ae=S(0.42,0,0.58,1).easingFunction;
var ah=function(b,d,a,c){return a*b/c+d};var av=function(b,d,a,c){return a*(b/=c)*b+d
};var O=function(b,d,a,c){return -a*(b/=c)*(b-2)+d};var Y=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b+d
}return -a/2*((--b)*(b-2)-1)+d};var au=function(b,d,a,c){return a*(b/=c)*b*b+d};
var aB=function(b,d,a,c){return a*((b=b/c-1)*b*b+1)+d};var at=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b+d
}return a/2*((b-=2)*b*b+2)+d};var an=function(b,d,a,c){return a*(b/=c)*b*b*b+d};
var ap=function(b,d,a,c){return -a*((b=b/c-1)*b*b*b-1)+d};var am=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b+d
}return -a/2*((b-=2)*b*b*b-2)+d};var ad=function(b,d,a,c){return a*(b/=c)*b*b*b*b+d
};var ag=function(b,d,a,c){return a*((b=b/c-1)*b*b*b*b+1)+d};var ac=function(b,d,a,c){if((b/=c/2)<1){return a/2*b*b*b*b*b+d
}return a/2*((b-=2)*b*b*b*b+2)+d};var az=function(b,d,a,c){return -a*Math.cos(b/c*(Math.PI/2))+a+d
};var Q=function(b,d,a,c){return a*Math.sin(b/c*(Math.PI/2))+d};var aa=function(b,d,a,c){return -a/2*(Math.cos(Math.PI*b/c)-1)+d
};var V=function(b,d,a,c){return(b===0)?d:a*Math.pow(2,10*(b/c-1))+d};var ab=function(b,d,a,c){return(b===c)?d+a:a*(-Math.pow(2,-10*b/c)+1)+d
};var ak=function(b,d,a,c){if(b===0){return d}else{if(b===c){return d+a}else{if((b/=c/2)<1){return a/2*Math.pow(2,10*(b-1))+d
}}}return a/2*(-Math.pow(2,-10*--b)+2)+d};var aq=function(b,d,a,c){return -a*(Math.sqrt(1-(b/=c)*b)-1)+d
};var ax=function(b,d,a,c){return a*Math.sqrt(1-(b=b/c-1)*b)+d};var T=function(b,d,a,c){if((b/=c/2)<1){return -a/2*(Math.sqrt(1-b*b)-1)+d
}return a/2*(Math.sqrt(1-(b-=2)*b)+1)+d};var X=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a}}if(!b){b=d*0.3
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}return -(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
};var U=function(c,f,a,d){var h=1.70158;var b=0;var g=a;if(c===0){return f}else{if((c/=d)===1){return f+a
}}if(!b){b=d*0.3}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)
}return g*Math.pow(2,-10*c)*Math.sin((c*d-h)*(2*Math.PI)/b)+a+f};var ai=function(c,f,a,d){var h=1.70158;
var b=0;var g=a;if(c===0){return f}else{if((c/=d/2)===2){return f+a}}if(!b){b=d*(0.3*1.5)
}if(g<Math.abs(a)){g=a;h=b/4}else{h=b/(2*Math.PI)*Math.asin(a/g)}if(c<1){return -0.5*(g*Math.pow(2,10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b))+f
}return g*Math.pow(2,-10*(c-=1))*Math.sin((c*d-h)*(2*Math.PI)/b)*0.5+a+f};var aj=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*(b/=c)*b*((f+1)*b-f)+d};var al=function(b,d,a,c,f){if(f===undefined){f=1.70158
}return a*((b=b/c-1)*b*((f+1)*b+f)+1)+d};var ar=function(b,d,a,c,f){if(f===undefined){f=1.70158
}if((b/=c/2)<1){return a/2*(b*b*(((f*=(1.525))+1)*b-f))+d}return a/2*((b-=2)*b*(((f*=(1.525))+1)*b+f)+2)+d
};var R=function(b,d,a,c){if((b/=c)<(1/2.75)){return a*(7.5625*b*b)+d}else{if(b<(2/2.75)){return a*(7.5625*(b-=(1.5/2.75))*b+0.75)+d
}else{if(b<(2.5/2.75)){return a*(7.5625*(b-=(2.25/2.75))*b+0.9375)+d}}}return a*(7.5625*(b-=(2.625/2.75))*b+0.984375)+d
};var ao=function(b,d,a,c){return a-R(c-b,0,a,c)+d};var P=function(b,d,a,c){if(b<c/2){return ao(b*2,0,a,c)*0.5+d
}return R(b*2-c,0,a,c)*0.5+a*0.5+d};aA.exports={linear:ah,ease:af,easeIn:aw,"ease-in":aw,easeOut:Z,"ease-out":Z,easeInOut:ae,"ease-in-out":ae,easeInCubic:au,"ease-in-cubic":au,easeOutCubic:aB,"ease-out-cubic":aB,easeInOutCubic:at,"ease-in-out-cubic":at,easeInQuad:av,"ease-in-quad":av,easeOutQuad:O,"ease-out-quad":O,easeInOutQuad:Y,"ease-in-out-quad":Y,easeInQuart:an,"ease-in-quart":an,easeOutQuart:ap,"ease-out-quart":ap,easeInOutQuart:am,"ease-in-out-quart":am,easeInQuint:ad,"ease-in-quint":ad,easeOutQuint:ag,"ease-out-quint":ag,easeInOutQuint:ac,"ease-in-out-quint":ac,easeInSine:az,"ease-in-sine":az,easeOutSine:Q,"ease-out-sine":Q,easeInOutSine:aa,"ease-in-out-sine":aa,easeInExpo:V,"ease-in-expo":V,easeOutExpo:ab,"ease-out-expo":ab,easeInOutExpo:ak,"ease-in-out-expo":ak,easeInCirc:aq,"ease-in-circ":aq,easeOutCirc:ax,"ease-out-circ":ax,easeInOutCirc:T,"ease-in-out-circ":T,easeInBack:aj,"ease-in-back":aj,easeOutBack:al,"ease-out-back":al,easeInOutBack:ar,"ease-in-out-back":ar,easeInElastic:X,"ease-in-elastic":X,easeOutElastic:U,"ease-out-elastic":U,easeInOutElastic:ai,"ease-in-out-elastic":ai,easeInBounce:ao,"ease-in-bounce":ao,easeOutBounce:R,"ease-out-bounce":R,easeInOutBounce:P,"ease-in-out-bounce":P}
},{"../createBezier":100}],106:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":107}],107:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],108:[function(d,g,f){g.exports={PageVisibilityManager:d("./ac-page-visibility/PageVisibilityManager")}
},{"./ac-page-visibility/PageVisibilityManager":109}],109:[function(o,m,i){var n=o("@marcom/ac-object/create");
var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;function j(){if(typeof document.addEventListener==="undefined"){return
}var a;if(typeof document.hidden!=="undefined"){this._hidden="hidden";a="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){this._hidden="mozHidden";a="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){this._hidden="msHidden";a="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){this._hidden="webkitHidden";
a="webkitvisibilitychange"}}}}if(typeof document[this._hidden]==="undefined"){this.isHidden=false
}else{this.isHidden=document[this._hidden]}if(a){document.addEventListener(a,this._handleVisibilityChange.bind(this),false)
}k.call(this)}var l=j.prototype=n(k.prototype);l.CHANGED="changed";l._handleVisibilityChange=function(a){this.isHidden=document[this._hidden];
this.trigger(this.CHANGED,{isHidden:this.isHidden})};m.exports=new j()},{"@marcom/ac-event-emitter-micro":106,"@marcom/ac-object/create":484}],110:[function(f,i,g){i.exports=h;
function h(b){var a=new Float32Array(16);a[0]=b[0];a[1]=b[1];a[2]=b[2];a[3]=b[3];
a[4]=b[4];a[5]=b[5];a[6]=b[6];a[7]=b[7];a[8]=b[8];a[9]=b[9];a[10]=b[10];a[11]=b[11];
a[12]=b[12];a[13]=b[13];a[14]=b[14];a[15]=b[15];return a}},{}],111:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(16);a[0]=1;a[1]=0;a[2]=0;a[3]=0;a[4]=0;a[5]=1;
a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;a[15]=1;return a
}},{}],112:[function(f,i,g){i.exports=h;function h(b,v,z){var G=v[0],H=v[1],I=v[2],F=v[3],a=G+G,M=H+H,E=I+I,J=G*a,K=G*M,L=G*E,c=H*M,y=H*E,q=I*E,d=F*a,w=F*M,x=F*E;
b[0]=1-(c+q);b[1]=K+x;b[2]=L-w;b[3]=0;b[4]=K-x;b[5]=1-(J+q);b[6]=y+d;b[7]=0;b[8]=L+w;
b[9]=y-d;b[10]=1-(J+c);b[11]=0;b[12]=z[0];b[13]=z[1];b[14]=z[2];b[15]=1;return b
}},{}],113:[function(i,h,f){h.exports=g;function g(a){a[0]=1;a[1]=0;a[2]=0;a[3]=0;
a[4]=0;a[5]=1;a[6]=0;a[7]=0;a[8]=0;a[9]=0;a[10]=1;a[11]=0;a[12]=0;a[13]=0;a[14]=0;
a[15]=1;return a}},{}],114:[function(f,i,g){i.exports=h;function h(c,U){var L=U[0],P=U[1],S=U[2],Y=U[3],ag=U[4],ah=U[5],ai=U[6],aj=U[7],K=U[8],M=U[9],O=U[10],Q=U[11],b=U[12],d=U[13],N=U[14],W=U[15],R=L*ah-P*ag,T=L*ai-S*ag,V=L*aj-Y*ag,X=P*ai-S*ah,aa=P*aj-Y*ah,ab=S*aj-Y*ai,ac=K*d-M*b,ad=K*N-O*b,ae=K*W-Q*b,af=M*N-O*d,Z=M*W-Q*d,a=O*W-Q*N,ak=R*a-T*Z+V*af+X*ae-aa*ad+ab*ac;
if(!ak){return null}ak=1/ak;c[0]=(ah*a-ai*Z+aj*af)*ak;c[1]=(S*Z-P*a-Y*af)*ak;c[2]=(d*ab-N*aa+W*X)*ak;
c[3]=(O*aa-M*ab-Q*X)*ak;c[4]=(ai*ae-ag*a-aj*ad)*ak;c[5]=(L*a-S*ae+Y*ad)*ak;c[6]=(N*V-b*ab-W*T)*ak;
c[7]=(K*ab-O*V+Q*T)*ak;c[8]=(ag*Z-ah*ae+aj*ac)*ak;c[9]=(P*ae-L*Z-Y*ac)*ak;c[10]=(b*aa-d*V+W*R)*ak;
c[11]=(M*V-K*aa-Q*R)*ak;c[12]=(ah*ad-ag*af-ai*ac)*ak;c[13]=(L*af-P*ad+S*ac)*ak;
c[14]=(d*T-b*X-N*R)*ak;c[15]=(K*X-M*T+O*R)*ak;return c}},{}],115:[function(i,h,f){h.exports=g;
function g(G,C,F){var a=C[0],b=C[1],d=C[2],E=C[3],O=C[4],Q=C[5],S=C[6],U=C[7],I=C[8],K=C[9],L=C[10],M=C[11],H=C[12],J=C[13],c=C[14],D=C[15];
var N=F[0],P=F[1],R=F[2],T=F[3];G[0]=N*a+P*O+R*I+T*H;G[1]=N*b+P*Q+R*K+T*J;G[2]=N*d+P*S+R*L+T*c;
G[3]=N*E+P*U+R*M+T*D;N=F[4];P=F[5];R=F[6];T=F[7];G[4]=N*a+P*O+R*I+T*H;G[5]=N*b+P*Q+R*K+T*J;
G[6]=N*d+P*S+R*L+T*c;G[7]=N*E+P*U+R*M+T*D;N=F[8];P=F[9];R=F[10];T=F[11];G[8]=N*a+P*O+R*I+T*H;
G[9]=N*b+P*Q+R*K+T*J;G[10]=N*d+P*S+R*L+T*c;G[11]=N*E+P*U+R*M+T*D;N=F[12];P=F[13];
R=F[14];T=F[15];G[12]=N*a+P*O+R*I+T*H;G[13]=N*b+P*Q+R*K+T*J;G[14]=N*d+P*S+R*L+T*c;
G[15]=N*E+P*U+R*M+T*D;return G}},{}],116:[function(i,h,g){h.exports=f;function f(V,s,c,am){var ac=am[0],ad=am[1],ae=am[2],U=Math.sqrt(ac*ac+ad*ad+ae*ae),Q,x,S,a,b,d,t,af,ag,ah,ai,W,Y,aa,ab,T,X,Z,y,z,R,aj,ak,al;
if(Math.abs(U)<0.000001){return null}U=1/U;ac*=U;ad*=U;ae*=U;Q=Math.sin(c);x=Math.cos(c);
S=1-x;a=s[0];b=s[1];d=s[2];t=s[3];af=s[4];ag=s[5];ah=s[6];ai=s[7];W=s[8];Y=s[9];
aa=s[10];ab=s[11];T=ac*ac*S+x;X=ad*ac*S+ae*Q;Z=ae*ac*S-ad*Q;y=ac*ad*S-ae*Q;z=ad*ad*S+x;
R=ae*ad*S+ac*Q;aj=ac*ae*S+ad*Q;ak=ad*ae*S-ac*Q;al=ae*ae*S+x;V[0]=a*T+af*X+W*Z;V[1]=b*T+ag*X+Y*Z;
V[2]=d*T+ah*X+aa*Z;V[3]=t*T+ai*X+ab*Z;V[4]=a*y+af*z+W*R;V[5]=b*y+ag*z+Y*R;V[6]=d*y+ah*z+aa*R;
V[7]=t*y+ai*z+ab*R;V[8]=a*aj+af*ak+W*al;V[9]=b*aj+ag*ak+Y*al;V[10]=d*aj+ah*ak+aa*al;
V[11]=t*aj+ai*ak+ab*al;if(s!==V){V[12]=s[12];V[13]=s[13];V[14]=s[14];V[15]=s[15]
}return V}},{}],117:[function(i,h,g){h.exports=f;function f(A,t,u){var a=Math.sin(u),v=Math.cos(u),b=t[4],c=t[5],d=t[6],s=t[7],w=t[8],x=t[9],y=t[10],z=t[11];
if(t!==A){A[0]=t[0];A[1]=t[1];A[2]=t[2];A[3]=t[3];A[12]=t[12];A[13]=t[13];A[14]=t[14];
A[15]=t[15]}A[4]=b*v+w*a;A[5]=c*v+x*a;A[6]=d*v+y*a;A[7]=s*v+z*a;A[8]=w*v-b*a;A[9]=x*v-c*a;
A[10]=y*v-d*a;A[11]=z*v-s*a;return A}},{}],118:[function(i,h,f){h.exports=g;function g(w,b,c){var a=Math.sin(c),d=Math.cos(c),x=b[0],y=b[1],z=b[2],A=b[3],s=b[8],t=b[9],u=b[10],v=b[11];
if(b!==w){w[4]=b[4];w[5]=b[5];w[6]=b[6];w[7]=b[7];w[12]=b[12];w[13]=b[13];w[14]=b[14];
w[15]=b[15]}w[0]=x*d-s*a;w[1]=y*d-t*a;w[2]=z*d-u*a;w[3]=A*d-v*a;w[8]=x*a+s*d;w[9]=y*a+t*d;
w[10]=z*a+u*d;w[11]=A*a+v*d;return w}},{}],119:[function(i,h,f){h.exports=g;function g(w,t,u){var a=Math.sin(u),v=Math.cos(u),x=t[0],y=t[1],z=t[2],A=t[3],b=t[4],c=t[5],d=t[6],s=t[7];
if(t!==w){w[8]=t[8];w[9]=t[9];w[10]=t[10];w[11]=t[11];w[12]=t[12];w[13]=t[13];w[14]=t[14];
w[15]=t[15]}w[0]=x*v+b*a;w[1]=y*v+c*a;w[2]=z*v+d*a;w[3]=A*v+s*a;w[4]=b*v-x*a;w[5]=c*v-y*a;
w[6]=d*v-z*a;w[7]=s*v-A*a;return w}},{}],120:[function(f,i,g){i.exports=h;function h(c,l,d){var m=d[0],a=d[1],b=d[2];
c[0]=l[0]*m;c[1]=l[1]*m;c[2]=l[2]*m;c[3]=l[3]*m;c[4]=l[4]*a;c[5]=l[5]*a;c[6]=l[6]*a;
c[7]=l[7]*a;c[8]=l[8]*b;c[9]=l[9]*b;c[10]=l[10]*b;c[11]=l[11]*b;c[12]=l[12];c[13]=l[13];
c[14]=l[14];c[15]=l[15];return c}},{}],121:[function(f,i,g){i.exports=h;function h(v,c,D){var E=D[0],F=D[1],G=D[2],y,a,b,d,H,I,J,K,x,z,B,C;
if(c===v){v[12]=c[0]*E+c[4]*F+c[8]*G+c[12];v[13]=c[1]*E+c[5]*F+c[9]*G+c[13];v[14]=c[2]*E+c[6]*F+c[10]*G+c[14];
v[15]=c[3]*E+c[7]*F+c[11]*G+c[15]}else{y=c[0];a=c[1];b=c[2];d=c[3];H=c[4];I=c[5];
J=c[6];K=c[7];x=c[8];z=c[9];B=c[10];C=c[11];v[0]=y;v[1]=a;v[2]=b;v[3]=d;v[4]=H;
v[5]=I;v[6]=J;v[7]=K;v[8]=x;v[9]=z;v[10]=B;v[11]=C;v[12]=y*E+H*F+x*G+c[12];v[13]=a*E+I*F+z*G+c[13];
v[14]=b*E+J*F+B*G+c[14];v[15]=d*E+K*F+C*G+c[15]}return v}},{}],122:[function(f,i,g){i.exports=h;
function h(n,o){if(n===o){var a=o[1],c=o[2],d=o[3],q=o[6],b=o[7],p=o[11];n[1]=o[4];
n[2]=o[8];n[3]=o[12];n[4]=a;n[6]=o[9];n[7]=o[13];n[8]=c;n[9]=q;n[11]=o[14];n[12]=d;
n[13]=b;n[14]=p}else{n[0]=o[0];n[1]=o[4];n[2]=o[8];n[3]=o[12];n[4]=o[1];n[5]=o[5];
n[6]=o[9];n[7]=o[13];n[8]=o[2];n[9]=o[6];n[10]=o[10];n[11]=o[14];n[12]=o[3];n[13]=o[7];
n[14]=o[11];n[15]=o[15]}return n}},{}],123:[function(f,h,g){h.exports=i;function i(){var a=new Float32Array(3);
a[0]=0;a[1]=0;a[2]=0;return a}},{}],124:[function(f,i,g){i.exports=h;function h(r,c,d){var s=c[0],a=c[1],b=c[2],o=d[0],p=d[1],q=d[2];
r[0]=a*q-b*p;r[1]=b*o-s*q;r[2]=s*p-a*o;return r}},{}],125:[function(i,h,f){h.exports=g;
function g(a,b){return a[0]*b[0]+a[1]*b[1]+a[2]*b[2]}},{}],126:[function(f,i,g){i.exports=h;
function h(d,a,b){var c=new Float32Array(3);c[0]=d;c[1]=a;c[2]=b;return c}},{}],127:[function(f,i,g){i.exports=h;
function h(c){var d=c[0],a=c[1],b=c[2];return Math.sqrt(d*d+a*a+b*b)}},{}],128:[function(i,h,f){h.exports=g;
function g(c,d){var l=d[0],a=d[1],b=d[2];var m=l*l+a*a+b*b;if(m>0){m=1/Math.sqrt(m);
c[0]=d[0]*m;c[1]=d[1]*m;c[2]=d[2]*m}return c}},{}],129:[function(f,h,g){h.exports=i;
function i(){var a=new Float32Array(4);a[0]=0;a[1]=0;a[2]=0;a[3]=0;return a}},{}],130:[function(f,i,g){i.exports=h;
function h(k,a,b,d){var c=new Float32Array(4);c[0]=k;c[1]=a;c[2]=b;c[3]=d;return c
}},{}],131:[function(f,h,g){h.exports=i;function i(c,d,n){var o=d[0],a=d[1],b=d[2],m=d[3];
c[0]=n[0]*o+n[4]*a+n[8]*b+n[12]*m;c[1]=n[1]*o+n[5]*a+n[9]*b+n[13]*m;c[2]=n[2]*o+n[6]*a+n[10]*b+n[14]*m;
c[3]=n[3]*o+n[7]*a+n[11]*b+n[15]*m;return c}},{}],132:[function(d,g,f){g.exports={Transform:d("./ac-transform/Transform")}
},{"./ac-transform/Transform":133}],133:[function(ae,al,L){var af=ae("./gl-matrix/mat4");
var an=ae("./gl-matrix/vec3");var ao=ae("./gl-matrix/vec4");var ak=Math.PI/180;
var am=180/Math.PI;var Q=0,J=0,U=1,K=1,Y=2,I=3;var ag=4,M=4,ah=5,O=5,ai=6,aj=7;
var S=8,X=9,ab=10,ac=11;var N=12,P=12,R=13,T=13,W=14,aa=15;function Z(){this.m=af.create()
}var V=Z.prototype;V.rotateX=function(a){var b=ak*a;af.rotateX(this.m,this.m,b);
return this};V.rotateY=function(a){var b=ak*a;af.rotateY(this.m,this.m,b);return this
};V.rotateZ=function(a){var b=ak*a;af.rotateZ(this.m,this.m,b);return this};V.rotate=V.rotateZ;
V.rotate3d=function(c,f,a,b){if(f===null||f===undefined){f=c}if(a===null||f===undefined){a=c
}var d=ak*b;af.rotate(this.m,this.m,d,[c,f,a]);return this};V.rotateAxisAngle=V.rotate3d;
V.scale=function(a,b){b=b||a;af.scale(this.m,this.m,[a,b,1]);return this};V.scaleX=function(a){af.scale(this.m,this.m,[a,1,1]);
return this};V.scaleY=function(a){af.scale(this.m,this.m,[1,a,1]);return this};
V.scaleZ=function(a){af.scale(this.m,this.m,[1,1,a]);return this};V.scale3d=function(a,b,c){af.scale(this.m,this.m,[a,b,c]);
return this};V.skew=function(a,b){if(b===null||b===undefined){return this.skewX(a)
}a=ak*a;b=ak*b;var c=af.create();c[M]=Math.tan(a);c[K]=Math.tan(b);af.multiply(this.m,this.m,c);
return this};V.skewX=function(a){a=ak*a;var b=af.create();b[M]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.skewY=function(a){a=ak*a;var b=af.create();b[K]=Math.tan(a);af.multiply(this.m,this.m,b);
return this};V.translate=function(a,b){b=b||0;af.translate(this.m,this.m,[a,b,0]);
return this};V.translate3d=function(b,c,a){af.translate(this.m,this.m,[b,c,a]);
return this};V.translateX=function(a){af.translate(this.m,this.m,[a,0,0]);return this
};V.translateY=function(a){af.translate(this.m,this.m,[0,a,0]);return this};V.translateZ=function(a){af.translate(this.m,this.m,[0,0,a]);
return this};V.perspective=function(a){var b=af.create();if(a!==0){b[ac]=-1/a}af.multiply(this.m,this.m,b)
};V.inverse=function(){var a=this.clone();a.m=af.invert(a.m,this.m);return a};V.reset=function(){af.identity(this.m);
return this};V.getTranslateXY=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T]]
}return[a[N],a[R]]};V.getTranslateXYZ=function(){var a=this.m;if(this.isAffine()){return[a[P],a[T],0]
}return[a[N],a[R],a[W]]};V.getTranslateX=function(){var a=this.m;if(this.isAffine()){return a[P]
}return a[N]};V.getTranslateY=function(){var a=this.m;if(this.isAffine()){return a[T]
}return a[R]};V.getTranslateZ=function(){var a=this.m;if(this.isAffine()){return 0
}return a[W]};V.clone=function(){var a=new Z();a.m=af.clone(this.m);return a};V.toArray=function(){var a=this.m;
if(this.isAffine()){return[a[J],a[K],a[M],a[O],a[P],a[T]]}return[a[Q],a[U],a[Y],a[I],a[ag],a[ah],a[ai],a[aj],a[S],a[X],a[ab],a[ac],a[N],a[R],a[W],a[aa]]
};V.fromArray=function(a){this.m=Array.prototype.slice.call(a);return this};V.setMatrixValue=function(c){c=String(c).trim();
var d=af.create();if(c==="none"){this.m=d;return this}var a=c.slice(0,c.indexOf("(")),f,b;
if(a==="matrix3d"){f=c.slice(9,-1).split(",");for(b=0;b<f.length;b++){d[b]=parseFloat(f[b])
}}else{if(a==="matrix"){f=c.slice(7,-1).split(",");for(b=f.length;b--;){f[b]=parseFloat(f[b])
}d[Q]=f[0];d[U]=f[1];d[N]=f[4];d[ag]=f[2];d[ah]=f[3];d[R]=f[5]}else{throw new TypeError("Invalid Matrix Value")
}}this.m=d;return this};var ad=function(a){return Math.abs(a)<0.0001};V.decompose=function(h){h=h||false;
var c=af.clone(this.m);var m=an.create();var v=an.create();var p=an.create();var k=ao.create();
var r=ao.create();var q=an.create();for(var a=0;a<16;a++){c[a]/=c[aa]}var f=af.clone(c);
f[I]=0;f[aj]=0;f[ac]=0;f[aa]=1;var y=c[3],o=c[7],l=c[11],t=c[12],u=c[13],w=c[14],x=c[15];
var i=ao.create();if(!ad(c[I])||!ad(c[aj])||!ad(c[ac])){i[0]=c[I];i[1]=c[aj];i[2]=c[ac];
i[3]=c[aa];var b=af.invert(af.create(),f);var j=af.transpose(af.create(),b);k=ao.transformMat4(k,i,j)
}else{k=ao.fromValues(0,0,0,1)}m[0]=t;m[1]=u;m[2]=w;var n=[an.create(),an.create(),an.create()];
n[0][0]=c[0];n[0][1]=c[1];n[0][2]=c[2];n[1][0]=c[4];n[1][1]=c[5];n[1][2]=c[6];n[2][0]=c[8];
n[2][1]=c[9];n[2][2]=c[10];v[0]=an.length(n[0]);an.normalize(n[0],n[0]);p[0]=an.dot(n[0],n[1]);
n[1]=this._combine(n[1],n[0],1,-p[0]);v[1]=an.length(n[1]);an.normalize(n[1],n[1]);
p[0]/=v[1];p[1]=an.dot(n[0],n[2]);n[2]=this._combine(n[2],n[0],1,-p[1]);p[2]=an.dot(n[1],n[2]);
n[2]=this._combine(n[2],n[1],1,-p[2]);v[2]=an.length(n[2]);an.normalize(n[2],n[2]);
p[1]/=v[2];p[2]/=v[2];var d=an.cross(an.create(),n[1],n[2]);if(an.dot(n[0],d)<0){for(a=0;
a<3;a++){v[a]*=-1;n[a][0]*=-1;n[a][1]*=-1;n[a][2]*=-1}}r[0]=0.5*Math.sqrt(Math.max(1+n[0][0]-n[1][1]-n[2][2],0));
r[1]=0.5*Math.sqrt(Math.max(1-n[0][0]+n[1][1]-n[2][2],0));r[2]=0.5*Math.sqrt(Math.max(1-n[0][0]-n[1][1]+n[2][2],0));
r[3]=0.5*Math.sqrt(Math.max(1+n[0][0]+n[1][1]+n[2][2],0));if(n[2][1]>n[1][2]){r[0]=-r[0]
}if(n[0][2]>n[2][0]){r[1]=-r[1]}if(n[1][0]>n[0][1]){r[2]=-r[2]}var s=ao.fromValues(r[0],r[1],r[2],2*Math.acos(r[3]));
var g=this._rotationFromQuat(r);if(h){p[0]=Math.round(p[0]*am*100)/100;p[1]=Math.round(p[1]*am*100)/100;
p[2]=Math.round(p[2]*am*100)/100;g[0]=Math.round(g[0]*am*100)/100;g[1]=Math.round(g[1]*am*100)/100;
g[2]=Math.round(g[2]*am*100)/100;s[3]=Math.round(s[3]*am*100)/100}return{translation:m,scale:v,skew:p,perspective:k,quaternion:r,eulerRotation:g,axisAngle:s}
};V.recompose=function(f,g,b,a,h){f=f||an.create();g=g||an.create();b=b||an.create();
a=a||ao.create();h=h||ao.create();var c=af.fromRotationTranslation(af.create(),h,f);
c[I]=a[0];c[aj]=a[1];c[ac]=a[2];c[aa]=a[3];var d=af.create();if(b[2]!==0){d[X]=b[2];
af.multiply(c,c,d)}if(b[1]!==0){d[X]=0;d[S]=b[1];af.multiply(c,c,d)}if(b[0]){d[S]=0;
d[4]=b[0];af.multiply(c,c,d)}af.scale(c,c,g);this.m=c;return this};V.isAffine=function(){return(this.m[Y]===0&&this.m[I]===0&&this.m[ai]===0&&this.m[aj]===0&&this.m[S]===0&&this.m[X]===0&&this.m[ab]===1&&this.m[ac]===0&&this.m[W]===0&&this.m[aa]===1)
};V.toString=function(){var a=this.m;if(this.isAffine()){return"matrix("+a[J]+", "+a[K]+", "+a[M]+", "+a[O]+", "+a[P]+", "+a[T]+")"
}return"matrix3d("+a[Q]+", "+a[U]+", "+a[Y]+", "+a[I]+", "+a[ag]+", "+a[ah]+", "+a[ai]+", "+a[aj]+", "+a[S]+", "+a[X]+", "+a[ab]+", "+a[ac]+", "+a[N]+", "+a[R]+", "+a[W]+", "+a[aa]+")"
};V.toCSSString=V.toString;V._combine=function(c,f,a,b){var d=an.create();d[0]=(a*c[0])+(b*f[0]);
d[1]=(a*c[1])+(b*f[1]);d[2]=(a*c[2])+(b*f[2]);return d};V._matrix2dToMat4=function(d){var b=af.create();
for(var a=0;a<4;a++){for(var c=0;c<4;c++){b[a*4+c]=d[a][c]}}return b};V._mat4ToMatrix2d=function(a){var d=[];
for(var b=0;b<4;b++){d[b]=[];for(var c=0;c<4;c++){d[b][c]=a[b*4+c]}}return d};V._rotationFromQuat=function(k){var g=k[3]*k[3];
var h=k[0]*k[0];var i=k[1]*k[1];var j=k[2]*k[2];var a=h+i+j+g;var f=k[0]*k[1]+k[2]*k[3];
var b,c,d;if(f>0.499*a){c=2*Math.atan2(k[0],k[3]);d=Math.PI/2;b=0;return an.fromValues(b,c,d)
}if(f<-0.499*a){c=-2*Math.atan2(k[0],k[3]);d=-Math.PI/2;b=0;return an.fromValues(b,c,d)
}c=Math.atan2(2*k[1]*k[3]-2*k[0]*k[2],h-i-j+g);d=Math.asin(2*f/a);b=Math.atan2(2*k[0]*k[3]-2*k[1]*k[2],-h+i-j+g);
return an.fromValues(b,c,d)};al.exports=Z},{"./gl-matrix/mat4":134,"./gl-matrix/vec3":135,"./gl-matrix/vec4":136}],134:[function(i,h,g){var f={create:i("gl-mat4/create"),rotate:i("gl-mat4/rotate"),rotateX:i("gl-mat4/rotateX"),rotateY:i("gl-mat4/rotateY"),rotateZ:i("gl-mat4/rotateZ"),scale:i("gl-mat4/scale"),multiply:i("gl-mat4/multiply"),translate:i("gl-mat4/translate"),invert:i("gl-mat4/invert"),clone:i("gl-mat4/clone"),transpose:i("gl-mat4/transpose"),identity:i("gl-mat4/identity"),fromRotationTranslation:i("gl-mat4/fromRotationTranslation")};
h.exports=f},{"gl-mat4/clone":110,"gl-mat4/create":111,"gl-mat4/fromRotationTranslation":112,"gl-mat4/identity":113,"gl-mat4/invert":114,"gl-mat4/multiply":115,"gl-mat4/rotate":116,"gl-mat4/rotateX":117,"gl-mat4/rotateY":118,"gl-mat4/rotateZ":119,"gl-mat4/scale":120,"gl-mat4/translate":121,"gl-mat4/transpose":122}],135:[function(f,h,g){var i={create:f("gl-vec3/create"),dot:f("gl-vec3/dot"),normalize:f("gl-vec3/normalize"),length:f("gl-vec3/length"),cross:f("gl-vec3/cross"),fromValues:f("gl-vec3/fromValues")};
h.exports=i},{"gl-vec3/create":123,"gl-vec3/cross":124,"gl-vec3/dot":125,"gl-vec3/fromValues":126,"gl-vec3/length":127,"gl-vec3/normalize":128}],136:[function(i,h,g){var f={create:i("gl-vec4/create"),transformMat4:i("gl-vec4/transformMat4"),fromValues:i("gl-vec4/fromValues")};
h.exports=f},{"gl-vec4/create":129,"gl-vec4/fromValues":130,"gl-vec4/transformMat4":131}],137:[function(p,r,o){p("./helpers/Float32Array");
var s=p("./helpers/transitionEnd");var n=p("@marcom/ac-clip").Clip;var l=p("./clips/ClipEasing");
var q=p("./clips/ClipInlineCss");var m=p("./clips/ClipTransitionCss");function t(d,a,c,b){if(d.nodeType){if(s===undefined||(b&&b.inlineStyles)){return new q(d,a,c,b)
}return new m(d,a,c,b)}return new l(d,a,c,b)}for(var u in n){if(typeof n[u]==="function"&&u.substr(0,1)!=="_"){t[u]=n[u].bind(n)
}}t.to=function(d,a,c,b){b=b||{};if(b.destroyOnComplete===undefined){b.destroyOnComplete=true
}return new t(d,a,c,b).play()};t.from=function(c,d,b,a){a=a||{};a.propsFrom=b;if(a.destroyOnComplete===undefined){a.destroyOnComplete=true
}return new t(c,d,a.propsTo,a).play()};r.exports=t},{"./clips/ClipEasing":140,"./clips/ClipInlineCss":141,"./clips/ClipTransitionCss":142,"./helpers/Float32Array":145,"./helpers/transitionEnd":154,"@marcom/ac-clip":74}],138:[function(d,g,f){g.exports=d("./timeline/Timeline")
},{"./timeline/Timeline":156}],139:[function(d,g,f){g.exports={Clip:d("./Clip"),Timeline:d("./Timeline")}
},{"./Clip":137,"./Timeline":138}],140:[function(z,A,y){var r=z("@marcom/ac-object/clone");
var v=z("@marcom/ac-object/create");var o=z("@marcom/ac-easing").createPredefined;
var q=z("../helpers/isCssCubicBezierString");var w=z("../helpers/BezierCurveCssManager");
var t=z("@marcom/ac-clip").Clip;var s=z("@marcom/ac-easing").Ease;function p(b,c,a,d){if(d&&q(d.ease)){d.ease=w.create(d.ease).toEasingFunction()
}d=d||{};this._propsEase=d.propsEase||{};t.call(this,b,c,a,d)}var u=t.prototype;
var x=p.prototype=v(u);x.reset=function(){var a=u.reset.call(this);if(this._clips){var b=this._clips.length;
while(b--){this._clips[b].reset()}}return a};x.destroy=function(){if(this._clips){var a=this._clips.length;
while(a--){this._clips[a].destroy()}this._clips=null}this._eases=null;this._storeOnUpdate=null;
return u.destroy.call(this)};x._prepareProperties=function(){var i=0;var f={};var h={};
var d={};var a;var b;if(this._propsEase){for(a in this._propsTo){if(this._propsTo.hasOwnProperty(a)){b=this._propsEase[a];
if(q(b)){b=w.create(b).toEasingFunction()}if(b===undefined){if(f[this._ease]===undefined){f[this._ease]={};
h[this._ease]={};d[this._ease]=this._ease.easingFunction;i++}f[this._ease][a]=this._propsTo[a];
h[this._ease][a]=this._propsFrom[a]}else{if(typeof b==="function"){f[i]={};h[i]={};
f[i][a]=this._propsTo[a];h[i][a]=this._propsFrom[a];d[i]=b;i++}else{if(f[b]===undefined){f[b]={};
h[b]={};d[b]=b;i++}f[b][a]=this._propsTo[a];h[b][a]=this._propsFrom[a]}}}}if(i>1){var g=r(this._options||{},true);
var c=this._duration*0.001;this._storeOnUpdate=this._onUpdate;this._onUpdate=this._onUpdateClips;
g.onStart=null;g.onUpdate=null;g.onDraw=null;g.onComplete=null;this._clips=[];for(b in f){if(f.hasOwnProperty(b)){g.ease=d[b];
g.propsFrom=h[b];this._clips.push(new t(this._target,c,f[b],g))}}b="linear";this._propsTo={};
this._propsFrom={}}else{for(a in d){if(d.hasOwnProperty(a)){b=d[a]}}}if(b!==undefined){this._ease=(typeof b==="function")?new s(b):o(b)
}}return u._prepareProperties.call(this)};x._onUpdateClips=function(a){var c=(this._direction===1)?a.progress():1-a.progress();
var b=this._clips.length;while(b--){this._clips[b].progress(c)}if(typeof this._storeOnUpdate==="function"){this._storeOnUpdate.call(this,this)
}};A.exports=p},{"../helpers/BezierCurveCssManager":144,"../helpers/isCssCubicBezierString":150,"@marcom/ac-clip":74,"@marcom/ac-easing":98,"@marcom/ac-object/clone":483,"@marcom/ac-object/create":484}],141:[function(u,w,t){var o=u("@marcom/ac-dom-styles/setStyle");
var x=u("../helpers/convertToStyleObject");var v=u("../helpers/convertToTransitionableObjects");
var r=u("@marcom/ac-object/create");var q=u("../helpers/removeTransitions");var n=u("./ClipEasing");
function y(b,c,a,d){d=d||{};this._el=b;this._storeOnStart=d.onStart||null;this._storeOnDraw=d.onDraw||null;
this._storeOnComplete=d.onComplete||null;d.onStart=this._onStart;d.onDraw=this._onDraw;
d.onComplete=this._onComplete;n.call(this,{},c,a,d)}var p=n.prototype;var s=y.prototype=r(p);
s.play=function(){var a=p.play.call(this);if(this._remainingDelay!==0){o(this._el,x(this._target))
}return a};s.reset=function(){var a=p.reset.call(this);o(this._el,x(this._target));
return a};s.destroy=function(){this._el=null;this._completeStyles=null;this._storeOnStart=null;
this._storeOnDraw=null;this._storeOnComplete=null;return p.destroy.call(this)};
s.target=function(){return this._el};s._prepareProperties=function(){var b=v(this._el,this._propsTo,this._propsFrom);
this._target=b.target;this._propsFrom=b.propsFrom;this._propsTo=b.propsTo;q(this._el,this._target);
var d=(this._isYoyo)?this._propsFrom:this._propsTo;this._completeStyles=x(d);if(this._options.removeStylesOnComplete!==undefined){var a;
var c=this._options.removeStylesOnComplete;if(typeof c==="boolean"&&c){for(a in this._completeStyles){if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}else{if(typeof c==="object"&&c.length){var f=c.length;while(f--){a=c[f];if(this._completeStyles.hasOwnProperty(a)){this._completeStyles[a]=null
}}}}}return p._prepareProperties.call(this)};s._onStart=function(a){if(this.playing()&&this._direction===1&&this._delay===0){o(this._el,x(this._propsFrom))
}if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)}};
s._onDraw=function(a){o(this._el,x(this._target));if(typeof this._storeOnDraw==="function"){this._storeOnDraw.call(this,this)
}};s._onComplete=function(a){o(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};w.exports=y},{"../helpers/convertToStyleObject":147,"../helpers/convertToTransitionableObjects":148,"../helpers/removeTransitions":151,"./ClipEasing":140,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-object/create":484}],142:[function(N,V,z){var T=N("@marcom/ac-dom-styles/setStyle");
var S=N("@marcom/ac-dom-styles/getStyle");var U=N("../helpers/convertToStyleObject");
var I=N("../helpers/convertToTransitionableObjects");var A=N("@marcom/ac-object/clone");
var K=N("@marcom/ac-object/create");var D=N("@marcom/ac-easing").createPredefined;
var L=N("../helpers/isCssCubicBezierString");var C=N("../helpers/removeTransitions");
var O=N("../helpers/transitionEnd");var J=N("../helpers/waitAnimationFrames");var B=N("../helpers/BezierCurveCssManager");
var W=N("@marcom/ac-clip").Clip;var F=N("./ClipEasing");var E=N("@marcom/ac-page-visibility").PageVisibilityManager;
var R="ease";var P="%EASE% is not a supported predefined ease when transitioning with Elements and CSS transition. If you need to use %EASE% then pass the inlineStyle:true option.";
var M="Function eases are not supported when using CSS transitions with Elements. Either use a cubic-bezier string (e.g. 'cubic-bezier(0, 0, 1, 1)' or pass the inlineStyle option as `true` to render styles each frame instead of using CSS transitions.";
function Q(d,a,c,b){b=b||{};this._el=d;this._storeEase=b.ease;if(typeof this._storeEase==="function"){throw new Error(M)
}this._storeOnStart=b.onStart||null;this._storeOnComplete=b.onComplete||null;b.onStart=this._onStart.bind(this);
b.onComplete=this._onComplete.bind(this);this._stylesTo=A(c,true);this._stylesFrom=(b.propsFrom)?A(b.propsFrom,true):{};
this._propsEase=(b.propsEase)?A(b.propsEase,true):{};if(L(b.ease)){b.ease=B.create(b.ease).toEasingFunction()
}W.call(this,{},a,{},b);this._propsFrom={}}var H=W.prototype;var G=Q.prototype=K(H);
G.play=function(){var a=H.play.call(this);if(this._direction===1&&this.progress()===0&&this._remainingDelay!==0){this._applyStyles(0,U(this._stylesFrom))
}return a};G.reset=function(){var a=H.reset.call(this);this._stylesClip.reset();
this._applyStyles(0,U(this._styles));return a};G.destroy=function(){E.off("changed",this._onVisibilityChanged);
this._removeTransitionListener();this.off("pause",this._onPaused);this._onPaused();
this._stylesClip.destroy();this._stylesClip=null;this._el=null;this._propsArray=null;
this._styles=null;this._stylesFrom=null;this._stylesTo=null;this._completeStyles=null;
this._storeOnStart=null;this._storeOnComplete=null;this._onTransitionEnded=null;
return H.destroy.call(this)};G.target=function(){return this._el};G.duration=function(a){var b=H.duration.call(this,a);
if(a===undefined){return b}if(this.playing()){this.progress(this._progress)}return b
};G.progress=function(b){var a=H.progress.call(this,b);if(b===undefined){return a
}b=(this._direction===1)?b:1-b;this._stylesClip.progress(b);this._applyStyles(0,U(this._styles));
if(this.playing()){this._isWaitingForStylesToBeApplied=true;J(this._setStylesAfterWaiting,2)
}return a};G._prepareProperties=function(){var g=I(this._el,this._stylesTo,this._stylesFrom);
this._styles=g.target;this._stylesTo=g.propsTo;this._stylesFrom=g.propsFrom;var f=this._storeEase||R;
this._eases={};this._propsArray=[];var b;this._styleCompleteTo=U(this._stylesTo);
this._styleCompleteFrom=U(this._stylesFrom);this._propsEaseKeys={};var c;for(c in this._stylesTo){if(this._stylesTo.hasOwnProperty(c)){this._propsArray[this._propsArray.length]=c;
if(this._propsEase[c]===undefined){if(this._eases[f]===undefined){b=this._convertEase(f);
this._eases[f]=b.css}this._propsEaseKeys[c]=f}else{if(this._eases[this._propsEase[c]]===undefined){b=this._convertEase(this._propsEase[c]);
this._eases[this._propsEase[c]]=b.css;this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=b.js}else{if(L(this._propsEase[c])){this._propsEaseKeys[c]=this._propsEase[c];
this._propsEase[c]=this._eases[this._propsEase[c]]["1"].toEasingFunction()}}}}}this._onPaused=this._onPaused.bind(this);
this.on("pause",this._onPaused);this._setOtherTransitions();this._currentTransitionStyles=this._otherTransitions;
this._completeStyles=U((this._isYoyo)?this._stylesFrom:this._stylesTo);if(this._options.removeStylesOnComplete!==undefined){var a=this._options.removeStylesOnComplete;
if(typeof a==="boolean"&&a){for(c in this._stylesTo){this._completeStyles[c]=null
}}else{if(typeof a==="object"&&a.length){var d=a.length;while(d--){this._completeStyles[a[d]]=null
}}}}this._onTransitionEnded=this._onTransitionEnded.bind(this);this._setStylesAfterWaiting=this._setStylesAfterWaiting.bind(this);
this._onVisibilityChanged=this._onVisibilityChanged.bind(this);E.on(E.CHANGED,this._onVisibilityChanged);
this._stylesClip=new F(this._styles,1,this._stylesTo,{ease:this._options.ease,propsFrom:this._stylesFrom,propsEase:this._options.propsEase});
W._remove(this._stylesClip);return H._prepareProperties.call(this)};G._convertEase=function(d){if(typeof d==="function"){throw new Error(M)
}var c;var a;if(L(d)){c=B.create(d);a=c.toEasingFunction()}else{var b=D(d);if(b.cssString===null){throw new Error(P.replace(/%EASE%/g,d))
}c=B.create(b.cssString);a=d}return{css:{"1":c,"-1":c.reversed()},js:a}};G._complete=function(){if((this._isWaitingForStylesToBeApplied||this._isTransitionEnded||!this._isListeningForTransitionEnd)&&this.progress()===1){this._isWaitingForStylesToBeApplied=false;
H._complete.call(this)}};G._onTransitionEnded=function(){this._isTransitionEnded=true;
this._complete()};G._addTransitionListener=function(){if(!this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=true;
this._isTransitionEnded=false;this._el.addEventListener(O,this._onTransitionEnded)
}};G._removeTransitionListener=function(){if(this._isListeningForTransitionEnd&&this._el&&this._onTransitionEnded){this._isListeningForTransitionEnd=false;
this._isTransitionEnded=false;this._el.removeEventListener(O,this._onTransitionEnded)
}};G._applyStyles=function(f,d){if(f>0){var c="";var a={};var b;for(b in this._eases){if(this._eases.hasOwnProperty(b)){a[b]=this._eases[b][this._direction].splitAt(this.progress()).toCSSString()
}}for(b in this._stylesTo){if(this._stylesTo.hasOwnProperty(b)){c+=b+" "+f+"ms "+a[this._propsEaseKeys[b]]+" 0ms, "
}}this._currentTransitionStyles=c.substr(0,c.length-2);if(!this._doStylesMatchCurrentStyles(d)){this._addTransitionListener()
}else{this._removeTransitionListener()}}else{this._currentTransitionStyles="";this._removeTransitionListener()
}d.transition=this._getOtherClipTransitionStyles()+this._currentTransitionStyles;
T(this._el,d)};G._doStylesMatchCurrentStyles=function(c){var a=S.apply(this,[this._el].concat([this._propsArray]));
var b;for(b in c){if(c.hasOwnProperty(b)&&a.hasOwnProperty(b)&&c[b]!==a[b]){return false
}}return true};G._setStylesAfterWaiting=function(){this._isWaitingForStylesToBeApplied=false;
if(this.playing()){var a=this._durationMs*(1-this.progress());var b=(this._direction>0)?this._styleCompleteTo:this._styleCompleteFrom;
this._applyStyles(a,b)}};G._setOtherTransitions=function(){C(this._el,this._stylesTo);
var b=W.getAll(this._el);var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._otherTransitions&&b[a]._otherTransitions.length){this._otherTransitions=b[a]._otherTransitions;
return}}this._otherTransitions=S(this._el,"transition").transition;if(this._otherTransitions===null||this._otherTransitions==="all 0s ease 0s"){this._otherTransitions=""
}};G._getTransitionStyles=function(){var a=this._getOtherClipTransitionStyles();
if(this._otherTransitions.length){a+=this._otherTransitions}else{if(a.length){a=a.substr(0,a.length-2)
}}return a};G._getOtherClipTransitionStyles=function(){var c="";var b=W.getAll(this._el);
var a=b.length;while(a--){if(b[a]!==this&&b[a].playing()&&b[a]._currentTransitionStyles&&b[a]._currentTransitionStyles.length){c+=b[a]._currentTransitionStyles+", "
}}return c};G._onVisibilityChanged=function(b){if(this.playing()&&!b.isHidden){this._update({timeNow:this._getTime()});
var a=this.progress();if(a<1){this.progress(a)}}};G._onPaused=function(a){var b=S.apply(this,[this._el].concat([this._propsArray]));
b.transition=this._getTransitionStyles();this._removeTransitionListener();T(this._el,b)
};G._onStart=function(b){var a=(this._direction===1&&this.progress()===0&&this._delay===0)?2:0;
if(a){this._isWaitingForStylesToBeApplied=true;this._applyStyles(0,this._styleCompleteFrom)
}J(this._setStylesAfterWaiting,a);if(typeof this._storeOnStart==="function"){this._storeOnStart.call(this,this)
}};G._onComplete=function(a){this._removeTransitionListener();this._completeStyles.transition=this._getTransitionStyles();
T(this._el,this._completeStyles);if(typeof this._storeOnComplete==="function"){this._storeOnComplete.call(this,this)
}};V.exports=Q},{"../helpers/BezierCurveCssManager":144,"../helpers/convertToStyleObject":147,"../helpers/convertToTransitionableObjects":148,"../helpers/isCssCubicBezierString":150,"../helpers/removeTransitions":151,"../helpers/transitionEnd":154,"../helpers/waitAnimationFrames":155,"./ClipEasing":140,"@marcom/ac-clip":74,"@marcom/ac-dom-styles/getStyle":45,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-easing":98,"@marcom/ac-object/clone":483,"@marcom/ac-object/create":484,"@marcom/ac-page-visibility":108}],143:[function(m,l,i){var j=m("@marcom/ac-easing").createBezier;
function h(a,b){this.manager=b;this.p1={x:a[0],y:a[1]};this.p2={x:a[2],y:a[3]};
this._isLinear=(this.p1.x===this.p1.y)&&(this.p2.x===this.p2.y);this._cacheSplits={}
}var k=h.prototype;k.splitAt=function(t){if(this._isLinear){return this}t=Math.round(t*40)/40;
if(t===0){return this}else{if(this._cacheSplits[t]!==undefined){return this._cacheSplits[t]
}}var b=[this.p1.x,this.p2.x];var f=[this.p1.y,this.p2.y];var g=0;var d=t;var v=0;
var c=1;var u=this._getStartX(t,b);while(d!==u&&g<1000){if(d<u){c=t}else{v=t}t=v+((c-v)*0.5);
u=this._getStartX(t,b);++g}var s=this._splitBezier(t,b,f);var a=this._normalize(s);
var w=this.manager.create(a);this._cacheSplits[d]=w;return w};k.reversed=function(){var a=this.toArray();
return this.manager.create([0.5-(a[2]-0.5),0.5-(a[3]-0.5),0.5-(a[0]-0.5),0.5-(a[1]-0.5)])
};k.toArray=function(){return[this.p1.x,this.p1.y,this.p2.x,this.p2.y]};k.toCSSString=function(){return"cubic-bezier("+this.p1.x+", "+this.p1.y+", "+this.p2.x+", "+this.p2.y+")"
};k.toEasingFunction=function(){return j.apply(this,this.toArray()).easingFunction
};k._getStartX=function(a,g){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return f-3*c*b*g[1]+3*a*d*g[0]
};k._splitBezier=function(a,g,o){var b=a-1;var c=a*a;var d=b*b;var f=c*a;return[f-3*c*b*g[1]+3*a*d*g[0],f-3*c*b*o[1]+3*a*d*o[0],c-2*a*b*g[1]+d*g[0],c-2*a*b*o[1]+d*o[0],a-b*g[1],a-b*o[1]]
};k._normalize=function(a){return[(a[2]-a[0])/(1-a[0]),(a[3]-a[1])/(1-a[1]),(a[4]-a[0])/(1-a[0]),(a[5]-a[1])/(1-a[1])]
};l.exports=h},{"@marcom/ac-easing":98}],144:[function(m,l,i){var h=m("./BezierCurveCss");
function j(){this._instances={}}var k=j.prototype;k.create=function(a){var b;if(typeof a==="string"){b=a.replace(/ /g,"")
}else{b="cubic-bezier("+a.join(",")+")"}if(this._instances[b]===undefined){if(typeof a==="string"){a=a.match(/\d*\.?\d+/g);
var c=a.length;while(c--){a[c]=Number(a[c])}}this._instances[b]=new h(a,this)}return this._instances[b]
};l.exports=new j()},{"./BezierCurveCss":143}],145:[function(d,g,f){if(typeof window.Float32Array==="undefined"){window.Float32Array=function(){}
}},{}],146:[function(o,n,p){var k=o("@marcom/ac-dom-metrics/getDimensions");var q=o("./splitUnits");
var j={translateX:"width",translateY:"height"};function l(d,b,a){this._transform=d;
var c;var g;var f;for(f in a){if(a.hasOwnProperty(f)&&typeof this._transform[f]==="function"){c=q(a[f]);
if(c.unit==="%"){g=this._convertPercentToPixelValue(f,c.value,b)}else{g=c.value
}this._transform[f].call(this._transform,g)}}}var m=l.prototype;m._convertPercentToPixelValue=function(a,b,c){a=j[a];
var d=k(c);if(d[a]){b*=0.01;return d[a]*b}return b};m.toArray=function(){return this._transform.toArray()
};m.toCSSString=function(){return this._transform.toCSSString()};n.exports=l},{"./splitUnits":152,"@marcom/ac-dom-metrics/getDimensions":96}],147:[function(f,i,g){i.exports=function h(b){var c={};
var d;var a;for(a in b){if(b.hasOwnProperty(a)&&b[a]!==null){if(b[a].isColor){if(b[a].isRgb){c[a]="rgb("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+")"
}else{if(b[a].isRgba){c[a]="rgba("+Math.round(b[a].r)+", "+Math.round(b[a].g)+", "+Math.round(b[a].b)+", "+b[a].a+")"
}}}else{if(a==="transform"){d=(b[a].length===6)?"matrix":"matrix3d";c[a]=d+"("+b[a].join(",")+")"
}else{if(!b[a].unit){c[a]=b[a].value}else{c[a]=b[a].value+b[a].unit}}}}}return c
}},{}],148:[function(C,F,A){var x=C("@marcom/ac-dom-styles/getStyle");var v=C("@marcom/ac-object/clone");
var E=C("./splitUnits");var H=C("./toCamCase");var G=C("@marcom/ac-color").Color;
var y=C("@marcom/ac-feature/cssPropertyAvailable");var B=C("@marcom/ac-transform").Transform;
var I=C("./TransformMatrix");var w=function(a){if(G.isRgba(a)){a=new G(a).rgbaObject();
a.isRgba=true}else{a=new G(a).rgbObject();a.isRgb=true}a.isColor=true;return a};
var s=function(a){if(a.isRgb){a.isRgb=false;a.isRgba=true;a.a=1}};var t=function(b,c,a){if(b.isRgba||c.isRgba||a.isRgba){s(b);
s(c);s(a)}};var u=function(a){return[a[0],a[1],0,0,a[2],a[3],0,0,0,0,1,0,a[4],a[5],0,1]
};var z=function(b,c,a){if(b.transform.length===16||c.transform.length===16||a.transform.length===16){if(b.transform.length===6){b.transform=u(b.transform)
}if(c.transform.length===6){c.transform=u(c.transform)}if(a.transform.length===6){a.transform=u(a.transform)
}}};F.exports=function D(i,b,c){var g={};b=v(b,true);c=v(c,true);var j;var a;var f;
var d;var h=y("transform");var k;for(k in b){if(b.hasOwnProperty(k)&&b[k]!==null){if(k==="transform"){if(h){a=new B();
j=x(i,"transform")["transform"]||"none";a.setMatrixValue(j);f=new I(new B(),i,b[k])
}if(f&&f.toCSSString()!==a.toCSSString()){d=new I(c[k]?new B():a.clone(),i,c[k]);
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null}}else{j=x(i,k)[H(k)]||c[k];
if(G.isColor(j)){g[k]=w(j);c[k]=(c[k]!==undefined)?w(c[k]):v(g[k],true);b[k]=w(b[k])
}else{g[k]=E(j);c[k]=(c[k]!==undefined)?E(c[k]):v(g[k],true);b[k]=E(b[k])}}}}for(k in c){if(c.hasOwnProperty(k)&&c[k]!==null&&(b[k]===undefined||b[k]===null)){if(k==="transform"){if(h){a=new B();
a.setMatrixValue(getComputedStyle(i).transform||getComputedStyle(i).webkitTransform||"none");
d=new I(new B(),i,c[k])}if(d&&d.toCSSString()!==a.toCSSString()){f=new I(a.clone());
g[k]=a.toArray();b[k]=f.toArray();c[k]=d.toArray()}else{g[k]=null;b[k]=null;c[k]=null
}}else{j=x(i,k)[H(k)];if(G.isColor(j)){g[k]=w(j);b[k]=v(g[k],true);c[k]=w(c[k])
}else{g[k]=E(j);c[k]=E(c[k]);b[k]=v(g[k],true)}}}if(g[k]&&g[k].isColor){t(g[k],c[k],b[k])
}}if(g.transform){z(g,c,b)}return{target:g,propsTo:b,propsFrom:c}}},{"./TransformMatrix":146,"./splitUnits":152,"./toCamCase":153,"@marcom/ac-color":76,"@marcom/ac-dom-styles/getStyle":45,"@marcom/ac-feature/cssPropertyAvailable":179,"@marcom/ac-object/clone":483,"@marcom/ac-transform":132}],149:[function(f,i,g){i.exports=function h(d){if(d.transitionProperty){var a="";
var n=d.transitionProperty.split(", ");var c=d.transitionDuration.split(", ");var b=d.transitionTimingFunction.replace(/\d+[,]+[\s]/gi,function(j){return j.substr(0,j.length-1)
}).split(", ");var p=d.transitionDelay.split(", ");var o=n.length;while(o--){a+=n[o]+" "+c[o]+" "+b[o]+" "+p[o]+", "
}return a.substr(0,a.length-2)}return false}},{}],150:[function(i,h,f){h.exports=function g(a){return typeof a==="string"&&a.substr(0,13)==="cubic-bezier("
}},{}],151:[function(n,m,o){var k=n("@marcom/ac-dom-styles/setStyle");var j=n("@marcom/ac-dom-styles/getStyle");
var l=n("./getShorthandTransition");m.exports=function i(b,g){var a=j(b,"transition","transition-property","transition-duration","transition-timing-function","transition-delay");
a=a.transition||l(a);if(a&&a.length){a=a.split(",");var c=0;var f;var d=a.length;
while(d--){f=a[d].trim().split(" ")[0];if(g[f]!==undefined){a.splice(d,1);++c}}if(c){if(a.length===0){a=["all"]
}k(b,{transition:a.join(",").trim()})}}}},{"./getShorthandTransition":149,"@marcom/ac-dom-styles/getStyle":45,"@marcom/ac-dom-styles/setStyle":58}],152:[function(i,h,f){h.exports=function g(a){a=String(a);
if(a.indexOf(" ")>-1){throw new Error("Shorthand CSS is not supported. Please use longhand CSS only.")
}var b=/(\d*\.?\d*)(.*)/;var d=1;if(a&&a.substr(0,1)==="-"){a=a.substr(1);d=-1}var c=String(a).match(b);
return{value:Number(c[1])*d,unit:c[2]}}},{}],153:[function(i,h,f){h.exports=function g(a){var b=function(l,d,c,m){return(c===0)&&(m.substr(1,3)!=="moz")?d:d.toUpperCase()
};return a.replace(/-(\w)/g,b)}},{}],154:[function(j,i,k){var h;i.exports=(function g(){if(h){return h
}var c;var b=document.createElement("fakeelement");var a={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"};
for(c in a){if(b.style[c]!==undefined){h=a[c];return h}}})()},{}],155:[function(j,i,g){var h=j("@marcom/ac-page-visibility").PageVisibilityManager;
i.exports=function k(a,c){if(c){var b=function(m){if(h.isHidden){setTimeout(m,16)
}else{window.requestAnimationFrame(m)}};var d=0;var f=function(){if(d===c){a.call(this)
}else{++d;b(f)}};f()}else{a.call(this)}}},{"@marcom/ac-page-visibility":108}],156:[function(u,w,t){var q=u("@marcom/ac-object/create");
var p=u("@marcom/ac-clip").Clip;var s=u("./TimelineClip");var v=u("./TimelineCallback");
var m=u("./TimelineItemList");var n=p.prototype;function o(a){a=a||{};a.ease=a.ease||"linear";
a.destroyOnComplete=false;this.options=a;p.call(this,{t:0},0,{t:1},a);this._itemList=new m()
}var r=o.prototype=q(n);o.prototype.constructor=o;r._update=function(a){n._update.call(this,a);
this._render()};r.progress=function(a){n.progress.call(this,a);if(a!==undefined){this._render()
}return this._progress};r._render=function(){if(this._itemList.length===0){return
}var b=this._target.t*this._duration;var a=this._itemList.head;var d=a;while(d){d=a.next;
var c=(b-a.position);a.currentTime(c);a=d}};r.addClip=function(b,c){c=(c===undefined)?this.duration():c;
var a=b._delay/1000;this._itemList.append(new s(b,c+a));this._updateDuration()};
r.addCallback=function(b,a){a=(a===undefined)?this.duration():a;this._itemList.append(new v(b,a));
this._updateDuration()};r.remove=function(a){var b=this._itemList.getItem(a);if(b){this._itemList.remove(b);
this._updateDuration()}};r._updateDuration=function(){var a=this._itemList.head;
var b=a.position+a.duration();this._itemList.forEach(function(c){var d=c.position+c.duration();
if(d>=b){a=c;b=d}});this.duration(b)};r.destroy=function(){var a=this._itemList.head;
while(a){var b=a;a=b.next;this._itemList.remove(b)}this._duration=0;return n.destroy.call(this)
};w.exports=o},{"./TimelineCallback":157,"./TimelineClip":158,"./TimelineItemList":159,"@marcom/ac-clip":74,"@marcom/ac-object/create":484}],157:[function(g,k,h){function i(a,b){this.callback=a;
this._delay=0;this.position=b;this._hasTriggered=false;this.prev=null;this.next=null
}var j=i.prototype;j.duration=function(){return 0};j.currentTime=function(a){if(a>=0&&!this._hasTriggered){this.callback();
this._hasTriggered=true}if(a<0&&this._hasTriggered){this.callback();this._hasTriggered=false
}return 0};k.exports=i},{}],158:[function(g,k,h){function i(a,b){this.clip=a;this.position=b;
this.duration=this.clip.duration.bind(this.clip);this.lastProgress=-1;this.prev=null;
this.next=null}var j=i.prototype;j.currentTime=function(a){var b=Math.min(1,Math.max(0,a/this.clip._duration));
if(b!==b){b=1}if(this.lastProgress===b){return this.lastProgress}if(this.lastProgress===0||b===0||this.lastProgress===-1){if(this.clip._storeOnStart){this.clip._storeOnStart(this.clip)
}}this.clip._playing=(b*this.clip._duration===this.clip._duration);this.lastProgress=this.clip.progress(b);
return this.lastProgress};j.destroy=function(){this.clip.destroy();this.prev=null;
this.next=null;this.duration=null};k.exports=i},{}],159:[function(i,o,j){var k=i("./TimelineClip");
var m=i("./TimelineCallback");var l=function(){this.head=null;this.tail=null;this.length=0
};var n=l.prototype;n.append=function(a){a.prev=null;a.next=null;if(this.tail){this.tail.next=a;
a.prev=this.tail}else{this.head=a}this.tail=a;this.length++};n.remove=function(a){if(a===this.head){this.head=this.head.next
}else{if(a===this.tail){this.tail=this.tail.prev}}if(a.prev){a.prev.next=a.next
}if(a.next){a.next.prev=a.prev}a.next=a.prev=null;if(this.head===null){this.tail=null
}this.length--};n.getItem=function(c){var b=this.head;while(b){var a=b;if((a instanceof k&&a.clip===c)||(a instanceof m&&a.callback===c)){return a
}b=a.next}return null};n.forEach=function(a){var d=0;var c=this.head;while(c){var b=c;
a(b,d,this.length);c=b.next}};n.destroy=function(){while(this.head){var a=this.head;
this.remove(a);a.destroy()}};o.exports=l},{"./TimelineCallback":157,"./TimelineClip":158}],160:[function(k,j,g){var h=function(){var a="";
var b;for(b=0;b<arguments.length;b++){if(b>0){a+=","}a+=arguments[b]}return a};
j.exports=function i(a,b){b=b||h;var c=function(){var f=arguments;var d=b.apply(this,f);
if(!(d in c.cache)){c.cache[d]=a.apply(this,f)}return c.cache[d]};c.cache={};return c
}},{}],161:[function(f,i,g){i.exports=function h(a){var b;return function(){if(typeof b==="undefined"){b=a.apply(this,arguments)
}return b}}},{}],162:[function(d,g,f){arguments[4][4][0].apply(f,arguments)},{"./shared/camelCasedEventTypes":165,"./shared/prefixHelper":167,"./shared/windowFallbackEventTypes":170,"./utils/eventTypeAvailable":171,dup:4}],163:[function(d,g,f){arguments[4][49][0].apply(f,arguments)
},{"./shared/getStyleTestElement":166,"./shared/prefixHelper":167,"./shared/stylePropertyCache":168,"./utils/toCSS":172,"./utils/toDOM":173,dup:49}],164:[function(d,g,f){arguments[4][50][0].apply(f,arguments)
},{"./getStyleProperty":163,"./shared/prefixHelper":167,"./shared/stylePropertyCache":168,"./shared/styleValueAvailable":169,dup:50}],165:[function(d,g,f){arguments[4][5][0].apply(f,arguments)
},{dup:5}],166:[function(d,g,f){arguments[4][51][0].apply(f,arguments)},{dup:51}],167:[function(d,g,f){arguments[4][6][0].apply(f,arguments)
},{dup:6}],168:[function(d,g,f){arguments[4][53][0].apply(f,arguments)},{dup:53}],169:[function(d,g,f){arguments[4][54][0].apply(f,arguments)
},{"./getStyleTestElement":166,"./stylePropertyCache":168,dup:54}],170:[function(d,g,f){arguments[4][7][0].apply(f,arguments)
},{dup:7}],171:[function(d,g,f){arguments[4][8][0].apply(f,arguments)},{dup:8}],172:[function(d,g,f){arguments[4][56][0].apply(f,arguments)
},{dup:56}],173:[function(d,g,f){arguments[4][57][0].apply(f,arguments)},{dup:57}],174:[function(d,g,f){g.exports={canvasAvailable:d("./canvasAvailable"),continuousScrollEventsAvailable:d("./continuousScrollEventsAvailable"),cookiesAvailable:d("./cookiesAvailable"),cssLinearGradientAvailable:d("./cssLinearGradientAvailable"),cssPropertyAvailable:d("./cssPropertyAvailable"),cssViewportUnitsAvailable:d("./cssViewportUnitsAvailable"),elementAttributeAvailable:d("./elementAttributeAvailable"),eventTypeAvailable:d("./eventTypeAvailable"),isDesktop:d("./isDesktop"),isHandheld:d("./isHandheld"),isRetina:d("./isRetina"),isTablet:d("./isTablet"),localStorageAvailable:d("./localStorageAvailable"),mediaElementsAvailable:d("./mediaElementsAvailable"),mediaQueriesAvailable:d("./mediaQueriesAvailable"),sessionStorageAvailable:d("./sessionStorageAvailable"),svgAvailable:d("./svgAvailable"),threeDTransformsAvailable:d("./threeDTransformsAvailable"),touchAvailable:d("./touchAvailable"),webGLAvailable:d("./webGLAvailable")}
},{"./canvasAvailable":175,"./continuousScrollEventsAvailable":176,"./cookiesAvailable":177,"./cssLinearGradientAvailable":178,"./cssPropertyAvailable":179,"./cssViewportUnitsAvailable":180,"./elementAttributeAvailable":181,"./eventTypeAvailable":182,"./isDesktop":184,"./isHandheld":185,"./isRetina":186,"./isTablet":187,"./localStorageAvailable":188,"./mediaElementsAvailable":189,"./mediaQueriesAvailable":190,"./sessionStorageAvailable":191,"./svgAvailable":192,"./threeDTransformsAvailable":193,"./touchAvailable":194,"./webGLAvailable":195}],175:[function(h,m,i){var j=h("./helpers/globals");
var k=h("@marcom/ac-function/once");var l=function(){var b=j.getDocument();var a=b.createElement("canvas");
return !!(typeof a.getContext==="function"&&a.getContext("2d"))};m.exports=k(l);
m.exports.original=l},{"./helpers/globals":183,"@marcom/ac-function/once":161}],176:[function(o,m,i){var n=o("@marcom/ac-useragent");
var j=o("./touchAvailable").original;var l=o("@marcom/ac-function/once");function k(){return(!j()||(n.os.ios&&n.os.version.major>=8)||n.browser.chrome)
}m.exports=l(k);m.exports.original=k},{"./touchAvailable":194,"@marcom/ac-function/once":161,"@marcom/ac-useragent":502}],177:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=false;var d=j.getDocument();
var b=j.getNavigator();try{if("cookie" in d&&!!b.cookieEnabled){d.cookie="ac_feature_cookie=1";
a=(d.cookie.indexOf("ac_feature_cookie")!==-1);d.cookie="ac_feature_cookie=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
}}catch(c){}return a}l.exports=k(i);l.exports.original=i},{"./helpers/globals":183,"@marcom/ac-function/once":161}],178:[function(m,l,h){var j=m("@marcom/ac-prefixer/getStyleValue");
var k=m("@marcom/ac-function/once");function i(){var a=["linear-gradient(to bottom right, #9f9, white)","linear-gradient(top left, #9f9, white)","gradient(linear, left top, right bottom, from(#9f9), to(white))"];
return a.some(function(b){return !!j("background-image",b)})}l.exports=k(i);l.exports.original=i
},{"@marcom/ac-function/once":161,"@marcom/ac-prefixer/getStyleValue":164}],179:[function(o,n,i){var l=o("@marcom/ac-prefixer/getStyleValue");
var m=o("@marcom/ac-prefixer/getStyleProperty");var k=o("@marcom/ac-function/memoize");
function j(a,b){if(typeof b!=="undefined"){return !!l(a,b)}else{return !!m(a)}}n.exports=k(j);
n.exports.original=j},{"@marcom/ac-function/memoize":160,"@marcom/ac-prefixer/getStyleProperty":163,"@marcom/ac-prefixer/getStyleValue":164}],180:[function(h,m,i){var k=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function j(){return !!k("margin","1vw 1vh")
}m.exports=l(j);m.exports.original=j},{"@marcom/ac-function/once":161,"@marcom/ac-prefixer/getStyleValue":164}],181:[function(h,l,i){var k=h("./helpers/globals");
var j=h("@marcom/ac-function/memoize");function m(d,b){var c=k.getDocument();var a;
b=b||"div";a=c.createElement(b);return(d in a)}l.exports=j(m);l.exports.original=m
},{"./helpers/globals":183,"@marcom/ac-function/memoize":160}],182:[function(m,k,h){var i=m("@marcom/ac-prefixer/getEventType");
var j=m("@marcom/ac-function/memoize");function l(a,b){return !!i(a,b)}k.exports=j(l);
k.exports.original=l},{"@marcom/ac-function/memoize":160,"@marcom/ac-prefixer/getEventType":162}],183:[function(d,g,f){g.exports={getWindow:function(){return window
},getDocument:function(){return document},getNavigator:function(){return navigator
}}},{}],184:[function(n,m,i){var j=n("./touchAvailable").original;var k=n("./helpers/globals");
var l=n("@marcom/ac-function/once");function o(){var a=k.getWindow();return(!j()&&!a.orientation)
}m.exports=l(o);m.exports.original=o},{"./helpers/globals":183,"./touchAvailable":194,"@marcom/ac-function/once":161}],185:[function(m,l,o){var n=m("./isDesktop").original;
var j=m("./isTablet").original;var k=m("@marcom/ac-function/once");function i(){return(!n()&&!j())
}l.exports=k(i);l.exports.original=i},{"./isDesktop":184,"./isTablet":187,"@marcom/ac-function/once":161}],186:[function(g,k,h){var j=g("./helpers/globals");
k.exports=function i(){var a=j.getWindow();return("devicePixelRatio" in a&&a.devicePixelRatio>=1.5)
}},{"./helpers/globals":183}],187:[function(o,n,q){var p=o("./isDesktop").original;
var l=o("./helpers/globals");var m=o("@marcom/ac-function/once");var j=600;function k(){var a=l.getWindow();
var b=a.screen.width;if(a.orientation&&a.screen.height<b){b=a.screen.height}return(!p()&&b>=j)
}n.exports=m(k);n.exports.original=k},{"./helpers/globals":183,"./isDesktop":184,"@marcom/ac-function/once":161}],188:[function(m,l,i){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function h(){var a=j.getWindow();var b=false;
try{b=!!(a.localStorage&&a.localStorage.non_existent!==null)}catch(c){}return b
}l.exports=k(h);l.exports.original=h},{"./helpers/globals":183,"@marcom/ac-function/once":161}],189:[function(h,m,i){var j=h("./helpers/globals");
var l=h("@marcom/ac-function/once");function k(){var a=j.getWindow();return("HTMLMediaElement" in a)
}m.exports=l(k);m.exports.original=k},{"./helpers/globals":183,"@marcom/ac-function/once":161}],190:[function(m,l,h){m("@marcom/ac-polyfills/matchMedia");
var j=m("./helpers/globals");var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();
var b=a.matchMedia("only all");return !!(b&&b.matches)}l.exports=k(i);l.exports.original=i
},{"./helpers/globals":183,"@marcom/ac-function/once":161,"@marcom/ac-polyfills/matchMedia":"@marcom/ac-polyfills/matchMedia"}],191:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=false;
try{if("sessionStorage" in a&&typeof a.sessionStorage.setItem==="function"){a.sessionStorage.setItem("ac_feature","test");
c=true;a.sessionStorage.removeItem("ac_feature","test")}}catch(b){}return c}l.exports=k(i);
l.exports.original=i},{"./helpers/globals":183,"@marcom/ac-function/once":161}],192:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getDocument();return !!a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":183,"@marcom/ac-function/once":161}],193:[function(h,m,i){var j=h("@marcom/ac-prefixer/getStyleValue");
var l=h("@marcom/ac-function/once");function k(){return !!(j("perspective","1px")&&j("transform","translateZ(0)"))
}m.exports=l(k);m.exports.original=k},{"@marcom/ac-function/once":161,"@marcom/ac-prefixer/getStyleValue":164}],194:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var a=j.getWindow();var c=j.getDocument();
var b=j.getNavigator();return !!(("ontouchstart" in a)||(a.DocumentTouch&&c instanceof a.DocumentTouch)||(b.maxTouchPoints>0)||(b.msMaxTouchPoints>0))
}l.exports=k(i);l.exports.original=i},{"./helpers/globals":183,"@marcom/ac-function/once":161}],195:[function(m,l,h){var j=m("./helpers/globals");
var k=m("@marcom/ac-function/once");function i(){var b=j.getDocument();var a=b.createElement("canvas");
if(typeof a.getContext==="function"){return !!(a.getContext("webgl")||a.getContext("experimental-webgl"))
}return false}l.exports=k(i);l.exports.original=i},{"./helpers/globals":183,"@marcom/ac-function/once":161}],196:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.slice");
g("@marcom/ac-polyfills/Element/prototype.classList");var j=g("./className/add");
k.exports=function i(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.add){b.classList.add.apply(b.classList,a);return
}for(c=0;c<a.length;c++){j(b,a[c])}}},{"./className/add":197,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],197:[function(g,k,h){var j=g("./contains");
k.exports=function i(a,b){if(!j(a,b)){a.className+=" "+b}}},{"./contains":198}],198:[function(g,k,h){var i=g("./getTokenRegExp");
k.exports=function j(a,b){return i(b).test(a.className)}},{"./getTokenRegExp":199}],199:[function(f,i,g){i.exports=function h(a){return new RegExp("(\\s|^)"+a+"(\\s|$)")
}},{}],200:[function(m,l,h){var k=m("./contains");var j=m("./getTokenRegExp");l.exports=function i(a,b){if(k(a,b)){a.className=a.className.replace(j(b),"$1").trim()
}}},{"./contains":198,"./getTokenRegExp":199}],201:[function(g,j,h){g("@marcom/ac-polyfills/Element/prototype.classList");
var i=g("./className/contains");j.exports=function k(a,b){if(a.classList&&a.classList.contains){return a.classList.contains(b)
}return i(a,b)}},{"./className/contains":198,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],202:[function(j,i,k){j("@marcom/ac-polyfills/Array/prototype.slice");
j("@marcom/ac-polyfills/Element/prototype.classList");var g=j("./className/remove");
i.exports=function h(){var a=Array.prototype.slice.call(arguments);var b=a.shift(a);
var c;if(b.classList&&b.classList.remove){b.classList.remove.apply(b.classList,a);
return}for(c=0;c<a.length;c++){g(b,a[c])}}},{"./className/remove":200,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],203:[function(d,g,f){g.exports={log:d("./ac-console/log")}
},{"./ac-console/log":204}],204:[function(l,k,h){var i="f7c9180f-5c45-47b4-8de4-428015f096c0";
var m=!!(function(){try{return window.localStorage.getItem(i)}catch(a){}}());k.exports=function j(){if(window.console&&typeof console.log!=="undefined"&&m){console.log.apply(console,Array.prototype.slice.call(arguments,0))
}}},{}],205:[function(d,g,f){g.exports={EventEmitterMicro:d("./ac-event-emitter-micro/EventEmitterMicro")}
},{"./ac-event-emitter-micro/EventEmitterMicro":206}],206:[function(g,k,h){function i(){this._events={}
}var j=i.prototype;j.on=function(b,a){this._events[b]=this._events[b]||[];this._events[b].unshift(a)
};j.once=function(d,a){var b=this;function c(f){b.off(d,c);if(f!==undefined){a(f)
}else{a()}}this.on(d,c)};j.off=function(c,a){if(!this.has(c)){return}var b=this._events[c].indexOf(a);
if(b===-1){return}this._events[c].splice(b,1)};j.trigger=function(c,a){if(!this.has(c)){return
}for(var b=this._events[c].length-1;b>=0;b--){if(a!==undefined){this._events[c][b](a)
}else{this._events[c][b]()}}};j.has=function(a){if(a in this._events===false||this._events[a].length===0){return false
}return true};j.destroy=function(){for(var a in this._events){this._events[a]=null
}this._events=null};k.exports=i},{}],207:[function(v,w,t){var n=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var q=v("@marcom/ac-dom-events/utils/addEventListener");var x=v("@marcom/ac-dom-events/utils/removeEventListener");
var r=v("@marcom/ac-object/create");var u=v("./internal/KeyEvent");var p="keydown";
var o="keyup";function y(a){this._keysDown={};this._DOMKeyDown=this._DOMKeyDown.bind(this);
this._DOMKeyUp=this._DOMKeyUp.bind(this);this._context=a||document;q(this._context,p,this._DOMKeyDown,true);
q(this._context,o,this._DOMKeyUp,true);n.call(this)}var s=y.prototype=r(n.prototype);
s.onDown=function(b,a){return this.on(p+":"+b,a)};s.onceDown=function(b,a){return this.once(p+":"+b,a)
};s.offDown=function(b,a){return this.off(p+":"+b,a)};s.onUp=function(b,a){return this.on(o+":"+b,a)
};s.onceUp=function(b,a){return this.once(o+":"+b,a)};s.offUp=function(b,a){return this.off(o+":"+b,a)
};s.isDown=function(a){a+="";return this._keysDown[a]||false};s.isUp=function(a){return !this.isDown(a)
};s.destroy=function(){x(this._context,p,this._DOMKeyDown,true);x(this._context,o,this._DOMKeyUp,true);
this._keysDown=null;this._context=null;n.prototype.destroy.call(this);return this
};s._DOMKeyDown=function(b){var c=this._normalizeKeyboardEvent(b);var a=c.keyCode+="";
this._trackKeyDown(a);this.trigger(p+":"+a,c)};s._DOMKeyUp=function(b){var c=this._normalizeKeyboardEvent(b);
var a=c.keyCode+="";this._trackKeyUp(a);this.trigger(o+":"+a,c)};s._normalizeKeyboardEvent=function(a){return new u(a)
};s._trackKeyUp=function(a){if(this._keysDown[a]){this._keysDown[a]=false}};s._trackKeyDown=function(a){if(!this._keysDown[a]){this._keysDown[a]=true
}};w.exports=y},{"./internal/KeyEvent":209,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/removeEventListener":17,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-object/create":484}],208:[function(i,h,f){var g=i("./Keyboard");
h.exports=new g()},{"./Keyboard":207}],209:[function(k,j,g){var h=["keyLocation"];
function i(b){this.originalEvent=b;var a;for(a in b){if(h.indexOf(a)===-1&&typeof b[a]!=="function"){this[a]=b[a]
}}this.location=(this.originalEvent.location!==undefined)?this.originalEvent.location:this.originalEvent.keyLocation
}i.prototype={preventDefault:function(){if(typeof this.originalEvent.preventDefault!=="function"){this.originalEvent.returnValue=false;
return}return this.originalEvent.preventDefault()},stopPropagation:function(){return this.originalEvent.stopPropagation()
}};j.exports=i},{}],210:[function(d,g,f){g.exports={BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CONTROL:17,ALT:18,COMMAND:91,CAPSLOCK:20,ESCAPE:27,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,ARROW_LEFT:37,ARROW_UP:38,ARROW_RIGHT:39,ARROW_DOWN:40,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,NUMPAD_ZERO:96,NUMPAD_ONE:97,NUMPAD_TWO:98,NUMPAD_THREE:99,NUMPAD_FOUR:100,NUMPAD_FIVE:101,NUMPAD_SIX:102,NUMPAD_SEVEN:103,NUMPAD_EIGHT:104,NUMPAD_NINE:105,NUMPAD_ASTERISK:106,NUMPAD_PLUS:107,NUMPAD_DASH:109,NUMPAD_DOT:110,NUMPAD_SLASH:111,NUMPAD_EQUALS:187,TICK:192,LEFT_BRACKET:219,RIGHT_BRACKET:221,BACKSLASH:220,SEMICOLON:186,APOSTRAPHE:222,APOSTROPHE:222,SPACEBAR:32,CLEAR:12,COMMA:188,DOT:190,SLASH:191}
},{}],211:[function(i,h,f){h.exports=function g(b){var a;b=b||window;if(b===window){a=window.pageXOffset;
if(!a){b=document.documentElement||document.body.parentNode||document.body}else{return a
}}return b.scrollLeft}},{}],212:[function(i,h,f){h.exports=function g(b){var a;
b=b||window;if(b===window){a=window.pageYOffset;if(!a){b=document.documentElement||document.body.parentNode||document.body
}else{return a}}return b.scrollTop}},{}],213:[function(d,g,f){g.exports={Modal:d("./ac-modal-basic/Modal"),Renderer:d("./ac-modal-basic/Renderer"),classNames:d("./ac-modal-basic/classNames")}
},{"./ac-modal-basic/Modal":214,"./ac-modal-basic/Renderer":215,"./ac-modal-basic/classNames":216}],214:[function(z,A,w){var r={addEventListener:z("@marcom/ac-dom-events/addEventListener"),removeEventListener:z("@marcom/ac-dom-events/removeEventListener")};
var u={getScrollX:z("@marcom/ac-dom-metrics/getScrollX"),getScrollY:z("@marcom/ac-dom-metrics/getScrollY")};
var y={create:z("@marcom/ac-object/create"),defaults:z("@marcom/ac-object/defaults")};
var t=z("@marcom/ac-keyboard");var o=z("@marcom/ac-keyboard/keyMap");var q=z("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var x=z("./Renderer");var v;var p={retainScrollPosition:false};function s(b,a){q.call(this);
this.options=y.defaults(p,b);this.renderer=new x(a);this.opened=false;this._keysToClose=[o.ESCAPE];
this._attachedKeysToClose=[];this.close=this.close.bind(this)}var v=s.prototype=y.create(q.prototype);
v.open=function(){if(this.options.retainScrollPosition){this._saveScrollPosition()
}if(!this.opened){this._attachEvents();this.trigger("willopen");this.renderer.open();
this.opened=true;this.trigger("open")}};v.close=function(){if(this.opened){this.trigger("willclose");
this._removeEvents();this.renderer.close();if(this.options.retainScrollPosition){this._restoreScrollPosition()
}this.opened=false;this.trigger("close")}};v.render=function(){this.renderer.render()
};v.appendContent=function(b,a){this.renderer.appendContent(b,a)};v.removeContent=function(a){this.renderer.removeContent(a)
};v.destroy=function(){this._removeEvents();this.renderer.destroy();for(var a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};v.addKeyToClose=function(a){var b=this._keysToClose.indexOf(a);if(b===-1){this._keysToClose.push(a);
this._bindKeyToClose(a)}};v.removeKeyToClose=function(a){var b=this._keysToClose.indexOf(a);
if(b!==-1){this._keysToClose.splice(b,1)}this._releaseKeyToClose(a)};v._bindKeyToClose=function(a){var b=this._attachedKeysToClose.indexOf(a);
if(b===-1){t.onUp(a,this.close);this._attachedKeysToClose.push(a)}};v._releaseKeyToClose=function(a){var b=this._attachedKeysToClose.indexOf(a);
if(b!==-1){t.offUp(a,this.close);this._attachedKeysToClose.splice(b,1)}};v._removeEvents=function(){if(this.renderer.closeButton){r.removeEventListener(this.renderer.closeButton,"click",this.close)
}this._keysToClose.forEach(this._releaseKeyToClose,this)};v._attachEvents=function(){if(this.renderer.closeButton){r.addEventListener(this.renderer.closeButton,"click",this.close)
}this._keysToClose.forEach(this._bindKeyToClose,this)};v._restoreScrollPosition=function(){window.scrollTo(this._scrollX||0,this._scrollY||0)
};v._saveScrollPosition=function(){this._scrollX=u.getScrollX();this._scrollY=u.getScrollY()
};A.exports=s},{"./Renderer":215,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-events/removeEventListener":10,"@marcom/ac-dom-metrics/getScrollX":211,"@marcom/ac-dom-metrics/getScrollY":212,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-keyboard":208,"@marcom/ac-keyboard/keyMap":210,"@marcom/ac-object/create":484,"@marcom/ac-object/defaults":485}],215:[function(s,t,o){var u={add:s("@marcom/ac-classlist/add"),remove:s("@marcom/ac-classlist/remove")};
var q={defaults:s("@marcom/ac-object/defaults")};var l={remove:s("@marcom/ac-dom-nodes/remove"),isElement:s("@marcom/ac-dom-nodes/isElement")};
var m=s("./classNames");var r={modalElement:null,contentElement:null,closeButton:null,classNames:m};
var p=function(b){b=b||{};var a=q.defaults(r.classNames,b.classNames);this.options=q.defaults(r,b);
this.options.classNames=a;this.modalElement=this.options.modalElement;this.contentElement=this.options.contentElement;
this.closeButton=this.options.closeButton};var n=p.prototype;n.render=function(){if(!l.isElement(this.modalElement)){this.modalElement=this.renderModalElement(this.options.classNames.modalElement)
}if(!l.isElement(this.contentElement)){this.contentElement=this.renderContentElement(this.options.classNames.contentElement)
}if(this.closeButton!==false){if(!l.isElement(this.closeButton)){this.closeButton=this.renderCloseButton(this.options.classNames.closeButton)
}this.modalElement.appendChild(this.closeButton)}this.modalElement.appendChild(this.contentElement);
document.body.appendChild(this.modalElement);return this.modalElement};n.renderCloseButton=function(a){a=a||this.options.classNames.closeButton;
return this._renderElement("button",a)};n.renderModalElement=function(a){a=a||this.options.classNames.modalElement;
return this._renderElement("div",a)};n.renderContentElement=function(a){a=a||this.options.classNames.contentElement;
return this._renderElement("div",a)};n.appendContent=function(b,a){if(!l.isElement(b)){return
}if(arguments[1]===undefined){this.contentElement.appendChild(b)}else{if(l.isElement(a)){a.appendChild(b)
}}};n.removeContent=function(a){if(a){if(this.modalElement.contains(a)){l.remove(a)
}}else{this._emptyContent()}};n.open=function(){var a=[document.documentElement].concat(this.options.classNames.documentElement);
var b=[this.modalElement].concat(this.options.classNames.modalOpen);u.add.apply(null,a);
u.add.apply(null,b)};n.close=function(){var a=[document.documentElement].concat(this.options.classNames.documentElement);
var b=[this.modalElement].concat(this.options.classNames.modalOpen);u.remove.apply(null,a);
u.remove.apply(null,b)};n.destroy=function(){var b=[document.documentElement].concat(this.options.classNames.documentElement);
if(this.modalElement&&document.body.contains(this.modalElement)){this.close();document.body.removeChild(this.modalElement)
}u.remove.apply(null,b);for(var a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};n._renderElement=function(d,c){var a=document.createElement(d);var b=[a];if(c){b=b.concat(c)
}u.add.apply(null,b);return a};n._emptyContent=function(){this.contentElement.innerHTML=""
};t.exports=p},{"./classNames":216,"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202,"@marcom/ac-dom-nodes/isElement":39,"@marcom/ac-dom-nodes/remove":43,"@marcom/ac-object/defaults":485}],216:[function(d,g,f){g.exports={modalElement:"modal",modalOpen:"modal-open",documentElement:"has-modal",contentElement:"modal-content",closeButton:"modal-close"}
},{}],217:[function(d,g,f){g.exports={Modal:d("./ac-modal/Modal"),createStandardModal:d("./ac-modal/factory/createStandardModal"),createFullViewportModal:d("./ac-modal/factory/createFullViewportModal")}
},{"./ac-modal/Modal":218,"./ac-modal/factory/createFullViewportModal":219,"./ac-modal/factory/createStandardModal":220}],218:[function(w,x,t){var u={create:w("@marcom/ac-object/create"),defaults:w("@marcom/ac-object/defaults")};
var v=w("@marcom/ac-modal-basic").Modal;var r=w("@marcom/ac-modal-basic").classNames;
var y={add:w("@marcom/ac-classlist/add")};var n=w("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var o=w("./focus/CircularTab");var q=w("./focus/FocusManager");function p(a){n.call(this);
this.options=a||{};this._modal=new v(a,this.options.renderer);this.opened=false;
this._render();this.closeButton=this._modal.renderer.closeButton;this.modalElement=this._modal.renderer.modalElement;
this.contentElement=this._modal.renderer.contentElement;this._circularTab=new o(this.modalElement);
this._onWillOpen=this._onWillOpen.bind(this);this._onOpen=this._onOpen.bind(this);
this._onWillClose=this._onWillClose.bind(this);this._onClose=this._onClose.bind(this);
this._bindEvents()}var s=p.prototype=u.create(n.prototype);s.open=function(){this._modal.open();
this.opened=this._modal.opened};s.close=function(){this._modal.close()};s.appendContent=function(a){this._modal.appendContent(a)
};s.removeContent=function(a){this._modal.removeContent(a)};s.destroy=function(){this._releaseEvents();
this._modal.destroy();this._removeModalFocus();this._circularTab.destroy();this._focusObj=null;
for(var a in this){if(this.hasOwnProperty(a)){this[a]=null}}};s.addKeyToClose=function(a){this._modal.addKeyToClose(a)
};s.removeKeyToClose=function(a){this._modal.removeKeyToClose(a)};s._render=function(){this._modal.render();
this._modal.renderer.modalElement.setAttribute("aria-hidden","true")};s._bindEvents=function(){this._modal.on("willopen",this._onWillOpen);
this._modal.on("open",this._onOpen);this._modal.on("willclose",this._onWillClose);
this._modal.on("close",this._onClose)};s._releaseEvents=function(){this._modal.off("willopen",this._onWillOpen);
this._modal.off("open",this._onOpen);this._modal.off("willclose",this._onWillClose);
this._modal.off("close",this._onClose)};s._onWillOpen=function(){this.trigger("willopen")
};s._onOpen=function(){this.opened=this._modal.opened;this._giveModalFocus();this.trigger("open")
};s._onWillClose=function(){this.trigger("willclose");this._removeModalFocus()};
s._onClose=function(){this.opened=this._modal.opened;this.trigger("close")};s._giveModalFocus=function(){this.modalElement.setAttribute("aria-hidden","false");
this._activeElement=document.activeElement;this.closeButton.focus();this._circularTab.start();
this._focusObj=q.disableSiblingFocus(this.modalElement,document.body)};s._removeModalFocus=function(){this._circularTab.stop();
if(this._focusObj){this._focusObj.enableSiblingFocus();this._focusObj=null}this.modalElement.setAttribute("aria-hidden","true");
if(this._activeElement){this._activeElement.focus();this._activeElement=null}};
x.exports=p},{"./focus/CircularTab":221,"./focus/FocusManager":222,"@marcom/ac-classlist/add":196,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-modal-basic":213,"@marcom/ac-object/create":484,"@marcom/ac-object/defaults":485}],219:[function(l,k,n){var o=l("../Modal");
var i=l("@marcom/ac-modal-basic").classNames;var m={retainScrollPosition:true,renderer:{classNames:{documentElement:[i.documentElement].concat("has-modal-full-viewport"),modalElement:[i.modalElement].concat("modal-full-viewport")}}};
function j(a){var b=new o(m);if(a){b.appendContent(a)}return b}k.exports=j},{"../Modal":218,"@marcom/ac-modal-basic":213}],220:[function(o,m,q){var j=o("../Modal");
var k=o("@marcom/ac-modal-basic").classNames;var l={add:o("@marcom/ac-classlist/add")};
var p={renderer:{classNames:{documentElement:[k.documentElement].concat("has-modal-standard"),modalElement:[k.modalElement].concat("modal-standard")}}};
function n(f){var g=new j(p);var b;if(f){g.appendContent(f)}var c=document.createElement("div");
var h=document.createElement("div");var a=document.createElement("div");var d=document.createElement("div");
l.add(c,"content-table");l.add(h,"content-cell");l.add(a,"content-wrapper");l.add(d,"content-padding","large-8","medium-10");
c.appendChild(h);h.appendChild(a);a.appendChild(d);g.modalElement.appendChild(c);
d.appendChild(g.contentElement);d.appendChild(g.closeButton);return g}m.exports=n
},{"../Modal":218,"@marcom/ac-classlist/add":196,"@marcom/ac-modal-basic":213}],221:[function(o,n,p){var j=o("./TabManager");
var q=o("@marcom/ac-dom-events/utils/addEventListener");var k=o("@marcom/ac-dom-events/utils/removeEventListener");
var l=function(a){this.tabbables=null;this.firstTabbableElement=null;this.lastTabbableElement=null;
this.relatedTarget=null;this.el=a;this._handleOnFocus=this._handleOnFocus.bind(this)
};var m=l.prototype;m.start=function(){this.findTabbables();q(document,"focus",this._handleOnFocus,true)
};m.stop=function(){k(document,"focus",this._handleOnFocus,true)};m.findTabbables=function(){this.tabbables=j.getTabbable(this.el);
this.firstTabbableElement=this.tabbables[0];this.lastTabbableElement=this.tabbables[this.tabbables.length-1]
};m._handleOnFocus=function(a){if(!this.el.contains(a.target)){a.preventDefault();
this.findTabbables();if(this.relatedTarget===this.lastTabbableElement||this.relatedTarget===null){this.firstTabbableElement.focus();
this.relatedTarget=this.firstTabbableElement;return}if(this.relatedTarget===this.firstTabbableElement){this.lastTabbableElement.focus();
this.relatedTarget=this.lastTabbableElement;return}}else{this.relatedTarget=a.target
}};m.destroy=function(){this.stop();this.el=null;this.tabbables=null;this.firstTabbableElement=null;
this.lastTabbableElement=null;this.relatedTarget=null};n.exports=l},{"./TabManager":223,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/removeEventListener":17}],222:[function(q,s,o){q("@marcom/ac-polyfills/Array/prototype.slice");
var l=q("@marcom/ac-classlist/add");var k=q("@marcom/ac-classlist/remove");var r=q("@marcom/ac-classlist/contains");
var p="modal";var m=function(){this._elementCacheMap={}};var n=m.prototype;n.disableSiblingFocus=function(f,b){var d=Array.prototype.slice.call(b.children);
d=d.filter(function(g){var h=g.tagName.toLowerCase();return((g!==f)&&(g.getAttribute("aria-hidden")!=="true")&&(h!=="script")&&(h!=="style")&&(h!=="link"))
}.bind(this));var a=0;var c=d.length;for(;a<c;a++){d[a].setAttribute("aria-hidden","true")
}return{enableSiblingFocus:this._enableSiblingFocus.bind(this,d)}};n._enableSiblingFocus=function(a){while(a.length){a.shift().setAttribute("aria-hidden","false")
}};s.exports=new m()},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/contains":201,"@marcom/ac-classlist/remove":202,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],223:[function(q,p,j){var o=q("@marcom/ac-dom-traversal/querySelectorAll");
var m=["input","select","textarea","button","optgroup","option","menuitem","fieldset","object"];
var l=["href","tabindex","contenteditable"];var k=function(){this.focusableSelectors=m.concat(l.map(function(a){return(a==="href")?"a["+a+"]":"*["+a+"]"
})).join(",")};var n=k.prototype;n.focusable=function(b,c){var a=b.nodeName.toLowerCase();
var d=m.indexOf(a)>-1;if(a==="a"){return true}if(d){return !b.disabled}if(!b.contentEditable){return true
}c=c||b.tabIndex;return isNaN(c)};n.tabbable=function(a){var b=a.getAttribute("tabindex");
if(!isNaN(b)){return(b>=0)}else{return this.focusable(a,b)}};n.getTabbable=function(a){var d=o(this.focusableSelectors,a);
var b=d.length;var c=[];for(var f=0;f<b;f++){if(this.tabbable(d[f])){c.push(d[f])
}}return c};n.getFocusable=function(b){var d=o(this.focusableSelectors,b);var c=d.length;
var f=[];for(var a=0;a<c;a++){if(this.focusable(d[a])){f.push(d[a])}}return f};
p.exports=new k()},{"@marcom/ac-dom-traversal/querySelectorAll":65}],224:[function(d,g,f){g.exports.EventEmitter=d("./ac-event-emitter/EventEmitter")
},{"./ac-event-emitter/EventEmitter":225}],225:[function(r,s,q){var o="EventEmitter:propagation";
var l=function(a){if(a){this.context=a}};var p=l.prototype;var n=function(){if(!this.hasOwnProperty("_events")&&typeof this._events!=="object"){this._events={}
}return this._events};var u=function(a,f){var d=a[0];var c=a[1];var g=a[2];if((typeof d!=="string"&&typeof d!=="object")||d===null||Array.isArray(d)){throw new TypeError("Expecting event name to be a string or object.")
}if((typeof d==="string")&&!c){throw new Error("Expecting a callback function to be provided.")
}if(c&&(typeof c!=="function")){if(typeof d==="object"&&typeof c==="object"){g=c
}else{throw new TypeError("Expecting callback to be a function.")}}if(typeof d==="object"){for(var b in d){f.call(this,b,d[b],g)
}}if(typeof d==="string"){d=d.split(" ");d.forEach(function(h){f.call(this,h,c,g)
},this)}};var m=function(d,c){var b;var a;var f;b=n.call(this)[d];if(!b||b.length===0){return
}b=b.slice();this._stoppedImmediatePropagation=false;for(a=0,f=b.length;a<f;a++){if(this._stoppedImmediatePropagation||c(b[a],a)){break
}}};var t=function(a,d,c){var b=-1;m.call(this,d,function(f,g){if(f.callback===c){b=g;
return true}});if(b===-1){return}a[d].splice(b,1)};p.on=function(){var a=n.call(this);
u.call(this,arguments,function(d,c,b){a[d]=a[d]||(a[d]=[]);a[d].push({callback:c,context:b})
});return this};p.once=function(){u.call(this,arguments,function(a,c,b){var d=function(f){c.call(b||this,f);
this.off(a,d)};this.on(a,d,this)});return this};p.off=function(f,c){var a=n.call(this);
if(arguments.length===0){this._events={}}else{if(!f||(typeof f!=="string"&&typeof f!=="object")||Array.isArray(f)){throw new TypeError("Expecting event name to be a string or object.")
}}if(typeof f==="object"){for(var d in f){t.call(this,a,d,f[d])}}if(typeof f==="string"){var b=f.split(" ");
if(b.length===1){if(c){t.call(this,a,f,c)}else{a[f]=[]}}else{b.forEach(function(g){a[g]=[]
})}}return this};p.trigger=function(a,c,b){if(!a){throw new Error("trigger method requires an event name")
}if(typeof a!=="string"){throw new TypeError("Expecting event names to be a string.")
}if(b&&typeof b!=="boolean"){throw new TypeError("Expecting doNotPropagate to be a boolean.")
}a=a.split(" ");a.forEach(function(d){m.call(this,d,function(f){f.callback.call(f.context||this.context||this,c)
}.bind(this));if(!b){m.call(this,o,function(f){var g=d;if(f.prefix){g=f.prefix+g
}f.emitter.trigger(g,c)})}},this);return this};p.propagateTo=function(a,c){var b=n.call(this);
if(!b[o]){this._events[o]=[]}b[o].push({emitter:a,prefix:c})};p.stopPropagatingTo=function(d){var a=n.call(this);
if(!d){a[o]=[];return}var c=a[o];var f=c.length;var b;for(b=0;b<f;b++){if(c[b].emitter===d){c.splice(b,1);
break}}};p.stopImmediatePropagation=function(){this._stoppedImmediatePropagation=true
};p.has=function(b,c,g){var h=n.call(this);var a=h[b];if(arguments.length===0){return Object.keys(h)
}if(!a){return false}if(!c){return(a.length>0)?true:false}for(var i=0,f=a.length;
i<f;i++){var d=a[i];if(g&&c&&d.context===g&&d.callback===c){return true}else{if(c&&!g&&d.callback===c){return true
}}}return false};s.exports=l},{}],226:[function(d,g,f){g.exports={DOMEmitter:d("./ac-dom-emitter/DOMEmitter")}
},{"./ac-dom-emitter/DOMEmitter":227}],227:[function(s,t,r){var q;var l=s("ac-event-emitter").EventEmitter,m=s("./DOMEmitterEvent"),p={addEventListener:s("@marcom/ac-dom-events/addEventListener"),removeEventListener:s("@marcom/ac-dom-events/removeEventListener"),dispatchEvent:s("@marcom/ac-dom-events/dispatchEvent")},u={querySelectorAll:s("@marcom/ac-dom-traversal/querySelectorAll"),matchesSelector:s("@marcom/ac-dom-traversal/matchesSelector")};
var n="dom-emitter";function o(a){if(a===null){return}this.el=a;this._bindings={};
this._delegateFuncs={};this._eventEmitter=new l()}q=o.prototype;q.on=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._on);
return this};q.once=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._once);
return this};q.off=function(){this._normalizeArgumentsAndCall(Array.prototype.slice.call(arguments,0),this._off);
return this};q.has=function(b,d,f,h){var g,c;if(typeof d==="string"){g=d;c=f}else{c=d;
h=f}if(g){var a=this._getDelegateFuncBindingIdx(b,g,c,h,true);if(a>-1){return true
}return false}if(this._eventEmitter&&this._eventEmitter.has.apply(this._eventEmitter,arguments)){return true
}return false};q.trigger=function(i,a,h,c){i=this._parseEventNames(i);i=this._cleanStringData(i);
var f,d,g,b=i.length;if(typeof a==="string"){f=this._cleanStringData(a);d=h}else{d=a;
c=h}for(g=0;g<b;g++){this._triggerDOMEvents(i[g],d,f)}return this};q.emitterTrigger=function(a,d,c){if(!this._eventEmitter){return this
}a=this._parseEventNames(a);a=this._cleanStringData(a);d=new m(d,this);var f,b=a.length;
for(f=0;f<b;f++){this._eventEmitter.trigger(a[f],d,c)}return this};q.propagateTo=function(b,a){this._eventEmitter.propagateTo(b,a);
return this};q.stopPropagatingTo=function(a){this._eventEmitter.stopPropagatingTo(a);
return this};q.stopImmediatePropagation=function(){this._eventEmitter.stopImmediatePropagation();
return this};q.destroy=function(){this._triggerInternalEvent("willdestroy");this.off();
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q._parseEventNames=function(a){if(!a){return[a]
}return a.split(" ")};q._onListenerEvent=function(c,a){var b=new m(a,this);this._eventEmitter.trigger(c,b,false)
};q._setListener=function(a){this._bindings[a]=this._onListenerEvent.bind(this,a);
p.addEventListener(this.el,a,this._bindings[a])};q._removeListener=function(a){p.removeEventListener(this.el,a,this._bindings[a]);
this._bindings[a]=null};q._triggerInternalEvent=function(b,a){this.emitterTrigger(n+":"+b,a)
};q._normalizeArgumentsAndCall=function(b,h){var c={};if(b.length===0){h.call(this,c);
return}if(typeof b[0]==="string"||b[0]===null){b=this._cleanStringData(b);c.events=b[0];
if(typeof b[1]==="string"){c.delegateQuery=b[1];c.callback=b[2];c.context=b[3]}else{c.callback=b[1];
c.context=b[2]}h.call(this,c);return}var a,f,d=":",g=b[0];for(a in g){if(g.hasOwnProperty(a)){c={};
f=this._cleanStringData(a.split(d));c.events=f[0];c.delegateQuery=f[1];c.callback=g[a];
c.context=b[1];h.call(this,c)}}};q._registerDelegateFunc=function(g,d,c,b,f){var a=this._delegateFunc.bind(this,g,d,c,f);
this._delegateFuncs[d]=this._delegateFuncs[d]||{};this._delegateFuncs[d][g]=this._delegateFuncs[d][g]||[];
this._delegateFuncs[d][g].push({func:b,context:f,delegateFunc:a});return a};q._cleanStringData=function(h){var i=false;
if(typeof h==="string"){h=[h];i=true}var a=[],f,c,d,g,b=h.length;for(f=0;f<b;f++){c=h[f];
if(typeof c==="string"){if(c===""||c===" "){continue}d=c.length;while(c[0]===" "){c=c.slice(1,d);
d--}while(c[d-1]===" "){c=c.slice(0,d-1);d--}}a.push(c)}if(i){return a[0]}return a
};q._unregisterDelegateFunc=function(g,c,b,d){if(!this._delegateFuncs[c]||!this._delegateFuncs[c][g]){return
}var f=this._getDelegateFuncBindingIdx(g,c,b,d),a;if(f>-1){a=this._delegateFuncs[c][g][f].delegateFunc;
this._delegateFuncs[c][g].splice(f,1);if(this._delegateFuncs[c][g].length===0){this._delegateFuncs[c][g]=null
}}return a};q._unregisterDelegateFuncs=function(b,c){if(!this._delegateFuncs[c]){return
}if(b!==null&&!this._delegateFuncs[c][b]){return}if(b===null){var a;for(a in this._delegateFuncs[c]){if(this._delegateFuncs[c].hasOwnProperty(a)){this._unbindDelegateFunc(a,c)
}}return}this._unbindDelegateFunc(b,c)};q._unbindDelegateFunc=function(b,f){var d,c,a=0;
while(this._delegateFuncs[f][b]&&this._delegateFuncs[f][b][a]){d=this._delegateFuncs[f][b][a];
c=this._delegateFuncs[f][b][a].length;this._off({events:b,delegateQuery:f,callback:d.func,context:d.context});
if(this._delegateFuncs[f][b]&&c===this._delegateFuncs[f][b].length){a++}}d=c=null
};q._unregisterDelegateFuncsByEvent=function(b){var a;for(a in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(a)){this._unregisterDelegateFuncs(b,a)
}}};q._delegateFunc=function(b,f,c,h,d){if(this._targetHasDelegateAncestor(d.target,f)){var a=Array.prototype.slice.call(arguments,0),g=a.slice(4,a.length);
h=h||window;if(typeof d.detail==="object"){g[0]=d.detail}c.apply(h,g)}};q._targetHasDelegateAncestor=function(c,a){var b=c;
while(b&&b!==this.el&&b!==document.documentElement){if(u.matchesSelector(b,a)){return true
}b=b.parentNode}return false};q._on=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
a=this._parseEventNames(a);a.forEach(function(h,w,j,i,k){if(!this.has(k)){this._setListener(k)
}if(typeof i==="string"){h=this._registerDelegateFunc(k,i,h,w,j)}this._triggerInternalEvent("willon",{evt:k,callback:h,context:j,delegateQuery:i});
this._eventEmitter.on(k,h,j);this._triggerInternalEvent("didon",{evt:k,callback:h,context:j,delegateQuery:i})
}.bind(this,c,b,g,f));a=c=b=f=g=null};q._off=function(d){var a=d.events,c=d.callback,f=d.delegateQuery,g=d.context,b=d.unboundCallback||c;
if(typeof a==="undefined"){this._eventEmitter.off();var h;for(h in this._bindings){if(this._bindings.hasOwnProperty(h)){this._removeListener(h)
}}for(h in this._delegateFuncs){if(this._delegateFuncs.hasOwnProperty(h)){this._delegateFuncs[h]=null
}}return}a=this._parseEventNames(a);a.forEach(function(i,y,k,j,x){if(typeof j==="string"&&typeof y==="function"){i=this._unregisterDelegateFunc(x,j,y,k);
if(!i){return}}if(typeof j==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncs(x,j);
return}if(typeof x==="string"&&typeof i==="undefined"){this._unregisterDelegateFuncsByEvent(x);
if(typeof j==="string"){return}}this._triggerInternalEvent("willoff",{evt:x,callback:i,context:k,delegateQuery:j});
this._eventEmitter.off(x,i,k);this._triggerInternalEvent("didoff",{evt:x,callback:i,context:k,delegateQuery:j});
if(!this.has(x)){this._removeListener(x)}}.bind(this,c,b,g,f));a=c=b=f=g=null};
q._once=function(d){var b=d.events,c=d.callback,f=d.delegateQuery,a=d.context;b=this._parseEventNames(b);
b.forEach(function(g,i,h,j){if(typeof h==="string"){return this._handleDelegateOnce(j,g,i,h)
}if(!this.has(j)){this._setListener(j)}this._triggerInternalEvent("willonce",{evt:j,callback:g,context:i,delegateQuery:h});
this._eventEmitter.once.call(this,j,g,i);this._triggerInternalEvent("didonce",{evt:j,callback:g,context:i,delegateQuery:h})
}.bind(this,c,a,f));b=c=f=a=null};q._handleDelegateOnce=function(b,c,a,d){this._triggerInternalEvent("willonce",{evt:b,callback:c,context:a,delegateQuery:d});
this._on({events:b,context:a,delegateQuery:d,callback:this._getDelegateOnceCallback.bind(this,b,c,a,d),unboundCallback:c});
this._triggerInternalEvent("didonce",{evt:b,callback:c,context:a,delegateQuery:d});
return this};q._getDelegateOnceCallback=function(b,c,g,d){var a=Array.prototype.slice.call(arguments,0),f=a.slice(4,a.length);
c.apply(g,f);this._off({events:b,delegateQuery:d,callback:c,context:g})};q._getDelegateFuncBindingIdx=function(j,c,f,h,i){var a=-1;
if(this._delegateFuncs[c]&&this._delegateFuncs[c][j]){var d,g,b=this._delegateFuncs[c][j].length;
for(d=0;d<b;d++){g=this._delegateFuncs[c][j][d];if(i&&typeof f==="undefined"){f=g.func
}if(g.func===f&&g.context===h){a=d;break}}}return a};q._triggerDOMEvents=function(h,d,f){var a=[this.el];
if(f){a=u.querySelectorAll(f,this.el)}var g,c,b=a.length;for(g=0;g<b;g++){p.dispatchEvent(a[g],h,{bubbles:true,cancelable:true,detail:d})
}};t.exports=o},{"./DOMEmitterEvent":228,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-events/dispatchEvent":2,"@marcom/ac-dom-events/removeEventListener":10,"@marcom/ac-dom-traversal/matchesSelector":63,"@marcom/ac-dom-traversal/querySelectorAll":65,"ac-event-emitter":224}],228:[function(h,m,i){var k={preventDefault:h("@marcom/ac-dom-events/preventDefault"),stopPropagation:h("@marcom/ac-dom-events/stopPropagation"),target:h("@marcom/ac-dom-events/target")};
var l;var j=function(a,b){this._domEmitter=b;this.originalEvent=a||{};this._originalTarget=k.target(this.originalEvent);
this.target=this._originalTarget||this._domEmitter.el;this.currentTarget=this._domEmitter.el;
this.timeStamp=this.originalEvent.timeStamp||Date.now();if(this._isDOMEvent(this.originalEvent)){if(typeof this.originalEvent.detail==="object"){this.data=this.originalEvent.detail
}}else{if(a){this.data=this.originalEvent;this.originalEvent={}}}};l=j.prototype;
l.preventDefault=function(){k.preventDefault(this.originalEvent)};l.stopPropagation=function(){k.stopPropagation(this.originalEvent)
};l.stopImmediatePropagation=function(){if(this.originalEvent.stopImmediatePropagation){this.originalEvent.stopImmediatePropagation()
}this._domEmitter.stopImmediatePropagation()};l._isDOMEvent=function(a){if(this._originalTarget||(document.createEvent!=="undefined"&&typeof CustomEvent!=="undefined"&&a instanceof CustomEvent)){return true
}return false};m.exports=j},{"@marcom/ac-dom-events/preventDefault":9,"@marcom/ac-dom-events/stopPropagation":13,"@marcom/ac-dom-events/target":14}],229:[function(d,g,f){arguments[4][224][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":230,dup:224}],230:[function(d,g,f){arguments[4][225][0].apply(f,arguments)
},{dup:225}],231:[function(d,g,f){g.exports={Routes:d("./ac-routes/Routes"),Route:d("./ac-routes/Route")}
},{"./ac-routes/Route":232,"./ac-routes/Routes":233}],232:[function(g,k,h){function i(c,a,d,b,f){this.path=c;
this.callback=a;this.context=d;this.greedy=b||false;this.priority=f||0;if(typeof this.priority!=="number"){throw new Error("Priority must be a Number.")
}this.identifierPattern="([a-zA-Z0-9\\-\\_]+)";this.tokensRe=new RegExp(":"+this.identifierPattern,"g");
this.matcher=this._createRouteMatcher(c)}var j=i.prototype;j._createRouteMatcher=function(c){if(c&&c.exec){return{pattern:c}
}else{if(c==="/"){return{pattern:/^\/$/}}else{if(typeof c!=="string"){throw new Error("path must be either a string or regex")
}}}var d=this._extractRouteTokens(c);var a=c.replace(this.tokensRe,this.identifierPattern);
var b=new RegExp(a,"g");return{pattern:b,routeTokens:d}};j._extractRouteTokens=function(a){var d=a.replace(this.tokensRe,":"+this.identifierPattern);
var b=new RegExp(d,"g");var c=b.exec(a);if(c&&c.length>1){c=c.slice(1)}else{c=null
}return c};j.match=function(c){this.matcher.pattern.lastIndex=0;var d=this.matcher.pattern.exec(c);
if(d){var b=(d.length)?d.slice(1):[];var a=this.callback;if(a&&typeof a==="function"){a.apply(this.context||this,b);
return true}}return false};k.exports=i},{}],233:[function(m,l,h){var j=m("./Route");
function i(a){this._routes={};if(a){this.addRoutes(a)}}var k=i.prototype;k._getIndex=function(b,a,c){if(this._routes[b]!==undefined){var d=this._routes[b].length;
while(--d>-1){if(this._routes[b][d].callback===a&&this._routes[b][d].context===c){return d
}}}return -1};k.match=function(a){var b,c;for(b in this._routes){c=this._routes[b].length;
while(--c>-1){if(this._routes[b][c].match(a)&&this._routes[b][c].greedy){break}}}};
k.add=function(b){if(this._routes[b.path]===undefined){this._routes[b.path]=[b]
}else{if(!this.get(b.path,b.callback,b.context)){var a,c=this._routes[b.path].length;
if(c>0){for(a=0;a<c;++a){if(this._routes[b.path][a].priority>b.priority){this._routes[b.path].splice(a,0,b);
return b}}}this._routes[b.path].push(b)}}return b};k.remove=function(b){var a=this._getIndex(b.path,b.callback,b.context);
if(a>-1){this._routes[b.path].splice(a,1);return b}return false};k.get=function(b,a,c){var d=this._getIndex(b,a,c);
if(d>-1){return this._routes[b][d]}return false};k.createRoute=function(c,a,d,b,f){var g=new j(c,a,d,b,f);
this.add(g);return g};k.addRoutes=function(c){if(c instanceof Array){var a,b,d=c.length;
for(a=0;a<d;++a){b=c[a];if(b&&typeof b==="object"){this.add(b)}}}else{throw new Error("routes must be an Array.")
}};k.removeRoutes=function(c){if(c instanceof Array){var a,b,d=c.length;for(a=0;
a<d;++a){b=c[a];if(b&&typeof b==="object"){this.remove(b)}}}else{throw new Error("routes must be an Array.")
}};k.getRoutes=function(a){if(this._routes[a]===undefined){return[]}return this._routes[a]
};l.exports=i},{"./Route":232}],234:[function(d,g,f){g.exports={Router:d("./ac-router/Router"),History:d("./ac-router/History"),Routes:d("@marcom/ac-routes").Routes,Route:d("@marcom/ac-routes").Route}
},{"./ac-router/History":235,"./ac-router/Router":236,"@marcom/ac-routes":231}],235:[function(q,o,j){var p=q("@marcom/ac-object").create;
var k=q("@marcom/ac-dom-events");var l=q("@marcom/ac-event-emitter").EventEmitter;
function m(a){a=a||{};this.history=window.history;this.rootStripper=/^\/+|\/+$/g;
this.root=a.root||"/";this.root=("/"+this.root+"/").replace(this.rootStripper,"/");
var b=typeof a.resolveInitialHash!=="boolean"?true:a.resolveInitialHash;this._pushState=typeof a.pushState!=="boolean"?true:a.pushState;
this._hashChange=a.hashChange||false;this._setUpdateVars(b);if(a.autoStart){this.start()
}}var n=m.prototype=p(l.prototype);n._isRoot=function(a){return("/"+a+"/").replace(this.rootStripper,"/")===this.root
};n._isPushStateSupported=function(){return(this.history&&this.history.pushState)
};n._isHashChangeSupported=function(){return("onhashchange" in window)};n._setUpdateVars=function(a){if(this._pushState&&this._isPushStateSupported()){if(a&&this._hashChange&&window.location.href.indexOf("#")!==-1){this.history.pushState({},document.title,window.location.href.replace("#",""))
}this._hashChange=false}else{if(a&&this._pushState&&this._hashChange&&window.location.href.indexOf("#")<0){if(!window.location.origin){window.location.origin=window.location.protocol+"//"+window.location.hostname;
window.location.origin+=(window.location.port?":"+window.location.port:"")}var b=window.location.href.substr(window.location.origin.length+this.root.length);
if(b.length){window.location=window.location.origin+this.root+"#"+b;return}}if(this._hashChange&&!this._isHashChangeSupported()){this._interval=50;
this._iframe=document.createElement('<iframe src="javascript:0" tabindex="-1" style="display:none;">');
this._iframe=document.body.appendChild(this._iframe).contentWindow;this._iframe.document.open().close()
}this._pushState=false}};n._checkUrl=function(){var a=this._iframe.location.hash.substr(1);
if(a.length===0){a="/"}if(this.fragment()!==a){window.location.hash="#"+a;this._ignoreHashChange=false;
this._handleHashChange()}};n._handlePopState=function(a){this.trigger("popstate",{fragment:this.fragment()})
};n._handleHashChange=function(a){if(this._ignoreHashChange){this._ignoreHashChange=false;
return}this.trigger("popstate",{fragment:this.fragment()})};n.canUpdate=function(){return this._pushState||this._hashChange
};n.start=function(){if(!this.started&&(this._pushState||this._hashChange)){this.started=true;
if(this._pushState){this._handlePopState=this._handlePopState.bind(this);k.addEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){this._handleHashChange=this._handleHashChange.bind(this);
k.addEventListener(window,"hashchange",this._handleHashChange)}else{this._iframe.location.hash=this.fragment();
this._checkUrl=this._checkUrl.bind(this);this._checkUrlInterval=setInterval(this._checkUrl,this._interval)
}}}}return this.started||false};n.stop=function(){if(this.started){this.started=false;
if(this._pushState){k.removeEventListener(window,"popstate",this._handlePopState)
}else{if(this._hashChange){if(this._isHashChangeSupported()){k.removeEventListener(window,"hashchange",this._handleHashChange)
}else{if(this._checkUrlInterval){clearInterval(this._checkUrlInterval);this._checkUrlInterval=null
}}}}}};n.navigate=function(a,b){if(!this.started||!this.canUpdate()){return false
}b=b||{};var c=((this._isRoot(a)?"":this.root)+a).replace(/([^:])(\/\/)/g,"$1/");
if(this._pushState){this.history.pushState(b,document.title,c)}else{if(this._hashChange){this._ignoreHashChange=true;
window.location.hash="#"+a;if(!this._isHashChangeSupported()){this._iframe.document.open().close();
this._iframe.location.hash="#"+a}}}return true};n.fragment=function(){var a="";
if(this._pushState){a=(window.location.pathname).substr(this.root.length)}else{if(this._hashChange){a=window.location.hash.substr(1)
}}return a===""?"/":a};o.exports=m},{"@marcom/ac-dom-events":3,"@marcom/ac-event-emitter":229,"@marcom/ac-object":482}],236:[function(r,s,p){var n=r("@marcom/ac-object").create;
var l=r("@marcom/ac-dom-emitter").DOMEmitter;var q=r("./History");var m=r("@marcom/ac-routes").Route;
var u=r("@marcom/ac-routes").Routes;function t(a){a=a||{};this._intercept=a.intercept||"[data-route]";
this._interceptAttribute=a.attribute||"href";this._handleTrigger=this._handleTrigger.bind(this);
this.intercept(this._intercept);this.history=a.history||new q({root:a.root,autoStart:a.autoStart,pushState:a.pushState,hashChange:a.hashChange,resolveInitialHash:a.resolveInitialHash});
u.call(this,a.routes);if(a.autoStart){if(!this.history.started){this.history.start()
}this.start()}}var o=t.prototype=n(u.prototype);o._handleTrigger=function(a){if(!this.started){return
}var b=a.target.getAttribute(this._interceptAttribute);if(b){if(/^(http|https):\/\/+/.exec(b)&&this._interceptAttribute==="href"){b=b.substr(b.indexOf(this.history.root)+this.history.root.length)||"/"
}if(this.navigate(b)){a.preventDefault()}}};o._handlePopstate=function(a){this.navigate(a.fragment,true)
};o.start=function(){if(!this.started){this.started=true;this.history.start();this._handlePopstate=this._handlePopstate.bind(this);
this.history.on("popstate",this._handlePopstate);this.navigate(this.history.fragment(),true)
}};o.stop=function(){if(this.started){this.started=false;this.history.stop();this.history.off("popstate",this._handlePopstate)
}};o.navigate=function(a,b){if(this.history.fragment()===a&&!b){return this.history.canUpdate()
}if(a&&!b){if(!this.history.navigate(a)){return false}}this.match(a);return true
};o.intercept=function(a,c){var b=new l(c||document.body);b.on("click",a,this._handleTrigger)
};s.exports=t},{"./History":235,"@marcom/ac-dom-emitter":226,"@marcom/ac-object":482,"@marcom/ac-routes":231}],237:[function(i,m,j){var l=i("./request/factory");
var n={complete:function(a,b){},error:function(a,b){},method:"GET",headers:{},success:function(b,c,a){},timeout:5000};
var k=function(){for(var a=1;a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]};var o={ajax:function(c,b){b=k({},n,b);if(c.substr(0,2)==="//"){c=window.location.protocol+c
}var a=l(c);a.open(b.method,c);a.setTransportHeaders(b.headers);a.setReadyStateChangeHandlers(b.complete,b.error,b.success);
a.setTimeout(b.timeout,b.error,b.complete);a.send(b.data);return a},get:function(b,a){a.method="GET";
return o.ajax(b,a)},head:function(b,a){a.method="HEAD";return o.ajax(b,a)},post:function(b,a){a.method="POST";
return o.ajax(b,a)}};m.exports=o},{"./request/factory":238}],238:[function(q,r,o){var k=q("./xmlhttprequest");
var l=q("./xdomainrequest");var m=/.*(?=:\/\/)/;var s=/^.*:\/\/|\/.+$/g;var p=window.XDomainRequest&&document.documentMode<10;
var n=function(a){if(!a.match(m)){return false}var b=a.replace(s,"");return b!==window.location.hostname
};r.exports=function(c,b){var a=p&&n(c)?l:k;return new a()}},{"./xdomainrequest":240,"./xmlhttprequest":241}],239:[function(f,h,g){var i=function(){};
i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()};
i.prototype.open=function(a,b){a=a.toUpperCase();this.xhr.open(a,b)};i.prototype.send=function(a){this.xhr.send(a)
};i.prototype.setTimeout=function(a,b,c){this.xhr.ontimeout=function(){b(this.xhr,this.status);
c(this.xhr,this.status)}.bind(this)};i.prototype.setTransportHeaders=function(b){for(var a in b){this.xhr.setRequestHeader(a,b[a])
}};h.exports=i},{}],240:[function(h,k,i){var l=h("./request");var m=h("@marcom/ac-object/toQueryParameters");
var j=function(){this.xhr=new XDomainRequest()};j.prototype=l.create();j.prototype.setReadyStateChangeHandlers=function(c,b,a){this.xhr.onerror=function(){b(this.xhr,this.status);
c(this.xhr,this.status)}.bind(this);this.xhr.onload=function(){a(this.xhr.responseText,this.xhr.status,this.xhr);
c(this.xhr,this.status)}.bind(this)};j.prototype.send=function(a){if(a&&typeof a==="object"){a=m(a)
}this.xhr.send(a)};j.prototype.setTransportHeaders=function(a){};k.exports=j},{"./request":239,"@marcom/ac-object/toQueryParameters":491}],241:[function(g,j,h){var k=g("./request");
var i=function(){this.xhr=new XMLHttpRequest()};i.prototype=k.create();i.prototype.setReadyStateChangeHandlers=function(c,b,a){this.xhr.onreadystatechange=function(d){if(this.xhr.readyState===4){clearTimeout(this.timeout);
if(this.xhr.status>=200&&this.xhr.status<300){a(this.xhr.responseText,this.xhr.status,this.xhr);
c(this.xhr,this.status)}else{b(this.xhr,this.status);c(this.xhr,this.status)}}}.bind(this)
};j.exports=i},{"./request":239}],242:[function(d,g,f){g.exports=d("./ac-fullscreen/fullscreen")
},{"./ac-fullscreen/fullscreen":248}],243:[function(d,g,f){g.exports={STANDARD:"standard",IOS:"ios"}
},{}],244:[function(u,w,r){var s=u("@marcom/ac-dom-events/addEventListener");var o=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var y=u("./../events/types");var x=u("./../consts/modes");var v=new o();function p(a){v.trigger(y.ENTERFULLSCREEN,a)
}function n(a){v.trigger(y.EXITFULLSCREEN,a)}function t(a){if(v.fullscreenElement()){p(a)
}else{n(a)}}function q(){s(document,"fullscreenchange",t)}q();v.fullscreenEnabled=function(b){var a=document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled||("webkitCancelFullScreen" in document);
return !!(a)};v.fullscreenElement=function(){return document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||document.webkitCurrentFullScreenElement
};v.exitFullscreen=function(b){var a;if(typeof document.exitFullscreen==="function"){a="exitFullscreen"
}else{if(typeof document.webkitExitFullscreen==="function"){a="webkitExitFullscreen"
}else{if(typeof document.webkitCancelFullScreen==="function"){a="webkitCancelFullScreen"
}else{if(typeof document.mozCancelFullScreen==="function"){a="mozCancelFullScreen"
}else{if(typeof document.msExitFullscreen==="function"){a="msExitFullscreen"}}}}}if(typeof document[a]==="function"){document[a].call(document)
}};v.requestFullscreen=function(b){var a;if(typeof b.requestFullscreen==="function"){a="requestFullscreen"
}else{if(typeof b.webkitRequestFullscreen==="function"){a="webkitRequestFullscreen"
}else{if(typeof b.webkitRequestFullScreen==="function"){a="webkitRequestFullScreen"
}else{if(typeof b.mozRequestFullScreen==="function"){a="mozRequestFullScreen"}else{if(typeof b.msRequestFullscreen==="function"){a="msRequestFullscreen"
}}}}}if(typeof b[a]==="function"){b[a].call(b)}};v.mode=x.STANDARD;w.exports=v},{"./../consts/modes":243,"./../events/types":247,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-event-emitter-micro":205}],245:[function(k,j,h){var g=k("./ios");
var i=k("./desktop");j.exports={create:function(){var a=i;if("webkitEnterFullscreen" in document.createElement("video")&&!("webkitRequestFullScreen" in document.createElement("div"))){a=g
}return a}}},{"./desktop":244,"./ios":246}],246:[function(u,v,s){var t=u("@marcom/ac-dom-events/addEventListener");
var n=u("@marcom/ac-event-emitter-micro").EventEmitterMicro;var y=u("./../events/types");
var w=u("./../consts/modes");var o;x();function x(){t(document,"webkitbeginfullscreen",p,true);
t(document,"webkitendfullscreen",q,true)}function p(a){r.trigger(y.ENTERFULLSCREEN,a)
}function q(a){o=undefined;r.trigger(y.EXITFULLSCREEN,a)}var r=new n();r.fullscreenEnabled=function(a){return !!(a.webkitSupportsFullscreen)
};r.fullscreenElement=function(){return o};r.exitFullscreen=function(a){if(a&&typeof a.webkitExitFullscreen==="function"){a.webkitExitFullscreen()
}};r.requestFullscreen=function(a){if(typeof a.webkitEnterFullscreen==="function"){a.webkitEnterFullscreen()
}};r.mode=w.IOS;v.exports=r},{"./../consts/modes":243,"./../events/types":247,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-event-emitter-micro":205}],247:[function(d,g,f){g.exports={ENTERFULLSCREEN:"enterfullscreen",EXITFULLSCREEN:"exitfullscreen"}
},{}],248:[function(q,r,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var m=q("./delegate/factory");var s="Error: Element missing. ac-fullscreen requires an element to be specified";
var o=m.create();function k(){throw new Error(s)}var n={};n.requestFullscreen=function(a){if(!a){k()
}return o.requestFullscreen(a)};n.fullscreenEnabled=function(a){if(!a){k()}return o.fullscreenEnabled(a)
};n.fullscreenElement=function(){return o.fullscreenElement()};n.exitFullscreen=function(a){if(!a){k()
}return o.exitFullscreen(a)};n.getMode=function(){return o.mode};n.on=function(){return o.on.apply(o,arguments)
};n.off=function(){return o.off.apply(o,arguments)};n.once=function(){return o.once.apply(o,arguments)
};r.exports=n},{"./delegate/factory":245,"@marcom/ac-event-emitter-micro":205}],249:[function(f,i,g){i.exports=function h(c,a){var b=null;
return function(){if(b===null){c.apply(this,arguments);b=setTimeout(function(){b=null
},a)}}}},{}],250:[function(j,i,k){var g=j("./utils/getBoundingClientRect");i.exports=function h(c,a){var b=1;
if(a){b=g(c).width/c.offsetWidth}return{width:c.scrollWidth*b,height:c.scrollHeight*b}
}},{"./utils/getBoundingClientRect":261}],251:[function(d,g,f){arguments[4][96][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":261,dup:96}],252:[function(n,m,o){var q=n("./getDimensions");
var p=n("./utils/getBoundingClientRect");var j=n("./getScrollX");var k=n("./getScrollY");
m.exports=function l(d,f){var b;var g;var a;var c;var h;if(f){b=p(d);g=j();a=k();
return{top:b.top+a,right:b.right+g,bottom:b.bottom+a,left:b.left+g}}c=q(d,f);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height};
while(d=d.offsetParent){b.top+=d.offsetTop;b.left+=d.offsetLeft}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}
}},{"./getDimensions":251,"./getScrollX":256,"./getScrollY":257,"./utils/getBoundingClientRect":261}],253:[function(m,k,h){var i=m("./getDimensions");
var j=m("./getPixelsInViewport");k.exports=function l(b,a){var c=j(b,a);var d=i(b,a).height;
return(c/d)}},{"./getDimensions":251,"./getPixelsInViewport":254}],254:[function(k,j,g){var h=k("./getViewportPosition");
j.exports=function i(d,a){var b=document.documentElement.clientHeight;var f=h(d,a);
var c;if(f.top>=b||f.bottom<=0){return 0}c=(f.bottom-f.top);if(f.top<0){c+=f.top
}if(f.bottom>b){c-=f.bottom-b}return c}},{"./getViewportPosition":258}],255:[function(l,k,m){var i=l("./getDimensions");
var h=l("./utils/getBoundingClientRect");k.exports=function j(d,a){var b;var f;
var c;if(a){b=h(d);if(d.offsetParent){f=h(d.offsetParent);b.top-=f.top;b.left-=f.left
}}else{c=i(d,a);b={top:d.offsetTop,left:d.offsetLeft,width:c.width,height:c.height}
}return{top:b.top,right:b.left+b.width,bottom:b.top+b.height,left:b.left}}},{"./getDimensions":251,"./utils/getBoundingClientRect":261}],256:[function(d,g,f){arguments[4][211][0].apply(f,arguments)
},{dup:211}],257:[function(d,g,f){arguments[4][212][0].apply(f,arguments)},{dup:212}],258:[function(n,m,o){var l=n("./getPagePosition");
var p=n("./utils/getBoundingClientRect");var q=n("./getScrollX");var j=n("./getScrollY");
m.exports=function k(c,f){var d;var a;var b;if(f){d=p(c);return{top:d.top,right:d.right,bottom:d.bottom,left:d.left}
}d=l(c);a=q();b=j();return{top:d.top-b,right:d.right-a,bottom:d.bottom-b,left:d.left-a}
}},{"./getPagePosition":252,"./getScrollX":256,"./getScrollY":257,"./utils/getBoundingClientRect":261}],259:[function(d,g,f){g.exports={getContentDimensions:d("./getContentDimensions"),getDimensions:d("./getDimensions"),getPagePosition:d("./getPagePosition"),getPercentInViewport:d("./getPercentInViewport"),getPixelsInViewport:d("./getPixelsInViewport"),getPosition:d("./getPosition"),getScrollX:d("./getScrollX"),getScrollY:d("./getScrollY"),getViewportPosition:d("./getViewportPosition"),isInViewport:d("./isInViewport")}
},{"./getContentDimensions":250,"./getDimensions":251,"./getPagePosition":252,"./getPercentInViewport":253,"./getPixelsInViewport":254,"./getPosition":255,"./getScrollX":256,"./getScrollY":257,"./getViewportPosition":258,"./isInViewport":260}],260:[function(h,l,i){var j=h("./getPixelsInViewport");
var m=h("./getPercentInViewport");l.exports=function k(b,a,d){var c;d=d||0;if(typeof d==="string"&&d.slice(-2)==="px"){d=parseInt(d,10);
c=j(b,a)}else{c=m(b,a)}return(c>0&&c>=d)}},{"./getPercentInViewport":253,"./getPixelsInViewport":254}],261:[function(d,g,f){arguments[4][97][0].apply(f,arguments)
},{dup:97}],262:[function(d,g,f){arguments[4][207][0].apply(f,arguments)},{"./internal/KeyEvent":263,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/removeEventListener":17,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-object/create":484,dup:207}],263:[function(d,g,f){arguments[4][209][0].apply(f,arguments)
},{dup:209}],264:[function(C,K,t){var G=C("@marcom/ac-dom-traversal/querySelector");
var D={addEventListener:C("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:C("@marcom/ac-dom-events/utils/removeEventListener"),dispatchEvent:C("@marcom/ac-dom-events/utils/dispatchEvent"),preventDefault:C("@marcom/ac-dom-events/preventDefault"),stopPropagation:C("@marcom/ac-dom-events/stopPropagation")};
var u=C("@marcom/ac-event-emitter-micro");var w=C("@marcom/ac-dom-metrics");var H=C("@marcom/ac-keyboard/Keyboard");
var B={num:37,string:"ArrowLeft"};var J={num:38,string:"ArrowUp"};var F={num:39,string:"ArrowRight"};
var x={num:40,string:"ArrowDown"};var v=[B,F,x,F];var z=function(c){if(c.which){return c.which
}var b=(c.key)?c.key:c.code;var a=0;var d=v.length;for(;a<d;a++){if(v[a].string===b){return v[a].num
}}return -1};var I={min:0,max:1,step:1,value:0,orientation:"horizontal",template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb"></div>\n</div>',keyboardMaxStepPercentage:0.05,keyboardStepMultiplier:1.25};
var E=Object.keys(I);var y=function(b,c){this.options=Object.assign({},I,c);this.model=Object.create(this.options);
this.el=b;var a=this.options.keyboardContext||this.el;this._keyboard=new H(a);this._keyDown={};
b.className+=" ac-slider-container";b.innerHTML=this.model.template;u.EventEmitterMicro.call(this);
this.initialize()};y.prototype=Object.create(u.EventEmitterMicro.prototype);var A=y.prototype;
A.addEventListeners=function(){this.addEventListener(this.el,"mousedown",this.onMouseDown);
this.addEventListener(this.el,"touchstart",this.onTouchStart);this.addEventListener(this.el,"mouseover",this.onMouseOver);
this.addEventListener(this.el,"mouseleave",this.onMouseLeave);this.addEventListener(this.el,"touchend",this.onTouchEnd);
this.addEventListener(document,"touchend",this.onMouseUp);if(this.model.orientation==="horizontal"){this._keyboard.onDown(F.num,this.stepUp);
this._keyboard.onDown(B.num,this.stepDown)}else{this._keyboard.onDown(x.num,this.stepDown);
this._keyboard.onDown(J.num,this.stepUp)}};A.addEventListener=D.addEventListener;
A.bindMethods=function(){this.stepDown=this.stepDown.bind(this);this.stepUp=this.stepUp.bind(this);
this._triggerRelease=this._triggerRelease.bind(this);this._preventDefault=this._preventDefault.bind(this);
this.onMouseDown=this.bindMethod(this.onMouseDown,this);this.onTouchStart=this.bindMethod(this.onTouchStart,this);
this.onMouseOver=this.bindMethod(this.onMouseOver,this);this.onMouseLeave=this.bindMethod(this.onMouseLeave,this);
this.onTouchEnd=this.bindMethod(this.onTouchEnd,this);this.onMouseUp=this.bindMethod(this.onMouseUp,this);
this.onMouseMove=this.bindMethod(this.onMouseMove,this);this.onTouchMove=this.bindMethod(this.onTouchMove,this)
};A.bindMethod=function(a,b){return a.bind(b)};A.correctValueMinMax=function(a,b,c){if(a>c){a=c
}if(a<b){a=b}return a};A.calculateStepsToValue=function(a,b){return Math.abs(a-b)
};A.calculateMaxSteps=function(a,b){return Math.abs(b-a)};A.calculateStepsEqualToPercentage=function(a,b){return(a/100)*b
};A.calculateNextStepInRange=function(g,d,f,h){var b=this.calculateMaxSteps(d,f);
var a=this.calculateStepsToValue(g,d);var c=d+(Math.floor(b/h)*h);g=Math.min(c,d+Math.round(a/h)*h);
return g};A.dispatchEvent=D.dispatchEvent;A.disableUserControls=function(){this.removeEventListeners()
};A.enableUserControls=function(){this.addEventListeners()};A.getNextValue=function(a,c,d,b){a=this.correctValueMinMax(a,c,d);
if(b!=="auto"){a=this.calculateNextStepInRange(a,c,d,b)}return a};A.getOrientation=function(){return this.model.orientation
};A.getValue=function(){return this.model.value};A.getMin=function(){return this.model.min
};A.getMax=function(){return this.model.max};A.getStep=function(){return this.model.step
};A.getClientXValue=function(c){var j=this.getClientXFromEvent(c);var b=w.getDimensions(this.thumbElement);
var a=w.getDimensions(this.runnableTrackElement);var h=j-this.runnableTrackElement.getBoundingClientRect().left-(b.width/2);
var d=a.width-b.width;var i=h/(d)*100;var g=this.calculateMaxSteps(this.getMin(),this.getMax());
var f=this.calculateStepsEqualToPercentage(i,g);return this.getMin()+f};A.getClientYValue=function(d){var k=this.getClientYFromEvent(d);
var b=w.getDimensions(this.thumbElement);var a=w.getDimensions(this.runnableTrackElement);
var j=w.getViewportPosition(this.runnableTrackElement);var f=a.height-b.height;
var c=f-(k-j.top-(b.height/2));var i=c/(a.height-b.height)*100;var h=this.calculateMaxSteps(this.model.min,this.model.max);
var g=this.calculateStepsEqualToPercentage(i,h);return this.model.min+g};A.getClientValue=function(a){a=a.originalEvent||a;
var b;if(this.model.orientation==="horizontal"){b=this.getClientXValue(a)}else{b=this.getClientYValue(a)
}return b};A.getClientXFromEvent=function(a){return a.touches?a.touches[0].clientX:a.clientX
};A.getClientYFromEvent=function(a){return a.touches?a.touches[0].clientY:a.clientY
};A.initialize=function(){this.setNodeReferences();this.setValue(this.model.value);
this.bindMethods();this.addEventListeners()};A.onMouseLeave=function(){this.preventDocumentMouseUpDispatch=false
};A.onMouseDown=function(a){var b=this.getClientValue(a);this.addEventListener(document,"mouseup",this.onMouseUp);
this.addEventListener(document,"mousemove",this.onMouseMove);this.trigger("grab",this.getValue());
this.setValue(b)};A.onMouseUp=function(){this.removeEventListener(document,"mouseup",this.onMouseUp);
this.removeEventListener(document,"mousemove",this.onMouseMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"mouseup")}};
A.onMouseOver=function(){this.preventDocumentMouseUpDispatch=true};A.onTouchEnd=function(){this.removeEventListener(document,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchmove",this.onTouchMove);this.trigger("release",this.getValue());
if(!this.preventDocumentMouseUpDispatch){this.dispatchEvent(this.el,"touchend")
}};A.onTouchStart=function(a){var b=this.getClientValue(a);this.addEventListener(document,"touchend",this.onMouseUp);
this.addEventListener(document,"touchmove",this.onTouchMove);this.trigger("grab",this.getValue());
this.setValue(b)};A.onMouseMove=function(a){var b=this.getClientValue(a);this.setValue(b)
};A.onTouchMove=function(a){if(a.preventDefault){a.preventDefault()}var b=this.getClientValue(a);
this.setValue(b)};A.getElementOrientationOffsetValue=function(a,b){if(b==="horizontal"){return w.getDimensions(a).width
}return w.getDimensions(a).height};A.getAvailableRunnableTrack=function(a,c){var b=this.getElementOrientationOffsetValue(this.thumbElement,c);
return a-b};A.getPercentageByValue=function(a,b){a=this.calculateStepsToValue(a,this.getMin());
b=this.calculateMaxSteps(this.getMin(),this.getMax());return(a/b)*100};A.getPercentageOfRunnableTrack=function(a){var d=this.getOrientation();
var g=this.getElementOrientationOffsetValue(this.runnableTrackElement,d);var f=this.getAvailableRunnableTrack(g,d);
var b=this.getPercentageByValue(a,this.getMax());var c=(b/100)*f;return(c/g)*100
};A.onChange=function(a){var b=this.getPercentageOfRunnableTrack(a);if(isNaN(b)){return
}if(this.getOrientation()==="horizontal"){this.thumbElement.style.left=b+"%"}else{this.thumbElement.style.bottom=b+"%"
}this.trigger("change",this.getValue())};A.removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp)};A.removeEventListener=D.removeEventListener;
A.setNodeReferences=function(){this.runnableTrackElement=G(".ac-slider-runnable-track",this.el);
this.thumbElement=G(".ac-slider-thumb",this.el)};A.setOrientation=function(a){this.set("orientation",a)
};A._triggerRelease=function(a){this._preventDefault(a);this.trigger("release",this.getValue());
this._keyDown[z(a)]=0};A._preventDefault=function(a){D.preventDefault(a);D.stopPropagation(a)
};A._step=function(b,c){this._preventDefault(b);this.el.focus();var a=this._keyDown[z(b)]||0;
if(!a){this.trigger("grab",this.getValue());a=this.getStep();a=(a!=="auto")?a:this._cachedMaxStep;
if(!c){a*=-1}this._keyboard.onceUp(z(b),this._triggerRelease)}else{if(Math.abs(this._keyDown[z(b)])<(Math.abs(this.model.max*this.model.keyboardMaxStepPercentage))){a*=this.model.keyboardStepMultiplier
}}this._keyDown[z(b)]=a;this.setValue(this.getValue()+a)};A.stepUp=function(a){this._step(a,true)
};A.stepDown=function(a){this._step(a,false)};A.setValue=function(a){a=this.getNextValue(a,this.getMin(),this.getMax(),this.getStep());
this.set("value",a);this.el.setAttribute("aria-valuenow",a);this.onChange(a)};A.setMin=function(a){this.set("min",a);
this.el.setAttribute("aria-valuemin",a)};A.setMax=function(a){this.set("max",a);
this.el.setAttribute("aria-valuemax",a);this._cachedMaxStep=a/100};A.setStep=function(a){this.set("step",a)
};A.set=function(c,a){if(E.indexOf(c)>-1&&this.model[c]!==a){var b=this.model[c];
this.model[c]=a;this.trigger("change:model:"+c,{previous:b,current:a})}};A._removeEventListeners=function(){this.removeEventListener(this.el,"mousedown",this.onMouseDown);
this.removeEventListener(this.el,"touchstart",this.onTouchStart);this.removeEventListener(this.el,"mouseover",this.onMouseOver);
this.removeEventListener(this.el,"mouseleave",this.onMouseLeave);this.removeEventListener(this.el,"touchend",this.onTouchEnd);
this.removeEventListener(document,"touchend",this.onMouseUp);if(this.model.orientation==="horizontal"){this._keyboard.offDown(F.num,this.stepUp);
this._keyboard.offDown(B.num,this.stepDown);this._keyboard.offUp(B.num,this._triggerRelease);
this._keyboard.offUp(F.num,this._triggerRelease)}else{this._keyboard.offDown(x.num,this.stepDown);
this._keyboard.offDown(J.num,this.stepUp);this._keyboard.offUp(x.num,this._triggerRelease);
this._keyboard.offUp(J.num,this._triggerRelease)}};A.destroy=function(){this._removeEventListeners();
this._keyboard.destroy();u.EventEmitterMicro.prototype.destroy.call(this)};K.exports=y
},{"@marcom/ac-dom-events/preventDefault":9,"@marcom/ac-dom-events/stopPropagation":13,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/dispatchEvent":16,"@marcom/ac-dom-events/utils/removeEventListener":17,"@marcom/ac-dom-metrics":259,"@marcom/ac-dom-traversal/querySelector":64,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-keyboard/Keyboard":262}],265:[function(d,g,f){g.exports.Slider=d("./Slider")
},{"./Slider":264}],266:[function(f,i,g){i.exports=function h(a,b,c){if(!b){return a
}c=c||/{([^{}]*)}/g;return a.replace(c,function(l,m){var d=b[m];return(typeof d==="string"||typeof d==="number"||typeof d==="boolean")?d:l
})}},{}],267:[function(i,h,g){var f=i("./player/Player");f.create=i("./player/factory/createPlayer");
h.exports={Player:f}},{"./player/Player":271,"./player/factory/createPlayer":273}],268:[function(g,k,h){var i=function(a){this.el=a
};var j=i.prototype;j.on=function(){this.el.addEventListener.apply(this.el,arguments)
};j.off=function(){this.el.removeEventListener.apply(this.el,arguments)};j.trigger=function(b,a){var c=new CustomEvent(b,a);
this.el.dispatchEvent(c)};k.exports=i},{}],269:[function(i,n,j){var k=i("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=function(){k.call(this)};var o=k.prototype;l.prototype=Object.create(o);var m=l.prototype;
m.constructor=l;m.once=function(c,a,b){if(b){var d=function(){a.apply(b,arguments)
};o.once.apply(this,[c,d])}else{o.once.apply(this,arguments)}};m.on=function(c,a,d){if(arguments.length>2){if(!this._boundListeners){this._boundListeners={}
}if(!this._boundListeners[c]){this._boundListeners[c]=[]}var b=a.bind(d);this._boundListeners[c].push([a,d,b]);
return o.on.call(this,c,b)}else{return o.on.apply(this,arguments)}};m.off=function(a,f,b){if(arguments.length>2){try{var h=this._boundListeners[a];
var c=0;var d=h.length;for(;c<d;c++){if(h[c][0]===f&&h[c][1]===b){var r=h.splice(c,1)[0];
return o.off.call(this,a,r[2])}}}catch(g){}}else{return o.off.apply(this,arguments)
}};m.destroy=function(){this._boundListeners=undefined;o.destroy()};n.exports=l
},{"@marcom/ac-event-emitter-micro":205}],270:[function(d,g,f){g.exports=d("./utils/urlOptimizer/OptimizeVideoUrl")
},{"./utils/urlOptimizer/OptimizeVideoUrl":308}],271:[function(H,R,y){var K=H("../event-emitter-shim/EventEmitterShim");
var C=H("../dom-emitter/DOMEmitterMicro");var P=H("../video/VideoFactory").create;
var D=H("@marcom/ac-dom-nodes/insertLastChild");var Q=H("@marcom/ac-classlist/add");
var J=H("@marcom/ac-classlist/remove");var I=H("@marcom/ac-dom-events/utils/addEventListener");
var z=H("@marcom/ac-useragent");var O=H("@marcom/ac-fullscreen");var M=H("../posterframe/PosterFrameFactory");
var G=H("@marcom/ac-feature/isRetina")();var N=H("@marcom/ac-feature/isDesktop")();
var A=z.browser.safari&&z.os.osx;var B=z.browser.ie&&z.browser.version.major===9;
var x="user-hover";var L=H("@marcom/ac-console").log;var E=function(a){a=a||{};
this.el=a.el||document.createElement("div");this._elementEmitter=new C(this.el);
this.options=a;K.call(this);this._controlsFactory=a.controlsFactory;this._urlOptimizer=a.urlOptimizer;
this._maxWidth=a.maxWidth||Math.min(window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,1280);
Q(this.el,"ac-video-player");this._videoImpl=P(a,this.el);this._cachedPiPMode=this.isPictureInPicture();
this._cachedReadyState=this.getReadyState();this.el.appendChild(this._videoImpl.getMediaElement());
if(a.poster||typeof(a.poster)==="undefined"){this._initPoster(a.poster)}if(!N||a.controls){this._initControls()
}this._bindMethods();this._addEventListeners();if(a.parentElement){a.parentElement.appendChild(this.el)
}};E.LOADEDMETADATA=1;E.LOADEDDATA=2;E.CANPLAY=3;E.CANPLAYTHROUGH=4;var S=K.prototype;
E.prototype=Object.create(S);var F=E.prototype;F.constructor=E;F._bindMethods=function(){this._onStart=this._onStart.bind(this);
this._onEnded=this._onEnded.bind(this);this._onTimeUpdate=this._onTimeUpdate.bind(this);
this._forwardEvent=this._forwardEvent.bind(this);this._forwardCaptionEvent=this._forwardCaptionEvent.bind(this);
this._onPresentationModeChanged=this._onPresentationModeChanged.bind(this);this._forwardFullScreenChangeEvent=this._forwardNamedEvent.bind(this,"fullscreen:change");
this._forwardEnterFullScreenEvent=this._forwardNamedEvent.bind(this,"enterfullscreen");
this._forwardExitFullScreenEvent=this._forwardNamedEvent.bind(this,"exitfullscreen");
this._forwardReadyStateChange=this._forwardReadyStateChange.bind(this);this._onFocusIn=this._onFocusIn.bind(this);
this._onFocusOut=this._onFocusOut.bind(this);this._showControls=this._showControls.bind(this);
this._hideControls=this._hideControls.bind(this)};F._addEventListeners=function(){this._videoImpl.on("loadstart",this._forwardEvent);
this._videoImpl.on("progress",this._forwardEvent);this._videoImpl.on("suspend",this._forwardEvent);
this._videoImpl.on("abort",this._forwardEvent);this._videoImpl.on("error",this._forwardEvent);
this._videoImpl.on("emptied",this._forwardEvent);this._videoImpl.on("stalled",this._forwardEvent);
this._videoImpl.on("play",this._forwardEvent);this._videoImpl.on("pause",this._forwardEvent);
this._videoImpl.on("loadedmetadata",this._forwardEvent);this._videoImpl.on("loadeddata",this._forwardEvent);
this._videoImpl.on("waiting",this._forwardEvent);this._videoImpl.on("playing",this._forwardEvent);
this._videoImpl.on("canplay",this._forwardEvent);this._videoImpl.on("canplaythrough",this._forwardEvent);
this._videoImpl.on("seeking",this._forwardEvent);this._videoImpl.on("seeked",this._forwardEvent);
this._videoImpl.on("timeupdate",this._onTimeUpdate);this._videoImpl.on("ended",this._forwardEvent);
this._videoImpl.on("ratechange",this._forwardEvent);this._videoImpl.on("durationchange",this._forwardEvent);
this._videoImpl.on("volumechange",this._forwardEvent);this._videoImpl.on("loadstart",this._forwardReadyStateChange);
this._videoImpl.on("suspend",this._forwardReadyStateChange);this._videoImpl.on("abort",this._forwardReadyStateChange);
this._videoImpl.on("error",this._forwardReadyStateChange);this._videoImpl.on("emptied",this._forwardReadyStateChange);
this._videoImpl.on("stalled",this._forwardReadyStateChange);this._videoImpl.on("loadedmetadata",this._forwardReadyStateChange);
this._videoImpl.on("loadeddata",this._forwardReadyStateChange);this._videoImpl.on("waiting",this._forwardReadyStateChange);
this._videoImpl.on("canplay",this._forwardReadyStateChange);this._videoImpl.on("canplaythrough",this._forwardReadyStateChange);
this._videoImpl.on("webkitpresentationmodechanged",this._onPresentationModeChanged);
this._videoImpl.on("addtrack",this._forwardEvent);this._videoImpl.on("change",this._forwardEvent);
this._videoImpl.on("removetrack",this._forwardEvent);if(N){O.on("enterfullscreen",this._forwardEnterFullScreenEvent);
O.on("exitfullscreen",this._forwardExitFullScreenEvent);O.on("enterfullscreen",this._forwardFullScreenChangeEvent);
O.on("exitfullscreen",this._forwardFullScreenChangeEvent)}else{if(z.os.ios){this._videoImpl.on("webkitbeginfullscreen",this._forwardEnterFullScreenEvent);
this._videoImpl.on("webkitendfullscreen",this._forwardExitFullScreenEvent);this._videoImpl.on("webkitbeginfullscreen",this._forwardFullScreenChangeEvent);
this._videoImpl.on("webkitendfullscreen",this._forwardFullScreenChangeEvent)}}this._elementEmitter.on("focusin",this._onFocusIn);
this._elementEmitter.on("focusout",this._onFocusOut)};F._forwardReadyStateChange=function(){var a=this.getReadyState();
if(a>this._cachedReadyState||a===0){this._cachedReadyState=a;this.trigger("readystatechange",{readyState:a})
}};F._forwardEvent=function(a){L(a.type+" time:"+this.getCurrentTime());this.trigger(a.type)
};F._forwardNamedEvent=function(a){L(a+" time:"+this.getCurrentTime());this.trigger(a)
};F._forwardCaptionEvent=function(a){this.trigger("captions:"+a.type)};F._onTimeUpdate=function(){this.trigger("timeupdate",{currentTime:this.getCurrentTime()})
};F.load=function(b,c){if(!Array.isArray(b)){b=[b]}if(c&&!Array.isArray(c)){c=[{src:c}]
}this._cachedReadyState=0;if(this._urlOptimizer){if(!c){c=b.map(this._urlOptimizer.getCaptionsSource).filter(function(d){return(!!d)
})}var a=this.getVisibleTextTracks();if(a&&a.length&&c&&c.length){c[0].mode="showing"
}b=b.map(function(d){return this._urlOptimizer.getVideoSource(d,this._calcMaxWidth(),null,{maxWidth:this._maxWidth})
}.bind(this))}this.once("play",function(){if(!B&&!A){this.once("timeupdate",this._onStart)
}else{this.once("timeupdate",this._onStart,function(){return this.getCurrentTime()>0
}.bind(this))}}.bind(this));if(this._poster){this._poster.show()}if(this.options.autoplay&&N){this.once("loadstart",function(){this.play()
}.bind(this))}this._videoImpl.load(b,c)};F._calcMaxWidth=function(){if(this.el.parentElement){return this.el.parentElement.clientWidth
}else{return this._maxWidth}};F._onPresentationModeChanged=function(a){this._forwardEvent(a);
var b=this.isPictureInPicture();if(this._cachedPiPMode!==b){this._cachedPiPMode=b;
L("pictureinpicture:change to "+b);this.trigger("pictureinpicture:change")}};F.appendTo=function(a){D(this.el,a)
};F.getTextTracks=function(){return Array.prototype.slice.call(this._videoImpl.getTextTracks())
};F.getVisibleTextTracks=function(){var a=Array.prototype.slice.call(this._videoImpl.getTextTracks());
if(a&&a.length){a=a.filter(function(b){return b.mode==="showing"})}return a};F.getFullScreenElement=function(){if(!N){return this.getMediaElement()
}else{return this.el}};F.getFullScreenEnabled=function(){return O.fullscreenEnabled(this.getFullScreenElement())
};F.isFullscreen=function(){if(N){return O.fullscreenElement()===this.getFullScreenElement()
}else{return this._videoImpl.isFullscreen()}};F.requestFullscreen=function(){O.requestFullscreen(this.getFullScreenElement())
};F.exitFullscreen=function(){O.exitFullscreen(this.getFullScreenElement())};F.toggleFullscreen=function(){if(this.isFullscreen()){this.exitFullscreen()
}else{this.requestFullscreen()}};F._initControls=function(){var a;if(N){a=this._instantiateDefaultCustomUIControls()
}else{this.setControls(true)}this.controls=a};F._onFocusIn=function(){this._hasFocus=true;
this._showControls()};F._onFocusOut=function(){this._hasFocus=false;this._hideControls()
};F._showControls=function(){Q(this.el,x)};F._hideControls=function(){J(this.el,x)
};F._instantiateDefaultCustomUIControls=function(){var d=this._controlsFactory.create({player:this,basePath:this.options.localizationBasePath});
var g=d.el;if(g.parentNode!==this.el){this.el.appendChild(g)}this._videoImpl.setControls(false);
var c;var b={};var a=function(h){if((h.pageX!==undefined&&(b.x===h.pageX&&b.y===h.pageY)||!this.getCurrentSrc())){return
}this._showControls();window.clearTimeout(c);c=window.setTimeout(function(){if(!this._hasFocus){this._hideControls()
}}.bind(this),this.options.controlsTimeoutDuration);b={x:h.pageX,y:h.pageY}}.bind(this);
I(this.el,"mouseenter",a);I(this.el,"mousemove",a);I(this.el,"click",function(){this._hasFocus=false
}.bind(this));var f=function(){if(!this._hasFocus){window.clearTimeout(c);this._hideControls();
b={}}};if("onmouseleave" in this.el){I(this.el,"mouseleave",f.bind(this))}else{I(this.el,"mouseout",function(h){if(!d.el.contains(h.target)&&h.target!==d.el){f.call(this)
}}.bind(this),true)}return d};F._onStart=function(){if(this._poster){this._poster.hide()
}this.once("ended",this._onEnded)};F._onEnded=function(){if(this.isFullscreen()){this.exitFullscreen()
}this.once("timeupdate",this._onStart);if(this._poster){this._poster.show()}};F._initPoster=function(a){this._poster=M({player:this,video:this._videoImpl,useNativePoster:!N,is2x:G,src:a});
if(this._poster.el){this.el.appendChild(this._poster.el)}};F.once=function(d,c,b){if(arguments.length<3||typeof b==="object"){S.once.apply(this,arguments)
}else{var g=arguments;var f=Array.prototype.slice.call(arguments,2);var a=function(){if(f.every(function(h){return !!h()
})){g[1].apply(this,g);this.off(g[0],a)}}.bind(this);this.on(g[0],a)}};F.destroy=function(){this._videoImpl.destroy();
if(this.controls){this.controls.destroy()}this._videoImpl=undefined;this.el.innerHTML="";
K.prototype.destroy.call(this)};F.getMediaElement=function(){return this._videoImpl.getMediaElement()
};F.play=function(){L("play called");this._videoImpl.play()};F.pause=function(){this._videoImpl.pause()
};F.seek=function(a){this.setCurrentTime.apply(this,arguments)};F.addTextTrack=function(a){this._videoImpl.addTextTrack(a)
};F.getReadyState=function(){return this._videoImpl.getMediaElement().readyState
};F.getPreload=function(){return this._videoImpl.getPreload()};F.setPoster=function(a){this._poster.setSrc(a)
};F.getVolume=function(){return this._videoImpl.getVolume()};F.getMuted=function(){return this._videoImpl.getMuted()
};F.getCurrentTime=function(){return this._videoImpl.getCurrentTime()};F.getDuration=function(){return this._videoImpl.getDuration()
};F.getPaused=function(){return this._videoImpl.getPaused()};F.setCurrentTime=function(a){return this._videoImpl.setCurrentTime(a)
};F.setVolume=function(a){return this._videoImpl.setVolume(a)};F.setMuted=function(a){this._videoImpl.setMuted(a)
};F.setSrc=function(a){this._videoImpl.setSrc(a)};F.getCurrentSrc=function(){return this._videoImpl.getCurrentSrc()
};F.setControls=function(a){return this._videoImpl.setControls(a)};F.getMediaHeight=function(){return this._videoImpl.getMediaElement().videoHeight
};F.getMediaWidth=function(){return this._videoImpl.getMediaElement().videoWidth
};F.supportsPictureInPicture=function(){return this._videoImpl.supportsPictureInPicture()
};F.isPictureInPicture=function(){return this._videoImpl.isPictureInPicture()};
F.setPictureInPicture=function(a){return this._videoImpl.setPictureInPicture(a)
};R.exports=E},{"../dom-emitter/DOMEmitterMicro":268,"../event-emitter-shim/EventEmitterShim":269,"../posterframe/PosterFrameFactory":275,"../video/VideoFactory":310,"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202,"@marcom/ac-console":203,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-nodes/insertLastChild":32,"@marcom/ac-feature/isDesktop":184,"@marcom/ac-feature/isRetina":186,"@marcom/ac-fullscreen":242,"@marcom/ac-useragent":502}],272:[function(o,q,n){var r=o("../Player");
var s=o("@marcom/ac-string/supplant");var k=o("../../ui/localization/Localization");
var p='<div class="ac-video-not-supported">\n    <div class="ac-video-not-supported-content">\n        <p class="ac-video-not-supported-headline">{novideosupportheadline}</p>\n        <p class="ac-video-not-supported-details">{novideosupportdetails}</p>\n    </div>\n</div>';
var m=o("../../ui/localization/DefaultLabelStrings");q.exports=function l(c){var b=document.createElement("div");
b.className="ac-video-player";var f={el:b,notSupported:true,appendTo:function(g){g.appendChild(b)
}};var a=function(){}.bind(f);for(var d in r.prototype){if(!f.hasOwnProperty(d)){f[d]=a
}}k.getTranslation({callback:function(g){b.innerHTML=s(p,Object.assign(m,g.attributes))
},basePath:c.localizationBasePath});return f}},{"../../ui/localization/DefaultLabelStrings":301,"../../ui/localization/Localization":302,"../Player":271,"@marcom/ac-string/supplant":266}],273:[function(n,p,l){var r=n("../Player");
var s=n("@marcom/ac-useragent");var k=n("./createNoSupportPlayer");var m=n("@marcom/ac-feature/isDesktop")();
var q=!(s.browser.ie&&s.browser.version.major<=8);p.exports=function o(b){if(!b){b={}
}else{if(arguments.length>1){b=Object.assign.apply(null,Array.prototype.slice.apply(arguments))
}}if(!q||b.noSupport){return k(b)}if(!b.components){b.components=n("../../ui/DefaultComponents")
}if(typeof b.controls==="undefined"){b.controls=true}if(!b.controlsImplementation){b.controlsImplementation=n("../../ui/ControlBar")
}if(!b.controlsFactory){b.controlsFactory=n("../../ui/ControlsFactory")({controlsImplementation:b.controlsImplementation,components:b.components})
}if(typeof b.urlOptimizer!=="undefined"&&b.urlOptimizer===true||b.urlOptimizer==="true"){b.urlOptimizer=n("../../optimizeVideoUrl")
}if(!b.sources&&!b.src){b.sources=[]}else{b.sources=(b.sources)?b.sources:(b.src)?[b.src]:[]
}b.autoplay=(b.autoplay!==undefined)?b.autoplay:m;if(!b.controlsTimeoutDuration){b.controlsTimeoutDuration=5000
}var a=new r(b);if(b.sources&&b.sources.length){a.load(b.sources,b.textTracks)}return a
}},{"../../optimizeVideoUrl":270,"../../ui/ControlBar":282,"../../ui/ControlsFactory":283,"../../ui/DefaultComponents":284,"../Player":271,"./createNoSupportPlayer":272,"@marcom/ac-feature/isDesktop":184,"@marcom/ac-useragent":502}],274:[function(r,s,p){var n=r("@marcom/ac-classlist/add");
var l=r("@marcom/ac-classlist/remove");var m="ac-video-poster";var k="ac-video-poster-hide";
var q=function(a){this._initialize(a)};var o=q.prototype;o._initialize=function(b){var a=b.src;
this.el=b.el||document.createElement("div");this._imgElement=document.createElement("img");
this._imgElement.src=a;this.el.appendChild(this._imgElement);n(this.el,m)};o.hide=function(){n(this.el,k)
};o.show=function(){l(this.el,k)};o.setSrc=function(a){this._imgElement=a};s.exports=q
},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202}],275:[function(m,l,h){var k=m("./PosterFrame");
var j={"1x":"http://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480.jpg","2x":"http://images.apple.com/ac/ac-video-posterframe/1.0/images/ac-video-poster_848x480_2x.jpg"};
l.exports=function i(c){c.src=c.src||((c.is2x)?j["2x"]:j["1x"]);if(!c.useNativePoster){return new k(c)
}else{c.video.setPoster(c.src);var a=false;var b;return{show:function(){a=true;
if(b){c.video.setPoster(b);b=null}},hide:function(){a=false},setSrc:function(d){if(!a){b=d
}else{c.video.setPoster(d)}}}}}},{"./PosterFrame":274}],276:[function(p,n,j){var q=p("@marcom/ac-ajax-xhr");
var l=p("@marcom/ac-function/throttle");var o=p("./parseVTT");var k=function(b,a){this._view=b;
this._video=a.video;this._refreshTracks=this._refreshTracks.bind(this);this._throttledRefreshCurrentCaption=l(this._refreshCurrentCaption.bind(this),300);
this._addTrackListeners()};var m=k.prototype;m._addTrackListeners=function(){this._video.on("addtrack",this._refreshTracks);
this._video.on("removetrack",this._refreshTracks);this._video.on("change",this._refreshTracks)
};m._addVideoListeners=function(b){if(!b.cues){this._view.setText("");try{return q.get(b.src,{complete:function(c){b.cues=o(c.responseText);
this._addVideoListeners(b);this._refreshCurrentCaption()}.bind(this),error:function(c){}.bind(this)})
}catch(a){}}this._video.on("loadstart",this._refreshTracks);this._video.on("timeupdate",this._throttledRefreshCurrentCaption)
};m._removeVideoListeners=function(){this._video.off("loadstart",this._refreshTracks);
this._video.off("timeupdate",this._throttledRefreshCurrentCaption)};m._refreshTracks=function(){var a=this._video.getTextTracks();
if(a&&a.length){a=a.filter(function(b){return b.mode==="showing"})}if(a.length){this._activeTrack=a[0];
this._addVideoListeners(this._activeTrack)}else{this._activeTrack=null;this._removeVideoListeners()
}this._refreshCurrentCaption()};m._getCurrentCaptionText=function(f){var c=(this._activeTrack)?this._activeTrack.cues:null;
if(!c){return""}else{if(this._currentCaption&&this._currentCaption.startTime>=f&&this._currentCaption<=f){return this._currentCaption.text
}}var b=0;var d=c.length;var a;while(b<d){if(c[b].startTime<=f&&c[b].endTime>=f){a=c[b]
}else{if(c[b].startTime>=f){break}}b++}this._currentCaption=a;return(a)?a.text:""
};m._refreshCurrentCaption=function(){this._view.setText(this._getCurrentCaptionText(this._video.getCurrentTime()))
};m.destroy=function(){this._removeVideoListeners()};n.exports=k},{"./parseVTT":281,"@marcom/ac-ajax-xhr":237,"@marcom/ac-function/throttle":249}],277:[function(A,C,y){var q=A("../ui/factory/createComponents");
var z=A("./TextTracksBehavior");var v=A("../ui/elements/Label");var t=A("@marcom/ac-classlist/add");
var r=A("@marcom/ac-event-emitter-micro").EventEmitterMicro;var p='<div class="ac-video-player-text-track"></div>';
var x="is-visible";var s="ac-video-player-text-track-container";var u={textTracksPolyfill:{className:"ac-video-player-text-track",view:{classDef:v,options:{}},behavior:{classDef:z}}};
var B=function(a){r.call(this);this.container=a.container;this._video=a.video;this._initialize(a)
};var w=B.prototype=Object.create(r.prototype);w._initialize=function(a){this._onTrackChange=this._onTrackChange.bind(this);
this.el=document.createElement("div");this.el.innerHTML=a.template||p;t(this.el,s);
this._tracks=a.tracks||[];this._textTrackComponent=q(this.el,u,{video:this._video})
};w._onTrackChange=function(){this.trigger("change");if(!this.el.parentElement){this._video.el.parentElement.appendChild(this.el);
t(this.el.firstElementChild,x)}};w.addTrack=function(b){if(!this._tracks){this._tracks=[]
}var a=b.mode||"hidden";var c=this._onTrackChange;Object.defineProperty(b,"mode",{get:function(){return a
},set:function(d){a=d;c()},enumerable:true,configurable:true});this._tracks.push(b);
this.trigger("addtrack")};w.clearTracks=function(){this._tracks=[];this.trigger("removetrack");
this.trigger("change")};w.getTextTracks=function(){return this._tracks};w.trigger=function(b,a){return r.prototype.trigger.call(this,b,Object.assign({type:b},a||{}))
};w.destroy=function(){this._textTrackComponent.destroy();r.prototype.destroy.call(this)
};C.exports=B},{"../ui/elements/Label":294,"../ui/factory/createComponents":299,"./TextTracksBehavior":276,"@marcom/ac-classlist/add":196,"@marcom/ac-event-emitter-micro":205}],278:[function(p,s,o){var l=p("@marcom/ac-useragent");
var k;if(l.browser.safari){k=function(b,a){b.track.mode=a}}else{k=function(b,a){b.mode=a
}}var n=function(a){if(a instanceof HTMLElement){return this._videoElement.appendChild(a)
}var b=document.createElement("track");b.src=a.src;b.kind="captions";b.srclang=a.srclang;
if(b.srclang==="en"){b.label="English"}if(l.browser.firefox){setTimeout(function(){this._videoElement.appendChild(b);
k(b,a.mode||"hidden",this._videoElement.textTracks.length)}.bind(this),0)}else{if(l.os.android||l.os.linux){this._videoElement.appendChild(b);
k(this._videoElement.textTracks[0],a.mode||"hidden",this._videoElement.textTracks.length)
}else{this._videoElement.appendChild(b);k(b,a.mode||"hidden",this._videoElement.textTracks.length)
}}};var q=function(){return this._videoElement.textTracks};var m=function(){if(!this._textTracksEmitter){var a=p("../dom-emitter/DOMEmitterMicro");
this._textTracksEmitter=new a(this.getTextTracks())}return this._textTracksEmitter
};var r=function(a){var d=0;var c=a?a.length:0;for(;d<c;d++){var b=a[d];n.call(this,b)
}};s.exports={create:r,add:n,get:q,getEmitter:m}},{"../dom-emitter/DOMEmitterMicro":268,"@marcom/ac-useragent":502}],279:[function(o,n,p){var m=o("./TextTracksDOM");
var q=function(b){if(!b){return}if(!this._textTracksPolyfill){this._textTracksPolyfill=new m({video:this,tracks:b,container:this._parentElement})
}else{this._textTracksPolyfill.clearTracks();var a=0;var c=b.length;for(;a<c;a++){this._textTracksPolyfill.addTrack(b[a])
}}};var j=function(a){return this._textTracksPolyfill.addTrack(a)};var k=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
}return this._textTracksPolyfill.getTextTracks()};var l=function(){if(!this._textTracksPolyfill){this._createTextTrackTags([])
}return this._textTracksPolyfill};n.exports={create:q,add:j,get:k,getEmitter:l}
},{"./TextTracksDOM":277}],280:[function(m,l,h){var j=m("@marcom/ac-useragent");
var k=!j.browser.ie&&!j.browser.edge;l.exports=function i(a){a=a||{};var b=(typeof a.useNativeCaptions==="undefined")?k:a.useNativeCaptions;
return(b)?m("./TextTracksNative"):m("./TextTracksPolyfill")}},{"./TextTracksNative":278,"./TextTracksPolyfill":279,"@marcom/ac-useragent":502}],281:[function(g,j,h){var i=g("../utils/Time");
j.exports=function k(r){var b=r.split(/\n/);var a=/([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}( \-\-> ){1}([\d]{2}:)?[\d]{2}:[\d]{2}.[\d]{3}/;
var c=[];var f;var q;var d=0;var p=b.length;for(d;d<p;d++){q="";if(a.test(b[d])){f=b[d].split(" --> ");
f[0]=f[0].split(":").length<3?"00:"+f[0]:f[0];f[1]=f[1].split(":").length<3?"00:"+f[1]:f[1];
while(++d&&d<p&&!a.test(b[d])){if(b[d]!==""){q+=b[d]+"<br />"}}q=q.substr(0,q.length-6);
if(d<p){d--}c.push({startTime:i.stringToNumber(f[0].split(" ")[0]),endTime:i.stringToNumber(f[1].split(" ")[0]),text:q})
}}return c}},{"../utils/Time":304}],282:[function(v,x,u){var y=v("@marcom/ac-string/supplant");
var q=v("../utils/Time");var s=v("./localization/Localization");var n=v("./factory/createComponents");
var p="ac-video-controls";var w="control-bar-skin-default";var o=v("../utils/merge");
var r=function(a){this._initialize(a)};var t=r.prototype;t._initialize=function(a){this.el=a.element||document.createElement("div");
this._basePath=a.basePath;this.el.style.display="none";this._template=a.template||'<div class="left row-1">\n\t<button type="button" class="{elementClassPrefix}-min-volume-button {elementClassPrefix}-button" value="{minvolume}" aria-label="{minvolume}" role="button" tabindex="0"></button>\n\t<div class="{elementClassPrefix}-volume-level-indicator" tabindex="0" aria-valuemin="0" aria-valuemax="100" min="0" max="100" aria-label="{adjustvolume}" role="slider" step="10"></div>\n\t<button type="button" class="{elementClassPrefix}-max-volume-button {elementClassPrefix}-button" value="{fullvolume}" aria-label="{fullvolume}" role="button" tabindex="0"></button>\n</div>\n\n<div class="center row-1">\n\t<button type="button" class="{elementClassPrefix}-play-pause-button {elementClassPrefix}-button" value="{playpause}" aria-label="{playpause}" role="button" tabindex="0"></button>\n</div>\n\n<div class="right row-1">\n\t<button type="button" class="{elementClassPrefix}-picture-in-picture-button {elementClassPrefix}-button picture-in-picture-unsupported" value="{pictureinpicture}" aria-label="{pictureinpicture}" role="button" tabindex="0"></button>\n\t<button type="button" class="{elementClassPrefix}-text-tracks-toggle-button {elementClassPrefix}-button no-text-tracks" value="{captionscontrol}" aria-label="{captionscontrol}" role="button" tabindex="0"></button>\n\t<button type="button" class="{elementClassPrefix}-full-screen-button {elementClassPrefix}-button fullscreen-unsupported" value="{fullscreen}" aria-label="{fullscreen}" role="button" tabindex="0"></button>\n</div>\n\n<div class="left row-2">\n\t<div class="{elementClassPrefix}-elapsed-time-indicator">\n\t\t<span class="label">{elapsed}</span>\n\t\t<span class="{elementClassPrefix}-elapsed-time" aria-label="{elapsed}" tabindex="0" role="timer" aria-value="00:00">00:00</span>\n\t</div>\n</div>\n\n<div class="center row-2">\n\t<div class="{elementClassPrefix}-buffered-indicator"></div>\n\t<div class="{elementClassPrefix}-progress-indicator ac-slider-inactive" aria-label="progress-indicator" role="slider" precision="float" min="0" max="{max}" step="1" value="0" tabindex="0" aria-valuemax="{max}" aria-valuemin="{min}" aria-valuenow="{value}"></div>\n</div>\n\n<div class="right row-2">\n\t<div class="{elementClassPrefix}-remaining-time-indicator">\n\t<span class="label">{remaining}</span>\n\t<span class="{elementClassPrefix}-remaining-time" aria-label="{remaining}" tabindex="0" role="timer" aria-value="-00:00">-00:00</span>\n</div>\n</div>\n\n<div class="{elementClassPrefix}-inactive-container"></div>';
this._templateData=a.templateData||Object.assign({elementClassPrefix:"controls"});
this._localize().then(function(){this._initControls(a);this.el.style.display=""
}.bind(this))};t._localize=function(){return new Promise(function(a){s.getTranslation({callback:function(b){a(b)
}.bind(this),basePath:this._basePath})}.bind(this)).then(function(a){this._templateData=Object.assign(this._templateData,a)
}.bind(this))};t._renderTemplateMarkup=function(){var a=y(this._template,this._templateData);
this.el.innerHTML=a};t._initControls=function(b){this._player=b.player;var c=this.el;
var a=b.components;c.classList.add(b.className||p);c.classList.add(b.skin||w);this._renderTemplateMarkup();
this._componentCollection=n(c,o(a,{elementClassPrefix:this._templateData.elementClassPrefix,maxVolume:{behavior:{handlers:{click:this._setVolume.bind(this,1)}}},minVolume:{behavior:{handlers:{click:this._setVolume.bind(this,0)}}},elapsedTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(d){d.setText(q.formatTime(this._player.getCurrentTime()))
}.bind(this)}}},remainingTimeIndicator:{behavior:{observe:{source:this._player,events:["timeupdate","seeking","seeked","durationchange"],update:function(d){d.setText(q.formatTime(this._player.getCurrentTime()-this._player.getDuration()))
}.bind(this)}}},volumeLevel:{view:{options:{value:(this._player.getMuted())?0:(this._player.getVolume()*100)}}},fullScreen:{view:{options:{labels:{initial:this._templateData.fullscreen,on:this._templateData.exitfullscreen,off:this._templateData.fullscreen}}}},pictureInPictureToggle:{view:{options:{labels:{initial:this._templateData.pictureinpicture,on:this._templateData.exitpictureinpicture,off:this._templateData.pictureinpicture}}}}}),{player:this._player,localization:this._templateData})
};t._setVolume=function(a){if(a){this._player.setMuted(false)}this._player.setVolume(a)
};t._thirySecondsBack=function(){var a=this._player.getCurrentTime();var b=a-30;
this._player.setCurrentTime((b<0)?0:b)};t.destroy=function(){};x.exports=r},{"../utils/Time":304,"../utils/merge":305,"./factory/createComponents":299,"./localization/Localization":302,"@marcom/ac-string/supplant":266}],283:[function(m,k,h){var l={components:m("./DefaultComponents"),controlsImplementation:m("./ControlBar")};
var j=m("@marcom/ac-object/defaults");var i=function(b){var a=j(l,b);return{create:function(c){var d=j(a,c);
d.components=l.components;return new l.controlsImplementation(d)}}};k.exports=i
},{"./ControlBar":282,"./DefaultComponents":284,"@marcom/ac-object/defaults":485}],284:[function(z,A,x){var v=z("./elements/Button");
var w=z("./elements/StatefulButton");var s=z("./elements/Label");var y=z("./elements/Slider");
var u=z("./behaviors/PlayPauseButtonBehavior");var C=z("./behaviors/PictureInPictureButtonBehavior");
var r=z("./behaviors/CaptionsButtonBehavior");var B=z("./behaviors/FullScreenButtonBehavior");
var t=z("./behaviors/ProgressBarSliderBehavior");var p=z("./behaviors/VolumeSliderBehavior");
var q=z("./elements/mixins/CursorPointer");A.exports={back30Seconds:{className:"back-30-seconds-button",view:{classDef:v}},fullScreen:{className:"full-screen-button",view:{classDef:w,options:{states:{initial:"fullscreen-unsupported",on:"is-fullscreen",off:""},labels:{initial:"fullscreen",on:"exitfullscreen",off:"fullscreen"}}},behavior:{classDef:B}},maxVolume:{className:"max-volume-button",view:{classDef:v}},minVolume:{className:"min-volume-button",view:{classDef:v}},mute:{className:"mute-button",view:{classDef:w}},playPause:{className:"play-pause-button",view:{classDef:w,options:{states:{playing:["is-playing"],paused:[]}}},behavior:{classDef:u}},pictureInPictureToggle:{className:"picture-in-picture-button",view:{classDef:w,options:{states:{initial:["picture-in-picture-unsupported"],on:["is-picture-in-picture"],off:[]},labels:{initial:"pictureinpicture",on:"exitpictureinpicture",off:"pictureinpicture"}}},behavior:{classDef:C}},captionsToggle:{className:"text-tracks-toggle-button",view:{classDef:w,options:{states:{initial:["no-text-tracks"],on:["text-tracks-visible"],off:[]}}},behavior:{classDef:r}},elapsedTimeIndicator:{className:"elapsed-time",view:{classDef:s}},remainingTimeIndicator:{className:"remaining-time",view:{classDef:s}},progressBar:{className:"progress-indicator",view:{classDef:y,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-thumb">\n\t\t\t<div class="ac-slider-thumb-background"></div>\n\t\t\t<div class="ac-slider-scrubbed"></div>\n\t\t</div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:1,mixins:[q]}},behavior:{classDef:t}},volumeLevel:{className:"volume-level-indicator",view:{classDef:y,options:{template:'<div class="ac-slider-runnable-track">\n\t<div class="ac-slider-thumb">\n\t\t<div class="ac-slider-thumb-background"></div>\n\t</div>\n\t<div class="ac-slider-inner-track">\n\t\t<div class="ac-slider-scrubbed"></div>\n\t</div>\n</div>\n<input class="ac-slider-input-type-range" type="range" value="0" step="1" min="0" max="1"  />',min:0,max:100,mixins:[q]}},behavior:{classDef:p}}}
},{"./behaviors/CaptionsButtonBehavior":287,"./behaviors/FullScreenButtonBehavior":288,"./behaviors/PictureInPictureButtonBehavior":289,"./behaviors/PlayPauseButtonBehavior":290,"./behaviors/ProgressBarSliderBehavior":291,"./behaviors/VolumeSliderBehavior":292,"./elements/Button":293,"./elements/Label":294,"./elements/Slider":295,"./elements/StatefulButton":296,"./elements/mixins/CursorPointer":297}],285:[function(i,h,f){var g=function(b,a){this._player=a.player;
this._view=b;if(this._addViewListeners){this._addViewListeners()}if(this._addPlayerListeners){this._addPlayerListeners()
}};h.exports=g},{}],286:[function(h,k,i){var l=h("./BaseBehavior");var m=function(b,a){l.apply(this,arguments)
};var j=m.prototype=Object.create(l.prototype);j._addViewListeners=function(){this._view.on("click",this._onClick=this._onClick.bind(this))
};j._onClick=function(){};k.exports=m},{"./BaseBehavior":285}],287:[function(h,l,i){var m=h("./ButtonBehavior");
var j=function(b,a){m.apply(this,arguments);this._updateState()};var k=j.prototype=Object.create(m.prototype);
k._updateState=function(){var a=this._player.getVisibleTextTracks();var b=this._player.getTextTracks();
if(a.length){this._view.setState("on")}else{if(b.length){this._view.setState("off")
}else{this._view.setState("initial")}}};k._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.on("addtrack",this._updateState);this._player.on("change",this._updateState);
this._player.on("removetrack",this._updateState)};k._onClick=function(){var a=this._player.getVisibleTextTracks();
var b=this._player.getTextTracks();if(a.length){b[0].mode="hidden"}else{b[0].mode="showing"
}};l.exports=j},{"./ButtonBehavior":286}],288:[function(h,k,i){var l=h("./ButtonBehavior");
var m=function(b,a){l.apply(this,arguments);if(this._player.getFullScreenEnabled()){this._updateState()
}};var j=m.prototype=Object.create(l.prototype);j._addPlayerListeners=function(){this._updateState=this._updateState.bind(this);
this._player.on("fullscreen:change",this._updateState)};j._updateState=function(){this._view.setState((this._player.isFullscreen())?"on":"off")
};j._onClick=function(){this._player.toggleFullscreen(!this._player.isFullscreen())
};k.exports=m},{"./ButtonBehavior":286}],289:[function(h,k,i){var l=h("./ButtonBehavior");
var m=function(b,a){l.apply(this,arguments);this._initialize()};var j=m.prototype=Object.create(l.prototype);
j._initialize=function(){this._updateButtonState=this._updateButtonState.bind(this);
if(this._player.supportsPictureInPicture()){this._updateButtonState();this._player.on("webkitpresentationmodechanged",this._updateButtonState)
}};j._onClick=function(){this._player.setPictureInPicture(!this._player.isPictureInPicture())
};j._updateButtonState=function(){this._view.setState((this._player.isPictureInPicture())?"on":"off")
};k.exports=m},{"./ButtonBehavior":286}],290:[function(h,l,i){var m=h("./ButtonBehavior");
var k=function(b,a){m.apply(this,arguments);this._setPlayingState()};var j=k.prototype=Object.create(m.prototype);
j._addPlayerListeners=function(){this._player.on("play",this._setPlayingState=this._setPlayingState.bind(this));
this._player.on("pause",this._setPlayingState=this._setPlayingState.bind(this))
};j._onClick=function(){this._togglePlay()};j._setPlayingState=function(){this._view.setState((this._player.getPaused())?"paused":"playing")
};j._togglePlay=function(){if(this._player.getPaused()){this._player.play()}else{this._player.pause()
}};l.exports=k},{"./ButtonBehavior":286}],291:[function(i,n,j){var o=i("./BaseBehavior");
var k=i("@marcom/ac-string/supplant");var l=function(b,a){o.apply(this,arguments);
this._visible=false;this._ariaTextTemplate=a.localization.currenttimetext;this._onDurationChange()
};var m=l.prototype=Object.create(o.prototype);m._addViewListeners=function(){this._onSliderGrab=this._onSliderGrab.bind(this);
this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
this._view.on("grab",this._onSliderGrab)};m._addPlayerListeners=function(){this._onTimeUpdate=this._onTimeUpdate.bind(this);
this._onSeeking=this._onSeeking.bind(this);this._onSeeked=this._onSeeked.bind(this);
this._onEnded=this._updateSliderPosition.bind(this,0);this._onDurationChange=this._onDurationChange.bind(this);
this._player.on("durationchange",this._onDurationChange);this._player.on("seeking",this._onSeeking);
this._player.on("seeked",this._onSeeked);this._player.on("loadstart",this._onEnded);
this._player.on("ended",this._onEnded);this._player.on("timeupdate",this._onTimeUpdate)
};m._onSeeking=function(){this._seeking=true};m._onSeeked=function(){this._seeking=false
};m._onSliderGrab=function(){this._grabbing=true;this._player.off("timeupdate",this._onTimeUpdate);
this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
this._view.on("release",this._onSliderRelease)};m._onSliderRelease=function(){this._grabbing=false;
this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
this._view.on("grab",this._onSliderGrab);this._player.on("timeupdate",this._onTimeUpdate)
};m._onDurationChange=function(){this._view.setMin(0);this._view.setMax(this._player.getDuration());
this._updateSliderPosition(this._player.getCurrentTime())};m._onSliderChange=function(){var a=this._view.getValue();
this._setPlayerCurrentTime(a);this._setAriaValueText(a)};m._onTimeUpdate=function(){if(!this._isSeeking){this._updateSliderPosition(this._player.getCurrentTime())
}};m._updateSliderPosition=function(a){this._view.setValue(a);this._setAriaValueText(a);
if(!this._visible&&!isNaN(this._player.getDuration())){this._view.show();this._visible=true
}};m._setAriaValueText=function(c){var b=Math.floor(c/60);var a=Math.ceil(c%60);
this._view.setAriaValueText(k(this._ariaTextTemplate,{minutes:b,seconds:a}))};m._setPlayerCurrentTime=function(a){this._player.setCurrentTime(a)
};n.exports=l},{"./BaseBehavior":285,"@marcom/ac-string/supplant":266}],292:[function(h,l,i){var m=h("./BaseBehavior");
var k=function(b,a){m.apply(this,arguments);this._updateSliderVolumeValue()};var j=k.prototype=Object.create(m.prototype);
j._addViewListeners=function(){this._onSliderGrab=this._onSliderGrab.bind(this);
this._onSliderChange=this._onSliderChange.bind(this);this._onSliderRelease=this._onSliderRelease.bind(this);
this._view.on("grab",this._onSliderGrab)};j._addPlayerListeners=function(){this._updateSliderVolumeValue=this._updateSliderVolumeValue.bind(this);
this._player.once("durationchange",this._updateSliderVolumeValue);this._player.on("volumechange",this._updateSliderVolumeValue)
};j._onSliderGrab=function(){this._player.off("volumechange",this._updateSliderVolumeValue);
this._view.off("grab",this._onSliderGrab);this._view.on("change",this._onSliderChange);
this._view.on("release",this._onSliderRelease)};j._onSliderRelease=function(){this._setPlayerVolume(this._view.getValue());
this._view.off("change",this._onSliderChange);this._view.off("release",this._onSliderRelease);
this._view.on("grab",this._onSliderGrab);this._player.on("volumechange",this._updateSliderVolumeValue)
};j._onSliderChange=function(){var a=this._view.getValue();this._setPlayerVolume(a);
this._view.setScrubbedValue(a)};j._setPlayerVolume=function(a){if(a){this._player.setMuted(false)
}this._player.setVolume(a/100)};j._updateSliderVolumeValue=function(){if(this._player.getMuted()){this._view.setValue(0);
this._view.setScrubbedValue(0)}else{var a=this._player.getVolume();this._view.setValue(a*100);
this._view.setScrubbedValue(a*100)}};l.exports=k},{"./BaseBehavior":285}],293:[function(k,j,g){var i=k("../../dom-emitter/DOMEmitterMicro");
var h=function(a){this.el=a};h.prototype=Object.create(i.prototype);j.exports=h
},{"../../dom-emitter/DOMEmitterMicro":268}],294:[function(g,k,h){var i=function(a){this.el=a
};var j=i.prototype;j.setText=function(a){this.el.innerHTML=a;this.el.setAttribute("aria-value",a)
};k.exports=i},{}],295:[function(r,s,o){var m=r("@marcom/ac-slider").Slider;var l=r("@marcom/ac-classlist/add");
var k=r("@marcom/ac-classlist/remove");var q="ac-slider-inactive";var p=function(a,b){this.el=a;
this._min=b.min||0;this._max=b.max||1;if(b.mixins){var c=b.mixins.slice(0);while(c.length){Object.assign(this,c.pop())
}}this._slider=new m(this.el,{template:b.template,min:this._min,max:this._max,step:isNaN(+this.el.getAttribute("step"))?this.el.getAttribute("step"):+this.el.getAttribute("step"),value:(b.value!==undefined)?b.value:(+this.el.getAttribute("value")),keyboardContext:this.el});
this._slider.on("grab",this.forceCursorPointer.bind(this));this._slider.on("release",this.disableForcedCursorPointer.bind(this));
this._scrubbedEl=this.el.querySelector(".ac-slider-scrubbed");if(b.value){requestAnimationFrame(function(){this.setValue(b.value)
}.bind(this))}};var n=p.prototype;n.on=function(){return this._slider.on.apply(this._slider,arguments)
};n.off=function(){return this._slider.off.apply(this._slider,arguments)};n.setValue=function(a){return this._slider.setValue.call(this._slider,a)
};n.setAriaValueText=function(a){this._slider.el.setAttribute("aria-valuetext",a)
};n.setMin=function(a){this._min=a;this._slider.setMin(a)};n.setMax=function(a){this._max=a;
this._slider.setMax(a)};n.getValue=function(){return this._slider.getValue.apply(this._slider,arguments)
};n.setScrubbedValue=function(a){this._scrubbedEl.style.marginLeft=(a*100)+"%"};
n.show=function(){k(this.el,q)};n.hide=function(){l(this.el,q)};s.exports=p},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202,"@marcom/ac-slider":265}],296:[function(q,p,j){var k=q("./Button");
var n=q("@marcom/ac-classlist/add");var l=q("@marcom/ac-classlist/remove");var m=function(a,b){k.apply(this,arguments);
this._states=b.states||{};this._labels=b.labels;if(this._states&&this._states.initial){this.setState("initial")
}};var o=m.prototype=Object.create(k.prototype);o.setState=function(a){if(this._currentState&&this._currentState!==a&&this._states[this._currentState].length){l(this.el,this._states[this._currentState])
}this._currentState=a;if(this._labels&&this._labels[this._currentState]){this.el.value=this._labels[this._currentState];
this.el.setAttribute("aria-label",this._labels[this._currentState])}if(this._states[a].length){n(this.el,this._states[a])
}};p.exports=m},{"./Button":293,"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202}],297:[function(m,l,i){var h={add:m("@marcom/ac-classlist/add"),remove:m("@marcom/ac-classlist/remove")};
var k={addEventListener:m("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:m("@marcom/ac-dom-events/utils/removeEventListener"),preventDefault:m("@marcom/ac-dom-events/preventDefault")};
var j="cursor-pointer";l.exports={disableForcedCursorPointer:function(){h.remove(document.body,j);
this.onSelectStartResumeDefault()},forceCursorPointer:function(){h.add(document.body,j);
this.onSelectStartPreventDefault()},onSelectStartResumeDefault:function(){k.removeEventListener(document,"selectstart",this.preventDefault)
},onSelectStartPreventDefault:function(){k.addEventListener(document,"selectstart",this.preventDefault)
},preventDefault:function(a){k.preventDefault(a)}}},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202,"@marcom/ac-dom-events/preventDefault":9,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/removeEventListener":17}],298:[function(o,n,i){var j=function(c,a,b){return new a.classDef(c,Object.assign(a.options||{},b||{}))
};var l=function(a,b,c){return function(d){a[b](d,c)}};var k=function(E,F){var g=F.handlers||{};
var c={};for(var C in g){if(g.hasOwnProperty(C)){E.on(C,c[C]=l(g,C,E))}}var f=F.observe;
var H;if(f){var d=f.update;var A=f.source;var G=A.on.bind(A)||A.addEventListener;
var z=A.off.bind(A)||A.removeEventListener;var B=f.events;var b=0;var a=B.length;
var h=function(){d.call(f,E)};for(;b<a;b++){C=B[b];G(C,h)}H=function(){for(b=0;
b<a;b++){C=B[b];z(C,h)}}}var D=function(){for(var p in c){if(c.hasOwnProperty(p)){E.off(p,c[p])
}}if(H){H()}};return{destroy:D}};n.exports=function m(c,a,b){if(a.classDef){return j(c,a,b)
}else{return k(c,a,b)}}},{}],299:[function(r,t,p){var q=r("./createView");var s=r("./createBehavior");
var o=function(b,a){if(a.destroy){a.destroy()}if(b.destroy){b.destroy()}};var n=function(a){while(a.length){a.shift().destroy()
}};var l=function(b){for(var a in b){if(b.hasOwnProperty(a)){n(b[a]);delete b[a]
}}};var u=function(f,c,a){var b=q(f,c.view);var d=s(b,c.behavior,a);return{view:b,behavior:d,destroy:o.bind(null,b,d)}
};t.exports=function m(i,d,j){var b={};for(var k in d){if(d.hasOwnProperty(k)&&typeof d[k]==="object"){var g=d[k];
var h=(d.elementClassPrefix)?("."+d.elementClassPrefix+"-"+g.className):"."+g.className;
var f=i.querySelectorAll(h);b[k]=[];var c=0;var a=f.length;for(;c<a;c++){b[k].push(u(f[c],g,j))
}}}return{components:b,destroy:l.bind(null,b)}}},{"./createBehavior":298,"./createView":300}],300:[function(i,h,g){h.exports=function f(b,a){return new a.classDef(b,a.options)
}},{}],301:[function(d,g,f){g.exports={backthirtyseconds:"Back 30 Seconds",playpause:"Play/Pause",play:"Play",pause:"Pause",togglemutevolume:"Toggle Mute Volume",mutevolume:"Mute Volume",minvolume:"Minimum Volume",adjustvolume:"Adjust Volume",fastreverse:"Fast Reverse",fastforward:"Fast Forward",fullvolume:"Full Volume",fullscreen:"Full Screen",exitfullscreen:"Exit Full Screen",captionscontrol:"Closed Captions",captionsturnedon:"Closed Captions On",captionsturnedoff:"Closed Captions Off",subtitlescontrol:"Subtitles",subtitlesturnedon:"Subtitles On",subtitlesturnedoff:"Subtitles Off",sizescontrol:"Video Size",downloadcontrol:"Download Video",small:"Small",medium:"Medium",large:"Large",hd:"HD",ipod:"iPod/iPhone",mb:"MB",gb:"GB",tb:"TB",downloadquicktimetitle:"Get QuickTime.",downloadquicktimetext:"Download QuickTime to view this video. QuickTime is free for Mac + PC.",downloadquicktimebutton:"Download",downloadquicktimeurl:"http://www.apple.com/quicktime/download/",elapsed:"elapsed",remaining:"remaining",currenttimetext:"{minutes} minutes and {seconds} seconds",pictureinpicture:"Picture-in-Picture",exitpictureinpicture:"Exit Picture-in-Picture",novideosupportheadline:"Your browser doesn’t support playback of this video.",novideosupportdetails:"To watch it please use Safari, Firefox, Chrome, Internet Explorer 9 or later, or Microsoft Edge."}
},{}],302:[function(v,w,s){var q=v("./Translations");var r=v("./DefaultLabelStrings");
var t=document.getElementsByTagName("html")[0];var m=v("@marcom/ac-ajax-xhr");var u="m";
var p="/global/ac_"+u+"edia_player/scripts/ac_"+u+"edia_languages/";var n=function(b){var a=b||t.getAttribute("lang");
var c;if(!a){c="en-US"}else{switch(a.toLowerCase()){case"es-418":c="es-LA";break;
case"pt":c="pt-BR";break;default:c=a;break}}return c};var o=function(a){var b=n(a.lang);
var c=a.basePath||p;m.get(c+q[b],{success:function(d){a.callback(Object.assign(r,JSON.parse(d)))
},error:function(){a.callback(r)}})};w.exports={getLanguage:n,getTranslation:o}
},{"./DefaultLabelStrings":301,"./Translations":303,"@marcom/ac-ajax-xhr":237}],303:[function(d,g,f){g.exports={"bg-BG":"bg-BG.json","cs-CZ":"cs-CZ.json","el-GR":"el-GR.json","de-AT":"de-AT.json","de-CH":"de-CH.json","de-DE":"de-DE.json","de-LI":"de-LI.json","da-DK":"da-DK.json",en:"en.json","en-US":"en-US.json","en-AP":"en-AP.json","en-CA":"en-CA.json","en-GB":"en-GB.json","en-HK":"en-HK.json","en-IE":"en-IE.json","en-IN":"en-IN.json","en-KR":"en-KR.json","en-AU":"en-AU.json","en-NZ":"en-NZ.json","en-SG":"en-SG.json","en-ZA":"en-ZA.json",es:"es.json","es-LA":"es-LA.json","es-MX":"es-MX.json","es-ES":"es-ES.json","et-EE":"et-EE.json","fi-FI":"fi-FI.json",fr:"fr.json","fr-BE":"fr-BE.json","fr-CA":"fr-CA.json","fr-CH":"fr-CH.json","fr-FR":"fr-FR.json","hr-HR":"hr-HR.json","hu-HU":"hu-HU.json","it-IT":"it-IT.json",ja:"ja.json","ja-JP":"ja-JP.json","ko-KR":"ko-KR.json","lt-LT":"lt-LT.json","lv-LV":"lv-LV.json","nl-BE":"nl-BE.json","nl-NL":"nl-NL.json","no-NO":"no-NO.json","pl-PL":"pl-PL.json",pt:"pt.json","pt-BR":"pt-BR.json","pt-PT":"pt-PT.json","ro-RO":"ro-RO.json","ru-RU":"ru-RU.json","sk-SK":"sk-SK.json","sv-SE":"sv-SE.json","tr-TR":"tr-TR.json",zh:"zh.json","zh-CN":"zh-CN.json","zh-HK":"zh-HK.json","zh-TW":"zh-TW.json"}
},{}],304:[function(g,k,h){var i=g("@marcom/ac-string/supplant");var j={addLeadingZero:function(a,b){b=b||2;
if(a<10||b>2){a=String(a);while(a.length<b){a="0"+a}}return a},formatTime:function(a,d){if(isNaN(a)){return"00:00"
}a=this.splitTime(Math.floor(a),function(f){return this.addLeadingZero(f,d)}.bind(this));
var c="{PN}{minutes}:{seconds}";var b=i(c,{PN:a.negativeModifier,minutes:a.minutes,seconds:a.seconds});
return b},splitTime:function(a,d){d=d||function(f){return f};var b={negativeModifier:"",minutes:0,seconds:0};
if(isNaN(a)){return b}b.negativeModifier=(a<0)?"-":"";a=Math.abs(a);b.minutes=Math.floor(a/60);
b.seconds=(a%60);for(var c in b){if(typeof b[c]!=="number"){continue}b[c]=d(b[c])
}return b},stringToNumber:function(b){var a=0;var c=b.split(":");while(c.length){if(c.length===3){a+=parseFloat(c.shift())*3600
}else{if(c.length===2){a+=parseFloat(c.shift())*60}else{a+=parseFloat(c.shift())
}}}return a}};k.exports=j},{"@marcom/ac-string/supplant":266}],305:[function(g,k,h){var i=g("@marcom/ac-object/clone");
var j=function(){var c=Array.prototype.slice.call(arguments);if(c.length<2){return i(c[0])
}var d=i(c.shift(),true);var b=c.shift();for(var a in b){if(b.hasOwnProperty(a)){if(!d.hasOwnProperty(a)||typeof d[a]!=="object"){d[a]=b[a]
}else{if(typeof d[a]==="object"&&typeof b[a]==="object"){d[a]=j(d[a],b[a])}}}}if(c.length){return j.apply(null,[d].concat(c))
}else{return d}};k.exports=j},{"@marcom/ac-object/clone":483}],306:[function(d,g,f){g.exports=[{width:384,height:160,type:"baseline-high",suffix:"h"},{width:384,height:160,type:"small",suffix:"h"},{width:384,height:160,type:"baseline-low",suffix:"l"},{width:384,height:160,type:"baseline-medium",suffix:"m"},{width:480,height:200,type:"medium",suffix:"h"},{width:768,height:320,type:"large",suffix:""},{width:960,height:400,type:"large",suffix:""},{width:1536,height:640,type:"large",suffix:"h"},{width:1536,height:640,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"l"},{width:1920,height:800,type:"large",suffix:"h"}]
},{}],307:[function(d,g,f){g.exports=[{width:416,height:234,type:"baseline-high",suffix:"h"},{width:416,height:234,type:"small",suffix:"h"},{width:416,height:234,type:"baseline-low",suffix:"l"},{width:416,height:234,type:"baseline-medium",suffix:"m"},{width:640,height:360,type:"medium",suffix:"h"},{width:848,height:480,type:"large",suffix:""},{width:960,height:540,type:"large",suffix:""},{width:1280,height:720,type:"large",suffix:"h"},{width:1280,height:720,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"l"},{width:1920,height:1080,type:"large",suffix:"h"}]
},{}],308:[function(y,B,v){var C=y("@marcom/ac-string/supplant");var z=/_r[0-9].+\.mov$/;
var x=/_[0-9]+x[0-9].+\.mp4$/;var m=/-cc-[a-z].?-/;var u=/-tft-[a-z].?-/;var A="m";
var w="_{width}x{height}{suffix}."+A+"p4";var r=y("./16X9AssetSizes");var s=y("./12X5AssetSizes");
var q=function(g,b,j,d){var f;var c;if(g.match(u)){f=s;c=1536}else{f=r;c=1280}var i=f[0].width;
var h=(d&&d.maxWidth)?Math.max(d.maxWidth,i):c;if(!g){throw"Must provide an url to optimize"
}if(b===undefined||isNaN(b)){throw"Must provide a width"}if(j){f=f.filter(function(k){return k.type===j
})}if(h<1920){f=f.filter(function(k){return k.width<=h})}var a=f.reduce(function(l,k){return Math.abs(k.width-b)<Math.abs(l.width-b)?k:l
});if(g.match(x)){return g.replace(x,C(w,a))}else{if(g.match(z)){return g.replace(z,C(w,a))
}else{return g}}};var t=function(a){if(!a.match(m)){return null}if(a.match(x)){return{src:a.replace(x,"_cc.vtt"),srclang:(a.indexOf("-us-")!==-1)?"en":undefined}
}else{if(a.match(z)){return{src:a.replace(z,"_cc.vtt"),srclang:(a.indexOf("-us-")!==-1)?"en":undefined}
}else{return null}}};B.exports={getVideoSource:q,getCaptionsSource:t}},{"./12X5AssetSizes":306,"./16X9AssetSizes":307,"@marcom/ac-string/supplant":266}],309:[function(t,u,r){var o=t("../dom-emitter/DOMEmitterMicro");
var p=t("@marcom/ac-classlist/add");var m=t("../texttracks/createTextTracks");var s=t("@marcom/ac-console").log;
var n=window.document;var l=function(a){this._videoElement=(a&&a.mediaElement)?a.mediaElement:n.createElement("video");
this._textTracks=m(a);this._initElement();o.apply(this,[this._videoElement]);this._forwardCaptionEvent=this._forwardCaptionEvent.bind(this);
this._textTracksEmitter=this.getTextTracksEventEmitter();this._textTracksEmitter.on("addtrack",this._forwardCaptionEvent);
this._textTracksEmitter.on("change",this._forwardCaptionEvent);this._textTracksEmitter.on("removetrack",this._forwardCaptionEvent)
};var q=l.prototype=Object.create(o.prototype);q._initElement=function(){p(this._videoElement,"ac-video-media-controller");
this._videoElement.setAttribute("crossorigin","anonymous");this._videoElement.setAttribute("preload","auto");
this._videoElement.setAttribute("x-webkit-airplay","")};q._forwardCaptionEvent=function(a){this.trigger(a.type)
};q.load=function(a,b){this._createSourceTags(a);this._createTextTrackTags(b);this._videoElement.load()
};q._createSourceTags=function(c){this._videoElement.removeAttribute("src");this._videoElement.innerHTML="";
var a=0;var b=c.length;if(b){this._videoElement.setAttribute("src",c[0])}for(;a<b;
a++){var d=n.createElement("source");d.src=c[a];this._videoElement.appendChild(d)
}};q.play=function(){try{var a=this._videoElement.play();if(a&&typeof a["catch"]==="function"){a["catch"](function(c){})
}}catch(b){s(b)}};q.pause=function(){this._videoElement.pause()};q.destroy=function(){this._videoElement.innerHTML="";
this._videoElement=undefined};q.addTextTrack=function(a){this._addTextTrackTag(a)
};q.removeTextTrack=function(a){this._removeTextTrackTag(a)};q.getMediaElement=function(){return this._videoElement
};q._createTextTrackTags=function(){return this._textTracks.create.apply(this,arguments)
};q._addTextTrackTag=function(){return this._textTracks.add.apply(this,arguments)
};q._removeTextTrackTag=function(){return this._textTracks.remove.apply(this,arguments)
};q.getTextTracks=function(){return this._textTracks.get.apply(this,arguments)};
q.getTextTracksEventEmitter=function(){return this._textTracks.getEmitter.apply(this,arguments)
};q.getReadyState=function(){return this._videoElement.readyState};q.getPreload=function(){return this._videoElement.preload
};q.setPreload=function(a){return this._videoElement.preload=a};q.setPoster=function(a){this._videoElement.poster=a
};q.getVolume=function(){return this._videoElement.volume};q.getMuted=function(){return this._videoElement.muted
};q.getPaused=function(){return this._videoElement.paused};q.getCurrentTime=function(){return this._videoElement.currentTime
};q.getDuration=function(){return this._videoElement.duration};q.setCurrentTime=function(a){return this._videoElement.currentTime=a
};q.setVolume=function(a){return this._videoElement.volume=a};q.setMuted=function(a){this._videoElement.muted=a
};q.getEnded=function(){return this._videoElement.ended};q.setSrc=function(a){if(!this._videoElement.childNodes.length||a!==this._getSrcNode().url){this._createSourceTags([a])
}};q.getCurrentSrc=function(){return this._getSrcNode()};q._getSrcNode=function(){return this._videoElement.childNodes[0]
};q.setControls=function(a){if(!a){this._videoElement.removeAttribute("controls");
this._videoElement.setAttribute("aria-hidden","true")}else{this._videoElement.setAttribute("controls","");
this._videoElement.removeAttribute("aria-hidden")}};q.isFullscreen=function(){return this._videoElement.webkitDisplayingFullscreen
};q.supportsPictureInPicture=function(){return(typeof this._videoElement.webkitSetPresentationMode==="function")
};q.isPictureInPicture=function(){return(this._videoElement.webkitPresentationMode==="picture-in-picture")
};q.setPictureInPicture=function(a){if(!this.supportsPictureInPicture()){return
}this._videoElement.webkitSetPresentationMode((a)?"picture-in-picture":"inline")
};u.exports=l},{"../dom-emitter/DOMEmitterMicro":268,"../texttracks/createTextTracks":280,"@marcom/ac-classlist/add":196,"@marcom/ac-console":203}],310:[function(m,k,i){var l=m("./HTML5Video");
var h=function(){};var j=h.prototype;j.create=function(a,b){return new l(Object.assign({},a,{parentElement:b}))
};k.exports=Object.create(h.prototype)},{"./HTML5Video":309}],311:[function(d,g,f){g.exports={create:d("./factory/createFilms")}
},{"./factory/createFilms":316}],312:[function(v,w,u){var q;try{q=v("@marcom/ac-analytics")
}catch(o){}var s=v("@marcom/ac-useragent").browser;var r=s.ie||s.edge;var m=v("@marcom/ac-video/event-emitter-shim/EventEmitterShim");
var p=function(d,b,c){if(c){var a=function(){b.apply(c,arguments)};m.prototype.once.apply(this,[d,a])
}else{m.prototype.once.apply(this,arguments)}};function n(c,a,b){this.player=c;
this.sources={};this.currentStubPlayer=null;this.playerType="";this.videoType="";
this.options=a;if(b){this._bindAnchors(b)}}var t=n.prototype;t._bindAnchors=function(b){var c=0;
var a=b.length;for(;c<a;c++){this._bindAnchorForAnalytics(b[c])}};t.activate=function(){this._onPlay=this._onPlay.bind(this);
this._onEnded=this._onEnded.bind(this);this._onTimeupdate=this._onTimeupdate.bind(this);
this._onTexttrackshow=this._onTexttrackshow.bind(this);this._onLoadStart=this._onLoadStart.bind(this);
this.setCurrentStubPlayer=this.setCurrentStubPlayer.bind(this);if(r){this.player.on("playing",this._onPlay)
}else{this.player.on("play",this._onPlay)}this.player.on("ended",this._onEnded);
this.player.on("loadstart",this._onLoadStart);this.player.on("timeupdate",this._onTimeupdate);
this.player.on("texttrackshow",this._onTexttrackshow);this.player.on("durationchange",this.setCurrentStubPlayer)
};t.deactivate=function(){if(r){this.player.off("playing",this._onPlay)}else{this.player.off("play",this._onPlay)
}this.player.off("ended",this._onEnded);this.player.off("timeupdate",this._onTimeupdate);
this.player.off("texttrackshow",this._onTexttrackshow);this.player.off("durationchange",this.setCurrentStubPlayer)
};t._bindAnchorForAnalytics=function(a){var b;var c;if(a){if(this.sources[a.id]){return
}b=this._createStubPlayer(a);c=a.getAttribute("data-"+this.options.dataAttribute);
if(!c){b.videoId=a.id}this.sources[a.id]={stubPlayer:b,observer:this._createObserver(b)}
}};t.addSourceObject=t._bindAnchorForAnalytics;t.setCurrentStubPlayer=function(){var d;
var b=this.player.el;var c=b.getAttribute("data-"+this.options.dataAttribute);var a=this._getCurrentSourceObject(c);
if(a&&a.stubPlayer){this.currentStubPlayer=a.stubPlayer;this.playerType="html5";
d=this.player.getCurrentSrc();if(d&&d.attributes&&d.attributes.src){this.videoType=d.attributes.src.value.split(".").pop()
}}};t.destroy=function(){this.deactivate();this.player=null;this.sources=null;this.currentStubPlayer=null;
this.options=null};t._onPlay=function(){this.setCurrentStubPlayer();if(!this._started){this._proxyEvent("play");
this._started=true}};t._onLoadStart=function(){this._started=false};t._onEnded=function(){this._started=false;
this._proxyEvent("ended")};t._onTimeupdate=function(){this._proxyEvent("timeupdate");
if(this._started&&this.player.getCurrentTime()===0&&this.player.getPaused()){this._started=false
}};t._onTexttrackshow=function(){this._proxyEvent("captions-enabled")};t._getSourceObjectBySrcObjId=function(a){return this.sources[a]||null
};t._getCurrentSourceObject=function(a){var b;if(a){b=this._getSourceObjectBySrcObjId(a)
}return b};t._createStubPlayer=function(a){var b=new m();b.once=p;b.el=a;return b
};t._getEventData=function(){return{currentTime:this.player.getCurrentTime(),playerType:(this.playerType||"html5"),videoType:(this.videoType||null)}
};t._createObserver=function(b){var a;if(q&&q.observer&&q.observer.Video){a=new q.observer.Video(b,{dataAttribute:this.options.dataAttribute})
}return a};t._proxyEvent=function(a){if(this.currentStubPlayer){this.currentStubPlayer.trigger(a,this._getEventData())
}};w.exports=n},{"@marcom/ac-analytics":"@marcom/ac-analytics","@marcom/ac-useragent":502,"@marcom/ac-video/event-emitter-shim/EventEmitterShim":269}],313:[function(q,p,k){var m=q("@marcom/ac-dom-events/utils/addEventListener");
var j=q("@marcom/ac-dom-events/preventDefault");var o=q("../windowload/windowLoad");
var n=q("../touchclick/TouchClick");p.exports=function l(a,f,c,b){var d=n.create(a);
d.on("click",function(){f(a)});if(b&&a.id){b.createRoute(a.id,function(){o(function(){f(a)
})})}}},{"../touchclick/TouchClick":322,"../windowload/windowLoad":323,"@marcom/ac-dom-events/preventDefault":9,"@marcom/ac-dom-events/utils/addEventListener":15}],314:[function(K,O,w){var x=K("@marcom/ac-router").Router;
var C=K("@marcom/ac-video").Player;var F=K("@marcom/ac-video/optimizeVideoUrl");
var z=K("@marcom/ac-useragent").browser;var y=K("@marcom/ac-useragent");var L=K("./bindAnchor");
var v=K("./createClickHandler");var B=K("./createModalLink");var I=K("./createNoSupportModalLink");
var H=K("./createHandheldModalLink");var A=K("./createInlineLink");var G=K("@marcom/ac-feature/isHandheld")();
var J=z.ie&&z.version.major<=8;var D=y.os.ios;var E=K("@marcom/ac-object/defaults");
var N={controls:true,urlOptimizer:F};O.exports=function M(i,g){g=g||{};g=E(N,g);
var b;var a=C.create(g);var h;b=new x({hashChange:true,pushState:false});if(g.modal&&!J&&(!G||!D)){h=B(a,g)
}else{if(g.modal&&J){h=I(a,g)}else{if(g.modal){h=H(a,document.body,g)}else{h=A(a,g)
}}}var c=h.play.bind(h);var d=function(j){var k=0;var l=i.length;for(;k<l;k++){if(i[k].id===j||i[k]===j){c(i[k].href)
}}};var f=v({player:a,playHandler:c,attr:"data-"+g.dataAttribute});i.forEach(function(j){L(j,f,c,b)
});b.start();return{play:d,player:a,modalVideo:h.modal}}},{"./bindAnchor":313,"./createClickHandler":315,"./createHandheldModalLink":317,"./createInlineLink":318,"./createModalLink":319,"./createNoSupportModalLink":320,"@marcom/ac-feature/isHandheld":185,"@marcom/ac-object/defaults":485,"@marcom/ac-router":234,"@marcom/ac-useragent":502,"@marcom/ac-video":267,"@marcom/ac-video/optimizeVideoUrl":270}],315:[function(i,h,f){h.exports=function g(a){return function(b){a.player.el.setAttribute(a.attr,b.getAttribute(a.attr)||b.id);
a.playHandler(b.href)}}},{}],316:[function(o,n,i){var l=o("./bindAnchors");var m=o("../analytics/AnalyticsTranslator");
var k={dataAttribute:"analytics-video-id",analytics:true};n.exports=function j(b,c){c=c||{};
c=Object.assign({},k,c);var a=l(b,c);if(c.analytics){var d=new m(a.player,c,b);
d.activate()}return a}},{"../analytics/AnalyticsTranslator":312,"./bindAnchors":314}],317:[function(o,p,n){var l=o("@marcom/ac-classlist/add");
var k=o("@marcom/ac-classlist/remove");var r="ac-player-handheld";var m="player-fullscreen";
var s=document.documentElement;p.exports=function q(d,a,b){l(s,r);var c=function(g){var f=function(){if(!d.getPaused()){d.pause()
}k(d.el,m)};l(d.el,m);d.once("ended",f);d.once("exitfullscreen",f);d.load(g);d.play()
};a.appendChild(d.el);return{play:c,player:d}}},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/remove":202}],318:[function(f,i,g){i.exports=function h(a,b){var c=b.targetElement;
var d=function(k){a.load(k);a.play()};b.playHandler=d;if(c){c.appendChild(a.el)
}return{play:d,player:a}}},{}],319:[function(o,n,p){var l=o("@marcom/ac-classlist/add");
var j=o("@marcom/ac-modal").createFullViewportModal;var m=o("./link/ModalLink");
var k="ac-modal-video";n.exports=function q(c,d){var a=j(c.el);l(a.modalElement,k);
var b=new m({player:c,modal:a});return b}},{"./link/ModalLink":321,"@marcom/ac-classlist/add":196,"@marcom/ac-modal":217}],320:[function(n,m,o){var l=n("@marcom/ac-classlist/add");
var j=n("@marcom/ac-modal").createFullViewportModal;var p=n("@marcom/ac-dom-traversal/querySelector");
var k="ac-modal-video";m.exports=function q(a,b){var f=j(a.el);l(f.modalElement,k);
var g=0;var c;f.on("open",function(){var h=p(".modal-close",f.el);setTimeout(function(){h.className=h.className
},0);c=setInterval(function(){g++;h.className=h.className;if(g>10){clearInterval(c);
g=0}},300)});var d=function(h){f.open()};f.on("willclose",function(){if(c){clearInterval(c);
g=0}});return{play:d,modal:f,player:a}}},{"@marcom/ac-classlist/add":196,"@marcom/ac-dom-traversal/querySelector":64,"@marcom/ac-modal":217}],321:[function(B,C,y){var u=B("@marcom/ac-classlist/add");
var s=B("@marcom/ac-classlist/remove");var A=B("@marcom/ac-classlist/contains");
var t="-tft-";var v="ac-films-modal-cinematic-aspect-ratio";var D="ac-video-cinematic-aspect-ratio";
var w="ac-modal-video-pip";var r="pictureinpicture:change";var E="has-modal";var z=B("@marcom/ac-console").log;
var q=function(a){this.modal=a.modal;this.player=a.player;this._ended=false;this._pauseTime=0;
this._playing=false;this._initialize()};var x=q.prototype;x._initialize=function(){this._bindMethods();
this.player.on("ended",this._onEnded);this.player.on("pause",this._onPaused);if(this.player.supportsPictureInPicture()){this.player.on(r,this._onPipModeChanged)
}};x._bindMethods=function(){this._onEnded=this._onEnded.bind(this);this._onPipModeChanged=this._onPipModeChanged.bind(this);
this._onPaused=this._onPaused.bind(this);this._onModalWillClose=this._onModalWillClose.bind(this)
};x._onPaused=function(){this._pauseTime=Date.now()};x._onEnded=function(){this._ended=true;
if(!this.player.isPictureInPicture()){this.modal.close()}else{this.player.setPictureInPicture(false);
s(this.modal.modalElement,w)}};x._onPipModeChanged=function(){if(this._ended){return
}if(this.player.isPictureInPicture()&&this._isModalOpen()){this._unBindWillClose();
u(this.modal.modalElement,w);this.modal.close()}else{if(!this._isModalOpen()){s(this.modal.modalElement,w);
if(!this._pauseTime||(Date.now()-this._pauseTime)>400){this._bindWillClose();this.modal.open()
}else{this._resetVideo()}}}};x._resetVideo=function(){this.player.pause();this.player.setCurrentTime(0)
};x._onModalWillClose=function(){this._unBindWillClose();this._resetVideo();this.player.setPictureInPicture(false);
s(this.modal.modalElement,w)};x._setCinematicMode=function(a){if(a){u(this.player.el,D)
}else{s(this.player.el,D)}};x._resetPiPVideo=function(){var a=this.player.getVisibleTextTracks();
a.forEach(function(b){b.mode="hidden"});this._resetVideo();a.forEach(function(b){b.mode="showing"
})};x.play=function(a){this._ended=false;this._setCinematicMode(a.match(t));if(!this.player.isPictureInPicture()){this.modal.open();
this._bindWillClose()}else{this._resetPiPVideo()}this.player.load(a);this.player.play()
};x._bindWillClose=function(){this.modal.on("willclose",this._onModalWillClose)
};x._unBindWillClose=function(){this.modal.off("willclose",this._onModalWillClose)
};x._isModalOpen=function(){return A(document.documentElement,E)};x.destroy=function(){this.player.off("ended",this._onEnded);
this.player.off("paused",this._onPaused);this.player.off(r,this._onPipModeChanged);
this._unBindWillClose();this.modal.destroy();this.player.destroy()};C.exports=q
},{"@marcom/ac-classlist/add":196,"@marcom/ac-classlist/contains":201,"@marcom/ac-classlist/remove":202,"@marcom/ac-console":203}],322:[function(j,p,k){var l={addEventListener:j("@marcom/ac-dom-events/utils/addEventListener"),removeEventListener:j("@marcom/ac-dom-events/utils/addEventListener"),stop:j("@marcom/ac-dom-events/stop")};
var n=j("@marcom/ac-event-emitter-micro").EventEmitterMicro;var q=j("@marcom/ac-feature/touchAvailable")();
j("@marcom/ac-polyfills/Object/create");function m(a){a=a||{};this.el=a.el;this._onTouchStart=this._onTouchStart.bind(this);
this._onTouchMove=this._onTouchMove.bind(this);this._onTouchEnd=this._onTouchEnd.bind(this);
this._onClick=this._onClick.bind(this);this._touchStart=false;n.call(this);this.activate()
}var o=m.prototype=Object.create(n.prototype);o._broadcastClick=function(a){this.trigger("click",{originalEvent:a})
};o._onClick=function(a){l.stop(a);if(!q){this._broadcastClick(a)}};o._onTouchStart=function(){this._touchStart=true
};o._onTouchEnd=function(a){if(this._touchStart===true){l.stop(a);this._broadcastClick(a)
}this._touchStart=false};o._onTouchMove=function(){this._touchStart=false};o.activate=function(){if(q){l.addEventListener(this.el,"touchstart",this._onTouchStart);
l.addEventListener(this.el,"touchmove",this._onTouchMove);l.addEventListener(this.el,"touchend",this._onTouchEnd)
}l.addEventListener(this.el,"click",this._onClick)};o.deactivate=function(){l.removeEventListener(this.el,"touchstart",this._onTouchStart);
l.removeEventListener(this.el,"touchmove",this._onTouchMove);l.removeEventListener(this.el,"touchend",this._onTouchEnd);
l.removeEventListener(this.el,"click",this._onClick)};m.create=function(a,b){b=b||{};
return new m({el:a})};p.exports=m},{"@marcom/ac-dom-events/stop":12,"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-event-emitter-micro":205,"@marcom/ac-feature/touchAvailable":194,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],323:[function(m,l,h){var i=false;
var j=m("@marcom/ac-dom-events");j.addEventListener(window,"load",function(){i=true
});function k(a){if(i){a()}else{j.addEventListener(window,"load",a)}}l.exports=k
},{"@marcom/ac-dom-events":3}],324:[function(d,g,f){arguments[4][203][0].apply(f,arguments)
},{"./ac-console/log":325,dup:203}],325:[function(d,g,f){arguments[4][204][0].apply(f,arguments)
},{dup:204}],326:[function(d,g,f){arguments[4][250][0].apply(f,arguments)},{"./utils/getBoundingClientRect":337,dup:250}],327:[function(d,g,f){arguments[4][96][0].apply(f,arguments)
},{"./utils/getBoundingClientRect":337,dup:96}],328:[function(d,g,f){arguments[4][252][0].apply(f,arguments)
},{"./getDimensions":327,"./getScrollX":332,"./getScrollY":333,"./utils/getBoundingClientRect":337,dup:252}],329:[function(d,g,f){arguments[4][253][0].apply(f,arguments)
},{"./getDimensions":327,"./getPixelsInViewport":330,dup:253}],330:[function(d,g,f){arguments[4][254][0].apply(f,arguments)
},{"./getViewportPosition":334,dup:254}],331:[function(d,g,f){arguments[4][255][0].apply(f,arguments)
},{"./getDimensions":327,"./utils/getBoundingClientRect":337,dup:255}],332:[function(d,g,f){arguments[4][211][0].apply(f,arguments)
},{dup:211}],333:[function(d,g,f){arguments[4][212][0].apply(f,arguments)},{dup:212}],334:[function(d,g,f){arguments[4][258][0].apply(f,arguments)
},{"./getPagePosition":328,"./getScrollX":332,"./getScrollY":333,"./utils/getBoundingClientRect":337,dup:258}],335:[function(d,g,f){arguments[4][259][0].apply(f,arguments)
},{"./getContentDimensions":326,"./getDimensions":327,"./getPagePosition":328,"./getPercentInViewport":329,"./getPixelsInViewport":330,"./getPosition":331,"./getScrollX":332,"./getScrollY":333,"./getViewportPosition":334,"./isInViewport":336,dup:259}],336:[function(d,g,f){arguments[4][260][0].apply(f,arguments)
},{"./getPercentInViewport":329,"./getPixelsInViewport":330,dup:260}],337:[function(d,g,f){arguments[4][97][0].apply(f,arguments)
},{dup:97}],338:[function(f,h,g){var i=f("./ac-element-engagement/ElementEngagement");
h.exports=new i();h.exports.ElementEngagement=i},{"./ac-element-engagement/ElementEngagement":339}],339:[function(s,t,q){var p;
var l=s("@marcom/ac-event-emitter-micro").EventEmitterMicro;var r={create:s("@marcom/ac-object/create"),defaults:s("@marcom/ac-object/defaults"),extend:s("@marcom/ac-object/extend")};
var o=s("@marcom/ac-element-tracker").ElementTracker;var m={timeToEngage:500,inViewThreshold:0.75,stopOnEngaged:true};
var n={thresholdEnterTime:0,thresholdExitTime:0,inThreshold:false,engaged:false,tracking:true};
var u=function(){o.call(this);l.call(this);this._thresholdEnter=this._thresholdEnter.bind(this);
this._thresholdExit=this._thresholdExit.bind(this);this._enterView=this._enterView.bind(this);
this._exitView=this._exitView.bind(this)};p=u.prototype=r.create(o.prototype);p=r.extend(p,l.prototype);
p._decorateTrackedElement=function(a,b){var c;c=r.defaults(m,b||{});r.extend(a,c);
r.extend(a,n)};p._attachElementListeners=function(a){a.on("thresholdenter",this._thresholdEnter,this);
a.on("thresholdexit",this._thresholdExit,this);a.on("enterview",this._enterView,this);
a.on("exitview",this._exitView,this)};p._removeElementListeners=function(a){a.off("thresholdenter",this._thresholdEnter);
a.off("thresholdexit",this._thresholdExit);a.off("enterview",this._enterView);a.off("exitview",this._exitView)
};p._attachAllElementListeners=function(){this.elements.forEach(function(a){if(!a.stopOnEngaged){this._attachElementListeners(a)
}else{if(!a.engaged){this._attachElementListeners(a)}}},this)};p._removeAllElementListeners=function(){this.elements.forEach(function(a){this._removeElementListeners(a)
},this)};p._elementInViewPastThreshold=function(c){var b=window.innerHeight||document.documentElement.clientHeight;
var a=false;if(c.pixelsInView===b){a=true}else{a=(c.percentInView>c.inViewThreshold)
}return a};p._ifInView=function(b,c){var a=b.inThreshold;o.prototype._ifInView.apply(this,arguments);
if(!a&&this._elementInViewPastThreshold(b)){b.inThreshold=true;b.trigger("thresholdenter",b);
if(typeof b.timeToEngage==="number"&&b.timeToEngage>=0){b.engagedTimeout=window.setTimeout(this._engaged.bind(this,b),b.timeToEngage)
}}};p._ifAlreadyInView=function(b){var a=b.inThreshold;o.prototype._ifAlreadyInView.apply(this,arguments);
if(a&&!this._elementInViewPastThreshold(b)){b.inThreshold=false;b.trigger("thresholdexit",b);
if(b.engagedTimeout){window.clearTimeout(b.engagedTimeout);b.engagedTimeout=null
}}};p._engaged=function(a){a.engagedTimeout=null;this._elementEngaged(a);a.trigger("engaged",a);
this.trigger("engaged",a)};p._thresholdEnter=function(a){a.thresholdEnterTime=Date.now();
a.thresholdExitTime=0;this.trigger("thresholdenter",a)};p._thresholdExit=function(a){a.thresholdExitTime=Date.now();
this.trigger("thresholdexit",a)};p._enterView=function(a){this.trigger("enterview",a)
};p._exitView=function(a){this.trigger("exitview",a)};p._elementEngaged=function(a){a.engaged=true;
if(a.stopOnEngaged){this.stop(a)}};p.stop=function(a){if(this.tracking&&!a){this._removeAllElementListeners();
o.prototype.stop.call(this)}if(a&&a.tracking){a.tracking=false;this._removeElementListeners(a)
}};p.start=function(a){if(!a){this._attachAllElementListeners()}if(a&&!a.tracking){if(!a.stopOnEngaged){a.tracking=true;
this._attachElementListeners(a)}else{if(!a.engaged){a.tracking=true;this._attachElementListeners(a)
}}}if(!this.tracking){o.prototype.start.call(this)}else{this.refreshAllElementMetrics();
this.refreshAllElementStates()}};p.addElement=function(c,b){var a=o.prototype.addElement.call(this,c);
this._decorateTrackedElement(a,b);return a};p.addElements=function(a,b){[].forEach.call(a,function(c){this.addElement(c,b)
},this)};t.exports=u},{"@marcom/ac-element-tracker":348,"@marcom/ac-event-emitter-micro":351,"@marcom/ac-object/create":484,"@marcom/ac-object/defaults":485,"@marcom/ac-object/extend":486}],340:[function(f,i,g){f("@marcom/ac-polyfills/Array/isArray");
f("@marcom/ac-polyfills/Array/prototype.forEach");i.exports=function h(a){var c=[];
var b=function(d){if(Array.isArray(d)){d.forEach(b)}else{c.push(d)}};a.forEach(b);
return c}},{"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray","@marcom/ac-polyfills/Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach"}],341:[function(d,g,f){g.exports={flatten:d("./flatten"),intersection:d("./intersection"),shuffle:d("./shuffle"),toArray:d("./toArray"),union:d("./union"),unique:d("./unique"),without:d("./without")}
},{"./flatten":340,"./intersection":342,"./shuffle":343,"./toArray":344,"./union":345,"./unique":346,"./without":347}],342:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
i.exports=function h(p){if(!p){return[]}var a=arguments.length;var c=0;var j=p.length;
var o=[];var b;for(c;c<j;c++){b=p[c];if(o.indexOf(b)>-1){continue}for(var d=1;d<a;
d++){if(arguments[d].indexOf(b)<0){break}}if(d===a){o.push(b)}}return o}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf"}],343:[function(f,i,g){i.exports=function h(a){var d=a.length;
var b;var c;while(d){b=Math.floor(Math.random()*d--);c=a[d];a[d]=a[b];a[b]=c}return a
}},{}],344:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(a){return Array.prototype.slice.call(a)
}},{"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],345:[function(i,n,j){var k=i("./flatten");
var o=i("./toArray");var l=i("./unique");n.exports=function m(a){return l(k(o(arguments)))
}},{"./flatten":340,"./toArray":344,"./unique":346}],346:[function(f,i,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.reduce");i.exports=function h(a){var b=function(d,c){if(d.indexOf(c)<0){d.push(c)
}return d};return a.reduce(b,[])}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.reduce":"@marcom/ac-polyfills/Array/prototype.reduce"}],347:[function(f,h,g){f("@marcom/ac-polyfills/Array/prototype.indexOf");
f("@marcom/ac-polyfills/Array/prototype.slice");h.exports=function i(q,r,a){var c;
var o=q.indexOf(r);var b=q.length;if(o>=0){if(a){c=q.slice(0,b);var d,p=0;for(d=o;
d<b;d++){if(q[d]===r){c.splice(d-p,1);p++}}}else{if(o===(b-1)){c=q.slice(0,(b-1))
}else{if(o===0){c=q.slice(1)}else{c=q.slice(0,o);c=c.concat(q.slice(o+1))}}}}else{return q
}return c}},{"@marcom/ac-polyfills/Array/prototype.indexOf":"@marcom/ac-polyfills/Array/prototype.indexOf","@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice"}],348:[function(f,i,g){var h=f("./ac-element-tracker/ElementTracker");
i.exports=new h();i.exports.ElementTracker=h},{"./ac-element-tracker/ElementTracker":349}],349:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
var n=v("@marcom/ac-array");var o=v("@marcom/ac-dom-nodes");var y={getDimensions:v("@marcom/ac-dom-metrics/getDimensions"),getPagePosition:v("@marcom/ac-dom-metrics/getPagePosition"),getScrollY:v("@marcom/ac-dom-metrics/getScrollY")};
var p=v("@marcom/ac-dom-events");var t=v("@marcom/ac-object");var q=v("./TrackedElement");
var u={autoStart:false};function x(a,b){this.options=t.clone(u);this.options=typeof b==="object"?t.extend(this.options,b):this.options;
this._scrollY=this._getScrollY();this._windowHeight=this._getWindowHeight();this.tracking=false;
this.elements=[];if(a&&(Array.isArray(a)||o.isNodeList(a)||o.isElement(a))){this.addElements(a)
}this.refreshAllElementStates=this.refreshAllElementStates.bind(this);this.refreshAllElementMetrics=this.refreshAllElementMetrics.bind(this);
if(this.options.autoStart){this.start()}}var r=x.prototype;r.destroy=function(){var a,b;
this.stop();for(a=0,b=this.elements.length;a<b;a++){this.elements[a].destroy()}this.elements=null;
this.options=null};r._registerElements=function(a){a=[].concat(a);a.forEach(function(b){if(this._elementInDOM(b)){var c=new q(b);
c.offsetTop=c.element.offsetTop;this.elements.push(c)}},this)};r._registerTrackedElements=function(b){var a=[].concat(b);
a.forEach(function(c){if(this._elementInDOM(c.element)){c.offsetTop=c.element.offsetTop;
this.elements.push(c)}},this)};r._elementInDOM=function(a){var b=false;var c=document.getElementsByTagName("body")[0];
if(o.isElement(a)&&c.contains(a)){b=true}return b};r._elementPercentInView=function(a){return a.pixelsInView/a.height
};r._elementPixelsInView=function(b){var c=b.top-this._scrollY;var a=b.bottom-this._scrollY;
if(c>this._windowHeight||a<0){return 0}return Math.min(a,this._windowHeight)-Math.max(c,0)
};r._ifInView=function(b,a){if(!a){b.trigger("enterview",b)}};r._ifAlreadyInView=function(a){if(!a.inView){a.trigger("exitview",a)
}};r.addElements=function(a){a=o.isNodeList(a)?n.toArray(a):[].concat(a);a.forEach(this.addElement,this)
};r.addElement=function(a){var b=null;if(o.isElement(a)){b=new q(a);this._registerTrackedElements(b);
this.refreshElementMetrics(b);this.refreshElementState(b)}else{throw new TypeError("ElementTracker: "+a+" is not a valid DOM element")
}return b};r.removeElement=function(a){var b=[];var c;this.elements.forEach(function(d,f){if(d===a||d.element===a){b.push(f)
}});c=this.elements.filter(function(d,f){return b.indexOf(f)<0});this.elements=c
};r.start=function(){if(this.tracking===false){this.tracking=true;p.addEventListener(window,"resize",this.refreshAllElementMetrics);
p.addEventListener(window,"orientationchange",this.refreshAllElementMetrics);p.addEventListener(window,"scroll",this.refreshAllElementStates);
this.refreshAllElementMetrics()}};r.stop=function(){if(this.tracking===true){this.tracking=false;
p.removeEventListener(window,"resize",this.refreshAllElementMetrics);p.removeEventListener(window,"orientationchange",this.refreshAllElementMetrics);
p.removeEventListener(window,"scroll",this.refreshAllElementStates)}};r.refreshAllElementMetrics=function(b,a){if(typeof b!=="number"){b=this._getScrollY()
}if(typeof a!=="number"){a=this._getWindowHeight()}this._scrollY=b;this._windowHeight=a;
this.elements.forEach(this.refreshElementMetrics,this)};r.refreshElementMetrics=function(b){var a=y.getDimensions(b.element);
var c=y.getPagePosition(b.element);b=t.extend(b,a,c);return this.refreshElementState(b)
};r.refreshAllElementStates=function(a){if(typeof a!=="number"){a=this._getScrollY()
}this._scrollY=a;this.elements.forEach(this.refreshElementState,this)};r.refreshElementState=function(b){var a=b.inView;
b.pixelsInView=this._elementPixelsInView(b);b.percentInView=this._elementPercentInView(b);
b.inView=b.pixelsInView>0;if(b.inView){this._ifInView(b,a)}if(a){this._ifAlreadyInView(b)
}return b};r._getWindowHeight=function(){return document.documentElement.clientHeight||window.innerHeight
};r._getScrollY=function(){return y.getScrollY()};w.exports=x},{"./TrackedElement":350,"@marcom/ac-array":341,"@marcom/ac-dom-events":3,"@marcom/ac-dom-metrics/getDimensions":327,"@marcom/ac-dom-metrics/getPagePosition":328,"@marcom/ac-dom-metrics/getScrollY":333,"@marcom/ac-dom-nodes":27,"@marcom/ac-object":482,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind"}],350:[function(r,s,q){var p=r("@marcom/ac-object").create;
var m=r("@marcom/ac-dom-nodes");var l=r("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var k=l.prototype;function n(a){if(!m.isElement(a)){throw new TypeError("TrackedElement: "+a+" is not a valid DOM element")
}l.call(this);this.element=a;this.inView=false;this.percentInView=0;this.pixelsInView=0;
this.offsetTop=0;this.top=0;this.right=0;this.bottom=0;this.left=0;this.width=0;
this.height=0}var o=n.prototype=p(k);o.destroy=function(){this.element=null;k.destroy.call(this)
};s.exports=n},{"@marcom/ac-dom-nodes":27,"@marcom/ac-event-emitter-micro":351,"@marcom/ac-object":482}],351:[function(d,g,f){arguments[4][205][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":352,dup:205}],352:[function(d,g,f){arguments[4][206][0].apply(f,arguments)
},{dup:206}],353:[function(v,w,s){v("@marcom/ac-polyfills/Function/prototype.bind");
v("@marcom/ac-polyfills/Object/keys");v("@marcom/ac-polyfills/Object/create");var m=v("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=v("@marcom/ac-dom-events/utils/addEventListener");var q=v("@marcom/ac-feature/mediaQueriesAvailable");
var u="viewport-emitter";var o="::before";var t="only screen and (-webkit-min-device-pixel-ratio: 1.5), screen and (min-resolution: 1.5dppx), screen and (min-resolution: 144dpi)";
function n(a){m.call(this);this._initializeElement(a);if(q()){this._updateViewport=this._updateViewport.bind(this);
p(window,"resize",this._updateViewport);p(window,"orientationchange",this._updateViewport);
this._retinaQuery=window.matchMedia(t);this._updateRetina();if(this._retinaQuery.addListener){this._updateRetina=this._updateRetina.bind(this);
this._retinaQuery.addListener(this._updateRetina)}}this._updateViewport()}var r=n.prototype=Object.create(m.prototype);
r.viewport=false;r.retina=false;r._initializeElement=function(b){var a;b=b||u;a=document.getElementById(b);
if(!a){a=document.createElement("div");a.id=b;a=document.body.appendChild(a)}this._el=a
};r._getElementContent=function(){var a;if("currentStyle" in this._el){a=this._el.currentStyle["x-content"]
}else{this._invalidateStyles();a=window.getComputedStyle(this._el,o).content}if(a){a=a.replace(/["']/g,"")
}if(a){return a}return false};r._updateViewport=function(){var a=this.viewport;
var c;var b;this.viewport=this._getElementContent();if(this.viewport){this.viewport=this.viewport.split(":").pop()
}if(a&&this.viewport!==a){b={from:a,to:this.viewport};this.trigger("change",b);
this.trigger("from:"+a,b);this.trigger("to:"+this.viewport,b)}};r._updateRetina=function(a){var b=this.retina;
this.retina=this._retinaQuery.matches;if(b!==this.retina){this.trigger("retinachange",{from:b,to:this.retina})
}};r._invalidateStyles=function(){document.documentElement.clientWidth;this._el.innerHTML=(this._el.innerHTML===" ")?" ":" ";
document.documentElement.clientWidth};w.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-event-emitter-micro":351,"@marcom/ac-feature/mediaQueriesAvailable":190,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-polyfills/Object/keys":"@marcom/ac-polyfills/Object/keys"}],354:[function(i,h,f){var g=i("./ViewportEmitter");
h.exports=new g()},{"./ViewportEmitter":353}],355:[function(o,n,i){o("@marcom/ac-polyfills/Object/create");
o("@marcom/ac-polyfills/Element/prototype.classList");var l=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var k=l.prototype;function j(a,g,f,b,d,h,c){if(arguments.length!==7){throw new Error("Incorrect number of arguments passed to BaseComponent check the constructor or BaseComponent.call method - argument's should be (section, componentElement, componentName, currentBreakpoint, scrollPosition, windowHeight, index)")
}l.call(this);this.section=a;this.element=g;this.componentName=f;this.index=c;this.isEnabled=true;
this.rafWhenVisible=this.rafWhenVisible||false}var m=j.prototype=Object.create(l.prototype);
j.prototype.constructor=j;m.destroy=function(){this.teardownEvents();this.section=null;
k.destroy.call(this)};m.setupEvents=function(){};m.teardownEvents=function(){};
m.onSectionWillAppear=function(b,a){};m.activate=function(){};m.animateIn=function(){};
m.onRequestAnimationFrame=function(){};m.deactivate=function(){};m.onScroll=function(b,c,a){};
m.onSectionWillDisappear=function(b,a){};m.onResizeDebounced=function(b,c,a){};
m.onResizeImmediate=function(b,c,a){};m.onOrientationChange=function(b,c,d,a){};
m.onBreakpoint=function(c,a,d,b){};m.onRetinaChange=function(a,c,d,b){};n.exports=j
},{"@marcom/ac-event-emitter-micro":351,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],356:[function(A,C,x){A("@marcom/ac-polyfills/Element/prototype.classList");
A("@marcom/ac-polyfills/Object/assign");A("@marcom/ac-polyfills/Object/assign");
A("@marcom/ac-polyfills/console.log");var w=A("@marcom/ac-dom-traversal/querySelector");
var D=A("@marcom/ac-dom-traversal/querySelectorAll");var u=A("@marcom/ac-dom-events/addEventListener");
var F=A("@marcom/ac-dom-events/removeEventListener");var E=A("@marcom/ac-element-tracker").ElementTracker;
var r=A("@marcom/ac-viewport-emitter");if(!r.viewport){console.log("Jetpack Error: Required module `ac-viewport-emitter` not initialized properly (missing required css styles). Please see `ac-viewport-emitter` documentation.");
console.log("Jetpack Error: Breakpoint will always be 'large' and no `onBreakPoint` events will be fired");
r=A("../utils/ViewportEmitterStub")()}var s=A("./LocalNavStyleChanger");var t=A("../utils/Page");
var G=A("../model/SectionMap");var y=A("../model/DataAttributes");var B=A("../model/EnabledFeatures");
function z(a){B.init();this.name=this.name||"[NOT SET]";this._mainEl=w("main,.main");
this._sections=[];this._visibleSections=[];this._elementTracker=new E(null,{autoStart:true});
this._currentSection=null;this._sectionUnderLocalNav=null;this._currentBreakpoint=r.viewport;
this.isRetina=r.retina;this._cachedScrollY=this._getScrollY(true);this._cachedWindowHeight=this._getWindowHeight(true);
this._rafId=-1;this._resizeTimeout=-1;this._resizeTimeoutDelay=this._resizeTimeoutDelay||250;
this.setupSections();this.setupEvents();this._updateSectionVisibility(this._getScrollY(),this._getWindowHeight());
this.setupLocalNavStyleChanger();this._updateLocalNavTheme(this._getScrollY(),this._getWindowHeight());
this._onRequestAnimationFrame()}var v=z.prototype;v.destroy=function(){for(var a=0,b=this._sections.length;
a<b;a++){this._sections[a].destroy()}this.teardownEvents();this._elementTracker.destroy();
this._elementTracker=null;this._sections=null;this._currentSection=null;this._sectionUnderLocalNav=null;
this._visibleSections=null;this._mainEl=null};v.setupEvents=function(){this._onScroll=this._onScroll.bind(this);
this._onBreakpoint=this._onBreakpoint.bind(this);this._onRetinaChange=this._onRetinaChange.bind(this);
this._onPageDidAppear=this._onPageDidAppear.bind(this);this._onResizeImmediate=this._onResizeImmediate.bind(this);
this._onOrientationChange=this._onOrientationChange.bind(this);this._onPageWillDisappear=this._onPageWillDisappear.bind(this);
this._onRequestAnimationFrame=this._onRequestAnimationFrame.bind(this);this.performDeepMetricsRefresh=this.performDeepMetricsRefresh.bind(this);
u(window,"scroll",this._onScroll);u(window,"resize",this._onResizeImmediate);u(window,"orientationchange",this._onOrientationChange);
r.on("change",this._onBreakpoint);r.on("retinachange",this._onRetinaChange);t.on(t.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh)
};v.teardownEvents=function(){F(window,"scroll",this._onScroll);F(window,"resize",this._onResizeImmediate);
F(window,"orientationchange",this._onOrientationChange);r.off("change",this._onBreakpoint);
r.off("retinachange",this._onRetinaChange);t.off(t.DEEP_REFRESH_ALL_METRICS,this.performDeepMetricsRefresh);
this._elementTracker.stop();clearTimeout(this._resizeTimeout);cancelAnimationFrame(this._rafId)
};v.setupSections=function(){var l=D("section,.section,[data-section-type]",this._mainEl);
var d=this._getScrollY();var m=this._getCurrentBreakpoint();var a=this._getWindowHeight();
var g=[];for(var j=0,h=l.length;j<h;j++){var i=l[j];if(i.parentNode!==this._mainEl){if(i.hasAttribute(y.SECTION_TYPE)){console.error("BasePage::setupSections FOUND NESTED data-section-type",i)
}g.push(i);continue}var f=this._elementTracker.addElement(i);this._elementTracker.refreshElementState(f);
var b=(i.hasAttribute(y.SECTION_TYPE))?i.getAttribute(y.SECTION_TYPE):"BaseSection";
if(b===""){b="BaseSection"}if(!G.hasOwnProperty(b)){throw"BasePage::setupSections parsing '#"+i.id+" ."+i.className+"' no section type '"+b+"'found!"
}var k=G[b];var c=new k(i,f,m,d,a,j);c.setupEvents();this._sections.push(c)}};v.setupLocalNavStyleChanger=function(){s.setCurrentSection(this._currentSection);
if(B.PAGE_JUMP){var a=this._mainEl.getAttribute("data-page-type");s.setCurrentPage(a)
}};v._activateSection=function(a){if(this._currentSection===a){return}if(this._currentSection){this._currentSection.deactivate()
}this._currentSection=a;this._currentSection.activate()};v._updateSectionVisibility=function(c,a){var h=this._sections[0];
var j=[];var d=0;for(var i=0,g=this._sections.length;i<g;i++){var b=this._sections[i];
var f=b.trackedElement.pixelsInView;if(b.isFixedHero){f=a-c}if(f>d){h=b;d=f}if(f>0.000001){j.push(b)
}}for(i=0,g=Math.max(this._visibleSections.length,j.length);i<g;i++){if(this._visibleSections[i]&&j.indexOf(this._visibleSections[i])===-1){this._visibleSections[i].onSectionWillDisappear(c,a)
}if(j[i]&&this._visibleSections.indexOf(j[i])===-1){j[i].onSectionWillAppear(c,a)
}}this._visibleSections=j;this._activateSection(h)};v._updateLocalNavTheme=function(c,a){this._sectionUnderLocalNav=this._visibleSections[0];
for(var b=0,d=this._visibleSections.length;b<d;b++){if(c+s.height>this._visibleSections[b].scrollToPosition){this._sectionUnderLocalNav=this._visibleSections[b]
}}if(this._sectionUnderLocalNav){s.setCurrentSection(this._sectionUnderLocalNav)
}};v._onPageDidAppear=function(a){};v._onPageWillDisappear=function(a){this.destroy()
};v._onBreakpoint=function(b){var g=b.to;var d=b.from;this._currentBreakpoint=g;
var f=this._getScrollY();var a=this._getWindowHeight();this._elementTracker.refreshAllElementMetrics(f,a);
for(var c=0,h=this._sections.length;c<h;c++){this._sections[c].onBreakpoint(g,d,f,a)
}};v._onRetinaChange=function(b){var f=this._getScrollY(true);var a=this._getWindowHeight(true);
this.isRetina=r.retina;var c=this._currentBreakpoint;this._elementTracker.refreshAllElementMetrics(f,a);
for(var d=0,g=this._sections.length;d<g;d++){this._sections[d].onRetinaChange(this.isRetina,c,f,a)
}};v._onScroll=function(b){var d=this._getScrollY(true);var a=this._getWindowHeight();
this._updateSectionVisibility(d,a);this._updateLocalNavTheme(d,a);for(var c=0,f=this._visibleSections.length;
c<f;c++){this._visibleSections[c].onScroll(b,d,a)}};v._onResizeDebounced=function(b){var f=this._getScrollY();
var a=this._getWindowHeight();var c=false;for(var d=0,g=this._sections.length;d<g;
d++){if(!c&&this._sections[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._sections[d].onResizeDebounced(b,f,a)}this._updateSectionVisibility(f,a);
this._updateLocalNavTheme(f,a)};v.performDeepMetricsRefresh=function(){var c=this._getScrollY();
var a=this._getWindowHeight();this._elementTracker.refreshAllElementMetrics(c,a);
for(var b=0,d=this._sections.length;b<d;b++){this._sections[b].elementEngagement.refreshAllElementMetrics(c,a);
this._sections[b].updateScrollToPosition()}var c=this._getScrollY();var a=this._getWindowHeight();
this._updateSectionVisibility(c,a);this._updateLocalNavTheme(c,a)};v._onOrientationChange=function(b){var d=this._getScrollY(true);
var a=this._getWindowHeight(true);var f=b.orientation;for(var c=0,g=this._sections.length;
c<g;c++){this._sections[c].onOrientationChange(b,f,d,a)}};v._onResizeImmediate=function(b){var f=this._getScrollY();
var a=this._getWindowHeight(true);var c=false;for(var d=0,g=this._sections.length;
d<g;d++){if(!c&&this._sections[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._sections[d].onResizeImmediate(b,f,a)}window.clearTimeout(this._resizeTimeout);
this._resizeTimeout=window.setTimeout(this._onResizeDebounced.bind(this,b),this._resizeTimeoutDelay)
};v._onRequestAnimationFrame=function(){this._rafId=requestAnimationFrame(this._onRequestAnimationFrame);
for(var b=0,c=this._visibleSections.length;b<c;b++){var a=this._visibleSections[b];
if(a.rafWhenVisible||a.isActive){a.onRequestAnimationFrame()}}};v._getScrollY=function(a){if(a){this._cachedScrollY=window.pageYOffset||(document.documentElement||document.body).scrollTop
}return this._cachedScrollY};v._getWindowHeight=function(a){if(a){this._cachedWindowHeight=document.documentElement.clientHeight||window.innerHeight
}return this._cachedWindowHeight};v._getVisibleBottomOfPage=function(){return this._getScrollY()+this._getWindowHeight()
};v._getCurrentBreakpoint=function(){return this._currentBreakpoint};C.exports=z
},{"../model/DataAttributes":360,"../model/EnabledFeatures":361,"../model/SectionMap":362,"../utils/Page":363,"../utils/ViewportEmitterStub":364,"./LocalNavStyleChanger":358,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-events/removeEventListener":10,"@marcom/ac-dom-traversal/querySelector":64,"@marcom/ac-dom-traversal/querySelectorAll":65,"@marcom/ac-element-tracker":348,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/assign":"@marcom/ac-polyfills/Object/assign","@marcom/ac-polyfills/console.log":"@marcom/ac-polyfills/console.log","@marcom/ac-viewport-emitter":354}],357:[function(y,z,v){y("@marcom/ac-polyfills/Object/create");
y("@marcom/ac-polyfills/Element/prototype.classList");var C=y("@marcom/ac-console");
var r=y("@marcom/ac-dom-metrics");var B=y("@marcom/ac-element-engagement").ElementEngagement;
var A=y("@marcom/ac-dom-traversal/querySelectorAll");var w=y("./../model/DataAttributes");
var u=y("./../model/ComponentMap");var x=y("./BaseComponent");var q=y("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var p=q.prototype;function s(b,c,d,g,a,f){if(arguments.length!==6){throw new Error("Incorrect number of arguments passed to BaseSection")
}q.call(this);this.element=b;this.trackedElement=c;this.elementEngagement=new B(null,{autoStart:false});
this.rafWhenVisible=this.rafWhenVisible||false;this.index=f;this.isVisible=this.trackedElement.pixelsInView>0;
this.hasAnimatedIn=false;this.isActive=false;this.isFixedHero=false;this.cachedBreakpoint=d;
this.cachedScrollPosition=g;this.cachedWindowHeight=a;this.name=this.name||this.element.className;
this.scrollToPosition=0;this.updateScrollToPosition();this._components=[];this.setupComponents(d,g,a);
this.setIsFixedHero();this.performDeprecatedMethodCheck()}var t=s.prototype=Object.create(q.prototype);
s.prototype.constructor=s;t.performDeprecatedMethodCheck=function(){if(this["onViewWillAppear"]){throw new Error("Section.onViewWillAppear is now `onSectionWillAppear`, please update your BaseSection subclass")
}if(this["onViewWillDisappear"]){throw new Error("Section.onViewWillDisappear is now `onSectionWillDisappear`, please update your BaseSection subclass")
}return true};t.destroy=function(){this.teardownEvents();this.elementEngagement.stop();
this.elementEngagement=null;for(var a=0,b=this._components.length;a<b;a++){this._components[a].destroy()
}this._components=null;this.trackedElement=null;this.element=null;p.destroy.call(this)
};t.setupEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].setupEvents()
}};t.teardownEvents=function(){for(var a=0,b=this._components.length;a<b;a++){this._components[a].teardownEvents()
}};t.setupComponents=function(){var c=A("["+w.COMPONENT_LIST+"]",this.element);
if(this.element.hasAttribute(w.COMPONENT_LIST)){c.push(this.element)}for(var f=0;
f<c.length;f++){var a=c[f];var b=a.getAttribute(w.COMPONENT_LIST);if(b.indexOf("|")!==-1){throw"BaseSection::setupComponents component list should be space delimited, pipe character is no longer supported. Error at: '"+b+"'"
}var d=b.split(" ");for(var g=0,i=d.length;g<i;g++){var h=d[g];if(h===""||h===" "){continue
}this.addComponentOfType(h,a)}setTimeout(this.elementEngagement.refreshAllElementStates.bind(this.elementEngagement),100)
}};t.addComponentOfType=function(c,a){if(!u.hasOwnProperty(c)){throw"BaseSection::setupComponents parsing '#"+a.id+" ."+a.className+"' no component type '"+c+"'found!"
}var b=u[c];if(!this.componentIsSupported(b,c)){C.log("BaseSection::setupComponents unsupported component '"+c+"'. Reason: '"+c+".IS_SUPPORTED' returned false");
return}var d=new b(this,a,c,this.cachedBreakpoint,this.cachedScrollPosition,this.cachedWindowHeight,this._components.length);
this.rafWhenVisible=d.rafWhenVisible||this.rafWhenVisible;this._components.push(d)
};t.removeComponentOfType=function(b){var a=this.getComponentOfType(b);if(a===null){return
}this.removeComponent(a)};t.removeComponent=function(a){var b=this._components.indexOf(a);
if(b===-1){return}this._components.splice(b,1);a.destroy()};t.activate=function(){this.element.classList.add("active");
for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].activate()}this.isActive=true;if(!this.hasAnimatedIn){this.element.classList.add("animated");
this.animateIn();this.hasAnimatedIn=true}};t.deactivate=function(){this.element.classList.remove("active");
this.isActive=false;for(var a=0,b=this._components.length;a<b;a++){if(!this._components[a].isEnabled){continue
}this._components[a].deactivate()}};t.animateIn=function(){for(var a=0,b=this._components.length;
a<b;a++){if(!this._components[a].isEnabled){continue}this._components[a].animateIn()
}};t.onRequestAnimationFrame=function(){for(var a=0,c=this._components.length;a<c;
a++){var b=this._components[a];if(!b.isEnabled){continue}if(b.rafWhenVisible||this.isActive){b.onRequestAnimationFrame()
}}};t.onResizeImmediate=function(b,f,a){this.cachedScrollPosition=f;this.cachedWindowHeight=a;
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResizeWillBeCalledAfterDelay"]){console.warn("Jetpack: onResizeWillBeCalledAfterDelay has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeImmediate(b,f,a)}};t.onResizeDebounced=function(b,f,a){this.updateScrollToPosition();
var c=false;for(var d=0,g=this._components.length;d<g;d++){if(!this._components[d].isEnabled){continue
}if(!c&&this._components[d]["onResize"]){console.warn("Jetpack: onResize has been removed please use `onResizeImmediate` or `onResizeDebounced` instead.");
c=true}this._components[d].onResizeDebounced(b,f,a)}this.elementEngagement.refreshAllElementMetrics(f,a)
};t.onBreakpoint=function(d,a,f,b){this.cachedBreakpoint=d;for(var c=0,g=this._components.length;
c<g;c++){if(!this._components[c].isEnabled){continue}this._components[c].onBreakpoint(d,a,f,b)
}this.elementEngagement.refreshAllElementMetrics(f,b)};t.onRetinaChange=function(a,c,f,b){for(var d=0,g=this._components.length;
d<g;d++){if(!this._components[d].isEnabled){continue}this._components[d].onRetinaChange(a,c,f,b)
}this.elementEngagement.refreshAllElementMetrics(f,b)};t.onOrientationChange=function(b,d,f,a){this.cachedScrollPosition=f;
this.cachedWindowHeight=a;for(var c=0,g=this._components.length;c<g;c++){if(!this._components[c].isEnabled){continue
}this._components[c].onOrientationChange(b,d,f,a)}};t.onScroll=function(b,d,a){this.cachedScrollPosition=d;
this.elementEngagement.refreshAllElementStates(d);for(var c=0,f=this._components.length;
c<f;c++){if(!this._components[c].isEnabled){continue}this._components[c].onScroll(b,d,a)
}};t.onSectionWillAppear=function(c,a){this.cachedScrollPosition=c;this.isVisible=true;
this.elementEngagement.refreshAllElementStates(c);for(var b=0,d=this._components.length;
b<d;b++){this._components[b].onSectionWillAppear(c,a)}};t.onSectionWillDisappear=function(c,a){this.cachedScrollPosition=c;
this.isVisible=false;for(var b=0,d=this._components.length;b<d;b++){this._components[b].onSectionWillDisappear(c,a)
}};t.getComponentOfType=function(b){if(!u.hasOwnProperty(b)){throw"BaseSection::getComponentOfType no component type '"+b+"' exist in ComponentMap!"
}for(var a=0,c=this._components.length;a<c;a++){if(this._components[a].componentName===b){return this._components[a]
}}return null};t.getAllComponentsOfType=function(c){if(!u.hasOwnProperty(c)){throw"BaseSection::getAllComponentsOfType no component type '"+c+"' exist in ComponentMap!"
}var a=[];for(var b=0,d=this._components.length;b<d;b++){if(this._components[b].componentName===c){a.push(this._components[b])
}}return a};t.updateScrollToPosition=function(){return this.scrollToPosition=r.getPagePosition(this.element).top
};t.setIsFixedHero=function(){if(this.index!==0){this.isFixedHero=false}else{var a=window.getComputedStyle(this.element);
this.isFixedHero=a.position==="fixed"}};s.prototype.componentIsSupported=function(a,c){var d=a.IS_SUPPORTED;
if(d===undefined){return true}if(typeof d!=="function"){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}var b=a.IS_SUPPORTED();if(b===undefined){console.error('BaseSection::setupComponents error in "'+c+'".IS_SUPPORTED - it should be a function which returns true/false');
return true}return b};z.exports=s},{"./../model/ComponentMap":359,"./../model/DataAttributes":360,"./BaseComponent":355,"@marcom/ac-console":324,"@marcom/ac-dom-metrics":335,"@marcom/ac-dom-traversal/querySelectorAll":65,"@marcom/ac-element-engagement":338,"@marcom/ac-event-emitter-micro":351,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],358:[function(i,o,j){i("@marcom/ac-polyfills/Element/prototype.classList");
var k=i("./../model/DataAttributes");var n=false;var l=function(){if(n){throw new Error("Do not call the constructor, use LocalNavStyleChanger.initialize(settings)")
}n=true;this._currentTheme="";this.defaultTheme="theme-light";this._currentPageNavLink=null;
this._section=null;this.elementToApplyClassesAgainst=null;this.height=0};var m=l.prototype;
m.initialize=function(a){this.elementToApplyClassesAgainst=a.elementToApplyClassesAgainst;
this.sectionThemeMap=a.sectionThemeMap;this.defaultTheme=a.defaultTheme;this.height=a.localNavHeight
};m.setCurrentPage=function(b){var a=document.querySelector(".localnav-link["+k.JUMP_SECTION_NAME+"="+b+"]");
if(a===this._currentPageNavLink){return}if(this._currentPageNavLink){this._currentPageNavLink.classList.remove("current")
}if(a){a.classList.add("current");this._currentPageNavLink=a}};m.setCurrentSection=function(a){if(this.elementToApplyClassesAgainst===null){return
}if(this._section&&this._section===a){return}this._section=a;for(var b=0,d=this._section.element.classList.length;
b<d;b++){var c=this._section.element.classList[b];if(this.sectionThemeMap.hasOwnProperty(c)){this.setTheme(this.sectionThemeMap[c]);
return}}this.setTheme(this.defaultTheme)};m.setTheme=function(a){if(this._currentTheme===a){return
}for(var c in this.sectionThemeMap){var b=this.sectionThemeMap[c];if(b!==a){this.elementToApplyClassesAgainst.classList.remove(b)
}}this.elementToApplyClassesAgainst.classList.add(a);this._currentTheme=a};m.removeThemes=function(){this._currentTheme=null;
for(var a in this.sectionThemeMap){this.elementToApplyClassesAgainst.classList.remove(this.sectionThemeMap[a])
}};o.exports=new l()},{"./../model/DataAttributes":360,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],359:[function(d,g,f){g.exports={BaseComponent:d("../core/BaseComponent")}
},{"../core/BaseComponent":355}],360:[function(d,g,f){g.exports={PAGE_TYPE:"data-page-type",SECTION_TYPE:"data-section-type",JUMP_SECTION_NAME:"data-page-jump-name",COMPONENT_LIST:"data-component-list"}
},{}],361:[function(i,h,f){var g={isDesktop:i("@marcom/ac-feature/isDesktop"),isRetina:i("@marcom/ac-feature/isRetina")};
h.exports={TOUCH:undefined,SVG:undefined,PAGE_JUMP:undefined,IS_IE8:undefined,IS_DESKTOP:undefined,IS_RETINA:undefined,init:function(){var a=document.getElementsByTagName("html")[0];
this.TOUCH=a.classList.contains("touch");this.SVG=a.classList.contains("svg");this.PAGE_JUMP=a.classList.contains("pageJump");
this.IS_IE8=a.classList.contains("ie8");this.IS_DESKTOP=g.isDesktop();this.IS_RETINA=g.isRetina()
},extend:function(b){if(!b.hasOwnProperty("init")||(typeof b.init!=="function")){throw new TypeError("The object extended Jetpack.model.EnabledFeatures must contain an init function")
}var a=this.init;var c=b.init;var d=Object.assign(this,b);d.init=function(){if(this.HAS_INITIALIZED){return
}this.HAS_INITIALIZED=true;a.call(d);c.call(d)};return d},HAS_INITIALIZED:false}
},{"@marcom/ac-feature/isDesktop":184,"@marcom/ac-feature/isRetina":186}],362:[function(d,g,f){g.exports={BaseSection:d("../core/BaseSection")}
},{"../core/BaseSection":357}],363:[function(h,l,i){var j=h("@marcom/ac-event-emitter-micro").EventEmitterMicro;
function m(){j.call(this)}var k=m.prototype=Object.create(j.prototype);m.prototype.constructor=m;
k.deepRefreshAllElementMetrics=function(){this.trigger(m.prototype.DEEP_REFRESH_ALL_METRICS)
};k.DEEP_REFRESH_ALL_METRICS="page.deep_refresh_all_metrics";l.exports=new m()},{"@marcom/ac-event-emitter-micro":351}],364:[function(d,g,f){g.exports=function(){var a;
if(window.ViewportEmitterTestProxy){a=window.ViewportEmitterTestProxy}else{a={};
a.viewport="large";a.on=a.off=function(){}}return a}},{}],365:[function(g,i,h){var j=g("./ac-ajax/Ajax");
var k=g("./ac-ajax/Request");i.exports=new j();i.exports.Ajax=j;i.exports.Request=k
},{"./ac-ajax/Ajax":366,"./ac-ajax/Request":367}],366:[function(o,l,i){var m=o("./Request");
var k=o("./XDomain-request");var j=o("./URLParser");var n=function(){};n._Request=m;
n.prototype={_defaults:{method:"get",timeout:5000},_extend:function(){for(var a=1;
a<arguments.length;a++){for(var b in arguments[a]){if(arguments[a].hasOwnProperty(b)){arguments[0][b]=arguments[a][b]
}}}return arguments[0]},_getOptions:function(b,a){return this._extend({},this._defaults,a,b)
},_isCrossDomainRequest:function(a){var b=new j();var c=b.parse(window.location.href).origin;
var d=b.parse(a).origin;b.destroy();return(d!==c)},create:function(a){return new m(a)
},cors:function(a){var b=(window.XDomainRequest&&document.documentMode<10)?k:m;
return new b(a)},get:function(a){var b;a=this._getOptions({method:"get"},a);if(this._isCrossDomainRequest(a.url)){b=this.cors(a)
}else{b=this.create(a)}return b.send()},getJSON:function(a){return this.get(a).then(function(b){return JSON.parse(b.responseText)
})},head:function(a){a=this._getOptions({method:"head"},a);return this.create(a).send()
},isCrossDomainRequest:function(a){return this._isCrossDomainRequest(a)},post:function(a){a=this._getOptions({method:"post"},a);
return this.create(a).send()}};l.exports=n},{"./Request":367,"./URLParser":368,"./XDomain-request":369}],367:[function(f,h,g){var i=function(a){this._initialize(a)
};i.create=function(){var a=function(){};a.prototype=i.prototype;return new a()
};i.prototype={_addReadyStateChangeHandler:function(){this.xhr.onreadystatechange=function(a){if(this.xhr.readyState===4){clearTimeout(this._timeout);
if(this.xhr.status>=200&&this.xhr.status<300){this.resolve(this.xhr)}else{this.reject(this.xhr)
}}}.bind(this)},_getPromise:function(){this.promise=new Promise(function(a,b){this.resolve=a;
this.reject=b}.bind(this))},_getTransport:function(){return new XMLHttpRequest()
},_initialize:function(a){var b=this._validateConfiguration(a);if(b){throw b}this._configuration=a;
var c=this._configuration.method.toUpperCase();this.xhr=this._getTransport();this._getPromise();
this.xhr.open(c,this._configuration.url);this._setRequestHeaders(a.headers);this._addReadyStateChangeHandler()
},_sendXHR:function(){if(this.xhr){if(this._configuration&&this._configuration.data){this.xhr.send(this._configuration.data)
}else{this.xhr.send()}}},_setRequestHeaders:function(a){if(a){a.forEach(function(b){this.xhr.setRequestHeader(b.name,b.value)
},this)}},_setTimeout:function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}else{clearTimeout(this._timeout);this._timeout=null}}if(this._timeout!==null){clearTimeout(this._timeout)
}if(a>0){this._timeout=setTimeout(function(){this.xhr.abort();this.reject()}.bind(this),a)
}},_timeout:null,_validateConfiguration:function(a){if(!a){return"Must provide a configuration object"
}var b=[];var c=a.headers;if(!a.url){b.push("Must provide a url")}if(!a.method){b.push("Must provide a method")
}if(c){if(!Array.isArray(c)){return"Must provide an array of headers"}this._validateHeaders(c,b)
}return b.join(", ")},_validateHeaders:function(b,a){for(var c=0,d=b.length;c<d;
c++){if(!b[c].hasOwnProperty("name")||!b[c].hasOwnProperty("value")){a.push("Must provide a name and value key for all headers");
break}}},promise:null,reject:null,resolve:null,send:function(){this._setTimeout();
this._sendXHR();return this.promise},xhr:null};h.exports=i},{}],368:[function(k,j,g){var h=function(){this.parser=null
};var i=h.prototype;i.parse=function(b){var d;var a;var f;var m;var c;if(typeof b!=="string"){throw new TypeError(b+" must be a string")
}if(!this.parser){this.parser=document.createElement("a")}this._qualifyPath(b);
f=this.parser.hostname;a=this.parser.protocol;m=this._normalizePort(this.parser);
d=this.parser.origin||this._constructOriginString(this.parser,m);c=this.parser.search;
return{originalPath:b,qualifiedPath:this.parser.href,protocol:a,hostname:f,origin:d,port:m,search:c}
};i.destroy=function(){this.parser=null};i._constructOriginString=function(a,c){var b=c?":"+c:"";
return a.protocol+"//"+a.hostname+b};i._normalizePort=function(a){return(a.port==="80"||a.port==="443"||a.port==="0")?"":a.port
};i._qualifyPath=function(a){this.parser.href=a;this.parser.href=this.parser.href
};j.exports=h},{}],369:[function(g,j,h){var k=g("./Request");var i=function(a){k.apply(this,arguments)
};i.prototype=k.create();i.prototype._getTransport=function(){return new XDomainRequest()
};i.prototype._addReadyStateChangeHandler=function(){this.xhr.ontimeout=function(){this.reject(this.xhr)
}.bind(this);this.xhr.onerror=function(){this.reject(this.xhr)}.bind(this);this.xhr.onload=function(){this.resolve(this.xhr)
}.bind(this)};i.prototype._setTimeout=function(a){if(!a){if(this._configuration&&this._configuration.timeout){a=this._configuration.timeout
}}if(a>0){this.xhr.timeout=a}};i.prototype._sendXHR=function(){setTimeout(function(){k.prototype._sendXHR.call(this)
}.bind(this),0)};j.exports=i},{"./Request":367}],370:[function(d,g,f){arguments[4][224][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":371,dup:224}],371:[function(d,g,f){arguments[4][225][0].apply(f,arguments)
},{dup:225}],372:[function(d,g,f){(function(b,a){if(typeof f==="object"&&f){g.exports=a
}else{if(typeof define==="function"&&define.amd){define(a)}else{b.Deferred=a}}}(this,(function(){var s={};
var t,c,a,u,o,p,b,r;t={0:"pending",1:"resolved",2:"rejected"};c=function(k,i){var l,h,j,m,n;
if(this._status!==0){if(console&&console.warn){console.warn("Trying to fulfill more than once.")
}return false}this.data=i;h=this.pending;j=h.length;for(l=0;l<j;l++){m=h[l];if(m[k]){n=m[k](i)
}if(typeof n==="object"&&n.hasOwnProperty("then")&&n.hasOwnProperty("status")){n.then(function(w){m.deferred.resolve(w)
},function(w){m.deferred.reject(w)},function(w){m.deferred.progress(w)})}else{m.deferred[k](n||undefined)
}}if(k!=="progress"){h=[]}return true};p=function(h,i){this.then=h;this.status=i
};b=p.prototype;r=function(h){return h};b.success=function(h,i){return this.then(h.bind(i),r,r)
};b.fail=function(h,i){return this.then(r,h.bind(i),r)};b.progress=function(h,i){return this.then(r,r,h.bind(i))
};u=function(h){if(typeof h!=="function"){return function(){}}return h};a=function(h,i,j){this.resolve=u(h);
this.reject=u(i);this.progress=u(j);this.deferred=new o()};o=function(){this.pending=[];
this._status=0;this._promise=new p(this.then.bind(this),this.status.bind(this))
};o.prototype={status:function(){return t[this._status]},promise:function(){return this._promise
},progress:function(h){c.call(this,"progress",h);return this._promise},resolve:function(h){c.call(this,"resolve",h);
if(this._status===0){this._status=1}return this._promise},reject:function(h){c.call(this,"reject",h);
if(this._status===0){this._status=2}return this._promise},then:function(h,j,k){var l,i;
i=new a(h,j,k);if(this._status===0){this.pending.push(i)}else{if(this._status===1&&typeof h==="function"){l=h(this.data);
if(typeof l==="object"&&l.hasOwnProperty("then")&&l.hasOwnProperty("status")){l.then(function(m){i.deferred.resolve(m)
},function(m){i.deferred.reject(m)},function(m){i.deferred.progress(m)})}else{i.deferred.resolve(l)
}}else{if(this._status===2&&typeof j==="function"){l=j(this.data);i.deferred.reject(l)
}}}return i.deferred.promise()}};var q=function(){var j,k,h,i,l;j=[].slice.call(arguments);
k=new o();h=0;i=function(m){h--;var n=j.indexOf(this);j[n]=m;if(h===0){k.resolve(j)
}};l=function(m){k.reject(m)};j.forEach(function(m){if(m.then){h++}});j.forEach(function(m){if(m.then){m.then(i.bind(m),l)
}});return k.promise()};o.when=q;s.Deferred=o;return s}())))},{}],373:[function(q,r,p){function n(){}n.prototype={resolve:function m(){this._defer.resolve.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},reject:function k(){this._defer.reject.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},progress:function s(){var a="ac-defer.progress is deprecated since it is not part of the A+ spec. Recommend using ac-event-emitter for progress signaling";
console.warn(a);this._defer.progress.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},then:function o(){this._defer.then.apply(this._defer,Array.prototype.slice.call(arguments));
return this.promise()},promise:function l(){return this._defer.promise.apply(this._defer,Array.prototype.slice.call(arguments))
}};r.exports=n},{}],374:[function(q,p,k){var m=new (q("./ac-deferred/Deferred"))(),n=q("smartsign-deferred").Deferred;
function j(){this._defer=new n()}j.prototype=m;p.exports.join=function l(){return n.when.apply(null,[].slice.call(arguments))
};p.exports.all=function o(a){return n.when.apply(null,a)};p.exports.Deferred=j
},{"./ac-deferred/Deferred":373,"smartsign-deferred":372}],375:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":376,"./ac-asset-loader/AssetLoader/Asset":377,"./ac-asset-loader/AssetLoader/Asset/Ajax":378,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":379,"./ac-asset-loader/AssetLoader/Asset/Binary":380,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":381,"./ac-asset-loader/AssetLoader/Asset/Img":382,"./ac-asset-loader/AssetLoader/Asset/Video":385,"./ac-asset-loader/AssetLoader/Queue":386,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],376:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":387,"./AssetLoader/Asset/Ajax":378,"./AssetLoader/Asset/Ajax/JSON":379,"./AssetLoader/Asset/Img":382,"./AssetLoader/Asset/Video":385,"./AssetLoader/Queue":386,"@marcom/ac-event-emitter":370,"@marcom/ac-object":482}],377:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":387,"@marcom/ac-event-emitter":370,"ac-deferred":374}],378:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":377,"@marcom/ac-ajax":365,"@marcom/ac-object":482}],379:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":378,"@marcom/ac-object":482}],380:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":377,"./Binary/Chunk":381,"@marcom/ac-ajax":365,"@marcom/ac-object":482}],381:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":377,"@marcom/ac-ajax":365,"@marcom/ac-object":482}],382:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":377,"@marcom/ac-object":482}],383:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":377,"./SplitFile/Chunk":384,"@marcom/ac-ajax":365,"@marcom/ac-object":482}],384:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":377,"@marcom/ac-ajax":365,"@marcom/ac-object":482}],385:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function")
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":377,"./Binary":380,"./SplitFile":383,"@marcom/ac-feature":174,"@marcom/ac-object":482}],386:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":387,"@marcom/ac-event-emitter":370,"@marcom/ac-object":482,"ac-deferred":374}],387:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],388:[function(n,m,i){var l=n("./ac-browser/BrowserData");var j=/applewebkit/i;
var k=n("./ac-browser/IE");var o=l.create();o.isWebKit=function(b){var a=b||window.navigator.userAgent;
return a?!!j.test(a):false};o.lowerCaseUserAgent=navigator.userAgent.toLowerCase();
if(o.name==="IE"){o.IE={documentMode:k.getDocumentMode()}}m.exports=o},{"./ac-browser/BrowserData":389,"./ac-browser/IE":390}],389:[function(g,k,h){g("@marcom/ac-polyfills/Array/prototype.filter");
g("@marcom/ac-polyfills/Array/prototype.some");var j=g("./data");function i(){}i.prototype={__getBrowserVersion:function(c,b){var d;
if(!c||!b){return}var a=j.browser.filter(function(f){return f.identity===b});a.some(function(f){var o=f.versionSearch||b;
var n=c.indexOf(o);if(n>-1){d=parseFloat(c.substring(n+o.length+1));return true
}});return d},__getName:function(a){return this.__getIdentityStringFromArray(a)
},__getIdentity:function(a){if(a.string){return this.__matchSubString(a)}else{if(a.prop){return a.identity
}}},__getIdentityStringFromArray:function(d){for(var a=0,c=d.length,b;a<c;a++){b=this.__getIdentity(d[a]);
if(b){return b}}},__getOS:function(a){return this.__getIdentityStringFromArray(a)
},__getOSVersion:function(d,a){if(!d||!a){return}var b=j.os.filter(function(l){return l.identity===a
})[0];var m=b.versionSearch||a;var c=new RegExp(m+" ([\\d_\\.]+)","i");var f=d.match(c);
if(f!==null){return f[1].replace(/_/g,".")}},__matchSubString:function(b){var c=b.subString;
if(c){var a=c.test?!!c.test(b.string):b.string.indexOf(c)>-1;if(a){return b.identity
}}}};i.create=function(){var b=new i();var a={};a.name=b.__getName(j.browser);a.version=b.__getBrowserVersion(j.versionString,a.name);
a.os=b.__getOS(j.os);a.osVersion=b.__getOSVersion(j.versionString,a.os);return a
};k.exports=i},{"./data":391,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.some":"@marcom/ac-polyfills/Array/prototype.some"}],390:[function(d,g,f){g.exports={getDocumentMode:function(){var a;
if(document.documentMode){a=parseInt(document.documentMode,10)}else{a=5;if(document.compatMode){if(document.compatMode==="CSS1Compat"){a=7
}}}return a}}},{}],391:[function(d,g,f){g.exports={browser:[{string:window.navigator.userAgent,subString:"Edge",identity:"Edge"},{string:window.navigator.userAgent,subString:/silk/i,identity:"Silk"},{string:window.navigator.userAgent,subString:/(android).*(version\/[0-9+].[0-9+])/i,identity:"Android"},{string:window.navigator.userAgent,subString:"Chrome",identity:"Chrome"},{string:window.navigator.userAgent,subString:"OmniWeb",versionSearch:"OmniWeb/",identity:"OmniWeb"},{string:window.navigator.userAgent,subString:/mobile\/[^\s]*\ssafari\//i,identity:"Safari Mobile",versionSearch:"Version"},{string:window.navigator.vendor,subString:"Apple",identity:"Safari",versionSearch:"Version"},{prop:window.opera,identity:"Opera",versionSearch:"Version"},{string:window.navigator.vendor,subString:"iCab",identity:"iCab"},{string:window.navigator.vendor,subString:"KDE",identity:"Konqueror"},{string:window.navigator.userAgent,subString:"Firefox",identity:"Firefox"},{string:window.navigator.vendor,subString:"Camino",identity:"Camino"},{string:window.navigator.userAgent,subString:"Netscape",identity:"Netscape"},{string:window.navigator.userAgent,subString:"MSIE",identity:"IE",versionSearch:"MSIE"},{string:window.navigator.userAgent,subString:"Trident",identity:"IE",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Gecko",identity:"Mozilla",versionSearch:"rv"},{string:window.navigator.userAgent,subString:"Mozilla",identity:"Netscape",versionSearch:"Mozilla"}],os:[{string:window.navigator.platform,subString:"Win",identity:"Windows",versionSearch:"Windows NT"},{string:window.navigator.platform,subString:"Mac",identity:"OS X"},{string:window.navigator.userAgent,subString:"iPhone",identity:"iOS",versionSearch:"iPhone OS"},{string:window.navigator.userAgent,subString:"iPad",identity:"iOS",versionSearch:"CPU OS"},{string:window.navigator.userAgent,subString:/android/i,identity:"Android"},{string:window.navigator.platform,subString:"Linux",identity:"Linux"}],versionString:window.navigator.userAgent||window.navigator.appVersion||undefined}
},{}],392:[function(d,g,f){arguments[4][196][0].apply(f,arguments)},{"./className/add":394,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList",dup:196}],393:[function(d,g,f){g.exports={add:d("./className/add"),contains:d("./className/contains"),remove:d("./className/remove")}
},{"./className/add":394,"./className/contains":395,"./className/remove":397}],394:[function(d,g,f){arguments[4][197][0].apply(f,arguments)
},{"./contains":395,dup:197}],395:[function(d,g,f){arguments[4][198][0].apply(f,arguments)
},{"./getTokenRegExp":396,dup:198}],396:[function(d,g,f){arguments[4][199][0].apply(f,arguments)
},{dup:199}],397:[function(d,g,f){arguments[4][200][0].apply(f,arguments)},{"./contains":395,"./getTokenRegExp":396,dup:200}],398:[function(d,g,f){arguments[4][201][0].apply(f,arguments)
},{"./className/contains":395,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList",dup:201}],399:[function(d,g,f){g.exports={add:d("./add"),contains:d("./contains"),remove:d("./remove"),toggle:d("./toggle")}
},{"./add":392,"./contains":398,"./remove":400,"./toggle":401}],400:[function(d,g,f){arguments[4][202][0].apply(f,arguments)
},{"./className/remove":397,"@marcom/ac-polyfills/Array/prototype.slice":"@marcom/ac-polyfills/Array/prototype.slice","@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList",dup:202}],401:[function(k,j,g){k("@marcom/ac-polyfills/Element/prototype.classList");
var i=k("./className");j.exports=function h(b,c,a){var d=(typeof a!=="undefined");
var f;if(b.classList&&b.classList.toggle){if(d){return b.classList.toggle(c,a)}return b.classList.toggle(c)
}if(d){f=!!a}else{f=!i.contains(b,c)}if(f){i.add(b,c)}else{i.remove(b,c)}return f
}},{"./className":393,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],402:[function(d,g,f){arguments[4][205][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":403,dup:205}],403:[function(d,g,f){arguments[4][206][0].apply(f,arguments)
},{dup:206}],404:[function(d,g,f){arguments[4][70][0].apply(f,arguments)},{"./ac-clock/Clock":405,"./ac-clock/ThrottledClock":406,"./ac-clock/sharedClockInstance":407,dup:70}],405:[function(d,g,f){arguments[4][71][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":402,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:71}],406:[function(d,g,f){arguments[4][72][0].apply(f,arguments)
},{"./sharedClockInstance":407,"@marcom/ac-event-emitter-micro":402,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:72}],407:[function(d,g,f){arguments[4][73][0].apply(f,arguments)
},{"./Clock":405,dup:73}],408:[function(d,g,f){arguments[4][224][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":409,dup:224}],409:[function(d,g,f){arguments[4][225][0].apply(f,arguments)
},{dup:225}],410:[function(d,g,f){arguments[4][226][0].apply(f,arguments)},{"./ac-dom-emitter/DOMEmitter":411,dup:226}],411:[function(d,g,f){arguments[4][227][0].apply(f,arguments)
},{"./DOMEmitterEvent":412,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-events/dispatchEvent":2,"@marcom/ac-dom-events/removeEventListener":10,"@marcom/ac-dom-traversal/matchesSelector":63,"@marcom/ac-dom-traversal/querySelectorAll":65,"ac-event-emitter":408,dup:227}],412:[function(d,g,f){arguments[4][228][0].apply(f,arguments)
},{"@marcom/ac-dom-events/preventDefault":9,"@marcom/ac-dom-events/stopPropagation":13,"@marcom/ac-dom-events/target":14,dup:228}],413:[function(d,g,f){arguments[4][365][0].apply(f,arguments)
},{"./ac-ajax/Ajax":414,"./ac-ajax/Request":415,dup:365}],414:[function(d,g,f){arguments[4][366][0].apply(f,arguments)
},{"./Request":415,"./URLParser":416,"./XDomain-request":417,dup:366}],415:[function(d,g,f){arguments[4][367][0].apply(f,arguments)
},{dup:367}],416:[function(d,g,f){arguments[4][368][0].apply(f,arguments)},{dup:368}],417:[function(d,g,f){arguments[4][369][0].apply(f,arguments)
},{"./Request":415,dup:369}],418:[function(d,g,f){arguments[4][224][0].apply(f,arguments)
},{"./ac-event-emitter/EventEmitter":419,dup:224}],419:[function(d,g,f){arguments[4][225][0].apply(f,arguments)
},{dup:225}],420:[function(d,g,f){arguments[4][372][0].apply(f,arguments)},{dup:372}],421:[function(d,g,f){arguments[4][373][0].apply(f,arguments)
},{dup:373}],422:[function(d,g,f){arguments[4][374][0].apply(f,arguments)},{"./ac-deferred/Deferred":421,dup:374,"smartsign-deferred":420}],423:[function(d,g,f){d("@marcom/ac-polyfills");
g.exports.Asset=d("./ac-asset-loader/AssetLoader/Asset");g.exports.Asset.Ajax=d("./ac-asset-loader/AssetLoader/Asset/Ajax");
g.exports.Asset.Ajax.JSON=d("./ac-asset-loader/AssetLoader/Asset/Ajax/JSON");g.exports.Asset.Img=d("./ac-asset-loader/AssetLoader/Asset/Img");
g.exports.Asset.Video=d("./ac-asset-loader/AssetLoader/Asset/Video");g.exports.Asset.Binary=d("./ac-asset-loader/AssetLoader/Asset/Binary");
g.exports.Asset.Binary.Chunk=d("./ac-asset-loader/AssetLoader/Asset/Binary/Chunk");
g.exports.AssetLoader=d("./ac-asset-loader/AssetLoader");g.exports.AssetLoader.Queue=d("./ac-asset-loader/AssetLoader/Queue")
},{"./ac-asset-loader/AssetLoader":424,"./ac-asset-loader/AssetLoader/Asset":425,"./ac-asset-loader/AssetLoader/Asset/Ajax":426,"./ac-asset-loader/AssetLoader/Asset/Ajax/JSON":427,"./ac-asset-loader/AssetLoader/Asset/Binary":428,"./ac-asset-loader/AssetLoader/Asset/Binary/Chunk":429,"./ac-asset-loader/AssetLoader/Asset/Img":430,"./ac-asset-loader/AssetLoader/Asset/Video":433,"./ac-asset-loader/AssetLoader/Queue":434,"@marcom/ac-polyfills":"@marcom/ac-polyfills"}],424:[function(B,C,w){var u;
var x=B("@marcom/ac-object");var p=B("@marcom/ac-event-emitter").EventEmitter;var q=B("./AssetLoader/Asset/Ajax");
var y=B("./AssetLoader/Asset/Ajax/JSON");var v=B("./AssetLoader/Asset/Img");var r=B("./AssetLoader/Asset/Video");
var s=B("../utils/destroy");var A=B("./AssetLoader/Queue");var z={};function t(a,c){this.options=x.defaults(z,c||{});
var b=this._generateAssets(a);this._timeoutDuration=this.options.timeout;this._timeout=null;
this._proxyListeners();this.add(b,this.options)}u=t.prototype=new p();u.load=function(){if(this._timeoutDuration){this._timeout=window.setTimeout(this._onTimeout.bind(this),this._timeoutDuration)
}return this._queue.start()};u._clearTimeout=function(){window.clearTimeout(this._timeout);
this._timeout=null};u.pause=function(){this._clearTimeout();return this._queue.pause()
};u.destroy=function(){s(this,true)};u.add=function(a){if(!Array.isArray(a)){a=[a]
}a=this._generateAssets(a);if(!this._queue||this._queue.loaded){if(this._queue){this._queue.destroy()
}this._queue=new A(a,this.options);this._bindQueueListeners();return}this._queue.add(a)
};u._onTimeout=function(){this._queue.abort();this._queue.destroy();this.trigger("timeout")
};u._generateAssets=function(a){if(this._boundGenerateAsset===undefined){this._boundGenerateAsset=this._generateAsset.bind(this)
}a=[].concat(a);var b=a.map(this._boundGenerateAsset);return b};u._generateAsset=function(a,b){if(t.isValidAsset(a)){a.index=b;
return a}if(typeof a!=="string"||a===""){return null}if(!!a.match(/\.json$/)){return new y(a,b)
}if(!!a.match(/\.(xml|txt)$/)){return new q(a,b)}return new v(a,b)};u._proxyListeners=function(){this._boundOnResolved=this._onResolved.bind(this);
this._boundOnRejected=this._onRejected.bind(this);this._boundOnProgress=this._onProgress.bind(this)
};u._bindQueueListeners=function(){this._queue.on("resolved",this._boundOnResolved);
this._queue.on("rejected",this._boundOnRejected);this._queue.on("progress",this._boundOnProgress)
};u._onResolved=function(a){this._clearTimeout();this.trigger("loaded",a)};u._onRejected=function(a){this.trigger("error",a)
};u._onProgress=function(a){this.trigger("progress",a)};t.isValidAsset=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.destroy==="function"))
};t.isValidAssetLoader=function(a){return !!(a&&(typeof a.load==="function")&&(typeof a.pause==="function")&&(typeof a.destroy==="function"))
};C.exports=t},{"../utils/destroy":435,"./AssetLoader/Asset/Ajax":426,"./AssetLoader/Asset/Ajax/JSON":427,"./AssetLoader/Asset/Img":430,"./AssetLoader/Asset/Video":433,"./AssetLoader/Queue":434,"@marcom/ac-event-emitter":418,"@marcom/ac-object":482}],425:[function(p,n,j){var l;
var q=p("ac-deferred").Deferred;var m=p("@marcom/ac-event-emitter").EventEmitter;
var o=p("../../utils/destroy");function k(a,b){this.src=a;this.index=b;this.data=null;
this._boundOnLoad=this._onLoad.bind(this);this._boundOnError=this._onError.bind(this)
}l=k.prototype=new m();l.load=function(){this._load()};l.destroy=function(){o(this)
};l._load=function(){this.data={src:this.src};window.setTimeout(this._onLoad.bind(this),20)
};l._onLoad=function(){this.trigger("loaded",this)};l._onError=function(){this.trigger("error",this.data)
};n.exports=k},{"../../utils/destroy":435,"@marcom/ac-event-emitter":418,"ac-deferred":422}],426:[function(p,n,j){var l;
var q=p("@marcom/ac-ajax");var k=p("@marcom/ac-object");var m=p("../Asset");function o(a,b){m.apply(this,arguments)
}l=o.prototype=k.create(m.prototype);l._load=function(){q.get({url:this.src}).then(this._boundOnLoad,this._boundOnError)
};l._onLoad=function(a){this.data=a.response;m.prototype._onLoad.call(this)};n.exports=o
},{"../Asset":425,"@marcom/ac-ajax":413,"@marcom/ac-object":482}],427:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Ajax");function k(a){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._onLoad=function(a){try{m.prototype._onLoad.call(this,{response:JSON.parse(a.response||a.responseText)})
}catch(b){this._onError(b)}};n.exports=k},{"../Ajax":426,"@marcom/ac-object":482}],428:[function(t,u,q){var l=t("@marcom/ac-ajax");
var r=t("@marcom/ac-object");var m=t("./Binary/Chunk");var n=t("./../Asset");var s={chunkSize:1024*1024};
function p(a,b){n.apply(this,arguments);this.options=r.defaults(s,b||{});this._totalSize=null;
this._rangeObjects={};this._contentType=null;this._request=null;this._numLoaded=0;
this._numRanges=0}var o=p.prototype=r.create(n.prototype);o.pause=function(){var a;
if(this._request!==null){this._request.xhr.abort()}for(a in this._rangeObjects){if(this._rangeObjects[a].isLoaded()===false){this._rangeObjects[a].pause()
}}};o._load=function(){if(this._boundQueueRangeRequests===undefined){this._boundQueueRangeRequests=this._queueRangeRequests.bind(this)
}if(this._totalSize===null){this._getMetaData().then(this._boundQueueRangeRequests)
}else{this._queueRangeRequests()}};o._getOrCreateRangeObject=function(d){var a=this._rangeObjects[d.toString()];
var b;var c;if(a===undefined){b=(this.options.chunkSize-1);c=d+b;if(c>this._totalSize){b=null
}a=this._rangeObjects[d.toString()]=new m(this.src,{start:d,length:b});this._numRanges+=1
}return a};o._onRangeLoad=function(){this._numLoaded+=1;if(this._numLoaded===this._numRanges){this._afterAllChunksLoaded()
}};o._queueRangeRequests=function(){var d;var f=[];var c;var b;var a;for(var g=0;
g<this._totalSize;g+=this.options.chunkSize){a=this._getOrCreateRangeObject(g);
a.on("loaded",this._onRangeLoad,this);a.load()}};o._afterAllChunksLoaded=function(){var b;
var c=[];for(var a in this._rangeObjects){c.push(this._rangeObjects[a].data)}b=new Blob(c,{type:this._contentType});
this.trigger("loaded",b)};o._afterHeadRequest=function(a){this._totalSize=parseInt(a.getResponseHeader(["Content-Length"]));
this._contentType=a.getResponseHeader(["Content-Type"]);this._request=null};o._getMetaData=function(){if(!this._boundAfterHeadRequest){this._boundAfterHeadRequest=this._afterHeadRequest.bind(this)
}this._request=l.create({method:"HEAD",url:this.src,timeout:2*1000});return this._request.send().then(this._boundAfterHeadRequest,this._boundOnError)
};u.exports=p},{"./../Asset":425,"./Binary/Chunk":429,"@marcom/ac-ajax":413,"@marcom/ac-object":482}],429:[function(r,s,o){var n;
var k=r("@marcom/ac-ajax");var p=r("@marcom/ac-object");var m=r("../../Asset");
var q={start:0,length:null};function l(a,b){m.apply(this,arguments);this.options=p.defaults(q,b||{});
this._request=null;this.data=null}n=l.prototype=p.create(m.prototype);n.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};n.isLoaded=function(){return(this.data!==null)};n._load=function(){this._request=k.create({url:this.src+"?"+this._buildQueryString(),method:"get",timeout:30*1000,headers:[{name:"Range",value:this._buildRangeString()}]});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};n._onLoad=function(a){this.data=a.response;this._request=null;m.prototype._onLoad.call(this,this.data)
};n._buildRangeString=function(){var a="bytes="+this.options.start+"-";if(this.options.length!==null){a+=(this.options.start+this.options.length)
}return a};n._buildQueryString=function(){var a=this.options.start.toString();if(this.options.length!==undefined){a+=(this.options.start+this.options.length)
}return a};s.exports=l},{"../../Asset":425,"@marcom/ac-ajax":413,"@marcom/ac-object":482}],430:[function(o,n,i){var l;
var j=o("@marcom/ac-object");var m=o("../Asset");function k(a,b){m.apply(this,arguments)
}l=k.prototype=j.create(m.prototype);l._load=function(){var a=new Image();this.data=a;
this._boundOnLoad=this._onLoad.bind(this);a.onload=this._boundOnLoad;a.onerror=this._boundOnError;
a.src=this.src};n.exports=k},{"../Asset":425,"@marcom/ac-object":482}],431:[function(r,u,o){var l=r("@marcom/ac-ajax").Ajax,p=r("@marcom/ac-object"),m=r("./SplitFile/Chunk"),t=r("../Asset");
var n;var q={splitManifestTimeout:5000,splitChunkTimeout:null};var s=function(a,b){t.apply(this,arguments);
if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}this.options=p.extend(q,b||{});this._manifestPath=a+"manifest.json";
this._ajax=new l();this._request=null;this._chunksLoaded=0;this._chunksLen=null;
this._chunks=[];this._boundOnManifestLoaded=this._onManifestLoaded.bind(this)};
n=s.prototype=p.create(t.prototype);n._load=function(){var a={method:"get",url:this._manifestPath,timeout:this.options.manifestTimeout};
this._request=this._ajax.create(a);this._request.send().then(this._boundOnManifestLoaded)
};n._onManifestLoaded=function(c){this._manifest=JSON.parse(c.responseText);this._chunksLen=this._manifest.files.length;
var f,d=this._manifest.files,a,b=this._chunksLen;for(f=0;f<b;f++){a=this._getOrCreateChunkObject(d[f],f);
a.once("loaded",this._onChunkLoaded,this);a.load()}this._request=null;this._ajax=null
};n._getOrCreateChunkObject=function(g,b){var f=this.options.splitChunkTimeout?{timeout:this.options.splitChunkTimeout}:null;
if(!this._chunks[b]){var c=g.path;if(!c.match(/(^http(s?))/)){c=this.src+"/"+c}else{if(!!this.src.match(/(^http(s?))/)){var d=c.indexOf("/",10);
var a=this.src.indexOf("/",10);c=this.src.substring(0,a)+c.substring(d)}}this._chunks[b]=new m(c,f)
}return this._chunks[b]};n._onChunkLoaded=function(){this._chunksLoaded++;if(this._chunksLoaded===this._chunksLen){var c,b=this._chunks.length,a=[];
for(c=0;c<b;c++){a.push(this._chunks[c].data);this._chunks[c].off()}this.data=new Blob(a,{type:this._manifest.mimeType});
a=this._chunks=null;this.trigger("loaded",this.data)}};n.pause=function(){if(this._request!==null){if(this._request.xhr!==null){this._request.xhr.abort()
}this._request=null}this.data=null;this._chunks=null};u.exports=s},{"../Asset":425,"./SplitFile/Chunk":432,"@marcom/ac-ajax":413,"@marcom/ac-object":482}],432:[function(q,s,n){var m;
var k=q("@marcom/ac-ajax");var o=q("@marcom/ac-object");var r=q("../../Asset");
var p={timeout:30*1000};function l(a,b){r.apply(this,arguments);this.options=o.extend(p,b||{});
this._request=null;this.data=null}m=l.prototype=o.create(r.prototype);m.pause=function(){if(this._request!==null){this._request.xhr.abort();
this._request=null}};m.isLoaded=function(){return(this.data!==null)};m._load=function(){this._request=k.create({url:this.src,method:"get",timeout:this.options.timeout});
this._request.xhr.responseType="arraybuffer";this._request.send().then(this._boundOnLoad)
};m._onLoad=function(a){this.data=a.response;this._request=null;r.prototype._onLoad.call(this,this.data)
};s.exports=l},{"../../Asset":425,"@marcom/ac-ajax":413,"@marcom/ac-object":482}],433:[function(u,w,q){var o;
var r=u("@marcom/ac-feature");var s=u("@marcom/ac-object");var p=u("./Binary");
var n=u("../Asset");var v=u("./SplitFile");var t={chunkSize:1024*1024,split:false};
function m(b,a){n.apply(this,arguments);this.options=s.defaults(t,a||{});this._binary=this.options.binary||this._createAssetType()
}o=m.prototype=s.create(n.prototype);o._canUseBlob=function(){return(window.Blob!==undefined&&window.URL!==undefined&&typeof window.URL.createObjectURL==="function"&&r.isDesktop()===true)
};o._createAssetType=function(){if(this._canUseBlob()){if(this.options.split){return new v(this.src,this.options)
}return new p(this.src,this.options)}};o._load=function(){this._binary.on("loaded",this._boundOnLoad);
this._binary.on("error",this._boundOnError);this._binary.load()};o._onLoad=function(b){var a=b;
if(b instanceof window.Blob){a=this.options.element;if(!a){a=document.createElement("video")
}if(a.getAttribute("type")!==b.type){a.setAttribute("type",b.type)}a.src=window.URL.createObjectURL(b)
}n.prototype._onLoad.call(this,a)};o.pause=function(){this._binary.pause()};o.destroy=function(){this._binary.destroy();
n.prototype.destroy.call(this)};w.exports=m},{"../Asset":425,"./Binary":428,"./SplitFile":431,"@marcom/ac-feature":174,"@marcom/ac-object":482}],434:[function(t,u,p){var o;
var q=t("@marcom/ac-object");var n=t("ac-deferred").Deferred;var l=t("@marcom/ac-event-emitter").EventEmitter;
var m=t("../../utils/destroy");var r={threads:4};function s(a,b){this.options=q.defaults(r,b||{});
this._queue=a;this._active=[];this._allowedThreads=this.options.threads;this._availableThreads=this._allowedThreads;
this._deferred=new n();this._data=[];this.paused=true;this.loaded=false;this.promise=this._deferred.promise()
}o=s.prototype=new l();o.start=function(){var a=this._availableThreads;var b;this.paused=false;
if(a>this._queue.length){a=this._queue.length}for(b=1;b<=a;b++){this._startNewThread()
}return this.promise};o.pause=function(){this.paused=true;var a=[];this._active.forEach(function(c,b){if(typeof c.pause==="function"){this._queue.unshift(c);
this._releaseThread();c.off("loaded");c.off("error");c.pause();a.push(b)}},this);
a.forEach(function(b){this._active.splice(b,1)},this)};o.add=function(a){this._queue=this._queue.concat(a)
};o.destroy=function(){this.pause();m(this)};o._startNewThread=function(){var a=this._queue.shift();
this._occupyThread();if(a&&typeof a.load==="function"){var b=function(d){this._onProgress(d);
this._active.splice(this._active.indexOf(a),1);a.off("error",c)};var c=function(d){this._onError();
a.off("loaded",b)};a.once("loaded",b,this);a.once("error",c,this);a.load()}else{this._onError()
}this._active.push(a)};o._onResolved=function(){if(this._errored){return false}this._deferred.resolve(this._data);
this.trigger("resolved",this._data)};o._onError=function(a){if(this._errored){return false
}this._errored=true;this._deferred.reject(a);this.trigger("rejected",a)};o.abort=function(){this._deferred.reject()
};o._onProgress=function(a){if(this._errored){return false}this._releaseThread();
this._data[a.index]=a.data;this.trigger("progress",a.data);if(this._queue.length<=0){if(this._availableThreads>=this._allowedThreads){this._onResolved()
}}else{if(!this.paused&&!this._errored){this._startNewThread()}}};o._occupyThread=function(){this._availableThreads--;
if(this._availableThreads<0){throw"AssetLoader.Queue: Available thread count cannot be negative."
}};o._releaseThread=function(){this._availableThreads++;if(this._availableThreads>this._allowedThreads){throw"AssetLoader.Queue: Available thread count cannot be more than allowed thread amount."
}};u.exports=s},{"../../utils/destroy":435,"@marcom/ac-event-emitter":418,"@marcom/ac-object":482,"ac-deferred":422}],435:[function(f,h,g){h.exports=function i(c,b){if(typeof c.off==="function"){c.off()
}function a(l){var m=true;for(var d in l){if(l.hasOwnProperty(d)){if(l[d]!==null){m=false;
break}}}return m}window.setTimeout(function(){var d;for(d in c){if(c.hasOwnProperty(d)){if(b&&c[d]&&typeof c[d].destroy==="function"&&!a(c[d])){c[d].destroy()
}c[d]=null}}})}},{}],436:[function(d,g,f){arguments[4][205][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":437,dup:205}],437:[function(d,g,f){arguments[4][206][0].apply(f,arguments)
},{dup:206}],438:[function(d,g,f){d("@marcom/ac-polyfills/Promise");d("@marcom/ac-polyfills/JSON");
g.exports={createFlow:d("./ac-flow/flow/factory"),Player:d("./ac-flow/flow/Player")}
},{"./ac-flow/flow/Player":441,"./ac-flow/flow/factory":452,"@marcom/ac-polyfills/JSON":"@marcom/ac-polyfills/JSON","@marcom/ac-polyfills/Promise":"@marcom/ac-polyfills/Promise"}],439:[function(v,w,u){var o=v("@marcom/ac-event-emitter-micro").EventEmitterMicro,p=v("./compositor/decorator/Keyframe"),q=v("./compositor/decorator/Superframe"),r=v("./compositor/decorator/SuperKeyframe"),m=v("./compositor/decorator/Cache");
var n=v("./compositor/Sequence");function t(a,c,b,d){o.call(this);this._compositor=new n(c,b,d);
this.options=a||{}}var s=t.prototype=new o(null);s._gotoImageFrame=function(a){if(this._rendering){return Promise.resolve()
}else{if(this._currentFrame===a){return Promise.resolve()}}this._rendering=true;
return this._compositor.compositeFrames(this._currentFrame,a).then(function(){this._rendering=false;
this._currentFrame=a}.bind(this))};s.init=function(){var a;if(this.options.element.nodeName==="CANVAS"){a=this.options.element
}else{a=document.createElement("canvas");this.options.element.appendChild(a)}this.gotoFrame=this._gotoImageFrame;
return this._compositor.init(a).then(this._decorateCompositor.bind(this))};s.resumeLoading=function(){return this._compositor.resumeLoading()
};s.pauseLoading=function(){this._compositor.pauseLoading()};s._decorateCompositor=function(){var a=this._compositor;
var b;var c;if(a){b=this._compositor._diffRender.flowData;c=this._compositor.canvas;
if(b.superframeFrequency){a=new q(a,b.superframeFrequency)}if(b.version>=4){a=new p(a)
}if(b.version>=4&&b.superframeFrequency){a=new r(a)}if(this.options.keyframeCache){a=new m(a,this.options.keyframeCache)
}if(a===this._compositor){return Promise.resolve()}else{this._compositor=a;return this._compositor.init(c)
}}else{return Promise.reject()}};s._destroy=function(){this.off();this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(s,{_currentFrame:{value:0,enumerable:false,writable:true},frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true}});w.exports=t},{"./compositor/Sequence":442,"./compositor/decorator/Cache":443,"./compositor/decorator/Keyframe":444,"./compositor/decorator/SuperKeyframe":445,"./compositor/decorator/Superframe":446,"@marcom/ac-event-emitter-micro":436}],440:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,l=o("./data/provider/Async");
var k=function(c,b,a){this._manifestUrl=c;this._keyframeUrls=b;this._imageUrlPattern=a;
this.state={manifestLoaded:false,keyframesLoaded:false,diffsLoaded:false,diffCountLoaded:0,totalDiffs:null};
this.assets={keyframes:null,manifest:null,diffs:null};this._promises={};this._loaders={};
this._activeLoaders=[];this._resumeQueue=[];this._paused=true;this._shouldPause=false;
this._boundOnManifestLoaded=this._onManifestLoaded.bind(this);this._boundOnKeyframesLoaded=this._onKeyframesLoaded.bind(this);
this._boundOnDiffsLoaded=this._onDiffsLoaded.bind(this)};var m=k.prototype;m.setManifestUrl=function(a){this._manifestUrl=a;
return this};m.setKeyframeUrls=function(a){this._keyframeUrls=a;return this};m.setImageUrlPattern=function(a){this._imageUrlPattern=a;
return this};m.pause=function(){this._shouldPause=true;var a,b=this._activeLoaders.length;
for(a=0;a<b;a++){this._activeLoaders[a].pause()}this._paused=true};m.destroy=function(){var b,c,a;
this.pause();for(b in this._loaders){if(this._loaders.hasOwnProperty(b)){this._loaders[b].destroy()
}}for(c in this._promises){if(this._promises.hasOwnProperty(c)){if(this._promises[c].status()==="pending"){this._promises[c].reject()
}}}for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};m.load=function(){if(this._paused&&(this._activeLoaders.length>0||this._resumeQueue.length>0)){this._resume();
return true}};m._resume=function(){this._shouldPause=false;var d,c=this._activeLoaders.length;
for(d=0;d<c;d++){this._activeLoaders[d].load()}var a,b=this._resumeQueue.length;
for(a=0;a<b;a++){this._resumeQueue[a].call(this)}this._resumeQueue=[];this._paused=false
};m.loadManifest=function(){if(this._shouldPause){this._resumeQueue.push(this.loadManifest);
return}if(this.assets.manifest){return this.assets.manifest}else{this._paused=false;
this._loaders.manifest=new l(this._getManifestAssetsData());this._activeLoaders.push(this._loaders.manifest);
return this._loaders.manifest.load().then(this._boundOnManifestLoaded)}};m.loadKeyframes=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadKeyframes)}if(this.assets.keyframes){a=Promise.resolve(this.assets.keyframes)
}else{this._paused=false;this._loaders.keyframes=new i(this._getKeyframesAssetsData());
this._activeLoaders.push(this._loaders.keyframes);a=this._loaders.keyframes.load().then(this._boundOnKeyframesLoaded)
}this._promises.keyframes=a;return this._promises.keyframes};m.loadDiffs=function(){var a;
if(this._shouldPause){this._resumeQueue.push(this.loadDiffs)}if(this.assets.diffs){a=this._promises.diffs.resolve(this.assets.diffs)
}else{this._paused=false;this._loaders.diffs=new i(this._getDiffsAssetsData());
this._activeLoaders.push(this._loaders.diffs);a=this._loaders.diffs.load().then(this._boundOnDiffsLoaded)
}this._promises.diffs=a;return this._promises.diffs};m._getManifestAssetsData=function(){return this._manifestUrl
};m._getKeyframesAssetsData=function(){return this._keyframeUrls};m._getDiffsAssetsData=function(){var b=this.assets.manifest.imagesRequired,d=[],a,c,f=this._imageUrlPattern.match(/#/g).length;
for(a=1;a<=b;a++){c="0000"+a;c=c.substring(c.length-f);d.push(this._imageUrlPattern.replace(/#{2,}/g,c))
}return d};m._onManifestLoaded=function(a){if(this.assets){this.assets.manifest=a;
this.state.manifestLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.manifest);
return this.assets.manifest}};m._onKeyframesLoaded=function(a){if(this.assets){this.assets.keyframes=a;
this.state.keyframeLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.keyframes);
return Promise.resolve(this.assets.keyframes)}};m._onDiffsLoaded=function(a){if(this.assets){this.assets.diffs=a;
this.state.diffsLoaded=true;this._paused=true;this._removeFromActiveLoaders(this._loaders.diffs);
return Promise.resolve(this.assets.diffs)}};m._removeFromActiveLoaders=function(a){var b,c=this._activeLoaders.length;
for(b=0;b<c;b++){if(this._activeLoaders[b]===a){this._activeLoaders.splice(b,1);
return}}};n.exports=k},{"./data/provider/Async":450,"@marcom/ac-asset-loader":423}],441:[function(h,m,i){var j=h("@marcom/ac-dom-emitter").DOMEmitter;
function k(b,a){this.element=a;this._domEmitter=new j(a);this._frameRate=30;this.paused=true;
this.loop=false;this._destroyed=false;this._flow=b;this._boundAdvanceTimeToGlobal=this._advanceToTimeGlobal.bind(this);
this._onBoundGlobalTimeUpdate=this._onGlobalTimeUpdate.bind(this);this._onBoundLocalTimeUpdate=this._onLocalTimeUpdate.bind(this)
}var l=k.prototype;l._timeToFrame=function(b){var a;a=Math.round(b/this.duration*this._flow.frameCount);
a=a%(this._flow.frameCount+1);return(a<0)?this._flow.frameCount+a:a};l._advanceToTimeGlobal=function(b){this._prevTime=this._prevTime||b;
this._currentTime+=((b-this._prevTime)/1000)*this.playbackRate;this._prevTime=b;
this._pauseAfterRender=false;var a=this._timeToFrame(this._currentTime);if(!this.loop){if(this.playbackRate>0&&this._currentTime>this.duration){a=this._flow.frameCount;
this._currentTime=this.duration;this._pauseAfterRender=true}else{if(this.playbackRate<0&&this._currentTime<0){a=0;
this._currentTime=0;this._pauseAfterRender=true}}}else{this._currentTime=(this.duration+this._currentTime)%this.duration
}if(!this.paused&&!this.seeking){return this._flow.gotoFrame(a).then(this._onBoundGlobalTimeUpdate)
}};l._onGlobalTimeUpdate=function(){this.trigger("timeupdate");if(this._pauseAfterRender){this.paused=true;
this.trigger("ended")}else{this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}};l._onLocalTimeUpdate=function(){this.seeking=false;this.trigger("timeupdate");
this.trigger("seeked");this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
};l._advanceToTimeLocal=function(a){if(!this.seeking){this.seeking=true;this.trigger("seeking");
this._currentTime=1*a;this._prevTime=null;window.cancelAnimationFrame(this._requestAnimationFrame);
this._flow.gotoFrame(this._timeToFrame(a)).then(this._onBoundLocalTimeUpdate)}};
l._onLoaded=function(){this.trigger("loaded");this.trigger("canplaythrough")};l._nullProperties=function(a){var b;
for(b in a){if(a.hasOwnProperty(b)){a[b]=null}}return a};l.destroy=function(){this.trigger("destroy");
this.pause();this.off();this._flow.destroy();this._flow=this._nullProperties(this._flow);
this._nullProperties(this)};l.load=function(){if(this._flow.resumeLoading()){return
}this.trigger("loadstart");return this._flow.init().then(function(a){var b=function(){this._onLoaded()
}.bind(this);var c=function(){if(this._destroyed===false){this.trigger("error")
}}.bind(this);if(a){return a.then(b,c)}else{b()}}.bind(this))};l.pauseLoading=function(){this._flow.pauseLoading()
};l.play=function(){if(this.paused){this.paused=false;this.trigger("play");this._prevTime=null;
this._requestAnimationFrame=window.requestAnimationFrame(this._boundAdvanceTimeToGlobal)
}return this};l.pause=function(){if(!this.paused){this.paused=true;window.cancelAnimationFrame(this._requestAnimationFrame);
this.trigger("pause")}return this};l.on=function(){this._domEmitter.on.apply(this._domEmitter,arguments)
};l.once=function(){this._domEmitter.once.apply(this._domEmitter,arguments)};l.trigger=function(){this._domEmitter.trigger.apply(this._domEmitter,arguments)
};l.off=function(){this._domEmitter.off.apply(this._domEmitter,arguments)};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(l,{_currentTime:{value:0,enumerable:false,writable:true},_playbackRate:{value:1,enumerable:false,writable:true},currentTime:{get:function(){return this._currentTime*1
},set:l._advanceToTimeLocal,enumerable:true},frameRate:{get:function(){return this._frameRate
},set:function(a){if(isFinite(a)){this._frameRate=a;this.trigger("durationchange")
}},enumerable:true},playbackRate:{get:function(){return this._playbackRate*1},set:function(a){if(isFinite(a)){this._playbackRate=1*a;
this.trigger("ratechange")}},enumerable:true},duration:{get:function(){return this._flow.frameCount/this.frameRate
},enumerable:true}});m.exports=k},{"@marcom/ac-dom-emitter":410}],442:[function(i,n,j){var k=i("../diff/Render");
var l=i("../LoadController");function o(b,a,c){this._keyframes=a;this._imageUrlPattern=c;
this._loadController=new l(b,a,c)}var m=o.prototype;m._initDiffRender=function(a){a.then(function(b){this._images=b;
this.canvas.height=b[0].height;this.canvas.width=b[0].width;this.applyFrame(b[0])
}.bind(this))};m.init=function(a){this.canvas=a||document.createElement("canvas");
this.context=a.getContext("2d");return this._loadController.loadKeyframes().then(this._initDiffRender.bind(this)).then(this._loadController.loadManifest.bind(this._loadController)).then(this.createDiffRender.bind(this))
};m.resumeLoading=function(){return this._loadController.load()};m.pauseLoading=function(){this._loadController.pause()
};m.createDiffRender=function(a){this._diffRender=new k(a,this._imageUrlPattern,this._loadController);
return this._diffRender.init()};m.applyFrame=function(a){var b=this.context;b.drawImage(a,0,0)
};m.calculateRenderCount=function(c,b){var a=0;if(Math.abs(b-c)>=b){c=1;a=1}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
a=1}}if(b>0&&b<this.frameCount-1){return Math.abs(c-b)+a}else{return a}};m.compositeFrames=function(c,b){b=(this.frameCount<b)?this.frameCount-1:(b<0)?0:b;
c=(this.frameCount-2<c)?this.frameCount-2:(c<0)?0:c;var a;if(Math.abs(b-c)>=b){c=1;
this.applyFrame(this._images[0])}else{if(Math.abs(b-c)>=(this.frameCount-b)&&this._images[1]){c=this.frameCount-2;
this.applyFrame(this._images[1])}}a=(c>b)?-1:(c<b)?1:0;if(b>0&&b<this.frameCount-1){while(c!==b){this._diffRender.renderDiff(this.canvas,c);
c+=a}}return Promise.resolve(c)};m.destroy=function(){this._loadController.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(m,{frameCount:{get:function(){return this._diffRender.frames.length+2
},enumerable:true},canvas:{get:function(){return this._canvas},set:function(a){return this._canvas=a
},enumerable:true},mainCompositor:{get:function(){var a=this;while(a._compositor){a=a._compositor
}return a},enumerable:true}});n.exports=o},{"../LoadController":440,"../diff/Render":451}],443:[function(k,j,g){function h(a,b){this._compositor=a;
this._keyframeInterval=b||8;this._keyframes=[]}var i=h.prototype;i._getClosestKeyframe=function(c){var b=c%this._keyframeInterval,a=Math.floor(c/this._keyframeInterval)+((b>(this._keyframeInterval/2))?1:0);
return a};i._getFrameFromKeyframe=function(a){return a*this._keyframeInterval};
i._saveKeyframe=function(a){var c,b=Math.floor(a/this._keyframeInterval);if(a%this._keyframeInterval===0&&!this._keyframes[b]){c=document.createElement("canvas");
c.width=this._compositor.canvas.width;c.height=this._compositor.canvas.height;c.getContext("2d").drawImage(this._compositor.canvas,0,0);
this._keyframes[b]=c}};i.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};i.resumeLoading=function(){return this._compositor.resumeLoading()};i.pauseLoading=function(){return this._compositor.pauseLoading()
};i.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};i.calculateRenderCount=function(b,a){b=this._getFrameFromKeyframe(this._getClosestKeyframe(a));
return this._compositor.calculateRenderCount(b,a)+1};i.compositeFrames=function(d,b){var a=this._getClosestKeyframe(b);
if(this._keyframes[a]&&(this._compositor.calculateRenderCount(d,b)>this.calculateRenderCount(d,b))){d=this._getFrameFromKeyframe(a);
this.applyFrame(this._keyframes[a]);return this._compositor.compositeFrames(d,b).then(function c(){})
}else{return this._compositor.compositeFrames(d,b).then(function c(){},null,this._saveKeyframe.bind(this))
}};i.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true}});j.exports=h},{}],444:[function(m,l,i){var h=m("../../keyframe/Render");
function j(a){this._compositor=a;this._flowDataProvider=this.mainCompositor._loadController._loaders.manifest
}var k=j.prototype;k.init=function(a){this._keyframeDiffRender=new h(this._flowDataProvider._data,this.mainCompositor._imageUrlPattern);
return this._keyframeDiffRender.init()};k.resumeLoading=function(){return this._compositor.resumeLoading()
};k.pauseLoading=function(){return this._compositor.pauseLoading()};k.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};k.applyKeyframe=function(b,a){this._keyframeDiffRender.renderKeyframe(this.canvas,b,a)
};k.compositeFrames=function(b,a){if(!this._isKeyframeDiff(a-1)){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}this.applyKeyframe(a-1);return Promise.resolve(b-1)};k._isKeyframeDiff=function(a){return a in this._keyframeDiffRender._loader._keyframes
};k.calculateRenderCount=function(b,a){return this._compositor.calculateRenderCount.apply(this._compositor,arguments)
};k.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(k,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});l.exports=j},{"../../keyframe/Render":454}],445:[function(g,k,h){function i(a){this._compositor=a;
this._frames=this.mainCompositor._loadController._loaders.manifest._data.frames;
this._superframeInterval=this.mainCompositor._diffRender.flowData.superframeFrequency
}var j=i.prototype;j.init=function(a){return this._compositor.init.apply(this._compositor,arguments)
};j.resumeLoading=function(){return this._compositor.resumeLoading()};j.pauseLoading=function(){return this._compositor.pauseLoading()
};j.applyFrame=function(a){return this._compositor.applyFrame.apply(this._compositor,arguments)
};j.applyKeyframe=function(b,a){this._compositor.applyKeyframe.apply(this._compositor,arguments)
};j.compositeFrames=function(d,b){var a,c;if(b<1||b>this.frameCount-2){return this._compositor.compositeFrames.apply(this._compositor,arguments)
}if(this._isKeyframeDiff(b-1)){a=Math.abs(d-b)===1?true:false;this.applyKeyframe(b-1,a);
return Promise.resolve(d-1)}if(Math.abs(b-d)>this._superframeInterval){c=this._getShortestRender(d,b);
if(this._isKeyframeDiff(c-1)||c<=0||c>=this.frameCount-2){return this._compositeFromSuperKeyframe(c,b)
}}return this._compositor.compositeFrames.apply(this._compositor,[d,b])};j._getShortestRender=function(m,d){var b=this._compositor.calculateRenderCount,c=this._getClosestSuperKeyframe(d-1),f=b.apply(this._compositor,[c,d])+1,a=b.apply(this._compositor,[m,d]);
if(f<=a){return c}else{return m}};j._compositeFromSuperKeyframe=function(a,c){var f=this.canvas.getContext("2d"),d=(a<=0)?this.mainCompositor._images[0]:(a>=this.frameCount-2?this.mainCompositor._images[1]:this._frames[a-1].image),b;
f.drawImage(d,0,0);return this._compositor.compositeFrames.call(this._compositor,a,c)
};j._getClosestSuperFrame=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j._getClosestSuperKeyframe=function(f){var b,a,c,d,n=this._frames.length;if(f<n+1&&f>0){d=f-1;
while(d>=0){if(this._frames[d].type==="keyframe"){b=d+1;break}d-=1}d=f+1;while(d<=n-1){if(this._frames[d].type==="keyframe"){a=d+1;
break}d+=1}}b=b?b:0;a=a?a:this.frameCount;c=(f-b)<(a-f)?b:a;return c};j._isKeyframeDiff=function(a){return this._compositor._isKeyframeDiff.apply(this._compositor,arguments)
};j.destroy=function(){return this._compositor.destroy()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],446:[function(g,k,h){function i(a,b){this._compositor=a;
this._superframeInterval=b||4}var j=i.prototype;j._getClosestSuperframe=function(a){return Math.round(a/this._superframeInterval)*this._superframeInterval
};j.init=function(a){this._screenCanvas=a};j.resumeLoading=function(){return this._compositor.resumeLoading()
};j.pauseLoading=function(){return this._compositor.pauseLoading()};j.applyFrame=function(){this._compositor.applyFrame.apply(this._compositor,arguments)
};j.calculateRenderCount=function(c,a){var b=this._getClosestSuperframe(c);if(Math.abs(b-a)>this._superframeInterval/2){c=b+((c>a)?-1:1)*this._superframeInterval;
return this.calculateRenderCount(c,a)+1}else{return Math.abs(b-a)+1}};j.compositeFrames=function(f,b){var a,d;
if(b<=0||b>=this.frameCount-2){this._compositor.compositeFrames(f,b)}if(f>this.frameCount-2){f=this.frameCount-2
}else{if(f<=0){f=1}}d=this._getClosestSuperframe(f);if(this._compositor.calculateRenderCount(f,b)>this.calculateRenderCount(f,b)){a=this._compositor.compositeFrames(d,d).then(function c(){var m=d+((f>b)?-1:1)*this._superframeInterval;
this._compositor.compositeFrames(d,m).then(function(){return this.compositeFrames(m,b)
}.bind(this))}.bind(this))}else{a=this._compositor.compositeFrames(f,b).then(function c(){}.bind(this))
}a.then(function c(){}.bind(this));return a};j.destroy=function(){return this._compositor.destroy()
};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{frameCount:{get:function(){return this._compositor.frameCount
},enumerable:true},canvas:{get:function(){return this._compositor.canvas},set:function(a){return this._compositor.canvas=a
},enumerable:true},mainCompositor:{get:function(){return this._compositor.mainCompositor
},enumerable:true}});k.exports=i},{}],447:[function(f,i,g){function h(b,a){this.location=b;
this.length=a}i.exports=h},{}],448:[function(i,h,f){function g(){}h.exports=g},{}],449:[function(o,n,i){var k=o("./Manifest"),j=o("./Block"),l;
var m={parseData:function(b){l=0;var a=b.frames.map(this._parseFrame,this);return Object.create(k.prototype,{version:{value:b.version},framecount:{value:b.frameCount},blockSize:{value:b.blockSize},imagesRequired:{value:b.imagesRequired},reversible:{value:b.reversible},superframeFrequency:{value:b.superframeFrequency},frames:{value:a}})
},_valueForCharAt:function(a,c){var b=a.charCodeAt(c);if(b>64&&b<91){return b-65
}if(b>96&&b<123){return b-71}if(b>47&&b<58){return b+4}if(b===43){return 62}if(b===47){return 63
}},_createNumberFromBase64Range:function(a,f,b){var c=0,d;while(b--){d=this._valueForCharAt(a,f++);
c+=(d<<b*6)}return c},_parseFrame:function(r){var a,f=[],b=r.value,c=r.startImageIndex,g=r.startBlockIndex,h,d;
if(r.type==="keyframe"){f.type="keyframe";f.width=r.width;f.height=r.height;f.x=r.x;
f.y=r.y;return f}for(a=0;a<b.length;a+=5){d=this._createNumberFromBase64Range(b,a,3);
h=this._createNumberFromBase64Range(b,a+3,2);f.push(Object.create(j.prototype,{location:{value:d,enumerable:true},length:{value:h,enumerable:true},block:{value:(g+=h)-h,enumerable:true},startImageIndex:{value:c,enumerable:true}}))
}return f}};n.exports=m},{"./Block":447,"./Manifest":448}],450:[function(o,n,j){var i=o("@marcom/ac-asset-loader").AssetLoader,k=o("../processor");
function l(a){this._assetLoader=new i([a])}var m=l.prototype;m.load=function(){return this._assetLoader.load().then(function(a){var b;
if(a&&a.length){b=k.parseData(a[0]);this._data=b}return b}.bind(this))};n.exports=l
},{"../processor":449,"@marcom/ac-asset-loader":423}],451:[function(k,j,g){function h(a,c,b){this.flowData=a;
this.flowData.imageUrlPattern=c;this._loadController=b}var i=h.prototype;i._storeImages=function(a){a.then(function(d){var f=d.length;
this.images=d;this._blocksPerFullDiff=[];this._blockCountUpToIndex=[];var b=0;for(var c=0;
c<f;c++){this._blocksPerFullDiff[c]=(d[c].width/this.flowData.blockSize)*(d[c].height/this.flowData.blockSize);
b+=this._blocksPerFullDiff[c];this._blockCountUpToIndex[c]=b}}.bind(this))};i._applyDiffRange=function(z,d){var E=d.block,y=d.length,A=z.canvas.width/this.flowData.blockSize,w=d.startImageIndex,C=this.images[w].width,B=E%this._blockCountUpToIndex[w],D=C/this.flowData.blockSize,a=(B%D)*this.flowData.blockSize,b=Math.floor(B/(D||1))*this.flowData.blockSize,f=(d.location%A)*this.flowData.blockSize,v=Math.floor(d.location/A)*this.flowData.blockSize,x,c;
while(y){x=Math.min((y*this.flowData.blockSize),z.canvas.width-f,C-a);c=x/this.flowData.blockSize;
z.drawImage(this.images[w],a,b,x,this.flowData.blockSize,f,v,x,this.flowData.blockSize);
y-=c;if(y){if((a+=x)>=C){a=0;b+=this.flowData.blockSize}if((f+=x)>=z.canvas.width){f=0;
v+=this.flowData.blockSize}E+=c}}};i.init=function(){return this._loadController.loadDiffs().then(this._storeImages.bind(this))
};i.renderDiff=function(d,a){var b=d.getContext("2d");a-=1;for(var c=0,f=this.frames[a].length;
c<f;c++){this._applyDiffRange(b,this.frames[a][c])}};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(i,{frames:{get:function(){return this.flowData.frames},set:function(a){this.flowData.frames=a
},enumerable:true}});j.exports=h},{}],452:[function(u,w,s){var p=u("@marcom/ac-object/defaults");
var q=u("./Flow");var v=u("./Player");var x={keyframeCache:8,preload:true};var t={fileFormat:"jpg",baseName:"flow",imageUrlPattern:"###",startframeFileFormat:null,endframeFileFormat:null,basePath:null,manifestPath:null,manifestFileFormat:"json",diffPath:null,framePath:null};
var y=function(a){if(a.lastIndexOf("/")!==a.length-1){a=a+"/"}return a};var o=function(d){var a=d.basePath?y(d.basePath):null;
var f=d.framePath?y(d.framePath):null;var g=d.diffPath?y(d.diffPath):null;var b=d.manifestPath?y(d.manifestPath):null;
var h=d.baseName+"_";var c={};c.startframe=(f||a)+h+"startframe."+(d.startframeFileFormat||d.fileFormat);
c.endframe=(f||a)+h+"endframe."+(d.endframeFileFormat||d.fileFormat);c.imageUrlPattern=(g||a)+h+d.imageUrlPattern+"."+d.fileFormat;
c.manifest=(b||a)+h+"manifest."+d.manifestFileFormat;return c};var n=function(c,b){var d=o(b);
var a=[d.startframe,d.endframe];return new q(c,d.manifest,a,d.imageUrlPattern)};
var r=function(c,b){var g=c||{};var d=b||{};g=p(x,c);d=p(t,b);if(!g.element){c.element=document.createElement("canvas")
}var f=n(g,d);var a=new v(f,g.element);if(g.preload){a.load()}return a};w.exports=r
},{"./Flow":439,"./Player":441,"@marcom/ac-object/defaults":485}],453:[function(l,k,m){var i=l("@marcom/ac-asset-loader").AssetLoader;
function h(d,a){var b,c=d.match(/#/g).length;this._keyframes={};d=d.replace(/([^#]+)(#+)(\..*)/,"$1key_$2$3");
this._imageUrls=[];if(a.frames){a.frames.forEach(function(f,g){if(f.type==="keyframe"){b="0000"+g;
b=b.substring(b.length-c);this._imageUrls.push(d.replace(/#+/g,b));this._keyframes[g]=f
}}.bind(this))}}var j=h.prototype;j.load=function(){if(this._imageUrls.length>0){return new i(this._imageUrls).load()
}return Promise.resolve()};if(typeof Object.defineProperties!=="function"){Object.defineProperties=function(){}
}Object.defineProperties(j,{keyframes:{get:function(){return this._keyframes},enumerable:true}});
k.exports=h},{"@marcom/ac-asset-loader":423}],454:[function(h,m,i){var j=h("./Loader");
function k(a,b){this.flowData=a;this.flowData.imageUrlPattern=b}var l=k.prototype;
l._storeImages=function(d){var b=0,a;if(d&&d.length>0){for(var c in this._loader._keyframes){if(this._loader._keyframes.hasOwnProperty(c)){a=d[b];
this._loader._keyframes[c].image=a;b+=1}}}};l.init=function(){this._loader=new j(this.flowData.imageUrlPattern,this.flowData);
return this._loader.load().then(this._storeImages.bind(this))};l.renderKeyframe=function(t,u,a){var v=t.getContext("2d"),s=this._loader.keyframes[u],g=s.image,c=s.x,d=s.y,b=s.width,f=s.height;
if(a===true){v.drawImage(g,c,d,b,f,c,d,b,f)}else{if(this.flowData.reversible){v.drawImage(g,0,0)
}else{v.drawImage(g,c,d,b,f)}}};m.exports=k},{"./Loader":453}],455:[function(d,g,f){arguments[4][205][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":456,dup:205}],456:[function(d,g,f){arguments[4][206][0].apply(f,arguments)
},{dup:206}],457:[function(d,g,f){g.exports={SharedInstance:d("./ac-shared-instance/SharedInstance")}
},{"./ac-shared-instance/SharedInstance":458}],458:[function(p,m,q){var l=window,n="AC",k="SharedInstance",o=l[n];
var j=(function(){var a={};return{get:function(c,d){var b=null;if(a[c]&&a[c][d]){b=a[c][d]
}return b},set:function(b,d,c){if(!a[b]){a[b]={}}if(typeof c==="function"){a[b][d]=new c()
}else{a[b][d]=c}return a[b][d]},share:function(b,d,c){var f=this.get(b,d);if(!f){f=this.set(b,d,c)
}return f},remove:function(c,d){var b=typeof d;if(b==="string"||b==="number"){if(!a[c]||!a[c][d]){return
}a[c][d]=null;return}if(a[c]){a[c]=null}}}}());if(!o){o=l[n]={}}if(!o[k]){o[k]=j
}m.exports=o[k]},{}],459:[function(d,g,f){g.exports={CID:d("./ac-mvc-cid/CID")}
},{"./ac-mvc-cid/CID":460}],460:[function(q,o,j){var k=q("@marcom/ac-shared-instance").SharedInstance;
var n="ac-mvc-cid:CID",p="1.0.0";function l(){this._idCount=0}var m=l.prototype;
m._cidPrefix="cid";m.getNewCID=function(){var a=this._cidPrefix+"-"+this._idCount;
this._idCount++;return a};o.exports=k.share(n,p,l)},{"@marcom/ac-shared-instance":457}],461:[function(d,g,f){g.exports={Model:d("./ac-mvc-model/Model")}
},{"./ac-mvc-model/Model":462}],462:[function(q,u,p){var l=q("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var t=q("@marcom/ac-object/defaults");var n=q("@marcom/ac-object/create");var s=q("@marcom/ac-mvc-cid").CID;
function r(a){l.call(this);this.attributes=t(this.defaultAttributes,a||{});this.cid=s.getNewCID();
if(this.attributes[this.idAttribute]){this.id=this.attributes[this.idAttribute]
}}var m=l.prototype;var o=r.prototype=n(m);o.defaultAttributes={};o.idAttribute="id";
o.get=function(a){if(!this.attributes){return}return this.attributes[a]};o.set=function(a,b){if(!this.attributes){return
}var d;var f;var g;var h={};var c=false;for(d in a){if(a.hasOwnProperty(d)){g=this.get(d);
if((g===a[d])||(typeof g==="object"&&typeof a[d]==="object"&&JSON.stringify(g)===JSON.stringify(a[d]))){continue
}c=true;this.attributes[d]=a[d];f={value:a[d],previous:g};h[d]=f;this._triggerChange(d,f,b)
}}if(c){this._trigger("change",h,b)}};o.hasAttribute=function(a){if(!this.attributes){return false
}return(this.attributes[a]!==undefined)};o.eachAttribute=function(a,b){if(!this.attributes){return
}var c;for(c in this.attributes){if(this.attributes.hasOwnProperty(c)){a.call(b,{attribute:c,value:this.attributes[c]})
}}};o.destroy=function(){this.trigger("destroy");m.destroy.call(this);var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}};o._trigger=function(c,a,b){b=b||{};if(b.silent!==true){this.trigger(c,a)}};
o._triggerChange=function(c,a,b){return this._trigger("change:"+c,a,b)};u.exports=r
},{"@marcom/ac-event-emitter-micro":455,"@marcom/ac-mvc-cid":459,"@marcom/ac-object/create":484,"@marcom/ac-object/defaults":485}],463:[function(d,g,f){arguments[4][457][0].apply(f,arguments)
},{"./ac-shared-instance/SharedInstance":464,dup:457}],464:[function(d,g,f){arguments[4][458][0].apply(f,arguments)
},{dup:458}],465:[function(d,g,f){arguments[4][459][0].apply(f,arguments)},{"./ac-mvc-cid/CID":466,dup:459}],466:[function(d,g,f){arguments[4][460][0].apply(f,arguments)
},{"@marcom/ac-shared-instance":463,dup:460}],467:[function(d,g,f){g.exports={View:d("./ac-mvc-view/View")}
},{"./ac-mvc-view/View":468}],468:[function(t,v,r){var n=t("@marcom/ac-dom-emitter").DOMEmitter;
var u=t("@marcom/ac-mvc-cid").CID;var s={create:t("@marcom/ac-object/create"),defaults:t("@marcom/ac-object/defaults")};
var o={insertLastChild:t("@marcom/ac-dom-nodes/insertLastChild"),remove:t("@marcom/ac-dom-nodes/remove")};
var p=t("@marcom/ac-classlist/add");var m=t("@marcom/ac-classlist/remove");function w(a){var c;
var d;var b;this.options=s.defaults(this.defaultOptions,a||{});this.cid=u.getNewCID();
this.model=this.options.model;if(this.options.template){this.template=this.options.template
}c=this.options.tagName||this.tagName;d=this.options.element;b=this.options.className||this.className;
if(!d){d=document.createElement(c)}n.call(this,d);if(b){this.addClassName(b)}if(this.options.events){this.delegateEvents(this.options.events)
}}var q=w.prototype=s.create(n.prototype);q.tagName="div";q.defaultOptions={};q.getTagName=function(){return this.el.tagName.toLowerCase()
};q.appendTo=function(a){o.insertLastChild(this.el,a);return this};q.render=function(){};
q.addClassName=function(a){return this._manipulateClassName(a,p)};q.removeClassName=function(a){return this._manipulateClassName(a,m)
};q.destroy=function(){this.emitterTrigger("destroy");this.off();o.remove(this.el);
var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null}}};q.delegateEvents=function(d,c){c=c||this;
var a,b;for(a in d){if(d.hasOwnProperty(a)){b=d[a];if(typeof b==="string"){d[a]=this[d[a]]
}}}this.on(d,c);return this};q._manipulateClassName=function(c,b){var a;if(typeof c==="string"){a=c.split(" ")
}else{if(typeof c==="object"&&Array.isArray(c)){a=c.slice()}else{return this}}a.unshift(this.el);
b.apply(this.el,a);return this};v.exports=w},{"@marcom/ac-classlist/add":392,"@marcom/ac-classlist/remove":400,"@marcom/ac-dom-emitter":410,"@marcom/ac-dom-nodes/insertLastChild":32,"@marcom/ac-dom-nodes/remove":43,"@marcom/ac-mvc-cid":465,"@marcom/ac-object/create":484,"@marcom/ac-object/defaults":485}],469:[function(g,j,h){var i=g("./ac-media-object/factories/createVideo");
var k=g("./ac-media-object/factories/createFlow");j.exports={createFlow:k,createVideo:i}
},{"./ac-media-object/factories/createFlow":470,"./ac-media-object/factories/createVideo":471}],470:[function(i,h,f){var g=i("./../views/FlowView");
h.exports=function(b,a,c){function d(k){throw new Error(k)}if(!a){d("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){d("Please provide a valid mediaSrc object with a basePath property.")
}else{c=c||{};c.type="flow";if(!c.mediaObjectView){c.mediaObjectView=new g(b,a,c)
}return c.mediaObjectView}}}},{"./../views/FlowView":474}],471:[function(j,i,k){var h=j("./../views/VideoView");
var g=j("./../views/IOSInlineVideoView");i.exports=function(b,a,c){function d(f){throw new Error(f)
}if(!a){d("Please provide both a valid container element and a valid mediaSrc object as arguments.")
}else{if(!a.basePath){d("Please provide a valid mediaSrc object with a basePath property.")
}else{c=c||{};c.type="video";if(!c.mediaObjectView){if(c.forceIOSInline||(c.iosInline&&g.prototype.mayUseInlineVideo.call(g.prototype))){c.mediaObjectView=new g(b,a,c)
}else{c.mediaObjectView=new h(b,a,c)}}return c.mediaObjectView}}}},{"./../views/IOSInlineVideoView":475,"./../views/VideoView":476}],472:[function(n,m,o){var k=n("@marcom/ac-mvc-model").Model;
var i=n("@marcom/ac-object");function j(a){k.apply(this,arguments)}var l=j.prototype=i.create(k.prototype);
l.defaultAttributes={type:"video",paused:true,ended:false,ready:false,loadStart:false,loaded:false,error:false,destroyed:false,currentTime:0,playbackRate:1,duration:0,preload:false,autoplay:false,frameRate:24,enhanced:false,looping:false};
l.getPaused=function(){return this.get("paused")};l.getEnded=function(){return this.get("ended")
};l.getReady=function(){return this.get("ready")};l.getDestroyed=function(){return this.get("destroyed")
};l.getLoadStart=function(){return this.get("loadedStart")};l.getLoaded=function(){return this.get("loaded")
};l.getError=function(){return this.get("error")};l.getCurrentTime=function(){return this.get("currentTime")
};l.getPlaybackRate=function(){return this.get("playbackRate")};l.getDuration=function(){return this.get("duration")
};l.getPreload=function(){return this.get("preload")};l.getAutoplay=function(){return this.get("autoplay")
};l.getFrameRate=function(){return this.get("frameRate")};l.getEnhanced=function(){return this.get("enhanced")
};l.getLooping=function(){return this.get("looping")};l.setPaused=function(a){this.set({paused:a})
};l.setEnded=function(a){this.set({ended:a})};l.setReady=function(a){this.set({ready:a})
};l.setDestroyed=function(a){this.set({destroyed:a})};l.setDuration=function(a){this.set({duration:a})
};l.setLoadStart=function(a){this.set({loadStart:a})};l.setLoaded=function(a){this.set({loaded:a})
};l.setError=function(a){this.set({error:a})};l.setCurrentTime=function(a){this.set({currentTime:a})
};l.setPlaybackRate=function(a){this.set({playbackRate:a})};l.setPreload=function(a){this.set({preload:a})
};l.setAutoplay=function(a){this.set({autoplay:a})};l.setFrameRate=function(a){this.set({frameRate:a})
};l.setEnhanced=function(a){this.set({enhanced:a})};l.setLooping=function(a){this.set({looping:a})
};m.exports=j},{"@marcom/ac-mvc-model":461,"@marcom/ac-object":482}],473:[function(q,r,n){var p=q("./../models/MediaModel");
var k=q("@marcom/ac-mvc-view").View;var o=q("@marcom/ac-object");var s=q("@marcom/ac-classlist");
var m=function(b,a,c){k.call(this,{element:b});this.options=c||{};this.mediaSrc=a||"";
this.model=this.options.model||new p(this.options);this._onLoadStartChange=this._onLoadStartChange.bind(this);
this._onLoadedChange=this._onLoadedChange.bind(this);this._onPausedChange=this._onPausedChange.bind(this);
this._onReadyChange=this._onReadyChange.bind(this);this._onErrorChange=this._onErrorChange.bind(this);
this._onEnhancedChange=this._onEnhancedChange.bind(this);this._onCurrentTimeChange=this._onCurrentTimeChange.bind(this);
this._onPlaybackRateChange=this._onPlaybackRateChange.bind(this);this._onDestroyedChange=this._onDestroyedChange.bind(this);
this._onEndedChange=this._onEndedChange.bind(this);this._respondToPlay=this._respondToPlay.bind(this);
this._respondToPause=this._respondToPause.bind(this);this._respondToTimeUpdate=this._respondToTimeUpdate.bind(this);
this._respondToEnded=this._respondToEnded.bind(this);this._respondToDurationChange=this._respondToDurationChange.bind(this);
this._respondToRateChange=this._respondToRateChange.bind(this);this._init()};var l=m.prototype=o.create(k.prototype);
l._init=function(){this._createMediaElement();this._createMediaEmitter();this._createMediaLoader();
this._bindEvents();this._config()};l._createMediaElement=function(){};l._createMediaEmitter=function(){};
l._createMediaLoader=function(){};l._config=function(){if(this.options.preload===true){this._setPreload(true);
this.load()}if(this.options.autoplay===true){this._setAutoplay(true)}if(this.options.looping===true){this._setLooping(true)
}if(this.options.frameRate){this._setFrameRate(this.options.frameRate)}};l._bindEvents=function(){this._bindViewEvents();
this._bindModelEvents()};l._bindModelEvents=function(){this.model.on("change:loadStart",this._onLoadStartChange);
this.model.on("change:loaded",this._onLoadedChange);this.model.on("change:paused",this._onPausedChange);
this.model.on("change:ready",this._onReadyChange);this.model.on("change:error",this._onErrorChange);
this.model.on("change:enhanced",this._onEnhancedChange);this.model.on("change:currentTime",this._onCurrentTimeChange);
this.model.on("change:playbackRate",this._onPlaybackRateChange);this.model.on("change:destroyed",this._onDestroyedChange);
this.model.on("change:ended",this._onEndedChange)};l._onLoadStartChange=function(){this.trigger("loadstart")
};l._onLoadedChange=function(){this.trigger("loaded")};l._onPausedChange=function(a){if(a.value===true){this.trigger("pause");
s.remove(this.el,"mediaObject-playing")}else{this.trigger("play");s.remove(this.el,"mediaObject-ended");
s.add(this.el,"mediaObject-playing")}};l._onReadyChange=function(){this.trigger("ready")
};l._onErrorChange=function(){this.trigger("error")};l._onEnhancedChange=function(){s.add(this.el,"mediaObject-enhanced");
s.add(this.mediaElement,"mediaObject-element");this.trigger("enhanced")};l._onCurrentTimeChange=function(){this.trigger("timeupdate")
};l._onPlaybackRateChange=function(){this.trigger("ratechange")};l._onDestroyedChange=function(){s.remove(this.el,"mediaObject-playing");
s.remove(this.el,"mediaObject-ended");s.remove(this.el,"mediaObject-enhanced");
s.add(this.el,"mediaObject-destroyed");this.trigger("destroyed")};l._onEndedChange=function(a){if(a.value===true){this.trigger("ended")
}};l._bindViewEvents=function(){if(!this.mediaEmitter){return}this.mediaEmitter.on("play",this._respondToPlay);
this.mediaEmitter.on("pause",this._respondToPause);this.mediaEmitter.on("timeupdate",this._respondToTimeUpdate);
this.mediaEmitter.on("ended",this._respondToEnded);this.mediaEmitter.on("durationchange",this._respondToDurationChange);
this.mediaEmitter.on("ratechange",this._respondToRateChange)};l._respondToPlay=function(){this.model.set({ended:false,paused:false})
};l._respondToPause=function(){this.model.setPaused(true)};l._respondToTimeUpdate=function(){var a=0;
if(this.mediaElement.currentTime){a=this.mediaElement.currentTime}else{if(this.mediaEmitter.currentTime){a=this.mediaEmitter.currentTime
}else{return}}if(this.getCurrentTime()!==a){this.model.set({currentTime:a})}};l._respondToEnded=function(){this.model.set({ended:true,paused:true});
s.remove(this.el,"mediaObject-playing");s.add(this.el,"mediaObject-ended")};l._respondToDurationChange=function(){var a=0;
if(this.mediaElement.duration){a=this.mediaElement.duration}else{if(this.mediaEmitter.duration){a=this.mediaEmitter.duration
}else{return}}this.model.set({duration:a})};l._respondToRateChange=function(){var a=0;
if(this.mediaElement.playbackRate){a=this.mediaElement.playbackRate}else{if(this.mediaEmitter.playbackRate){a=this.mediaEmitter.playbackRate
}else{return}}this.model.set({playbackRate:a})};l.enhance=function(){};l.play=function(){};
l.pause=function(){};l.reset=function(){};l.destroy=function(){};l.setCurrentTime=function(a){};
l.setPlaybackRate=function(a){};l.goToFrame=function(a){var b=a/this.model.frameRate;
return this.setCurrentTime(b)};l.goToPercent=function(b){var a=b*this.getDuration();
return this.setCurrentTime(a)};l._setReady=function(a){this.model.setReady(a)};
l._setLoadStart=function(a){this.model.setLoadStart(a)};l._setLoaded=function(a){this.model.setLoaded(a)
};l._setError=function(a){this.model.setError(a)};l._setDuration=function(a){this.model.setDuration(a)
};l._setPreload=function(a){this.model.setPreload(a)};l._setAutoplay=function(a){this.model.setAutoplay(a)
};l._setFrameRate=function(a){this.model.setFrameRate(a)};l._setEnhanced=function(a){this.model.setEnhanced(a)
};l._setDestroyed=function(a){this.model.setDestroyed(a)};l._setLooping=function(a){};
l.getType=function(){return this.model.getType()};l.getPaused=function(){return this.model.getPaused()
};l.getEnded=function(){return this.model.getEnded()};l.getReady=function(){return this.model.getReady()
};l.getLoadStart=function(){return this.model.getLoadStart()};l.getLoaded=function(){return this.model.getLoaded()
};l.getError=function(){return this.model.getError()};l.getDuration=function(){return this.model.getDuration()
};l.getEnhanced=function(){return this.model.getEnhanced()};l.getCurrentTime=function(){return this.model.getCurrentTime()
};l.getCurrentFrame=function(){return Math.floor(this.getCurrentTime()*this.options.frameRate)
};l.getCurrentPercent=function(){return this.model.getCurrentTime()/this.getDuration()
};l.getPlaybackRate=function(){return this.model.getPlaybackRate()};l.getFrameRate=function(){return this.model.getFrameRate()
};l.getPreload=function(){return this.model.getPreload()};l.getAutoplay=function(){return this.model.getAutoplay()
};l.getLooping=function(){return this.model.getLooping()};l.getDestroyed=function(){if(this.model){return this.model.getDestroyed()
}else{return true}};r.exports=m},{"./../models/MediaModel":472,"@marcom/ac-classlist":399,"@marcom/ac-mvc-view":467,"@marcom/ac-object":482}],474:[function(r,s,q){var p=r("./BaseView");
var k=r("@marcom/ac-dom-nodes");var m=r("@marcom/ac-flow").createFlow;var n=r("@marcom/ac-object/create");
var l=function(b,a,c){p.call(this,b,a,c);this._onLoad=this._onLoad.bind(this);this._onError=this._onError.bind(this);
this._onReady=this._onReady.bind(this)};var o=l.prototype=n(p.prototype);o._createMediaElement=function(){this.mediaElement=document.createElement("canvas")
};o._createMediaEmitter=function(){this.flowOptions={element:this.mediaElement,preload:false,keyframeCache:this.options.keyframeCache||false};
this.mediaEmitter=m(this.flowOptions,this.mediaSrc)};o._createMediaLoader=function(){this.mediaLoader=this.mediaEmitter
};o.load=function(){this._setLoadStart(true);this.mediaLoader.once("loaded",this._onLoad);
this.mediaLoader.once("error",this._onError);this.mediaEmitter.once("canplaythrough",this._onReady);
if(!this.loaded){return this._load()}};o._load=function(){return this.mediaLoader.load()
};o._onLoad=function(){this._setLoaded(true)};o._onError=function(){this._setError(true)
};o._onReady=function(){this._setReady(true);this._setDuration(this.mediaEmitter.duration);
this.setPlaybackRate(this.getPlaybackRate());this._totalFrames=this._getTotalFrames();
if(this.getAutoplay()){if(this.getEnhanced===false){this.enhance()}this.play()}};
o._getTotalFrames=function(){return this.getDuration()*this.getFrameRate()};o.enhance=function(){this._setEnhanced(true);
window.requestAnimationFrame(function(){if(this.mediaElement){this._inject()}}.bind(this))
};o._inject=function(){k.insertFirstChild(this.mediaElement,this.el)};o.destroy=function(){if(!this.getDestroyed()){this._remove();
this._setDestroyed(true);this.mediaEmitter.off();this._destroy(this,true)}};o._remove=function(){k.remove(this.mediaElement)
};o._destroy=function(c,b){if(typeof c.off==="function"){c.off()}if(b){var a;for(a in c){if(c.hasOwnProperty(a)){c[a]=null
}}}};o.play=function(){if(this.model.getPaused()===false){return}if(this.mediaEmitter.currentTime>=this.getDuration()){this.setCurrentTime(0)
}if(this.getReady()&&this.mediaEmitter!==null){this.mediaEmitter.play()}};o.pause=function(){if(this.model.getPaused()===true){return
}this.mediaEmitter.pause()};o.reset=function(){if(this.model.getCurrentTime()===0){return
}this.setCurrentTime(0);this.pause()};o.setCurrentTime=function(a){if(a<0){a=0}if(a>this.getDuration()){a=this.getDuration()
}this.mediaEmitter.currentTime=a};o.setPlaybackRate=function(a){this.mediaEmitter.playbackRate=a
};o._setLooping=function(a){this.mediaEmitter.loop=a;this.model.setLooping(a)};
s.exports=l},{"./BaseView":473,"@marcom/ac-dom-nodes":27,"@marcom/ac-flow":438,"@marcom/ac-object/create":484}],475:[function(y,z,x){var o=y("./VideoView");
var q=o.prototype;var A=y("@marcom/ac-clock");var r=y("@marcom/ac-browser");var t=y("@marcom/ac-feature").isHandheld;
var u=y("@marcom/ac-feature").isTablet;var v=y("@marcom/ac-object/create");var s=y("@marcom/ac-classlist/add");
var p=function(b,a,c){o.call(this,b,a,c);if(this.mediaElement.hasAttribute("controls")){this.mediaElement.removeAttribute("controls")
}this.mediaElement.setAttribute(this.inlineAttribute,"");s(this.mediaElement,this.inlineClassName);
this._shouldLoop=false;if(this.shouldUsePolyfill()){this._clock=c.clock||A;this._boundHandleClockDraw=this._handleClockDraw.bind(this);
this._clock.on("draw",this._boundHandleClockDraw)}};var w=p.prototype=v(o.prototype);
w.inlineClassName="mediaObject-ios-inline-video";w.inlineAttribute="playsinline";
w._mayUseInlineVideo=null;w._shouldUsePolyfill=null;w._cannotPlayInlineVideo=null;
w.mayUseInlineVideo=function(){if(this._mayUseInlineVideo!==null){return this._mayUseInlineVideo
}var b=r.os==="iOS"&&t()&&r.version>=8;var a=r.os==="iOS"&&u()&&r.version>=8;this._mayUseInlineVideo=!!b||!!a;
return this._mayUseInlineVideo};w.shouldUsePolyfill=function(){if(this._shouldUsePolyfill!==null){return this._shouldUsePolyfill
}var a=true;if(window.matchMedia){a=!window.matchMedia("(-webkit-video-playable-inline)").matches
}this._shouldUsePolyfill=a;return this._shouldUsePolyfill};w.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var b=r.os==="iOS"&&t()&&r.version<8;var a=r.os==="iOS"&&u()&&r.version<8;this._cannotPlayInlineVideo=b||a;
return this._cannotPlayInlineVideo};w._onEndedChange=function(a){q._onEndedChange.call(this,a)
};w.play=function(){if(!this.shouldUsePolyfill()){q.play.apply(this,arguments);
return}if(this.model.getPaused()===false){return}this.model.setPaused(false);this._clock.start()
};w.pause=function(){if(!this.shouldUsePolyfill()){q.pause.apply(this,arguments);
return}if(this.model.getPaused()===true){return}this.model.setPaused(true);this._clock.stop()
};w.reset=function(){if(!this.shouldUsePolyfill()){q.reset.apply(this,arguments);
return}if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);this.pause()
};w.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var a=function(){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady);this.mediaElement.load()
}.bind(this);var b=function(){this._setError(true);throw new Error("Video failed to load.")
}.bind(this);this.mediaLoader.load().then(a,b)}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};w.destroy=function(){if(!this.shouldUsePolyfill()){q.destroy.apply(this,arguments);
return}if(!this.getDestroyed()){if(this._clock.isRunning()){this._clock.stop()}this._clock.off("draw",this._boundHandleClockDraw);
this._remove();this._setDestroyed(true);this.mediaEmitter.off();this._destroy(this,true)
}};w.setCurrentTime=function(a){if(!this.shouldUsePolyfill()){q.setCurrentTime.apply(this,arguments);
return}if(!this.mediaElement.duration){return}this.model.setCurrentTime(a);this.mediaElement.currentTime=a
};w.setPlaybackRate=function(a){if(!this.shouldUsePolyfill()){q.setPlaybackRate.apply(this,arguments);
return}this.mediaElement.playbackRate=a};w._setLooping=function(a){this.mediaElement.loop=a;
this.model.setLooping(a)};w._handleClockDraw=function(h){var a=this.model.getCurrentTime();
var b=this.model.getPlaybackRate();var i=this.mediaElement.duration;var g=(h.delta/1000)*b;
if(!this.model.getPaused()){a+=g}var d=(a<=0);var f=(a>=i);var j=(b>=0);var c=(b<0);
if(d){a=0}if(f){a=i}if(this._shouldLoop){this._shouldLoop=false;if(j){this.setCurrentTime(g)
}else{this.setCurrentTime(i-g)}return}this.setCurrentTime(a);if((d&&c)||(f&&j)){if(this.model.getLooping()){this._shouldLoop=true
}else{this.pause();this.model.setEnded(true)}}};z.exports=p},{"./VideoView":476,"@marcom/ac-browser":388,"@marcom/ac-classlist/add":392,"@marcom/ac-clock":404,"@marcom/ac-feature":174,"@marcom/ac-object/create":484}],476:[function(F,G,E){var D=F("./BaseView");
var s=D.prototype;var y=F("@marcom/ac-dom-nodes");var v=F("@marcom/ac-dom-emitter").DOMEmitter;
var x=F("@marcom/ac-dom-styles");var w=F("@marcom/ac-asset-loader").AssetLoader;
var t=F("@marcom/ac-asset-loader").Asset.Video;var u=F("@marcom/ac-browser");var z=F("@marcom/ac-feature").isHandheld;
var A=F("@marcom/ac-feature").isTablet;var B=F("@marcom/ac-object/create");var r=function(b,a,c){this.srcForVideoEl=null;
this._cannotPlayInlineVideo=null;D.call(this,b,a,c);this._onLoaded=this._onLoaded.bind(this);
this._onReady=this._onReady.bind(this)};var C=r.prototype=B(D.prototype);C._createMediaElement=function(){this.mediaElement=document.createElement("video")
};C._createMediaEmitter=function(){this.mediaEmitter=new v(this.mediaElement)};
C._createMediaLoader=function(){var b,a;this.mediaSrc.basePath=this._forceTrailingSlash(this.mediaSrc.basePath);
if(this.mediaSrc.splitFileLoading){b=this.mediaSrc.basePath;a=new t(b,{element:this.mediaElement,forceElementLoading:false,split:true});
this.mediaLoader=new w(a)}else{this.mediaSrc.fileFormat=this._checkFileFormat(this.mediaSrc.fileFormat);
b=this.mediaSrc.basePath+this.mediaSrc.filename+this.mediaSrc.fileFormat;this.mediaLoader=this.mediaEmitter.loader;
this.srcForVideoEl=b}};C._forceTrailingSlash=function(a){if(a&&a.lastIndexOf("/")!==a.length-1){a=a+"/"
}return a};C._checkFileFormat=function(a){if(a&&a.lastIndexOf(".")!==0){a="."+a
}return a};C.load=function(){this._setLoadStart(true);if(this.mediaSrc.splitFileLoading){var a=function(){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}.bind(this);var b=function(){this._setError(true);
throw new Error("Video failed to load.")}.bind(this);this.mediaLoader.load().then(a,b)
}else{if(!this.cannotPlayInlineVideo()){this.mediaEmitter.once("loadeddata",this._onLoaded);
this.mediaEmitter.once("canplaythrough",this._onReady)}this.mediaElement.src=this.srcForVideoEl;
if(this.cannotPlayInlineVideo()){this._onLoaded()}else{this.mediaElement.load()
}}};C._onLoaded=function(){this._setLoaded(true)};C.cannotPlayInlineVideo=function(){if(this._cannotPlayInlineVideo!==null){return this._cannotPlayInlineVideo
}var b=u.os==="iOS"&&z();var a=u.os==="iOS"&&A()&&u.version<8;this._cannotPlayInlineVideo=b||a;
return this._cannotPlayInlineVideo};C._onReady=function(){this._setReady(true);
if(this.getAutoplay()){if(!this.getEnhanced()){this.enhance()}this.play()}};C.enhance=function(){this._setEnhanced(true);
window.requestAnimationFrame(function(){if(this.mediaElement.tagName==="VIDEO"){y.insertLastChild(this.mediaElement,this.el);
x.setStyle(this.mediaElement,{visibility:"hidden"});window.requestAnimationFrame(function(){if(this.mediaElement){this.setPlaybackRate(this.getPlaybackRate());
x.setStyle(this.mediaElement,{visibility:"visible"})}}.bind(this))}}.bind(this))
};C.destroy=function(){if(!this.getDestroyed()){this._remove();this._setDestroyed(true);
this.mediaEmitter.off();this._destroy(this,true)}};C._remove=function(){y.remove(this.mediaElement)
};C._destroy=function(c,b){if(typeof c.off==="function"){c.off()}if(b){var a;for(a in c){if(c.hasOwnProperty(a)){c[a]=null
}}}};C._onEndedChange=function(a){s._onEndedChange.call(this,a);if(u.os==="iOS"&&z()&&a.value===true){this.mediaElement.webkitExitFullScreen()
}};C.play=function(){if(this.model.getPaused()===false){return}this.mediaElement.play()
};C.pause=function(){if(this.model.getPaused()===true){return}this.mediaElement.pause()
};C.reset=function(){if(this.model.getCurrentTime()===0){return}this.setCurrentTime(0);
this.pause()};C.setCurrentTime=function(a){if(!this.mediaElement.duration){return
}this.mediaElement.currentTime=a};C.setPlaybackRate=function(a){this.mediaElement.playbackRate=a
};C._setLooping=function(a){this.mediaElement.loop=a;this.model.setLooping(a)};
G.exports=r},{"./BaseView":473,"@marcom/ac-asset-loader":375,"@marcom/ac-browser":388,"@marcom/ac-dom-emitter":410,"@marcom/ac-dom-nodes":27,"@marcom/ac-dom-styles":46,"@marcom/ac-feature":174,"@marcom/ac-object/create":484}],477:[function(j,i,k){var h=j("qs");
i.exports=function g(b,c){var a=h.stringify(b,{strictNullHandling:true});if(a&&c!==false){a="?"+a
}return a}},{qs:478}],478:[function(h,l,i){var j=h("./stringify");var m=h("./parse");
var k={};l.exports={stringify:j,parse:m}},{"./parse":479,"./stringify":480}],479:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",depth:5,arrayLimit:20,parameterLimit:1000,strictNullHandling:false,plainObjects:false,allowPrototypes:false};
j.parseValues=function(f,a){var s={};var t=f.split(a.delimiter,a.parameterLimit===Infinity?undefined:a.parameterLimit);
for(var r=0,c=t.length;r<c;++r){var v=t[r];var d=v.indexOf("]=")===-1?v.indexOf("="):v.indexOf("]=")+1;
if(d===-1){s[i.decode(v)]="";if(a.strictNullHandling){s[i.decode(v)]=null}}else{var b=i.decode(v.slice(0,d));
var u=i.decode(v.slice(d+1));if(!Object.prototype.hasOwnProperty.call(s,b)){s[b]=u
}else{s[b]=[].concat(s[b]).concat(u)}}}return s};j.parseObject=function(b,q,c){if(!b.length){return q
}var p=b.shift();var a;if(p==="[]"){a=[];a=a.concat(j.parseObject(b,q,c))}else{a=c.plainObjects?Object.create(null):{};
var d=p[0]==="["&&p[p.length-1]==="]"?p.slice(1,p.length-1):p;var f=parseInt(d,10);
var o=""+f;if(!isNaN(f)&&p!==d&&o===d&&f>=0&&(c.parseArrays&&f<=c.arrayLimit)){a=[];
a[f]=j.parseObject(b,q,c)}else{a[d]=j.parseObject(b,q,c)}}return a};j.parseKeys=function(d,r,p){if(!d){return
}if(p.allowDots){d=d.replace(/\.([^\.\[]+)/g,"[$1]")}var c=/^([^\[\]]*)/;var q=/(\[[^\[\]]*\])/g;
var a=c.exec(d);var b=[];if(a[1]){if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1])){if(!p.allowPrototypes){return
}}b.push(a[1])}var f=0;while((a=q.exec(d))!==null&&f<p.depth){++f;if(!p.plainObjects&&Object.prototype.hasOwnProperty(a[1].replace(/\[|\]/g,""))){if(!p.allowPrototypes){continue
}}b.push(a[1])}if(a){b.push("["+d.slice(a.index)+"]")}return j.parseObject(b,r,p)
};k.exports=function(q,a){a=a||{};a.delimiter=typeof a.delimiter==="string"||i.isRegExp(a.delimiter)?a.delimiter:j.delimiter;
a.depth=typeof a.depth==="number"?a.depth:j.depth;a.arrayLimit=typeof a.arrayLimit==="number"?a.arrayLimit:j.arrayLimit;
a.parseArrays=a.parseArrays!==false;a.allowDots=a.allowDots!==false;a.plainObjects=typeof a.plainObjects==="boolean"?a.plainObjects:j.plainObjects;
a.allowPrototypes=typeof a.allowPrototypes==="boolean"?a.allowPrototypes:j.allowPrototypes;
a.parameterLimit=typeof a.parameterLimit==="number"?a.parameterLimit:j.parameterLimit;
a.strictNullHandling=typeof a.strictNullHandling==="boolean"?a.strictNullHandling:j.strictNullHandling;
if(q===""||q===null||typeof q==="undefined"){return a.plainObjects?Object.create(null):{}
}var f=typeof q==="string"?j.parseValues(q,a):q;var s=a.plainObjects?Object.create(null):{};
var b=Object.keys(f);for(var r=0,d=b.length;r<d;++r){var c=b[r];var t=j.parseKeys(c,f[c],a);
s=i.merge(s,t,a)}return i.compact(s)}},{"./utils":481}],480:[function(g,k,h){var i=g("./utils");
var j={delimiter:"&",arrayPrefixGenerators:{brackets:function(a,b){return a+"[]"
},indices:function(a,b){return a+"["+b+"]"},repeat:function(a,b){return a}},strictNullHandling:false};
j.stringify=function(r,d,v,t,u){if(typeof u==="function"){r=u(d,r)}else{if(i.isBuffer(r)){r=r.toString()
}else{if(r instanceof Date){r=r.toISOString()}else{if(r===null){if(t){return i.encode(d)
}r=""}}}}if(typeof r==="string"||typeof r==="number"||typeof r==="boolean"){return[i.encode(d)+"="+i.encode(r)]
}var a=[];if(typeof r==="undefined"){return a}var s=Array.isArray(u)?u:Object.keys(r);
for(var f=0,c=s.length;f<c;++f){var b=s[f];if(Array.isArray(r)){a=a.concat(j.stringify(r[b],v(d,b),v,t,u))
}else{a=a.concat(j.stringify(r[b],d+"["+b+"]",v,t,u))}}return a};k.exports=function(d,z){z=z||{};
var w=typeof z.delimiter==="undefined"?j.delimiter:z.delimiter;var u=typeof z.strictNullHandling==="boolean"?z.strictNullHandling:j.strictNullHandling;
var f;var v;if(typeof z.filter==="function"){v=z.filter;d=v("",d)}else{if(Array.isArray(z.filter)){f=v=z.filter
}}var a=[];if(typeof d!=="object"||d===null){return""}var y;if(z.arrayFormat in j.arrayPrefixGenerators){y=z.arrayFormat
}else{if("indices" in z){y=z.indices?"indices":"repeat"}else{y="indices"}}var x=j.arrayPrefixGenerators[y];
if(!f){f=Object.keys(d)}for(var t=0,c=f.length;t<c;++t){var b=f[t];a=a.concat(j.stringify(d[b],b,x,u,v))
}return a.join(w)}},{"./utils":481}],481:[function(g,k,h){var i={};i.hexTable=new Array(256);
for(var j=0;j<256;++j){i.hexTable[j]="%"+((j<16?"0":"")+j.toString(16)).toUpperCase()
}h.arrayToObject=function(b,d){var a=d.plainObjects?Object.create(null):{};for(var c=0,f=b.length;
c<f;++c){if(typeof b[c]!=="undefined"){a[c]=b[c]}}return a};h.merge=function(q,r,f){if(!r){return q
}if(typeof r!=="object"){if(Array.isArray(q)){q.push(r)}else{if(typeof q==="object"){q[r]=true
}else{q=[q,r]}}return q}if(typeof q!=="object"){q=[q].concat(r);return q}if(Array.isArray(q)&&!Array.isArray(r)){q=h.arrayToObject(q,f)
}var b=Object.keys(r);for(var p=0,c=b.length;p<c;++p){var d=b[p];var a=r[d];if(!Object.prototype.hasOwnProperty.call(q,d)){q[d]=a
}else{q[d]=h.merge(q[d],a,f)}}return q};h.decode=function(a){try{return decodeURIComponent(a.replace(/\+/g," "))
}catch(b){return a}};h.encode=function(b){if(b.length===0){return b}if(typeof b!=="string"){b=""+b
}var d="";for(var c=0,f=b.length;c<f;++c){var a=b.charCodeAt(c);if(a===45||a===46||a===95||a===126||(a>=48&&a<=57)||(a>=65&&a<=90)||(a>=97&&a<=122)){d+=b[c];
continue}if(a<128){d+=i.hexTable[a];continue}if(a<2048){d+=i.hexTable[192|(a>>6)]+i.hexTable[128|(a&63)];
continue}if(a<55296||a>=57344){d+=i.hexTable[224|(a>>12)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)];
continue}++c;a=65536+(((a&1023)<<10)|(b.charCodeAt(c)&1023));d+=i.hexTable[240|(a>>18)]+i.hexTable[128|((a>>12)&63)]+i.hexTable[128|((a>>6)&63)]+i.hexTable[128|(a&63)]
}return d};h.compact=function(q,d){if(typeof q!=="object"||q===null){return q}d=d||[];
var r=d.indexOf(q);if(r!==-1){return d[r]}d.push(q);if(Array.isArray(q)){var p=[];
for(var b=0,f=q.length;b<f;++b){if(typeof q[b]!=="undefined"){p.push(q[b])}}return p
}var a=Object.keys(q);for(b=0,f=a.length;b<f;++b){var c=a[b];q[c]=h.compact(q[c],d)
}return q};h.isRegExp=function(a){return Object.prototype.toString.call(a)==="[object RegExp]"
};h.isBuffer=function(a){if(a===null||typeof a==="undefined"){return false}return !!(a.constructor&&a.constructor.isBuffer&&a.constructor.isBuffer(a))
}},{}],482:[function(d,g,f){g.exports={clone:d("./clone"),create:d("./create"),defaults:d("./defaults"),extend:d("./extend"),getPrototypeOf:d("./getPrototypeOf"),isDate:d("./isDate"),isEmpty:d("./isEmpty"),isRegExp:d("./isRegExp"),toQueryParameters:d("./toQueryParameters")}
},{"./clone":483,"./create":484,"./defaults":485,"./extend":486,"./getPrototypeOf":487,"./isDate":488,"./isEmpty":489,"./isRegExp":490,"./toQueryParameters":491}],483:[function(o,n,i){o("@marcom/ac-polyfills/Array/isArray");
var k=o("./extend");var j=Object.prototype.hasOwnProperty;var m=function(c,b){var a;
for(a in b){if(j.call(b,a)){if(b[a]===null){c[a]=null}else{if(typeof b[a]==="object"){c[a]=Array.isArray(b[a])?[]:{};
m(c[a],b[a])}else{c[a]=b[a]}}}}return c};n.exports=function l(a,b){if(b){return m({},a)
}return k({},a)}},{"./extend":486,"@marcom/ac-polyfills/Array/isArray":"@marcom/ac-polyfills/Array/isArray"}],484:[function(g,j,h){var i=function(){};
j.exports=function k(a){if(arguments.length>1){throw new Error("Second argument not supported")
}if(a===null||typeof a!=="object"){throw new TypeError("Object prototype may only be an Object.")
}if(typeof Object.create==="function"){return Object.create(a)}else{i.prototype=a;
return new i()}}},{}],485:[function(g,k,h){var i=g("./extend");k.exports=function j(a,b){if(typeof a!=="object"){throw new TypeError("defaults: must provide a defaults object")
}b=b||{};if(typeof b!=="object"){throw new TypeError("defaults: options must be a typeof object")
}return i({},a,b)}},{"./extend":486}],486:[function(k,j,g){k("@marcom/ac-polyfills/Array/prototype.forEach");
var h=Object.prototype.hasOwnProperty;j.exports=function i(){var a;var b;if(arguments.length<2){a=[{},arguments[0]]
}else{a=[].slice.call(arguments)}b=a.shift();a.forEach(function(c){if(c!=null){for(var d in c){if(h.call(c,d)){b[d]=c[d]
}}}});return b}},{"@marcom/ac-polyfills/Array/prototype.forEach":"@marcom/ac-polyfills/Array/prototype.forEach"}],487:[function(k,j,g){var h=Object.prototype.hasOwnProperty;
j.exports=function i(a){if(Object.getPrototypeOf){return Object.getPrototypeOf(a)
}else{if(typeof a!=="object"){throw new Error("Requested prototype of a value that is not an object.")
}else{if(typeof this.__proto__==="object"){return a.__proto__}else{var c=a.constructor;
var b;if(h.call(a,"constructor")){b=c;if(!(delete a.constructor)){return null}c=a.constructor;
a.constructor=b}return c?c.prototype:null}}}}},{}],488:[function(f,h,g){h.exports=function i(a){return Object.prototype.toString.call(a)==="[object Date]"
}},{}],489:[function(k,j,g){var h=Object.prototype.hasOwnProperty;j.exports=function i(b){var a;
if(typeof b!=="object"){throw new TypeError("ac-base.Object.isEmpty : Invalid parameter - expected object")
}for(a in b){if(h.call(b,a)){return false}}return true}},{}],490:[function(i,h,f){h.exports=function g(a){return window.RegExp?a instanceof RegExp:false
}},{}],491:[function(k,i,g){var h=k("@marcom/ac-url/joinSearchParams");i.exports=function j(a){if(typeof a!=="object"){throw new TypeError("toQueryParameters error: argument is not an object")
}return h(a,false)}},{"@marcom/ac-url/joinSearchParams":477}],492:[function(d,g,f){arguments[4][212][0].apply(f,arguments)
},{dup:212}],493:[function(d,g,f){arguments[4][70][0].apply(f,arguments)},{"./ac-clock/Clock":494,"./ac-clock/ThrottledClock":495,"./ac-clock/sharedClockInstance":496,dup:70}],494:[function(d,g,f){arguments[4][71][0].apply(f,arguments)
},{"@marcom/ac-event-emitter-micro":497,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:71}],495:[function(d,g,f){arguments[4][72][0].apply(f,arguments)
},{"./sharedClockInstance":496,"@marcom/ac-event-emitter-micro":497,"@marcom/ac-polyfills/requestAnimationFrame":"@marcom/ac-polyfills/requestAnimationFrame",dup:72}],496:[function(d,g,f){arguments[4][73][0].apply(f,arguments)
},{"./Clock":494,dup:73}],497:[function(d,g,f){arguments[4][205][0].apply(f,arguments)
},{"./ac-event-emitter-micro/EventEmitterMicro":498,dup:205}],498:[function(d,g,f){arguments[4][206][0].apply(f,arguments)
},{dup:206}],499:[function(o,n,j){o("@marcom/ac-polyfills/Object/create");var k=o("@marcom/ac-event-emitter-micro").EventEmitterMicro;
var l=o("@marcom/ac-clock");function i(a){k.call(this);this.options=a||{};this.min=this.options.min||0;
this.max=this.options.max||1;this._boundHandleClockUpdate=this._handleClockUpdate.bind(this);
this._boundHandleClockDraw=this._handleClockDraw.bind(this);if(this.options.easingFunction){this.easingFunction=this.options.easingFunction
}this.clock=this.options.clock||l;this.usesSharedClock=(this.clock===l);this._isRunning=false;
this.specificity=this.options.specificity||4;this.friction=this.options.friction||10;
this._targetValue=null;this._currentValue=null;this._shouldUpdate=false;this._shouldEmitChange=false
}var m=i.prototype=Object.create(k.prototype);m.destroy=function(){this.trigger("destroy");
this.stop();this.off();if(!this.usesSharedClock){this.clock.destroy()}var a;for(a in this){if(this.hasOwnProperty(a)){this[a]=null
}}this._isRunning=false};m.start=function(){if(!this.clock||this._isRunning){return
}this._bindEvents();this._isRunning=true;this.clock.start()};m.stop=function(){if(!this.clock||!this._isRunning){return
}this._unbindEvents();this._isRunning=false;if(!this.usesSharedClock){this.clock.stop()
}};m.isRunning=function(){return this._isRunning};m.setProgress=function(a){if(this._targetValue===a){return
}this._targetValue=a;this._shouldUpdate=true};m.updateValue=function(f){if(this._currentValue===null){this._currentValue=this._targetValue
}var g=1;if(this.easingFunction){var a=this.max-this.min,w=this.max-(this.max-this._targetValue)/a,d=this.max-(this.max-this._currentValue)/a,v=1-Math.abs(w-d),c=this.easingFunction(v,0,1,1);
g=1+(c-v)}var b=1;if(f&&f.naturalFps!==f.fps){b=f.naturalFps/f.fps}var u=this._targetValue-this._currentValue,t=u*g*b*(1/this.friction),h=parseFloat((this._currentValue+t).toFixed(this.specificity));
if(h===this._currentValue){this._currentValue=this._targetValue}else{this._currentValue=h
}this._shouldEmitChange=true};m._bindEvents=function(){this.clock.on("update",this._boundHandleClockUpdate);
this.clock.on("draw",this._boundHandleClockDraw)};m._unbindEvents=function(){this.clock.off("update",this._boundHandleClockUpdate);
this.clock.off("draw",this._boundHandleClockDraw)};m._handleClockUpdate=function(a){if(this._shouldUpdate){this.updateValue(a)
}if(!this._shouldEmitChange){return}a.progress=this._currentValue;this.trigger("update",a)
};m._handleClockDraw=function(a){if(!this._shouldEmitChange){return}a.progress=this._currentValue;
this.trigger("draw",a);if(this._targetValue===this._currentValue){this._shouldUpdate=false;
this._shouldEmitChange=false;return}this._shouldUpdate=true};n.exports=i},{"@marcom/ac-clock":493,"@marcom/ac-event-emitter-micro":497,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],500:[function(s,t,q){s("@marcom/ac-polyfills/Function/prototype.bind");
s("@marcom/ac-polyfills/Object/create");var o=s("@marcom/ac-dom-events/addEventListener");
var u=s("@marcom/ac-dom-events/removeEventListener");var m=s("@marcom/ac-dom-metrics/getScrollY");
var n=s("./ScrollMotionEmitter");function r(a,b){b=b||{};if(!(a instanceof HTMLElement)){return null
}this.el=a;this.options=b;if(this.options.offsetTop){this.offsetTop=this.options.offsetTop
}if(this.options.offsetBottom){this.offsetBottom=this.options.offsetBottom}this.setEmitterBounds();
this._boundHandleResize=this._handleResize.bind(this);this._bindResizeEvents();
n.call(this,b)}var l=n.prototype;var p=r.prototype=Object.create(l);p.setEmitterBounds=function(){this._elementBounds=this.el.getBoundingClientRect();
var c=m(),a=this._elementBounds.top+c,b=this._elementBounds.bottom+c,d=this.offsetTop||0,f=this.offsetBottom||0;
if(typeof this.offsetTop==="function"){d=this.offsetTop()}if(typeof this.offsetBottom==="function"){f=this.offsetBottom()
}this.min=this.options.min=a+d;this.max=this.options.max=b+f};p.destroy=function(){u(window,"resize",this._boundHandleResize);
u(window,"orientationchange",this._boundHandleResize);n.prototype.destroy.call(this)
};p._bindResizeEvents=function(){o(window,"resize",this._boundHandleResize);o(window,"orientationchange",this._boundHandleResize)
};p._handleClockUpdate=function(a){if(this._shouldUpdateOnResize){this.setEmitterBounds();
this.handleScroll();this._shouldUpdateOnResize=false}n.prototype._handleClockUpdate.call(this,a)
};p._handleResize=function(){this._shouldUpdateOnResize=true};t.exports=r},{"./ScrollMotionEmitter":501,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-events/removeEventListener":10,"@marcom/ac-dom-metrics/getScrollY":492,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],501:[function(r,s,q){r("@marcom/ac-polyfills/Function/prototype.bind");
r("@marcom/ac-polyfills/Object/create");var o=r("@marcom/ac-dom-events/utils/addEventListener");
var t=r("@marcom/ac-dom-events/utils/removeEventListener");var m=r("@marcom/ac-dom-metrics/getScrollY");
var u=r("@marcom/ac-motion-emitter/MotionEmitter");function n(a){a=a||{};if(typeof a.min!=="number"||typeof a.max!=="number"){return null
}u.call(this,a);this.smooth=this.options.smooth||false;if(!this.options.overrideScroll){this._bindScrollEvents()
}}var l=u.prototype;var p=n.prototype=Object.create(l);p.updateValue=function(a){if(this.smooth){return l.updateValue.call(this,a)
}if(this._currentValue===this._targetValue){this._shouldEmitChange=false;return
}this._currentValue=this._targetValue;this._shouldEmitChange=true};p.handleScroll=function(a){if(typeof a!=="number"){a=m()
}var b;if(a<this.min){b=this.min}else{if(a>this.max){b=this.max}else{b=a}}b=(b-this.min)/(this.max-this.min);
this.setProgress(b)};p.destroy=function(){if(this._boundHandleScroll){t(window,"scroll",this._boundHandleScroll)
}return l.destroy.call(this)};p._bindScrollEvents=function(){this._boundHandleScroll=this.handleScroll.bind(this);
o(window,"scroll",this._boundHandleScroll)};s.exports=n},{"@marcom/ac-dom-events/utils/addEventListener":15,"@marcom/ac-dom-events/utils/removeEventListener":17,"@marcom/ac-dom-metrics/getScrollY":492,"@marcom/ac-motion-emitter/MotionEmitter":499,"@marcom/ac-polyfills/Function/prototype.bind":"@marcom/ac-polyfills/Function/prototype.bind","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],502:[function(f,i,g){var h={ua:window.navigator.userAgent,platform:window.navigator.platform,vendor:window.navigator.vendor};
i.exports=f("./parseUserAgent")(h)},{"./parseUserAgent":505}],503:[function(d,g,f){g.exports={browser:{safari:false,chrome:false,firefox:false,ie:false,opera:false,android:false,edge:false,version:{name:"",major:0,minor:0,patch:0,documentMode:false}},os:{osx:false,ios:false,android:false,windows:false,linux:false,fireos:false,chromeos:false,version:{name:"",major:0,minor:0,patch:0}}}
},{}],504:[function(d,g,f){g.exports={browser:[{name:"edge",userAgent:"Edge",version:["rv","Edge"],test:function(a){return(a.ua.indexOf("Edge")>-1||a.ua==="Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
}},{name:"chrome",userAgent:"Chrome"},{name:"firefox",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Opera")===-1)
},version:"Firefox"},{name:"android",userAgent:"Android"},{name:"safari",test:function(a){return(a.ua.indexOf("Safari")>-1&&a.vendor.indexOf("Apple")>-1)
},version:"Version"},{name:"ie",test:function(a){return(a.ua.indexOf("IE")>-1||a.ua.indexOf("Trident")>-1)
},version:["MSIE","rv"],parseDocumentMode:function(){var a=false;if(document.documentMode){a=parseInt(document.documentMode,10)
}return a}},{name:"opera",userAgent:"Opera",version:["Version","Opera"]}],os:[{name:"windows",test:function(a){return(a.platform.indexOf("Win")>-1)
},version:"Windows NT"},{name:"osx",userAgent:"Mac",test:function(a){return(a.platform.indexOf("Mac")>-1)
}},{name:"ios",test:function(a){return(a.ua.indexOf("iPhone")>-1||a.ua.indexOf("iPad")>-1)
},version:["iPhone OS","CPU OS"]},{name:"linux",userAgent:"Linux",test:function(a){return(a.platform.indexOf("Linux")>-1&&a.ua.indexOf("Android")===-1)
}},{name:"fireos",test:function(a){return(a.ua.indexOf("Firefox")>-1&&a.ua.indexOf("Mobile")>-1)
},version:"rv"},{name:"android",userAgent:"Android"},{name:"chromeos",userAgent:"CrOS"}]}
},{}],505:[function(r,s,p){var q=r("./defaults");var m=r("./dictionary");function n(a){return new RegExp(a+"[a-zA-Z\\s/:]+([0-9_.]+)","i")
}function o(g,a){if(typeof g.parseVersion==="function"){return g.parseVersion(a)
}else{var d=g.version||g.userAgent;if(typeof d==="string"){d=[d]}var f=d.length;
var c;for(var b=0;b<f;b++){c=a.match(n(d[b]));if(c&&c.length>1){return c[1].replace(/_/g,".")
}}}}function k(a,d,g){var h=a.length;var f;var c;for(var i=0;i<h;i++){if(typeof a[i].test==="function"){if(a[i].test(g)===true){f=a[i].name
}}else{if(g.ua.indexOf(a[i].userAgent)>-1){f=a[i].name}}if(f){d[f]=true;c=o(a[i],g.ua);
if(typeof c==="string"){var b=c.split(".");d.version.name=c;if(b&&b.length>0){d.version.major=parseInt(b[0]||0);
d.version.minor=parseInt(b[1]||0);d.version.patch=parseInt(b[2]||0)}}else{if(f==="edge"){d.version.name="12.0.0";
d.version.major="12";d.version.minor="0";d.version.patch="0"}}if(typeof a[i].parseDocumentMode==="function"){d.version.documentMode=a[i].parseDocumentMode()
}return d}}return d}function l(a){var b={};b.browser=k(m.browser,q.browser,a);b.os=k(m.os,q.os,a);
return b}s.exports=l},{"./defaults":503,"./dictionary":504}],506:[function(d,g,f){arguments[4][388][0].apply(f,arguments)
},{"./ac-browser/BrowserData":507,"./ac-browser/IE":508,dup:388}],507:[function(d,g,f){arguments[4][389][0].apply(f,arguments)
},{"./data":509,"@marcom/ac-polyfills/Array/prototype.filter":"@marcom/ac-polyfills/Array/prototype.filter","@marcom/ac-polyfills/Array/prototype.some":"@marcom/ac-polyfills/Array/prototype.some",dup:389}],508:[function(d,g,f){arguments[4][390][0].apply(f,arguments)
},{dup:390}],509:[function(d,g,f){arguments[4][391][0].apply(f,arguments)},{dup:391}],510:[function(d,g,f){g.exports={VibrancyOverlay:d("./ac-vibrancy-overlay/VibrancyOverlay"),VibrancyEffect:d("./ac-vibrancy-overlay/VibrancyEffect")}
},{"./ac-vibrancy-overlay/VibrancyEffect":511,"./ac-vibrancy-overlay/VibrancyOverlay":512}],511:[function(q,o,j){var p=q("@marcom/ac-dom-traversal/children");
var l=q("@marcom/ac-browser");var m=q("@marcom/ac-dom-styles/setStyle");function k(a){this.options=a||{};
this.el=a.el;this._shouldChange={};this.effectContainer=this._createEffectContainer();
this.effectClip=this._createEffectClip();this.effectTop=this._createEffectTop();
this.effectBottom=this._createEffectBottom();this.effectContainer.appendChild(this.effectClip);
this.effectClip.appendChild(this.effectTop);var b=this.options.targets||this.findTargets();
this.setTargets(b);this.effectClip.appendChild(this.effectBottom);this.el.appendChild(this.effectContainer);
this.el.classList.add(this.effectActiveClass);if(l.name.toLowerCase()==="firefox"){this.effectContainer.classList.add(this.effectClassName+"-firefox")
}if(this.options.color){this.setColor(this.options.color)}if(this.options.backgroundColor){this.setBackgroundColor(this.options.backgroundColor)
}this.render(true)}var n=k.prototype;n.influence=1;n.colorOpacity=1;n.blurValue=20;
n.saturationValue=1.8;n.baseSaturationValue=1;n.color="transparent";n.backgroundColor="transparent";
n.effectActiveClass="vibrant";n.effectClassName="vibrancy-effect";n.precomposite=function(b){b=b||this.blurValue;
var a=this.influence;return new Promise(function(c,d){window.requestAnimationFrame(this._precomposite.bind(this,0,b,function(){this.setInfluence(a);
this.render(true);c()}.bind(this)))}.bind(this))};n.setInfluence=function(a){this.influence=a;
this._shouldChange.vibrancy=true};n.setBlur=function(a){this.blurValue=a;this._shouldChange.vibrancy=true
};n.setSaturation=function(a){this.saturationValue=a;this._shouldChange.vibrancy=true
};n.setColor=function(a){this.color=a;this._shouldChange.color=true};n.setColorOpacity=function(a){this.colorOpacity=a;
this._shouldChange.colorOpacity=true};n.setBackgroundColor=function(a){this.backgroundColor=a;
this._shouldChange.backgroundColor=true};n.render=function(a){this._updateVibrancy(a);
this._updateColor(a);this._updateColorOpacity(a);this._updateBackgroundColor(a)
};n.getTargetIdx=function(a){var b,c=this.targets.length;for(b=0;b<c;b++){if(a===this.targets[b].el){return b
}}return null};n.reset=function(){if(this.targets){var a,b=this.targets.length;
for(a=0;a<b;a++){m(this.targets[a].el,{filter:""})}}this.targets=[]};n.findTargets=function(){return p(this.el)
};n.setTargets=function(a){this.reset();a.forEach(function(b,d){var c={el:b};this.effectClip.appendChild(b);
b.classList.add(this.effectClassName+"-child");this.targets.push(c)}.bind(this))
};n._createEffectClip=function(){var a=document.createElement("div");a.className=this.effectClassName+"-clip";
return a};n._createEffectTop=function(){var a=document.createElement("div");a.className=this.effectClassName+"-layer "+this.effectClassName+"-top";
return a};n._createEffectBottom=function(){var a=document.createElement("div");
a.className=this.effectClassName+"-layer "+this.effectClassName+"-bottom";return a
};n._createEffectContainer=function(){var a=document.createElement("div");a.className=this.effectClassName;
return a};n._precomposite=function(c,a,b){this.setInfluence(c/a);this.render(true);
if(c===a){b();return}c++;window.requestAnimationFrame(this._precomposite.bind(this,c,a,b))
};n._updateVibrancy=function(a){if(a||this._shouldChange.vibrancy){var b,d=this.targets.length,c=this.blurValue*this.influence,f=this._lerp(this.influence,this.baseSaturationValue,this.saturationValue);
for(b=0;b<d;b++){this._setVibrancyValue(this.targets[b],c,f)}this._shouldChange.vibrancy=false
}};n._setVibrancyValue=function(b,c,a){m(b.el,{filter:"blur("+c+"px) saturate("+a+")"})
};n._updateColor=function(a){if(a||this._shouldChange.color){this.effectTop.style.backgroundColor=this.color;
this._shouldChange.color=false}};n._updateColorOpacity=function(a){if(a||this._shouldChange.colorOpacity){this.effectTop.style.opacity=this.colorOpacity;
this._shouldChange.colorOpacity=false}};n._updateBackgroundColor=function(a){if(a||this._shouldChange.backgroundColor){this.effectBottom.style.backgroundColor=this.backgroundColor;
this._shouldChange.backgroundColor=false}};n._lerp=function(a,b,c){return b+(c-b)*a
};o.exports=k},{"@marcom/ac-browser":506,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-dom-traversal/children":59}],512:[function(q,s,p){var n=q("@marcom/ac-dom-styles/setStyle");
var r=q("@marcom/ac-dom-nodes/remove");var m=q("@marcom/ac-dom-traversal/siblings");
var k=q("./VibrancyEffect");function l(a){this.offset={x:0,y:0};k.call(this,a)}var o=l.prototype=Object.create(k.prototype);
o.backgroundColor="#FFF";o.translate=function(b,d,f){this.offset.x=b;this.offset.y=d;
if(f===true){this._setTransformVal(this.el,this.offset.x,this.offset.y)}var a,c=this.targets.length;
for(a=0;a<c;a++){this._translateTarget(a,-b,-d)}};o.translateTarget=function(b,c,d,f){this.targets[b].offset.x=c;
this.targets[b].offset.y=d;if(f===true){this._setTransformVal(this.targets[b].el,c,d)
}var g=this.targets[b].offset.x-this.offset.x,a=this.targets[b].offset.y-this.offset.y;
this._setTransformVal(this.targets[b].elClone,g,a)};o.findTargets=function(){return m(this.el)
};o._translateTarget=function(b,c,d){var f=this.targets[b].offset.x+c,a=this.targets[b].offset.y+d;
this._setTransformVal(this.targets[b].elClone,f,a)};o.reset=function(){if(this.targets){var a,b=this.targets.length;
for(a=0;a<b;a++){r(this.targets.elClone)}}this.targets=[]};o.setTargets=function(b){this.reset();
var a=this.el.getBoundingClientRect();b.forEach(function(f,c){var g={el:f,offset:{x:0,y:0}};
var d=f.cloneNode(true);this.effectClip.appendChild(d);g.elClone=d;d.classList.add(this.effectClassName+"-child");
d.classList.add(this.effectClassName+"-clone");this.targets.push(g);this.resetPosition(c,a)
}.bind(this))};o.resetPositions=function(){var b=this.el.getBoundingClientRect();
var a,c=this.targets.length;for(a=0;a<c;a++){this.resetPosition(a,b)}};o.resetPosition=function(c,b){b=b||this.el.getBoundingClientRect();
var f=this.targets[c],d=f.elClone,h=f.el.getBoundingClientRect();var g=h.top-b.top-f.offset.y+this.offset.y,a=h.left-b.left-f.offset.x+this.offset.x;
d.style.top=g;d.style.left=a};o._createEffectContainer=function(){var a=document.createElement("div");
a.className=this.effectClassName+" "+this.effectClassName+"-overlay";return a};
o._setTransformVal=function(b,c,a){b.style.transform="translate3d("+c+"px,"+a+"px,"+0+"px)"
};o._setVibrancyValue=function(b,c,a){n(b.elClone,{filter:"blur("+c+"px) saturate("+a+")"})
};s.exports=l},{"./VibrancyEffect":511,"@marcom/ac-dom-nodes/remove":43,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-dom-traversal/siblings":69}],513:[function(G,O,v){G("@marcom/ac-polyfills/Object/create");
var w=G("@marcom/ac-jetpack-lib/core/BaseComponent");var A=w.prototype;var y=G("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var D=G("@marcom/ac-object/defaults");var M=G("@marcom/ac-dom-traversal/querySelector");
var H=G("@marcom/ac-dom-nodes/insertFirstChild");var x=G("@marcom/ac-dom-nodes/insertLastChild");
var K=G("@marcom/ac-dom-styles/setStyle");var E=G("@marcom/ac-media-object");var C=G("@marcom/ac-feature/isRetina");
var F=G("@marcom/ac-useragent");var N=G("./clampViewport");var z="video";var J="frame";
var L="/105/media/{locale}/airpods/2016/94916564_4bfa_4362_8b6c_b5c8fc822e3d";function I(c,h,f,i,d,j,g){this.name="AmbientVideoComponent_"+g;
w.call(this,c,h,f,i,d,j,g);this.element=M("[data-video]");this.retina=C();var b=this.element.getAttribute("data-video")||"{}";
var a={filePath:"",locale:"us",filename:null,fileFormat:"mp4",startframe:true,endframe:true,autoplay:false,preload:false,frameRate:24,playbackRate:1,looping:false,splitFileLoading:false,iosInline:false};
this.options=D(a,JSON.parse(b));if(this.options.iosInline&&F.os.ios){this.options.splitFileLoading=true
}this.viewport=N(i);this.source=this._getSource();this.media=E.createVideo(this.element,this.source,this.options);
this.loaded=false;this.enhanced=false;this.hasPlayed=false;this.hasEnded=false;
this._load()}var B=I.prototype=Object.create(w.prototype);I.prototype.constructor=I;
B.destroy=function(){A.destroy.call(this);if(this.media){this.media.destroy()}};
B.setupEvents=function(){if(!y.AMBIENT_VIDEO){return}if(!this.options.preload){this.media.on("loaded",this._onLoad,this)
}this.media.on("enhanced",this._onEnhanced,this);this.media.on("ended",this._onEnded,this)
};B.teardownEvents=function(){A.teardownEvents.call(this)};B.onScroll=function(c,b,a){this._play()
};B.onSectionWillAppear=function(b,a){this._play()};B.onSectionWillDisappear=function(b,a){this._pause()
};B.onBreakpoint=function(b,d,c,a){this.viewport=N(b)};B.onRetinaChange=function(d,b,c,a){this.retina=d
};B._onLoad=function(){this.loaded=true;this.media.enhance()};B._onEnhanced=function(){this.enhanced=true
};B._onEnded=function(){this.hasEnded=true;this.endFrame.style.display="block";
this.media.mediaElement.style.visibility="hidden";this.media.off()};B._load=function(){this._drawFrames();
if(!this.options.preload){return this.media.load()}this.media.enhance()};B._play=function(){if(this.enhanced&&!this.hasPlayed){this.media.play();
if(this.startFrame){this.startFrame.style.display="none"}this.hasPlayed=true}};
B._pause=function(){if(this.hasPlayed&&!this.hasEnded){this.media.pause();this.hasPlayed=false
}};B._reset=function(){if(this.enhanced&&this.hasPlayed){this.media.reset()}};B._getSource=function(){if(!this.options.filename){return console.error("Video filename required")
}var b=L.replace("{locale}",this.options.locale)+this.options.filePath;var c=this._getFilename();
var a={basePath:b,fileFormat:this.options.fileFormat,splitFileLoading:this.options.splitFileLoading};
if(this.options.splitFileLoading){a.basePath=a.basePath+"split_files/"+c}else{a.filename=c
}return a};B._getFilename=function(){var a=/\${([a-z|\|]+})/g;var b=this.options.filename;
var c=b.match(a)[0];var d;var f;if(!c){return b}c=c.replace(/(\${)|}/g,"");d=c.split("|");
f=d.indexOf(this.viewport);b=b.replace(a,d[f]);if(f<0){b=b.replace(a,d[0])}if(this.retina){b=b+"_2x"
}return b};B._drawFrames=function(a){if(!this.options.startframe&&!this.options.endframe){return
}if(this.options.startframe){this.startFrame=this._getFrame("start");x(this.startFrame,this.element)
}if(this.options.endframe){this.endFrame=this._getFrame("end");this.endFrame.style.display="none";
H(this.endFrame,this.element)}};B._getFrame=function(g){var c="j";var b=document.createElement("figure");
var a=L.replace("{locale}",this.options.locale)+this.options.filePath;var d=this._getFilename();
var f=a+d+"_"+g+J+"."+c+"pg";b.classList.add(z+"-"+J,z+"-"+g+J);K(b,{"background-image":"url("+f+")"});
return b};O.exports=I},{"./clampViewport":517,"@marcom/ac-dom-nodes/insertFirstChild":31,"@marcom/ac-dom-nodes/insertLastChild":32,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-dom-traversal/querySelector":64,"@marcom/ac-feature/isRetina":186,"@marcom/ac-jetpack-lib/core/BaseComponent":355,"@marcom/ac-jetpack-lib/model/EnabledFeatures":361,"@marcom/ac-media-object":469,"@marcom/ac-object/defaults":485,"@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create","@marcom/ac-useragent":502}],514:[function(q,p,j){q("@marcom/ac-polyfills/Object/create");
q("@marcom/ac-polyfills/Element/prototype.classList");var k=q("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=k.prototype;var m=q("@marcom/ac-films");function o(h,f,d,a,c,g,b){this.name="FilmsComponent_"+b;
k.call(this,h,f,d,a,c,g,b);this._el=document.getElementById("film-airpods");this._options={modal:true};
this._initialize()}var n=o.prototype=Object.create(k.prototype);o.prototype.constructor=o;
n._initialize=function(){this._filmController=m.create([this._el],this._options)
};p.exports=o},{"@marcom/ac-films":311,"@marcom/ac-jetpack-lib/core/BaseComponent":355,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],515:[function(r,t,p){r("@marcom/ac-polyfills/Object/create");
r("@marcom/ac-polyfills/Element/prototype.classList");var q=r("@marcom/ac-jetpack-lib/core/BaseComponent");
var l=q.prototype;var s=r("@marcom/ac-jetpack-lib/model/EnabledFeatures");var u=0;
var m=0.1;function n(f,c,b,g,a,d,h){if(!s.CSS_TRANSFORM){return}this.name="ScrollAnimationComponent_"+h;
q.call(this,f,c,b,g,a,d,h);this._el=c;if(g==="small"){return}this._initialize();
this._setInitialState()}var o=n.prototype=Object.create(q.prototype);n.prototype.constructor=n;
o._initialize=function(){this.trackedElement=this.section.elementEngagement.addElement(this.element,{timeToEngage:u,inViewThreshold:m});
this.trackedElement.once("engaged",this._animate.bind(this))};o._setInitialState=function(){this._el.classList.add("initial-state")
};o._animate=function(){this._el.classList.remove("initial-state");this._el.classList.add("animate-in")
};o.onResizeDebounced=function(a,b,c){if(this._el.classList.contains("animate-in")){this._el.classList.remove("animate-in")
}};t.exports=n},{"@marcom/ac-jetpack-lib/core/BaseComponent":355,"@marcom/ac-jetpack-lib/model/EnabledFeatures":361,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-polyfills/Object/create":"@marcom/ac-polyfills/Object/create"}],516:[function(v,x,s){v("@marcom/ac-polyfills/Element/prototype.classList");
var u=v("@marcom/ac-jetpack-lib/core/BaseComponent");var n=u.prototype;var w=v("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var o=v("@marcom/ac-jetpack-lib/utils/Page");var p=v("@marcom/ac-dom-nodes/insertBefore");
var q=v("@marcom/ac-dom-styles/setStyle");var t=v("@marcom/ac-dom-events/addEventListener");
function y(c,a,i,d,h,b,f){if(!w.AMBIENT_VIDEO&&c.element.classList.contains("section-hero")){return
}this.name="StickyComponent_"+f;u.call(this,c,a,i,d,h,b,f);this.section=this.section.element;
this.element=this.element;this._elClassName=this.element.className;this._direction=1;
this._lastScrollPosition=0;this._isSticking=false;this._styleSet=false;this._isInitialStateSet=false;
this._initialScrollPosition=h;this._setProps=this._setProps.bind(this);var g=this.element.getAttribute("data-sticky")||"{}";
g=JSON.parse(g);this.element.classList.add("sticky");t(this.section,"loaded",this._setProps);
this._addPlaceholder(g)}var r=y.prototype=Object.create(u.prototype);y.prototype.constructor=y;
r.onScroll=function(c,d,a){var b=d;this._direction=(b<this._lastScrollPosition)?-1:1;
this._lastScrollPosition=b;if(this._direction===1){if(b>=this._thresholdTop&&b<=this._thresholdBottom&&!this._isSticking){this.element.classList.add("is-sticking");
this.element.classList.remove("is-stuck");this._isSticking=true;this._styleSet=false
}if(b>=this._thresholdBottom&&this._isSticking){this.element.classList.add("is-stuck");
this.element.classList.remove("is-sticking");this._isSticking=false;this._styleSet=false
}}if(this._direction===-1){if(b<=this._thresholdBottom&&b>=this._thresholdTop&&!this._isSticking){this.element.classList.add("is-sticking");
this.element.classList.remove("is-stuck");this._isSticking=true;this._styleSet=false
}if(b<=this._thresholdTop&&this._isSticking){this.element.classList.remove("is-sticking");
this._isSticking=false;this._styleSet=false}}if(this.element.classList.contains("is-stuck")&&!this._styleSet){q(this.element,{top:this._elStuckPosition});
this._styleSet=true}else{if(!this._styleSet){q(this.element,{top:""});this._styleSet=true
}}};r.onResizeImmediate=function(b,c,a){this._setProps();this._isSticking=false;
this._styleSet=false;this.onScroll(b,c,a)};r._setInitialState=function(a){if(a>=this.section.offsetTop&&!this._isInitialStateSet){this.onScroll(null,a);
this._isInitialStateSet=true}};r._setProps=function(){o.deepRefreshAllElementMetrics();
this._thresholdTop=this.section.offsetTop;this._thresholdBottom=this.section.offsetTop+this.section.offsetHeight-this.element.offsetHeight;
this._elStuckPosition=(this.section.offsetHeight-this.element.offsetHeight)+"px";
this._setInitialState(this._initialScrollPosition)};r._addPlaceholder=function(b){if(b.placeholder){var a=document.createElement("div");
a.classList.add(this._elClassName);a.classList.add("sticky-placeholder");p(a,this.element)
}};x.exports=y},{"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-nodes/insertBefore":30,"@marcom/ac-dom-styles/setStyle":58,"@marcom/ac-jetpack-lib/core/BaseComponent":355,"@marcom/ac-jetpack-lib/model/EnabledFeatures":361,"@marcom/ac-jetpack-lib/utils/Page":363,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList"}],517:[function(f,i,g){i.exports=function h(a){if(a==="xlarge"){a="large"
}else{if(a==="xsmall"){a="small"}}return a}},{}],518:[function(E,K,u){E("@marcom/ac-polyfills/Element/prototype.classList");
var w=E("@marcom/ac-jetpack-lib/model/EnabledFeatures");var F=E("../AmbientVideoComponent");
var C=E("@marcom/ac-object/defaults");var J=E("@marcom/ac-dom-traversal/querySelector");
var v=E("@marcom/ac-dom-nodes/remove");var A=E("@marcom/ac-dom-events/addEventListener");
var D=E("@marcom/ac-scroll-motion-emitter/ElementScrollMotionEmitter");var L=E("@marcom/ac-eclipse").Clip;
var G=E("@marcom/ac-eclipse").Timeline;var H=E("@marcom/ac-vibrancy-overlay").VibrancyEffect;
var I=E("@marcom/ac-jetpack-lib/utils/Page");var y=E("./clipScroll");var M=E("./clipIntro");
function B(h,b,f,a,d,g,c){if(!w.AMBIENT_VIDEO){return}F.call(this,h,b,f,a,d,g,c);
this.section=this.section.element;this.videoContainer=J(".section-video-ambient",this.section);
this.videoElement=this.element;this._sectionLoaded=false;this._staticHeroSet=false;
this.introClips=[];this.onScrollMotion=this.onScrollMotion.bind(this);this._playIntro=this._playIntro.bind(this);
this._play=this._play.bind(this);this._setStaticHero=this._setStaticHero.bind(this);
this._scrollMotionEmitter=new D(this.section);this._scrollMotionEmitter.on("draw",this.onScrollMotion,{smooth:true,overrideScroll:true});
this.heroTimeout=setTimeout(this._setStaticHero,2500);A(this.section,"loaded",this._playIntro);
this._initIntroTimeline();this._initScrollTimeline();this._initVibrancyEffect(this.videoContainer)
}var x=F.prototype;var z=B.prototype=Object.create(x);B.prototype.constructor=B;
z.setupEvents=function(){if(!w.AMBIENT_VIDEO){return}x.setupEvents.call(this);A(window,"unload",this._resetScroll.bind(this))
};z.onScroll=function(b,c,a){x.onScroll.call(this,b,c,a);this._scrollMotionEmitter.handleScroll()
};z.onScrollMotion=function(a){if(this._staticHeroSet){return}this.scrollTimeline.progress(a.progress*2);
this.vibrancyEffect.setInfluence(a.progress);this.vibrancyEffect.setColorOpacity(a.progress*2);
this.vibrancyEffect.setBackgroundColor("rgba(255,255,255,"+a.progress+")");this.vibrancyEffect.render()
};z._resetScroll=function(){window.scrollTo(this.element.offsetTop,0)};z._initIntroTimeline=function(){var f={removeStylesOnComplete:true,destroyOnComplete:true};
for(var c=0;c<M.length;c++){var a=M[c];var d=J(a.selector,this.section);var b=new L(d,a.duration,a.propsTo,C(f,a.options));
this.introClips.push(b)}};z._initScrollTimeline=function(){this.scrollTimeline=new G();
for(var c=0;c<y.length;c++){var a=y[c];var d=J(a.selector);var b=new L(d,a.duration,a.propsTo,a.options);
this.scrollTimeline.addClip(b,a.timelinePos)}};z._initVibrancyEffect=function(a){this.vibrancyEffect=new H({el:a,color:"rgba(255,255,255,1)",backgroundColor:"rgba(255,255,255,0)"});
this.vibrancyEffect.setBlur(0);this.vibrancyEffect.precomposite().then(function(){this.vibrancyEffect.setInfluence(0);
this.vibrancyEffect.setColorOpacity(0);this.vibrancyEffect.setBlur(20);this.vibrancyEffect.render()
}.bind(this))};z._playIntro=function(){if(this._staticHeroSet){return}I.deepRefreshAllElementMetrics();
clearTimeout(this.heroTimeout);this._scrollMotionEmitter.start();this._sectionLoaded=true;
this.section.classList.add("reveal");for(var a=0;a<this.introClips.length;a++){this.introClips[a].play()
}var b=setTimeout(this._play,300)};z._setStaticHero=function(){if(!this._sectionLoaded){var a=J(".ambient-video");
var b=J(".sticky-placeholder");var c=J(".hero-headline.sticky");v(b);a.classList.remove("ambient-video");
c.classList.remove("sticky");this.section.classList.add("reveal");this._staticHeroSet=true;
this.destroy();I.deepRefreshAllElementMetrics()}};K.exports=B},{"../AmbientVideoComponent":513,"./clipIntro":519,"./clipScroll":520,"@marcom/ac-dom-events/addEventListener":1,"@marcom/ac-dom-nodes/remove":43,"@marcom/ac-dom-traversal/querySelector":64,"@marcom/ac-eclipse":139,"@marcom/ac-jetpack-lib/model/EnabledFeatures":361,"@marcom/ac-jetpack-lib/utils/Page":363,"@marcom/ac-object/defaults":485,"@marcom/ac-polyfills/Element/prototype.classList":"@marcom/ac-polyfills/Element/prototype.classList","@marcom/ac-scroll-motion-emitter/ElementScrollMotionEmitter":500,"@marcom/ac-vibrancy-overlay":510}],519:[function(d,g,f){g.exports=[{selector:".image-airpods-logo",duration:1.5,propsTo:{opacity:1},options:{propsFrom:{opacity:0,transform:{translateY:"30px"}}}},{selector:".hero-scroll-hint",duration:1.5,propsTo:{opacity:1},options:{propsFrom:{opacity:0,transform:{translateY:"-30px"}}}},{selector:".image-airpods-logo",duration:1.5,propsTo:{opacity:0},options:{delay:10,removeStylesOnComplete:false}}]
},{}],520:[function(d,g,f){g.exports=[{selector:".hero-headline-copy",duration:1,propsTo:{opacity:0},options:{propsFrom:{opacity:1}},timelinePos:0},{selector:".hero-scroll-hint",duration:0.8,propsTo:{opacity:0,transform:{translateY:"-30px"}},options:{propsFrom:{opacity:1}},timelinePos:0},{selector:".hero-intro-copy",duration:2,propsTo:{opacity:1},options:{propsFrom:{opacity:0}},timelinePos:1}]
},{}],521:[function(q,s,n){var o=q("@marcom/ac-jetpack-lib/core/BasePage");var m=q("@marcom/ac-jetpack-lib/model/ComponentMap");
var k=q("@marcom/ac-jetpack-lib/core/LocalNavStyleChanger");var r=q("@marcom/ac-jetpack-lib/model/EnabledFeatures");
var p=q("./shared/model/EnabledFeatures");var l=(function(){return{initialize:function(){Object.assign(m,{HeroComponent:q("./components/hero/HeroComponent"),StickyComponent:q("./components/StickyComponent"),AmbientVideoComponent:q("./components/AmbientVideoComponent"),FilmsComponent:q("./components/FilmsComponent"),ScrollAnimationComponent:q("./components/ScrollAnimationComponent")});
r=r.extend(p);r.init();new o();this.initLocalNavStyleChanger()},initLocalNavStyleChanger:function(){this.localNavEl=document.getElementById("ac-localnav");
this.sectionThemeMap={"localnav-section-dark":"ac-theme-dark","localnav-section-light":"ac-theme-light"};
k.initialize({elementToApplyClassesAgainst:document.body,sectionThemeMap:this.sectionThemeMap,defaultTheme:"ac-theme-light",height:this.localNavEl.clientHeight})
}}}());s.exports=l.initialize()},{"./components/AmbientVideoComponent":513,"./components/FilmsComponent":514,"./components/ScrollAnimationComponent":515,"./components/StickyComponent":516,"./components/hero/HeroComponent":518,"./shared/model/EnabledFeatures":522,"@marcom/ac-jetpack-lib/core/BasePage":356,"@marcom/ac-jetpack-lib/core/LocalNavStyleChanger":358,"@marcom/ac-jetpack-lib/model/ComponentMap":359,"@marcom/ac-jetpack-lib/model/EnabledFeatures":361}],522:[function(d,g,f){g.exports={init:function(){var a=document.getElementsByTagName("html")[0];
this.CSS_TRANSFORM=a.classList.contains("css-transform3d");this.AMBIENT_VIDEO=a.classList.contains("ambient-video")
}}},{}]},{},[521]);