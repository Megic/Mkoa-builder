(function(k,m){var g="3.7.3-pre";var d=k.html5||{};var h=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;var c=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;var r;var i="_html5shiv";var a=0;var o={};var e;(function(){try{var u=m.createElement("a");u.innerHTML="<xyz></xyz>";r=("hidden" in u);e=u.childNodes.length==1||(function(){(m.createElement)("a");var w=m.createDocumentFragment();return(typeof w.cloneNode=="undefined"||typeof w.createDocumentFragment=="undefined"||typeof w.createElement=="undefined")}())}catch(v){r=true;e=true}}());function f(u,w){var x=u.createElement("p"),v=u.getElementsByTagName("head")[0]||u.documentElement;x.innerHTML="x<style>"+w+"</style>";return v.insertBefore(x.lastChild,v.firstChild)}function l(){var u=j.elements;return typeof u=="string"?u.split(" "):u}function p(u,v){var w=j.elements;if(typeof w!="string"){w=w.join(" ")}if(typeof u!="string"){u=u.join(" ")}j.elements=w+" "+u;b(v)}function q(u){var v=o[u[i]];if(!v){v={};a++;u[i]=a;o[a]=v}return v}function n(x,u,w){if(!u){u=m}if(e){return u.createElement(x)}if(!w){w=q(u)}var v;if(w.cache[x]){v=w.cache[x].cloneNode()}else{if(c.test(x)){v=(w.cache[x]=w.createElem(x)).cloneNode()}else{v=w.createElem(x)}}return v.canHaveChildren&&!h.test(x)&&!v.tagUrn?w.frag.appendChild(v):v}function s(w,y){if(!w){w=m}if(e){return w.createDocumentFragment()}y=y||q(w);var z=y.frag.cloneNode(),x=0,v=l(),u=v.length;for(;x<u;x++){z.createElement(v[x])}return z}function t(u,v){if(!v.cache){v.cache={};v.createElem=u.createElement;v.createFrag=u.createDocumentFragment;v.frag=v.createFrag()}u.createElement=function(w){if(!j.shivMethods){return v.createElem(w)}return n(w,u,v)};u.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/[\w\-:]+/g,function(w){v.createElem(w);v.frag.createElement(w);return'c("'+w+'")'})+");return n}")(j,v.frag)}function b(u){if(!u){u=m}var v=q(u);if(j.shivCSS&&!r&&!v.hasCSS){v.hasCSS=!!f(u,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")}if(!e){t(u,v)}return u}var j={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video",version:g,shivCSS:(d.shivCSS!==false),supportsUnknownElements:e,shivMethods:(d.shivMethods!==false),type:"default",shivDocument:b,createElement:n,createDocumentFragment:s,addElements:p};k.html5=j;b(m);if(typeof module=="object"&&module.exports){module.exports=j}}(typeof window!=="undefined"?window:this,document));
