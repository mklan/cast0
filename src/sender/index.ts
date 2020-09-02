
// const initializeCastApi = function() {
//   console.log('initializeCastApi')
//   // @ts-ignore
//   cast.framework.CastContext.getInstance().setOptions({
//     receiverApplicationId: '6ABD8107',
//     // @ts-ignore
//     autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
//   });
// };

const apps = {
  cast0: {
    id: '6ABD8107'
  },
  test: {
    id: '02A556F6'
  }
}

document.getElementById('connect_cast').addEventListener('click', connectCast);
document.getElementById('disconnect_cast').addEventListener('click', disconnectCast);

let session = null;


const sessionListener = namespace => (evt) => {
  log('sessionListener / session id: ' + evt.sessionId);
  session = evt;
  session.addUpdateListener(sessionUpdateListener);  
  session.addMessageListener(namespace, receiverMessage);
}

function sessionUpdateListener(isAlive) {
  log('sessionUpdateListener / isAlive: ' + isAlive + ' / session id: ' + session.sessionId);
  if (!isAlive) {
    session = null;
  }
}

function receiverMessage(namespace, message) {
  log('receiverMessage / namespace: ' + namespace + ' / message:' + message);
}

function initializeCastApi(appId, namespace) {
  log('initializeCastApi');
    // @ts-ignore

  // cast.framework.CastContext.getInstance().setOptions({
  //   receiverApplicationId: appId,
  //     // @ts-ignore
  //   autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
  // });

  // @ts-ignore
  var sessionRequest = new chrome.cast.SessionRequest(appId);
  // @ts-ignore
  var apiConfig = new chrome.cast.ApiConfig(
    sessionRequest,
    sessionListener(namespace),
    receiverListener
  );
  // @ts-ignore
  chrome.cast.initialize(
    apiConfig,
    onInitSuccess,
    onError
  );
}

function receiverListener(evt) {
  log('receiverListener / receiver status: ' + (evt === 'available' ? 'found' : 'list empty'));
}


function disconnectCast() {
  log('disconnect cast');
  if (session === null) {
    log('session is null.');
    return;
  }
  log('session is not null.');
  session.stop(onStopAppSuccess, onError);
}

function onStopAppSuccess() {
  log('onStopAppSuccess');
  session = null;
}

function onInitSuccess() {
  log('onInitSuccess');
}

function onError(message) {
  log('onError / message: ' + JSON.stringify(message));
}


function onConnectCast(evt) {
  log('onConnectCast / session id: ' + evt.sessionId);
  session = evt;
}

function connectCast() {
  log('connect cast');
  if (session !== null) {
    log('session is not null.');
    return;
  }
  log('session is null.');
  // @ts-ignore
  chrome.cast.requestSession(
    onConnectCast,
    onError
  );
}


window['__onGCastApiAvailable'] = function(isAvailable) {
  console.log('cast api available:', isAvailable)
  if (isAvailable) {
    initializeCastApi(apps.cast0.id, 'urn:x-cast:cast0');
  }
};

const log = (...l) => console.log(...l);
// @ts-ignore
const debug = (...l) => window.debug && log(...l);