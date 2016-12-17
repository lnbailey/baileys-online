"use strict";

app.controller("GalleryCtrl", function ($scope, $routeParams, $location, PhotoFactory) {
    
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