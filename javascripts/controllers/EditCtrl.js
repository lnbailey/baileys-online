"use strict";

app.controller("EditCtrl", function ($scope, $routeParams, $location, PhotoFactory) {

    // Get photos from Firebase
    $scope.photos = [];

    let getPhotos = function () {
        PhotoFactory.getPhotoList().then(function (fbPhotos) {
            $scope.photos = fbPhotos;
            console.log("getPhotos function");
        });
    };
    getPhotos();

    // Delete photo
    $scope.deletePhoto = function (photoId) {
        PhotoFactory.deletePhoto(photoId).then(function (response) {
            getPhotos();
        });
    };

    // Edit photo
    $scope.editPhoto = function (photoId) {
        PhotoFactory.editPhoto(photoId).then(function (response) {
            getPhotos();
        });
        console.log("clicked editPhoto");
    };

});