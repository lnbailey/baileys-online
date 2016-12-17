"use strict";

app.factory("PhotoFactory", function ($q, $http, FIREBASE_CONFIG) {

    var getPhotoList = function () {
        return $q((resolve, reject) => {
            $http.get(`${FIREBASE_CONFIG.databaseURL}/photos.json`)
                .success(function (response) {
                    let photos = [];
                    Object.keys(response).forEach(function (key) {
                        response[key].id = key;
                        photos.push(response[key]);
                    });
                    resolve(photos);
                    console.log("response:", response);
                })
                .error(function (errorResponse) {
                    reject(errorResponse);
                });
        });
    };

    // Only using for testing single photo
    //     var getSinglePhoto = function(photoId) {
    //     return $q((resolve, reject) => {
    //         $http.get(`${FIREBASE_CONFIG.databaseURL}/photos/${photoId}.json`)
    //             .success(function(response) {
    //                 resolve(response);
    //             })
    //             .error(function(errorResponse) {
    //                 reject(errorResponse);
    //             });
    //     });
    // };

    var addPhoto = function (photo) {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/photos.json`,
                JSON.stringify({
                    image: photo.image,
                    title: photo.title,
                    name: photo.name,
                    location: photo.location,
                    event: photo.event,
                    keywords: photo.keywords,
                    date: photo.date,
                    caption: photo.caption,
                    uid: photo.uid
                })
            )
                .success(function (deleteResponse) {
                    resolve(deleteResponse);
                })
                .error(function (postError) {
                    reject(postError);
                });
        });
    };

    var deletePhoto = function (photoId) {
        return $q((resolve, reject) => {
            $http.delete(`${FIREBASE_CONFIG.databaseURL}/photos/${photoId}.json`)
                .success(function (deleteResponse) {
                    resolve(deleteResponse);
                })
                .error(function (postError) {
                    reject(postError);
                });
        });
    };
    
    var editPhoto = function (photo) {
        return $q((resolve, reject) => {
            $http.post(`${FIREBASE_CONFIG.databaseURL}/photos/${photo}.json`,
                JSON.stringify({
                    image: photo.image,
                    title: photo.title,
                    name: photo.name,
                    location: photo.location,
                    event: photo.event,
                    keywords: photo.keywords,
                    date: photo.date,
                    caption: photo.caption,
                    uid: photo.uid
                })
            )
                .success(function (editResponse) {
                    resolve(editResponse);
                })
                .error(function (editError) {
                    reject(editError);
                });
        });
    };

    return { getPhotoList: getPhotoList, addPhoto: addPhoto, deletePhoto: deletePhoto, editPhoto: editPhoto};

});