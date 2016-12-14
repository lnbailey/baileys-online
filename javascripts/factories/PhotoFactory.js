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

        var getSinglePhoto = function(photoId) {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/photos/${photoId}.json`)
                .success(function(response) {
                    resolve(response);
                })
                .error(function(errorResponse) {
                    reject(errorResponse);
                });
        });
    };

    var addPhoto = function(stuffs){
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/photos.json`,
                JSON.stringify({
                    image: stuffs.image,
                    title: stuffs.title,
                    caption: stuffs.caption
                })
            )
            .success(function(deleteResponse) {
                resolve(deleteResponse);
            })
            .error(function(postError) {
                reject(postError);
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
    return { getPhotoList: getPhotoList, deletePhoto: deletePhoto, addPhoto:addPhoto, getSinglePhoto:getSinglePhoto};

});