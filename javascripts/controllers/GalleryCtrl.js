"use strict";

console.log("loaded GalleryCtrl.js");

// app.controller("GalleryCtrl", function ($scope) {
// 	$scope.photo = [];

// 	let getPhoto = function(){
// 		PhotoFactory.getPhotoList().then(function(fbPhoto){
// 			$scope.photo.fbPhoto;
// 			console.log("getPhoto function");
// 		});
// 	};

// 	// getPhoto();

// });

	// non Firebase data

	app.controller("GalleryCtrl", function ($scope) {
		$scope.photos = [
			{
				id: 0,
				name: "2009 Sisters",
				caption: "An interesting collection of personalities :)",
				url: "http://lndesigns.com/capstone/sisters-2009.jpg"
			},
			{
				id: 1,
				name: "Wayne",
				caption: "Frozen in Time",
				url: "http://lndesigns.com/capstone/wayne-fishing.jpg"
			},
			{
				id: 2,
				name: "1975 Sisters",
				caption: "Some things never change, like Ellen's shoes",
				url: "http://lndesigns.com/capstone/CarolSusanEllen1975.jpg"
			},
			{
				id: 3,
				name: "Tampa kids",
				caption: "Look at our VW bus in the background :)",
				url: "http://lndesigns.com/capstone/tampa-kids.jpg"
			}
		];


	});