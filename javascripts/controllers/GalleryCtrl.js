"use strict";

console.log("loaded GalleryCtrl.js");

app.controller("GalleryCtrl", function ($scope, PhotoFactory) {
    $scope.photos = [];

    let getPhotos = function () {
        PhotoFactory.getPhotoList().then(function (fbPhotos) {
            $scope.photos = fbPhotos;
            console.log("getPhotos function");
        });
    };

    getPhotos();

    $scope.deletePhoto = function (photoId) {
        PhotoFactory.deletePhoto(photoId).then(function (response) {
            getPhotos();
            console.log("clicked delete");
        });
    };

});