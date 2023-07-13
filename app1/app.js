// const noble = require('noble');

// noble.startScanning();
// noble.on('discover', peripheral => {
//     console.log(peripheral.advertisement.localName, 'peripheral.advertisement.localName');
//     if (peripheral.advertisement.localName == 'My Phone') {
//         noble.connect(peripheral);
//         peripheral.on('connect', () => {

//             peripheral.notifyUUID('custom_uuid', buffer => {
//                 // got audio data
//             });

//         });

//         let audioBuffer = Buffer.from(audioData)

//         peripheral.notifyUUID('custom_uuid', audioBuffer);
//     }

// })









// Node.js server

const noble = require('noble');

// Configure noble to use local adapter
const fs = require('fs');

// Path to audio file

const express = require('express');
const app = express();
const discoverDevices = () => {
    noble.on('stateChange', (state) => {
        if (state === 'poweredOn') {
            console.log('Looking for Bluetooth devices');
            noble.startScanning([], false);
        } else {
            noble.stopScanning();
        }
    });

    noble.on('discover', this.deviceDiscovered.bind(this));
    setInterval(this.deviceTimer.bind(this), 1000);
}
app.get('/audio', (req, res) => {
    const audioFilePath = './MaxPayne2MainTheme.mp3';
    discoverDevices()
    fs.readFile(audioFilePath, (err, buffer) => {
        if (err) {
            console.log('Error reading audio file:', err);
            return;
        }

        // buffer contains the audio file data as a Buffer
        console.log('Audio file buffer:', buffer);

        // Can now send the buffer via HTTP, WebSocket etc
    });
    // noble.on('stateChange', () => {
    //     noble.startScanning([], false);
    // });

    // Handle device discovery 
    // noble.on('discover', peripheral => {

    //     // Connect to iPhone
    //     if (peripheral.advertisement.localName === 'iPhone') {
    //         noble.connect(peripheral);
    //     }

    // });

    // Handle connection
    // noble.on('connect', peripheral => {

    //     // Set up notification handler
    //     peripheral.on('notify', data => {
    //         // Audio data received
    //     });

    //     // Send audio when requested
    //     peripheral.on('request', () => {
    //         const audioFilePath = './MaxPayne2MainTheme.mp3';

    //         fs.readFile(audioFilePath, (err, buffer) => {
    //             if (err) {
    //                 console.log('Error reading audio file:', err);
    //                 return;
    //             }

    //             // buffer contains the audio file data as a Buffer
    //             peripheral.notify(buffer);
    //             console.log('Audio file buffer:', buffer);

    //             // Can now send the buffer via HTTP, WebSocket etc
    //         });
    //         // let audioBuffer = getAudio();

    //     });

    // });
});

const port = 5000;

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});

// Create HTTP server on localhost
// const server = require('http').createServer((req, res) => {
//     iphonePeripheral.request(); // request audio
// }).listen(5000, '127.0.0.1');


// iPhone side

// Connect to local server


// Handle notify event


// Request audio data
// fetch(`http://${"127.0.0.1:5000"}/audio`)
//     .then(response => {
//         // got audio data
//     });