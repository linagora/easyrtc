EasyRTC Server Example
======================

This folder contains all the files you'll need to create a simple server with EasyRTC, Express, and Socket.io. You can copy these files where you wish.

Files and Folders:
------------------

 - package.json - Provides project information allowing npm to find and install required modules.
 - server.js - Server code.
 - /static/ - Root folder for web server. Put html files here!

 
Installing Required Modules:
----------------------------

 - Type `npm install` in console.
 - This will read the package.json file to find and install the required modules including EasyRTC, Express, and Socket.io.
 - Required modules will go into a new 'node_modules' subfolder


Running the Server:
-------------------

 - Type `node server` in console.


Viewing the examples:
---------------------

 - In your WebRTC enabled browser, visit your server address including the port. By default port 8080 is used.
 - http://localhost:8080/

 Socket.io with autentication samples
 ------------------------------------

 The server_auth.js file shows how to use easyrtc with a 'native' socket.io authentication mechanism.
 Take a look at the code under demos/js/demo_audio_video_simple_auth.js to see how to specify client authentication options.

 - Type 'node server_auth' in console

Then browse to:

- http://localhost:8080/demos/demo_audio_video_simple_auth.html: You will be authorized to create the webrtc channel
- http://localhost:8080/demos/demo_audio_video_simple_badauth.html: You will get a easyrtc error