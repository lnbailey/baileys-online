"use strict";

console.log("loaded PhotoFactory.js");

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

    return { getPhotoList: getPhotoList };

});