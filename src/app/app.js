angular.module( 'app', [
  'templates-app',
  'templates-common',
  'app.dashboard',
  'app.register',
  'app.login',
  'app.logout',
  'app.account',
  'ui.state',
  'ui.route'
])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/dashboard' );
})

.run( function run ($rootScope, $location) {
    // Need to implement a serverside barrier as well
    $rootScope.$on('$locationChangeStart', function(event, next, current) {
        var route = next.split('/').pop();
        if (!$rootScope.currUser) {
            // User is not logged in, so reroute
            if (route == 'login') {
                // Already going to /login, so no need to redirect
            } else if (route == 'register') {
                // They are permitted to register without logging in
            } else {
                $location.path('/login');
            }
        }
    });
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | app' ;
    }
  });
})

;

