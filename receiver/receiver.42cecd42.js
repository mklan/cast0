parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QCba":[function(require,module,exports) {
var e,n=null,t=null;function a(a){(e=a.cast).receiver.logger.setLevelValue(e.receiver.LoggerLevel.DEBUG),(n=e.receiver.CastReceiverManager.getInstance()).onReady=function(e){i("onReady / data: "+JSON.stringify(e.data)),n.setApplicationState("application status: onready")},n.onSenderConnected=function(e){i("onSenderConnected / data: "+JSON.stringify(e.data)+" / userAgent: "+n.getSender(e.data).userAgent)},n.onSenderDisconnected=function(e){i("onSenderDisconnected / data: "+JSON.stringify(e.data)),0==n.getSenders().length&&(i("close "),close())},n.onSystemVolumeChanged=function(e){i("onSystemVolumeChanged / data: "+JSON.stringify(e.data))},(t=n.getCastMessageBus(a.namespace)).onMessage=function(e){i("onMessage / from: "+e.senderId+" / data: "+JSON.stringify(e.data)),s(e.senderId,e.data)},i("receiver manager started."),n.start({statusText:"application status: starting"})}function s(e,n){}function o(e,n){t.send(e,n)}function i(e){var n=document.createElement("div");n.textContent=JSON.stringify(e),document.getElementById("display").appendChild(n)}function d(e){console.log("cast",e),a({cast:e,namespace:"urn:x-cast:cast0"})}function c(e,n){setTimeout(function(){return window[e]?n(window[e]):c(e,n)},500)}c("cast",d);
},{}]},{},["QCba"], null)
//# sourceMappingURL=receiver.42cecd42.js.map