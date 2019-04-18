/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    image: null,
	imgOptions:null,
    
    initialize: function() {
      // Use deviceready on a device in in the emulator
           //     document.addEventListener('deviceready', this.onDeviceReady, false);
      // Use DOMContentLoaded in a browser
        document.addEventListener("DOMContentLoaded", this.onDeviceReady, false);
    },
    
    onDeviceReady: function() {
        document.querySelector("#btn").addEventListener("click", app.callCamera);
		console.log("button listener added");
		app.image = document.querySelector("#image");
    },
    
    callCamera: function ( ) {
		app.imgOptions = {quality : 75,
				destinationType: Camera.DestinationType.DATA_URL,
  				sourceType: Camera.PictureSourceType.CAMERA,
				allowEdit : false,
				encodingType : Camera.EncodingType.JPEG,
				mediaType: Camera.MediaType.PICTURE,
				targetWidth : 200,
				cameraDirection : Camera.Direction.FRONT,
                saveToPhotoAlbum : false
                
			   };
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        navigator.camera.getPicture( app.imgSuccess, app.imgFail, app.imgOptions );
    },
    
    
	imgSuccess: function ( imageData ) {
		//got an image back from the camera
   		app.image.src = "data:image/jpeg;base64," + imageData;
		console.log("Image loaded into interface");
		//clear memory in app
		navigator.camera.cleanup();
	},
    
	imgFail: function ( msg ) {
		console.log("Failed to get image: " +  msg);
    }
    
    
    
};
 // onSuccess Callback
    // This method accepts a Position object, which contains the
    // current GPS coordinates
    //
    var onSuccess = function(position) {
        alert('Latitude: '          + position.coords.latitude          + '\n' +
              'Longitude: '         + position.coords.longitude         + '\n' +
              'Altitude: '          + position.coords.altitude          + '\n' +
              'Accuracy: '          + position.coords.accuracy          + '\n' +
              'Altitude Accuracy: ' + position.coords.altitudeAccuracy  + '\n' +
              'Heading: '           + position.coords.heading           + '\n' +
              'Speed: '             + position.coords.speed             + '\n' +
              'Timestamp: '         + position.timestamp                + '\n');
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

   
app.initialize();