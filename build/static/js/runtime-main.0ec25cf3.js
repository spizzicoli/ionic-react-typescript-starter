!function(e){function n(n){for(var r,c,s=n[0],a=n[1],d=n[2],f=0,b=[];f<s.length;f++)c=s[f],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&b.push(i[c][0]),i[c]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);for(l&&l(n);b.length;)b.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,s=1;s<t.length;s++){var a=t[s];0!==i[a]&&(r=!1)}r&&(o.splice(n--,1),e=c(c.s=t[0]))}return e}var r={},i={7:0},o=[];function c(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,c),t.l=!0,t.exports}c.e=function(e){var n=[],t=i[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=i[e]=[n,r]}));n.push(t[2]=r);var o,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=function(e){return c.p+"static/js/"+({8:"stencil-ion-avatar_3-ios-entry-js",9:"stencil-ion-avatar_3-md-entry-js",10:"stencil-ion-back-button-ios-entry-js",11:"stencil-ion-back-button-md-entry-js",12:"stencil-ion-backdrop-ios-entry-js",13:"stencil-ion-backdrop-md-entry-js",14:"stencil-ion-card_5-ios-entry-js",15:"stencil-ion-card_5-md-entry-js",16:"stencil-ion-checkbox-ios-entry-js",17:"stencil-ion-checkbox-md-entry-js",18:"stencil-ion-chip-ios-entry-js",19:"stencil-ion-chip-md-entry-js",20:"stencil-ion-col_3-entry-js",21:"stencil-ion-fab_3-ios-entry-js",22:"stencil-ion-fab_3-md-entry-js",23:"stencil-ion-img-entry-js",24:"stencil-ion-infinite-scroll_2-ios-entry-js",25:"stencil-ion-infinite-scroll_2-md-entry-js",26:"stencil-ion-input-ios-entry-js",27:"stencil-ion-input-md-entry-js",28:"stencil-ion-loading-ios-entry-js",29:"stencil-ion-loading-md-entry-js",30:"stencil-ion-popover-ios-entry-js",31:"stencil-ion-popover-md-entry-js",32:"stencil-ion-progress-bar-ios-entry-js",33:"stencil-ion-progress-bar-md-entry-js",34:"stencil-ion-radio_2-ios-entry-js",35:"stencil-ion-radio_2-md-entry-js",36:"stencil-ion-reorder_2-ios-entry-js",37:"stencil-ion-reorder_2-md-entry-js",38:"stencil-ion-ripple-effect-entry-js",39:"stencil-ion-spinner-entry-js",40:"stencil-ion-split-pane-ios-entry-js",41:"stencil-ion-split-pane-md-entry-js",42:"stencil-ion-tab-bar_2-ios-entry-js",43:"stencil-ion-tab-bar_2-md-entry-js",44:"stencil-ion-tab_2-entry-js",45:"stencil-ion-text-entry-js",46:"stencil-ion-textarea-ios-entry-js",47:"stencil-ion-textarea-md-entry-js",48:"stencil-ion-toggle-ios-entry-js",49:"stencil-ion-toggle-md-entry-js",50:"stencil-ion-virtual-scroll-entry-js"}[e]||e)+"."+{0:"288eb3ec",1:"0f56eff2",2:"4e07db5b",3:"7dcb7ad3",4:"6cc73c7d",5:"39cfa5bd",8:"9c141556",9:"37905cc4",10:"57954a72",11:"99d60c83",12:"1cfc797f",13:"22898ecc",14:"05a64357",15:"eb2e22dc",16:"0b609eae",17:"a1085e67",18:"871001a0",19:"43779b56",20:"5b7092e2",21:"670cb914",22:"830af042",23:"82ce1db1",24:"2eee2402",25:"568c616a",26:"4c232100",27:"64adafa7",28:"82a8ddb5",29:"ff362155",30:"76f990c3",31:"a470cab3",32:"e27d4c4d",33:"f8417dd4",34:"2a4c0ef1",35:"f6a86b36",36:"4546f7fb",37:"6d61c4b7",38:"f8c92ecc",39:"188df75d",40:"b00a2db7",41:"c73dc0d5",42:"3f60744d",43:"8059743c",44:"13299fea",45:"275214ff",46:"da86b12c",47:"677b99bc",48:"3b838d79",49:"15b92078",50:"57bae02d",52:"66c4dc06",53:"ed744703",54:"3ed8f594",55:"4f5f6669",56:"29943b4c",57:"d41d00cf",58:"355d3d10",59:"aacd612a",60:"c5571d50",61:"44fc409c",62:"43a2d51f",63:"5f3923d2",64:"582f8cda",65:"871e3ea0",66:"a5d2d11f",67:"3d0af546",68:"25f4e1ed",69:"3e600548",70:"1ffb5d09",71:"b0874b4f",72:"e57f5431",73:"30ca9b74",74:"422b1e2d",75:"babac2d3",76:"4a8e14f5",77:"5439d99e",78:"116c7dd0",79:"806d1ede",80:"337189c5",81:"8288e32c",82:"7db2db5b",83:"52730b60",84:"551b0ebd",85:"bc18fa69",86:"e4ca91cc",87:"d53fbf0b",88:"eec8b279",89:"0d4ff7c9",90:"18b66a75",91:"ab41fcb7"}[e]+".chunk.js"}(e);var a=new Error;o=function(n){s.onerror=s.onload=null,clearTimeout(d);var t=i[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;a.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",a.name="ChunkLoadError",a.type=r,a.request=o,t[1](a)}i[e]=void 0}};var d=setTimeout((function(){o({type:"timeout",target:s})}),12e4);s.onerror=s.onload=o,document.head.appendChild(s)}return Promise.all(n)},c.m=e,c.c=r,c.d=function(e,n,t){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(c.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)c.d(t,r,function(n){return e[n]}.bind(null,r));return t},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=this["webpackJsonpionic-react-typescript-starter"]=this["webpackJsonpionic-react-typescript-starter"]||[],a=s.push.bind(s);s.push=n,s=s.slice();for(var d=0;d<s.length;d++)n(s[d]);var l=a;t()}([]);
//# sourceMappingURL=runtime-main.0ec25cf3.js.map