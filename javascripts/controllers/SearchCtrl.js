"use strict";

app.controller("SearchCtrl", function ($scope, $routeParams, $location, PhotoFactory) {
    
    console.log("loaded SearchCtrl");
    // Get photos from Firebase
    $scope.photos = [];

    let getPhotos = function () {
        PhotoFactory.getPhotoList().then(function (fbPhotos) {
            $scope.photos = fbPhotos;
            console.log("getPhotos function");
        });
    };
    getPhotos();
});