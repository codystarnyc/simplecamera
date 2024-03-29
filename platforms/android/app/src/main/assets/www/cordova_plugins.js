cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "com-snaphappi-plugin-camera-roll-location.CameraRollLocation",
      "file": "plugins/com-snaphappi-plugin-camera-roll-location/www/CameraRollLocation.js",
      "pluginId": "com-snaphappi-plugin-camera-roll-location",
      "clobbers": [
        "cordova.plugins.CameraRollLocation",
        "snappi_CameraRollLocation"
      ]
    },
    {
      "id": "cordova-plugin-android-photo.photo",
      "file": "plugins/cordova-plugin-android-photo/www/Photo.js",
      "pluginId": "cordova-plugin-android-photo",
      "clobbers": [
        "navigator.photo"
      ]
    },
    {
      "id": "cordova-plugin-camera.Camera",
      "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "Camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverOptions",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverOptions"
      ]
    },
    {
      "id": "cordova-plugin-camera.camera",
      "file": "plugins/cordova-plugin-camera/www/Camera.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "navigator.camera"
      ]
    },
    {
      "id": "cordova-plugin-camera.CameraPopoverHandle",
      "file": "plugins/cordova-plugin-camera/www/CameraPopoverHandle.js",
      "pluginId": "cordova-plugin-camera",
      "clobbers": [
        "CameraPopoverHandle"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.geolocation",
      "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
      "pluginId": "cordova-plugin-geolocation",
      "clobbers": [
        "navigator.geolocation"
      ]
    },
    {
      "id": "cordova-plugin-geolocation.PositionError",
      "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
      "pluginId": "cordova-plugin-geolocation",
      "runs": true
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.3",
    "com-snaphappi-plugin-camera-roll-location": "0.1.0",
    "cordova-plugin-android-photo": "5.0.0",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-geolocation": "4.0.1"
  };
});