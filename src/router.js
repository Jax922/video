
function stateConfig(app){
  return app.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/");
    $stateProvider
      .state('layout', {
        abstract: true,
        templateUrl: 'partials/layout.html'
      })
      .state('home', {
        parent: 'layout',
        views: {
          'nav': {
            templateUrl: './partials/nav.html',
            controller: 'navCtrl as vm'
          },
          'top-home': {
            templateUrl: './partials/home/top-home.html',
            controller: 'topHomeCtrl as vm'
          },
          'videos-home': {
            templateUrl: './partials/home/videos-home.html',
            controller: 'videosHomeCtrl as vm'
          }
        }
      })
      .state('state2', {
        url: 's2',
        template: '<h1>s2 ui-view</h1>'
      })
  })
}

module.exports = stateConfig;
