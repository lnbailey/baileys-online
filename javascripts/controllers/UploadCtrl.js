"use strict";

app.controller("UploadCtrl", function ($scope, PhotoFactory) {

    $scope.uploadPhoto = function () {

        // Capture the file name from user input
        var selectedFile = $scope.fileInfo;
        console.log("clicked uploadPhoto and got $scope.fileInfo:", $scope.fileInfo);

        // Create a root reference
        var storageRef = firebase.storage().ref('/images/');

        // Create a reference to 'mountains.jpg'
        var mountainsRef = storageRef.child(selectedFile);

        // Create a reference to 'images/mountains.jpg'
        var mountainImagesRef = storageRef.child('images/' + selectedFile);

        // Base64 formatted string
        var message = 'message';
        mountainImagesRef.putString(message, 'base64').then(function (snapshot) {
            console.log('Uploaded a base64 string!');
        });

    };
});