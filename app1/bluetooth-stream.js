// Import modules
const webBluetooth = require('web-bluetooth');
const WebSocket = require('websocket').w3cwebsocket;

// WebSockets connection to App 2
const socket = new WebSocket('ws://app2.com:port');

// Connect to Bluetooth device
const device =  webBluetooth.requestDevice({
  // Filter on devices
});

// Connect to GATT server
const server =  device.gatt.connect();

// Get microphone service
const service =  server.getPrimaryService('microphone');

// Get microphone characteristic
const characteristic =  service.getCharacteristic('microphone');

// Start notifications
characteristic.startNotifications();

// Listen for microphone data
characteristic.addEventListener('characteristicvaluechanged', async (event) => {

  // Audio data is in event.target.value

  // Preprocess data if needed...

  // Send audio data to App 2
  socket.send(data);

});