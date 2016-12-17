"use strict";

app.controller("UploadCtrl", function ($scope, PhotoFactory) {
    $scope.selectedFile = {};
    $scope.myPhoto = {};
    
    // Only using for testing single photo
    // PhotoFactory.getSinglePhoto("-KYvAg6H_x90lOd2Haim").then(function(singlePhoto){
    //     console.log("singlePhoto", singlePhoto);
    //     $scope.myPhoto = singlePhoto;
    // });

    $scope.savePhoto = function () {
        // Capture the file name from user input
        console.log("clicked uploadPhoto and got $scope.fileInfo:", $scope.selectedFile);
      
        PhotoFactory.addPhoto($scope.selectedFile).then(function(response){
            console.log(response);
        });
    };
});
