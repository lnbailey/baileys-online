"use strict";

app.factory("PhotoFactory", function($q, $http, FIREBASE_CONFIG) {

    var getPhotoList = function() {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/photos.json`)
                .success(function(response) {
                    let photos = [];
                    Object.keys(response).forEach(function(key) {
                        response[key].id = key;
                        photos.push(response[key]);
                    });
                    resolve(photos);
                    console.log("response:", response);
                })
                .error(function(errorResponse) {
                    reject(errorResponse);
                });
        });
    };

    var deletePhoto = function(photoId) {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/photos/${photoId}.json`)
                .success(function(deleteResponse) {
                    resolve(deleteResponse);
                })
                .error(function(postError) {
                    reject(postError);
                });
        });
    };
    return { getPhotoList: getPhotoList, deletePhoto: deletePhoto };

});