"use strict";

console.log("loaded NavCtrl.js");

app.controller("NavCtrl", function($scope) {
    $scope.navItems = [
        {
            name: "Logout",
            url: "#/logout"
        },
        {
            name: "Galleries",
            url: "#/galleries"
        },
        {
            name: "Upload",
            url: "#/upload"
        },
        {
            name: "Search",
            url: "#/search"
        },
        {
            name: "About",
            url: "#/about"
        },
        {
            name: "Home",
            url: "#/gallery"
        }
    ];
});