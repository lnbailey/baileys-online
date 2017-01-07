"use strict";

let isAuth = (AuthFactory) => new Promise((resolve, reject) => {
    if (AuthFactory.isAuthenticated()) {
        resolve();
    } else {
        reject();
    }
});

app.run(function ($rootScope, $location, FIREBASE_CONFIG, AuthFactory) {
    firebase.initializeApp(FIREBASE_CONFIG);
    var storage = firebase.storage();

    $rootScope.$on('$routeChangeStart', function (event, currRoute, prevRoute) {

        let logged = AuthFactory.isAuthenticated();
        let appTo;

        if (currRoute.originalPath) {
            appTo = currRoute.originalPath.indexOf('/auth') !== -1;
        }

        if (!appTo && !logged) {
            event.preventDefault();
            $location.path('/auth');
        }
    });
});

app.config(function ($routeProvider) {
    $routeProvider
        .when('/auth', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl'
        })
        .when('/gallery', {
            templateUrl: 'partials/gallery.html',
            controller: 'GalleryCtrl'
        })
        .when('/edit', {
            templateUrl: 'partials/edit.html',
            controller: 'EditCtrl'
        })
        .when('/galleries', {
            templateUrl: 'partials/galleries.html',
            controller: 'GalleryCtrl'
        })
        // .when('/family', {
        //     templateUrl: 'gallieries/family.html',
        //     controller: 'GalleryCtrl'
        // })
        .when('/search', {
            templateUrl: 'partials/search.html',
            controller: 'SearchCtrl'
        })
        .when('/about', {
            templateUrl: 'partials/about.html',
            controller: 'AboutCtrl'
        })
        .when('/upload', {
            templateUrl: 'partials/upload.html',
            controller: 'UploadCtrl'
        })
        .when('/logout', {
            templateUrl: 'partials/auth.html',
            controller: 'AuthCtrl',
            resolve: { isAuth }
        })
        .otherwise('/auth');
});