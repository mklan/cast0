parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
var n={cast0:{id:"6ABD8107"},test:{id:"02A556F6"}};document.getElementById("connect_cast").addEventListener("click",f),document.getElementById("disconnect_cast").addEventListener("click",a);var s=null,e=function(n){return function(e){p("sessionListener / session id: "+e.sessionId),(s=e).addUpdateListener(t),s.addMessageListener(n,i)}};function t(n){p("sessionUpdateListener / isAlive: "+n+" / session id: "+s.sessionId),n||(s=null)}function i(n,s){p("receiverMessage / namespace: "+n+" / message:"+s)}function o(n,s){p("initializeCastApi");var t=new chrome.cast.SessionRequest(n),i=new chrome.cast.ApiConfig(t,e(s),c);chrome.cast.initialize(i,r,u)}function c(n){p("receiverListener / receiver status: "+("available"===n?"found":"list empty"))}function a(){p("disconnect cast"),null!==s?(p("session is not null."),s.stop(l,u)):p("session is null.")}function l(){p("onStopAppSuccess"),s=null}function r(){p("onInitSuccess")}function u(n){p("onError / message: "+JSON.stringify(n))}function d(n){p("onConnectCast / session id: "+n.sessionId),(s=n).sendMessage("urn:x-cast:cast0",{type:"message",text:"VACETA"})}function f(){p("connect cast"),null===s?(p("session is null."),chrome.cast.requestSession(d,u)):p("session is not null.")}window.__onGCastApiAvailable=function(s){console.log("cast api available:",s),s&&o(n.cast0.id,"urn:x-cast:cast0")};var p=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return console.log.apply(console,n)},v=function(){for(var n=[],s=0;s<arguments.length;s++)n[s]=arguments[s];return window.debug&&p.apply(void 0,n)};
},{}]},{},["QCba"], null)
//# sourceMappingURL=sender.a974b997.js.map