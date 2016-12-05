"use strict";

console.log("loaded PhotoFactory.js");

// app.factory("PhotoFactory", function ($q, $http, FIREBASE_CONFIG) {

//     var getItemList = function () {
//         return $q((resolve, reject) => {
//             $http.get(`${FIREBASE_CONFIG.databaseURL}/photos.json`)
//                 .success(function (response) {
//                     let photos = [];
//                     Object.keys(response).forEach(function (key) {
//                         response[key].id = key;
//                         photos.push(response[key]);
//                     });
//                     resolve(photos);
//                 })
//                 .error(function (errorResponse) {
//                     reject(errorResponse);
//                 });
//         });
//     };

//     return { getPhotoList: getPhotoList };

// });