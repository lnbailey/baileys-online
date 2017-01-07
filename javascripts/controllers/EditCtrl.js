"use strict";

app.controller("EditCtrl", function ($scope, $routeParams, $rootScope, $location, EditPhotoFactory) {

    // Get photos from Firebase
    $scope.photos = [];

    let getPhotos = function () {
        EditPhotoFactory.getPhotoList($rootScope.user.uid).then(function (fbPhotos) {
            $scope.photos = fbPhotos;
            console.log("getPhotos function");
        });
    };
    getPhotos();

    // Delete photo
    $scope.deletePhoto = function (photoId) {
        EditPhotoFactory.deletePhoto(photoId).then(function (response) {
            getPhotos();
        });
    };

    // Edit photo
    $scope.editThisPhoto = function (photoId) {
        console.log("photoId", photoId);
        EditPhotoFactory.editPhoto(photoId).then(function (response) {
            // getPhotos();
        });
        console.log("clicked editPhoto");
    };

});