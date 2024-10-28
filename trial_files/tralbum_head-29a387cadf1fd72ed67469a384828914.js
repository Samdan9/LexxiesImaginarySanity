!function(){"use strict";document.currentScript.dataset.site&&(window.SiteData=JSON.parse(document.currentScript.dataset.site)),document.currentScript.dataset.band&&(window.BandData=JSON.parse(document.currentScript.dataset.band)),document.currentScript.dataset.embed&&(window.EmbedData=JSON.parse(document.currentScript.dataset.embed)),document.currentScript.dataset.fan&&(window.FanData=JSON.parse(document.currentScript.dataset.fan)),document.currentScript.dataset.bandFollowInfo&&(window.BandFollowData=JSON.parse(document.currentScript.dataset.bandFollowInfo)),document.currentScript.dataset.tralbumCollectInfo&&(window.TralbumCollectInfo=JSON.parse(document.currentScript.dataset.tralbumCollectInfo)),document.currentScript.dataset.tralbum&&(window.TralbumData=JSON.parse(document.currentScript.dataset.tralbum)),document.currentScript.dataset.payment&&(window.PaymentData=JSON.parse(document.currentScript.dataset.payment)),document.currentScript.dataset.referrerToken&&(window.ReferrerToken=JSON.parse(document.currentScript.dataset.referrerToken))}(),function(){"use strict";window.TrackpipeCartStartup={init_data:document.currentScript.dataset.cart&&JSON.parse(document.currentScript.dataset.cart),renderInitial:function(t){if(window.MediaView&&"phone"==MediaView.mode){const e=$("#menubar #cart-item")[0];e?(Log.note("inserting mobile cart after element #menubar"),$("#menubar").after(t),$("#sidecartHeader").remove(),TrackpipeCartStartup.prepareCartPhone(e)):$("#propOpenWrapper").prepend(t)}else document.write(t)},prepareCartPhone:function(t){const e=$("a",t)[0];e&&(Log.note("hijacking click on cart element '#menubar #cart-item a':"),$(e).on("click",!1)),TrackpipeCartStartup.init_data&&TrackpipeCartStartup.init_data.items&&TrackpipeCartStartup.init_data.items.length&&($("#menubar").removeClass("extended"),$("#cart-item").show().find(".cart-number").text(TrackpipeCartStartup.init_data.items.length))},renderInitialPhone:function(){const t=$("#sidecart");if(!t[0])return;const e=$("#menubar #cart-item")[0];e?(t.insertAfter("#menubar"),$("#sidecartHeader").remove(),TrackpipeCartStartup.prepareCartPhone(e)):t.prependTo("#propOpenWrapper")}},$(document).ready((function(){window.Cart&&TrackpipeCartStartup.init_data&&Cart.startup(TrackpipeCartStartup.init_data)}))}(),function(t){"use strict";let e=0,n=0;t.fn.bcTruncate=function(r,i,a){if("string"==typeof r)return function(e,n){n=n.filter((function(){return t(this).data("bcTruncate")})).toArray(),t.each(n,(function(n,r){const i=t(r).find(".bcTruncateMore"),a=t(r).find(".bcTruncateEllipsis");i?("toggle"==e&&(e="none"==i.css("display")?"expand":"collapse"),"expand"==e?(t(i).show(),t(a).hide(),Log.debug("bcTruncate: external expand "+a.html(),r)):(t(i).hide(),t(a).show(),Log.debug("bcTruncate: external collapse",r))):Log.debug("truncate more wrapper not found")}))}(r,this),this;const o=window.MediaView&&"phone"==MediaView.mode;if(""!=i&&""!=a||Log.server("bcTruncate - null strings for more/less more ["+i+"] less ["+a+"]","error"),void 0!==i&&""!=i||(i=o?"see&nbsp;more":"more"),void 0!==a&&""!=a||(a=o?"see&nbsp;less":"less"),r=r||{},!(r=t.extend({truncate:!0,click:!0,textHints:!0,splitTrigger:16,splitDisplay:12,lastLineSlop:null,ellipsisHTML:"<span class='bcTruncateEllipsis'>...</span>",moreHTML:i,lessHTML:a},r)).truncate)return;if(r.noLess&&(r.lessHTML=""),r.noMore&&(r.moreHTML=""),!window.Capabilities||!Capabilities.hasCSSOM())return void Log.info("bcTruncate: browser doesn't have Range and ClientRect support; aborting");const s=this.filter((function(){return!t(this).data("bcTruncate")})).toArray(),p=[];let c=0,l=document.createRange();function u(e,n,r,i){let a=e;const o=r?a:document,s=i?"previousSibling":"nextSibling",p=i?"lastChild":"firstChild";for(;a;){if(1==a.nodeType){if(("inline"==t(a).css("display")||a===e)&&a[p]){a=a[p];continue}}else if(3==a.nodeType){if(!1===n(a))return}if(a===o)return;for(;!a[s];)if(a=a.parentNode,a===o)return;a=a[s]}}function d(e,n,r,i,a){let o,s,p=0;return function(t,e,n,r){let i,a,o;const s=r?function(){return o>=0}:function(){return o<a},p=r?function(){o--}:function(){o++};u(t,(function(t){for(i=t.nodeValue,a=i.length,o=null!==e?e:r?a-1:0;s();p()){const e=n(i.charAt(o),t,o);if(!1===e)return e}e=null}),!1,r)}(n,r,(function(n,r,c){const l=r.parentNode;if(l!==e&&!t.contains(e,l))return!1;if(p>a)return!1;if(p==i&&(o=[r,c]),p>=i){if(-1!=n.search(/[\s\-\.,;\u3001\u3002]/))s=[r,c];else if(s)return!1}p++}),!0),s||o}function f(e){const n=[];!function(e,n){let r=0,i=[],a=null,o=null;u(e,(function(e){l.selectNode(e);const s=l.getClientRects();return t.each(s,(function(t,p){return a&&(l=a,!((c=p).top>=l.top&&c.bottom<=l.bottom||l.top>=c.top&&l.bottom<=c.bottom))&&(o=n(r,i),r++,i=[]),!1!==o&&(i.push({rect:p,node:e,nodeRects:s}),p.height>0&&(a=p)),o;var c,l})),o}),!0),i.length&&n(r,i)}(e,(function(i,a){if(n.push(a),i==r.splitTrigger){const i=t('<span class="bcTruncateMore" style="display:none">'),a=t(r.textHints?"<span>&nbsp; <a>"+r.moreHTML+"</a></span>":""),s=t("<span>"+r.ellipsisHTML+"</span>");let p=function(e){const n=e[0],r=n.rect,i=n.node,a=n.nodeRects;let o=0,s=0,p=!1;t.each(a,(function(t,e){o+=e.width,p||(e!==r?s+=e.width:p=!0)}));const c=i.nodeValue.replace(/\s{2,}/g," ").length;return[i,Math.floor(s/(o/c))]}(n[r.splitDisplay]);const c=null!==r.lastLineSlop?r.lastLineSlop:a.text().length+s.text().length+2;if(p=d(e,p[0],p[1],c,100),p){let n;l.selectNode(e.lastChild),l.setStart(p[0],p[1]),function(t,e){t.appendChild(e.extractContents()),e.insertNode(t)}(i.get(0),l),i.before(s).after(a),n=a.find("a").length>0?a:t(e);let c="collapsed";r.click&&n.click((function(){t([i,s]).toggle(),"collapsed"==c?(a.find("a").html(r.lessHTML),Log.debug("bcTruncate: expand",e),c="expanded"):(a.find("a").html(r.moreHTML),o&&Dom.scrollToElement(e,null,!0),Log.debug("bcTruncate: collapse",e),c="collapsed")}))}return!1}}))}function m(r,i){const a=function(t){const e=(new Date).getTime();return t(),(new Date).getTime()-e}((function(){f(r)}));e+=a,t(r).data("bcTruncate",!0),Log.debug("bcTruncate "+ ++n+" ("+(i?"deferred; ":"")+a+"ms; total: "+e+"ms): ",r)}function g(){l.detach(),l=null}return t.each(s,(function(t,n){e>25?p.push(n):m(n)})),c=p.length,c?t(document).ready((function(){var t=setInterval((function(){m(p.shift(),!0),p.length||(clearInterval(t),g())}),0)})):g(),this}}(jQuery);var TruncateProfile={buyItem:{desktop:{},phone:{splitTrigger:8,splitDisplay:5}},bio:{desktop:{splitTrigger:12,splitDisplay:7},phone:{splitTrigger:10,splitDisplay:7}},nmm:{desktop:{splitTrigger:18,splitDisplay:14},phone:{splitTrigger:10,splitDisplay:7}},tralbum_long:{desktop:{truncate:!1},phone:{splitTrigger:14,splitDisplay:10}},tralbum_about:{desktop:{splitTrigger:23,splitDisplay:20,noLess:!0},phone:{splitTrigger:14,splitDisplay:10}},fan_bio:{desktop:{truncate:!1},phone:{textHints:!1,splitTrigger:5,splitDisplay:3}},fan_bio_2017:{desktop:{splitTrigger:5,splitDisplay:3,noLess:!0},phone:{splitTrigger:5,splitDisplay:3,noLess:!0}},fan_why:{desktop:{truncate:!1},phone:{textHints:!1,click:!1,splitTrigger:6,splitDisplay:3}},fan_why_mini:{desktop:{splitTrigger:2,splitDisplay:2},phone:{splitTrigger:2,splitDisplay:2}},subscribe:{desktop:{splitTrigger:10,splitDisplay:6},phone:{splitTrigger:4,splitDisplay:4}},footer_four:{desktop:{splitTrigger:4,splitDisplay:4,noLess:!0,moreHTML:"",lastLineSlop:2}},footer_two:{desktop:{splitTrigger:2,splitDisplay:2,noLess:!0,noMore:!0,lastLineSlop:3}},footer_one:{desktop:{splitTrigger:1,splitDisplay:1,noLess:!0,noMore:!0}},footer_fan_comment:{desktop:{splitTrigger:4,splitDisplay:4,noLess:!0,noMore:!0,lastLineSlop:30}},community_comment:{desktop:{splitTrigger:4,splitDisplay:4,noLess:!0,noMore:!1},phone:{splitTrigger:4,splitDisplay:4,noLess:!0,noMore:!1}},get:function(t){const e=window.MediaView&&MediaView.mode||"desktop";return this[t][e]}};
