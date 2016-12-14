"use strict";

app.controller("UploadCtrl", function ($scope, PhotoFactory) {
    $scope.selectedFile = {};
    $scope.myPhoto = {};
    
    PhotoFactory.getSinglePhoto("-KYvAg6H_x90lOd2Haim").then(function(stuff){
        console.log("STUFF", stuff);
        $scope.myPhoto = stuff;
    });

    $scope.savePhoto = function () {

        // Capture the file name from user input
        console.log("clicked uploadPhoto and got $scope.fileInfo:", $scope.selectedFile);

        // selectedFile.title = "hello";

        PhotoFactory.addPhoto($scope.selectedFile).then(function(response){
            console.log(response);
        });
    };
});
