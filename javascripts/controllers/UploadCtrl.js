"use strict";

app.controller("UploadCtrl", function ($scope, $rootScope, $location, EditPhotoFactory) {
    $scope.selectedFile = {};

    // Only using for testing single photo
    // $scope.myPhoto = {};
    // EditPhotoFactory.getSinglePhoto("KZAvDflEW0QJuwWOfeS").then(function(singlePhoto){
    //     console.log("singlePhoto", singlePhoto);
    //     $scope.myPhoto = singlePhoto;
    // });

    $scope.savePhoto = function () {
        // Capture the file name from user input
        console.log("clicked uploadPhoto and got $scope.fileInfo:", $scope.selectedFile);
        $scope.selectedFile.uid = $rootScope.user.uid;
        EditPhotoFactory.addPhoto($scope.selectedFile).then(function (response) {
            $location.url("/edit");
            console.log(response);
        });
    };
});