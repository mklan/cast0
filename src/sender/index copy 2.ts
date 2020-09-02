import { Chromecast, Options, Controller } from '@nolawnchairs/chromecast';

// @ts-ignore
const apps = {
  cast0: {
    id: '6ABD8107'
  },
  test: {
    id: '02A556F6'
  }
}

// Define options
const options = {
  receiverApplicationId: apps.cast0.id,
  autoJoinPolicy: Chromecast.AutoJoinPolicy.ORIGIN_SCOPED
}

// Initialize chromecast service
Chromecast.initializeCastService(options).catch(console.error)
Chromecast.setReadyStateListner(() =>  {
  // Add your logic here. Anything that uses the cast
  // service must be called after the service is ready
  console.log('ready')
})



//document.getElementById('connect_cast').addEventListener('click', connectCast);
//document.getElementById('disconnect_cast').addEventListener('click', disconnectCast);

// @ts-ignore
const log = (...l) => console.log(...l);
// @ts-ignore
const debug = (...l) => window.debug && log(...l);