var castReceiverManager = null;
var messageBus = null;

// @ts-ignore
const cast = window.cast;

function initializeCast(googleCastonf) {

  cast.receiver.logger.setLevelValue(cast.receiver.LoggerLevel.DEBUG);
  castReceiverManager = cast.receiver.CastReceiverManager.getInstance();

  castReceiverManager.onReady = function(evt) {
    log2('onReady / data: ' + JSON.stringify(evt.data));
    window.castReceiverManager.setApplicationState('application status: onready');
  }

  castReceiverManager.onSenderConnected = function(evt) {
    log2('onSenderConnected / data: ' + JSON.stringify(evt.data) + ' / userAgent: ' + window.castReceiverManager.getSender(evt.data).userAgent);
  }

  castReceiverManager.onSenderDisconnected = function(evt) {
    log2('onSenderDisconnected / data: ' + JSON.stringify(evt.data));
    if (window.castReceiverManager.getSenders().length == 0) {
      log2('close window.');
      window.close();
    }
  }

  castReceiverManager.onSystemVolumeChanged = function(evt) {
    log2('onSystemVolumeChanged / data: ' + JSON.stringify(evt.data));
  }

  messageBus = window.castReceiverManager.getCastMessageBus(googleCastonf.namespace);

  messageBus.onMessage = function(evt) {
    log2('onMessage / from: ' + evt.senderId + ' / data: ' + JSON.stringify(evt.data));
    receiveMessage(evt.senderId, evt.data);
  }

  log2('receiver manager started.');
  window.castReceiverManager.start({statusText: 'application status: starting'});

}

function receiveMessage(id, data) {
}

function sendMessage(id, data) {
  messageBus.send(id, data);
}

function log2(message) {
  var elem = document.createElement('div');
  elem.textContent = message;
  document.getElementById('display').appendChild(elem);
}

function initialize() {
  initializeCast({ namespace: 'urn:x-cast:cast0'});

  //fullscreen
  var elem = document.getElementById("local");
if (elem.requestFullscreen) {
  elem.requestFullscreen();
}
}

window.addEventListener('load', initialize);