cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com-snaphappi-plugin-camera-roll-location/www/CameraRollLocation.js",
        "id": "com-snaphappi-plugin-camera-roll-location.CameraRollLocation",
        "pluginId": "com-snaphappi-plugin-camera-roll-location",
        "clobbers": [
            "cordova.plugins.CameraRollLocation",
            "snappi_CameraRollLocation"
        ]
    },
    {
        "file": "plugins/cordova-plugin-android-photo/www/Photo.js",
        "id": "cordova-plugin-android-photo.photo",
        "pluginId": "cordova-plugin-android-photo",
        "clobbers": [
            "navigator.photo"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraConstants.js",
        "id": "cordova-plugin-camera.Camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "Camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/CameraPopoverOptions.js",
        "id": "cordova-plugin-camera.CameraPopoverOptions",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "CameraPopoverOptions"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/www/Camera.js",
        "id": "cordova-plugin-camera.camera",
        "pluginId": "cordova-plugin-camera",
        "clobbers": [
            "navigator.camera"
        ]
    },
    {
        "file": "plugins/cordova-plugin-camera/src/browser/CameraProxy.js",
        "id": "cordova-plugin-camera.CameraProxy",
        "pluginId": "cordova-plugin-camera",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-whitelist": "1.3.3",
    "com-snaphappi-plugin-camera-roll-location": "0.1.0",
    "cordova-plugin-android-photo": "5.0.0",
    "cordova-plugin-camera": "4.0.3",
    "cordova-plugin-geolocation": "4.0.1"
}
// BOTTOM OF METADATA
});