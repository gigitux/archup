// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('archup', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  // .state('app.search', {
  //   url: '/search',
  //   views: {
  //     'menuContent': {
  //       templateUrl: 'templates/search.html'
  //     }
  //   }
  // })

  .state('app.extra', {
      url: '/extra',
      views: {
        'menuContent': {
          templateUrl: 'templates/extra.html',
          controller: 'Extra'
        }
      }
    })
    .state('app.allpackage', {
      url: '/allpackage',
      views: {
        'menuContent': {
          templateUrl: 'templates/allpackage.html',
          controller: 'Allpackage'
        }
      }
    })

  .state('app.core', {
    url: '/core',
    views: {
      'menuContent': {
        templateUrl: 'templates/core.html',
        controller: 'Core'
      }
    }
  })

  .state('app.community', {
    url: '/community',
    views: {
      'menuContent': {
        templateUrl: 'templates/community.html',
        controller: 'Community'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
        controller: 'Search'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/allpackage');
});
